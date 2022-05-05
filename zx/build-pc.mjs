import { sleep } from "zx";

export const build_pc = async (version) => {
   await sleep(3000)
    console.log('开始编译PC的', version)
}