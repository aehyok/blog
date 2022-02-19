- 1、将数组对象，转换为Map数据的基本操作
  const list = [{id: 1, name: 'aehyok'}, { id: 2, name: 'test'}]

  const newList = new Map<number, any>(
    list.map(node => [node.id, node])
  )

  console.log(newList, 'newList')

- 2、typescript中的枚举操作
  ```js
    //1、声明一个枚举类型
    export enum ColumnType {
      static = '只读文本',
      text= '文本框',
      textarea= '文本域',
      select= '下拉列表',
      editor= '富文本',
      number= '数值框',
      image='上传图片',
      video= '上传视频',
      date= '日期',
      daterange = '日期范围'
    }

    //2、获取一个枚举类型值
    ColumnType['static']

    //3、将枚举转换成对象
    const columnList = {}
    for (const [key, value] of Object.entries(ColumnType)) {
      console.log(key, value, 'key-value')
      columnList[key] =value
    }

    //4、将枚举转换成数组
    const columnList = []
    for (const [key, value] of Object.entries(ColumnType)) {
      console.log(key, value, 'key-value')
      columnList.push({
        key,value
      })
    }
  ```  