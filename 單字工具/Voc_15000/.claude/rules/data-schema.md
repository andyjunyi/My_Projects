# 資料欄位規格（Excel / 資料庫）

| 欄位名稱 | 說明 | 範例 |
|---|---|---|
| `id` | 流水號 | 1, 2, 3 … |
| `word` | 目標單字（原形） | *determine* |
| `moe_level` | 教育部高中英文詞彙分級（1–6）；第一級最基礎，第六級最進階；學測範圍以第一至四級為主 | 3 |
| `kk_phonetics` | KK音標（台灣版本）；各詞類音標相同時填寫，音標不同時留空 | dɪ'tɝmɪn |
| `definition_zh` | 中文釋義；最多三種詞類，每種最多兩個常用中譯。若各詞類音標不同，於詞類後加註音標 | (名) 'rɛkɚd 紀錄；唱片　(動) rɪ'kɔrd 記錄；錄音 |
| `example_sentence` | 英文例句 | Winning the game determined their confidence. |
| `sentence_zh` | 例句中文翻譯 | 贏得比賽增強了他們的信心。 |
| `cefr_level` | 例句估計程度 | A2 / B1 / B1-B2 |
| `grammar_pattern` | 使用句型代碼（見 grammar-patterns.md） | `participial` |
| `word_count` | 例句單字數 | 11 |
| `subject_type` | 主詞類型 | 普通名詞 |
| `source` | 造句來源 | Claude AI / 人工審核 |
| `reviewed` | 是否人工審核 | TRUE / FALSE |
| `notes` | 備註（選填） | 特殊用法說明 |

---

## KK 音標規範（台灣版本）

台灣高中英語教學採用 **John Samuel Kenyon & Thomas Albert Knott** 所編訂的 KK 音標系統，與 IPA 略有差異。填寫 `kk_phonetics` 欄位時須遵守以下規則：

### 符號對照（台灣 KK 特有慣例）

| 發音 | KK 符號 | 範例 |
|---|---|---|
| 重音節 | `'`（放於重音節母音前，不加 [ ] 包覆） | dɪ'tɝmɪn |
| 次重音 | `ˌ`（放於次重音節母音前） | ˌɛdʒʊ'keʃən |
| 捲舌 r 化母音 | `ɝ`（重音）、`ɚ` （非重音） | *bird* bɝd、*teacher* 'titʃɚ |
| 長母音 i | `i`（不加長音符號） | *see* [si] |
| 短母音 i | `ɪ` | *sit* [sɪt] |
| 短母音 e | `ɛ` | *every* ['ɛvrɪ]、*bed* [bɛd] |
| 雙母音 | `e`、`aɪ`、`ɔɪ`、`oʊ`、`aʊ` | *day* [de]、*go* [goʊ] |
| 非重讀中央母音 | `ə` | *about* [ə'baʊt] |
| 清齒擦音 | `θ` | *think* [θɪŋk] |
| 濁齒擦音 | `ð` | *this* [ðɪs] |
| 鼻音 ng | `ŋ` | *sing* [sɪŋ] |

### 格式規則
- 重音符號為 `'`，置於**重音節的第一個母音之前**；**不加** `[ ]` 包覆
- 範例：dɪ'tɝmɪn、'rɛkɚd、rɪ'kɔrd
- 多音節單字必須標示重音，單音節免標
- 若僅單一詞類：填入 `kk_phonetics` 欄，`definition_zh` 不標音標
- 若多詞類**音標相同**：填入 `kk_phonetics` 欄，`definition_zh` 不標音標
- 若多詞類**音標不同**（如重音位置不同）：`kk_phonetics` 留空，於 `definition_zh` 各詞類後個別標示，格式為 `(詞類) [音標] 譯1；譯2`
  - 範例：`(名) ['rɛkɚd] 紀錄；唱片　(動) [rɪ'kɔrd] 記錄；錄音`
- 片語 (片)：一律不加 KK 音標
- 若單字有多個常見發音（如英式／美式），以**美式發音**為準
- 音標來源建議參考《遠東英漢大辭典》或《朗文當代英漢雙解辭典》台灣版

---

## 教育部詞彙分級說明（moe_level）

資料來源：**教育部高中英文參考詞彙表**（111 學年度起適用，建置於 109 年 7 月）
原始 PDF 分「依級別排序」與「依字母排序」兩部分，字母排序格式為 `word pos. 級數`（例：`affair n. 2`）。

| 級數 | 說明 | 對應 CEFR 約略參考 |
|---|---|---|
| 1 | 最基礎，國中核心字彙延伸 | A1–A2 |
| 2 | 基礎高中字彙 | A2 |
| 3 | 中階字彙 | A2–B1 |
| 4 | 中高階字彙，學測重點範圍 | B1 |
| 5 | 進階字彙 | B1–B2 |
| 6 | 高階字彙，超出學測核心範圍 | B2 |

> 學測（CSAT）考試範圍以第 **1–4 級**為主，第 5–6 級為補充延伸。

---

## 詞類標示規範

`part_of_speech` 欄位一律使用以下中文縮寫格式：

| 英文詞類 | 標示 |
|---|---|
| noun | (名) |
| verb | (動) |
| adjective | (形) |
| adverb | (副) |
| preposition | (介) |
| conjunction | (連) |
| pronoun | (代) |
| article | (冠) |
| interjection | (嘆) |
| auxiliary verb | (助) |
| phrasal verb | (片) |
