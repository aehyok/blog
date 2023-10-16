import{_ as s,o as a,c as n,O as l}from"./chunks/framework.ce94e18e.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"daily/2023-10.md","lastUpdated":1697460774000}'),e={name:"daily/2023-10.md"},p=l(`<h2 id="_10月16日" tabindex="-1">10月16日 <a class="header-anchor" href="#_10月16日" aria-label="Permalink to &quot;10月16日&quot;">​</a></h2><ul><li>查询表结构<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">select * from information_schema.\`TABLES\` where  table_schema = &#39;dvsdb30&#39; and TABLE_NAME = &#39;indicator_1713806542282850304&#39;</span></span></code></pre></div></li></ul><h2 id="_10月11日" tabindex="-1">10月11日 <a class="header-anchor" href="#_10月11日" aria-label="Permalink to &quot;10月11日&quot;">​</a></h2><ul><li></li></ul><h2 id="_10月10日" tabindex="-1">10月10日 <a class="header-anchor" href="#_10月10日" aria-label="Permalink to &quot;10月10日&quot;">​</a></h2><ul><li>查看数据库的大小<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">SELECT </span></span>
<span class="line"><span style="color:#A6ACCD;">      table_schema AS &#39;Database&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS &#39;Size (MB)&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  FROM </span></span>
<span class="line"><span style="color:#A6ACCD;">      information_schema.tables </span></span>
<span class="line"><span style="color:#A6ACCD;">  GROUP BY </span></span>
<span class="line"><span style="color:#A6ACCD;">      table_schema;</span></span></code></pre></div></li><li>只查看某个特定的数据库<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">SELECT </span></span>
<span class="line"><span style="color:#A6ACCD;">  table_schema AS &#39;Database&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS &#39;Size (MB)&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM </span></span>
<span class="line"><span style="color:#A6ACCD;">    information_schema.tables </span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE </span></span>
<span class="line"><span style="color:#A6ACCD;">    table_schema = &#39;your_database_name&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">GROUP BY </span></span>
<span class="line"><span style="color:#A6ACCD;">    table_schema;</span></span></code></pre></div></li><li>查看某数据库所有表空间占用<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">SELECT </span></span>
<span class="line"><span style="color:#A6ACCD;">      table_name AS &#39;Table&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS &#39;Size (MB)&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  FROM </span></span>
<span class="line"><span style="color:#A6ACCD;">      information_schema.tables</span></span>
<span class="line"><span style="color:#A6ACCD;">  WHERE </span></span>
<span class="line"><span style="color:#A6ACCD;">      table_schema = &#39;dvsdb30&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  GROUP BY </span></span>
<span class="line"><span style="color:#A6ACCD;">      table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  ORDER BY </span></span>
<span class="line"><span style="color:#A6ACCD;">      (data_length + index_length) DESC;</span></span></code></pre></div></li></ul><h2 id="_10月9日" tabindex="-1">10月9日 <a class="header-anchor" href="#_10月9日" aria-label="Permalink to &quot;10月9日&quot;">​</a></h2><ul><li>vueuse <ul><li><a href="https://vueuse.org/core/useStorage/" target="_blank" rel="noreferrer">https://vueuse.org/core/useStorage/</a></li></ul></li></ul><h2 id="_10月8日" tabindex="-1">10月8日 <a class="header-anchor" href="#_10月8日" aria-label="Permalink to &quot;10月8日&quot;">​</a></h2><ul><li><p>uni-app-x <a href="https://uniapp.dcloud.net.cn/uni-app-x/" target="_blank" rel="noreferrer">https://uniapp.dcloud.net.cn/uni-app-x/</a></p></li><li><p>linux通过命令查看自己的公网ip</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl ifconfig.me</span></span></code></pre></div></li><li><p>定时跳转钉钉</p><ul><li><a href="https://github.com/SmileZXLee/uni-dingTalkHelper" target="_blank" rel="noreferrer">https://github.com/SmileZXLee/uni-dingTalkHelper</a></li></ul></li><li><p>docker容器中代理接口地址</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location /so/api/v1 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass http://101.35.211.235:3001/api/v1;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li><li><p>脚本一键停止容器、删除容器、重新创建容器 执行容器 run.sh脚本下的代码</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">  container=&quot;vue-course&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  podman stop $container</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  echo &quot;停止docker容器:$container&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  podman  rm $container</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  echo &quot;删除docker容器:$container&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  podman-compose  up -d</span></span></code></pre></div><p>通过sh run.sh运行 执行后报错： Error: no container with name or ID &quot;vue-course\\r\\r&quot; found: no such container</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">vim run.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">:set fileformat=unix</span></span>
<span class="line"><span style="color:#A6ACCD;">:wq</span></span></code></pre></div></li></ul><h2 id="_10月7日" tabindex="-1">10月7日 <a class="header-anchor" href="#_10月7日" aria-label="Permalink to &quot;10月7日&quot;">​</a></h2><ul><li><p>linux 部署clash</p><ul><li><a href="https://github.com/wanhebin/clash-for-linux" target="_blank" rel="noreferrer">https://github.com/wanhebin/clash-for-linux</a></li></ul></li><li><p>linux 安装git</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo yum install git</span></span>
<span class="line"><span style="color:#A6ACCD;">// 安装完毕后可以查看版本</span></span>
<span class="line"><span style="color:#A6ACCD;">git --version</span></span></code></pre></div></li><li><p>linux生成ssh</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ssh-keygen -t rsa -b 4096</span></span>
<span class="line"><span style="color:#A6ACCD;">// 拷贝 id_rsa.pub秘钥到服务器</span></span></code></pre></div></li><li><p>linux 安装bun</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 前提是先安装好clash</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -fsSL https://bun.sh/install | bash</span></span></code></pre></div></li><li><p>.net core dapper调用存储过程</p><ul><li>入参参数和出参参数 还有一个返回值的未进行实验</li><li>存储过程可以参考ffpfun_calculateincome_2309</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var parameters = new DynamicParameters();</span></span>
<span class="line"><span style="color:#A6ACCD;">  parameters.Add(&quot;@p_hid&quot;, value:formData[&quot;hid&quot;], dbType: DbType.String, direction: ParameterDirection.Input);</span></span>
<span class="line"><span style="color:#A6ACCD;">  parameters.Add(&quot;@p_result&quot;, dbType: DbType.Int32, direction: ParameterDirection.Output);</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.GetConnection().Execute(form.BehindSQL, parameters, dbTransaction, null, CommandType.StoredProcedure);</span></span>
<span class="line"><span style="color:#A6ACCD;">  var result = parameters.Get&lt;int&gt;(&quot;@p_result&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(result &gt; 0)</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span></code></pre></div>`,13),t=[p];function o(i,c,r,C,u,d){return a(),n("div",null,t)}const y=s(e,[["render",o]]);export{h as __pageData,y as default};
