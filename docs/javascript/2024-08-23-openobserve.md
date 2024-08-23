## 文档中心
- https://openobserve.ai/docs/quickstart/#openobserve-cloud
- https://github.com/openobserve/openobserve

## docker创建
```
docker run -d \
      --name openobserve \
      -v $PWD/data:/data \
      -p 5080:5080 \
      -e ZO_ROOT_USER_EMAIL="455043818@qq.com" \
      -e ZO_ROOT_USER_PASSWORD="M9y2512!" \
      openobserve/openobserve:latest
```

## 本地访问
- http://localhost:5080 登录