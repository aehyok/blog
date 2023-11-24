
## docker run 创建mysql容器
  
  ```
  docker run -p 13306:3306 --name mysql --restart=always --privileged=true \
  -v /usr/local/docker/mysql/log:/var/log/mysql \
  -v /usr/local/docker/mysql/data:/var/lib/mysql \
  -v /usr/local/docker/mysql/conf:/etc/mysql \
  -v /etc/local/docker/mysql/conf.d:/etc/mysql/conf.d \
  -e MYSQL_ROOT_PASSWORD=123456 -d mysql
  ```

## 查看容器的ip地址

 - docker inspect 容器id/容器name
 - docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mysql

## 根据容器ip 登录mysql

 mysql -h xxx.xxx.xx.x -uxxxx -p
 123456
 

## 查看容器日志
```
docker logs -f mysql
```