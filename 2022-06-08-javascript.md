- https://github.com/KieSun/all-of-frontend

## 数据类型
- 基本数据类型
  - 布尔类型
  - Null类型
  - Undefined类型
  - Number类型
  - 字符串类型
  - Symbol类型（ES6添加）
  - BigInt类型（ES2020添加）
- 对象类型

# 布尔类型
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
  

# 判断一个值是否是一个对象
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

# 类型判断
- typeof 能够判断出的类型
```javascript
  typeof undefined; //undefined 有效
  typeof null; //object 无效
  typeof NaN; // number 要注意的点
  typeof 10; // number 有效，但要注意NaN
  typeof '';//string 有效
  typeof true; //boolean 有效
  typeof {}; // object 有效
  typeof new Function(); // function 有效
  typeof Symbol(); // symbol有效
  typeof []  new Date()  new RegExp()
// https://juejin.cn/post/6844903623231537159
```