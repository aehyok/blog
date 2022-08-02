import { $, argv } from "zx";

export const isWin = () => {
  // win32 代表window平台
  // darwin 代表mac平台
  //
  return process.platform === "win32" ? true : false;
}


const root = process.cwd()
let dir = isWin() ? '/h/github/blog': root
console.log(process.platform, 'root')
let path = `${dir}/docs/.vitepress/dist` 
console.log()
const gitPullInfo = await $`scp -r ${path}/* root@81.69.241.99:/usr/local/qiankun/blog/`
// const gitPullInfo = await $`cd ${path};`;
if(gitPullInfo.exitCode === 0) {
  console.log('复制到linux远程服务器成功')
} else {
  console.log('发生错误')
}