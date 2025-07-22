import{_ as n,c as a,o as p,ag as e}from"./chunks/framework.mJdS8VI0.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2024-06-24-lf.md","filePath":"article/code/2024-06-24-lf.md","lastUpdated":1753180181000}'),t={name:"article/code/2024-06-24-lf.md"};function l(i,s,o,r,c,d){return p(),a("div",null,s[0]||(s[0]=[e(`<h2 id="_6月24日下午沟通结果" tabindex="-1">6月24日下午沟通结果 <a class="header-anchor" href="#_6月24日下午沟通结果" aria-label="Permalink to &quot;6月24日下午沟通结果&quot;">​</a></h2><ul><li>1、周五下班前，部署一个演示版本（大屏首页为主）</li><li>2、周日晚上尽量能通过接口联调成功</li><li>3、部署的服务器需要提前提供</li><li>4、UI切图提早给</li><li>5、意向金</li></ul><p>mysql版本：8.0.35</p><p>dotnet 6.0 <a href="https://dotnet.microsoft.com/zh-cn/download/dotnet/6.0" target="_blank" rel="noreferrer">https://dotnet.microsoft.com/zh-cn/download/dotnet/6.0</a></p><p>aarch64 /usr/local/dotnet6 dev</p><p>101.200.243.192 部署</p><ul><li>/root/dotnet6/dotnet</li></ul><p>/usr/lib/systemd/system</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=sun-xxm</span></span>
<span class="line"><span>After=network-online.target</span></span>
<span class="line"><span>Wants=network-online.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span># modify when deploy in prod env</span></span>
<span class="line"><span># User=dvs</span></span>
<span class="line"><span># Group=dvs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Type=simple</span></span>
<span class="line"><span>ExecStart=/root/dotnet6/dotnet /usr/local/sunlight/sun-xxm/sun.xxm.dll</span></span>
<span class="line"><span>WorkingDirectory=/usr/local/sunlight/sun.xxm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Restart=always</span></span>
<span class="line"><span>RestartSec=1</span></span>
<span class="line"><span>StartLimitInterval=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span></code></pre></div><p>systemctl enable sun-xxm</p><p>systemctl start sun-xxm systemctl stop sun-xxm</p><p>journalctl -u sun-xxm.service -f</p><p>chmod -R 777 /root/dotnet6/</p><p>部署到服务器 tar -zxvf aspnetcore-runtime-6.0.3-linux-x64.tar.gz -C /usr/local/dotnet</p>`,14)]))}const x=n(t,[["render",l]]);export{m as __pageData,x as default};
