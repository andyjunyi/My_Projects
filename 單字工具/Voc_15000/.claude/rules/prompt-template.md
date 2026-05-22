# Claude API Prompt 範本

## 工作流程

```
1. 讀取 Excel 單字清單（pandas / openpyxl），每筆含 word、moe_level（1–6）
2. 依比例輪替分配 grammar_pattern（A2:B1:B1-B2 = 6:3:1）
3. 對每個單字呼叫 Claude API 生成例句（傳入 word、definition_zh、grammar_pattern、moe_level）
4. 寫回 Excel 或存入 SQLite / CSV
5. 人工抽樣審核（每 500 筆審核一次），通過後標記 reviewed = TRUE
```

## Prompt 範本

```
You are an English teacher creating example sentences for Taiwanese high school students preparing for the CSAT (學測) exam.

Generate ONE example sentence for the word: "{word}" (meaning: {definition_zh})
Word level: {moe_level}/6 (Taiwan MOE classification; 1 = most basic, 6 = most advanced; CSAT exam focuses on levels 1–4)

Use the following grammar pattern: {grammar_pattern}
(Options: simple, compound, adv_clause, adj_clause, participial, participial_perf, conditional_1, conditional_2, infinitive_purpose, inversion)

Rules:
- Vocabulary: Taiwan MOE high school word list only. For the supporting words (not the target word), prefer words at or below the target word's moe_level.
- Length: 8–14 words.
- CEFR mapping: simple/compound/adv_clause/adj_clause → A2; participial/conditional_1/conditional_2/infinitive_purpose → B1; participial_perf/inversion → B1-B2.
- participial: participial subject must match main clause subject.
- inversion: use only Never / Seldom / Not only…but also / Only after….
- conditional_2: If + past tense, would + base verb.
- Subject: Personal pronouns (he/she/they/we/I/you) must stay under 5% of total sentences. I, we, and you may occasionally be used for natural tone. Prefer: common English names, titles (Mr./Mrs./Dr./Professor/Coach), family nouns (parents/aunt/classmates…), workplace roles (manager/nurse/engineer…), campus figures (principal/librarian…), professionals (doctor/artist/athlete…), historical figures (Abraham Lincoln/Marie Curie…), scientists (Einstein/Newton…), well-known celebrities (Taylor Swift/Beethoven/Jackie Chan — only when contextually natural), gerunds, infinitives, noun clauses, or common nouns.
- Natural tone; context relatable to Taiwanese high school students.

- KK phonetics (Taiwan style): in `kk_phonetics` field, do NOT wrap in [ ] brackets. In `definition_zh`, phonetics are ONLY included when the SAME word has DIFFERENT pronunciations across POS, and MUST wrap in [ ].
  - Single POS or same pronunciation across POS: fill `kk_phonetics`; `definition_zh` contains NO phonetics.
  - Different pronunciation across POS (e.g. stress shift): leave `kk_phonetics` EMPTY; annotate in `definition_zh` as `(詞類) [音標] 譯1；譯2`.
  - Phrasal verbs (片): NEVER include KK phonetics.
  - Example (record, different stress): kk_phonetics="", definition_zh="(名) ['rɛkɚd] 紀錄；唱片　(動) [rɪ'kɔrd] 記錄；錄音"
  - Example (light, same pronunciation): kk_phonetics="laɪt", definition_zh="(名) 光；燈　(動) 點燃；照亮　(形) 輕的；淡的"

Return ONLY a JSON object:
{
  "example_sentence": "...",
  "sentence_zh": "...",
  "cefr_level": "A2 / B1 / B1-B2",
  "grammar_pattern": "...",
  "word_count": number,
  "subject_type": "common noun / proper name / gerund / infinitive / noun clause / abstract noun / compound noun",
  "kk_phonetics": "音標 or empty if POS have different phonetics",
  "definition_zh": "(詞類) 譯1；譯2 or (詞類) [音標] 譯1；譯2 when phonetics differ"
}
```

## 注意事項
- 每次 API 呼叫處理 1 個單字，避免輸出格式混亂。
- 若單字有多個詞性（e.g., *light*），建議分別造句。
- 定期備份資料庫。
- 最終可匯出為 CSV、JSON 或整合至學習平台。
