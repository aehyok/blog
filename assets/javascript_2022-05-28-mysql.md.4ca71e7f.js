import{_ as e,o as a,c as t,b as n}from"./app.39978e14.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"linux centos mysql 安装和使用","slug":"linux-centos-mysql-安装和使用","link":"#linux-centos-mysql-安装和使用","children":[]},{"level":3,"title":"window java idea搭建","slug":"window-java-idea搭建","link":"#window-java-idea搭建","children":[]},{"level":3,"title":"maven 包管理器","slug":"maven-包管理器","link":"#maven-包管理器","children":[]},{"level":3,"title":"nginx 部署springboot java项目","slug":"nginx-部署springboot-java项目","link":"#nginx-部署springboot-java项目","children":[]},{"level":3,"title":"mysql 常用基本操作","slug":"mysql-常用基本操作","link":"#mysql-常用基本操作","children":[]},{"level":2,"title":"1、","slug":"_1、","link":"#_1、","children":[]}],"relativePath":"javascript/2022-05-28-mysql.md","lastUpdated":1710025363000}'),l={name:"javascript/2022-05-28-mysql.md"},i=n(`<h3 id="linux-centos-mysql-安装和使用" tabindex="-1">linux centos mysql 安装和使用 <a class="header-anchor" href="#linux-centos-mysql-安装和使用" aria-hidden="true">#</a></h3><ul><li><a href="https://cloud.tencent.com/developer/article/1393323" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/1393323</a></li><li><a href="https://www.cnblogs.com/yuanchao-blog/p/10679156.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/yuanchao-blog/p/10679156.html</a></li><li><a href="https://cloud.tencent.com/developer/article/1145484?from=14588" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/1145484?from=14588</a></li></ul><h3 id="window-java-idea搭建" tabindex="-1">window java idea搭建 <a class="header-anchor" href="#window-java-idea搭建" aria-hidden="true">#</a></h3><pre><code>- 30天后评估   https://www.exception.site/essay/idea-reset-eval
- java demo项目  https://www.exception.site/article/28
- 配置java环境变量 https://www.cnblogs.com/nojacky/p/9497724.html
</code></pre><h3 id="maven-包管理器" tabindex="-1">maven 包管理器 <a class="header-anchor" href="#maven-包管理器" aria-hidden="true">#</a></h3><pre><code>- 下载地址 http://maven.apache.org/download.cgi
- https://www.runoob.com/maven/maven-setup.html 安装配置
- 配置好maven可能需要重启电脑才能再idea中使用mvn -v
</code></pre><h3 id="nginx-部署springboot-java项目" tabindex="-1">nginx 部署springboot java项目 <a class="header-anchor" href="#nginx-部署springboot-java项目" aria-hidden="true">#</a></h3><pre><code>- 部署 https://blog.csdn.net/weixin_31992389/article/details/114082476    
- linux下下载java和配置环境变量 https://blog.csdn.net/sizaif/article/details/106106955
- 开启 nohup java -jar demo-0.0.1.jar &gt; log.log 2&gt;&amp;1 &amp;
- chmod +x /usr/share/nginx/html/java/startup.sh
- chmod +x /usr/local/project/startup.sh
- su - root -c &#39;/usr/share/nginx/html/java/java.sh&#39;
- 设置 java开启运行启动命令 https://www.jianshu.com/p/3f62252c9042
- https://www.cnblogs.com/miles322/p/13755212.html

- nohup 可执行程序的配置使用 https://blog.csdn.net/qq_40241957/article/details/98584207
- log4j记录日志使用 https://blog.csdn.net/weixin_35696071/article/details/114343607
</code></pre><h3 id="mysql-常用基本操作" tabindex="-1">mysql 常用基本操作 <a class="header-anchor" href="#mysql-常用基本操作" aria-hidden="true">#</a></h3><pre><code>- mysql中 information_schema数据库的作用  https://blog.csdn.net/xianjie0318/article/details/80857568
- TABLES 关于数据库中表的信息 select * from \`TABLES\` where TABLE_SCHEMA=&#39;aehyok&#39;
- COLUMNS 关于数据库中的表的字段信息   select * from \`COLUMNS\` where TABLE_NAME=&#39;user&#39;
</code></pre><h2 id="_1、" tabindex="-1">1、 <a class="header-anchor" href="#_1、" aria-hidden="true">#</a></h2>`,11),r=[i];function s(o,c,d,h,p,m){return a(),t("div",null,r)}const g=e(l,[["render",s]]);export{u as __pageData,g as default};
