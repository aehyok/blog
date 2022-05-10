import { $ } from "zx";
import { baseUrl } from "./utils/index.mjs";
// import { logger } from "./utils/log.mjs";
import { addLog } from "./utils/data.mjs";
const current = await $`pwd`;

const project = "dvs-app-h5-develop";
const gitProject = baseUrl + project;
const main = gitProject + "/" + "main-app";
const appList = [gitProject + "/" + "ffp-app"];
let version = ''
export const build_app = async (version) => {
  console.log(version, 'appversion');
  version = version
  currentLogger("git pull 仓库代码： 开始");
  try {
    const gitPull = await $`cd ${gitProject}; git pull;`;
    console.log(gitPull, "pullInfo");
    if (gitPull.exitCode == 0) {
      console.log("success");
      currentLogger("git pull 仓库代码：成功");
    } else {
      console.log("fail", $`$?`);
    }
  } catch {
    currentLogger("拉去代码发生异常");
  }

  await buildAppMain();

  await buildAppChildList();
  // console.log("开始编译app的", version)
};

/**
 * 编译APP的主应用
 */
const buildAppMain = async () => {
  try {
    currentLogger("start build main-app");
    const buildInfo = await $` cd ${main};yarn build;`;
    console.log(buildInfo, "buildInfo");
    if (buildInfo.exitCode === 0) {
      currentLogger("success build main-app");
    } else {
      currentLogger(`build main-app error: ${buildInfo.stderr}`);
    }
  } catch {
    currentLogger("buildAppMain 发生错误");
  }
};

/**
 * 编译APP的子应用
 */
const buildAppChildList = () => {
  currentLogger("start build app childList");
  try {
    Promise.all(
      appList.map((item) => {
        return $`cd ${item}; yarn build`;
      })
    ).then((res) => {
      console.log(res, "res");
      currentLogger("success build app childList");
    });
  } catch {
    currentLogger("child build error");
  }
};

// const goCurrentPath = async () => {
//   const currentPath = current.stdout.substring(0, current.stdout.length - 1);
//   await $`cd ${currentPath}`;
// };

const currentLogger = async (info) => {
  // await goCurrentPath();
  addLog(project, info, window.version);
};
