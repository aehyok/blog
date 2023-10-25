## 修改数据库的操作 
```

// 生成实体变更
dotnet-ef migrations add XXXX

// 其中如果包含外键相关的，就在 XXXX文件中 将Up和Down方法中的外键相关进行删除
// 新创建表的时候一起添加外键应该是没问题的，如果是修改表的时候可能就存在问题


// 同步到数据库
dotnet-ef database update

// 超过一个dbcontext就需要指定

dotnet-ef migrations add XXXX -c SecondContext

dotnet-ef migrations add XXXX -c DvsContext --framework net6.0

dotnet-ef database update  -c SecondContext

dotnet-ef database update  -c DvsContext --framework net6.0

```


## api.nuget.ogr/v3/index.json无法访问是因为翻墙的问题 

更改为直连即可


## linux 服务位置
```
 // 自定义服务地址
 /usr/lib/systemd/system/dvsv3-datamonitor.service

 [Unit]
  Description=dvsv3-datamonitor
  After=network-online.target
  Wants=network-online.target

  [Service]
  # modify when deploy in prod env
  User=dvs
  Group=dvs

  Type=simple
  ExecStart=/usr/local/dotnet-sdk/dotnet /usr/local/sunlight/dvsv3/dvs-datamonitor/DVS.DataMonitor.Api.dll
  WorkingDirectory=/usr/local/sunlight/dvsv3/dvs-datamonitor

  Restart=always
  RestartSec=1
  StartLimitInterval=0

  [Install]
  WantedBy=multi-user.target



 // 系统服务地址
 /etc/systemd/system


// 设置服务开机自动启动
systemctl enable dvsv3-datamonitor

// 重启服务
systemctl restart dvsv3-datamonitor

// 修改配置文件
systemctl daemon-reload

```


## nginx 配置
```
// 所在路径
/etc/nginx/conf.d/dvsv3.conf
// 从这个配置文件中也可以找到swagger 配置路径docs的服务

location ~ ^/api/datamonitor/ {
    proxy_pass http://127.0.0.1:12017;
}

修改完毕后nginx -s reload
```

## 子系统服务配置文件
```
/usr/local/sunlight/dvsv3/etc/dvs-datamonitor-appsettings.json
{
    "Urls": "http://*:12017",
    "WorkerId": 8,
    "Serilog": {
        "WriteTo": [
            {},
            {
                "Name": "File",
                "Args": {
                    "path": "/var/log/sunlight/v3/dvs-datamonitor.txt"
                }
            },
            {}
        ]
    }
}

```


## 数据导出

```
// 导出模版
// SELECT * FROM Template;

// 异步任务执行装填
select * from AsyncTask s order by s.CreatedAt desc ;

public enum AsyncTaskState
{
    待处理 = 0,
    处理中 = 1,
    处理完成 = 2,
    失败 = 9
}

 select * from `Options`  

 key: storageoptions:path  是文件上传的路径地址                          
```


## 服务器上log.txt日志文件存放路径
```
/var/log/sunlight/v3
```

## linux下nginx安装
- 2022-05-11-linux


## 区域同步
```
之前使用的是  BasicArea
SELECT  SUM(c.total) total,SUM(c.tobeSubmitted) tobeSubmitted, SUM(c.submitted)  submitted 
FROM  CollectDataHouseholdSummary c 
 where c.type=2 and c.areaid in (select id from BasicArea t where t.IdSequences like @areaId )  


现在 BasicAreaEx
SELECT  SUM(c.total) total,SUM(c.tobeSubmitted) tobeSubmitted, SUM(c.submitted)  submitted 
FROM  CollectDataHouseholdSummary c 
 where c.type=3 and c.areaid in (select t.RegionId from BasicAreaEx t where t.RegionIdSequences like @areaid )  
```


## 修改表编码

```
 ALTER TABLE BasicAreaEx CONVERT TO CHARACTER SET utf8 COLLATE utf8_general_ci;
```



## mysql数据库操作
```
// 展示数据库列表
SHOW DATABASES;


```



## mysql执行数据同步时有可能有数据表访问权限的问题

## 判断枚举是否存在
```
            //if (!Enum.IsDefined(typeof(TaskType), model.TaskType))
            //{
            //    throw new ErrorCodeException(-1, "传入的任务类型不存在");
            //}
            //else
            //{
            //    spec.Query.Where(item => item.TaskType == model.TaskType);
            //}
```

## 将EFCore IDbContextTransaction转换为 Mysql驱动下 DbTransaction

```
    public static DbTransaction GetDbTransaction(this IDbContextTransaction source)
    {
        return (source as IInfrastructure<DbTransaction>).Instance;
    }
```



## 事务里面如果有创建表结构的则不会跟随事务

