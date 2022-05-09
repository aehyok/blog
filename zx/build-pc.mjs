import { sleep } from "zx";
import { baseUrl } from "./utils/index.mjs";
import { currentLogger } from "./utils/log.mjs";

const current = await $`pwd`;
const project = "dvs-server-ui-dev";
const gitProject = baseUrl + project;
const main = gitProject + "/" + "dvs-main";

const pcLogger = (info) => {
    currentLogger(current, info)
}
("/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-main");
("/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-basic");
("/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-cons");
("/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-village");
("/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-digital");
("/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-park");
("/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-gis");
("/e/work/git/dvs-2.x/dvs-server-ui-dev/dvs-ffp");
const appList = [
  gitProject + "/" + "dvs-basic",
  gitProject + "/" + "dvs-cons",
  gitProject + "/" + "dvs-village",
  gitProject + "/" + "dvs-digital",
  gitProject + "/" + "dvs-park",
  gitProject + "/" + "dvs-gis",
  gitProject + "/" + "dvs-ffp",
];

export const build_pc = async (version) => {
  console.log("开始编译PC的", version);
  await gitPull();
  await buildAppMain();
  await buildAppChildList();
};

const gitPull = async () => {
  try {
    const gitPull = await $`cd ${gitProject}; git pull;`;
    console.log(gitPull, "pullInfo");
    if (gitPull.exitCode == 0) {
      console.log("success");
      pcLogger( "git pull 仓库代码：成功");
    } else {
      console.log("fail", $`$?`);
    }
  } catch {
    pcLogger("拉去代码发生异常");
  }
};

const buildAppMain = async () => {
  try {
    pcLogger("start build main-app");
    const buildInfo = await $` cd ${main};yarn build;`;
    console.log(buildInfo, "buildInfo");
    if (buildInfo.exitCode === 0) {
    pcLogger(current, "success build main-app");
    } else {
        pcLogger(`build main-app error: ${buildInfo.stderr}`);
    }
  } catch {
    pcLogger("buildAppMain 发生错误");
  }
};

const buildAppChildList = () => {
    pcLogger("start build app childList");
    try {
      Promise.all(
        appList.map((item) => {
          return $`cd ${item}; yarn build`;
        })
      ).then((res) => {
        console.log(res, "res");
        pcLogger("success build app childList");
      });
    } catch {
        pcLogger("child build error");
    }    
};
