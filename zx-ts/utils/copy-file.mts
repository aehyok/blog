import { $ } from 'zx'
import { writerLog } from './sql-helper.mjs';

export const copyFile = async(path: string) => {
    try {
        const result = await $`scp -r /e/work/git/dvs-2.x/release/cms/${path}/* root@139.9.184.171:/usr/local/sunlight/dvs/dvs-uis/${path}/`
        if(result.exitCode === 0) {
            oneLogger(`copy file  [${global.version}] end success`)
        }
        else {
            console.log("fail", $`$?`);
          }
    } catch {
        oneLogger(`copy file [${global.version}] end error`)
    }
}

const oneLogger = (info) => {
    console.log(info);
    const { name } = global.project
    writerLog(name, info, global.version);
};