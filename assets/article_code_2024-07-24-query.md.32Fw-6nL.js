import{_ as s,c as n,o as e,ag as t}from"./chunks/framework.mJdS8VI0.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2024-07-24-query.md","filePath":"article/code/2024-07-24-query.md","lastUpdated":1751876988000}'),p={name:"article/code/2024-07-24-query.md"};function o(l,a,i,u,r,c){return e(),n("div",null,a[0]||(a[0]=[t(`<h2 id="菜单" tabindex="-1">菜单 <a class="header-anchor" href="#菜单" aria-label="Permalink to &quot;菜单&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 先通过root 获取根菜单</span></span>
<span class="line"><span>select * from md_sysparameters s where s.name like &#39;%root%&#39; and systemid=&#39;dev&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 然后再通过MenuID获取下级菜单</span></span>
<span class="line"><span>select * from md_sysparameters s where s.\`name\` like &#39;%90000&#39; and systemid=&#39;dev&#39;</span></span></code></pre></div><h2 id="数据导入菜单" tabindex="-1">数据导入菜单 <a class="header-anchor" href="#数据导入菜单" aria-label="Permalink to &quot;数据导入菜单&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;MenuID&quot;: &quot;60000&quot;,</span></span>
<span class="line"><span>    &quot;MenuTitle&quot;: &quot;乡村摸底调查数据导入&quot;,</span></span>
<span class="line"><span>    &quot;DisplayOrder&quot;: 25,</span></span>
<span class="line"><span>    &quot;FatherID&quot;: &quot;0&quot;,</span></span>
<span class="line"><span>    &quot;IconName&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;MenuType&quot;: &quot;LoadFromServer&quot;,</span></span>
<span class="line"><span>    &quot;MenuParameter&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;CanUse&quot;: true,</span></span>
<span class="line"><span>    &quot;Level&quot;: 1,</span></span>
<span class="line"><span>    &quot;IconIndex&quot;: &quot;-1&quot;,</span></span>
<span class="line"><span>    &quot;Children&quot;: []</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4)]))}const h=s(p,[["render",o]]);export{q as __pageData,h as default};
