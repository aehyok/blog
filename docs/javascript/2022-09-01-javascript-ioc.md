## IOC和DI 控制反转和依赖注入

-  https://www.cnblogs.com/jhli/p/6019895.html

## C#中三种方式
- 构造函数注入 https://www.cnblogs.com/GuZhenYin/p/8297145.html
- 属性注入 https://www.cnblogs.com/GuZhenYin/p/8301500.html
- 方法注入

## C# 注入的声明周期
- 唯一的
- 作用域
- 瞬时的
https://www.cnblogs.com/GuZhenYin/p/8297145.html
## 依赖
我们天天用来敲代码的电脑，以及天天用来扫码的手机，打开后你可以发现，里面会有各种各样的零件，
我们天天使用的项目中，会不断的npm install xxxx来安装我们项目中所需要的依赖。
https://zhuanlan.zhihu.com/p/125024256

我就拿微信来举例，那么首先先定义一个微信出来
```
class Weixin {
  constructor(name) {
    console.log(`我是${name}的微信`)
  }
}

let xiaoming = new Weixin('小明')
```
定义一个Weixin,并在下面实例了一个 `weixin`，执行后便会打印出 `我是小明的微信`

小明这里给微信配置了两个功能，一个是给好友发消息的功能，另外一个是发朋友圈的功能

```
// 给好友发消息的功能
class Message {
  Send(content) {
    console.log(`给小红发的消息：${content}`)
  }
}

//发布朋友圈的功能
class Friends {
  Send(content) {
    console.log(`发送朋友圈：${content}`)
  }
}
```
重新给weixin配置两个功能

```
class Weixin {
  constructor(name) {
    this.Friends = new Friends();
    this.Message = new Message();

    console.log(`我是${name}的微信`)
  }
}

let xiaoming = new Weixin('小明')

xiaoming.Message.Send('我们一起出去玩吧？')
xiaoming.Friends.Send('和小红出去玩的九宫格图片')
```


这个时候可以发现两个功能给Weixin配置出来了，但是这样有一个问题，每添加一个功能，都必须要修改Weixin这个类。
那有没有办法我们加入功能的时候不用再修改Weixin这个类呢？我们来试试看。


```
class Weixin {
  static functions = new Map()
  constructor(name) {
    for(let fun of Weixin.functions.values()) {
      fun.init(this);
    }
    console.log(`我是${name}的微信`)
  }

  static inject(module) {
    Weixin.functions.set(module.constructor.name, module);
  }
}

class Message {
  init(weixin) {
    weixin.Message = this;
  }
  Send(content) {
    console.log(`给小红发的消息：${content}`)
  }
}

class Friends {
  init(weixin) {
    weixin.Friends = this;
  }
  Send(content) {
    console.log(`发送朋友圈：${content}`)
  }
}

const message = new Message();
Weixin.inject(message);

const friends = new Friends();
Weixin.inject(friends);

let xiaoming = new Weixin('小明')

xiaoming.Message.Send('我们一起出去玩吧？')
xiaoming.Friends.Send('和小红出去玩的九宫格图片')

```

通过属性注入进一步解耦
```
function Inject(modules: any) {
  return function(target: any) {
    modules.forEach((module: any) => {
      target.prototype[module.name] = new module()
    })
  }
}

class Message {
  Send(content: string) {
    console.log(`给小红发的消息：${content}`)
  }
}

class Friends {
  Send(content: string) {
    console.log(`发送朋友圈：${content}`)
  }
}

@Inject([Message, Friends])
class Weixin {
  constructor(name: string) {
    console.log(`我是${name}的微信`)
  }
}
let xiaoming: any = new Weixin("小明")
xiaoming.Message.Send('我们一起出去玩吧？')
xiaoming.Friends.Send('和小红出去玩的九宫格图片')

```