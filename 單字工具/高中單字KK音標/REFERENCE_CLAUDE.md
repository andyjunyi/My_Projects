# 台灣高中生英文例句資料庫專案

為約 15,000 個英文單字建立高品質例句，協助台灣高中生準備大學學測。
單字清單儲存於 Excel（`.xlsx`），依據教育部部頒高中英文課程綱要單字表。

---

## 例句生成規則

### 1. 用字範圍
- 例句用字**以教育部學測用字為主**，避免冷僻字彙。
- 目標單字必須出現在句中，詞性與用法須正確自然。

### 2. 句子長度
- 每句 **8–14 個單字**（計算標點前的實際單字數）。

### 3. 句型分級
→ 詳見 @.claude/rules/grammar-patterns.md
- A2 基礎（約 60%）：簡單句、並列句、副詞子句、形容詞子句
- B1 進階（約 30%）：分詞片語、假設語氣 Type 1&2、不定詞目的句
- B1–B2 挑戰（約 10%）：倒裝句、完成分詞構句

### 4. 主詞原則
- 人稱代名詞（he / she / they / we / I / you）作主詞比例控制在 **5% 以下**，其中 I、we、you 可少量使用以增加語感自然度。
- 需要人物主詞時，使用以下類型：
  - 男性名：Tom, Jack, David, Kevin, Brian, Eric, Mark
  - 女性名：Amy, Lisa, Sarah, Emma, Cindy, Tracy, Helen
  - 中性名：Alex, Jordan, Taylor, Sam
  - 稱謂：Mr. Chen, Mrs. Lin, Ms. Wang, Dr. Lee, Professor Wu, Coach Chang
  - 人物關係：parents, mother, father, aunt, uncle, grandparents, grandmother, grandfather, brother, sister, classmates, neighbors, teammates
  - 職場職務：manager, engineer, designer, nurse, lawyer, reporter, chef, driver, farmer, soldier, scientist, pilot
  - 校園人物：principal, teacher, librarian, school counselor, classmate, student, senior, freshman
  - 各行各業：doctor, dentist, artist, musician, photographer, architect, firefighter, police officer, volunteer, athlete, coach
  - 歷史人物：Abraham Lincoln, Marie Curie, Confucius, Sun Yat-sen, Florence Nightingale, Leonardo da Vinci
  - 科學家：Albert Einstein, Isaac Newton, Charles Darwin, Stephen Hawking, Tu Youyou, Thomas Edison
  - 著名影歌星：Taylor Swift, Beethoven, Jackie Chan（需符合句意自然）
- 主詞類型多樣化，**The + 名詞佔比低於 20%**，輪替使用：
  普通名詞、動名詞片語、不定詞片語、名詞子句、抽象名詞、複合名詞

---

## 品質標準
1. 語意自然，避免教科書腔。
2. 情境貼近台灣高中生日常（學校、家庭、科技、環境、社會議題）。
3. 搭配詞（collocation）與慣用句型正確。
4. 中文翻譯忠實且自然。
5. 同一單字若有多個例句，句型與主詞類型須不同。

---

## 資料欄位
→ 詳見 @.claude/rules/data-schema.md

核心欄位：`id` / `word` / `moe_level`（教育部詞彙分級 1–6） / `kk_phonetics`（音標相同時填寫，不同時留空） / `definition_zh`（音標不同時於各詞類後標注） / `example_sentence` / `sentence_zh` / `cefr_level` / `grammar_pattern` / `subject_type` / `reviewed`

---

## 工作流程與 Prompt 範本
→ 詳見 @.claude/rules/prompt-template.md

---

## 新增單字流程

日後如需補充新單字，請依以下步驟操作：

1. **編輯 `word_list.xlsx`**
   - 在最後一列之後追加新資料列
   - 只需填寫 `id`（流水號接續）、`word`、`moe_level` 三個欄位
   - 其餘欄位留空（程式會自動生成）

2. **執行增量生成**
   ```
   python generate_sentences.py
   ```
   - 程式會自動掃描所有 `example_sentence` 為空的列
   - 只處理新單字，不會動到已完成的資料
   - 支援中斷續傳（每 50 筆自動存檔）
   - 句型比例依該次待處理數量分配（A2 60% / B1 30% / B1-B2 10%）

3. **審核新例句**
   - 檢查 `generation_log.txt` 確認生成成功
   - 人工抽樣審核後將 `reviewed` 欄位標記為 `TRUE`

> **注意**：若新增單字量較少（如個位數），句型分配可能無法精準達到 60:30:10 比例，屬於正常情況。
