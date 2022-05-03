import {$, cd } from "zx";
import { sleep } from "zx";
import { baseUrl } from "./utils/index.mjs";

const project = 'app-h5'
const gitProject = baseUrl + project
const appList = [
    gitProject + '/' + 'main-app',
    gitProject + '/' + 'ffp-app'
]
export const build_app = async(version) => {
    cd(gitProject)
    //https://superuser.com/questions/1660169/ssh-how-can-i-answer-fingerprint-to-the-connection-prompt-and-what-does
    // RSA key fingerprint is SHA256:ZrA2ZqYTVyPbw4zytCSAv74ZMaS2LDH74I7sMPtQIG0.
    // Are you sure you want to continue connecting (yes/no/[fingerprint])?
    
    await $`git pull`
    if ($`$?` == 0)
        console.log('success')
    else
        console.log('fail')
  
    appList.forEach(element => {
        single(element)
    });
    
    console.log('开始编译app的', version)
}



const single = async(element) => {
    cd(element)
    await $`pwd`  
}