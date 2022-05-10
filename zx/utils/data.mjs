import mysql from "mysql";

let connection = mysql.createConnection({
// 创建mysql实例
host: "139.159.245.209",
port: "3306",
user: "meta",
password: "meta",
database: "meta",
});

connection.connect();

// 因为 mysqljs不支持 Promise方式CRUD数据
// 所以我们做一个简单的封装
const resDb = (sql, params) => {
    return new Promise((resolve,reject) => {
        let sqlParamsList = [sql]
        if(params) {
            sqlParamsList.push(params)
        }
        connection.query(...sqlParamsList, (err,res) => {
            if(err) {
                reject(err)
            }else {
                resolve(res)
            }
        })
    })
}

export const addLog = async(project, content, version) => {
    await resDb("INSERT INTO buildlog values(null,?,?,?,null)",[project, content, version])
}
