<!--
 * @Author: 刘启明 455043818@qq.com
 * @Date: 2023-01-31 14:51:26
 * @LastEditors: 刘启明 455043818@qq.com
 * @LastEditTime: 2023-04-17 10:59:46
 * @FilePath: \blog\docs\javascript\2023-01-31-docker-dotnet.md
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
## Dockerfile下的内容
```
FROM mcr.microsoft.com/dotnet/aspnet:6.0

WORKDIR  /usr/share/dotnet/ClassService/

COPY ClassService/ /usr/share/dotnet/ClassService/
ENTRYPOINT ["dotnet", "ClassService.dll","--urls","http://*:5005"]
```

## 根据Dockerfile创建镜像
```
docker build -t classservice .
```

## 根据镜像创建容器
```
docker run -d -p 5005:5005 --name classservice1 classservice
```

## 操作容器
```
docker restart xxx
docker stop xxx
```

## 映射路径的方式

#### Dockerfile文件
```
FROM mcr.microsoft.com/dotnet/aspnet:6.0

WORKDIR  /usr/share/dotnet/ClassService/

ENTRYPOINT ["dotnet", "ClassService.dll","--urls","http://*:5005"]
```

#### 生成镜像和容器
```

// 生成镜像
docker build -t class .

// 映射路径
docker run -d -p 5005:5005 --name classservice1 -v /usr/local/aehyok/docker/dotnet/ClassService:/usr/share/dotnet/ClassService class
```

