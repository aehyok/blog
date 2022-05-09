import { baseUrl } from "./utils/index.mjs";
import { currentLogger } from "./utils/log.mjs";

const current = await $`pwd`;
const project = "dvs-offiaccount-dev";
const gitProject = baseUrl + project;
const main = gitProject;

const oneLogger = (info) => {
    currentLogger(current, info)
}

export const build = async (version) => {
  console.log("开始编译PC的", version);
  await gitPull();
  await buildone();
};

const gitPull = async () => {
  try {
    const gitPull = await $`cd ${gitProject}; git pull;`;
    console.log(gitPull, "pullInfo");
    if (gitPull.exitCode == 0) {
      console.log("success");
      oneLogger( "git pull 仓库代码：成功");
    } else {
      console.log("fail", $`$?`);
    }
  } catch {
    oneLogger("拉去代码发生异常");
  }
};

const buildone = async () => {
  try {
    oneLogger(`start build ${gitProject}`);
    const buildInfo = await $` cd ${main};yarn build;`;
    console.log(buildInfo, "buildInfo");
    if (buildInfo.exitCode === 0) {
        oneLogger(current, `success build ${gitProject}`);
    } else {
        oneLogger(current, `build main-app error: ${buildInfo.stderr}`);
    }
  } catch {
    oneLogger("buildAppMain 发生错误");
  }
};