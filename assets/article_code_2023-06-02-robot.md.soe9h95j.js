import{_ as a,c as n,o as p,ag as e}from"./chunks/framework.mJdS8VI0.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2023-06-02-robot.md","filePath":"article/code/2023-06-02-robot.md","lastUpdated":1753164172000}'),l={name:"article/code/2023-06-02-robot.md"};function t(i,s,o,c,r,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><ul><li>数据库配置文件 /usr/local/sunlight/dvs/etc 数据库配置文件 dvs-robot.appsettings.json</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;Logging&quot;: {</span></span>
<span class="line"><span>        &quot;LogLevel&quot;: {</span></span>
<span class="line"><span>            &quot;Default&quot;: &quot;Information&quot;,</span></span>
<span class="line"><span>            &quot;Microsoft&quot;: &quot;Warning&quot;,</span></span>
<span class="line"><span>            &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;Urls&quot;: &quot;http://*:3021&quot;,</span></span>
<span class="line"><span>    &quot;ConnectionStrings&quot;: {</span></span>
<span class="line"><span>        &quot;MySQL&quot;: &quot;server=XXXX;Port=XXXX;uid=XXXX;pwd=XXXX;database=robot;convert zero datetime=true;Charset=utf8mb4&quot;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;Redis&quot;: {</span></span>
<span class="line"><span>        &quot;ConnectionString&quot;: &quot;localhost:6379,password=XXXX,defaultDatabase=0&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>主要是设置后端接口服务接口、mysql数据库链接、redis服务链接</p><ul><li>systemd系统服务配置文件 /usr/lib/systemd/system 文件名 dvs-robot.service</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=dvs-robot</span></span>
<span class="line"><span>After=network-online.target</span></span>
<span class="line"><span>Wants=network-online.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span># modify when deploy in prod env</span></span>
<span class="line"><span>User=dvs</span></span>
<span class="line"><span>Group=dvs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Type=simple</span></span>
<span class="line"><span>ExecStart=/usr/local/dotnet-sdk/dotnet /usr/local/sunlight/dvs/dvs-robot/SLRobot.Admin.dll</span></span>
<span class="line"><span>WorkingDirectory=/usr/local/sunlight/dvs/dvs-robot</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Restart=always</span></span>
<span class="line"><span>RestartSec=1</span></span>
<span class="line"><span>StartLimitInterval=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span></code></pre></div><p>主要是设置 sdk和可执行文件路径</p><ul><li>设置服务和设置开启启动</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 设置开机启动</span></span>
<span class="line"><span>systemctl enable dvs-robot.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 启动服务</span></span>
<span class="line"><span>systemctl start dvs-robot.service</span></span></code></pre></div><ul><li>查看systemctl 启动的日志</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//查看某个服务的日志情况</span></span>
<span class="line"><span>journalctl -u dvs-robot.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看实时的服务日志</span></span>
<span class="line"><span>journalctl -u dvs-robot.service -f</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//查看时间区间</span></span>
<span class="line"><span>journalctl -u dvs-robot.service --since &quot;2023-06-01&quot; --until &quot;2023-06-02 03:00&quot;</span></span></code></pre></div><ul><li>tail查看linux日志</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 实时查看app.log日志</span></span>
<span class="line"><span>tail -f app.log</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用-n可以设置显示的行数</span></span>
<span class="line"><span>tail -n 20 -f app.log</span></span></code></pre></div><ul><li>nginx中添加前端项目</li></ul><p>前端项目nginx配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    location /robot{</span></span>
<span class="line"><span>        alias /usr/local/sunlight/dvs/dvs-ui/robot/;</span></span>
<span class="line"><span>        index index.html;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>后端接口服务配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>upstream robotservers{</span></span>
<span class="line"><span>    server 192.168.0.28:3021  max_fails=30  fail_timeout=10s;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>location /api/robot{</span></span>
<span class="line"><span>    proxy_pass http://robotservers;</span></span>
<span class="line"><span>    client_max_body_size 100m;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="upstream-负载均衡" tabindex="-1">upstream 负载均衡 <a class="header-anchor" href="#upstream-负载均衡" aria-label="Permalink to &quot;upstream 负载均衡&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http {</span></span>
<span class="line"><span>    upstream backend {</span></span>
<span class="line"><span>        server backend1.example.com;</span></span>
<span class="line"><span>        server backend2.example.com;</span></span>
<span class="line"><span>        server backend3.example.com;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen 80;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            proxy_pass http://backend;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>自动负载三个域名1:1:1</p><p>也可以设置权重</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http {</span></span>
<span class="line"><span>    upstream backend {</span></span>
<span class="line"><span>        server backend1.example.com weight=3;</span></span>
<span class="line"><span>        server backend2.example.com;</span></span>
<span class="line"><span>        server backup1.example.com backup;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>三个服务承受负载的比重分别为：3:1:1</p>`,24)]))}const v=a(l,[["render",t]]);export{h as __pageData,v as default};
