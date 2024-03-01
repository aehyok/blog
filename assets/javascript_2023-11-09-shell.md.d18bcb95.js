import{_ as s,o as n,c as a,b as l}from"./app.39978e14.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"加入了打印时间的","slug":"加入了打印时间的","link":"#加入了打印时间的","children":[]},{"level":2,"title":"后端DEV","slug":"后端dev","link":"#后端dev","children":[]},{"level":2,"title":"后端加入打印时间","slug":"后端加入打印时间","link":"#后端加入打印时间","children":[]},{"level":2,"title":"11月21日","slug":"_11月21日","link":"#_11月21日","children":[]}],"relativePath":"javascript/2023-11-09-shell.md","lastUpdated":1709295462000}'),p={name:"javascript/2023-11-09-shell.md"},e=l(`<p>mkdir -p ./publish rm -rf ./publish/*</p><p>cd ./dvs-main</p><p>pnpm install pnpm build --outDir &quot;../publish/console/&quot;</p><p>cd ../dvs-ffp</p><p>yarn yarn build --dest &quot;../publish/console/child/dvs-ffp/&quot;</p><p>cd ../dvs-base</p><p>yarn yarn build --dest &quot;../publish/console/child/dvs-base/&quot;</p><p>cd ../dvs-village</p><p>yarn yarn build --dest &quot;../publish/console/child/dvs-village/&quot;</p><p>cd ../dvs-cons</p><p>yarn yarn build --dest &quot;../publish/console/child/dvs-cons/&quot;</p><p>cd ../dvs-facility</p><p>yarn yarn build --dest &quot;../publish/console/child/dvs-facility/&quot;</p><p>cd ../dvs-company</p><p>yarn yarn build --dest &quot;../publish/console/child/dvs-company/&quot;</p><p>cd ../dvs-collect</p><p>yarn yarn build --dest &quot;../publish/console/child/dvs-collect/&quot;</p><p>cd ../dvs-monitor</p><p>yarn yarn build --dest &quot;../publish/console/child/dvs-monitor/&quot;</p><p>mkdir -p ./publish rm -rf ./publish/*</p><pre><code>cd ./dvs-main
pnpm install
pnpm build --outDir &quot;../publish/console/&quot;
echo &quot;dvs-main 编译&quot;;
echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);
</code></pre><p>( cd ../dvs-ffp;</p><pre><code>yarn;
yarn build --dest &quot;../publish/console/child/dvs-ffp/&quot;;
echo &quot;dvs-ffp 编译&quot;;
echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);
</code></pre><p>) &amp;</p><p>( cd ../dvs-base;</p><pre><code>yarn ;
yarn build --dest &quot;../publish/console/child/dvs-base/&quot;;
echo &quot;dvs-base 编译&quot;;
echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);
</code></pre><p>) &amp;</p><p>wait</p><h2 id="加入了打印时间的" tabindex="-1">加入了打印时间的 <a class="header-anchor" href="#加入了打印时间的" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">mkdir -p ./publish</span></span>
<span class="line"><span style="color:#babed8;">rm -rf ./publish/*</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ./dvs-main</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">pnpm install</span></span>
<span class="line"><span style="color:#babed8;">pnpm build --outDir &quot;../publish/console/&quot;</span></span>
<span class="line"><span style="color:#babed8;">echo &quot;dvs-main 编译&quot;;</span></span>
<span class="line"><span style="color:#babed8;">echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-ffp</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">yarn</span></span>
<span class="line"><span style="color:#babed8;">yarn build --dest &quot;../publish/console/child/dvs-ffp/&quot;</span></span>
<span class="line"><span style="color:#babed8;">echo &quot;dvs-ffp 编译&quot;;</span></span>
<span class="line"><span style="color:#babed8;">echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-base</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">yarn </span></span>
<span class="line"><span style="color:#babed8;">yarn build --dest &quot;../publish/console/child/dvs-base/&quot;</span></span>
<span class="line"><span style="color:#babed8;">echo &quot;dvs-base 编译&quot;;</span></span>
<span class="line"><span style="color:#babed8;">echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-village</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">yarn</span></span>
<span class="line"><span style="color:#babed8;">yarn build --dest &quot;../publish/console/child/dvs-village/&quot;</span></span>
<span class="line"><span style="color:#babed8;">echo &quot;dvs-village 编译&quot;;</span></span>
<span class="line"><span style="color:#babed8;">echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-cons</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">yarn </span></span>
<span class="line"><span style="color:#babed8;">yarn build --dest &quot;../publish/console/child/dvs-cons/&quot;</span></span>
<span class="line"><span style="color:#babed8;">echo &quot;dvs-cons 编译&quot;;</span></span>
<span class="line"><span style="color:#babed8;">echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-facility</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">yarn </span></span>
<span class="line"><span style="color:#babed8;">yarn build --dest &quot;../publish/console/child/dvs-facility/&quot;</span></span>
<span class="line"><span style="color:#babed8;">echo &quot;dvs-facility 编译&quot;;</span></span>
<span class="line"><span style="color:#babed8;">echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-company</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">yarn </span></span>
<span class="line"><span style="color:#babed8;">yarn build --dest &quot;../publish/console/child/dvs-company/&quot;</span></span>
<span class="line"><span style="color:#babed8;">echo &quot;dvs-company 编译&quot;;</span></span>
<span class="line"><span style="color:#babed8;">echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-collect</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">yarn </span></span>
<span class="line"><span style="color:#babed8;">yarn build --dest &quot;../publish/console/child/dvs-collect/&quot;</span></span>
<span class="line"><span style="color:#babed8;">echo &quot;dvs-collect 编译&quot;;</span></span>
<span class="line"><span style="color:#babed8;">echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-monitor</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">yarn </span></span>
<span class="line"><span style="color:#babed8;">yarn build --dest &quot;../publish/console/child/dvs-monitor/&quot;</span></span>
<span class="line"><span style="color:#babed8;">echo &quot;dvs-monitor 编译&quot;;</span></span>
<span class="line"><span style="color:#babed8;">echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="后端dev" tabindex="-1">后端DEV <a class="header-anchor" href="#后端dev" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">mkdir -p ./publish</span></span>
<span class="line"><span style="color:#babed8;">rm -rf ./publish/*</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet publish ./Services/Basic/DVS.Basic.Api/DVS.Basic.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-basic --no-self-contained</span></span>
<span class="line"><span style="color:#babed8;">echo &quot;dvs-Basic 编译&quot;;</span></span>
<span class="line"><span style="color:#babed8;">echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet publish ./Services/FFP/DVS.FFP.Api/DVS.FFP.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-ffp --no-self-contained</span></span>
<span class="line"><span style="color:#babed8;">echo &quot;dvs-FFP 编译&quot;;</span></span>
<span class="line"><span style="color:#babed8;">echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet publish ./Services/Village/DVS.Village.Api/DVS.Village.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-village --no-self-contained</span></span>
<span class="line"><span style="color:#babed8;">echo &quot;dvs-Village 编译&quot;;</span></span>
<span class="line"><span style="color:#babed8;">echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet publish ./Services/Dynamic/DVS.Dynamic.Api/DVS.Dynamic.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-dynamic --no-self-contained</span></span>
<span class="line"><span style="color:#babed8;">echo &quot;dvs-Dynamic 编译&quot;;</span></span>
<span class="line"><span style="color:#babed8;">echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># dotnet publish ./Services/CustomForm/DVS.CustomForm.Api/DVS.CustomForm.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-customform --no-self-contained</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet publish ./Services/GIS/DVS.GIS.Api/DVS.GIS.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-gis --no-self-contained</span></span>
<span class="line"><span style="color:#babed8;">echo &quot;dvs-GIS 编译&quot;;</span></span>
<span class="line"><span style="color:#babed8;">echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet publish ./Services/SystemService/DVS.SystemService/DVS.SystemService.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-systemservice --no-self-contained</span></span>
<span class="line"><span style="color:#babed8;">echo &quot;dvs-SystemService 编译&quot;;</span></span>
<span class="line"><span style="color:#babed8;">echo $(date &#39;+%Y-%m-%d %H:%M:%S&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ./publish/</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">find . -name &quot;appsettings.json&quot; -exec rm -rf {} \\;</span></span>
<span class="line"><span style="color:#babed8;">find . -name &quot;appsettings.Development.json&quot; -exec rm -rf {} \\;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="后端加入打印时间" tabindex="-1">后端加入打印时间 <a class="header-anchor" href="#后端加入打印时间" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">mkdir -p ./publish</span></span>
<span class="line"><span style="color:#babed8;">rm -rf ./publish/*</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet publish ./Services/Basic/DVS.Basic.Api/DVS.Basic.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-basic --no-self-contained</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet publish ./Services/FFP/DVS.FFP.Api/DVS.FFP.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-ffp --no-self-contained</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet publish ./Services/Village/DVS.Village.Api/DVS.Village.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-village --no-self-contained</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet publish ./Services/Dynamic/DVS.Dynamic.Api/DVS.Dynamic.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-dynamic --no-self-contained</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># dotnet publish ./Services/CustomForm/DVS.CustomForm.Api/DVS.CustomForm.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-customform --no-self-contained</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet publish ./Services/GIS/DVS.GIS.Api/DVS.GIS.Api.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-gis --no-self-contained</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet publish ./Services/SystemService/DVS.SystemService/DVS.SystemService.csproj -f net6.0 -r linux-arm64 -o ./publish/dvs-systemservice --no-self-contained</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ./publish/</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">find . -name &quot;appsettings.json&quot; -exec rm -rf {} \\;</span></span>
<span class="line"><span style="color:#babed8;">find . -name &quot;appsettings.Development.json&quot; -exec rm -rf {} \\;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="_11月21日" tabindex="-1">11月21日 <a class="header-anchor" href="#_11月21日" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">mkdir -p ./publish</span></span>
<span class="line"><span style="color:#babed8;">rm -rf ./publish/*</span></span>
<span class="line"><span style="color:#babed8;">npm config set registry https://registry.npmmirror.com/</span></span>
<span class="line"><span style="color:#babed8;">cd ./dvs-main</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">pnpm install</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">pnpm build --outDir &quot;../publish/console/&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-ffp</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">yarn</span></span>
<span class="line"><span style="color:#babed8;">yarn build --dest &quot;../publish/console/child/dvs-ffp/&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-base</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">yarn </span></span>
<span class="line"><span style="color:#babed8;">yarn build --dest &quot;../publish/console/child/dvs-base/&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-village</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">yarn</span></span>
<span class="line"><span style="color:#babed8;">yarn build --dest &quot;../publish/console/child/dvs-village/&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-cons</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">yarn </span></span>
<span class="line"><span style="color:#babed8;">yarn build --dest &quot;../publish/console/child/dvs-cons/&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-facility</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">yarn </span></span>
<span class="line"><span style="color:#babed8;">yarn build --dest &quot;../publish/console/child/dvs-facility/&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-company</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">yarn </span></span>
<span class="line"><span style="color:#babed8;">yarn build --dest &quot;../publish/console/child/dvs-company/&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-gis</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">yarn </span></span>
<span class="line"><span style="color:#babed8;">yarn build --dest &quot;../publish/console/child/dvs-gis/&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-collect</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">yarn </span></span>
<span class="line"><span style="color:#babed8;">yarn build --dest &quot;../publish/console/child/dvs-collect/&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-monitor</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">yarn </span></span>
<span class="line"><span style="color:#babed8;">yarn build --dest &quot;../publish/console/child/dvs-monitor/&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">cd ../dvs-chat</span></span>
<span class="line"><span style="color:#babed8;">pnpm install &amp;&amp; pnpm build --outDir &quot;../publish/dvschat/&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,36),o=[e];function c(i,t,d,b,r,y){return n(),a("div",null,o)}const v=s(p,[["render",c]]);export{h as __pageData,v as default};
