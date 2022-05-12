import { baseUrl } from "./common.mjs";
import { addLog } from "./sql-helper.mjs";

export const gitTag = async () => {
    const { name } = global.project
    const path = baseUrl + name
    const isExist = await isExistTag(path)
    console.log(isExist, 'isExist')
  if (isExist) {
    let isSuccess = await deleteTag(path);
    if (isSuccess) {
      await addTag(path, isExist);
    } else {
      oneLogger(`delete tag [${global.version}] error`);
    }
  } else {
    await addTag(path,isExist);
  }
};

const isExistTag = async (path) => {
  const result = await $` cd ${path};git tag;`;
  console.log("判断是否存在tag", result);
  if (result && result.exitCode === 0) {
    let array = result.stdout.split("\n");
    if (array.length > 0 && array.includes(global.version)) {
      return true;
    }
    return false;
  }
};

const deleteTag = async (path) => {
  oneLogger(`delete tag [${global.version}] start`);
  const result = await $` cd ${path}; 
                            git tag -d ${global.version}; 
                            git push origin :refs/tags/${global.version}`;
  if (result.exitCode === 0) {
    oneLogger(`delete tag [${global.version}] end success`);
    return true;
  }
  return false;
};

/**
 *
 * @param {*} path 路径
 * @param {*} isExist 0为不存在，直接创建的；1为已存在删除的，重新创建
 */
const addTag = async (path, isExist) => {
  const result = await $`cd ${path};
                           git tag -a ${global.version} -m 'chore:version ${global.version}版本号'; 
                           git push origin ${global.version};`;
  if (result && result.exitCode === 0) {
    if (isExist) {
      oneLogger(`re create tag [${global.version}] success`);
    } else {
      oneLogger(`create tag [${global.version}] success`);
    }
  }
};

const oneLogger = (info) => {
  console.log(info);
  const { name } = global.project
  addLog(name, info, global.version);
};
