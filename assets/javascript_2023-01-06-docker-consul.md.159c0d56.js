import{_ as s,o as n,c as a,b as e}from"./app.8c2fb036.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"consul 部署","slug":"consul-部署","link":"#consul-部署","children":[]},{"level":2,"title":"安装nginx","slug":"安装nginx","link":"#安装nginx","children":[]},{"level":2,"title":"dotnet 单文件部署","slug":"dotnet-单文件部署","link":"#dotnet-单文件部署","children":[]},{"level":2,"title":"安装dotnet 6.0 sdk","slug":"安装dotnet-6-0-sdk","link":"#安装dotnet-6-0-sdk","children":[]},{"level":2,"title":"dotnet consul demo","slug":"dotnet-consul-demo","link":"#dotnet-consul-demo","children":[]},{"level":2,"title":"dotnet 测试服务","slug":"dotnet-测试服务","link":"#dotnet-测试服务","children":[]},{"level":2,"title":"dotnet项目中引用consul","slug":"dotnet项目中引用consul","link":"#dotnet项目中引用consul","children":[]},{"level":2,"title":"consul client 配置微服务接口配置 、邮件预警发送","slug":"consul-client-配置微服务接口配置-、邮件预警发送","link":"#consul-client-配置微服务接口配置-、邮件预警发送","children":[]},{"level":2,"title":"ocelot和consul 架构图","slug":"ocelot和consul-架构图","link":"#ocelot和consul-架构图","children":[]},{"level":2,"title":"consul官网","slug":"consul官网","link":"#consul官网","children":[]}],"relativePath":"javascript/2023-01-06-docker-consul.md","lastUpdated":1713009415000}'),l={name:"javascript/2023-01-06-docker-consul.md"},o=e(`<h2 id="consul-部署" tabindex="-1">consul 部署 <a class="header-anchor" href="#consul-部署" aria-hidden="true">#</a></h2><ul><li>consul集群需要至少两个consul server节点</li><li><a href="https://www.cnblogs.com/edisonchou/p/consul_cluster_based_on_docker_introduction.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/edisonchou/p/consul_cluster_based_on_docker_introduction.html</a></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">docker run -d -p 8510:8500 --restart=always -v /usr/local/aehyok/consul/data/server1:/consul/data -v /usr/local/aehyok/consul/conf/server1:/consul/config -e CONSUL_BIND_INTERFACE=&#39;eth0&#39; --privileged=true --name=consul_server_1 consul agent -server -bootstrap-expect=3 -ui -node=consul_server_1 -client=&#39;0.0.0.0&#39; -data-dir /consul/data -config-dir /consul/config -datacenter=aehyok;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">JOIN_IP=&quot;$(docker inspect -f &#39;{{.NetworkSettings.IPAddress}}&#39; consul_server_1)&quot;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker run -d -p 8520:8500 --restart=always -v /usr/local/aehyok/consul/data/server2:/consul/data -v /usr/local/aehyok/consul/conf/server2:/consul/config -e CONSUL_BIND_INTERFACE=&#39;eth0&#39; --privileged=true --name=consul_server_2 consul agent -server -ui -node=consul_server_2 -client=&#39;0.0.0.0&#39; -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config -join=$JOIN_IP;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker run -d -p 8530:8500 --restart=always -v /usr/local/aehyok/consul/data/server3:/consul/data -v /usr/local/aehyok/consul/conf/server3:/consul/config -e CONSUL_BIND_INTERFACE=&#39;eth0&#39; --privileged=true --name=consul_server_3 consul agent -server -ui -node=consul_server_3 -client=&#39;0.0.0.0&#39; -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config -join=$JOIN_IP;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker run -d -p 8540:8500 --restart=always -v /usr/local/aehyok/consul/data/client1:/consul/data -v /usr/local/aehyok/consul/conf/client1:/consul/config -e CONSUL_BIND_INTERFACE=&#39;eth0&#39;  --privileged=true  --name=consul_client_1 consul agent -node=consul_client_1 -join=$JOIN_IP -client=&#39;0.0.0.0&#39; -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker run -d -p 8550:8500 --restart=always -v /usr/local/aehyok/consul/data/client2:/consul/data -v /usr/local/aehyok/consul/conf/client2:/consul/config -e CONSUL_BIND_INTERFACE=&#39;eth0&#39;  --privileged=true  --name=consul_client_2 consul agent -node=consul_client_2 -join=$JOIN_IP -client=&#39;0.0.0.0&#39; -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">参数说明：</span></span>
<span class="line"><span style="color:#babed8;">     -server : 定义agent运行在server模式</span></span>
<span class="line"><span style="color:#babed8;">     -bootstrap-expect :在一个datacenter中期望提供的server节点数目,当该值提供的时候,consul一直等到达到指定sever数目的时候才会引导整个集群,该标记不能和bootstrap共用</span></span>
<span class="line"><span style="color:#babed8;">     -data-dir:提供一个目录用来存放agent的状态,所有的agent允许都需要该目录,该目录必须是稳定的,系统重启后都继续存在</span></span>
<span class="line"><span style="color:#babed8;">     -node:节点在集群中的名称,在一个集群中必须是唯一的,默认是该节点的主机名</span></span>
<span class="line"><span style="color:#babed8;">     -bind:：指明节点的IP地址，一般是0.0.0.0或者云服务器内网地址，不能写阿里云外网地址。这是Consul侦听的地址，它必须可以被集群中的所有其他节点访问。虽然绑定地址不是绝对必要的，但最好提供一个。</span></span>
<span class="line"><span style="color:#babed8;">     -ui: 启动web界面</span></span>
<span class="line"><span style="color:#babed8;">     -config-dir::配置文件目录,里面所有以.json结尾的文件都会被加载</span></span>
<span class="line"><span style="color:#babed8;">     -rejoin:使consul忽略先前的离开,在再次启动后仍旧尝试加入集群中。</span></span>
<span class="line"><span style="color:#babed8;">     -client:consul服务侦听地址,这个地址提供HTTP、DNS、RPC等服务,默认是127.0.0.1所以不对外提供服务,如果你要对外提供服务改成0.0.0.0 </span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">version: &#39;3&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">services:</span></span>
<span class="line"><span style="color:#babed8;">  consul_server_1:</span></span>
<span class="line"><span style="color:#babed8;">    image: consul</span></span>
<span class="line"><span style="color:#babed8;">    container_name: consul_server_1</span></span>
<span class="line"><span style="color:#babed8;">    command: agent -server -bootstrap-expect=3 -node=consul_server_1 -bind=0.0.0.0  -client=0.0.0.0 -datacenter=aehyok -ui -data-dir /consul/data -config-dir /consul/config</span></span>
<span class="line"><span style="color:#babed8;">    environment:</span></span>
<span class="line"><span style="color:#babed8;">      CONSUL_BIND_INTERFACE: &#39;eth0&#39;</span></span>
<span class="line"><span style="color:#babed8;">    volumes:</span></span>
<span class="line"><span style="color:#babed8;">      - /usr/local/aehyok/consul/data/server1:/consul/data</span></span>
<span class="line"><span style="color:#babed8;">      - /usr/local/aehyok/consul/conf/server1:/consul/config</span></span>
<span class="line"><span style="color:#babed8;">    ports:</span></span>
<span class="line"><span style="color:#babed8;">      - 8510:8500</span></span>
<span class="line"><span style="color:#babed8;">    restart: always</span></span>
<span class="line"><span style="color:#babed8;">    privileged: true</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  consul_server_2:</span></span>
<span class="line"><span style="color:#babed8;">    image: consul</span></span>
<span class="line"><span style="color:#babed8;">    container_name: consul_server_2</span></span>
<span class="line"><span style="color:#babed8;">    command: agent -server -bootstrap-expect=3 -retry-join=consul_server_1 -node=consul_server_2 -bind=0.0.0.0  -client=0.0.0.0 -datacenter=aehyok -ui -data-dir /consul/data -config-dir /consul/config</span></span>
<span class="line"><span style="color:#babed8;">    environment:</span></span>
<span class="line"><span style="color:#babed8;">      CONSUL_BIND_INTERFACE: &#39;eth0&#39;</span></span>
<span class="line"><span style="color:#babed8;">    volumes:</span></span>
<span class="line"><span style="color:#babed8;">      - /usr/local/aehyok/consul/data/server2:/consul/data</span></span>
<span class="line"><span style="color:#babed8;">      - /usr/local/aehyok/consul/conf/server2:/consul/config  </span></span>
<span class="line"><span style="color:#babed8;">    ports:</span></span>
<span class="line"><span style="color:#babed8;">      - 8520:8500</span></span>
<span class="line"><span style="color:#babed8;">    depends_on:</span></span>
<span class="line"><span style="color:#babed8;">      - consul_server_1</span></span>
<span class="line"><span style="color:#babed8;">    restart: always</span></span>
<span class="line"><span style="color:#babed8;">    privileged: true</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  consul_server_3:</span></span>
<span class="line"><span style="color:#babed8;">    image: consul</span></span>
<span class="line"><span style="color:#babed8;">    container_name: consul_server_3</span></span>
<span class="line"><span style="color:#babed8;">    command: agent -server -bootstrap-expect=3 -retry-join=consul_server_1 -node=consul_server_3  -bind=0.0.0.0 -client=0.0.0.0 -datacenter=aehyok -ui -data-dir /consul/data -config-dir /consul/config</span></span>
<span class="line"><span style="color:#babed8;">    environment:</span></span>
<span class="line"><span style="color:#babed8;">      CONSUL_BIND_INTERFACE: &#39;eth0&#39;</span></span>
<span class="line"><span style="color:#babed8;">    volumes:</span></span>
<span class="line"><span style="color:#babed8;">      - /usr/local/aehyok/consul/data/server3:/consul/data</span></span>
<span class="line"><span style="color:#babed8;">      - /usr/local/aehyok/consul/conf/server3:/consul/config </span></span>
<span class="line"><span style="color:#babed8;">    ports:</span></span>
<span class="line"><span style="color:#babed8;">      - 8530:8500</span></span>
<span class="line"><span style="color:#babed8;">    depends_on:</span></span>
<span class="line"><span style="color:#babed8;">      - consul_server_1</span></span>
<span class="line"><span style="color:#babed8;">    restart: always</span></span>
<span class="line"><span style="color:#babed8;">    privileged: true</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  consul_client_1:</span></span>
<span class="line"><span style="color:#babed8;">    image: consul</span></span>
<span class="line"><span style="color:#babed8;">    container_name: consul_client_1</span></span>
<span class="line"><span style="color:#babed8;">    command: agent -retry-join=consul_server_1 -node=consul_client_1 -bind=0.0.0.0  -client=0.0.0.0 -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config</span></span>
<span class="line"><span style="color:#babed8;">    environment:</span></span>
<span class="line"><span style="color:#babed8;">      CONSUL_BIND_INTERFACE: &#39;eth0&#39;</span></span>
<span class="line"><span style="color:#babed8;">    volumes:</span></span>
<span class="line"><span style="color:#babed8;">    - /usr/local/aehyok/consul/data/server1:/consul/data</span></span>
<span class="line"><span style="color:#babed8;">    - /usr/local/aehyok/consul/conf/server1:/consul/config    </span></span>
<span class="line"><span style="color:#babed8;">    ports:</span></span>
<span class="line"><span style="color:#babed8;">      - 8540:8500</span></span>
<span class="line"><span style="color:#babed8;">    depends_on:</span></span>
<span class="line"><span style="color:#babed8;">      - consul_server_2</span></span>
<span class="line"><span style="color:#babed8;">      - consul_server_3</span></span>
<span class="line"><span style="color:#babed8;">    restart: always</span></span>
<span class="line"><span style="color:#babed8;">    privileged: true</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  fabio:</span></span>
<span class="line"><span style="color:#babed8;">    image: &quot;fabiolb/fabio&quot;</span></span>
<span class="line"><span style="color:#babed8;">    privileged: true</span></span>
<span class="line"><span style="color:#babed8;">    ports:</span></span>
<span class="line"><span style="color:#babed8;">      - &quot;9998:9998&quot;</span></span>
<span class="line"><span style="color:#babed8;">      - &quot;9999:9999&quot;</span></span>
<span class="line"><span style="color:#babed8;">    volumes:</span></span>
<span class="line"><span style="color:#babed8;">      - ./fabio.properties:/etc/fabio/fabio.properties</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>docker exec consul_server_1 consul operator raft list-peers</p><p>docker exec consul_server_11 consul operator raft list-peers</p><p>server 有三个，client有一个</p><h2 id="安装nginx" tabindex="-1">安装nginx <a class="header-anchor" href="#安装nginx" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">apt-get install nginx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">nginx -v</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>nginx config</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"> server {</span></span>
<span class="line"><span style="color:#babed8;">  listen 8500;</span></span>
<span class="line"><span style="color:#babed8;">  location / {</span></span>
<span class="line"><span style="color:#babed8;">  proxy_pass http://xdpconsul;</span></span>
<span class="line"><span style="color:#babed8;">  proxy_redirect default;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  upstream xdpconsul {</span></span>
<span class="line"><span style="color:#babed8;">  server 127.0.0.1:8510 weight=2;</span></span>
<span class="line"><span style="color:#babed8;">  server 127.0.0.1:8520 weight=1;</span></span>
<span class="line"><span style="color:#babed8;">  server 127.0.0.1:8530 weight=1;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="dotnet-单文件部署" tabindex="-1">dotnet 单文件部署 <a class="header-anchor" href="#dotnet-单文件部署" aria-hidden="true">#</a></h2><ul><li><a href="https://www.cnblogs.com/ZaraNet/p/11790645.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/ZaraNet/p/11790645.html</a></li></ul><h2 id="安装dotnet-6-0-sdk" tabindex="-1">安装dotnet 6.0 sdk <a class="header-anchor" href="#安装dotnet-6-0-sdk" aria-hidden="true">#</a></h2><ul><li><a href="https://learn.microsoft.com/zh-cn/dotnet/core/install/linux-snap" target="_blank" rel="noreferrer">https://learn.microsoft.com/zh-cn/dotnet/core/install/linux-snap</a></li></ul><h2 id="dotnet-consul-demo" tabindex="-1">dotnet consul demo <a class="header-anchor" href="#dotnet-consul-demo" aria-hidden="true">#</a></h2><ul><li><p><a href="https://www.cnblogs.com/ansheng/p/16035028.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/ansheng/p/16035028.html</a></p></li><li><p><a href="https://www.cnblogs.com/wl-blog/p/15771111.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/wl-blog/p/15771111.html</a></p></li><li><p><a href="https://blog.csdn.net/wulex/article/details/122574103" target="_blank" rel="noreferrer">https://blog.csdn.net/wulex/article/details/122574103</a></p></li></ul><h2 id="dotnet-测试服务" tabindex="-1">dotnet 测试服务 <a class="header-anchor" href="#dotnet-测试服务" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">dotnet OcelotGateway.dll --urls=&quot;http://*:5003&quot;</span></span>
<span class="line"><span style="color:#babed8;">dotnet OcelotGateway.dll --urls=&quot;http://*:5030&quot;</span></span>
<span class="line"><span style="color:#babed8;">dotnet OcelotGateway.dll --urls=&quot;http://*:5300&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet StudentService.dll --urls=&quot;http://*:5001&quot;</span></span>
<span class="line"><span style="color:#babed8;">dotnet StudentService.dll --urls=&quot;http://*:5002&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">dotnet TeacherService.dll --urls=&quot;http://*:5004&quot;</span></span>
<span class="line"><span style="color:#babed8;">dotnet TeacherService.dll --urls=&quot;http://*:5005&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="dotnet项目中引用consul" tabindex="-1">dotnet项目中引用consul <a class="header-anchor" href="#dotnet项目中引用consul" aria-hidden="true">#</a></h2><ul><li><a href="https://www.cnblogs.com/rainingnight/p/servicediscovery-consul-in-asp-net-core.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/rainingnight/p/servicediscovery-consul-in-asp-net-core.html</a></li><li>fabio <ul><li><a href="https://github.com/fabiolb/fabio" target="_blank" rel="noreferrer">https://github.com/fabiolb/fabio</a></li><li>ubuntu <a href="https://www.cnblogs.com/xishuai/p/macos-and-ubuntu-install-fabio.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/xishuai/p/macos-and-ubuntu-install-fabio.html</a></li><li>docker fabio <a href="https://www.cnblogs.com/weirun/p/16466960.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/weirun/p/16466960.html</a></li></ul></li></ul><h2 id="consul-client-配置微服务接口配置-、邮件预警发送" tabindex="-1">consul client 配置微服务接口配置 、邮件预警发送 <a class="header-anchor" href="#consul-client-配置微服务接口配置-、邮件预警发送" aria-hidden="true">#</a></h2><ul><li>json文件 <a href="https://www.cnblogs.com/edisonchou/p/9148034.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/edisonchou/p/9148034.html</a></li></ul><h2 id="ocelot和consul-架构图" tabindex="-1">ocelot和consul 架构图 <a class="header-anchor" href="#ocelot和consul-架构图" aria-hidden="true">#</a></h2><ul><li><a href="https://www.cnblogs.com/PatrickLiu/p/14073192.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/PatrickLiu/p/14073192.html</a></li><li><a href="https://www.cnblogs.com/cheyunhua/p/15718331.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/cheyunhua/p/15718331.html</a></li></ul><h2 id="consul官网" tabindex="-1">consul官网 <a class="header-anchor" href="#consul官网" aria-hidden="true">#</a></h2><ul><li><a href="https://developer.hashicorp.com/consul/docs/intro" target="_blank" rel="noreferrer">https://developer.hashicorp.com/consul/docs/intro</a></li><li><a href="https://blog.51cto.com/wangguishe/5789295" target="_blank" rel="noreferrer">https://blog.51cto.com/wangguishe/5789295</a></li></ul>`,28),t=[o];function c(p,r,i,d,b,u){return n(),a("div",null,t)}const g=s(l,[["render",c]]);export{y as __pageData,g as default};
