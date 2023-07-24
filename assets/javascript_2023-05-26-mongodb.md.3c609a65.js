import{_ as s,o as a,c as n,O as e}from"./chunks/framework.ce94e18e.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-05-26-mongodb.md","lastUpdated":1690206780000}'),l={name:"javascript/2023-05-26-mongodb.md"},p=e(`<h2 id="mongodb" tabindex="-1">mongodb <a class="header-anchor" href="#mongodb" aria-label="Permalink to &quot;mongodb&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 查询整个表数据</span></span>
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
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="mongodb-关联查询-通过主文档字段查询" tabindex="-1">mongodb 关联查询(通过主文档字段查询) <a class="header-anchor" href="#mongodb-关联查询-通过主文档字段查询" aria-label="Permalink to &quot;mongodb 关联查询(通过主文档字段查询)&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const data = await Chat.aggregate([</span></span>
<span class="line"><span style="color:#A6ACCD;">   {</span></span>
<span class="line"><span style="color:#A6ACCD;">      $match: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         userId: new mongoose.Types.ObjectId(userId)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">   },</span></span>
<span class="line"><span style="color:#A6ACCD;">   {</span></span>
<span class="line"><span style="color:#A6ACCD;">      $lookup: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         from: &#39;models&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         localField: &#39;modelId&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         foreignField: &#39;_id&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         as: &#39;modelInfo&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">   },</span></span>
<span class="line"><span style="color:#A6ACCD;">   {</span></span>
<span class="line"><span style="color:#A6ACCD;">      $project: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         _id: 1, // 设置为 0 表示不显示</span></span>
<span class="line"><span style="color:#A6ACCD;">         title: 1, // 设置为 1 表示显示</span></span>
<span class="line"><span style="color:#A6ACCD;">         modelId: 1, // 设置为 1 表示显示</span></span>
<span class="line"><span style="color:#A6ACCD;">         updateTime: 1, // 设置为 1 表示显示</span></span>
<span class="line"><span style="color:#A6ACCD;">         latestChat: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;modelInfo.name&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &#39;modelInfo.remark&#39;: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">   },</span></span>
<span class="line"><span style="color:#A6ACCD;">   { $sort: { updateTime: -1 } },</span></span>
<span class="line"><span style="color:#A6ACCD;">   { $limit: 5 }</span></span>
<span class="line"><span style="color:#A6ACCD;">   ]);</span></span></code></pre></div><h2 id="创建字典分组和字典项集合" tabindex="-1">创建字典分组和字典项集合 <a class="header-anchor" href="#创建字典分组和字典项集合" aria-label="Permalink to &quot;创建字典分组和字典项集合&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db.createCollection(&quot;dictionarygroup&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">db.dictionarygroup.insertOne({</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  code: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  order: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">  remark: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  isDeleted: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  createdAt: new Date(),</span></span>
<span class="line"><span style="color:#A6ACCD;">  createdBy: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#A6ACCD;">  updatedAt: new Date(),</span></span>
<span class="line"><span style="color:#A6ACCD;">  updatedBy: ObjectId(&quot;617e957f64a6c3e07ad1bfb2&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#A6ACCD;">  isSystem: false</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">db.createCollection(&quot;dictionaryitem&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">db.dictionaryitem.insertOne({</span></span>
<span class="line"><span style="color:#A6ACCD;">  _id: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  code: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  dictionaryGroupId: ObjectId(&quot;617e957f64a6c3e07ad1bfb2&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#A6ACCD;">  parentId: ObjectId(&quot;617e957f64a6c3e07ad1bfb3&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#A6ACCD;">  order: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">  isEnable: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  remark: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  isVisible: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  isDeleted: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  createdAt: new Date(),</span></span>
<span class="line"><span style="color:#A6ACCD;">  createdBy: ObjectId(&quot;617e957f64a6c3e07ad1bfb4&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#A6ACCD;">  updatedAt: new Date(),</span></span>
<span class="line"><span style="color:#A6ACCD;">  updatedBy: ObjectId(&quot;617e957f64a6c3e07ad1bfb5&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#A6ACCD;">  isSystem: false</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span></code></pre></div><h2 id="创建题库集合" tabindex="-1">创建题库集合 <a class="header-anchor" href="#创建题库集合" aria-label="Permalink to &quot;创建题库集合&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db.createCollection(&quot;questions&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">db.questions.insertOne({</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;question&quot;: &quot;问题内容&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;answer&quot;: &quot;答案内容&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;categoryId&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;themeId&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;order&quot;: &quot;顺序&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;isenable&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">   &quot;isDeleted&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">   &quot;createdAt&quot;: new Date(),</span></span>
<span class="line"><span style="color:#A6ACCD;">   &quot;createdBy&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#A6ACCD;">   &quot;updatedAt&quot;: new Date(),</span></span>
<span class="line"><span style="color:#A6ACCD;">   &quot;updatedBy&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb2&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="考卷" tabindex="-1">考卷 <a class="header-anchor" href="#考卷" aria-label="Permalink to &quot;考卷&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db.createCollection(&quot;exampapers&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">db.exampapers.insertOne({</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;paperName&quot;: &quot;考卷名称&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;paperLevel&quot;: &quot;初级&quot;, // 可以是 &quot;初级&quot;、&quot;中级&quot; 或 &quot;高级&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;categoryId&quot;: &quot;分类选择&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;themeChoices&quot;: [&quot;主题1&quot;, &quot;主题2&quot;], // 一个数组，包含了几个主题</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;score&quot;: 0, // 分数</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;questionCount&quot;: 10,</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;isDeleted&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;createdAt&quot;: new Date(),</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;createdBy&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;updatedAt&quot;: new Date(),</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;updatedBy&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb2&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="考卷对应的考题和作答情况" tabindex="-1">考卷对应的考题和作答情况 <a class="header-anchor" href="#考卷对应的考题和作答情况" aria-label="Permalink to &quot;考卷对应的考题和作答情况&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db.createCollection(&quot;examanswers&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">db.examanswers.insertOne({</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;paper_id&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;question_id&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;answerContent&quot;: &quot;回答内容&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;gptContent&quot;: &quot;gpt内容&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;score&quot;: 0, // 分数</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;isDeleted&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;createdAt&quot;: new Date(),</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;createdBy&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;updatedAt&quot;: new Date(),</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;updatedBy&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb2&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div>`,23),o=[p];function t(c,r,i,C,u,A){return a(),n("div",null,o)}const y=s(l,[["render",t]]);export{q as __pageData,y as default};
