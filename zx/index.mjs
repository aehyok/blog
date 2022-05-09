#!/usr/bin/env zx

import { $, cd, argv } from "zx";
import { build_app } from './build-app.mjs'
import { build_pc } from './build-pc.mjs'
import { build } from "./build-one.mjs";
import { currentLogger } from './utils/log.mjs'
$.verbose = true;
const current = await $`pwd`;

// 获取版本信息
console.log(argv.v, "v");
let version = argv.v
// 获取项目信息
console.log(argv.p, "p");
let projectName = argv.p

currentLogger(current, `--------------------------------------------------------`)
currentLogger(current, `--------------------------------------------------------`)
currentLogger(current, `--------------------------------------------------------`)
currentLogger(current, `-----version:${version}---------------------------------`)
currentLogger(current, `-----project:${projectName}-----------------------------`)
if(projectName === 'pc') {
  await build_pc(version)
} 
if(projectName === 'app') {
  build_app(version)
}
if(projectName === 'wechat') {
  build(version)
}