import { baseUrl } from "./utils/index.mjs";
import { addLog } from "./utils/data.mjs";
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
  await gitTag(gitProject);
};