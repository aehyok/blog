#!/usr/bin/env zx


import { $, argv } from "zx";
import { build_app } from './build-app.mjs'
import { build_pc } from './build-pc.mjs'
import { build } from "./build-one.mjs";
import { baseUrl } from './utils/common.mjs'
import { gitPullBy } from "./utils/git-pull.mjs";
// import { gitPushBy, gitPullBy} from './utils/index.mjs'
// import { gitPushBy } from './utils/git-push.mjs'
$.verbose = true;

let projectRelease = 'release';
let gitProject =  baseUrl + projectRelease;

let projectList = [
  {
    shortName: 'pc',
    name: 'dvs-server-ui-dev',
    isqiankun: true,
  },
  {
    shortName: 'app',
    name: 'dvs-app-h5-develop',
    isqiankun: true,
  },
  {
    shortName: 'wechat',
    name: 'dvs-offiaccount-dev',
    isqiankun: false,
  },
  {
    shortName: 'park',
    name: 'dvs-park-h5-app',
    isqiankun: false,
  },
  {
    shortName: 'qrcode',
    name: 'qrcode-demo-dev',
    isqiankun: false,
  }
]

// 获取版本信息
console.log(argv.v, "v");
let version = argv.v
global.version = version
// 获取项目信息
console.log(argv.p, "p");
let projectName = argv.p
global.project = projectList.find(item => item.shortName === projectName)

// await $`scp -r /e/work/git/dvs-2.x/release/cms/* root@139.159.245.209:/usr/local/aehyok/sunlight/`

if(projectName === 'pc') {
  await build_pc(global.version)
} 
if(projectName === 'app') {
  await build_app()
}
let currentProject = projectList.find(item => !item.isqiankun && item.shortName === projectName)
console.log(currentProject, 'currentProject');
if(currentProject && Object.keys(currentProject).length > 0) {
  global.projectName = projectList.find(item => item.shortName === projectName).fullName
  await build()
}
// await $`scp -r /e/work/git/dvs-2.x/release/cms/* root@139.9.184.171:/usr/local/sunlight/dvs/dvs-uis/`
