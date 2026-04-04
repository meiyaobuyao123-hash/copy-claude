# Claude Code v2.1.88 — 开发规格文档

> 基于泄露源码（1902个文件/51万行TypeScript）提取的完整技术规格。
> 目标：工程团队照此文档可以实现功能等价的产品。
> 配套文档：`PRD_产品设计分析.md`（产品经理版本，讲设计决策和why）

---

## 1. 技术架构

### 1.1 技术栈

| 层 | 选型 | 版本/说明 |
|---|------|----------|
| 运行时 | Node.js / Bun | >= 18 |
| 语言 | TypeScript | strict mode, Zod schema 校验 |
| 终端 UI | React 18 + Ink | 组件化终端渲染 |
| 布局引擎 | Yoga (WASM) | CSS Flexbox |
| CLI 框架 | Commander.js | 命令/参数解析 |
| 代码搜索 | ripgrep | 内嵌各平台二进制 |
| AI 后端 | Anthropic Messages API | `/v1/messages`, stream 模式 |
| 插件协议 | MCP (Model Context Protocol) | JSON-RPC 2.0 |
| 认证 | OAuth 2.0 + PKCE | Keychain 存储(macOS) |
| 打包 | esbuild | 单文件 ESM bundle |
| 分发 | npm | `@anthropic-ai/claude-code` |

### 1.2 源码模块结构

```
src/
├── tools/          # 40+ 工具实现（AI 的能力）
├── commands/       # 103+ 斜杠命令
├── components/     # 146 个 React/Ink UI 组件
├── hooks/          # 87 个自定义 React Hook
├── services/       # 核心服务
│   ├── mcp/        # MCP 客户端（25+ 文件）
│   ├── oauth/      # OAuth 认证
│   ├── compact/    # 上下文压缩
│   └── api/        # Anthropic API 客户端
├── constants/      # 常量（23 个子目录）
├── utils/          # 331 个工具函数
├── coordinator/    # 多智能体协调器
├── bridge/         # IDE 桥接
├── tasks/          # 7 种后台任务
├── memdir/         # 记忆系统
├── skills/         # 技能加载
├── plugins/        # 插件系统
├── voice/          # 语音输入
├── vim/            # Vim 模式
├── state/          # 全局状态 (AppState)
├── screens/        # UI 页面
├── ink/            # 终端渲染底层
├── keybindings/    # 快捷键
├── context/        # React Context
├── schemas/        # JSON Schema
├── types/          # 类型定义
├── remote/         # 远程执行
├── buddy/          # 队友
├── migrations/     # 迁移脚本
├── bootstrap/      # 启动初始化
├── entrypoints/    # SDK/CLI 入口
├── query/          # 查询系统
├── assistant/      # 会话历史
├── server/         # 服务端
├── upstreamproxy/  # 代理
└── cli/            # CLI 入口
```

---

## 2. CLI 完整参数定义

### 2.1 主命令: `claude [prompt] [options]`

**核心参数:**

| 参数 | 类型 | 默认 | 说明 |
|------|------|------|------|
| `[prompt]` | string | - | 初始提问 |
| `-p, --print` | bool | false | 非交互模式，输出后退出 |
| `-c, --continue` | bool | false | 继续最近会话 |
| `-r, --resume [id]` | string | - | 恢复指定会话 |
| `-n, --name <name>` | string | - | 会话名称 |
| `--model <model>` | string | - | 模型(sonnet/opus/haiku) |
| `--effort <level>` | enum | - | low/medium/high/max |
| `--max-turns <n>` | number | - | 最大对话轮数(print模式) |
| `--max-budget-usd <n>` | number | - | 最大花费(print模式) |
| `-v, --version` | - | - | 版本号 |

**调试参数:**

| 参数 | 类型 | 默认 |
|------|------|------|
| `-d, --debug [filter]` | string/bool | false |
| `--verbose` | bool | false |
| `--mcp-debug` | bool | false |
| `--debug-file <path>` | string | - |
| `-d2e, --debug-to-stderr` | bool | false |

**输出格式(print模式):**

| 参数 | 类型 | 默认 |
|------|------|------|
| `--output-format` | "text"\|"json"\|"stream-json" | "text" |
| `--input-format` | "text"\|"stream-json" | "text" |
| `--json-schema <schema>` | string | - |
| `--include-hook-events` | bool | false |
| `--include-partial-messages` | bool | false |

**系统提示词:**

| 参数 | 类型 | 默认 |
|------|------|------|
| `--system-prompt <text>` | string | - |
| `--append-system-prompt <text>` | string | - |
| `--system-prompt-file <path>` | string | - |

**权限与工具:**

| 参数 | 类型 | 默认 |
|------|------|------|
| `--permission-mode <mode>` | string | "default" |
| `--tools <tools...>` | string[] | 默认列表 |
| `--allowedTools <tools...>` | string[] | - |
| `--disallowedTools <tools...>` | string[] | - |
| `--dangerously-skip-permissions` | bool | false |

**MCP 与扩展:**

| 参数 | 类型 | 默认 |
|------|------|------|
| `--mcp-config <configs...>` | string[] | - |
| `--strict-mcp-config` | bool | false |
| `--add-dir <dirs...>` | string[] | - |
| `--plugin-dir <path>` | string | - |
| `--ide` | bool | false |
| `--chrome` | bool | - |

**会话管理:**

| 参数 | 类型 | 默认 |
|------|------|------|
| `--session-id <uuid>` | string | - |
| `--fork-session` | bool | false |
| `--from-pr [value]` | string | - |
| `--thinking <mode>` | "enabled"\|"adaptive"\|"disabled" | - |
| `--fallback-model <model>` | string | - |
| `--agent <agent>` | string | - |
| `--betas <betas...>` | string[] | - |
| `--bare` | bool | false |

### 2.2 子命令

```
claude mcp serve [--debug] [--verbose]
claude mcp add-json <name> <json> [--scope <scope>] [--client-secret]
claude mcp remove <name> [--scope <scope>]
claude mcp add-from-claude-desktop [--scope <scope>]

claude auth login [--email] [--sso] [--console] [--claudeai]
claude auth status [--json] [--text]

claude plugin list [--json] [--available]
claude plugin install <plugin> [-s scope]
claude plugin uninstall <plugin> [-s scope] [--keep-data]
claude plugin enable <plugin> [-s scope]
claude plugin disable [plugin] [-a] [-s scope]
claude plugin update <plugin> [-s scope]

claude server [--port] [--host] [--auth-token] [--unix] [--workspace] [--idle-timeout] [--max-sessions]
claude ssh <host> [dir] [--permission-mode] [--local]

claude task create <subject> [-d description] [-l list]
claude task list [-l list] [--pending] [--json]
claude task get <id> [-l list]
claude task update <id> [-s status] [--subject] [-d description] [--owner]

claude agents [--setting-sources]
claude log [number|sessionId]
claude export <source> <outputFile>
claude doctor
claude completion <shell> [--output]
```

---

## 3. 工具系统（Tool System）

### 3.1 工具通用接口

```typescript
interface ToolDef {
  name: string
  description(): Promise<string>      // 给 AI 看的说明
  prompt(): Promise<string>            // 给 AI 看的详细用法
  inputSchema: ZodSchema              // 输入参数校验(Zod)
  userFacingName(): string            // 给用户看的名称
  isEnabled(): boolean
  isReadOnly(): boolean
  isConcurrencySafe(): boolean        // 能否并发调用
  shouldDefer?: boolean               // 是否延迟加载
  maxResultSizeChars?: number         // 输出截断上限
  strict?: boolean                    // 严格schema校验

  checkPermissions(input): Promise<PermissionDecision>
  validateInput(input): ValidationResult
  call(input): AsyncGenerator<ToolEvent>
  renderToolUseMessage(): ReactElement
  renderToolResultMessage(): ReactElement
  mapToolResultToToolResultBlockParam(result, id): ToolResultBlock
}
```

### 3.2 工具清单与Schema

#### FileReadTool
```
name: "Read"
isReadOnly: true
permission: always allow
input: {
  file_path: string (required) - 绝对路径
  offset: number (optional) - 起始行号
  limit: number (optional) - 读取行数
  pages: string (optional) - PDF页码范围如"1-5"
}
output: { content, lineCount, totalLines }
limits: 默认 10000 token
features: 支持文本/图片/PDF(max20页)/Jupyter Notebook
side-effect: 存入 readFileState Map<path, {content, mtime}>
```

#### FileWriteTool
```
name: "Write"
isReadOnly: false
permission: ask (需用户确认)
input: {
  file_path: string (required) - 绝对路径
  content: string (required) - 写入内容
}
output: { type: 'create'|'update', filePath, content, structuredPatch, originalFile, gitDiff? }
validation:
  1. 路径不在忽略目录中
  2. 覆盖已有文件时必须先 Read 过
  3. 检测 mtime 是否被外部修改
side-effect: LSP 通知, 文件历史追踪, 技能发现
```

#### FileEditTool
```
name: "Edit"
isReadOnly: false
permission: ask
input: {
  file_path: string (required)
  old_string: string (required) - 要替换的文本
  new_string: string (required) - 替换为
  replace_all: boolean (optional, default false)
}
output: { filePath, oldString, newString, originalFile, structuredPatch, replaceAll, gitDiff? }
validation:
  1. 文件必须在 readFileState 中(先读后改)
  2. old_string 必须在文件中存在
  3. 非 replace_all 时匹配必须唯一
  4. mtime 检测
limits: 最大文件 1 GiB
features: 引号规范化, LSP 通知
```

#### GlobTool
```
name: "Glob"
isReadOnly: true
permission: always allow
input: {
  pattern: string (required) - glob模式如 "**/*.ts"
  path: string (optional) - 搜索目录,默认cwd
}
output: { durationMs, numFiles, filenames: string[], truncated: boolean }
limits: 最多返回 100 个文件
sorting: 按修改时间排序
```

#### GrepTool
```
name: "Grep"
isReadOnly: true
permission: always allow
input: {
  pattern: string (required) - 正则表达式
  path: string (optional) - 搜索目录
  glob: string (optional) - 文件过滤如 "*.ts"
  output_mode: "content"|"files_with_matches"|"count" (default: "files_with_matches")
  -B: number (optional) - 匹配前N行
  -A: number (optional) - 匹配后N行
  -C: number (optional) - 上下文N行
  -n: boolean (default true) - 显示行号
  -i: boolean (optional) - 忽略大小写
  type: string (optional) - 文件类型如 "js"
  head_limit: number (default 250) - 限制输出条数
  offset: number (optional) - 跳过前N条
  multiline: boolean (optional) - 多行模式
}
output: { mode, numFiles, filenames, content?, numLines?, numMatches?, appliedLimit?, appliedOffset? }
limits: 结果最大 20000 字符
backend: ripgrep 二进制
```

#### BashTool
```
name: "Bash"
isReadOnly: depends on command
permission: sandbox=true → allow, sandbox=false → ask
input: {
  command: string (required)
  timeout: number (optional, default 120000, max 600000)
  run_in_background: boolean (optional)
  description: string (optional) - 5-10词命令描述
}
output: { command, exitCode, stdout, stderr, durationMs, signalCode?, killed?, backgroundTaskId? }
constants:
  BASH_DEFAULT_TIMEOUT_MS = 120000
  BASH_MAX_TIMEOUT_MS = 600000
  BASH_MAX_OUTPUT_LENGTH = 30000
sandbox_true_commands: ls, cat, head, tail, rg, find, du, df, ps, file, stat, wc, diff, md5sum, git status/log/diff/show/branch, npm list, pip list, echo, pwd, whoami, which, env, --version, --help
sandbox_false_commands: npm run/install, cargo build/test, make, pytest, jest, gh, touch, mkdir, rm, mv, cp, git add/commit/push, curl, ssh, scp
auto_background: 15-120秒无输出自动转后台
```

#### WebFetchTool
```
name: "WebFetch"
isReadOnly: true
permission: allow (预批准域名) / ask (其他)
input: {
  url: string (required) - 完整URL
  prompt: string (required) - 提取什么信息
}
output: { bytes, code, codeText, result, durationMs, url }
limits: 结果最大 100000 字符
features: HTML→Markdown转换, 小模型处理内容, 15分钟缓存
restriction: 认证URL会失败
```

#### WebSearchTool
```
name: "WebSearch"
isReadOnly: true
permission: allow
input: {
  query: string (required, min 2 chars)
  allowed_domains: string[] (optional)
  blocked_domains: string[] (optional)
}
output: { query, results, durationSeconds }
limits: 最多8次搜索
```

#### AgentTool
```
name: "Agent"
isReadOnly: false
input: {
  description: string (required) - 3-5词任务描述
  prompt: string (required) - 完整任务描述
  subagent_type: string (optional) - 智能体类型
  model: "sonnet"|"opus"|"haiku" (optional)
  run_in_background: boolean (optional)
  name: string (optional) - 可寻址名称
  isolation: "worktree"|"remote" (optional)
  cwd: string (optional) - 工作目录
}
output: { status: 'completed'|'async_launched'|..., result }
```

#### TodoWriteTool
```
name: "TodoWrite"
isReadOnly: false
permission: always allow
input: {
  todos: Array<{
    id?: string
    content: string (required)
    status: "pending"|"in_progress"|"completed"|"cancelled" (required)
    priority?: "high"|"medium"|"low"
    activeForm?: string
  }> (required)
}
output: { oldTodos, newTodos, verificationNudgeNeeded? }
```

#### TaskCreateTool / TaskUpdateTool / TaskGetTool
```
TaskCreate input: { subject: string, description: string, activeForm?: string, metadata?: object }
TaskUpdate input: { taskId: string, subject?, description?, activeForm?, status?: "pending"|"in_progress"|"completed"|"deleted", addBlocks?: string[], addBlockedBy?: string[], owner?: string, metadata?: object }
TaskGet input: { taskId: string }
```

#### CronCreateTool / CronDeleteTool / CronListTool
```
CronCreate input: { cron: string (5字段), prompt: string, recurring?: boolean(default true), durable?: boolean(default false) }
CronDelete input: { id: string }
CronList input: {} (无参数)
limits: 最多50个任务, 周期任务7天自动过期
```

#### NotebookEditTool
```
name: "NotebookEdit"
isReadOnly: false
permission: ask
input: {
  notebook_path: string (required) - .ipynb绝对路径
  cell_id: string (optional) - 单元格ID
  new_source: string (required)
  cell_type: "code"|"markdown" (optional)
  edit_mode: "replace"|"insert"|"delete" (default "replace")
}
```

#### EnterWorktreeTool / ExitWorktreeTool
```
EnterWorktree input: { name?: string (alphanumeric+dots/dashes, max 64 chars) }
ExitWorktree input: { action: "keep"|"remove" (required), discard_changes?: boolean }
```

#### 其他工具
```
SendMessage: { to: string, message: string }
AskUserQuestion: { question: string, options?: Array<{label, description}> }
SkillTool: { command: string, args?: string }
RemoteTrigger: { action: "list"|"get"|"create"|"update"|"run", trigger_id?: string, body?: object }
ToolSearch: { query: string, max_results?: number(default 5) }
Config: { action: "get"|"set", path: string, value?: any }
EnterPlanMode: {} (无参数)
ExitPlanMode: { allowedPrompts?: Array<{tool, prompt}> }
```

### 3.3 工具架构（生命周期、延迟加载、并发、截断）

#### Tool 基础接口

```typescript
type Tool<Input, Output, Progress> = {
  name: string
  description(input, options): Promise<string>   // 给AI的说明
  prompt(options): Promise<string>               // 给AI的详细用法
  inputSchema: ZodSchema                         // 输入校验(Zod)
  outputSchema?: ZodSchema                       // 输出校验
  call(args, context): Promise<ToolResult>       // 执行逻辑

  // 属性
  isReadOnly(input): boolean                     // 是否只读
  isConcurrencySafe(input): boolean              // 能否并发（默认false）
  isEnabled(): boolean                           // 是否启用
  isDestructive?(input): boolean                 // 是否破坏性操作
  shouldDefer?: boolean                          // 是否延迟加载
  alwaysLoad?: boolean                           // 强制始终加载
  maxResultSizeChars: number                     // 输出截断上限
  searchHint?: string                            // 工具搜索描述
  strict?: boolean                               // 严格schema校验

  // MCP
  isMcp?: boolean
  mcpInfo?: { serverName: string; toolName: string }

  // 权限
  checkPermissions(input, context): Promise<PermissionResult>
  validateInput?(input): ValidationResult

  // UI渲染
  renderToolUseMessage(input, options): ReactNode    // 调用时显示
  renderToolResultMessage?(output, options): ReactNode  // 结果显示
  renderToolUseProgressMessage?(progress, options): ReactNode  // 执行中显示

  // API映射
  mapToolResultToToolResultBlockParam(result, toolUseId): ToolResultBlock
}
```

#### 工具生命周期（14步）

```
1. 定义 → buildTool() + lazySchema()
2. 注册 → getAllBaseTools() (条件导入，功能开关控制)
3. 组装 → assembleToolPool() (内置 + MCP 合并 + 去重)
4. 过滤 → filterToolsByDenyRules() (权限规则剔除)
5. 延迟检测 → shouldDefer / alwaysLoad 判断
6. Schema 渲染 → renderToolDefinition() (加 defer_loading 标记)
7. API 传输 → tools 字段发送给 Anthropic API
8. 发现 → ToolSearchTool (延迟工具按需搜索)
9. 执行 → StreamingToolExecutor (并发模型)
10. 权限 → validateInput() → checkPermissions() → hooks
11. 结果处理 → processToolResultBlock()
12. 大结果持久化 → maybePersistLargeToolResult()
13. 预算强制 → enforceToolResultBudget() (每消息上限)
14. 渲染 → renderToolResultMessage()
```

#### 延迟加载（Tool Search）

```typescript
// 判断是否延迟
function isDeferredTool(tool: Tool): boolean {
  return tool.shouldDefer === true
    || (tool.isMcp && !tool.alwaysLoad)
    || isToolSearchEnabled() // 延迟工具说明超过上下文窗口10%
}

// 延迟工具列表（23个）:
// TaskGetTool, NotebookEditTool, AskUserQuestionTool, ExitPlanModeTool,
// WebFetchTool, TaskUpdateTool, WebSearchTool, EnterPlanModeTool,
// TeamCreateTool, TaskCreateTool, SendMessageTool, CronCreateTool,
// CronDeleteTool, CronListTool, TaskStopTool, ReadMcpResourceTool,
// TeamDeleteTool, TaskOutputTool, ListMcpResourcesTool, TodoWriteTool,
// ToolSearchTool, ExitWorktreeTool + 所有MCP工具(默认)

// API 发送时:
schema.defer_loading = true  // 延迟工具不发完整schema
```

#### 并发执行模型

```
StreamingToolExecutor:
  - isConcurrencySafe=true 的工具 → 可并行
  - isConcurrencySafe=false 的工具 → 独占执行
  - 执行顺序: 排队制，结果按接收顺序 emit
  - 错误处理: Bash 出错 → 同批次兄弟工具立即终止

并发安全工具:
  GlobTool, GrepTool, FileReadTool, WebSearchTool,
  TaskListTool, TaskGetTool, ConfigTool(读),
  ListMcpResourcesTool, ReadMcpResourceTool,
  BriefTool, LSPTool, ToolSearchTool, RemoteTriggerTool

非并发工具(默认):
  BashTool, FileEditTool, FileWriteTool,
  NotebookEditTool, TaskUpdateTool, AgentTool
```

#### 结果大小控制

```typescript
// 每工具上限
tool.maxResultSizeChars: number
// 例: BashTool=30000, GrepTool=20000, 大部分=100000

// 全局常量
DEFAULT_MAX_RESULT_SIZE_CHARS = 50_000
MAX_TOOL_RESULT_BYTES = 400_000          // ~100K tokens
MAX_TOOL_RESULTS_PER_MESSAGE_CHARS = 200_000  // 单消息所有工具总和

// 超限处理:
// 1. 持久化到磁盘: ~/.claude/sessions/{sessionId}/tool-results/{toolUseId}.txt
// 2. 返回前2000字节摘要 + 文件路径
// 3. 包裹在 <persisted-output> XML 标签中

// 单消息预算强制:
// 如果同一轮所有工具结果 > 200K:
//   → 持久化最大的新结果直到总量低于预算
//   → 旧轮次的持久化决定保持不变(缓存友好)
```

#### MCP 工具集成

```typescript
// MCP 工具命名: mcp__{serverName}__{toolName}
// 例: mcp__github__list_issues

// 克隆 MCPTool 模板 → 覆盖 name/call/description/prompt
// 设置 isMcp=true, mcpInfo={serverName, toolName}
// 默认 shouldDefer=true (除非 alwaysLoad)
// 按名称排序(保证 prompt cache 稳定)
```

#### 子智能体工具限制

```typescript
// 所有子智能体禁用的工具:
DISALLOWED = [TaskOutput, ExitPlanMode, EnterPlanMode, AskUserQuestion, TaskStop]

// 异步子智能体可用工具 (~15个):
ASYNC_ALLOWED = [FileRead, WebSearch, TodoWrite, Grep, WebFetch, Glob,
                 Bash, FileEdit, FileWrite, NotebookEdit, Skill, ...]

// 进程内队友额外可用:
TEAMMATE_ALLOWED = [TaskCreate, TaskGet, TaskList, TaskUpdate, SendMessage, Cron*]
```

---

## 4. System Prompt

### 4.1 Prefix
```
"You are Claude Code, Anthropic's official CLI for Claude."
```

### 4.2 核心规则注入

System prompt 由模块化 section 组成，缓存在轮次之间（`/clear` 或 `/compact` 清除）。

完整规则包括（按注入顺序）：
1. 身份定义
2. 安全规则（拒绝恶意代码、不猜URL、检查文件意图）
3. 语气规则（4行以内、极简、不废话）
4. 主动性规则（用户要求才行动）
5. 代码规范（模仿风格、不加注释、先查依赖）
6. 工具使用指南（每个工具的 prompt 字段注入）
7. Git 操作流程（commit/PR 的标准步骤）
8. 沙箱规则（sandbox=true/false 命令分类）
9. 任务管理指南
10. CLAUDE.md 内容（项目级指令）
11. MCP 工具说明
12. 当前 git 状态上下文

### 4.3 Git Commit 流程（注入prompt）
```
1. 并行: git status + git diff + git log
2. <commit_analysis> 标签分析改动
3. 并行: git add + git commit (HEREDOC) + git status
4. 尾部: Co-Authored-By: Claude <noreply@anthropic.com>
5. 禁止: 改 git config, -i 交互命令, push
```

### 4.4 PR 创建流程（注入prompt）
```
1. 并行: git status + git diff + git log + git diff main...HEAD
2. <pr_analysis> 标签分析
3. gh pr create --title "..." --body "## Summary\n...\n## Test plan\n..."
```

---

## 5. 权限系统（完整规格）

### 5.1 权限模式

```typescript
// 外部模式（用户可选）
type ExternalPermissionMode = 'acceptEdits' | 'bypassPermissions' | 'default' | 'dontAsk' | 'plan'

// 内部模式（含实验功能）
type InternalPermissionMode = ExternalPermissionMode | 'auto' | 'bubble'

type PermissionMode = InternalPermissionMode
```

| 模式 | 行为 |
|------|------|
| default | 只读操作自动放行，写入操作需确认 |
| plan | AI 只能读不能写（进入计划模式前的 mode 记录在 prePlanMode） |
| acceptEdits | 文件编辑自动放行（在工作目录内） |
| dontAsk | 需确认的操作直接拒绝（不弹框） |
| bypassPermissions | 跳过所有检查（仅限 Docker 无网络环境） |
| auto | 用 ML 分类器自动判断（实验性） |
| bubble | 权限请求冒泡到父级（内部用） |

### 5.2 权限行为

```typescript
type PermissionBehavior = 'allow' | 'ask' | 'deny'
```

### 5.3 核心类型定义

```typescript
// 规则来源
type PermissionRuleSource =
  | 'userSettings'      // ~/.claude/settings.json
  | 'projectSettings'   // .claude/settings.json
  | 'localSettings'     // .claude/.local/settings.json
  | 'flagSettings'      // CLI --settings 参数
  | 'policySettings'    // 企业管理策略
  | 'cliArg'            // CLI 参数
  | 'command'           // 命令级
  | 'session'           // 会话级（内存，不持久化）

// 规则结构
type PermissionRule = {
  source: PermissionRuleSource
  ruleBehavior: 'allow' | 'deny' | 'ask'
  ruleValue: { toolName: string, ruleContent?: string }
}

// 规则更新操作
type PermissionUpdate =
  | { type: 'addRules'; destination: PermissionUpdateDestination; rules: PermissionRuleValue[]; behavior: PermissionBehavior }
  | { type: 'replaceRules'; destination: PermissionUpdateDestination; rules: PermissionRuleValue[]; behavior: PermissionBehavior }
  | { type: 'removeRules'; destination: PermissionUpdateDestination; rules: PermissionRuleValue[]; behavior: PermissionBehavior }
  | { type: 'setMode'; destination: PermissionUpdateDestination; mode: ExternalPermissionMode }
  | { type: 'addDirectories'; destination: PermissionUpdateDestination; directories: string[] }
  | { type: 'removeDirectories'; destination: PermissionUpdateDestination; directories: string[] }
```

### 5.4 权限决策类型

```typescript
type PermissionAllowDecision = {
  behavior: 'allow'
  updatedInput?: Input
  userModified?: boolean
  decisionReason?: PermissionDecisionReason
  toolUseID?: string
  acceptFeedback?: string
  contentBlocks?: ContentBlockParam[]
}

type PermissionAskDecision = {
  behavior: 'ask'
  message: string
  updatedInput?: Input
  suggestions?: PermissionUpdate[]    // 给用户的建议规则（如"始终允许npm:*"）
  blockedPath?: string
  metadata?: { command: PermissionCommandMetadata }
  pendingClassifierCheck?: PendingClassifierCheck
  contentBlocks?: ContentBlockParam[]
}

type PermissionDenyDecision = {
  behavior: 'deny'
  message: string
  decisionReason: PermissionDecisionReason
  toolUseID?: string
}

// 决策原因（全部枚举）
type PermissionDecisionReason =
  | { type: 'rule'; rule: PermissionRule }
  | { type: 'mode'; mode: PermissionMode }
  | { type: 'subcommandResults'; reasons: Map<string, PermissionResult> }
  | { type: 'permissionPromptTool'; permissionPromptToolName: string; toolResult: unknown }
  | { type: 'hook'; hookName: string; hookSource?: string; reason?: string }
  | { type: 'asyncAgent'; reason: string }
  | { type: 'sandboxOverride'; reason: 'excludedCommand' | 'dangerouslyDisableSandbox' }
  | { type: 'classifier'; classifier: string; reason: string }
  | { type: 'workingDir'; reason: string }
  | { type: 'safetyCheck'; reason: string; classifierApprovable: boolean }
  | { type: 'other'; reason: string }
```

### 5.5 完整判断状态机（6步）

```
hasPermissionsToUseTool(tool, input, context) → PermissionDecision

STEP 1: 规则匹配（绕过免疫）
  1a. deny 规则命中 → 直接拒绝
  1b. ask 规则命中 → 标记需确认
  1c. 工具自身 checkPermissions() → 可能 allow/deny/ask/passthrough
  1d. 安全硬编码检查（.git/, .claude/, .bashrc 等）
      - classifierApprovable=false → 必须人工确认（连 auto 模式也绕不过）
      - classifierApprovable=true → auto 模式的分类器可以放行

STEP 2: 模式覆盖
  2a. bypassPermissions → 直接允许
  2b. 整个工具有 allow 规则 → 直接允许

STEP 3: passthrough → ask（默认转为需确认）

STEP 4: auto 模式分类器（如果 behavior=ask 且 mode=auto）
  快速路径:
    - acceptEdits 模式也允许? → 跳过分类器
    - 工具在安全白名单? → 跳过分类器
  慢速路径:
    - 格式化动作 → 构建转录文本 → 调用分类器
    - 分类器返回 shouldBlock:
      true → 记录拒绝 → 检查熔断 → 可能降级为提示
      false → 记录成功 → 允许

STEP 5: dontAsk 模式转换
  如果 behavior=ask && mode=dontAsk → 转为 deny

STEP 6: 无头 Agent 处理
  如果 behavior=ask && shouldAvoidPermissionPrompts:
    → 执行 PermissionRequest hooks
    → 无 hook 决定 → 自动拒绝
```

### 5.6 ML 分类器（YOLO Classifier）

```typescript
// 分类器结果
type YoloClassifierResult = {
  thinking?: string
  shouldBlock: boolean
  reason: string
  unavailable?: boolean
  model: string
  usage?: ClassifierUsage
  durationMs?: number
  stage?: 'fast' | 'thinking'     // 两阶段标记
  // 第一阶段指标
  stage1Usage?: ClassifierUsage
  stage1DurationMs?: number
  stage1RequestId?: string
  // 第二阶段指标
  stage2Usage?: ClassifierUsage
  stage2DurationMs?: number
  stage2RequestId?: string
}

type ClassifierUsage = {
  inputTokens: number
  outputTokens: number
  cacheReadInputTokens: number
  cacheCreationInputTokens: number
}
```

**两阶段设计:**
```
Stage 1 ("fast", tool_use mode):
  - 后缀指令: "Err on the side of blocking. <block> immediately."
  - 快速决策，偏向保守

Stage 2 ("thinking", extended thinking mode):
  - 后缀指令: "Review the classification process carefully... Use <thinking> before responding with <block>."
  - 详细推理，更准确

输出格式 (XML):
  <block>yes</block> 或 <block>no</block>
  <reason>解释...</reason>
  <thinking>推理过程...</thinking>  (仅 stage 2)
```

**分类器输入:**
- System Prompt: 基础模板 + 权限模板 + 用户 autoMode 配置
- Messages: CLAUDE.md(带缓存控制) + 对话转录(仅用户文本+工具调用) + 当前待分类动作

### 5.7 拒绝追踪与熔断

```typescript
const DENIAL_LIMITS = {
  maxConsecutive: 3,   // 连续被分类器拒绝3次 → 降级为用户提示
  maxTotal: 20,        // 累计被拒绝20次 → 降级为用户提示
}

type DenialTrackingState = {
  consecutiveDenials: number  // 允许后重置为0
  totalDenials: number        // 不重置
}

// shouldFallbackToPrompting() = consecutiveDenials >= 3 || totalDenials >= 20
```

### 5.8 文件权限判断（checkWritePermissionForTool）

```
Step 1: 检查 deny 规则
Step 1.5: 允许内部可编辑路径（plan 文件、scratchpad）
Step 1.6: 检查 .claude/** session 级 allow 规则
Step 1.7: 安全硬编码检查（绕过免疫）
Step 2: 检查 ask 规则
Step 3: acceptEdits 模式 + 在工作目录内 → allow
Step 4: 检查 allow 规则
Step 5: 默认 → ask
```

**安全硬编码保护列表:**
```typescript
// 危险文件（始终需确认）
DANGEROUS_FILES = [
  '.gitconfig', '.gitmodules', '.bashrc', '.bash_profile',
  '.zshrc', '.zprofile', '.profile', '.ripgreprc',
  '.mcp.json', '.claude.json'
]

// 危险目录（始终需确认）
DANGEROUS_DIRECTORIES = ['.git', '.vscode', '.idea', '.claude']

// Windows 可疑路径模式（始终需确认）
- NTFS 替代数据流 (path 含 ':' 在位置2之后)
- 8.3 短文件名 (含 '~\d')
- 长路径前缀 ('\\?\', '\\.\')
- 尾部点/空格
- DOS 设备名 (CON, PRN, AUX, NUL, COM1-9, LPT1-9)
- UNC 路径 ('\\server\share')
```

### 5.9 权限上下文

```typescript
type ToolPermissionContext = {
  mode: PermissionMode
  additionalWorkingDirectories: ReadonlyMap<string, AdditionalWorkingDirectory>
  alwaysAllowRules: ToolPermissionRulesBySource
  alwaysDenyRules: ToolPermissionRulesBySource
  alwaysAskRules: ToolPermissionRulesBySource
  isBypassPermissionsModeAvailable: boolean
  shouldAvoidPermissionPrompts?: boolean        // 无头Agent
  awaitAutomatedChecksBeforeDialog?: boolean
  prePlanMode?: PermissionMode                  // plan模式前的模式
}

type ToolPermissionRulesBySource = {
  [T in PermissionRuleSource]?: string[]
}
```

### 5.10 规则加载与优先级

```
加载顺序: userSettings → projectSettings → localSettings → flagSettings → policySettings

如果 allowManagedPermissionRulesOnly=true:
  → 只加载 policySettings，忽略其他所有来源
  → UI 隐藏"始终允许"选项
  → 会话级选项仍然可用

规则匹配优先级: deny > ask > allow（deny 总是赢）
```

### 5.11 审批 UI 选项

**Bash 命令审批:**
```
[1] Yes                                     // 允许一次
[2] Yes, and don't ask again for [prefix]   // 持久化 allow 规则
[3] Yes, during this session                // 会话级 allow
[4] No                                      // 拒绝（可附反馈）
```

**文件操作审批:**
```
[1] Yes                                     // 允许一次
[2] Yes, allow all edits during session     // 会话级 allow
[3] No                                      // 拒绝
```

**特殊: .claude/ 目录操作:**
```
[1] Yes
[2] Yes, allow Claude to edit settings for this session only  // 仅会话级
[3] No
```

**企业模式 (allowManagedPermissionRulesOnly=true):**
- 隐藏所有持久化 "always allow" 选项
- 保留会话级选项
- 企业规则显示🔒图标，不可删除

### 5.12 文件状态追踪

```typescript
// 全局 Map
readFileState: Map<string, { content: string, mtime: number }>

// ReadTool 读取后写入
// WriteTool/EditTool 修改前检查:
//   1. path 是否在 map 中（先读后改）
//   2. 当前 mtime === 记录的 mtime（外部修改检测）
```

---

## 6. 对话系统

### 6.1 API 调用

```
POST /v1/messages?beta=true
{
  model: string,
  max_tokens: number,
  system: string,        // System Prompt
  messages: Message[],    // 对话历史
  tools: ToolDef[],       // 工具定义
  stream: true
}
```

### 6.2 流式事件

```
message_start → content_block_start → content_block_delta → content_block_stop → message_stop

delta 类型:
  text_delta         文本
  input_json_delta   工具输入JSON
  thinking_delta     思考过程
  citation_delta     引用
  signature_delta    签名
```

### 6.3 对话循环状态机

```
query(params) → AsyncGenerator<Event>

loop:
  1. POST /v1/messages (stream)
  2. yield StreamEvent → 实时渲染
  3. stop_reason:
     "end_turn" → 等用户输入
     "tool_use" → 提取工具调用 → checkPermissions → call → tool_result → 回到1
     "max_tokens" → 上下文压缩 → 回到1
  4. 达到 max_turns / max_budget_usd → 退出
```

### 6.4 上下文压缩

```
触发: token 用量接近上下文窗口限制
方式:
  - microCompact: 轻量API端压缩
  - autoCompact: 自动触发(阈值+指数退避)
  - compact: 完整压缩(fork子智能体)
  - sessionMemoryCompact: 压缩时提取记忆

压缩保留段:
  Primary Request, Technical Concepts, Files/Code,
  Errors/Fixes, Problem Solving, User Messages,
  Pending Tasks, Current Work, Next Steps
```

---

## 7. 认证系统

### 7.1 OAuth 2.0 + PKCE

```
授权URL: https://claude.com/cai/oauth/authorize (Claude.ai)
         https://platform.claude.com/oauth/authorize (Console)
Token URL: https://platform.claude.com/v1/oauth/token
Profile URL: https://api.anthropic.com/api/oauth/claude_cli/roles
Client ID: 9d1c250a-e61b-44d9-88ed-5944d1962f5e

Scopes:
  user:inference
  user:profile
  user:sessions:claude_code
  user:mcp_servers
  user:file_upload
  org:create_api_key

流程:
  1. 生成 PKCE code_verifier + code_challenge
  2. 本地监听 localhost:PORT/callback
  3. 打开浏览器 → 授权
  4. 拿 code → 换 token
  5. 存入 macOS Keychain (回退: 文件存储)
  6. 过期前5分钟自动刷新
```

### 7.2 其他认证方式
- `ANTHROPIC_API_KEY` 环境变量
- AWS Bedrock / Google Vertex 原生凭据
- Session ingress token (远程会话)

---

## 8. MCP 插件协议

### 8.1 协议基础

```
版本: "2025-03-26" (兼容 "2024-11-05", "2024-10-07")
通信: JSON-RPC 2.0
传输: stdio | sse | http | ws | sdk | sse-ide | ws-ide | claudeai-proxy

错误码:
  -32000 ConnectionClosed
  -32001 RequestTimeout
  -32700 ParseError
  -32600 InvalidRequest
  -32601 MethodNotFound
  -32602 InvalidParams
  -32603 InternalError

默认超时: 60000ms
```

### 8.2 初始化握手

```
Client → Server: initialize { protocolVersion, capabilities, clientInfo }
Server → Client: { protocolVersion, capabilities, serverInfo, instructions? }
Client → Server: notifications/initialized
```

### 8.3 能力协商

```typescript
// 客户端能力
{ experimental?, sampling?, roots?: { listChanged? } }

// 服务端能力
{ experimental?, logging?, completions?, prompts?: { listChanged? }, resources?: { subscribe?, listChanged? }, tools?: { listChanged? } }
```

### 8.4 工具 Schema

```typescript
{
  name: string,
  description?: string,
  inputSchema: { type: "object", properties?: Record<string, JsonSchema> },
  annotations?: { title?, readOnlyHint?, destructiveHint?, idempotentHint?, openWorldHint? }
}
```

### 8.5 服务配置

```typescript
// 范围
type ConfigScope = 'local' | 'user' | 'project' | 'dynamic' | 'enterprise' | 'claudeai' | 'managed'

// stdio 类型
{ command: string, args?: string[], env?: Record<string, string> }

// SSE/HTTP 类型
{ url: string, headers?: Record<string, string>, oauth?: OAuthConfig }

// WebSocket 类型
{ url: string, headers?: Record<string, string> }
```

### 8.6 OAuth 支持
- 完整 PKCE 流
- Token 自动刷新
- 跨应用访问 (XAA / SEP-990)
- Keychain 存储(macOS)

---

## 9. 多智能体协调器

### 9.1 启用方式
```
环境变量: CLAUDE_CODE_COORDINATOR_MODE=true
```

### 9.2 工作流
```
Research(调研) → Synthesis(综合) → Implementation(执行) → Verification(验证)
```

### 9.3 工具分配
```
协调器专属: TeamCreate, TeamDelete, SendMessage, SyntheticOutput
工人可用: Bash, FileRead, FileEdit, MCP tools, Skills
```

### 9.4 并发规则
- 读操作: 可并行
- 写操作: 必须串行

### 9.5 后台任务类型
```
LocalShellTask      - 命令执行
LocalAgentTask      - 本地子智能体
RemoteAgentTask     - 远程子智能体
InProcessTeammateTask - 进程内队友
LocalWorkflowTask   - 工作流
MonitorMcpTask      - MCP监控
DreamTask           - 后台任务
```

---

## 10. 记忆系统

### 10.1 入口
```
文件: MEMORY.md
最大: 200 行 / 25KB
超限: 行截断 → 字节截断 → 追加警告
```

### 10.2 记忆文件格式
```markdown
---
name: 记忆名称
description: 一行描述
type: user | feedback | project | reference
---

记忆内容...
```

### 10.3 记忆类型
| 类型 | 存什么 |
|------|--------|
| user | 用户角色、偏好、知识水平 |
| feedback | 用户对 AI 行为的纠正和确认 |
| project | 项目进展、决策、截止日期 |
| reference | 外部资源位置 |

### 10.4 不该记的
- 代码结构（看代码就知道）
- Git 历史（git log 能查）
- 调试方案（修复在代码里）
- 临时状态（当前会话用完就没用了）

---

## 11. 配置系统

### 11.1 配置文件

| 层级 | 路径 | 优先级 |
|------|------|--------|
| 企业策略 | 管理平台下发 | 最高 |
| 用户级 | `~/.claude/globalSettings.json` | 高 |
| 项目级 | `.claude/settings.json` | 中 |
| 本地级 | `.claude/.local/settings.json` | 低 |

### 11.2 功能开关 (Feature Flags)

| 开关 | 功能 |
|------|------|
| PROACTIVE | AI 主动模式 |
| KAIROS | 助手模式 |
| KAIROS_BRIEF | 简报 |
| VOICE_MODE | 语音 |
| COORDINATOR_MODE | 多智能体 |
| BRIDGE_MODE | 移动桥接 |
| WORKFLOW_SCRIPTS | 工作流 |
| MCP_SKILLS | MCP 技能 |
| BUDDY | 队友 |
| TOKEN_BUDGET | Token 预算 |
| REACTIVE_COMPACT | 响应式压缩 |
| BG_SESSIONS | 后台会话 |
| TEMPLATES | 任务模板 |

---

## 12. IDE 桥接

### 12.1 架构
```
终端 Claude Code ←→ Bridge (SSE/WebSocket) ←→ IDE 扩展
```

### 12.2 VS Code
- 扩展 ID: `anthropic.claude-code`
- 安装: 内嵌 .vsix，`code --install-extension`

### 12.3 JetBrains
- 内嵌 JAR 插件包
- 支持: PyCharm, IntelliJ, WebStorm, GoLand, Rider 等

### 12.4 连接
- 认证: JWT Token
- 重连: 指数退避 2s→120s→600s
- 状态轮询: 1s 间隔
- 多会话支持

---

## 13. 语音模式

```
平台:
  macOS: audio-capture-napi (CoreAudio + AudioUnit)
  Linux: SoX rec / ALSA arecord

参数:
  采样率: 16000 Hz
  声道: 1 (单声道)
  静默检测: 2秒无声停止, 阈值 3%

流程: 按键录音 → 流式STT → 文本输入
```

---

## 14. 费用追踪

```typescript
interface CostState {
  totalCostUSD: number
  totalAPIDuration: number
  totalAPIDurationWithoutRetries: number
  totalToolDuration: number
  totalLinesAdded: number
  totalLinesRemoved: number
  modelUsage: {
    [modelName: string]: {
      inputTokens: number
      outputTokens: number
      cacheReadTokens: number
      cacheCreationTokens: number
      cost: number
    }
  }
}
```

支持 `--max-budget-usd` 限制单次会话花费。

---

## 15. 环境变量

| 变量 | 说明 | 默认 |
|------|------|------|
| `ANTHROPIC_API_KEY` | API 密钥 | - |
| `BASH_MAX_OUTPUT_LENGTH` | 命令输出最大字符 | 30000 |
| `BASH_DEFAULT_TIMEOUT_MS` | 命令默认超时 | 120000 |
| `BASH_MAX_TIMEOUT_MS` | 命令最大超时 | 600000 |
| `CLAUDE_CODE_DONT_INHERIT_ENV` | 不继承用户环境 | false |
| `CLAUDE_CODE_SSE_PORT` | SSE 端口 | - |
| `CLAUDE_CODE_COORDINATOR_MODE` | 协调器模式 | false |
| `CLAUDE_CODE_ATTRIBUTION_HEADER` | 归因头 | - |
| `CLAUDE_CODE_SIMPLE` | 最小模式 | - |
| `FORCE_CODE_TERMINAL` | 强制 IDE 终端识别 | false |

---

## 16. 遥测事件

| 事件 | 触发 |
|------|------|
| tengu_init | 启动（含 entrypoint, hasPrompt, model, flags） |
| tengu_mcp_add/delete/list/get/start | MCP 操作 |
| tengu_ext_installed/install_error | IDE 扩展 |
| tengu_doctor_command | 健康检查 |
| tengu_approved_tool_remove | 移除已批准工具 |
| shell_snapshot_created/failed | Shell 环境 |
| tengu_binary_feedback_display_decision | 反馈系统 |

分析平台: GrowthBook (A/B测试) + Datadog/Statsig
PII 脱敏: `AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS` 标记类型
