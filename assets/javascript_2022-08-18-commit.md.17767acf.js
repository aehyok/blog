import{_ as s,o as n,c as a,a as p}from"./app.848cc861.js";const u=JSON.parse('{"title":"commit\u89C4\u8303","description":"","frontmatter":{},"headers":[{"level":2,"title":"commit\u89C4\u8303","slug":"commit\u89C4\u8303"},{"level":2,"title":"cz-customizable\u8BBE\u7F6E\u63D0\u4EA4\u6A21\u677F","slug":"cz-customizable\u8BBE\u7F6E\u63D0\u4EA4\u6A21\u677F"},{"level":2,"title":"commitlint \u6821\u9A8C","slug":"commitlint-\u6821\u9A8C"},{"level":2,"title":"husky","slug":"husky"}],"relativePath":"javascript/2022-08-18-commit.md","lastUpdated":1666958800000}'),l={name:"javascript/2022-08-18-commit.md"},e=p(`<h2 id="commit\u89C4\u8303" tabindex="-1">commit\u89C4\u8303 <a class="header-anchor" href="#commit\u89C4\u8303" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm i commitizen -D </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6B64\u65F6\u6211\u4EEC\u5148 <code>git add .</code>,\u7136\u540E\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E0B <code>git cz</code>,\u6240\u4EE5\u73B0\u5728\u53EF\u4EE5\u76F4\u63A5\u5728package.json\u4E2D\u6DFB\u52A0\u4E00\u4E2Ascripts</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;git&quot;: &quot;git&quot;: &quot;git add . &amp;&amp; git cz&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u90A3\u4E48\u63A5\u4E0B\u6765\u76F4\u63A5\u6267\u884C <code>pnpm git</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76d658108ab74a098fda2cc1c6bf574f~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u8F93\u5165commit\u7684\u63D0\u4EA4\u4FE1\u606F\uFF0C\u4FDD\u5B58\uFF0C\u5173\u95ED\u5C0F\u7A97\uFF0C\u56E0\u4E3A\u6211\u8FD9\u91CC\u7528\u7684\u662FgitExtensions\u56FE\u5F62\u64CD\u4F5C\u7A0B\u5E8F\uFF0C\u968F\u540Egit push\u63D0\u4EA4\u5373\u53EF\uFF0C\u4F46\u662F\u8FD9\u6837\u5176\u5B9E\u53EA\u662F\u6362\u4E86\u4E00\u4E2A\u547D\u4EE4\u800C\u5DF2\uFF0C\u5E76\u6CA1\u6709\u4EC0\u4E48\u5B9E\u8D28\u6027\u7684\u6539\u53D8\u3002</p><h2 id="cz-customizable\u8BBE\u7F6E\u63D0\u4EA4\u6A21\u677F" tabindex="-1">cz-customizable\u8BBE\u7F6E\u63D0\u4EA4\u6A21\u677F <a class="header-anchor" href="#cz-customizable\u8BBE\u7F6E\u63D0\u4EA4\u6A21\u677F" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm i cz-customizable</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B89\u88C5\u5B8C\u4E4B\u540E\u5728package.json\u4E2D\u6DFB\u52A0\u5982\u4E0B\u8282\u70B9</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> &quot;config&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;commitizen&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;path&quot;: &quot;node_modules/cz-customizable&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u540C\u65F6\u53EF\u4EE5\u518D\u6839\u76EE\u5F55\u521B\u5EFA.cz-config.js\uFF0C\u8FD9\u91CC\u6709\u4E00\u4EFD\u5B98\u7F51\u63D0\u4F9B\u7684\u6A21\u677F <a href="https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js" target="_blank" rel="noopener noreferrer">https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js</a></p><p>\u4E0B\u9762\u8FD9\u4E2A\u662F\u6211\u81EA\u5DF1\u4FEE\u6539\u540E\u7684\u63D0\u4EA4\u6A21\u677F</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // type \u7C7B\u578B\uFF08\u5B9A\u4E49\u4E4B\u540E\uFF0C\u53EF\u901A\u8FC7\u4E0A\u4E0B\u952E\u9009\u62E9\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">  types: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;feat&#39;, name: &#39;feat:     \u65B0\u589E\u529F\u80FD&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;fix&#39;, name: &#39;fix:      \u4FEE\u590D bug&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;docs&#39;, name: &#39;docs:     \u6587\u6863\u53D8\u66F4&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value: &#39;style&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &#39;style:    \u4EE3\u7801\u683C\u5F0F\uFF08\u4E0D\u5F71\u54CD\u529F\u80FD\uFF0C\u4F8B\u5982\u7A7A\u683C\u3001\u5206\u53F7\u7B49\u683C\u5F0F\u4FEE\u6B63\uFF09&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value: &#39;refactor&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &#39;refactor: \u4EE3\u7801\u91CD\u6784\uFF08\u4E0D\u5305\u62EC bug \u4FEE\u590D\u3001\u529F\u80FD\u65B0\u589E\uFF09&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;perf&#39;, name: &#39;perf:     \u6027\u80FD\u4F18\u5316&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;chore&#39;, name: &#39;chore:     \u5176\u4ED6\u4FEE\u6539, \u6BD4\u5982\u6784\u5EFA\u6D41\u7A0B, \u4F9D\u8D56\u7BA1\u7406\u3001\u7248\u672C\u597D\u4FEE\u6B63.&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // scope \u7C7B\u578B\uFF08\u5B9A\u4E49\u4E4B\u540E\uFF0C\u53EF\u901A\u8FC7\u4E0A\u4E0B\u952E\u9009\u62E9\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">  scopes: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    [&#39;components&#39;, &#39;\u7EC4\u4EF6\u76F8\u5173&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    [&#39;hooks&#39;, &#39;hook \u76F8\u5173&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    [&#39;utils&#39;, &#39;utils \u76F8\u5173&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    [&#39;element-ui&#39;, &#39;\u5BF9 element-ui \u7684\u8C03\u6574&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    [&#39;styles&#39;, &#39;\u6837\u5F0F\u76F8\u5173&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    [&#39;deps&#39;, &#39;\u9879\u76EE\u4F9D\u8D56&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    [&#39;auth&#39;, &#39;\u5BF9 auth \u4FEE\u6539&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    [&#39;other&#39;, &#39;\u5176\u4ED6\u4FEE\u6539&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5982\u679C\u9009\u62E9 custom\uFF0C\u540E\u9762\u4F1A\u8BA9\u4F60\u518D\u8F93\u5165\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684 scope\u3002\u4E5F\u53EF\u4EE5\u4E0D\u8BBE\u7F6E\u6B64\u9879\uFF0C\u628A\u540E\u9762\u7684 allowCustomScopes \u8BBE\u7F6E\u4E3A true</span></span>
<span class="line"><span style="color:#A6ACCD;">    [&#39;custom&#39;, &#39;\u4EE5\u4E0A\u90FD\u4E0D\u662F\uFF1F\u6211\u8981\u81EA\u5B9A\u4E49&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">  ].map(([value, description]) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: \`\${value.padEnd(30)} (\${description})\`</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }),</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u662F\u5426\u5141\u8BB8\u81EA\u5B9A\u4E49\u586B\u5199 scope\uFF0C\u5728 scope \u9009\u62E9\u7684\u65F6\u5019\uFF0C\u4F1A\u6709 empty \u548C custom \u53EF\u4EE5\u9009\u62E9\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">  // allowCustomScopes: true,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // allowTicketNumber: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // isTicketNumberRequired: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ticketNumberPrefix: &#39;TICKET-&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ticketNumberRegExp: &#39;\\\\d{1,5}&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u9488\u5BF9\u6BCF\u4E00\u4E2A type \u53BB\u5B9A\u4E49\u5BF9\u5E94\u7684 scopes\uFF0C\u4F8B\u5982 fix</span></span>
<span class="line"><span style="color:#A6ACCD;">  /*</span></span>
<span class="line"><span style="color:#A6ACCD;">    scopeOverrides: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      fix: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        { name: &#39;merge&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">        { name: &#39;style&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">        { name: &#39;e2eTest&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">        { name: &#39;unitTest&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4EA4\u4E92\u63D0\u793A\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">  messages: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &#39;\u786E\u4FDD\u672C\u6B21\u63D0\u4EA4\u9075\u5FAA\uFF1A\u76DB\u9633\u524D\u7AEF\u4EE3\u7801\u89C4\u8303\uFF01\\n\u9009\u62E9\u4F60\u8981\u63D0\u4EA4\u7684\u7C7B\u578B\uFF1A&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    scope: &#39;\\n\u9009\u62E9\u4E00\u4E2A scope\uFF08\u53EF\u9009\uFF09\uFF1A&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u9009\u62E9 scope: custom \u65F6\u4F1A\u51FA\u4E0B\u9762\u7684\u63D0\u793A</span></span>
<span class="line"><span style="color:#A6ACCD;">    customScope: &#39;\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u7684 scope\uFF1A&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    subject: &#39;\u586B\u5199\u7B80\u77ED\u7CBE\u70BC\u7684\u53D8\u66F4\u63CF\u8FF0\uFF1A\\n&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    body: &#39;\u586B\u5199\u66F4\u52A0\u8BE6\u7EC6\u7684\u53D8\u66F4\u63CF\u8FF0\uFF08\u53EF\u9009\uFF09\u3002\u4F7F\u7528 &quot;|&quot; \u6362\u884C\uFF1A\\n&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    breaking: &#39;\u5217\u4E3E\u975E\u517C\u5BB9\u6027\u91CD\u5927\u7684\u53D8\u66F4\uFF08\u53EF\u9009\uFF09\uFF1A\\n&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    footer: &#39;\u5217\u4E3E\u51FA\u6240\u6709\u53D8\u66F4\u7684 ISSUES CLOSED\uFF08\u53EF\u9009\uFF09\u3002 \u4F8B\u5982: #31, #34\uFF1A\\n&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    confirmCommit: &#39;\u786E\u8BA4\u63D0\u4EA4\uFF1F&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u8BBE\u7F6E\u53EA\u6709 type \u9009\u62E9\u4E86 feat \u6216 fix\uFF0C\u624D\u8BE2\u95EE breaking message</span></span>
<span class="line"><span style="color:#A6ACCD;">  allowBreakingChanges: [&#39;feat&#39;, &#39;fix&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u8DF3\u8FC7\u8981\u8BE2\u95EE\u7684\u6B65\u9AA4</span></span>
<span class="line"><span style="color:#A6ACCD;">  skipQuestions: [&#39;scope&#39;, &#39;body&#39;, &#39;breaking&#39;, &#39;footer&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  subjectLimit: 100, // subject \u9650\u5236\u957F\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">  breaklineChar: &#39;|&#39; // \u6362\u884C\u7B26\uFF0C\u652F\u6301 body \u548C footer</span></span>
<span class="line"><span style="color:#A6ACCD;">  // footerPrefix : &#39;ISSUES CLOSED:&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // askForBreakingChangeFirst : true,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="commitlint-\u6821\u9A8C" tabindex="-1">commitlint \u6821\u9A8C <a class="header-anchor" href="#commitlint-\u6821\u9A8C" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm i @commitlint/cli  @commitlint/config-conventional -D </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B89\u88C5\u5B8C\u540E\uFF0C\u5728\u9879\u76EE\u6839\u76EE\u5F55\u6DFB\u52A0commitlint.config.js\uFF0C\u5E76\u5728\u6587\u4EF6\u4E2D\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.exports = { extends: [&#39;@commitlint/config-conventional&#39;] }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29c42d4dd70545b2b094469b836ca44c~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u518D\u6765\u8FD0\u884C pnpm git</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb49e8548c394c39a728a0801b93efdb~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u9009\u62E9\u63D0\u4EA4\u7C7B\u578B\uFF0C\u8F93\u5165\u63D0\u4EA4\u5185\u5BB9\uFF0C\u63D0\u4EA4\u5B8C\u6210\uFF0C\u73B0\u5728\u5176\u5B9E\u53EF\u4EE5\u518D\u5728\u547D\u4EE4\u540E\u6DFB\u52A0\u4E00\u4E2Agit push</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;git&quot;: &quot;git add . &amp;&amp; git cz &amp;&amp; git push&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u6837\u63D0\u4EA4\u5B8C\u4E4B\u540E\uFF0C\u4FBF\u4F1A\u76F4\u63A5\u81EA\u52A8\u6267\u884Cpush</p><h2 id="husky" tabindex="-1">husky <a class="header-anchor" href="#husky" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm i husky -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728package.json\u4E2D\u6DFB\u52A0</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;hu&quot;: &quot;husky install&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5E76\u5728\u9879\u76EE\u6839\u76EE\u5F55\u7684\u547D\u4EE4\u884C\u4E2D\u6267\u884C <code>pnpm hu</code>,\u6267\u884C\u5B8C\u6BD5\u4E4B\u540E\u53EF\u4EE5\u5728\u9879\u76EE\u4E2D\u89C2\u5BDF\u5230\u591A\u4E86\u4E00\u4E2A\u6587\u4EF6\u5939 <code>.husky</code></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77efeba7f5b6424e8d47ad8134bc57a8~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm i lint-staged -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728package.json\u4E2D\u6DFB\u52A0</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  &quot;lint-staged&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;*.{vue,js,ts}&quot;: &quot;eslint --fix&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><a href="https://juejin.cn/post/7041768022284976165#heading-12" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7041768022284976165#heading-12</a></p>`,34),o=[e];function c(t,i,r,C,A,y){return n(),a("div",null,o)}var d=s(l,[["render",c]]);export{u as __pageData,d as default};
