import{_ as s,c as n,o as e,ag as t}from"./chunks/framework.ELrfyV9R.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2023-11-20-rabbitmq.md","filePath":"article/code/2023-11-20-rabbitmq.md","lastUpdated":1762770629000}'),p={name:"article/code/2023-11-20-rabbitmq.md"};function l(i,a,c,r,o,d){return e(),n("div",null,a[0]||(a[0]=[t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker search rabbitmq</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker pull rabbitmq</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run -restart always -itd --name rabbitmq -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin -p 15672:15672 -p 5672:5672 rabbitmq</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 15672进入rabbitmq数据管理后台的</span></span>
<span class="line"><span>上面创建并运行容器后其实已经设置用户名和密码来登录15672: admin  admin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sun s.....t</span></span>
<span class="line"><span>// 5672是通过代码接口访问队列的</span></span></code></pre></div><h2 id="rabbitmq-port-15672端口无法访问" tabindex="-1">rabbitmq port 15672端口无法访问 <a class="header-anchor" href="#rabbitmq-port-15672端口无法访问" aria-label="Permalink to &quot;rabbitmq port 15672端口无法访问&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/web18334137065/article/details/126327427" target="_blank" rel="noreferrer">https://blog.csdn.net/web18334137065/article/details/126327427</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker exec -it rabbitmq bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 进入容器启用插件</span></span>
<span class="line"><span>rabbitmq-plugins enable rabbitmq_management</span></span></code></pre></div><h2 id="登录后台后-创建一个用户" tabindex="-1">登录后台后，创建一个用户 <a class="header-anchor" href="#登录后台后-创建一个用户" aria-label="Permalink to &quot;登录后台后，创建一个用户&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> Users中 Add user,选择Tags,我暂时选项二的admin,相当于管理员</span></span>
<span class="line"><span></span></span>
<span class="line"><span> Virtual Hosts中 Add virtual host</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 点击Virtual Hosts中的Name , 在详情中然后将用户分配到Virtual Host中 选择用户 点击Set permission</span></span></code></pre></div><h2 id="virtual-host-虚拟主机" tabindex="-1">Virtual Host 虚拟主机 <a class="header-anchor" href="#virtual-host-虚拟主机" aria-label="Permalink to &quot;Virtual Host 虚拟主机&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> 它是一个逻辑上的分组概念，用于对消息队列、交换器、绑定等资源进行隔离。每个 Virtual Host 本质上都是一个小型的 RabbitMQ 服务器，拥有自己的队列、交换器、绑定和权限机制。这样设计的目的是为了在同一个 RabbitMQ 实例中支持多用户环境，使得不同的用户或应用能够在不互相干扰的情况下共享同一个 RabbitMQ 实例。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  使用 Virtual Host 的好处包括：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  隔离性：不同的 Virtual Host 之间是相互隔离的，一个 Virtual Host 中的配置、消息队列等不会影响到另一个 Virtual Host。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  安全性：可以对每个 Virtual Host 设置不同的访问控制，从而确保只有授权的用户可以访问特定的 Virtual Host。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  组织结构：通过 Virtual Host，可以按照项目、团队或应用的不同需求来组织消息队列，使结构更加清晰。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  在实际使用中，Virtual Host 是连接 RabbitMQ 时的一个参数，用户需要指定连接到哪个 Virtual Host。这样，用户或应用就能够仅访问该 Virtual Host 中的资源。</span></span></code></pre></div><h2 id="最简单的发布消息" tabindex="-1">最简单的发布消息 <a class="header-anchor" href="#最简单的发布消息" aria-label="Permalink to &quot;最简单的发布消息&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre></div><h2 id="持久化" tabindex="-1">持久化 <a class="header-anchor" href="#持久化" aria-label="Permalink to &quot;持久化&quot;">​</a></h2><ul><li>交换器、队列、消息</li><li><a href="https://juejin.cn/post/6844903935048679437" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903935048679437</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 声明交换器的持久化durable: true</span></span>
<span class="line"><span>channel.ExchangeDeclare(&quot;sun&quot;, ExchangeType.Fanout,durable:true, autoDelete: false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//</span></span></code></pre></div><h2 id="fanout模式" tabindex="-1">fanout模式 <a class="header-anchor" href="#fanout模式" aria-label="Permalink to &quot;fanout模式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- 发布订阅模式</span></span>
<span class="line"><span>- https://www.cnblogs.com/ysocean/p/9251884.html#_label2</span></span>
<span class="line"><span>- 广播模式：Fanout 交换机不考虑路由键（routing key）。当消息发送到 Fanout 交换机时，它会将消息广播到所有绑定到该交换机的队列。</span></span>
<span class="line"><span>- </span></span>
<span class="line"><span>一个消费者将消息首先发送到交换器，交换器绑定到多个队列，然后被监听该队列的消费者所接收并消费。</span></span>
<span class="line"><span>在RabbitMQ中，交换器主要有四种类型:direct、fanout、topic、headers，这里的交换器是 fanout。</span></span>
<span class="line"><span>如果消息发送到没有队列绑定的交换器时，消息将丢失，因为交换器没有存储消息的能力，消息只能存储在队列中。</span></span></code></pre></div><h2 id="direct模式" tabindex="-1">Direct模式 <a class="header-anchor" href="#direct模式" aria-label="Permalink to &quot;Direct模式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> - 路由模式</span></span>
<span class="line"><span> - https://www.cnblogs.com/ysocean/p/9251884.html#_label3</span></span>
<span class="line"><span></span></span>
<span class="line"><span> - 基于路由键匹配： Direct 交换机会根据消息的路由键和交换机上绑定的路由键进行匹配，只有当这两个键完全匹配时，消息才会被路由到对应的队列。</span></span>
<span class="line"><span> - 适用场景： 这种类型的交换机适用于路由特定规则的消息传递。例如，可以根据不同的路由键将不同类型的消息发送到不同的队列。</span></span>
<span class="line"><span> - 精确匹配： 消息必须有一个路由键，并且这个键需要与队列绑定时指定的路由键精确匹配，消息才能被正确地路由。</span></span></code></pre></div><h2 id="查看所有端口占用情况" tabindex="-1">查看所有端口占用情况 <a class="header-anchor" href="#查看所有端口占用情况" aria-label="Permalink to &quot;查看所有端口占用情况&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>// 查看所有端口占用情况</span></span>
<span class="line"><span>netstat -ntulp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>netstat -ntulp |grep 15672</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查看某个应用使用情况</span></span>
<span class="line"><span>ps -ef | grep nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 找到某个端口后</span></span></code></pre></div><h2 id="linux-防火墙最强使用指南" tabindex="-1">linux 防火墙最强使用指南 <a class="header-anchor" href="#linux-防火墙最强使用指南" aria-label="Permalink to &quot;linux 防火墙最强使用指南&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/wufaqidong1/article/details/126612203" target="_blank" rel="noreferrer">https://blog.csdn.net/wufaqidong1/article/details/126612203</a></li></ul><h2 id="net-core-下使用消息队列" tabindex="-1">.net core 下使用消息队列 <a class="header-anchor" href="#net-core-下使用消息队列" aria-label="Permalink to &quot;.net core 下使用消息队列&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/qq_38284923/article/details/119675498" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_38284923/article/details/119675498</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pkill docker </span></span>
<span class="line"><span>iptables -t nat -F </span></span>
<span class="line"><span>ifconfig docker0 down </span></span>
<span class="line"><span>brctl delbr docker0 </span></span>
<span class="line"><span>docker -d </span></span>
<span class="line"><span>service docker restart</span></span></code></pre></div><h2 id="rabbitmq-种类" tabindex="-1">rabbitmq 种类 <a class="header-anchor" href="#rabbitmq-种类" aria-label="Permalink to &quot;rabbitmq 种类&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre></div><h2 id="消息丢失" tabindex="-1">消息丢失 <a class="header-anchor" href="#消息丢失" aria-label="Permalink to &quot;消息丢失&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 生成者生产消息的 确认机制</span></span>
<span class="line"><span>// 开启消息队列的持久化数据： rabbitmq重启后所有队列和消息都会消失</span></span>
<span class="line"><span>// 消费者ack确认消息消费成功： ack可自动确认消息，也可以进行手动确认消息的消费</span></span></code></pre></div><h2 id="消息的顺序性" tabindex="-1">消息的顺序性 <a class="header-anchor" href="#消息的顺序性" aria-label="Permalink to &quot;消息的顺序性&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 对于需要消费保证顺序的，只需要部署一个消费者实例，即可保证消费消息的顺序性，再开启手动的ack确认机制</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 多个消费者实例是无法保证消费消息的有序性的</span></span></code></pre></div><h2 id="消息的重复消费" tabindex="-1">消息的重复消费 <a class="header-anchor" href="#消息的重复消费" aria-label="Permalink to &quot;消息的重复消费&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 确保消息只执行一次，   幂等等操作（mysql的唯一键约束、通过redis对消费的消息进行记录、消费执行前进行redis查询确认、）</span></span></code></pre></div><h2 id="rabbit-集群搭建" tabindex="-1">rabbit 集群搭建 <a class="header-anchor" href="#rabbit-集群搭建" aria-label="Permalink to &quot;rabbit 集群搭建&quot;">​</a></h2><ul><li><a href="https://mp.weixin.qq.com/s/j0fMHzz4yKbfCilWymQb2g" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/j0fMHzz4yKbfCilWymQb2g</a></li></ul><h2 id="参考文章" tabindex="-1">参考文章 <a class="header-anchor" href="#参考文章" aria-label="Permalink to &quot;参考文章&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7132268340541653005#heading-34" target="_blank" rel="noreferrer">https://juejin.cn/post/7132268340541653005#heading-34</a></li></ul><h2 id="net-core-中链接rabbitmq" tabindex="-1">.net core 中链接rabbitmq <a class="header-anchor" href="#net-core-中链接rabbitmq" aria-label="Permalink to &quot;.net core 中链接rabbitmq&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 安装rabbitmq的客户端</span></span>
<span class="line"><span>dotnet add package RabbitMQ.Client</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 初始化RabbitMQ 连接</span></span>
<span class="line"><span>var factory = new ConnectionFactory() { HostName = &quot;localhost&quot; };</span></span>
<span class="line"><span></span></span>
<span class="line"><span> this.connectionFactory = new ConnectionFactory</span></span>
<span class="line"><span> {</span></span>
<span class="line"><span>     HostName = this.option.Host,</span></span>
<span class="line"><span>     Port = this.option.Port,</span></span>
<span class="line"><span>     DispatchConsumersAsync = true</span></span>
<span class="line"><span> };</span></span></code></pre></div><h2 id="rabbitmq五种消息模型" tabindex="-1">rabbitmq五种消息模型 <a class="header-anchor" href="#rabbitmq五种消息模型" aria-label="Permalink to &quot;rabbitmq五种消息模型&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/ysocean/p/9251884.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/ysocean/p/9251884.html</a></li></ul><h2 id="rabbitmq-从零到高可用的集群" tabindex="-1">rabbitmq 从零到高可用的集群 <a class="header-anchor" href="#rabbitmq-从零到高可用的集群" aria-label="Permalink to &quot;rabbitmq 从零到高可用的集群&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/wei325/p/15174212.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/wei325/p/15174212.html</a></li></ul>`,42)]))}const u=s(p,[["render",l]]);export{b as __pageData,u as default};
