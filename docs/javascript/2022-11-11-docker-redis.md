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

docker run -d \
--name mysql-1 \
-p 4006:3306 \
-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf \
-v /usr/local/docker/mysql/data/mysql:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=sunlight2021 \
mysql

// 查看正在运行的redis容器
docker ps

// 进入容器链接redis
docker exec -it redis-1 /bin/bash
```

// docker mysql 
// https://juejin.cn/post/6844903848960606221
