## 1、 reactive 定义 ts 数组

    ```javascript
        export interface TableModel {
            id?: number
            item?: string
            count?: number
            times?: number
            remark?: string
            status?: number
        }

        const list = reactive<TableModel[]>([
            {
                id: 1,
                item: '创建户码',
                count: 1000,
                times: 1,
                remark: '户码默认分值',
                status: 0,
            },
        ])
    ```

## 2、 reactive 定义 ts 数组

    ```javascript
        export interface TableModel {
            id?: number
            item?: string
            count?: number
            times?: number
            remark?: string
            status?: number
        }

        const list = ref<TableModel[]>([
            {
                id: 1,
                item: '创建户码',
                count: 1000,
                times: 1,
                remark: '户码默认分值',
                status: 0,
            },
        ])

        //使用的时候要加上list.value
    ```

## 3、枚举的使用

    ```javascript
        export enum ToolbarTypeEnum {
            ZOOM_IN = 'zoomIn',
            ZOOM_OUT = 'zoomOut',
            RESET_ZOOM = 'resetZoom',

            UNDO = 'undo',
            REDO = 'redo',

            SNAPSHOT = 'snapshot',
            VIEW_DATA = 'viewData',
        }

        export interface ToolbarConfig {
            type?: string | ToolbarTypeEnum;
            tooltip?: string | boolean;
            icon?: string;
            disabled?: boolean;
            separate?: boolean;
        }
    ```

## 4、继承的使用

    ```javascript

        export declare type Point = {
            x: number;
            y: number;
            [key: string]: unknown;
        };
        export declare type TextConfig = {
            value: string;
        } & Point;

        export declare type NodeConfig = {
            id?: string;
            type: string;
            x: number;
            y: number;
            text?: TextConfig | string;
            properties?: Record<string, unknown>;
        };
    ```

## 5、创建一个 key,value 对象

    ```javascript
        type keys = 'A' | 'B' | 'C'
        const result: Record<keys, number> = {
            A: 1,
            B: 2,
            C: 3
        }
    ```

## 6、5 的升级玩法

    ```javascirpt

        interface PageInfo {
            title: string;
        }

        type Page = "home" | "about" | "contact";

        const nav: Record<Page, PageInfo> = {
            about: { title: "about" },
            contact: { title: "contact" },
            home: { title: "home" },
        };

    ```
### 7、typescript中的枚举操作
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
  ```
 #### 8、泛型函数和 箭头泛型函数
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


#### 7、通过type和interface 限制某个字符串变量的具体字符串
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
