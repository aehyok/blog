import { baseUrl } from "./utils/common.mjs";
import { gitTag } from './utils/git-tag.mjs'
import { gitPull } from './utils/git-pull.mjs'
import { yarnBuild } from "./utils/yarn-build.mjs";
let path = ""; 

const init = () => {
  path = baseUrl + global.projectName;
};

export const build = async () => {
  init();
  
  await gitPull();
  await yarnBuild()
  await gitTag();
};