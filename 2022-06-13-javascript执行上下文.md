---
theme: vuepress # Markdown 主题，默认值：juejin
highlight: junjin # 代码高亮主题，默认值：theme 中指定，没有则默认为 juejin
---

持续创作，加速成长！这是我参与「掘金日新计划 · 6 月更文挑战」的第4天，[点击查看活动详情](https://juejin.cn/post/7099702781094674468 "https://juejin.cn/post/7099702781094674468")

> 首先从宏观的角度来说: JavaScript代码要想能够被执行，就必须先被 JavaScript 引擎编译，编译完成之后才会进入到执行阶段，总结为六个字：`先编译再执行`。
    
在编译的过程中，同时会生成`执行上下文`。最开始执行代码的时候通常会生成`全局执行上下文`、执行一个函数时会生成该函数的执行上下文、当执行一个代码块时也会生成代码块的可执行上下文。所以一段代码可以说成是先编译再执行，那么整个过程就是无数个`先编译再执行`构成的(通常编译发生在执行代码前的几微秒，甚至更短的时间)。

我们再来理解一下上面说到的`执行上下文`, 在`JavaScript 高级程序设计（第四版）`中大概是这样描述的：

> `执行上下文`的概念在JavaScript中是非常重要的。变量或者函数的`执行上下文`决定了它们可以访问哪些数据，以及他们拥有哪些行为（可以执行哪些方法吧）。每个`执行上下文`都有一个关联的`变量对象`，而这个`执行上下文`中定义的所有变量和函数都存在于这个对象上。这个对象我们在代码中是无法访问的，不过可以通过谷歌浏览器的开发者工具看到它们,这个下面我们提到。

`执行上下文`可以说是执行一段JavaScript代码的运行环境。

简单的理解一下概念（下文如果再需要的时候你可以返回顶部再次理解查看）后，我们就来看看JavaScript是怎么将一个变量和函数运行起来的。

## 1\.准备测试代码

这里为了更直观的查看代码的运行效果，我特意新建了一个xxxx.html文件，文件所有代码如下所示：
这里突然发现html文件中只有script标签和js代码也是可以执行的，不清楚以前是不是也是可以，还是说JavaScript引擎在后期做了优化处理。

```javascript
<script>
    a_Function()
    var a_variable = 'aehyok'
    console.log(a_variable)
    function a_Function() {
      console.log('函数a_Function执行了', a_variable);
    }
</script>
```
> 特别强调一个点，我上面声明变量使用的var关键字

运行后的执行结果

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/98b69723ec9b4acca82c28e36beecaf8~tplv-k3u1fbpfcp-watermark.image?)
## 2\.调试var声明的变量

相信通过运行结果，你心中应该有了自己的代码执行过程了。我们接着往下操作，在`第2行代码`(下文截图中的位置)打个调试断点，如下图所示

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3471272a2df045148699bfc22c83ac0b~tplv-k3u1fbpfcp-watermark.image?)

此时代码已经准备开始要执行a_Function函数了。脑补一下，我们就以此为分割点（按正常来说这肯定是不合理的，因为代码已经开始执行了，不过你可以暂且这样尝试去理解一下），就是运行到`第2行代码`之前的时间段或者状态，我们就称它为`编译阶段`，这之后代码就开始运行了，我们称它为`执行阶段`。

  1、通过截图可以发现，作用域下的全局 已经有了一个`a_Function`函数，以及一个`a_variable`变量其值为 undefined，这里可以看到许许多多的其他变量、函数，这其实就是全局window对象。
  
  2、使用过JavaScript的人都清楚，JavaScript是按照顺序执行代码的，但是通过截图去看，好像又不太对劲，所以执行前的编译阶段，JavaScript引擎还是处理了不少事情的,它做了什么事情呢？
  编译这段代码的时候，同时会生成一个全局的`执行上下文`，在截图的`第二行代码`发现是一个函数，便会在代码中查找到该函数的定义，并将该函数体放到全局`执行上下文`的`变量环境`中。该函数体里的代码还未执行，所以不会去编译，继续`第三行代码`,发现是var声明的一个变量，便会将该变量放到全局`执行上文`的`变量环境`中，同时给该变量赋值为undefined。
  
  具体如下模拟代码
  ```javascript
function a_Function() {
  console.log('函数a_Function执行了', a_variable);
}
var a_variable = undefined
  ```
  这段代码主要在编译代码阶段做了`变量提升`，会将变量和函数存放到`变量环境`中，而`变量环境`是存在于`执行上下文`的，变量的默认值会被设置为undefined，函数的执行体会被带到`变量环境`中
  然后还会生成`可执行代码`,其实编译生成的是字节码，下面的代码算是模拟代码：
  ```javascript
  a_Function()
  a_variable = 'aehyok'
  console.log(a_variable)
  ```
  - 执行阶段
    接下来开始按照顺序执行上面生成的`可执行代码`
```javascript
a_Function()
a_variable = 'aehyok'
console.log(a_variable)
```

   第一行模拟代码：先调用a_Function,执行a_Function中的代码，打印`函数a_Function执行了 undefined`,因为此时的a_variable还没给予赋值操作
   
   第二行模拟代码：对a_variable变量进行赋值字符串"aehyok",此时`变量环境`中的a_variable值变为"aehyok"
   
   第三行模拟代码：打印已经赋值为aehyok的变量。
## 3\.调试let声明的变量
#### 3\.1主要是将上面的测试代码中：声明变量的关键字`var`改为`let`
```javascript
<script>
    a_Function()
    let a_variable = 'aehyok'
    console.log(a_variable)
    function a_Function() {
      console.log('函数a_Function执行了', a_variable);
    }
</script>
```
执行代码以后发现直接报错了，报错内容如下图所示

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/178b1fbcd07e4b788c18b73d40b00277~tplv-k3u1fbpfcp-watermark.image?)

#### 3\.2打断点调试代码

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aaeb065c5b2c4416ad8286a586ee7bdc~tplv-k3u1fbpfcp-watermark.image?)
代码断点打到如截图中`第2行位置`，可以看到`let`声明的变量，存在于单独的`Script作用域`中，并且赋值为undefined。
#### 3\.3分析3.1和3.2的代码
- 通过`var`和`let`两种方式代码运行比对情况来看，`let`声明变量的方式不存在`变量提升`的情况。
- 通过3.2截图可以发现，`let`声明变量的方式，在作用域中的已经创建，并赋值为undefined,但通过查阅资料发现：
> let声明的变量，主要是因为V8虚拟机做了限制，虽然a_variable已经在内存中并且赋值为undefined，但是当你在let a_variable 之前访问a_variable时，根据ECMAScript定义，虚拟机会阻止的访问！也可以说成是形成了暂时性的死区，这是语法规定出来的。所以就会报错。


## 4\.调试let声明的变量继续执行
主要添加了一个let声明的变量，以及为其进行了赋值操作，代码如下所示
```javascript
<script>
  a_Function()
  var a_variable = 'a_aehyok'
  let aa_variable = 'aa_aehyok'
  console.log(a_variable)
  function a_Function() {
    console.log('函数a_Function执行了', a_variable);
  }
</script>
```
执行后情况截图如下

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b63bbea4b0d4903b105e504d3140eee~tplv-k3u1fbpfcp-watermark.image?)
可以发现通过var声明的变量和let(也可以使用const)声明的变量被储存在了不同的位置，之前上面说过通过var声明的变量被存放到了`变量环境`中了。那么现在我再告诉你，通过let（也可以是const）声明的变量被存放到了`词法环境`中了。

## 4、`变量环境`和`词法环境`的区别

## 总结
- 1、通过这篇简单的文章，我想我自己理清楚了，原来JavaScript代码是`先编译再执行`的。
- 2、然后代码在编译的时候就生成了`执行上下文`，也就是代码运行的环境。
- 3、var声明的变量存在`变量提升`，并且在编译阶段储存在了`变量环境`中。（后面的文章我会继续来学习一下`变量提升`存在的问题，以及如何解决）

   