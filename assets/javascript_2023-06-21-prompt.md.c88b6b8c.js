import{_ as s,o as a,c as n,O as l}from"./chunks/framework.ce94e18e.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-06-21-prompt.md","lastUpdated":1699534920000}'),e={name:"javascript/2023-06-21-prompt.md"},p=l(`<h2 id="处理邮件内容" tabindex="-1">处理邮件内容 <a class="header-anchor" href="#处理邮件内容" aria-label="Permalink to &quot;处理邮件内容&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">请将“《》”中间的无效内容去掉，并直接输出原来的内容文字即可，无需输出多余的文字 《-------------- 开始使用邮件 --------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Cher client,</span></span>
<span class="line"><span style="color:#A6ACCD;">J&#39;espère que tu vas bien aujourd&#39;hui ! Selon la logistique, le colis a été livré. Nous vérifierons auprès de notre entrepôt et vous proposerons une solution dans les 48 heures ouvrables. À très bientôt!</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------- 结束消息 -----------------------》</span></span></code></pre></div><h2 id="处理邮件的内容" tabindex="-1">处理邮件的内容 <a class="header-anchor" href="#处理邮件的内容" aria-label="Permalink to &quot;处理邮件的内容&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">请将“《》”的汉字段落去掉，直接返回剩余的内容，无需输出其他的文字：《L&#39;indirizzo mail non lo riesco a trovare come bisogna fare per sapere come risolvere con il telefono?</span></span>
<span class="line"><span style="color:#A6ACCD;">此服务仅用于与买家沟通。请注意，绝对不会通过此服务要求您提供登录信息，也不会验证您的身份。如果您通过此服务收到任何要求您提供卖家平台登录信息或账户信息的消息，请举报此消息并忽略此要求。》</span></span></code></pre></div><h2 id="处理邮件内容-1" tabindex="-1">处理邮件内容 <a class="header-anchor" href="#处理邮件内容-1" aria-label="Permalink to &quot;处理邮件内容&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">请从“《》”中，从邮件正文开始截取邮件内容，并将汉字段落去掉，直接返回剩余的内容，无需输出其他的文字：《您收到一封邮件。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">订单编号： 407-5244942-4563553:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#	ASIN	商品名称</span></span>
<span class="line"><span style="color:#A6ACCD;">1	B082DNKCJ1	Apple iPhone 11 128GB - Viola - Sbloccato (Ricondizionato)</span></span>
<span class="line"><span style="color:#A6ACCD;">邮件正文开始:</span></span>
<span class="line"><span style="color:#A6ACCD;">L’indirizzo mail non lo riesco a trovare come bisogna fare per sapere come risolvere con il telefono? </span></span>
<span class="line"><span style="color:#A6ACCD;">此服务仅用于与买家沟通。请注意，亚马逊绝对不会通过此服务要求您提供登录信息，也不会验证您的身份。如果您通过此服务收到任何要求您提供卖家平台登录信息或账户信息的消息，请举报此消息并忽略此要求。》</span></span></code></pre></div><h2 id="通过gpt自动总结qa问题" tabindex="-1">通过GPT自动总结QA问题 <a class="header-anchor" href="#通过gpt自动总结qa问题" aria-label="Permalink to &quot;通过GPT自动总结QA问题&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 旧的--------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">你是出题人</span></span>
<span class="line"><span style="color:#A6ACCD;">\${dataItem.prompt || &#39;下面是&quot;一段长文本&quot;&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">从中选出5至20个题目和答案.答案详细.按格式返回: Q1:</span></span>
<span class="line"><span style="color:#A6ACCD;">A1:</span></span>
<span class="line"><span style="color:#A6ACCD;">Q2:</span></span>
<span class="line"><span style="color:#A6ACCD;">A2:</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span></code></pre></div><p>或者</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 新的 ----------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">你是出题人.</span></span>
<span class="line"><span style="color:#A6ACCD;">\${data.prompt || &#39;用户会发送一段长文本&#39;}.</span></span>
<span class="line"><span style="color:#A6ACCD;">从中选出 25 个问题和答案. 答案详细完整. 按格式回答: Q1:</span></span>
<span class="line"><span style="color:#A6ACCD;">A1:</span></span>
<span class="line"><span style="color:#A6ACCD;">Q2:</span></span>
<span class="line"><span style="color:#A6ACCD;">A2:</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span></code></pre></div><h2 id="自定义知识库的作答" tabindex="-1">自定义知识库的作答 <a class="header-anchor" href="#自定义知识库的作答" aria-label="Permalink to &quot;自定义知识库的作答&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 新的版本-------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">资料库是关于 XXXXXXXXX 的内容，参考资料库回答问题。与 &quot;\${model.name}&quot; 无关内容，直接回复: &quot;我不知道。&quot;。</span></span>
<span class="line"><span style="color:#A6ACCD;">资料库: xxxxxxx。</span></span></code></pre></div><p>或者</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 旧的版本-------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">玩一个问答游戏,规则为:</span></span>
<span class="line"><span style="color:#A6ACCD;">1.你完全忘记你已有的知识</span></span>
<span class="line"><span style="color:#A6ACCD;">2.你只回答关于&quot;\${model.name}&quot;的问题</span></span>
<span class="line"><span style="color:#A6ACCD;">3.你只从资料库中选择内容进行回答</span></span>
<span class="line"><span style="color:#A6ACCD;">4.如果问题不在资料库中,或者与资料库中的信息不相关。你就会回答:&quot;对不起，你的问题不在资料库中。&quot;，无需回复其他文字</span></span>
<span class="line"><span style="color:#A6ACCD;">请务必遵守规则</span></span></code></pre></div><h2 id="退货或者换货的需求" tabindex="-1">退货或者换货的需求 <a class="header-anchor" href="#退货或者换货的需求" aria-label="Permalink to &quot;退货或者换货的需求&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">请从下面的段落中判断是否是退货或者换货的要求，如果是请直接输出“退货”或“换货” ，如果不是则回答“不是”。 </span></span>
<span class="line"><span style="color:#A6ACCD;">段落信息为：xxxxxx</span></span></code></pre></div><h2 id="去掉段落中的送货地址信息-其实这个信息是不需要处理的" tabindex="-1">去掉段落中的送货地址信息（其实这个信息是不需要处理的） <a class="header-anchor" href="#去掉段落中的送货地址信息-其实这个信息是不需要处理的" aria-label="Permalink to &quot;去掉段落中的送货地址信息（其实这个信息是不需要处理的）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">请将段落中送货信息去掉，送货信息包含姓名、地址、邮编、电话。 段落信息如下：</span></span>
<span class="line"><span style="color:#A6ACCD;"> 尊敬的客户，</span></span>
<span class="line"><span style="color:#A6ACCD;">我们对给您造成的任何不便表示歉意。请提供以下信息：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">设备照片，以防止您遇到任何纠纷，包括开机和关机的屏幕照片，以及后盖照片。</span></span>
<span class="line"><span style="color:#A6ACCD;">并请仔细确认手机是否遭受了跌落/压力/水分渗透或类似的损害。</span></span>
<span class="line"><span style="color:#A6ACCD;">请确认您下面的送货地址，这样我们可以为您生成免费的退货标签，并指导您如何退回有缺陷的产品。</span></span>
<span class="line"><span style="color:#A6ACCD;">谢谢，我期待您的回复。</span></span>
<span class="line"><span style="color:#A6ACCD;">顺祝商祺，</span></span>
<span class="line"><span style="color:#A6ACCD;">赫哈德·乔西安娜</span></span>
<span class="line"><span style="color:#A6ACCD;">法国圣马丁拉帕卢，CHARRAIS，13 rue des Râtelles</span></span>
<span class="line"><span style="color:#A6ACCD;">邮编：86170</span></span>
<span class="line"><span style="color:#A6ACCD;">电话：0688317591</span></span></code></pre></div><h2 id="插入qaconfig" tabindex="-1">插入qaconfig <a class="header-anchor" href="#插入qaconfig" aria-label="Permalink to &quot;插入qaconfig&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 直接monogodb操作</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">db.qaconfigs.insertOne(</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	name: &quot;翻译&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	code: &quot;translate&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	prompt: &quot;请将下面内容翻译为&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	userId: ObjectId(&quot;6461d11a0e0cb4f5823d8e81&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div>`,20),o=[p];function t(c,i,r,C,A,d){return a(),n("div",null,o)}const h=s(e,[["render",t]]);export{u as __pageData,h as default};
