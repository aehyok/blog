import { baseUrl } from "./utils/common.mjs";
import { gitTag } from './utils/git-tag.mjs'
import { gitPull } from './utils/git-pull.mjs'
import { yarnBuild } from "./utils/yarn-build.mjs";
let gitProject = ""; // baseUrl + project;

const init = () => {
  gitProject = baseUrl + global.projectName;
};

export const build = async () => {
  init();
  await gitPull();
  await yarnBuild()
  // global.connection.destroy()
  await gitTag(gitProject);
};