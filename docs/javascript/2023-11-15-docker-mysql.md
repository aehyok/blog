
## docker run 创建mysql容器
  
  ```
  docker run -p 13306:3306 --name mysql --restart=always --privileged=true \
  -v /root/docker/mysql/log:/var/log/mysql \
  -v /root/docker/mysql/data:/var/lib/mysql \
  -v /root/docker/mysql/conf:/etc/mysql \
  -v /etc/local/docker/mysql/conf.d:/etc/mysql/conf.d \
  -e MYSQL_ROOT_PASSWORD=M9y2512! -d mysql:8.0
  ```

## 创建一个无密码的容器
```
docker stop mysql-原来的容器

//创建一个新的MySQL容器，覆盖默认的命令（跳过权限）
docker run --name mysql-temp -v /root/docker/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:8.0 --skip-grant-tables

//稍等片刻 进入容器，并直接进入mysql

docker exec -it mysql-temp mysql

# 5. 在MySQL提示符下，执行以下SQL命令来重置root密码
FLUSH PRIVILEGES;
ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
FLUSH PRIVILEGES;
EXIT;

// 停止并删除临时容器
docker stop mysql-temp
docker rm mysql-temp

// 重新启动原始的MySQL容器（使用新密码）
docker start mysql-container
```

## 查看容器的ip地址
 - docker inspect 容器id/容器name
  ```
    docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mysql
  ```
## 根据容器ip 登录mysql
```
 mysql -h xxx.xxx.xx.x -uxxxx -p
 123456
```

## 查看容器日志
```
c

docker log mysql --tail 10 //最近10条日志记录
```