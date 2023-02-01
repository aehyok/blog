## consul 部署
- consul集群需要至少两个consul server节点
- https://www.cnblogs.com/edisonchou/p/consul_cluster_based_on_docker_introduction.html

```
docker run -d -p 8510:8500 --restart=always -v /usr/local/aehyok/consul/data/server1:/consul/data -v /usr/local/aehyok/consul/conf/server1:/consul/config -e CONSUL_BIND_INTERFACE='eth0' --privileged=true --name=consul_server_1 consul agent -server -bootstrap-expect=3 -ui -node=consul_server_1 -client='0.0.0.0' -data-dir /consul/data -config-dir /consul/config -datacenter=aehyok;


JOIN_IP="$(docker inspect -f '{{.NetworkSettings.IPAddress}}' consul_server_1)";

docker run -d -p 8520:8500 --restart=always -v /usr/local/aehyok/consul/data/server2:/consul/data -v /usr/local/aehyok/consul/conf/server2:/consul/config -e CONSUL_BIND_INTERFACE='eth0' --privileged=true --name=consul_server_2 consul agent -server -ui -node=consul_server_2 -client='0.0.0.0' -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config -join=$JOIN_IP;


docker run -d -p 8530:8500 --restart=always -v /usr/local/aehyok/consul/data/server3:/consul/data -v /usr/local/aehyok/consul/conf/server3:/consul/config -e CONSUL_BIND_INTERFACE='eth0' --privileged=true --name=consul_server_3 consul agent -server -ui -node=consul_server_3 -client='0.0.0.0' -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config -join=$JOIN_IP;


docker run -d -p 8540:8500 --restart=always -v /usr/local/aehyok/consul/data/client1:/consul/data -v /usr/local/aehyok/consul/conf/client1:/consul/config -e CONSUL_BIND_INTERFACE='eth0'  --privileged=true  --name=consul_client_1 consul agent -node=consul_client_1 -join=$JOIN_IP -client='0.0.0.0' -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config

docker run -d -p 8550:8500 --restart=always -v /usr/local/aehyok/consul/data/client2:/consul/data -v /usr/local/aehyok/consul/conf/client2:/consul/config -e CONSUL_BIND_INTERFACE='eth0'  --privileged=true  --name=consul_client_2 consul agent -node=consul_client_2 -join=$JOIN_IP -client='0.0.0.0' -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config

```
```
参数说明：
     -server : 定义agent运行在server模式
     -bootstrap-expect :在一个datacenter中期望提供的server节点数目,当该值提供的时候,consul一直等到达到指定sever数目的时候才会引导整个集群,该标记不能和bootstrap共用
     -data-dir:提供一个目录用来存放agent的状态,所有的agent允许都需要该目录,该目录必须是稳定的,系统重启后都继续存在
     -node:节点在集群中的名称,在一个集群中必须是唯一的,默认是该节点的主机名
     -bind:：指明节点的IP地址，一般是0.0.0.0或者云服务器内网地址，不能写阿里云外网地址。这是Consul侦听的地址，它必须可以被集群中的所有其他节点访问。虽然绑定地址不是绝对必要的，但最好提供一个。
     -ui: 启动web界面
     -config-dir::配置文件目录,里面所有以.json结尾的文件都会被加载
     -rejoin:使consul忽略先前的离开,在再次启动后仍旧尝试加入集群中。
     -client:consul服务侦听地址,这个地址提供HTTP、DNS、RPC等服务,默认是127.0.0.1所以不对外提供服务,如果你要对外提供服务改成0.0.0.0 
```
```
version: '3'

services:
  consul_server_1:
    image: consul
    container_name: consul_server_1
    command: agent -server -bootstrap-expect=3 -node=consul_server_1 -bind=0.0.0.0  -client=0.0.0.0 -datacenter=aehyok -ui -data-dir /consul/data -config-dir /consul/config
    environment:
      CONSUL_BIND_INTERFACE: 'eth0'
    volumes:
      - /usr/local/aehyok/consul/data/server1:/consul/data
      - /usr/local/aehyok/consul/conf/server1:/consul/config
    ports:
      - 8510:8500
    restart: always
    privileged: true

  consul_server_2:
    image: consul
    container_name: consul_server_2
    command: agent -server -bootstrap-expect=3 -retry-join=consul_server_1 -node=consul_server_2 -bind=0.0.0.0  -client=0.0.0.0 -datacenter=aehyok -ui -data-dir /consul/data -config-dir /consul/config
    environment:
      CONSUL_BIND_INTERFACE: 'eth0'
    volumes:
      - /usr/local/aehyok/consul/data/server2:/consul/data
      - /usr/local/aehyok/consul/conf/server2:/consul/config  
    ports:
      - 8520:8500
    depends_on:
      - consul_server_1
    restart: always
    privileged: true

  consul_server_3:
    image: consul
    container_name: consul_server_3
    command: agent -server -bootstrap-expect=3 -retry-join=consul_server_1 -node=consul_server_3  -bind=0.0.0.0 -client=0.0.0.0 -datacenter=aehyok -ui -data-dir /consul/data -config-dir /consul/config
    environment:
      CONSUL_BIND_INTERFACE: 'eth0'
    volumes:
      - /usr/local/aehyok/consul/data/server3:/consul/data
      - /usr/local/aehyok/consul/conf/server3:/consul/config 
    ports:
      - 8530:8500
    depends_on:
      - consul_server_1
    restart: always
    privileged: true

  consul_client_1:
    image: consul
    container_name: consul_client_1
    command: agent -retry-join=consul_server_1 -node=consul_client_1 -bind=0.0.0.0  -client=0.0.0.0 -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config
    environment:
      CONSUL_BIND_INTERFACE: 'eth0'
    volumes:
    - /usr/local/aehyok/consul/data/server1:/consul/data
    - /usr/local/aehyok/consul/conf/server1:/consul/config    
    ports:
      - 8540:8500
    depends_on:
      - consul_server_2
      - consul_server_3
    restart: always
    privileged: true


  fabio:
    image: "fabiolb/fabio"
    privileged: true
    ports:
      - "9998:9998"
      - "9999:9999"
    volumes:
      - ./fabio.properties:/etc/fabio/fabio.properties

```



docker exec consul_server_1 consul operator raft list-peers

docker exec consul_server_11 consul operator raft list-peers


server 有三个，client有一个

## 安装nginx
```
apt-get install nginx

nginx -v
```

nginx config
```
 server {
  listen 8500;
  location / {
  proxy_pass http://xdpconsul;
  proxy_redirect default;
  }
  }

  upstream xdpconsul {
  server 127.0.0.1:8510 weight=2;
  server 127.0.0.1:8520 weight=1;
  server 127.0.0.1:8530 weight=1;
  }
```


## dotnet 单文件部署
- https://www.cnblogs.com/ZaraNet/p/11790645.html

## 安装dotnet 6.0 sdk
- https://learn.microsoft.com/zh-cn/dotnet/core/install/linux-snap

## dotnet consul demo
- https://www.cnblogs.com/ansheng/p/16035028.html
- https://www.cnblogs.com/wl-blog/p/15771111.html
  
- https://blog.csdn.net/wulex/article/details/122574103


## dotnet 测试服务

```
dotnet OcelotGateway.dll --urls="http://*:5003"
dotnet OcelotGateway.dll --urls="http://*:5030"
dotnet OcelotGateway.dll --urls="http://*:5300"

dotnet StudentService.dll --urls="http://*:5001"
dotnet StudentService.dll --urls="http://*:5002"

dotnet TeacherService.dll --urls="http://*:5004"
dotnet TeacherService.dll --urls="http://*:5005"
```


## dotnet项目中引用consul
- https://www.cnblogs.com/rainingnight/p/servicediscovery-consul-in-asp-net-core.html
- fabio 
  - https://github.com/fabiolb/fabio
  - ubuntu https://www.cnblogs.com/xishuai/p/macos-and-ubuntu-install-fabio.html
  - docker fabio https://www.cnblogs.com/weirun/p/16466960.html


## consul client 配置微服务接口配置 、邮件预警发送
- json文件 https://www.cnblogs.com/edisonchou/p/9148034.html

## ocelot和consul 架构图
- https://www.cnblogs.com/PatrickLiu/p/14073192.html
- https://www.cnblogs.com/cheyunhua/p/15718331.html


## consul官网 
- https://developer.hashicorp.com/consul/docs/intro
- https://blog.51cto.com/wangguishe/5789295