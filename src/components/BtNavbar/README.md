
## props

| props name  | type        | required    | default     | description |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| navList     | array       | true        |             | 選單資料     |
| closeByBackdrop | boolean |             | true        | 手機版點擊黑背景時, 是否關閉選單 |
| collapse    | boolean     |             | true        | 展開次級選單時, 是否自動收合其他已展開的選單 |


### navList 格式:
```sh
[
  {
    title: "item1",
    url: "#item1", // 傳入連結位置或錨點
    isAnchor: true, // 非必傳; 是否為錨點, 傳入true則將url視為錨點
    className: 'home', // 非必傳; 添加自訂class name
  },
  {
    title: "item2",
    navList: [ // 非必傳; 設定次級選單
      {
        title: "item2-1",
        url: "https://www.google.com/",
      },
      {
        title: "item2-2",
        url: "https://facebook.com/",
      }
    ]
  }
]
```


## slot

| slot name   | slot porps  |  type       | description |
| ----------- | ----------- | ----------- | ----------- |
| before      |             |             |選單list前插槽|
|             | closeNav    |  function   | 關閉選單     |
| after       |             |             |選單list後插槽|
|             | closeNav    |  function   | 關閉選單     |

### example
```sh
<BtNavbar :navList="navList">
  <template v-slot:before="{ closeNav }">
    <button @click="closeNav">close nav</button>
  </template>
</BtNavbar>
```