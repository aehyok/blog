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
