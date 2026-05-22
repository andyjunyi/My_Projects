# 📚 Jutor QR Code 系統設定說明

## 檔案說明

| 檔案 | 用途 |
|------|------|
| `generator.html` | 老師用的 QR Code 產生器（本機開啟即可）|
| `student.html` | 學生掃描後看到的頁面（需放到 GitHub Pages）|
| `gas-script.js` | Google Apps Script（貼到 Google Sheet）|

---

## 🔧 設定步驟（一次搞定）

### Step 1 — 設定 Google Sheet 回報

1. 開啟 [Google Sheet](https://sheets.google.com)，建立新試算表
2. 點選上方選單：**擴充功能 → Apps Script**
3. 刪除預設程式碼，將 `gas-script.js` 的內容**全部貼上**
4. 點「💾 儲存」
5. 點「▶ 執行 testWrite」，確認可以寫入（第一次需授權）
6. 點「部署 → 新增部署作業」
   - 類型選「**網頁應用程式**」
   - 執行身份：**我**
   - 存取權：**所有人**
7. 點「部署」，**複製部署網址**（格式：`https://script.google.com/macros/s/...`）

### Step 2 — 設定 student.html

1. 用文字編輯器（或 VS Code）開啟 `student.html`
2. 找到這一行：
   ```
   const GAS_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. 將單引號內的文字換成你剛複製的部署網址
4. 儲存

### Step 3 — 上傳到 GitHub Pages

1. 將修改好的 `student.html` 上傳到你的 GitHub repo（`jutor-qr`）
2. 確認網址可以開啟：`https://andyjunyi.github.io/jutor-qr/student.html`

### Step 4 — 使用產生器

1. 用瀏覽器直接開啟 `generator.html`（不需要放到網路上）
2. 步驟一填入：`https://andyjunyi.github.io/jutor-qr/student.html`
3. 步驟二輸入班級、座號、姓名 → 產生 → 下載

---

## 🧑‍🏫 每天的使用流程

```
老師列印 QR Code 貼在學生桌上或作業本
    ↓
學生用手機掃描
    ↓
看到自己的名字、班級確認身份 ✅
    ↓
自動跳轉 Jutor 練習頁（5秒）
    ↓
練習完畢，回到學生頁點「✅ 我完成了」
    ↓
老師的 Google Sheet 自動記錄（時間、班級、座號、姓名）
```

---

## ❓ 常見問題

**Q：學生說按了「完成」但 Sheet 沒有紀錄？**
A：確認 GAS_URL 有正確填入，且部署時「存取權」設為「所有人」。

**Q：產生器可以批次做嗎？**
A：目前是一個一個做。若有 CSV 名單，可以告訴 Andy 大叔升級功能 😄

**Q：QR Code 需要網路嗎？**
A：需要。掃描後要連到 GitHub Pages，學生手機需有網路。
