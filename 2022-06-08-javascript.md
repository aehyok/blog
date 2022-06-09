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

# 2、布尔类型
  - 通常布尔表示逻辑实体，可以有两个值 true和false。
  ```javascript
    let result = true
    result = false

    //另外在使用过程中
    let result = null, undefined, '', 
  ```
  - 另外一个用的比较少的是布尔对象
  ```javascript
  // 创建一个值为true的Boolean对象
  let result = new Boolean(true)
  console.log(result)  //Boolean {false}
  console.log(result.toString()) // false 注意是个字符串的‘false’
  ```
  

# 3、判断一个值是否是一个对象
    ```javascript
      // 这里有一个很重要的点   typeof null 的值为 "object"
      // https://github.com/lodash/lodash/blob/2f79053d7bc7c9c9561a30dda202b3dcd2b72b90/isObject.js
      const isObject = (value) => {
        const type = typeof value
        return value != null && (['object', 'function'].includes(type)
      }

      isObject({})   // true
      isObject(null) // false
      isObject(Function) // true
    ```

# 4、类型判断
- typeof 能够判断出的类型
```javascript
  typeof undefined; //undefined 
  typeof null; //object 
  typeof NaN; // number 要注意的点
  typeof 10; // number 但要注意NaN
  typeof '';//string 
  typeof true; //boolean
  typeof {}; // object 
  typeof new Function(); // function 
  typeof Symbol(); // symbol
  
  //object,结果都是object，那么对于object如何判断呢，我们接着看下面的instanceof
  typeof []  new Date()  new RegExp()   
// https://juejin.cn/post/6844903623231537159

```

`null作为一个基本数据类型为什么会被typeof运算符识别为object类型呢？
这个bug是第一版Javascript留下来的，javascript中不同对象在底层都表示为二进制，而javascript 中会把二进制前三位都为0的判断为object类型，而null的二进制表示全都是0，自然前三位也是0，所以执行typeof时会返回 'object'。
----引用自《你不知道的javascript（上卷）》`
| 为什么typeof new Function() 不返回 object？？？？？

- instanceof 判断对象的具体类型，注意首先要先是一个object才行
```javascript
  
  // '' , null, undefined 分别去instanceof object 都会是false， 首先他们都不是object，不能用于判断原始类型哟
  // typeof null 结果为object，但是instanceof 就不认为它是一个object了
  
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

- constructor 判断数据类型
  
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

  | 提到constructor 构造函数，又有一个知识点 constructor、__proto__、prototype
```
- Object.prototype.toString.call（或者apply） 判断数据类型,该是什么类型就是什么类型（宇宙最强类型判断方法嘛）
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
# 6、 constructor、__proto__、prototype
```javascript
  // 这是我见过最好理解的了，写的非常棒
  https://juejin.cn/post/6844903837623386126

```

# 8、 {} + 10 https://juejin.cn/post/6916876446766104589

