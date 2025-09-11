import{_ as s,c as n,o as e,ag as p}from"./chunks/framework.ELrfyV9R.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2024-11-22-台账.md","filePath":"article/code/2024-11-22-台账.md","lastUpdated":1757580971000}'),t={name:"article/code/2024-11-22-台账.md"};function l(o,a,c,i,r,d){return e(),n("div",null,a[0]||(a[0]=[p(`<h2 id="web端查询转换-mariadb-maxscale" tabindex="-1">web端查询转换（MariaDB MaxScale） <a class="header-anchor" href="#web端查询转换-mariadb-maxscale" aria-label="Permalink to &quot;web端查询转换（MariaDB MaxScale）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 直接对Long类型字段进行转换</span></span>
<span class="line"><span>select CAST(r.Id AS CHAR(19))  from DynamicReportTaskRecord r where r.Id=1862420590838173696</span></span></code></pre></div><h2 id="台账表结构分析" tabindex="-1">台账表结构分析 <a class="header-anchor" href="#台账表结构分析" aria-label="Permalink to &quot;台账表结构分析&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 台账模板（包含TableSchemaId）</span></span>
<span class="line"><span>select * from ImportTemplate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 表结构</span></span>
<span class="line"><span>select * from TableSchema   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 表字段泪飙 （包含TableSchemaId）</span></span>
<span class="line"><span>select * from ColumnSchema</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 通过IsSearch来设置是否可以作为查询字段</span></span>
<span class="line"><span>SELECT * FROM ColumnSchema S WHERE S.IsSearch = 1</span></span></code></pre></div><h2 id="一套表任务配置列表" tabindex="-1">一套表任务配置列表 <a class="header-anchor" href="#一套表任务配置列表" aria-label="Permalink to &quot;一套表任务配置列表&quot;">​</a></h2><p>select * from DynamicReport(包含QueryId、TableSchemaId)</p><p>select * from DynamicReport s where s.TableSchemaId is not null</p><h2 id="数据查询算法-sql或者c-逻辑" tabindex="-1">数据查询算法（sql或者C#逻辑） <a class="header-anchor" href="#数据查询算法-sql或者c-逻辑" aria-label="Permalink to &quot;数据查询算法（sql或者C#逻辑）&quot;">​</a></h2><p>select * from <code>Query</code> s where s.Id= 1674720456927744000</p><h2 id="一套表数据修改" tabindex="-1">一套表数据修改 <a class="header-anchor" href="#一套表数据修改" aria-label="Permalink to &quot;一套表数据修改&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;action&quot;: 2,</span></span>
<span class="line"><span>  &quot;formName&quot;: &quot;1839216387046920192-dynamicReportId&quot;,</span></span>
<span class="line"><span>  &quot;areaId&quot;: 0,</span></span>
<span class="line"><span>  &quot;parameters&quot;: {</span></span>
<span class="line"><span>    &quot;id&quot;: &quot;1847161187184300032&quot;,</span></span>
<span class="line"><span>    &quot;dynamicReportTaskId&quot;: &quot;1837009693336353453&quot;,</span></span>
<span class="line"><span>    &quot;dynamicReportTaskRecordId&quot;: &quot;1839221861414752256&quot;,</span></span>
<span class="line"><span>    &quot;dynamicReportId&quot;: &quot;1839216387046920192&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,11)]))}const m=s(t,[["render",l]]);export{h as __pageData,m as default};
