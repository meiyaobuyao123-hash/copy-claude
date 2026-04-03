# Claude Code v2.1.88 — 产品需求文档 (PRD)

> 基于 Anthropic 泄露的 v2.1.88 完整 TypeScript 源码（1902 个文件，51 万行）逆向编写。
> 每个功能分两层：上面大白话给产品经理看，下面「开发规格」给工程师看。

---

## 一、产品概述

### 一句话

Claude Code 是一个跑在终端里的 AI 编程助手。你用自然语言告诉它要做什么，它就自动帮你读代码、改代码、跑命令、搜文件、提交 Git、甚至帮你调度多个 AI 同时干活。

### 技术栈

| 层 | 选型 |
|---|------|
| 运行时 | Node.js >= 18 / Bun |
| 语言 | TypeScript（1884 个 .ts/.tsx 文件） |
| 终端 UI | React 18 + Ink（React 的终端版） |
| CLI 框架 | Commander.js |
| Schema 校验 | Zod |
| 代码搜索 | 内嵌 ripgrep 二进制 |
| AI 后端 | Anthropic Messages API (`/v1/messages`) |
| 打包 | esbuild → 单文件 `cli.js` |
| 分发 | npm 包 `@anthropic-ai/claude-code` |

### 源码目录结构（55 个模块）

```
src/
├── assistant/      # 会话历史管理
├── bootstrap/      # 启动初始化
├── bridge/         # IDE 集成（VS Code / JetBrains）
├── buddy/          # 队友功能
├── cli/            # 命令行入口
├── commands/       # 103+ 斜杠命令实现
├── components/     # 146 个 React/Ink UI 组件
├── constants/      # 常量定义（23 个子目录）
├── context/        # React Context（通知、弹窗、FPS）
├── coordinator/    # 多智能体协调器
├── entrypoints/    # SDK/CLI 入口类型
├── hooks/          # 87 个自定义 React Hook
├── ink/            # 终端 UI 框架（布局、渲染、事件）
├── keybindings/    # 快捷键配置
├── memdir/         # 记忆系统（MEMORY.md）
├── migrations/     # 版本迁移脚本
├── plugins/        # 插件系统
├── query/          # 查询执行系统
├── remote/         # 远程执行/Agent
├── schemas/        # JSON Schema 定义
├── screens/        # UI 页面
├── server/         # 服务端功能
├── services/       # 核心服务（OAuth、MCP、压缩等）
├── skills/         # 技能/斜杠命令加载器
├── state/          # 全局状态管理（AppState）
├── tasks/          # 后台任务（7 种类型）
├── tools/          # 40+ 工具实现
├── types/          # 类型定义
├── upstreamproxy/  # 代理功能
├── utils/          # 331 个工具函数
├── vim/            # Vim 模式
└── voice/          # 语音输入
```

---

## 二、CLI 命令与参数

### 2.1 主命令

```
claude [prompt] [options]
```

**核心参数**（产品经理需要知道的）：

| 参数 | 干什么 | 例子 |
|------|--------|------|
| `[prompt]` | 直接传问题 | `claude "解释这段代码"` |
| `-p, --print` | 问完就退出（脚本用） | `claude -p "分析日志"` |
| `-c, --continue` | 继续上次对话 | `claude -c` |
| `-r, --resume` | 恢复指定会话 | `claude -r abc123` |
| `--model` | 选模型 | `claude --model opus` |
| `--effort` | 思考深度 | `claude --effort max` |

> **开发规格 — 完整参数表**:
>
> | 参数 | 类型 | 默认 |
> |------|------|------|
> | `-d, --debug [filter]` | string/bool | false |
> | `--verbose` | bool | false |
> | `-p, --print` | bool | false |
> | `--output-format` | "text"\|"json"\|"stream-json" | "text" |
> | `--input-format` | "text"\|"stream-json" | "text" |
> | `-c, --continue` | bool | false |
> | `-r, --resume [id]` | string | - |
> | `--session-id` | uuid | - |
> | `-n, --name` | string | - |
> | `--model` | string | - |
> | `--effort` | "low"\|"medium"\|"high"\|"max" | - |
> | `--max-turns` | number | - |
> | `--max-budget-usd` | number | - |
> | `--system-prompt` | string | - |
> | `--append-system-prompt` | string | - |
> | `--permission-mode` | string | - |
> | `--tools` | string[] | 默认工具列表 |
> | `--allowedTools` | string[] | - |
> | `--disallowedTools` | string[] | - |
> | `--dangerously-skip-permissions` | bool | false |
> | `--mcp-config` | string[] | - |
> | `--add-dir` | string[] | - |
> | `--ide` | bool | false |
> | `--chrome` | bool | - |
> | `--bare` | bool | false |
> | `--thinking` | "enabled"\|"adaptive"\|"disabled" | - |
> | `--json-schema` | string | - |
> | `--fallback-model` | string | - |
> | `--workload` | string | - |
> | `--betas` | string[] | - |
> | `--init` | bool | false |
> | `--fork-session` | bool | false |
> | `--from-pr` | string | - |
> | `-v, --version` | - | - |

### 2.2 子命令

| 命令 | 做什么 |
|------|--------|
| `claude mcp serve` | 以 MCP 服务端模式运行 |
| `claude mcp add-json <name> <json>` | 添加 MCP 服务 |
| `claude mcp remove <name>` | 删除 MCP 服务 |
| `claude auth login` | 登录 |
| `claude auth status` | 查看登录状态 |
| `claude plugin install/list/uninstall` | 管理插件 |
| `claude server` | 启动服务端模式 |
| `claude ssh <host>` | 远程 SSH 连接 |
| `claude task create/list/get/update` | 管理后台任务 |
| `claude agents` | 查看可用 Agent |
| `claude log` | 查看历史日志 |
| `claude export` | 导出会话 |
| `claude doctor` | 健康检查 |

---

## 三、工具系统（40+ 工具）

工具是 AI 的"手"——AI 通过调用工具来操作你的电脑。

### 3.1 文件操作类

| 工具 | 名称 | 做什么 | 需确认吗 |
|------|------|--------|----------|
| FileReadTool | `Read` | 读取文件内容（支持文本/图片/PDF/Notebook） | 不用 |
| FileWriteTool | `Write` | 创建或覆盖文件 | 要 |
| FileEditTool | `Edit` | 精准替换文件中某段内容 | 要 |
| NotebookEditTool | `NotebookEdit` | 编辑 Jupyter Notebook 单元格 | 要 |
| GlobTool | `Glob` | 按文件名模式搜索（如 `**/*.ts`） | 不用 |
| GrepTool | `Grep` | 按内容搜索代码（正则，基于 ripgrep） | 不用 |

> **开发规格 — FileReadTool inputSchema**:
> ```json
> { "file_path": "string(必填)", "offset": "number", "limit": "number", "pages": "string(PDF页码)" }
> ```
> 默认 token 上限 10000，支持图片/PDF/ipynb。读取后存入 readFileState `{content, mtime}`。
>
> **FileEditTool inputSchema**:
> ```json
> { "file_path": "string(必填)", "old_string": "string(必填)", "new_string": "string(必填)", "replace_all": "boolean" }
> ```
> 最大文件 1GiB。必须先 Read 再 Edit。检测外部修改（mtime）。支持引号规范化。
>
> **GrepTool inputSchema**:
> ```json
> { "pattern": "string(必填,正则)", "path": "string", "glob": "string", "output_mode": "'content'|'files_with_matches'|'count'", "-B": "number", "-A": "number", "-C": "number", "-n": "boolean(默认true)", "-i": "boolean", "type": "string", "head_limit": "number(默认250)", "offset": "number", "multiline": "boolean" }
> ```
> 结果最大 20000 字符。

### 3.2 命令执行类

| 工具 | 名称 | 做什么 | 需确认吗 |
|------|------|--------|----------|
| BashTool | `Bash` | 执行终端命令 | 沙箱模式不用，普通模式要 |
| PowerShellTool | `PowerShell` | Windows 上执行 PowerShell | 要 |

**BashTool 沙箱规则**（跟之前一样，但现在有更多细节）:

不用确认的（sandbox=true）: `ls, cat, head, tail, rg, find, du, df, ps, file, stat, wc, diff, git status/log/diff/show/branch, npm list, echo, pwd, whoami, which, --version, --help`

要确认的（sandbox=false）: `npm run/install, cargo build/test, make, pytest, jest, gh, touch, mkdir, rm, mv, cp, git add/commit/push, curl, ssh`

> **开发规格**: 默认超时 120000ms，最大 600000ms，输出截断 30000 字符。支持后台运行（`run_in_background`）。15-120 秒无输出自动转后台。

### 3.3 网络类

| 工具 | 名称 | 做什么 | 需确认吗 |
|------|------|--------|----------|
| WebFetchTool | `WebFetch` | 抓取网页内容并用 AI 提取信息 | 不用（有预批准域名列表） |
| WebSearchTool | `WebSearch` | 搜索互联网 | 不用 |

> **开发规格 — WebFetchTool**: 输入 `{url, prompt}`，最大结果 100000 字符。HTML 转 Markdown 后用小模型处理。认证 URL 会失败。
>
> **WebSearchTool**: 输入 `{query(最少2字), allowed_domains?, blocked_domains?}`，最多 8 次搜索。

### 3.4 任务管理类

| 工具 | 名称 | 做什么 |
|------|------|--------|
| TodoWriteTool | `TodoWrite` | 更新会话级任务清单 |
| TaskCreateTool | `TaskCreate` | 创建后台任务 |
| TaskUpdateTool | `TaskUpdate` | 更新任务状态 |
| TaskGetTool | `TaskGet` | 查看任务详情 |
| TaskStopTool | `TaskStop` | 停止任务 |
| TaskListTool | `TaskList` | 列出所有任务 |
| TaskOutputTool | `TaskOutput` | 获取任务输出 |

> **开发规格 — TaskUpdateTool inputSchema**:
> ```json
> { "taskId": "string(必填)", "subject": "string", "description": "string", "activeForm": "string", "status": "'pending'|'in_progress'|'completed'|'deleted'", "addBlocks": "string[]", "addBlockedBy": "string[]", "owner": "string", "metadata": "object" }
> ```

### 3.5 智能体与协作类

| 工具 | 名称 | 做什么 |
|------|------|--------|
| AgentTool | `Agent` | 生成子智能体执行任务（核心！） |
| SendMessageTool | `SendMessage` | 给其他智能体发消息 |
| SkillTool | `Skill` | 执行技能/斜杠命令 |
| AskUserQuestionTool | `AskUserQuestion` | 向用户提问 |

**AgentTool 是最强大的工具** — AI 可以派出"分身"去做子任务：

> **开发规格 — AgentTool inputSchema**:
> ```json
> { "description": "string(必填,3-5词)", "prompt": "string(必填,任务描述)", "subagent_type": "string(可选,智能体类型)", "model": "'sonnet'|'opus'|'haiku'", "run_in_background": "boolean", "name": "string", "isolation": "'worktree'|'remote'", "cwd": "string" }
> ```

### 3.6 定时任务类

| 工具 | 名称 | 做什么 |
|------|------|--------|
| CronCreateTool | `CronCreate` | 创建定时/周期任务 |
| CronDeleteTool | `CronDelete` | 删除定时任务 |
| CronListTool | `CronList` | 列出所有定时任务 |

> **开发规格**: cron 表达式（5字段，本地时区），最多 50 个任务，周期任务 7 天自动过期。支持 `durable` 模式持久化到磁盘。

### 3.7 工作区与计划类

| 工具 | 名称 | 做什么 |
|------|------|--------|
| EnterWorktreeTool | `EnterWorktree` | 创建 Git 隔离工作区 |
| ExitWorktreeTool | `ExitWorktree` | 退出工作区 |
| EnterPlanModeTool | `EnterPlanMode` | 进入计划模式（只读不改） |
| ExitPlanModeTool | `ExitPlanMode` | 退出计划模式 |

### 3.8 其他工具

| 工具 | 名称 | 做什么 |
|------|------|--------|
| RemoteTriggerTool | `RemoteTrigger` | 调用 claude.ai 远程触发器 API |
| ConfigTool | `Config` | 读取/修改配置 |
| ToolSearchTool | `ToolSearch` | 搜索延迟加载的工具 |
| MCPTool | MCP 动态工具 | 调用 MCP 服务器提供的工具 |
| ListMcpResourcesTool | `ListMcpResources` | 列出 MCP 资源 |
| ReadMcpResourceTool | `ReadMcpResource` | 读取 MCP 资源 |
| McpAuthTool | `McpAuth` | MCP 认证 |
| LSPTool | `LSP` | 调用语言服务（代码补全、跳转定义等） |

---

## 四、斜杠命令（103+ 个）

按功能分组（产品经理只需关注加粗的常用命令）：

### 会话管理
| 命令 | 做什么 |
|------|--------|
| **/clear** | 清空对话 |
| **/compact** | 压缩上下文 |
| **/help** | 帮助 |
| **/exit** | 退出 |
| /cost | 显示花费 |
| /status | 连接状态 |
| /resume | 恢复会话 |
| /export | 导出会话 |
| /stats | 会话统计 |
| /summary | 总结对话 |
| /insights | 会话分析报告 |

### 模型与设置
| 命令 | 做什么 |
|------|--------|
| **/model** | 切换 AI 模型 |
| **/effort** | 设置思考深度(low/medium/high/max) |
| **/fast** | 切换快速模式 |
| **/config** | 管理设置 |
| **/permissions** | 配置权限 |
| **/theme** | 更换主题 |
| **/vim** | 切换 Vim 模式 |
| /plan | 切换计划模式 |
| /think | 思考模式 |

### Git 与代码
| 命令 | 做什么 |
|------|--------|
| **/commit** | AI 帮你提交代码 |
| /commit-push-pr | 提交+推送+建 PR 一条龙 |
| /diff | 查看未提交改动 |
| /review | AI 代码审查 |
| /ultrareview | 深度代码审查 |
| /security-review | 安全审查 |
| /autofix-pr | 自动修复 PR 审查反馈 |
| /rewind | 回滚文件到之前状态 |

### 开发工具
| 命令 | 做什么 |
|------|--------|
| **/doctor** | 诊断问题 |
| **/mcp** | 管理 MCP 插件 |
| **/ide** | 连接 IDE |
| **/browser** | 连接浏览器 |
| /plugin list/install/uninstall | 管理插件 |
| /skills | 查看可用技能 |
| /tasks | 管理后台任务 |
| /hooks | 管理生命周期钩子 |

### 账户
| 命令 | 做什么 |
|------|--------|
| **/login** | 登录 |
| /logout | 退出登录 |
| /privacy-settings | 隐私设置 |

### 未公开的实验功能
| 命令 | 功能开关 | 做什么 |
|------|----------|--------|
| /voice | VOICE_MODE | 语音输入 |
| /proactive | PROACTIVE | AI 主动行动模式 |
| /assistant | KAIROS | 助手模式 |
| /bridge | BRIDGE_MODE | 移动端桥接 |
| /workflows | WORKFLOW_SCRIPTS | 工作流脚本 |
| /ultraplan | ULTRAPLAN | 超级计划模式 |
| /buddy | BUDDY | 队友系统 |
| /peers | UDS_INBOX | 收件箱 |
| /fork | FORK_SUBAGENT | 子智能体分叉 |

---

## 五、权限系统

### 大白话版

AI 做的每件事都要过安全检查。系统用规则决定：自动放行？问你？还是直接拒绝？

你还可以选不同的"权限模式"来控制 AI 的自主程度：

| 模式 | 意思 |
|------|------|
| default | 默认，危险操作问你 |
| plan | 只读模式，AI 只能看不能改 |
| acceptEdits | 自动接受文件编辑 |
| dontAsk | 不问直接做（危险⚠️） |
| bypassPermissions | 跳过所有检查（仅限 Docker） |
| auto | AI 自动判断是否安全（用 ML 分类器） |

> **开发规格 — 权限判断流程**:
> ```
> 工具调用 → 匹配规则（deny > allow > ask）
>   → 如果 auto 模式: 调用 YOLO 分类器判断
>     → 分类器返回 {shouldBlock, reason, thinking}
>     → 两阶段: fast(tool_use) + thinking(XML)
>   → 如果 ask: 渲染确认 UI
>     → 用户选择 [允许/拒绝/始终允许]
>     → "始终允许"写入 PermissionRule
>   → 重复拒绝追踪: 达到阈值后降级为直接提示
> ```
>
> **规则来源优先级**: policySettings(企业) > cliArg > session > userSettings > projectSettings > localSettings
>
> **PermissionRule 结构**:
> ```typescript
> { source: 'userSettings'|'projectSettings'|'localSettings'|'flagSettings'|'policySettings'|'cliArg'|'command'|'session',
>   ruleBehavior: 'allow'|'deny'|'ask',
>   ruleValue: { toolName: string, ruleContent?: string } }
> ```

---

## 六、对话系统

### 大白话版

你输入问题 → AI 思考并调用工具 → 显示结果 → 你继续问 → 循环。AI 的回答是"边想边说"（流式），不用等。

### 对话过长怎么办

AI 有"记忆上限"。快到上限时：
- **自动压缩**: 把早期对话变成摘要
- **手动压缩**: 输入 `/compact`
- 压缩保留：文件讨论、决策、待办任务、当前工作

> **开发规格 — 对话循环（异步生成器）**:
> ```
> query(params) → AsyncGenerator<Event>
>   1. 调用 API (stream=true)
>   2. yield StreamEvent (实时文本)
>   3. 遇到 tool_use → 执行工具 → tool_result 追加到 messages
>   4. 继续调用 API（下一轮）
>   5. 遇到 end_turn → 等待用户输入
>   6. 达到 max_turns 或 max_budget_usd → 停止
> ```
>
> **压缩系统 (src/services/compact/)**:
> - `autoCompact.ts` — 自动触发（token 阈值）
> - `microCompact.ts` — 轻量级压缩
> - `compact.ts` — 完整压缩（fork 子智能体执行）
> - `sessionMemoryCompact.ts` — 压缩时提取记忆存入 MEMORY.md
> - 压缩输出段: Primary Request, Technical Concepts, Files/Code, Errors/Fixes, Pending Tasks, Current Work, Next Steps

---

## 七、认证系统

### 大白话版

| 方式 | 适合谁 | 怎么用 |
|------|--------|--------|
| OAuth（默认） | 所有用户 | 浏览器弹出授权页，自动完成 |
| API Key | 开发者 | 设环境变量 `ANTHROPIC_API_KEY` |
| SSO | 企业员工 | 通过公司系统登录 |

> **开发规格 — OAuth 2.0 + PKCE**:
> - 授权URL: `https://claude.com/cai/oauth/authorize` (Claude.ai) / `https://platform.claude.com/oauth/authorize` (Console)
> - Token URL: `https://platform.claude.com/v1/oauth/token`
> - Client ID: `9d1c250a-e61b-44d9-88ed-5944d1962f5e`
> - Scopes: `user:inference`, `user:profile`, `user:sessions:claude_code`, `user:mcp_servers`, `user:file_upload`, `org:create_api_key`
> - 流程: PKCE code_verifier → 本地监听 localhost:PORT/callback → 浏览器授权 → 拿 code → 换 token → 存入 Keychain
> - Token 过期前 5 分钟自动刷新

---

## 八、MCP 插件系统

### 大白话版

MCP = 插件标准。让 AI 能连接数据库、Jira、Slack、浏览器等外部工具。

支持 7 种连接方式：stdio（本地进程）、SSE（HTTP 流）、HTTP、WebSocket、SDK、IDE 连接、Claude.ai 代理。

### 管理方式
```bash
claude mcp add-json my-db '{"command":"node","args":["db-server.js"]}'
claude mcp list
claude mcp remove my-db
```

> **开发规格 — MCP 协议**:
> - 版本: `"2025-03-26"`（兼容 `"2024-11-05"`, `"2024-10-07"`）
> - 通信: JSON-RPC 2.0
> - 传输: stdio / sse / http / ws / sdk / ws-ide / sse-ide / claudeai-proxy
> - 初始化: `initialize` → capability 协商 → `notifications/initialized`
> - 能力: tools, resources, prompts, logging, completions, sampling, roots
> - 配置范围: local / user / project / dynamic / enterprise / claudeai / managed
> - OAuth: 完整 PKCE 流 + 跨应用访问(XAA/SEP-990) + Keychain 存储
> - 错误码: -32000(连接关闭), -32001(超时), -32700~-32603(JSON-RPC标准)
> - 超时: 60000ms

---

## 九、多智能体协调器

### 大白话版

这是一个未公开的高级功能。AI 可以作为"指挥官"，派出多个"工人" AI 同时干活。比如：
- 指挥官分析需求 → 派 3 个工人分别查不同模块代码 → 汇总结果 → 派工人去改代码

### 任务类型（7 种后台任务）

| 类型 | 做什么 |
|------|--------|
| LocalShellTask | 本地命令执行 |
| LocalAgentTask | 本地子智能体 |
| RemoteAgentTask | 远程子智能体 |
| InProcessTeammateTask | 进程内队友 |
| LocalWorkflowTask | 工作流执行 |
| MonitorMcpTask | MCP 监控 |
| DreamTask | 后台"做梦"任务 |

> **开发规格**: 通过 `CLAUDE_CODE_COORDINATOR_MODE` 环境变量启用。协调器有专属 System Prompt，定义了 Research → Synthesis → Implementation → Verification 工作流。工人可用工具: Bash, FileRead, FileEdit, MCP tools, Skills。协调器专属工具: TeamCreate, TeamDelete, SendMessage, SyntheticOutput。

---

## 十、记忆系统

### 大白话版

Claude Code 能"记住"跨会话的信息。在项目里有个 MEMORY.md 文件，AI 会自动读取和更新。

记忆分类：
- **用户记忆**: 你的角色、偏好（如"我是后端开发，喜欢简洁回答"）
- **反馈记忆**: 你纠正过 AI 的行为（如"不要加注释"）
- **项目记忆**: 项目进展、决策（如"下周四代码冻结"）
- **引用记忆**: 外部资源位置（如"bug 在 Linear 的 INGEST 项目里追踪"）

> **开发规格 (src/memdir/)**:
> - 入口: `MEMORY.md`（最大 200 行 / 25KB）
> - 超限处理: 行截断 → 字节截断 → 追加警告
> - 记忆文件格式: YAML frontmatter (`name, description, type`) + Markdown 内容
> - 自动提取: 压缩对话时自动识别值得记住的信息
> - 团队记忆: 支持团队间共享（TEAMMEM 功能开关）

---

## 十一、语音模式

### 大白话版

按住快捷键说话，AI 听懂后执行。目前是实验功能。

> **开发规格 (src/voice/)**:
> - macOS: 原生 `audio-capture-napi`（CoreAudio + AudioUnit）
> - Linux: SoX `rec` 或 ALSA `arecord`
> - 采样: 16000Hz，单声道
> - 静默检测: 2 秒无声自动停止，阈值 3%
> - STT: 流式语音转文字

---

## 十二、IDE 集成

### 大白话版

Claude Code 能和你的编辑器联动。在 VS Code 或 JetBrains 里装了扩展后，终端和编辑器可以共享上下文。

> **开发规格 (src/bridge/)**:
> - VS Code 扩展 ID: `anthropic.claude-code`
> - 连接方式: SSE / WebSocket
> - 认证: JWT Token
> - 支持: 多会话管理、会话恢复、权限中继
> - 重连策略: 指数退避 (2s-120s-600s)
> - 状态更新: 1 秒轮询

---

## 十三、配置系统

### 存储位置

| 层级 | 路径 | 优先级 |
|------|------|--------|
| 企业策略 | 企业管理平台下发 | 最高 |
| 用户级 | `~/.claude/globalSettings.json` | 高 |
| 项目级 | `.claude/settings.json` | 中 |
| 本地级 | `.claude/.local/settings.json` | 低 |

### 功能开关（Feature Flags）

| 开关 | 功能 |
|------|------|
| PROACTIVE | AI 主动模式 |
| KAIROS | 助手模式 |
| VOICE_MODE | 语音 |
| COORDINATOR_MODE | 多智能体协调 |
| BRIDGE_MODE | 移动桥接 |
| WORKFLOW_SCRIPTS | 工作流 |
| MCP_SKILLS | MCP 技能 |
| BUDDY | 队友系统 |
| TOKEN_BUDGET | Token 预算 |
| REACTIVE_COMPACT | 响应式压缩 |
| BG_SESSIONS | 后台会话 |

---

## 十四、费用追踪

> **开发规格 (src/cost-tracker.ts)**:
> ```typescript
> StoredCostState: {
>   totalCostUSD: number,
>   totalAPIDuration: number,
>   totalLinesAdded: number,
>   totalLinesRemoved: number,
>   modelUsage: { [model]: { inputTokens, outputTokens, cacheReadTokens, cacheCreationTokens, cost } }
> }
> ```
> 按模型分别统计 token 用量和费用。支持 `--max-budget-usd` 限制单次会话花费。

---

## 十五、遥测系统

| 事件 | 触发 |
|------|------|
| tengu_init | 启动 |
| tengu_mcp_* | MCP 操作 |
| tengu_ext_installed | IDE 扩展安装 |
| shell_snapshot_* | Shell 环境创建 |
| tengu_binary_feedback_* | 用户反馈 |

使用 GrowthBook 做 A/B 测试，Datadog/Statsig 做分析，内置 PII 脱敏。

---

## 十六、System Prompt 核心规则

```
身份: "You are Claude Code, Anthropic's official CLI for Claude."

安全: 拒绝恶意代码、不猜 URL、检查文件是否恶意

语气: 极简（4行以内）、不废话、一个词能答就不写一段

主动性: 只在被要求时行动、不自作主张总结

代码规范: 模仿项目风格、不加注释、先检查依赖再用

Git: 并行执行 status+diff+log → 分析 → 提交（HEREDOC格式，尾部加 Co-Authored-By）

PR: 并行执行 status+diff+log+diff main...HEAD → 分析 → gh pr create
```

---

## 十七、术语表

| 术语 | 大白话 |
|------|--------|
| CLI | 终端/命令行 |
| Token | AI 处理文字的最小单位 |
| MCP | 插件标准 |
| PKCE | 一种安全的登录方式 |
| Worktree | Git 隔离工作区 |
| System Prompt | AI 的"人设说明书" |
| Feature Flag | 功能开关，灰度发布用 |
| 分类器/Classifier | AI 自动判断操作是否安全的模型 |
| Coordinator | 多智能体指挥官 |
| YOLO 模式 | AI 自动判断权限（不问你） |
| SSE | 服务器推送事件（一种实时通信方式） |
| JWT | 一种令牌格式，用于认证 |
