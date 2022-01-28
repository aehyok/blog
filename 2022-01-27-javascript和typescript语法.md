  const list = [{id: 1, name: 'aehyok'}, { id: 2, name: 'test'}]

  const newList = new Map<number, any>(
    list.map(node => [node.id, node])
  )

  console.log(newList, 'newList')