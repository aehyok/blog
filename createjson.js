const fs = require('fs');
const path = require('path');


console.log(process.argv[3]," argbv")
const directory = process.argv[3];
const folderPath = `./docs/${directory}/`; // 文件夹路径
const outputFilePath = `./docs/.vitepress/${directory}.json`; // 输出的 JSON 文件路径

fs.readdir(folderPath, (err, files) => {
  if (err) {
    return console.error('无法读取文件夹:', err);
  }

  // 按年份对文件进行分组
  const groupedData = {};

  files.forEach(file => {
    const match = file.match(/^(\d{4})-(\d{2})/); // 匹配 YYYY-MM 格式
    if (match) {
      const year = match[1];
      if (!groupedData[year]) {
        groupedData[year] = [];
      }

      // 去掉文件扩展名
      const fileNameWithoutExtension = path.basename(file, path.extname(file));

      // 将每个文件信息添加到对应年份的数组中
      groupedData[year].push({
        text: fileNameWithoutExtension, // 文件名不带后缀
        link: `/article/${directory}/${fileNameWithoutExtension}` // 链接不带后缀
      });
    }
  });

  const obj = {
    "ai": "-ai资讯",
    "代码开发": "-知识点积累"
  }

  // 将分组数据结构转换成所需格式并按年份倒序排序
  const outputData = Object.keys(groupedData)
    .sort((a, b) => b - a) // 年份倒序排序
    .map(year => ({
      text: `${year}${obj[directory]}`,
      items: groupedData[year]
    }));

  // 写入 JSON 文件
  fs.writeFile(outputFilePath, JSON.stringify(outputData, null, 2), 'utf8', (err) => {
    if (err) {
      return console.error('无法写入 JSON 文件:', err);
    }
    console.log('结构化数据已成功写入到', outputFilePath);
  });
});
