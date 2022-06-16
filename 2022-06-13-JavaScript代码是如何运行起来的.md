https://time.geekbang.org/column/article/211682
https://segmentfault.com/a/1190000022062181

- https://juejin.cn/post/7039340120696160269#heading-8

---
theme: vuepress # Markdown 主题，默认值：juejin
highlight: junjin # 代码高亮主题，默认值：theme 中指定，没有则默认为 juejin
---
持续创作，加速成长！这是我参与「掘金日新计划 · 6 月更文挑战」的第5天，[点击查看活动详情](https://juejin.cn/post/7099702781094674468 "https://juejin.cn/post/7099702781094674468")

你就说吧，有没有资格，有没有资格，有没有资格，肯定有资格的。哈哈。因为我大致了解清楚了，也大致搞明白了一点了。


我们知道，机器是不能直接理解我们平常工作或者自己学习的代码的。所以，在执行程序之前，需要将代码翻译成机器能读懂的机器语言。按语言的执行流程，可以把计算机语言划分为编译型语言和解释型语言：

> 编译型语言：在代码运行前编译器直接将对应的代码转换成机器码，运行时不需要再重新翻译，直接可以使用编译后的结果；

> 解释型语言：需要将代码转换成机器码，和编译型语言的区别在于运行时需要转换。解释型语言的执行速度要慢于编译型语言，因为解释型语言每次执行都需要把源码转换一次才能执行。

Java 和 C++ 等语言都是编译型语言，而 JavaScript 是解释性语言，它整体的执行速度会略慢于编译型的语言。V8 是众多JavaScript引擎中性能表现最好的一个，并且它是 Chrome 的内核，Node.js 也是基于 V8 引擎研发的。

一年半经验的前端也有资格了解JavaScript的V8引擎吗？

## 1、运行的整体过程

![未命名文件.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/710ea72748d04204b478de0ccdf49f24~tplv-k3u1fbpfcp-watermark.image?)

## 2、英译汉翻译的过程
    比如我们看到了google V8官网的一篇英文文章 [https://v8.dev/blog/faster-class-features](https://v8.dev/blog/faster-class-features),在阅读的过程中，可以就是要对每一个单词进行解析翻译成中文，然后多个单词进行语法的解析，再通过对整句话进行整个语句进行解析，那么这句话就翻译结束了。

    I am a programmer。
- 1、首先对输入的字符串`I am a programmer。`进行拆分便会拆分成 `I` `am` `a` `programmer` `。`  
> 相当于词法分析
- 2、`I` 是一个主语， `am` 是一个谓语， `a`是一个形容词， `programmer`是个名词， `。`标点符号。

- 3、`I` 是`我`的意思， `am` 是`是`的意思， `a`是`一个`的意思， `programmer`是`程序员`的意思， `。`是`句号`的意思。

> 2和3一起相当于语法分析

- 4、对3中的语法分析进行拼接处理：`我是一个程序员`。当然这是非常简单的一个英译汉，一篇文章的话，就会复杂一些了。

> 语义分析

## V8运行的整个过程

①准备一段JavaScript源代码
```javascript
let a = 10
```
- ②词法分析：
    
一段源代码，就是一段字符串。编译器识别源代码的第一步就是要进行分词，将源代码拆解成一个个的token。所谓的`token`,就是不可再分的单个字符或者字符串。

- ③token

通过 https://esprima.org/demo/parse.html 可以查看生成的tokens,也就是上面那段源代码生成的所有token。
Token类别： 关键字、标识符、字面量、操作符、数据类型（String、Numeric）等


- ④语法分析

将上一步生成的 token 数据，根据语法规则转为 AST。通过https://astexplorer.net 可以查看生成AST抽象语法树。

- ⑤AST

生成的AST如下图所示，生成过程就是先分词（词法分析），再解析（语法分析）

- ⑥解释器

将AST生成字节码

- ⑦字节码
    
在最开始的V8引擎中是没有字节码，直接将AST转换为机器码的。这种架构存在的问题就是内存消耗特别大，尤其是在移动设备上，编译出来的机器码占了整个chorme浏览器的三分之一，这样为代码运行时留下的内存就更小了。
于是后来在V8中加入了Ignition 解释器，引入字节码，主要时为了减少内存消耗。

- ⑧热点代码

首先判断字节码是否为热点代码。通常第一次执行的字节码，Ignition 解释器会逐条解释执行。在执行的过程中，如果发现是热点代码，比如`for 循环中的代码被执行了多次`，这种就称之为热点代码。那么后台的TurboFan就会把该段热点代码编译为高效的机器码，然后再次执行这段被优化的代码时，只需要执行编译后的机器码就可以了， 这样就大大提升了代码的执行效率。


> Ignition 解释器: 可以将AST生成字节码，还可以解释执行字节码。






## 安装V8引擎
- 安装jsvu
```javascript
npm install jsvu -g
```
- 然后在命令行中直接运行jsvu,选择跟你电脑匹配的版本，我这里是64位的window10，所以选择 Windows 64-bit。
这里我安装的是v8和v8-debug。安装完毕后如下图所示
我的安装目录在C:\Users\aehyok\.jsvu，`aehyok`便是用户名，你也可以到对应的目录下去查找
## 生成命令行的帮助文档
```javascript
    //在C:\Users\aehyok\.jsvu文件夹中新建一个help.txt的文件
    // 通过v8或v8-debug 命令去生成帮助文档信息
    v8-debug --help >> help.txt
```
目前我使用过的命令行
```javascript
//参数看看 V8 引擎如何去优化
--trace-opt --trace-deopt

// 
```

## 新建测试js文件
```javascript
let aa = 10
```

