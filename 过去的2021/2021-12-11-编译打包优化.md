- 1、 查看打包后每个loader和plugin消耗时间 speed-measure-webpack-plugin
    ```javascript
        const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
        chainWebpack: config => {
            config
            .plugin('speed-measure-webpack-plugin')
            .use(SpeedMeasurePlugin)
            .end()
        },
    ```
- 2、 查看插件的大小体积 webpack-bundle-analyzer
    ```javascript
    npm install --save-dev webpack-bundle-analyzer
    ```
- 3、"report": "vue-cli-service build --report",   
    ```javascript
        在build目录下有一个report.html文件查看包的大小
    ```
- 4、压缩js代码 terser-webpack-plugin
    ```javascript
        1、移除空行、空格
        2、变量重设  变短
        3、移除console等
    ```
- 5、 tree sharking import只引入有效的代码

- 6、cssnano css打包

- 7、使用loader可以设置 缩小查找文件范围，比如不包含  node-modules文件夹


