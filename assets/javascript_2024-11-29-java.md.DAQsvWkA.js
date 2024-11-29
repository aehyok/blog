import{_ as a,c as s,o as n,a5 as p}from"./chunks/framework.CW9jv5bj.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2024-11-29-java.md","filePath":"javascript/2024-11-29-java.md"}'),t={name:"javascript/2024-11-29-java.md"},e=p(`<h2 id="登录" tabindex="-1">登录 <a class="header-anchor" href="#登录" aria-label="Permalink to &quot;登录&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// Swagger快捷登录json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;userName&quot;: &quot;admin&quot;,</span></span>
<span class="line"><span>  &quot;password&quot;: &quot;admin123456!&quot;,</span></span>
<span class="line"><span>  &quot;captchaValue&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>  &quot;captchaKey&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>  &quot;loginType&quot;: &quot;Swagger&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="打包" tabindex="-1">打包 <a class="header-anchor" href="#打包" aria-label="Permalink to &quot;打包&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>maven package </span></span>
<span class="line"><span>// 生成jar包，在target目录下</span></span>
<span class="line"><span>// 拷贝到服务器的目录 /usr/local/sunlight/sun-xxm-java</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 重启服务</span></span>
<span class="line"><span>systemctl restart sun-xxm-java</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 访问地址</span></span>
<span class="line"><span>http://101.200.243.192:624/swagger-ui/index.html</span></span></code></pre></div>`,4),l=[e];function i(o,c,r,u,d,h){return n(),s("div",null,l)}const q=a(t,[["render",i]]);export{g as __pageData,q as default};
