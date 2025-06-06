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
  - 模糊查询 metadata["title"] like "%财务%"

## ollama 命令
```
 // 列出所有的模型
 ollama ls

 // 正在运行的模型
 ollama ps

 // 查看ollama服务运行状态
 systemctl status ollama

 // 如果停止了服务 重新开启服务
ollama serve 

```



## docker与宿主机器中拷贝文件
```
// 宿主机器到docker容器
sudo docker cp yarn.lock 8aa8db19bbde:/app/yarn.lock

// docker容器到宿主机器
sudo docker cp  8aa8db19bbde:/app/yarn.lock lqm/
```