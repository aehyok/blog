## 初始化本地环境
- https://blog.csdn.net/Zhangmaoyang/article/details/146253209

- 前端
  - yarn dev:frontend
  - http://localhost:3000/
  -  root admin!!!???
- 后端
   - yarn dev:server
   - http://localhost:3001/api

- 文档收集器
  - yarn dev:collector
- swagger 
  - http://localhost:3001/api/docs/

## 查看端口占用
 - netstat -ano | findstr :3000

- 再来查看具体的应用
  - tasklist | findstr 48352
通过任务管理器中的进程杀死即可


## 向量数据库客户端
  - https://github.com/zilliztech/attu

