import{_ as s,o as a,c as e,b as n}from"./app.6101b62d.js";const k=JSON.parse('{"title":"Intel x86_64","description":"","frontmatter":{},"headers":[{"level":2,"title":"腾飞  .net core","slug":"腾飞-net-core","link":"#腾飞-net-core","children":[]},{"level":2,"title":"k8s 入门第一讲","slug":"k8s-入门第一讲","link":"#k8s-入门第一讲","children":[]},{"level":2,"title":"minikube","slug":"minikube","link":"#minikube","children":[]},{"level":2,"title":"创建linux 用户","slug":"创建linux-用户","link":"#创建linux-用户","children":[]},{"level":2,"title":"minikube快速搭建K8s环境的工具(单机版)","slug":"minikube快速搭建k8s环境的工具-单机版","link":"#minikube快速搭建k8s环境的工具-单机版","children":[]},{"level":2,"title":"kubectl操作k8s的工具","slug":"kubectl操作k8s的工具","link":"#kubectl操作k8s的工具","children":[]},{"level":2,"title":"node节点(集群中的计算机被称为node)","slug":"node节点-集群中的计算机被称为node","link":"#node节点-集群中的计算机被称为node","children":[]},{"level":2,"title":"node节点的内容构成","slug":"node节点的内容构成","link":"#node节点的内容构成","children":[]},{"level":2,"title":"master node中的组件","slug":"master-node中的组件","link":"#master-node中的组件","children":[]},{"level":2,"title":"worker node节点的组件","slug":"worker-node节点的组件","link":"#worker-node节点的组件","children":[]},{"level":2,"title":"插件（addon）","slug":"插件-addon","link":"#插件-addon","children":[]},{"level":2,"title":"k8s开启dashboard","slug":"k8s开启dashboard","link":"#k8s开启dashboard","children":[]},{"level":2,"title":"pod","slug":"pod","link":"#pod","children":[]},{"level":2,"title":"docker 版本升级","slug":"docker-版本升级","link":"#docker-版本升级","children":[]},{"level":2,"title":"ubuntu 界面开启","slug":"ubuntu-界面开启","link":"#ubuntu-界面开启","children":[]},{"level":2,"title":"centos 安装docker","slug":"centos-安装docker","link":"#centos-安装docker","children":[]}],"relativePath":"javascript/2023-01-10-k8s.md","lastUpdated":1711795643000}'),l={name:"javascript/2023-01-10-k8s.md"},p=n(`<h2 id="腾飞-net-core" tabindex="-1">腾飞 .net core <a class="header-anchor" href="#腾飞-net-core" aria-hidden="true">#</a></h2><ul><li>k8s <a href="https://ke.qq.com/course/1466732#term_id=101564728" target="_blank" rel="noreferrer">https://ke.qq.com/course/1466732#term_id=101564728</a></li></ul><h4 id="k8s-是什么" tabindex="-1">k8s 是什么 <a class="header-anchor" href="#k8s-是什么" aria-hidden="true">#</a></h4><p>自动化部署、扩容以及运维的开源平台</p><p>节省资源 优化硬件资源作用</p><h4 id="k8s实战" tabindex="-1">k8s实战 <a class="header-anchor" href="#k8s实战" aria-hidden="true">#</a></h4><h2 id="k8s-入门第一讲" tabindex="-1">k8s 入门第一讲 <a class="header-anchor" href="#k8s-入门第一讲" aria-hidden="true">#</a></h2><ul><li><a href="https://time.geekbang.org/column/article/529780" target="_blank" rel="noreferrer">https://time.geekbang.org/column/article/529780</a></li></ul><h2 id="minikube" tabindex="-1">minikube <a class="header-anchor" href="#minikube" aria-hidden="true">#</a></h2><h1 id="intel-x86-64" tabindex="-1">Intel x86_64 <a class="header-anchor" href="#intel-x86-64" aria-hidden="true">#</a></h1><p>curl -Lo minikube <a href="https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64" target="_blank" rel="noreferrer">https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64</a></p><h1 id="apple-arm64" tabindex="-1">Apple arm64 <a class="header-anchor" href="#apple-arm64" aria-hidden="true">#</a></h1><p>curl -Lo minikube <a href="https://storage.googleapis.com/minikube/releases/latest/minikube-linux-arm64" target="_blank" rel="noreferrer">https://storage.googleapis.com/minikube/releases/latest/minikube-linux-arm64</a></p><p>sudo install minikube /usr/local/bin/</p><h2 id="创建linux-用户" tabindex="-1">创建linux 用户 <a class="header-anchor" href="#创建linux-用户" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 创建用户</span></span>
<span class="line"><span style="color:#babed8;">useradd aehyok</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 设置密码</span></span>
<span class="line"><span style="color:#babed8;">passwd aehyok aehyok</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 切换用户</span></span>
<span class="line"><span style="color:#babed8;">su aehyok  </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 删除用户</span></span>
<span class="line"><span style="color:#babed8;">userdel aehyok</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="minikube快速搭建k8s环境的工具-单机版" tabindex="-1">minikube快速搭建K8s环境的工具(单机版) <a class="header-anchor" href="#minikube快速搭建k8s环境的工具-单机版" aria-hidden="true">#</a></h2><p>找到对应版本的下载链接，<a href="https://minikube.sigs.k8s.io/docs/start/" target="_blank" rel="noreferrer">https://minikube.sigs.k8s.io/docs/start/</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"># Intel x86_64</span></span>
<span class="line"><span style="color:#babed8;">curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># Apple arm64</span></span>
<span class="line"><span style="color:#babed8;">curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-arm64</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">sudo install minikube /usr/local/bin/</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">minikube version</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="kubectl操作k8s的工具" tabindex="-1">kubectl操作k8s的工具 <a class="header-anchor" href="#kubectl操作k8s的工具" aria-hidden="true">#</a></h2><p>kubectl 来操作k8s,它位于集群之外，不属于集群</p><ul><li>查看节点状态</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 安装kubectl</span></span>
<span class="line"><span style="color:#babed8;">minikube kubectl</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 启动</span></span>
<span class="line"><span style="color:#babed8;">minikube start --kubernetes-version=v1.23.3</span></span>
<span class="line"><span style="color:#babed8;">minikube start --image-mirror-country=&#39;cn&#39; --driver=docker --kubernetes-version=v1.23.3 --force</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 快捷命令</span></span>
<span class="line"><span style="color:#babed8;">alias kubectl=&quot;minikube kubectl --&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 设置永久生效</span></span>
<span class="line"><span style="color:#babed8;">vim ~/.bashrc</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//alias kubectl=&quot;minikube kubectl --&quot; 将这一行加入</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看版本</span></span>
<span class="line"><span style="color:#babed8;">kubectl version</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 运行一个nginx （类似于docker run ） 指定镜像 自动拉取运行</span></span>
<span class="line"><span style="color:#babed8;">kubectl run ngx --image=nginx:alpine </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 穿了马甲的容器</span></span>
<span class="line"><span style="color:#babed8;">kubectl get pod </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">kubectl get pod xxx(name)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看日志</span></span>
<span class="line"><span style="color:#babed8;">kubectl log xxx(name)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 拷贝文件</span></span>
<span class="line"><span style="color:#babed8;">// 将本地文件拷贝到pod</span></span>
<span class="line"><span style="color:#babed8;">kubectl cp  a.txt ngx:/tmp</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 进入pod内部(需要在pod后面加上--)</span></span>
<span class="line"><span style="color:#babed8;">kubectl exec  -it ngx--  sh</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="node节点-集群中的计算机被称为node" tabindex="-1">node节点(集群中的计算机被称为node) <a class="header-anchor" href="#node节点-集群中的计算机被称为node" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">kubectl get node</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>Master 和 Node 的划分不是绝对的。当集群的规模较小，工作负载较少的时候，Master 也可以承担 Node 的工作。 就像我们搭建的 minikube 环境，它就只有一个节点，这个节点既是 Master 又是 Node。</p><p>控制面的节点为Master node (K8s的核心) 数据面的节点为Worker node(用来干活的)</p><h2 id="node节点的内容构成" tabindex="-1">node节点的内容构成 <a class="header-anchor" href="#node节点的内容构成" aria-hidden="true">#</a></h2><p>k8s的节点主要由很多的模块构成，而这些模块又分为组件（component）和插件（addon）两类。 组件实现了k8s的核心功能，没有这些组件k8s是无法启动的，而插件则是一些附加的功能，不安装也不影响k8s的运行。</p><h2 id="master-node中的组件" tabindex="-1">master node中的组件 <a class="header-anchor" href="#master-node中的组件" aria-hidden="true">#</a></h2><p>apiserver、etcd、scheduler、controller-manager</p><ul><li>apiserver 是整个 Kubernetes 系统的唯一入口，它对外公开了一系列的 RESTful API，并且加上了验证、授权等功能， 所有其他组件都只能和它直接通信，可以说是 Kubernetes 里的联络员。</li><li>etcd 是一个高可用的分布式 Key-Value 数据库，用来持久化存储系统里的各种资源对象和状态，相当于 Kubernetes 里的配置管理员。 注意它只与 apiserver 有直接联系，也就是说任何其他组件想要读写 etcd 里的数据都必须经过 apiserver。</li><li>scheduler 负责容器的编排工作，检查节点的资源状态，把 Pod 调度到最适合的节点上运行，相当于部署人员。因为节点状态和 Pod 信息都存储在 etcd 里， 所以 scheduler 必须通过 apiserver 才能获得。</li><li>controller-manager 负责维护容器和节点等资源的状态，实现故障检测、服务迁移、应用伸缩等功能，相当于监控运维人员。 同样地，它也必须通过 apiserver 获得存储在 etcd 里的信息，才能够实现对资源的各种操作。</li></ul><p>查看master node中组件的运行状态</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">kubectl get pod -n kube-system</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="worker-node节点的组件" tabindex="-1">worker node节点的组件 <a class="header-anchor" href="#worker-node节点的组件" aria-hidden="true">#</a></h2><p>kubelet、kube-proxy、container-runtime。</p><ul><li>kubelet kubelet 是 Node 的代理，负责管理 Node 相关的绝大部分操作，Node 上只有它能够与 apiserver 通信，实现状态报告、命令下发、启停容器等功能，相当于是 Node 上的一个“小管家”。</li><li>kube-proxy kube-proxy 的作用有点特别，它是 Node 的网络代理，只负责管理容器的网络通信，简单来说就是为 Pod 转发 TCP/UDP 数据包，相当于是专职的“小邮差”。</li><li>container-runtime 第三个组件 container-runtime 我们就比较熟悉了，它是容器和镜像的实际使用者，在 kubelet 的指挥下创建容器，管理 Pod 的生命周期，是真正干活的“苦力”。</li></ul><p>Kubernetes 的定位是容器编排平台，所以它没有限定 container-runtime 必须是 Docker， 完全可以替换成任何符合标准的其他容器运行时，例如 containerd、CRI-O 等等，只不过在这里我们使用的是 Docker。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 登录节点</span></span>
<span class="line"><span style="color:#babed8;">minikube ssh</span></span>
<span class="line"><span style="color:#babed8;">// 通过docker查看 kube-proxy</span></span>
<span class="line"><span style="color:#babed8;">docker ps |grep kube-proxy</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>而kubelet的查看不在docker中，要通过ps</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">ps -ef|grep kubelet</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="插件-addon" tabindex="-1">插件（addon） <a class="header-anchor" href="#插件-addon" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 查看所有的插件组件</span></span>
<span class="line"><span style="color:#babed8;">minikube addons list</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="k8s开启dashboard" tabindex="-1">k8s开启dashboard <a class="header-anchor" href="#k8s开启dashboard" aria-hidden="true">#</a></h2><ul><li><p>kubectl proxy --address=0.0.0.0 ngx 6666:6666</p></li><li><p>固定端口访问以及nginx配置转发</p><ul><li><a href="https://blog.csdn.net/b5wang/article/details/107028664" target="_blank" rel="noreferrer">https://blog.csdn.net/b5wang/article/details/107028664</a></li></ul></li><li><p>dashboard</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;"> server {</span></span>
<span class="line"><span style="color:#babed8;">  listen 8500;</span></span>
<span class="line"><span style="color:#babed8;">  location / {</span></span>
<span class="line"><span style="color:#babed8;">    proxy_pass http://k8sserver;</span></span>
<span class="line"><span style="color:#babed8;">      proxy_redirect default;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">  upstream k8sserver {</span></span>
<span class="line"><span style="color:#babed8;">    server 192.168.49.2:30080;</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="pod" tabindex="-1">pod <a class="header-anchor" href="#pod" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">// 创建</span></span>
<span class="line"><span style="color:#babed8;">kubectl apply -f xxxx.yml</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 删除</span></span>
<span class="line"><span style="color:#babed8;">kubectl delete -f xxxx.yml</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">kubectl delete pod xxx (yml中的name)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// k8s不像docker一样，有前台运行和后台运行，k8s都是后台运行  如果想看日志</span></span>
<span class="line"><span style="color:#babed8;">kubectl log xxx(name)</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看pod</span></span>
<span class="line"><span style="color:#babed8;">kubectl get pod</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 查看pod更详细的状态</span></span>
<span class="line"><span style="color:#babed8;">kubectl describe pod xxx(name) </span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="docker-版本升级" tabindex="-1">docker 版本升级 <a class="header-anchor" href="#docker-版本升级" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.csdn.net/qq_50854662/article/details/127844250" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_50854662/article/details/127844250</a></li></ul><h2 id="ubuntu-界面开启" tabindex="-1">ubuntu 界面开启 <a class="header-anchor" href="#ubuntu-界面开启" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.csdn.net/m0_56051805/article/details/126277587" target="_blank" rel="noreferrer">https://blog.csdn.net/m0_56051805/article/details/126277587</a></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">apt update</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 一键安装</span></span>
<span class="line"><span style="color:#babed8;">curl -sSL https://get.daocloud.io/docker | sh</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker version</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">docker network ls</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">ifconfig</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="centos-安装docker" tabindex="-1">centos 安装docker <a class="header-anchor" href="#centos-安装docker" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">yum install docker-ce -y</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,55),o=[p];function t(i,r,c,d,b,u){return a(),e("div",null,o)}const y=s(l,[["render",t]]);export{k as __pageData,y as default};
