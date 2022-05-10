export const gitPull = async() => {
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
}
