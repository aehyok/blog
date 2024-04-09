import{_ as s,o as a,c as n,b as e}from"./app.de907897.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"修改数据库的操作","slug":"修改数据库的操作","link":"#修改数据库的操作","children":[]},{"level":2,"title":"api.nuget.ogr/v3/index.json无法访问是因为翻墙的问题","slug":"api-nuget-ogr-v3-index-json无法访问是因为翻墙的问题","link":"#api-nuget-ogr-v3-index-json无法访问是因为翻墙的问题","children":[]},{"level":2,"title":"linux 服务位置","slug":"linux-服务位置","link":"#linux-服务位置","children":[]},{"level":2,"title":"nginx 配置","slug":"nginx-配置","link":"#nginx-配置","children":[]},{"level":2,"title":"子系统服务配置文件","slug":"子系统服务配置文件","link":"#子系统服务配置文件","children":[]},{"level":2,"title":"数据导出","slug":"数据导出","link":"#数据导出","children":[]},{"level":2,"title":"服务器上log.txt日志文件存放路径","slug":"服务器上log-txt日志文件存放路径","link":"#服务器上log-txt日志文件存放路径","children":[]},{"level":2,"title":"linux下nginx安装","slug":"linux下nginx安装","link":"#linux下nginx安装","children":[]},{"level":2,"title":"区域同步","slug":"区域同步","link":"#区域同步","children":[]},{"level":2,"title":"修改表编码","slug":"修改表编码","link":"#修改表编码","children":[]},{"level":2,"title":"mysql数据库操作","slug":"mysql数据库操作","link":"#mysql数据库操作","children":[]},{"level":2,"title":"mysql执行数据同步时有可能有数据表访问权限的问题","slug":"mysql执行数据同步时有可能有数据表访问权限的问题","link":"#mysql执行数据同步时有可能有数据表访问权限的问题","children":[]},{"level":2,"title":"判断枚举是否存在","slug":"判断枚举是否存在","link":"#判断枚举是否存在","children":[]},{"level":2,"title":"将EFCore IDbContextTransaction转换为 Mysql驱动下 DbTransaction","slug":"将efcore-idbcontexttransaction转换为-mysql驱动下-dbtransaction","link":"#将efcore-idbcontexttransaction转换为-mysql驱动下-dbtransaction","children":[]},{"level":2,"title":"事务里面如果有创建表结构的则不会跟随事务","slug":"事务里面如果有创建表结构的则不会跟随事务","link":"#事务里面如果有创建表结构的则不会跟随事务","children":[]},{"level":2,"title":"数据库菜单更新","slug":"数据库菜单更新","link":"#数据库菜单更新","children":[]},{"level":2,"title":"定时任务","slug":"定时任务","link":"#定时任务","children":[]},{"level":2,"title":"rabbitmq 异步任务处理","slug":"rabbitmq-异步任务处理","link":"#rabbitmq-异步任务处理","children":[]},{"level":2,"title":"应急发布逻辑处理","slug":"应急发布逻辑处理","link":"#应急发布逻辑处理","children":[]},{"level":2,"title":"定义微信消息","slug":"定义微信消息","link":"#定义微信消息","children":[]},{"level":2,"title":"rabbitmq在项目中的使用","slug":"rabbitmq在项目中的使用","link":"#rabbitmq在项目中的使用","children":[]}],"relativePath":"javascript/2023-11-21-dotnetcore.md","lastUpdated":1712628734000}'),l={name:"javascript/2023-11-21-dotnetcore.md"},p=e(`<h2 id="修改数据库的操作" tabindex="-1">修改数据库的操作 <a class="header-anchor" href="#修改数据库的操作" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 生成实体变更</span></span>
<span class="line"><span style="color:#babed8;">dotnet-ef migrations add XXXX</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 其中如果包含外键相关的，就在 XXXX文件中 将Up和Down方法中的外键相关进行删除</span></span>
<span class="line"><span style="color:#babed8;">// 新创建表的时候一起添加外键应该是没问题的，如果是修改表的时候可能就存在问题</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//使用命令行工具</span></span>
<span class="line"><span style="color:#babed8;">https://learn.microsoft.com/zh-cn/ef/core/cli/dotnet?WT.mc_id=DOP-MVP-5003855#installing-the-tools</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看版本</span></span>
<span class="line"><span style="color:#babed8;">https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 同步到数据库</span></span>
<span class="line"><span style="color:#babed8;">dotnet-ef database update</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 超过一个dbcontext就需要指定</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet-ef migrations add XXXX -c SecondContext</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet-ef migrations add XXXX -c DvsContext --framework net6.0</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 通过-v可以查看执行过程以及发生错误的具体error信息</span></span>
<span class="line"><span style="color:#babed8;">dotnet-ef migrations add XXXX -c DvsContext --framework net6.0 -v</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet-ef migrations add InitTask -c DvsContext --framework net8.0 -v</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet-ef database update  -c SecondContext</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet-ef database update  -c DvsContext --framework net6.0</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet-ef database update  -c DvsContext --framework net6.0 -v </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet-ef database update  -c DvsContext --framework net6.0 -v </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet-ef database update -c DvsContext --framework net8.0 -v</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 20231204084647_ModifyHouseholdFiled  从当前的下一个变更生成开始</span></span>
<span class="line"><span style="color:#babed8;">dotnet-ef migrations script 20231204084647_ModifyHouseholdFiled  -c DvsContext --framework net6.0 &gt;migrations_2023_1211.sql</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="api-nuget-ogr-v3-index-json无法访问是因为翻墙的问题" tabindex="-1">api.nuget.ogr/v3/index.json无法访问是因为翻墙的问题 <a class="header-anchor" href="#api-nuget-ogr-v3-index-json无法访问是因为翻墙的问题" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">将代理更改为直连即可</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="linux-服务位置" tabindex="-1">linux 服务位置 <a class="header-anchor" href="#linux-服务位置" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"> // 自定义服务地址</span></span>
<span class="line"><span style="color:#babed8;"> /usr/lib/systemd/system/dvsv3-datamonitor.service</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> [Unit]</span></span>
<span class="line"><span style="color:#babed8;">  Description=dvsv3-datamonitor</span></span>
<span class="line"><span style="color:#babed8;">  After=network-online.target</span></span>
<span class="line"><span style="color:#babed8;">  Wants=network-online.target</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  [Service]</span></span>
<span class="line"><span style="color:#babed8;">  # modify when deploy in prod env</span></span>
<span class="line"><span style="color:#babed8;">  User=dvs</span></span>
<span class="line"><span style="color:#babed8;">  Group=dvs</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  Type=simple</span></span>
<span class="line"><span style="color:#babed8;">  ExecStart=/usr/local/dotnet-sdk/dotnet /usr/local/sunlight/dvsv3/dvs-datamonitor/DVS.DataMonitor.Api.dll</span></span>
<span class="line"><span style="color:#babed8;">  WorkingDirectory=/usr/local/sunlight/dvsv3/dvs-datamonitor</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  Restart=always</span></span>
<span class="line"><span style="color:#babed8;">  RestartSec=1</span></span>
<span class="line"><span style="color:#babed8;">  StartLimitInterval=0</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  [Install]</span></span>
<span class="line"><span style="color:#babed8;">  WantedBy=multi-user.target</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> // 系统服务地址</span></span>
<span class="line"><span style="color:#babed8;"> /etc/systemd/system</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 设置服务开机自动启动</span></span>
<span class="line"><span style="color:#babed8;">systemctl enable dvsv3-datamonitor</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 重启服务</span></span>
<span class="line"><span style="color:#babed8;">systemctl restart dvsv3-datamonitor</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 修改配置文件</span></span>
<span class="line"><span style="color:#babed8;">systemctl daemon-reload</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="nginx-配置" tabindex="-1">nginx 配置 <a class="header-anchor" href="#nginx-配置" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 所在路径</span></span>
<span class="line"><span style="color:#babed8;">/etc/nginx/conf.d/dvsv3.conf</span></span>
<span class="line"><span style="color:#babed8;">// 从这个配置文件中也可以找到swagger 配置路径docs的服务</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">location ~ ^/api/datamonitor/ {</span></span>
<span class="line"><span style="color:#babed8;">    proxy_pass http://127.0.0.1:12017;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">修改完毕后nginx -s reload</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="子系统服务配置文件" tabindex="-1">子系统服务配置文件 <a class="header-anchor" href="#子系统服务配置文件" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">/usr/local/sunlight/dvsv3/etc/dvs-datamonitor-appsettings.json</span></span>
<span class="line"><span style="color:#babed8;">{</span></span>
<span class="line"><span style="color:#babed8;">    &quot;Urls&quot;: &quot;http://*:12017&quot;,</span></span>
<span class="line"><span style="color:#babed8;">    &quot;WorkerId&quot;: 8,</span></span>
<span class="line"><span style="color:#babed8;">    &quot;Serilog&quot;: {</span></span>
<span class="line"><span style="color:#babed8;">        &quot;WriteTo&quot;: [</span></span>
<span class="line"><span style="color:#babed8;">            {},</span></span>
<span class="line"><span style="color:#babed8;">            {</span></span>
<span class="line"><span style="color:#babed8;">                &quot;Name&quot;: &quot;File&quot;,</span></span>
<span class="line"><span style="color:#babed8;">                &quot;Args&quot;: {</span></span>
<span class="line"><span style="color:#babed8;">                    &quot;path&quot;: &quot;/var/log/sunlight/v3/dvs-datamonitor.txt&quot;</span></span>
<span class="line"><span style="color:#babed8;">                }</span></span>
<span class="line"><span style="color:#babed8;">            },</span></span>
<span class="line"><span style="color:#babed8;">            {}</span></span>
<span class="line"><span style="color:#babed8;">        ]</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="数据导出" tabindex="-1">数据导出 <a class="header-anchor" href="#数据导出" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 导出模版</span></span>
<span class="line"><span style="color:#babed8;">// SELECT * FROM Template;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 异步任务执行装填</span></span>
<span class="line"><span style="color:#babed8;">select * from AsyncTask s order by s.CreatedAt desc ;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">public enum AsyncTaskState</span></span>
<span class="line"><span style="color:#babed8;">{</span></span>
<span class="line"><span style="color:#babed8;">    待处理 = 0,</span></span>
<span class="line"><span style="color:#babed8;">    处理中 = 1,</span></span>
<span class="line"><span style="color:#babed8;">    处理完成 = 2,</span></span>
<span class="line"><span style="color:#babed8;">    失败 = 9</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> select * from \`Options\`  </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> key: storageoptions:path  是文件上传的路径地址                          </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="服务器上log-txt日志文件存放路径" tabindex="-1">服务器上log.txt日志文件存放路径 <a class="header-anchor" href="#服务器上log-txt日志文件存放路径" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">/var/log/sunlight/v3</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="linux下nginx安装" tabindex="-1">linux下nginx安装 <a class="header-anchor" href="#linux下nginx安装" aria-hidden="true">#</a></h2><ul><li>2022-05-11-linux</li></ul><h2 id="区域同步" tabindex="-1">区域同步 <a class="header-anchor" href="#区域同步" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">之前使用的是  BasicArea</span></span>
<span class="line"><span style="color:#babed8;">SELECT  SUM(c.total) total,SUM(c.tobeSubmitted) tobeSubmitted, SUM(c.submitted)  submitted </span></span>
<span class="line"><span style="color:#babed8;">FROM  CollectDataHouseholdSummary c </span></span>
<span class="line"><span style="color:#babed8;"> where c.type=2 and c.areaid in (select id from BasicArea t where t.IdSequences like @areaId )  </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">现在 BasicAreaEx</span></span>
<span class="line"><span style="color:#babed8;">SELECT  SUM(c.total) total,SUM(c.tobeSubmitted) tobeSubmitted, SUM(c.submitted)  submitted </span></span>
<span class="line"><span style="color:#babed8;">FROM  CollectDataHouseholdSummary c </span></span>
<span class="line"><span style="color:#babed8;"> where c.type=3 and c.areaid in (select t.RegionId from BasicAreaEx t where t.RegionIdSequences like @areaid )  </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="修改表编码" tabindex="-1">修改表编码 <a class="header-anchor" href="#修改表编码" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"> ALTER TABLE BasicAreaEx CONVERT TO CHARACTER SET utf8 COLLATE utf8_general_ci;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="mysql数据库操作" tabindex="-1">mysql数据库操作 <a class="header-anchor" href="#mysql数据库操作" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 展示数据库列表</span></span>
<span class="line"><span style="color:#babed8;">SHOW DATABASES;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="mysql执行数据同步时有可能有数据表访问权限的问题" tabindex="-1">mysql执行数据同步时有可能有数据表访问权限的问题 <a class="header-anchor" href="#mysql执行数据同步时有可能有数据表访问权限的问题" aria-hidden="true">#</a></h2><h2 id="判断枚举是否存在" tabindex="-1">判断枚举是否存在 <a class="header-anchor" href="#判断枚举是否存在" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">            //if (!Enum.IsDefined(typeof(TaskType), model.TaskType))</span></span>
<span class="line"><span style="color:#babed8;">            //{</span></span>
<span class="line"><span style="color:#babed8;">            //    throw new ErrorCodeException(-1, &quot;传入的任务类型不存在&quot;);</span></span>
<span class="line"><span style="color:#babed8;">            //}</span></span>
<span class="line"><span style="color:#babed8;">            //else</span></span>
<span class="line"><span style="color:#babed8;">            //{</span></span>
<span class="line"><span style="color:#babed8;">            //    spec.Query.Where(item =&gt; item.TaskType == model.TaskType);</span></span>
<span class="line"><span style="color:#babed8;">            //}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="将efcore-idbcontexttransaction转换为-mysql驱动下-dbtransaction" tabindex="-1">将EFCore IDbContextTransaction转换为 Mysql驱动下 DbTransaction <a class="header-anchor" href="#将efcore-idbcontexttransaction转换为-mysql驱动下-dbtransaction" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">    public static DbTransaction GetDbTransaction(this IDbContextTransaction source)</span></span>
<span class="line"><span style="color:#babed8;">    {</span></span>
<span class="line"><span style="color:#babed8;">        return (source as IInfrastructure&lt;DbTransaction&gt;).Instance;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="事务里面如果有创建表结构的则不会跟随事务" tabindex="-1">事务里面如果有创建表结构的则不会跟随事务 <a class="header-anchor" href="#事务里面如果有创建表结构的则不会跟随事务" aria-hidden="true">#</a></h2><h2 id="数据库菜单更新" tabindex="-1">数据库菜单更新 <a class="header-anchor" href="#数据库菜单更新" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">etc/dvs-systemservice-appsettings.json 中的MenuSeedData 设置为true</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// systemctl restart dvsv3-systemservice</span></span>
<span class="line"><span style="color:#babed8;">// 则启动服务的时候就会初始化更新菜单</span></span>
<span class="line"><span style="color:#babed8;">// 更新菜单的规则：code相等则update，code不相等则insert,code不存在则不操作</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 通过接口将数据初始化到json文件中</span></span>
<span class="line"><span style="color:#babed8;">// 接口要在root用户下才能执行</span></span>
<span class="line"><span style="color:#babed8;">api/basic/Menu/seed</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 执行完接口后，将接口返回数据的data，也就是菜单数组拷贝到项目中</span></span>
<span class="line"><span style="color:#babed8;">DVS.Basic/Templates/Menu.json</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 提交代码后，通过流水线进行自动部署</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//指定某个服务进行设置最上面的参数即可</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="定时任务" tabindex="-1">定时任务 <a class="header-anchor" href="#定时任务" aria-hidden="true">#</a></h2><pre><code>\`\`\`
// 定时任务存在于dvsv3-systemservice服务中

// dvs-systemservice-appsettings.json可以配置定时任务的开启时间周期

// ScheduleTaskOptions.cs 以及可以直接在代码中设置默认的时间和周期 

// 通过代码 AddCronServices开启

// 查看所有程序集中的class 继承了 CronScheduleService的定时任务

// 通过单例模式注册
services.Add(new ServiceDescriptor(typeof(IHostedService), a, ServiceLifetime.Singleton));


// 继承了IHostedService ，则相当于后台任务。通过依赖注入注册之后便会在后台运行了

// 然后 重写ExecuteAsync， 这个服务中的ExecuteAsync 方法会一直执行
\`\`\`
</code></pre><h2 id="rabbitmq-异步任务处理" tabindex="-1">rabbitmq 异步任务处理 <a class="header-anchor" href="#rabbitmq-异步任务处理" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">  // 首先在Program.cs中注册调用 builder.Services.InitServices</span></span>
<span class="line"><span style="color:#babed8;">  </span></span>
<span class="line"><span style="color:#babed8;">  // 其中 通过services.AddDistributedEventBus(configuration);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 实现读取配置文件中的rabbitmq配置信息</span></span>
<span class="line"><span style="color:#babed8;">  // 以及通过依赖注册将RabbitMQEventPublisher 发布者和 RabbitMQEventSubscriber 消费者注册到容器中</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  //将所有的处理事件通过 services.AddEventHandlers(); 注入容器中</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // rabbitmq 异步任务主要都在dvsv3-systemservice服务中进行处理 </span></span>
<span class="line"><span style="color:#babed8;">  // 通过app.InitApp(..,,,,onlyGlobalEvent: false) </span></span>
<span class="line"><span style="color:#babed8;">  // onlyGlobalEvent: false 处理事件</span></span>
<span class="line"><span style="color:#babed8;">  // 通过 app.UseDistributedEventBus(onlyGlobalEvent); 中的 subscriber.Subscribe(); 消费者订阅事件</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="应急发布逻辑处理" tabindex="-1">应急发布逻辑处理 <a class="header-anchor" href="#应急发布逻辑处理" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 保存时写入到VillageMessage表中</span></span>
<span class="line"><span style="color:#babed8;">// 保存的最后发布RabbitMQ 事件</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 发布事件</span></span>
<span class="line"><span style="color:#babed8;">eventPublisher.Publish(new VillageMessageChangedEvent()</span></span>
<span class="line"><span style="color:#babed8;">{</span></span>
<span class="line"><span style="color:#babed8;">    MessageId = message.Id,</span></span>
<span class="line"><span style="color:#babed8;">    MessageType = message.MessageType,</span></span>
<span class="line"><span style="color:#babed8;">    RegionIds = message.PublishRegionIds,</span></span>
<span class="line"><span style="color:#babed8;">    Tags = message.PopulationTag</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 通过VillageMessageChangedEvent 找到消费者的处理事件 VillageMessageEventHandler</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// VillageMessageEventHandler中的HandleAsync方法中处理逻辑</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 逻辑包括：</span></span>
<span class="line"><span style="color:#babed8;">// 插入MessageRegions数据，根据VillageMessage中发布范围RegionIds</span></span>
<span class="line"><span style="color:#babed8;">// 然后根据RegionsIds 数组中的每一个RegionId </span></span>
<span class="line"><span style="color:#babed8;">// 通过RegionId 来查找符合条件的人员的UserId</span></span>
<span class="line"><span style="color:#babed8;">// 然后批量写入到VillageMessagePushRecord（写入状态为未推送）</span></span>
<span class="line"><span style="color:#babed8;">// 最终统计消息发送的总人数，更新到VillageMessage表中</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//OK OK OK</span></span>
<span class="line"><span style="color:#babed8;">//现在相当于知道要推送的数据了，开始通过定时任务进行推送</span></span>
<span class="line"><span style="color:#babed8;">//找到定时推送任务：VillagePushMessageSchedule</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 每次循环最多发送100条</span></span>
<span class="line"><span style="color:#babed8;">// 循环中的逻辑如下：</span></span>
<span class="line"><span style="color:#babed8;">// 查询出未推送的记录（还加上了推送时间）</span></span>
<span class="line"><span style="color:#babed8;">// 将条记录设置为（推送中）</span></span>
<span class="line"><span style="color:#babed8;">// 调用IMessageService.SendAsync真正的推送消息</span></span>
<span class="line"><span style="color:#babed8;">// 推送成功后，将推送状态设置为（已推送）</span></span>
<span class="line"><span style="color:#babed8;">// 如果中间出现异常，则将推送状态设置为（推送失败）</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="定义微信消息" tabindex="-1">定义微信消息 <a class="header-anchor" href="#定义微信消息" aria-hidden="true">#</a></h2><ul><li>MessageDefine 消息定义表数据</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">  {</span></span>
<span class="line"><span style="color:#babed8;">    &quot;Code&quot;: &quot;emergency_response_message&quot;,</span></span>
<span class="line"><span style="color:#babed8;">    &quot;Name&quot;: &quot;应急发布消息&quot;,</span></span>
<span class="line"><span style="color:#babed8;">    &quot;RedirectUri&quot;: &quot;package/szxc/pages/emergency-release/detail/msg?id={MessageId}&quot;,</span></span>
<span class="line"><span style="color:#babed8;">    &quot;Fields&quot;: {</span></span>
<span class="line"><span style="color:#babed8;">      &quot;MessageId&quot;: &quot;消息Id&quot;,</span></span>
<span class="line"><span style="color:#babed8;">      &quot;Title&quot;: &quot;标题&quot;,</span></span>
<span class="line"><span style="color:#babed8;">      &quot;PublishDate&quot;: &quot;发布时间&quot;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  },</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>模板表中类型Template ContentType</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">    /// &lt;summary&gt;</span></span>
<span class="line"><span style="color:#babed8;">    /// 模板内容类型</span></span>
<span class="line"><span style="color:#babed8;">    /// &lt;/summary&gt;</span></span>
<span class="line"><span style="color:#babed8;">    public enum TemplateContentType</span></span>
<span class="line"><span style="color:#babed8;">    {</span></span>
<span class="line"><span style="color:#babed8;">        文本 = 0,   // 短信模板</span></span>
<span class="line"><span style="color:#babed8;">        文件 = 1,   // 导出和导入模板</span></span>
<span class="line"><span style="color:#babed8;">        小程序消息模板 = 2,</span></span>
<span class="line"><span style="color:#babed8;">        公众号消息模板 = 3,</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="rabbitmq在项目中的使用" tabindex="-1">rabbitmq在项目中的使用 <a class="header-anchor" href="#rabbitmq在项目中的使用" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 整体官方文档使用介绍</span></span>
<span class="line"><span style="color:#babed8;">https://www.rabbitmq.com/dotnet-api-guide.html</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 初始化rabbitmq配置</span></span>
<span class="line"><span style="color:#babed8;">builder.Services.InitServices 中的</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 添加rabbitmq的配置,并注册发布者和消费者</span></span>
<span class="line"><span style="color:#babed8;">services.AddDistributedEventBus(configuration);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 注册EventHandlers到DI容器中</span></span>
<span class="line"><span style="color:#babed8;">services.AddEventHandlers();</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 例子：应急发布</span></span>
<span class="line"><span style="color:#babed8;">// Dvs.Basic.Api中 VillageNotifyController SaveAsync方法</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 发布事件</span></span>
<span class="line"><span style="color:#babed8;">eventPublisher.Publish(new VillageMessageChangedEvent()</span></span>
<span class="line"><span style="color:#babed8;">{</span></span>
<span class="line"><span style="color:#babed8;">    MessageId = message.Id,</span></span>
<span class="line"><span style="color:#babed8;">    MessageType = message.MessageType,</span></span>
<span class="line"><span style="color:#babed8;">    RegionIds = message.PublishRegionIds,</span></span>
<span class="line"><span style="color:#babed8;">    Tags = message.PopulationTag</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 发布事件的参数，例如数据实体VillageMessageChangedEvent 要继承 EventBase</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 消费者的Consumer继承IBasicConsumer接口，消息会在到达时自动传递，而不必主动请求。</span></span>
<span class="line"><span style="color:#babed8;">// https://www.rabbitmq.com/dotnet-api-guide.html#consuming</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 异步调度实现的Comsumer要继承IAsyncBasicConsumer接口</span></span>
<span class="line"><span style="color:#babed8;">// https://www.rabbitmq.com/dotnet-api-guide.html#consuming-async</span></span>
<span class="line"><span style="color:#babed8;">// 同时要将 ConnectionFactory.DispatchConsumersAsync 属性设置为 true</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,43),o=[p];function t(c,i,b,d,r,y){return a(),n("div",null,o)}const g=s(l,[["render",t]]);export{h as __pageData,g as default};
