import{_ as s,o as a,c as n,b as e}from"./app.232525a4.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"github","slug":"github","link":"#github","children":[]},{"level":2,"title":"git clone 到本地","slug":"git-clone-到本地","link":"#git-clone-到本地","children":[]},{"level":2,"title":"根据Dockfile编译","slug":"根据dockfile编译","link":"#根据dockfile编译","children":[]},{"level":2,"title":"准备mysql数据库","slug":"准备mysql数据库","link":"#准备mysql数据库","children":[]},{"level":2,"title":"配置文件准备","slug":"配置文件准备","link":"#配置文件准备","children":[]},{"level":2,"title":"服务器上直接通过systemd服务运行","slug":"服务器上直接通过systemd服务运行","link":"#服务器上直接通过systemd服务运行","children":[]},{"level":2,"title":"/usr/lib/systemd/system/dvsv3-goploy.service","slug":"usr-lib-systemd-system-dvsv3-goploy-service","link":"#usr-lib-systemd-system-dvsv3-goploy-service","children":[]},{"level":2,"title":"nginx 配置","slug":"nginx-配置","link":"#nginx-配置","children":[]},{"level":2,"title":"运行后进行构建","slug":"运行后进行构建","link":"#运行后进行构建","children":[]}],"relativePath":"javascript/2023-11-24-goploy.md","lastUpdated":1704697426000}'),l={name:"javascript/2023-11-24-goploy.md"},p=e(`<h2 id="github" tabindex="-1">github <a class="header-anchor" href="#github" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/zhenorzz/goploy" target="_blank" rel="noreferrer">https://github.com/zhenorzz/goploy</a></li></ul><h2 id="git-clone-到本地" tabindex="-1">git clone 到本地 <a class="header-anchor" href="#git-clone-到本地" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">git clone https://github.com/zhenorzz/goploy.git</span></span>
<span class="line"><span style="color:#babed8;">cd ./goploy</span></span>
<span class="line"><span style="color:#babed8;">git checkout -b tagname</span></span>
<span class="line"><span style="color:#babed8;">cd ./web</span></span>
<span class="line"><span style="color:#babed8;">npm install &amp;&amp; npm run build</span></span>
<span class="line"><span style="color:#babed8;">cd ../</span></span>
<span class="line"><span style="color:#babed8;">go build -o goploy cmd/server/main.go</span></span>
<span class="line"><span style="color:#babed8;">// 这里算是本地编译的</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"> //vite.config.ts中的配置</span></span>
<span class="line"><span style="color:#babed8;"> base: &quot;./&quot;,</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// .env.production</span></span>
<span class="line"><span style="color:#babed8;">VITE_APP_BASE_API = &#39;/goploy&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// package.json  最新版本的element-plus不兼容</span></span>
<span class="line"><span style="color:#babed8;">&quot;element-plus&quot;: &quot;2.3.4&quot;,</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="根据dockfile编译" tabindex="-1">根据Dockfile编译 <a class="header-anchor" href="#根据dockfile编译" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 这里算是docker编译的, 需要arm64的，则可以在本地通过如下命令编译go程序</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">CGO_ENABLED=0 GOOS=linux GOARCH=arm64 go build -o goploy cmd/server/main.go</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="准备mysql数据库" tabindex="-1">准备mysql数据库 <a class="header-anchor" href="#准备mysql数据库" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">  // 下载mysql脚本</span></span>
<span class="line"><span style="color:#babed8;">  https://github.com/zhenorzz/goploy/blob/master/database/goploy.sql</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  // 在目标mysql服务端创建数据库</span></span>
<span class="line"><span style="color:#babed8;">    CREATE DATABASE goploy</span></span>
<span class="line"><span style="color:#babed8;">    DEFAULT CHARACTER SET utf8</span></span>
<span class="line"><span style="color:#babed8;">    DEFAULT COLLATE utf8_bin;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">   // 直接在服务器上进行执行sql文件</span></span>
<span class="line"><span style="color:#babed8;">   mysql -h172.17.0.3 -P 3306 -uroot -pxxxxxx db&lt;/usr/local/goploy.sql</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="配置文件准备" tabindex="-1">配置文件准备 <a class="header-anchor" href="#配置文件准备" aria-hidden="true">#</a></h2><p><a href="https://github.com/zhenorzz/goploy/blob/master/goploy.example.toml" target="_blank" rel="noreferrer">https://github.com/zhenorzz/goploy/blob/master/goploy.example.toml</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 数据库相关配置</span></span>
<span class="line"><span style="color:#babed8;">[db]</span></span>
<span class="line"><span style="color:#babed8;">type = &#39;mysql&#39;</span></span>
<span class="line"><span style="color:#babed8;">user = &#39;root&#39;</span></span>
<span class="line"><span style="color:#babed8;">password = &#39;xxxxxx&#39;</span></span>
<span class="line"><span style="color:#babed8;">host = &#39;127.0.0.1&#39;</span></span>
<span class="line"><span style="color:#babed8;">port = &#39;3306&#39;</span></span>
<span class="line"><span style="color:#babed8;">database = &#39;goploy&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="服务器上直接通过systemd服务运行" tabindex="-1">服务器上直接通过systemd服务运行 <a class="header-anchor" href="#服务器上直接通过systemd服务运行" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"> goploy.toml 文件和上面编译的goploy golang文件</span></span>
<span class="line"><span style="color:#babed8;"> 一起拷贝到linux服务器上 /root/goploy</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="usr-lib-systemd-system-dvsv3-goploy-service" tabindex="-1">/usr/lib/systemd/system/dvsv3-goploy.service <a class="header-anchor" href="#usr-lib-systemd-system-dvsv3-goploy-service" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">[Unit]</span></span>
<span class="line"><span style="color:#babed8;">Description=The Goploy</span></span>
<span class="line"><span style="color:#babed8;">After=network.target</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">[Service]</span></span>
<span class="line"><span style="color:#babed8;">Environment=&quot;HOME=/root&quot;</span></span>
<span class="line"><span style="color:#babed8;">WorkingDirectory=/root/goploy</span></span>
<span class="line"><span style="color:#babed8;">ExecStart=/root/goploy/goploy</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">[Install]</span></span>
<span class="line"><span style="color:#babed8;">WantedBy=multi-user.target</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">systemctl enable dvsv3-goploy</span></span>
<span class="line"><span style="color:#babed8;">systemctl start dvsv3-goploy</span></span>
<span class="line"><span style="color:#babed8;">systemctl status dvsv3-goploy</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="nginx-配置" tabindex="-1">nginx 配置 <a class="header-anchor" href="#nginx-配置" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">  location /goploy/ {</span></span>
<span class="line"><span style="color:#babed8;">      proxy_set_header X-Real-IP       $remote_addr;</span></span>
<span class="line"><span style="color:#babed8;">      proxy_set_header Host            $host;</span></span>
<span class="line"><span style="color:#babed8;">      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#babed8;">      proxy_http_version               1.1;</span></span>
<span class="line"><span style="color:#babed8;">      proxy_set_header Upgrade         $http_upgrade;</span></span>
<span class="line"><span style="color:#babed8;">      proxy_set_header Connection      &quot;upgrade&quot;;</span></span>
<span class="line"><span style="color:#babed8;">      proxy_pass http://127.0.0.1:19029;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">      # 解决潜在的路径问题</span></span>
<span class="line"><span style="color:#babed8;">      rewrite ^/goploy(/.*)$ $1 break;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>nginx -s reload</p><h2 id="运行后进行构建" tabindex="-1">运行后进行构建 <a class="header-anchor" href="#运行后进行构建" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">npm command not found</span></span>
<span class="line"><span style="color:#babed8;">yarn command not found</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,22),o=[p];function t(c,i,r,d,b,y){return a(),n("div",null,o)}const u=s(l,[["render",t]]);export{g as __pageData,u as default};
