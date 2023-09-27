import{_ as s,o as a,c as n,O as l}from"./chunks/framework.ce94e18e.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-08-25-dotnetcore.md","lastUpdated":1695813544000}'),e={name:"javascript/2023-08-25-dotnetcore.md"},p=l(`<h2 id="修改数据库的操作" tabindex="-1">修改数据库的操作 <a class="header-anchor" href="#修改数据库的操作" aria-label="Permalink to &quot;修改数据库的操作&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 生成实体变更</span></span>
<span class="line"><span style="color:#A6ACCD;">dotnet-ef migrations add XXXX</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 其中如果包含外键相关的，就在 XXXX文件中 将Up和Down方法中的外键相关进行删除</span></span>
<span class="line"><span style="color:#A6ACCD;">// 新创建表的时候一起添加外键应该是没问题的，如果是修改表的时候可能就存在问题</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 同步到数据库</span></span>
<span class="line"><span style="color:#A6ACCD;">dotnet-ef database update</span></span></code></pre></div><h2 id="api-nuget-ogr-v3-index-json无法访问是因为翻墙的问题" tabindex="-1">api.nuget.ogr/v3/index.json无法访问是因为翻墙的问题 <a class="header-anchor" href="#api-nuget-ogr-v3-index-json无法访问是因为翻墙的问题" aria-label="Permalink to &quot;api.nuget.ogr/v3/index.json无法访问是因为翻墙的问题&quot;">​</a></h2><p>更改为直连即可</p><h2 id="linux-服务位置" tabindex="-1">linux 服务位置 <a class="header-anchor" href="#linux-服务位置" aria-label="Permalink to &quot;linux 服务位置&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 自定义服务地址</span></span>
<span class="line"><span style="color:#A6ACCD;"> /usr/lib/systemd/system/dvsv3-datamonitor.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> [Unit]</span></span>
<span class="line"><span style="color:#A6ACCD;">  Description=dvsv3-datamonitor</span></span>
<span class="line"><span style="color:#A6ACCD;">  After=network-online.target</span></span>
<span class="line"><span style="color:#A6ACCD;">  Wants=network-online.target</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  [Service]</span></span>
<span class="line"><span style="color:#A6ACCD;">  # modify when deploy in prod env</span></span>
<span class="line"><span style="color:#A6ACCD;">  User=dvs</span></span>
<span class="line"><span style="color:#A6ACCD;">  Group=dvs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  Type=simple</span></span>
<span class="line"><span style="color:#A6ACCD;">  ExecStart=/usr/local/dotnet-sdk/dotnet /usr/local/sunlight/dvsv3/dvs-datamonitor/DVS.DataMonitor.Api.dll</span></span>
<span class="line"><span style="color:#A6ACCD;">  WorkingDirectory=/usr/local/sunlight/dvsv3/dvs-datamonitor</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  Restart=always</span></span>
<span class="line"><span style="color:#A6ACCD;">  RestartSec=1</span></span>
<span class="line"><span style="color:#A6ACCD;">  StartLimitInterval=0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  [Install]</span></span>
<span class="line"><span style="color:#A6ACCD;">  WantedBy=multi-user.target</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> // 系统服务地址</span></span>
<span class="line"><span style="color:#A6ACCD;"> /etc/systemd/system</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 设置服务开机自动启动</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl enable dvsv3-datamonitor</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 重启服务</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart dvsv3-datamonitor</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//</span></span></code></pre></div><h2 id="nginx-配置" tabindex="-1">nginx 配置 <a class="header-anchor" href="#nginx-配置" aria-label="Permalink to &quot;nginx 配置&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 所在路径</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/nginx/conf.d/dvsv3.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">// 从这个配置文件中也可以找到swagger 配置路径docs的服务</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">location ~ ^/api/datamonitor/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass http://127.0.0.1:12017;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">修改完毕后nginx -s reload</span></span></code></pre></div><h2 id="子系统服务配置文件" tabindex="-1">子系统服务配置文件 <a class="header-anchor" href="#子系统服务配置文件" aria-label="Permalink to &quot;子系统服务配置文件&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/usr/local/sunlight/dvsv3/etc/dvs-datamonitor-appsettings.json</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;Urls&quot;: &quot;http://*:12017&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;WorkerId&quot;: 8,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;Serilog&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;WriteTo&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">            {},</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;Name&quot;: &quot;File&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;Args&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &quot;path&quot;: &quot;/var/log/sunlight/v3/dvs-datamonitor.txt&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            {}</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="数据导出" tabindex="-1">数据导出 <a class="header-anchor" href="#数据导出" aria-label="Permalink to &quot;数据导出&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 导出模版</span></span>
<span class="line"><span style="color:#A6ACCD;">// SELECT * FROM Template;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 异步任务执行装填</span></span>
<span class="line"><span style="color:#A6ACCD;">select * from AsyncTask s order by s.CreatedAt desc ;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">public enum AsyncTaskState</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    待处理 = 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    处理中 = 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    处理完成 = 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    失败 = 9</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> select * from \`Options\`  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> key: storageoptions:path  是文件上传的路径地址</span></span></code></pre></div><h2 id="服务器上log-txt日志文件存放路径" tabindex="-1">服务器上log.txt日志文件存放路径 <a class="header-anchor" href="#服务器上log-txt日志文件存放路径" aria-label="Permalink to &quot;服务器上log.txt日志文件存放路径&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/var/log/sunlight/v3</span></span></code></pre></div><h2 id="linux下nginx安装" tabindex="-1">linux下nginx安装 <a class="header-anchor" href="#linux下nginx安装" aria-label="Permalink to &quot;linux下nginx安装&quot;">​</a></h2><ul><li>2022-05-11-linux</li></ul><h2 id="区域同步" tabindex="-1">区域同步 <a class="header-anchor" href="#区域同步" aria-label="Permalink to &quot;区域同步&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">之前使用的是  BasicArea</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT  SUM(c.total) total,SUM(c.tobeSubmitted) tobeSubmitted, SUM(c.submitted)  submitted </span></span>
<span class="line"><span style="color:#A6ACCD;">FROM  CollectDataHouseholdSummary c </span></span>
<span class="line"><span style="color:#A6ACCD;"> where c.type=2 and c.areaid in (select id from BasicArea t where t.IdSequences like @areaId )  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">现在 BasicAreaEx</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT  SUM(c.total) total,SUM(c.tobeSubmitted) tobeSubmitted, SUM(c.submitted)  submitted </span></span>
<span class="line"><span style="color:#A6ACCD;">FROM  CollectDataHouseholdSummary c </span></span>
<span class="line"><span style="color:#A6ACCD;"> where c.type=3 and c.areaid in (select t.RegionId from BasicAreaEx t where t.RegionIdSequences like @areaid )</span></span></code></pre></div><h2 id="修改表编码" tabindex="-1">修改表编码 <a class="header-anchor" href="#修改表编码" aria-label="Permalink to &quot;修改表编码&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ALTER TABLE BasicAreaEx CONVERT TO CHARACTER SET utf8 COLLATE utf8_general_ci;</span></span></code></pre></div><h2 id="mysql数据库操作" tabindex="-1">mysql数据库操作 <a class="header-anchor" href="#mysql数据库操作" aria-label="Permalink to &quot;mysql数据库操作&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 展示数据库列表</span></span>
<span class="line"><span style="color:#A6ACCD;">SHOW DATABASES;</span></span></code></pre></div><h2 id="mysql执行数据同步时有可能有数据表访问权限的问题" tabindex="-1">mysql执行数据同步时有可能有数据表访问权限的问题 <a class="header-anchor" href="#mysql执行数据同步时有可能有数据表访问权限的问题" aria-label="Permalink to &quot;mysql执行数据同步时有可能有数据表访问权限的问题&quot;">​</a></h2>`,23),o=[p];function t(c,i,r,C,A,d){return a(),n("div",null,o)}const D=s(e,[["render",t]]);export{u as __pageData,D as default};
