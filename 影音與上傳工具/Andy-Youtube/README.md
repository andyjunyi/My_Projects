# 大灣高中 · 學測英文文意字彙互動網站

## 📁 資料夾結構

```
Andy-Youtube/
├── index.html          ← 主網站（本檔案）
├── videos.json         ← 影片資料（自動生成）
├── README.md           ← 說明文件
└── pdfs/               ← ⚠ 請建立此資料夾，將 PDF 放入
    ├── 093-文意字彙-all-學生講義-均一.pdf
    ├── 094-文意字彙-all-學生講義-均一.pdf
    ├── ...
    ├── 114-文意字彙-all-學生講義-均一.pdf
    └── 115-all-學生自學講義.pdf
```

## 🚀 啟動方式

**方法一：VS Code Live Server（推薦）**
1. 用 VS Code 開啟 `Andy-Youtube` 資料夾
2. 安裝 Live Server 擴充套件
3. 右鍵 `index.html` → Open with Live Server

**方法二：Python 本機伺服器**
```bash
cd ~/Desktop/Andy-Youtube
python -m http.server 8080
# 開啟瀏覽器 http://localhost:8080
```

**方法三：Node.js**
```bash
npx serve .
```

> ⚠ 直接雙擊 index.html 開啟會因瀏覽器安全限制無法載入 JSON 和 PDF，請務必使用本機伺服器。

## 📋 PDF 命名規則

| 學年度 | 檔名格式 |
|--------|----------|
| 093–114 | `{年度}-文意字彙-all-學生講義-均一.pdf` |
| 115 | `115-all-學生自學講義.pdf` |

## 🎯 功能說明

- 上方年度按鈕：快速切換學年度
- 左側影片清單：點選題號播放 YouTube 影片
- 中間影片區：內嵌 YouTube 播放器，顯示題目描述
- 右側 PDF 區：顯示對應年度學生自學講義
- 進度條：顯示當前學年度學習進度
