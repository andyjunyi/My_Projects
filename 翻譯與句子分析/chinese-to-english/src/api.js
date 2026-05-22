// 分析句子，取得每個步驟的問題和答案
export async function analyzesentence(chineseText) {
  const response = await fetch('/api/anthropic/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      system: `你是一位親切的英文老師，專門引導台灣高中生做中翻英練習。

請分析給定的中文句子，產生五個步驟的引導問題和答案。
每個步驟都有「中文分析」和「英文翻譯」兩個小關卡。

【重要】只回傳純 JSON，不要有任何 markdown 或說明文字：
{
  "sentence": "原始中文句子",
  "steps": [
    {
      "step": 1,
      "title": "找主角",
      "chinese": {
        "question": "這句話的主詞（主角）是誰？請用中文回答。",
        "hint": "主詞就是句子裡「做動作的人或事物」",
        "answer": "中文主詞答案",
        "explanation": "說明為什麼這是主詞"
      },
      "english": {
        "question": "很好！那這個主詞用英文怎麼說？",
        "hint": "想想這個中文詞彙對應的英文單字",
        "answer": "英文主詞答案",
        "explanation": "說明英文主詞用法"
      }
    },
    {
      "step": 2,
      "title": "找動作",
      "chinese": {
        "question": "這句話的動詞是什麼？用什麼時態？請用中文回答。",
        "hint": "動詞就是句子裡「做的動作」，時態看是現在/過去/未來",
        "answer": "中文動詞答案",
        "explanation": "說明為什麼這是動詞及時態"
      },
      "english": {
        "question": "很好！那這個動詞（含時態）用英文怎麼說？",
        "hint": "記得依照時態變化動詞形式",
        "answer": "英文動詞答案",
        "explanation": "說明英文動詞時態用法"
      }
    },
    {
      "step": 3,
      "title": "找修飾",
      "chinese": {
        "question": "這句話有沒有形容詞或副詞修飾語？有的話是什麼？",
        "hint": "修飾語讓句子更生動，例如「很重要」、「努力地」",
        "answer": "中文修飾語答案（沒有就填「無」）",
        "explanation": "說明修飾語的功能"
      },
      "english": {
        "question": "這個修飾語用英文怎麼說？",
        "hint": "形容詞放在名詞前，副詞通常放在動詞後",
        "answer": "英文修飾語答案（沒有就填「none」）",
        "explanation": "說明英文修飾語位置"
      }
    },
    {
      "step": 4,
      "title": "找細節",
      "chinese": {
        "question": "這句話有沒有時間、地點或條件片語？",
        "hint": "例如「在截止日期前」、「在學校裡」、「如果...的話」",
        "answer": "中文片語答案（沒有就填「無」）",
        "explanation": "說明片語的功能"
      },
      "english": {
        "question": "這個片語用英文怎麼說？",
        "hint": "介系詞片語很重要，記得加上正確的介系詞",
        "answer": "英文片語答案（沒有就填「none」）",
        "explanation": "說明英文片語用法"
      }
    },
    {
      "step": 5,
      "title": "拼在一起",
      "chinese": {
        "question": "現在你已經找出所有元素了！試著說說看完整的中文句子結構是什麼？",
        "hint": "主詞 + 動詞 + 受詞 + 修飾語 + 時間地點",
        "answer": "完整中文結構說明",
        "explanation": "說明中文句子結構"
      },
      "english": {
        "question": "太棒了！現在試著把所有英文元素組合成完整的英文句子！",
        "hint": "英文語序：主詞 + 動詞 + 受詞 + 修飾語 + 時間地點",
        "answer": "完整英文翻譯",
        "explanation": "句子結構完整說明"
      },
      "table": [{"中文": "...", "英文": "...", "詞性": "..."}],
      "advanced": "進階版翻譯"
    }
  ],
  "collocations": [
    {
      "term": "搭配詞",
      "usage": "用法說明",
      "examples": [{"collocation": "...", "meaning": "..."}],
      "warning": "注意事項或null"
    }
  ]
}`,
      messages: [{ role: 'user', content: `請分析這個中文句子：「${chineseText}」` }],
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error?.message || 'API 連線失敗');
  }

  const data = await response.json();
  const raw = data.content.filter(b => b.type === 'text').map(b => b.text).join('');
  const clean = raw.replace(/```json|```/g, '').trim();
  return JSON.parse(clean);
}

// AI 對比學生答案，給具體回饋
export async function checkAnswer(step, questionType, question, correctAnswer, studentAnswer, chineseSentence) {
  try {
    const response = await fetch('/api/anthropic/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: `你是一位親切的英文老師，正在批改台灣高中生的中翻英練習。

【批改原則】
- 語意正確即可接受，不要求完全符合參考答案
- 大小寫不計
- 不要因為多寫或少寫冠詞就判錯
- 動名詞片語作主詞：只要語意對就算對
- 鼓勵學生，即使答錯也要溫柔引導

【重要】只回傳純 JSON，不要 markdown，不要其他文字：
{"correct":true或false,"feedback":"具體說明（繁體中文，2句內）","encouragement":"鼓勵語句（繁體中文，1句）"}`,
        messages: [{
          role: 'user',
          content: `練習句子：${chineseSentence}\n步驟：Step ${step}（${questionType}）\n題目：${question}\n參考答案：${correctAnswer}\n學生答案：${studentAnswer}\n\n請批改學生的答案，只回傳JSON。`
        }]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('API error:', response.status, errText);
      throw new Error(`API 狀態碼：${response.status}`);
    }

    const data = await response.json();
    console.log('checkAnswer raw:', JSON.stringify(data));

    const text = data.content?.find(c => c.type === 'text')?.text || '';
    console.log('checkAnswer text:', text);

    const clean = text.replace(/```json|```/g, '').trim();
    return JSON.parse(clean);

  } catch (err) {
    console.error('checkAnswer failed:', err);
    return { correct: false, feedback: `⚠️ 批改失敗：${err.message}`, encouragement: '請再試一次！' };
  }
}