---
theme: vuepress
highlight: tomorrow-night
---

我报名参加金石计划1期挑战——瓜分10万奖池，这是我的第1篇文章，[点击查看活动详情](https://s.juejin.cn/ds/jooSN7t "https://s.juejin.cn/ds/jooSN7t")。


本文参加了由[公众号@若川视野](https://link.juejin.cn/?target=https%3A%2F%2Flxchuan12.gitee.io "https://link.juejin.cn/?target=https%3A%2F%2Flxchuan12.gitee.io") 发起的每周源码共读活动，[点击了解详情一起参与。](https://juejin.cn/post/7079706017579139102 "https://juejin.cn/post/7079706017579139102")

本文属于源码共读第19期 | axios 工具函数,[点击了解本期详情一起参与](https://juejin.cn/post/7083113675879350309)。



> 大家好，我是 `那个曾经的少年回来了`。10年前我也曾经年轻过，如今已步入被淘汰的年龄，但如下幡然醒悟，所以活在当下，每天努力一点点，来看看2024年的时候自己会是什么样子吧，2024年的前端又会是什么样子，而2024年的中国乃至全球又会变成什么样子，如果你也有想法，那还不赶紧行动起来。期待是美好的，但是更重要的是要为美好而为之奋斗付诸于行动。


## 两个箭头函数的演绎
```javascript
//这个在顶部单独拎出来的
const {toString} = Object.prototype;


const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));
```

上面kindOf方法由两个连续的箭头函数完成的，扎眼一看，确实看不明白。那我先来一个最简单的箭头函数

```javascript
const f = v => v;

// 等同于
const f = function (v) {
  return v;
};
```

相信有点JavaScript基础的朋友们应该都能看懂上面的代码，所以参考上面的小例子，来类比一下

```javascript
const kindOf = (function(cache) {
  // 也就是把第一个箭头函数后面全部返回即可

  return thing => {
      const str = toString.call(thing);
      return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
})(Object.create(null));
```

进一步的拆解便是这样的,将第二个箭头函数进行返回即可。

```javascript
const kindOf = function (cache) {
  return function (thing){
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));
```


首先提一下 Object.create(null) 就是生成一个空的对象 `{}`，创建完kindOf后先传入了一个空对象进行IIFE自执行闭包,cache 由字面意思便可以看出来缓存的意思，也就是传进来的空对象，在执行完闭包之后，cache就一直存在了不会释放掉，也就有了缓存的意思。

> 如果你想进一步了解一下闭包，我之前有整理过一篇非常容易理解的文章：\[https://juejin.cn/post/7120371754274553887](https://juejin.cn/post/7120371754274553887)


这样再来看这个函数，就非常的清晰了，这里截取了`[object Array]` `Array`, 从第八位字符串开始到最后。
所有最后总结这个kindOf函数的作用便是，传入一个值，输出一个类型。接下来就简单说明一下上面用到的 `toString`方法。

## toString方法的解析
```javascript
const {toString} = Object.prototype;
```

JavaScript中所有数据类型，都是对象的一种类型。有一句话总结为：万物皆对象。

下面我们就来看看对象衍生出来的类型有哪些？就可以通过Object.prototype.toString，来判断数据类型

```javascript
Object.prototype.toString.call(null); //  '[object Null]'

Object.prototype.toString.call(undefined); //'[object Undefined]'

Object.prototype.toString.call(123); //'[object Number]'

Object.prototype.toString.call(123n); //'[object BigInt]'

Object.prototype.toString.apply("123"); //'[object String]'

Object.prototype.toString.apply(true); //'[object Boolean]'

Object.prototype.toString.apply(Symbol()); //'[object Symbol]'

Object.prototype.toString.apply({}); // '[object Object]'

Object.prototype.toString.apply([]); // '[object Array]'

Object.prototype.toString.apply(new Date()); // "[object Date]"

Object.prototype.toString.apply(new Function()); // "[object Function]"
Object.prototype.toString.apply(function t() {}); // '[object Function]'

Object.prototype.toString.apply(Math); // '[object Math]'

Object.prototype.toString.apply(new RegExp()); //'[object RegExp]'
```
通过我的console打印可以非常明确的看到类型标注，这也是上面 `kindOf` 为什么使用了slice(8, -1)


通过Object.prototype.toString可以清晰的返回当前调用者的对象类型。可以说是判断数据类型的天花板级别的方法了。



## 判断数据类型方法整理

再来看一下下面的调用示例
```
const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}
```

这个函数相对来说就比较好理解，一个箭头函数里面开始执行，函数体第二行最终又返回一个箭头函数。
其实意思便是先传入一个类型，再通过返回的函数，传入某个参数，来判断参数的类型是否与type一致。

```javascript
// 判断是否为RegExp类型的方法
const isRegExp = kindOfTest('RegExp');

// 判断是否为日期类型的方法
const isDate = kindOfTest('Date');

// 判断是否为ArrayBuffer类型
const isArrayBuffer = kindOfTest('ArrayBuffer');

// 判断是否为文件类型的方法
const isFile = kindOfTest('File');

// 判断是否为Blob类型的方法
const isBlob = kindOfTest('Blob');

// 判断是否为文件列表类型 FileList的方法
const isFileList = kindOfTest('FileList');

// 判断是否为URLSearchParams类型的方法
const isURLSearchParams = kindOfTest('URLSearchParams');

// 判断是否为HTMLFormElement类型的方法
const isHTMLForm = kindOfTest('HTMLFormElement');

```





## 数组相关方法

// 判断是否为数组的方法

直接使用Array数组本身中的方法
```javascript
const {isArray} = Array;

```




## 常用方法


这是我之前整理的原型和原型链就是这么简单
[https://juejin.cn/post/7126061672032108551/](https://juejin.cn/post/7126061672032108551/)




> 我的个人博客：[http://vue.tuokecat.com/blog](http://vue.tuokecat.com/blog)

> 我的个人github：[https://github.com/aehyok](https://github.com/aehyok)

> 我的前端项目：pnpm + monorepo + qiankun + vue3 + vite3 + 工具库、组件库 + 工程化 + 自动化\
不断完善中,整体框架都有了 \
在线预览：[http://vue.tuokecat.com](http://vue.tuokecat.com) \
github源码：[https://github.com/aehyok/vue-qiankun](https://github.com/aehyok/vue-qiankun)   