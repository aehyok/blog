import{_ as s,o as a,c as n,O as l}from"./chunks/framework.ce94e18e.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-10-26-培训.md","lastUpdated":1698409314000}'),e={name:"javascript/2023-10-26-培训.md"},p=l(`<h2 id="备份文件" tabindex="-1">备份文件 <a class="header-anchor" href="#备份文件" aria-label="Permalink to &quot;备份文件&quot;">​</a></h2><ul><li>/etc/nginx/conf.d/</li></ul><h2 id="数据库直接通过开发环境生成一个dvsv3" tabindex="-1">数据库直接通过开发环境生成一个dvsv3 <a class="header-anchor" href="#数据库直接通过开发环境生成一个dvsv3" aria-label="Permalink to &quot;数据库直接通过开发环境生成一个dvsv3&quot;">​</a></h2><ul><li>1、出数据库的结构和表数据</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysqldump -hxxx.xxx.xxx.xxx -P4006  -uroot -pxxxxxxxx dvsv3&gt;/usr/local/sunlight/sql/dvsv3.sql;</span></span></code></pre></div><ul><li>2、在新服务器上线创建数据库 注意字符集 utf8mb4 注意排序规则 utf8mb4_general_ci</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CREATE DATABASE your_database_name</span></span>
<span class="line"><span style="color:#A6ACCD;">CHARACTER SET utf8mb4</span></span>
<span class="line"><span style="color:#A6ACCD;">COLLATE utf8mb4_general_ci;</span></span></code></pre></div><ul><li>3、然后导入到新数据库</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mysql -hlocalhost -P4006 -uroot -pxxxxxxxxx dvsv3&lt;/usr/local/sunlight/sql/dvsv3.sql</span></span></code></pre></div><h2 id="修改数据库连接" tabindex="-1">修改数据库连接 <a class="header-anchor" href="#修改数据库连接" aria-label="Permalink to &quot;修改数据库连接&quot;">​</a></h2><ul><li>/usr/local/sunlight/dvsv3/etc</li></ul><h2 id="修改redis连接" tabindex="-1">修改redis连接 <a class="header-anchor" href="#修改redis连接" aria-label="Permalink to &quot;修改redis连接&quot;">​</a></h2><h2 id="nginx配置文件" tabindex="-1">nginx配置文件 <a class="header-anchor" href="#nginx配置文件" aria-label="Permalink to &quot;nginx配置文件&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/etc/nginx/conf.d</span></span></code></pre></div><h2 id="系统服务配置文件" tabindex="-1">系统服务配置文件 <a class="header-anchor" href="#系统服务配置文件" aria-label="Permalink to &quot;系统服务配置文件&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/usr/lib/systemd/system</span></span></code></pre></div><h2 id="rabbitmq" tabindex="-1">rabbitmq <a class="header-anchor" href="#rabbitmq" aria-label="Permalink to &quot;rabbitmq&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 配置文件路径</span></span>
<span class="line"><span style="color:#A6ACCD;">  /etc/rabbitmq/rabbitmq.config</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // RabbitMQ 管理页面 用户名和密码</span></span>
<span class="line"><span style="color:#A6ACCD;">  http://localhost:15675/#/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  // 通过命令可以查看用户</span></span>
<span class="line"><span style="color:#A6ACCD;">  sudo rabbitmqctl list_users</span></span>
<span class="line"><span style="color:#A6ACCD;">  sun sunlight2010</span></span></code></pre></div><h2 id="mysql查看死锁-解除死锁" tabindex="-1">mysql查看死锁 解除死锁 <a class="header-anchor" href="#mysql查看死锁-解除死锁" aria-label="Permalink to &quot;mysql查看死锁 解除死锁&quot;">​</a></h2><ul><li><p><a href="https://blog.csdn.net/wufagang/article/details/125554792" target="_blank" rel="noreferrer">https://blog.csdn.net/wufagang/article/details/125554792</a></p></li><li><p>查看死锁</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1、查看正在进行中的事务</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM information_schema.INNODB_TRX</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2、查看正在锁的事务</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM INFORMATION_SCHEMA.INNODB_LOCKS;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3、查看等待锁的事务</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM INFORMATION_SCHEMA.INNODB_LOCK_WAITS;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">4、查询是否锁表</span></span>
<span class="line"><span style="color:#A6ACCD;">SHOW OPEN TABLES where In_use &gt; 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">在发生死锁时，这几种方式都可以查询到和当前死锁相关的信息。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5、查看最近死锁的日志</span></span>
<span class="line"><span style="color:#A6ACCD;">  show engine innodb status</span></span></code></pre></div><ul><li>解除死锁</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">show processlist;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM information_schema.INNODB_TRX;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//查询出来后 杀死进程</span></span>
<span class="line"><span style="color:#A6ACCD;">kill id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 杀完再来验证一下</span></span>
<span class="line"><span style="color:#A6ACCD;">SHOW OPEN TABLES where In_use &gt; 0;</span></span></code></pre></div>`,23),t=[p];function o(i,c,r,C,d,A){return a(),n("div",null,t)}const y=s(e,[["render",o]]);export{u as __pageData,y as default};
