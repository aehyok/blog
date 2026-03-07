# 我用 OpenClaw + Vercel + Supabase 构建了一个 AI 公司——两周后，它们自己运营了一切

![AI 代理在像素艺术办公室中自主运营网站](https://pbs.twimg.com/media/HAgo9VqWQAAlPKS.jpg)

> 6个AI代理、1台VPS、1个Supabase数据库——从"代理可以对话"到"代理自主运营网站"，我花了整整两周时间。这篇文章将详细讲解中间缺失了什么、如何修复，以及一个你可以直接拿走使用的架构方案。

## 起跑线：你有了 OpenClaw，接下来做什么？

如果你最近在玩 AI 代理，很可能已经搭建好了 OpenClaw。

它解决了一个大问题：让 Claude 能够使用工具、浏览网页、操作文件、运行定时任务。你可以给代理分配 cron 任务——每日推文、每小时情报扫描、定期研究报告。

我也是从这里开始的。

我的项目叫 VoxYZ Agent World——6个AI代理在一个像素艺术办公室里自主运营一个网站。技术栈很简单：

- **OpenClaw（在VPS上）**：代理的"大脑"——运行圆桌会议、cron 任务、深度研究
- **Next.js + Vercel**：网站前端 + API 层
- **Supabase**：所有状态的单一真实来源（提案、任务、事件、记忆）

六个角色，各司其职：Minion 做决策，Sage 分析策略，Scout 收集情报，Quill 写内容，Xalt 管理社交媒体，Observer 做质量检查。

OpenClaw 的 cron 任务让它们每天"上班报到"。圆桌会议让它们讨论、投票、达成共识。

但这只是"会说话"，不是"会运营"。

代理产出的所有内容——起草的推文、分析报告、文章——都停留在 OpenClaw 的输出层。没有任何东西将它们转化为实际执行，也没有东西告诉系统"任务完成了"。

在"代理可以产出"和"代理可以端到端运营"之间，缺失了一个完整的执行→反馈→重新触发的循环。这就是本文要讲的内容。

## 闭环是什么样子的

先定义"闭环"，免得我们造错了东西。

一个真正无人值守的代理系统需要运行这样的循环：

```
代理提出想法（提案）
     ↓
自动审批检查（自动通过）
     ↓
创建任务 + 步骤（任务 + 步骤）
     ↓
工作者认领并执行（工作者）
     ↓
发出事件（事件）
     ↓
触发新的反应（触发 / 反应）
     ↓
回到第一步
```

听起来很简单？在实践中，我遇到了三个陷阱——每个都让系统"看起来在运行，实际上在原地打转"。

![系统架构图](https://pbs.twimg.com/media/HAgrUcPWMAA4VL2.jpg)

## 陷阱1：两个地方抢活干

我的 VPS 上有 OpenClaw 工作者在认领和执行任务。同时，Vercel 上有一个心跳 cron 在运行 mission-worker，也在尝试认领同样的任务。

两边查询同一个表，抓取同一步骤，独立执行。没有协调，纯粹是竞态条件。偶尔一个步骤会被两边打上冲突的状态。

**修复**：砍掉一个。VPS 是唯一的执行者。Vercel 只运行轻量级控制平面（评估触发器、处理反应队列、清理卡住的任务）。

改动很小——从心跳路由中移除 runMissionWorker 调用：

```javascript
// 心跳现在只做4件事
const triggerResult = await evaluateTriggers(sb, 4_000);
const reactionResult = await processReactionQueue(sb, 3_000);
const learningResult = await promoteInsights(sb);
const staleResult = await recoverStaleSteps(sb);
```

**额外收获**：省下了 Vercel Pro 的费用。心跳不再需要 Vercel 的 cron 了——VPS 上的一行 crontab 就搞定：

```bash
*/5 * * * * curl -s -H "Authorization: Bearer $KEY" https://yoursite.com/api/ops/heartbeat
```

## 陷阱2：触发了但没人认领

我写了4个触发器：推文爆火时自动分析、任务失败时自动诊断、内容发布后自动审核、洞察成熟时自动提升。

在测试中我注意到：触发器正确检测到条件并创建了提案。但提案永远停留在 pending 状态——从未变成任务，从未生成可执行的步骤。

原因：触发器直接插入 ops_mission_proposals 表，但正常的审批流程是：插入提案 → 评估自动通过 → 如果通过，创建任务 + 步骤。触发器跳过了最后两个步骤。

**修复**：提取一个共享函数 createProposalAndMaybeAutoApprove。每个创建提案的路径——API、触发器、反应——都必须调用这个函数。

```javascript
// proposal-service.ts — 所有提案创建的唯一入口
export async function createProposalAndMaybeAutoApprove(
  sb: SupabaseClient,
  input: ProposalServiceInput,  // 包括 source: 'api' | 'trigger' | 'reaction'
): Promise<ProposalServiceResult> {
  // 1. 检查每日限额
  // 2. 检查 Cap Gates（下文解释）
  // 3. 插入提案
  // 4. 发出事件
  // 5. 评估自动通过
  // 6. 如果通过 → 创建任务 + 步骤
  // 7. 返回结果
}
```

改动后，触发器只返回一个提案模板。评估器调用服务：

```javascript
// trigger-evaluator.ts
if (outcome.fired && outcome.proposal) {
  await createProposalAndMaybeAutoApprove(sb, {
    ...outcome.proposal,
    source: 'trigger',
  });
}
```

一个函数统管一切。任何未来的检查逻辑（速率限制、黑名单、新的上限）——改一个文件就行。

![触发器架构](https://pbs.twimg.com/media/HAgsRA7XgAE_oLo.jpg)

## 陷阱3：配额满了队列还在涨

最狡猾的 bug——表面一切正常，日志里没有错误，但数据库里排队积压的步骤越来越多。

原因：推文配额满了，但提案还在被批准，生成任务，生成排队的步骤。VPS 工作者看到配额满了就直接跳过——不认领，不标记为失败。第二天，又来一批。

**修复**：Cap Gates——在提案入口处就拒绝。别让它生成排队的步骤。

```javascript
// proposal-service.ts 中的门控系统
const STEP_KIND_GATES: Record<string, StepKindGate> = {
  write_content: checkWriteContentGate,  // 检查每日内容上限
  post_tweet:    checkPostTweetGate,     // 检查推文配额
  deploy:        checkDeployGate,        // 检查部署策略
};
```

每种步骤类型都有自己的门控。推文配额满了？提案立即被拒绝，原因清晰说明，发出警告事件。没有排队的步骤 = 没有积压。

这是 post_tweet 门控的实现：

```javascript
async function checkPostTweetGate(sb: SupabaseClient) {
  const autopost = await getOpsPolicyJson(sb, 'x_autopost', {});
  if (autopost.enabled === false) return { ok: false, reason: 'x_autopost disabled' };

  const quota = await getOpsPolicyJson(sb, 'x_daily_quota', {});
  const limit = Number(quota.limit ?? 10);
  const { count } = await sb
    .from('ops_tweet_drafts')
    .select('id', { count: 'exact', head: true })
    .eq('status', 'posted')
    .gte('posted_at', startOfTodayUtcIso());

  if ((count ?? 0) >= limit) return { ok: false, reason: `Daily tweet quota reached (${count}/${limit})` };
  return { ok: true };
}
```

核心原则：在门口拒绝，不要在队列里堆积。被拒绝的提案会被记录（用于审计），不是静默丢弃。

![门控系统](https://pbs.twimg.com/media/HAgsp9-WYAAMenS.jpg)

## 让它活起来：触发器 + 反应矩阵

三个陷阱修复后，循环运行了。但系统只是一个"无误装配线"，不是"有响应力的团队"。

### 触发器

4个内置规则——每个检测一个条件并返回提案模板：

| 条件 | 动作 | 冷却时间 |
|------|------|----------|
| 推文参与度 > 5% | Growth 分析爆火原因 | 2小时 |
| 任务失败 | Sage 诊断根本原因 | 1小时 |
| 新内容发布 | Observer 审核质量 | 2小时 |
| 洞察获得多个点赞 | 自动提升为永久记忆 | 4小时 |

触发器只负责检测——它们不直接接触数据库，它们把提案模板交给提案服务。所有上限门控和自动通过逻辑自动应用。

冷却时间很重要。没有它，一条爆火推文会在每个心跳周期（每5分钟）都触发一次分析。

### 反应矩阵

最有趣的部分——自发的代理间互动。

一个 reaction_matrix 存储在 ops_policy 表中：

```json
{
  "patterns": [
    { "source": "twitter-alt", "tags": ["tweet","posted"], "target": "growth",
      "type": "analyze", "probability": 0.3, "cooldown": 120 },
    { "source": "*", "tags": ["mission:failed"], "target": "brain",
      "type": "diagnose", "probability": 1.0, "cooldown": 60 }
  ]
}
```

Xalt 发推 → 30% 概率 Growth 会分析表现。任何任务失败 → 100% 概率 Sage 会诊断。

probability 不是 bug，是特性。100% 确定性 = 机器人。增加随机性 = 感觉更像真实团队，"有时候有人回应，有时候不回"。

## 自愈：系统会卡住

VPS 重启、网络闪烁、API 超时——步骤卡在 running 状态，没人真正处理它们。

心跳包含 recoverStaleSteps：

```javascript
// 30分钟没有进展 → 标记为失败 → 检查任务是否应该完成
const STALE_THRESHOLD_MS = 30 * 60 * 1000;

const { data: stale } = await sb
  .from('ops_mission_steps')
  .select('id, mission_id')
  .eq('status', 'running')
  .lt('reserved_at', staleThreshold);

for (const step of stale) {
  await sb.from('ops_mission_steps').update({
    status: 'failed',
    last_error: 'Stale: no progress for 30 minutes',
  }).eq('id', step.id);
  await maybeFinalizeMissionIfDone(sb, step.mission_id);
}
```

maybeFinalizeMissionIfDone 检查任务中的所有步骤——任何一个失败意味着整个任务失败，全部完成意味着成功。不再"一个步骤成功了所以整个任务被标记为成功"。

## 完整架构

三层，职责清晰：

- **OpenClaw（VPS）**：思考 + 执行（大脑 + 双手）
- **Vercel**：批准 + 监控（控制平面）
- **Supabase**：所有状态（共享皮层）

![完整架构图](https://pbs.twimg.com/media/HAgr06LXcAANBuA.jpg)

## 你可以带走什么

如果你有 OpenClaw + Vercel + Supabase，这是一个最小可行的闭环清单：

### 1. 数据库表（Supabase）

你至少需要这些：

| 表名 | 用途 |
|------|------|
| ops_mission_proposals | 存储提案（pending/accepted/rejected）|
| ops_missions | 存储任务（approved/running/succeeded/failed）|
| ops_mission_steps | 存储执行步骤（queued/running/succeeded/failed）|
| ops_agent_events | 存储事件流（所有代理行动）|
| ops_policy | 存储策略（auto_approve, x_daily_quota 等作为 JSON）|
| ops_trigger_rules | 存储触发器规则 |
| ops_agent_reactions | 存储反应队列 |
| ops_action_runs | 存储执行日志 |

### 2. 提案服务（一个文件）

把提案创建 + 上限门控 + 自动通过 + 任务创建放在一个函数里。所有来源（API、触发器、反应）都调用它。这是整个循环的枢纽。

### 3. 策略驱动的配置（ops_policy 表）

不要硬编码限制。每个行为开关都在 ops_policy 表中：

```json
// auto_approve: 哪些步骤类型允许自动通过
{ "enabled": true, "allowed_step_kinds": ["draft_tweet","crawl","analyze","write_content"] }

// x_daily_quota: 每日推文上限
{ "limit": 8 }

// worker_policy: Vercel 是否执行步骤（设为 false = 仅 VPS）
{ "enabled": false }
```

随时调整策略，无需重新部署代码。

### 4. 心跳（一个 API 路由 + 一行 Crontab）

Vercel 上的 /api/ops/heartbeat 路由。VPS 上的一行 crontab 每5分钟调用它。内部运行：触发器评估、反应队列处理、洞察提升、卡住任务清理。

### 5. VPS 工作者契约

每种步骤类型映射到一个工作者。完成步骤后，工作者调用 maybeFinalizeMissionIfDone 检查整个任务是否应该完成。永远不要因为一个步骤完成就标记任务为成功。

## 两周时间线

| 阶段 | 时间 | 完成内容 |
|------|------|----------|
| 基础设施 | 已存在 | OpenClaw VPS + Vercel + Supabase（已搭建）|
| 提案 + 审批 | 3天 | 提案 API + 自动通过 + 策略表 |
| 执行引擎 | 2天 | mission-worker + 8个步骤执行器 |
| 触发器 + 反应 | 2天 | 4个触发器类型 + 反应矩阵 |
| 循环统一 | 1天 | proposal-service + 上限门控 + 修复三个陷阱 |
| 影响系统 + 视觉 | 2天 | Affect 重写 + 空闲行为 + 像素办公室集成 |
| 种子 + 上线 | 半天 | 迁移 + 种子策略 + crontab |

不算已有基础设施，核心闭环（提出→执行→反馈→重新触发）大约一周就能连起来。

## 最后的想法

这6个代理现在每天自主运营 voxyz.space。我还在每天优化系统——调整策略、扩展触发器规则、改进代理协作方式。

![代理仪表板](https://pbs.twimg.com/media/HAgsGLDXUAAhPDB.jpg)

它远不完美——代理间协作还很基础，"自由意志"主要是通过基于概率的不确定性模拟的。但系统确实在运行，确实不需要有人盯着它。

下一篇文章，我会讲代理如何"争论"和"说服"对方——圆桌投票和 Sage 的记忆整合如何让6个独立的 Claude 实例变成类似团队认知的东西。

如果你也在用 OpenClaw 构建代理系统，我很想交流。当你是一个独立开发者在做这些时，每次对话都能让你少掉进一个陷阱。

![团队协作](https://pbs.twimg.com/media/HAgr_tsXUAAUEqO.jpg)

## 延伸阅读

### 安全提示
⚠️ 有人在回复里用 VoxYZ 名字部署代币。我跟这些没有任何关系。没有代币，没有加密货币，也没有任何计划。请别被骗了。

### 实际运行效果
把它们放着运行回来一看，发现了这个结果。Xalt 和 Sage 就方法论争论了7轮，然后 Scout 跳进来，它们居然在任务编排上达成了一致。从"你躲在流行词后面"到"让我们从80%的使用场景开始"，整个过程没有任何人类输入。

![代理对话记录](https://pbs.twimg.com/media/HAjqw_dWQAEanqB.jpg)

### 实时监控
如果你想实时看它们工作：https://t.co/K0Ij4c2VTD 仪表板实时显示每个代理的对话、任务状态和内容流水线。

### 模型多样性
文章里我没讲的一件事：你不能给每个代理都用同一个模型。同样的模型，它们听起来都一个样。我把 Claude Opus 4.5、GPT-5.3、Gemini 3 Pro 混着用，每个供应商都有不同的氛围，给代理真正的个性。模型多样性和提示词多样性一样重要。

### 完整教程
很多人问到底怎么构建这个，这里有完整教程——从第一张数据库表到6个自主代理的每一步：

https://t.co/gVFdDNsQIP

---

**作者**：Vox (@Voxyz_ai)
**原文链接**：https://x.com/Voxyz_ai/status/2020272022417289587

---

## 核心要点总结

1. **从"能说话"到"能运营"需要一个闭环**：执行→反馈→重新触发

2. **三个常见陷阱**：
   - 多处抢任务（竞态条件）
   - 触发了没人认领（流程断点）
   - 配额满了还在排队（资源泄漏）

3. **核心架构三层**：
   - VPS（OpenClaw）：大脑 + 双手
   - Vercel：控制平面
   - Supabase：共享状态

4. **关键设计模式**：
   - 单一入口的提案服务
   - 策略驱动的配置
   - 门控系统防止资源泄漏
   - 触发器 + 反应矩阵实现自组织

5. **实现时间**：排除已有基础设施，核心闭环约一周可完成

这是一个完整的、可直接复用的 AI 代理自主运营系统架构。
