import{_ as s,c as a,o as n,a5 as e}from"./chunks/framework.CW9jv5bj.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2024-06-05-query.md","filePath":"javascript/2024-06-05-query.md"}'),p={name:"javascript/2024-06-05-query.md"},t=e(`<h2 id="添加系统服务dvsv3-query-service" tabindex="-1">添加系统服务dvsv3-query.service <a class="header-anchor" href="#添加系统服务dvsv3-query-service" aria-label="Permalink to &quot;添加系统服务dvsv3-query.service&quot;">​</a></h2><ul><li>/usr/lib/systemd/system</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=dvsv3-query</span></span>
<span class="line"><span>After=network-online.target</span></span>
<span class="line"><span>Wants=network-online.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span># modify when deploy in prod env</span></span>
<span class="line"><span>User=dvs</span></span>
<span class="line"><span>Group=dvs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Type=simple</span></span>
<span class="line"><span>ExecStart=/usr/local/dotnet-sdk/dotnet /usr/local/sunlight/dvsv3/dvs-query/DVS.Query.Api.dll</span></span>
<span class="line"><span>WorkingDirectory=/usr/local/sunlight/dvsv3/dvs-query</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Restart=always</span></span>
<span class="line"><span>RestartSec=1</span></span>
<span class="line"><span>StartLimitInterval=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span></code></pre></div>`,3),l=[t];function i(r,c,o,d,u,v){return n(),a("div",null,l)}const h=s(p,[["render",i]]);export{y as __pageData,h as default};
