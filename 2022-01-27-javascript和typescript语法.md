- 1、将数组对象，转换为Map数据的基本操作
  const list = [{id: 1, name: 'aehyok'}, { id: 2, name: 'test'}]

  const newList = new Map<number, any>(
    list.map(node => [node.id, node])
  )

  console.log(newList, 'newList')

- 2、typescript中的枚举操作
  ```js
    //1、声明一个枚举类型   最好定义在ts文件中，不要定义在.d.ts文件中，import引入的时候有问题
    export enum ColumnType {
      static = '只读文本',
      text= '文本框',
      textarea= '文本域',
      select= '下拉列表',
      editor= '富文本',
      number= '数值框',
      image='上传图片',
      video= '上传视频',
      date= '日期',
      daterange = '日期范围'
    }

    //2、获取一个枚举类型值
    ColumnType['static']

    //3、将枚举转换成对象
    const columnList = {}
    for (const [key, value] of Object.entries(ColumnType)) {
      console.log(key, value, 'key-value')
      columnList[key] =value
    }

    //4、将枚举转换成数组
    const columnList = []
    for (const [key, value] of Object.entries(ColumnType)) {
      console.log(key, value, 'key-value')
      columnList.push({
        key,value
      })
    }
  ```  
- 3、泛型函数和 箭头泛型函数
  ```javascript
    function getUser<T>(id: string) {
      console.log(id, '普通的泛型函数')
    }

    //但是如果是如下箭头函数将会报错
    //
    const getUser<T> = (id: string) {
      console.log(id, '箭头泛型函数')
    }

    // 要改成如下代码
    const getUser = <T> (id: string) {
      console.log(id, '箭头泛型函数')
    }

  ```

- 4、通过type和interface 限制某个字符串变量的具体字符串
  ```javascript 
    
    type EventType = '工资' | '放假'
    let eventType: EventType = '发放'   // 报错
    let eventType1: EventType = '工资'  // OK 赋值只能为“工资”或“放假”

    interface IEventType {
        name?: '工资' | '放假'
    }

    let iType1: IEventType = {}
    iType1.name= '工资'    // OK 赋值只能为“工资”或“放假”
    iType1.name = '测试'  // 报错
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

 
 - 判断是在微信中，还是在H5中
 - 是在微信小程序里还是在微信的H5中
  ```javascript
    import wx from 'weixin-js-sdk'
    
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        //ios的ua中无miniProgram，但都有MicroMessenger（表示是微信浏览器）
        wx.miniProgram.getEnv((res)=>{
           if (res.miniprogram) {
               alert("在小程序里");
           } else {
               alert("不在小程序里");
           }
        })
    }else{
        alert('不在微信里');
    }

  ```