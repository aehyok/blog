独立封装vue3选项式Api和组合式Api的生命周期钩子函数的

本文主要通过代码来展示，如何封装选项式Api的生命周期钩子函数（骚操作）和组合式Api的生命周期钩子函数，以及他们之间的不同之处。
## 1、一个组件中同时使用组合式api和选项式api

相信玩过vue3的同学们，大部分应该都了解或者使用过vue2吧，那么对选项式的api就不会陌生，或者你不熟悉名字，看一下下面的代码就非常清楚了。
```javascript
<template>
  <div>
    Test
  </div>
</template>
<script>
// 选项式api代码
export default {
  name: 'Test',
  mounted() {
    console.log('选项是Api: mounted 第一个')
  },
  mounted() {
    console.log('选项是Api: mounted 第二个')
  },
}
</script>

<script setup>
// 组合式api代码
import { onMounted } from 'vue'
  onMounted(() => {
    console.log('组合式Api:Setup中的onMounted 第一个')
  })
  onMounted(() => {
    console.log('组合式Api:Setup中的onMounted 第二个')
  })
</script>
```
执行的结果是
```javascript
// 组合式Api:Setup中的onMounted 第一个
// 组合式Api:Setup中的onMounted 第二个
// 选项是Api: mounted 第二个
```
可以发现组合式Api的生命周期在Vue3中会顺序执行，而选项式Api的生命周期钩子只会执行最后一个，也就是存在覆盖的问题，但是在选项式Api中可以设置组件的name属性。


## 2、看一下vue-router中的钩子函数
```javascript
<template>
  <div>
    <button type="button" class="btn btn-primary" @click="jumpClick">跳转到详情页</button>
  </div>
</template>
<script>
export default {
  name: 'Test',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log('选项式Api:vue-router中的beforeRouteEnter钩子函数')
    });
  },
  // beforeRouteLeave(to, from, next) {
  //   next(vm => {
  //     console.log('选项式Api:vue-router中的beforeRouteEnter钩子函数')
  //   });
  // },
}
</script>
<script setup>
import { onMounted } from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'
  const router = useRouter()
  onBeforeRouteLeave ((to, from) => {
    console.log('组合式Api：vue-router中的onBeforeRouteLeave')
  })

  const jumpClick = () => {
    router.push('test-detail')
  }
</script>

```
刷新页面后，页面中只有一个按钮，并查看控制台console.log,你可以发现选项式api中的`beforeRouteEnter`钩子函数执行了。这个钩子函数比较特殊。在渲染组件前调用，也就是组件实例还没被创建。
点击按钮后跳转到另外一个测试页面，然后可以看到控制台执行了，组合式Api中的 `onBeforeRouteLeave`钩子函数的console.log。

> 在选项式Api中我注释了一段代码： 写在这里不执行的，在下面setup生命周期执行是没问题的，现在还不清楚是不是我代码写的那里有什么问题？？？？

## 3、封装组合式Api中的钩子函数
```javascript
<script setup>
import { onMounted } from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import { useCompositionHooks } from '@/hooks/useHooks'

  onMounted(() => {
    console.log('在本组件执行,组合式Api： onMounted')
  })
  const router = useRouter()
  onBeforeRouteLeave ((to, from) => {
    console.log('组合式Api：vue-router中的onBeforeRouteLeave')
  })

  useCompositionHooks()

  const jumpClick = () => {
    router.push('test-detail')
  }
</script>
```
以及useHooks文件中的封装
```javascript
export function useCompositionHooks() {
  onMounted(() => {
    console.log('封装起来的组合式Api： onMounted')
  })
  onBeforeRouteLeave ((to, from) => {
    console.log('封装起来的组合式Api：vue-router中的onBeforeRouteLeave')
  })
}
```
就是添加了两个钩子函数的封装，我们来看看执行情况

```javascript
// 在本组件执行,组合式Api： onMounted
// 封装起来的组合式Api： onMounted
```

再来看一下点击跳转按钮的执行
```javascript
//组合式Api：vue-router中的onBeforeRouteLeave
// 封装起来的组合式Api：vue-router中的onBeforeRouteLeave
```

在组合式api的执行过程中，会根据代码的执行顺序进行，钩子函数可多次注入，但会根据代码前后顺序调用。

## 4、封装选项式api的钩子函数（骚操作一下）
```javascript
<script>
import { useOptionsHooks } from "@/hooks/useHooks"

const useOptions = useOptionsHooks('test')
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log('在本组件执行，选项式Api: beforeRouteEnter')
    });
  },
  ...useOptions,
}
</script>
```
再来看一下useHooks文件中的封装
```javascript
export function useOptionsHooks(componentName: string) {
  return {
    name: componentName,
    beforeRouteEnter(to: any, from: any, next: any) {
      next(() => {
        console.log('封装选项式Api:vue-router中的beforeRouteEnter钩子函数')
      });
    },
  }
}
```
执行结果如下，页面刷新后
```javascript
// 封装选项式Api:vue-router中的beforeRouteEnter钩子函数
```
> 骚操作：通过对外封装一个useOptionsHooks, return返回的就是选项式api使用的钩子。然后再export default 中 通过对函数调用后的对象进行解构展开

如果我们将export default中的代码位置进行调换
```javascript
export default {
  ...useOptions,
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log('在本组件执行，选项式Api: beforeRouteEnter')
    });
  },
}
```
执行结果如下
```javascript
// 在本组件执行，选项式Api: beforeRouteEnter
```
会根据当前代码的顺序位置，后面的代码如果包含前面的钩子函数，则会把前面声明的钩子函数内容覆盖掉。
## 5、总结
- vue3组合式api，本身封装通用性就更强，现在对钩子函数的独立封装又有了新的认识
- vue3如果想设置组件的name名称，则可以在该组件位置，添加一个选项式api包裹设置name即可。
- 如果要使用 vue-router中的 beforeRouteEnter钩子函数，就得在选项式api中进行声明和使用。
- vue3 选项式api会存在覆盖的情况（重复的生命周期钩子函数）
- vue3 组合式api会存在执行顺序的问题（重复的生命周期钩子函数）