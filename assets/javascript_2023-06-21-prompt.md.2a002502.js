import{_ as a,o as s,c as n,b as e}from"./app.232525a4.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"处理邮件内容","slug":"处理邮件内容","link":"#处理邮件内容","children":[]},{"level":2,"title":"处理邮件的内容","slug":"处理邮件的内容","link":"#处理邮件的内容","children":[]},{"level":2,"title":"处理邮件内容","slug":"处理邮件内容-1","link":"#处理邮件内容-1","children":[]},{"level":2,"title":"通过GPT自动总结QA问题","slug":"通过gpt自动总结qa问题","link":"#通过gpt自动总结qa问题","children":[]},{"level":2,"title":"自定义知识库的作答","slug":"自定义知识库的作答","link":"#自定义知识库的作答","children":[]},{"level":2,"title":"退货或者换货的需求","slug":"退货或者换货的需求","link":"#退货或者换货的需求","children":[]},{"level":2,"title":"去掉段落中的送货地址信息（其实这个信息是不需要处理的）","slug":"去掉段落中的送货地址信息-其实这个信息是不需要处理的","link":"#去掉段落中的送货地址信息-其实这个信息是不需要处理的","children":[]},{"level":2,"title":"插入qaconfig","slug":"插入qaconfig","link":"#插入qaconfig","children":[]}],"relativePath":"javascript/2023-06-21-prompt.md","lastUpdated":1706694082000}'),l={name:"javascript/2023-06-21-prompt.md"},p=e(`<h2 id="处理邮件内容" tabindex="-1">处理邮件内容 <a class="header-anchor" href="#处理邮件内容" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">请将“《》”中间的无效内容去掉，并直接输出原来的内容文字即可，无需输出多余的文字 《-------------- 开始使用邮件 --------------------</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">Cher client,</span></span>
<span class="line"><span style="color:#babed8;">J&#39;espère que tu vas bien aujourd&#39;hui ! Selon la logistique, le colis a été livré. Nous vérifierons auprès de notre entrepôt et vous proposerons une solution dans les 48 heures ouvrables. À très bientôt!</span></span>
<span class="line"><span style="color:#babed8;">-------------- 结束消息 -----------------------》</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="处理邮件的内容" tabindex="-1">处理邮件的内容 <a class="header-anchor" href="#处理邮件的内容" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">请将“《》”的汉字段落去掉，直接返回剩余的内容，无需输出其他的文字：《L&#39;indirizzo mail non lo riesco a trovare come bisogna fare per sapere come risolvere con il telefono?</span></span>
<span class="line"><span style="color:#babed8;">此服务仅用于与买家沟通。请注意，绝对不会通过此服务要求您提供登录信息，也不会验证您的身份。如果您通过此服务收到任何要求您提供卖家平台登录信息或账户信息的消息，请举报此消息并忽略此要求。》</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="处理邮件内容-1" tabindex="-1">处理邮件内容 <a class="header-anchor" href="#处理邮件内容-1" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">请从“《》”中，从邮件正文开始截取邮件内容，并将汉字段落去掉，直接返回剩余的内容，无需输出其他的文字：《您收到一封邮件。</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">订单编号： 407-5244942-4563553:</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">#	ASIN	商品名称</span></span>
<span class="line"><span style="color:#babed8;">1	B082DNKCJ1	Apple iPhone 11 128GB - Viola - Sbloccato (Ricondizionato)</span></span>
<span class="line"><span style="color:#babed8;">邮件正文开始:</span></span>
<span class="line"><span style="color:#babed8;">L’indirizzo mail non lo riesco a trovare come bisogna fare per sapere come risolvere con il telefono? </span></span>
<span class="line"><span style="color:#babed8;">此服务仅用于与买家沟通。请注意，亚马逊绝对不会通过此服务要求您提供登录信息，也不会验证您的身份。如果您通过此服务收到任何要求您提供卖家平台登录信息或账户信息的消息，请举报此消息并忽略此要求。》</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="通过gpt自动总结qa问题" tabindex="-1">通过GPT自动总结QA问题 <a class="header-anchor" href="#通过gpt自动总结qa问题" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 旧的--------------------------</span></span>
<span class="line"><span style="color:#babed8;">你是出题人</span></span>
<span class="line"><span style="color:#babed8;">\${dataItem.prompt || &#39;下面是&quot;一段长文本&quot;&#39;}</span></span>
<span class="line"><span style="color:#babed8;">从中选出5至20个题目和答案.答案详细.按格式返回: Q1:</span></span>
<span class="line"><span style="color:#babed8;">A1:</span></span>
<span class="line"><span style="color:#babed8;">Q2:</span></span>
<span class="line"><span style="color:#babed8;">A2:</span></span>
<span class="line"><span style="color:#babed8;">...</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>或者</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 新的 ----------------------------</span></span>
<span class="line"><span style="color:#babed8;">你是出题人.</span></span>
<span class="line"><span style="color:#babed8;">\${data.prompt || &#39;用户会发送一段长文本&#39;}.</span></span>
<span class="line"><span style="color:#babed8;">从中选出 25 个问题和答案. 答案详细完整. 按格式回答: Q1:</span></span>
<span class="line"><span style="color:#babed8;">A1:</span></span>
<span class="line"><span style="color:#babed8;">Q2:</span></span>
<span class="line"><span style="color:#babed8;">A2:</span></span>
<span class="line"><span style="color:#babed8;">...</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="自定义知识库的作答" tabindex="-1">自定义知识库的作答 <a class="header-anchor" href="#自定义知识库的作答" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 新的版本-------------------------------------</span></span>
<span class="line"><span style="color:#babed8;">资料库是关于 XXXXXXXXX 的内容，参考资料库回答问题。与 &quot;\${model.name}&quot; 无关内容，直接回复: &quot;我不知道。&quot;。</span></span>
<span class="line"><span style="color:#babed8;">资料库: xxxxxxx。</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>或者</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 旧的版本-------------------------------------</span></span>
<span class="line"><span style="color:#babed8;">玩一个问答游戏,规则为:</span></span>
<span class="line"><span style="color:#babed8;">1.你完全忘记你已有的知识</span></span>
<span class="line"><span style="color:#babed8;">2.你只回答关于&quot;\${model.name}&quot;的问题</span></span>
<span class="line"><span style="color:#babed8;">3.你只从资料库中选择内容进行回答</span></span>
<span class="line"><span style="color:#babed8;">4.如果问题不在资料库中,或者与资料库中的信息不相关。你就会回答:&quot;对不起，你的问题不在资料库中。&quot;，无需回复其他文字</span></span>
<span class="line"><span style="color:#babed8;">请务必遵守规则</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="退货或者换货的需求" tabindex="-1">退货或者换货的需求 <a class="header-anchor" href="#退货或者换货的需求" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">请从下面的段落中判断是否是退货或者换货的要求，如果是请直接输出“退货”或“换货” ，如果不是则回答“不是”。 </span></span>
<span class="line"><span style="color:#babed8;">段落信息为：xxxxxx</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="去掉段落中的送货地址信息-其实这个信息是不需要处理的" tabindex="-1">去掉段落中的送货地址信息（其实这个信息是不需要处理的） <a class="header-anchor" href="#去掉段落中的送货地址信息-其实这个信息是不需要处理的" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">请将段落中送货信息去掉，送货信息包含姓名、地址、邮编、电话。 段落信息如下：</span></span>
<span class="line"><span style="color:#babed8;"> 尊敬的客户，</span></span>
<span class="line"><span style="color:#babed8;">我们对给您造成的任何不便表示歉意。请提供以下信息：</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">设备照片，以防止您遇到任何纠纷，包括开机和关机的屏幕照片，以及后盖照片。</span></span>
<span class="line"><span style="color:#babed8;">并请仔细确认手机是否遭受了跌落/压力/水分渗透或类似的损害。</span></span>
<span class="line"><span style="color:#babed8;">请确认您下面的送货地址，这样我们可以为您生成免费的退货标签，并指导您如何退回有缺陷的产品。</span></span>
<span class="line"><span style="color:#babed8;">谢谢，我期待您的回复。</span></span>
<span class="line"><span style="color:#babed8;">顺祝商祺，</span></span>
<span class="line"><span style="color:#babed8;">赫哈德·乔西安娜</span></span>
<span class="line"><span style="color:#babed8;">法国圣马丁拉帕卢，CHARRAIS，13 rue des Râtelles</span></span>
<span class="line"><span style="color:#babed8;">邮编：86170</span></span>
<span class="line"><span style="color:#babed8;">电话：0688317591</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="插入qaconfig" tabindex="-1">插入qaconfig <a class="header-anchor" href="#插入qaconfig" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 直接monogodb操作</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">db.qaconfigs.insertOne(</span></span>
<span class="line"><span style="color:#babed8;">{</span></span>
<span class="line"><span style="color:#babed8;">	name: &quot;翻译&quot;,</span></span>
<span class="line"><span style="color:#babed8;">	code: &quot;translate&quot;,</span></span>
<span class="line"><span style="color:#babed8;">	prompt: &quot;请将下面内容翻译为&quot;,</span></span>
<span class="line"><span style="color:#babed8;">	userId: ObjectId(&quot;6461d11a0e0cb4f5823d8e81&quot;)</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,20),o=[p];function t(c,i,r,d,b,y){return s(),n("div",null,o)}const g=a(l,[["render",t]]);export{u as __pageData,g as default};
