import{_ as s,o as a,c as n,a as e}from"./app.76dfe7aa.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"commit规范","slug":"commit规范","link":"#commit规范","children":[]},{"level":2,"title":"cz-customizable设置提交模板","slug":"cz-customizable设置提交模板","link":"#cz-customizable设置提交模板","children":[]},{"level":2,"title":"commitlint 校验","slug":"commitlint-校验","link":"#commitlint-校验","children":[]},{"level":2,"title":"husky","slug":"husky","link":"#husky","children":[]}],"relativePath":"javascript/2022-08-18-commit.md","lastUpdated":1713631972000}'),p={name:"javascript/2022-08-18-commit.md"},l=e(`<h2 id="commit规范" tabindex="-1">commit规范 <a class="header-anchor" href="#commit规范" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">pnpm i commitizen -D </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>此时我们先 <code>git add .</code>,然后就可以使用一下 <code>git cz</code>,所以现在可以直接在package.json中添加一个scripts</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">&quot;git&quot;: &quot;git&quot;: &quot;git add . &amp;&amp; git cz&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>那么接下来直接执行 <code>pnpm git</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76d658108ab74a098fda2cc1c6bf574f~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>输入commit的提交信息，保存，关闭小窗，因为我这里用的是gitExtensions图形操作程序，随后git push提交即可，但是这样其实只是换了一个命令而已，并没有什么实质性的改变。</p><h2 id="cz-customizable设置提交模板" tabindex="-1">cz-customizable设置提交模板 <a class="header-anchor" href="#cz-customizable设置提交模板" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">pnpm i cz-customizable</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>安装完之后在package.json中添加如下节点</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"> &quot;config&quot;: {</span></span>
<span class="line"><span style="color:#babed8;">    &quot;commitizen&quot;: {</span></span>
<span class="line"><span style="color:#babed8;">      &quot;path&quot;: &quot;node_modules/cz-customizable&quot;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>同时可以再根目录创建.cz-config.js，这里有一份官网提供的模板 <a href="https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js" target="_blank" rel="noreferrer">https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js</a></p><p>下面这个是我自己修改后的提交模板</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">module.exports = {</span></span>
<span class="line"><span style="color:#babed8;">  // type 类型（定义之后，可通过上下键选择）</span></span>
<span class="line"><span style="color:#babed8;">  types: [</span></span>
<span class="line"><span style="color:#babed8;">    { value: &#39;feat&#39;, name: &#39;feat:     新增功能&#39; },</span></span>
<span class="line"><span style="color:#babed8;">    { value: &#39;fix&#39;, name: &#39;fix:      修复 bug&#39; },</span></span>
<span class="line"><span style="color:#babed8;">    { value: &#39;docs&#39;, name: &#39;docs:     文档变更&#39; },</span></span>
<span class="line"><span style="color:#babed8;">    {</span></span>
<span class="line"><span style="color:#babed8;">      value: &#39;style&#39;,</span></span>
<span class="line"><span style="color:#babed8;">      name: &#39;style:    代码格式（不影响功能，例如空格、分号等格式修正）&#39;</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">    {</span></span>
<span class="line"><span style="color:#babed8;">      value: &#39;refactor&#39;,</span></span>
<span class="line"><span style="color:#babed8;">      name: &#39;refactor: 代码重构（不包括 bug 修复、功能新增）&#39;</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">    { value: &#39;perf&#39;, name: &#39;perf:     性能优化&#39; },</span></span>
<span class="line"><span style="color:#babed8;">    { value: &#39;chore&#39;, name: &#39;chore:     其他修改, 比如构建流程, 依赖管理、版本好修正.&#39; }</span></span>
<span class="line"><span style="color:#babed8;">  ],</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // scope 类型（定义之后，可通过上下键选择）</span></span>
<span class="line"><span style="color:#babed8;">  scopes: [</span></span>
<span class="line"><span style="color:#babed8;">    [&#39;components&#39;, &#39;组件相关&#39;],</span></span>
<span class="line"><span style="color:#babed8;">    [&#39;hooks&#39;, &#39;hook 相关&#39;],</span></span>
<span class="line"><span style="color:#babed8;">    [&#39;utils&#39;, &#39;utils 相关&#39;],</span></span>
<span class="line"><span style="color:#babed8;">    [&#39;element-ui&#39;, &#39;对 element-ui 的调整&#39;],</span></span>
<span class="line"><span style="color:#babed8;">    [&#39;styles&#39;, &#39;样式相关&#39;],</span></span>
<span class="line"><span style="color:#babed8;">    [&#39;deps&#39;, &#39;项目依赖&#39;],</span></span>
<span class="line"><span style="color:#babed8;">    [&#39;auth&#39;, &#39;对 auth 修改&#39;],</span></span>
<span class="line"><span style="color:#babed8;">    [&#39;other&#39;, &#39;其他修改&#39;],</span></span>
<span class="line"><span style="color:#babed8;">    // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true</span></span>
<span class="line"><span style="color:#babed8;">    [&#39;custom&#39;, &#39;以上都不是？我要自定义&#39;]</span></span>
<span class="line"><span style="color:#babed8;">  ].map(([value, description]) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    return {</span></span>
<span class="line"><span style="color:#babed8;">      value,</span></span>
<span class="line"><span style="color:#babed8;">      name: \`\${value.padEnd(30)} (\${description})\`</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  }),</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。</span></span>
<span class="line"><span style="color:#babed8;">  // allowCustomScopes: true,</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // allowTicketNumber: false,</span></span>
<span class="line"><span style="color:#babed8;">  // isTicketNumberRequired: false,</span></span>
<span class="line"><span style="color:#babed8;">  // ticketNumberPrefix: &#39;TICKET-&#39;,</span></span>
<span class="line"><span style="color:#babed8;">  // ticketNumberRegExp: &#39;\\\\d{1,5}&#39;,</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 针对每一个 type 去定义对应的 scopes，例如 fix</span></span>
<span class="line"><span style="color:#babed8;">  /*</span></span>
<span class="line"><span style="color:#babed8;">    scopeOverrides: {</span></span>
<span class="line"><span style="color:#babed8;">      fix: [</span></span>
<span class="line"><span style="color:#babed8;">        { name: &#39;merge&#39; },</span></span>
<span class="line"><span style="color:#babed8;">        { name: &#39;style&#39; },</span></span>
<span class="line"><span style="color:#babed8;">        { name: &#39;e2eTest&#39; },</span></span>
<span class="line"><span style="color:#babed8;">        { name: &#39;unitTest&#39; }</span></span>
<span class="line"><span style="color:#babed8;">      ]</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">    */</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 交互提示信息</span></span>
<span class="line"><span style="color:#babed8;">  messages: {</span></span>
<span class="line"><span style="color:#babed8;">    type: &#39;确保本次提交遵循：盛阳前端代码规范！\\n选择你要提交的类型：&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    scope: &#39;\\n选择一个 scope（可选）：&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    // 选择 scope: custom 时会出下面的提示</span></span>
<span class="line"><span style="color:#babed8;">    customScope: &#39;请输入自定义的 scope：&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    subject: &#39;填写简短精炼的变更描述：\\n&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    body: &#39;填写更加详细的变更描述（可选）。使用 &quot;|&quot; 换行：\\n&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    breaking: &#39;列举非兼容性重大的变更（可选）：\\n&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    footer: &#39;列举出所有变更的 ISSUES CLOSED（可选）。 例如: #31, #34：\\n&#39;,</span></span>
<span class="line"><span style="color:#babed8;">    confirmCommit: &#39;确认提交？&#39;</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 设置只有 type 选择了 feat 或 fix，才询问 breaking message</span></span>
<span class="line"><span style="color:#babed8;">  allowBreakingChanges: [&#39;feat&#39;, &#39;fix&#39;],</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 跳过要询问的步骤</span></span>
<span class="line"><span style="color:#babed8;">  skipQuestions: [&#39;scope&#39;, &#39;body&#39;, &#39;breaking&#39;, &#39;footer&#39;],</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  subjectLimit: 100, // subject 限制长度</span></span>
<span class="line"><span style="color:#babed8;">  breaklineChar: &#39;|&#39; // 换行符，支持 body 和 footer</span></span>
<span class="line"><span style="color:#babed8;">  // footerPrefix : &#39;ISSUES CLOSED:&#39;</span></span>
<span class="line"><span style="color:#babed8;">  // askForBreakingChangeFirst : true,</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="commitlint-校验" tabindex="-1">commitlint 校验 <a class="header-anchor" href="#commitlint-校验" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">pnpm i @commitlint/cli  @commitlint/config-conventional -D </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>安装完后，在项目根目录添加commitlint.config.js，并在文件中添加如下配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">module.exports = { extends: [&#39;@commitlint/config-conventional&#39;] }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29c42d4dd70545b2b094469b836ca44c~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>再来运行 pnpm git</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb49e8548c394c39a728a0801b93efdb~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>选择提交类型，输入提交内容，提交完成，现在其实可以再在命令后添加一个git push</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">&quot;git&quot;: &quot;git add . &amp;&amp; git cz &amp;&amp; git push&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>这样提交完之后，便会直接自动执行push</p><h2 id="husky" tabindex="-1">husky <a class="header-anchor" href="#husky" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">pnpm i husky -D</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>在package.json中添加</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">&quot;hu&quot;: &quot;husky install&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>并在项目根目录的命令行中执行 <code>pnpm hu</code>,执行完毕之后可以在项目中观察到多了一个文件夹 <code>.husky</code></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77efeba7f5b6424e8d47ad8134bc57a8~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">pnpm i lint-staged -D</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>在package.json中添加</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">  &quot;lint-staged&quot;: {</span></span>
<span class="line"><span style="color:#babed8;">    &quot;*.{vue,js,ts}&quot;: &quot;eslint --fix&quot;</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p><a href="https://juejin.cn/post/7041768022284976165#heading-12" target="_blank" rel="noreferrer">https://juejin.cn/post/7041768022284976165#heading-12</a></p>`,34),o=[l];function t(c,i,b,d,r,m){return a(),n("div",null,o)}const g=s(p,[["render",t]]);export{y as __pageData,g as default};
