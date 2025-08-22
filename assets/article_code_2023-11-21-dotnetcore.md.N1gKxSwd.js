import{_ as n,c as a,o as p,ag as e}from"./chunks/framework.Cpzi45lG.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2023-11-21-dotnetcore.md","filePath":"article/code/2023-11-21-dotnetcore.md","lastUpdated":1755852304000}'),l={name:"article/code/2023-11-21-dotnetcore.md"};function i(t,s,c,o,d,r){return p(),a("div",null,s[0]||(s[0]=[e(`<h2 id="修改数据库的操作" tabindex="-1">修改数据库的操作 <a class="header-anchor" href="#修改数据库的操作" aria-label="Permalink to &quot;修改数据库的操作&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>// 生成实体变更</span></span>
<span class="line"><span>dotnet-ef migrations add XXXX</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 其中如果包含外键相关的，就在 XXXX文件中 将Up和Down方法中的外键相关进行删除</span></span>
<span class="line"><span>// 新创建表的时候一起添加外键应该是没问题的，如果是修改表的时候可能就存在问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//使用命令行工具</span></span>
<span class="line"><span>https://learn.microsoft.com/zh-cn/ef/core/cli/dotnet?WT.mc_id=DOP-MVP-5003855#installing-the-tools</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看版本</span></span>
<span class="line"><span>https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 同步到数据库</span></span>
<span class="line"><span>dotnet-ef database update</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 超过一个dbcontext就需要指定</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet-ef migrations add XXXX -c SecondContext</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet-ef migrations add XXXX -c DvsContext --framework net6.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 通过-v可以查看执行过程以及发生错误的具体error信息</span></span>
<span class="line"><span>dotnet-ef migrations add XXXX -c DvsContext --framework net6.0 -v</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>dotnet-ef migrations add InitTask -c DvsContext --framework net8.0 -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet-ef database update  -c SecondContext</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet-ef database update  -c DvsContext --framework net6.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet-ef database update  -c DvsContext --framework net6.0 -v </span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet-ef database update  -c DvsContext --framework net6.0 -v </span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet-ef database update -c DvsContext --framework net8.0 -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---------------2024-08-01------------------------------------</span></span>
<span class="line"><span>参考链接 https://learn.microsoft.com/zh-tw/ef/core/cli/dotnet</span></span>
<span class="line"><span>安装命令 dotnet tool install --global dotnet-ef</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet ef</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet ef migrations add MonitorTaskAnonymous -c DvsContext --framework net6.0 -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dotnet ef database update -c DvsContext --framework net6.0 -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 回滚到上一次的变更</span></span>
<span class="line"><span>// 列出所有的数据库变更list</span></span>
<span class="line"><span>dotnet ef migrations list -c DvsContext --framework net6.0 -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// (如果已经变更到数据了)将数据库变更退回到某个变更</span></span>
<span class="line"><span>dotnet ef database update 20241114015954_VillageParty111401 -c DvsContext --framework net6.0 -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 如果只是生成了迁移文件，还没有</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 20231204084647_ModifyHouseholdFiled  从当前的下一个变更生成开始</span></span>
<span class="line"><span>dotnet-ef migrations script 20241114015954_VillageParty111401  -c DvsContext --framework net6.0 -o migrations_2024_1116.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 上面的生成可能包含日志，可以再加入一个参数--idempotent</span></span>
<span class="line"><span>// 包含了事物处理保护、版本检查、可重复执行</span></span>
<span class="line"><span>dotnet-ef migrations script 20241114015954_VillageParty111401  -c DvsContext --framework net6.0  -o migrations_2024_1116-2.sql  --idempotent</span></span></code></pre></div><h2 id="api-nuget-ogr-v3-index-json无法访问是因为翻墙的问题" tabindex="-1">api.nuget.ogr/v3/index.json无法访问是因为翻墙的问题 <a class="header-anchor" href="#api-nuget-ogr-v3-index-json无法访问是因为翻墙的问题" aria-label="Permalink to &quot;api.nuget.ogr/v3/index.json无法访问是因为翻墙的问题&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>将代理更改为直连即可</span></span></code></pre></div><h2 id="linux-服务位置" tabindex="-1">linux 服务位置 <a class="header-anchor" href="#linux-服务位置" aria-label="Permalink to &quot;linux 服务位置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> // 自定义服务地址</span></span>
<span class="line"><span> /usr/lib/systemd/system/dvsv3-datamonitor.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span> [Unit]</span></span>
<span class="line"><span>  Description=dvsv3-datamonitor</span></span>
<span class="line"><span>  After=network-online.target</span></span>
<span class="line"><span>  Wants=network-online.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  [Service]</span></span>
<span class="line"><span>  # modify when deploy in prod env</span></span>
<span class="line"><span>  User=dvs</span></span>
<span class="line"><span>  Group=dvs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Type=simple</span></span>
<span class="line"><span>  ExecStart=/usr/local/dotnet-sdk/dotnet /usr/local/sunlight/dvsv3/dvs-datamonitor/DVS.DataMonitor.Api.dll</span></span>
<span class="line"><span>  WorkingDirectory=/usr/local/sunlight/dvsv3/dvs-datamonitor</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Restart=always</span></span>
<span class="line"><span>  RestartSec=1</span></span>
<span class="line"><span>  StartLimitInterval=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  [Install]</span></span>
<span class="line"><span>  WantedBy=multi-user.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span> // 系统服务地址</span></span>
<span class="line"><span> /etc/systemd/system</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置服务开机自动启动</span></span>
<span class="line"><span>systemctl enable dvsv3-datamonitor</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 重启服务</span></span>
<span class="line"><span>systemctl restart dvsv3-datamonitor</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 修改配置文件</span></span>
<span class="line"><span>systemctl daemon-reload</span></span></code></pre></div><h2 id="nginx-配置" tabindex="-1">nginx 配置 <a class="header-anchor" href="#nginx-配置" aria-label="Permalink to &quot;nginx 配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 所在路径</span></span>
<span class="line"><span>/etc/nginx/conf.d/dvsv3.conf</span></span>
<span class="line"><span>// 从这个配置文件中也可以找到swagger 配置路径docs的服务</span></span>
<span class="line"><span></span></span>
<span class="line"><span>location ~ ^/api/datamonitor/ {</span></span>
<span class="line"><span>    proxy_pass http://127.0.0.1:12017;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修改完毕后nginx -s reload</span></span></code></pre></div><h2 id="子系统服务配置文件" tabindex="-1">子系统服务配置文件 <a class="header-anchor" href="#子系统服务配置文件" aria-label="Permalink to &quot;子系统服务配置文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/usr/local/sunlight/dvsv3/etc/dvs-datamonitor-appsettings.json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;Urls&quot;: &quot;http://*:12017&quot;,</span></span>
<span class="line"><span>    &quot;WorkerId&quot;: 8,</span></span>
<span class="line"><span>    &quot;Serilog&quot;: {</span></span>
<span class="line"><span>        &quot;WriteTo&quot;: [</span></span>
<span class="line"><span>            {},</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;Name&quot;: &quot;File&quot;,</span></span>
<span class="line"><span>                &quot;Args&quot;: {</span></span>
<span class="line"><span>                    &quot;path&quot;: &quot;/var/log/sunlight/v3/dvs-datamonitor.txt&quot;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {}</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="数据导出" tabindex="-1">数据导出 <a class="header-anchor" href="#数据导出" aria-label="Permalink to &quot;数据导出&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 导出模版</span></span>
<span class="line"><span>// SELECT * FROM Template;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 异步任务执行装填</span></span>
<span class="line"><span>select * from AsyncTask s order by s.CreatedAt desc ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public enum AsyncTaskState</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    待处理 = 0,</span></span>
<span class="line"><span>    处理中 = 1,</span></span>
<span class="line"><span>    处理完成 = 2,</span></span>
<span class="line"><span>    失败 = 9</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span> select * from \`Options\`  </span></span>
<span class="line"><span></span></span>
<span class="line"><span> key: storageoptions:path  是文件上传的路径地址</span></span></code></pre></div><h2 id="服务器上log-txt日志文件存放路径" tabindex="-1">服务器上log.txt日志文件存放路径 <a class="header-anchor" href="#服务器上log-txt日志文件存放路径" aria-label="Permalink to &quot;服务器上log.txt日志文件存放路径&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/var/log/sunlight/v3</span></span></code></pre></div><h2 id="linux下nginx安装" tabindex="-1">linux下nginx安装 <a class="header-anchor" href="#linux下nginx安装" aria-label="Permalink to &quot;linux下nginx安装&quot;">​</a></h2><ul><li>2022-05-11-linux</li></ul><h2 id="区域同步" tabindex="-1">区域同步 <a class="header-anchor" href="#区域同步" aria-label="Permalink to &quot;区域同步&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>之前使用的是  BasicArea</span></span>
<span class="line"><span>SELECT  SUM(c.total) total,SUM(c.tobeSubmitted) tobeSubmitted, SUM(c.submitted)  submitted </span></span>
<span class="line"><span>FROM  CollectDataHouseholdSummary c </span></span>
<span class="line"><span> where c.type=2 and c.areaid in (select id from BasicArea t where t.IdSequences like @areaId )  </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在 BasicAreaEx</span></span>
<span class="line"><span>SELECT  SUM(c.total) total,SUM(c.tobeSubmitted) tobeSubmitted, SUM(c.submitted)  submitted </span></span>
<span class="line"><span>FROM  CollectDataHouseholdSummary c </span></span>
<span class="line"><span> where c.type=3 and c.areaid in (select t.RegionId from BasicAreaEx t where t.RegionIdSequences like @areaid )</span></span></code></pre></div><h2 id="修改表编码" tabindex="-1">修改表编码 <a class="header-anchor" href="#修改表编码" aria-label="Permalink to &quot;修改表编码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> ALTER TABLE BasicAreaEx CONVERT TO CHARACTER SET utf8 COLLATE utf8_general_ci;</span></span></code></pre></div><h2 id="mysql数据库操作" tabindex="-1">mysql数据库操作 <a class="header-anchor" href="#mysql数据库操作" aria-label="Permalink to &quot;mysql数据库操作&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 展示数据库列表</span></span>
<span class="line"><span>SHOW DATABASES;</span></span></code></pre></div><h2 id="mysql执行数据同步时有可能有数据表访问权限的问题" tabindex="-1">mysql执行数据同步时有可能有数据表访问权限的问题 <a class="header-anchor" href="#mysql执行数据同步时有可能有数据表访问权限的问题" aria-label="Permalink to &quot;mysql执行数据同步时有可能有数据表访问权限的问题&quot;">​</a></h2><h2 id="判断枚举是否存在" tabindex="-1">判断枚举是否存在 <a class="header-anchor" href="#判断枚举是否存在" aria-label="Permalink to &quot;判断枚举是否存在&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>            //if (!Enum.IsDefined(typeof(TaskType), model.TaskType))</span></span>
<span class="line"><span>            //{</span></span>
<span class="line"><span>            //    throw new ErrorCodeException(-1, &quot;传入的任务类型不存在&quot;);</span></span>
<span class="line"><span>            //}</span></span>
<span class="line"><span>            //else</span></span>
<span class="line"><span>            //{</span></span>
<span class="line"><span>            //    spec.Query.Where(item =&gt; item.TaskType == model.TaskType);</span></span>
<span class="line"><span>            //}</span></span></code></pre></div><h2 id="将efcore-idbcontexttransaction转换为-mysql驱动下-dbtransaction" tabindex="-1">将EFCore IDbContextTransaction转换为 Mysql驱动下 DbTransaction <a class="header-anchor" href="#将efcore-idbcontexttransaction转换为-mysql驱动下-dbtransaction" aria-label="Permalink to &quot;将EFCore IDbContextTransaction转换为 Mysql驱动下 DbTransaction&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    public static DbTransaction GetDbTransaction(this IDbContextTransaction source)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return (source as IInfrastructure&lt;DbTransaction&gt;).Instance;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="事务里面如果有创建表结构的则不会跟随事务" tabindex="-1">事务里面如果有创建表结构的则不会跟随事务 <a class="header-anchor" href="#事务里面如果有创建表结构的则不会跟随事务" aria-label="Permalink to &quot;事务里面如果有创建表结构的则不会跟随事务&quot;">​</a></h2><h2 id="数据库菜单更新" tabindex="-1">数据库菜单更新 <a class="header-anchor" href="#数据库菜单更新" aria-label="Permalink to &quot;数据库菜单更新&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>etc/dvs-systemservice-appsettings.json 中的MenuSeedData 设置为true</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// systemctl restart dvsv3-systemservice</span></span>
<span class="line"><span>// 则启动服务的时候就会初始化更新菜单</span></span>
<span class="line"><span>// 更新菜单的规则：code相等则update，code不相等则insert,code不存在则不操作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 通过接口将数据初始化到json文件中</span></span>
<span class="line"><span>// 接口要在root用户下才能执行</span></span>
<span class="line"><span>api/basic/Menu/seed</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 执行完接口后，将接口返回数据的data，也就是菜单数组拷贝到项目中</span></span>
<span class="line"><span>DVS.Basic/Templates/Menu.json</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 提交代码后，通过流水线进行自动部署</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//指定某个服务进行设置最上面的参数即可</span></span></code></pre></div><h2 id="定时任务" tabindex="-1">定时任务 <a class="header-anchor" href="#定时任务" aria-label="Permalink to &quot;定时任务&quot;">​</a></h2><pre><code>\`\`\`
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
</code></pre><h2 id="rabbitmq-异步任务处理" tabindex="-1">rabbitmq 异步任务处理 <a class="header-anchor" href="#rabbitmq-异步任务处理" aria-label="Permalink to &quot;rabbitmq 异步任务处理&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  // 首先在Program.cs中注册调用 builder.Services.InitServices</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 其中 通过services.AddDistributedEventBus(configuration);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 实现读取配置文件中的rabbitmq配置信息</span></span>
<span class="line"><span>  // 以及通过依赖注册将RabbitMQEventPublisher 发布者和 RabbitMQEventSubscriber 消费者注册到容器中</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //将所有的处理事件通过 services.AddEventHandlers(); 注入容器中</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // rabbitmq 异步任务主要都在dvsv3-systemservice服务中进行处理 </span></span>
<span class="line"><span>  // 通过app.InitApp(..,,,,onlyGlobalEvent: false) </span></span>
<span class="line"><span>  // onlyGlobalEvent: false 处理事件</span></span>
<span class="line"><span>  // 通过 app.UseDistributedEventBus(onlyGlobalEvent); 中的 subscriber.Subscribe(); 消费者订阅事件</span></span></code></pre></div><h2 id="应急发布逻辑处理" tabindex="-1">应急发布逻辑处理 <a class="header-anchor" href="#应急发布逻辑处理" aria-label="Permalink to &quot;应急发布逻辑处理&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 保存时写入到VillageMessage表中</span></span>
<span class="line"><span>// 保存的最后发布RabbitMQ 事件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 发布事件</span></span>
<span class="line"><span>eventPublisher.Publish(new VillageMessageChangedEvent()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    MessageId = message.Id,</span></span>
<span class="line"><span>    MessageType = message.MessageType,</span></span>
<span class="line"><span>    RegionIds = message.PublishRegionIds,</span></span>
<span class="line"><span>    Tags = message.PopulationTag</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 通过VillageMessageChangedEvent 找到消费者的处理事件 VillageMessageEventHandler</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// VillageMessageEventHandler中的HandleAsync方法中处理逻辑</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 逻辑包括：</span></span>
<span class="line"><span>// 插入MessageRegions数据，根据VillageMessage中发布范围RegionIds</span></span>
<span class="line"><span>// 然后根据RegionsIds 数组中的每一个RegionId </span></span>
<span class="line"><span>// 通过RegionId 来查找符合条件的人员的UserId</span></span>
<span class="line"><span>// 然后批量写入到VillageMessagePushRecord（写入状态为未推送）</span></span>
<span class="line"><span>// 最终统计消息发送的总人数，更新到VillageMessage表中</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//OK OK OK</span></span>
<span class="line"><span>//现在相当于知道要推送的数据了，开始通过定时任务进行推送</span></span>
<span class="line"><span>//找到定时推送任务：VillagePushMessageSchedule</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 每次循环最多发送100条</span></span>
<span class="line"><span>// 循环中的逻辑如下：</span></span>
<span class="line"><span>// 查询出未推送的记录（还加上了推送时间）</span></span>
<span class="line"><span>// 将条记录设置为（推送中）</span></span>
<span class="line"><span>// 调用IMessageService.SendAsync真正的推送消息</span></span>
<span class="line"><span>// 推送成功后，将推送状态设置为（已推送）</span></span>
<span class="line"><span>// 如果中间出现异常，则将推送状态设置为（推送失败）</span></span></code></pre></div><h2 id="定义微信消息" tabindex="-1">定义微信消息 <a class="header-anchor" href="#定义微信消息" aria-label="Permalink to &quot;定义微信消息&quot;">​</a></h2><ul><li>MessageDefine 消息定义表数据</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;Code&quot;: &quot;emergency_response_message&quot;,</span></span>
<span class="line"><span>    &quot;Name&quot;: &quot;应急发布消息&quot;,</span></span>
<span class="line"><span>    &quot;RedirectUri&quot;: &quot;package/szxc/pages/emergency-release/detail/msg?id={MessageId}&quot;,</span></span>
<span class="line"><span>    &quot;Fields&quot;: {</span></span>
<span class="line"><span>      &quot;MessageId&quot;: &quot;消息Id&quot;,</span></span>
<span class="line"><span>      &quot;Title&quot;: &quot;标题&quot;,</span></span>
<span class="line"><span>      &quot;PublishDate&quot;: &quot;发布时间&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span></code></pre></div><ul><li>模板表中类型Template ContentType</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    /// &lt;summary&gt;</span></span>
<span class="line"><span>    /// 模板内容类型</span></span>
<span class="line"><span>    /// &lt;/summary&gt;</span></span>
<span class="line"><span>    public enum TemplateContentType</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        文本 = 0,   // 短信模板</span></span>
<span class="line"><span>        文件 = 1,   // 导出和导入模板</span></span>
<span class="line"><span>        小程序消息模板 = 2,</span></span>
<span class="line"><span>        公众号消息模板 = 3,</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="rabbitmq在项目中的使用" tabindex="-1">rabbitmq在项目中的使用 <a class="header-anchor" href="#rabbitmq在项目中的使用" aria-label="Permalink to &quot;rabbitmq在项目中的使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 整体官方文档使用介绍</span></span>
<span class="line"><span>https://www.rabbitmq.com/dotnet-api-guide.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 初始化rabbitmq配置</span></span>
<span class="line"><span>builder.Services.InitServices 中的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加rabbitmq的配置,并注册发布者和消费者</span></span>
<span class="line"><span>services.AddDistributedEventBus(configuration);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 注册EventHandlers到DI容器中</span></span>
<span class="line"><span>services.AddEventHandlers();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 例子：应急发布</span></span>
<span class="line"><span>// Dvs.Basic.Api中 VillageNotifyController SaveAsync方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 发布事件</span></span>
<span class="line"><span>eventPublisher.Publish(new VillageMessageChangedEvent()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    MessageId = message.Id,</span></span>
<span class="line"><span>    MessageType = message.MessageType,</span></span>
<span class="line"><span>    RegionIds = message.PublishRegionIds,</span></span>
<span class="line"><span>    Tags = message.PopulationTag</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 发布事件的参数，例如数据实体VillageMessageChangedEvent 要继承 EventBase</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 消费者的Consumer继承IBasicConsumer接口，消息会在到达时自动传递，而不必主动请求。</span></span>
<span class="line"><span>// https://www.rabbitmq.com/dotnet-api-guide.html#consuming</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 异步调度实现的Comsumer要继承IAsyncBasicConsumer接口</span></span>
<span class="line"><span>// https://www.rabbitmq.com/dotnet-api-guide.html#consuming-async</span></span>
<span class="line"><span>// 同时要将 ConnectionFactory.DispatchConsumersAsync 属性设置为 true</span></span></code></pre></div>`,43)]))}const g=n(l,[["render",i]]);export{h as __pageData,g as default};
