import{_ as s,o as n,c as a,O as l}from"./chunks/framework.ce94e18e.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-06-02-robot.md","lastUpdated":1687327868000}'),p={name:"javascript/2023-06-02-robot.md"},e=l(`<h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><ul><li>数据库配置文件 /usr/local/sunlight/dvs/etc 数据库配置文件 dvs-robot.appsettings.json</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;Logging&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;LogLevel&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;Default&quot;: &quot;Information&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;Microsoft&quot;: &quot;Warning&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;Urls&quot;: &quot;http://*:3021&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;ConnectionStrings&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;MySQL&quot;: &quot;server=XXXX;Port=XXXX;uid=XXXX;pwd=XXXX;database=robot;convert zero datetime=true;Charset=utf8mb4&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;Redis&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;ConnectionString&quot;: &quot;localhost:6379,password=XXXX,defaultDatabase=0&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>主要是设置后端接口服务接口、mysql数据库链接、redis服务链接</p><ul><li>systemd系统服务配置文件 /usr/lib/systemd/system 文件名 dvs-robot.service</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[Unit]</span></span>
<span class="line"><span style="color:#A6ACCD;">Description=dvs-robot</span></span>
<span class="line"><span style="color:#A6ACCD;">After=network-online.target</span></span>
<span class="line"><span style="color:#A6ACCD;">Wants=network-online.target</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[Service]</span></span>
<span class="line"><span style="color:#A6ACCD;"># modify when deploy in prod env</span></span>
<span class="line"><span style="color:#A6ACCD;">User=dvs</span></span>
<span class="line"><span style="color:#A6ACCD;">Group=dvs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Type=simple</span></span>
<span class="line"><span style="color:#A6ACCD;">ExecStart=/usr/local/dotnet-sdk/dotnet /usr/local/sunlight/dvs/dvs-robot/SLRobot.Admin.dll</span></span>
<span class="line"><span style="color:#A6ACCD;">WorkingDirectory=/usr/local/sunlight/dvs/dvs-robot</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Restart=always</span></span>
<span class="line"><span style="color:#A6ACCD;">RestartSec=1</span></span>
<span class="line"><span style="color:#A6ACCD;">StartLimitInterval=0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[Install]</span></span>
<span class="line"><span style="color:#A6ACCD;">WantedBy=multi-user.target</span></span></code></pre></div><p>主要是设置 sdk和可执行文件路径</p><ul><li>设置服务和设置开启启动</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 设置开机启动</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl enable dvs-robot.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 启动服务</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start dvs-robot.service</span></span></code></pre></div><ul><li>查看systemctl 启动的日志</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//查看某个服务的日志情况</span></span>
<span class="line"><span style="color:#A6ACCD;">journalctl -u dvs-robot.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看实时的服务日志</span></span>
<span class="line"><span style="color:#A6ACCD;">journalctl -u dvs-robot.service -f</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//查看时间区间</span></span>
<span class="line"><span style="color:#A6ACCD;">journalctl -u dvs-robot.service --since &quot;2023-06-01&quot; --until &quot;2023-06-02 03:00&quot;</span></span></code></pre></div><ul><li>tail查看linux日志</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 实时查看app.log日志</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f app.log</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 使用-n可以设置显示的行数</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -n 20 -f app.log</span></span></code></pre></div><ul><li>nginx中添加前端项目</li></ul><p>前端项目nginx配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location /robot{</span></span>
<span class="line"><span style="color:#A6ACCD;">        alias /usr/local/sunlight/dvs/dvs-ui/robot/;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre></div><p>后端接口服务配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">upstream robotservers{</span></span>
<span class="line"><span style="color:#A6ACCD;">    server 192.168.0.28:3021  max_fails=30  fail_timeout=10s;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">location /api/robot{</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass http://robotservers;</span></span>
<span class="line"><span style="color:#A6ACCD;">    client_max_body_size 100m;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="upstream-负载均衡" tabindex="-1">upstream 负载均衡 <a class="header-anchor" href="#upstream-负载均衡" aria-label="Permalink to &quot;upstream 负载均衡&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    upstream backend {</span></span>
<span class="line"><span style="color:#A6ACCD;">        server backend1.example.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server backend2.example.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server backend3.example.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen 80;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_pass http://backend;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>自动负载三个域名1:1:1</p><p>也可以设置权重</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    upstream backend {</span></span>
<span class="line"><span style="color:#A6ACCD;">        server backend1.example.com weight=3;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server backend2.example.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server backup1.example.com backup;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>三个服务承受负载的比重分别为：3:1:1</p>`,24),o=[e];function t(c,i,r,C,A,y){return n(),a("div",null,o)}const D=s(p,[["render",t]]);export{d as __pageData,D as default};
