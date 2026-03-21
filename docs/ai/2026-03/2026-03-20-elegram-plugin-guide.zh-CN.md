# Telegram 插件使用说明（Claude Code）

本文基于以下官方文档整理：

- README: <https://github.com/anthropics/claude-plugins-official/blob/main/external_plugins/telegram/README.md>
- ACCESS: <https://github.com/anthropics/claude-plugins-official/blob/main/external_plugins/telegram/ACCESS.md>

## 这是什么

这是一个给 `Claude Code` 使用的 Telegram 插件。它会启动一个 MCP Server，以 Telegram Bot 的身份登录，把你发给 Bot 的消息转发到当前 Claude Code 会话中。

接入后，你可以：

- 在 Telegram 中直接给 Bot 发消息，由 Claude 处理并回复
- 让 Claude 给 Telegram 消息添加 reaction
- 让 Claude 编辑自己发出的消息，用于展示处理中状态或更新结果
- 发送图片或文件给 Claude，让 Claude 在本地读取

这不是通用的 Telegram Bot SDK 教程，也不是独立 Web 服务部署文档。文中的命令如 `/plugin install`、`/telegram:configure`、`/telegram:access` 都是在 `Claude Code` 会话内执行的。

## 适用场景

- 你希望通过 Telegram 私聊 Claude
- 你希望把 Telegram 作为 Claude Code 的一个消息通道
- 你希望在群组里通过 @提及方式触发 Claude

## 前置条件

开始前请确认：

- 已安装并可运行 `Claude Code`
- 已安装 `Bun`
- 可以正常访问 Telegram
- 拥有一个通过 `@BotFather` 创建的 Telegram Bot

## 工作原理

整体流程如下：

1. 你在 Telegram 中给 Bot 发消息
2. Telegram 插件接收消息并转给当前 Claude Code 会话
3. Claude 处理消息
4. 插件再把 Claude 的回复发回 Telegram

默认情况下，插件不会让任何陌生人直接接入当前会话。首次私聊 Bot 的用户会收到一个 6 位配对码，只有你在 Claude Code 中确认配对后，该用户后续消息才会真正进入会话。

## 快速开始

### 1. 创建 Telegram Bot

在 Telegram 中打开 `@BotFather`，发送：

```text
/newbot
```

然后按提示完成两项设置：

- `Name`：显示名称，可包含空格
- `Username`：唯一用户名，必须以 `bot` 结尾，例如 `my_assistant_bot`

创建完成后，`BotFather` 会返回一个 Token，格式类似：

```text
123456789:AAHfiqksKZ8...
```

请完整保存这个 Token。

### 2. 在 Claude Code 中安装插件

先启动一个 `claude` 会话，然后在会话中执行：

```text
/plugin marketplace add anthropics/claude-code

/plugin install telegram@claude-plugins-official
/reload-plugins
```

执行后，可以尝试输入：

```text
/telegram:configure
```

如果命令能够补全，说明插件已加载成功。若不能补全，按官方说明重启 Claude Code 会话再试。



### 3. 配置 Bot Token

在 Claude Code 会话中执行：

```text
/telegram:configure 123456789:AAHfiqksKZ8...
```

这会把 Token 写入：

```text
~/.claude/channels/telegram/.env
```

其中会包含：

```dotenv
TELEGRAM_BOT_TOKEN=123456789:AAHfiqksKZ8...
```

也可以手动写入这个文件，或者通过 shell 环境变量设置。官方文档说明：shell 环境变量优先级更高。

### 4. 用 Telegram Channel 参数重新启动 Claude

插件仅安装还不够。要让 Telegram 通道真正连接起来，你需要退出当前会话，并用以下命令重新启动：

```bash
claude --channels plugin:telegram@claude-plugins-official
```

如果不带这个参数，Telegram MCP Server 不会连接。

### 5. 在 Telegram 中与 Bot 配对

现在去 Telegram 私聊你的 Bot。第一次发消息时，Bot 会回复一个 6 位配对码。

回到 Claude Code 会话中执行：

```text
/telegram:access pair <6位配对码>
```

例如：

```text
/telegram:access pair a4f91c
```

完成后，该 Telegram 用户会被加入允许列表，之后再给 Bot 发消息，就会进入 Claude Code 会话。

### 6. 修改默认访问策略

默认策略是 `pairing`。这意味着陌生人如果私聊你的 Bot，仍然可能收到配对码提示。

建议在你完成首次配对后，立即切换为仅允许白名单用户访问：

```text
/telegram:access policy allowlist
```

这样未授权用户的私聊消息会被直接忽略，不再收到配对码。

## 常用命令

### 插件安装与配置

```text
/plugin install telegram@claude-plugins-official
/reload-plugins
/telegram:configure <BOT_TOKEN>
```

### 访问控制

查看当前状态：

```text
/telegram:access
```

批准一个配对码：

```text
/telegram:access pair <code>
```

拒绝一个配对请求：

```text
/telegram:access deny <code>
```

手动允许一个用户 ID：

```text
/telegram:access allow <user_id>
```

移除一个用户 ID：

```text
/telegram:access remove <user_id>
```

切换私聊策略：

```text
/telegram:access policy pairing
/telegram:access policy allowlist
/telegram:access policy disabled
```

## 访问控制说明

Telegram Bot 是公开可寻址的。只要别人知道 Bot 用户名，就可以给它发私聊消息。因此访问控制非常重要。

官方文档中的核心策略如下：

- `pairing`
  - 默认值
  - 未授权用户私聊 Bot 时，Bot 回复一个 6 位配对码
  - 原消息不会直接进入 Claude
- `allowlist`
  - 仅白名单用户可访问
  - 未授权用户的消息会被静默丢弃
- `disabled`
  - 完全禁用消息接入
  - 即使是已授权用户也无法通过该通道访问

访问控制配置文件位于：

```text
~/.claude/channels/telegram/access.json
```

如果该文件不存在，效果等同于：

- `dmPolicy = pairing`
- 没有任何已授权用户
- 没有启用任何群组

## 用户 ID 与群组 ID

访问控制存储的是 Telegram 的数字 ID，而不是用户名。

### 用户 ID

Telegram 用户名可变，数字 ID 才是稳定标识。

如果你要手动添加用户，可以让对方联系：

- `@userinfobot`

它会返回用户的数字 ID。

### 群组 ID

Supergroup 的 ID 通常是负数，并带 `-100` 前缀，例如：

```text
-1001654782309
```

Telegram 客户端界面通常不会直接显示群组 ID。官方建议通过以下方式获取：

- 临时把 `@RawDataBot` 拉进群，读取其输出的 JSON
- 把你的 Bot 拉进群后，通过 `/telegram:access` 查看最近被丢弃的群消息信息

## 群组使用方法

Telegram 插件默认只处理私聊，不处理群组。若要启用某个群组，需要手动添加群组 ID：

```text
/telegram:access group add -1001654782309
```

移除群组：

```text
/telegram:access group rm -1001654782309
```

### 默认群组触发方式

默认情况下，群组配置为 `requireMention: true`。这意味着只有以下情况会触发 Bot：

- 明确 `@botusername`
- 回复 Bot 发出的消息
- 匹配你配置的 `mentionPatterns`

例如：

```text
/telegram:access set mentionPatterns '["^hey claude\\b", "\\bassistant\\b"]'
```

### 让 Bot 处理群里的所有消息

如果你希望 Bot 处理群里所有消息，可以这样配置：

```text
/telegram:access group add -1001654782309 --no-mention
```

但这还不够。你还必须去 `@BotFather` 关闭该 Bot 的隐私模式：

```text
/setprivacy
```

然后选择你的 Bot，并执行 `Disable`。

如果不关闭隐私模式，即使本地配置了 `--no-mention`，Telegram 服务器也不会把普通群消息投递给你的 Bot。

## 插件暴露给 Claude 的能力

根据 README，该插件会向 Claude 暴露以下工具能力：

### `reply`

用于给 Telegram 聊天发送消息。

支持：

- `chat_id`
- `text`
- `reply_to`
- `files`

特点：

- 文本过长时会自动分段
- 图片文件会以照片方式发送并带预览
- 其他文件会作为文档发送
- 单个文件最大 50MB

### `react`

给某条消息添加 emoji reaction。

注意：Telegram 只接受固定白名单中的 reaction 表情，不在名单中的表情可能会静默失败。

### `edit_message`

编辑 Bot 自己之前发出的消息。

适合这类场景：

- 先发送“处理中...”
- 完成后把原消息改成正式结果

## 图片与文件处理

README 说明：

- 收到的图片会被下载到本地目录
- 本地路径会随频道通知一起提供给 Claude
- Claude 可以进一步读取这个本地文件

默认下载目录：

```text
~/.claude/channels/telegram/inbox/
```

注意：

- Telegram 会压缩普通图片
- 如果你需要原始文件，应该在 Telegram 中以“文件”而不是“照片”的方式发送

## 消息长度与回复行为

Telegram 单条消息长度上限为 `4096` 字符。插件会自动分块发送。

可配置项包括：

- `replyToMode`
  - `first`：只有第一段回复挂在线程下
  - `all`：所有分段都挂在线程下
  - `off`：所有分段都独立发送
- `textChunkLimit`
  - 文本分段阈值
- `chunkMode`
  - `length`：按长度硬切
  - `newline`：优先按换行或段落切分

示例：

```text
/telegram:access set ackReaction ""
```

## 已知限制

这是官方文档里非常关键的一部分。

### 1. 没有历史消息和搜索

Telegram Bot API 不提供历史消息读取或搜索能力，因此：

- 插件只能看到新收到的消息
- 无法让 Claude 回头检索旧消息
- 不存在 `fetch_messages` 这类工具

如果 Claude 需要更早的上下文，你只能手动把历史内容贴给它，或者自己做摘要。

### 2. 无法事后下载历史附件

由于无法回溯历史消息，插件也无法在事后下载历史附件。图片之所以可用，是因为插件在消息到达时就立即下载了。

### 3. Reaction 受 Telegram 白名单限制

不是所有 emoji 都可用，不在 Telegram Bot API 支持列表中的 reaction 可能不会报错，但也不会生效。

## 推荐的安全配置

如果你只是个人使用，推荐采用以下做法：

1. 创建专用私有 Bot，不要使用易猜的用户名
2. 首次完成配对后，立即执行：

```text
/telegram:access policy allowlist
```

3. 只把自己的 Telegram 账号加入允许列表
4. 如果启用群组，尽量保留 `requireMention: true`
5. 不要把 Bot Token 提交到代码仓库

## 故障排查

### `/telegram:configure` 无法补全

可能原因：

- 插件未正确安装
- `/reload-plugins` 后当前会话未刷新

处理建议：

- 重新执行安装命令
- 重新加载插件
- 直接重启 Claude Code 会话

### Bot 已创建，但 Telegram 没有响应

优先检查：

- 是否正确配置了 `TELEGRAM_BOT_TOKEN`
- 是否使用了带 channel 参数的启动命令
- 是否当前会话确实通过以下方式启动：

```bash
claude --channels plugin:telegram@claude-plugins-official
```

### 收到配对码，但消息没有进入 Claude

说明用户尚未完成授权。请在 Claude Code 中执行：

```text
/telegram:access pair <code>
```

### 群组里 @了 Bot，但它没有回应

优先检查：

- 是否已执行 `group add`
- 是否使用了正确的群组 ID
- 是否实际 @到了正确的 bot 用户名
- 如果使用了 `--no-mention`，是否已在 `@BotFather` 中关闭隐私模式

## 一套最小可用流程

如果你只想最快跑通一次，可以按下面做：

1. 在 `@BotFather` 创建 Bot，拿到 Token
2. 启动 `claude`
3. 在 Claude 会话中执行：

```text
/plugin install telegram@claude-plugins-official
/reload-plugins
/telegram:configure <BOT_TOKEN>
```

4. 退出当前会话
5. 用下面命令重新启动：

```bash
claude --channels plugin:telegram@claude-plugins-official
```

6. 在 Telegram 私聊 Bot，拿到配对码
7. 回到 Claude 会话执行：

```text
/telegram:access pair <code>
```

8. 再给 Bot 发消息，确认 Claude 可以正常回复
9. 执行：

```text
/telegram:access policy allowlist
```

## 总结

这个 Telegram 插件的核心价值是：让 `Claude Code` 能通过 Telegram Bot 对外收发消息。最常见的使用方式是个人私聊 Bot，通过配对机制把自己的 Telegram 账号绑定到当前 Claude 会话。

如果你把它理解成“给 Claude Code 增加一个 Telegram 消息入口”，理解就是对的；如果你把它理解成一个通用 Telegram Bot 开发框架，就不对了。
