#!/usr/bin/env zx

import { sleep } from "zx";
import { $, cd, argv } from "zx";
import { echo } from 'zx/experimental'
import { build_app } from './build-app.mjs'
import { build_pc } from './build-pc.mjs'
$.verbose = true;

console.log(argv, "ssssss");
await $`source ./versions` 
// 获取版本信息
console.log(argv.v, "v");
let version = argv.v
// 获取项目信息
console.log(argv.p, "p");
let projectName = argv.p

if(projectName === 'pc') {
  build_pc(version)
} 
if(projectName === 'app') {
  build_app(version)
}
