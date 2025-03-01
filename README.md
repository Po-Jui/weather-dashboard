# Weather Dashboard

## 簡介

Weather Dashboard 是一款即時天氣查詢應用，使用者可以輸入城市名稱來獲取當前天氣資訊與未來天氣預測。該應用以視覺化方式呈現天氣狀況，包含溫度、濕度、風速等詳細數據。

## 功能特色

- **即時天氣查詢**：使用者輸入城市名稱，即可獲得當前的天氣資訊。
- **未來天氣預報**：提供未來 5 日的天氣預測，包含溫度、濕度及其他天氣狀況等資訊。
- **歷史搜尋紀錄**：儲存使用者查詢過的城市，方便快速點擊再次查詢 ( 限 5 筆 )。
- **動態天氣圖示及背景**：根據天氣狀況及日夜顯示不同圖示與改變背景顏色，提升使用體驗。
- **溫度格式切換** : 可自由切換華氏及攝氏溫度。

## 技術與工具

- **前端框架**：使用 Vue.js 建構。
- **UI 框架** : 使用 Vuetify。
- **API 整合**：透過 OpenWeather API 獲取即時天氣數據。
- **本地存儲 (Local Storage)**：用來保存使用者的查詢歷史。
- **瀑布式排列 (Masonry Layouts)**：以瀑布式排列 UI 呈現方式。
- **SweetAlert2** : 以該套件進行新增及刪除通知。

## 使用方式

1. 在搜尋框輸入城市名稱，在搜尋列表按下符合的城市名稱。
2. 立即顯示該城市的當前天氣狀況，包括氣溫、濕度、風速等資訊。
3. 顯示未來 5 日的天氣預測。
4. 搜尋過的城市會儲存在歷史紀錄中，點擊可快速查詢。

## 安裝與運行

### 專案設定

```
npm install
```

### 開發模式運行

```
npm run serve
```

### 打包專案

```
npm run build
```

### 程式碼檢查與修正

```
npm run lint
```

### 自訂設定

請參閱 [Configuration Reference](https://cli.vuejs.org/config/)

## 開發者資訊

- 作者：Po-Jui
- GitHub Repository：[點此查看](https://github.com/po-jui/weather-dashboard)
- Demo 網頁：[點此進入](https://po-jui.github.io/weather-dashboard/#/)
