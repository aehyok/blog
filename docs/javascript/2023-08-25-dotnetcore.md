## 修改数据库的操作 
```

// 生成实体变更
dotnet-ef migrations add XXXX

// 其中如果包含外键相关的，就在 XXXX文件中 将Up和Down方法中的外键相关进行删除
// 新创建表的时候一起添加外键应该是没问题的，如果是修改表的时候可能就存在问题


// 同步到数据库
dotnet-ef database update

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