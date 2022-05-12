import { addLog } from "./sql-helper.mjs";
import { baseUrl } from "./common.mjs";
export const yarnBuild = async () => {
  const { name } = global.project;
  const path = baseUrl + name;
    await yarnBuildBy(path)
};

export const yarnBuildBy = async (path) => {
    try {
         oneLogger(`yarn build start`);
        const buildInfo = await $` cd ${path};yarn build;`;
        console.log(buildInfo, "buildInfo");
        if (buildInfo.exitCode === 0) {
           oneLogger(`yarn build end success`);
        } else {
           oneLogger(`yarn build error: ${buildInfo.stderr}`);
        }
      } catch(error) {
          console.log('yarn build error', error)
           oneLogger("yarn build error");
      }
}

export const yarnBuildChildList = async(list) => {
  oneLogger("yarn build childList start");
    try {
      const result =await Promise.all(
        list.map((item) => {
          return $`cd ${item}; yarn build`;
        })
      )
      if(result) {
          console.log('all', result)
      }
    } catch {
      oneLogger("yarn build childList error");
    }
}

const oneLogger = (info) => {
  console.log(info);
  const { name } = global.project;
  addLog(name, info, global.version);
};
