# 恐龍訊息產生器
這個東西可以產生出一個供截圖用的，很像由用戶恐龍#2549送出的 Discord 訊息格式的東西。可以讓你用來偽造一句他沒說過的話來傳遍世界。

## 你用這東西幹嘛
練習編譯和看看js基本架構長怎樣。

## 我也想要一個我的
自己做。   
你可以 fork 這份專案回去自行更改。   
名字的部分，注意 `/src/components/nameInput.js` 裡面的 `option`，只需要更改裡面的值就好了。注意 `value` 就是顯示出來的名字。接著到 `src/app.js` 將預設換為你的名字。   
頭像的部分，你需要把 `/src/asset` 裡面的東西換成你的頭像，接著去 `/src/renderer.js` 改成匯入你的頭像。然後要去 `/src/components/avatarInput.js` 去把選單的選項改成選擇你的頭像，最後也要到 `/src/app.js` 把預設也改成你的預設頭像就大功告成了，簡單吧。
最後還有一些預設行為（預設文字、附件）可以在 /src/default.json 改。

## 我會欸，然後呢
喔你會喔，那太好了。接著你可以用 `yarn install` 下載所有你需要的東西，然後使用 `yarn start` 來執行這個東西。   
若你想要打包放上 Github Pages，先到 package.json 把 homepage 改掉，然後確定你有跟一個遠端檔案庫連著後，使用 `yarn build` 建出打包好的東西，再使用 `yarn deploy` 發布就好了。   

### build 失敗：Can't import the name export '...' from non EcmaScript module
如果你在 build 的時候他告訴你編譯失敗，且給了以上的理由，別擔心，我也碰到了。發生這種事時，請進入你的 `node_modules/@skyra/discord-components-react/dist`，將 `index.mjs` 改名為 `index.js`。之後往後退一層，打開他的 `package.json`，把你所有看到的 `index.mjs` 通通改成 `index.js`。在這之後重 build，應該就能成功編譯了。

## 補充
1.Copyright為AC0xRPFS001所有。
2.如果想編譯自己的版本，請注意`package.json`裡面的
  ```json
  {
    "scripts": {
      "start": "react-scripts --openssl-legacy-provider start",
      "build": "react-scripts --openssl-legacy-provider build",
      "test": "react-scripts --openssl-legacy-provider test",
      "eject": "react-scripts --openssl-legacy-provider eject",
      "deploy": "gh-pages -d build"
    }
  }
  ```
  其中的`--openssl-legacy-provider`是以Node v17去寫的，如果是v16就可以將`--openssl-legacy-provider`刪去。

## 補充
本網站為黑色背景，若想改成其他顏色背景的，請到 `/public` 的 `index.html`
```html
<!DOCTYPE html>
<html>
<! -- 中間略 -->
  <body>
  <style>
  body {
    background-color: #000000; <!-- 這行是背景顏色，若刪除則為預設的#FFFFFF背景 -->
    color: #FFFFFF; <! -- 這行是文字顏色 -->
  }
  </style>
</html>
```

# 警告
禁止以一切方式濫用此網站製造出違法言論。
