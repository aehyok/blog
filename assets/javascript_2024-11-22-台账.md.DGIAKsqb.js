import{_ as a,c as s,o as e,a5 as n}from"./chunks/framework.CW9jv5bj.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2024-11-22-台账.md","filePath":"javascript/2024-11-22-台账.md"}'),p={name:"javascript/2024-11-22-台账.md"},l=n(`<h2 id="台账表结构分析" tabindex="-1">台账表结构分析 <a class="header-anchor" href="#台账表结构分析" aria-label="Permalink to &quot;台账表结构分析&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 台账模板（包含TableSchemaId）</span></span>
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
<span class="line"><span>SELECT * FROM ColumnSchema S WHERE S.IsSearch = 1</span></span></code></pre></div><h2 id="一套表任务配置列表" tabindex="-1">一套表任务配置列表 <a class="header-anchor" href="#一套表任务配置列表" aria-label="Permalink to &quot;一套表任务配置列表&quot;">​</a></h2><p>select * from DynamicReport(包含QueryId、TableSchemaId)</p><p>select * from DynamicReport s where s.TableSchemaId is not null</p><h2 id="数据查询算法-sql或者c-逻辑" tabindex="-1">数据查询算法（sql或者C#逻辑） <a class="header-anchor" href="#数据查询算法-sql或者c-逻辑" aria-label="Permalink to &quot;数据查询算法（sql或者C#逻辑）&quot;">​</a></h2><p>select * from <code>Query</code> s where s.Id= 1674720456927744000</p>`,7),t=[l];function c(o,i,r,d,h,m){return e(),s("div",null,t)}const f=a(p,[["render",c]]);export{u as __pageData,f as default};
