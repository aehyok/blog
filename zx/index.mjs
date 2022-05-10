#!/usr/bin/env zx

import { $, cd, argv } from "zx";
import { build_app } from './build-app.mjs'
import { build_pc } from './build-pc.mjs'
import { build } from "./build-one.mjs";
import { currentLogger } from './utils/log.mjs'
$.verbose = true;
const current = await $`pwd`;
// gitpull_pathArray["a"]="/e/work/git/dvs-2.x/dvs-app-h5-develop"
// gitpull_pathArray["w"]="/e/work/git/dvs-2.x/dvs-offiaccount-dev"
// gitpull_pathArray["p"]="/e/work/git/dvs-2.x/dvs-park-h5-app"
// gitpull_pathArray["q"]="/e/work/git/dvs-2.x/qrcode-demo-dev"
// gitpull_pathArray["c"]="/e/work/git/dvs-2.x/dvs-server-ui-dev"
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
// 获取项目信息
console.log(argv.p, "p");
let projectName = argv.p

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
await $`scp -r /e/work/git/dvs-2.x/release/cms/* root@139.9.184.171:/usr/local/sunlight/dvs/dvs-uis/`