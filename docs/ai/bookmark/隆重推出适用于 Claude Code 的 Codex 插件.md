---
type: "inbox"
status : "pending"
source: "web-clipper"
url: "https://x.com/reach_vb/status/2038670509768839458"
created: 2026-03-31
---
如果您已经在使用 Claude Code，那么这款 Codex 插件可以让您轻松地将 Codex 集成到同一工作流程中。

它有三种用途：普通的 Codex 审查、更具怀疑性的对抗性审查，以及在需要其他代理人进行第二次审查时将工作交给 Codex。

## 设置

```bash
/plugin marketplace add openai/codex-plugin-cc
/plugin install codex@openai-codex
/codex:setup
```

点击此处查看插件：[https://github.com/openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) 您需要 ChatGPT 订阅（包括免费版）或 OpenAI API 密钥，以及 Node.js 18.18 或更高版本。

如果 Codex 尚未安装：

```bash
npm install -g @openai/codex
```

如果 Codex 已安装但未通过身份验证：

```bash
!codex login
```

## 核心命令

**/codex:review**运行标准的只读 Codex 审查。

**/codex:adversarial-review**运行可控挑战审查。当您希望 Codex 对实现提出质疑，而不仅仅是检查实现时，请使用此选项。

**/codex:rescue**直接将任务交给 Codex。

较长的作业可以在后台运行，可以使用**/codex:status** 、**/codex:result**和**/codex:cancel**来管理它们。

简单的首次运行：

何时使用

```bash
/codex:review --background
/codex:status
/codex:result
```

这里的主要价值在于，无需离开 Claude Code 就能从不同的代理人那里获得真正的第二次机会。

一个好的默认模式很简单：

1. 运行 /codex:review 查看所有内容
2. 对任何高风险内容运行 /codex:adversarial-review
3. 当线程阻塞或您希望 Codex 接管时，请使用 /codex:rescue 命令。

对抗性审查对于迁移、身份验证更改、基础架构脚本、重构以及任何存在隐藏假设而非明显语法错误的情况都特别有用。

## 工作原理

该插件通过本地 Codex CLI 和 Codex 应用服务器进行委托。因此，它使用与您已拥有的 Codex 相同的本地身份验证、配置、环境和 MCP 设置。

这就是它感觉轻量级的原因。它不是一个独立的运行时环境，而是 Codex，只是从 Claude Code 内部调用而已。

## 可选审查门

您还可以启用审核门：

```bash
/codex:setup --enable-review-gate
```

这样可以阻止 Claude Code 在 Codex 审查完成之前退出。

虽然有用，但需谨慎使用。它可能会导致 Claude/Codex 循环过长，并迅速耗尽使用次数限制。

## 结论

这个插件提供了一种简单的方法，让您在保持 Claude Code 工作流程的同时，还能利用 Codex 的优势。

安装它，运行 /codex:setup，使用 /codex:review 作为你的默认第二遍审查，当你需要比常规审查更深入的审查时，可以使用 /codex:adversarial-review 或 /codex:rescue。

点击此处查看插件：[https://github.com/openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc)