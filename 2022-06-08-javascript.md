- https://github.com/KieSun/all-of-frontend

## 1、数据类型
- 基本数据类型
  - 布尔类型
  - Null类型
  - Undefined类型
  - Number类型
  - 字符串类型
  - Symbol类型（ES6添加）
  - BigInt类型（ES2020添加）
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

  null作为一个基本数据类型为什么会被typeof运算符识别为object类型呢？这个bug是第一版Javascript留下来的，javascript中不同对象在底层都表示为二进制，而javascript 中会把二进制前三位都为0的判断为object类型，而null的二进制表示全都是0，自然前三位也是0，所以执行typeof时会返回 'object'。 ----引用自《你不知道的javascript（上卷）》

- typeof NaN 输出为number

  NaN ，可以翻译为not a number ，即不是一个数字。 NaN 是一个“警戒值”（sentinel value，有特殊用途的常规值），常用来指出数字类型中的错误情况，即：“执行数学运算没有成功，这是返回的结果”
  所以有时候我们判断的时候可能要通过Number.isNaN，而Number.isNaN是ES6中新增的函数，Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。

  | 这里还要关注一下IsNaN方法，和Number.isNaN的区别 https://juejin.cn/post/6844903507368083469,简单来说 isNaN之前算是bug吧，然后ES6新增了Number.isNaN。

- 为什么typeof new Function() 不返回 object？？？？？

- instanceof 判断对象的具体类型
  
  注意首先要先是一个object才行
  '' , null, undefined 分别去instanceof object 都会是false， 首先他们都不是object，不能用于判断原始类型哟
  typeof null 结果为object，但是instanceof 就不认为它是一个object了

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
  let n = null
  n.constructor      //Uncaught TypeError: Cannot read properties of null (reading 'constructor')

  // 基本类型 undefined
  let u = undefined;
  u.constructor			  //Uncaught TypeError: Cannot read properties of null (reading 'constructor')

  // 基本类型 boolean
  true.constructor === Boolean  // true
  
  // 基本类型字符串
  '1'.constructor === String  // true

  // 基本类型Symbol
  let s = Symbol()
  s.constructor === Symbol // true

  // 基本类型 Number
  const num = 100  //或者 使用 new Number()
  num.constructor === Number // true

  // 基本类型 GigInt
  let b = BigInt(100)
  b.constructor === BigInt  // true

  ({}).constructor === Object  // true

  const fun = function () {}
  fun.constructor === Function // true

  //对象数组类型
  let a = []
  a.constructor === Array // true

  //对象正则类型
  let r = new RegExp()
  r.constructor === RegExp;	// true 

  // 对象日期类型
  const d = new Date()
  d.constructor === Date //true

  // Math的构造函数在Object上
  const m = Math
  m.constructor === Math  // false
  m.constructor === Object  // true

```
  提到constructor 构造函数，又有一个知识点 constructor、__proto__、prototype

- Object.prototype.toString.call（或者apply） 
  
  判断数据类型,该是什么类型就是什么类型（宇宙最强类型判断方法嘛）

```javascript

  Object.prototype.toString.call(null)  //  '[object Null]'

  Object.prototype.toString.call(undefined)  //'[object Undefined]'

  Object.prototype.toString.call(123)   //'[object Number]'

  Object.prototype.toString.call(123n)  //'[object BigInt]'

  Object.prototype.toString.apply('123')   //'[object String]'

  Object.prototype.toString.apply(true)   //'[object Boolean]'

  Object.prototype.toString.apply(Symbol())   //'[object Symbol]'

  Object.prototype.toString.apply({})  // '[object Object]'

  Object.prototype.toString.apply([]) // '[object Array]'

  Object.prototype.toString.apply(new Date())	// "[object Date]"

  Object.prototype.toString.apply(new Function())	// "[object Function]"
  Object.prototype.toString.apply(function t() {}) // '[object Function]'

  Object.prototype.toString.apply(Math)  // '[object Math]'

  Object.prototype.toString.apply(new RegExp())  //'[object RegExp]'

```
  | 这里又映射出一个知识点  call  apply bind
# this call apply bind
  - this 永远指向最后调用它的那个对象
    
    我们先来看一段代码
    ```javascript
    var name = "windowsName";

    function fn() {
        var name = 'aehyok';
        innerFunction();
        function innerFunction() {
            console.log(this.name);      // windowsName
        }
    }

    fn()
    ```
   这里的 innerFunction() 的调用,它就是作为一个函数调用的，没有挂载在任何对象上，所以对于没有挂载在任何对象上的函数，在非严格模式下 this 就是指向 window,在严格模式下this指向undefined.
   这里顺便学一下严格模式：
      保证合理性、保证安全性、提高编译速度何运行速度
      通过 'use strict'; 可以为脚本、或者某个函数开启严格模式
  - 改变this指向的方式
    - 通过箭头函数
    - 通过声明 let _this = this,然后再需要的地方使用_this即可
    - 就是使用call apply bind
      - fun.apply(thisArgs, [arg1, arg2])  参数通过数组的方式传递
      - fun.call(thisArgs, arg1, arg2)   参数通过多个参数传递
      - fun.bind(thisArgs, arg1, arg2)()  bind相当于创建一个新的函数，我们还需要手动调用
```javascript
  // https://juejin.cn/post/6844903496253177863
```  

# 上面说到了this,这里就需要了解一下闭包
```javascript
  https://juejin.cn/post/6844903858636849159
```

# 讲到闭包，里面包含了作用域，那么就要看一下 var let const

# constructor、__proto__、prototype、原型链
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
    arr.forEach(item => {
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
    - for in 遍历的是 key,拿上面forEach的arr来说，就是0,1,2,3,4
    ```javascript
    let arr = [1, 2, 3, 4, 5];
    for(let item of arr) {
      console.log(item)
    }
    ```
    - for of 遍历的是 value，拿上面forEach的arr来说，就是1,2,3,4,5
    ```javascript
    let arr = [1, 2, 3, 4, 5];
    for(let item in arr) {
      console.log(item)
    }
    ```
    - for in 可以遍历对象，for of 不可以
    ```javascript
    const obj = { a: 1, b: 2, c: 3}; 
    for (let item in obj) {
      console.log(item, obj[item])  // key value
    }
    ```
    - for of 可以遍历具有iterator迭代器的数据结构对象，比如Map、Set、Array、NodeList、Arguments、String、TypedArray 等等

- 顺便学一下ES6中的Iterator遍历器
 