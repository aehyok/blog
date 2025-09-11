import{_ as s,c as n,o as p,ag as e}from"./chunks/framework.ELrfyV9R.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2024-01-15-zabbix.md","filePath":"article/code/2024-01-15-zabbix.md","lastUpdated":1757580971000}'),l={name:"article/code/2024-01-15-zabbix.md"};function i(t,a,c,o,r,b){return p(),n("div",null,a[0]||(a[0]=[e(`<h2 id="zabbix-docker" tabindex="-1">zabbix docker <a class="header-anchor" href="#zabbix-docker" aria-label="Permalink to &quot;zabbix docker&quot;">​</a></h2><ul><li>参考文章 <ul><li><a href="https://mp.weixin.qq.com/s/yx-mm2Am_LIZ2AvHw21mUA" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/yx-mm2Am_LIZ2AvHw21mUA</a></li></ul></li><li>官网文档 <ul><li><a href="https://www.zabbix.com/documentation/current/zh/manual/config/hosts" target="_blank" rel="noreferrer">https://www.zabbix.com/documentation/current/zh/manual/config/hosts</a></li></ul></li></ul><h2 id="zabbix-后端" tabindex="-1">zabbix 后端 <a class="header-anchor" href="#zabbix-后端" aria-label="Permalink to &quot;zabbix 后端&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run \\</span></span>
<span class="line"><span>--restart always -itd \\</span></span>
<span class="line"><span>--name zabbix-server \\</span></span>
<span class="line"><span>--link mysql \\               #//--link</span></span>
<span class="line"><span>-p 10051:10051 \\                      #//docker inspect看下暴露的端口 docker inspect zabbix/zabbix-server-mysql  </span></span>
<span class="line"><span>-e DB_SERVER_HOST=&quot;mysql&quot; \\  #//直接写mysql容器名字   -e设置环境变量</span></span>
<span class="line"><span>-e MYSQL_USER=&quot;root&quot; \\</span></span>
<span class="line"><span>-e MYSQL_PASSWORD=&quot;M9y2512!&quot; \\</span></span>
<span class="line"><span>-d zabbix/zabbix-server-mysql   #//要使用那个镜像进行创建容器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run \\</span></span>
<span class="line"><span>--restart always -itd \\</span></span>
<span class="line"><span>--name zabbix-server \\</span></span>
<span class="line"><span>--link mysql \\</span></span>
<span class="line"><span>-p 10051:10051 \\</span></span>
<span class="line"><span>-e DB_SERVER_HOST=&quot;mysql&quot; \\</span></span>
<span class="line"><span>-e MYSQL_USER=&quot;root&quot; \\</span></span>
<span class="line"><span>-e MYSQL_PASSWORD=&quot;M9y2512!&quot; \\</span></span>
<span class="line"><span>-d zabbix/zabbix-server-mysql</span></span></code></pre></div><h2 id="zabbix-前端" tabindex="-1">zabbix 前端 <a class="header-anchor" href="#zabbix-前端" aria-label="Permalink to &quot;zabbix 前端&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run \\</span></span>
<span class="line"><span>--restart always -itd \\</span></span>
<span class="line"><span>--name zabbix-web \\</span></span>
<span class="line"><span>--link mysql \\</span></span>
<span class="line"><span>--link zabbix-server \\</span></span>
<span class="line"><span>-p 8081:8080 \\</span></span>
<span class="line"><span>-p 8444:8443 \\</span></span>
<span class="line"><span>-e DB_SERVER_HOST=&quot;mysql&quot; \\</span></span>
<span class="line"><span>-e MYSQL_USER=&quot;root&quot; \\</span></span>
<span class="line"><span>-e MYSQL_PASSWORD=&quot;M9y2512!&quot; \\</span></span>
<span class="line"><span>-e ZBX_SERVER_HOST=&quot;zabbix-server&quot; \\</span></span>
<span class="line"><span>-e PHP_TZ=&quot;Asia/Shanghai&quot; \\</span></span>
<span class="line"><span>-d zabbix/zabbix-web-nginx-mysql</span></span></code></pre></div><h2 id="访问" tabindex="-1">访问 <a class="header-anchor" href="#访问" aria-label="Permalink to &quot;访问&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://xxx.xx.xxx.xxx:8081   </span></span>
<span class="line"><span>Admin zabbix</span></span></code></pre></div><h2 id="查看服务器" tabindex="-1">查看服务器 <a class="header-anchor" href="#查看服务器" aria-label="Permalink to &quot;查看服务器&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//查看活跃的资源以及使用的内存</span></span>
<span class="line"><span>top </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按照内存排序</span></span>
<span class="line"><span>SHIFT + M </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按照CPU排序</span></span>
<span class="line"><span>SHIFT + P </span></span>
<span class="line"><span></span></span>
<span class="line"><span>//查看剩余内存</span></span>
<span class="line"><span>free -h </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//查看具体进程pid的详情</span></span>
<span class="line"><span>lsof -p  pid</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//查看docker容器内存占用</span></span>
<span class="line"><span>docker stats mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置docker容器内存</span></span>
<span class="line"><span>docker update --memory=&quot;512m&quot; --memory-swap=&quot;1g&quot;  mysql</span></span></code></pre></div>`,10)]))}const h=s(l,[["render",i]]);export{u as __pageData,h as default};
