import{_ as a,c as s,o as n,a5 as e}from"./chunks/framework.CW9jv5bj.js";const S=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2024-11-22-台账.md","filePath":"javascript/2024-11-22-台账.md"}'),p={name:"javascript/2024-11-22-台账.md"},t=e(`<h2 id="台账表结构分析" tabindex="-1">台账表结构分析 <a class="header-anchor" href="#台账表结构分析" aria-label="Permalink to &quot;台账表结构分析&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 台账模板（包含TableSchemaId）</span></span>
<span class="line"><span>select * from ImportTemplate    </span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 表结构</span></span>
<span class="line"><span>select * from TableSchema   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 表字段泪飙 （包含TableSchemaId）</span></span>
<span class="line"><span>select * from ColumnSchema  </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 通过IsSearch来设置是否可以作为查询字段</span></span>
<span class="line"><span>SELECT * FROM ColumnSchema S WHERE S.IsSearch = 1</span></span></code></pre></div>`,2),c=[t];function l(i,o,r,_,d,h){return n(),s("div",null,c)}const u=a(p,[["render",l]]);export{S as __pageData,u as default};
