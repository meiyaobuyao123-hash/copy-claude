# Claude Code v1.0.3 — 产品需求文档 (PRD)

> 本文档基于 `@anthropic-ai/claude-code@1.0.3` 逆向分析编写。
> 阅读说明：每个功能先用大白话讲"是什么、为什么"，再在「开发规格」里给出精确技术参数。产品经理看前半段，开发看后半段。

---

## 一、这个产品是什么

### 一句话

Claude Code 是一个跑在终端里的 AI 编程助手。你在终端里打字告诉它你想做什么，它就自动帮你读代码、改代码、跑命令、搜文件，全程不用离开终端。

### 打个比方

- **GitHub Copilot** = 坐在你 VS Code 编辑器里的助手，你打字它补全
- **Claude Code** = 坐在你终端里的全能工程师，你说话它动手干活

### 为什么做成终端工具

因为不管你用什么编辑器（VS Code、Vim、Emacs、JetBrains），你一定会用终端。做成终端工具 = 兼容所有开发者的工作方式。而且在远程服务器上 SSH 也能直接用。

### 安装方式

一行命令：`npm install -g @anthropic-ai/claude-code`

安装完输入 `claude` 就能用。

---

## 二、给谁用的

| 用户 | 为什么需要 |
|------|-----------|
| 后端工程师 | 天天泡在终端里，不想为了 AI 切换到别的工具 |
| 运维/DevOps | 主要靠命令行工作，需要 AI 帮忙写脚本、查问题 |
| 全栈开发 | 同时维护好几个项目，需要快速搞懂陌生代码 |
| Vim/终端重度用户 | 就是不想用 GUI 编辑器 |

---

## 三、产品功能全景图

把所有功能按重要程度分三级：

**P0 = 没这个就不能用：**
- 对话系统（和 AI 聊天）
- 文件操作（读/写/编辑文件）
- 执行命令（跑终端命令）
- 代码搜索（找文件、搜内容）
- 安全权限（防止 AI 乱来）
- 登录认证

**P1 = 没这个体验很差：**
- 上下文压缩（聊太久不会"失忆"）
- Git 集成（帮你提交代码、建 PR）
- 快捷命令（/help、/clear 这种）
- 任务清单（复杂任务拆步骤）
- 项目配置文件（告诉 AI 你的项目规范）
- 费用显示
- 界面美化

**P2 = 锦上添花：**
- MCP 插件系统（接入第三方工具）
- 脚本模式（在自动化脚本里用 AI）
- 切换不同 AI 模型
- IDE 扩展（VS Code / JetBrains 联动）

---

## 四、P0 功能详细说明

### 4.1 对话系统

#### 是什么

启动程序后进入一个对话界面，你打字问问题，AI 回答。跟微信聊天一样，但 AI 不只会说话——它会直接动手操作你的文件和命令。

#### 用起来是这样的

```
你打开终端，输入 claude 回车
  → 看到欢迎界面
  → 你输入："帮我看看这个项目是干什么的"
  → AI 自动扫描文件、读取关键文件、给你解释（边想边说，不用等）
  → 你继续问："找一下处理支付的代码"
  → AI 自动搜索、找到、读取、解释
  → 想退出就按 Ctrl+C
```

#### AI 的"性格设定"（非常关键，决定产品体感）

| 规则 | 说明 | 举例 |
|------|------|------|
| 极简回答 | 能一个词回答就不写一段话 | 问"2+2"→回答"4"，不说"2加2等于4" |
| 不废话 | 不加开头语和结尾语 | 不说"根据我的分析..."、"希望对你有帮助" |
| 4 行以内 | 除非你要求详细，否则不超过 4 行 | - |
| 不主动加戏 | 你没问就不多做 | 修完 bug 就停，不自作主张总结一遍 |
| 抄作业 | 模仿你项目已有的代码风格 | 你项目用 Tab 缩进，AI 也用 Tab |
| 不加注释 | 除非你明确要求 | - |

> **开发规格**: 这些规则通过 System Prompt 注入给 AI 模型，完整文本见本文第九章。

#### 技术上怎么实现

| 项 | 规格 |
|----|------|
| 终端 UI 框架 | React 18 + Ink（React 的终端版，把组件渲染成终端文字） |
| 布局引擎 | Yoga WASM（CSS Flexbox 布局） |
| 显示效果 | 支持 Markdown 渲染、代码语法高亮、加载动画 |
| 输出方式 | 流式（AI 边想边显示，像打字机，不用等全部生成完） |
| 支持的终端 | iTerm2, Kitty, Ghostty, Apple Terminal, VS Code 终端等 |

> **开发规格 — 流式事件类型**: AI 返回消息时按顺序触发以下事件:
> `message_start` → `content_block_start` → `content_block_delta`（文本/工具调用/思考过程的增量更新）→ `content_block_stop` → `message_stop`

---

### 4.2 文件操作

AI 内置了一组"工具"，能像人一样读写文件。这是 AI 能帮你改代码的基础。

#### 4.2.1 读文件

**是什么**: AI 能打开你项目里的任何文件来看。

**能读什么**:
- 普通代码/文本文件
- 图片（PNG、JPG）——AI 看图片能理解内容
- PDF 文档（每次最多看 20 页）
- Jupyter Notebook（数据分析用的那种文件）

**限制**: 默认读前 2000 行。大文件可以指定从哪行开始看、看多少行。

**需要你确认吗**: 不用，自动执行（只是看看，又不改东西）

> **开发规格 — ReadTool**:
> - 工具名: `"Read"`
> - 只读: `true`
> - 权限: 始终 `allow`
> - 输入参数: `file_path`(必填, string), `offset`(选填, number), `limit`(选填, number)
> - 输出格式: 带行号的文本（`cat -n` 格式）
> - 副作用: 读取后存入 `readFileState` Map，记录 `{content, mtime}`

#### 4.2.2 写文件（创建新文件）

**是什么**: AI 能帮你创建新文件，或完全覆盖现有文件。

**需要你确认吗**: 要！每次写文件前会弹确认框。

**安全规则**: 如果要覆盖已有文件，AI 必须先读过这个文件（防止瞎改没看过的东西）。

> **开发规格 — WriteTool**:
> - 工具名: `"Write"`
> - 只读: `false`
> - 权限: `ask`（需用户确认）
> - 输入参数: `file_path`(必填, string), `content`(必填, string)
> - 校验规则: ① 路径不在忽略目录中 ② 文件已存在时必须先 Read 过 ③ 检测 mtime 是否被外部修改

#### 4.2.3 编辑文件（改现有代码）

**是什么**: AI 精准修改文件中的某一段，不用重写整个文件。

**工作方式**: "把这段旧代码替换成新代码"——精准查找替换。

**需要你确认吗**: 要！

**安全规则（最重要的两条）**:
1. **先读后改**: AI 必须先读过这个文件才能改。你让它改一个没看过的文件，它会自动先去读。
2. **检测别人改了没**: AI 记住每个文件的修改时间。如果你在别的编辑器改了同一个文件，AI 再改之前会发现"这文件被别人动过了"并提醒。

> **开发规格 — EditTool**:
> - 工具名: `"Edit"`
> - 只读: `false`
> - 权限: `ask`
> - 输入参数: `file_path`(必填), `old_string`(必填), `new_string`(必填), `expected_replacements`(选填, 默认1)
> - 校验: ① `old_string` 在文件中存在 ② 匹配次数 = `expected_replacements` ③ 文件在 readFileState 中 ④ mtime 未变

#### 4.2.4 编辑 Jupyter Notebook

**是什么**: 数据科学家用的 .ipynb 文件，AI 能编辑里面的某个代码格子。

> **开发规格 — NotebookEditTool**:
> - 工具名: `"NotebookEdit"`
> - 输入: `notebook_path`, `cell_number`(0开始), `new_source`, `cell_type`("code"/"markdown"), `edit_mode`("replace"/"insert"/"delete")

---

### 4.3 执行终端命令

#### 是什么

AI 能在你的终端里跑命令。你说"跑一下测试"，它就执行 `npm test`。你说"装一下这个依赖"，它就执行 `npm install xxx`。

#### 为什么这个很厉害

其他 AI 助手只能"建议你跑什么命令"。Claude Code 直接帮你跑。

#### 沙箱机制（最精妙的设计）

问题是：有些命令安全（比如看看文件列表），有些命令危险（比如删除文件）。总不能每条命令都问你"确认吗？"——太烦了。也不能什么都自动执行——太危险。

解决方案：**沙箱模式**。

| 命令类型 | 模式 | 需要你确认吗 | 例子 |
|----------|------|-------------|------|
| 只看不动的 | 沙箱(sandbox=true) | 不用，秒执行 | `ls`, `git status`, `cat`, `git log` |
| 要改东西的 | 非沙箱(sandbox=false) | 要确认 | `npm install`, `rm`, `git push`, `mkdir` |

**关键规则**: 如果沙箱模式执行失败报"权限不足"，系统自动切换到非沙箱重试（而不是报错给你看）。

> **开发规格 — BashTool**:
> - 工具名: `"Bash"`
> - 输入: `command`(必填), `timeout`(选填, 最大600000ms), `description`(选填), `sandbox`(选填, boolean)
> - 默认超时: 120000ms (2分钟)
> - 最大超时: 600000ms (10分钟)
> - 输出截断: 超过 30000 字符截断
> - 沙箱=true 的命令: ls, cat, head, tail, rg, find, du, df, ps, file, stat, wc, diff, git status/log/diff/show/branch, npm list, echo, pwd, whoami, which, --version, --help
> - 沙箱=false 的命令: npm run/install, cargo build/test, make, pytest, jest, gh, touch, mkdir, rm, mv, cp, git add/commit/push, ping, curl, ssh
> - Shell 环境: 优先 zsh，回退 bash；创建隔离临时目录执行

---

### 4.4 代码搜索

两个搜索工具，一个按文件名找，一个按内容找。

#### 按文件名搜（GlobTool）

你说"找到所有测试文件"，AI 用 `**/*.test.ts` 这种模式搜。

> **开发规格**: 工具名 `"Glob"`，只读，输入 `pattern`(必填) + `path`(选填)，底层用 glob 匹配

#### 按代码内容搜（GrepTool）

你说"搜一下所有调用了 sendEmail 的地方"，AI 在所有文件里搜这个关键词。

> **开发规格**: 工具名 `"Grep"`，只读，输入 `pattern`(必填, 正则) + `path`(选填) + `include`(选填, 文件类型过滤)，底层调用内嵌的 ripgrep 二进制

---

### 4.5 安全权限系统

#### 大白话版

AI 做的每件事都要过安全检查。分三档：

| 档位 | 意思 | 什么操作 |
|------|------|----------|
| 自动放行 | 安全操作，直接做 | 读文件、搜代码、看任务清单 |
| 需要确认 | 弹框让你点"同意" | 写文件、改文件、跑命令 |
| 直接拒绝 | 不让做 | 安全策略禁止的操作 |

#### 四重保护机制

1. **先读后改**: 没看过的文件不能改
2. **外部修改检测**: 别人改了你的文件，AI 知道
3. **沙箱执行**: 只读命令在受限环境跑（不能写文件、不能联网）
4. **已批准列表**: 你可以把某个操作设为"以后都不用问我"

> **开发规格 — 权限判断流程**:
> ```
> 工具被调用 → checkPermissions(input) → 返回 {behavior, updatedInput}
>   "allow" → 直接执行
>   "ask"  → 渲染确认 UI → 用户选 [允许/拒绝/始终允许]
>   "deny" → 拒绝，显示错误信息
> ```
>
> **readFileState 数据结构**:
> ```
> Map<文件路径, {content: 文件内容, timestamp: 修改时间}>
> ```
> ReadTool 读取后写入，WriteTool/EditTool 修改前检查。

---

### 4.6 登录认证

使用前需要登录，因为底层要调 Anthropic 的 AI 接口。

| 登录方式 | 适合谁 | 怎么操作 |
|----------|--------|----------|
| API Key | 个人开发者 | 输入一串密钥 |
| SSO | 企业员工 | 通过公司系统登录 |
| OAuth | 通用 | 浏览器跳转授权 |

首次运行时提示登录，之后自动记住。用 `/login` 可以切换账号。

---

## 五、P1 功能详细说明

### 5.1 上下文压缩

**问题**: AI 有"记忆上限"（几万~几十万字）。聊久了会忘记前面的内容。

**解决**: 快到上限时，把前面的对话压缩成摘要，释放空间。

| 操作 | 说明 |
|------|------|
| 手动 | 输入 `/compact` |
| 自动 | 快到上限时自动触发 |

压缩后保留：讨论过的文件、做出的决策、待完成的任务。

> **开发规格**: 调用 `POST /v1/messages/count_tokens?beta=true` 估算 token 用量，接近上限时触发压缩。

---

### 5.2 Git 集成

AI 能帮你完成代码提交的全流程：

```
你: "帮我提交这次改动"
AI 做了这些（自动的）:
  1. git status — 看你改了什么
  2. git diff — 看改动详情
  3. git log — 学习你的 commit 风格
  4. 生成 commit 消息 — 给你确认
  5. git add + git commit — 提交
```

也能帮你创建 Pull Request（用 `gh` 命令），自动写标题和描述。

> **开发规格**: Git commit 和 PR 创建的完整流程写在 System Prompt 里，AI 按步骤执行。commit 消息用 HEREDOC 格式传递，尾部自动加 `Co-Authored-By: Claude <noreply@anthropic.com>`。

---

### 5.3 快捷命令

| 命令 | 做什么 |
|------|--------|
| `/help` | 查看帮助 |
| `/clear` | 清空对话 |
| `/compact` | 压缩上下文 |
| `/config` | 管理设置 |
| `/model` | 切换 AI 模型 |
| `/doctor` | 诊断工具状态 |
| `/mcp` | 管理插件 |
| `/login` | 登录/切换账号 |

---

### 5.4 任务清单

复杂任务时，AI 先列出步骤，再逐个执行，实时更新进度：

```
[已完成] 读取源码
[进行中] 分析现有逻辑      ← 当前在做这个
[待办]   设计方案
[待办]   写代码
[待办]   跑测试
```

规则：同一时间只有一个任务是"进行中"的。

> **开发规格**: TodoWriteTool 的 todo 对象结构: `{id, content, status: "pending"|"in_progress"|"completed"|"cancelled", priority: "high"|"medium"|"low"}`

---

### 5.5 项目配置文件（CLAUDE.md）

在项目根目录放一个叫 `CLAUDE.md` 的文件，里面写给 AI 的指令。AI 每次打开项目都会自动读取。

相当于给 AI 一份"项目须知"：
```markdown
- 这个项目用 TypeScript + React
- 缩进用 2 个空格
- commit 消息写中文
- 测试用 Jest
```

> **开发规格**: CLAUDE.md 内容作为 System Prompt 的一部分注入。配置分层: 项目级(.claude/) > 全局级(~/.claude/) > 默认值。

---

### 5.6 费用显示

实时显示当前对话花了多少 token、预估多少钱。因为 AI 按调用量计费，用户需要知道成本。

---

## 六、P2 功能详细说明

### 6.1 MCP 插件系统

**大白话**: 就像微信小程序。Claude Code 本身只能读代码改代码跑命令。通过 MCP 插件，它能获得新能力——查数据库、发消息、管项目...

**管理方式**:
```
claude mcp add 数据库工具 ...    # 装插件
claude mcp list                  # 看装了啥
claude mcp remove 数据库工具     # 卸载
```

**Claude Code 也能被别人当插件用**: `claude mcp serve` 让它变成一个服务，被其他 AI 系统调用。

> **开发规格 — MCP 协议**:
> - 协议版本: `"2025-03-26"`（兼容 `"2024-11-05"`, `"2024-10-07"`）
> - 通信协议: JSON-RPC 2.0
> - 传输方式: stdio（子进程）或 SSE（HTTP）
> - 初始化握手: Client → `initialize`(带 capabilities) → Server 返回 capabilities → Client 发 `notifications/initialized`
> - 错误码: -32000(连接关闭), -32001(超时), -32700(解析错误), -32600(无效请求), -32601(方法不存在), -32602(参数无效), -32603(内部错误)
> - 默认超时: 60000ms
> - 工具 schema: `{name, description?, inputSchema: {type:"object", properties?}, annotations?: {readOnlyHint, destructiveHint, idempotentHint}}`

---

### 6.2 脚本模式（Print 模式）

不进入对话，问一个问题就退出。适合写在自动化脚本里：

```bash
claude -p "解释一下 src/auth.ts"           # 直接问
cat error.log | claude -p "分析这个日志"     # 管道传入
```

> **开发规格**: `--print` / `-p` 参数，接收 prompt + stdin，调用 API，输出纯文本到 stdout，退出码 0=成功 1=错误。

---

### 6.3 多模型切换

| 模型 | 特点 | 适合 |
|------|------|------|
| 快速模型 | 速度快、便宜 | 简单问答 |
| 标准模型 | 均衡 | 日常编码 |
| 最强模型 | 最聪明、最贵 | 复杂架构设计 |

用 `/model` 命令或 `--model` 参数切换。

---

### 6.4 IDE 联动

自动安装 VS Code 扩展和 JetBrains 插件，让 IDE 和终端里的 Claude Code 联动。

> **开发规格**: VS Code 扩展 ID `anthropic.claude-code`，分发方式为包内 `.vsix` 文件，首次运行时 `code --install-extension` 安装。JetBrains 通过 JAR 包安装。IDE 通过 SSE/WebSocket 连接 Claude Code 进程。

---

## 七、CLI 命令完整定义

给开发看的命令行参数全表：

### 主命令

```
claude [prompt] [-c|--cwd <path>] [-d|--debug] [--verbose]
       [-ea|--enable-architect] [-p|--print]
       [--dangerously-skip-permissions] [-v|--version]
```

| 参数 | 类型 | 默认 | 说明 |
|------|------|------|------|
| prompt | string | 无 | 初始问题（可选） |
| --cwd | string | 当前目录 | 工作目录 |
| --debug | bool | false | 调试模式 |
| --verbose | bool | false | 详细输出 |
| --enable-architect | bool | false | 启用 Architect 工具 |
| --print | bool | false | 非交互模式 |
| --dangerously-skip-permissions | bool | false | 跳过权限（仅限 Docker 无网络环境） |

### 子命令

```
claude config get|set|remove|list <key> [value] [-g|--global]
claude approved-tools list|remove <tool>
claude mcp serve|add|remove|list|get <name> [-s scope] [-e env...]
claude doctor
```

---

## 八、环境变量

| 变量 | 说明 | 默认值 |
|------|------|--------|
| ANTHROPIC_API_KEY | API 密钥 | 无 |
| BASH_MAX_OUTPUT_LENGTH | 命令输出最大字符数 | 30000 |
| BASH_DEFAULT_TIMEOUT_MS | 命令默认超时(毫秒) | 120000 |
| BASH_MAX_TIMEOUT_MS | 命令最大超时(毫秒) | 600000 |
| CLAUDE_CODE_DONT_INHERIT_ENV | 不继承用户环境变量 | false |
| CLAUDE_CODE_SSE_PORT | SSE 连接端口 | 无 |
| FORCE_CODE_TERMINAL | 强制识别为 IDE 终端 | false |

---

## 九、System Prompt 完整文本

这是注入给 AI 的完整指令，直接决定 AI 的所有行为。照抄即可。

### 身份

```
You are an interactive CLI tool that helps users with software engineering tasks.
Use the instructions below and the tools available to you to assist the user.
```

### 安全规则

```
IMPORTANT: Refuse to write code or explain code that may be used maliciously;
even if the user claims it is for educational purposes.

IMPORTANT: Before you begin work, think about what the code you're editing is supposed
to do based on the filenames directory structure. If it seems malicious, refuse to work
on it or answer questions about it.

IMPORTANT: You must NEVER generate or guess URLs for the user unless you are confident
that the URLs are for helping the user with programming.
```

### 语气规则

```
Be concise, direct, and to the point.
Minimize output tokens as much as possible while maintaining helpfulness.
Keep responses short, fewer than 4 lines unless asked for detail.
NO unnecessary preamble or postamble.
NO "The answer is..." / "Here is..." / "Based on..." / "Here is what I will do next..."
One word answers are best.
```

### 示例对话

```
user: 2 + 2
assistant: 4

user: what command should I run to list files?
assistant: ls

user: How many golf balls fit inside a jetta?
assistant: 150000
```

### 主动性

```
Only be proactive when the user asks you to do something.
If user asks HOW to approach something, answer first, don't jump to actions.
Do NOT add code explanation summary unless requested.
```

### 代码规范

```
Mimic code style, use existing libraries, follow existing patterns.
NEVER assume a library is available — check package.json first.
When creating new components, look at existing ones first.
Follow security best practices. Never expose secrets/keys.
IMPORTANT: DO NOT ADD ANY COMMENTS unless asked.
```

### Git Commit 流程（写在 prompt 里）

```
1. 并行执行: git status + git diff + git log
2. 用 <commit_analysis> 标签分析改动
3. 并行执行: git add + git commit (HEREDOC格式) + git status
4. 尾部加: Co-Authored-By: Claude <noreply@anthropic.com>
5. 不允许: 改 git config、用 -i 交互命令、push 到远程
```

### PR 创建流程（写在 prompt 里）

```
1. 并行执行: git status + git diff + git log + git diff main...HEAD
2. 用 <pr_analysis> 标签分析
3. gh pr create，body 格式:
   ## Summary
   <1-3 bullet points>
   ## Test plan
   [Checklist...]
```

---

## 十、对话系统开发规格

### API 调用

```
POST /v1/messages?beta=true
Content-Type: application/json

{
  "model": "模型ID",
  "max_tokens": 数字,
  "system": "第九章的 System Prompt",
  "messages": [对话历史],
  "tools": [第三章定义的工具列表],
  "stream": true
}
```

### 对话循环（核心状态机）

```
循环:
  1. 发消息给 API（流式）
  2. 实时渲染 AI 回复
  3. 看 AI 停下来的原因:
     - "end_turn" → 等用户输入新消息
     - "tool_use" → AI 要用工具:
         a. 找到对应工具
         b. 检查权限
         c. 需要确认 → 弹确认框
         d. 允许 → 执行工具
         e. 把结果放回对话
         f. 回到步骤1 继续
  4. 用户输入 → 回到步骤1
```

---

## 十一、关键文件路径

| 路径 | 干什么用 |
|------|----------|
| `~/.claude/` | 全局配置（登录信息、设置等） |
| `.claude/` | 项目级配置 |
| `CLAUDE.md` | 项目级 AI 指令 |
| `${tmpdir}/claude-shell-snapshot-*` | 命令执行的临时隔离环境 |

---

## 十二、遥测埋点

| 事件 | 触发时机 |
|------|----------|
| tengu_init | 程序启动 |
| tengu_mcp_add/delete/list | MCP 操作 |
| tengu_doctor_command | 运行 /doctor |
| tengu_ext_installed | IDE 扩展安装成功 |
| shell_snapshot_created | 创建命令执行环境 |
| tengu_approved_tool_remove | 移除已批准工具 |

---

## 十三、竞品对比

| | Claude Code | GitHub Copilot | Cursor | Aider |
|--|-------------|----------------|--------|-------|
| 在哪用 | 终端 | VS Code/JetBrains | Cursor IDE | 终端 |
| 需要编辑器吗 | 不需要 | 需要 | 需要 | 不需要 |
| 实时补全 | 没有 | 有 | 有 | 没有 |
| 能跑命令吗 | 能 | 有限 | 有限 | 有限 |
| 插件扩展 | MCP 协议 | GitHub 生态 | 内置 | 无 |
| 定价 | 按量 | $10-39/月 | $20/月起 | 免费+按量 |

**优势**: 不绑编辑器、能真正执行命令、MCP 插件生态、完善的安全机制
**劣势**: 没有实时补全、纯终端不如 GUI 直观、按量计费不可预测

---

## 十四、术语表

| 术语 | 大白话 |
|------|--------|
| CLI | 终端/命令行，就是黑底白字的窗口 |
| Token | AI 处理文字的最小单位，约等于 0.75 个英文词 |
| 上下文窗口 | AI 的"记忆容量"，聊多了会忘前面的 |
| MCP | 插件标准，让第三方工具接入 Claude Code |
| Glob | 文件名匹配规则，比如 *.ts = 所有 TypeScript 文件 |
| 正则/Regex | 强大的文本搜索规则 |
| 沙箱/Sandbox | 受限的安全环境，只能看不能改 |
| 流式/Streaming | 数据边生成边显示，不用等全部完成 |
| System Prompt | 给 AI 的"人设说明书"，决定 AI 怎么说话怎么做事 |
| HEREDOC | 一种在命令行里写多行文字的方法 |
| JSON-RPC | 一种程序之间通信的标准格式 |
| mtime | 文件的"最后修改时间" |
