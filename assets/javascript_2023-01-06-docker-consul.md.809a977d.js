import{_ as s,o as n,c as a,N as l}from"./chunks/framework.8ca1de62.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-01-06-docker-consul.md","lastUpdated":1679307950000}'),e={name:"javascript/2023-01-06-docker-consul.md"},o=l(`<h2 id="consul-部署" tabindex="-1">consul 部署 <a class="header-anchor" href="#consul-部署" aria-label="Permalink to &quot;consul 部署&quot;">​</a></h2><ul><li>consul集群需要至少两个consul server节点</li><li><a href="https://www.cnblogs.com/edisonchou/p/consul_cluster_based_on_docker_introduction.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/edisonchou/p/consul_cluster_based_on_docker_introduction.html</a></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker run -d -p 8510:8500 --restart=always -v /usr/local/aehyok/consul/data/server1:/consul/data -v /usr/local/aehyok/consul/conf/server1:/consul/config -e CONSUL_BIND_INTERFACE=&#39;eth0&#39; --privileged=true --name=consul_server_1 consul agent -server -bootstrap-expect=3 -ui -node=consul_server_1 -client=&#39;0.0.0.0&#39; -data-dir /consul/data -config-dir /consul/config -datacenter=aehyok;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">JOIN_IP=&quot;$(docker inspect -f &#39;{{.NetworkSettings.IPAddress}}&#39; consul_server_1)&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d -p 8520:8500 --restart=always -v /usr/local/aehyok/consul/data/server2:/consul/data -v /usr/local/aehyok/consul/conf/server2:/consul/config -e CONSUL_BIND_INTERFACE=&#39;eth0&#39; --privileged=true --name=consul_server_2 consul agent -server -ui -node=consul_server_2 -client=&#39;0.0.0.0&#39; -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config -join=$JOIN_IP;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d -p 8530:8500 --restart=always -v /usr/local/aehyok/consul/data/server3:/consul/data -v /usr/local/aehyok/consul/conf/server3:/consul/config -e CONSUL_BIND_INTERFACE=&#39;eth0&#39; --privileged=true --name=consul_server_3 consul agent -server -ui -node=consul_server_3 -client=&#39;0.0.0.0&#39; -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config -join=$JOIN_IP;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d -p 8540:8500 --restart=always -v /usr/local/aehyok/consul/data/client1:/consul/data -v /usr/local/aehyok/consul/conf/client1:/consul/config -e CONSUL_BIND_INTERFACE=&#39;eth0&#39;  --privileged=true  --name=consul_client_1 consul agent -node=consul_client_1 -join=$JOIN_IP -client=&#39;0.0.0.0&#39; -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d -p 8550:8500 --restart=always -v /usr/local/aehyok/consul/data/client2:/consul/data -v /usr/local/aehyok/consul/conf/client2:/consul/config -e CONSUL_BIND_INTERFACE=&#39;eth0&#39;  --privileged=true  --name=consul_client_2 consul agent -node=consul_client_2 -join=$JOIN_IP -client=&#39;0.0.0.0&#39; -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">参数说明：</span></span>
<span class="line"><span style="color:#A6ACCD;">     -server : 定义agent运行在server模式</span></span>
<span class="line"><span style="color:#A6ACCD;">     -bootstrap-expect :在一个datacenter中期望提供的server节点数目,当该值提供的时候,consul一直等到达到指定sever数目的时候才会引导整个集群,该标记不能和bootstrap共用</span></span>
<span class="line"><span style="color:#A6ACCD;">     -data-dir:提供一个目录用来存放agent的状态,所有的agent允许都需要该目录,该目录必须是稳定的,系统重启后都继续存在</span></span>
<span class="line"><span style="color:#A6ACCD;">     -node:节点在集群中的名称,在一个集群中必须是唯一的,默认是该节点的主机名</span></span>
<span class="line"><span style="color:#A6ACCD;">     -bind:：指明节点的IP地址，一般是0.0.0.0或者云服务器内网地址，不能写阿里云外网地址。这是Consul侦听的地址，它必须可以被集群中的所有其他节点访问。虽然绑定地址不是绝对必要的，但最好提供一个。</span></span>
<span class="line"><span style="color:#A6ACCD;">     -ui: 启动web界面</span></span>
<span class="line"><span style="color:#A6ACCD;">     -config-dir::配置文件目录,里面所有以.json结尾的文件都会被加载</span></span>
<span class="line"><span style="color:#A6ACCD;">     -rejoin:使consul忽略先前的离开,在再次启动后仍旧尝试加入集群中。</span></span>
<span class="line"><span style="color:#A6ACCD;">     -client:consul服务侦听地址,这个地址提供HTTP、DNS、RPC等服务,默认是127.0.0.1所以不对外提供服务,如果你要对外提供服务改成0.0.0.0 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">version: &#39;3&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">services:</span></span>
<span class="line"><span style="color:#A6ACCD;">  consul_server_1:</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: consul</span></span>
<span class="line"><span style="color:#A6ACCD;">    container_name: consul_server_1</span></span>
<span class="line"><span style="color:#A6ACCD;">    command: agent -server -bootstrap-expect=3 -node=consul_server_1 -bind=0.0.0.0  -client=0.0.0.0 -datacenter=aehyok -ui -data-dir /consul/data -config-dir /consul/config</span></span>
<span class="line"><span style="color:#A6ACCD;">    environment:</span></span>
<span class="line"><span style="color:#A6ACCD;">      CONSUL_BIND_INTERFACE: &#39;eth0&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - /usr/local/aehyok/consul/data/server1:/consul/data</span></span>
<span class="line"><span style="color:#A6ACCD;">      - /usr/local/aehyok/consul/conf/server1:/consul/config</span></span>
<span class="line"><span style="color:#A6ACCD;">    ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 8510:8500</span></span>
<span class="line"><span style="color:#A6ACCD;">    restart: always</span></span>
<span class="line"><span style="color:#A6ACCD;">    privileged: true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  consul_server_2:</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: consul</span></span>
<span class="line"><span style="color:#A6ACCD;">    container_name: consul_server_2</span></span>
<span class="line"><span style="color:#A6ACCD;">    command: agent -server -bootstrap-expect=3 -retry-join=consul_server_1 -node=consul_server_2 -bind=0.0.0.0  -client=0.0.0.0 -datacenter=aehyok -ui -data-dir /consul/data -config-dir /consul/config</span></span>
<span class="line"><span style="color:#A6ACCD;">    environment:</span></span>
<span class="line"><span style="color:#A6ACCD;">      CONSUL_BIND_INTERFACE: &#39;eth0&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - /usr/local/aehyok/consul/data/server2:/consul/data</span></span>
<span class="line"><span style="color:#A6ACCD;">      - /usr/local/aehyok/consul/conf/server2:/consul/config  </span></span>
<span class="line"><span style="color:#A6ACCD;">    ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 8520:8500</span></span>
<span class="line"><span style="color:#A6ACCD;">    depends_on:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - consul_server_1</span></span>
<span class="line"><span style="color:#A6ACCD;">    restart: always</span></span>
<span class="line"><span style="color:#A6ACCD;">    privileged: true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  consul_server_3:</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: consul</span></span>
<span class="line"><span style="color:#A6ACCD;">    container_name: consul_server_3</span></span>
<span class="line"><span style="color:#A6ACCD;">    command: agent -server -bootstrap-expect=3 -retry-join=consul_server_1 -node=consul_server_3  -bind=0.0.0.0 -client=0.0.0.0 -datacenter=aehyok -ui -data-dir /consul/data -config-dir /consul/config</span></span>
<span class="line"><span style="color:#A6ACCD;">    environment:</span></span>
<span class="line"><span style="color:#A6ACCD;">      CONSUL_BIND_INTERFACE: &#39;eth0&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - /usr/local/aehyok/consul/data/server3:/consul/data</span></span>
<span class="line"><span style="color:#A6ACCD;">      - /usr/local/aehyok/consul/conf/server3:/consul/config </span></span>
<span class="line"><span style="color:#A6ACCD;">    ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 8530:8500</span></span>
<span class="line"><span style="color:#A6ACCD;">    depends_on:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - consul_server_1</span></span>
<span class="line"><span style="color:#A6ACCD;">    restart: always</span></span>
<span class="line"><span style="color:#A6ACCD;">    privileged: true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  consul_client_1:</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: consul</span></span>
<span class="line"><span style="color:#A6ACCD;">    container_name: consul_client_1</span></span>
<span class="line"><span style="color:#A6ACCD;">    command: agent -retry-join=consul_server_1 -node=consul_client_1 -bind=0.0.0.0  -client=0.0.0.0 -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config</span></span>
<span class="line"><span style="color:#A6ACCD;">    environment:</span></span>
<span class="line"><span style="color:#A6ACCD;">      CONSUL_BIND_INTERFACE: &#39;eth0&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">    - /usr/local/aehyok/consul/data/server1:/consul/data</span></span>
<span class="line"><span style="color:#A6ACCD;">    - /usr/local/aehyok/consul/conf/server1:/consul/config    </span></span>
<span class="line"><span style="color:#A6ACCD;">    ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 8540:8500</span></span>
<span class="line"><span style="color:#A6ACCD;">    depends_on:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - consul_server_2</span></span>
<span class="line"><span style="color:#A6ACCD;">      - consul_server_3</span></span>
<span class="line"><span style="color:#A6ACCD;">    restart: always</span></span>
<span class="line"><span style="color:#A6ACCD;">    privileged: true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  fabio:</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: &quot;fabiolb/fabio&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    privileged: true</span></span>
<span class="line"><span style="color:#A6ACCD;">    ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &quot;9998:9998&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &quot;9999:9999&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - ./fabio.properties:/etc/fabio/fabio.properties</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>docker exec consul_server_1 consul operator raft list-peers</p><p>docker exec consul_server_11 consul operator raft list-peers</p><p>server 有三个，client有一个</p><h2 id="安装nginx" tabindex="-1">安装nginx <a class="header-anchor" href="#安装nginx" aria-label="Permalink to &quot;安装nginx&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">apt-get install nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>nginx config</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> server {</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen 8500;</span></span>
<span class="line"><span style="color:#A6ACCD;">  location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">  proxy_pass http://xdpconsul;</span></span>
<span class="line"><span style="color:#A6ACCD;">  proxy_redirect default;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  upstream xdpconsul {</span></span>
<span class="line"><span style="color:#A6ACCD;">  server 127.0.0.1:8510 weight=2;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server 127.0.0.1:8520 weight=1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server 127.0.0.1:8530 weight=1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="dotnet-单文件部署" tabindex="-1">dotnet 单文件部署 <a class="header-anchor" href="#dotnet-单文件部署" aria-label="Permalink to &quot;dotnet 单文件部署&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/ZaraNet/p/11790645.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/ZaraNet/p/11790645.html</a></li></ul><h2 id="安装dotnet-6-0-sdk" tabindex="-1">安装dotnet 6.0 sdk <a class="header-anchor" href="#安装dotnet-6-0-sdk" aria-label="Permalink to &quot;安装dotnet 6.0 sdk&quot;">​</a></h2><ul><li><a href="https://learn.microsoft.com/zh-cn/dotnet/core/install/linux-snap" target="_blank" rel="noreferrer">https://learn.microsoft.com/zh-cn/dotnet/core/install/linux-snap</a></li></ul><h2 id="dotnet-consul-demo" tabindex="-1">dotnet consul demo <a class="header-anchor" href="#dotnet-consul-demo" aria-label="Permalink to &quot;dotnet consul demo&quot;">​</a></h2><ul><li><p><a href="https://www.cnblogs.com/ansheng/p/16035028.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/ansheng/p/16035028.html</a></p></li><li><p><a href="https://www.cnblogs.com/wl-blog/p/15771111.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/wl-blog/p/15771111.html</a></p></li><li><p><a href="https://blog.csdn.net/wulex/article/details/122574103" target="_blank" rel="noreferrer">https://blog.csdn.net/wulex/article/details/122574103</a></p></li></ul><h2 id="dotnet-测试服务" tabindex="-1">dotnet 测试服务 <a class="header-anchor" href="#dotnet-测试服务" aria-label="Permalink to &quot;dotnet 测试服务&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dotnet OcelotGateway.dll --urls=&quot;http://*:5003&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">dotnet OcelotGateway.dll --urls=&quot;http://*:5030&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">dotnet OcelotGateway.dll --urls=&quot;http://*:5300&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">dotnet StudentService.dll --urls=&quot;http://*:5001&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">dotnet StudentService.dll --urls=&quot;http://*:5002&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">dotnet TeacherService.dll --urls=&quot;http://*:5004&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">dotnet TeacherService.dll --urls=&quot;http://*:5005&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="dotnet项目中引用consul" tabindex="-1">dotnet项目中引用consul <a class="header-anchor" href="#dotnet项目中引用consul" aria-label="Permalink to &quot;dotnet项目中引用consul&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/rainingnight/p/servicediscovery-consul-in-asp-net-core.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/rainingnight/p/servicediscovery-consul-in-asp-net-core.html</a></li><li>fabio <ul><li><a href="https://github.com/fabiolb/fabio" target="_blank" rel="noreferrer">https://github.com/fabiolb/fabio</a></li><li>ubuntu <a href="https://www.cnblogs.com/xishuai/p/macos-and-ubuntu-install-fabio.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/xishuai/p/macos-and-ubuntu-install-fabio.html</a></li><li>docker fabio <a href="https://www.cnblogs.com/weirun/p/16466960.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/weirun/p/16466960.html</a></li></ul></li></ul><h2 id="consul-client-配置微服务接口配置-、邮件预警发送" tabindex="-1">consul client 配置微服务接口配置 、邮件预警发送 <a class="header-anchor" href="#consul-client-配置微服务接口配置-、邮件预警发送" aria-label="Permalink to &quot;consul client 配置微服务接口配置 、邮件预警发送&quot;">​</a></h2><ul><li>json文件 <a href="https://www.cnblogs.com/edisonchou/p/9148034.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/edisonchou/p/9148034.html</a></li></ul><h2 id="ocelot和consul-架构图" tabindex="-1">ocelot和consul 架构图 <a class="header-anchor" href="#ocelot和consul-架构图" aria-label="Permalink to &quot;ocelot和consul 架构图&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/PatrickLiu/p/14073192.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/PatrickLiu/p/14073192.html</a></li><li><a href="https://www.cnblogs.com/cheyunhua/p/15718331.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/cheyunhua/p/15718331.html</a></li></ul><h2 id="consul官网" tabindex="-1">consul官网 <a class="header-anchor" href="#consul官网" aria-label="Permalink to &quot;consul官网&quot;">​</a></h2><ul><li><a href="https://developer.hashicorp.com/consul/docs/intro" target="_blank" rel="noreferrer">https://developer.hashicorp.com/consul/docs/intro</a></li><li><a href="https://blog.51cto.com/wangguishe/5789295" target="_blank" rel="noreferrer">https://blog.51cto.com/wangguishe/5789295</a></li></ul>`,28),p=[o];function c(t,r,i,u,C,A){return n(),a("div",null,p)}const y=s(e,[["render",c]]);export{h as __pageData,y as default};
