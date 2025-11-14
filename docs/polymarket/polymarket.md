## 获取历史市场的结果
https://polymarketanalytics.com/api/traders-positions-history


## 获取当前交易
https://polymarketanalytics.com/api/activity-trades




## 官网用户活动的交易 


- 通过用户的地址获取用户的活动
- 还可以添加市场market和eventId 但两者互斥，只能传递其一
https://docs.polymarket.com/api-reference/core/get-user-activity?playground=open
https://data-api.polymarket.com/activity?limit=100&sortBy=TIMESTAMP&sortDirection=DESC&user=0x0d32e5fc366d846bbca8a82c6d60a6dd718b6336

获取到当前用户的所有交易之后


## 市场的详细示例-677623market.json
- 通过接口 https://docs.polymarket.com/api-reference/markets/get-market-by-id 进行获取
- 参数是市场id
- 返回结果中重要的几个字段
```
   // 市场id
  "id": "677623",
  // 市场交易的名称
  "question": "Bitcoin Up or Down - November 12, 8:45PM-9:00PM ET",
  // 该市场的两种状态
  "outcomes": "[\"Up\", \"Down\"]",
  // 该市场最终两个选项的状态结果值
  "outcomePrices": "[\"0\", \"1\"]",
  // 该市场问题是否已经被关闭
  "closed": true,
```
  