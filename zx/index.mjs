#!/usr/bin/env zx

import { sleep } from "zx";
import { $, cd, argv } from "zx";
import { echo } from 'zx/experimental'
import { build_app } from './build-app.mjs'
import { build_pc } from './build-pc.mjs'
import { logger } from './utils/log.mjs'
$.verbose = true;
const current = await $`pwd`;
const goCurrentPath = async () => {
  const currentPath = current.stdout.substring(0, current.stdout.length - 1);
  await $`cd ${currentPath}`;
};

const currentLogger = async (info) => {
  await goCurrentPath();
  logger(info);
};

console.log(argv, "ssssss");
await $`source ./versions` 
// 获取版本信息
console.log(argv.v, "v");
let version = argv.v
// 获取项目信息
console.log(argv.p, "p");
let projectName = argv.p
currentLogger(`-----version:${version}-------------------------`)
currentLogger(`-----project:${projectName}-------------------------`)
if(projectName === 'pc') {
  build_pc(version)
} 
if(projectName === 'app') {
  build_app(version)
}