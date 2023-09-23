import{_ as s,o as n,c as a,O as l}from"./chunks/framework.ce94e18e.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-08-25-dotnetcore.md","lastUpdated":1695465775000}'),p={name:"javascript/2023-08-25-dotnetcore.md"},e=l(`<h2 id="修改数据库的操作" tabindex="-1">修改数据库的操作 <a class="header-anchor" href="#修改数据库的操作" aria-label="Permalink to &quot;修改数据库的操作&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 生成实体变更</span></span>
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
<span class="line"><span style="color:#A6ACCD;">systemctl restart dvsv3-datamonitor</span></span></code></pre></div><h2 id="nginx-配置" tabindex="-1">nginx 配置 <a class="header-anchor" href="#nginx-配置" aria-label="Permalink to &quot;nginx 配置&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 所在路径</span></span>
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
<span class="line"><span style="color:#A6ACCD;"> key: storageoptions:path  是文件上传的路径地址</span></span></code></pre></div><h2 id="服务器上log-txt日志文件存放路径" tabindex="-1">服务器上log.txt日志文件存放路径 <a class="header-anchor" href="#服务器上log-txt日志文件存放路径" aria-label="Permalink to &quot;服务器上log.txt日志文件存放路径&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/var/log/sunlight/v3</span></span></code></pre></div><h2 id="linux下nginx安装" tabindex="-1">linux下nginx安装 <a class="header-anchor" href="#linux下nginx安装" aria-label="Permalink to &quot;linux下nginx安装&quot;">​</a></h2><ul><li>2022-05-11-linux</li></ul>`,16),o=[e];function t(c,i,r,C,A,d){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{D as __pageData,u as default};
