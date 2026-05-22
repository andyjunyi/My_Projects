# 句型分級規則

句型依難度分為三級，依比例輪替：A2 約 60%、B1 約 30%、B1–B2 約 10%。

## 第一級：A2 基礎句型（約 60%）
- 簡單句（Simple Sentence）
- 含對等連接詞的並列句（and, but, so, or, yet）
- 常見副詞子句（when, if, because, after, before, although）
- 簡單形容詞子句（who, which, that）
- 基本時態：現在式、過去式、未來式（will）、現在進行式、現在完成式

## 第二級：B1 進階句型（約 30%）
- **分詞片語**（Participial Phrase）
  - 條件：分詞邏輯主詞須與主句主詞一致，避免懸垂分詞。
  - 範例：*Feeling tired after class, Sarah decided to take a short nap.*
  - 範例：*Surprised by the result, the students cheered loudly.*
- **假設語氣 Type 1 & 2**
  - Type 1：If + 現在式，will + 原形 → *If you study hard, you will pass the exam.*
  - Type 2：If + 過去式，would + 原形 → *If Sarah had more time, she would learn piano.*
  - 限制：禁用 Type 3 完成式假設或混合時態。
- **不定詞表目的／結果**
  - 範例：*Tom went to the library to find books about science.*
  - 範例：*The teacher spoke slowly enough for everyone to understand.*

## 第三級：B1–B2 挑戰句型（約 10%）
- **倒裝句**（限常見學測類型）
  - 否定副詞開頭：Never, Seldom, Hardly, Not only … but also
    - 範例：*Never does Sarah give up when things get difficult.*
    - 範例：*Not only does exercise keep you fit, but it also improves your mood.*
  - Only + 副詞片語：*Only after breakfast did Tom feel ready for the day.*
  - 禁用：so…that 倒裝、Were I to… 等罕見倒裝。
- **完成分詞構句**（having + p.p.）
  - 範例：*Having finished her homework, Lisa went out for a walk.*
  - 限制：句子長度仍須在 14 字以內。

## grammar_pattern 代碼對照

| 代碼 | 說明 |
|---|---|
| `simple` | 簡單句 |
| `compound` | 並列句 |
| `adv_clause` | 副詞子句 |
| `adj_clause` | 形容詞子句 |
| `participial` | 分詞片語 |
| `participial_perf` | 完成分詞構句 |
| `conditional_1` | 第一條件句 |
| `conditional_2` | 第二條件句 |
| `infinitive_purpose` | 不定詞表目的 |
| `inversion` | 倒裝句 |
