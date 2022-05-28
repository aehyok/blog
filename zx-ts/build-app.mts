import { baseUrl } from "./utils/common.mjs";
import { gitPull } from "./utils/git-pull.mjs";
import { yarnBuildBy, yarnBuildChildList } from "./utils/yarn-build.mjs";
import { gitTag } from "./utils/git-tag.mjs";
const project = "dvs-app-h5-develop";
const path = baseUrl + project;
const mainPath = path + "/" + "main-app";

const appChildListPath = [path + "/" + "ffp-app"];

export const build_app = async () => {
  console.log('build_app', 'appversion');

  await gitPull();

  await yarnBuildBy(mainPath);

  await yarnBuildChildList(appChildListPath);

  await gitTag();
};
