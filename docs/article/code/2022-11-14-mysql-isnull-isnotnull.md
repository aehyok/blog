## https://www.jb51.net/article/249749.htm

##  group_concat 详解
- https://blog.csdn.net/weixin_46544385/article/details/120563650

## ''与null的区别
```
// '' 代表存入的是空的字符串  完全不占空间
select * from test where a = ''  

// 而字段中如果有null值，则要通过  is null进行判断，不能用=null
select * from test where a = null

select * from test where a is null
```


## null值字段的排序
```
// null值默认被mysql认为是最小的值
// asc 升序排列，那么a字段中如果有null值的，则会排在最上面
// desc反之，在最后面
select * from test order by a asc;   
```

## count 统计
会将group_num为null的数据过滤掉
```
select count(group_num) from sc_base_color;
```

## group by
会将null 进行分组统计
```
select count(*) from sc_base_color GROUP BY group_num;
```


## where查询条件中>1 <1
会将null值也过滤掉
```
select  * from sc_base_color where  group_num<1;
```


## null值字段如果是索引字段

- 在mysql 5.7以及5.7以下的版本中
如果某一列上存在null值，并且该字段被设置成了索引字段，那么该字段在查询时被当做查询条件时，如果所查询出来的数据数量超过表总数据的30%，那么该字段的索引将会失效，将会进行全表扫描。
如果查询出来的数据量小于总数据量的30%，那么该字段的索引将会生效。

- 在mysql8.0以及8.0+的版本中
如果a字段设置为索引字段，那么 is null 和is not null 索引将一直生效（可能有一些特殊的情况暂时没有遇到）
```
select * from test where a is null;

select * from test where a is not null;
```


## 索引跳跃
- https://juejin.cn/post/6863770705897455623
- https://dev.mysql.com/doc/refman/8.0/en/range-optimization.html

## 设置默认值

- 1、比如int、bigint类型默认值为-1/0

- 2、比如varchar类型默认值为空串

- 3、bigdecimal类型为0等等。