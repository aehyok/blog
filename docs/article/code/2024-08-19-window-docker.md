## 本机存储docker的路径
- G:\docker-desktop

## mysql 容器
docker run --name gpt-mysql -p 36:3306 --dns 8.8.8.8 --dns 8.8.4.4  -e MYSQL_ROOT_PASSWORD=M9y2512! -d mysql

Navicate可直接链接mysql

## one-api
- https://github.com/songquanpeng/one-api
```
// 拉取镜像
git pull justsong/one-api

// --network="host" 使容器内的程序可以访问宿主机上的mysql
docker run --name one-api -d --restart always -p 35:3000 -e SQL_DSN="root:M9y2512!@tcp(localhost:36)/oneapi"  --dns 8.8.8.8 --dns 8.8.4.4 --network="host" -e TZ=Asia/Shanghai  justsong/one-api
```