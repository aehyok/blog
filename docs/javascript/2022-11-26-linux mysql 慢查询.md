- https://juejin.cn/post/7165767441883398175


## 查看linux服务器状态

- 通过指令查看服务器进程的状态（CPU 和内存占用情况）
  ```
  top
  ```
  %us：表示用户进程的 CPU 使用时间（没有通过 nice 调度）
  %sy：表示系统进程的 CPU 使用时间，主要是内核使用。
  %ni：表示用户进程中，通过 CPU 调度（nice）过的使用时间。
  %id：空闲的 CPU 时间
  %wa：CPU 运行时在等待 IO 的时间
  %hi：CPU 处理硬中断花费的时间
  %si：CPU 处理软中断花费的时间
  %st：被虚拟机偷走的 CPU 时间

参考 %us 的定义，对于 Linux 系统来说，MySQL 进程和它启动的所有线程都不算内核进程，因此 MySQL 的系统线程和用户线程在繁忙的时候，都会体现在 CPU 使用率的 %us 指标上。

- 通过指令查看进程中的线程状态
  ```
  top -Hp pid
  ```

## mysql查看
```
use performance_schema;

select * from threads;
```

## mysql慢查询查看（mysql8版本）
```
mysql -uroot -p
// 再输入password

//切换到具体的数据库
use dvsdb30;

// 查看慢查询日志是否开启  on为开启  off为关闭 默认是关闭的
show variables like 'slow_query_log';

// 设置是否开启慢查询日期记录
set global slow_query_log = on;    #开启
set global slow_query_log = off;   #关闭

// 查看慢查询的阈值（默认是10秒）
show variables like 'long_query_time';

// 如果想修改慢查询的阈值

// 阈值设置为1秒
set global long_query_time = 1;   

// 查看慢查询日志文件路径
show variables like 'slow_query_log_file';

cd /usr/bin

--  这里-S参数后面跟的r是row的缩写意思是从slow log里查找按照返回行数最高排序，默认是at即平均执行时间。-r 后面跟着的数字是返回几个结果，类似于limit
mysqldumpslow -S r -t 20 /usr/local/aehyok/ba52a9d7d924-slow.log
```


- 清空慢查询日志，并恢复
https://blog.csdn.net/weixin_41275260/article/details/125461408

mysql> FLUSH LOGS;
Query OK, 0 rows affected (0.01 sec)

- 慢查询 日志查看
  https://cloud.tencent.com/developer/article/2154418
  https://juejin.cn/post/7033623654416007181
- 查看mysql  线程列表
  select * from PROCESSLIST w where w.USER='dvs' and w.db='dvsdb30' order by TIME desc;

慢查询日志文件  删除成功后 flush logs重置成功


## mysql 最大链接数
  - https://juejin.cn/post/6844903876999512078#comment

  - 当前的链接数
  
  ```
  show status like 'Thread%';
  ```


  mysqladmin -u root-p flush-logs

flush failed; error: 'Access denied; you need (at least one of) the RELOAD privilege(s) for this operation'



## 查看mysql线程
- https://blog.csdn.net/qq_36551991/article/details/113665145


## order by null
- https://www.jianshu.com/p/16f827724e8c

## mysql group by 性能优化
- https://juejin.cn/post/6844903696644440072


## 慢查询几个常用的指令
- https://juejin.cn/post/6844904037888851976#heading-12
```

mysqldumpslow -s t -t 100 -g /data/mysql/slow.log

// 得到返回记录集最多的10条SQL：
mysqldumpslow -s r -t  10 /var/lib/mysql/695f5026f0f6-slow.log

// 得到访问次数最多的10条SQL：
mysqldumpslow -s r -t  10 /data/mysql/slow.log

得到按照时间排序的前10条里面含有左连接的SQL：
mysqldumpslow -s t -t 100 -g "left join" /var/lib/mysql/695f5026f0f6-slow.log

也支持管道符命令
mysqldumpslow -s t -t 10 -g "left join" /var/lib/mysql/695f5026f0f6-slow.log | more //分页显示
```
