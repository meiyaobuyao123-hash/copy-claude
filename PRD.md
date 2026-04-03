# Claude Code v1.0.3 — 开发级产品需求文档 (PRD)

> 本文档基于 `@anthropic-ai/claude-code@1.0.3` npm 包逆向分析，精确到可直接照此开发出功能一致的产品。

---

## 一、产品架构

### 1.1 技术栈

| 层级 | 技术选型 |
|------|----------|
| 运行时 | Node.js >= 18 |
| 语言 | TypeScript -> esbuild 打包成单文件 `cli.js` |
| 终端 UI | React 18 + Ink（终端渲染框架） |
| CLI 框架 | Commander.js |
| 打包工具 | esbuild（输出单 ESM 文件） |
| Schema 校验 | Zod |
| 代码搜索 | 内嵌 ripgrep 二进制（vendor/ripgrep/） |
| 分发方式 | npm 包，`npm install -g @anthropic-ai/claude-code` |
| AI 后端 | Anthropic Messages API (`/v1/messages`) |

### 1.2 入口命令

```
#!/usr/bin/env -S node --no-warnings --enable-source-maps
```

包名: `@anthropic-ai/claude-code`
版本: `1.0.3`
bin 入口: `cli.js`

### 1.3 目录结构（npm 包内）

```
package/
├── cli.js              # 主程序（esbuild 单文件 bundle，7.2MB）
├── package.json
├── LICENSE.md
├── README.md
├── yoga.wasm           # Yoga 布局引擎（Ink 终端布局用）
├── scripts/
│   └── preinstall.js   # 安装前置脚本
└── vendor/
    ├── ripgrep/        # 各平台 rg 二进制
    │   ├── arm64-darwin/rg
    │   ├── arm64-linux/rg
    │   ├── x64-darwin/rg
    │   ├── x64-linux/rg
    │   └── x64-win32/rg.exe
    └── claude-code.vsix           # VS Code 扩展
    └── claude-code-jetbrains-plugin/  # JetBrains 插件 JAR
```

---

## 二、CLI 命令与参数定义

### 2.1 主命令: `claude`

```
claude [prompt] [options]
```

| 参数/选项 | 类型 | 默认值 | 说明 |
|-----------|------|--------|------|
| `[prompt]` | string | 无 | 可选的初始提问 |
| `-c, --cwd <cwd>` | string | 当前目录 | 工作目录 |
| `-d, --debug` | boolean | false | 调试模式 |
| `--verbose` | boolean | false | 详细输出 |
| `-ea, --enable-architect` | boolean | false | 启用 Architect 工具 |
| `-p, --print` | boolean | false | 非交互模式：输出结果后退出 |
| `--dangerously-skip-permissions` | boolean | false | 跳过权限检查（仅 Docker 无网络环境） |
| `-v, --version` | - | - | 显示版本号 |

**行为逻辑**:
- 无 `--print`: 启动交互式 REPL（React/Ink 渲染）
- 有 `--print`: 单次调用 API，输出纯文本到 stdout，退出码 0=成功 1=错误
- 支持从 stdin 读取输入（管道模式）

### 2.2 子命令: `claude config`

```
claude config get <key> [-g|--global] [-c|--cwd <cwd>]
claude config set <key> <value> [-g|--global] [-c|--cwd <cwd>]
claude config remove <key> [-g|--global] [-c|--cwd <cwd>]
claude config list [-g|--global] [-c|--cwd <cwd>]
```

- `--global`: 使用全局配置（用户级）
- 不带 `--global`: 使用项目级配置

### 2.3 子命令: `claude approved-tools`

```
claude approved-tools list
claude approved-tools remove <tool>
```

管理用户已批准"始终允许"的工具列表。

### 2.4 子命令: `claude mcp`

```
claude mcp serve                                    # 以 MCP 服务端模式运行
claude mcp add <name> <command> [args...] [-s scope] [-e env...]  # 添加 stdio MCP 服务
claude mcp remove <name> [-s scope]                 # 移除 MCP 服务
claude mcp list                                     # 列出所有 MCP 服务
claude mcp get <name>                               # 查看某个 MCP 服务详情
```

| 选项 | 说明 |
|------|------|
| `-s, --scope <scope>` | 配置范围: `project` / `global` / `mcprc`，默认 `project` |
| `-e, --env <env...>` | 环境变量，格式 `KEY=value` |

MCP 服务配置数据结构:
```typescript
interface McpServerConfig {
  type: "stdio" | "sse";
  // stdio 类型
  command?: string;
  args?: string[];
  env?: Record<string, string>;
  // sse 类型
  url?: string;
}
```

### 2.5 子命令: `claude doctor`

```
claude doctor
```

健康检查，诊断自动更新器状态。

---

## 三、工具系统（Tool System）

这是核心中的核心。每个工具是一个对象，结构如下:

```typescript
interface Tool {
  name: string;                          // 工具唯一标识
  description(): Promise<string>;        // 给 AI 的工具说明（prompt 注入）
  prompt(): Promise<string>;             // 给 AI 的详细使用说明
  inputSchema: ZodSchema;               // Zod schema，定义输入参数
  userFacingName(): string;             // 给用户显示的名称
  isEnabled(): boolean;                 // 是否启用
  isReadOnly(): boolean;                // 是否只读（影响权限判断）
  checkPermissions(input): Promise<{behavior: "allow"|"ask"|"deny", updatedInput}>;
  call(input): AsyncGenerator<ToolEvent>;  // 执行工具（生成器，支持流式输出）
  renderToolUseMessage(): ReactElement;           // 调用时 UI
  renderToolUseProgressMessage(): ReactElement;   // 执行中 UI
  renderToolUseRejectedMessage(): ReactElement;   // 被拒绝 UI
  renderToolUseErrorMessage(): ReactElement;      // 出错 UI
  renderToolResultMessage(): ReactElement;        // 结果 UI
  mapToolResultToToolResultBlockParam(result, toolUseId): ToolResultBlock;  // 结果 -> API 格式
}
```

### 3.1 BashTool

| 属性 | 值 |
|------|-----|
| name | `"Bash"` |
| isReadOnly | `false` |
| userFacingName | `"Bash"` |

**inputSchema**:
```json
{
  "type": "object",
  "properties": {
    "command": { "type": "string", "description": "The bash command to execute" },
    "timeout": { "type": "number", "description": "Optional timeout in ms, max 600000" },
    "description": { "type": "string", "description": "Clear description in 5-10 words" }
  },
  "required": ["command"]
}
```

**沙箱模式参数** (当平台支持时额外添加):
```json
{
  "sandbox": { "type": "boolean", "description": "Run in sandbox (no writes, no network)" }
}
```

**关键常量**:
```typescript
BASH_DEFAULT_TIMEOUT_MS = 120000   // 2 分钟默认超时
BASH_MAX_TIMEOUT_MS = 600000       // 10 分钟最大超时
BASH_MAX_OUTPUT_LENGTH = 30000     // 输出最大 30KB
```

**沙箱规则**（必须精确实现）:

sandbox=false（需用户确认）的命令:
- npm run *, cargo build/test, make/ninja/meson, pytest, jest, gh
- touch, mkdir, rm, mv, cp
- nano, vim, 写入重定向 >
- npm install, apt-get, brew
- git add, git commit, git push
- ping, curl, ssh, scp

sandbox=true（自动执行）的命令:
- ls, cat, head, tail, rg, find, du, df, ps
- file, stat, wc, diff, md5sum
- git status, git log, git diff, git show, git branch
- npm list, pip list, gem list, cargo tree
- echo, pwd, whoami, which, type, env, printenv
- node --version, python --version
- man, help, --help, -h

**核心规则**: 如果 sandbox=true 执行失败且错误是 "Permission denied" / "Unknown host" / "Operation not permitted"，必须用 sandbox=false 重试。

**Shell 快照系统**:
```typescript
// 创建隔离 shell 环境执行命令
function createShellSnapshot() {
  const tmpDir = `${os.tmpdir()}/claude-shell-snapshot-${randomHex}`;
  const cwdFile = `${os.tmpdir()}/claude-${randomHex}-cwd`;
  // 优先使用 zsh，回退到 bash
  // 检查路径: /bin, /usr/bin, /usr/local/bin, /opt/homebrew/bin
  // 超时: 10 秒
  // 环境变量: 继承用户环境（除非 CLAUDE_CODE_DONT_INHERIT_ENV=true）
}
```

### 3.2 ReadTool

| 属性 | 值 |
|------|-----|
| name | `"Read"` |
| isReadOnly | `true` |
| checkPermissions | 始终 `{behavior: "allow"}` |

**inputSchema**:
```json
{
  "type": "object",
  "properties": {
    "file_path": { "type": "string", "description": "Absolute path to the file to read" },
    "offset": { "type": "number", "description": "Line number to start reading from" },
    "limit": { "type": "number", "description": "Number of lines to read" }
  },
  "required": ["file_path"]
}
```

**行为**:
- 默认读取前 2000 行
- 输出格式: 带行号的 `cat -n` 格式
- 支持读取图片文件（返回多模态内容）
- 支持读取 PDF 文件（大 PDF 需要指定页码范围，每次最多 20 页）
- 支持读取 Jupyter Notebook（.ipynb）文件
- 读取后将文件路径 + 内容 + mtime 存入 `readFileState`

### 3.3 WriteTool

| 属性 | 值 |
|------|-----|
| name | `"Write"` |
| isReadOnly | `false` |
| userFacingName | `"Write"` |

**inputSchema**:
```json
{
  "type": "object",
  "properties": {
    "file_path": { "type": "string", "description": "Absolute path to file" },
    "content": { "type": "string", "description": "Content to write" }
  },
  "required": ["file_path", "content"]
}
```

**validateInput 规则**:
1. 文件路径不能在忽略目录中（`Nx()` 检查）
2. 如果文件已存在，必须先用 ReadTool 读过（检查 `readFileState`）
3. 如果文件在上次读取后被外部修改（mtime 变了），警告 AI

**checkPermissions**: `{behavior: "ask"}` — 需要用户确认

### 3.4 EditTool

| 属性 | 值 |
|------|-----|
| name | `"Edit"` |
| isReadOnly | `false` |
| userFacingName | `"Update"` |

**inputSchema**:
```json
{
  "type": "object",
  "properties": {
    "file_path": { "type": "string", "description": "Absolute path to file" },
    "old_string": { "type": "string", "description": "Text to replace (empty string = create)" },
    "new_string": { "type": "string", "description": "Replacement text" },
    "expected_replacements": { "type": "number", "default": 1, "description": "Expected match count" }
  },
  "required": ["file_path", "old_string", "new_string"]
}
```

**validateInput 规则**:
1. 文件必须先被 ReadTool 读取过
2. `old_string` 必须在文件中存在且匹配次数等于 `expected_replacements`
3. 检测外部修改（mtime）
4. `old_string` 为空字符串时表示创建新文件

**checkPermissions**: `{behavior: "ask"}`

### 3.5 GlobTool

| 属性 | 值 |
|------|-----|
| name | `"Glob"` |
| isReadOnly | `true` |
| checkPermissions | 始终 `{behavior: "allow"}` |

**inputSchema**:
```json
{
  "type": "object",
  "properties": {
    "pattern": { "type": "string", "description": "Glob pattern, e.g. **/*.js" },
    "path": { "type": "string", "description": "Directory to search in, default cwd" }
  },
  "required": ["pattern"]
}
```

**prompt 给 AI 的说明**:
```
- Fast file pattern matching tool that works with any codebase size
- Supports glob patterns like "**/*.js" or "src/**/*.ts"
- Returns matching file paths sorted by modification time
- Use this tool when you need to find files by name patterns
```

### 3.6 GrepTool

| 属性 | 值 |
|------|-----|
| name | `"Grep"` |
| isReadOnly | `true` |
| checkPermissions | 始终 `{behavior: "allow"}` |

**inputSchema**:
```json
{
  "type": "object",
  "properties": {
    "pattern": { "type": "string", "description": "Regex pattern to search for" },
    "path": { "type": "string", "description": "Directory to search in" },
    "include": { "type": "string", "description": "File glob filter, e.g. *.ts" }
  },
  "required": ["pattern"]
}
```

**prompt 给 AI 的说明**:
```
- Fast content search tool that works with any codebase size
- Searches file contents using regular expressions
- Supports full regex syntax (eg. "log.*Error", "function\\s+\\w+", etc.)
- Filter files by pattern with the include parameter (eg. "*.js", "*.{ts,tsx}")
- Returns file paths with at least one match sorted by modification time
```

底层实现: 调用 vendor 目录中的 ripgrep 二进制。

### 3.7 LSTool

| 属性 | 值 |
|------|-----|
| name | `"LS"` |
| isReadOnly | `true` |

**inputSchema**:
```json
{
  "type": "object",
  "properties": {
    "path": { "type": "string", "description": "Absolute path to list" },
    "ignore": { "type": "array", "items": {"type": "string"}, "description": "Glob patterns to ignore" }
  },
  "required": ["path"]
}
```

### 3.8 TodoWriteTool

| 属性 | 值 |
|------|-----|
| name | `"TodoWrite"` |
| isReadOnly | `false` |
| checkPermissions | 始终 `{behavior: "allow"}`（无需确认） |

**inputSchema**:
```json
{
  "type": "object",
  "properties": {
    "todos": {
      "type": "array",
      "description": "The updated todo list",
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "content": { "type": "string" },
          "status": { "type": "string", "enum": ["pending", "in_progress", "completed", "cancelled"] },
          "priority": { "type": "string", "enum": ["high", "medium", "low"] }
        }
      }
    }
  },
  "required": ["todos"]
}
```

**mapToolResultToToolResultBlockParam 返回文本**:
```
"Todos have been modified successfully. Ensure that you continue to use the todo list to track your progress. Please proceed with the current tasks if applicable"
```

### 3.9 TodoReadTool

| 属性 | 值 |
|------|-----|
| name | `"TodoRead"` |
| isReadOnly | `true` |
| checkPermissions | 始终 `{behavior: "allow"}` |

**inputSchema**: 空对象（无参数）

**mapToolResultToToolResultBlockParam 返回文本**:
```
"Remember to continue to use update and read from the todo list as you make progress. Here is the current list: {JSON}"
```

### 3.10 NotebookEditTool

| 属性 | 值 |
|------|-----|
| name | `"NotebookEdit"` |
| isReadOnly | `false` |

**inputSchema**:
```json
{
  "type": "object",
  "properties": {
    "notebook_path": { "type": "string", "description": "Absolute path to .ipynb file" },
    "cell_number": { "type": "number", "description": "0-indexed cell number" },
    "new_source": { "type": "string", "description": "New cell content" },
    "cell_type": { "type": "string", "enum": ["code", "markdown"] },
    "edit_mode": { "type": "string", "enum": ["replace", "insert", "delete"] }
  },
  "required": ["notebook_path", "cell_number", "new_source"]
}
```

---

## 四、System Prompt（系统提示词）

这是注入给 AI 模型的完整系统提示词，直接决定 AI 的行为。必须精确复现。

### 4.1 身份定义

```
You are an interactive CLI tool that helps users with software engineering tasks.
```

### 4.2 安全规则

```
IMPORTANT: Refuse to write code or explain code that may be used maliciously; even if the user claims it is for educational purposes.
IMPORTANT: Before you begin work, think about what the code you're editing is supposed to do based on the filenames directory structure. If it seems malicious, refuse to work on it.
IMPORTANT: You must NEVER generate or guess URLs unless you are confident that the URLs are for helping the user with programming.
```

### 4.3 语气规则（CRITICAL — 决定产品体感）

```
- Be concise, direct, and to the point
- Minimize output tokens as much as possible
- Keep responses short, fewer than 4 lines unless asked for detail
- NO unnecessary preamble or postamble
- One word answers are best
- NO introductions, conclusions, explanations
- NO "The answer is..." / "Here is..." / "Based on..." / "Here is what I will do next..."
```

**示例（必须体现的风格）**:
```
user: 2 + 2
assistant: 4

user: what command should I run to list files?
assistant: ls

user: How many golf balls fit inside a jetta?
assistant: 150000
```

### 4.4 主动性规则

```
- Only be proactive when user asks you to do something
- If user asks HOW to approach something, answer first, don't jump to actions
- Do NOT add code explanation summary unless requested
```

### 4.5 代码规范规则

```
- Mimic code style, use existing libraries and utilities, follow existing patterns
- NEVER assume a library is available — check package.json / cargo.toml first
- When creating new components, look at existing ones first
- When editing code, look at surrounding context first
- Follow security best practices. Never expose secrets/keys.
- IMPORTANT: DO NOT ADD ANY COMMENTS unless asked
```

### 4.6 Git Commit 流程（写入 system prompt）

完整的 commit 规范直接写在 prompt 里:

1. **并行执行**: `git status` + `git diff` + `git log`
2. **分析阶段**: 用 `<commit_analysis>` 标签包裹分析过程
3. **并行执行**: `git add` + `git commit` + `git status`
4. commit 消息用 HEREDOC 格式
5. 尾部附加: `Co-Authored-By: Claude <noreply@anthropic.com>`
6. 不允许: `git config` 修改、`-i` 交互式命令、push 到远程

### 4.7 PR 创建流程（写入 system prompt）

1. **并行执行**: `git status` + `git diff` + `git log` + `git diff main...HEAD`
2. **分析阶段**: 用 `<pr_analysis>` 标签包裹
3. **并行执行**: 创建分支 + push + `gh pr create`
4. PR body 格式:
```markdown
## Summary
<1-3 bullet points>

## Test plan
[Checklist...]
```

---

## 五、权限系统

### 5.1 权限检查流程

```
工具被调用 → checkPermissions(input) → 返回 {behavior, updatedInput}
  ├── "allow" → 直接执行
  ├── "ask"  → 显示确认对话框 → 用户选择 [允许/拒绝/始终允许]
  └── "deny" → 拒绝执行，显示错误
```

### 5.2 各工具权限

| 工具 | 默认权限 | 说明 |
|------|----------|------|
| ReadTool | allow | 只读，无风险 |
| GlobTool | allow | 只读 |
| GrepTool | allow | 只读 |
| LSTool | allow | 只读 |
| TodoReadTool | allow | 只读 |
| TodoWriteTool | allow | 只修改内存数据 |
| WriteTool | ask | 写文件，需确认 |
| EditTool | ask | 改文件，需确认 |
| NotebookEditTool | ask | 改文件，需确认 |
| BashTool (sandbox=true) | allow | 沙箱模式，受限执行 |
| BashTool (sandbox=false) | ask | 需确认 |

### 5.3 文件状态追踪 (readFileState)

```typescript
interface FileState {
  content: string;       // 文件内容
  timestamp: number;     // mtime 时间戳
}

// 全局 Map
const readFileState: Map<string, FileState> = new Map();

// ReadTool 读取文件后更新
// WriteTool/EditTool 修改文件前检查:
//   1. 文件是否在 readFileState 中（先读后改）
//   2. 当前 mtime 是否等于记录的 timestamp（外部修改检测）
```

### 5.4 已批准工具列表 (approved-tools)

用户可以对某个工具选择"始终允许"，存储在本地配置中:
```typescript
// 存储位置: ~/.claude/approved-tools 或项目级 .claude/approved-tools
// 格式: 工具名列表
// CLI 管理: claude approved-tools list / remove <tool>
```

---

## 六、对话系统

### 6.1 API 调用

**端点**: `POST /v1/messages?beta=true`

**请求格式**:
```typescript
{
  model: string,
  max_tokens: number,
  system: string,           // 系统提示词（第四章内容）
  messages: Message[],       // 对话历史
  tools: ToolDefinition[],   // 工具列表（第三章定义）
  stream: true,              // 始终流式
  metadata: {
    // 请求元数据
  }
}
```

**工具定义发送给 API 的格式**:
```typescript
interface ToolDefinition {
  name: string;
  description: string;
  input_schema: {
    type: "object";
    properties: Record<string, JsonSchema>;
    required?: string[];
  };
}
```

### 6.2 流式事件处理

事件类型及顺序:
```
message_start        → 消息开始
content_block_start  → 内容块开始（text / tool_use / thinking）
content_block_delta  → 内容增量更新
  ├── text_delta          → 文本增量
  ├── input_json_delta    → 工具输入 JSON 增量
  ├── thinking_delta      → 思考过程增量
  ├── citation_delta      → 引用增量
  └── signature_delta     → 签名增量
content_block_stop   → 内容块结束
message_stop         → 消息结束
```

**停止原因 (stop_reason)**:
- `end_turn` — AI 主动结束
- `max_tokens` — 达到 token 上限
- `stop_sequence` — 命中停止序列
- `tool_use` — AI 需要调用工具

### 6.3 对话循环核心逻辑

```
while (true) {
  1. 发送 messages + tools 到 API（流式）
  2. 接收流式响应，实时渲染文本
  3. 检查 stop_reason:
     - "end_turn" → 等待用户输入
     - "tool_use" → 提取工具调用:
       a. 解析 tool_use block 中的 name 和 input
       b. 查找对应 Tool 对象
       c. 调用 checkPermissions(input)
       d. 如果 "ask" → 显示确认 UI → 等待用户选择
       e. 如果允许 → 执行 tool.call(input)
       f. 将结果封装为 tool_result 追加到 messages
       g. 回到步骤 1 继续对话
  4. 用户输入新消息 → 追加到 messages → 回到步骤 1
}
```

### 6.4 Token 计数

**端点**: `POST /v1/messages/count_tokens?beta=true`

用于在发送前估算 token 用量，决定是否需要压缩上下文。

### 6.5 上下文压缩 (Compact)

当对话 token 接近模型上下文窗口限制时:
1. 手动触发: 用户输入 `/compact`
2. 自动触发: token 用量接近上限
3. 压缩逻辑: 将早期对话替换为 AI 生成的摘要，保留关键上下文

---

## 七、MCP 协议实现

### 7.1 协议版本

```typescript
const LATEST_PROTOCOL_VERSION = "2025-03-26";
const SUPPORTED_PROTOCOL_VERSIONS = ["2025-03-26", "2024-11-05", "2024-10-07"];
const JSONRPC_VERSION = "2.0";
```

### 7.2 消息类型

基于 JSON-RPC 2.0:

```typescript
// 请求
{ jsonrpc: "2.0", id: number|string, method: string, params?: object }

// 响应
{ jsonrpc: "2.0", id: number|string, result: object }

// 错误
{ jsonrpc: "2.0", id: number|string, error: { code: number, message: string, data?: any } }

// 通知（无 id，无需响应）
{ jsonrpc: "2.0", method: string, params?: object }
```

### 7.3 错误码

```typescript
enum ErrorCode {
  ConnectionClosed = -32000,
  RequestTimeout   = -32001,
  ParseError       = -32700,
  InvalidRequest   = -32600,
  MethodNotFound   = -32601,
  InvalidParams    = -32602,
  InternalError    = -32603,
}
```

### 7.4 初始化握手

```
Client → Server: initialize { protocolVersion, capabilities, clientInfo }
Server → Client: { protocolVersion, capabilities, serverInfo, instructions? }
Client → Server: notifications/initialized
```

**客户端能力**:
```typescript
{
  experimental?: {},
  sampling?: {},      // 支持 createMessage
  roots?: {
    listChanged?: boolean
  }
}
```

**服务端能力**:
```typescript
{
  experimental?: {},
  logging?: {},
  completions?: {},
  prompts?: { listChanged?: boolean },
  resources?: { subscribe?: boolean, listChanged?: boolean },
  tools?: { listChanged?: boolean }
}
```

### 7.5 MCP 工具 Schema

```typescript
{
  name: string,
  description?: string,
  inputSchema: {
    type: "object",
    properties?: Record<string, JsonSchema>
  },
  annotations?: {
    title?: string,
    readOnlyHint?: boolean,
    destructiveHint?: boolean,
    idempotentHint?: boolean,
    openWorldHint?: boolean
  }
}
```

### 7.6 传输方式

- **stdio**: 子进程，通过 stdin/stdout 通信
- **SSE**: HTTP Server-Sent Events

### 7.7 MCP 客户端方法

```typescript
class McpClient {
  ping()
  complete(params)
  setLoggingLevel(level)
  getPrompt(params)
  listPrompts(params)
  listResources(params)
  readResource(params)
  subscribeResource(params)
  unsubscribeResource(params)
  callTool(params)
  listTools(params)
  sendRootsListChanged()
}
```

默认请求超时: 60000ms

---

## 八、认证系统

### 8.1 认证方式

| 方式 | 环境变量/配置 | 说明 |
|------|---------------|------|
| API Key | `ANTHROPIC_API_KEY` | 直接 API 密钥 |
| SSO | AWS SSO 集成 | 企业级 |
| OAuth | 浏览器跳转 | 通用 |
| AWS Cognito | `loadCognitoIdentity` | AWS 身份 |

### 8.2 认证存储

认证信息存储在 `~/.claude/` 目录下（具体文件名从代码中未完全提取）。

---

## 九、配置系统

### 9.1 配置层级

```
项目级: .claude/ 目录 (最高优先级)
   ↓
全局级: ~/.claude/ 目录
   ↓
默认值: 程序内置
```

### 9.2 项目级指令文件: CLAUDE.md

- 位置: 项目根目录 `CLAUDE.md`
- 作用: 内容作为系统提示词的一部分自动注入
- 格式: Markdown 自由格式

---

## 十、终端 UI 系统

### 10.1 技术栈

- **React 18**: 组件化 UI
- **Ink**: React 终端渲染器（将 React 组件渲染到终端）
- **Yoga (WASM)**: CSS Flexbox 布局引擎
- **组件**: `<Box>`, `<Text>`, `<Newline>` 等 Ink 原生组件

### 10.2 终端检测

```typescript
// 支持的终端
const terminals = {
  "vscode": "VS Code",
  "cursor": "Cursor",
  "windsurf": "Windsurf",
  "pycharm": "PyCharm",
  "intellij": "IntelliJ IDEA",
  "webstorm": "WebStorm",
  // ... 其他 JetBrains IDE
};

// Unicode 支持检测
function isUnicodeSupported(): boolean {
  // 检查 TERM, TERM_PROGRAM, WT_SESSION 等环境变量
}
```

### 10.3 UI 组件列表

核心组件:
- 消息气泡渲染（用户消息 / AI 消息）
- 工具调用确认对话框
- Todo 列表展示
- 加载动画（spinner）
- Markdown 渲染
- 代码块 + 语法高亮
- 错误展示
- 进度指示器

### 10.4 键盘快捷键

```typescript
// 通过 useInput hook 处理键盘输入
{
  upArrow, downArrow, leftArrow, rightArrow,
  pageDown, pageUp, home, end,
  return, escape,
  ctrl, shift, meta, fn,
  tab, backspace, delete
}
```

---

## 十一、IDE 扩展集成

### 11.1 VS Code 扩展

- 扩展 ID: `anthropic.claude-code`
- 分发: 包内 `vendor/claude-code.vsix`
- 安装: 首次运行时自动安装 (`code --install-extension`)

### 11.2 JetBrains 插件

- 分发: 包内 `vendor/claude-code-jetbrains-plugin/`
- 支持: PyCharm, IntelliJ, WebStorm, PhpStorm, RubyMine, CLion, GoLand, Rider, DataGrip, Android Studio 等

### 11.3 IDE 连接

- 通过 SSE 或 WebSocket 连接到 IDE
- 端口发现: 读取临时文件中的端口信息
- 健康检查: TCP 端口检测 + PID 检测

---

## 十二、遥测系统

### 12.1 事件追踪函数

```typescript
function trackEvent(eventName: string, properties: Record<string, string>): void
```

### 12.2 关键事件

| 事件名 | 触发时机 | 属性 |
|--------|----------|------|
| `tengu_init` | 启动 | entrypoint, hasInitialPrompt, hasStdin, enableArchitect, verbose, debug, print |
| `tengu_approved_tool_remove` | 移除已批准工具 | tool, success |
| `tengu_mcp_start` | MCP 服务启动 | providedCwd |
| `tengu_mcp_add` | 添加 MCP 服务 | name, type, scope |
| `tengu_mcp_delete` | 删除 MCP 服务 | name, scope |
| `tengu_mcp_list` | 列出 MCP 服务 | - |
| `tengu_mcp_get` | 查看 MCP 服务 | name |
| `tengu_doctor_command` | 运行 doctor | - |
| `tengu_ext_installed` | IDE 扩展安装 | - |
| `tengu_ext_install_error` | IDE 扩展安装失败 | - |
| `shell_snapshot_created` | Shell 快照创建 | snapshot_size |
| `shell_snapshot_failed` | Shell 快照失败 | - |
| `tengu_binary_feedback_display_decision` | 反馈显示 | decision, reason, messageIds |

---

## 十三、错误处理

### 13.1 API 错误映射

| HTTP 状态码 | 处理 |
|-------------|------|
| 429 | 速率限制，自动重试（指数退避） |
| 502, 503, 504 | 服务不可用，自动重试 |
| 529 | 过载，自动重试 |
| 401 | 认证失败 |
| 403 | 权限不足 |

### 13.2 重试策略

指数退避重试，带最大重试次数限制。

---

## 十四、环境变量

| 变量名 | 说明 |
|--------|------|
| `ANTHROPIC_API_KEY` | API 密钥 |
| `BASH_MAX_OUTPUT_LENGTH` | Bash 输出最大长度（默认 30000） |
| `BASH_DEFAULT_TIMEOUT_MS` | Bash 默认超时（默认 120000） |
| `BASH_MAX_TIMEOUT_MS` | Bash 最大超时（默认 600000） |
| `CLAUDE_CODE_DONT_INHERIT_ENV` | 不继承用户环境变量 |
| `CLAUDE_CODE_SSE_PORT` | SSE 端口 |
| `FORCE_CODE_TERMINAL` | 强制识别为 IDE 终端 |
| `GIT_EDITOR` | Git 编辑器（设为 "true" 跳过） |

---

## 十五、关键文件路径

| 路径 | 用途 |
|------|------|
| `~/.claude/` | 全局配置目录 |
| `.claude/` | 项目级配置目录 |
| `CLAUDE.md` | 项目级 AI 指令文件 |
| `~/.anthropic/claude-code/vendor-temp/` | 临时 vendor 文件目录 |
| `${tmpdir}/claude-shell-snapshot-*` | Shell 快照临时文件 |
| `${tmpdir}/claude-*-cwd` | 工作目录临时文件 |
