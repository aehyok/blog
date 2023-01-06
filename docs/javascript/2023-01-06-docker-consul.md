## consul 部署
- https://www.cnblogs.com/edisonchou/p/consul_cluster_based_on_docker_introduction.html

docker run -d -p 8510:8500 --restart=always -v /usr/local/aehyok/consul/data/server1:/consul/data -v /usr/local/aehyok/consul/conf/server1:/consul/config -e CONSUL_BIND_INTERFACE='eth0' --privileged=true --name=consul_server_1 consul agent -server -bootstrap-expect=3 -ui -node=consul_server_1 -client='0.0.0.0' -data-dir /consul/data -config-dir /consul/config -datacenter=aehyok;

docker run -d -p 8520:8500 --restart=always -v /usr/local/aehyok/consul/data/server2:/consul/data -v /usr/local/aehyok/consul/conf/server2:/consul/config -e CONSUL_BIND_INTERFACE='eth0' --privileged=true --name=consul_server_2 consul agent -server -ui -node=consul_server_2 -client='0.0.0.0' -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config -join=$JOIN_IP;


docker run -d -p 8530:8500 --restart=always -v /usr/local/aehyok/consul/data/server3:/consul/data -v /usr/local/aehyok/consul/conf/server3:/consul/config -e CONSUL_BIND_INTERFACE='eth0' --privileged=true --name=consul_server_3 consul agent -server -ui -node=consul_server_3 -client='0.0.0.0' -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config -join=$JOIN_IP;


docker run -d -p 8540:8500 --restart=always -v /usr/local/aehyok/consul/data/client1:/consul/data -v /usr/local/aehyok/consul/conf/client1:/consul/config -e CONSUL_BIND_INTERFACE='eth0' --privileged=true --name=consul_client_1 consul agent -ui  -node=consul_client_1 -client='0.0.0.0' -datacenter=aehyok -data-dir /consul/data -config-dir /consul/config -join=$JOIN_IP;

docker exec consul_server_1 consul operator raft list-peers




// Server  节点 1
docker run --name cs1 -p 8500:8500  -v /data/cs1:/data consul agent -server -bind 172.17.0.20 -node consul-server-1  -data-dir /data -bootstrap-expect 3 -client 0.0.0.0 -ui
// Server  节点 2
docker run --name cs2 -p 7500:8500  -v /data/cs2:/data consul agent -server -bind 172.17.0.30 -node consul-server-2  -data-dir /data -bootstrap-expect 3 -client 0.0.0.0 -ui -join 172.17.0.20
// Server  节点 3
docker run --name cs3 -p 6500:8500 -v /data/cs3:/data consul agent -server -bind 172.17.0.40 -node consul-server-3  -data-dir /data -bootstrap-expect 3 -client 0.0.0.0 -ui -join 172.17.0.20
// Client 节点 1
docker run --name cc1 -p 5500:8500 -v /data/cc1:/data consul agent -bind 172.17.0.5 -node consul-client-1



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