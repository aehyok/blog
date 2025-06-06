## linux
```
ip 用户名 密码
175.178.60.76 root  Hk
```

## 设置mariadb源
```
cd /etc/yum.repos.d
vim Mariadb.repo



[mariadb]
name = MariaDB
baseurl = https://mirrors.aliyun.com/mariadb/yum/10.4/centos7-amd64
gpgkey = https://mirrors.aliyun.com/mariadb/yum/RPM-GPG-KEY-MariaDB
gpgcheck = 1
```

## mariadb
```
yum install MariaDB-server


systemctl enable mariadb

systemctl start mariadb

// 设置密码 M9
mysql_secure_installation

```

## 可能会乱码设置
- https://juejin.cn/post/7096757877909487629
```
utf8mb4
utf8mb4_unicode_ci
```