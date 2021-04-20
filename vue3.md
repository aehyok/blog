
## 1、vue3中watch监测props
  - 父组件中的代码
  ```javascript

  ```
  - 子组件中的代码
    immediate默认值为false,则第一次不会监听watch的执行
    immediate设置为true,则第一次也会监听watch的执行
    watch位于子组件中，子组件通过v-if和v-show控制显示时，
  ```javascript
    watch(()=> props.changeName, (nVal, oVal) => {
      console.log(nVal, oVal,'watch-changeName')
    },{
      immediate: true,
      deep: true
    })
  ```
