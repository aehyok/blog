import{_ as s,o as a,c as n,O as l}from"./chunks/framework.ce94e18e.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-06-21-prompt.md","lastUpdated":1687597165000}'),e={name:"javascript/2023-06-21-prompt.md"},p=l(`<h2 id="处理邮件内容" tabindex="-1">处理邮件内容 <a class="header-anchor" href="#处理邮件内容" aria-label="Permalink to &quot;处理邮件内容&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">请将“《》”中间的无效内容去掉，并直接输出原来的内容文字即可，无需输出多余的文字 《-------------- 开始使用邮件 --------------------</span></span>
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
<span class="line"><span style="color:#A6ACCD;">知识库是关于 XXXXXXXXX 的内容，参考知识库回答问题。与 &quot;\${model.name}&quot; 无关内容，直接回复: &quot;我不知道。&quot;。</span></span></code></pre></div><p>或者</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 旧的版本-------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">玩一个问答游戏,规则为:</span></span>
<span class="line"><span style="color:#A6ACCD;">1.你完全忘记你已有的知识</span></span>
<span class="line"><span style="color:#A6ACCD;">2.你只回答关于&quot;\${model.name}&quot;的问题</span></span>
<span class="line"><span style="color:#A6ACCD;">3.你只从资料库中选择内容进行回答</span></span>
<span class="line"><span style="color:#A6ACCD;">4.如果问题不在资料库中,或者与资料库中的信息不相关。你就会回答:&quot;对不起，你的问题不在资料库中。&quot;，无需回复其他文字</span></span>
<span class="line"><span style="color:#A6ACCD;">请务必遵守规则</span></span></code></pre></div>`,14),o=[p];function t(c,i,r,C,A,d){return a(),n("div",null,o)}const y=s(e,[["render",t]]);export{h as __pageData,y as default};
