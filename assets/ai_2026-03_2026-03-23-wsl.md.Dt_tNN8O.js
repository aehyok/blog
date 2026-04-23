import{_ as a,c as n,o as p,ag as e}from"./chunks/framework.ELrfyV9R.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"ai/2026-03/2026-03-23-wsl.md","filePath":"ai/2026-03/2026-03-23-wsl.md","lastUpdated":1776945928000}'),t={name:"ai/2026-03/2026-03-23-wsl.md"};function l(c,s,o,i,r,_){return p(),n("div",null,s[0]||(s[0]=[e(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 想在wsl中访问window主机的vpn</span></span>
<span class="line"><span>export https_proxy=http://172.18.0.198:7897</span></span>
<span class="line"><span>export http_proxy=http://172.18.0.198:7897</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 对于 bash (默认)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &#39;export ANTHROPIC_BASE_URL=&quot;https://claude-code.club/api&quot;&#39; &gt;&gt; ~/.bashrc</span></span>
<span class="line"><span>echo &#39;export ANTHROPIC_AUTH_TOKEN=&quot;你的API密钥&quot;&#39; &gt;&gt; ~/.bashrc</span></span>
<span class="line"><span>echo &#39;export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1&#39; &gt;&gt; ~/.bashrc</span></span>
<span class="line"><span>source ~/.bashrc </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 对于 zsh</span></span>
<span class="line"><span>echo &#39;export ANTHROPIC_BASE_URL=&quot;https://claude-code.club/api&quot;&#39; &gt;&gt; ~/.zshrc</span></span>
<span class="line"><span>echo &#39;export ANTHROPIC_AUTH_TOKEN=&quot;你的API密钥&quot;&#39; &gt;&gt; ~/.zshrc</span></span>
<span class="line"><span>echo &#39;export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1&#39; &gt;&gt; ~/.zshrc</span></span>
<span class="line"><span>source ~/.zshrc</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置快捷按键</span></span>
<span class="line"><span>alias cc=&#39;claude --dangerously-skip-permissions --verbose&#39;</span></span>
<span class="line"><span>alias cx=&#39;codex --dangerously-bypass-approvals-and-sandbox&#39;</span></span></code></pre></div>`,1)]))}const u=a(t,[["render",l]]);export{h as __pageData,u as default};
