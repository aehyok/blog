import{_ as s,c as n,o as p,ag as e}from"./chunks/framework.ELrfyV9R.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2025-04-18-ai-proxy.md","filePath":"article/code/2025-04-18-ai-proxy.md","lastUpdated":1757403172000}'),t={name:"article/code/2025-04-18-ai-proxy.md"};function i(l,a,c,o,r,d){return p(),n("div",null,a[0]||(a[0]=[e(`<h2 id="项目地址" tabindex="-1">项目地址 <a class="header-anchor" href="#项目地址" aria-label="Permalink to &quot;项目地址&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  https://github.com/egoist/ai-proxy</span></span></code></pre></div><h2 id="如何使用" tabindex="-1">如何使用 <a class="header-anchor" href="#如何使用" aria-label="Permalink to &quot;如何使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  git clone xxxx</span></span></code></pre></div><h2 id="创建镜像" tabindex="-1">创建镜像 <a class="header-anchor" href="#创建镜像" aria-label="Permalink to &quot;创建镜像&quot;">​</a></h2><p>到项目根目录</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 1. 创建镜像</span></span>
<span class="line"><span>  docker build -t ai-proxy .</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 2. 运行镜像</span></span>
<span class="line"><span>  docker run -d -p 3333:3000 --name ai-proxy-container  ai-proxy</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 3. 访问</span></span>
<span class="line"><span>  http://localhost:3333</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 4. 接口调用是</span></span>
<span class="line"><span>  http://localhost:3333/generativelanguage/v1beta</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 5. tailscale启动</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 6. 云服务器访问</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 7. xAi测试地址</span></span>
<span class="line"><span>- https://docs.x.ai/docs/tutorial#the-hitchhikers-guide-to-grok</span></span>
<span class="line"><span>- https://ai.google.dev/gemini-api/docs?hl=zh-cn#rest</span></span></code></pre></div>`,7)]))}const g=s(t,[["render",i]]);export{u as __pageData,g as default};
