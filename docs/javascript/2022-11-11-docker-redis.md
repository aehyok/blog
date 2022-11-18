## docker安装redis
```
// 查找redis可用版本
docker search  redis

// 拉取最新版的redis镜像
docker pull redis:latest

// 可查找到redis镜像
docker images

// 运行容器，指定映射端口号号容器名称  redis-1,并设置容器重启启动
docker run --restart always -itd --name redis-1 -p 6479:6479 redis
```


```javascript
docker run -d \
--name mysql-1 \
-p 4006:3306 \
-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf \
-v /usr/local/docker/mysql/data/mysql:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=sunlight2021 \
mysql

-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf: 将容器中 /etc/mysql/mysql.conf.d/mysqld.cnf 配置文件挂载到宿主机的 /usr/local/docker/mysql/config/mysqld.cnf 文件上；
-v /usr/local/docker/mysql/data:/var/lib/mysql: 将容器中 /var/lib/mysql 数据目录挂载到宿主机的 /usr/local/docker/mysql/data 目录下；
```



```
-d 后台运行程序，并返回容器ID
-p 指定映射端口， 主机端口:容器端口
-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf 
// 将容器中的 mysql 配置文件复制到宿主机中指定路径下，路径你可以根据需要，自行修改
```
// 查看正在运行的redis容器
docker ps

// 进入容器链接redis
docker exec -it redis-1 /bin/bash
```

// docker mysql 
// https://juejin.cn/post/6844903848960606221

docker run -d \
--name mysql-2 \
-p 4007:3306 \
-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf \
-v /usr/local/docker/mysql/data/mysql:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=sunlight2021 \
mysql