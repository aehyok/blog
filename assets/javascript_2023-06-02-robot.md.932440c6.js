import{_ as s,o as a,c as n,a as l}from"./app.76dfe7aa.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"upstream 负载均衡","slug":"upstream-负载均衡","link":"#upstream-负载均衡","children":[]}],"relativePath":"javascript/2023-06-02-robot.md","lastUpdated":1713631972000}'),e={name:"javascript/2023-06-02-robot.md"},p=l(`<h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h2><ul><li>数据库配置文件 /usr/local/sunlight/dvs/etc 数据库配置文件 dvs-robot.appsettings.json</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">{</span></span>
<span class="line"><span style="color:#babed8;">    &quot;Logging&quot;: {</span></span>
<span class="line"><span style="color:#babed8;">        &quot;LogLevel&quot;: {</span></span>
<span class="line"><span style="color:#babed8;">            &quot;Default&quot;: &quot;Information&quot;,</span></span>
<span class="line"><span style="color:#babed8;">            &quot;Microsoft&quot;: &quot;Warning&quot;,</span></span>
<span class="line"><span style="color:#babed8;">            &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">    &quot;Urls&quot;: &quot;http://*:3021&quot;,</span></span>
<span class="line"><span style="color:#babed8;">    &quot;ConnectionStrings&quot;: {</span></span>
<span class="line"><span style="color:#babed8;">        &quot;MySQL&quot;: &quot;server=XXXX;Port=XXXX;uid=XXXX;pwd=XXXX;database=robot;convert zero datetime=true;Charset=utf8mb4&quot;,</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">    &quot;Redis&quot;: {</span></span>
<span class="line"><span style="color:#babed8;">        &quot;ConnectionString&quot;: &quot;localhost:6379,password=XXXX,defaultDatabase=0&quot;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>主要是设置后端接口服务接口、mysql数据库链接、redis服务链接</p><ul><li>systemd系统服务配置文件 /usr/lib/systemd/system 文件名 dvs-robot.service</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">[Unit]</span></span>
<span class="line"><span style="color:#babed8;">Description=dvs-robot</span></span>
<span class="line"><span style="color:#babed8;">After=network-online.target</span></span>
<span class="line"><span style="color:#babed8;">Wants=network-online.target</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">[Service]</span></span>
<span class="line"><span style="color:#babed8;"># modify when deploy in prod env</span></span>
<span class="line"><span style="color:#babed8;">User=dvs</span></span>
<span class="line"><span style="color:#babed8;">Group=dvs</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">Type=simple</span></span>
<span class="line"><span style="color:#babed8;">ExecStart=/usr/local/dotnet-sdk/dotnet /usr/local/sunlight/dvs/dvs-robot/SLRobot.Admin.dll</span></span>
<span class="line"><span style="color:#babed8;">WorkingDirectory=/usr/local/sunlight/dvs/dvs-robot</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">Restart=always</span></span>
<span class="line"><span style="color:#babed8;">RestartSec=1</span></span>
<span class="line"><span style="color:#babed8;">StartLimitInterval=0</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">[Install]</span></span>
<span class="line"><span style="color:#babed8;">WantedBy=multi-user.target</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>主要是设置 sdk和可执行文件路径</p><ul><li>设置服务和设置开启启动</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 设置开机启动</span></span>
<span class="line"><span style="color:#babed8;">systemctl enable dvs-robot.service</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 启动服务</span></span>
<span class="line"><span style="color:#babed8;">systemctl start dvs-robot.service</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>查看systemctl 启动的日志</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">//查看某个服务的日志情况</span></span>
<span class="line"><span style="color:#babed8;">journalctl -u dvs-robot.service</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看实时的服务日志</span></span>
<span class="line"><span style="color:#babed8;">journalctl -u dvs-robot.service -f</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//查看时间区间</span></span>
<span class="line"><span style="color:#babed8;">journalctl -u dvs-robot.service --since &quot;2023-06-01&quot; --until &quot;2023-06-02 03:00&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>tail查看linux日志</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 实时查看app.log日志</span></span>
<span class="line"><span style="color:#babed8;">tail -f app.log</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 使用-n可以设置显示的行数</span></span>
<span class="line"><span style="color:#babed8;">tail -n 20 -f app.log</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>nginx中添加前端项目</li></ul><p>前端项目nginx配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">    location /robot{</span></span>
<span class="line"><span style="color:#babed8;">        alias /usr/local/sunlight/dvs/dvs-ui/robot/;</span></span>
<span class="line"><span style="color:#babed8;">        index index.html;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>后端接口服务配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">upstream robotservers{</span></span>
<span class="line"><span style="color:#babed8;">    server 192.168.0.28:3021  max_fails=30  fail_timeout=10s;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">location /api/robot{</span></span>
<span class="line"><span style="color:#babed8;">    proxy_pass http://robotservers;</span></span>
<span class="line"><span style="color:#babed8;">    client_max_body_size 100m;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="upstream-负载均衡" tabindex="-1">upstream 负载均衡 <a class="header-anchor" href="#upstream-负载均衡" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">http {</span></span>
<span class="line"><span style="color:#babed8;">    upstream backend {</span></span>
<span class="line"><span style="color:#babed8;">        server backend1.example.com;</span></span>
<span class="line"><span style="color:#babed8;">        server backend2.example.com;</span></span>
<span class="line"><span style="color:#babed8;">        server backend3.example.com;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    server {</span></span>
<span class="line"><span style="color:#babed8;">        listen 80;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">        location / {</span></span>
<span class="line"><span style="color:#babed8;">            proxy_pass http://backend;</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>自动负载三个域名1:1:1</p><p>也可以设置权重</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">http {</span></span>
<span class="line"><span style="color:#babed8;">    upstream backend {</span></span>
<span class="line"><span style="color:#babed8;">        server backend1.example.com weight=3;</span></span>
<span class="line"><span style="color:#babed8;">        server backend2.example.com;</span></span>
<span class="line"><span style="color:#babed8;">        server backup1.example.com backup;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    server {</span></span>
<span class="line"><span style="color:#babed8;">        ...</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>三个服务承受负载的比重分别为：3:1:1</p>`,24),o=[p];function t(c,i,b,r,d,y){return a(),n("div",null,o)}const v=s(e,[["render",t]]);export{m as __pageData,v as default};
