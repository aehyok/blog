import { sleep } from "zx";
import { $, cd, argv } from "zx";
$.verbose = true;

console.log(argv, 'ssssss')

// 获取版本信息
console.log(argv.v,'v')

// 获取项目信息
console.log(argv.p, 'p')

let array = []
const windowArray =[
    'E:/work/git/dvs-2.x/dvs-app-h5-develop/main-app',
    'E:/work/git/dvs-2.x/dvs-app-h5-develop/ffp-app'
] 
 
const macArray =[]
 
const isMac = () => {
    return process.platform === 'darwin'? true : false
}

array = isMac? macArray : windowArray
const output = (await $`ls`).stdout;
// console.log(output);

async function buildPc() {
    console.log('pc 编译')
    await sleep(10000)
    console.log('pc 编译结束')
}

async function buildApp() {
    console.log('app编译开始')
    for(const item in array) {
        console.log(array[item], 'item')
        // cd(array[item])
        // await sleep(5000);
        // await $`git pull`;
    }
    console.log('app编译结束')
}

console.log(process.platform, '系统')
const pc = await buildPc()
const app = await buildApp()
Promise.all([buildApp, buildPc]).then((values) => {
    console.log(values, 'values')
})