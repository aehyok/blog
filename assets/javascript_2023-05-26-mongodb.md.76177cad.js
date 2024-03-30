import{_ as s,o as a,c as n,b as e}from"./app.6101b62d.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"mongodb","slug":"mongodb","link":"#mongodb","children":[]},{"level":2,"title":"查询指定的字段","slug":"查询指定的字段","link":"#查询指定的字段","children":[]},{"level":2,"title":"向已有文档中添加字段","slug":"向已有文档中添加字段","link":"#向已有文档中添加字段","children":[]},{"level":2,"title":"添加字段","slug":"添加字段","link":"#添加字段","children":[]},{"level":2,"title":"修改字段名","slug":"修改字段名","link":"#修改字段名","children":[]},{"level":2,"title":"移除字段","slug":"移除字段","link":"#移除字段","children":[]},{"level":2,"title":"mongodb 关联查询(通过主文档字段查询)","slug":"mongodb-关联查询-通过主文档字段查询","link":"#mongodb-关联查询-通过主文档字段查询","children":[]},{"level":2,"title":"创建字典分组和字典项集合","slug":"创建字典分组和字典项集合","link":"#创建字典分组和字典项集合","children":[]},{"level":2,"title":"创建题库集合","slug":"创建题库集合","link":"#创建题库集合","children":[]},{"level":2,"title":"考卷","slug":"考卷","link":"#考卷","children":[]},{"level":2,"title":"考卷对应的考题和作答情况","slug":"考卷对应的考题和作答情况","link":"#考卷对应的考题和作答情况","children":[]},{"level":2,"title":"通过正则模糊查询","slug":"通过正则模糊查询","link":"#通过正则模糊查询","children":[]}],"relativePath":"javascript/2023-05-26-mongodb.md","lastUpdated":1711795643000}'),l={name:"javascript/2023-05-26-mongodb.md"},p=e(`<h2 id="mongodb" tabindex="-1">mongodb <a class="header-anchor" href="#mongodb" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 查询整个表数据</span></span>
<span class="line"><span style="color:#babed8;">db.chats.find()</span></span>
<span class="line"><span style="color:#babed8;">db.getCollection(&#39;chats&#39;).find()</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查询一条数据</span></span>
<span class="line"><span style="color:#babed8;">db.chats.findOne({&quot;userId&quot;: ObjectId(&quot;6465e9d8c54af94e4ce8c0e5&quot;)})</span></span>
<span class="line"><span style="color:#babed8;">db.getCollection(&#39;chats&#39;).findOne({&quot;userId&quot;: ObjectId(&quot;6465e9d8c54af94e4ce8c0e5&quot;)})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">ObjectId字段的类型要在查询条件中进行转换</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">db.chats.find({&quot;userId&quot;: ObjectId(&quot;6465e9d8c54af94e4ce8c0e5&quot;)})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 删除操作（删除匹配的所有记录）</span></span>
<span class="line"><span style="color:#babed8;">db.chats.remove({ &quot;userId&quot;: &quot;123&quot; })</span></span>
<span class="line"><span style="color:#babed8;">db.chats.deleteMany({ &quot;userId&quot;: &quot;123&quot; })</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 删除 匹配的第一个文档</span></span>
<span class="line"><span style="color:#babed8;">db.chats.remove({ &quot;userId&quot;: &quot;123&quot; }, { justOne: true })</span></span>
<span class="line"><span style="color:#babed8;">db.chats.deleteOne({ &quot;userId&quot;: &quot;123&quot; })</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 删除整个集合</span></span>
<span class="line"><span style="color:#babed8;">db.chats.drop()</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 修改数据集合</span></span>
<span class="line"><span style="color:#babed8;">// 只修改一个字段</span></span>
<span class="line"><span style="color:#babed8;">db.chats.updateOne({ &quot;userId&quot;: &quot;123&quot; }, { $set: { &quot;status&quot;: &quot;active&quot; } })</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="查询指定的字段" tabindex="-1">查询指定的字段 <a class="header-anchor" href="#查询指定的字段" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 第二个参数就是查询列表中要显示的字段，_id: 0 则代表不显示_id字段</span></span>
<span class="line"><span style="color:#babed8;">db.collection.find( {}, { field1: 1, field2: 1, _id: 0 } )</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="向已有文档中添加字段" tabindex="-1">向已有文档中添加字段 <a class="header-anchor" href="#向已有文档中添加字段" aria-hidden="true">#</a></h2><p>// 添加两个字段 设置日期字段为当前时间</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">db.companies.updateMany(</span></span>
<span class="line"><span style="color:#babed8;">   {},</span></span>
<span class="line"><span style="color:#babed8;">	 </span></span>
<span class="line"><span style="color:#babed8;">   {</span></span>
<span class="line"><span style="color:#babed8;">		$currentDate: { &quot;createdAt&quot;: { $type: &quot;date&quot; }}, 	</span></span>
<span class="line"><span style="color:#babed8;">		$set: { &quot;createBy&quot; : &quot;&quot; } </span></span>
<span class="line"><span style="color:#babed8;">	 }</span></span>
<span class="line"><span style="color:#babed8;">)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// $set: { &quot;specificDate&quot;: new Date(&quot;2023-06-06&quot;) }</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="添加字段" tabindex="-1">添加字段 <a class="header-anchor" href="#添加字段" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">db.models.updateMany(</span></span>
<span class="line"><span style="color:#babed8;">   {},</span></span>
<span class="line"><span style="color:#babed8;">   { $set: { &quot;remark1&quot; : &quot;&quot; } }</span></span>
<span class="line"><span style="color:#babed8;">)</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="修改字段名" tabindex="-1">修改字段名 <a class="header-anchor" href="#修改字段名" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 将字段remark1修改为remark2</span></span>
<span class="line"><span style="color:#babed8;">db.models.updateMany(</span></span>
<span class="line"><span style="color:#babed8;">   { },</span></span>
<span class="line"><span style="color:#babed8;">   { $rename: { &quot;remark1&quot;: &quot;remark2&quot; } }</span></span>
<span class="line"><span style="color:#babed8;">)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="移除字段" tabindex="-1">移除字段 <a class="header-anchor" href="#移除字段" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">db.models.updateMany(</span></span>
<span class="line"><span style="color:#babed8;">   {},</span></span>
<span class="line"><span style="color:#babed8;">   {</span></span>
<span class="line"><span style="color:#babed8;">     $unset: { &quot;remark1&quot;: &quot;&quot; }</span></span>
<span class="line"><span style="color:#babed8;">   }</span></span>
<span class="line"><span style="color:#babed8;">)</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="mongodb-关联查询-通过主文档字段查询" tabindex="-1">mongodb 关联查询(通过主文档字段查询) <a class="header-anchor" href="#mongodb-关联查询-通过主文档字段查询" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">const data = await Chat.aggregate([</span></span>
<span class="line"><span style="color:#babed8;">   {</span></span>
<span class="line"><span style="color:#babed8;">      $match: {</span></span>
<span class="line"><span style="color:#babed8;">         userId: new mongoose.Types.ObjectId(userId)</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">   },</span></span>
<span class="line"><span style="color:#babed8;">   {</span></span>
<span class="line"><span style="color:#babed8;">      $lookup: {</span></span>
<span class="line"><span style="color:#babed8;">         from: &#39;models&#39;,</span></span>
<span class="line"><span style="color:#babed8;">         localField: &#39;modelId&#39;,</span></span>
<span class="line"><span style="color:#babed8;">         foreignField: &#39;_id&#39;,</span></span>
<span class="line"><span style="color:#babed8;">         as: &#39;modelInfo&#39;</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">   },</span></span>
<span class="line"><span style="color:#babed8;">   {</span></span>
<span class="line"><span style="color:#babed8;">      $project: {</span></span>
<span class="line"><span style="color:#babed8;">         _id: 1, // 设置为 0 表示不显示</span></span>
<span class="line"><span style="color:#babed8;">         title: 1, // 设置为 1 表示显示</span></span>
<span class="line"><span style="color:#babed8;">         modelId: 1, // 设置为 1 表示显示</span></span>
<span class="line"><span style="color:#babed8;">         updateTime: 1, // 设置为 1 表示显示</span></span>
<span class="line"><span style="color:#babed8;">         latestChat: 1,</span></span>
<span class="line"><span style="color:#babed8;">         &#39;modelInfo.name&#39;: 1,</span></span>
<span class="line"><span style="color:#babed8;">         &#39;modelInfo.remark&#39;: 1</span></span>
<span class="line"><span style="color:#babed8;">      }</span></span>
<span class="line"><span style="color:#babed8;">   },</span></span>
<span class="line"><span style="color:#babed8;">   { $sort: { updateTime: -1 } },</span></span>
<span class="line"><span style="color:#babed8;">   { $limit: 5 }</span></span>
<span class="line"><span style="color:#babed8;">   ]);</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="创建字典分组和字典项集合" tabindex="-1">创建字典分组和字典项集合 <a class="header-anchor" href="#创建字典分组和字典项集合" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">db.createCollection(&quot;dictionarygroup&quot;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">db.dictionarygroup.insertOne({</span></span>
<span class="line"><span style="color:#babed8;">  name: &quot;&quot;,</span></span>
<span class="line"><span style="color:#babed8;">  code: &quot;&quot;,</span></span>
<span class="line"><span style="color:#babed8;">  order: 0,</span></span>
<span class="line"><span style="color:#babed8;">  remark: &quot;&quot;,</span></span>
<span class="line"><span style="color:#babed8;">  isDeleted: false,</span></span>
<span class="line"><span style="color:#babed8;">  createdAt: new Date(),</span></span>
<span class="line"><span style="color:#babed8;">  createdBy: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#babed8;">  updatedAt: new Date(),</span></span>
<span class="line"><span style="color:#babed8;">  updatedBy: ObjectId(&quot;617e957f64a6c3e07ad1bfb2&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#babed8;">  isSystem: false</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">db.createCollection(&quot;dictionaryitem&quot;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">db.dictionaryitem.insertOne({</span></span>
<span class="line"><span style="color:#babed8;">  _id: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#babed8;">  name: &quot;&quot;,</span></span>
<span class="line"><span style="color:#babed8;">  code: &quot;&quot;,</span></span>
<span class="line"><span style="color:#babed8;">  dictionaryGroupId: ObjectId(&quot;617e957f64a6c3e07ad1bfb2&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#babed8;">  parentId: ObjectId(&quot;617e957f64a6c3e07ad1bfb3&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#babed8;">  order: 0,</span></span>
<span class="line"><span style="color:#babed8;">  isEnable: false,</span></span>
<span class="line"><span style="color:#babed8;">  remark: &quot;&quot;,</span></span>
<span class="line"><span style="color:#babed8;">  isVisible: false,</span></span>
<span class="line"><span style="color:#babed8;">  isDeleted: false,</span></span>
<span class="line"><span style="color:#babed8;">  createdAt: new Date(),</span></span>
<span class="line"><span style="color:#babed8;">  createdBy: ObjectId(&quot;617e957f64a6c3e07ad1bfb4&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#babed8;">  updatedAt: new Date(),</span></span>
<span class="line"><span style="color:#babed8;">  updatedBy: ObjectId(&quot;617e957f64a6c3e07ad1bfb5&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#babed8;">  isSystem: false</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="创建题库集合" tabindex="-1">创建题库集合 <a class="header-anchor" href="#创建题库集合" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">db.createCollection(&quot;questions&quot;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">db.questions.insertOne({</span></span>
<span class="line"><span style="color:#babed8;">    &quot;question&quot;: &quot;问题内容&quot;,</span></span>
<span class="line"><span style="color:#babed8;">    &quot;answer&quot;: &quot;答案内容&quot;,</span></span>
<span class="line"><span style="color:#babed8;">    &quot;categoryId&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;),</span></span>
<span class="line"><span style="color:#babed8;">    &quot;themeId&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;),</span></span>
<span class="line"><span style="color:#babed8;">    &quot;order&quot;: &quot;顺序&quot;,</span></span>
<span class="line"><span style="color:#babed8;">    &quot;isenable&quot;: true,</span></span>
<span class="line"><span style="color:#babed8;">   &quot;isDeleted&quot;: false,</span></span>
<span class="line"><span style="color:#babed8;">   &quot;createdAt&quot;: new Date(),</span></span>
<span class="line"><span style="color:#babed8;">   &quot;createdBy&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#babed8;">   &quot;updatedAt&quot;: new Date(),</span></span>
<span class="line"><span style="color:#babed8;">   &quot;updatedBy&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb2&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="考卷" tabindex="-1">考卷 <a class="header-anchor" href="#考卷" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">db.createCollection(&quot;exampapers&quot;)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">db.exampapers.insertOne({</span></span>
<span class="line"><span style="color:#babed8;">    &quot;paperName&quot;: &quot;考卷名称&quot;,</span></span>
<span class="line"><span style="color:#babed8;">    &quot;paperLevel&quot;: &quot;初级&quot;, // 可以是 &quot;初级&quot;、&quot;中级&quot; 或 &quot;高级&quot;</span></span>
<span class="line"><span style="color:#babed8;">    &quot;categoryId&quot;: &quot;分类选择&quot;,</span></span>
<span class="line"><span style="color:#babed8;">    &quot;themeChoices&quot;: [&quot;主题1&quot;, &quot;主题2&quot;], // 一个数组，包含了几个主题</span></span>
<span class="line"><span style="color:#babed8;">    &quot;score&quot;: 0, // 分数</span></span>
<span class="line"><span style="color:#babed8;">		&quot;questionCount&quot;: 10,</span></span>
<span class="line"><span style="color:#babed8;">		&quot;isDeleted&quot;: false,</span></span>
<span class="line"><span style="color:#babed8;">		&quot;createdAt&quot;: new Date(),</span></span>
<span class="line"><span style="color:#babed8;">		&quot;createdBy&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#babed8;">		&quot;updatedAt&quot;: new Date(),</span></span>
<span class="line"><span style="color:#babed8;">		&quot;updatedBy&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb2&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="考卷对应的考题和作答情况" tabindex="-1">考卷对应的考题和作答情况 <a class="header-anchor" href="#考卷对应的考题和作答情况" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">db.createCollection(&quot;examanswers&quot;)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">db.examanswers.insertOne({</span></span>
<span class="line"><span style="color:#babed8;">    &quot;paper_id&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;),</span></span>
<span class="line"><span style="color:#babed8;">    &quot;question_id&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;),</span></span>
<span class="line"><span style="color:#babed8;">    &quot;answerContent&quot;: &quot;回答内容&quot;,</span></span>
<span class="line"><span style="color:#babed8;">    &quot;gptContent&quot;: &quot;gpt内容&quot;,</span></span>
<span class="line"><span style="color:#babed8;">    &quot;score&quot;: 0, // 分数</span></span>
<span class="line"><span style="color:#babed8;">		&quot;isDeleted&quot;: false,</span></span>
<span class="line"><span style="color:#babed8;">		&quot;createdAt&quot;: new Date(),</span></span>
<span class="line"><span style="color:#babed8;">		&quot;createdBy&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb1&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#babed8;">		&quot;updatedAt&quot;: new Date(),</span></span>
<span class="line"><span style="color:#babed8;">		&quot;updatedBy&quot;: ObjectId(&quot;617e957f64a6c3e07ad1bfb2&quot;), // Modify the ObjectId value as per your requirement</span></span>
<span class="line"><span style="color:#babed8;">})</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="通过正则模糊查询" tabindex="-1">通过正则模糊查询 <a class="header-anchor" href="#通过正则模糊查询" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">db.models.find(</span></span>
<span class="line"><span style="color:#babed8;">	{</span></span>
<span class="line"><span style="color:#babed8;">		remark: {</span></span>
<span class="line"><span style="color:#babed8;">			$regex: \`7\\\\.29\`,</span></span>
<span class="line"><span style="color:#babed8;">			$options: &#39;ig&#39;</span></span>
<span class="line"><span style="color:#babed8;">		}</span></span>
<span class="line"><span style="color:#babed8;">	}</span></span>
<span class="line"><span style="color:#babed8;">)</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,25),t=[p];function o(c,d,b,i,r,u){return a(),n("div",null,t)}const h=s(l,[["render",o]]);export{q as __pageData,h as default};
