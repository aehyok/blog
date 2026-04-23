import{_ as s,c as e,o as n,ag as p}from"./chunks/framework.ELrfyV9R.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"ai/2026-03/2026-03-21-codex-manager.md","filePath":"ai/2026-03/2026-03-21-codex-manager.md","lastUpdated":1776945928000}'),t={name:"ai/2026-03/2026-03-21-codex-manager.md"};function i(r,a,c,l,o,d){return n(),e("div",null,a[0]||(a[0]=[p(`<p><a href="https://github.com/cnlimiter/codex-manager" target="_blank" rel="noreferrer">https://github.com/cnlimiter/codex-manager</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>  -p 1455:1455 \\</span></span>
<span class="line"><span>  -e WEBUI_HOST=0.0.0.0 \\</span></span>
<span class="line"><span>  -e WEBUI_PORT=1455 \\</span></span>
<span class="line"><span>  -e WEBUI_ACCESS_PASSWORD=aehyok \\</span></span>
<span class="line"><span>  -v $(pwd)/data:/app/data \\</span></span>
<span class="line"><span>  --name codex-register \\</span></span>
<span class="line"><span>  ghcr.io/yunxilyf/codex-register:latest</span></span></code></pre></div>`,2)]))}const g=s(t,[["render",i]]);export{m as __pageData,g as default};
