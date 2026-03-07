---
type: "inbox"
"status ": "pending"
source: "web-clipper"
url: "https://x.com/IceBearMiner/status/2019409133355807197"
created: 2026-03-07
---
看完don哥的系统搭建，我也来分享一下自己的系统

我是如何把 AI 变成"可智能编排的工具"的？

## 首先搞懂几个词

**Skill 是什么？**

就是一个 教程 文件。你提前写好遇到这类问题该怎么解决，存成 .md 文件，放进 .claude/skills/ 目录。下次 Claude Code 遇到类似问题，就按你写的套路来。

**工作流是什么？**

一个活儿需要好几步：先写代码、再写测试、最后审查。你可以写一个工作流甚至skills组合，告诉 AI：按这个顺序，依次调用这几个 Skill。它就会像流水线一样自动跑完。

**自动识别怎么实现的？**

靠总指挥 Skill。你在里面写路由规则：用户说写代码就调 code-gen，说帮我理解 xxx就调学习流程。AI 读到这个规则，就知道该派谁干活。

**这些东西住在哪？**

你电脑上的 .claude/skills/ 目录。没有就自己建。文章后面的目录结构，就是我这个目录里的样子。

## 核心思路

大多数人用 AI 是这样的：

> 有需求 → 问 AI → 复制代码 → 下次？重来一遍。

每次都在重新发明轮子。

我的用法不一样：

> 有需求 → 总指挥判断复杂度 → 挑合适的 Skill 组合 → 编排器协调执行 → 质量门禁检查 → 结果留档。

**前者是散兵游勇，后者是正规军。** 散兵打完就散，正规军打完还复盘、升级装备。

## 目录结构

.claude/skills/\_architecture/ │ ├── L0 层：决策层（三个总指挥） │ ├── meta-commander/ # 管代码 │ ├── evaluation-commander/ # 管评审 │ └── learning-commander/ # 管学习 │ ├── L1 层：协调层（九个编排器） │ ├── code-orchestrator/ │ ├── doc-orchestrator/ │ ├── data-orchestrator/ │ └── ...等等 │ ├── L2 层：干活层（46 个执行 Skills） │ ├── core/ # 核心款，28 个 │ ├── extended/ # 扩展款，14 个 │ └── experimental/ # 实验款，4 个 │ ├── genesis/ # 创生层 │ └── prime-mover/ # 负责生新 Skill │ └── infra/ # 基础设施 │ ├── │ ├── skill-registry/ # 注册管理 │ ├── eval-engine/ # 评测 │ └── rlaif-engine/ # 自我迭代 │ └──meta-commander/ [#映射表](https://x.com/search?q=%23%E6%98%A0%E5%B0%84%E8%A1%A8&src=hashtag_click) └──evaluation-commander/ [#映射表](https://x.com/search?q=%23%E6%98%A0%E5%B0%84%E8%A1%A8&src=hashtag_click) └──learning-commander/ [#映射表](https://x.com/search?q=%23%E6%98%A0%E5%B0%84%E8%A1%A8&src=hashtag_click) └──...

## 工作流程拆解

1\. 任务识别

我说：帮我做个登录功能。

系统识别出这是代码活儿，交给 **meta-commander**（代码总指挥）。

总指挥干两件事：判断复杂度、选执行路径。

- S 级（简单）→ 直接叫 code-gen 干
- M 级（中等）→ 叫 code-orchestrator 协调
- L 级（复杂）→ 叫 multi-agent-orchestrator 联合作战
- XL 级（现有能力不够）→ 叫 prime-mover 现场孵化新 Skill

2\. 编排执行

假设是 M 级，需要写代码、写测试、做审查。

code-orchestrator 自动安排：

code-gen 写代码 ↓ test-gen 写测试 ↓ code-review 审代码 ↓ 全过？交货。没过？打回重来。

一句话全丢给他自己跑

3\. 多轮评审

如果我问：React 和 Vue，这个项目用哪个好？

系统切到 **evaluation-commander**（评审总指挥），启动多轮评审：

**Round 1：初筛** 调用subagent三个评审员同时看，投票淘汰最差的。阅读顺序打乱，防止先看的占便宜。

**Round 2：深挖** 剩下的方案，逐个分析 Top 3 缺陷。

**Round 3：对抗** 魔鬼代言人专门攻击第一名。挑出致命伤就翻盘。

**Round 4：收尾** 被淘汰的还有复活机会。最后形成共识。

这套机制就是为了防止AI 拍脑袋。

4\. 学习流程

我说一句我想学习消息队列。

系统切到 **learning-commander**（学习总指挥），四阶段走：

**Phase 1：消化** — 找资料、提炼知识点、用类比解释

**Phase 2：结构化** — 画概念地图、生成图表

**Phase 3：内化** — 自我解释验证、苏格拉底式提问，确保真懂

**Phase 4：应用** — 写练习代码、跑测试，实战巩固

学习深度可选：

- **awareness**（听说过）→ 只跑 Phase 1
- **understanding**（理解了）→ Phase 1-2
- **application**（会用了）→ Phase 1-3
- **mastery**（精通了）→ 全跑→ 记录文档

## Skill 的生老病死

这套系统最有意思的设计：**Skill 会晋升，也会被淘汰。**

三级体系

**级别数量契约严格度说明**core28严格主力部队extended14标准后备力量experimental4宽松新兵蛋子

晋升规则

experimental（适应度 < 0.7） ↓ 适应度 ≥ 0.7 且调用 ≥ 20 次 extended（适应度 0.7-0.9） ↓ 适应度 ≥ 0.9 且调用 ≥ 50 次 core（适应度 > 0.9）

表现差的？降级。长期没人用的？归档。

系统自己会越来越能打。

## 自我进化

prime-mover：造物主

现有 Skill 搞不定的活儿，它负责造：

- **孵化**：从零造一个
- **变异**：基于现有的微调
- **融合**：把几个合成一个
- **分化**：把一个大的拆成几个专精的

rlaif-engine：进化引擎

收集执行反馈 → 分析成功/失败模式 → 自动改进 Skill

有安全约束：

- 单次改动不超过 30%
- 连续失败 3 次，冻结迭代
- Core Skill 改动需要人批准

## 异常处理

四级升级机制：

**Level 1：自己搞定** 超时就重试，格式歪了就自动修。最多试 3 次。

**Level 2：编排器介入** 输出不合格就换备选 Skill。连续失败就上报更高层。

**Level 3：找人** 改动太大、涉及 Core Skill，得人批准。

**Level 4：急刹车** 适应度暴跌、连续被拒、数据校验失败——冻结一切写操作。

## 想自己搭一套？

几个建议：

**1\. 先把架子立起来**

L0：决策层 L1：协调层 L2：执行层

别上来就追求 46 个 Skill。刚开始3-5 个核心的就够了。

**2\. 契约要清晰**

每个 Skill 得说清楚：要什么输入、给什么输出、什么时候该叫它。

**3\. 质量门禁别省**

代码写完要审，测试要能跑通，多方案要有评审。

**4\. 记录表现**

从第一天就开始记。表现好的升，表现差的降。定期复盘。

## 让 Claude Code 帮你搭

你可以直接把这篇文章丢给 Claude Code，再加上这段：

我想搭一套技能编排系统。 ​ 我的情况： - 主要场景：\[代码开发/内容创作/数据分析/...\] - 痛点：\[每次从零开始/质量不稳定/...\] - 想先解决：\[代码生成/代码审查/...\] ​ 请帮我： 1. 设计分层结构 2. 定义核心 Skill 契约 3. 建立编排流程 4. 写 CLAUDE.md 项目指南

**几个忠告：**

- 先做个小 demo，解决一个具体问题
- 边用边改，别指望一步到位
- 第一天就开始记数据
- 每周或每月复盘一次
- 别让 所有Skill 的描述同时加载，否则会吃掉 Claude 的上下文窗口，导致它变笨。
- L0 层和 L1 层的指令如果写得太像，AI 会陷入“逻辑回环”。

## 热知识：

claude code不仅仅适用于写作和编程，如果你最近大火的龙虾，你可以直接说：帮我安装好[https://github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)，文档在[https://docs.openclaw.ai/](https://docs.openclaw.ai/) 剩下就只需要你提供api和key就OK了

如果是VPS也可以让CC连接服务器，如果是本地mac mini，查完IP，去Mac 上，选取苹果菜单 >“系统设置”，点按边栏中的“通用” ，然后点按“共享”。或者直接本地登录CC让他一键配置就解决