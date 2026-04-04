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

## 4.5 对话引擎（完整规格）

### QueryParams

```typescript
type QueryParams = {
  messages: Message[]
  systemPrompt: SystemPrompt
  userContext: { [k: string]: string }
  systemContext: { [k: string]: string }
  canUseTool: CanUseToolFn
  toolUseContext: ToolUseContext
  fallbackModel?: string
  querySource: QuerySource
  maxOutputTokensOverride?: number
  maxTurns?: number
  skipCacheWrite?: boolean
  taskBudget?: { total: number }
  deps?: QueryDeps
}
```

### 对话循环状态机（详细版）

```
queryLoop() → AsyncGenerator

初始化:
  turnCount = 1
  maxOutputTokensRecoveryCount = 0
  currentModel = 请求模型
  toolUseBlocks = []

每轮循环:
  1. yield { type: 'stream_request_start' }
  2. 检查是否需要 autoCompact (token 阈值)
     → 是: 压缩 → yield compact_boundary 消息 → 更新消息列表
  3. 调用 queryModelWithStreaming() (流式)
  4. 处理流式事件:
     → content_block_delta: yield stream_event (实时显示)
     → tool_use block: 加入 toolUseBlocks, needsFollowUp = true
  5. 流式结束，检查 stop_reason:

     stop_reason = "end_turn":
       → needsFollowUp = false → 结束循环
       → 执行 post-turn hooks

     stop_reason = "tool_use":
       → 执行所有 toolUseBlocks (并发安全检查)
       → yield tool_result 消息
       → turnCount++
       → 检查 maxTurns → 超限则 yield max_turns_reached → 结束
       → 继续循环

     stop_reason = "max_tokens":
       → maxOutputTokensRecoveryCount++
       → if count <= 3:
           → 提升输出上限到 ESCALATED_MAX_TOKENS
           → 追加 nudge: "Output limit hit. Resume directly..."
           → 继续循环
       → else: yield error

     API 错误 413 (prompt_too_long):
       → 尝试 collapse drain
       → 回退: reactive compact (分组截断最老的消息)
       → MAX_PTL_RETRIES = 3

     API 错误 429/529 (过载):
       → 重试(指数退避)
       → 连续 529 超 3 次 → FallbackTriggeredError
       → 切换到 fallbackModel → yield 警告 → 继续循环
```

### 消息类型

```typescript
// 用户消息
SDKUserMessage = {
  type: 'user'
  message: APIUserMessage    // content blocks (text, image, etc.)
  parent_tool_use_id: string | null
  uuid: string
  session_id: string
  timestamp: ISO8601
}

// AI 消息
SDKAssistantMessage = {
  type: 'assistant'
  message: APIAssistantMessage  // content blocks (text, tool_use, thinking)
  parent_tool_use_id: string | null
  error?: 'authentication_failed' | 'billing_error' | 'rate_limit'
        | 'invalid_request' | 'server_error' | 'max_output_tokens'
  uuid: string
  session_id: string
}

// 压缩边界
CompactBoundaryMessage = {
  type: 'system'
  subtype: 'compact_boundary'
  compact_metadata: {
    trigger: 'manual' | 'auto'
    pre_tokens: number
    preserved_segment?: { head_uuid, anchor_uuid, tail_uuid }
  }
}

// 内容块类型
ContentBlock =
  | { type: 'text', text: string }
  | { type: 'tool_use', id: string, name: string, input: Record }
  | { type: 'tool_result', tool_use_id: string, content: string }
  | { type: 'thinking', thinking: string }
  | { type: 'redacted_thinking' }
```

### Token 预算

```typescript
// 阈值
COMPLETION_THRESHOLD = 0.9    // 预算用了90%考虑停止
DIMINISHING_THRESHOLD = 500   // 每轮增量低于500 = 收益递减

// 判断逻辑
type BudgetTracker = {
  continuationCount: number
  lastDeltaTokens: number
  lastGlobalTurnTokens: number
  startedAt: number  // ms
}

// 决策:
// if turnTokens < budget * 0.9 && !isDiminishing → continue (追加nudge)
// isDiminishing = continuationCount >= 3 && 最近两轮 delta < 500
// else → stop
```

### API 客户端

```
端点: POST /v1/messages?beta=true
超时: 流式 600,000ms / 非流式 300,000ms (远程 120,000ms)

Beta headers:
  - CONTEXT_1M_BETA_HEADER (1M上下文)
  - FAST_MODE_BETA_HEADER
  - PROMPT_CACHING_SCOPE_BETA_HEADER
  - TASK_BUDGETS_BETA_HEADER
  - EFFORT_BETA_HEADER

错误重试:
  429 → 指数退避重试
  502/503/504 → 自动重试
  529 → 最多3次，超限触发模型降级
  413 → 压缩上下文后重试(最多3次)

模型降级流程:
  1. 主模型连续 429/529 超限
  2. 抛出 FallbackTriggeredError
  3. 切换 currentModel = fallbackModel
  4. 清除待执行工具
  5. 剥离 thinking blocks (签名与模型绑定)
  6. yield 用户可见警告
  7. 用备用模型重试
```

### 思考模式 (Extended Thinking)

```typescript
type ThinkingConfig =
  | { type: 'adaptive' }     // AI自行决定是否思考
  | { type: 'disabled' }     // 关闭思考
  | { type: 'enabled', maxTokens?: number }  // 强制思考

默认: 如果模型支持 → adaptive
CLI参数: --thinking enabled|adaptive|disabled
```

### maxTurns 限制

```
--max-turns N (print模式)

turnCount 从 1 开始，每次 tool_use 后 +1
超过 N → yield max_turns_reached attachment → 返回 { reason: 'max_turns' }
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

## 8. MCP 插件协议（完整规格）

### 8.1 协议基础

```
版本: "2025-03-26" (兼容 "2024-11-05", "2024-10-07")
通信: JSON-RPC 2.0
传输: stdio | sse | http | ws | sdk | sse-ide | ws-ide | claudeai-proxy

错误码:
  -32000 ConnectionClosed
  -32001 RequestTimeout (也用于 HTTP 404 session expired)
  -32700 ParseError
  -32600 InvalidRequest
  -32601 MethodNotFound
  -32602 InvalidParams
  -32603 InternalError
```

### 8.2 超时常量

| 场景 | 超时 | 配置项 |
|------|------|--------|
| 连接 | 30,000ms | `MCP_TIMEOUT` |
| 单次请求 | 60,000ms | `MCP_REQUEST_TIMEOUT_MS` |
| 工具调用 | ~27.8小时(实质无限) | `MCP_TOOL_TIMEOUT` |
| 认证请求 | 30,000ms | `AUTH_REQUEST_TIMEOUT_MS` |
| 认证缓存(needs-auth) | 15分钟 | `MCP_AUTH_CACHE_TTL_MS` |

### 8.3 初始化握手

```
Client → Server: initialize { protocolVersion, capabilities, clientInfo }
Server → Client: { protocolVersion, capabilities, serverInfo, instructions? }
Client → Server: notifications/initialized
```

### 8.4 能力协商

```typescript
// 客户端能力
{ experimental?, sampling?, roots?: { listChanged? } }

// 服务端能力
{ experimental?, logging?, completions?,
  prompts?: { listChanged? },
  resources?: { subscribe?, listChanged? },
  tools?: { listChanged? } }
```

### 8.5 服务器状态机

```
Pending → Connected → (onerror/onclose) → Reconnect or Failed
     ↓
   Failed (立即)
     ↓
 NeedsAuth (401) → OAuth流程 → 重试连接
     ↓
  Disabled (用户手动禁用)
```

```typescript
// 5 种状态
ConnectedMCPServer  = { type: 'connected', client, capabilities, serverInfo?, instructions?, cleanup }
FailedMCPServer     = { type: 'failed', error? }
NeedsAuthMCPServer  = { type: 'needs-auth' }
PendingMCPServer    = { type: 'pending', reconnectAttempt?, maxReconnectAttempts? }
DisabledMCPServer   = { type: 'disabled' }
```

### 8.6 8 种传输实现

**stdio (StdioClientTransport):**
```
启动子进程: command + args
通信: stdin/stdout
stderr: pipe模式, 最多累积 64MB
清理: SIGINT(100ms) → SIGTERM(400ms) → SIGKILL
```

**SSE (SSEClientTransport):**
```
服务端→客户端: 长连接 GET (EventSource, 无超时)
客户端→服务端: POST (60s超时)
认证: OAuth token 自动刷新
```

**HTTP Streamable (StreamableHTTPClientTransport):**
```
双向 POST 轮询
60s/请求超时
Session ID 持久化
404 + JSON-RPC -32001 = session expired → 重连
```

**WebSocket (WebSocketTransport):**
```
协议: 'mcp' subprotocol
Bun: 原生 DOM WebSocket
Node: ws 包动态导入
```

**SDK (InProcessTransport):**
```
进程内直接调用, 无子进程开销
通过 queueMicrotask 异步传递消息
用于 Chrome MCP, Computer Use MCP
```

### 8.7 服务配置

```typescript
type ConfigScope = 'local' | 'user' | 'project' | 'dynamic' | 'enterprise' | 'claudeai' | 'managed'

// stdio
{ type?: 'stdio', command: string, args: string[], env?: Record<string, string> }

// SSE
{ type: 'sse', url: string, headers?: Record<string, string>, oauth?: OAuthConfig }

// HTTP
{ type: 'http', url: string, headers?: Record<string, string>, oauth?: OAuthConfig }

// WebSocket
{ type: 'ws', url: string, headers?: Record<string, string> }

// SDK
{ type: 'sdk', name: string }

// claude.ai proxy
{ type: 'claudeai-proxy', url: string, id: string }

// OAuth 配置
{ clientId?: string, callbackPort?: number, authServerMetadataUrl?: string, xaa?: boolean }
```

### 8.8 配置加载优先级

```
1. Enterprise managed config
2. Plugin-provided configs
3. Project scope (.mcp.json)
4. User scope (~/.claude/config.json)
5. Local scope (~/.claude/local-settings.json)
6. Dynamic scope (--mcp-config CLI)
7. Claude.ai connectors (async fetch)

去重: 基于内容签名(command+args 或 url), 非基于名称
合并: 手动 > 插件; 手动(非禁用) > claude.ai
```

### 8.9 环境变量展开

```
语法: ${VAR} 或 ${VAR:-default}
展开位置: command, args, env, url, headers
缺失变量: 追踪并报错
```

### 8.10 企业策略

```typescript
allowedMcpServers: string[]   // 白名单(名称/命令/URL)
deniedMcpServers: string[]    // 黑名单(优先于白名单)
// URL 支持通配符: https://*.example.com/*
```

### 8.11 连接管理

```
本地服务(stdio/sdk): 并发上限 3 (MCP_SERVER_CONNECTION_BATCH_SIZE)
远程服务(sse/http): 并发上限 20 (MCP_REMOTE_SERVER_CONNECTION_BATCH_SIZE)

缓存: memoize by "${name}-${JSON.stringify(config)}"
工具获取: LRU 缓存, size=20
资源获取: LRU 缓存, size=20

断连检测: ECONNRESET, ETIMEDOUT, EPIPE, EHOSTUNREACH, ECONNREFUSED
断连重连: 3次连续终端错误后关闭传输

工具描述截断: MAX_MCP_DESCRIPTION_LENGTH = 2048 字符
```

### 8.12 工具命名规范

```
前缀模式(默认): mcp__{normalizedServerName}__{normalizedToolName}
例: mcp__github__list_issues

无前缀模式: CLAUDE_AGENT_SDK_MCP_NO_PREFIX=true → 直接用 toolName

名称规范化: 非字母数字/连字符/下划线 → 下划线
           claude.ai 服务: 折叠连续下划线
           模式: ^[a-zA-Z0-9_-]{1,64}$
```

### 8.13 MCP OAuth

```
发现链: RFC 9728 → RFC 8414 → 配置URL
Token 存储: Keychain slot = "${serverName}|${SHA256(config).substring(0,16)}"

Token 结构:
{
  accessToken, refreshToken?, expiresAt, scope?,
  clientId?, clientSecret?,
  discoveryState: { authorizationServerUrl?, resourceMetadataUrl? },
  stepUpScope?
}

Token 撤销 (RFC 7009):
  1. 标准: client_id in body, 无 Authorization header
  2. 回退 401: Bearer auth (非标服务)
  3. 先撤 refresh token, 再撤 access token

XAA (Cross-App Access / SEP-990):
  1. RFC 8693 Token Exchange: id_token → ID-JAG
  2. RFC 7523 JWT Bearer: ID-JAG → access_token
  单 IdP 登录复用于所有 XAA 服务器

错误别名 (invalid_grant):
  invalid_refresh_token, expired_refresh_token, token_expired
```

### 8.14 工具 Schema

```typescript
{
  name: string,
  description?: string,
  inputSchema: { type: "object", properties?: Record<string, JsonSchema> },
  annotations?: { title?, readOnlyHint?, destructiveHint?, idempotentHint?, openWorldHint? }
}
```

### 8.15 服务配置（旧位置，保留兼容）

```typescript
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

## 9. 多智能体协调器（完整规格）

### 9.1 启用方式
```
环境变量: CLAUDE_CODE_COORDINATOR_MODE=true
```

### 9.2 工作流
```
Research(调研) → Synthesis(综合) → Implementation(执行) → Verification(验证)

并发规则:
  调研阶段: 多工人并行
  综合阶段: 协调器独占(读取所有工人结果)
  执行阶段: 同文件串行，不同文件可并行
  验证阶段: 可与执行并行(不同区域)
```

### 9.3 工具分配
```
协调器专属(INTERNAL_WORKER_TOOLS):
  TeamCreate, TeamDelete, SendMessage, SyntheticOutput

工人可用(ASYNC_AGENT_ALLOWED_TOOLS):
  简单模式(CLAUDE_CODE_SIMPLE): Bash, Read, Edit
  完整模式: Read, Edit, Write, Grep, Glob, Bash, WebSearch, WebFetch,
            NotebookEdit, Skill, ToolSearch, SyntheticOutput, Worktree

子智能体禁用:
  TaskOutput, ExitPlanMode, EnterPlanMode, AskUserQuestion, TaskStop
```

### 9.4 并发规则
- 读操作: 可并行
- 写操作: 必须串行

### 9.5 后台任务类型与状态机
```typescript
// 7 种任务类型
type TaskType = 'local_bash' | 'local_agent' | 'remote_agent'
             | 'in_process_teammate' | 'local_workflow'
             | 'monitor_mcp' | 'dream'

// 任务状态机
pending → running → completed
       ↘         ↗
         failed / killed
```

### 9.6 工人结果格式
```xml
<task-notification>
  <task-id>{agentId}</task-id>
  <status>completed|failed|killed</status>
  <summary>human-readable status</summary>
  <result>agent's final text response</result>
  <usage>
    <total_tokens>N</total_tokens>
    <tool_uses>N</tool_uses>
    <duration_ms>N</duration_ms>
  </usage>
</task-notification>
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

## 12. IDE 桥接（完整规格）

### 12.1 架构
```
终端 Claude Code ←JWT→ Bridge API ←SSE/WS→ IDE 扩展
```

### 12.2 支持的 IDE（18 种）
```typescript
type IdeType =
  | 'vscode' | 'cursor' | 'windsurf'          // VS Code 系
  | 'pycharm' | 'intellij' | 'webstorm'       // JetBrains 系
  | 'phpstorm' | 'rubymine' | 'clion'
  | 'goland' | 'rider' | 'datagrip'
  | 'appcode' | 'dataspell' | 'aqua'
  | 'gateway' | 'fleet' | 'androidstudio'

// 检测方式: 进程关键词匹配
// macOS: 'Visual Studio Code', 'Code Helper', 'Cursor.app' 等
// Windows: 'code.exe', 'cursor.exe' 等
// Linux: 'code', 'cursor' 等
```

### 12.3 连接管理
```typescript
// 退避策略
DEFAULT_BACKOFF = {
  connInitialMs: 2_000,        // 首次连接重试
  connCapMs: 120_000,          // 最大连接重试间隔 (2分钟)
  connGiveUpMs: 600_000,       // 放弃连接 (10分钟)
  generalInitialMs: 500,       // 一般错误退避
  generalCapMs: 30_000,        // 一般错误上限 (30秒)
  generalGiveUpMs: 600_000,    // 一般错误放弃 (10分钟)
}

// 轮询错误
POLL_ERROR_INITIAL_DELAY_MS = 2_000
POLL_ERROR_MAX_DELAY_MS = 60_000
POLL_ERROR_GIVE_UP_MS = 15 * 60 * 1000  // 15分钟

// JWT Token 刷新
TOKEN_REFRESH_BUFFER_MS = 5 * 60 * 1000        // 过期前5分钟
FALLBACK_REFRESH_INTERVAL_MS = 30 * 60 * 1000  // 未知过期时30分钟
MAX_REFRESH_FAILURES = 3                        // 连续失败3次放弃
REFRESH_RETRY_DELAY_MS = 60_000                 // 重试间隔60秒
```

### 12.4 会话管理
```typescript
// 活跃会话追踪
activeSessions: Map<sessionId, SessionHandle>
sessionStartTimes: Map<sessionId, timestamp>
sessionWorkIds: Map<sessionId, workId>
sessionIngressTokens: Map<sessionId, jwt>
sessionWorktrees: Map<sessionId, { worktreePath, worktreeBranch?, gitRoot? }>

// 心跳返回值
'ok' | 'auth_failed' | 'fatal' | 'failed'
// auth_failed(401/403) → 重新认证
// fatal(404/410) → 环境已过期
```

### 12.5 桥接状态
```typescript
type BridgeState = 'ready' | 'connected' | 'reconnecting' | 'failed'
```

---

## 13. 语音模式（完整规格）

```
平台:
  macOS: audio-capture-napi (CoreAudio + AudioUnit)
  Linux: SoX rec / ALSA arecord

参数:
  采样率: 16000 Hz
  声道: 1 (单声道)
  静默检测: 2秒无声停止, 阈值 3%

启用条件 (ALL must be true):
  1. GrowthBook: tengu_amber_quartz_disabled !== true (紧急开关)
  2. 认证: 必须是 Anthropic OAuth (不支持 API Key 或 Bedrock/Vertex)
  3. Scope: 需要 user:inference

流程: 按键录音 → 流式STT(claude.ai) → 文本输入
```

---

## 14. 费用追踪（完整规格）

```typescript
type StoredCostState = {
  totalCostUSD: number
  totalAPIDuration: number
  totalAPIDurationWithoutRetries: number
  totalToolDuration: number
  totalLinesAdded: number
  totalLinesRemoved: number
  lastDuration?: number
  modelUsage?: {
    [modelName: string]: {
      inputTokens: number
      outputTokens: number
      cacheReadInputTokens: number
      cacheCreationInputTokens: number
      webSearchRequests: number
      costUSD: number
      contextWindow: number
      maxOutputTokens: number
    }
  }
}
```

### 14.1 费用计算流程
```
API 响应 → 提取 usage 字段 → calculateUSDCost(model, usage) → 累加到 CostState
  → 按模型分别记录 token 消耗
  → 发送到 OpenTelemetry counter
  → 检查 advisor 嵌套调用的额外费用
```

### 14.2 预算强制 (--max-budget-usd)
```
CLI: --max-budget-usd <amount> (float, > 0)
传递: toolUseContext.options.maxBudgetUsd
注入到 AI 上下文:
  "Total budget: $X, Used: $Y, Remaining: $(X-Y)"
工具执行层检查: 超预算则停止
```

### 14.3 费用持久化
```
保存: saveCurrentSessionCosts() → 项目配置
恢复: restoreCostStateForSession(sessionId) → 仅当 lastSessionId 匹配
包含: 费用、时长、行数变更、模型使用量、FPS 指标
```

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

## 16. 遥测事件（完整规格）

### 16.1 核心事件（180+ 个，按类别列出关键事件）

**认证:**
```
tengu_oauth_flow_start, tengu_oauth_success, tengu_oauth_token_exchange_success
tengu_oauth_token_refresh_success/failure, tengu_oauth_auth_code_received{automatic}
tengu_oauth_api_key{status, statusCode}, tengu_oauth_roles_stored{org_role}
```

**费用/使用:**
```
tengu_advisor_tool_token_usage{model, tokens, cost_usd_micros}
tengu_max_tokens_escalate, tengu_token_budget_completed
tengu_api_success, tengu_api_error
```

**工具/权限:**
```
tengu_tool_use_success/error/cancelled
tengu_auto_mode_outcome, tengu_auto_mode_denial_limit_exceeded
```

**技能/插件:**
```
tengu_dynamic_skills_changed{skill_name, change_type}
tengu_skill_loaded, tengu_skill_tool_invocation
tengu_plugin_install/uninstall_command, tengu_marketplace_added/removed
```

**会话/查询:**
```
tengu_started, tengu_query_before/after_attachments
tengu_context_window_exceeded, tengu_context_size
tengu_compact/compact_failed, tengu_model_fallback_triggered
```

### 16.2 分析平台
- **GrowthBook**: A/B 测试 + 功能开关
  - 磁盘缓存: `~/.claude/.growthbook-cache.json`
  - 会话内存缓存
  - 新安装使用默认值（不依赖服务端）
- **Datadog/Statsig**: 运营分析
- **OpenTelemetry**: 费用/token 指标

### 16.3 PII 保护
- 类型标记: `AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS`
- 只发送: 模型名、token 数、时长、退出码
- 不发送: 邮箱、文件路径、代码内容

---

## 17. 设置系统（完整规格）

### 17.1 设置来源优先级（6层）
```
1. Plugin base (最低)
2. User: ~/.claude/settings.json
3. Project: .claude/settings.json
4. Local: .claude/settings.local.json
5. Flag: --settings CLI 参数 或 CLAUDE_CODE_FLAG_SETTINGS_PATH
6. Policy (最高):
   - Remote: 企业 MDM 同步
   - macOS: /Library/Managed Preferences/ plist
   - Windows: HKLM registry + HKCU fallback
   - File: .claude/managed-settings.json + .claude/managed-settings.d/*.json
```

### 17.2 关键设置字段
```typescript
// API & 认证
apiKeyHelper?, awsCredentialExport?, gcpAuthRefresh?

// 文件
fileSuggestion?: { type: 'command', command }
respectGitignore?: boolean
cleanupPeriodDays?: number

// 环境
env?: Record<string, string>

// 模型
model?, availableModels?, modelOverrides?

// 权限
permissions?: { allow: string[], deny: string[], ask: string[] }

// MCP
enableAllProjectMcpServers?, enabledMcpjsonServers?
allowedMcpServers?, deniedMcpServers?

// Hooks
hooks?: { PreToolUse, PostToolUse, Notification, SessionStart, SessionEnd, Stop, ... }
disableAllHooks?: boolean
allowManagedHooksOnly?: boolean

// 企业管控
allowManagedPermissionRulesOnly?: boolean
strictPluginOnlyCustomization?: boolean | string[]

// 其他
defaultShell?: 'bash' | 'powershell'
attribution?: { commit?, pr? }
worktree?: { symlinkDirectories, sparsePaths }
statusLine?: boolean
```

### 17.3 设置校验
- Zod schema 校验: `SettingsSchema().safeParse(data)`
- 无效权限规则: 校验前过滤
- 缺失设置: 返回 null（部分读取降级）
- 会话级缓存: 启动时解析一次，需重启生效

---

## 18. 技能系统（完整规格）

### 18.1 技能文件格式
```yaml
---
name: "Display Name"
description: "Short description"
when_to_use: "When this skill is relevant"
version: "1.0.0"
model: "claude-opus-4-6" | "inherit"
user-invocable: true | false
allowed-tools: [Read, Grep, Glob]
argument-hint: "argument help text"
arguments: ["arg1", "arg2"] | "single-arg"
effort: "low" | "medium" | "high" | 1-10
context: "fork"              # fork = 在子智能体中执行
agent: "agent-name"
shell: "bash" | "powershell"
paths: "/path/**"            # 适用路径 glob
hooks:
  PreToolUse: [...]
  PostToolUse: [...]
---

Markdown prompt content...
(${CLAUDE_SKILL_DIR} 展开为技能文件目录)
```

### 18.2 技能来源（6层，后覆盖前）
```
bundled < managed < plugin < projectSettings < userSettings < mcp
```

### 18.3 技能发现路径
```
用户: ~/.claude/skills/
项目: .claude/skills/
本地: .claude/skills/ (.gitignore'd)
管理: 企业策略目录
插件: 通过 plugin.json
MCP: 通过 MCP server resources 端点
```

### 18.4 去重
- 通过 `realpath()` 解析符号链接到规范路径
- 同路径不重复加载

---

## 19. Vim 模式（完整规格）

### 19.1 状态机
```
INSERT: { mode: 'INSERT', insertedText }
NORMAL: { mode: 'NORMAL', command: CommandState }
  CommandState:
    idle → count → operator → operatorCount → operatorFind → operatorTextObj
                ↘ find → g → operatorG → replace → indent
```

### 19.2 支持的操作
```
Operators: d(删除), c(修改), y(复制)
Motions: h, l, j, k, w, b, e, W, B, E, 0, ^, $, G
Find: f, F, t, T (查找字符)
Text Objects: i/a + w/W/"/'/`/(/)/[/]/{/}/</>
行操作: dd, cc, yy, >>, <<
字符操作: x(删字符), r(替换字符), ~(大小写切换)
粘贴: p, P (自动检测行/字符模式)
行操作: J(合并行), o/O(新行)
重复: .(dot repeat，记录并重放上次操作)
寄存器: 无名寄存器存储最近删除/复制内容
查找重复: ;(重复上次 f/F/t/T)
```

### 19.3 RecordedChange (dot repeat 记录)
```typescript
type RecordedChange =
  | { type: 'insert', text }
  | { type: 'operator', op, motion, count }
  | { type: 'operatorTextObj', op, scope, objType, count }
  | { type: 'operatorFind', op, find, char, count }
  | { type: 'replace' | 'x' | 'toggleCase' | 'indent' | 'openLine' | 'join', ... }
```
