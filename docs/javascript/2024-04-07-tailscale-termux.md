通过 tailscale termux clash 来手把手一步一步部署LLAMA大模型


## 手机上安装termux和tailscale

- termux: https://github.com/termux/termux-app
- tailscale: https://tailscale.com/download

## 小米手机上安装tailscale
Tailscale 是一种基于 WireGuard 的虚拟组网工具，它在用户态实现了 WireGuard 协议，相比于内核态 WireGuard 性能会有所损失，但在功能和易用性上下了很大功夫：
- 开箱即用
  - 无需配置防火墙
  - 没有额外的配置
- 高安全性/私密性
  - 自动密钥轮换
  - 点对点连接
  - 支持用户审查端到端的访问记录
- 在原有的 ICE、STUN 等 UDP 协议外，实现了 DERP TCP 协议来实现 NAT 穿透
- 基于公网的控制服务器下发 ACL 和配置，实现节点动态更新
- 通过第三方（如 Google） SSO 服务生成用户和私钥，实现身份认证
简而言之，我们可以将 Tailscale 看成是更为易用、功能更完善的 WireGuard。

我简单的来说明一下，我现在使用tailscale的场景，我有以下几台设备：
- 一台阿里云的linux服务器（有域名的）
- 一台小米手机（也是常开的）
- 一台windows电脑（在公司，一般不关机的）
- 一台mac电脑

也就是这几台设备，我可以进行组建局域网，例如我现在window电脑上部署了某个服务网站，按照常规来说我只能在我的window电脑上进行访问，但是现在我组建tailscale局域网，我就可以在我的小米手机上访问这个服务网站，甚至在公司的mac电脑上访问这个服务网站。而且如果我想对外公开这个网站，我可以在我的阿里云服务器上通过nginx进行代理跳转，这样我就可以在任何地方访问这个服务网站了。但是其实它是部署在我公司的window电脑上的。


大致知道tailscale是干什么的了。
那么首先我们在tailscale.com上进行注册一个账号，然后在对应的设备上安装上tailscale的客户端，然后绑定到tailscale平台上就可以了

tailscale平台对于服务端是没有进行开源的，所以就有了安全问题，如果你不放心的话，也可以选择完全开源的headscale，自己部署所有端进行管理使用
具体开源地址为：https://github.com/juanfont/headscale

## 小米手机上安装termux 
首先说明一下Termux是一个成熟的 Linux 终端，这里我是直接安装到我的小米手机上的。它是免费的，并且不需要root访问权限。Termux 可以从 Google Play 下载，该版本已经很旧了，并且 Termux 中的“pkg update”命令不再起作用。我阿里云盘上分享的是比较新的版本的APK文件，而且我使用下来是没什么问题的。较新版本也可以在 F-Droid 网站上以 APK 形式提供，建议下载该较新版本。
当 Termux 安装在安卓手机上以后，就可以看到如下图琐事的 Linux 命令行界面：
此处需要截图一下

理论上讲，我们可以直接在手机上输入所有命令，但是在小键盘上打字很不方便。所以我们选择通过pkg update的方法，安装 SSH：
```
pkg update
pkg upgrade
pkg install openssh
```
然后再在termux中启动ssh程序。获取手机的ssh登录的用户和密码
```
ssh
whoami
// 可以看到用户名 u0_a461
passwd
// 可以进行设置密码，并且需要输入确认密码

```


## tailscale
- linux上的安装指南，所有不同linux系统上安装应该都有 https://tailscale.com/download/linux/debian-stretch

## android 上同时使用 tailscale 和 clash 共存的方式
- https://www.kxxt.dev/blog/clash-for-android-and-tailscale/