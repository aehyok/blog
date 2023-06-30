import{_ as s,o as a,c as n,O as l}from"./chunks/framework.ce94e18e.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-05-26-mongodb.md","lastUpdated":1688115365000}'),e={name:"javascript/2023-05-26-mongodb.md"},p=l(`<h2 id="mongodb" tabindex="-1">mongodb <a class="header-anchor" href="#mongodb" aria-label="Permalink to &quot;mongodb&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 查询整个表数据</span></span>
<span class="line"><span style="color:#A6ACCD;">db.chats.find()</span></span>
<span class="line"><span style="color:#A6ACCD;">db.getCollection(&#39;chats&#39;).find()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查询一条数据</span></span>
<span class="line"><span style="color:#A6ACCD;">db.chats.findOne({&quot;userId&quot;: ObjectId(&quot;6465e9d8c54af94e4ce8c0e5&quot;)})</span></span>
<span class="line"><span style="color:#A6ACCD;">db.getCollection(&#39;chats&#39;).findOne({&quot;userId&quot;: ObjectId(&quot;6465e9d8c54af94e4ce8c0e5&quot;)})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ObjectId字段的类型要在查询条件中进行转换</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">db.chats.find({&quot;userId&quot;: ObjectId(&quot;6465e9d8c54af94e4ce8c0e5&quot;)})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 删除操作（删除匹配的所有记录）</span></span>
<span class="line"><span style="color:#A6ACCD;">db.chats.remove({ &quot;userId&quot;: &quot;123&quot; })</span></span>
<span class="line"><span style="color:#A6ACCD;">db.chats.deleteMany({ &quot;userId&quot;: &quot;123&quot; })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 删除 匹配的第一个文档</span></span>
<span class="line"><span style="color:#A6ACCD;">db.chats.remove({ &quot;userId&quot;: &quot;123&quot; }, { justOne: true })</span></span>
<span class="line"><span style="color:#A6ACCD;">db.chats.deleteOne({ &quot;userId&quot;: &quot;123&quot; })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 删除整个集合</span></span>
<span class="line"><span style="color:#A6ACCD;">db.chats.drop()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 修改数据集合</span></span>
<span class="line"><span style="color:#A6ACCD;">// 只修改一个字段</span></span>
<span class="line"><span style="color:#A6ACCD;">db.chats.updateOne({ &quot;userId&quot;: &quot;123&quot; }, { $set: { &quot;status&quot;: &quot;active&quot; } })</span></span></code></pre></div><h2 id="查询指定的字段" tabindex="-1">查询指定的字段 <a class="header-anchor" href="#查询指定的字段" aria-label="Permalink to &quot;查询指定的字段&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 第二个参数就是查询列表中要显示的字段，_id: 0 则代表不显示_id字段</span></span>
<span class="line"><span style="color:#A6ACCD;">db.collection.find( {}, { field1: 1, field2: 1, _id: 0 } )</span></span></code></pre></div><h2 id="向已有文档中添加字段" tabindex="-1">向已有文档中添加字段 <a class="header-anchor" href="#向已有文档中添加字段" aria-label="Permalink to &quot;向已有文档中添加字段&quot;">​</a></h2><p>// 添加两个字段 设置日期字段为当前时间</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db.companies.updateMany(</span></span>
<span class="line"><span style="color:#A6ACCD;">   {},</span></span>
<span class="line"><span style="color:#A6ACCD;">	 </span></span>
<span class="line"><span style="color:#A6ACCD;">   {</span></span>
<span class="line"><span style="color:#A6ACCD;">		$currentDate: { &quot;createdAt&quot;: { $type: &quot;date&quot; }}, 	</span></span>
<span class="line"><span style="color:#A6ACCD;">		$set: { &quot;createBy&quot; : &quot;&quot; } </span></span>
<span class="line"><span style="color:#A6ACCD;">	 }</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// $set: { &quot;specificDate&quot;: new Date(&quot;2023-06-06&quot;) }</span></span></code></pre></div><h2 id="添加字段" tabindex="-1">添加字段 <a class="header-anchor" href="#添加字段" aria-label="Permalink to &quot;添加字段&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db.models.updateMany(</span></span>
<span class="line"><span style="color:#A6ACCD;">   {},</span></span>
<span class="line"><span style="color:#A6ACCD;">   { $set: { &quot;remark1&quot; : &quot;&quot; } }</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="修改字段名" tabindex="-1">修改字段名 <a class="header-anchor" href="#修改字段名" aria-label="Permalink to &quot;修改字段名&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 将字段remark1修改为remark2</span></span>
<span class="line"><span style="color:#A6ACCD;">db.models.updateMany(</span></span>
<span class="line"><span style="color:#A6ACCD;">   { },</span></span>
<span class="line"><span style="color:#A6ACCD;">   { $rename: { &quot;remark1&quot;: &quot;remark2&quot; } }</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="移除字段" tabindex="-1">移除字段 <a class="header-anchor" href="#移除字段" aria-label="Permalink to &quot;移除字段&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db.models.updateMany(</span></span>
<span class="line"><span style="color:#A6ACCD;">   {},</span></span>
<span class="line"><span style="color:#A6ACCD;">   {</span></span>
<span class="line"><span style="color:#A6ACCD;">     $unset: { &quot;remark1&quot;: &quot;&quot; }</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,13),o=[p];function t(c,i,r,C,d,A){return a(),n("div",null,o)}const q=s(e,[["render",t]]);export{y as __pageData,q as default};
