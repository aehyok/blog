import{_ as a,o as e,c as s,b as n}from"./app.39978e14.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]},{"level":2,"title":"主应用 wujie-main","slug":"主应用-wujie-main","link":"#主应用-wujie-main","children":[]}],"relativePath":"javascript/2022-08-25-wujie.md","lastUpdated":1709380648000}'),p={name:"javascript/2022-08-25-wujie.md"},l=n(`<h2 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-hidden="true">#</a></h2><p>创建一个主应用和两个子应用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">pnpm create vite</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>通过vite创建一个vue3项目，然后拷贝三份。目录如下所示：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/764aa7bd38524e2ea9bb475d3dff4e22~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>然后分别安装依赖，先修改为三个不同的端口，将三个项目分别能跑起来</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">pnpm i</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>此时分别到三个项目目录下面，pnpm dev三个项目便可以跑起来了。三个项目分别设置三个端口8800，8810，,8820</p><p>三个项目的根目录下修改vite.config.ts，主要就是为了添加端口</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#babed8;">  plugins: [vue()],</span></span>
<span class="line"><span style="color:#babed8;">  server: {</span></span>
<span class="line"><span style="color:#babed8;">    port: 8800</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="主应用-wujie-main" tabindex="-1">主应用 wujie-main <a class="header-anchor" href="#主应用-wujie-main" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">pnpm i wujie-vue3 -D</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,12),t=[l];function i(c,o,d,r,b,u){return e(),s("div",null,t)}const _=a(p,[["render",i]]);export{m as __pageData,_ as default};