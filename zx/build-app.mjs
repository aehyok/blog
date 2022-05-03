import {$, cd } from "zx";
import { sleep } from "zx";
import { baseUrl } from "./utils/index.mjs";
const fs = require('fs-extra')
var os = require('os')

fs.appendFile('log', 'Node.js中文网'+ os.EOL, 'utf8', (err) => {
    if (err) throw err; // 若写入错误，则抛出err
    console.log('文件已被保存'); // 若写入成功，则打印‘文件已被保存’
  });
  
const project = 'vue-qiankun'
const gitProject = baseUrl + project
const main = gitProject + '/' + 'main-vite-app-ts'
const appList = [
    gitProject + '/' + 'webpack-app-ts',
    gitProject + '/' + 'map-app-ts',
]
export const build_app = async(version) => {
    cd(gitProject)
    //https://superuser.com/questions/1660169/ssh-how-can-i-answer-fingerprint-to-the-connection-prompt-and-what-does
    // RSA key fingerprint is SHA256:ZrA2ZqYTVyPbw4zytCSAv74ZMaS2LDH74I7sMPtQIG0.
    // Are you sure you want to continue connecting (yes/no/[fingerprint])?
    
    let pullInfo = await $`git pull`
    console.log(pullInfo, 'pullInfo')
    if (pullInfo.exitCode == 0) {
        console.log('success')
    }
    else {
        console.log('fail',$`$?`)
    }
  
    // appList.forEach(element => {
    //     single(element)
    // });

    cd(main)
    console.log('before')
    let buildInfo = await $`pnpm build` 
    console.log('after')
    console.log(buildInfo, 'buildInfo')
    // Promise.all(
    //     appList.map(item => {
    //         return $`cd ${item}; pnpm build`
    //     })
    // )
    
    console.log('开始编译app的', version)
}



const single = async(element) => {
    cd(element)
    await $`pwd`  
    await $`pnpm start`
}