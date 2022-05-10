import mysql from "mysql";
export const testSql = () => {
  let connection = mysql.createConnection({
    // 创建mysql实例
    host: "139.159.245.209",
    port: "3306",
    user: "meta",
    password: "meta",
    database: "meta",
  });
  connection.connect();

  let sql = "select * from BaseUser"; // 查询语句
  let str = "";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log("[select error]:", err.message);
      return;
    }
    str = JSON.stringify(result);
    console.log(str); // 数据库查询结果返回到result中
  });
  console.log(str,'str')
};
