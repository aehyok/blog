import{_ as a,c as n,o as p,ag as e}from"./chunks/framework.Cpzi45lG.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2023-11-24-goploy.md","filePath":"article/code/2023-11-24-goploy.md","lastUpdated":1756895751000}'),l={name:"article/code/2023-11-24-goploy.md"};function t(o,s,i,c,r,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h2 id="github" tabindex="-1">github <a class="header-anchor" href="#github" aria-label="Permalink to &quot;github&quot;">​</a></h2><ul><li><a href="https://github.com/zhenorzz/goploy" target="_blank" rel="noreferrer">https://github.com/zhenorzz/goploy</a></li></ul><h2 id="git-clone-到本地" tabindex="-1">git clone 到本地 <a class="header-anchor" href="#git-clone-到本地" aria-label="Permalink to &quot;git clone 到本地&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git clone https://github.com/zhenorzz/goploy.git</span></span>
<span class="line"><span>cd ./goploy</span></span>
<span class="line"><span>git checkout -b tagname</span></span>
<span class="line"><span>cd ./web</span></span>
<span class="line"><span>npm install &amp;&amp; npm run build</span></span>
<span class="line"><span>cd ../</span></span>
<span class="line"><span>go build -o goploy cmd/server/main.go</span></span>
<span class="line"><span>// 这里算是本地编译的</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> //vite.config.ts中的配置</span></span>
<span class="line"><span> base: &quot;./&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// .env.production</span></span>
<span class="line"><span>VITE_APP_BASE_API = &#39;/goploy&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// package.json  最新版本的element-plus不兼容</span></span>
<span class="line"><span>&quot;element-plus&quot;: &quot;2.3.4&quot;,</span></span></code></pre></div><h2 id="根据dockfile编译" tabindex="-1">根据Dockfile编译 <a class="header-anchor" href="#根据dockfile编译" aria-label="Permalink to &quot;根据Dockfile编译&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 这里算是docker编译的, 需要arm64的，则可以在本地通过如下命令编译go程序</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CGO_ENABLED=0 GOOS=linux GOARCH=arm64 go build -o goploy cmd/server/main.go</span></span></code></pre></div><h2 id="准备mysql数据库" tabindex="-1">准备mysql数据库 <a class="header-anchor" href="#准备mysql数据库" aria-label="Permalink to &quot;准备mysql数据库&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  // 下载mysql脚本</span></span>
<span class="line"><span>  https://github.com/zhenorzz/goploy/blob/master/database/goploy.sql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 在目标mysql服务端创建数据库</span></span>
<span class="line"><span>    CREATE DATABASE goploy</span></span>
<span class="line"><span>    DEFAULT CHARACTER SET utf8</span></span>
<span class="line"><span>    DEFAULT COLLATE utf8_bin;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   // 直接在服务器上进行执行sql文件</span></span>
<span class="line"><span>   mysql -h172.17.0.3 -P 3306 -uroot -pxxxxxx db&lt;/usr/local/goploy.sql</span></span></code></pre></div><h2 id="配置文件准备" tabindex="-1">配置文件准备 <a class="header-anchor" href="#配置文件准备" aria-label="Permalink to &quot;配置文件准备&quot;">​</a></h2><p><a href="https://github.com/zhenorzz/goploy/blob/master/goploy.example.toml" target="_blank" rel="noreferrer">https://github.com/zhenorzz/goploy/blob/master/goploy.example.toml</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 数据库相关配置</span></span>
<span class="line"><span>[db]</span></span>
<span class="line"><span>type = &#39;mysql&#39;</span></span>
<span class="line"><span>user = &#39;root&#39;</span></span>
<span class="line"><span>password = &#39;xxxxxx&#39;</span></span>
<span class="line"><span>host = &#39;127.0.0.1&#39;</span></span>
<span class="line"><span>port = &#39;3306&#39;</span></span>
<span class="line"><span>database = &#39;goploy&#39;</span></span></code></pre></div><h2 id="服务器上直接通过systemd服务运行" tabindex="-1">服务器上直接通过systemd服务运行 <a class="header-anchor" href="#服务器上直接通过systemd服务运行" aria-label="Permalink to &quot;服务器上直接通过systemd服务运行&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> goploy.toml 文件和上面编译的goploy golang文件</span></span>
<span class="line"><span> 一起拷贝到linux服务器上 /root/goploy</span></span></code></pre></div><h2 id="usr-lib-systemd-system-dvsv3-goploy-service" tabindex="-1">/usr/lib/systemd/system/dvsv3-goploy.service <a class="header-anchor" href="#usr-lib-systemd-system-dvsv3-goploy-service" aria-label="Permalink to &quot;/usr/lib/systemd/system/dvsv3-goploy.service&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=The Goploy</span></span>
<span class="line"><span>After=network.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Environment=&quot;HOME=/root&quot;</span></span>
<span class="line"><span>WorkingDirectory=/root/goploy</span></span>
<span class="line"><span>ExecStart=/root/goploy/goploy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>systemctl enable dvsv3-goploy</span></span>
<span class="line"><span>systemctl start dvsv3-goploy</span></span>
<span class="line"><span>systemctl status dvsv3-goploy</span></span></code></pre></div><h2 id="nginx-配置" tabindex="-1">nginx 配置 <a class="header-anchor" href="#nginx-配置" aria-label="Permalink to &quot;nginx 配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  location /goploy/ {</span></span>
<span class="line"><span>      proxy_set_header X-Real-IP       $remote_addr;</span></span>
<span class="line"><span>      proxy_set_header Host            $host;</span></span>
<span class="line"><span>      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>      proxy_http_version               1.1;</span></span>
<span class="line"><span>      proxy_set_header Upgrade         $http_upgrade;</span></span>
<span class="line"><span>      proxy_set_header Connection      &quot;upgrade&quot;;</span></span>
<span class="line"><span>      proxy_pass http://127.0.0.1:19029;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      # 解决潜在的路径问题</span></span>
<span class="line"><span>      rewrite ^/goploy(/.*)$ $1 break;</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>nginx -s reload</p><h2 id="运行后进行构建" tabindex="-1">运行后进行构建 <a class="header-anchor" href="#运行后进行构建" aria-label="Permalink to &quot;运行后进行构建&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm command not found</span></span>
<span class="line"><span>yarn command not found</span></span></code></pre></div>`,22)]))}const u=a(l,[["render",t]]);export{g as __pageData,u as default};
