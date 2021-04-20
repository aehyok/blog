
## 1、vue3中watch监测props
  - 父组件中的代码
  ```javascript

  ```
  - 子组件中的代码
    immediate设置为true，则第一进入页面也会触发watch监测
  ```javascript
    watch(()=> props.changeName, (nVal, oVal) => {
      console.log(nVal, oVal,'watch-changeName')
    },{
      immediate: true,
      deep: true
    })
  ```
