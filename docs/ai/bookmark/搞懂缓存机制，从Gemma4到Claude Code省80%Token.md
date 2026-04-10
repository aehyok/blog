---
type: "inbox"
status : "pending"
source: "web-clipper"
url: "https://x.com/MinLiBuilds/status/2041178722230030384"
created: 2026-04-07
---
> 早上打开 Claude Code，敲第一句话，2%～10% 的套餐额度没了。午休回来继续干活，又一句话，10% 的额度蒸发。你有没有想过，这 token 到底花在哪了？我带着这个疑问，在本地用 Gemma4 跑小模型做实验——发现同一段对话，有些轮次要等 30 秒，有些只要 0.2 秒。为了搞清楚为什么，我会从 Transformer 的注意力机制开始讲，再到 Claude Code 的代码实现， Anthropic 在缓存上做了一整套精密工程。**理解了这套机制，你就知道怎么让同样的套餐多撑 3-5 倍。**

# 导读

本文比较长，按兴趣挑着看，只想了解省钱的直接翻到第六章：

- **一~二**：本地实验 + 原理揭秘（核心故事线，所有人）
- **三** ： 缓存的细节追问（想深入理解的人）
- **四~五** ： 逆向 Claude Code 源码（开发者 / Claude Code 用户）
- **六~七** ：使用姿势 + 省钱技巧（Claude Code 用户，没时间的直接看这里）

## 一、实验：同一段对话，为什么有时 30 秒有时 0.2 秒？

起因很简单：我想在本地体验一下大模型的 context caching，看看到底能快多少。

先拿 Ollama 在 Mac (Apple Silicon, 16GB) 上跑 Gemma 4（8B 总参数，9.6GB 模型），写了个测试脚本做多轮对话：先喂一篇 670 token 的文章，然后连续追问 5 个问题。

每轮 API 返回两个关键指标：**prompt 处理时间**（消化输入）和**生成时间**（吐出回答）。我把 prompt 处理时间单独拎出来，结果不出所料：

```plaintext
Prompt 处理      生成              总耗时
Turn 1 (喂文章):   24,458ms         5,095ms (68 tok)   34s
Turn 2 (追问1):    31,036ms        22,653ms (365 tok)  58s
Turn 3 (追问2):       253ms  !!     2,511ms (46 tok)   3.8s
Turn 4 (追问3):       203ms         2,029ms (36 tok)   3.0s
Turn 5 (追问4):       165ms         1,870ms (37 tok)   2.4s
Turn 6 (追问5):       176ms         1,235ms (26 tok)   1.8s
```

**Turn 2 到 Turn 3，prompt 处理从 31 秒直降到 0.25 秒——100 倍加速。** 而生成速度始终稳定在 13-20 tok/s，丝毫不受影响。

![图像](https://pbs.twimg.com/media/HFO2KscawAAiXPa?format=jpg&name=large)

这说明加速只发生在"消化输入"阶段，和"吐出回答"无关。

Gemma 4 有 9.6GB，16GB 内存跑起来比较吃力。我又换了个小模型 Qwen3.5（0.8B，~1GB）做同样的测试，想看看模型大小是否会影响这个现象：

```plaintext
Turn 1 (喂文章):   566ms
Turn 2 (追问1):    173ms
Turn 3 (追问2):    182ms
Turn 4 (追问3):    212ms
Turn 5 (追问4):    227ms
Turn 6 (追问5):    240ms
```

小模型全程 200ms 上下，波澜不惊。没有 Gemma 4 那种"突然快 100 倍"的戏剧性变化。

**两个问题浮出水面**：

1. 那个 100x 加速到底是什么？
2. 为什么大模型受益巨大，小模型却无感？

## 二、答案：KV 缓存——注意力的 QKV 中的 KV

大模型生成文本时，用的是 **Transformer 注意力机制**。核心公式：

Attention(Q, K, V) = softmax(Q · Kᵀ / √d) · V

Q、K、V 三个角色：

- **Q (Query)** — 当前新 token 的，"我要找什么？" → 每次不同，不能缓存
- **K (Key)** — 历史 token 的，"我这有什么？"（索引） → 算完就固定，可以缓存
- **V (Value)** — 历史 token 的，"具体内容是什么？" → 算完就固定，可以缓存

**KV 缓存就是把历史 token 的 Key 和 Value 存起来，新 token 只需要算自己的 Q，然后查已有的 KV。**

![图像](https://pbs.twimg.com/media/HFO2jgyb0AAj3au?format=jpg&name=large)

这之所以可行，是因为当前所有主流大模型（Claude、GPT、Gemini、Llama、Gemma、Qwen）都是 **Decoder-only** 架构——单向注意力，每个 token 只看前面的 token。前面 token 的 KV 算完就固定了，后面怎么追加都不影响。

因果掩码（causal mask）： T₁ T₂ T₃ T₄ T₁ ✅ ❌ ❌ ❌ T₂ ✅ ✅ ❌ ❌ T₃ ✅ ✅ ✅ ❌ ← T₃ 的 KV 永远不变 T₄ ✅ ✅ ✅ ✅ ← 新增 T₄ 不影响 T₁₂₃

如果是双向注意力（BERT），加一个新 token 会改变所有 token 的表示，缓存全废。这也是为什么 BERT 做不了生成式 AI。

回到实验数据

Turn 1-2 慢（24-31 秒）：模型在逐层计算 670+ 个 token 的 KV 张量，60 层 × 670 token × 2(K+V) = 巨量计算。

Turn 3 突然快（0.25 秒）：之前算好的 KV 全部缓存住了！只需从内存加载，不用重算。瓶颈从**GPU 计算**变成了**内存读取**。

小模型无感：Qwen3.5 只有 0.8B 参数，算 KV 本来就只要 200ms，缓存省不了多少。

**模型越大，KV 计算越昂贵，缓存收益越大：**

```plaintext
Gemma 4 (4.5B active)    Qwen3.5 (0.8B)
未命中         ~25,000ms               ~566ms
命中           ~170ms                  ~173ms
加速比         148x                    3.3x
命中时速度     3,000-5,000 tok/s       3,200-3,900 tok/s
```

注意命中时两个模型速度几乎一样，都是从内存读取。

## 三、缓存是无损的吗？生成结果会进缓存吗？

**无损。** Transformer 的计算是确定性的，KV 从缓存加载和现场计算的结果完全一致。

**生成结果不进 prompt 缓存。** 模型吐出的 output token 的 KV 在请求结束后丢弃——因为每次生成内容不同（temperature > 0），存了也没法复用。

但有个精妙之处：**在下一轮对话中，上轮的生成结果被拼回 prompt，变成了"输入"的一部分，自然被缓存覆盖。**

```plaintext
第 1 轮：
  输入: [系统提示][user: "你好"]
  输出: [assistant: "你好！"]       ← 不进缓存

第 2 轮：
  输入: [系统提示][user: "你好"][assistant: "你好！"][user: "帮我改代码"]
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ~~~~~~~~~~~~~~~~
        整段前缀从缓存读取                               只有这部分全价计算
```

对话越长，缓存覆盖比例越高，每轮新增计算量越小。这就是为什么多轮对话是缓存的最佳场景，也是为何 Opus 现在拿 1m 当默认项。

多轮对话的上下文累计：有缓存 vs 没缓存

很多人以为每轮对话都要"重新读一遍"所有历史，token 消耗是 N(N+1)/2 的二次增长。**如果没有缓存，确实如此**。但有了缓存，情况完全不同：

```plaintext
假设：系统提示 20K tokens，每轮对话增加 ~1K tokens（user + assistant）

没有缓存（每轮全价）：
  Turn 1:  20K + 1K = 21K tokens      全价
  Turn 2:  20K + 2K = 22K tokens      全价
  Turn 3:  20K + 3K = 23K tokens      全价
  ...
  Turn 10: 20K + 10K = 30K tokens     全价
  ────────────────────────────
  10 轮总计：~255K tokens（全价）       ← 二次增长，越来越贵

有缓存（前缀 1/10 价格）：
  Turn 1:  20K×1.25 + 1K = 26K 等价    首次写入缓存（贵 25%）
  Turn 2:  20K×0.1 + 1K×0.1 + 1K = 3.1K 等价   前缀从缓存读
  Turn 3:  20K×0.1 + 2K×0.1 + 1K = 3.2K 等价   更多前缀被缓存
  ...
  Turn 10: 20K×0.1 + 9K×0.1 + 1K = 3.9K 等价   几乎全部缓存
  ────────────────────────────
  10 轮总计：~60K 等价 tokens           ← 近似线性增长！
```

**对比：255K vs 60K，缓存省了 76%。**

可视化上下文累计：

```plaintext
没有缓存（每条都全价）：
  Turn 1:  ████████████████████░          21K
  Turn 5:  ████████████████████████░      25K
  Turn 10: ████████████████████████████░  30K
           ↑ 全部全价，面积 = 总花费

有缓存（前缀只花 1/10）：
  Turn 1:  ████████████████████░          26K (首次写入)
  Turn 5:  ██░                            3.5K (几乎全缓存)
  Turn 10: ███░                           3.9K (几乎全缓存)
           ↑ 前缀淡色 = 缓存读取 1/10
```

**这就是为什么"一个 session 持续对话"比"频繁开新 session"省钱的根本原因。** 新 session 每次从 Turn 1 开始，永远在付全价写入缓存的钱。老 session 继续对话，前面的全是缓存，只有末尾新增的一点点是全价。

![图像](https://pbs.twimg.com/media/HFO3SbTb0AEwIwV?format=jpg&name=large)

不过实验中也发现，Ollama 的缓存是**概率性的**——同样的 prompt 跑两次，缓存命中的轮次不同，而且连续命中几次后可能突然失效（内存压力导致 KV 被淘汰）。效果惊人，但不可靠。

那 Claude API 的缓存呢？有没有更确定性的方案？我翻了 Claude Code 的源码。

## 四、 Claude Code：一套精密的缓存工程

用Claude Code 翻了它自己的源码后发现，Anthropic 在缓存上做了大量精细工程——远不是"自动缓存"这么简单。

Prompt 不是一整块发出去的

每次 API 调用，Claude Code 发送的是一个**精心拼接的多层结构**：

```plaintext
┌────────────────────────────────────────────────┐
│ system（系统提示词，~20K tokens）                 │
│   Block 1: 计费归因头              → 不缓存       │
│   Block 2: CLI 前缀               → 不缓存       │
│   Block 3: 静态指令（行为规则等）   → global 缓存   │ ← 全球所有用户共享！
│   ──── DYNAMIC_BOUNDARY ────                    │
│   Block 4: 动态内容（CLAUDE.md 等） → org 缓存     │
├─────────────────────────────────────────────────┤
│ tools（工具 schema，session 内冻结）               │
├─────────────────────────────────────────────────｜
│ messages（对话历史）                              │
│   最后一条消息上放 cache_control 标记               │
└─────────────────────────────────────────────────┘
```

**关键函数**（源码位置）：

- getSystemPrompt() (prompts.ts:444) — 组装系统提示词
- splitSysPromptPrefix() (api.ts:321) — 按 DYNAMIC\_BOUNDARY 切分
- buildSystemPromptBlocks() (claude.ts:3214) — 加 cache\_control 标记
- addCacheBreakpoints() (claude.ts:3064) — 在最后一条消息上标记缓存断点

缓存是**前缀匹配**的：只要从头开始的 token 序列一致，就能复用。这就是为什么系统提示词放最前面、保持不变如此重要。

两档 TTL

- **默认 5 分钟** — 所有用户
- **扩展 1 小时** — Pro/Max 订阅用户（未超额）、Anthropic 员工

源码 claude.ts:408-413：

```typescript
userEligible =
  process.env.USER_TYPE === 'ant' ||
  (isClaudeAISubscriber() && !currentLimits.isUsingOverage)
```

缓存断裂检测

Claude Code 会监控每次调用的 cache\_read\_input\_tokens，如果比上次下降 **\>5%** 且绝对值 **\>2000 tokens**，判定为断裂，并分析原因：系统提示词变了？工具增减了？TTL 过期了？模型切了？

Claude Code 的缓存设计还是很清晰的，和 Ollama "缓存没了你自己猜" 形成鲜明对比。

## 五、缓存像链条：断在哪里，后面全废

缓存是前缀匹配。理解这个就理解了一切：

```plaintext
最贵：Block 3（全局静态）失效 → 整个请求从头算
      [❌ Block3] [❌ Block4] [❌ msg1] [❌ msg2] [❌ msg3]

中等：Block 4（CLAUDE.md）变了 → Block 3 还能复用
      [✅ Block3] [❌ Block4] [❌ msg1] [❌ msg2] [❌ msg3]

最省：只追加新消息 → 前面全部复用
      [✅ Block3] [✅ Block4] [✅ msg1] [✅ msg2] [新 msg3]
```

**切换模型**也是完全失效——Opus 和 Sonnet 的权重不同，KV 张量不能互用。切一次模型，50K tokens 的上下文要全价重算。在 TTL 内切回可能还能命中旧缓存（promptCacheBreakDetection.ts 追踪了 modelChanged）。所以这点也要注意，下班前的最后半小时，不要切模型。

Sub-agent 能复用主线程的缓存吗？

Claude Code 在处理复杂任务时会启动 sub-agent（比如 Explore agent 搜代码、Plan agent 做规划）。每个 sub-agent 是一次独立的 API 调用，它能复用主线程的缓存吗？

**答案：几乎不能。**

源码里，缓存状态是按 querySource + agentId 分开追踪的——每个 agent 有自己独立的缓存链。而且 sub-agent 和主线程有三个关键不同：

1. **工具集不同** — 主线程有全套工具（Read, Write, Edit, Bash, Agent...），Explore agent 只有子集（Read, Grep, Glob, Bash）。工具 schema 不同 → 缓存前缀不同 → tools 之后的部分全部无法复用。
2. **消息历史完全独立** — sub-agent 有自己的对话上下文，和主线程的历史没有交集。
3. **可能用不同模型** — sub-agent 可能用 Haiku 或 Sonnet（更便宜），而主线程用 Opus。不同模型 = 不同权重 = KV 张量完全不同 = 零复用。

```plaintext
主线程 (Opus):
  [Block3 ✅] [Block4+tools ✅] [messages ✅]  ← 自己的缓存链

Sub-agent (Haiku):
  [Block3 ❌ 模型不同] [tools ❌ 工具集不同] [messages ❌ 独立对话]
  → 每次几乎从零开始
```

所以每启动一个 sub-agent，基本等于一次"迷你冷启动"。这也是为什么 Claude Code 不会滥用 sub-agent——简单的文件搜索直接用 Grep/Glob 工具就行，不必每次都启动 Explore agent。如果你在 CLAUDE.md 里写了 "多用 agent 并行处理"，要意识到每个 agent 都有独立的缓存开销。

## 六、保护你的缓存：Claude Code 使用姿势

理解了缓存机制，就知道什么习惯省钱、什么烧钱。

核心原则：别碰前缀，只在末尾追加

**保护缓存的（绿灯）**：

- **连续对话** — 前缀不变，增量缓存，一个 session 持续对话
- **btw** — 使用 btw 共享 session，可共享缓存
- **Claude.md** — 定期整理这个文件，但不要在工作到一半的时候整理

**破坏缓存的（红灯）**：

- **开新 session** — 冷缓存，~20K tokens 全价重算
- **改 CLAUDE.md** — Block 4 起全部失效，配好就别动
- **加减 MCP 工具** — 工具 schema 变化 = 缓存断裂，session 前配好，禁用不用的MCP
- **切换模型** — 完全失效，按阶段切，别频繁切
- **/compact** — 消息历史变了 = 断裂，对话 >100K 时再用
- **发呆超过 TTL** — 缓存过期，1h 内说句话

[@IceBearMiner](https://x.com/@IceBearMiner) 也写了一篇节省80%token的宝典，大家可以验证看看：

> 17小时

缓存差异有多大？

假设系统提示词 20K tokens，对话 10 轮：

- 一个 session 持续对话：1 次全价 + 9 次 1/10 = **1.9 份**
- 每次开新 session：10 次全价 = **10 份**

差了 **5 倍**。对 Pro/Max 订阅用户，这意味着同样的套餐能多干 3-5 倍的活。

## 七、进阶想法：Cache Keep-Alive 续命

Pro/Max 用户的 TTL 是 1 小时。午饭吃 1.5 小时回来，缓存就过期了，开个冗长的会议，缓存就过期了。

**原理**：缓存 TTL 在**每次读取时刷新**。所以只要在过期前发一次匹配前缀的请求，缓存就能无限续命。

**方案设想**：用 tmux 或 iTerm2 AppleScript，每 55 分钟往 Claude Code 终端自动发一条prompt：

```markdown
我断线了么？如果没断你只要简单说ok。
```




理解Claude Code的缓存机制，不仅可以让你更游刃有余的使用Claude Code，还能让你兜里的token消费的更慢一些，也更有价值。

先简单的理解一下什么是token：它就是大模型处理文本的基本单位，可以理解为一个词、一个字或一个标点符号的片段（比如中文里大约每个汉字对应一个 token，英文里大约每 3~4 个字母对应一个 token，每个标点符号通常对应一个token）。

1️⃣、那我们通过聊天窗口输入的字符串，传递给大模型的时候，先将字符串通过算法切分成若干个token，这步基本不耗时间。每个token对应了词表中的一个ID,是固定的不会变的。

2️⃣、然后每个token ID 去一张预训练的向量表里查一行，得到一个高维向量（比如 4096 维）。这是纯查表操作，速度也极快，不需要矩阵乘法。

3️⃣、第一问大模型的话，建立完1️⃣2️⃣之后，先查缓存肯定是空的，全部现算，