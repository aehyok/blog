import { argv } from "zx";
import { baseUrl } from "./utils/common.mjs";
import { gitPullBy } from "./utils/git-pull.mjs";

let projectRelease = "release";
let gitProject = baseUrl + projectRelease;

console.log(argv.v, "v");
let version = argv.v;
global.version = version;

await gitPullBy(projectRelease, gitProject);
