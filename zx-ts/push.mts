import { gitPushBy } from "./utils/git-push.mjs";
import { baseUrl } from "./utils/common.mjs";
import { argv } from "zx";
let projectName = "release";
let path = baseUrl + projectName;

// 获取版本信息
let version = argv.v;
global.version = version;

await gitPushBy(projectName, path);
global.connection.destroy();
