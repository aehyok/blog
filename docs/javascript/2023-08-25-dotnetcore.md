## 修改数据库的操作 
```

// 生成实体变更
dotnet-ef migrations add XXXX

// 其中如果包含外键相关的，就在 XXXX文件中 将Up和Down方法中的外键相关进行删除
// 新创建表的时候一起添加外键应该是没问题的，如果是修改表的时候可能就存在问题


// 同步到数据库
dotnet-ef database update

```