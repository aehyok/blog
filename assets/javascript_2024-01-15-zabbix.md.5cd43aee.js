import{_ as a,o as s,c as n,b as e}from"./app.232525a4.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"zabbix docker","slug":"zabbix-docker","link":"#zabbix-docker","children":[]},{"level":2,"title":"zabbix 后端","slug":"zabbix-后端","link":"#zabbix-后端","children":[]},{"level":2,"title":"zabbix 前端","slug":"zabbix-前端","link":"#zabbix-前端","children":[]},{"level":2,"title":"访问","slug":"访问","link":"#访问","children":[]},{"level":2,"title":"查看服务器","slug":"查看服务器","link":"#查看服务器","children":[]}],"relativePath":"javascript/2024-01-15-zabbix.md","lastUpdated":1708478539000}'),l={name:"javascript/2024-01-15-zabbix.md"},p=e(`<h2 id="zabbix-docker" tabindex="-1">zabbix docker <a class="header-anchor" href="#zabbix-docker" aria-hidden="true">#</a></h2><ul><li>参考文章 <ul><li><a href="https://mp.weixin.qq.com/s/yx-mm2Am_LIZ2AvHw21mUA" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/yx-mm2Am_LIZ2AvHw21mUA</a></li></ul></li><li>官网文档 <ul><li><a href="https://www.zabbix.com/documentation/current/zh/manual/config/hosts" target="_blank" rel="noreferrer">https://www.zabbix.com/documentation/current/zh/manual/config/hosts</a></li></ul></li></ul><h2 id="zabbix-后端" tabindex="-1">zabbix 后端 <a class="header-anchor" href="#zabbix-后端" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">docker run \\</span></span>
<span class="line"><span style="color:#babed8;">--restart always -itd \\</span></span>
<span class="line"><span style="color:#babed8;">--name zabbix-server \\</span></span>
<span class="line"><span style="color:#babed8;">--link mysql \\               #//--link</span></span>
<span class="line"><span style="color:#babed8;">-p 10051:10051 \\                      #//docker inspect看下暴露的端口 docker inspect zabbix/zabbix-server-mysql  </span></span>
<span class="line"><span style="color:#babed8;">-e DB_SERVER_HOST=&quot;mysql&quot; \\  #//直接写mysql容器名字   -e设置环境变量</span></span>
<span class="line"><span style="color:#babed8;">-e MYSQL_USER=&quot;root&quot; \\</span></span>
<span class="line"><span style="color:#babed8;">-e MYSQL_PASSWORD=&quot;M9y2512!&quot; \\</span></span>
<span class="line"><span style="color:#babed8;">-d zabbix/zabbix-server-mysql   #//要使用那个镜像进行创建容器</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker run \\</span></span>
<span class="line"><span style="color:#babed8;">--restart always -itd \\</span></span>
<span class="line"><span style="color:#babed8;">--name zabbix-server \\</span></span>
<span class="line"><span style="color:#babed8;">--link mysql \\</span></span>
<span class="line"><span style="color:#babed8;">-p 10051:10051 \\</span></span>
<span class="line"><span style="color:#babed8;">-e DB_SERVER_HOST=&quot;mysql&quot; \\</span></span>
<span class="line"><span style="color:#babed8;">-e MYSQL_USER=&quot;root&quot; \\</span></span>
<span class="line"><span style="color:#babed8;">-e MYSQL_PASSWORD=&quot;M9y2512!&quot; \\</span></span>
<span class="line"><span style="color:#babed8;">-d zabbix/zabbix-server-mysql</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="zabbix-前端" tabindex="-1">zabbix 前端 <a class="header-anchor" href="#zabbix-前端" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">docker run \\</span></span>
<span class="line"><span style="color:#babed8;">--restart always -itd \\</span></span>
<span class="line"><span style="color:#babed8;">--name zabbix-web \\</span></span>
<span class="line"><span style="color:#babed8;">--link mysql \\</span></span>
<span class="line"><span style="color:#babed8;">--link zabbix-server \\</span></span>
<span class="line"><span style="color:#babed8;">-p 8081:8080 \\</span></span>
<span class="line"><span style="color:#babed8;">-p 8444:8443 \\</span></span>
<span class="line"><span style="color:#babed8;">-e DB_SERVER_HOST=&quot;mysql&quot; \\</span></span>
<span class="line"><span style="color:#babed8;">-e MYSQL_USER=&quot;root&quot; \\</span></span>
<span class="line"><span style="color:#babed8;">-e MYSQL_PASSWORD=&quot;M9y2512!&quot; \\</span></span>
<span class="line"><span style="color:#babed8;">-e ZBX_SERVER_HOST=&quot;zabbix-server&quot; \\</span></span>
<span class="line"><span style="color:#babed8;">-e PHP_TZ=&quot;Asia/Shanghai&quot; \\</span></span>
<span class="line"><span style="color:#babed8;">-d zabbix/zabbix-web-nginx-mysql</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="访问" tabindex="-1">访问 <a class="header-anchor" href="#访问" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">http://xxx.xx.xxx.xxx:8081   </span></span>
<span class="line"><span style="color:#babed8;">Admin zabbix</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="查看服务器" tabindex="-1">查看服务器 <a class="header-anchor" href="#查看服务器" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">//查看活跃的资源以及使用的内存</span></span>
<span class="line"><span style="color:#babed8;">top </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 按照内存排序</span></span>
<span class="line"><span style="color:#babed8;">SHIFT + M </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 按照CPU排序</span></span>
<span class="line"><span style="color:#babed8;">SHIFT + P </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//查看剩余内存</span></span>
<span class="line"><span style="color:#babed8;">free -h </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//查看具体进程pid的详情</span></span>
<span class="line"><span style="color:#babed8;">lsof -p  pid</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//查看docker容器内存占用</span></span>
<span class="line"><span style="color:#babed8;">docker stats mysql</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 设置docker容器内存</span></span>
<span class="line"><span style="color:#babed8;">docker update --memory=&quot;512m&quot; --memory-swap=&quot;1g&quot;  mysql</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,10),o=[p];function t(b,c,i,r,d,y){return s(),n("div",null,o)}const x=a(l,[["render",t]]);export{h as __pageData,x as default};
