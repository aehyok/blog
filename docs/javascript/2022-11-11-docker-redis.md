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

// 查看正在运行的redis容器
docker ps

// 进入容器链接redis
docker exec -it redis-1 /bin/bash
```