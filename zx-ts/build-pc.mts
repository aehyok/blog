import { gitPull } from "./utils/git-pull.mjs";
import { yarnBuildBy, yarnBuildChildList } from "./utils/yarn-build.mjs";
import { baseUrl } from "./utils/common.mjs";
import { gitTag } from "./utils/git-tag.mjs";

const project = "vue-qiankun";
const path = baseUrl + project;
const mainPath = path + "/" + "packages/main-vite-app-ts";

const appChildListPath =  [
  path + "/" + "packages/webpack-app-ts",
  path + "/" + "packages/map-app-ts",
];

export const build_pc = async () => {
  console.log("build_pc", 'appversion');

  await gitPull();

  await yarnBuildBy(mainPath);

  await yarnBuildChildList(appChildListPath);

  await gitTag();
};
