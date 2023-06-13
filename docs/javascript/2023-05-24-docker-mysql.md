<!--
 * @Author: 刘启明 455043818@qq.com
 * @Date: 2023-05-24 10:44:34
 * @LastEditors: 刘启明 455043818@qq.com
 * @LastEditTime: 2023-05-25 13:45:00
 * @FilePath: \blog\docs\javascript\2023-05-24-docker-mysql.md
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
## 查看centos版本信息
```
cat /etc/centos-release

uname -r

```

## centos 安装docker
```
sudo yum update

sudo yum install docker

// 启动docker
sudo systemctl start docker

// 设置开机启动
sudo systemctl enable docker

```

## docker 创建mysql容器
```
docker pull mysql

// 设置-p  通过外网便可以访问
docker run --name gpt-mysql -p 3306:3306 -v /root/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=M9y2512! -d mysql

docker run --name gpt-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=M9y2512! -d mysql

// 不知道为啥 设置了 映射  就有问题 
// 于是docker-compose派上用场了
docker run --name gpt-mysql \
  -p 3306:3306 \
  -v /root/mysql/data:/var/lib/mysql \ 
  -e MYSQL_ROOT_PASSWORD=M9y2512! -d mysql

docker run \
--restart=always --privileged=true \
--name gpt-mysql1 -p 4306:3306  \
-v /root/mysql/data:/var/lib/mysql \
-v /root/mysql/conf.d:/etc/mysql/conf.d \
-v /root/mysql/log:/var/log/mysql \
-e MYSQL_ROOT_PASSWORD=M9y2512! -d mysql


docker run --name gpt-mysql \
  -v /root/mysql/data:/var/lib/mysql \
  -v /root/mysql/conf.d:/etc/mysql/conf.d \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=M9y2512! \
  -d mysql

```



## 进入容器
```
docker exec -it some-mysql mysql -u root -p
```


## mysql字符集和排序规则
```
SHOW VARIABLES LIKE 'character_set%';  // utf8mb4
SHOW VARIABLES LIKE 'collation%';  
```

## 给用户授权 刷新权限
```
CREATE USER 'aehyok'@'localhost' IDENTIFIED BY 'M9y2512!';


GRANT ALL PRIVILEGES ON `ak47-gpt`.* TO 'aehyok'@'%';

FLUSH PRIVILEGES;
```


