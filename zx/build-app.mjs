import { $, cd } from "zx";
import { sleep } from "zx";
import { baseUrl } from "./utils/index.mjs";
import { logger } from "./utils/log.mjs";
const current = await $`pwd`;
const currentPath = current.stdout.substring(0, current.stdout.length - 1);
console.log(currentPath, "currentPath");

const project = "dvs-app-h5-develop";
const gitProject = baseUrl + project;
const main = gitProject + "/" + "main-app";
const appList = [
  gitProject + "/" + "ffp-app",
  gitProject + "/" + "map-app-ts",
];

export const build_app = async (version) => {
  $`cd ${gitProject}`;
  await $`pwd`;
  console.log('项目当前路径', gitProject) 
  //   try {
  //     let pullInfo = await $`git pull`;
  //     console.log(pullInfo, "pullInfo");
  //     if (pullInfo.exitCode == 0) {
  //       console.log("success");
  //     } else {
  //       console.log("fail", $`$?`);
  //     }
  //   } catch {
  //     console.log('sssssssssssssss')
  //     cd(currentPath.stdout)
  //     logger("拉去代码发生异常");
  //   }

  // appList.forEach(element => {
  //     single(element)
  // });

  await buildAppMain()
  // await buildAppChildList()
  console.log("开始编译app的", version);
};

/**
 * 编译APP的主应用
 */
const buildAppMain = async() => {
    try {
        console.log("开始编译app的main");
        // cd(currentPath);
        $`cd ${currentPath}`;
        console.log("开始编译app的main- cd后");
        logger("开始编译：build main");
        cd(main);
        console.log("before");
        let buildInfo = await $`pnpm build`;
        console.log(buildInfo, "buildInfo");
        if(buildInfo.exitCode) {
            cd(currentPath);
            logger("结束编译：编译成功build main");
        }
        cd(currentPath);
        logger("结束编译：编译成功build main");
      } catch {
        cd(currentPath);
        logger("build main发生错误");
        console.error("build main发生错误");
      }
}

/**
 * 编译APP的子应用
 */
const buildAppChildList = () => {
  try {  
    Promise.all(
      appList.map((item) => {
        return $`cd ${item}; pnpm build`;
      })
    );
  } catch {
    console.log("sssssssssssssss-2");
    cd(currentPath);

    logger("child build error");
    console.log("child build error");
  }
};
