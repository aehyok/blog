import mysql from "mysql";

let _conn = null
const logDbStat = function(){
    console.log("db state %s and threadID %s", connection.state, connection.threadId);
    // console.log("db detail:", db);
}
const  getConnection  = () => {
    if(!global._conn) {
        _conn = mysql.createConnection({
            // 创建mysql实例
            host: "139.159.245.209",
            port: "3306",
            user: "meta",
            password: "meta",
            database: "meta",
        });
        _conn.connect(function(err){
            if(err){
                console.log('fail to connect db',err.stack);
                throw err;
            }
            // 这里正真连接上数据库了。
            console.log('链接成功')
            global.connection = conn
            logDbStat();
        });
        global.conn = _conn
    }
    return  global.conn
}


    // 因为 mysqljs不支持 Promise方式CRUD数据
// 所以我们做一个简单的封装
const executeSql = (sql, params) => {
    return new Promise((resolve,reject) => {
        try {
            let sqlParamsList = [sql]
            if(params) {
                sqlParamsList.push(params)
            }
            getConnection().query(...sqlParamsList, (err,res) => {
                if(err) {
                    reject(err)
                }else {
                    resolve(res)
                }
            })
        } catch (error){
            reject(error)
        }
    })
}

// export const close = () => {
//     setTimeout(() => {
//         getConnection().destroy()
//         logDbStat()
//         console.log('close 关闭成功');
//     }, 4000);
// }
// export class sqlHelper {
//     static conn = {}
//     static open () {
//         this.conn = mysql.createConnection({
//             // 创建mysql实例
//             host: "139.159.245.209",
//             port: "3306",
//             user: "meta",
//             password: "meta",
//             database: "meta",
//         });
//         this.conn.connect(function(err){
//             if(err){
//                 console.log('fail to connect db',err.stack);
//                 throw err;
//             }
//             // 这里正真连接上数据库了。
//             console.log('链接成功')
//             global.connection = conn
//             logDbStat();
//         });
//     }

//     // 因为 mysqljs不支持 Promise方式CRUD数据
// // 所以我们做一个简单的封装
//     static executeSql = (sql, params) => {
//         return new Promise((resolve,reject) => {
//             try {
//                 let sqlParamsList = [sql]
//                 if(params) {
//                     sqlParamsList.push(params)
//                 }
//                 this.conn.query(...sqlParamsList, (err,res) => {
//                     if(err) {
//                         reject(err)
//                     }else {
//                         resolve(res)
//                     }
//                 })
//             } catch (error){
//                 reject(error)
//             }
//         })
//     }

//     static close = () => {
//         this.conn.destroy()
//     }
// }
// let db = mysql.createConnection({
//     // 创建mysql实例
//     host: "139.159.245.209",
//     port: "3306",
//     user: "meta",
//     password: "meta",
//     database: "meta",
// });

// const logDbStat = function(){
//     console.log("db state %s and threadID %s", connection.state, connection.threadId);
//     // console.log("db detail:", db);
// }


// connection.connect(function(err){
//     if(err){
//         console.log('fail to connect db',err.stack);
//         throw err;
//     }
//     // 这里正真连接上数据库了。
//     console.log('链接成功')
//     global.connection = connection
//     logDbStat();
// });


export const addLog = async(project, content, version) => {
    // const result = await executeSql("INSERT INTO buildlog values(null,?,?,?,null)",[project, content, version])
    // console.log(result, 'sqlresult');
    // if(result ) {
    //     getConnection().end()
    //     console.log('关闭陈宫')
    // }
}
