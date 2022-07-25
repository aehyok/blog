import { $, argv } from "zx";

const root = process.cwd()
let path = `${root}/docs/.vitepress/dist` 
const gitPullInfo = await $`scp -r /${path}/* root@81.69.241.99:/usr/local/qiankun/blog/`
// const gitPullInfo = await $`cd ${path};`;
if(gitPullInfo.exitCode === 0) {
  console.log('复制到linux远程服务器成功')
} else {
  console.log('发生错误')
}