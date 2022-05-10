#!/usr/bin/env zx

import { $, cd, argv } from "zx";
import { build_app } from './build-app.mjs'
import { build_pc } from './build-pc.mjs'
import { build } from "./build-one.mjs";
import { currentLogger } from './utils/log.mjs'
import { baseUrl } from './utils/index.mjs'
import { addLog } from './utils/data.mjs'
$.verbose = true;
const current = await $`pwd`;
let projectRelease = 'release';
let gitProject =  baseUrl + projectRelease;

const mainLogger = (p,info) => {
  addLog(p, info,version)
}

let projectList = [
  {
    shortName: 'pc',
    fullName: 'dvs-server-ui-dev',
    isqiankun: true
  },
  {
    shortName: 'app',
    fullName: 'dvs-app-h5-develop',
    isqiankun: true
  },
  {
    shortName: 'wechat',
    fullName: 'dvs-offiaccount-dev',
    isqiankun: false
  },
  {
    shortName: 'park',
    fullName: 'dvs-park-h5-app',
    isqiankun: false
  },
  {
    shortName: 'qrcode',
    fullName: 'qrcode-demo-dev',
    isqiankun: false
  }
]

// 获取版本信息
console.log(argv.v, "v");
let version = argv.v
window.version = version
// 获取项目信息
console.log(argv.p, "p");
let projectName = argv.p

export const gitPull = async() => {
  try {
      addLog(projectRelease, `${projectRelease}::: start git pull`, version);
      const gitPullInfo = await $`cd ${gitProject}; git pull;`;
      console.log(gitPullInfo, "pullInfo");
      if (gitPull.exitCode == 0) {
        console.log("success");
        // mainLogger(`${projectRelease}:::success git pull`);
        addLog(projectRelease, `${projectRelease}:::success git pull`, version);
      } else {
        console.log("fail", $`$?`);
      }
    } catch {
      mainLogger(`${projectRelease}:::error git pull`);
      addLog(projectRelease, `${projectRelease}:::error git pull`, version);
    }
}
// await gitPull()

// await $`scp -r /e/work/git/dvs-2.x/release/cms/* root@139.159.245.209:/usr/local/aehyok/sunlight/`

currentLogger(current, `-----version:${version}---------------------------------`)
currentLogger(current, `-----project:${projectName}-----------------------------`)
if(projectName === 'pc') {
  await build_pc(version)
} 
if(projectName === 'app') {
  await build_app(version)
}
let currentProject = projectList.find(item => !item.isqiankun && item.shortName === projectName)
console.log(currentProject, 'currentProject');
if(currentProject && Object.keys(currentProject).length > 0) {
  // projectList.find(item => item.shortName === projectName)
  await build(version, projectList.find(item => item.shortName === projectName).fullName)
}
// await $`scp -r /e/work/git/dvs-2.x/release/cms/* root@139.9.184.171:/usr/local/sunlight/dvs/dvs-uis/`

addLog('app', 'cets', '2.5.3.004')