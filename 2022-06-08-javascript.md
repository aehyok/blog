- https://github.com/KieSun/all-of-frontend

## 1、数据类型

- 基本数据类型
  - 布尔类型
  - Null 类型
  - Undefined 类型
  - Number 类型
  - 字符串类型
  - Symbol 类型（ES6 添加）
  - BigInt 类型（ES2020 添加）
- 对象类型

# 4、类型判断

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

- typeof null 输出 object

  null 作为一个基本数据类型为什么会被 typeof 运算符识别为 object 类型呢？这个 bug 是第一版 Javascript 留下来的，javascript 中不同对象在底层都表示为二进制，而 javascript 中会把二进制前三位都为 0 的判断为 object 类型，而 null 的二进制表示全都是 0，自然前三位也是 0，所以执行 typeof 时会返回 'object'。 ----引用自《你不知道的 javascript（上卷）》

- typeof NaN 输出为 number

  NaN ，可以翻译为 not a number ，即不是一个数字。 NaN 是一个“警戒值”（sentinel value，有特殊用途的常规值），常用来指出数字类型中的错误情况，即：“执行数学运算没有成功，这是返回的结果”
  所以有时候我们判断的时候可能要通过 Number.isNaN，而 Number.isNaN 是 ES6 中新增的函数，Number.isNaN()只有对于 NaN 才返回 true，非 NaN 一律返回 false。

  | 这里还要关注一下 IsNaN 方法，和 Number.isNaN 的区别 https://juejin.cn/post/6844903507368083469,简单来说 isNaN 之前算是 bug 吧，然后 ES6 新增了 Number.isNaN。

- 为什么 typeof new Function() 不返回 object？？？？？

- instanceof 判断对象的具体类型

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

- constructor 通过构造函数判断数据类型

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

- JavaScript 执行上下文（JavaScript到底是怎么运行的）

  - JavaScript 代码要想能够被执行，就必须先被 JavaScript 引擎编译，编译完成之后才会进入到执行阶段，总结为六个字：先编译再执行。
    
    在编译的过程中，同时会生成执行上下文。最开始执行代码的时候通常会生成 全局执行上下文、执行一个函数时会生成该函数的执行上下文、当执行一个代码块时也会生成代码块的可执行上下文。所以一段代码可以说成是先编译再执行，那么整个过程就是无数个`先编译再执行`构成的。这里其实涉及到一个比较重要的概念`栈`，这么多的执行上下文就是通过栈来管理的，这里我们暂且就知道这么多就好了，后面我会专门的来了解栈是如何管理执行上下文的。
  
  - 我们通过一段代码来查看一下整个过程,单独新建一个aehyok.html,里面加入一下代码，突然发现html文件中只有script标签和js代码也是可以执行的，不清楚以前是不是也是可以，还是说JavaScript引擎做了优化处理。

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

  运行后的执行结果
  ```javascript
  函数a_Function执行了 undefined
  aehyok
  ```
  | 这里特别强调一个点，我上面声明变量使用的var

  这代码相信所有前端都能运行起来，我这里用的谷歌浏览器打开，然后 F12 后，找到源代码的标签页，打的断点，没看明白的可以看一下下面的截图
  (图片)[url]
  1、通过截图可以发现，作用域下的全局 已经有了一个`a_Function`函数，以及一个`a_variable`变量，其值为 undefined,我暂且将截图的这个状态叫编译，其实已经开始执行了（至于他到底是如何编译和如何执行，咱们暂时就不讨论了），但是还在我打断点调试代码最开始的地方，意思到位，不知道我是否说懂了。
  - 编译阶段：编译过程中，同时生成执行上下文
  2、使用过JavaScript的人都清楚，JavaScript是按照顺序执行代码的，但是通过截图去看，好像又不太对劲，所以执行前的编译阶段，JavaScript引擎还是处理了不少事情的,具体如下代码
  ```javascript
    function a_Function() {
      console.log('函数a_Function执行了', a_variable);
    }
    var a_variable = undefined
  ```
  这段代码主要做了`变量提升`部分： 会将变量和函数存放到`变量环境`中，而`变量环境`是存在于`执行上下文`的，变量的默认值会被设置为undefined，函数的执行体会被带到`变量环境`中
  然后还会生成`可执行代码`,其实编译生成的是字节码，下面的代码算是模拟代码：
  ```javascript
  a_Function()
  a_variable = 'aehyok'
  ```
  - 执行阶段
    接下来开始按照顺序执行上面生成的`可执行代码`
    ```javascript
    a_Function()
    a_variable = 'aehyok'
    ```
    第一行代码：先调用a_Function,执行a_Function中的代码，打印`函数a_Function执行了 undefined`,因为此时的a_variable还没给予赋值操作
    第二行代码：对a_variable变量进行赋值字符串"aehyok",此时`变量环境`中的a_variable值变为"aehyok"

- 调用栈
  先来看一段简单的递归调用代码吧
  ```javascript
  <script>
    function recursion(x) {
      console.log(x)
      recursion(x)
    }

    recursion(1)
  </script>
  ```
  执行的结果如下
  ```javascript
    11221js执行过程.html:13 1
    js执行过程.html:13 Uncaught RangeError: Maximum call stack size exceeded
      at recursion (js执行过程.html:13:5)
      at recursion (js执行过程.html:14:5)
      at recursion (js执行过程.html:14:5)
      at recursion (js执行过程.html:14:5)
      at recursion (js执行过程.html:14:5)
      at recursion (js执行过程.html:14:5)
      at recursion (js执行过程.html:14:5)
      at recursion (js执行过程.html:14:5)
      at recursion (js执行过程.html:14:5)
      at recursion (js执行过程.html:14:5)
  ```
  也就是说我测试电脑当时递归了11221次左右之后栈溢出了，11221这个数字根据电脑配置不同可能有一些出入。Maximum call stack size exceeded超出最大调用栈的大小了。
  我们再来看一段代码
  ```javascript
  <script>
    var a = 10

    function add_d() {
      var d = 40
      console.trace('add_d正在执行')
      return a + d
    }

    function add_c() {
      var c = 30
      var dd = add_d()
      console.trace('add_d已经执行结束,从call stack弹出')
      return c + dd
    }

    function add_b() {
      var b = 20
      let cc = add_c()
      console.trace('add_c已经执行结束,从call stack弹出')
      return b + cc
    }

    add_b()
    console.trace('add_b已经执行结束,从call stack弹出')
  </script>
  ```
  - 第一种方式通过截图可以在16行（截图中代码的行位置）的位置打断点，在右侧就可以查看到当前的调用堆栈信息
  我们还可以通过console.trace()
  ```javascript
    console.trace
    add_d @ js执行过程.html:16
    add_c @ js执行过程.html:22
    add_b @ js执行过程.html:27
  （匿名） @ js执行过程.html:30   // 这里的匿名相当于全局进行
  ```


  ```javascript
  js执行过程.html:16 add_d正在执行
  add_d @ js执行过程.html:16
  add_c @ js执行过程.html:22
  add_b @ js执行过程.html:29
  （匿名） @ js执行过程.html:34

  js执行过程.html:23 add_d已经执行结束,从call stack弹出
  add_c @ js执行过程.html:23
  add_b @ js执行过程.html:29
  （匿名） @ js执行过程.html:34

  js执行过程.html:30 add_c已经执行结束,从call stack弹出
  add_b @ js执行过程.html:30
  （匿名） @ js执行过程.html:34

  js执行过程.html:35 add_b已经执行结束,从call stack弹出
  （匿名） @ js执行过程.html:35
  ```
  通过打印日志，我们可以更清晰的发现，当当前函数执行完毕以后，它会自动的从打印日志中移除了。同样的你可以调整console.trace()的顺序去查看到压入call stack的顺序是什么样的。

  当JavaScript调用一个函数的时候，JavaScript引擎遍会为其创建`执行上下文`,并把该`执行上下文`压入`调用栈`，然后JavaScript引擎开始执行函数的代码。
  当某个函数执行完毕的时候，JavaScript引擎会将函数的`执行上下文`弹出栈。
  当`调用栈`的空间满了以后，就会引发`堆栈溢出`的问题。

- 作用域
  我们还是先来看一下执行上下文中使用的代码,我将其中的var 声明变量的关键字，改为let
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

      改完代码保存后刷新
      ```javascript
      js执行过程.html:6 Uncaught ReferenceError: Cannot access 'a_variable' before initialization
      at a_Function (js执行过程.html:6:38)
      at js执行过程.html:2:3
      ```
      通过翻译发现，a_variable变量在函数中的console.log打印时还没被初始化。那么就说明let（const）声明变量的时候不存在`变量提升`了。
      
      作用域是在程序运行时代码中的某些特定部分中变量、函数的可访问性。通俗的理解，作用域就是变量函数的可访问范围，即作用域控制着变量函数的可见性和生命周期。

      在ES6之前，ES的作用域只有两种：全局作用域和函数作用域。
        - 全局作用域中的对象在代码中的任何地方都可以访问，其声明周期伴随着页面的生命周期。
        - 函数作用域就是在函数内部定义的变量、函数，并且定义的变量或者函数只能在函数内部被访问。函数执行结束之后，函数内部定义的变量会被销毁。
      在ES6来了以后，通过添加的let和const关键字，使JavaScript支持块级作用域了。
      
      ```javascript
      for (var i = 0; i < 5; i++) { 
        setTimeout(() => {
          console.log(i, 'for 循环内的var');
        }, 1000);
      }
      console.log(i, 'for循环外的')

      for (let j = 0; j < 5; j++) { 
        setTimeout(() => {
          console.log(j, 'for 循环内的let');
        }, 1000);
      }
      console.log(j, 'for循环外的let')
      ```

    5 'for循环外的'
    js执行过程.html:61 Uncaught ReferenceError: j is not defined
        at js执行过程.html:61:15
    （匿名） @ js执行过程.html:61
   5js执行过程.html:51 5 'for 循环内的var'
    js执行过程.html:58 0 'for 循环内的let'
    js执行过程.html:58 1 'for 循环内的let'
    js执行过程.html:58 2 'for 循环内的let'
    js执行过程.html:58 3 'for 循环内的let'
    js执行过程.html:58 4 'for 循环内的let'

      可以发现用var声明的变量打印出来的结果都是5，var声明i之后存在变量的提升，所以
- 语法解析
- 代码优化
- 代码生成
- 作用域链
- 闭包

- 执行上下文和调用栈
    - https://juejin.cn/post/6844903682283143181
- JSON.stringify
  ```javascript
  //https://github.com/vuejs/core/blob/main/scripts/release.js  161行代码
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
  ```
  - https://juejin.cn/post/7017588385615200270