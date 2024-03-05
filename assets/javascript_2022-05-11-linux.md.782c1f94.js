import{_ as s,o as a,c as n,b as l}from"./app.39978e14.js";const B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"netstat 查看端口","slug":"netstat-查看端口","link":"#netstat-查看端口","children":[]},{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"拷贝文件(copy)","slug":"拷贝文件-copy","link":"#拷贝文件-copy","children":[]},{"level":2,"title":"移动或更改文件或文件夹（move）","slug":"移动或更改文件或文件夹-move","link":"#移动或更改文件或文件夹-move","children":[]},{"level":2,"title":"查看某个文件","slug":"查看某个文件","link":"#查看某个文件","children":[]},{"level":2,"title":"创建一个目录","slug":"创建一个目录","link":"#创建一个目录","children":[]},{"level":2,"title":"创建文件","slug":"创建文件","link":"#创建文件","children":[]},{"level":2,"title":"删除文件和文件夹","slug":"删除文件和文件夹","link":"#删除文件和文件夹","children":[]}],"relativePath":"javascript/2022-05-11-linux.md","lastUpdated":1709637475000}'),p={name:"javascript/2022-05-11-linux.md"},e=l(`<ul><li><p>1、window 版 nginx 版本下载地址</p><ul><li><a href="http://nginx.org/en/download.html" target="_blank" rel="noreferrer">http://nginx.org/en/download.html</a></li></ul></li><li><p>2、nginx 学习视频</p><ul><li><a href="https://juejin.cn/post/6844903701459501070#heading-12" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903701459501070#heading-12</a></li></ul></li><li><p>3、centos 下安装 nginx||参考链接 <a href="https://juejin.cn/post/6844903701459501070" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903701459501070</a></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 检查yum源是否存在</span></span>
<span class="line"><span style="color:#BABED8;">  yum list </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> grep nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 我用的腾讯云的centos，yum源是存在的，直接安装</span></span>
<span class="line"><span style="color:#BABED8;">  yum install nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 执行完成后，验证版本号，确认安装成功</span></span>
<span class="line"><span style="color:#BABED8;">  nginx </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 查看nginx的安装目录，查看到所有安装位置</span></span>
<span class="line"><span style="color:#BABED8;">  rpm </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">ql nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 开启nginx服务，一个单词即可</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// (如果一切就绪，默认80端口可以浏览器访问出现初始页面)</span></span>
<span class="line"><span style="color:#BABED8;">  nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 停止nginx 服务</span></span>
<span class="line"><span style="color:#BABED8;">  nginx  </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">s stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// systemctl开启、关闭、重启（常用方式）</span></span>
<span class="line"><span style="color:#BABED8;">  systemctl start nginx</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">service</span></span>
<span class="line"><span style="color:#BABED8;">  systemctl stop nginx</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">service</span></span>
<span class="line"><span style="color:#BABED8;">  systemctl restart nginx</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//修改nginx配置文件等，重新载入</span></span>
<span class="line"><span style="color:#BABED8;">  nginx </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">s reload</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>查看 nginx 总配置文件</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 定位到指定目录，然后打开nginx.conf</span></span>
<span class="line"><span style="color:#BABED8;">  cd </span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">nginx</span></span>
<span class="line"><span style="color:#BABED8;">  vim nginx</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 文件内容如下</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  #运行用户，默认即是nginx，可以不进行设置</span></span>
<span class="line"><span style="color:#BABED8;">  user  nginx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  #Nginx进程，一般设置为和CPU核数一样</span></span>
<span class="line"><span style="color:#BABED8;">  worker_processes  auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  #错误日志存放目录</span></span>
<span class="line"><span style="color:#BABED8;">  error_log  </span><span style="color:#89DDFF;">/</span><span style="color:#C792EA;">var</span><span style="color:#BABED8;">/log/nginx/error.log warn</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  #进程pid存放位置</span></span>
<span class="line"><span style="color:#BABED8;">  pid        </span><span style="color:#89DDFF;">/</span><span style="color:#C792EA;">var</span><span style="color:#BABED8;">/run/nginx.pid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  events </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">worker_connections</span><span style="color:#F07178;">  </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> # </span><span style="color:#BABED8;">单个后台进程的最大并发数</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  http </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">include</span><span style="color:#F07178;">       </span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">mime</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">types</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">   #</span><span style="color:#BABED8;">文件扩展名与类型映射表</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">default_type</span><span style="color:#F07178;">  </span><span style="color:#BABED8;">application</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">octet</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">stream</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  #</span><span style="color:#BABED8;">默认文件类型</span></span>
<span class="line"><span style="color:#F07178;">      #</span><span style="color:#BABED8;">设置日志模式</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">log_format</span><span style="color:#F07178;">  </span><span style="color:#BABED8;">main</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$remote_addr - $remote_user [$time_local] &quot;$request&quot; </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$status $body_bytes_sent &quot;$http_referer&quot; </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">access_log</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">/</span><span style="color:#C792EA;">var</span><span style="color:#F07178;">/</span><span style="color:#BABED8;">log</span><span style="color:#F07178;">/nginx/access.log  main</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">   #</span><span style="color:#BABED8;">nginx访问日志存放位置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">sendfile</span><span style="color:#F07178;">        </span><span style="color:#BABED8;">on</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">   #</span><span style="color:#BABED8;">开启高效传输模式</span></span>
<span class="line"><span style="color:#F07178;">      #</span><span style="color:#BABED8;">tcp_nopush</span><span style="color:#F07178;">     </span><span style="color:#BABED8;">on</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">    #</span><span style="color:#BABED8;">减少网络报文段的数量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">keepalive_timeout</span><span style="color:#F07178;">  </span><span style="color:#F78C6C;">65</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  #</span><span style="color:#BABED8;">保持连接的时间</span><span style="color:#F07178;">，</span><span style="color:#BABED8;">也叫超时时间</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      #</span><span style="color:#BABED8;">gzip</span><span style="color:#F07178;">  </span><span style="color:#BABED8;">on</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  #</span><span style="color:#BABED8;">开启gzip压缩</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">include</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">conf</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">d</span><span style="color:#676E95;font-style:italic;">/*.conf; #包含的子配置项位置和文件</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></li><li><p>4、centos 下配置 xftp|| 参考链接 <a href="https://www.jb51.net/article/127411.htm" target="_blank" rel="noreferrer">https://www.jb51.net/article/127411.htm</a></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 查看是否已经安装ftp软件</span></span>
<span class="line"><span style="color:#BABED8;">  which vsftpd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 安装ftp模块</span></span>
<span class="line"><span style="color:#BABED8;">  yum </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">y install vsftpd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 开启、关闭、重启</span></span>
<span class="line"><span style="color:#BABED8;">  systemctl start vsftpd</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">service</span></span>
<span class="line"><span style="color:#BABED8;">  systemctl stop vsftpd</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">service</span></span>
<span class="line"><span style="color:#BABED8;">  systemctl restart vsftpd</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 默认为21端口，如果开启会有21端口的记录</span></span>
<span class="line"><span style="color:#BABED8;">  netstat </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">an </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> grep </span><span style="color:#F78C6C;">21</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 需要开启root用户的ftp权限要修改以下两个文件</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 先定位到指定目录</span></span>
<span class="line"><span style="color:#BABED8;">  cd </span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">vsftpd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 将ftpusers和user_list中的root用户进行注释</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 然后重启vsftpd服务</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 最后使用Xftp客户端进行链接，发现可以登录查看文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// TODO 后期将单独建立用户以及控制指定文件夹上传权限</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></li><li><p>5、文件夹处理</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 创建文件</span></span>
<span class="line"><span style="color:#BABED8;">  touch zx</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 创建目录</span></span>
<span class="line"><span style="color:#BABED8;">  mkdir zx</span></span>
<span class="line"></span></code></pre></div></li><li><p>6、查看磁盘、CPU、内存命令</p></li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 磁盘</span></span>
<span class="line"><span style="color:#BABED8;"> df </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> hl</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// CPU</span></span>
<span class="line"><span style="color:#BABED8;"> cat </span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">proc</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">cpuinfo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 物理CPU个数</span></span>
<span class="line"><span style="color:#BABED8;"> cat </span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">proc</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">cpuinfo </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> grep </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">physical id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> sort </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> uniq </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> wc </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">l</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 每个物理CPU核数</span></span>
<span class="line"><span style="color:#BABED8;"> cat </span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">proc</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">cpuinfo </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> grep </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cpu cores</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> uniq</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 逻辑 CPU = 物理 CPU 个数 × 每颗核数,如果与上面计算不一致的话，则表示服务器的CPU支持超线程技术。简单来说，它可使处理器中的 1 颗内核如 2 颗内核那样在操作系统中发挥作用。这样一来，操作系统可使用的执行资源扩大了一倍，大幅提高了系统的整体性能，此时逻辑 CPU = 物理 CPU 个数 × 每颗核数 × 2。</span></span>
<span class="line"><span style="color:#BABED8;"> cat </span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">proc</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">cpuinfo </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> grep </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">processor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> wc </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">l</span></span>
<span class="line"><span style="color:#BABED8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">//查看内存信息</span></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 1. 查看内存使用情况以及详细信息</span></span>
<span class="line"><span style="color:#BABED8;"> cat </span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">proc</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">meminfo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 2. 查看内存总量</span></span>
<span class="line"><span style="color:#BABED8;"> grep MemTotal </span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">proc</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">meminfo   </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 3. 查看空闲内存总量</span></span>
<span class="line"><span style="color:#BABED8;"> grep MemFree </span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">proc</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">meminfo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">//4. 查看内存槽及内存条</span></span>
<span class="line"><span style="color:#BABED8;"> sudo dmidecode </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">t memory</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">//5. 查看内存的插槽数,已经使用多少插槽.每条内存多大</span></span>
<span class="line"><span style="color:#BABED8;"> sudo dmidecode </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">t memory </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> grep Size</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="netstat-查看端口" tabindex="-1">netstat 查看端口 <a class="header-anchor" href="#netstat-查看端口" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">//列出所有端口情况，并根据findstr进行查询具体的端口使用情况</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">netstat -ano|findstr 3307</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li><a href="https://juejin.cn/post/6844903605296726030" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903605296726030</a></li></ul><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 跳转到当前登录用户的主目录</span></span>
<span class="line"><span style="color:#babed8;">cd ~ </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 跳转到根目录</span></span>
<span class="line"><span style="color:#babed8;">cd /</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 跳转到上一级目录</span></span>
<span class="line"><span style="color:#babed8;">cd ..</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 跳转到上一个工作目录(你操作的上一个目录)</span></span>
<span class="line"><span style="color:#babed8;">cd -</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="拷贝文件-copy" tabindex="-1">拷贝文件(copy) <a class="header-anchor" href="#拷贝文件-copy" aria-hidden="true">#</a></h2><p>拷贝文件 aehyok-hard到 /usr/local/qiankun 目录下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">cp aehyok-hard /usr/local/qiankun</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>当前目录下备份一个文件的话，或者叫复制一个文件的话</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">cp aehyok aehyok-bak</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>拷贝demo 目录下的所有文件到 /usr/local/qiankun 目录下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">cp -R  demo /usr/local/qiankun/demo</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>备份当前目录下的一个文件夹，或者叫复制当前目录下的一个文件夹</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">cp - R demo /demo-bak</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="移动或更改文件或文件夹-move" tabindex="-1">移动或更改文件或文件夹（move） <a class="header-anchor" href="#移动或更改文件或文件夹-move" aria-hidden="true">#</a></h2><p>将当前目录下的文件名(文件夹名)修改为aehyok-bak</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">mv aehyok aehyok-bak</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>将当前目录下的aehyok-bake文件移动到~/demo-bak文件夹下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">mv aehyok-bake ~/demo_bak</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="查看某个文件" tabindex="-1">查看某个文件 <a class="header-anchor" href="#查看某个文件" aria-hidden="true">#</a></h2><p>查看当前目录下的aehyok文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">cat aehyok</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>查看当前目录下的aheyok文件，并添加行号(以下两个命令都可以添加行号)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">cat aehyok --number</span></span>
<span class="line"><span style="color:#babed8;">cat -b aehyok</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>一起查看多个文件(同样可以添加行号)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">cat aehyok aehyok-hard</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>将两个文件一起写入到新文件(如果原文件存在会覆盖)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">cat aehyok aehyok-hard &gt; aehyok-new</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>将两个文件一起追加到新文件中</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">cat aehyok aehyok-hard&gt;&gt; aehyok-new</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="创建一个目录" tabindex="-1">创建一个目录 <a class="header-anchor" href="#创建一个目录" aria-hidden="true">#</a></h2><p>创建单个目录</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">mkdir aehyok</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>创建多级目录</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 如果两个目录都不存在则创建不了，需要使用-p命令</span></span>
<span class="line"><span style="color:#babed8;">mkdir aehyok1/aehyok2</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">mkdir -p aehyok1/aehyok2</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>// 创建多级目录并查看创建过程</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">mkdir -pv aehyok1/aehyok2</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="创建文件" tabindex="-1">创建文件 <a class="header-anchor" href="#创建文件" aria-hidden="true">#</a></h2><p>创建一个文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">touch aehyok.txt</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>同时创建两个文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">touch aehyok2.txt aehyok1.txt</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="删除文件和文件夹" tabindex="-1">删除文件和文件夹 <a class="header-anchor" href="#删除文件和文件夹" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">- -f,--force 不提醒直接删除</span></span>
<span class="line"><span style="color:#babed8;">- -i,--interactive 交互式删除</span></span>
<span class="line"><span style="color:#babed8;">- -r,-R --recursive 递归删除子目录</span></span>
<span class="line"><span style="color:#babed8;">- -v,--verbose 详细显示进行的步骤</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>删除一个指定的文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">rm aehyok.txt</span></span>
<span class="line"><span style="color:#babed8;">rm -r aehyok.txt</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>删除aehyok目录下的所有文件和目录，并保留aehyok</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">rm -rf aehyok</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>删除当前目录下的txt文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 删除前会询问</span></span>
<span class="line"><span style="color:#babed8;">rm -i *.txt</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 直接删除</span></span>
<span class="line"><span style="color:#babed8;">rm -if *.txt</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>删除以aehyok开头的文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">rm -- aehyok</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,54),o=[e];function t(c,r,i,y,D,d){return a(),n("div",null,o)}const b=s(p,[["render",t]]);export{B as __pageData,b as default};
