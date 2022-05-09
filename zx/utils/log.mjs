const fs = require("fs-extra");
var os = require("os");

export const logger = (errorString) => {
  let date =
    new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
  console.log(date, "logger");
  fs.appendFileSync(
    "./log",
    errorString + "#####" + date + os.EOL,
    "utf8",
    (err) => {
      if (err) {
        console.log("log error");
        throw err;
      } // 若写入错误，则抛出err
      console.log("文件已1111被保存"); // 若写入成功，则打印‘文件已被保存’
    }
  );
};

const goPath = async (current) => {
  const currentPath = current.stdout.substring(0, current.stdout.length - 1);
  await $`cd ${currentPath}`;
};

export const currentLogger = async (current,info) => {
  await goPath(current);
  logger(info);
};
