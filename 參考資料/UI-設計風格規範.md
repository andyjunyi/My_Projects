# UI 設計風格規範（Andy 老師專案通用）

## 主色調

### 推薦漸層組合
- **藍色系（預設）**：`linear-gradient(135deg, #1e40af → #3b82f6 → #60a5fa)`
- **藍紫漸層（中高級）**：`linear-gradient(135deg, #2563eb, #7c3aed)`
- **紫藍漸層（互動工具）**：`linear-gradient(135deg, #667eea, #764ba2)`
- **深藍到靛（正式）**：`linear-gradient(135deg, #1e3a5f, #2d1b69)`

### 配色比例
- Header/Hero：漸層色（佔 100% 寬度，高度 180–320px）
- 背景色：`#f1f5f9`（淺灰藍）或 `#f0f4ff`（淺藍）
- 卡片底色：白色 `#ffffff`
- 強調色：`#4f46e5`（indigo）或 `#FF6B35`（橘色強調）
- 文字主色：`#1e293b`（深灰）
- 文字次要：`#64748b`（灰）

## 字體規範

### 英文字型
- **主要**：`Nunito`（Google Fonts）— 圓潤活潑
- **備用**：`Poppins`（Google Fonts）— 現代簡潔（學測用）
- **KK音標**：`DM Mono` 或 `'Courier New', monospace`
- **字重**：標題 700–800，內文 400–600

### 中文字型
- **主要**：`Noto Sans TC`（Google Fonts）— 清晰現代
- **傳統**：`'PingFang TC', 'Microsoft JhengHei', sans-serif`
- **裝飾／老派**：`Noto Serif TC`（句子分析等文青風）

### 載入方式
```html
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Noto+Sans+TC:wght@400;500;700&family=DM+Mono&display=swap" rel="stylesheet">
```

## 卡片設計

### 通用卡片樣式
```css
.card {
  background: #ffffff;
  border-radius: 14px;       /* 12–20px 皆可 */
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
}
```

### 彩色頂邊框卡片（分級用）
```css
.card-tier1 { border-top: 4px solid #1d4ed8; }  /* 核心/必考 — 深藍 */
.card-tier2 { border-top: 4px solid #0d7a5f; }  /* 鞏固/重要 — 翠綠 */
.card-tier3 { border-top: 4px solid #7c3aed; }  /* 進階 — 紫色 */
.card-tier4 { border-top: 4px solid #f59e0b; }  /* 挑戰 — 琥珀 */
.card-tier5 { border-top: 4px solid #ef4444; }  /* 高難 — 紅色 */
```

### Badge / 標籤顏色
- 名詞：`bg-blue-100 text-blue-700`
- 動詞：`bg-green-100 text-green-700`
- 形容詞：`bg-yellow-100 text-yellow-700`
- 副詞：`bg-purple-100 text-purple-700`
- 介系詞：`bg-pink-100 text-pink-700`
- 連接詞：`bg-cyan-100 text-cyan-700`
- 代名詞：`bg-orange-100 text-orange-700`

## 佈局慣例

### Header
- 全寬漸層背景
- 白字或淺色字
- 左對齊標題 + 右側導航（如有）
- Sticky 導航列（z-index: 50）
- 大標題 font-size: 32–48px

### 主內容區
- `max-width: 960px` 或 `max-width: 1200px`
- 置中 `margin: 0 auto`
- 內距 `padding: 2rem 1rem`（手機）；`padding: 2rem 2rem`（桌機）

### 導航模式
- **Tab 切換**（無路由純靜態）：最常見，div 切換顯示
- **多頁 HTML**：index.html → course.html / quiz.html 等
- **React Router**：gsat-english-hub 等 SPA 專案用

## 數據呈現慣例

### KK 音標
- 格式：`/ˈæpl/`（斜線包圍）
- 字型：monospace 或 DM Mono
- 顏色：灰色 `#64748b` 或 `#6b7280`
- 簡化規則（KK_Lookup）：`eɪ` → `e`（如 `pleɪ` → `ple`）

### 詞類標示（兩套系統並存）
- **台灣傳統中文式**（推薦，用於國中專案）：
  - `(名)` `(動)` `(形)` `(副)` `(介)` `(連)` `(代)` `(助)` `(冠)`
  - 範例：`(名) 學生`、`(動) 學習`
- **英文縮寫式**（用於高中/學測專案）：
  - `n.` `v.` `adj.` `adv.` `prep.` `conj.` `pron.`
  - 範例：`n. 學生`、`v. 學習`

### 中文註釋格式
- 同一詞類多義：用「；」隔開，最多 2 義
  - `(名) 時間；次數`
- 多詞類：空格分隔，最多 2 詞類各 2 義
  - `(動) 工作；運作 (名) 工作`
- 同詞類兩中譯：用「、」隔開
  - `(動) 得到、獲得`

### 例句格式
- 英文例句 + 中文翻譯（分行或並列）
- 例句長度 8–20 字，貼近學生生活
- 無超綱詞彙

## 學習分級系統

### 分級代號
| 代號 | 說明 | 顏色 |
|------|------|------|
| 核心300 | 會考最高頻 | 深藍 #1d4ed8 |
| 鞏固450 | 中頻單字 | 翠綠 #0d7a5f |
| 其他/進階 | 低頻但重要 | 紫色 #7c3aed |

### 台灣課綱分級
- 國小 300 單
- 國中 1200 單（基礎）
- 國中 800 單（進階，合計 2000 單）
- 高中 7000 單

### CEFR 對應
- A1–A2：基礎（🟢）
- B1：中級（🟡）
- B2：中高級（🔴）

## 介面語言
- **全部繁體中文（zh-TW）**
- 教學說明、錯誤訊息、按鈕文字、標題皆用繁體
- 僅單字例句保留英文
- 鼓勵語氣：「只要熟讀這 935 個單字，就能掌握會考英文！」

## 動畫與互動
- 卡片 hover：`translateY(-4px)` + 陰影加深
- 閃卡翻轉：CSS 3D transform（`rotateY(180deg)`）
- 漸入：`@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } }`
- 答錯 shake：`@keyframes shake { 0%,100% { transform: translateX(0); } 25% { transform: translateX(-5px); } }`

## 技術棧選擇建議

| 專案類型 | 推薦技術 |
|----------|----------|
| 簡單查詢／列表 | 純 HTML/CSS/JS（資料嵌入 HTML） |
| 多頁教學網站 | 純 HTML/CSS/JS（多頁連結） |
| 互動工具（即時通訊） | Node.js + Socket.IO |
| 大型學習平台 | React 19 + Vite + Tailwind CSS |
| 資料處理 | Python（openpyxl, pandas） |
| 輕量後端 | Google Apps Script（儲存成績） |
| 部署 | GitHub Pages / Vercel |

## 專案文件結構（建議）

```
project-name/
├── index.html          # 首頁
├── styles/             # CSS
│   └── style.css
├── js/                 # JavaScript
│   └── data.js         # 嵌入資料庫
├── data/               # JSON / Excel 資料（可選）
├── README.md           # 專案說明
├── CLAUDE.md           # AI 開發規則（如有）
└── instructions.txt    # 給 AI 的格式要求
```
