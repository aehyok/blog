import { baseUrl } from "./utils/index.mjs";
import { currentLogger } from "./utils/log.mjs";

const current = await $`pwd`;
// const project = "dvs-offiaccount-dev";
let gitProject = '' // baseUrl + project;
let main = '' // gitProject;

const oneLogger = (info) => {
    currentLogger(current, info)
}

const init = (project) => {
  console.log(project, 'project');
  gitProject = baseUrl + project
  main = gitProject
}

export const build = async (version, project) => {
  oneLogger(`开始初始化:${project}`);
  init(project)
  await gitPull();
  await buildone();
};

const gitPull = async () => {
  try {
    oneLogger(`开始git pull:${gitProject}`);
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
        oneLogger(`success build ${gitProject}`);
    } else {
        oneLogger(`build main-app error: ${buildInfo.stderr}`);
    }
  } catch {
    oneLogger("buildAppMain 发生错误");
  }
};

/**
 * 创建Git Tag标签
 */
const creatTag = () => {
  // cd ${gitpull_pathArray[${key}]}
  // echo 'tag 已经存在要先进行删除'
  // git tag -d $version
  // git push origin :refs/tags/$version

  // echo 'tag已删除要进行git tag'
  // git tag -a $version -m "${version}"
  // git push origin $version
  // echo -e "打tag项目:<<${projectName}>>成功";
  // cd $current_path
  // echo "tagVersion=\"$version\" # <<${projectName}>> # $(date)" >> ./versions
}