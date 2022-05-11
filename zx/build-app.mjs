import { baseUrl, gitPull, yarnBuildBy, yarnBuildChildList, gitTag } from "./utils/index.mjs";

const project = "dvs-app-h5-develop";
const path = baseUrl + project;
const mainPath = path + "/" + "main-app";

const appChildListPath = [path + "/" + "ffp-app"];

export const build_app = async () => {
  console.log(global.version, 'appversion');

  await gitPull();

  await yarnBuildBy(mainPath);

  await yarnBuildChildList(appChildListPath);

  await gitTag(path);
};
