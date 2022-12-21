## 录取mysql镜像
```
docker pull mysql:5.7
docker pull mysql 最新版本


```

## 查看docker容器的日志
```
// xxx为容器名称
docker logs xxx
```

## 删除容器
```
/// xxx 为容器id
docker rm xxx  

// 移除容器前先判断容器是否已经停止
docker ps // 查看正在运行的容器

docker ps -a // 包含没有在运行的容器

// 停止容器
docker stop xxx
```

docker run -d \
--name mysql \
-p 4007:3306 \
-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf \
-v /usr/local/docker/mysql/data/mysql:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=sunlight2010 \


docker run -d \
--name mysql \
-p 3306:3306 \
-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf \
-v /usr/local/docker/mysql/data/mysql:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=sunlight2010 \




docker run -d \
--name mysql \
-p 4007:3306 \
-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf \
-v /usr/local/docker/mysql/data/mysql:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=sunlight2010 \

## 修改docker容器中的文件
- https://juejin.cn/post/6875216262830653453

## mysql 8.0后密码加密规则发生变化
- https://www.cnblogs.com/hackerxiaoyon/p/10552842.html

## mysql8和mysql5.7
- https://juejin.cn/post/7111255789876019208


> 注意： 不管docker容器开没开都会进行相互间的拷贝
## 将docker容器中的文件拷贝到宿主机器中
```
 docker cp ba52a9d7d924:/var/lib/mysql/ba52a9d7d924-slow.log  /usr/local/aehyok
```


## 从宿主机器拷贝到docker容器中
```
 docker cp /usr/local/aehyok ba52a9d7d924:/var/lib/mysql/ba52a9d7d924-1slow.log  
```