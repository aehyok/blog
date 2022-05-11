import { baseUrl, gitPushBy } from './utils/index.mjs'
let projectRelease = 'release';
let gitProject =  baseUrl + projectRelease;

// 获取版本信息
console.log(argv.v, "v");
let version = argv.v
global.version = version

await gitPushBy(projectRelease, gitProject)