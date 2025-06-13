const fs = require('fs');
const path = require('path');


console.log(process.argv[3]," argbv")
const directory = process.argv[3];
const folderPath = `./docs/article/economy/${directory}/`; // 文件夹路径
const outputFilePath = `./docs/.vitepress/${directory}.json`; // 输出的 JSON 文件路径

fs.readdir(folderPath, (err, files) => {
  if (err) {
    return console.error('无法读取文件夹:', err);
  }

  console.log('找到的文件:', files); // 调试信息

  // 按年份和周对文件进行分组
  const groupedData = {};

  files.forEach(file => {
    console.log('处理文件:', file); // 调试信息
    
    let match;
    let groupKey;
    let weekInfo;
    let dateForSort;
    
    if (directory === 'reviews') {
      // 匹配日期格式: YYYY-MM-DD
      match = file.match(/^(\d{4})-(\d{2})-(\d{2})/);
      if (match) {
        const year = parseInt(match[1]);
        const month = parseInt(match[2]);
        const day = parseInt(match[3]);
        
        // 创建日期对象
        const date = new Date(year, month - 1, day);
        
        // 使用ISO标准计算周数
        function getWeekNumber(date) {
          const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
          const dayNum = d.getUTCDay() || 7;
          d.setUTCDate(d.getUTCDate() + 4 - dayNum);
          const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
          return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
        }
        
        const weekNumber = getWeekNumber(date);
        
        // 获取星期几
        const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
        const dayOfWeek = weekDays[date.getDay()];
        
        groupKey = `${year}-W${weekNumber}`; // 按年份-周数分组
        weekInfo = `${month}月${day}日--星期${dayOfWeek}`;
        dateForSort = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        console.log('匹配到日期格式:', `${year}-${month}-${day}`, '计算周数:', weekNumber, '星期:', dayOfWeek); // 调试信息
      }
    } else {
      // 匹配月份格式 YYYY-MM
      match = file.match(/^(\d{4})-(\d{2})/);
      if (match) {
        groupKey = match[1]; // 年份
        console.log('匹配到年份格式:', groupKey); // 调试信息
      }
    }
    
    if (match) {
      if (!groupedData[groupKey]) {
        groupedData[groupKey] = [];
      }

      // 去掉文件扩展名
      const fileNameWithoutExtension = path.basename(file, path.extname(file));

      // 将每个文件信息添加到对应分组的数组中
      groupedData[groupKey].push({
        text: directory === 'reviews' ? weekInfo : fileNameWithoutExtension, // 周报显示周数，其他显示文件名
        link: `/article/economy/${directory}/${fileNameWithoutExtension}`, // 链接不带后缀
        dateForSort: dateForSort // 用于排序的日期
      });
    } else {
      console.log('文件格式不匹配:', file); // 调试信息
    }
  });

  console.log('分组数据:', groupedData); // 调试信息

  const obj = {
    "reviews": "年周报"
  }

  // 将分组数据结构转换成所需格式并按时间倒序排序
  const outputData = Object.keys(groupedData)
    .sort((a, b) => {
      if (directory === 'reviews') {
        // 按年份和周数倒序排序，先提取年份和周数进行比较
        const matchA = a.match(/(\d{4})-W(\d+)/);
        const matchB = b.match(/(\d{4})-W(\d+)/);
        if (matchA && matchB) {
          const yearA = parseInt(matchA[1]);
          const yearB = parseInt(matchB[1]);
          const weekA = parseInt(matchA[2]);
          const weekB = parseInt(matchB[2]);
          
          if (yearA !== yearB) {
            return yearB - yearA; // 年份倒序
          }
          return weekB - weekA; // 周数倒序，大的周排在前面
        }
        return b.localeCompare(a);
      } else {
        return b - a; // 按年份倒序排序
      }
    })
    .map(key => {
      let groupText;
      if (directory === 'reviews') {
        const match = key.match(/(\d{4})-W(\d+)/);
        if (match) {
          groupText = `${match[1]}年-第${parseInt(match[2])}周`;
        }
      } else {
        groupText = `${key}${obj[directory] || ''}`;
      }
      
      return {
        text: groupText,
        items: groupedData[key]
          .sort((a, b) => {
            // 按照日期倒序排序，日期大的排在前面
            if (directory === 'reviews' && a.dateForSort && b.dateForSort) {
              return b.dateForSort.localeCompare(a.dateForSort);
            }
            return 0;
          })
          .map(item => ({
            text: item.text,
            link: item.link
          })) // 移除排序用的dateForSort字段
      };
    });

  // 写入 JSON 文件
  fs.writeFile(outputFilePath, JSON.stringify(outputData, null, 2), 'utf8', (err) => {
    if (err) {
      return console.error('无法写入 JSON 文件:', err);
    }
    console.log('结构化数据已成功写入到', outputFilePath);
  });
});
