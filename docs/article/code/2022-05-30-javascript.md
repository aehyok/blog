- https://github.com/KieSun/all-of-frontend

- https://juejin.cn/post/7109022732162957342#heading-0
  - https://github.com/lio-mengxiang/node-interview
  - typeof 
  - Object.prototype.toString.call()
  - 原型和原型链
  - 作用域
  - 执行上下文
  - 闭包
  - 
## 1、数据类型

- 基本数据类型
  - 布尔类型
  - Null 类型
  - Undefined 类型
  - Number 类型
  - 字符串类型
  - Symbol 类型（ES6 添加）
  - BigInt 类型（ES2020 添加）
- 引用类型
  - Object对象
  - Array 数组
  - Function 函数对象

基本数据类型存储的数据存在栈中，引用类型的引用地址存在栈中，真实的数据存储在堆中，通过引用地址进行关联。

## 2、类型判断

- typeof 能够判断出的类型

  通过浏览器控制台直接可以输出

```javascript
  typeof undefined; //undefined
  typeof null; //object
  typeof NaN; // number 要注意的点
  typeof 10; // number 但要注意NaN
  typeof '';//string
  typeof true; //boolean
  typeof {}; // object
  typeof Symbol(); // symbol

  //object,结果都是object，那么对于object如何判断呢，我们接着看下面的instanceof
  typeof []  new Date()  new RegExp()

  typeof new Function(); // function

  typeof typeof 10  // string   typeof 10先返回一个"number" 然后typeof "number" 自然返回string
```

## typeof null 输出 object

  null 作为一个基本数据类型为什么会被 typeof 运算符识别为 object 类型呢？这个 bug 是第一版 Javascript 留下来的，javascript 中不同对象在底层都表示为二进制，而 javascript 中会把二进制前三位都为 0 的判断为 object 类型，而 null 的二进制表示全都是 0，自然前三位也是 0，所以执行 typeof 时会返回 'object'。 ----引用自《你不知道的 javascript（上卷）》

## typeof NaN 输出为 number

  NaN ，可以翻译为 not a number ，即不是一个数字。 NaN 是一个“警戒值”（sentinel value，有特殊用途的常规值），常用来指出数字类型中的错误情况，即：“执行数学运算没有成功，这是返回的结果”
  所以有时候我们判断的时候可能要通过 Number.isNaN，而 Number.isNaN 是 ES6 中新增的函数，Number.isNaN()只有对于 NaN 才返回 true，非 NaN 一律返回 false。

  | 这里还要关注一下 IsNaN 方法，和 Number.isNaN 的区别 https://juejin.cn/post/6844903507368083469,简单来说 isNaN 之前算是 bug 吧，然后 ES6 新增了 Number.isNaN。

- 为什么 typeof new Function() 不返回 object？？？？？

## instanceof 判断对象的具体类型

  注意首先要先是一个 object 才行
  '' , null, undefined 分别去 instanceof object 都会是 false， 首先他们都不是 object，不能用于判断原始类型哟
  typeof null 结果为 object，但是 instanceof 就不认为它是一个 object 了

```javascript
  // 这里是会报错的，因为{} 有可能是一个代码块有可能是一个空对象，两种可能性不能100%的确定它就是一个对象
  {} instanceof Object   // Uncaught SyntaxError: Unexpected token 'instanceof'
  ({}) instanceof Object  // true

  new Function() instanceof Function  // true
  new Function() instanceof Object // true

  new Date() instanceof Date;  //true
  new Date() instanceof Object;//true

  new RegExp() instanceof RegExp // true
  new RegExp() instanceof Object // true

  function Animal() {}
  new Animal() instanceof Animal  // true
  new Animal() instanceof Object // true
```

## constructor 通过构造函数判断数据类型

```javascript
// 基本类型 null
let n = null;
n.constructor; //Uncaught TypeError: Cannot read properties of null (reading 'constructor')

// 基本类型 undefined
let u = undefined;
u.constructor; //Uncaught TypeError: Cannot read properties of null (reading 'constructor')

// 基本类型 boolean
true.constructor === Boolean; // true

// 基本类型字符串
"1".constructor === String; // true

// 基本类型Symbol
let s = Symbol();
s.constructor === Symbol; // true

// 基本类型 Number
const num = 100; //或者 使用 new Number()
num.constructor === Number; // true

// 基本类型 GigInt
let b = BigInt(100);
(b.constructor ===
  BigInt(
    // true

    {}
  ).constructor) ===
  Object; // true

const fun = function () {};
fun.constructor === Function; // true

//对象数组类型
let a = [];
a.constructor === Array; // true

//对象正则类型
let r = new RegExp();
r.constructor === RegExp; // true

// 对象日期类型
const d = new Date();
d.constructor === Date; //true

// Math的构造函数在Object上
const m = Math;
m.constructor === Math; // false
m.constructor === Object; // true
```

提到 constructor 构造函数，又有一个知识点 constructor、**proto**、prototype

- Object.prototype.toString.call（或者 apply）

  判断数据类型,该是什么类型就是什么类型（宇宙最强类型判断方法嘛）

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

| 这里又映射出一个知识点 call apply bind

# this call apply bind

- this 永远指向最后调用它的那个对象

  我们先来看一段代码

  ```javascript
  var name = "windowsName";

  function fn() {
    var name = "aehyok";
    innerFunction();
    function innerFunction() {
      console.log(this.name); // windowsName
    }
  }

  fn();
  ```

  这里的 innerFunction() 的调用,它就是作为一个函数调用的，没有挂载在任何对象上，所以对于没有挂载在任何对象上的函数，在非严格模式下 this 就是指向 window,在严格模式下 this 指向 undefined.
  这里顺便学一下严格模式：
  保证合理性、保证安全性、提高编译速度何运行速度
  通过 'use strict'; 可以为脚本、或者某个函数开启严格模式

- 改变 this 指向的方式
  - 通过箭头函数
  - 通过声明 let \_this = this,然后再需要的地方使用\_this 即可
  - 就是使用 call apply bind
    - fun.apply(thisArgs, [arg1, arg2]) 参数通过数组的方式传递
    - fun.call(thisArgs, arg1, arg2) 参数通过多个参数传递
    - fun.bind(thisArgs, arg1, arg2)() bind 相当于创建一个新的函数，我们还需要手动调用

```javascript
// https://juejin.cn/post/6844903496253177863
```

# 上面说到了 this,这里就需要了解一下闭包

```javascript
  https://juejin.cn/post/6844903858636849159
```

# 讲到闭包，里面包含了作用域，那么就要看一下 var let const

# constructor、**proto**、prototype、原型链

```javascript
  // 这是我见过最好理解的了，写的非常棒
  https://juejin.cn/post/6844903837623386126

```

# 8、 {} + 10 https://juejin.cn/post/6916876446766104589

# Object.assign 数据合并

# 浏览器滚动

```javascript
  https://mp.weixin.qq.com/s/tkX-F5cQHaBP15oCJ2BJZw
```

# for of 、 for in 、 forEach

- forEach 就是循环遍历每一个元素，不能中断跳出的，你愣是说能的话，那么可以通过抛出异常的方式，但还是尽量少用

```javascript
try {
  let arr = [1, 2, 3, 4, 5];
  arr.forEach((item) => {
    if (item === 3) {
      throw new Error("到了该跳出的时候了");
    }
    console.log(item);
  });
} catch (e) {
  console.log(e.message, "break跳出循环了");
}
```

- for in 和 for of

  - for in 遍历的是 key,拿上面 forEach 的 arr 来说，就是 0,1,2,3,4

  ```javascript
  let arr = [1, 2, 3, 4, 5];
  for (let item of arr) {
    console.log(item);
  }
  ```

  - for of 遍历的是 value，拿上面 forEach 的 arr 来说，就是 1,2,3,4,5

  ```javascript
  let arr = [1, 2, 3, 4, 5];
  for (let item in arr) {
    console.log(item);
  }
  ```

  - for in 可以遍历对象，for of 不可以

  ```javascript
  const obj = { a: 1, b: 2, c: 3 };
  for (let item in obj) {
    console.log(item, obj[item]); // key value
  }
  ```

  - for of 可以遍历具有 iterator 迭代器的数据结构对象，比如 Map、Set、Array、NodeList、Arguments、String、TypedArray 等等

- 顺便学一下 ES6 中的 Iterator 遍历器


- 创建对象 {}、new Object、 Object.create()
  - https://juejin.cn/post/6844903917835436045

- Object.defineProperty

- Proxy

Object.defineProperty([], function)

- 浅拷贝和深拷贝
    - https://juejin.cn/post/7072528644739956773
- 闭包的使用场景和作用
  - https://juejin.cn/post/6937469222251560990#heading-9

- 原型和原型链
  - https://juejin.cn/post/7007416743215759373
  - https://juejin.cn/post/6934498361475072014#comment
  - https://juejin.cn/post/6844903930216841230

- 事件循环 微任务和宏任务
  - https://juejin.cn/post/7108751200262029319 
  - https://juejin.cn/post/6844904079353708557
  - https://juejin.cn/post/6844903638238756878
  
- 浏览器的进程
  - http://www.icodebang.com/article/297787
  - https://segmentfault.com/a/1190000041404464
  - https://www.cnblogs.com/gaokai/p/15613916.html  
  - https://juejin.cn/post/6932762257675780103

- 浏览器渲染的过程
  - https://juejin.cn/post/7117815711078023198


- - 1、将数组对象，转换为Map数据的基本操作
  const list = [{id: 1, name: 'aehyok'}, { id: 2, name: 'test'}]

  const newList = new Map<number, any>(
    list.map(node => [node.id, node])
  )

  console.log(newList, 'newList')
    //4、将枚举转换成数组
    const columnList = []
    for (const [key, value] of Object.entries(ColumnType)) {
      console.log(key, value, 'key-value')
      columnList.push({
        key,value
      })
    }
  ```



- 4、配置路径别名
  ```javascript
     // vite.config.ts
       resolve: {
        alias: [
          {
            find: 'vue-i18n',
            replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
          },
          {
            find: /\/@\//,
            replacement: pathResolve('src') + '/',
          },
          // /#/xxxx => types/xxxx
          {
            find: /\/#\//,
            replacement: pathResolve('types') + '/',
          },
        ],
      },

      // 同时ts.config中进行配置
      "paths": {
        "/@/*": [
          "src/*"
        ],
        "/#/*": [
          "types/*"
        ]
      }
  ```
- 、、类型“Window & typeof globalThis”上不存在属性“webkit”。ts(2339)
  ```javascript
     // 可在全局的d.ts文件中进行TS声明
     interface Window {
      webkit: any
    }
  ```
 - 3、ref reactive props computed使用typescript
  - https://juejin.cn/post/6966502107230765070 
 - 4、defineProps和defineEmits
  - https://juejin.cn/post/7012814138145505287 

  https://github.com/vbenjs/vue-vben-admin
  https://github.com/biaochenxuying/blog-vue-typescript
  https://github.com/buqiyuan/vite-vue3-lowcode
  https://github.com/xiaoxian521/vue-pure-admin


- axios ts封装参考实例
  - https://www.wjsljc.com/document/ts-axios/axios/chapter1/require.html#features
  - https://juejin.cn/post/6969070102868131853#comment

- vue3 typescript computed
  ```javascript
    const value = computed<string>({
      get: function () {
        return props.data;
      },
      set: function (val) {
        emit("update:data", val);
      },
    });
  ```

  - lodash中的 深拷贝和浅拷贝
    - 浅拷贝： 拷贝基础类型和引用类型的地址，修改值之后会影响其他对象。
    - 深拷贝： 拷贝所有属性，并拷贝属性指向新的动态地址。
    - 深拷贝比浅拷贝慢，但是深拷贝后两个对象互不影响。

 


