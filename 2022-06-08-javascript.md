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
  