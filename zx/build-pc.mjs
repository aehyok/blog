// import { gitPull, yarnBuildBy, yarnBuildChildList } from "./utils/index.mjs";
import { gitPull } from "./utils/git-pull.mjs";
import { yarnBuildBy, yarnBuildChildList } from "./utils/yarn-build.mjs";
import { baseUrl } from "./utils/common.mjs";

const project = "dvs-server-ui-dev";
const path = baseUrl + project;
const mainPath = path + "/" + "dvs-main";

const appChildListPath =  [
  path + "/" + "dvs-basic",
  path + "/" + "dvs-cons",
  path + "/" + "dvs-village",
  path + "/" + "dvs-digital",
  path + "/" + "dvs-park",
  path + "/" + "dvs-gis",
  path + "/" + "dvs-ffp",
];

export const build_pc = async () => {
  console.log(global.version, 'appversion');

  await gitPull();

  await yarnBuildBy(mainPath);
  // await buildAppChildList()
  await yarnBuildChildList(appChildListPath);

  await gitTag(path);
};
