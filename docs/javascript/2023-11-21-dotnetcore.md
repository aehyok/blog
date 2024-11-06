

## 修改数据库的操作 
```

// 生成实体变更
dotnet-ef migrations add XXXX

// 其中如果包含外键相关的，就在 XXXX文件中 将Up和Down方法中的外键相关进行删除
// 新创建表的时候一起添加外键应该是没问题的，如果是修改表的时候可能就存在问题

//使用命令行工具
https://learn.microsoft.com/zh-cn/ef/core/cli/dotnet?WT.mc_id=DOP-MVP-5003855#installing-the-tools

// 查看版本
https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql

// 同步到数据库
dotnet-ef database update

// 超过一个dbcontext就需要指定

dotnet-ef migrations add XXXX -c SecondContext

dotnet-ef migrations add XXXX -c DvsContext --framework net6.0

// 通过-v可以查看执行过程以及发生错误的具体error信息
dotnet-ef migrations add XXXX -c DvsContext --framework net6.0 -v

dotnet-ef migrations add InitTask -c DvsContext --framework net8.0 -v

dotnet-ef database update  -c SecondContext

dotnet-ef database update  -c DvsContext --framework net6.0

dotnet-ef database update  -c DvsContext --framework net6.0 -v 

dotnet-ef database update  -c DvsContext --framework net6.0 -v 

dotnet-ef database update -c DvsContext --framework net8.0 -v

---------------2024-08-01------------------------------------
参考链接 https://learn.microsoft.com/zh-tw/ef/core/cli/dotnet
安装命令 dotnet tool install --global dotnet-ef

dotnet ef

dotnet ef migrations add MonitorTaskAnonymous -c DvsContext --framework net6.0 -v

dotnet ef database update -c DvsContext --framework net6.0 -v

---

// 20231204084647_ModifyHouseholdFiled  从当前的下一个变更生成开始
dotnet-ef migrations script 20231204084647_ModifyHouseholdFiled  -c DvsContext --framework net6.0 >migrations_2023_1211.sql
```

## api.nuget.ogr/v3/index.json无法访问是因为翻墙的问题
 
 ```
 将代理更改为直连即可
 ```

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

## 数据库菜单更新

```
etc/dvs-systemservice-appsettings.json 中的MenuSeedData 设置为true


// systemctl restart dvsv3-systemservice
// 则启动服务的时候就会初始化更新菜单
// 更新菜单的规则：code相等则update，code不相等则insert,code不存在则不操作

// 通过接口将数据初始化到json文件中
// 接口要在root用户下才能执行
api/basic/Menu/seed

// 执行完接口后，将接口返回数据的data，也就是菜单数组拷贝到项目中
DVS.Basic/Templates/Menu.json

// 提交代码后，通过流水线进行自动部署

//指定某个服务进行设置最上面的参数即可
```

## 定时任务 
    ```
    // 定时任务存在于dvsv3-systemservice服务中

    // dvs-systemservice-appsettings.json可以配置定时任务的开启时间周期

    // ScheduleTaskOptions.cs 以及可以直接在代码中设置默认的时间和周期 

    // 通过代码 AddCronServices开启

    // 查看所有程序集中的class 继承了 CronScheduleService的定时任务

    // 通过单例模式注册
    services.Add(new ServiceDescriptor(typeof(IHostedService), a, ServiceLifetime.Singleton));


    // 继承了IHostedService ，则相当于后台任务。通过依赖注入注册之后便会在后台运行了

    // 然后 重写ExecuteAsync， 这个服务中的ExecuteAsync 方法会一直执行
    ```



## rabbitmq 异步任务处理
```
  // 首先在Program.cs中注册调用 builder.Services.InitServices
  
  // 其中 通过services.AddDistributedEventBus(configuration);

  // 实现读取配置文件中的rabbitmq配置信息
  // 以及通过依赖注册将RabbitMQEventPublisher 发布者和 RabbitMQEventSubscriber 消费者注册到容器中

  //将所有的处理事件通过 services.AddEventHandlers(); 注入容器中

  // rabbitmq 异步任务主要都在dvsv3-systemservice服务中进行处理 
  // 通过app.InitApp(..,,,,onlyGlobalEvent: false) 
  // onlyGlobalEvent: false 处理事件
  // 通过 app.UseDistributedEventBus(onlyGlobalEvent); 中的 subscriber.Subscribe(); 消费者订阅事件
```

## 应急发布逻辑处理

```
// 保存时写入到VillageMessage表中
// 保存的最后发布RabbitMQ 事件

// 发布事件
eventPublisher.Publish(new VillageMessageChangedEvent()
{
    MessageId = message.Id,
    MessageType = message.MessageType,
    RegionIds = message.PublishRegionIds,
    Tags = message.PopulationTag
});

// 通过VillageMessageChangedEvent 找到消费者的处理事件 VillageMessageEventHandler

// VillageMessageEventHandler中的HandleAsync方法中处理逻辑

// 逻辑包括：
// 插入MessageRegions数据，根据VillageMessage中发布范围RegionIds
// 然后根据RegionsIds 数组中的每一个RegionId 
// 通过RegionId 来查找符合条件的人员的UserId
// 然后批量写入到VillageMessagePushRecord（写入状态为未推送）
// 最终统计消息发送的总人数，更新到VillageMessage表中

//OK OK OK
//现在相当于知道要推送的数据了，开始通过定时任务进行推送
//找到定时推送任务：VillagePushMessageSchedule

// 每次循环最多发送100条
// 循环中的逻辑如下：
// 查询出未推送的记录（还加上了推送时间）
// 将条记录设置为（推送中）
// 调用IMessageService.SendAsync真正的推送消息
// 推送成功后，将推送状态设置为（已推送）
// 如果中间出现异常，则将推送状态设置为（推送失败）

```

## 定义微信消息

- MessageDefine 消息定义表数据

```
  {
    "Code": "emergency_response_message",
    "Name": "应急发布消息",
    "RedirectUri": "package/szxc/pages/emergency-release/detail/msg?id={MessageId}",
    "Fields": {
      "MessageId": "消息Id",
      "Title": "标题",
      "PublishDate": "发布时间"
    }
  },
```

- 模板表中类型Template ContentType
```
    /// <summary>
    /// 模板内容类型
    /// </summary>
    public enum TemplateContentType
    {
        文本 = 0,   // 短信模板
        文件 = 1,   // 导出和导入模板
        小程序消息模板 = 2,
        公众号消息模板 = 3,
    }


```

## rabbitmq在项目中的使用
  ```
  // 整体官方文档使用介绍
  https://www.rabbitmq.com/dotnet-api-guide.html



  // 初始化rabbitmq配置
  builder.Services.InitServices 中的
  
  // 添加rabbitmq的配置,并注册发布者和消费者
  services.AddDistributedEventBus(configuration);

  // 注册EventHandlers到DI容器中
  services.AddEventHandlers();

  // 例子：应急发布
  // Dvs.Basic.Api中 VillageNotifyController SaveAsync方法

  // 发布事件
  eventPublisher.Publish(new VillageMessageChangedEvent()
  {
      MessageId = message.Id,
      MessageType = message.MessageType,
      RegionIds = message.PublishRegionIds,
      Tags = message.PopulationTag
  });
  
  // 发布事件的参数，例如数据实体VillageMessageChangedEvent 要继承 EventBase


  // 消费者的Consumer继承IBasicConsumer接口，消息会在到达时自动传递，而不必主动请求。
  // https://www.rabbitmq.com/dotnet-api-guide.html#consuming
  
  // 异步调度实现的Comsumer要继承IAsyncBasicConsumer接口
  // https://www.rabbitmq.com/dotnet-api-guide.html#consuming-async
  // 同时要将 ConnectionFactory.DispatchConsumersAsync 属性设置为 true
  ```