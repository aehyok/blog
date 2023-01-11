
- https://learn.microsoft.com/zh-cn/sql/linux/quickstart-install-connect-docker?view=sql-server-ver16&pivots=cs1-bash

## 查找镜像
```
docker search mcr.microsoft.com/mssql/server
```

## 生成容器并运行

```
sudo docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=M9y2512!" \
   -p 1433:1433 --name sql1 --hostname sql1 \
   -d \
   mcr.microsoft.com/mssql/server
```


## 进入容器
```
sudo docker exec -it sql1 "bash"
```

## 执行链接
```
/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "XXXXXXX"

```

