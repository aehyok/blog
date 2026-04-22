---
type: "inbox"
status : "pending"
source: "web-clipper"
url: "https://x.com/xiangxiang103/status/2044973283423277548"
created: 2026-04-17
---
![图像](https://pbs.twimg.com/media/HGEryjdaUAAVW4T?format=jpg&name=large)

简单来说，Cloudflare Mesh 可以把你的电脑、手机、服务器，甚至是 Cloudflare Workers 连成一个跨地域的局域网。就算没有公网 IP，你的设备之间也能通过私有 IP（默认 100.96.0.0/12）互相访问，比如直连 SSH 或是调用内部 API。对个人开发者和小团队来说，免费额度（50个节点、50个用户）完全管够。

本文基于 2026-04-14 最新的 Workers VPC 更新整理，主打尝鲜和实操。

![图像](https://pbs.twimg.com/media/HGEttN8awAAppNU?format=jpg&name=large)

## 核心概念一览

不搞虚的，这 4 个东西你懂了就知道怎么配：

1. **Client Device（客户端设备）**：手机和电脑。装上 Cloudflare One 客户端，登录后就能获得一个局域网（Mesh）IP。
2. **Mesh Node（节点）**：常说的服务端节点，以前叫 WARP Connector。其实就是个没界面的客户端，装在服务器上，让服务器自己加入局域网，或者作为网关把服务器背后的内网设备也拉进来。
3. **Mesh IP**：组网后分配的私网地址，默认都在 100.96.0.0/12 这个段里。
4. **Workers VPC**：新功能。这玩意能让运行在边缘节点的 Workers 也能连进你的私有网络，以后写脚本跨网调本地接口更方便了。

## 基础玩法：把电脑和服务器连起来

准备工作：一个 CF 账号，一台用来折腾的 Linux 服务器，还有你现在的电脑。

**1\. 在云端创建 Node**

登录 CF Dashboard -> **Networking → Mesh**，点 **Add a node**：

![图像](https://pbs.twimg.com/media/HGEt0xAbgAEiFzz?format=jpg&name=large)

![图像](https://pbs.twimg.com/media/HGEt5FFaEAAh5nt?format=png&name=large)

![图像](https://pbs.twimg.com/media/HGEt8zBbgAAgXWN?format=png&name=large)

![图像](https://pbs.twimg.com/media/HGEt_l0bIAA-XZk?format=png&name=large)

如果是新号，跟着向导一路点就行。老手的话注意确认下设备注册规则、配置文件和 Gateway 代理这些开关有没有打开。

**2\. 服务器入网**

建好 Node 后页面会给一段命令和一个 Token：

![图像](https://pbs.twimg.com/media/HGEuGBKawAAL8tU?format=png&name=large)

\*\*注意：\*\*现在官方的包叫 cloudflare-warp，别自己乱敲 cloudflare-mesh。

Ubuntu 环境直接复制上面的官方命令安装

装完后把你的 Token 填进去连上：

```text
sudo warp-cli connector new <TOKEN>
sudo warp-cli connect
```

回到 Dashboard 看一眼，变成 Online 就算搞定。

![图像](https://pbs.twimg.com/media/HGEuhvGbQAAzfoF?format=png&name=large)

![图像](https://pbs.twimg.com/media/HGEuosXbUAAAUBU?format=jpg&name=large)

**3\. 本地电脑入网与测试**

电脑上装好 **WARP 客户端**，下载链接：[https://one.one.one.one/](https://one.one.one.one/) ，进去在偏好设置里选 **Zero Trust security**，填好你的 team name 登录。

显示 Connected 后，你的电脑和服务器就在同一个网络里了。

![图像](https://pbs.twimg.com/media/HGEuxFkbgAAWq_e?format=png&name=large)

![图像](https://pbs.twimg.com/media/HGEuz21awAAhn0B?format=png&name=large)

找刚才设置的节点的 Mesh IP 试一下

![图像](https://pbs.twimg.com/media/HGEw80DasAA_irf?format=png&name=large)

只要能通，基础的跨区域局域网就搭完了。

![图像](https://pbs.twimg.com/media/HGEvDi6boAI3bk5?format=png&name=large)

## 进阶玩法：让 Workers 访问本地服务

这是个相当有想象力的功能，你可以把 Worker 绑进局域网里，让它直接去调你服务器上还没暴露到公网的接口（比如内部 AI Agent 或者数据查询 API）。

在 wrangler.jsonc （或 toml）里绑定网络：

```text
{
  "$schema": "./node_modules/wrangler/config-schema.json",
  "name": "mesh-gateway",
  "main": "src/index.js",
  "compatibility_date": "2026-04-16",
  "vpc_networks": [
    {
      "binding": "MESH",
      "network_id": "cf1:network", // 固定写法，别乱改
      "remote": true
    }
  ]
}
```

代码里直接通过局域网地址请求：

```text
const NODE_IP = "100.96.1.50";
const NODE_PORT = 8080;

export default {
  async fetch(request, env) {
    try {
      // 魔法就在这行，直接 fetch 你的内网接口
      return await env.MESH.fetch(\`http://${NODE_IP}:${NODE_PORT}/api/data\`);
    } catch (error) {
      return new Response("Service unavailable", { status: 503 });
    }
  }
};
```

如果你想连的是组网服务器局域网里的其它机器（例如 10.0.1.50），只要 Mesh Node 那边做好了路由，同样可以直接用局域网 IP 去 fetch。

## 防踩坑指南

跑不通的时候别急着怀疑人生，重点看看这几个坑：

- **最大的坑：分割隧道（Split Tunnel）把你拉黑了** 客户端默认的排除策略里很可能会包含 100.64.0.0/10，而 Mesh 分配的段刚好是 100.96.0.0/12（后者被前者的网段包含进去了）。这会导致你本地发往 Mesh IP 的请求根本不走 CF 代理。赶紧去 Zero Trust 后台的 Settings 检查下，把不该屏蔽的段给放行。

![图像](https://pbs.twimg.com/media/HGEvSMta4AEi9C-?format=jpg&name=large)

- **认清现实：只能用 IP，别整域名** 目前 Workers 调局域网服务只支持 IP 访问。虽然看着不够优雅，但也只能先这么用着，官方承诺的 Mesh DNS 支持后期会跟上。
- **老老实实敲命令，别等 Docker** 目前主要靠客户端或 Connector 接入，如果你想找 Docker 部署方案，还得再等等，官方的镜像还在画大饼阶段。
- **排障小建议** 如果 Dashboard 显示节点在线但死活连不通：
1. Windows 试试 Find-NetRoute -RemoteIPAddress "100.96.0.1" | Select-Object -Last 1 看看流量到底走没走 WARP。
2. 看下服务器有没有放行 100.96.0.0/12 的安全组和防火墙规则。
3. Ping 不通未必是网断了，可能单纯是你的服务器在装“死”禁了 ICMP，用 SSH 或者 curl 再确认一下。

## 写在最后

如果是日常用，前三个大步骤走完就足够你白嫖一个稳定的远程访问环境。如果你是生产需求想用 Workers VPC，考虑到它还在灰度期，上线前自己多测测，多盯紧一下官方文档。

**文章同步公众号：雨哥聊AI**