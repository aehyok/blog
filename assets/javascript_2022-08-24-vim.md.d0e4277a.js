import{_ as a,o as e,c as s,b as n}from"./app.39978e14.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"打开某个文件","slug":"打开某个文件","link":"#打开某个文件","children":[]},{"level":2,"title":"修改vim配置","slug":"修改vim配置","link":"#修改vim配置","children":[]}],"relativePath":"javascript/2022-08-24-vim.md","lastUpdated":1709380648000}'),t={name:"javascript/2022-08-24-vim.md"},l=n(`<ul><li><p><a href="https://juejin.cn/post/6844903721550217229" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903721550217229</a></p></li><li><p><a href="https://juejin.cn/post/6844903665161994248" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903665161994248</a></p></li><li><p><a href="https://juejin.cn/post/7124892604881174541" target="_blank" rel="noreferrer">https://juejin.cn/post/7124892604881174541</a></p></li></ul><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-hidden="true">#</a></h2><p>vim就是一款文本编辑器，跟window下的notepad类似，只不过</p><h2 id="打开某个文件" tabindex="-1">打开某个文件 <a class="header-anchor" href="#打开某个文件" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">vim </span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">nginx</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">conf</span></span>
<span class="line"></span></code></pre></div><p>如果想让文件显示行号,下面两个命令都可以</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">:set number</span></span>
<span class="line"><span style="color:#babed8;">:set nu</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="修改vim配置" tabindex="-1">修改vim配置 <a class="header-anchor" href="#修改vim配置" aria-hidden="true">#</a></h2><p>这里先只知道配置文件修改的地方</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">vim ~/.viminfo</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,10),p=[l];function i(o,r,c,d,h,_){return e(),s("div",null,p)}const b=a(t,[["render",i]]);export{m as __pageData,b as default};