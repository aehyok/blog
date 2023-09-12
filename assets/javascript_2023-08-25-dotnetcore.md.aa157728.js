import{_ as a,o as s,c as n,O as e}from"./chunks/framework.ce94e18e.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-08-25-dotnetcore.md","lastUpdated":1694534132000}'),t={name:"javascript/2023-08-25-dotnetcore.md"},o=e(`<h2 id="修改数据库的操作" tabindex="-1">修改数据库的操作 <a class="header-anchor" href="#修改数据库的操作" aria-label="Permalink to &quot;修改数据库的操作&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 生成实体变更</span></span>
<span class="line"><span style="color:#A6ACCD;">dotnet-ef migrations add XXXX</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 其中如果包含外键相关的，就在 XXXX文件中 将Up和Down方法中的外键相关进行删除</span></span>
<span class="line"><span style="color:#A6ACCD;">// 新创建表的时候一起添加外键应该是没问题的，如果是修改表的时候可能就存在问题</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 同步到数据库</span></span>
<span class="line"><span style="color:#A6ACCD;">dotnet-ef database update</span></span></code></pre></div><h2 id="api-nuget-ogr-v3-index-json无法访问是因为翻墙的问题" tabindex="-1">api.nuget.ogr/v3/index.json无法访问是因为翻墙的问题 <a class="header-anchor" href="#api-nuget-ogr-v3-index-json无法访问是因为翻墙的问题" aria-label="Permalink to &quot;api.nuget.ogr/v3/index.json无法访问是因为翻墙的问题&quot;">​</a></h2><p>更改为直连即可</p>`,4),p=[o];function l(c,r,i,d,_,C){return s(),n("div",null,p)}const u=a(t,[["render",l]]);export{h as __pageData,u as default};
