export const collocationData = [
  // ── make ──────────────────────────────────────────────────────────────────
  {
    phrase: "make a decision",
    type: "動詞 + 名詞",
    chinese: "做決定",
    keywords: ["make", "decision"],
    example: {
      english: "It is important to make a decision before the deadline.",
      chinese: "在截止日期前做出決定是很重要的。",
      grammar_point: "It is + adj + to + V（虛主詞句型）"
    },
    vocabulary: [
      { word: "decision", pos: "n.", chinese: "決定、抉擇" },
      { word: "deadline", pos: "n.", chinese: "截止日期" },
      { word: "important", pos: "adj.", chinese: "重要的" }
    ],
    sentence_pattern: {
      pattern: "It is + adj + to + V + O",
      example: "It is important to make a decision."
    }
  },
  {
    phrase: "make progress",
    type: "動詞 + 名詞",
    chinese: "取得進展、進步",
    keywords: ["make", "progress"],
    example: {
      english: "Students who study hard every day will make progress in their English.",
      chinese: "每天認真讀書的學生英文會有進步。",
      grammar_point: "關係子句：who + V（修飾主詞）"
    },
    vocabulary: [
      { word: "progress", pos: "n.", chinese: "進展、進步（不可數）" },
      { word: "study", pos: "v.", chinese: "學習、讀書" }
    ],
    sentence_pattern: {
      pattern: "S + who + V + will + V + O",
      example: "Students who study hard will make progress."
    }
  },
  {
    phrase: "make an effort",
    type: "動詞 + 名詞",
    chinese: "努力、付出努力",
    keywords: ["make", "effort"],
    example: {
      english: "We should make an effort to reduce plastic waste in our daily lives.",
      chinese: "我們應該努力減少日常生活中的塑膠垃圾。",
      grammar_point: "should + V（情態動詞表建議）"
    },
    vocabulary: [
      { word: "effort", pos: "n.", chinese: "努力、心力" },
      { word: "reduce", pos: "v.", chinese: "減少" },
      { word: "waste", pos: "n.", chinese: "廢棄物、浪費" }
    ],
    sentence_pattern: {
      pattern: "S + should + V + to + V + O",
      example: "We should make an effort to reduce waste."
    }
  },

  // ── achieve ───────────────────────────────────────────────────────────────
  {
    phrase: "achieve a goal",
    type: "動詞 + 名詞",
    chinese: "達成目標",
    keywords: ["achieve", "goal"],
    example: {
      english: "With hard work and determination, anyone can achieve a goal they set.",
      chinese: "透過努力和決心，任何人都可以達成他們設定的目標。",
      grammar_point: "with + N（介系詞片語表方式）"
    },
    vocabulary: [
      { word: "goal", pos: "n.", chinese: "目標" },
      { word: "determination", pos: "n.", chinese: "決心" },
      { word: "set", pos: "v.", chinese: "設定" }
    ],
    sentence_pattern: {
      pattern: "With + N, S + can + V + O",
      example: "With hard work, anyone can achieve a goal."
    }
  },
  {
    phrase: "achieve success",
    type: "動詞 + 名詞",
    chinese: "獲得成功",
    keywords: ["achieve", "success"],
    example: {
      english: "Those who never give up are more likely to achieve success in life.",
      chinese: "那些永不放棄的人在生活中更可能獲得成功。",
      grammar_point: "be more likely to + V（比較可能...）"
    },
    vocabulary: [
      { word: "success", pos: "n.", chinese: "成功（不可數）" },
      { word: "give up", pos: "phr. v.", chinese: "放棄" },
      { word: "likely", pos: "adj.", chinese: "可能的" }
    ],
    sentence_pattern: {
      pattern: "S + be more likely to + V + O",
      example: "They are more likely to achieve success."
    }
  },
  {
    phrase: "achieve balance",
    type: "動詞 + 名詞",
    chinese: "達到平衡",
    keywords: ["achieve", "balance"],
    example: {
      english: "It is difficult to achieve balance between work and personal life.",
      chinese: "在工作和個人生活之間達到平衡是很困難的。",
      grammar_point: "between A and B（A 和 B 之間）"
    },
    vocabulary: [
      { word: "balance", pos: "n.", chinese: "平衡" },
      { word: "personal", pos: "adj.", chinese: "個人的" },
      { word: "difficult", pos: "adj.", chinese: "困難的" }
    ],
    sentence_pattern: {
      pattern: "It is + adj + to + V + between A and B",
      example: "It is hard to achieve balance between work and life."
    }
  },

  // ── consider ──────────────────────────────────────────────────────────────
  {
    phrase: "consider carefully",
    type: "動詞 + 副詞",
    chinese: "仔細考慮",
    keywords: ["consider", "carefully"],
    example: {
      english: "Before making a choice, you should consider carefully all the options available.",
      chinese: "在做選擇之前，你應該仔細考慮所有可用的選項。",
      grammar_point: "Before + V-ing（時間副詞子句的省略）"
    },
    vocabulary: [
      { word: "carefully", pos: "adv.", chinese: "仔細地、謹慎地" },
      { word: "option", pos: "n.", chinese: "選項、選擇" },
      { word: "available", pos: "adj.", chinese: "可用的、可獲得的" }
    ],
    sentence_pattern: {
      pattern: "Before + V-ing, S + should + V + adv + O",
      example: "Before deciding, you should consider carefully all options."
    }
  },
  {
    phrase: "consider the consequences",
    type: "動詞 + 名詞",
    chinese: "考慮後果",
    keywords: ["consider", "consequences", "consequence"],
    example: {
      english: "Young people often act without taking time to consider the consequences of their actions.",
      chinese: "年輕人常常行動時沒有花時間考慮他們行為的後果。",
      grammar_point: "without + V-ing（沒有...就...）"
    },
    vocabulary: [
      { word: "consequence", pos: "n.", chinese: "後果、結果" },
      { word: "action", pos: "n.", chinese: "行動、行為" },
      { word: "without", pos: "prep.", chinese: "沒有" }
    ],
    sentence_pattern: {
      pattern: "S + V + without + V-ing + O",
      example: "They act without considering the consequences."
    }
  },
  {
    phrase: "consider options",
    type: "動詞 + 名詞",
    chinese: "考慮選項",
    keywords: ["consider", "options", "option"],
    example: {
      english: "The committee will consider options before announcing the final decision.",
      chinese: "委員會將在宣布最終決定之前考慮各種選項。",
      grammar_point: "before + V-ing（在...之前）"
    },
    vocabulary: [
      { word: "option", pos: "n.", chinese: "選項" },
      { word: "committee", pos: "n.", chinese: "委員會" },
      { word: "announce", pos: "v.", chinese: "宣布" }
    ],
    sentence_pattern: {
      pattern: "S + will + V + O + before + V-ing",
      example: "We will consider options before deciding."
    }
  },

  // ── develop ───────────────────────────────────────────────────────────────
  {
    phrase: "develop skills",
    type: "動詞 + 名詞",
    chinese: "培養技能",
    keywords: ["develop", "skills", "skill"],
    example: {
      english: "Reading widely is one of the best ways to develop skills in critical thinking.",
      chinese: "廣泛閱讀是培養批判性思維技能的最佳方法之一。",
      grammar_point: "one of the + 最高級 + 複數名詞"
    },
    vocabulary: [
      { word: "skill", pos: "n.", chinese: "技能、技巧" },
      { word: "widely", pos: "adv.", chinese: "廣泛地" },
      { word: "critical", pos: "adj.", chinese: "批判性的、關鍵的" }
    ],
    sentence_pattern: {
      pattern: "V-ing is one of the best ways to + V + O",
      example: "Reading is one of the best ways to develop skills."
    }
  },
  {
    phrase: "develop a habit",
    type: "動詞 + 名詞",
    chinese: "養成習慣",
    keywords: ["develop", "habit"],
    example: {
      english: "If you develop a habit of exercising daily, you will feel healthier and more energetic.",
      chinese: "如果你養成每天運動的習慣，你會感覺更健康、更有活力。",
      grammar_point: "If 條件句 + will（第一條件句）"
    },
    vocabulary: [
      { word: "habit", pos: "n.", chinese: "習慣" },
      { word: "exercise", pos: "v.", chinese: "運動" },
      { word: "energetic", pos: "adj.", chinese: "有活力的" }
    ],
    sentence_pattern: {
      pattern: "If + S + V + O, S + will + feel + adj",
      example: "If you develop a habit, you will feel better."
    }
  },
  {
    phrase: "develop a plan",
    type: "動詞 + 名詞",
    chinese: "制定計劃",
    keywords: ["develop", "plan"],
    example: {
      english: "The government needs to develop a plan to deal with the growing pollution problem.",
      chinese: "政府需要制定計劃來處理日益嚴重的污染問題。",
      grammar_point: "need to + V（需要做...）"
    },
    vocabulary: [
      { word: "plan", pos: "n.", chinese: "計劃" },
      { word: "government", pos: "n.", chinese: "政府" },
      { word: "pollution", pos: "n.", chinese: "污染" }
    ],
    sentence_pattern: {
      pattern: "S + needs to + V + O + to + V + O",
      example: "The government needs to develop a plan to solve the problem."
    }
  },

  // ── influence ─────────────────────────────────────────────────────────────
  {
    phrase: "have a positive influence",
    type: "動詞片語 + 名詞",
    chinese: "有正面影響",
    keywords: ["have", "influence", "positive"],
    example: {
      english: "Good teachers have a positive influence on their students' attitudes toward learning.",
      chinese: "好老師對學生的學習態度有正面影響。",
      grammar_point: "have influence on + N（對...有影響）"
    },
    vocabulary: [
      { word: "positive", pos: "adj.", chinese: "正面的、積極的" },
      { word: "influence", pos: "n.", chinese: "影響" },
      { word: "attitude", pos: "n.", chinese: "態度" }
    ],
    sentence_pattern: {
      pattern: "S + have a + adj + influence on + N",
      example: "Teachers have a positive influence on students."
    }
  },
  {
    phrase: "influence others",
    type: "動詞 + 代名詞",
    chinese: "影響他人",
    keywords: ["influence", "others"],
    example: {
      english: "Social media has the power to influence others and shape public opinion quickly.",
      chinese: "社群媒體有能力影響他人並迅速塑造公眾意見。",
      grammar_point: "have the power to + V（有...的能力）"
    },
    vocabulary: [
      { word: "social media", pos: "n.", chinese: "社群媒體" },
      { word: "power", pos: "n.", chinese: "力量、能力" },
      { word: "opinion", pos: "n.", chinese: "意見、看法" }
    ],
    sentence_pattern: {
      pattern: "S + have the power to + V + O",
      example: "Media has the power to influence others."
    }
  },
  {
    phrase: "influence on society",
    type: "名詞片語",
    chinese: "對社會的影響",
    keywords: ["influence", "society"],
    example: {
      english: "Technology has a strong influence on society and the way people communicate.",
      chinese: "科技對社會以及人們的溝通方式有強大的影響。",
      grammar_point: "the way + S + V（...的方式）"
    },
    vocabulary: [
      { word: "technology", pos: "n.", chinese: "科技" },
      { word: "society", pos: "n.", chinese: "社會" },
      { word: "communicate", pos: "v.", chinese: "溝通、交流" }
    ],
    sentence_pattern: {
      pattern: "S + have a + adj + influence on + N",
      example: "Technology has a strong influence on society."
    }
  },

  // ── significant ───────────────────────────────────────────────────────────
  {
    phrase: "significant impact",
    type: "形容詞 + 名詞",
    chinese: "重大影響、顯著衝擊",
    keywords: ["significant", "impact"],
    example: {
      english: "Climate change has had a significant impact on wildlife and natural habitats.",
      chinese: "氣候變遷對野生動物和自然棲地造成了重大影響。",
      grammar_point: "have had + O（現在完成式，強調影響延續至今）"
    },
    vocabulary: [
      { word: "significant", pos: "adj.", chinese: "重大的、顯著的" },
      { word: "impact", pos: "n.", chinese: "影響、衝擊" },
      { word: "habitat", pos: "n.", chinese: "棲息地" }
    ],
    sentence_pattern: {
      pattern: "S + have had a significant impact on + N",
      example: "Climate change has had a significant impact on nature."
    }
  },
  {
    phrase: "significant improvement",
    type: "形容詞 + 名詞",
    chinese: "顯著改善、重大進步",
    keywords: ["significant", "improvement"],
    example: {
      english: "After months of practice, she showed a significant improvement in her speaking ability.",
      chinese: "經過幾個月的練習，她的口說能力有了顯著的進步。",
      grammar_point: "After + N（介系詞片語表時間）"
    },
    vocabulary: [
      { word: "improvement", pos: "n.", chinese: "改善、進步" },
      { word: "practice", pos: "n.", chinese: "練習" },
      { word: "ability", pos: "n.", chinese: "能力" }
    ],
    sentence_pattern: {
      pattern: "After + N, S + showed a significant improvement in + N",
      example: "After practice, she showed a significant improvement."
    }
  },
  {
    phrase: "play a significant role",
    type: "動詞片語",
    chinese: "扮演重要角色",
    keywords: ["play", "significant", "role"],
    example: {
      english: "Good habits play a significant role in helping students succeed in their studies.",
      chinese: "良好的習慣在幫助學生學業成功方面扮演著重要角色。",
      grammar_point: "in + V-ing（在...方面）"
    },
    vocabulary: [
      { word: "role", pos: "n.", chinese: "角色、作用" },
      { word: "habit", pos: "n.", chinese: "習慣" },
      { word: "succeed", pos: "v.", chinese: "成功" }
    ],
    sentence_pattern: {
      pattern: "S + play a significant role + in + V-ing",
      example: "Education plays a significant role in shaping society."
    }
  },

  // ── suggest ───────────────────────────────────────────────────────────────
  {
    phrase: "suggest a solution",
    type: "動詞 + 名詞",
    chinese: "建議解決方案",
    keywords: ["suggest", "solution"],
    example: {
      english: "Many experts suggest a solution that involves reducing car usage in city centers.",
      chinese: "許多專家建議一個涉及減少市中心汽車使用的解決方案。",
      grammar_point: "that 關係子句（修飾名詞）"
    },
    vocabulary: [
      { word: "solution", pos: "n.", chinese: "解決方案" },
      { word: "expert", pos: "n.", chinese: "專家" },
      { word: "involve", pos: "v.", chinese: "涉及、包含" }
    ],
    sentence_pattern: {
      pattern: "S + suggest a solution + that + V + O",
      example: "Experts suggest a solution that reduces traffic."
    }
  },
  {
    phrase: "strongly suggest",
    type: "副詞 + 動詞",
    chinese: "強烈建議",
    keywords: ["suggest", "strongly"],
    example: {
      english: "Doctors strongly suggest that patients avoid eating too much sugar.",
      chinese: "醫生強烈建議病患避免吃太多糖。",
      grammar_point: "suggest + that + S + (should) + V 原形（建議子句）"
    },
    vocabulary: [
      { word: "strongly", pos: "adv.", chinese: "強烈地" },
      { word: "patient", pos: "n.", chinese: "病患" },
      { word: "avoid", pos: "v.", chinese: "避免" }
    ],
    sentence_pattern: {
      pattern: "S + strongly suggest + that + S + V",
      example: "Doctors strongly suggest that patients exercise regularly."
    }
  },
  {
    phrase: "suggest that",
    type: "動詞 + 連接詞",
    chinese: "建議...；顯示...",
    keywords: ["suggest"],
    example: {
      english: "Studies suggest that regular reading can greatly improve vocabulary and writing skills.",
      chinese: "研究顯示，定期閱讀可以大幅提升詞彙量和寫作技巧。",
      grammar_point: "suggest + that 名詞子句（表示研究結果）"
    },
    vocabulary: [
      { word: "research", pos: "n.", chinese: "研究" },
      { word: "regular", pos: "adj.", chinese: "定期的、規律的" },
      { word: "vocabulary", pos: "n.", chinese: "詞彙（量）" }
    ],
    sentence_pattern: {
      pattern: "Studies suggest that + S + can + V + O",
      example: "Studies suggest that reading can improve vocabulary."
    }
  },

  // ── improve ───────────────────────────────────────────────────────────────
  {
    phrase: "improve performance",
    type: "動詞 + 名詞",
    chinese: "提升表現、改善績效",
    keywords: ["improve", "performance"],
    example: {
      english: "Regular exercise and good sleep can help athletes improve performance significantly.",
      chinese: "規律運動和良好睡眠可以幫助運動員顯著提升表現。",
      grammar_point: "help + O + V 原形（幫助某人做某事）"
    },
    vocabulary: [
      { word: "performance", pos: "n.", chinese: "表現、績效" },
      { word: "athlete", pos: "n.", chinese: "運動員" },
      { word: "significantly", pos: "adv.", chinese: "顯著地" }
    ],
    sentence_pattern: {
      pattern: "S + can help + O + V + O",
      example: "Exercise can help athletes improve performance."
    }
  },
  {
    phrase: "significantly improve",
    type: "副詞 + 動詞",
    chinese: "顯著地改善",
    keywords: ["improve", "significantly"],
    example: {
      english: "Using digital tools in the classroom can significantly improve students' engagement and motivation.",
      chinese: "在課堂使用數位工具可以顯著改善學生的參與度和動機。",
      grammar_point: "V-ing 作主詞 + can + V（動名詞作主詞）"
    },
    vocabulary: [
      { word: "digital", pos: "adj.", chinese: "數位的" },
      { word: "engagement", pos: "n.", chinese: "參與（度）" },
      { word: "motivation", pos: "n.", chinese: "動機" }
    ],
    sentence_pattern: {
      pattern: "V-ing + can significantly improve + N",
      example: "Using technology can significantly improve learning."
    }
  },
  {
    phrase: "improve one's English",
    type: "動詞 + 名詞",
    chinese: "提升英文能力",
    keywords: ["improve", "English"],
    example: {
      english: "Watching English movies with subtitles is an effective way to improve one's English.",
      chinese: "看附有字幕的英文電影是提升英文能力的有效方法。",
      grammar_point: "V-ing is an effective way to + V（動名詞作主詞）"
    },
    vocabulary: [
      { word: "subtitle", pos: "n.", chinese: "字幕" },
      { word: "effective", pos: "adj.", chinese: "有效的" },
      { word: "movie", pos: "n.", chinese: "電影" }
    ],
    sentence_pattern: {
      pattern: "V-ing is an effective way to + V + O",
      example: "Watching movies is an effective way to improve English."
    }
  },

  // ── provide ───────────────────────────────────────────────────────────────
  {
    phrase: "provide support",
    type: "動詞 + 名詞",
    chinese: "提供支持",
    keywords: ["provide", "support"],
    example: {
      english: "Parents and teachers should work together to provide support for struggling students.",
      chinese: "家長和老師應該合作，為學習困難的學生提供支持。",
      grammar_point: "should + V + to + V（情態動詞 + 不定詞）"
    },
    vocabulary: [
      { word: "support", pos: "n.", chinese: "支持、援助" },
      { word: "struggle", pos: "v.", chinese: "掙扎、學習吃力" },
      { word: "together", pos: "adv.", chinese: "一起、共同" }
    ],
    sentence_pattern: {
      pattern: "S + should + V + together + to + V + O + for + N",
      example: "Teachers should work together to provide support for students."
    }
  },
  {
    phrase: "provide opportunities",
    type: "動詞 + 名詞",
    chinese: "提供機會",
    keywords: ["provide", "opportunities", "opportunity"],
    example: {
      english: "Volunteering abroad can provide opportunities to experience different cultures firsthand.",
      chinese: "出國當志工可以提供機會親身體驗不同的文化。",
      grammar_point: "V-ing 作主詞 + can + V + O（動名詞主詞）"
    },
    vocabulary: [
      { word: "opportunity", pos: "n.", chinese: "機會（複數：opportunities）" },
      { word: "volunteer", pos: "v.", chinese: "當志工" },
      { word: "firsthand", pos: "adv.", chinese: "親身地、直接地" }
    ],
    sentence_pattern: {
      pattern: "V-ing can provide opportunities to + V + O",
      example: "Traveling can provide opportunities to learn new things."
    }
  },
  {
    phrase: "provide information",
    type: "動詞 + 名詞",
    chinese: "提供資訊",
    keywords: ["provide", "information"],
    example: {
      english: "The internet can provide information on almost any topic within seconds.",
      chinese: "網際網路可以在幾秒內提供幾乎任何主題的資訊。",
      grammar_point: "within + 時間（在...時間之內）"
    },
    vocabulary: [
      { word: "information", pos: "n.", chinese: "資訊（不可數）" },
      { word: "topic", pos: "n.", chinese: "主題、話題" },
      { word: "within", pos: "prep.", chinese: "在...之內" }
    ],
    sentence_pattern: {
      pattern: "S + can provide information on + N + within + time",
      example: "The internet can provide information on any topic."
    }
  },

  // ── environment ───────────────────────────────────────────────────────────
  {
    phrase: "natural environment",
    type: "形容詞 + 名詞",
    chinese: "自然環境",
    keywords: ["environment", "natural"],
    example: {
      english: "Human activities are destroying the natural environment at an alarming rate.",
      chinese: "人類活動正以令人警覺的速度破壞自然環境。",
      grammar_point: "at an alarming rate（以驚人的速度）慣用語"
    },
    vocabulary: [
      { word: "natural", pos: "adj.", chinese: "自然的" },
      { word: "environment", pos: "n.", chinese: "環境" },
      { word: "destroy", pos: "v.", chinese: "破壞、摧毀" },
      { word: "alarming", pos: "adj.", chinese: "令人警覺的" }
    ],
    sentence_pattern: {
      pattern: "S + be + V-ing + O + at an alarming rate",
      example: "Humans are destroying the natural environment at an alarming rate."
    }
  },
  {
    phrase: "learning environment",
    type: "形容詞 + 名詞",
    chinese: "學習環境",
    keywords: ["environment", "learning"],
    example: {
      english: "A comfortable and safe learning environment helps students focus and perform better.",
      chinese: "舒適安全的學習環境幫助學生專注並有更好的表現。",
      grammar_point: "help + O + V 原形（幫助某人做某事）"
    },
    vocabulary: [
      { word: "comfortable", pos: "adj.", chinese: "舒適的" },
      { word: "safe", pos: "adj.", chinese: "安全的" },
      { word: "focus", pos: "v.", chinese: "專注" }
    ],
    sentence_pattern: {
      pattern: "A + adj + N + helps + O + V",
      example: "A good learning environment helps students focus."
    }
  },
  {
    phrase: "protect the environment",
    type: "動詞 + 名詞",
    chinese: "保護環境",
    keywords: ["protect", "environment"],
    example: {
      english: "Everyone has a responsibility to protect the environment for future generations.",
      chinese: "每個人都有責任為下一代保護環境。",
      grammar_point: "have a responsibility to + V（有責任去...）"
    },
    vocabulary: [
      { word: "protect", pos: "v.", chinese: "保護" },
      { word: "responsibility", pos: "n.", chinese: "責任" },
      { word: "generation", pos: "n.", chinese: "世代、一代" }
    ],
    sentence_pattern: {
      pattern: "S + have a responsibility to + V + O + for + N",
      example: "Everyone has a responsibility to protect the environment."
    }
  },

  // ── take ──────────────────────────────────────────────────────────────────
  {
    phrase: "take action",
    type: "動詞 + 名詞",
    chinese: "採取行動",
    keywords: ["take", "action"],
    example: {
      english: "The government must take action to solve the traffic problem right away.",
      chinese: "政府必須採取行動立即解決交通問題。",
      grammar_point: "must + V 原形（必須...）"
    },
    vocabulary: [
      { word: "immediate", pos: "adj.", chinese: "立即的" },
      { word: "solve", pos: "v.", chinese: "解決" },
      { word: "traffic", pos: "n.", chinese: "交通" }
    ],
    sentence_pattern: {
      pattern: "S + must + take action + to + V",
      example: "We must take action to protect the earth."
    }
  },
  {
    phrase: "take advantage of",
    type: "動詞片語",
    chinese: "利用、佔便宜",
    keywords: ["take", "advantage"],
    example: {
      english: "We should take advantage of the good weather to go hiking in the mountains.",
      chinese: "我們應該利用好天氣去山裡健行。",
      grammar_point: "should + V 原形（應該...）"
    },
    vocabulary: [
      { word: "advantage", pos: "n.", chinese: "優勢、好處" },
      { word: "weather", pos: "n.", chinese: "天氣" },
      { word: "hiking", pos: "n.", chinese: "健行" }
    ],
    sentence_pattern: {
      pattern: "S + should + take advantage of + N",
      example: "Take advantage of this rare opportunity."
    }
  },
  {
    phrase: "take ... for granted",
    type: "動詞片語",
    chinese: "將...視為理所當然",
    keywords: ["take", "granted"],
    example: {
      english: "People often take their health for granted until they get sick.",
      chinese: "人們常常把健康視為理所當然，直到生病才後悔。",
      grammar_point: "take + O + for granted（把...視為理所當然）"
    },
    vocabulary: [
      { word: "health", pos: "n.", chinese: "健康" },
      { word: "granted", pos: "adj.", chinese: "理所當然的" },
      { word: "sick", pos: "adj.", chinese: "生病的" }
    ],
    sentence_pattern: {
      pattern: "S + take + N + for granted + until + clause",
      example: "Don't take your family for granted."
    }
  },
  {
    phrase: "take ... into consideration",
    type: "動詞片語",
    chinese: "將...列入考慮",
    keywords: ["take", "consideration"],
    example: {
      english: "When making a plan, you must take all possible risks into consideration.",
      chinese: "在制定計畫時，你必須將所有可能的風險列入考慮。",
      grammar_point: "take + N + into consideration（將...列入考慮）"
    },
    vocabulary: [
      { word: "possible", pos: "adj.", chinese: "可能的" },
      { word: "risk", pos: "n.", chinese: "風險" },
      { word: "consideration", pos: "n.", chinese: "考慮" }
    ],
    sentence_pattern: {
      pattern: "S + take + N + into consideration",
      example: "Take his advice into consideration."
    }
  },
  {
    phrase: "take part in",
    type: "動詞片語",
    chinese: "參加、參與",
    keywords: ["take", "part"],
    example: {
      english: "All students are encouraged to take part in extracurricular activities.",
      chinese: "鼓勵所有學生參加課外活動。",
      grammar_point: "be encouraged to + V（被鼓勵去...）"
    },
    vocabulary: [
      { word: "encourage", pos: "v.", chinese: "鼓勵" },
      { word: "extracurricular", pos: "adj.", chinese: "課外的" },
      { word: "activity", pos: "n.", chinese: "活動" }
    ],
    sentence_pattern: {
      pattern: "S + take part in + N",
      example: "He took part in the marathon."
    }
  },
  {
    phrase: "take pride in",
    type: "動詞片語",
    chinese: "以...為榮",
    keywords: ["take", "pride"],
    example: {
      english: "True craftsmen always take pride in every detail of their work.",
      chinese: "真正的工匠始終對工作的每個細節感到驕傲。",
      grammar_point: "take pride in + N/V-ing（以...為傲）"
    },
    vocabulary: [
      { word: "skilled", pos: "adj.", chinese: "熟練的、技術精湛的" },
      { word: "unique", pos: "adj.", chinese: "獨特的" },
      { word: "creation", pos: "n.", chinese: "創作、創造物" }
    ],
    sentence_pattern: {
      pattern: "S + take pride in + N",
      example: "Parents take pride in their children's success."
    }
  },
  {
    phrase: "take turns",
    type: "動詞片語",
    chinese: "輪流",
    keywords: ["take", "turns"],
    example: {
      english: "The siblings take turns doing the dishes every evening.",
      chinese: "兄弟姊妹每天晚上輪流洗碗。",
      grammar_point: "take turns + V-ing（輪流做某事）"
    },
    vocabulary: [
      { word: "sibling", pos: "n.", chinese: "手足、兄弟姊妹" },
      { word: "dish", pos: "n.", chinese: "菜餚、盤子（do the dishes: 洗碗）" },
      { word: "evening", pos: "n.", chinese: "傍晚、晚上" }
    ],
    sentence_pattern: {
      pattern: "S + take turns + V-ing",
      example: "We took turns driving during the road trip."
    }
  },
  {
    phrase: "take ... seriously",
    type: "動詞片語",
    chinese: "認真看待...",
    keywords: ["take", "seriously"],
    example: {
      english: "It is crucial to take global warming seriously before it is too late.",
      chinese: "在為時已晚之前，認真看待全球暖化是至關重要的。",
      grammar_point: "take + O + seriously（認真看待某事/某人）"
    },
    vocabulary: [
      { word: "crucial", pos: "adj.", chinese: "至關重要的" },
      { word: "global warming", pos: "n.", chinese: "全球暖化" },
      { word: "seriously", pos: "adv.", chinese: "認真地、嚴肅地" }
    ],
    sentence_pattern: {
      pattern: "S + take + N + seriously",
      example: "You should take your doctor's advice seriously."
    }
  },

  // ── catch ─────────────────────────────────────────────────────────────────
  {
    phrase: "catch one's attention",
    type: "動詞 + 名詞",
    chinese: "吸引某人的注意",
    keywords: ["catch", "attention"],
    example: {
      english: "Bright colors and bold designs always catch one's attention more than plain ones.",
      chinese: "鮮豔的色彩和大膽的設計總是比素淡的更能吸引人的注意。",
      grammar_point: "catch + 所有格 + attention（吸引某人的注意）"
    },
    vocabulary: [
      { word: "colorful", pos: "adj.", chinese: "色彩鮮豔的" },
      { word: "advertisement", pos: "n.", chinese: "廣告" },
      { word: "easily", pos: "adv.", chinese: "容易地" }
    ],
    sentence_pattern: {
      pattern: "S + catch + one's + attention",
      example: "Her unique dress caught my attention."
    }
  },
  {
    phrase: "catch sight of",
    type: "動詞片語",
    chinese: "看見、瞥見",
    keywords: ["catch", "sight"],
    example: {
      english: "I was lucky to catch sight of the beautiful rainbow after the heavy rain.",
      chinese: "我很幸運能在滂沱大雨後瞥見美麗的彩虹。",
      grammar_point: "be lucky to + V（幸運能...）"
    },
    vocabulary: [
      { word: "lucky", pos: "adj.", chinese: "幸運的" },
      { word: "sight", pos: "n.", chinese: "視力、看見" },
      { word: "rainbow", pos: "n.", chinese: "彩虹" }
    ],
    sentence_pattern: {
      pattern: "S + catch sight of + N + time/place",
      example: "He caught sight of a rare bird in the forest."
    }
  },
  {
    phrase: "catch up with",
    type: "動詞片語",
    chinese: "趕上",
    keywords: ["catch", "up"],
    example: {
      english: "He had to study hard to catch up with his classmates after being sick for a week.",
      chinese: "生病一週後，他必須努力讀書才能趕上同學的進度。",
      grammar_point: "catch up with + N（趕上某人/某事）"
    },
    vocabulary: [
      { word: "study", pos: "v.", chinese: "讀書" },
      { word: "classmate", pos: "n.", chinese: "同學" },
      { word: "sick", pos: "adj.", chinese: "生病的" }
    ],
    sentence_pattern: {
      pattern: "S + have to + V + to + catch up with + N",
      example: "I need to read more to catch up with my work."
    }
  },

  // ── keep ──────────────────────────────────────────────────────────────────
  {
    phrase: "keep in mind",
    type: "動詞片語",
    chinese: "牢記在心",
    keywords: ["keep", "mind"],
    example: {
      english: "Please keep in mind that the train will leave at exactly 9 a.m.",
      chinese: "請牢記火車將在早上九點準時離開。",
      grammar_point: "keep in mind that + 子句（牢記...）"
    },
    vocabulary: [
      { word: "mind", pos: "n.", chinese: "心智、頭腦" },
      { word: "exactly", pos: "adv.", chinese: "確切地、準時地" },
      { word: "leave", pos: "v.", chinese: "離開" }
    ],
    sentence_pattern: {
      pattern: "Keep in mind that + S + V",
      example: "Keep in mind that safety always comes first."
    }
  },
  {
    phrase: "keep track of",
    type: "動詞片語",
    chinese: "記錄、追蹤",
    keywords: ["keep", "track"],
    example: {
      english: "It is a good habit to keep track of your daily expenses using a smartphone app.",
      chinese: "用智慧型手機應用程式記錄每天的開銷是個好習慣。",
      grammar_point: "It is a good habit to + V（做...是個好習慣）"
    },
    vocabulary: [
      { word: "habit", pos: "n.", chinese: "習慣" },
      { word: "daily", pos: "adj.", chinese: "每天的" },
      { word: "expense", pos: "n.", chinese: "花費、開銷" }
    ],
    sentence_pattern: {
      pattern: "S + keep track of + N + by V-ing",
      example: "She keeps track of time by wearing a watch."
    }
  },
  {
    phrase: "keep an eye on",
    type: "動詞片語",
    chinese: "留意、照看",
    keywords: ["keep", "eye"],
    example: {
      english: "Could you please keep an eye on my luggage while I go to the restroom?",
      chinese: "我去洗手間時，能請你幫我照看一下行李嗎？",
      grammar_point: "while + S + V（當...的時候）"
    },
    vocabulary: [
      { word: "luggage", pos: "n.", chinese: "行李" },
      { word: "restroom", pos: "n.", chinese: "洗手間" },
      { word: "while", pos: "conj.", chinese: "當...時" }
    ],
    sentence_pattern: {
      pattern: "Could you keep an eye on + N + while + clause?",
      example: "Keep an eye on the baby for me."
    }
  },

  // ── pay ───────────────────────────────────────────────────────────────────
  {
    phrase: "pay attention to",
    type: "動詞片語",
    chinese: "注意、專心於",
    keywords: ["pay", "attention"],
    example: {
      english: "Students should pay attention to every detail when completing the science experiment.",
      chinese: "學生在進行科學實驗時應注意每一個細節。",
      grammar_point: "pay attention to + N（注意...）"
    },
    vocabulary: [
      { word: "instruction", pos: "n.", chinese: "指示、說明" },
      { word: "during", pos: "prep.", chinese: "在...期間" },
      { word: "experiment", pos: "n.", chinese: "實驗" }
    ],
    sentence_pattern: {
      pattern: "S + should pay attention to + N",
      example: "Pay attention to the warning signs."
    }
  },
  {
    phrase: "pay the price",
    type: "動詞 + 名詞",
    chinese: "付出代價",
    keywords: ["pay", "price"],
    example: {
      english: "If you neglect your health now, you will definitely pay the price in the future.",
      chinese: "如果你現在忽視健康，將來一定會付出代價。",
      grammar_point: "If + 條件句（現在式）, S + will + V（未來式）"
    },
    vocabulary: [
      { word: "neglect", pos: "v.", chinese: "忽視" },
      { word: "health", pos: "n.", chinese: "健康" },
      { word: "future", pos: "n.", chinese: "未來" }
    ],
    sentence_pattern: {
      pattern: "If + clause, S + will + pay the price",
      example: "He paid the price for his careless mistake."
    }
  },
  {
    phrase: "pay a visit",
    type: "動詞 + 名詞",
    chinese: "拜訪、參觀",
    keywords: ["pay", "visit"],
    example: {
      english: "My family plans to pay a visit to the national museum this coming weekend.",
      chinese: "我們家計畫這個週末去參觀國家博物館。",
      grammar_point: "plan to + V（計畫做...）"
    },
    vocabulary: [
      { word: "plan", pos: "v.", chinese: "計畫" },
      { word: "national", pos: "adj.", chinese: "國家的" },
      { word: "museum", pos: "n.", chinese: "博物館" }
    ],
    sentence_pattern: {
      pattern: "S + plan to + pay a visit to + N",
      example: "We will pay a visit to our grandparents."
    }
  },

  // ── meet ──────────────────────────────────────────────────────────────────
  {
    phrase: "meet the demand",
    type: "動詞 + 名詞",
    chinese: "滿足需求",
    keywords: ["meet", "demand"],
    example: {
      english: "The factory had to hire more workers to meet the demand for its popular new products.",
      chinese: "工廠必須僱用更多工人，以滿足對其熱銷新產品的需求。",
      grammar_point: "to + V（不定詞表目的）"
    },
    vocabulary: [
      { word: "factory", pos: "n.", chinese: "工廠" },
      { word: "hire", pos: "v.", chinese: "僱用" },
      { word: "demand", pos: "n.", chinese: "需求" }
    ],
    sentence_pattern: {
      pattern: "S + V + to meet the demand for + N",
      example: "They increased production to meet the demand."
    }
  },
  {
    phrase: "meet the deadline",
    type: "動詞 + 名詞",
    chinese: "趕上截止期限",
    keywords: ["meet", "deadline"],
    example: {
      english: "We had to work overtime in order to meet the deadline for our report.",
      chinese: "為了趕上報告的截止日期，我們不得不加班。",
      grammar_point: "in order to + V（為了...）"
    },
    vocabulary: [
      { word: "stay up", pos: "phr. v.", chinese: "熬夜" },
      { word: "project", pos: "n.", chinese: "專案、計畫" },
      { word: "deadline", pos: "n.", chinese: "截止期限" }
    ],
    sentence_pattern: {
      pattern: "S + V + in order to meet the deadline",
      example: "She worked fast to meet the deadline."
    }
  },
  {
    phrase: "meet expectations",
    type: "動詞 + 名詞",
    chinese: "符合期望",
    keywords: ["meet", "expectations", "expectation"],
    example: {
      english: "The new product was disappointing and completely failed to meet expectations in the market.",
      chinese: "這款新產品令人失望，完全無法符合市場的期望。",
      grammar_point: "fail to + V（未能...）"
    },
    vocabulary: [
      { word: "terrible", pos: "adj.", chinese: "糟糕的" },
      { word: "completely", pos: "adv.", chinese: "完全地" },
      { word: "expectation", pos: "n.", chinese: "期望（常用複數）" }
    ],
    sentence_pattern: {
      pattern: "S + failed to + meet expectations",
      example: "The new phone met all my expectations."
    }
  },

  // ── face ──────────────────────────────────────────────────────────────────
  {
    phrase: "face a challenge",
    type: "動詞 + 名詞",
    chinese: "面臨挑戰",
    keywords: ["face", "challenge"],
    example: {
      english: "Moving abroad means you will face a challenge every day as you adapt to a new culture.",
      chinese: "移居海外意味著你每天都要面臨挑戰，以適應新文化。",
      grammar_point: "V-ing 作主詞（動名詞片語）"
    },
    vocabulary: [
      { word: "moving", pos: "n.", chinese: "搬遷" },
      { word: "mean", pos: "v.", chinese: "意味著" },
      { word: "unknown", pos: "adj.", chinese: "未知的" }
    ],
    sentence_pattern: {
      pattern: "S + will face + adj + challenges",
      example: "Every startup faces a challenge at the beginning."
    }
  },
  {
    phrase: "face the music",
    type: "動詞片語",
    chinese: "承擔後果、面對現實",
    keywords: ["face", "music"],
    example: {
      english: "After cheating on the exam, he finally had to face the music and accept his punishment.",
      chinese: "在考試作弊後，他最後必須承擔後果並接受懲罰。",
      grammar_point: "After + V-ing（在...之後）"
    },
    vocabulary: [
      { word: "cheat", pos: "v.", chinese: "作弊" },
      { word: "accept", pos: "v.", chinese: "接受" },
      { word: "punishment", pos: "n.", chinese: "懲罰" }
    ],
    sentence_pattern: {
      pattern: "S + have to face the music + after + V-ing",
      example: "You broke the window, now you have to face the music."
    }
  },
  {
    phrase: "face reality",
    type: "動詞 + 名詞",
    chinese: "面對現實",
    keywords: ["face", "reality"],
    example: {
      english: "It is time for him to face reality and start looking for a real job.",
      chinese: "是他該面對現實並開始找份真正工作的時候了。",
      grammar_point: "It is time for + O + to + V（是某人做...的時候了）"
    },
    vocabulary: [
      { word: "reality", pos: "n.", chinese: "現實" },
      { word: "look for", pos: "phr. v.", chinese: "尋找" },
      { word: "real", pos: "adj.", chinese: "真正的" }
    ],
    sentence_pattern: {
      pattern: "It is time for + S + to + face reality",
      example: "She refused to face reality after the failure."
    }
  },

  // ── raise ─────────────────────────────────────────────────────────────────
  {
    phrase: "raise awareness",
    type: "動詞 + 名詞",
    chinese: "喚起意識",
    keywords: ["raise", "awareness"],
    example: {
      english: "The NGO launched a campaign to raise awareness about ocean pollution.",
      chinese: "這個非政府組織發起一項活動，以喚起大眾對海洋污染的意識。",
      grammar_point: "to + V（不定詞表目的）"
    },
    vocabulary: [
      { word: "campaign", pos: "n.", chinese: "活動、運動" },
      { word: "public", pos: "adj.", chinese: "大眾的" },
      { word: "awareness", pos: "n.", chinese: "意識" }
    ],
    sentence_pattern: {
      pattern: "S + aim to raise awareness of + N",
      example: "The short video raised awareness about mental health."
    }
  },
  {
    phrase: "raise funds",
    type: "動詞 + 名詞",
    chinese: "籌措資金",
    keywords: ["raise", "funds", "fund"],
    example: {
      english: "The school held a charity concert to raise funds for the local hospital.",
      chinese: "學校舉辦了一場慈善音樂會，為當地醫院籌措資金。",
      grammar_point: "to + V（不定詞表目的）"
    },
    vocabulary: [
      { word: "charity", pos: "n.", chinese: "慈善" },
      { word: "concert", pos: "n.", chinese: "音樂會" },
      { word: "fund", pos: "n.", chinese: "資金（常用複數）" }
    ],
    sentence_pattern: {
      pattern: "S + held an event to raise funds for + N",
      example: "They sell cookies to raise funds for the club."
    }
  },

  // ── reach ─────────────────────────────────────────────────────────────────
  {
    phrase: "reach an agreement",
    type: "動詞 + 名詞",
    chinese: "達成協議",
    keywords: ["reach", "agreement"],
    example: {
      english: "After hours of discussion, the two parties managed to reach an agreement.",
      chinese: "經過數小時的討論，雙方設法達成協議。",
      grammar_point: "reach an agreement (on/about sth)（針對...達成協議）"
    },
    vocabulary: [
      { word: "discussion", pos: "n.", chinese: "討論" },
      { word: "party", pos: "n.", chinese: "派對；(契約、談判的)一方/當事人" },
      { word: "finally", pos: "adv.", chinese: "終於" }
    ],
    sentence_pattern: {
      pattern: "S + reach an agreement",
      example: "We reached an agreement after a long meeting."
    }
  },
  {
    phrase: "reach a consensus",
    type: "動詞 + 名詞",
    chinese: "達成共識",
    keywords: ["reach", "consensus"],
    example: {
      english: "It is difficult for the committee members to reach a consensus on this controversial issue.",
      chinese: "委員會成員很難在這個具爭議的議題上達成共識。",
      grammar_point: "It is adj for O to V（對某人來說做...是...的）"
    },
    vocabulary: [
      { word: "consensus", pos: "n.", chinese: "共識" },
      { word: "committee", pos: "n.", chinese: "委員會" },
      { word: "controversial", pos: "adj.", chinese: "具爭議的" }
    ],
    sentence_pattern: {
      pattern: "S + reach a consensus on + N",
      example: "They reached a consensus on the new policy."
    }
  },
  {
    phrase: "reach one's potential",
    type: "動詞 + 名詞",
    chinese: "發揮潛能",
    keywords: ["reach", "potential"],
    example: {
      english: "With proper guidance, every child can reach their potential in any field they choose.",
      chinese: "有了適當的引導，每個孩子都能在任何領域發揮他們的潛能。",
      grammar_point: "With + N（有了.../伴隨著...）"
    },
    vocabulary: [
      { word: "proper", pos: "adj.", chinese: "適當的" },
      { word: "guidance", pos: "n.", chinese: "引導、指導" },
      { word: "potential", pos: "n.", chinese: "潛力、潛能" }
    ],
    sentence_pattern: {
      pattern: "With + N, S + can reach one's full potential",
      example: "Hard work helps you reach your potential."
    }
  },

  // ── set ───────────────────────────────────────────────────────────────────
  {
    phrase: "set a good example",
    type: "動詞 + 名詞",
    chinese: "樹立好榜樣",
    keywords: ["set", "example"],
    example: {
      english: "Parents should set a good example for their children to follow.",
      chinese: "父母應該樹立一個好榜樣讓孩子們效法。",
      grammar_point: "set a good example for + N（為...樹立好榜樣）"
    },
    vocabulary: [
      { word: "parent", pos: "n.", chinese: "父母" },
      { word: "example", pos: "n.", chinese: "例子、榜樣" },
      { word: "follow", pos: "v.", chinese: "跟隨、效法" }
    ],
    sentence_pattern: {
      pattern: "S + set a good example for + N",
      example: "The teacher sets a good example for the students."
    }
  },
  {
    phrase: "set a goal",
    type: "動詞 + 名詞",
    chinese: "設定目標",
    keywords: ["set", "goal"],
    example: {
      english: "You should always set a goal before you start working on any important project.",
      chinese: "在開始任何重要專案之前，你應該先設定目標。",
      grammar_point: "should + V（情態動詞表建議）"
    },
    vocabulary: [
      { word: "clear", pos: "adj.", chinese: "清楚的、明確的" },
      { word: "step", pos: "n.", chinese: "步驟、步伐" },
      { word: "toward", pos: "prep.", chinese: "朝向" }
    ],
    sentence_pattern: {
      pattern: "V-ing + is the first step toward + N/V-ing",
      example: "Setting a goal keeps you motivated."
    }
  },
  {
    phrase: "set a record",
    type: "動詞 + 名詞",
    chinese: "創下紀錄",
    keywords: ["set", "record"],
    example: {
      english: "The young athlete trained extremely hard and successfully set a record at the national event.",
      chinese: "這位年輕的運動員極度努力地訓練，並成功在全國賽事中創下紀錄。",
      grammar_point: "train hard（努力訓練，hard為副詞）"
    },
    vocabulary: [
      { word: "athlete", pos: "n.", chinese: "運動員" },
      { word: "extremely", pos: "adv.", chinese: "極度地" },
      { word: "record", pos: "n.", chinese: "紀錄" }
    ],
    sentence_pattern: {
      pattern: "S + successfully set a record",
      example: "She set a record for the fastest run."
    }
  },

  // ── leave ─────────────────────────────────────────────────────────────────
  {
    phrase: "leave a deep impression",
    type: "動詞 + 名詞",
    chinese: "留下深刻印象",
    keywords: ["leave", "impression"],
    example: {
      english: "Great works of art and literature often leave a deep impression on those who experience them.",
      chinese: "偉大的藝術和文學作品常常對欣賞它們的人留下深刻的印象。",
      grammar_point: "leave a deep impression on + N（對...留下深刻印象）"
    },
    vocabulary: [
      { word: "breathtaking", pos: "adj.", chinese: "令人嘆為觀止的" },
      { word: "scenery", pos: "n.", chinese: "風景" },
      { word: "tourist", pos: "n.", chinese: "遊客" }
    ],
    sentence_pattern: {
      pattern: "S + leave a deep impression on + N",
      example: "His speech left a deep impression on me."
    }
  },
  {
    phrase: "leave much to be desired",
    type: "動詞片語",
    chinese: "有待加強、差強人意",
    keywords: ["leave", "desired"],
    example: {
      english: "Despite the restaurant's great location, the food quality leaves much to be desired.",
      chinese: "儘管這家餐廳地點優越，但食物品質實在有待加強。",
      grammar_point: "Despite + N（儘管...，後接名詞不接子句）"
    },
    vocabulary: [
      { word: "although", pos: "conj.", chinese: "雖然" },
      { word: "cheap", pos: "adj.", chinese: "便宜的" },
      { word: "service", pos: "n.", chinese: "服務" }
    ],
    sentence_pattern: {
      pattern: "S + leave much to be desired",
      example: "His attitude leaves much to be desired."
    }
  },

  // ── gain ──────────────────────────────────────────────────────────────────
  {
    phrase: "gain access to",
    type: "動詞 + 名詞 + 介系詞",
    chinese: "獲得使用(或進入)的權利/管道",
    keywords: ["gain", "access"],
    example: {
      english: "Students can gain access to a wealth of information through the digital library.",
      chinese: "學生可以透過數位圖書館獲得豐富的資訊。",
      grammar_point: "through + N（透過...方式）"
    },
    vocabulary: [
      { word: "access", pos: "n.", chinese: "進入的權利、使用管道" },
      { word: "wealth", pos: "n.", chinese: "財富、大量" },
      { word: "digital", pos: "adj.", chinese: "數位的" }
    ],
    sentence_pattern: {
      pattern: "S + can gain access to + N + through + N",
      example: "Users can gain access to the file online."
    }
  },
  {
    phrase: "gain experience",
    type: "動詞 + 名詞",
    chinese: "獲得經驗",
    keywords: ["gain", "experience"],
    example: {
      english: "Taking a part-time job allows teenagers to gain experience in a real work environment.",
      chinese: "打工讓青少年能在真實的工作環境中獲得經驗。",
      grammar_point: "allow + O + to + V（讓某人做某事）"
    },
    vocabulary: [
      { word: "part-time", pos: "adj.", chinese: "兼職的" },
      { word: "teenager", pos: "n.", chinese: "青少年" },
      { word: "social", pos: "adj.", chinese: "社會的、社交的" }
    ],
    sentence_pattern: {
      pattern: "V-ing + is a good way for O to gain experience",
      example: "Volunteering helps you gain experience."
    }
  },
  {
    phrase: "gain recognition",
    type: "動詞 + 名詞",
    chinese: "獲得認可、獲得肯定",
    keywords: ["gain", "recognition"],
    example: {
      english: "Talented artists often struggle for years before they gain recognition from the public.",
      chinese: "才華橫溢的藝術家常常要奮鬥多年才能獲得大眾的認可。",
      grammar_point: "before + S + V（在...之前）"
    },
    vocabulary: [
      { word: "outstanding", pos: "adj.", chinese: "傑出的" },
      { word: "artwork", pos: "n.", chinese: "藝術品" },
      { word: "recognition", pos: "n.", chinese: "認可、承認" }
    ],
    sentence_pattern: {
      pattern: "S + finally gained recognition from + N",
      example: "The scientist gained recognition for his discovery."
    }
  },

  // ── express ───────────────────────────────────────────────────────────────
  {
    phrase: "express gratitude",
    type: "動詞 + 名詞",
    chinese: "表達感激",
    keywords: ["express", "gratitude"],
    example: {
      english: "It is always polite to express gratitude when others help you in difficult times.",
      chinese: "當別人在困難時期幫助你時，表達感激之情總是很有禮貌的。",
      grammar_point: "It is + adj + to + V（虛主詞句型）"
    },
    vocabulary: [
      { word: "sincere", pos: "adj.", chinese: "誠摯的、真誠的" },
      { word: "gratitude", pos: "n.", chinese: "感激" },
      { word: "timely", pos: "adj.", chinese: "及時的" }
    ],
    sentence_pattern: {
      pattern: "I would like to express my gratitude for + N",
      example: "She expressed gratitude for the gift."
    }
  },
  {
    phrase: "express concern",
    type: "動詞 + 名詞",
    chinese: "表達關切、表達擔憂",
    keywords: ["express", "concern"],
    example: {
      english: "Many scientists express concern about the rising sea levels caused by climate change.",
      chinese: "許多科學家對氣候變遷造成的海平面上升表達了關切。",
      grammar_point: "S + express concern about + N（對...表達關切）"
    },
    vocabulary: [
      { word: "expert", pos: "n.", chinese: "專家" },
      { word: "concern", pos: "n.", chinese: "關切、擔憂" },
      { word: "rapid", pos: "adj.", chinese: "快速的" }
    ],
    sentence_pattern: {
      pattern: "S + have expressed concern about + N",
      example: "Parents expressed concern about school safety."
    }
  },

  // ── devote ────────────────────────────────────────────────────────────────
  {
    phrase: "devote oneself to",
    type: "動詞片語",
    chinese: "致力於、獻身於",
    keywords: ["devote", "oneself"],
    example: {
      english: "After graduation, he decided to devote himself to medical research to help more people.",
      chinese: "畢業後，他決定致力於醫學研究，以幫助更多人。",
      grammar_point: "devote oneself to + N/V-ing（to為介系詞）"
    },
    vocabulary: [
      { word: "graduation", pos: "n.", chinese: "畢業" },
      { word: "decide", pos: "v.", chinese: "決定" },
      { word: "medical", pos: "adj.", chinese: "醫療的、醫學的" }
    ],
    sentence_pattern: {
      pattern: "S + decide to devote oneself to + N/V-ing",
      example: "She devoted herself to helping the poor."
    }
  },
  {
    phrase: "devote time and energy to",
    type: "動詞片語",
    chinese: "奉獻時間與精力於...",
    keywords: ["devote", "time", "energy"],
    example: {
      english: "You need to devote time and energy to your studies if you want to pass the exam.",
      chinese: "如果你想通過考試，你需要奉獻時間與精力在課業上。",
      grammar_point: "if 條件句（如果...）"
    },
    vocabulary: [
      { word: "energy", pos: "n.", chinese: "精力、能量" },
      { word: "studies", pos: "n.", chinese: "學業（常用複數）" },
      { word: "pass", pos: "v.", chinese: "通過" }
    ],
    sentence_pattern: {
      pattern: "S + need to devote time and energy to + N",
      example: "He devotes all his energy to his business."
    }
  },

  // ── spare ─────────────────────────────────────────────────────────────────
  {
    phrase: "spare no effort",
    type: "動詞片語",
    chinese: "不遺餘力",
    keywords: ["spare", "effort"],
    example: {
      english: "Teams that spare no effort in preparation usually achieve the best results.",
      chinese: "在準備工作上不遺餘力的隊伍通常能達成最佳成果。",
      grammar_point: "spare no effort to + V（不遺餘力去做...）"
    },
    vocabulary: [
      { word: "rescue", pos: "n.", chinese: "救援" },
      { word: "search", pos: "v.", chinese: "搜尋" },
      { word: "missing", pos: "adj.", chinese: "失蹤的" }
    ],
    sentence_pattern: {
      pattern: "S + spare no effort to + V + O",
      example: "The doctors spared no effort to save his life."
    }
  },
  {
    phrase: "spare time",
    type: "動詞 + 名詞",
    chinese: "撥出時間",
    keywords: ["spare", "time"],
    example: {
      english: "Even when busy, a good friend will always spare time to listen to your problems.",
      chinese: "即使忙碌，好朋友也總是會撥出時間傾聽你的問題。",
      grammar_point: "Even when + adj（即使...的時候）"
    },
    vocabulary: [
      { word: "even though", pos: "conj.", chinese: "儘管" },
      { word: "busy", pos: "adj.", chinese: "忙碌的" },
      { word: "homework", pos: "n.", chinese: "功課" }
    ],
    sentence_pattern: {
      pattern: "Even though S+V, S + still spared time to + V",
      example: "Can you spare some time to talk?"
    }
  },

  // ── fulfill ───────────────────────────────────────────────────────────────
  {
    phrase: "fulfill a dream",
    type: "動詞 + 名詞",
    chinese: "實現夢想",
    keywords: ["fulfill", "dream"],
    example: {
      english: "With determination and persistence, anyone can fulfill a dream they have always had.",
      chinese: "憑藉決心和毅力，任何人都能實現他們一直以來的夢想。",
      grammar_point: "It takes + N + to + V（做...需要...）"
    },
    vocabulary: [
      { word: "courage", pos: "n.", chinese: "勇氣" },
      { word: "childhood", pos: "n.", chinese: "童年" },
      { word: "dream", pos: "n.", chinese: "夢想" }
    ],
    sentence_pattern: {
      pattern: "It takes N to fulfill a dream",
      example: "She finally fulfilled her dream of becoming a pilot."
    }
  },
  {
    phrase: "fulfill a promise",
    type: "動詞 + 名詞",
    chinese: "履行諾言",
    keywords: ["fulfill", "promise"],
    example: {
      english: "A trustworthy person will always try their best to fulfill a promise they made.",
      chinese: "一個值得信賴的人總是會盡力履行他們所做出的承諾。",
      grammar_point: "try one's best to + V（盡某人最大的努力去...）"
    },
    vocabulary: [
      { word: "trustworthy", pos: "adj.", chinese: "值得信賴的" },
      { word: "promise", pos: "n.", chinese: "諾言、承諾" },
      { word: "made", pos: "v.", chinese: "做出（make的過去分詞做形容詞用）" }
    ],
    sentence_pattern: {
      pattern: "S + try one's best to fulfill a promise",
      example: "He worked hard to fulfill his promise to his mother."
    }
  },
  {
    phrase: "fulfill one's duty",
    type: "動詞 + 名詞",
    chinese: "盡自己的職責",
    keywords: ["fulfill", "duty"],
    example: {
      english: "As a citizen of this country, everyone should fulfill their duty to society.",
      chinese: "身為這個國家的公民，每個人都應該對社會盡自己的職責。",
      grammar_point: "As a + N（身為一個...）"
    },
    vocabulary: [
      { word: "citizen", pos: "n.", chinese: "公民" },
      { word: "duty", pos: "n.", chinese: "職責、義務" },
      { word: "society", pos: "n.", chinese: "社會" }
    ],
    sentence_pattern: {
      pattern: "As a N, S + should fulfill one's duty",
      example: "The police officer fulfilled his duty bravely."
    }
  },

  // ── become ────────────────────────────────────────────────────────────────
  {
    phrase: "become a reality",
    type: "動詞 + 名詞",
    chinese: "化為現實、成真",
    keywords: ["become", "reality"],
    example: {
      english: "Thanks to advances in technology, space travel has finally become a reality.",
      chinese: "多虧了科技的進步，太空旅行終於化為現實。",
      grammar_point: "Thanks to + N（多虧了... / 因為...）"
    },
    vocabulary: [
      { word: "advance", pos: "n.", chinese: "進步、發展" },
      { word: "technology", pos: "n.", chinese: "科技" },
      { word: "reality", pos: "n.", chinese: "現實" }
    ],
    sentence_pattern: {
      pattern: "S + become a reality",
      example: "Her childhood dream became a reality."
    }
  },
  {
    phrase: "become aware of",
    type: "動詞片語",
    chinese: "意識到、察覺到",
    keywords: ["become", "aware"],
    example: {
      english: "People have recently become aware of the serious environmental issues caused by plastic waste.",
      chinese: "人們最近已經意識到塑膠廢棄物所造成的嚴重環境議題。",
      grammar_point: "become aware of + N（意識到...）"
    },
    vocabulary: [
      { word: "recently", pos: "adv.", chinese: "最近" },
      { word: "aware", pos: "adj.", chinese: "察覺的、知道的" },
      { word: "issue", pos: "n.", chinese: "議題、問題" }
    ],
    sentence_pattern: {
      pattern: "S + become aware of + N",
      example: "He became aware of the danger."
    }
  },
  {
    phrase: "become accustomed to",
    type: "動詞片語",
    chinese: "習慣於...",
    keywords: ["become", "accustomed"],
    example: {
      english: "It took the exchange student several months to become accustomed to eating with chopsticks.",
      chinese: "這位交換學生花了幾個月的時間才習慣用筷子吃飯。",
      grammar_point: "become accustomed to + V-ing / N（習慣於...，此處 to 為介系詞）"
    },
    vocabulary: [
      { word: "exchange", pos: "n.", chinese: "交換" },
      { word: "several", pos: "adj.", chinese: "幾個的" },
      { word: "accustomed", pos: "adj.", chinese: "習慣的" }
    ],
    sentence_pattern: {
      pattern: "S + become accustomed to + V-ing / N",
      example: "I have become accustomed to waking up early."
    }
  },
  {
    phrase: "become increasingly important",
    type: "動詞 + 副詞 + 形容詞",
    chinese: "變得日益重要",
    keywords: ["become", "increasingly", "important"],
    example: {
      english: "Learning a second language has become increasingly important in today's globalized world.",
      chinese: "在現今全球化的世界中，學習第二外語變得日益重要。",
      grammar_point: "become increasingly + adj.（越來越...）"
    },
    vocabulary: [
      { word: "increasingly", pos: "adv.", chinese: "漸增地、日益" },
      { word: "globalized", pos: "adj.", chinese: "全球化的" },
      { word: "second", pos: "adj.", chinese: "第二的" }
    ],
    sentence_pattern: {
      pattern: "V-ing + has become increasingly important",
      example: "Recycling has become increasingly important."
    }
  },
  {
    phrase: "become infected with",
    type: "動詞片語",
    chinese: "感染(疾病)",
    keywords: ["become", "infected"],
    example: {
      english: "Thousands of people became infected with the deadly virus during the pandemic.",
      chinese: "在疫情大流行期間，數以千計的人感染了這種致命的病毒。",
      grammar_point: "become infected with + 疾病名稱（感染...）"
    },
    vocabulary: [
      { word: "infect", pos: "v.", chinese: "感染、傳染" },
      { word: "deadly", pos: "adj.", chinese: "致命的" },
      { word: "pandemic", pos: "n.", chinese: "疫情大流行" }
    ],
    sentence_pattern: {
      pattern: "S + become infected with + disease",
      example: "He became infected with COVID-19."
    }
  },
  {
    phrase: "become involved in",
    type: "動詞片語",
    chinese: "參與...、捲入...",
    keywords: ["become", "involved"],
    example: {
      english: "The famous actor denied that he had become involved in the political scandal.",
      chinese: "那位知名演員否認他捲入了這起政治醜聞。",
      grammar_point: "become involved in + N/V-ing（捲入/參與...事件）"
    },
    vocabulary: [
      { word: "deny", pos: "v.", chinese: "否認" },
      { word: "political", pos: "adj.", chinese: "政治的" },
      { word: "scandal", pos: "n.", chinese: "醜聞" }
    ],
    sentence_pattern: {
      pattern: "S + become involved in + N",
      example: "She became involved in the charity project."
    }
  },
  {
    phrase: "become widely known",
    type: "動詞 + 副詞 + 過去分詞",
    chinese: "廣為人知",
    keywords: ["become", "widely", "known"],
    example: {
      english: "The local restaurant became widely known for its traditional and delicious beef noodles.",
      chinese: "這家當地餐廳因為其傳統又美味的牛肉麵而廣為人知。",
      grammar_point: "become widely known for + N/原因（因為...而廣為人知）"
    },
    vocabulary: [
      { word: "widely", pos: "adv.", chinese: "廣泛地" },
      { word: "known", pos: "adj.", chinese: "出名的、被知道的" },
      { word: "traditional", pos: "adj.", chinese: "傳統的" }
    ],
    sentence_pattern: {
      pattern: "S + became widely known for + N",
      example: "The town became widely known for its hot springs."
    }
  },
  {
    phrase: "become a symbol of",
    type: "動詞 + 名詞",
    chinese: "成為...的象徵",
    keywords: ["become", "symbol"],
    example: {
      english: "The white dove has become a symbol of peace and hope all over the world.",
      chinese: "白鴿在全世界已經成為和平與希望的象徵。",
      grammar_point: "become a symbol of + 抽象名詞"
    },
    vocabulary: [
      { word: "symbol", pos: "n.", chinese: "象徵" },
      { word: "peace", pos: "n.", chinese: "和平" },
      { word: "hope", pos: "n.", chinese: "希望" }
    ],
    sentence_pattern: {
      pattern: "S + have/has become a symbol of + N",
      example: "The bridge became a symbol of connection."
    }
  },
  {
    phrase: "become independent",
    type: "動詞 + 形容詞",
    chinese: "變得獨立",
    keywords: ["become", "independent"],
    example: {
      english: "Going to college helps teenagers become independent and learn how to manage their time.",
      chinese: "上大學幫助青少年變得獨立，並學習如何管理他們的時間。",
      grammar_point: "help + O + (to) + V 原形（幫助某人做某事）"
    },
    vocabulary: [
      { word: "independent", pos: "adj.", chinese: "獨立的" },
      { word: "teenager", pos: "n.", chinese: "青少年" },
      { word: "manage", pos: "v.", chinese: "管理" }
    ],
    sentence_pattern: {
      pattern: "S + help + O + become independent",
      example: "Living alone helps you become independent."
    }
  },
  {
    phrase: "become popular",
    type: "動詞 + 形容詞",
    chinese: "變得受歡迎、開始流行",
    keywords: ["become", "popular"],
    example: {
      english: "Electric cars have become popular in recent years due to environmental concerns.",
      chinese: "由於環境考量，電動車近年來變得受歡迎。",
      grammar_point: "due to + N（由於.../因為...）"
    },
    vocabulary: [
      { word: "electric", pos: "adj.", chinese: "電動的、用電的" },
      { word: "recent", pos: "adj.", chinese: "最近的" },
      { word: "concern", pos: "n.", chinese: "考量、關切" }
    ],
    sentence_pattern: {
      pattern: "S + have become popular + 時間/原因",
      example: "Smartphones became popular quickly."
    }
  },

  // ── time ──────────────────────────────────────────────────────────────────
  {
    phrase: "spend time",
    type: "動詞 + 名詞",
    chinese: "花費時間",
    keywords: ["spend", "time"],
    example: {
      english: "Teenagers often spend too much time surfing the Internet instead of studying.",
      chinese: "青少年經常花太多時間上網而不是讀書。",
      grammar_point: "spend time + V-ing（花時間做某事，此處 surfing 為動名詞）"
    },
    vocabulary: [
      { word: "teenager", pos: "n.", chinese: "青少年" },
      { word: "surf", pos: "v.", chinese: "瀏覽、衝浪" },
      { word: "instead of", pos: "prep.", chinese: "而不是、代替" }
    ],
    sentence_pattern: {
      pattern: "S + spend time + V-ing",
      example: "I spent three hours reading the novel."
    }
  },
  {
    phrase: "waste time",
    type: "動詞 + 名詞",
    chinese: "浪費時間",
    keywords: ["waste", "time"],
    example: {
      english: "Arguing over trivial matters with others is simply wasting time and energy.",
      chinese: "與他人爭論瑣碎的事情簡直就是在浪費時間和精力。",
      grammar_point: "waste time + V-ing（浪費時間做某事）"
    },
    vocabulary: [
      { word: "argue", pos: "v.", chinese: "爭論、爭吵" },
      { word: "trivial", pos: "adj.", chinese: "瑣碎的、微不足道的" },
      { word: "matter", pos: "n.", chinese: "事情、問題" }
    ],
    sentence_pattern: {
      pattern: "V-ing + is wasting time and energy",
      example: "Worrying about the past is wasting time."
    }
  },
  {
    phrase: "manage one's time",
    type: "動詞 + 名詞",
    chinese: "管理時間",
    keywords: ["manage", "time"],
    example: {
      english: "Knowing how to manage your time effectively is the key to academic success.",
      chinese: "知道如何有效地管理時間是學業成功的關鍵。",
      grammar_point: "the key to + N/V-ing（...的關鍵，此處 to 為介系詞）"
    },
    vocabulary: [
      { word: "manage", pos: "v.", chinese: "管理" },
      { word: "effectively", pos: "adv.", chinese: "有效地" },
      { word: "academic", pos: "adj.", chinese: "學業的、學術的" }
    ],
    sentence_pattern: {
      pattern: "V-ing is the key to + N",
      example: "Managing your time well is the key to success."
    }
  },
  {
    phrase: "save time",
    type: "動詞 + 名詞",
    chinese: "節省時間",
    keywords: ["save", "time"],
    example: {
      english: "Taking the high-speed rail will save you a lot of time compared to driving.",
      chinese: "相比於自己開車，搭乘高鐵將會為你節省大量的時間。",
      grammar_point: "compared to + N/V-ing（與...相比）"
    },
    vocabulary: [
      { word: "high-speed rail", pos: "n.", chinese: "高速鐵路" },
      { word: "compare", pos: "v.", chinese: "比較" },
      { word: "driving", pos: "n.", chinese: "開車（動名詞）" }
    ],
    sentence_pattern: {
      pattern: "V-ing + will save you time + compared to + V-ing",
      example: "Using a computer saves time compared to writing by hand."
    }
  },
  {
    phrase: "take one's time",
    type: "動詞片語",
    chinese: "慢慢來、不急",
    keywords: ["take", "time"],
    example: {
      english: "There is no need to rush; just take your time and finish the test carefully.",
      chinese: "不需要著急；只要慢慢來並仔細完成考試即可。",
      grammar_point: "There is no need to + V（沒有必要...）"
    },
    vocabulary: [
      { word: "rush", pos: "v.", chinese: "匆忙、趕緊" },
      { word: "finish", pos: "v.", chinese: "完成" },
      { word: "carefully", pos: "adv.", chinese: "仔細地" }
    ],
    sentence_pattern: {
      pattern: "There is no need to + V; just take your time",
      example: "Take your time doing the work."
    }
  },
  {
    phrase: "from time to time",
    type: "副詞片語",
    chinese: "偶爾、有時",
    keywords: ["time"],
    example: {
      english: "Even the most confident speakers get nervous from time to time.",
      chinese: "即使是最有自信的演講者，偶爾也會感到緊張。",
      grammar_point: "from time to time 放置於句尾修飾全句的頻率"
    },
    vocabulary: [
      { word: "confident", pos: "adj.", chinese: "有自信的" },
      { word: "speaker", pos: "n.", chinese: "演講者" },
      { word: "nervous", pos: "adj.", chinese: "緊張的" }
    ],
    sentence_pattern: {
      pattern: "S + V + adj + from time to time",
      example: "I visit my grandparents from time to time."
    }
  },

  // ── manage ────────────────────────────────────────────────────────────────
  {
    phrase: "manage to",
    type: "動詞片語",
    chinese: "設法做到、勉強完成",
    keywords: ["manage"],
    example: {
      english: "Despite the heavy rain, we managed to arrive at the station on time.",
      chinese: "儘管下著大雨，我們還是設法準時到達了車站。",
      grammar_point: "manage to + V 原形（設法完成某事）"
    },
    vocabulary: [
      { word: "despite", pos: "prep.", chinese: "儘管" },
      { word: "arrive", pos: "v.", chinese: "到達" },
      { word: "on time", pos: "adv.", chinese: "準時" }
    ],
    sentence_pattern: {
      pattern: "Despite + N, S + managed to + V",
      example: "He managed to finish the test."
    }
  },
  {
    phrase: "manage stress",
    type: "動詞 + 名詞",
    chinese: "管理壓力、排解壓力",
    keywords: ["manage", "stress"],
    example: {
      english: "Learning how to manage stress is vital for modern people to maintain mental health.",
      chinese: "學習如何管理壓力對現代人維持心理健康至關重要。",
      grammar_point: "vital for + O + to + V（對某人而言做...是至關重要的）"
    },
    vocabulary: [
      { word: "vital", pos: "adj.", chinese: "極重要的、充滿活力的" },
      { word: "maintain", pos: "v.", chinese: "維持、保持" },
      { word: "mental", pos: "adj.", chinese: "心理的、精神的" }
    ],
    sentence_pattern: {
      pattern: "V-ing is vital for N to V",
      example: "Managing stress is vital to stay healthy."
    }
  },
  {
    phrase: "manage money",
    type: "動詞 + 名詞",
    chinese: "理財、管理金錢",
    keywords: ["manage", "money"],
    example: {
      english: "Parents should teach their children how to manage money properly from a young age.",
      chinese: "父母應該教導孩子從小如何正確地理財。",
      grammar_point: "how to + V 原形（如何...，作名詞片語當受詞）"
    },
    vocabulary: [
      { word: "properly", pos: "adv.", chinese: "正確地、適當地" },
      { word: "teach", pos: "v.", chinese: "教導" },
      { word: "young age", pos: "n.", chinese: "年幼時" }
    ],
    sentence_pattern: {
      pattern: "S + teach + O + how to manage money",
      example: "She learned how to manage money."
    }
  },
  {
    phrase: "manage a business",
    type: "動詞 + 名詞",
    chinese: "經營事業、管理公司",
    keywords: ["manage", "business"],
    example: {
      english: "It takes leadership and experience to successfully manage a business in a competitive market.",
      chinese: "在競爭激烈的市場中成功經營事業需要領導力與經驗。",
      grammar_point: "It takes + N + to + V（做...需要...）"
    },
    vocabulary: [
      { word: "leadership", pos: "n.", chinese: "領導力" },
      { word: "competitive", pos: "adj.", chinese: "競爭激烈的" },
      { word: "market", pos: "n.", chinese: "市場" }
    ],
    sentence_pattern: {
      pattern: "It takes N to manage a business",
      example: "It takes time to manage a business well."
    }
  },

  // ── pressure ──────────────────────────────────────────────────────────────
  {
    phrase: "under pressure",
    type: "介系詞片語",
    chinese: "在壓力下、承受壓力",
    keywords: ["pressure"],
    example: {
      english: "Some students perform better when they are working under pressure before exams.",
      chinese: "有些學生在考前承受壓力下讀書時表現得更好。",
      grammar_point: "under pressure（在壓力下，通常修飾動詞或放在 be 動詞後）"
    },
    vocabulary: [
      { word: "perform", pos: "v.", chinese: "表現" },
      { word: "working", pos: "n.", chinese: "工作、運作（此處指讀書/作答）" },
      { word: "exam", pos: "n.", chinese: "考試" }
    ],
    sentence_pattern: {
      pattern: "S + perform/work + under pressure",
      example: "He works well under pressure."
    }
  },
  {
    phrase: "put pressure on",
    type: "動詞片語",
    chinese: "對...施加壓力",
    keywords: ["put", "pressure"],
    example: {
      english: "Parents should not put too much pressure on their children to get perfect grades.",
      chinese: "父母不應該為了讓孩子獲得滿分而對他們施加太多的壓力。",
      grammar_point: "put pressure on + N（對某人/某事物施加壓力）"
    },
    vocabulary: [
      { word: "parent", pos: "n.", chinese: "父母" },
      { word: "perfect", pos: "adj.", chinese: "完美的" },
      { word: "grade", pos: "n.", chinese: "成績、分數" }
    ],
    sentence_pattern: {
      pattern: "S + put pressure on + N + to + V",
      example: "Society puts pressure on women to look a certain way."
    }
  },
  {
    phrase: "peer pressure",
    type: "名詞片語",
    chinese: "同儕壓力",
    keywords: ["peer", "pressure"],
    example: {
      english: "Teenagers often start smoking or drinking because of peer pressure.",
      chinese: "青少年經常因為同儕壓力而開始抽菸或喝酒。",
      grammar_point: "because of + N（因為...，後接名詞）"
    },
    vocabulary: [
      { word: "teenager", pos: "n.", chinese: "青少年" },
      { word: "smoke", pos: "v.", chinese: "抽菸" },
      { word: "peer", pos: "n.", chinese: "同儕、同輩" }
    ],
    sentence_pattern: {
      pattern: "S + V + O + because of peer pressure",
      example: "Many teenagers suffer from peer pressure."
    }
  },

  // ── stress ────────────────────────────────────────────────────────────────
  {
    phrase: "cope with stress",
    type: "動詞片語",
    chinese: "應付壓力、處理壓力",
    keywords: ["cope", "stress"],
    example: {
      english: "Listening to soft music is an effective way to cope with stress from daily life.",
      chinese: "聽輕音樂是應付日常生活中壓力的一種有效方法。",
      grammar_point: "cope with + N（應付...、處理...）"
    },
    vocabulary: [
      { word: "soft", pos: "adj.", chinese: "輕柔的" },
      { word: "effective", pos: "adj.", chinese: "有效的" },
      { word: "daily", pos: "adj.", chinese: "日常的" }
    ],
    sentence_pattern: {
      pattern: "V-ing is a way to cope with stress",
      example: "She is learning how to cope with stress."
    }
  },
  {
    phrase: "relieve stress",
    type: "動詞 + 名詞",
    chinese: "減輕壓力、舒緩壓力",
    keywords: ["relieve", "stress"],
    example: {
      english: "Many people choose to exercise regularly in order to relieve stress.",
      chinese: "許多人選擇規律運動以減輕壓力。",
      grammar_point: "in order to + V 原形（為了...）"
    },
    vocabulary: [
      { word: "choose", pos: "v.", chinese: "選擇" },
      { word: "exercise", pos: "v.", chinese: "運動" },
      { word: "regularly", pos: "adv.", chinese: "規律地" }
    ],
    sentence_pattern: {
      pattern: "S + V + in order to relieve stress",
      example: "Taking a hot bath can relieve stress."
    }
  },
  {
    phrase: "under stress",
    type: "介系詞片語",
    chinese: "處於壓力之下",
    keywords: ["stress"],
    example: {
      english: "When people are under stress, their immune systems may become weaker.",
      chinese: "當人們處於壓力之下時，他們的免疫系統可能會變得較弱。",
      grammar_point: "be under stress（處於壓力中，用法等同 under pressure）"
    },
    vocabulary: [
      { word: "immune system", pos: "n.", chinese: "免疫系統" },
      { word: "become", pos: "v.", chinese: "變成" },
      { word: "weak", pos: "adj.", chinese: "虛弱的" }
    ],
    sentence_pattern: {
      pattern: "When S + be + under stress, S + V",
      example: "He tends to eat a lot when he is under stress."
    }
  },

  // ── reduce ────────────────────────────────────────────────────────────────
  {
    phrase: "reduce stress",
    type: "動詞 + 名詞",
    chinese: "減少壓力、降低壓力",
    keywords: ["reduce", "stress"],
    example: {
      english: "Engaging in outdoor activities on weekends can help people reduce stress from work.",
      chinese: "週末從事戶外活動可以幫助人們減少工作帶來的壓力。",
      grammar_point: "help + O + V 原形（幫助某人做某事）"
    },
    vocabulary: [
      { word: "engage in", pos: "phr. v.", chinese: "從事、參與" },
      { word: "outdoor", pos: "adj.", chinese: "戶外的" },
      { word: "activity", pos: "n.", chinese: "活動" }
    ],
    sentence_pattern: {
      pattern: "V-ing + can help + O + reduce stress",
      example: "Taking a walk can help you reduce stress."
    }
  },
  {
    phrase: "ease the pressure",
    type: "動詞 + 名詞",
    chinese: "緩解壓力、減輕壓力",
    keywords: ["ease", "pressure"],
    example: {
      english: "The school hired more counselors to ease the pressure on students preparing for the college entrance exam.",
      chinese: "學校聘請了更多輔導老師，以緩解準備大學入學考試的學生壓力。",
      grammar_point: "to + V（不定詞表目的：為了...）"
    },
    vocabulary: [
      { word: "hire", pos: "v.", chinese: "聘僱" },
      { word: "counselor", pos: "n.", chinese: "顧問、輔導員" },
      { word: "entrance", pos: "n.", chinese: "入學、入口" }
    ],
    sentence_pattern: {
      pattern: "S + V + to ease the pressure on + N",
      example: "The government took measures to ease the financial pressure."
    }
  },
  {
    phrase: "lessen the burden",
    type: "動詞 + 名詞",
    chinese: "減輕負擔",
    keywords: ["lessen", "burden"],
    example: {
      english: "The new scholarship program aims to lessen the financial burden on low-income families.",
      chinese: "這項新的獎學金計畫旨在減輕低收入家庭的經濟負擔。",
      grammar_point: "aim to + V（旨在...、目的是...）"
    },
    vocabulary: [
      { word: "scholarship", pos: "n.", chinese: "獎學金" },
      { word: "financial", pos: "adj.", chinese: "財務的、經濟的" },
      { word: "burden", pos: "n.", chinese: "負擔" }
    ],
    sentence_pattern: {
      pattern: "S + aim to lessen the burden on + N",
      example: "We should share chores to lessen the burden on our parents."
    }
  },

  // ── relationship ──────────────────────────────────────────────────────────
  {
    phrase: "build a relationship",
    type: "動詞 + 名詞",
    chinese: "建立關係",
    keywords: ["build", "relationship"],
    example: {
      english: "It takes time, patience, and mutual respect to build a healthy relationship with others.",
      chinese: "與他人建立健康的關係需要時間、耐心和相互尊重。",
      grammar_point: "It takes + N + to + V 原形（做某事需要...）"
    },
    vocabulary: [
      { word: "patience", pos: "n.", chinese: "耐心" },
      { word: "mutual", pos: "adj.", chinese: "相互的、彼此的" },
      { word: "respect", pos: "n.", chinese: "尊重" }
    ],
    sentence_pattern: {
      pattern: "It takes N to build a relationship",
      example: "It takes trust to build a relationship."
    }
  },
  {
    phrase: "maintain a relationship",
    type: "動詞 + 名詞",
    chinese: "維持關係",
    keywords: ["maintain", "relationship"],
    example: {
      english: "Long-distance couples often find it difficult to maintain a close relationship.",
      chinese: "遠距離戀愛的伴侶通常覺得維持親密關係很困難。",
      grammar_point: "find it + adj + to + V（覺得做某事很...，it為虛受詞）"
    },
    vocabulary: [
      { word: "distance", pos: "n.", chinese: "距離" },
      { word: "couple", pos: "n.", chinese: "伴侶、情侶" },
      { word: "close", pos: "adj.", chinese: "親密的、靠近的" }
    ],
    sentence_pattern: {
      pattern: "S + find it + adj + to maintain a relationship",
      example: "I find it hard to maintain a relationship with him."
    }
  },
  {
    phrase: "interpersonal relationships",
    type: "形容詞 + 名詞",
    chinese: "人際關係",
    keywords: ["interpersonal", "relationship"],
    example: {
      english: "Developing good interpersonal relationships is crucial for your future career and mental health.",
      chinese: "發展良好的人際關係對於你未來的職涯和心理健康至關重要。",
      grammar_point: "V-ing 作主詞（動名詞片語視為單數）"
    },
    vocabulary: [
      { word: "interpersonal", pos: "adj.", chinese: "人際的" },
      { word: "crucial", pos: "adj.", chinese: "至關重要的" },
      { word: "career", pos: "n.", chinese: "職涯、事業" }
    ],
    sentence_pattern: {
      pattern: "V-ing is crucial for + N",
      example: "Building good interpersonal relationships is crucial."
    }
  },
  // ── verb + pressure (新增擴充) ──────────────────────────────────────────
  {
    phrase: "feel pressure",
    type: "動詞片語",
    chinese: "感到壓力",
    keywords: ["feel", "pressure"],
    example: {
      english: "Many high school students feel pressure to get into a top university.",
      chinese: "許多高中生為了考上頂尖大學而感到壓力。",
      grammar_point: "feel pressure to + V（感到有做...的壓力）"
    },
    vocabulary: [
      { word: "high school", pos: "n.", chinese: "高中" },
      { word: "top", pos: "adj.", chinese: "頂尖的" },
      { word: "university", pos: "n.", chinese: "大學" }
    ],
    sentence_pattern: {
      pattern: "S + feel pressure to + V",
      example: "Employees feel pressure to meet the sales target."
    }
  },
  {
    phrase: "relieve pressure",
    type: "動詞片語",
    chinese: "減輕壓力、舒緩壓力",
    keywords: ["relieve", "pressure"],
    example: {
      english: "Taking a deep breath is a quick and effective way to relieve pressure.",
      chinese: "深呼吸是減輕壓力的一種快速且有效的方法。",
      grammar_point: "a way to + V 原形（做...的一種方法）"
    },
    vocabulary: [
      { word: "deep", pos: "adj.", chinese: "深的" },
      { word: "breath", pos: "n.", chinese: "呼吸" },
      { word: "quick", pos: "adj.", chinese: "快速的" }
    ],
    sentence_pattern: {
      pattern: "V-ing is a way to relieve pressure",
      example: "Crying is sometimes a good way to relieve pressure."
    }
  },
  {
    phrase: "reduce pressure",
    type: "動詞片語",
    chinese: "降低壓力、減少壓力",
    keywords: ["reduce", "pressure"],
    example: {
      english: "The government implemented new policies to reduce pressure on the healthcare system.",
      chinese: "政府實施了新政策以減少醫療保健系統的壓力。",
      grammar_point: "reduce pressure on + N（減少對...的壓力）"
    },
    vocabulary: [
      { word: "implement", pos: "v.", chinese: "實施、執行" },
      { word: "policy", pos: "n.", chinese: "政策" },
      { word: "healthcare", pos: "n.", chinese: "醫療保健" }
    ],
    sentence_pattern: {
      pattern: "S + V + to reduce pressure on + N",
      example: "We hired more staff to reduce pressure on the team."
    }
  },
  {
    phrase: "handle pressure",
    type: "動詞片語",
    chinese: "處理壓力、應對壓力",
    keywords: ["handle", "pressure"],
    example: {
      english: "The ability to handle pressure is an important quality for an emergency room nurse.",
      chinese: "處理壓力的能力是急診室護理師一項重要的特質。",
      grammar_point: "The ability to + V（做某事的能力）"
    },
    vocabulary: [
      { word: "ability", pos: "n.", chinese: "能力" },
      { word: "quality", pos: "n.", chinese: "特質、品質" },
      { word: "emergency", pos: "n.", chinese: "緊急情況（emergency room 急診室）" }
    ],
    sentence_pattern: {
      pattern: "The ability to handle pressure is + N/adj",
      example: "Learning to handle pressure is essential."
    }
  },
  {
    phrase: "cope with pressure",
    type: "動詞片語",
    chinese: "應付壓力、妥善處理壓力",
    keywords: ["cope", "pressure"],
    example: {
      english: "Professional athletes need to learn how to cope with pressure during major international competitions.",
      chinese: "職業運動員需要學習如何在大型國際賽事中應付壓力。",
      grammar_point: "cope with + N（應付...，為學測常考之高級替換詞）"
    },
    vocabulary: [
      { word: "professional", pos: "adj.", chinese: "專業的、職業的" },
      { word: "athlete", pos: "n.", chinese: "運動員" },
      { word: "competition", pos: "n.", chinese: "競賽、比賽" }
    ],
    sentence_pattern: {
      pattern: "S + need to learn how to cope with pressure",
      example: "He knows how to cope with pressure well."
    }
  },
  {
    phrase: "face pressure",
    type: "動詞片語",
    chinese: "面臨壓力",
    keywords: ["face", "pressure"],
    example: {
      english: "The company is facing pressure from environmental groups to reduce its carbon footprint.",
      chinese: "這家公司正面臨來自環保團體的壓力，被要求減少碳足跡。",
      grammar_point: "face pressure from + N + to + V（面臨來自...的壓力去做某事）"
    },
    vocabulary: [
      { word: "environmental", pos: "adj.", chinese: "環境的" },
      { word: "reduce", pos: "v.", chinese: "減少" },
      { word: "footprint", pos: "n.", chinese: "足跡（carbon footprint 碳足跡）" }
    ],
    sentence_pattern: {
      pattern: "S + be + facing pressure from + N",
      example: "The mayor is facing pressure from the public."
    }
  },
  {
    phrase: "withstand pressure",
    type: "動詞片語",
    chinese: "承受壓力、頂住壓力",
    keywords: ["withstand", "pressure"],
    example: {
      english: "The newly built bridge is designed to withstand pressure from strong winds and earthquakes.",
      chinese: "這座新建的橋樑被設計來承受強風和地震的壓力。",
      grammar_point: "be designed to + V 原形（被設計用來...）"
    },
    vocabulary: [
      { word: "newly", pos: "adv.", chinese: "新近地" },
      { word: "design", pos: "v.", chinese: "設計" },
      { word: "earthquake", pos: "n.", chinese: "地震" }
    ],
    sentence_pattern: {
      pattern: "S + be designed to withstand pressure",
      example: "A good leader must withstand pressure."
    }
  },
  {
    phrase: "bow to pressure",
    type: "動詞片語",
    chinese: "屈服於壓力",
    keywords: ["bow", "pressure"],
    example: {
      english: "The mayor refused to bow to pressure and stood firm on his decision to ban plastic bags.",
      chinese: "市長拒絕屈服於壓力，並堅持他禁用塑膠袋的決定。",
      grammar_point: "refuse to + V 原形（拒絕做...）"
    },
    vocabulary: [
      { word: "mayor", pos: "n.", chinese: "市長" },
      { word: "firm", pos: "adj.", chinese: "堅定的" },
      { word: "ban", pos: "v.", chinese: "禁止" }
    ],
    sentence_pattern: {
      pattern: "S + refuse to bow to pressure",
      example: "The committee bowed to public pressure."
    }
  },
  {
    phrase: "come under pressure",
    type: "動詞片語",
    chinese: "受到壓力、面臨壓力",
    keywords: ["come", "pressure"],
    example: {
      english: "The manager came under pressure to resign after the company's profits dropped significantly.",
      chinese: "在公司利潤大幅下降後，經理受到了要求辭職的壓力。",
      grammar_point: "come under pressure to + V（受到做某事的壓力）"
    },
    vocabulary: [
      { word: "manager", pos: "n.", chinese: "經理" },
      { word: "resign", pos: "v.", chinese: "辭職" },
      { word: "profit", pos: "n.", chinese: "利潤" }
    ],
    sentence_pattern: {
      pattern: "S + come under pressure + 時間/原因",
      example: "The government has come under pressure to act."
    }
  },
  {
    phrase: "bring pressure to bear on",
    type: "動詞片語",
    chinese: "對...施加壓力",
    keywords: ["bring", "pressure", "bear"],
    example: {
      english: "The labor union brought pressure to bear on the management to improve working conditions.",
      chinese: "工會對資方施加壓力，要求改善工作環境。",
      grammar_point: "bring pressure to bear on + N + to + V（對某人施壓以達成某事）"
    },
    vocabulary: [
      { word: "labor union", pos: "n.", chinese: "工會" },
      { word: "management", pos: "n.", chinese: "管理階層、資方" },
      { word: "condition", pos: "n.", chinese: "狀況、條件" }
    ],
    sentence_pattern: {
      pattern: "S + bring pressure to bear on + O + to + V",
      example: "They brought pressure to bear on the committee."
    }
  },
  // ── Adjective + pressure ──────────────────────────────────────────────────
  {
    phrase: "high pressure",
    type: "形容詞 + 名詞",
    chinese: "高壓（物理上或心理上）",
    keywords: ["high", "pressure"],
    example: {
      english: "Working in a high pressure environment can lead to serious health problems over time.",
      chinese: "長期在高壓環境中工作可能會導致嚴重的健康問題。",
      grammar_point: "lead to + N（導致...，to為介系詞）"
    },
    vocabulary: [
      { word: "environment", pos: "n.", chinese: "環境" },
      { word: "lead to", pos: "phr. v.", chinese: "導致" },
      { word: "serious", pos: "adj.", chinese: "嚴重的" }
    ],
    sentence_pattern: {
      pattern: "V-ing + in a high pressure environment + can lead to + N",
      example: "High pressure jobs are not for everyone."
    }
  },
  {
    phrase: "low pressure",
    type: "形容詞 + 名詞",
    chinese: "低壓（物理上或心理上）",
    keywords: ["low", "pressure"],
    example: {
      english: "He decided to quit his demanding job and look for a low pressure one.",
      chinese: "他決定辭去要求嚴格的工作，尋找一份低壓力的工作。",
      grammar_point: "look for + N（尋找）"
    },
    vocabulary: [
      { word: "quit", pos: "v.", chinese: "辭職、放棄" },
      { word: "demanding", pos: "adj.", chinese: "要求高的、吃力的" },
      { word: "look for", pos: "phr. v.", chinese: "尋找" }
    ],
    sentence_pattern: {
      pattern: "S + decide to + V + and look for a low pressure + N",
      example: "The typhoon is caused by a low pressure system."
    }
  },
  {
    phrase: "intense pressure",
    type: "形容詞 + 名詞",
    chinese: "強烈的壓力、極大的壓力",
    keywords: ["intense", "pressure"],
    example: {
      english: "The team was under intense pressure to finish the project before the holiday.",
      chinese: "團隊承受著極大的壓力，要在假期前完成專案。",
      grammar_point: "under intense pressure to + V（承受極大壓力去做...）"
    },
    vocabulary: [
      { word: "intense", pos: "adj.", chinese: "強烈的、極度的" },
      { word: "project", pos: "n.", chinese: "專案、計畫" },
      { word: "holiday", pos: "n.", chinese: "假期" }
    ],
    sentence_pattern: {
      pattern: "S + be + under intense pressure to + V",
      example: "She works well even under intense pressure."
    }
  },
  {
    phrase: "heavy pressure",
    type: "形容詞 + 名詞",
    chinese: "沉重的壓力",
    keywords: ["heavy", "pressure"],
    example: {
      english: "The bridge collapsed due to the heavy pressure of the floodwaters.",
      chinese: "這座橋因為洪水的沉重壓力而坍塌了。",
      grammar_point: "due to + N（因為、由於）"
    },
    vocabulary: [
      { word: "collapse", pos: "v.", chinese: "坍塌、崩潰" },
      { word: "due to", pos: "prep.", chinese: "由於" },
      { word: "floodwater", pos: "n.", chinese: "洪水" }
    ],
    sentence_pattern: {
      pattern: "S + collapsed due to the heavy pressure of + N",
      example: "He couldn't bear the heavy pressure of expectations."
    }
  },
  {
    phrase: "mounting pressure",
    type: "形容詞 + 名詞",
    chinese: "不斷增加的壓力",
    keywords: ["mounting", "pressure"],
    example: {
      english: "The CEO resigned last week amid mounting pressure from the shareholders.",
      chinese: "在股東不斷增加的壓力下，執行長上週辭職了。",
      grammar_point: "amid + N（在...之中、在...氛圍下）"
    },
    vocabulary: [
      { word: "resign", pos: "v.", chinese: "辭職" },
      { word: "amid", pos: "prep.", chinese: "在...之中" },
      { word: "shareholder", pos: "n.", chinese: "股東" }
    ],
    sentence_pattern: {
      pattern: "S + V + amid mounting pressure from + N",
      example: "The government faces mounting pressure to change the law."
    }
  },
  {
    phrase: "growing pressure",
    type: "形容詞 + 名詞",
    chinese: "日益增長的壓力",
    keywords: ["growing", "pressure"],
    example: {
      english: "There is growing pressure on schools to provide better mental health support.",
      chinese: "學校面臨日益增長的壓力，被要求提供更好的心理健康支持。",
      grammar_point: "There is growing pressure on + N + to + V（對...有日益增長的壓力去做...）"
    },
    vocabulary: [
      { word: "growing", pos: "adj.", chinese: "成長中的、增加的" },
      { word: "mental health", pos: "n.", chinese: "心理健康" },
      { word: "support", pos: "n.", chinese: "支持、援助" }
    ],
    sentence_pattern: {
      pattern: "There is growing pressure on + N + to + V",
      example: "He felt growing pressure to succeed."
    }
  },
  {
    phrase: "social pressure",
    type: "形容詞 + 名詞",
    chinese: "社會壓力",
    keywords: ["social", "pressure"],
    example: {
      english: "Many young women suffer from eating disorders due to social pressure to be thin.",
      chinese: "許多年輕女性因為追求纖瘦的社會壓力而患上飲食失調。",
      grammar_point: "suffer from + N（受...所苦、罹患...疾病）"
    },
    vocabulary: [
      { word: "suffer", pos: "v.", chinese: "受苦、遭受" },
      { word: "disorder", pos: "n.", chinese: "失調、疾病" },
      { word: "thin", pos: "adj.", chinese: "瘦的" }
    ],
    sentence_pattern: {
      pattern: "S + suffer from + N + due to social pressure",
      example: "Social pressure can affect teenagers' behavior."
    }
  },
  {
    phrase: "financial pressure",
    type: "形容詞 + 名詞",
    chinese: "財務壓力、經濟壓力",
    keywords: ["financial", "pressure"],
    example: {
      english: "The loss of his job put severe financial pressure on his family.",
      chinese: "他的失業對他的家庭造成了嚴重的財務壓力。",
      grammar_point: "put pressure on + N（對...造成壓力）"
    },
    vocabulary: [
      { word: "loss", pos: "n.", chinese: "失去、喪失" },
      { word: "severe", pos: "adj.", chinese: "嚴重的" },
      { word: "financial", pos: "adj.", chinese: "財務的" }
    ],
    sentence_pattern: {
      pattern: "N + put + adj + financial pressure on + N",
      example: "Students often face financial pressure when paying tuition."
    }
  },
  {
    phrase: "political pressure",
    type: "形容詞 + 名詞",
    chinese: "政治壓力",
    keywords: ["political", "pressure"],
    example: {
      english: "The committee finally yielded to political pressure and reversed its decision.",
      chinese: "委員會最終屈服於政治壓力並撤回了其決定。",
      grammar_point: "yield to + N（屈服於...）"
    },
    vocabulary: [
      { word: "committee", pos: "n.", chinese: "委員會" },
      { word: "yield", pos: "v.", chinese: "屈服、讓步" },
      { word: "reverse", pos: "v.", chinese: "推翻、撤回" }
    ],
    sentence_pattern: {
      pattern: "S + yielded to political pressure and + V",
      example: "The reform was delayed due to political pressure."
    }
  },
  {
    phrase: "public pressure",
    type: "形容詞 + 名詞",
    chinese: "公眾壓力、輿論壓力",
    keywords: ["public", "pressure"],
    example: {
      english: "Bowing to public pressure, the company apologized for its misleading advertisement.",
      chinese: "迫於公眾壓力，該公司為其誤導性的廣告道歉。",
      grammar_point: "V-ing..., S + V（分詞構句，表原因）"
    },
    vocabulary: [
      { word: "bow", pos: "v.", chinese: "鞠躬、屈服" },
      { word: "apologize", pos: "v.", chinese: "道歉" },
      { word: "misleading", pos: "adj.", chinese: "誤導的" }
    ],
    sentence_pattern: {
      pattern: "Bowing to public pressure, S + V",
      example: "Public pressure forced the mayor to resign."
    }
  },
  {
    phrase: "external pressure",
    type: "形容詞 + 名詞",
    chinese: "外部壓力",
    keywords: ["external", "pressure"],
    example: {
      english: "The country reformed its economy largely in response to external pressure.",
      chinese: "這個國家主要是在回應外部壓力下改革了其經濟。",
      grammar_point: "in response to + N（作為對...的回應）"
    },
    vocabulary: [
      { word: "reform", pos: "v.", chinese: "改革" },
      { word: "largely", pos: "adv.", chinese: "主要地、大部分地" },
      { word: "external", pos: "adj.", chinese: "外部的" }
    ],
    sentence_pattern: {
      pattern: "S + V + in response to external pressure",
      example: "The company changed its strategy due to external pressure."
    }
  },
  {
    phrase: "internal pressure",
    type: "形容詞 + 名詞",
    chinese: "內部壓力",
    keywords: ["internal", "pressure"],
    example: {
      english: "Internal pressure within the party led to the change of leadership.",
      chinese: "黨內的內部壓力導致了領導階層的更迭。",
      grammar_point: "lead to + N（導致...）"
    },
    vocabulary: [
      { word: "internal", pos: "adj.", chinese: "內部的" },
      { word: "within", pos: "prep.", chinese: "在...之內" },
      { word: "leadership", pos: "n.", chinese: "領導（階層）" }
    ],
    sentence_pattern: {
      pattern: "Internal pressure within + N + led to + N",
      example: "He suffered from internal pressure to be perfect."
    }
  },

  // ── Noun + pressure ───────────────────────────────────────────────────────
  {
    phrase: "blood pressure",
    type: "名詞 + 名詞",
    chinese: "血壓",
    keywords: ["blood", "pressure"],
    example: {
      english: "Eating too much salt can cause high blood pressure, which increases the risk of heart disease.",
      chinese: "吃太多鹽會導致高血壓，這會增加罹患心臟病的風險。",
      grammar_point: "which 引導非限定關係子句，補充說明前面的整句話"
    },
    vocabulary: [
      { word: "cause", pos: "v.", chinese: "導致" },
      { word: "increase", pos: "v.", chinese: "增加" },
      { word: "risk", pos: "n.", chinese: "風險" }
    ],
    sentence_pattern: {
      pattern: "V-ing + can cause high blood pressure",
      example: "The doctor checked my blood pressure."
    }
  },
  {
    phrase: "air pressure",
    type: "名詞 + 名詞",
    chinese: "氣壓",
    keywords: ["air", "pressure"],
    example: {
      english: "Your ears might pop during the flight because of the sudden change in air pressure.",
      chinese: "在飛行期間，你的耳朵可能會因為氣壓的突然變化而出現耳鳴(啵啵聲)。",
      grammar_point: "because of + N（因為...）"
    },
    vocabulary: [
      { word: "pop", pos: "v.", chinese: "發出砰的一聲" },
      { word: "flight", pos: "n.", chinese: "飛行、航班" },
      { word: "sudden", pos: "adj.", chinese: "突然的" }
    ],
    sentence_pattern: {
      pattern: "S + V + because of the change in air pressure",
      example: "Low air pressure usually brings rain."
    }
  },
  {
    phrase: "water pressure",
    type: "名詞 + 名詞",
    chinese: "水壓",
    keywords: ["water", "pressure"],
    example: {
      english: "The water pressure in the shower is so low that it takes forever to wash my hair.",
      chinese: "淋浴間的水壓太低，洗個頭髮要花很久的時間。",
      grammar_point: "so + adj + that + 子句（如此...以至於...）"
    },
    vocabulary: [
      { word: "shower", pos: "n.", chinese: "淋浴" },
      { word: "forever", pos: "adv.", chinese: "永遠、極長的時間" },
      { word: "wash", pos: "v.", chinese: "洗" }
    ],
    sentence_pattern: {
      pattern: "The water pressure is so + adj + that + S + V",
      example: "We need to fix the water pressure in the bathroom."
    }
  },
  {
    phrase: "work pressure",
    type: "名詞 + 名詞",
    chinese: "工作壓力",
    keywords: ["work", "pressure"],
    example: {
      english: "Many modern people suffer from insomnia due to extreme work pressure.",
      chinese: "許多現代人因為極端的工作壓力而患有失眠症。",
      grammar_point: "suffer from + 疾病（受...疾病所苦）"
    },
    vocabulary: [
      { word: "modern", pos: "adj.", chinese: "現代的" },
      { word: "insomnia", pos: "n.", chinese: "失眠" },
      { word: "extreme", pos: "adj.", chinese: "極端的" }
    ],
    sentence_pattern: {
      pattern: "S + suffer from + N + due to work pressure",
      example: "He quit his job because of heavy work pressure."
    }
  },
  {
    phrase: "time pressure",
    type: "名詞 + 名詞",
    chinese: "時間壓力",
    keywords: ["time", "pressure"],
    example: {
      english: "When taking the TOEIC test, candidates are often under great time pressure.",
      chinese: "在考多益測驗時，考生經常處於極大的時間壓力之下。",
      grammar_point: "When + V-ing（當...時，省略主詞）"
    },
    vocabulary: [
      { word: "candidate", pos: "n.", chinese: "候選人、考生" },
      { word: "under", pos: "prep.", chinese: "在...之下" },
      { word: "great", pos: "adj.", chinese: "極大的" }
    ],
    sentence_pattern: {
      pattern: "S + be + under great time pressure",
      example: "Working under time pressure can cause mistakes."
    }
  },
  {
    phrase: "exam pressure",
    type: "名詞 + 名詞",
    chinese: "考試壓力",
    keywords: ["exam", "pressure"],
    example: {
      english: "Listening to music is a good way to cope with exam pressure.",
      chinese: "聽音樂是應付考試壓力的一個好方法。",
      grammar_point: "a good way to + V（做...的好方法）"
    },
    vocabulary: [
      { word: "listen", pos: "v.", chinese: "聆聽" },
      { word: "cope with", pos: "phr. v.", chinese: "應付、處理" },
      { word: "pressure", pos: "n.", chinese: "壓力" }
    ],
    sentence_pattern: {
      pattern: "V-ing is a good way to cope with exam pressure",
      example: "Exam pressure can lead to anxiety."
    }
  },
  {
    phrase: "performance pressure",
    type: "名詞 + 名詞",
    chinese: "績效壓力、表現壓力",
    keywords: ["performance", "pressure"],
    example: {
      english: "Professional athletes face immense performance pressure from both fans and sponsors.",
      chinese: "職業運動員面臨來自粉絲與贊助商巨大的表現壓力。",
      grammar_point: "from both A and B（來自 A 和 B 雙方）"
    },
    vocabulary: [
      { word: "immense", pos: "adj.", chinese: "巨大的" },
      { word: "fan", pos: "n.", chinese: "粉絲、狂熱愛好者" },
      { word: "sponsor", pos: "n.", chinese: "贊助商" }
    ],
    sentence_pattern: {
      pattern: "S + face immense performance pressure from + N",
      example: "Salesmen are usually under high performance pressure."
    }
  },
  {
    phrase: "economic pressure",
    type: "名詞 + 名詞",
    chinese: "經濟壓力",
    keywords: ["economic", "pressure"],
    example: {
      english: "Many young couples choose not to have children because of severe economic pressure.",
      chinese: "許多對年輕夫婦因為嚴峻的經濟壓力而選擇不生小孩。",
      grammar_point: "choose not to + V（選擇不要做...）"
    },
    vocabulary: [
      { word: "couple", pos: "n.", chinese: "夫婦、伴侶" },
      { word: "choose", pos: "v.", chinese: "選擇" },
      { word: "severe", pos: "adj.", chinese: "嚴峻的、嚴重的" }
    ],
    sentence_pattern: {
      pattern: "S + V + because of economic pressure",
      example: "Economic pressure forces people to work two jobs."
    }
  },
  {
    phrase: "competitive pressure",
    type: "名詞 + 名詞",
    chinese: "競爭壓力",
    keywords: ["competitive", "pressure"],
    example: {
      english: "In order to survive competitive pressure, businesses must constantly innovate.",
      chinese: "為了在競爭壓力中生存，企業必須不斷創新。",
      grammar_point: "In order to + V 原形（為了...）"
    },
    vocabulary: [
      { word: "survive", pos: "v.", chinese: "生存、挺過" },
      { word: "constantly", pos: "adv.", chinese: "不斷地" },
      { word: "innovate", pos: "v.", chinese: "創新" }
    ],
    sentence_pattern: {
      pattern: "In order to survive competitive pressure, S + must + V",
      example: "Asian students face high competitive pressure."
    }
  },
  {
    phrase: "media pressure",
    type: "名詞 + 名詞",
    chinese: "媒體壓力",
    keywords: ["media", "pressure"],
    example: {
      english: "The celebrity checked into a hospital due to exhaustion from constant media pressure.",
      chinese: "由於持續的媒體壓力導致疲勞過度，這位名人住進了醫院。",
      grammar_point: "due to + N（因為...）"
    },
    vocabulary: [
      { word: "celebrity", pos: "n.", chinese: "名人" },
      { word: "exhaustion", pos: "n.", chinese: "精疲力竭" },
      { word: "constant", pos: "adj.", chinese: "持續不斷的" }
    ],
    sentence_pattern: {
      pattern: "S + V + due to constant media pressure",
      example: "Media pressure can destroy a person's privacy."
    }
  },

  // ── Preposition Patterns ──────────────────────────────────────────────────
  {
    phrase: "under no pressure",
    type: "介系詞片語",
    chinese: "毫無壓力",
    keywords: ["under", "no", "pressure"],
    example: {
      english: "You are under no pressure to make a decision right now; take your time.",
      chinese: "你現在毫無壓力必須馬上做決定；慢慢來。",
      grammar_point: "be under no pressure to + V（毫無壓力去做...）"
    },
    vocabulary: [
      { word: "decision", pos: "n.", chinese: "決定" },
      { word: "right now", pos: "adv.", chinese: "現在、馬上" },
      { word: "take one's time", pos: "phr.", chinese: "慢慢來" }
    ],
    sentence_pattern: {
      pattern: "S + be + under no pressure to + V",
      example: "I feel under no pressure at this job."
    }
  },
  {
    phrase: "pressure from",
    type: "名詞 + 介系詞",
    chinese: "來自...的壓力",
    keywords: ["pressure", "from"],
    example: {
      english: "The manager resigned due to intense pressure from the board of directors.",
      chinese: "經理因為來自董事會的強烈壓力而辭職。",
      grammar_point: "pressure from + 人/組織（來自某方的壓力）"
    },
    vocabulary: [
      { word: "manager", pos: "n.", chinese: "經理" },
      { word: "resign", pos: "v.", chinese: "辭職" },
      { word: "board of directors", pos: "n.", chinese: "董事會" }
    ],
    sentence_pattern: {
      pattern: "S + V + due to intense pressure from + N",
      example: "She faced pressure from her parents to get married."
    }
  },
  {
    phrase: "pressure on",
    type: "名詞 + 介系詞",
    chinese: "對...的壓力",
    keywords: ["pressure", "on"],
    example: {
      english: "The growing population puts immense pressure on the city's public transportation system.",
      chinese: "不斷增長的人口對這座城市的公共交通系統造成了巨大的壓力。",
      grammar_point: "put pressure on + N（對...施加/造成壓力）"
    },
    vocabulary: [
      { word: "population", pos: "n.", chinese: "人口" },
      { word: "immense", pos: "adj.", chinese: "巨大的" },
      { word: "transportation", pos: "n.", chinese: "交通運輸" }
    ],
    sentence_pattern: {
      pattern: "N + puts immense pressure on + N",
      example: "There is a lot of pressure on him to win."
    }
  },
  {
    phrase: "pressure to",
    type: "名詞 + 不定詞",
    chinese: "去做...(的壓力)",
    keywords: ["pressure", "to"],
    example: {
      english: "Many teenagers feel the pressure to conform to society's beauty standards.",
      chinese: "許多年青人感受到必須符合社會審美標準的壓力。",
      grammar_point: "pressure to + V 原形（被要求做某事的壓力）"
    },
    vocabulary: [
      { word: "teenager", pos: "n.", chinese: "青少年" },
      { word: "conform", pos: "v.", chinese: "遵從、順應" },
      { word: "standard", pos: "n.", chinese: "標準" }
    ],
    sentence_pattern: {
      pattern: "S + feel the pressure to + V",
      example: "There is pressure to finish the work early."
    }
  },
  // ── study (研究類 / 閱讀測驗常客) ─────────────────────────────────────────
  {
    phrase: "conduct a study",
    type: "動詞 + 名詞",
    chinese: "進行研究",
    keywords: ["conduct", "study"],
    example: {
      english: "Researchers decided to conduct a study on the effects of sleep deprivation.",
      chinese: "研究人員決定針對睡眠剝奪的影響進行一項研究。",
      grammar_point: "conduct a study on + N（針對...進行研究）"
    },
    vocabulary: [
      { word: "researcher", pos: "n.", chinese: "研究人員" },
      { word: "effect", pos: "n.", chinese: "影響、效果" },
      { word: "deprivation", pos: "n.", chinese: "剝奪、缺乏" }
    ],
    sentence_pattern: {
      pattern: "S + conduct a study on + N",
      example: "They will conduct a study on water pollution."
    }
  },
  {
    phrase: "carry out a study",
    type: "動詞片語 + 名詞",
    chinese: "執行研究",
    keywords: ["carry", "out", "study"],
    example: {
      english: "The university is planning to carry out a study about teenage internet addiction.",
      chinese: "該大學正計畫執行一項關於青少年網路成癮的研究。",
      grammar_point: "plan to + V（計畫做某事）"
    },
    vocabulary: [
      { word: "teenage", pos: "adj.", chinese: "青少年的" },
      { word: "internet", pos: "n.", chinese: "網際網路" },
      { word: "addiction", pos: "n.", chinese: "成癮" }
    ],
    sentence_pattern: {
      pattern: "S + carry out a study about + N",
      example: "Scientists carried out a study to test the new drug."
    }
  },
  {
    phrase: "according to a study",
    type: "介系詞片語",
    chinese: "根據一項研究",
    keywords: ["according", "study"],
    example: {
      english: "According to a recent study, eating dark chocolate can improve brain function.",
      chinese: "根據一項最近的研究，吃黑巧克力可以改善大腦功能。",
      grammar_point: "According to + N（根據...，常放句首）"
    },
    vocabulary: [
      { word: "recent", pos: "adj.", chinese: "最近的" },
      { word: "improve", pos: "v.", chinese: "改善" },
      { word: "function", pos: "n.", chinese: "功能" }
    ],
    sentence_pattern: {
      pattern: "According to a study, S + V + O",
      example: "According to a study, air pollution is worsening."
    }
  },
  {
    phrase: "a study shows that",
    type: "名詞 + 動詞 + 連接詞",
    chinese: "研究顯示",
    keywords: ["study", "show"],
    example: {
      english: "A new study shows that regular exercise reduces the risk of heart disease.",
      chinese: "一項新研究顯示，規律運動能降低罹患心臟病的風險。",
      grammar_point: "show that + 名詞子句（顯示...）"
    },
    vocabulary: [
      { word: "regular", pos: "adj.", chinese: "規律的" },
      { word: "reduce", pos: "v.", chinese: "減少、降低" },
      { word: "disease", pos: "n.", chinese: "疾病" }
    ],
    sentence_pattern: {
      pattern: "A study shows that + S + V + O",
      example: "A study shows that smiling makes you happier."
    }
  },
  {
    phrase: "a study suggests that",
    type: "名詞 + 動詞 + 連接詞",
    chinese: "研究指出、研究表明",
    keywords: ["study", "suggest"],
    example: {
      english: "The study suggests that children who read more have better imagination.",
      chinese: "該研究指出，閱讀量較大的兒童擁有更好的想像力。",
      grammar_point: "suggest that + 名詞子句（暗示、指出...）"
    },
    vocabulary: [
      { word: "suggest", pos: "v.", chinese: "指出、建議" },
      { word: "imagination", pos: "n.", chinese: "想像力" }
    ],
    sentence_pattern: {
      pattern: "A study suggests that + S + V",
      example: "A study suggests that stress affects memory."
    }
  },
  {
    phrase: "a study finds that",
    type: "名詞 + 動詞 + 連接詞",
    chinese: "研究發現",
    keywords: ["study", "find"],
    example: {
      english: "A recent study finds that listening to classical music helps students focus.",
      chinese: "一項最近的研究發現，聽古典樂有助於學生專注。",
      grammar_point: "help + O + V 原形（幫助某人做某事）"
    },
    vocabulary: [
      { word: "classical", pos: "adj.", chinese: "古典的" },
      { word: "focus", pos: "v.", chinese: "專注" }
    ],
    sentence_pattern: {
      pattern: "A study finds that + S + V",
      example: "The study finds that sleep is crucial for learning."
    }
  },
  {
    phrase: "the results of the study",
    type: "名詞片語",
    chinese: "研究結果",
    keywords: ["result", "study"],
    example: {
      english: "The results of the study were published in a famous medical journal.",
      chinese: "這項研究的結果被發表在一本著名的醫學期刊上。",
      grammar_point: "被動語態 (be + V-p.p.)"
    },
    vocabulary: [
      { word: "result", pos: "n.", chinese: "結果" },
      { word: "publish", pos: "v.", chinese: "發表、出版" },
      { word: "journal", pos: "n.", chinese: "期刊" }
    ],
    sentence_pattern: {
      pattern: "The results of the study + be + V-p.p.",
      example: "The results of the study are surprising."
    }
  },
  {
    phrase: "recent study",
    type: "形容詞 + 名詞",
    chinese: "最近的研究",
    keywords: ["recent", "study"],
    example: {
      english: "According to a recent study, more people are choosing a vegetarian diet.",
      chinese: "根據一項最近的研究，越來越多的人選擇素食飲食。",
      grammar_point: "現在進行式表趨勢 (are choosing)"
    },
    vocabulary: [
      { word: "choose", pos: "v.", chinese: "選擇" },
      { word: "vegetarian", pos: "adj.", chinese: "素食的" },
      { word: "diet", pos: "n.", chinese: "日常飲食" }
    ],
    sentence_pattern: {
      pattern: "In a recent study, S + V",
      example: "A recent study proved his theory wrong."
    }
  },
  {
    phrase: "long-term study",
    type: "形容詞 + 名詞",
    chinese: "長期研究",
    keywords: ["long-term", "study"],
    example: {
      english: "This long-term study tracks the health of participants over 20 years.",
      chinese: "這項長期研究追蹤參與者20年來的健康狀況。",
      grammar_point: "over + 時間段（在...期間）"
    },
    vocabulary: [
      { word: "track", pos: "v.", chinese: "追蹤" },
      { word: "health", pos: "n.", chinese: "健康" },
      { word: "participant", pos: "n.", chinese: "參與者" }
    ],
    sentence_pattern: {
      pattern: "A long-term study + tracks/examines + N",
      example: "We need a long-term study to see the real effects."
    }
  },
  {
    phrase: "large-scale study",
    type: "形容詞 + 名詞",
    chinese: "大規模研究",
    keywords: ["large-scale", "study"],
    example: {
      english: "The government funded a large-scale study to investigate the cause of the disease.",
      chinese: "政府資助了一項大規模研究來調查該疾病的起因。",
      grammar_point: "to + V 原形（表目的）"
    },
    vocabulary: [
      { word: "fund", pos: "v.", chinese: "提供資金" },
      { word: "investigate", pos: "v.", chinese: "調查" },
      { word: "cause", pos: "n.", chinese: "起因、原因" }
    ],
    sentence_pattern: {
      pattern: "S + V + a large-scale study to + V",
      example: "A large-scale study was conducted last year."
    }
  },

  // ── study (學生生活類 / 作文常用) ─────────────────────────────────────────
  {
    phrase: "study plan",
    type: "名詞 + 名詞",
    chinese: "讀書計畫",
    keywords: ["study", "plan"],
    example: {
      english: "Making a detailed study plan can help you prepare for the exam more efficiently.",
      chinese: "制定詳細的讀書計畫可以幫助你更有效率地準備考試。",
      grammar_point: "V-ing 作主詞（動名詞片語）"
    },
    vocabulary: [
      { word: "detailed", pos: "adj.", chinese: "詳細的" },
      { word: "prepare", pos: "v.", chinese: "準備" },
      { word: "efficiently", pos: "adv.", chinese: "有效率地" }
    ],
    sentence_pattern: {
      pattern: "S + make a study plan to + V",
      example: "I need to stick to my study plan."
    }
  },
  {
    phrase: "study schedule",
    type: "名詞 + 名詞",
    chinese: "讀書時間表",
    keywords: ["study", "schedule"],
    example: {
      english: "She always sticks to her study schedule to make sure she finishes all her homework.",
      chinese: "她總是堅持自己的讀書時間表，以確保她能完成所有的功課。",
      grammar_point: "stick to + N（堅持、遵守）"
    },
    vocabulary: [
      { word: "stick to", pos: "phr. v.", chinese: "堅持、固守" },
      { word: "make sure", pos: "phr.", chinese: "確保" },
      { word: "homework", pos: "n.", chinese: "功課" }
    ],
    sentence_pattern: {
      pattern: "S + stick to one's study schedule",
      example: "Creating a study schedule prevents procrastination."
    }
  },
  {
    phrase: "study habits",
    type: "名詞 + 名詞",
    chinese: "讀書習慣",
    keywords: ["study", "habit"],
    example: {
      english: "Developing good study habits early on will benefit you throughout your college life.",
      chinese: "及早養成良好的讀書習慣將使你的整個大學生活受益。",
      grammar_point: "throughout + 期間（貫穿...的整個期間）"
    },
    vocabulary: [
      { word: "develop", pos: "v.", chinese: "培養、發展" },
      { word: "benefit", pos: "v.", chinese: "對...有益" },
      { word: "throughout", pos: "prep.", chinese: "貫穿、遍及" }
    ],
    sentence_pattern: {
      pattern: "S + develop good study habits",
      example: "He needs to improve his study habits."
    }
  },
  {
    phrase: "study skills",
    type: "名詞 + 名詞",
    chinese: "學習技巧",
    keywords: ["study", "skill"],
    example: {
      english: "The teacher gave us some useful tips on how to improve our study skills.",
      chinese: "老師給了我們一些關於如何提升學習技巧的實用建議。",
      grammar_point: "tips on + N / V-ing（關於...的提示/建議）"
    },
    vocabulary: [
      { word: "useful", pos: "adj.", chinese: "有用的" },
      { word: "tip", pos: "n.", chinese: "提示、訣竅" },
      { word: "improve", pos: "v.", chinese: "改善、提升" }
    ],
    sentence_pattern: {
      pattern: "S + learn new study skills",
      example: "Time management is an important study skill."
    }
  },
  {
    phrase: "study methods",
    type: "名詞 + 名詞",
    chinese: "學習方法",
    keywords: ["study", "method"],
    example: {
      english: "Different students may require different study methods to learn effectively.",
      chinese: "不同的學生可能需要不同的學習方法才能有效學習。",
      grammar_point: "require + N + to + V（需要...來達成...）"
    },
    vocabulary: [
      { word: "require", pos: "v.", chinese: "需要" },
      { word: "different", pos: "adj.", chinese: "不同的" },
      { word: "effectively", pos: "adv.", chinese: "有效地" }
    ],
    sentence_pattern: {
      pattern: "S + try different study methods",
      example: "Flashcards are a popular study method."
    }
  },
  {
    phrase: "study group",
    type: "名詞 + 名詞",
    chinese: "讀書會、學習小組",
    keywords: ["study", "group"],
    example: {
      english: "Joining a study group allows you to discuss difficult questions with your classmates.",
      chinese: "參加讀書會讓你能夠與同學討論困難的問題。",
      grammar_point: "allow + O + to + V（允許/讓某人做某事）"
    },
    vocabulary: [
      { word: "join", pos: "v.", chinese: "加入、參加" },
      { word: "discuss", pos: "v.", chinese: "討論" },
      { word: "difficult", pos: "adj.", chinese: "困難的" }
    ],
    sentence_pattern: {
      pattern: "S + join a study group",
      example: "Our study group meets every Friday."
    }
  },
  {
    phrase: "study session",
    type: "名詞 + 名詞",
    chinese: "學習時段、共學時間",
    keywords: ["study", "session"],
    example: {
      english: "After a three-hour study session in the library, they decided to take a break.",
      chinese: "在圖書館三個小時的學習時段後，他們決定休息一下。",
      grammar_point: "decide to + V（決定做某事）"
    },
    vocabulary: [
      { word: "session", pos: "n.", chinese: "一段時間、一節" },
      { word: "library", pos: "n.", chinese: "圖書館" },
      { word: "take a break", pos: "phr.", chinese: "休息一下" }
    ],
    sentence_pattern: {
      pattern: "After a long study session, S + V",
      example: "Let's grab a coffee before our next study session."
    }
  },
  {
    phrase: "study for an exam",
    type: "動詞 + 介系詞 + 名詞",
    chinese: "準備考試",
    keywords: ["study", "exam"],
    example: {
      english: "He stayed up late last night to study for his final exam.",
      chinese: "他昨晚熬夜準備期末考。",
      grammar_point: "stay up late（熬夜）+ to V（表目的）"
    },
    vocabulary: [
      { word: "stay up", pos: "phr. v.", chinese: "熬夜" },
      { word: "late", pos: "adv.", chinese: "晚地" },
      { word: "final", pos: "adj.", chinese: "期末的、最後的" }
    ],
    sentence_pattern: {
      pattern: "S + study for an exam",
      example: "I need to study for a math exam tomorrow."
    }
  },
  {
    phrase: "study hard",
    type: "動詞 + 副詞",
    chinese: "努力讀書",
    keywords: ["study", "hard"],
    example: {
      english: "If you study hard and stay focused, you will definitely achieve your goals.",
      chinese: "如果你努力讀書並保持專注，你一定能達成目標。",
      grammar_point: "If + 條件句（現在式）, S + will + V（未來式）"
    },
    vocabulary: [
      { word: "focused", pos: "adj.", chinese: "專注的" },
      { word: "definitely", pos: "adv.", chinese: "肯定地、絕對" },
      { word: "achieve", pos: "v.", chinese: "達成" }
    ],
    sentence_pattern: {
      pattern: "S + need to study hard to + V",
      example: "She studies hard to get a scholarship."
    }
  },
  {
    phrase: "study abroad",
    type: "動詞 + 副詞",
    chinese: "出國留學",
    keywords: ["study", "abroad"],
    example: {
      english: "Studying abroad can broaden your horizons and help you experience different cultures.",
      chinese: "出國留學可以拓展你的視野，並幫助你體驗不同的文化。",
      grammar_point: "V-ing 作主詞（動名詞片語）"
    },
    vocabulary: [
      { word: "abroad", pos: "adv.", chinese: "在國外" },
      { word: "broaden", pos: "v.", chinese: "擴展、加寬" },
      { word: "horizon", pos: "n.", chinese: "視野、地平線" }
    ],
    sentence_pattern: {
      pattern: "S + plan to study abroad",
      example: "He went to the UK to study abroad."
    }
  },
  // ── have (日常與高頻搭配) ────────────────────────────────────────────────
  {
    phrase: "have an appointment",
    type: "動詞 + 名詞",
    chinese: "有約、預約（看診或商務）",
    keywords: ["have", "appointment"],
    example: {
      english: "I need to leave early today because I have a dentist appointment this afternoon.",
      chinese: "我今天必須早點離開，因為我下午預約了看牙醫。",
      grammar_point: "have an appointment with + 人（與...有約）"
    },
    vocabulary: [
      { word: "appointment", pos: "n.", chinese: "預約、約定" },
      { word: "leave", pos: "v.", chinese: "離開" },
      { word: "dentist", pos: "n.", chinese: "牙醫" }
    ],
    sentence_pattern: {
      pattern: "S + have an appointment with + N",
      example: "She has an appointment with the manager."
    }
  },
  {
    phrase: "have an argument",
    type: "動詞 + 名詞",
    chinese: "爭吵、爭論",
    keywords: ["have", "argument"],
    example: {
      english: "She had a heated argument with her colleague about the new project.",
      chinese: "她和同事針對新專案發生了激烈的爭吵。",
      grammar_point: "have an argument with + 人 + about/over + 事物"
    },
    vocabulary: [
      { word: "argument", pos: "n.", chinese: "爭論、論點" },
      { word: "heated", pos: "adj.", chinese: "激烈的、熱烈的" },
      { word: "colleague", pos: "n.", chinese: "同事" }
    ],
    sentence_pattern: {
      pattern: "S + have an argument with + N",
      example: "They had an argument over money."
    }
  },
  {
    phrase: "have a baby",
    type: "動詞 + 名詞",
    chinese: "生小孩",
    keywords: ["have", "baby"],
    example: {
      english: "My sister and her husband are going to have a baby next month.",
      chinese: "我姐姐和她的丈夫下個月就要生小孩了。",
      grammar_point: "have a baby（生小孩、有寶寶）"
    },
    vocabulary: [
      { word: "husband", pos: "n.", chinese: "丈夫" },
      { word: "next", pos: "adj.", chinese: "下一個的" },
      { word: "month", pos: "n.", chinese: "月份" }
    ],
    sentence_pattern: {
      pattern: "S + be going to have a baby",
      example: "She is thrilled to have a baby."
    }
  },
  {
    phrase: "have a drink",
    type: "動詞 + 名詞",
    chinese: "喝杯飲料、喝杯酒",
    keywords: ["have", "drink"],
    example: {
      english: "Let's go out and have a drink to celebrate your promotion after work.",
      chinese: "我們下班後出去喝一杯慶祝你升職吧。",
      grammar_point: "to + V（不定詞表目的）"
    },
    vocabulary: [
      { word: "celebrate", pos: "v.", chinese: "慶祝" },
      { word: "promotion", pos: "n.", chinese: "升遷、晉升" },
      { word: "after", pos: "prep.", chinese: "在...之後" }
    ],
    sentence_pattern: {
      pattern: "Let's have a drink to + V",
      example: "He had a drink with his old friends."
    }
  },
  {
    phrase: "have a dream / a nightmare",
    type: "動詞 + 名詞",
    chinese: "做夢 / 做惡夢",
    keywords: ["have", "dream", "nightmare"],
    example: {
      english: "The little boy woke up crying because he had a terrifying nightmare.",
      chinese: "那個小男孩哭著醒來，因為他做了一個可怕的惡夢。",
      grammar_point: "wake up + V-ing（醒來時處於...狀態）"
    },
    vocabulary: [
      { word: "wake up", pos: "phr. v.", chinese: "醒來" },
      { word: "terrifying", pos: "adj.", chinese: "令人恐懼的" },
      { word: "nightmare", pos: "n.", chinese: "惡夢" }
    ],
    sentence_pattern: {
      pattern: "S + had a dream/nightmare about + N",
      example: "I had a strange dream last night."
    }
  },
  {
    phrase: "have a fight / a quarrel",
    type: "動詞 + 名詞",
    chinese: "打架 / 吵架",
    keywords: ["have", "fight", "quarrel"],
    example: {
      english: "It is normal for siblings to have a fight over toys occasionally.",
      chinese: "兄弟姊妹偶爾為玩具打架是很正常的。",
      grammar_point: "It is adj for S to + V（對某人來說做某事是...的）"
    },
    vocabulary: [
      { word: "normal", pos: "adj.", chinese: "正常的" },
      { word: "sibling", pos: "n.", chinese: "手足、兄弟姊妹" },
      { word: "occasionally", pos: "adv.", chinese: "偶爾" }
    ],
    sentence_pattern: {
      pattern: "S + have a fight/quarrel over + N",
      example: "The couple had a quarrel over a minor issue."
    }
  },
  {
    phrase: "have a haircut",
    type: "動詞 + 名詞",
    chinese: "剪頭髮",
    keywords: ["have", "haircut"],
    example: {
      english: "You look so different today! Did you have a haircut over the weekend?",
      chinese: "你今天看起來好不一樣！你週末去剪頭髮了嗎？",
      grammar_point: "look + adj（連綴動詞用法）"
    },
    vocabulary: [
      { word: "different", pos: "adj.", chinese: "不同的" },
      { word: "haircut", pos: "n.", chinese: "理髮" },
      { word: "weekend", pos: "n.", chinese: "週末" }
    ],
    sentence_pattern: {
      pattern: "S + have a haircut",
      example: "I need to have a haircut before the interview."
    }
  },
  {
    phrase: "have a chat / a conversation",
    type: "動詞 + 名詞",
    chinese: "聊天 / 交談",
    keywords: ["have", "chat", "conversation"],
    example: {
      english: "I had a long conversation with my parents about my future career plans.",
      chinese: "我和父母就我未來的職涯計畫進行了長談。",
      grammar_point: "have a conversation with + 人 + about + 事情"
    },
    vocabulary: [
      { word: "conversation", pos: "n.", chinese: "交談、對話" },
      { word: "career", pos: "n.", chinese: "職涯、事業" },
      { word: "plan", pos: "n.", chinese: "計畫" }
    ],
    sentence_pattern: {
      pattern: "S + have a chat/conversation with + N",
      example: "Let's have a chat over a cup of tea."
    }
  },
  {
    phrase: "have difficulty / a problem",
    type: "動詞 + 名詞",
    chinese: "有困難 / 有問題",
    keywords: ["have", "difficulty", "problem"],
    example: {
      english: "Many foreign students have difficulty communicating in the local language at first.",
      chinese: "許多外籍學生起初在用當地語言溝通時有困難。",
      grammar_point: "have difficulty + V-ing（做...有困難，必考文法）"
    },
    vocabulary: [
      { word: "foreign", pos: "adj.", chinese: "外國的" },
      { word: "communicate", pos: "v.", chinese: "溝通" },
      { word: "local", pos: "adj.", chinese: "當地的" }
    ],
    sentence_pattern: {
      pattern: "S + have difficulty + V-ing",
      example: "He has a problem managing his time."
    }
  },
  {
    phrase: "have feelings / needs",
    type: "動詞 + 名詞",
    chinese: "有感受 / 有需求",
    keywords: ["have", "feelings", "needs"],
    example: {
      english: "It is perfectly normal to have negative feelings when things go wrong.",
      chinese: "當事情出錯時，有負面感受是完全正常的。",
      grammar_point: "go wrong（出錯，連綴動詞用法）"
    },
    vocabulary: [
      { word: "perfectly", pos: "adv.", chinese: "完美地、完全地" },
      { word: "negative", pos: "adj.", chinese: "負面的" },
      { word: "wrong", pos: "adj.", chinese: "錯誤的" }
    ],
    sentence_pattern: {
      pattern: "It is normal to have + adj + feelings",
      example: "Animals also have feelings and needs."
    }
  },
  {
    phrase: "have fun / a (good) laugh",
    type: "動詞 + 名詞",
    chinese: "玩得開心 / 大笑一場",
    keywords: ["have", "fun", "laugh"],
    example: {
      english: "We went to the amusement park yesterday and had a lot of fun.",
      chinese: "我們昨天去了遊樂園，玩得非常開心。",
      grammar_point: "have fun + V-ing（開心地做某事）"
    },
    vocabulary: [
      { word: "amusement park", pos: "n.", chinese: "遊樂園" },
      { word: "yesterday", pos: "adv.", chinese: "昨天" },
      { word: "laugh", pos: "n.", chinese: "笑聲、笑" }
    ],
    sentence_pattern: {
      pattern: "S + have fun / a good laugh",
      example: "We had a good laugh at his joke."
    }
  },
  {
    phrase: "have a good time",
    type: "動詞 + 形容詞 + 名詞",
    chinese: "玩得愉快",
    keywords: ["have", "time", "good"],
    example: {
      english: "Enjoy your trip to Japan and make sure you have a good time!",
      chinese: "享受你的日本之旅，並確保你玩得愉快！",
      grammar_point: "make sure + (that) + 子句（確保...）"
    },
    vocabulary: [
      { word: "enjoy", pos: "v.", chinese: "享受" },
      { word: "trip", pos: "n.", chinese: "旅行" },
      { word: "make sure", pos: "phr.", chinese: "確保" }
    ],
    sentence_pattern: {
      pattern: "S + have a good time + V-ing/at N",
      example: "Did you have a good time at the party?"
    }
  },
  {
    phrase: "have an idea / a plan",
    type: "動詞 + 名詞",
    chinese: "有主意 / 有計畫",
    keywords: ["have", "idea", "plan"],
    example: {
      english: "Does anyone have a better idea to solve this urgent environmental issue?",
      chinese: "有沒有人有更好的主意來解決這個緊急的環境議題？",
      grammar_point: "have an idea to + V（有做...的主意）"
    },
    vocabulary: [
      { word: "solve", pos: "v.", chinese: "解決" },
      { word: "urgent", pos: "adj.", chinese: "緊急的" },
      { word: "issue", pos: "n.", chinese: "議題" }
    ],
    sentence_pattern: {
      pattern: "S + have a plan to + V",
      example: "I have a plan for the weekend."
    }
  },
  {
    phrase: "have good manners",
    type: "動詞 + 形容詞 + 名詞",
    chinese: "有禮貌",
    keywords: ["have", "manners", "good"],
    example: {
      english: "It is important to teach children to have good manners in public places.",
      chinese: "教導孩子在公共場所要有禮貌是很重要的。",
      grammar_point: "teach + O + to + V（教導某人做某事）"
    },
    vocabulary: [
      { word: "manner", pos: "n.", chinese: "禮貌、規矩（常用複數 manners）" },
      { word: "public", pos: "adj.", chinese: "公開的、公眾的" },
      { word: "place", pos: "n.", chinese: "地方" }
    ],
    sentence_pattern: {
      pattern: "S + have good manners",
      example: "A true gentleman always has good manners."
    }
  },
  {
    phrase: "have a headache / a cold",
    type: "動詞 + 名詞",
    chinese: "頭痛 / 感冒",
    keywords: ["have", "headache", "cold"],
    example: {
      english: "He took a day off from work because he had a terrible headache and a bad cold.",
      chinese: "他請了一天假，因為他頭痛欲裂且得了重感冒。",
      grammar_point: "take a day off（請假一天）"
    },
    vocabulary: [
      { word: "terrible", pos: "adj.", chinese: "可怕的、極糟的" },
      { word: "headache", pos: "n.", chinese: "頭痛" },
      { word: "cold", pos: "n.", chinese: "感冒" }
    ],
    sentence_pattern: {
      pattern: "S + have a headache/cold",
      example: "I can't go out because I have a bad cold."
    }
  },
  {
    phrase: "have a meal / lunch / dinner",
    type: "動詞 + 名詞",
    chinese: "用餐 / 吃午餐 / 吃晚餐",
    keywords: ["have", "meal", "lunch", "dinner"],
    example: {
      english: "It is a tradition for our family to have a big dinner together on New Year's Eve.",
      chinese: "在除夕夜全家一起吃頓豐盛的晚餐是我們家的傳統。",
      grammar_point: "on + 特定節日（在某個節日）"
    },
    vocabulary: [
      { word: "tradition", pos: "n.", chinese: "傳統" },
      { word: "together", pos: "adv.", chinese: "一起" },
      { word: "Eve", pos: "n.", chinese: "前夕" }
    ],
    sentence_pattern: {
      pattern: "S + have a meal/dinner with + N",
      example: "They had a romantic dinner last night."
    }
  },
  {
    phrase: "have an operation / surgery",
    type: "動詞 + 名詞",
    chinese: "動手術",
    keywords: ["have", "operation", "surgery"],
    example: {
      english: "The injured driver needs to have an operation immediately to save his life.",
      chinese: "這名受傷的司機需要立即動手術以挽救他的生命。",
      grammar_point: "need to + V 原形（需要做某事）"
    },
    vocabulary: [
      { word: "injured", pos: "adj.", chinese: "受傷的" },
      { word: "operation", pos: "n.", chinese: "手術" },
      { word: "immediately", pos: "adv.", chinese: "立刻、馬上" }
    ],
    sentence_pattern: {
      pattern: "S + need to have an operation/surgery",
      example: "She will have surgery on her knee next week."
    }
  },
  {
    phrase: "have a party",
    type: "動詞 + 名詞",
    chinese: "舉辦派對",
    keywords: ["have", "party"],
    example: {
      english: "We are going to have a surprise party to celebrate her 18th birthday.",
      chinese: "我們打算舉辦一場驚喜派對來慶祝她的18歲生日。",
      grammar_point: "be going to + V（將要...、打算...）"
    },
    vocabulary: [
      { word: "surprise", pos: "n.", chinese: "驚喜" },
      { word: "celebrate", pos: "v.", chinese: "慶祝" },
      { word: "birthday", pos: "n.", chinese: "生日" }
    ],
    sentence_pattern: {
      pattern: "S + have a party for + N",
      example: "They had a farewell party for the retiring boss."
    }
  },
  {
    phrase: "have patience",
    type: "動詞 + 名詞",
    chinese: "有耐心",
    keywords: ["have", "patience"],
    example: {
      english: "As a kindergarten teacher, you need to have a lot of patience when dealing with young children.",
      chinese: "作為一名幼稚園老師，在處理年幼孩童時你需要有很大的耐心。",
      grammar_point: "when + V-ing（當...的時候，主動語態省略主詞）"
    },
    vocabulary: [
      { word: "kindergarten", pos: "n.", chinese: "幼稚園" },
      { word: "patience", pos: "n.", chinese: "耐心（不可數）" },
      { word: "deal with", pos: "phr. v.", chinese: "處理、應付" }
    ],
    sentence_pattern: {
      pattern: "S + need to have patience with + N",
      example: "Learning a new language requires you to have patience."
    }
  },
  {
    phrase: "have qualifications / skills",
    type: "動詞 + 名詞",
    chinese: "具備資格 / 技能",
    keywords: ["have", "qualifications", "skills"],
    example: {
      english: "The successful candidate must have the right qualifications and skills for this position.",
      chinese: "成功的候選人必須具備適合這個職位的資格和技能。",
      grammar_point: "must + V 原形（必須...）"
    },
    vocabulary: [
      { word: "candidate", pos: "n.", chinese: "候選人、應徵者" },
      { word: "qualification", pos: "n.", chinese: "資格、資歷" },
      { word: "position", pos: "n.", chinese: "職位、位置" }
    ],
    sentence_pattern: {
      pattern: "S + have the qualifications for + N",
      example: "He doesn't have the skills required for the job."
    }
  },
  {
    phrase: "have regrets",
    type: "動詞 + 名詞",
    chinese: "有遺憾、感到後悔",
    keywords: ["have", "regrets"],
    example: {
      english: "I have no regrets about the decisions I made, even though things didn't go perfectly.",
      chinese: "我對自己所做的決定沒有遺憾，即使事情進展得並不完美。",
      grammar_point: "have no regrets about + N（對...沒有遺憾）"
    },
    vocabulary: [
      { word: "regret", pos: "n.", chinese: "遺憾、後悔" },
      { word: "decision", pos: "n.", chinese: "決定" },
      { word: "perfectly", pos: "adv.", chinese: "完美地" }
    ],
    sentence_pattern: {
      pattern: "S + have no regrets about + N/V-ing",
      example: "She has some regrets about leaving school early."
    }
  },
  {
    phrase: "have sympathy (for)",
    type: "動詞 + 名詞 + 介系詞",
    chinese: "對...感到同情",
    keywords: ["have", "sympathy"],
    example: {
      english: "We should have deep sympathy for those who lost their homes in the devastating earthquake.",
      chinese: "我們應該對那些在毀滅性地震中失去家園的人深表同情。",
      grammar_point: "those who + V（那些...的人）"
    },
    vocabulary: [
      { word: "sympathy", pos: "n.", chinese: "同情、同情心" },
      { word: "devastating", pos: "adj.", chinese: "毀滅性的" },
      { word: "earthquake", pos: "n.", chinese: "地震" }
    ],
    sentence_pattern: {
      pattern: "S + have sympathy for + N",
      example: "I have great sympathy for the victims."
    }
  },
  {
    phrase: "have a shower / a bath",
    type: "動詞 + 名詞",
    chinese: "洗澡（淋浴 / 泡澡）",
    keywords: ["have", "shower", "bath"],
    example: {
      english: "He usually has a quick shower before going to work in the morning to stay refreshed.",
      chinese: "他早上上班前通常會快速沖個澡以保持神清氣爽。",
      grammar_point: "before + V-ing（在...之前）"
    },
    vocabulary: [
      { word: "shower", pos: "n.", chinese: "淋浴" },
      { word: "bath", pos: "n.", chinese: "泡澡" },
      { word: "refreshed", pos: "adj.", chinese: "神清氣爽的" }
    ],
    sentence_pattern: {
      pattern: "S + have a shower/bath",
      example: "She is having a bath right now."
    }
  },
  {
    phrase: "have a tolerance (to/for)",
    type: "動詞 + 名詞",
    chinese: "對...有耐受度 / 寬容",
    keywords: ["have", "tolerance"],
    example: {
      english: "After taking the medicine for months, he has developed a tolerance to it and needs a higher dose.",
      chinese: "服藥幾個月後，他對它產生了耐受性，需要更高的劑量。",
      grammar_point: "develop/have a tolerance to + N（對...產生耐受度）"
    },
    vocabulary: [
      { word: "tolerance", pos: "n.", chinese: "耐受度、寬容" },
      { word: "medicine", pos: "n.", chinese: "藥物" },
      { word: "dose", pos: "n.", chinese: "劑量" }
    ],
    sentence_pattern: {
      pattern: "S + have a tolerance for/to + N",
      example: "Teachers must have a tolerance for mistakes."
    }
  },
  {
    phrase: "have time",
    type: "動詞 + 名詞",
    chinese: "有時間",
    keywords: ["have", "time"],
    example: {
      english: "Do you have time to grab a cup of coffee with me after the meeting?",
      chinese: "會議結束後你有時間跟我去喝杯咖啡嗎？",
      grammar_point: "have time to + V（有時間做某事）"
    },
    vocabulary: [
      { word: "grab", pos: "v.", chinese: "抓取（口語：隨便吃點/喝點）" },
      { word: "meeting", pos: "n.", chinese: "會議" },
      { word: "after", pos: "prep.", chinese: "在...之後" }
    ],
    sentence_pattern: {
      pattern: "S + have time to + V",
      example: "I don't have time to watch TV."
    }
  },// ── give ──────────────────────────────────────────────────────────────────
  {
    phrase: "give advice",
    type: "動詞 + 名詞",
    chinese: "給予建議",
    keywords: ["give", "advice"],
    example: {
      english: "The counselor gave the student some useful advice on choosing a college major.",
      chinese: "輔導老師在選擇大學主修方面給了該名學生一些有用的建議。",
      grammar_point: "advice 是不可數名詞，不可加 s 或 a"
    },
    vocabulary: [
      { word: "counselor", pos: "n.", chinese: "顧問、輔導老師" },
      { word: "useful", pos: "adj.", chinese: "有用的" },
      { word: "major", pos: "n.", chinese: "主修科目" }
    ],
    sentence_pattern: {
      pattern: "S + give + O + some advice on + N/V-ing",
      example: "My father gave me good advice."
    }
  },
  {
    phrase: "give an example",
    type: "動詞 + 名詞",
    chinese: "舉例",
    keywords: ["give", "example"],
    example: {
      english: "Can you give an example to illustrate your point more clearly?",
      chinese: "你能舉個例子把你的論點說明得更清楚嗎？",
      grammar_point: "to illustrate (不定詞表目的)"
    },
    vocabulary: [
      { word: "illustrate", pos: "v.", chinese: "說明、闡明" },
      { word: "point", pos: "n.", chinese: "論點" },
      { word: "clearly", pos: "adv.", chinese: "清楚地" }
    ],
    sentence_pattern: {
      pattern: "S + give an example to + V",
      example: "The teacher gave an example to explain the rule."
    }
  },
  {
    phrase: "give birth (to)",
    type: "動詞片語",
    chinese: "生產、分娩、誕生",
    keywords: ["give", "birth"],
    example: {
      english: "She gave birth to a healthy baby boy early this morning.",
      chinese: "她今天清晨生下了一個健康的男嬰。",
      grammar_point: "give birth to + N（生下... / 促成...的誕生）"
    },
    vocabulary: [
      { word: "healthy", pos: "adj.", chinese: "健康的" },
      { word: "baby", pos: "n.", chinese: "嬰兒" },
      { word: "early", pos: "adv.", chinese: "早地" }
    ],
    sentence_pattern: {
      pattern: "S + gave birth to + N",
      example: "The new policy gave birth to many problems."
    }
  },
  {
    phrase: "give a chance",
    type: "動詞 + 名詞",
    chinese: "給予機會",
    keywords: ["give", "chance"],
    example: {
      english: "Please give me a second chance to prove my ability to the team.",
      chinese: "請給我第二次機會向團隊證明我的能力。",
      grammar_point: "give + 人 + a chance + to V（給某人機會去做...）"
    },
    vocabulary: [
      { word: "second", pos: "adj.", chinese: "第二次的" },
      { word: "prove", pos: "v.", chinese: "證明" },
      { word: "ability", pos: "n.", chinese: "能力" }
    ],
    sentence_pattern: {
      pattern: "S + give + O + a chance to + V",
      example: "Everyone deserves to be given a chance."
    }
  },
  {
    phrase: "give credit",
    type: "動詞 + 名詞",
    chinese: "歸功於、給予肯定",
    keywords: ["give", "credit"],
    example: {
      english: "We should give credit to the team members who worked hard behind the scenes.",
      chinese: "我們應該把功勞歸給那些在幕後努力工作的團隊成員。",
      grammar_point: "give credit to + 人/事（將功勞歸給...）"
    },
    vocabulary: [
      { word: "credit", pos: "n.", chinese: "功勞、讚揚" },
      { word: "member", pos: "n.", chinese: "成員" },
      { word: "behind the scenes", pos: "phr.", chinese: "在幕後" }
    ],
    sentence_pattern: {
      pattern: "S + give credit to + N",
      example: "He took all the credit for the success."
    }
  },
  {
    phrase: "give evidence",
    type: "動詞 + 名詞",
    chinese: "提供證據、作證",
    keywords: ["give", "evidence"],
    example: {
      english: "The witness was asked to give evidence in court regarding the car accident.",
      chinese: "該名目擊者被要求在法庭上就這起車禍作證。",
      grammar_point: "regarding + N（關於...，作介系詞用）"
    },
    vocabulary: [
      { word: "witness", pos: "n.", chinese: "目擊者" },
      { word: "court", pos: "n.", chinese: "法庭" },
      { word: "regarding", pos: "prep.", chinese: "關於" }
    ],
    sentence_pattern: {
      pattern: "S + be asked to give evidence",
      example: "The scientist gave evidence to support his theory."
    }
  },
  {
    phrase: "give an explanation",
    type: "動詞 + 名詞",
    chinese: "給予解釋",
    keywords: ["give", "explanation"],
    example: {
      english: "The manager gave a detailed explanation for the unexpected delay of the project.",
      chinese: "經理對專案出乎意料的延遲給予了詳細的解釋。",
      grammar_point: "give an explanation for + N（為...提出解釋）"
    },
    vocabulary: [
      { word: "detailed", pos: "adj.", chinese: "詳細的" },
      { word: "unexpected", pos: "adj.", chinese: "出乎意料的" },
      { word: "delay", pos: "n.", chinese: "延遲" }
    ],
    sentence_pattern: {
      pattern: "S + give an explanation for + N",
      example: "Can you give an explanation for your absence?"
    }
  },
  {
    phrase: "give a hand",
    type: "動詞片語",
    chinese: "幫忙、伸出援手",
    keywords: ["give", "hand", "help"],
    example: {
      english: "Could you please give me a hand with these heavy boxes?",
      chinese: "能請你幫我搬這些沉重的箱子嗎？",
      grammar_point: "give + O + a hand with + N/V-ing（幫某人處理...）"
    },
    vocabulary: [
      { word: "heavy", pos: "adj.", chinese: "沉重的" },
      { word: "box", pos: "n.", chinese: "箱子" },
      { word: "could", pos: "aux.", chinese: "能夠（客氣請求）" }
    ],
    sentence_pattern: {
      pattern: "S + give + O + a hand with + N",
      example: "Let me give you a hand."
    }
  },
  {
    phrase: "give hope",
    type: "動詞 + 名詞",
    chinese: "帶來希望、給予希望",
    keywords: ["give", "hope"],
    example: {
      english: "The successful trial of the new medical treatment gives hope to patients suffering from the rare disease.",
      chinese: "新醫療療法的成功試驗給罹患這種罕見疾病的患者帶來了希望。",
      grammar_point: "give hope to + N（給...帶來希望）"
    },
    vocabulary: [
      { word: "medical treatment", pos: "n.", chinese: "醫療" },
      { word: "patient", pos: "n.", chinese: "病患" },
      { word: "rare disease", pos: "n.", chinese: "罕見疾病" }
    ],
    sentence_pattern: {
      pattern: "N + gives hope to + N",
      example: "His words gave us hope."
    }
  },
  {
    phrase: "give a hug / a kiss",
    type: "動詞 + 名詞",
    chinese: "給一個擁抱 / 吻",
    keywords: ["give", "hug", "kiss"],
    example: {
      english: "Before leaving for the airport, she gave her mother a warm hug.",
      chinese: "在前往機場之前，她給了母親一個溫暖的擁抱。",
      grammar_point: "give + 人 + a hug（給某人一個擁抱）"
    },
    vocabulary: [
      { word: "leave for", pos: "phr.", chinese: "前往" },
      { word: "airport", pos: "n.", chinese: "機場" },
      { word: "warm", pos: "adj.", chinese: "溫暖的" }
    ],
    sentence_pattern: {
      pattern: "S + gave + O + a hug",
      example: "He gave his son a kiss goodnight."
    }
  },
  {
    phrase: "give the impression",
    type: "動詞片語",
    chinese: "給人...的印象",
    keywords: ["give", "impression"],
    example: {
      english: "His confident speech gave the audience the impression that he was well-prepared.",
      chinese: "他自信的演講給觀眾留下了他準備充分的印象。",
      grammar_point: "give + 人 + the impression that + 子句（給人...的印象）"
    },
    vocabulary: [
      { word: "confident", pos: "adj.", chinese: "自信的" },
      { word: "audience", pos: "n.", chinese: "觀眾、聽眾" },
      { word: "well-prepared", pos: "adj.", chinese: "準備充分的" }
    ],
    sentence_pattern: {
      pattern: "S + give + O + the impression that + clause",
      example: "You give the impression of being strict."
    }
  },
  {
    phrase: "give importance to",
    type: "動詞片語",
    chinese: "重視...",
    keywords: ["give", "importance"],
    example: {
      english: "Modern education gives great importance to the development of critical thinking skills.",
      chinese: "現代教育非常重視批判性思考技能的發展。",
      grammar_point: "give importance to + N/V-ing（對...給予重視）"
    },
    vocabulary: [
      { word: "modern", pos: "adj.", chinese: "現代的" },
      { word: "education", pos: "n.", chinese: "教育" },
      { word: "critical thinking", pos: "n.", chinese: "批判性思考" }
    ],
    sentence_pattern: {
      pattern: "S + give importance to + N",
      example: "They give equal importance to sports and academics."
    }
  },
  {
    phrase: "give an injection",
    type: "動詞 + 名詞",
    chinese: "打針",
    keywords: ["give", "injection"],
    example: {
      english: "The nurse will give you an injection to help relieve the severe pain in your back.",
      chinese: "護理師會幫你打一針，以幫助緩解你背部的劇痛。",
      grammar_point: "give + 人 + an injection（幫某人打針）"
    },
    vocabulary: [
      { word: "nurse", pos: "n.", chinese: "護理師" },
      { word: "injection", pos: "n.", chinese: "注射、打針" },
      { word: "relieve", pos: "v.", chinese: "緩解" }
    ],
    sentence_pattern: {
      pattern: "S + give + O + an injection",
      example: "The doctor gave him an injection."
    }
  },
  {
    phrase: "give a lesson",
    type: "動詞 + 名詞",
    chinese: "授課、給...一個教訓",
    keywords: ["give", "lesson"],
    example: {
      english: "The severe car crash gave him a harsh lesson about the importance of driving safely.",
      chinese: "那場嚴重的車禍給了他一個關於安全駕駛重要性的嚴厲教訓。",
      grammar_point: "give + 人 + a lesson about/on + N（給某人關於...的教訓）"
    },
    vocabulary: [
      { word: "severe", pos: "adj.", chinese: "嚴重的" },
      { word: "crash", pos: "n.", chinese: "撞擊、車禍" },
      { word: "harsh", pos: "adj.", chinese: "嚴厲的" }
    ],
    sentence_pattern: {
      pattern: "S + give + O + a lesson",
      example: "Failure gives us a valuable lesson."
    }
  },
  {
    phrase: "give notice",
    type: "動詞 + 名詞",
    chinese: "提早通知、辭職通知",
    keywords: ["give", "notice"],
    example: {
      english: "Employees are required to give two weeks' notice before they quit their jobs.",
      chinese: "員工被要求在辭職前必須給予兩週的通知。",
      grammar_point: "be required to + V（被要求做...）"
    },
    vocabulary: [
      { word: "employee", pos: "n.", chinese: "員工" },
      { word: "require", pos: "v.", chinese: "要求" },
      { word: "quit", pos: "v.", chinese: "辭職、放棄" }
    ],
    sentence_pattern: {
      pattern: "S + must give notice before + V-ing",
      example: "You have to give notice to the landlord."
    }
  },
  {
    phrase: "give a lift / a ride",
    type: "動詞 + 名詞",
    chinese: "載某人一程",
    keywords: ["give", "lift", "ride"],
    example: {
      english: "Since it was raining heavily, my coworker kindly offered to give me a ride home.",
      chinese: "因為雨下得很大，我的同事好心地主動提議載我回家。",
      grammar_point: "offer to + V（主動提議做...）"
    },
    vocabulary: [
      { word: "heavily", pos: "adv.", chinese: "沉重地、(雨)下得很大" },
      { word: "coworker", pos: "n.", chinese: "同事" },
      { word: "offer", pos: "v.", chinese: "提供、主動提議" }
    ],
    sentence_pattern: {
      pattern: "S + give + O + a ride/lift to + 地方",
      example: "Can you give me a lift to the station?"
    }
  },
  {
    phrase: "give an opinion",
    type: "動詞 + 名詞",
    chinese: "表達意見",
    keywords: ["give", "opinion"],
    example: {
      english: "Everyone in the meeting is encouraged to give an opinion on the new marketing strategy.",
      chinese: "會議中的每個人都被鼓勵針對新行銷策略表達意見。",
      grammar_point: "be encouraged to + V（被鼓勵去...）"
    },
    vocabulary: [
      { word: "encourage", pos: "v.", chinese: "鼓勵" },
      { word: "marketing", pos: "n.", chinese: "行銷" },
      { word: "strategy", pos: "n.", chinese: "策略" }
    ],
    sentence_pattern: {
      pattern: "S + give an opinion on + N",
      example: "He gave his honest opinion."
    }
  },
  {
    phrase: "give an opportunity",
    type: "動詞 + 名詞",
    chinese: "提供機會",
    keywords: ["give", "opportunity"],
    example: {
      english: "The scholarship gives poor students an opportunity to pursue higher education.",
      chinese: "這項獎學金給予貧困學生一個追求高等教育的機會。",
      grammar_point: "give + O1 + an opportunity to + V（給某人機會做...）"
    },
    vocabulary: [
      { word: "scholarship", pos: "n.", chinese: "獎學金" },
      { word: "pursue", pos: "v.", chinese: "追求" },
      { word: "higher education", pos: "n.", chinese: "高等教育" }
    ],
    sentence_pattern: {
      pattern: "N + gives + O + an opportunity to + V",
      example: "This job gives me an opportunity to learn."
    }
  },
  {
    phrase: "give a performance",
    type: "動詞 + 名詞",
    chinese: "進行表演",
    keywords: ["give", "performance"],
    example: {
      english: "The famous band will give a live performance at the stadium tonight.",
      chinese: "這個著名的樂團今晚將在體育場進行現場表演。",
      grammar_point: "give a performance（進行表演，常搭配 at/in 接地點）"
    },
    vocabulary: [
      { word: "famous", pos: "adj.", chinese: "著名的" },
      { word: "live", pos: "adj.", chinese: "現場的" },
      { word: "stadium", pos: "n.", chinese: "體育場" }
    ],
    sentence_pattern: {
      pattern: "S + give a performance at + N",
      example: "The actors gave a wonderful performance."
    }
  },
  {
    phrase: "give permission",
    type: "動詞 + 名詞",
    chinese: "給予許可、准許",
    keywords: ["give", "permission"],
    example: {
      english: "The teacher gave the students permission to leave the classroom early.",
      chinese: "老師准許學生們提早離開教室。",
      grammar_point: "give + O + permission to + V（准許某人做...）"
    },
    vocabulary: [
      { word: "permission", pos: "n.", chinese: "許可、允許" },
      { word: "leave", pos: "v.", chinese: "離開" },
      { word: "classroom", pos: "n.", chinese: "教室" }
    ],
    sentence_pattern: {
      pattern: "S + give + O + permission to + V",
      example: "My parents gave me permission to go."
    }
  },
  {
    phrase: "give preference",
    type: "動詞 + 名詞",
    chinese: "優先考慮、偏愛",
    keywords: ["give", "preference"],
    example: {
      english: "The company gives preference to applicants with relevant work experience.",
      chinese: "這家公司優先考慮具有相關工作經驗的申請人。",
      grammar_point: "give preference to + N（優先考慮...）"
    },
    vocabulary: [
      { word: "applicant", pos: "n.", chinese: "申請人" },
      { word: "relevant", pos: "adj.", chinese: "相關的" },
      { word: "experience", pos: "n.", chinese: "經驗" }
    ],
    sentence_pattern: {
      pattern: "S + give preference to + N",
      example: "They give preference to local candidates."
    }
  },
  {
    phrase: "give priority",
    type: "動詞 + 名詞",
    chinese: "給予優先權",
    keywords: ["give", "priority"],
    example: {
      english: "The government must give priority to protecting the environment over economic development.",
      chinese: "政府必須將環境保護的優先權置於經濟發展之上。",
      grammar_point: "give priority to N/V-ing over N/V-ing（將...優先於...）"
    },
    vocabulary: [
      { word: "government", pos: "n.", chinese: "政府" },
      { word: "priority", pos: "n.", chinese: "優先權" },
      { word: "development", pos: "n.", chinese: "發展" }
    ],
    sentence_pattern: {
      pattern: "S + give priority to + N",
      example: "Safety should be given priority."
    }
  },
  {
    phrase: "give a reply / an answer",
    type: "動詞 + 名詞",
    chinese: "給予答覆",
    keywords: ["give", "reply", "answer"],
    example: {
      english: "Please give me a reply as soon as possible so I can finalize the schedule.",
      chinese: "請盡快給我一個答覆，以便我能定案行程表。",
      grammar_point: "as soon as possible (盡快)"
    },
    vocabulary: [
      { word: "reply", pos: "n.", chinese: "答覆" },
      { word: "finalize", pos: "v.", chinese: "定案、最後確定" },
      { word: "schedule", pos: "n.", chinese: "行程表" }
    ],
    sentence_pattern: {
      pattern: "Please give me a reply by + 時間",
      example: "He refused to give an answer."
    }
  },
  {
    phrase: "give rise to",
    type: "動詞片語",
    chinese: "引起、導致",
    keywords: ["give", "rise"],
    example: {
      english: "The unfair policy gave rise to widespread protests across the country.",
      chinese: "這項不公平的政策引起了全國各地廣泛的抗議。",
      grammar_point: "give rise to + N（導致、引起，同義 lead to, bring about）"
    },
    vocabulary: [
      { word: "unfair", pos: "adj.", chinese: "不公平的" },
      { word: "widespread", pos: "adj.", chinese: "廣泛的" },
      { word: "protest", pos: "n.", chinese: "抗議" }
    ],
    sentence_pattern: {
      pattern: "S + gave rise to + N",
      example: "The new rules gave rise to confusion."
    }
  },
  {
    phrase: "give a talk / a speech / a lecture",
    type: "動詞 + 名詞",
    chinese: "發表演講、演說",
    keywords: ["give", "talk", "speech", "lecture"],
    example: {
      english: "The professor was invited to give a speech on global warming at the international conference.",
      chinese: "這位教授受邀在國際會議上發表關於全球暖化的演說。",
      grammar_point: "invite + O + to V（邀請某人做...）"
    },
    vocabulary: [
      { word: "professor", pos: "n.", chinese: "教授" },
      { word: "global warming", pos: "n.", chinese: "全球暖化" },
      { word: "conference", pos: "n.", chinese: "會議" }
    ],
    sentence_pattern: {
      pattern: "S + give a speech on + 題目",
      example: "The president gave a speech on TV."
    }
  },
  // ── take (進階與日常擴充) ────────────────────────────────────────────────
  {
    phrase: "take a bow",
    type: "動詞片語",
    chinese: "鞠躬答謝",
    keywords: ["take", "bow"],
    example: {
      english: "The actors returned to the stage to take a bow after the successful performance.",
      chinese: "演員們在成功的演出後回到舞台上鞠躬答謝。",
      grammar_point: "to + V 原形（不定詞表目的）"
    },
    vocabulary: [
      { word: "actor", pos: "n.", chinese: "演員" },
      { word: "return", pos: "v.", chinese: "返回" },
      { word: "performance", pos: "n.", chinese: "表演" }
    ],
    sentence_pattern: {
      pattern: "S + return to the stage to take a bow",
      example: "The singer took a bow as the audience clapped."
    }
  },
  {
    phrase: "take a blow / a beating",
    type: "動詞 + 名詞",
    chinese: "受到打擊 / 遭受重創",
    keywords: ["take", "blow", "beating"],
    example: {
      english: "The local tourism industry took a severe blow during the global pandemic.",
      chinese: "當地旅遊業在全球疫情期間遭受了嚴重的打擊。",
      grammar_point: "take a blow（受到打擊，常用於經濟或心理）"
    },
    vocabulary: [
      { word: "tourism", pos: "n.", chinese: "旅遊業" },
      { word: "severe", pos: "adj.", chinese: "嚴重的" },
      { word: "pandemic", pos: "n.", chinese: "大流行病" }
    ],
    sentence_pattern: {
      pattern: "S + took a severe blow + 時間/原因",
      example: "His confidence took a beating after the failure."
    }
  },
  {
    phrase: "take a break / a holiday",
    type: "動詞 + 名詞",
    chinese: "休息 / 去渡假",
    keywords: ["take", "break", "holiday"],
    example: {
      english: "You have been studying for three hours; it's time to take a short break.",
      chinese: "你已經讀了三個小時的書；是時候短暫休息一下了。",
      grammar_point: "it's time to + V（是時候做...）"
    },
    vocabulary: [
      { word: "study", pos: "v.", chinese: "讀書、學習" },
      { word: "short", pos: "adj.", chinese: "短暫的" },
      { word: "break", pos: "n.", chinese: "休息" }
    ],
    sentence_pattern: {
      pattern: "S + need to take a break/holiday",
      example: "We are planning to take a holiday in Japan."
    }
  },
  {
    phrase: "take a phone call",
    type: "動詞 + 名詞",
    chinese: "接電話",
    keywords: ["take", "phone", "call"],
    example: {
      english: "Please excuse me for a moment; I need to take an urgent phone call.",
      chinese: "請原諒我離開一下；我需要接一通緊急的電話。",
      grammar_point: "excuse me for a moment（請容我離開片刻）"
    },
    vocabulary: [
      { word: "excuse", pos: "v.", chinese: "原諒、寬恕" },
      { word: "moment", pos: "n.", chinese: "片刻" },
      { word: "urgent", pos: "adj.", chinese: "緊急的" }
    ],
    sentence_pattern: {
      pattern: "S + need to take a phone call",
      example: "He stepped outside to take a call."
    }
  },
  {
    phrase: "take drugs",
    type: "動詞 + 名詞",
    chinese: "吸毒、服藥",
    keywords: ["take", "drugs", "drug"],
    example: {
      english: "Teenagers should be educated about the terrible consequences of taking illegal drugs.",
      chinese: "青少年應該被教導關於吸食非法毒品的可怕後果。",
      grammar_point: "consequences of + V-ing（做某事的後果）"
    },
    vocabulary: [
      { word: "educate", pos: "v.", chinese: "教育" },
      { word: "consequence", pos: "n.", chinese: "後果" },
      { word: "illegal", pos: "adj.", chinese: "非法的" }
    ],
    sentence_pattern: {
      pattern: "S + warn O + against taking drugs",
      example: "Taking drugs will ruin your health and life."
    }
  },
  {
    phrase: "take exercise",
    type: "動詞 + 名詞",
    chinese: "做運動",
    keywords: ["take", "exercise"],
    example: {
      english: "It is generally advised to take regular exercise to maintain your physical health.",
      chinese: "普遍建議要規律運動以維持你的身體健康。",
      grammar_point: "It is advised to + V（被建議要...）"
    },
    vocabulary: [
      { word: "generally", pos: "adv.", chinese: "普遍地、一般地" },
      { word: "advise", pos: "v.", chinese: "建議" },
      { word: "physical", pos: "adj.", chinese: "身體的" }
    ],
    sentence_pattern: {
      pattern: "S + should take regular exercise",
      example: "Taking exercise helps reduce stress."
    }
  },
  {
    phrase: "take exception to",
    type: "動詞片語",
    chinese: "對...感到反感、反對",
    keywords: ["take", "exception"],
    example: {
      english: "I take strong exception to your unfair comments about my hardworking team.",
      chinese: "我對你針對我勤奮團隊的不公平評論感到強烈反感。",
      grammar_point: "take exception to + N（to為介系詞，後接名詞或V-ing）"
    },
    vocabulary: [
      { word: "strong", pos: "adj.", chinese: "強烈的" },
      { word: "unfair", pos: "adj.", chinese: "不公平的" },
      { word: "comment", pos: "n.", chinese: "評論" }
    ],
    sentence_pattern: {
      pattern: "S + take exception to + N",
      example: "Many people took exception to the controversial policy."
    }
  },
  {
    phrase: "take a hint / a joke",
    type: "動詞 + 名詞",
    chinese: "懂暗示 / 開得起玩笑",
    keywords: ["take", "hint", "joke"],
    example: {
      english: "He couldn't take a joke and got really angry when we teased him about his haircut.",
      chinese: "他開不起玩笑，當我們取笑他的髮型時他非常生氣。",
      grammar_point: "get + adj（變得...，連綴動詞用法）"
    },
    vocabulary: [
      { word: "angry", pos: "adj.", chinese: "生氣的" },
      { word: "tease", pos: "v.", chinese: "取笑、戲弄" },
      { word: "haircut", pos: "n.", chinese: "髮型、理髮" }
    ],
    sentence_pattern: {
      pattern: "S + cannot take a joke/hint",
      example: "She didn't take the hint and stayed for another hour."
    }
  },
  {
    phrase: "take effect",
    type: "動詞 + 名詞",
    chinese: "生效、起作用",
    keywords: ["take", "effect"],
    example: {
      english: "The new traffic regulations will take effect at the beginning of next month.",
      chinese: "新的交通法規將於下個月初生效。",
      grammar_point: "take effect（為主動語態，不加被動）"
    },
    vocabulary: [
      { word: "traffic", pos: "n.", chinese: "交通" },
      { word: "regulation", pos: "n.", chinese: "法規、規定" },
      { word: "beginning", pos: "n.", chinese: "開始" }
    ],
    sentence_pattern: {
      pattern: "The rule/law + will take effect + 時間",
      example: "The painkiller took effect quickly."
    }
  },
  {
    phrase: "take a look at",
    type: "動詞片語",
    chinese: "看一看、檢查",
    keywords: ["take", "look"],
    example: {
      english: "Could you take a look at my essay and check for any grammar mistakes?",
      chinese: "你能看一下我的作文並檢查是否有任何文法錯誤嗎？",
      grammar_point: "Could you + V 原形（客氣請求）"
    },
    vocabulary: [
      { word: "essay", pos: "n.", chinese: "論文、作文" },
      { word: "check", pos: "v.", chinese: "檢查" },
      { word: "mistake", pos: "n.", chinese: "錯誤" }
    ],
    sentence_pattern: {
      pattern: "Please take a look at + N",
      example: "The mechanic took a look at my car."
    }
  },
  {
    phrase: "take medicine",
    type: "動詞 + 名詞",
    chinese: "吃藥",
    keywords: ["take", "medicine"],
    example: {
      english: "The doctor told me to take this medicine three times a day after meals.",
      chinese: "醫生告訴我這種藥一天吃三次，飯後服用。",
      grammar_point: "tell + O + to V（告訴某人去做...）"
    },
    vocabulary: [
      { word: "doctor", pos: "n.", chinese: "醫生" },
      { word: "three times", pos: "phr.", chinese: "三次" },
      { word: "meal", pos: "n.", chinese: "餐" }
    ],
    sentence_pattern: {
      pattern: "S + need to take medicine",
      example: "Don't forget to take your medicine."
    }
  },
  {
    phrase: "take a message / notes",
    type: "動詞 + 名詞",
    chinese: "記下留言 / 做筆記",
    keywords: ["take", "message", "notes"],
    example: {
      english: "Students are encouraged to take detailed notes during the lecture to remember key points.",
      chinese: "鼓勵學生在講課期間做詳細的筆記以記住重點。",
      grammar_point: "be encouraged to + V（被鼓勵去...）"
    },
    vocabulary: [
      { word: "detailed", pos: "adj.", chinese: "詳細的" },
      { word: "lecture", pos: "n.", chinese: "講課、演講" },
      { word: "key point", pos: "n.", chinese: "重點" }
    ],
    sentence_pattern: {
      pattern: "S + take notes during + N",
      example: "He wasn't there, so I took a message for him."
    }
  },
  {
    phrase: "take a photo / picture",
    type: "動詞 + 名詞",
    chinese: "拍照",
    keywords: ["take", "photo", "picture"],
    example: {
      english: "Tourists love to take pictures of the beautiful sunset at the beach.",
      chinese: "遊客喜歡在海灘拍攝美麗的夕陽。",
      grammar_point: "take pictures of + N（拍...的照片）"
    },
    vocabulary: [
      { word: "tourist", pos: "n.", chinese: "遊客" },
      { word: "beautiful", pos: "adj.", chinese: "美麗的" },
      { word: "sunset", pos: "n.", chinese: "夕陽、日落" }
    ],
    sentence_pattern: {
      pattern: "S + take a photo of + N",
      example: "Can you take a picture for us?"
    }
  },
  {
    phrase: "take place",
    type: "動詞片語",
    chinese: "發生、舉行",
    keywords: ["take", "place"],
    example: {
      english: "The international film festival will take place in Taipei next year.",
      chinese: "國際電影節明年將在台北舉行。",
      grammar_point: "take place 等同於 happen / hold，沒有被動語態！"
    },
    vocabulary: [
      { word: "international", pos: "adj.", chinese: "國際的" },
      { word: "film", pos: "n.", chinese: "電影" },
      { word: "festival", pos: "n.", chinese: "節慶" }
    ],
    sentence_pattern: {
      pattern: "The event + takes place + 地方/時間",
      example: "The meeting took place yesterday."
    }
  },
  {
    phrase: "take a risk",
    type: "動詞 + 名詞",
    chinese: "冒險",
    keywords: ["take", "risk"],
    example: {
      english: "Starting your own business means you have to be willing to take a risk.",
      chinese: "創業意味著你必須願意冒險。",
      grammar_point: "be willing to + V（願意做...）"
    },
    vocabulary: [
      { word: "business", pos: "n.", chinese: "事業、生意" },
      { word: "mean", pos: "v.", chinese: "意味著" },
      { word: "willing", pos: "adj.", chinese: "願意的" }
    ],
    sentence_pattern: {
      pattern: "S + be willing to take a risk",
      example: "Sometimes you need to take risks to succeed."
    }
  },
  {
    phrase: "take a seat",
    type: "動詞 + 名詞",
    chinese: "就座、坐下",
    keywords: ["take", "seat"],
    example: {
      english: "Please take a seat in the waiting room, and the doctor will be with you shortly.",
      chinese: "請在候診室就座，醫生馬上就來為您看診。",
      grammar_point: "祈使句（Please + V 原形）"
    },
    vocabulary: [
      { word: "waiting room", pos: "n.", chinese: "候診室、等候室" },
      { word: "shortly", pos: "adv.", chinese: "不久、馬上" }
    ],
    sentence_pattern: {
      pattern: "Please take a seat.",
      example: "Everyone took their seats before the show started."
    }
  },
  {
    phrase: "take a taxi / train / bus",
    type: "動詞 + 名詞",
    chinese: "搭計程車 / 火車 / 公車",
    keywords: ["take", "taxi", "train", "bus"],
    example: {
      english: "Because it was pouring rain, we decided to take a taxi home instead of walking.",
      chinese: "因為傾盆大雨，我們決定搭計程車回家而不是走路。",
      grammar_point: "instead of + V-ing（而不是...）"
    },
    vocabulary: [
      { word: "pour", pos: "v.", chinese: "傾盆而降" },
      { word: "decide", pos: "v.", chinese: "決定" },
      { word: "instead of", pos: "prep.", chinese: "而不是" }
    ],
    sentence_pattern: {
      pattern: "S + take a taxi to + 地方",
      example: "I usually take the train to work."
    }
  },
  {
    phrase: "take a test / course / exam",
    type: "動詞 + 名詞",
    chinese: "參加考試 / 修課",
    keywords: ["take", "test", "course", "exam"],
    example: {
      english: "Every freshman is required to take a basic English course before graduation.",
      chinese: "每位大一新生都被要求在畢業前修一門基礎英文課。",
      grammar_point: "be required to + V（被要求去...）"
    },
    vocabulary: [
      { word: "freshman", pos: "n.", chinese: "大一新生" },
      { word: "require", pos: "v.", chinese: "要求" },
      { word: "graduation", pos: "n.", chinese: "畢業" }
    ],
    sentence_pattern: {
      pattern: "S + take an exam/course",
      example: "She took a driving test last week."
    }
  },
  {
    phrase: "take somebody's temperature",
    type: "動詞 + 名詞",
    chinese: "量體溫",
    keywords: ["take", "temperature"],
    example: {
      english: "The school nurse took the sick boy's temperature and found he had a high fever.",
      chinese: "學校護士量了生病男孩的體溫，發現他發高燒。",
      grammar_point: "find (that) + 子句（發現...）"
    },
    vocabulary: [
      { word: "nurse", pos: "n.", chinese: "護士" },
      { word: "sick", pos: "adj.", chinese: "生病的" },
      { word: "fever", pos: "n.", chinese: "發燒" }
    ],
    sentence_pattern: {
      pattern: "S + take one's temperature",
      example: "The doctor will take your temperature first."
    }
  },
  {
    phrase: "take a walk / a step",
    type: "動詞 + 名詞",
    chinese: "散步 / 採取步驟 (或走一步)",
    keywords: ["take", "walk", "step"],
    example: {
      english: "After dinner, my grandparents usually take a walk in the park to digest their food.",
      chinese: "晚餐後，我的祖父母通常在公園散步以幫助消化。",
      grammar_point: "to + V（不定詞表目的：為了...）"
    },
    vocabulary: [
      { word: "usually", pos: "adv.", chinese: "通常" },
      { word: "park", pos: "n.", chinese: "公園" },
      { word: "digest", pos: "v.", chinese: "消化" }
    ],
    sentence_pattern: {
      pattern: "S + take a walk + 地方",
      example: "We must take a step forward to solve this."
    }
  },// ── Adjective + Noun (形容詞+名詞 高頻搭配) ──────────────────────────────────
  {
    phrase: "absolute beginner",
    type: "形容詞 + 名詞",
    chinese: "完全的新手",
    keywords: ["absolute", "beginner"],
    example: {
      english: "This swimming course is specifically designed for absolute beginners.",
      chinese: "這門游泳課程是專為完全的新手設計的。",
      grammar_point: "be designed for + N（專為...而設計）"
    },
    vocabulary: [
      { word: "absolute", pos: "adj.", chinese: "完全的、絕對的" },
      { word: "beginner", pos: "n.", chinese: "初學者" },
      { word: "specifically", pos: "adv.", chinese: "特別地、專門地" }
    ],
    sentence_pattern: {
      pattern: "S + be designed for absolute beginners",
      example: "Even an absolute beginner can learn to use this app."
    }
  },
  {
    phrase: "alphabetical order",
    type: "形容詞 + 名詞",
    chinese: "字母順序",
    keywords: ["alphabetical", "order"],
    example: {
      english: "Please arrange the files in alphabetical order so they are easier to find.",
      chinese: "請將檔案按字母順序排列，這樣比較容易找到。",
      grammar_point: "in alphabetical order（以字母順序）"
    },
    vocabulary: [
      { word: "arrange", pos: "v.", chinese: "安排、排列" },
      { word: "alphabetical", pos: "adj.", chinese: "按字母順序的" },
      { word: "order", pos: "n.", chinese: "順序、秩序" }
    ],
    sentence_pattern: {
      pattern: "arrange/list N + in alphabetical order",
      example: "The names are listed in alphabetical order."
    }
  },
  {
    phrase: "balanced diet",
    type: "形容詞 + 名詞",
    chinese: "均衡飲食",
    keywords: ["balanced", "diet"],
    example: {
      english: "Eating a balanced diet is essential for maintaining good physical health.",
      chinese: "保持均衡的飲食對於維持良好的身體健康是不可或缺的。",
      grammar_point: "V-ing 作主詞（動名詞片語）"
    },
    vocabulary: [
      { word: "balanced", pos: "adj.", chinese: "均衡的" },
      { word: "diet", pos: "n.", chinese: "飲食" },
      { word: "essential", pos: "adj.", chinese: "不可或缺的" }
    ],
    sentence_pattern: {
      pattern: "S + eat/have a balanced diet",
      example: "A balanced diet provides necessary nutrients."
    }
  },
  {
    phrase: "bare essentials",
    type: "形容詞 + 名詞",
    chinese: "最基本的生活必需品",
    keywords: ["bare", "essentials"],
    example: {
      english: "When backpacking, you should only pack the bare essentials to keep your bag light.",
      chinese: "當背包客旅行時，你應該只打包最基本的必需品以減輕背包重量。",
      grammar_point: "the bare essentials（固定用法，常為複數）"
    },
    vocabulary: [
      { word: "backpacking", pos: "n.", chinese: "背包旅行" },
      { word: "bare", pos: "adj.", chinese: "僅僅的、光禿的" },
      { word: "essential", pos: "n.", chinese: "必需品" }
    ],
    sentence_pattern: {
      pattern: "pack/take only the bare essentials",
      example: "The refugee camp lacked even the bare essentials."
    }
  },
  {
    phrase: "big disappointment",
    type: "形容詞 + 名詞",
    chinese: "巨大的失望、令人大失所望的事",
    keywords: ["big", "disappointment"],
    example: {
      english: "The new superhero movie turned out to be a big disappointment to its fans.",
      chinese: "這部新的超級英雄電影對粉絲來說結果是個巨大的失望。",
      grammar_point: "turn out to be + N（結果卻是...）"
    },
    vocabulary: [
      { word: "turn out", pos: "phr. v.", chinese: "結果是" },
      { word: "disappointment", pos: "n.", chinese: "失望" },
      { word: "fan", pos: "n.", chinese: "粉絲" }
    ],
    sentence_pattern: {
      pattern: "N + turned out to be a big disappointment",
      example: "Losing the game was a big disappointment."
    }
  },
  {
    phrase: "big mistake",
    type: "形容詞 + 名詞",
    chinese: "大錯",
    keywords: ["big", "mistake"],
    example: {
      english: "It would be a big mistake to ignore the doctor's advice regarding your health.",
      chinese: "忽視醫生關於你健康的建議將會是個大錯。",
      grammar_point: "It is a big mistake to + V（做某事是個大錯，It為虛主詞）"
    },
    vocabulary: [
      { word: "ignore", pos: "v.", chinese: "忽視" },
      { word: "advice", pos: "n.", chinese: "建議" },
      { word: "regarding", pos: "prep.", chinese: "關於" }
    ],
    sentence_pattern: {
      pattern: "It would be a big mistake to + V",
      example: "Making that investment was a big mistake."
    }
  },
  {
    phrase: "blatant lie",
    type: "形容詞 + 名詞",
    chinese: "公然的謊言、漫天大謊",
    keywords: ["blatant", "lie"],
    example: {
      english: "Everyone knew he was telling a blatant lie, but nobody dared to expose him.",
      chinese: "每個人都知道他在說漫天大謊，但沒有人敢揭穿他。",
      grammar_point: "tell a blatant lie（說公然的謊言）"
    },
    vocabulary: [
      { word: "blatant", pos: "adj.", chinese: "公然的、明目張膽的" },
      { word: "dare", pos: "v.", chinese: "膽敢" },
      { word: "expose", pos: "v.", chinese: "揭露、暴露" }
    ],
    sentence_pattern: {
      pattern: "S + tell a blatant lie",
      example: "Her excuse was nothing but a blatant lie."
    }
  },
  {
    phrase: "broken home",
    type: "形容詞 + 名詞",
    chinese: "破碎的家庭",
    keywords: ["broken", "home"],
    example: {
      english: "Children from broken homes often need extra emotional support from teachers.",
      chinese: "來自破碎家庭的兒童通常需要老師額外的情感支持。",
      grammar_point: "come from a broken home（來自破碎的家庭）"
    },
    vocabulary: [
      { word: "broken", pos: "adj.", chinese: "破碎的" },
      { word: "extra", pos: "adj.", chinese: "額外的" },
      { word: "emotional", pos: "adj.", chinese: "情感的" }
    ],
    sentence_pattern: {
      pattern: "S + come from a broken home",
      example: "He grew up in a broken home."
    }
  },
  {
    phrase: "captivating smile",
    type: "形容詞 + 名詞",
    chinese: "迷人的微笑",
    keywords: ["captivating", "smile"],
    example: {
      english: "The actress won the hearts of the audience with her captivating smile.",
      chinese: "這位女演員以她迷人的微笑贏得了觀眾的心。",
      grammar_point: "with + N（以...方式/工具）"
    },
    vocabulary: [
      { word: "actress", pos: "n.", chinese: "女演員" },
      { word: "audience", pos: "n.", chinese: "觀眾" },
      { word: "captivating", pos: "adj.", chinese: "迷人的、具吸引力的" }
    ],
    sentence_pattern: {
      pattern: "S + charm O + with a captivating smile",
      example: "She welcomed us with a captivating smile."
    }
  },
  {
    phrase: "chilly reception",
    type: "形容詞 + 名詞",
    chinese: "冷淡的接待、冷淡的反應",
    keywords: ["chilly", "reception"],
    example: {
      english: "The politician's controversial proposal met with a chilly reception from the public.",
      chinese: "這位政治人物具爭議的提案受到了大眾冷淡的反應。",
      grammar_point: "meet with a chilly reception（遭到冷淡對待）"
    },
    vocabulary: [
      { word: "controversial", pos: "adj.", chinese: "具爭議的" },
      { word: "proposal", pos: "n.", chinese: "提案" },
      { word: "reception", pos: "n.", chinese: "接待、反應" }
    ],
    sentence_pattern: {
      pattern: "S + met with a chilly reception",
      example: "His joke got a chilly reception."
    }
  },
  {
    phrase: "clear message",
    type: "形容詞 + 名詞",
    chinese: "明確的訊息",
    keywords: ["clear", "message"],
    example: {
      english: "The new law sends a clear message that drunk driving will not be tolerated.",
      chinese: "這項新法律傳達了一個明確的訊息：酒駕將不被容忍。",
      grammar_point: "send a clear message that + 子句（傳達明確訊息）"
    },
    vocabulary: [
      { word: "drunk driving", pos: "n.", chinese: "酒駕" },
      { word: "tolerate", pos: "v.", chinese: "容忍" },
      { word: "message", pos: "n.", chinese: "訊息" }
    ],
    sentence_pattern: {
      pattern: "S + send a clear message to O",
      example: "We must give a clear message to the team."
    }
  },
  {
    phrase: "clear understanding",
    type: "形容詞 + 名詞",
    chinese: "清楚的理解",
    keywords: ["clear", "understanding"],
    example: {
      english: "Before signing the contract, make sure you have a clear understanding of the terms.",
      chinese: "在簽合約之前，請確保你對條款有清楚的理解。",
      grammar_point: "have a clear understanding of + N（對...有清楚的理解）"
    },
    vocabulary: [
      { word: "contract", pos: "n.", chinese: "合約" },
      { word: "make sure", pos: "phr.", chinese: "確保" },
      { word: "term", pos: "n.", chinese: "條款、術語" }
    ],
    sentence_pattern: {
      pattern: "S + have a clear understanding of + N",
      example: "We need a clear understanding of the rules."
    }
  },
  {
    phrase: "close friend",
    type: "形容詞 + 名詞",
    chinese: "親密的朋友",
    keywords: ["close", "friend"],
    example: {
      english: "I usually share my deepest secrets only with my close friends.",
      chinese: "我通常只會和我親密的朋友分享我最深的秘密。",
      grammar_point: "share N with + 人（與...分享...）"
    },
    vocabulary: [
      { word: "share", pos: "v.", chinese: "分享" },
      { word: "deepest", pos: "adj.", chinese: "最深的" },
      { word: "secret", pos: "n.", chinese: "秘密" }
    ],
    sentence_pattern: {
      pattern: "S + be a close friend of mine",
      example: "We have been close friends for ten years."
    }
  },
  {
    phrase: "common knowledge",
    type: "形容詞 + 名詞",
    chinese: "常識、眾所周知的事",
    keywords: ["common", "knowledge"],
    example: {
      english: "It is common knowledge that water boils at 100 degrees Celsius.",
      chinese: "水在攝氏100度沸騰是眾所周知的事。",
      grammar_point: "It is common knowledge that + 子句（...是常識）"
    },
    vocabulary: [
      { word: "common", pos: "adj.", chinese: "普遍的、共同的" },
      { word: "boil", pos: "v.", chinese: "沸騰" },
      { word: "Celsius", pos: "n.", chinese: "攝氏" }
    ],
    sentence_pattern: {
      pattern: "It is common knowledge that + S + V",
      example: "The company's financial trouble is common knowledge."
    }
  },
  {
    phrase: "complete agreement",
    type: "形容詞 + 名詞",
    chinese: "完全同意",
    keywords: ["complete", "agreement"],
    example: {
      english: "After hours of debate, the two sides finally reached a complete agreement.",
      chinese: "經過數小時的辯論，雙方終於達成了完全的協議。",
      grammar_point: "reach a complete agreement（達成完全的協議）"
    },
    vocabulary: [
      { word: "debate", pos: "n.", chinese: "辯論" },
      { word: "reach", pos: "v.", chinese: "達成" },
      { word: "agreement", pos: "n.", chinese: "同意、協議" }
    ],
    sentence_pattern: {
      pattern: "S + be in complete agreement on + N",
      example: "I am in complete agreement with you."
    }
  },
  {
    phrase: "deep breath",
    type: "形容詞 + 名詞",
    chinese: "深呼吸",
    keywords: ["deep", "breath"],
    example: {
      english: "Take a deep breath and try to calm down before stepping onto the stage.",
      chinese: "在上台之前，深呼吸並試著冷靜下來。",
      grammar_point: "take a deep breath（深呼吸）"
    },
    vocabulary: [
      { word: "breath", pos: "n.", chinese: "呼吸" },
      { word: "calm down", pos: "phr. v.", chinese: "冷靜下來" },
      { word: "stage", pos: "n.", chinese: "舞台" }
    ],
    sentence_pattern: {
      pattern: "Take a deep breath and + V",
      example: "She took a deep breath to steady her nerves."
    }
  },
  {
    phrase: "deciding factor",
    type: "形容詞 + 名詞",
    chinese: "決定性因素",
    keywords: ["deciding", "factor"],
    example: {
      english: "The low price was the deciding factor when we chose to buy this car.",
      chinese: "當我們選擇買這輛車時，低廉的價格是決定性因素。",
      grammar_point: "the deciding factor in/when + V-ing/子句"
    },
    vocabulary: [
      { word: "deciding", pos: "adj.", chinese: "決定性的" },
      { word: "factor", pos: "n.", chinese: "因素" },
      { word: "chose", pos: "v.", chinese: "選擇(choose的過去式)" }
    ],
    sentence_pattern: {
      pattern: "N + is the deciding factor in + N",
      example: "Weather will be the deciding factor for our trip."
    }
  },
  {
    phrase: "enormous influence",
    type: "形容詞 + 名詞",
    chinese: "巨大的影響",
    keywords: ["enormous", "influence"],
    example: {
      english: "The Internet has an enormous influence on how teenagers view the world.",
      chinese: "網際網路對青少年如何看待世界有著巨大的影響。",
      grammar_point: "have an enormous influence on + N/子句（對...有巨大影響）"
    },
    vocabulary: [
      { word: "enormous", pos: "adj.", chinese: "巨大的、龐大的" },
      { word: "influence", pos: "n.", chinese: "影響" },
      { word: "view", pos: "v.", chinese: "看待、視為" }
    ],
    sentence_pattern: {
      pattern: "S + have an enormous influence on + N",
      example: "Parents have an enormous influence on their kids."
    }
  },
  {
    phrase: "express purpose",
    type: "形容詞 + 名詞",
    chinese: "明確的目的、特意的目的",
    keywords: ["express", "purpose"],
    example: {
      english: "He traveled to Paris for the express purpose of learning authentic French baking.",
      chinese: "他去巴黎旅行的明確目的就是為了學習道地的法式烘焙。",
      grammar_point: "for the express purpose of + V-ing（特意為了...的目的）"
    },
    vocabulary: [
      { word: "express", pos: "adj.", chinese: "明確的、特意的" },
      { word: "authentic", pos: "adj.", chinese: "道地的、真實的" },
      { word: "baking", pos: "n.", chinese: "烘焙" }
    ],
    sentence_pattern: {
      pattern: "S + V + for the express purpose of + V-ing",
      example: "She came here for the express purpose of seeing you."
    }
  },
  {
    phrase: "fair deal",
    type: "形容詞 + 名詞",
    chinese: "公平的交易、公平的待遇",
    keywords: ["fair", "deal"],
    example: {
      english: "The union negotiated with the company to ensure all workers got a fair deal.",
      chinese: "工會與公司進行談判，以確保所有工人都能獲得公平的待遇。",
      grammar_point: "get a fair deal（獲得公平的待遇/交易）"
    },
    vocabulary: [
      { word: "union", pos: "n.", chinese: "工會" },
      { word: "negotiate", pos: "v.", chinese: "談判、協商" },
      { word: "ensure", pos: "v.", chinese: "確保" }
    ],
    sentence_pattern: {
      pattern: "S + demand/get a fair deal",
      example: "I don't think I'm getting a fair deal here."
    }
  },
  {
    phrase: "great pride",
    type: "形容詞 + 名詞",
    chinese: "極大的驕傲、自豪",
    keywords: ["great", "pride"],
    example: {
      english: "The craftsman takes great pride in his handmade furniture.",
      chinese: "這位工匠對他手工製作的家具感到極度自豪。",
      grammar_point: "take great pride in + N（對...感到極度自豪）"
    },
    vocabulary: [
      { word: "craftsman", pos: "n.", chinese: "工匠" },
      { word: "pride", pos: "n.", chinese: "驕傲、自豪" },
      { word: "handmade", pos: "adj.", chinese: "手工的" }
    ],
    sentence_pattern: {
      pattern: "S + take great pride in + N",
      example: "She feels great pride in her son's success."
    }
  },
  {
    phrase: "heavy traffic",
    type: "形容詞 + 名詞",
    chinese: "交通擁擠",
    keywords: ["heavy", "traffic"],
    example: {
      english: "I missed the beginning of the movie because I was stuck in heavy traffic.",
      chinese: "我錯過了電影的開頭，因為我塞在擁擠的車陣中。",
      grammar_point: "be stuck in heavy traffic（塞車）"
    },
    vocabulary: [
      { word: "miss", pos: "v.", chinese: "錯過" },
      { word: "stuck", pos: "adj.", chinese: "卡住的、困住的" },
      { word: "traffic", pos: "n.", chinese: "交通（不可數名詞）" }
    ],
    sentence_pattern: {
      pattern: "S + be delayed due to heavy traffic",
      example: "Heavy traffic is common during rush hour."
    }
  },
  {
    phrase: "high quality",
    type: "形容詞 + 名詞",
    chinese: "高品質",
    keywords: ["high", "quality"],
    example: {
      english: "This brand is famous for producing high quality leather goods.",
      chinese: "這個品牌以生產高品質的皮具而聞名。",
      grammar_point: "high quality + N（高品質的...，可作複合形容詞）"
    },
    vocabulary: [
      { word: "brand", pos: "n.", chinese: "品牌" },
      { word: "produce", pos: "v.", chinese: "生產" },
      { word: "leather", pos: "n.", chinese: "皮革" }
    ],
    sentence_pattern: {
      pattern: "S + provide/produce high quality + N",
      example: "We demand high quality materials."
    }
  },
  {
    phrase: "immaculate condition",
    type: "形容詞 + 名詞",
    chinese: "完美無瑕的狀態",
    keywords: ["immaculate", "condition"],
    example: {
      english: "Even after twenty years, the antique car was still in immaculate condition.",
      chinese: "即使過了二十年，這輛古董車依然保持著完美無瑕的狀態。",
      grammar_point: "in immaculate condition（處於完美狀態）"
    },
    vocabulary: [
      { word: "immaculate", pos: "adj.", chinese: "潔淨的、完美無瑕的" },
      { word: "antique", pos: "adj.", chinese: "古董的" },
      { word: "condition", pos: "n.", chinese: "狀況、狀態" }
    ],
    sentence_pattern: {
      pattern: "S + be kept in immaculate condition",
      example: "The rented house was left in immaculate condition."
    }
  },
  {
    phrase: "innocent victim",
    type: "形容詞 + 名詞",
    chinese: "無辜的受害者",
    keywords: ["innocent", "victim"],
    example: {
      english: "Many innocent victims lost their lives during the sudden terrorist attack.",
      chinese: "許多無辜的受害者在突如其來的恐怖攻擊中喪生。",
      grammar_point: "innocent victims（常作複數形使用）"
    },
    vocabulary: [
      { word: "innocent", pos: "adj.", chinese: "無辜的、天真的" },
      { word: "victim", pos: "n.", chinese: "受害者" },
      { word: "terrorist", pos: "n.", chinese: "恐怖份子" }
    ],
    sentence_pattern: {
      pattern: "S + claimed the lives of innocent victims",
      example: "He was just an innocent victim of circumstances."
    }
  },
  {
    phrase: "instant coffee",
    type: "形容詞 + 名詞",
    chinese: "即溶咖啡",
    keywords: ["instant", "coffee"],
    example: {
      english: "When I am in a hurry in the morning, I just make a cup of instant coffee.",
      chinese: "當我早上趕時間的時候，我只會泡一杯即溶咖啡。",
      grammar_point: "instant 表示「立即的、即溶的」"
    },
    vocabulary: [
      { word: "instant", pos: "adj.", chinese: "立即的、即溶的" },
      { word: "in a hurry", pos: "phr.", chinese: "匆忙" }
    ],
    sentence_pattern: {
      pattern: "S + drink/make instant coffee",
      example: "Instant coffee is very convenient."
    }
  },
  {
    phrase: "key issue",
    type: "形容詞 + 名詞",
    chinese: "關鍵議題、核心問題",
    keywords: ["key", "issue"],
    example: {
      english: "Climate change is considered a key issue that affects global security.",
      chinese: "氣候變遷被認為是影響全球安全的關鍵議題。",
      grammar_point: "be considered + N（被認為是...）"
    },
    vocabulary: [
      { word: "climate", pos: "n.", chinese: "氣候" },
      { word: "issue", pos: "n.", chinese: "議題" },
      { word: "security", pos: "n.", chinese: "安全" }
    ],
    sentence_pattern: {
      pattern: "N + is a key issue in + N",
      example: "Education is a key issue in the election."
    }
  },
  {
    phrase: "logical conclusion",
    type: "形容詞 + 名詞",
    chinese: "合乎邏輯的結論",
    keywords: ["logical", "conclusion"],
    example: {
      english: "Based on all the evidence gathered, this seems to be the only logical conclusion.",
      chinese: "根據收集到的所有證據，這似乎是唯一合乎邏輯的結論。",
      grammar_point: "Based on + N（根據...）"
    },
    vocabulary: [
      { word: "logical", pos: "adj.", chinese: "合乎邏輯的" },
      { word: "conclusion", pos: "n.", chinese: "結論" },
      { word: "evidence", pos: "n.", chinese: "證據" }
    ],
    sentence_pattern: {
      pattern: "S + reach a logical conclusion",
      example: "We must draw a logical conclusion from the facts."
    }
  },
  {
    phrase: "major problem",
    type: "形容詞 + 名詞",
    chinese: "重大問題",
    keywords: ["major", "problem"],
    example: {
      english: "Air pollution has become a major problem in many developing countries.",
      chinese: "空氣污染已經成為許多開發中國家的重大問題。",
      grammar_point: "become a major problem（成為重大問題）"
    },
    vocabulary: [
      { word: "pollution", pos: "n.", chinese: "污染" },
      { word: "major", pos: "adj.", chinese: "重大的、主要的" },
      { word: "developing", pos: "adj.", chinese: "開發中的" }
    ],
    sentence_pattern: {
      pattern: "N + poses a major problem for + N",
      example: "Funding is a major problem for the project."
    }
  },
  {
    phrase: "mixed feelings",
    type: "形容詞 + 名詞",
    chinese: "百感交集、複雜的心情",
    keywords: ["mixed", "feelings"],
    example: {
      english: "I had mixed feelings when I graduated: happy to finish, but sad to leave my friends.",
      chinese: "我畢業時百感交集：很高興完成了學業，但也很難過要離開朋友。",
      grammar_point: "have mixed feelings about + N（對...感到心情複雜）"
    },
    vocabulary: [
      { word: "mixed", pos: "adj.", chinese: "混合的、錯綜複雜的" },
      { word: "graduate", pos: "v.", chinese: "畢業" }
    ],
    sentence_pattern: {
      pattern: "S + have mixed feelings about + N",
      example: "She has mixed feelings about the job offer."
    }
  },
  {
    phrase: "momentous decision",
    type: "形容詞 + 名詞",
    chinese: "重大的決定",
    keywords: ["momentous", "decision"],
    example: {
      english: "Choosing which university to attend is a momentous decision for a teenager.",
      chinese: "選擇就讀哪所大學對青少年來說是一個重大的決定。",
      grammar_point: "V-ing 動名詞片語作主詞"
    },
    vocabulary: [
      { word: "momentous", pos: "adj.", chinese: "重大的、關鍵的" },
      { word: "attend", pos: "v.", chinese: "參加、就讀" },
      { word: "decision", pos: "n.", chinese: "決定" }
    ],
    sentence_pattern: {
      pattern: "S + make a momentous decision",
      example: "Moving abroad was a momentous decision."
    }
  },
  {
    phrase: "nasty habit",
    type: "形容詞 + 名詞",
    chinese: "討厭的習慣、壞習慣",
    keywords: ["nasty", "habit"],
    example: {
      english: "Biting your fingernails when you are nervous is a nasty habit to break.",
      chinese: "緊張時咬指甲是一個很難改掉的壞習慣。",
      grammar_point: "a habit to break（要改掉的習慣）"
    },
    vocabulary: [
      { word: "nasty", pos: "adj.", chinese: "令人討厭的、糟糕的" },
      { word: "habit", pos: "n.", chinese: "習慣" },
      { word: "fingernail", pos: "n.", chinese: "指甲" }
    ],
    sentence_pattern: {
      pattern: "S + have a nasty habit of + V-ing",
      example: "He has a nasty habit of interrupting people."
    }
  },
  {
    phrase: "notable achievement",
    type: "形容詞 + 名詞",
    chinese: "顯著的成就",
    keywords: ["notable", "achievement"],
    example: {
      english: "Winning the gold medal in the Olympics is a notable achievement for any athlete.",
      chinese: "在奧運會上贏得金牌對任何運動員來說都是一項顯著的成就。",
      grammar_point: "V-ing 作主詞"
    },
    vocabulary: [
      { word: "notable", pos: "adj.", chinese: "顯著的、值得注意的" },
      { word: "medal", pos: "n.", chinese: "獎牌" },
      { word: "athlete", pos: "n.", chinese: "運動員" }
    ],
    sentence_pattern: {
      pattern: "N + is a notable achievement",
      example: "Publishing a book is a notable achievement."
    }
  },
  {
    phrase: "noticeable difference",
    type: "形容詞 + 名詞",
    chinese: "明顯的差異",
    keywords: ["noticeable", "difference"],
    example: {
      english: "There is a noticeable difference in temperature between the city and the mountains.",
      chinese: "城市和山區之間的溫度有明顯的差異。",
      grammar_point: "difference in N between A and B（A與B之間在某方面的差異）"
    },
    vocabulary: [
      { word: "noticeable", pos: "adj.", chinese: "顯而易見的、明顯的" },
      { word: "difference", pos: "n.", chinese: "差異" },
      { word: "temperature", pos: "n.", chinese: "溫度" }
    ],
    sentence_pattern: {
      pattern: "There is a noticeable difference between A and B",
      example: "The new software shows a noticeable difference in speed."
    }
  },
  {
    phrase: "outstanding performance",
    type: "形容詞 + 名詞",
    chinese: "傑出的表現",
    keywords: ["outstanding", "performance"],
    example: {
      english: "The actor received an award for his outstanding performance in the drama.",
      chinese: "這位演員因其在戲劇中的傑出表現而獲得了獎項。",
      grammar_point: "receive an award for + N（因...獲獎）"
    },
    vocabulary: [
      { word: "outstanding", pos: "adj.", chinese: "傑出的、出眾的" },
      { word: "award", pos: "n.", chinese: "獎項" },
      { word: "drama", pos: "n.", chinese: "戲劇" }
    ],
    sentence_pattern: {
      pattern: "S + give an outstanding performance",
      example: "Congratulations on your outstanding performance!"
    }
  },
  {
    phrase: "personal belongings",
    type: "形容詞 + 名詞",
    chinese: "個人物品",
    keywords: ["personal", "belongings"],
    example: {
      english: "Please make sure to take all your personal belongings with you when leaving the train.",
      chinese: "離開火車時，請確保帶走您所有的個人物品。",
      grammar_point: "belongings 恆用複數形"
    },
    vocabulary: [
      { word: "personal", pos: "adj.", chinese: "個人的" },
      { word: "belongings", pos: "n.", chinese: "所有物、財產" },
      { word: "leave", pos: "v.", chinese: "離開" }
    ],
    sentence_pattern: {
      pattern: "Keep an eye on your personal belongings.",
      example: "Do not leave your personal belongings unattended."
    }
  },
  {
    phrase: "prominent role",
    type: "形容詞 + 名詞",
    chinese: "突出的角色、重要的作用",
    keywords: ["prominent", "role"],
    example: {
      english: "Social media plays a prominent role in shaping teenagers' political views.",
      chinese: "社群媒體在塑造青少年的政治觀點上扮演著重要的角色。",
      grammar_point: "play a prominent role in + V-ing（在...扮演重要角色）"
    },
    vocabulary: [
      { word: "prominent", pos: "adj.", chinese: "突出的、顯著的" },
      { word: "shape", pos: "v.", chinese: "塑造" },
      { word: "political", pos: "adj.", chinese: "政治的" }
    ],
    sentence_pattern: {
      pattern: "N + plays a prominent role in + N",
      example: "Education plays a prominent role in society."
    }
  },
  {
    phrase: "public opinion",
    type: "形容詞 + 名詞",
    chinese: "公眾輿論、民意",
    keywords: ["public", "opinion"],
    example: {
      english: "The government changed its policy due to the strong pressure of public opinion.",
      chinese: "由於強大的民意壓力，政府改變了政策。",
      grammar_point: "due to + N（由於...）"
    },
    vocabulary: [
      { word: "opinion", pos: "n.", chinese: "意見、輿論" },
      { word: "policy", pos: "n.", chinese: "政策" },
      { word: "pressure", pos: "n.", chinese: "壓力" }
    ],
    sentence_pattern: {
      pattern: "S + be influenced by public opinion",
      example: "Public opinion is against the new law."
    }
  },
  {
    phrase: "rough estimate",
    type: "形容詞 + 名詞",
    chinese: "粗略的估計",
    keywords: ["rough", "estimate"],
    example: {
      english: "Can you give me a rough estimate of how much the repair will cost?",
      chinese: "你能給我一個修理費用大約多少的粗略估計嗎？",
      grammar_point: "a rough estimate of + 疑問詞子句（對...的粗略估計）"
    },
    vocabulary: [
      { word: "rough", pos: "adj.", chinese: "粗糙的、大約的" },
      { word: "estimate", pos: "n.", chinese: "估計" },
      { word: "repair", pos: "n.", chinese: "修理" }
    ],
    sentence_pattern: {
      pattern: "give a rough estimate of + N",
      example: "Here is a rough estimate of the timeline."
    }
  },
  {
    phrase: "speedy recovery",
    type: "形容詞 + 名詞",
    chinese: "早日康復、快速復原",
    keywords: ["speedy", "recovery"],
    example: {
      english: "All of your classmates signed this card to wish you a speedy recovery.",
      chinese: "你所有的同學都簽了這張卡片，祝你早日康復。",
      grammar_point: "wish + 人 + a speedy recovery（祝人早日康復）"
    },
    vocabulary: [
      { word: "speedy", pos: "adj.", chinese: "快速的" },
      { word: "recovery", pos: "n.", chinese: "恢復、康復" },
      { word: "sign", pos: "v.", chinese: "簽名" }
    ],
    sentence_pattern: {
      pattern: "Wish you a speedy recovery!",
      example: "He made a speedy recovery from the surgery."
    }
  },
  {
    phrase: "steady job",
    type: "形容詞 + 名詞",
    chinese: "穩定的工作",
    keywords: ["steady", "job"],
    example: {
      english: "After years of freelancing, he finally found a steady job with a regular income.",
      chinese: "經過多年的接案生活，他終於找到了一份有固定收入的穩定工作。",
      grammar_point: "a steady job with + N（附帶有...的穩定工作）"
    },
    vocabulary: [
      { word: "steady", pos: "adj.", chinese: "穩定的" },
      { word: "freelance", pos: "v.", chinese: "做自由工作、接案" },
      { word: "regular", pos: "adj.", chinese: "規律的、固定的" }
    ],
    sentence_pattern: {
      pattern: "S + look for/find a steady job",
      example: "It's hard to get a steady job nowadays."
    }
  },
  {
    phrase: "strong accent",
    type: "形容詞 + 名詞",
    chinese: "濃重的口音",
    keywords: ["strong", "accent"],
    example: {
      english: "The tourist spoke English with a strong accent, making it difficult for locals to understand him.",
      chinese: "那位遊客說英文帶有濃重的口音，使得當地人很難聽懂。",
      grammar_point: "speak with a strong accent（說話帶有濃重口音）"
    },
    vocabulary: [
      { word: "accent", pos: "n.", chinese: "口音" },
      { word: "tourist", pos: "n.", chinese: "遊客" },
      { word: "local", pos: "n.", chinese: "當地人" }
    ],
    sentence_pattern: {
      pattern: "S + speak with a strong accent",
      example: "He has a strong accent but speaks fluently."
    }
  },
  {
    phrase: "stunning beauty",
    type: "形容詞 + 名詞",
    chinese: "驚人的美麗、絕美",
    keywords: ["stunning", "beauty"],
    example: {
      english: "The national park is renowned worldwide for its stunning beauty and rich wildlife.",
      chinese: "這座國家公園因其令人驚嘆的美景和豐富的野生動植物而聞名於世。",
      grammar_point: "be renowned for + N（因為...而聞名）"
    },
    vocabulary: [
      { word: "stunning", pos: "adj.", chinese: "令人驚嘆的、極美的" },
      { word: "renowned", pos: "adj.", chinese: "著名的" },
      { word: "wildlife", pos: "n.", chinese: "野生動植物" }
    ],
    sentence_pattern: {
      pattern: "S + be struck by the stunning beauty of N",
      example: "The painting captures the stunning beauty of nature."
    }
  },
  {
    phrase: "tight grip",
    type: "形容詞 + 名詞",
    chinese: "緊握",
    keywords: ["tight", "grip"],
    example: {
      english: "Keep a tight grip on the railing when you walk down the steep stairs.",
      chinese: "當你走下陡峭的樓梯時，請緊緊抓住欄杆。",
      grammar_point: "keep a tight grip on + N（緊握住...）"
    },
    vocabulary: [
      { word: "tight", pos: "adj.", chinese: "緊的" },
      { word: "grip", pos: "n.", chinese: "緊握、掌握" },
      { word: "steep", pos: "adj.", chinese: "陡峭的" }
    ],
    sentence_pattern: {
      pattern: "S + keep a tight grip on + N",
      example: "He held my hand with a tight grip."
    }
  },
  {
    phrase: "total madness",
    type: "形容詞 + 名詞",
    chinese: "徹底的瘋狂、極度愚蠢的行為",
    keywords: ["total", "madness"],
    example: {
      english: "Driving a motorcycle in this terrible typhoon is total madness.",
      chinese: "在這麼可怕的颱風天騎機車簡直是徹底的瘋狂。",
      grammar_point: "V-ing 作主詞 + is total madness"
    },
    vocabulary: [
      { word: "madness", pos: "n.", chinese: "瘋狂" },
      { word: "motorcycle", pos: "n.", chinese: "機車" },
      { word: "typhoon", pos: "n.", chinese: "颱風" }
    ],
    sentence_pattern: {
      pattern: "It is total madness to + V",
      example: "Spending all your money on clothes is total madness."
    }
  },
  {
    phrase: "vague memory",
    type: "形容詞 + 名詞",
    chinese: "模糊的記憶",
    keywords: ["vague", "memory"],
    example: {
      english: "I only have a vague memory of my early childhood before we moved to Taipei.",
      chinese: "對於搬到台北之前的童年早期，我只有模糊的記憶。",
      grammar_point: "have a vague memory of + N（對...有模糊的記憶）"
    },
    vocabulary: [
      { word: "vague", pos: "adj.", chinese: "模糊的、不明確的" },
      { word: "memory", pos: "n.", chinese: "記憶" },
      { word: "childhood", pos: "n.", chinese: "童年" }
    ],
    sentence_pattern: {
      pattern: "S + have a vague memory of + N",
      example: "She has a vague memory of meeting him once."
    }
  },
  {
    phrase: "valid reason",
    type: "形容詞 + 名詞",
    chinese: "正當理由",
    keywords: ["valid", "reason"],
    example: {
      english: "Students must provide a valid reason if they want to be absent from the exam.",
      chinese: "學生如果想缺考，必須提供正當的理由。",
      grammar_point: "provide a valid reason for + N/V-ing（為...提供正當理由）"
    },
    vocabulary: [
      { word: "valid", pos: "adj.", chinese: "有效的、正當的" },
      { word: "provide", pos: "v.", chinese: "提供" },
      { word: "absent", pos: "adj.", chinese: "缺席的" }
    ],
    sentence_pattern: {
      pattern: "S + have a valid reason to + V",
      example: "You don't have a valid reason to complain."
    }
  },
  {
    phrase: "weak point",
    type: "形容詞 + 名詞",
    chinese: "弱點",
    keywords: ["weak", "point"],
    example: {
      english: "Although he is good at speaking, grammar has always been his weak point.",
      chinese: "雖然他擅長口說，但文法一直都是他的弱點。",
      grammar_point: "N + is one's weak point（...是某人的弱點）"
    },
    vocabulary: [
      { word: "weak", pos: "adj.", chinese: "虛弱的、弱的" },
      { word: "grammar", pos: "n.", chinese: "文法" },
      { word: "although", pos: "conj.", chinese: "雖然" }
    ],
    sentence_pattern: {
      pattern: "S + need to improve one's weak point",
      example: "Every argument has a weak point."
    }
  },
  // ── Adjective + ABOUT ───────────────────────────────────────────────────────
  {
    phrase: "angry about",
    type: "形容詞 + 介系詞",
    chinese: "對...感到生氣",
    keywords: ["angry", "about"],
    example: {
      english: "The residents are very angry about the new tax policy.",
      chinese: "居民們對新的稅收政策感到非常生氣。",
      grammar_point: "be angry about + 事物 (對事生氣) / be angry with + 人 (對人生氣)"
    },
    vocabulary: [
      { word: "resident", pos: "n.", chinese: "居民" },
      { word: "tax", pos: "n.", chinese: "稅" },
      { word: "policy", pos: "n.", chinese: "政策" }
    ],
    sentence_pattern: {
      pattern: "S + be angry about + N/V-ing",
      example: "He was angry about the delay."
    }
  },
  {
    phrase: "anxious about",
    type: "形容詞 + 介系詞",
    chinese: "對...感到焦慮",
    keywords: ["anxious", "about"],
    example: {
      english: "Many students are anxious about their future after graduation.",
      chinese: "許多學生對畢業後的未來感到焦慮。",
      grammar_point: "be anxious about + N（對...感到擔憂/焦慮）"
    },
    vocabulary: [
      { word: "anxious", pos: "adj.", chinese: "焦慮的" },
      { word: "future", pos: "n.", chinese: "未來" },
      { word: "graduation", pos: "n.", chinese: "畢業" }
    ],
    sentence_pattern: {
      pattern: "S + be anxious about + N",
      example: "She is anxious about the exam results."
    }
  },
  {
    phrase: "crazy about",
    type: "形容詞 + 介系詞",
    chinese: "對...為之瘋狂、極度熱衷",
    keywords: ["crazy", "about"],
    example: {
      english: "My younger brother is completely crazy about baseball and watches every game.",
      chinese: "我弟弟對棒球完全為之瘋狂，每場比賽都看。",
      grammar_point: "be crazy about + N/V-ing（極度喜歡...）"
    },
    vocabulary: [
      { word: "completely", pos: "adv.", chinese: "完全地" },
      { word: "baseball", pos: "n.", chinese: "棒球" },
      { word: "game", pos: "n.", chinese: "比賽" }
    ],
    sentence_pattern: {
      pattern: "S + be crazy about + N",
      example: "He has been crazy about cars since childhood."
    }
  },
  {
    phrase: "doubtful about",
    type: "形容詞 + 介系詞",
    chinese: "對...感到懷疑",
    keywords: ["doubtful", "about"],
    example: {
      english: "The manager remained doubtful about the success of the new marketing plan.",
      chinese: "經理對新行銷計畫的成功仍感到懷疑。",
      grammar_point: "be doubtful about + N（對...抱持懷疑態度）"
    },
    vocabulary: [
      { word: "manager", pos: "n.", chinese: "經理" },
      { word: "remain", pos: "v.", chinese: "保持、依然" },
      { word: "marketing", pos: "n.", chinese: "行銷" }
    ],
    sentence_pattern: {
      pattern: "S + be/remain doubtful about + N",
      example: "I am doubtful about his promises."
    }
  },
  {
    phrase: "enthusiastic about",
    type: "形容詞 + 介系詞",
    chinese: "對...充滿熱情",
    keywords: ["enthusiastic", "about"],
    example: {
      english: "The volunteers were highly enthusiastic about helping the local community.",
      chinese: "志工們對於幫助當地社區充滿高度熱情。",
      grammar_point: "be enthusiastic about + N/V-ing（對...熱衷）"
    },
    vocabulary: [
      { word: "volunteer", pos: "n.", chinese: "志工" },
      { word: "highly", pos: "adv.", chinese: "高度地" },
      { word: "community", pos: "n.", chinese: "社區" }
    ],
    sentence_pattern: {
      pattern: "S + be enthusiastic about + V-ing",
      example: "She is enthusiastic about learning languages."
    }
  },
  {
    phrase: "excited about",
    type: "形容詞 + 介系詞",
    chinese: "對...感到興奮",
    keywords: ["excited", "about"],
    example: {
      english: "We are all very excited about the upcoming field trip to the museum.",
      chinese: "我們都對即將到來的博物館校外教學感到非常興奮。",
      grammar_point: "be excited about + N/V-ing（對即將發生的事感到期待興奮）"
    },
    vocabulary: [
      { word: "upcoming", pos: "adj.", chinese: "即將到來的" },
      { word: "field trip", pos: "n.", chinese: "校外教學" },
      { word: "museum", pos: "n.", chinese: "博物館" }
    ],
    sentence_pattern: {
      pattern: "S + be excited about + N",
      example: "Are you excited about your vacation?"
    }
  },
  {
    phrase: "furious about",
    type: "形容詞 + 介系詞",
    chinese: "對...感到狂怒",
    keywords: ["furious", "about"],
    example: {
      english: "Customers were furious about the sudden increase in ticket prices.",
      chinese: "顧客們對票價的突然上漲感到非常憤怒。",
      grammar_point: "be furious about/at + 事物（對某事大發雷霆）"
    },
    vocabulary: [
      { word: "furious", pos: "adj.", chinese: "狂怒的" },
      { word: "sudden", pos: "adj.", chinese: "突然的" },
      { word: "increase", pos: "n.", chinese: "增加、上漲" }
    ],
    sentence_pattern: {
      pattern: "S + be furious about + N",
      example: "He was furious about being left behind."
    }
  },
  {
    phrase: "nervous about",
    type: "形容詞 + 介系詞",
    chinese: "對...感到緊張",
    keywords: ["nervous", "about"],
    example: {
      english: "It is normal to feel nervous about speaking in front of a large audience.",
      chinese: "在大量觀眾面前演講感到緊張是很正常的。",
      grammar_point: "feel/be nervous about + V-ing（對...感到緊張）"
    },
    vocabulary: [
      { word: "normal", pos: "adj.", chinese: "正常的" },
      { word: "audience", pos: "n.", chinese: "觀眾" },
      { word: "speak", pos: "v.", chinese: "演講、說話" }
    ],
    sentence_pattern: {
      pattern: "S + be nervous about + N/V-ing",
      example: "I am nervous about the job interview."
    }
  },
  {
    phrase: "optimistic about",
    type: "形容詞 + 介系詞",
    chinese: "對...感到樂觀",
    keywords: ["optimistic", "about"],
    example: {
      english: "Despite the current difficulties, the CEO remains optimistic about the company's future.",
      chinese: "儘管目前有困難，執行長對公司的未來依然保持樂觀。",
      grammar_point: "be optimistic about + N（對...抱持樂觀態度）"
    },
    vocabulary: [
      { word: "despite", pos: "prep.", chinese: "儘管" },
      { word: "current", pos: "adj.", chinese: "目前的" },
      { word: "optimistic", pos: "adj.", chinese: "樂觀的" }
    ],
    sentence_pattern: {
      pattern: "S + remain optimistic about + N",
      example: "We are optimistic about finding a cure."
    }
  },
  {
    phrase: "pessimistic about",
    type: "形容詞 + 介系詞",
    chinese: "對...感到悲觀",
    keywords: ["pessimistic", "about"],
    example: {
      english: "Many young people are pessimistic about their chances of buying a house.",
      chinese: "許多年輕人對他們買房的機會感到悲觀。",
      grammar_point: "be pessimistic about + N（對...抱持悲觀態度）"
    },
    vocabulary: [
      { word: "pessimistic", pos: "adj.", chinese: "悲觀的" },
      { word: "chance", pos: "n.", chinese: "機會" },
      { word: "buy", pos: "v.", chinese: "購買" }
    ],
    sentence_pattern: {
      pattern: "S + be pessimistic about + N",
      example: "He is pessimistic about the economy."
    }
  },
  {
    phrase: "sad about",
    type: "形容詞 + 介系詞",
    chinese: "對...感到悲傷",
    keywords: ["sad", "about"],
    example: {
      english: "We are all very sad about the news of his sudden passing.",
      chinese: "我們都對他突然離世的消息感到非常難過。",
      grammar_point: "be sad about + N（因為...而傷心）"
    },
    vocabulary: [
      { word: "news", pos: "n.", chinese: "消息、新聞" },
      { word: "sudden", pos: "adj.", chinese: "突然的" },
      { word: "passing", pos: "n.", chinese: "過世" }
    ],
    sentence_pattern: {
      pattern: "S + be sad about + N",
      example: "She was sad about losing her pet."
    }
  },
  {
    phrase: "serious about",
    type: "形容詞 + 介系詞",
    chinese: "對...是認真的",
    keywords: ["serious", "about"],
    example: {
      english: "If you are serious about losing weight, you must change your diet.",
      chinese: "如果你對減肥是認真的，你必須改變你的飲食習慣。",
      grammar_point: "be serious about + V-ing（認真看待/打算做...）"
    },
    vocabulary: [
      { word: "serious", pos: "adj.", chinese: "認真的、嚴肅的" },
      { word: "lose weight", pos: "phr.", chinese: "減肥" },
      { word: "diet", pos: "n.", chinese: "飲食" }
    ],
    sentence_pattern: {
      pattern: "If S + be serious about + V-ing, S + must + V",
      example: "I am serious about learning piano."
    }
  },
  {
    phrase: "upset about",
    type: "形容詞 + 介系詞",
    chinese: "對...感到心煩意亂 / 生氣",
    keywords: ["upset", "about"],
    example: {
      english: "She is still upset about the harsh comments her boss made yesterday.",
      chinese: "她仍然對老闆昨天所說的嚴厲評論感到心煩。",
      grammar_point: "be upset about + 事物（為某事感到心煩/不高興）"
    },
    vocabulary: [
      { word: "upset", pos: "adj.", chinese: "心煩的、沮喪的" },
      { word: "harsh", pos: "adj.", chinese: "嚴厲的、刺耳的" },
      { word: "comment", pos: "n.", chinese: "評論" }
    ],
    sentence_pattern: {
      pattern: "S + be upset about + N",
      example: "Don't be upset about small mistakes."
    }
  },
  {
    phrase: "worried about",
    type: "形容詞 + 介系詞",
    chinese: "對...感到擔心",
    keywords: ["worried", "about"],
    example: {
      english: "Parents are constantly worried about the safety of their children.",
      chinese: "父母總是擔心他們孩子的安全。",
      grammar_point: "be worried about + N（擔心...）"
    },
    vocabulary: [
      { word: "constantly", pos: "adv.", chinese: "不斷地、總是" },
      { word: "safety", pos: "n.", chinese: "安全" },
      { word: "children", pos: "n.", chinese: "孩子們" }
    ],
    sentence_pattern: {
      pattern: "S + be worried about + N",
      example: "I am worried about the coming typhoon."
    }
  },

  // ── Adjective + FOR ─────────────────────────────────────────────────────────
  {
    phrase: "blamed for",
    type: "過去分詞 + 介系詞",
    chinese: "因...受責備 / 承擔責任",
    keywords: ["blamed", "for"],
    example: {
      english: "The driver was blamed for the accident because he was using his phone.",
      chinese: "這名司機因使用手機而被指責為這起車禍的肇事者。",
      grammar_point: "be blamed for + N/V-ing（因...被責備/承擔過失）"
    },
    vocabulary: [
      { word: "blame", pos: "v.", chinese: "責備、歸咎於" },
      { word: "accident", pos: "n.", chinese: "意外、車禍" },
      { word: "use", pos: "v.", chinese: "使用" }
    ],
    sentence_pattern: {
      pattern: "S + be blamed for + N",
      example: "He was blamed for losing the document."
    }
  },
  {
    phrase: "eligible for",
    type: "形容詞 + 介系詞",
    chinese: "有資格...",
    keywords: ["eligible", "for"],
    example: {
      english: "Only full-time employees are eligible for the company's health insurance plan.",
      chinese: "只有全職員工才有資格享受公司的健康保險計畫。",
      grammar_point: "be eligible for + N（具備...的資格）"
    },
    vocabulary: [
      { word: "eligible", pos: "adj.", chinese: "有資格的、合格的" },
      { word: "employee", pos: "n.", chinese: "員工" },
      { word: "insurance", pos: "n.", chinese: "保險" }
    ],
    sentence_pattern: {
      pattern: "S + be eligible for + N",
      example: "You are eligible for a free upgrade."
    }
  },
  {
    phrase: "famous for",
    type: "形容詞 + 介系詞",
    chinese: "因...而聞名",
    keywords: ["famous", "for"],
    example: {
      english: "Taiwan is famous for its delicious street food and friendly people.",
      chinese: "台灣以其美味的街頭小吃和友善的人民而聞名。",
      grammar_point: "be famous for + 特色（以某特色出名）"
    },
    vocabulary: [
      { word: "famous", pos: "adj.", chinese: "著名的" },
      { word: "delicious", pos: "adj.", chinese: "美味的" },
      { word: "street food", pos: "n.", chinese: "街頭小吃" }
    ],
    sentence_pattern: {
      pattern: "S + be famous for + N",
      example: "The city is famous for its historical sites."
    }
  },
  {
    phrase: "grateful for",
    type: "形容詞 + 介系詞",
    chinese: "因...而感激",
    keywords: ["grateful", "for"],
    example: {
      english: "I am truly grateful for all the support my family has given me.",
      chinese: "我真心感謝我的家人給予我的所有支持。",
      grammar_point: "be grateful to + 人 + for + 事物（因為某事感謝某人）"
    },
    vocabulary: [
      { word: "truly", pos: "adv.", chinese: "真心地、真正地" },
      { word: "grateful", pos: "adj.", chinese: "感激的" },
      { word: "support", pos: "n.", chinese: "支持" }
    ],
    sentence_pattern: {
      pattern: "S + be grateful for + N",
      example: "We are grateful for your help."
    }
  },
  {
    phrase: "notorious for",
    type: "形容詞 + 介系詞",
    chinese: "因...而臭名昭著",
    keywords: ["notorious", "for"],
    example: {
      english: "That intersection is notorious for frequent traffic accidents.",
      chinese: "那個十字路口因頻繁發生交通事故而臭名昭著。",
      grammar_point: "be notorious for + 負面特色（因壞事而出名）"
    },
    vocabulary: [
      { word: "notorious", pos: "adj.", chinese: "臭名昭著的、聲名狼藉的" },
      { word: "intersection", pos: "n.", chinese: "十字路口" },
      { word: "frequent", pos: "adj.", chinese: "頻繁的" }
    ],
    sentence_pattern: {
      pattern: "S + be notorious for + N",
      example: "The politician is notorious for corruption."
    }
  },
  {
    phrase: "prepared for",
    type: "形容詞 + 介系詞",
    chinese: "為...做好準備",
    keywords: ["prepared", "for"],
    example: {
      english: "The students have studied hard and are well prepared for the final exams.",
      chinese: "學生們已經努力讀書，為期末考做好了充分準備。",
      grammar_point: "be prepared for + N（準備好應對...）"
    },
    vocabulary: [
      { word: "prepared", pos: "adj.", chinese: "準備好的" },
      { word: "final", pos: "adj.", chinese: "期末的" },
      { word: "exam", pos: "n.", chinese: "考試" }
    ],
    sentence_pattern: {
      pattern: "S + be well prepared for + N",
      example: "Are you prepared for the challenge?"
    }
  },
  {
    phrase: "punished for",
    type: "過去分詞 + 介系詞",
    chinese: "因...受懲罰",
    keywords: ["punished", "for"],
    example: {
      english: "He was punished for breaking the school rules and had to clean the classroom.",
      chinese: "他因為違反校規受到懲罰，必須打掃教室。",
      grammar_point: "be punished for + V-ing（因為做錯某事受罰）"
    },
    vocabulary: [
      { word: "punish", pos: "v.", chinese: "懲罰" },
      { word: "break", pos: "v.", chinese: "打破、違反" },
      { word: "rule", pos: "n.", chinese: "規則" }
    ],
    sentence_pattern: {
      pattern: "S + be punished for + V-ing/N",
      example: "She was punished for being late."
    }
  },
  {
    phrase: "qualified for",
    type: "形容詞 + 介系詞",
    chinese: "有資格...",
    keywords: ["qualified", "for"],
    example: {
      english: "With a master's degree and three years of experience, she is highly qualified for the job.",
      chinese: "擁有碩士學位和三年經驗，她非常符合這份工作的資格。",
      grammar_point: "be qualified for + N（具備...的條件/資格）"
    },
    vocabulary: [
      { word: "qualified", pos: "adj.", chinese: "有資格的、勝任的" },
      { word: "master's degree", pos: "n.", chinese: "碩士學位" },
      { word: "experience", pos: "n.", chinese: "經驗" }
    ],
    sentence_pattern: {
      pattern: "S + be qualified for + N",
      example: "He is well qualified for the position."
    }
  },
  {
    phrase: "ready for",
    type: "形容詞 + 介系詞",
    chinese: "為...準備好",
    keywords: ["ready", "for"],
    example: {
      english: "After weeks of training, the team is finally ready for the big game.",
      chinese: "經過數週的訓練，球隊終於為這場大賽做好了準備。",
      grammar_point: "be ready for + N（準備好迎接...）"
    },
    vocabulary: [
      { word: "training", pos: "n.", chinese: "訓練" },
      { word: "finally", pos: "adv.", chinese: "終於" },
      { word: "game", pos: "n.", chinese: "比賽" }
    ],
    sentence_pattern: {
      pattern: "S + be ready for + N",
      example: "I am ready for a new start."
    }
  },
  {
    phrase: "renowned for",
    type: "形容詞 + 介系詞",
    chinese: "因...而著名",
    keywords: ["renowned", "for"],
    example: {
      english: "The region is renowned for its breathtaking natural scenery and hot springs.",
      chinese: "該地區以其令人嘆為觀止的自然美景和溫泉而聞名。",
      grammar_point: "be renowned for + N（同義詞為 famous for / known for）"
    },
    vocabulary: [
      { word: "renowned", pos: "adj.", chinese: "著名的、有聲譽的" },
      { word: "breathtaking", pos: "adj.", chinese: "令人嘆為觀止的" },
      { word: "scenery", pos: "n.", chinese: "風景" }
    ],
    sentence_pattern: {
      pattern: "S + be renowned for + N",
      example: "Paris is renowned for its art."
    }
  },
  {
    phrase: "responsible for",
    type: "形容詞 + 介系詞",
    chinese: "對...負責、是...的原因",
    keywords: ["responsible", "for"],
    example: {
      english: "Human activities are largely responsible for the rapid increase in global temperatures.",
      chinese: "人類活動在很大程度上是全球氣溫快速上升的原因。",
      grammar_point: "be responsible for + N/V-ing（為...負責/是造成...的主因）"
    },
    vocabulary: [
      { word: "responsible", pos: "adj.", chinese: "負責的、作為原因的" },
      { word: "rapid", pos: "adj.", chinese: "快速的" },
      { word: "temperature", pos: "n.", chinese: "溫度" }
    ],
    sentence_pattern: {
      pattern: "S + be responsible for + N",
      example: "Who is responsible for this mess?"
    }
  },
  {
    phrase: "respected for",
    type: "過去分詞 + 介系詞",
    chinese: "因...受尊敬",
    keywords: ["respected", "for"],
    example: {
      english: "The principal is widely respected for his dedication to education.",
      chinese: "校長因其對教育的奉獻而廣受尊敬。",
      grammar_point: "be respected for + 德行/事蹟（因為...受到尊重）"
    },
    vocabulary: [
      { word: "principal", pos: "n.", chinese: "校長" },
      { word: "widely", pos: "adv.", chinese: "廣泛地" },
      { word: "dedication", pos: "n.", chinese: "奉獻、致力" }
    ],
    sentence_pattern: {
      pattern: "S + be respected for + N",
      example: "She is respected for her honesty."
    }
  },
  {
    phrase: "suitable for",
    type: "形容詞 + 介系詞",
    chinese: "適合...",
    keywords: ["suitable", "for"],
    example: {
      english: "This movie contains violence and is not suitable for young children.",
      chinese: "這部電影含有暴力內容，不適合幼童觀看。",
      grammar_point: "be suitable for + N（適合某人或某用途）"
    },
    vocabulary: [
      { word: "contain", pos: "v.", chinese: "包含" },
      { word: "violence", pos: "n.", chinese: "暴力" },
      { word: "suitable", pos: "adj.", chinese: "適合的" }
    ],
    sentence_pattern: {
      pattern: "S + be suitable for + N",
      example: "This soil is suitable for growing crops."
    }
  },
  {
    phrase: "thankful for",
    type: "形容詞 + 介系詞",
    chinese: "因...而感謝",
    keywords: ["thankful", "for"],
    example: {
      english: "We should be thankful for the peace and freedom we enjoy today.",
      chinese: "我們應該為今天所享有的和平與自由感到感恩。",
      grammar_point: "be thankful for + 事物（對某事心存感激）"
    },
    vocabulary: [
      { word: "thankful", pos: "adj.", chinese: "感謝的、感恩的" },
      { word: "peace", pos: "n.", chinese: "和平" },
      { word: "freedom", pos: "n.", chinese: "自由" }
    ],
    sentence_pattern: {
      pattern: "S + be thankful for + N",
      example: "I am thankful for your advice."
    }
  },

  // ── Adjective + OF ──────────────────────────────────────────────────────────
  {
    phrase: "accused of",
    type: "過去分詞 + 介系詞",
    chinese: "被指控...",
    keywords: ["accused", "of"],
    example: {
      english: "The politician was accused of taking bribes from several local businessmen.",
      chinese: "該名政治人物被指控收受幾位當地商人的賄賂。",
      grammar_point: "be accused of + N/V-ing（被控告犯了...罪行）"
    },
    vocabulary: [
      { word: "accuse", pos: "v.", chinese: "指控" },
      { word: "bribe", pos: "n.", chinese: "賄賂" },
      { word: "businessman", pos: "n.", chinese: "商人" }
    ],
    sentence_pattern: {
      pattern: "S + be accused of + V-ing",
      example: "He was accused of stealing the car."
    }
  },
  {
    phrase: "afraid of",
    type: "形容詞 + 介系詞",
    chinese: "害怕...",
    keywords: ["afraid", "of"],
    example: {
      english: "Don't be afraid of making mistakes; they are part of the learning process.",
      chinese: "不要害怕犯錯；它們是學習過程的一部分。",
      grammar_point: "be afraid of + N/V-ing（害怕某事物/害怕做某事）"
    },
    vocabulary: [
      { word: "afraid", pos: "adj.", chinese: "害怕的" },
      { word: "mistake", pos: "n.", chinese: "錯誤" },
      { word: "process", pos: "n.", chinese: "過程" }
    ],
    sentence_pattern: {
      pattern: "S + be afraid of + V-ing",
      example: "She is afraid of spiders."
    }
  },
  {
    phrase: "ashamed of",
    type: "形容詞 + 介系詞",
    chinese: "對...感到羞恥",
    keywords: ["ashamed", "of"],
    example: {
      english: "He was deeply ashamed of his rude behavior at the dinner party.",
      chinese: "他對自己在晚宴上的無禮行為感到深深的羞恥。",
      grammar_point: "be ashamed of + N/V-ing（為...感到丟臉）"
    },
    vocabulary: [
      { word: "ashamed", pos: "adj.", chinese: "感到羞恥的" },
      { word: "rude", pos: "adj.", chinese: "無禮的" },
      { word: "behavior", pos: "n.", chinese: "行為" }
    ],
    sentence_pattern: {
      pattern: "S + be ashamed of + N",
      example: "You have nothing to be ashamed of."
    }
  },
  {
    phrase: "aware of",
    type: "形容詞 + 介系詞",
    chinese: "意識到...",
    keywords: ["aware", "of"],
    example: {
      english: "Most smokers are fully aware of the dangers of smoking, yet they cannot quit.",
      chinese: "大多數吸菸者完全清楚吸菸的危險，但他們卻無法戒除。",
      grammar_point: "be aware of + N（意識到、明白）"
    },
    vocabulary: [
      { word: "aware", pos: "adj.", chinese: "意識到的、知道的" },
      { word: "danger", pos: "n.", chinese: "危險" },
      { word: "quit", pos: "v.", chinese: "戒除、放棄" }
    ],
    sentence_pattern: {
      pattern: "S + be aware of + N",
      example: "I am well aware of the problem."
    }
  },
  {
    phrase: "capable of",
    type: "形容詞 + 介系詞",
    chinese: "有能力...",
    keywords: ["capable", "of"],
    example: {
      english: "With proper training, this new AI system is capable of performing complex tasks.",
      chinese: "經過適當的訓練，這個新的AI系統有能力執行複雜的任務。",
      grammar_point: "be capable of + V-ing（有能力做...）"
    },
    vocabulary: [
      { word: "capable", pos: "adj.", chinese: "有能力的" },
      { word: "perform", pos: "v.", chinese: "執行、表現" },
      { word: "complex", pos: "adj.", chinese: "複雜的" }
    ],
    sentence_pattern: {
      pattern: "S + be capable of + V-ing",
      example: "She is capable of passing the exam."
    }
  },
  {
    phrase: "conscious of",
    type: "形容詞 + 介系詞",
    chinese: "意識到...、注重...",
    keywords: ["conscious", "of"],
    example: {
      english: "People are becoming more conscious of the environmental impact of plastic bags.",
      chinese: "人們越來越意識到塑膠袋對環境造成的影響。",
      grammar_point: "be conscious of + N（意識到、察覺到）"
    },
    vocabulary: [
      { word: "conscious", pos: "adj.", chinese: "意識到的、注重...的" },
      { word: "environmental", pos: "adj.", chinese: "環境的" },
      { word: "impact", pos: "n.", chinese: "影響" }
    ],
    sentence_pattern: {
      pattern: "S + be conscious of + N",
      example: "He is very conscious of his appearance."
    }
  },
  {
    phrase: "envious of",
    type: "形容詞 + 介系詞",
    chinese: "嫉妒...、羨慕...",
    keywords: ["envious", "of"],
    example: {
      english: "I am slightly envious of her ability to learn foreign languages so quickly.",
      chinese: "我有點羨慕她如此迅速學習外語的能力。",
      grammar_point: "be envious of + 人/事物（對...感到羨慕/嫉妒）"
    },
    vocabulary: [
      { word: "envious", pos: "adj.", chinese: "羨慕的、嫉妒的" },
      { word: "ability", pos: "n.", chinese: "能力" },
      { word: "foreign", pos: "adj.", chinese: "外國的" }
    ],
    sentence_pattern: {
      pattern: "S + be envious of + N",
      example: "They were envious of his success."
    }
  },
  {
    phrase: "independent of",
    type: "形容詞 + 介系詞",
    chinese: "獨立於...、不受...影響",
    keywords: ["independent", "of"],
    example: {
      english: "The judiciary must remain strictly independent of the government to ensure fairness.",
      chinese: "司法機構必須保持嚴格獨立於政府之外，以確保公平。",
      grammar_point: "be independent of + N（獨立於...之外）"
    },
    vocabulary: [
      { word: "judiciary", pos: "n.", chinese: "司法部、司法制度" },
      { word: "strictly", pos: "adv.", chinese: "嚴格地" },
      { word: "fairness", pos: "n.", chinese: "公平" }
    ],
    sentence_pattern: {
      pattern: "S + be independent of + N",
      example: "The decision was made independent of his advice."
    }
  },
  {
    phrase: "irrespective of",
    type: "形容詞 + 介系詞",
    chinese: "不論...、不考慮...",
    keywords: ["irrespective", "of"],
    example: {
      english: "The law applies to everyone equally, irrespective of their race or social status.",
      chinese: "法律平等地適用於每個人，不論其種族或社會地位為何。",
      grammar_point: "irrespective of + N（不管...，同義詞 regardless of）"
    },
    vocabulary: [
      { word: "apply to", pos: "phr.", chinese: "適用於" },
      { word: "equally", pos: "adv.", chinese: "平等地" },
      { word: "race", pos: "n.", chinese: "種族" }
    ],
    sentence_pattern: {
      pattern: "S + V, irrespective of + N",
      example: "Everyone is welcome, irrespective of age."
    }
  },
  {
    phrase: "jealous of",
    type: "形容詞 + 介系詞",
    chinese: "嫉妒...",
    keywords: ["jealous", "of"],
    example: {
      english: "He was jealous of his coworker who received a promotion instead of him.",
      chinese: "他嫉妒那位代替他獲得升遷的同事。",
      grammar_point: "be jealous of + 人/事物（嫉妒...）"
    },
    vocabulary: [
      { word: "jealous", pos: "adj.", chinese: "嫉妒的" },
      { word: "coworker", pos: "n.", chinese: "同事" },
      { word: "promotion", pos: "n.", chinese: "升遷" }
    ],
    sentence_pattern: {
      pattern: "S + be jealous of + N",
      example: "She is jealous of her sister's beauty."
    }
  },
  {
    phrase: "proud of",
    type: "形容詞 + 介系詞",
    chinese: "為...感到驕傲",
    keywords: ["proud", "of"],
    example: {
      english: "His parents are very proud of his outstanding academic achievements.",
      chinese: "他的父母對他傑出的學業成就感到非常驕傲。",
      grammar_point: "be proud of + N/V-ing（以...為傲）"
    },
    vocabulary: [
      { word: "proud", pos: "adj.", chinese: "驕傲的" },
      { word: "outstanding", pos: "adj.", chinese: "傑出的" },
      { word: "achievement", pos: "n.", chinese: "成就" }
    ],
    sentence_pattern: {
      pattern: "S + be proud of + N",
      example: "I am proud of what we have done."
    }
  },
  {
    phrase: "scared of",
    type: "形容詞 + 介系詞",
    chinese: "害怕...",
    keywords: ["scared", "of"],
    example: {
      english: "The little girl is scared of sleeping in the dark without a nightlight.",
      chinese: "這小女孩害怕在沒有小夜燈的情況下在黑暗中睡覺。",
      grammar_point: "be scared of + N/V-ing（害怕做某事）"
    },
    vocabulary: [
      { word: "scared", pos: "adj.", chinese: "害怕的" },
      { word: "dark", pos: "n.", chinese: "黑暗" },
      { word: "nightlight", pos: "n.", chinese: "小夜燈" }
    ],
    sentence_pattern: {
      pattern: "S + be scared of + V-ing",
      example: "He is scared of making mistakes."
    }
  },
  {
    phrase: "suspicious of",
    type: "形容詞 + 介系詞",
    chinese: "對...起疑心",
    keywords: ["suspicious", "of"],
    example: {
      english: "The police became suspicious of the man when he couldn't answer simple questions.",
      chinese: "當這名男子無法回答簡單問題時，警方對他起了疑心。",
      grammar_point: "be suspicious of + 人/事物（懷疑...）"
    },
    vocabulary: [
      { word: "suspicious", pos: "adj.", chinese: "多疑的、可疑的" },
      { word: "police", pos: "n.", chinese: "警方" },
      { word: "simple", pos: "adj.", chinese: "簡單的" }
    ],
    sentence_pattern: {
      pattern: "S + become suspicious of + N",
      example: "They are suspicious of his motives."
    }
  },
  {
    phrase: "typical of",
    type: "形容詞 + 介系詞",
    chinese: "...的典型、是...的特徵",
    keywords: ["typical", "of"],
    example: {
      english: "It is typical of him to arrive late and make excuses.",
      chinese: "他總是遲到又找藉口，這就是他的典型作風。",
      grammar_point: "It is typical of 人 to V（某人總是習慣做...）"
    },
    vocabulary: [
      { word: "typical", pos: "adj.", chinese: "典型的、特有的" },
      { word: "arrive", pos: "v.", chinese: "到達" },
      { word: "excuse", pos: "n.", chinese: "藉口" }
    ],
    sentence_pattern: {
      pattern: "It is typical of O to + V",
      example: "This weather is typical of Taiwan in summer."
    }
  },

  // ── Adjective + TO ──────────────────────────────────────────────────────────
  {
    phrase: "attracted to",
    type: "過去分詞 + 介系詞",
    chinese: "被...吸引",
    keywords: ["attracted", "to"],
    example: {
      english: "Like moths drawn to a flame, many young people are attracted to city life.",
      chinese: "就像飛蛾撲火一樣，許多年輕人被城市生活所吸引。",
      grammar_point: "be attracted to + N（被...吸引，to為介系詞）"
    },
    vocabulary: [
      { word: "moth", pos: "n.", chinese: "飛蛾" },
      { word: "flame", pos: "n.", chinese: "火焰" },
      { word: "attract", pos: "v.", chinese: "吸引" }
    ],
    sentence_pattern: {
      pattern: "S + be attracted to + N",
      example: "I have always been attracted to science."
    }
  },
  {
    phrase: "accustomed to",
    type: "形容詞 + 介系詞",
    chinese: "習慣於...",
    keywords: ["accustomed", "to"],
    example: {
      english: "She quickly became accustomed to the fast pace of life in New York.",
      chinese: "她很快就習慣了紐約快節奏的生活。",
      grammar_point: "be/become accustomed to + V-ing/N（習慣於...，必考to加動名詞）"
    },
    vocabulary: [
      { word: "accustomed", pos: "adj.", chinese: "習慣的" },
      { word: "pace", pos: "n.", chinese: "節奏、步調" },
      { word: "life", pos: "n.", chinese: "生活" }
    ],
    sentence_pattern: {
      pattern: "S + be accustomed to + V-ing",
      example: "I am accustomed to getting up early."
    }
  },
  {
    phrase: "addicted to",
    type: "過去分詞 + 介系詞",
    chinese: "對...上癮、沉迷於...",
    keywords: ["addicted", "to"],
    example: {
      english: "Many teenagers are addicted to playing online games on their smartphones.",
      chinese: "許多青少年沉迷於在智慧型手機上玩線上遊戲。",
      grammar_point: "be addicted to + N/V-ing（對...上癮，to為介系詞）"
    },
    vocabulary: [
      { word: "addicted", pos: "adj.", chinese: "上癮的、沉迷的" },
      { word: "teenager", pos: "n.", chinese: "青少年" },
      { word: "smartphone", pos: "n.", chinese: "智慧型手機" }
    ],
    sentence_pattern: {
      pattern: "S + be addicted to + V-ing/N",
      example: "He is addicted to caffeine."
    }
  },
  {
    phrase: "allergic to",
    type: "形容詞 + 介系詞",
    chinese: "對...過敏",
    keywords: ["allergic", "to"],
    example: {
      english: "My brother cannot eat seafood because he is highly allergic to shrimp.",
      chinese: "我哥哥不能吃海鮮，因為他對蝦子嚴重過敏。",
      grammar_point: "be allergic to + N（對...過敏）"
    },
    vocabulary: [
      { word: "seafood", pos: "n.", chinese: "海鮮" },
      { word: "allergic", pos: "adj.", chinese: "過敏的" },
      { word: "shrimp", pos: "n.", chinese: "蝦子" }
    ],
    sentence_pattern: {
      pattern: "S + be allergic to + N",
      example: "Are you allergic to peanuts?"
    }
  },
  {
    phrase: "indifferent to",
    type: "形容詞 + 介系詞",
    chinese: "對...漠不關心",
    keywords: ["indifferent", "to"],
    example: {
      english: "It is sad that some people remain completely indifferent to the suffering of others.",
      chinese: "令人難過的是，有些對他人的苦難依然完全漠不關心。",
      grammar_point: "be indifferent to + N（對...無動於衷）"
    },
    vocabulary: [
      { word: "indifferent", pos: "adj.", chinese: "漠不關心的" },
      { word: "completely", pos: "adv.", chinese: "完全地" },
      { word: "suffering", pos: "n.", chinese: "痛苦、苦難" }
    ],
    sentence_pattern: {
      pattern: "S + be indifferent to + N",
      example: "He seems indifferent to my problems."
    }
  },
  {
    phrase: "inferior to",
    type: "形容詞 + 介系詞",
    chinese: "比...差、次於...",
    keywords: ["inferior", "to"],
    example: {
      english: "This cheap product is clearly inferior to the original brand in terms of quality.",
      chinese: "這件便宜的產品在品質上明顯次於原創品牌。",
      grammar_point: "be inferior to + N（比...差，字尾是-ior的形容詞比較級用to）"
    },
    vocabulary: [
      { word: "inferior", pos: "adj.", chinese: "次等的、較差的" },
      { word: "original", pos: "adj.", chinese: "原創的、最初的" },
      { word: "quality", pos: "n.", chinese: "品質" }
    ],
    sentence_pattern: {
      pattern: "A is inferior to B",
      example: "I feel inferior to my successful brother."
    }
  },
  {
    phrase: "married to",
    type: "過去分詞 + 介系詞",
    chinese: "與...結婚",
    keywords: ["married", "to"],
    example: {
      english: "She has been married to a famous artist for over ten years.",
      chinese: "她和一位著名的藝術家結婚已經超過十年了。",
      grammar_point: "be married to + 人（和...結婚，不用with！）"
    },
    vocabulary: [
      { word: "marry", pos: "v.", chinese: "結婚" },
      { word: "famous", pos: "adj.", chinese: "著名的" },
      { word: "artist", pos: "n.", chinese: "藝術家" }
    ],
    sentence_pattern: {
      pattern: "S + be married to + O",
      example: "He is married to a doctor."
    }
  },
  {
    phrase: "opposed to",
    type: "形容詞/分詞 + 介系詞",
    chinese: "反對...",
    keywords: ["opposed", "to"],
    example: {
      english: "Many environmentalists are strongly opposed to the construction of the new power plant.",
      chinese: "許多環保人士強烈反對興建新發電廠。",
      grammar_point: "be opposed to + N/V-ing（反對...，to為介系詞）"
    },
    vocabulary: [
      { word: "environmentalist", pos: "n.", chinese: "環保人士" },
      { word: "construction", pos: "n.", chinese: "建設" },
      { word: "power plant", pos: "n.", chinese: "發電廠" }
    ],
    sentence_pattern: {
      pattern: "S + be opposed to + N",
      example: "I am opposed to changing the rules."
    }
  },
  {
    phrase: "polite to",
    type: "形容詞 + 介系詞",
    chinese: "對...有禮貌",
    keywords: ["polite", "to"],
    example: {
      english: "You should always be polite to your elders and treat them with respect.",
      chinese: "你應該總是對長輩有禮貌，並尊重他們。",
      grammar_point: "be polite to + 人（對某人有禮貌）"
    },
    vocabulary: [
      { word: "polite", pos: "adj.", chinese: "有禮貌的" },
      { word: "elder", pos: "n.", chinese: "長輩" },
      { word: "respect", pos: "n.", chinese: "尊重" }
    ],
    sentence_pattern: {
      pattern: "S + should be polite to + N",
      example: "The staff is very polite to customers."
    }
  },
  {
    phrase: "receptive to",
    type: "形容詞 + 介系詞",
    chinese: "對...樂於接受的",
    keywords: ["receptive", "to"],
    example: {
      english: "The new manager is very open-minded and receptive to new ideas from the team.",
      chinese: "新經理心胸開闊，很樂於接受團隊的新點子。",
      grammar_point: "be receptive to + N（對...接受度高的）"
    },
    vocabulary: [
      { word: "receptive", pos: "adj.", chinese: "樂於接受的" },
      { word: "open-minded", pos: "adj.", chinese: "心胸開闊的" },
      { word: "manager", pos: "n.", chinese: "經理" }
    ],
    sentence_pattern: {
      pattern: "S + be receptive to + N",
      example: "Children are often more receptive to change."
    }
  },
  {
    phrase: "related to",
    type: "過去分詞 + 介系詞",
    chinese: "與...有關",
    keywords: ["related", "to"],
    example: {
      english: "The severe floods were directly related to the extreme weather changes.",
      chinese: "嚴重的洪水與極端的天氣變化有直接關係。",
      grammar_point: "be related to + N（和...有關聯）"
    },
    vocabulary: [
      { word: "severe", pos: "adj.", chinese: "嚴重的" },
      { word: "flood", pos: "n.", chinese: "洪水" },
      { word: "extreme", pos: "adj.", chinese: "極端的" }
    ],
    sentence_pattern: {
      pattern: "A + be related to + B",
      example: "Are you related to the owner?"
    }
  },
  {
    phrase: "rude to",
    type: "形容詞 + 介系詞",
    chinese: "對...無禮",
    keywords: ["rude", "to"],
    example: {
      english: "It is unacceptable to be rude to the waiters who are serving you.",
      chinese: "對為你服務的服務生無禮是不可接受的。",
      grammar_point: "be rude to + 人（對某人無禮）"
    },
    vocabulary: [
      { word: "unacceptable", pos: "adj.", chinese: "不可接受的" },
      { word: "rude", pos: "adj.", chinese: "無禮的" },
      { word: "waiter", pos: "n.", chinese: "服務生" }
    ],
    sentence_pattern: {
      pattern: "It is adj to be rude to + N",
      example: "He was very rude to his teacher."
    }
  },
  {
    phrase: "similar to",
    type: "形容詞 + 介系詞",
    chinese: "與...相似",
    keywords: ["similar", "to"],
    example: {
      english: "Your coat is very similar to the one I bought last year.",
      chinese: "你的外套跟我去年買的那件非常相似。",
      grammar_point: "be similar to + N（和...相似）"
    },
    vocabulary: [
      { word: "similar", pos: "adj.", chinese: "相似的" },
      { word: "coat", pos: "n.", chinese: "外套" },
      { word: "buy", pos: "v.", chinese: "買" }
    ],
    sentence_pattern: {
      pattern: "A is similar to B",
      example: "His ideas are similar to mine."
    }
  },
  {
    phrase: "superior to",
    type: "形容詞 + 介系詞",
    chinese: "優於...、比...好",
    keywords: ["superior", "to"],
    example: {
      english: "This new model is far superior to the older version in battery life.",
      chinese: "這款新機型在電池續航力方面遠優於舊版本。",
      grammar_point: "be superior to + N（比...優越，字尾-ior比較級不用than）"
    },
    vocabulary: [
      { word: "superior", pos: "adj.", chinese: "優越的、較好的" },
      { word: "version", pos: "n.", chinese: "版本" },
      { word: "battery life", pos: "n.", chinese: "電池續航力" }
    ],
    sentence_pattern: {
      pattern: "A is superior to B",
      example: "I consider his work superior to hers."
    }
  },

  // ── Adjective + WITH ────────────────────────────────────────────────────────
  {
    phrase: "associated with",
    type: "過去分詞 + 介系詞",
    chinese: "與...相關聯",
    keywords: ["associated", "with"],
    example: {
      english: "High stress levels are often associated with an increased risk of heart disease.",
      chinese: "高壓力水準通常與增加罹患心臟病的風險有關聯。",
      grammar_point: "be associated with + N（和...有牽連/相關）"
    },
    vocabulary: [
      { word: "associate", pos: "v.", chinese: "聯繫、聯想" },
      { word: "level", pos: "n.", chinese: "水準、程度" },
      { word: "increased", pos: "adj.", chinese: "增加的" }
    ],
    sentence_pattern: {
      pattern: "A is associated with B",
      example: "Dark clouds are associated with rain."
    }
  },
  {
    phrase: "bored with",
    type: "形容詞 + 介系詞",
    chinese: "對...感到厭煩",
    keywords: ["bored", "with"],
    example: {
      english: "The children quickly became bored with their new toys and wanted something else.",
      chinese: "孩子們很快就對新玩具感到厭煩，想要其他的東西。",
      grammar_point: "be/become bored with + N/V-ing（對...感到無聊）"
    },
    vocabulary: [
      { word: "bored", pos: "adj.", chinese: "感到無聊的" },
      { word: "toy", pos: "n.", chinese: "玩具" },
      { word: "quickly", pos: "adv.", chinese: "快速地" }
    ],
    sentence_pattern: {
      pattern: "S + be bored with + N",
      example: "I am getting bored with this repetitive job."
    }
  },
  {
    phrase: "blessed with",
    type: "過去分詞 + 介系詞",
    chinese: "幸運地擁有、有幸享有",
    keywords: ["blessed", "with"],
    example: {
      english: "She is blessed with a beautiful singing voice and a supportive family.",
      chinese: "她很幸運能擁有一副美麗的嗓音和一個支持她的家庭。",
      grammar_point: "be blessed with + N（被賜予...、幸運擁有...）"
    },
    vocabulary: [
      { word: "blessed", pos: "adj.", chinese: "幸運的、受祝福的" },
      { word: "voice", pos: "n.", chinese: "嗓音" },
      { word: "supportive", pos: "adj.", chinese: "給予支持的" }
    ],
    sentence_pattern: {
      pattern: "S + be blessed with + N",
      example: "Taiwan is blessed with rich natural resources."
    }
  },
  {
    phrase: "compatible with",
    type: "形容詞 + 介系詞",
    chinese: "與...相容 / 與...合得來",
    keywords: ["compatible", "with"],
    example: {
      english: "Make sure this software is compatible with your computer's operating system.",
      chinese: "請確保這個軟體與你電腦的作業系統相容。",
      grammar_point: "be compatible with + N（與...相容或協調）"
    },
    vocabulary: [
      { word: "compatible", pos: "adj.", chinese: "相容的、合得來的" },
      { word: "software", pos: "n.", chinese: "軟體" },
      { word: "operating system", pos: "n.", chinese: "作業系統" }
    ],
    sentence_pattern: {
      pattern: "A is compatible with B",
      example: "We are simply not compatible with each other."
    }
  },
  {
    phrase: "confronted with",
    type: "過去分詞 + 介系詞",
    chinese: "面臨、面對",
    keywords: ["confronted", "with"],
    example: {
      english: "When confronted with difficulties, you must stay calm and find a solution.",
      chinese: "當面臨困難時，你必須保持冷靜並找出解決方案。",
      grammar_point: "be confronted with + N（面臨...，常用於被動形式）"
    },
    vocabulary: [
      { word: "confront", pos: "v.", chinese: "面對、遭遇" },
      { word: "difficulty", pos: "n.", chinese: "困難" },
      { word: "calm", pos: "adj.", chinese: "冷靜的" }
    ],
    sentence_pattern: {
      pattern: "When confronted with N, S + V",
      example: "The company was confronted with a financial crisis."
    }
  },
  {
    phrase: "content with",
    type: "形容詞 + 介系詞",
    chinese: "對...感到滿足",
    keywords: ["content", "with"],
    example: {
      english: "He lives a simple life in the country and is content with what he has.",
      chinese: "他在鄉下過著簡單的生活，對他所擁有的一切感到滿足。",
      grammar_point: "be content with + N（對...感到知足）"
    },
    vocabulary: [
      { word: "content", pos: "adj.", chinese: "滿足的" },
      { word: "simple", pos: "adj.", chinese: "簡單的" },
      { word: "country", pos: "n.", chinese: "鄉下、國家" }
    ],
    sentence_pattern: {
      pattern: "S + be content with + N",
      example: "Not everyone is content with a quiet life."
    }
  },
  {
    phrase: "crowded with",
    type: "形容詞 + 介系詞",
    chinese: "擠滿了...",
    keywords: ["crowded", "with"],
    example: {
      english: "The night market is always crowded with tourists during the weekend.",
      chinese: "夜市在週末時總是擠滿了遊客。",
      grammar_point: "be crowded with + N（充滿、擠滿...）"
    },
    vocabulary: [
      { word: "crowded", pos: "adj.", chinese: "擁擠的" },
      { word: "night market", pos: "n.", chinese: "夜市" },
      { word: "tourist", pos: "n.", chinese: "遊客" }
    ],
    sentence_pattern: {
      pattern: "The place is crowded with + N",
      example: "The street was crowded with people."
    }
  },
  {
    phrase: "delighted with",
    type: "形容詞 + 介系詞",
    chinese: "對...感到高興",
    keywords: ["delighted", "with"],
    example: {
      english: "My parents were absolutely delighted with the gift I bought for them.",
      chinese: "我父母對我買給他們的禮物感到非常高興。",
      grammar_point: "be delighted with + N（對某物感到欣喜）"
    },
    vocabulary: [
      { word: "delighted", pos: "adj.", chinese: "高興的、欣喜的" },
      { word: "absolutely", pos: "adv.", chinese: "絕對地、非常" },
      { word: "gift", pos: "n.", chinese: "禮物" }
    ],
    sentence_pattern: {
      pattern: "S + be delighted with + N",
      example: "She was delighted with her test scores."
    }
  },
  {
    phrase: "familiar with",
    type: "形容詞 + 介系詞",
    chinese: "對...熟悉",
    keywords: ["familiar", "with"],
    example: {
      english: "Before starting the job, you need to become familiar with the company's rules.",
      chinese: "在開始這份工作之前，你需要熟悉公司的規定。",
      grammar_point: "be/become familiar with + N（對某事物感到熟悉）"
    },
    vocabulary: [
      { word: "familiar", pos: "adj.", chinese: "熟悉的" },
      { word: "company", pos: "n.", chinese: "公司" },
      { word: "rule", pos: "n.", chinese: "規則" }
    ],
    sentence_pattern: {
      pattern: "S + be familiar with + N",
      example: "I am not familiar with this neighborhood."
    }
  },
  {
    phrase: "fed up with",
    type: "形容詞片語 + 介系詞",
    chinese: "對...受夠了",
    keywords: ["fed", "up", "with"],
    example: {
      english: "I am completely fed up with his constant complaining and negative attitude.",
      chinese: "我對他不斷的抱怨和消極態度完全受夠了。",
      grammar_point: "be fed up with + N/V-ing（忍無可忍）"
    },
    vocabulary: [
      { word: "constant", pos: "adj.", chinese: "持續不斷的" },
      { word: "complain", pos: "v.", chinese: "抱怨" },
      { word: "negative", pos: "adj.", chinese: "負面的" }
    ],
    sentence_pattern: {
      pattern: "S + be fed up with + N",
      example: "Citizens are fed up with the terrible traffic."
    }
  },
  {
    phrase: "friendly with",
    type: "形容詞 + 介系詞",
    chinese: "對...友善、與...交好",
    keywords: ["friendly", "with"],
    example: {
      english: "It is always good to be friendly with your neighbors in case of an emergency.",
      chinese: "為了以防萬一，與鄰居保持友好關係總是好的。",
      grammar_point: "be friendly with + 人（與某人交好）"
    },
    vocabulary: [
      { word: "friendly", pos: "adj.", chinese: "友善的" },
      { word: "neighbor", pos: "n.", chinese: "鄰居" },
      { word: "emergency", pos: "n.", chinese: "緊急情況" }
    ],
    sentence_pattern: {
      pattern: "S + be friendly with + O",
      example: "She is friendly with everyone in the office."
    }
  },
  {
    phrase: "pleased with",
    type: "形容詞 + 介系詞",
    chinese: "對...感到滿意",
    keywords: ["pleased", "with"],
    example: {
      english: "The coach was very pleased with the team's outstanding performance today.",
      chinese: "教練對球隊今天傑出的表現感到非常滿意。",
      grammar_point: "be pleased with + N（對...感到高興滿意）"
    },
    vocabulary: [
      { word: "pleased", pos: "adj.", chinese: "滿意的、高興的" },
      { word: "coach", pos: "n.", chinese: "教練" },
      { word: "performance", pos: "n.", chinese: "表現" }
    ],
    sentence_pattern: {
      pattern: "S + be pleased with + N",
      example: "Are you pleased with the final result?"
    }
  },
  {
    phrase: "popular with",
    type: "形容詞 + 介系詞",
    chinese: "受...歡迎",
    keywords: ["popular", "with"],
    example: {
      english: "The new cafe near the school is very popular with college students.",
      chinese: "學校附近的新咖啡館非常受大學生歡迎。",
      grammar_point: "be popular with/among + 特定群體（在...之中很受歡迎）"
    },
    vocabulary: [
      { word: "popular", pos: "adj.", chinese: "受歡迎的" },
      { word: "cafe", pos: "n.", chinese: "咖啡館" },
      { word: "college", pos: "n.", chinese: "大學" }
    ],
    sentence_pattern: {
      pattern: "S + be popular with + N",
      example: "This song is popular with young people."
    }
  },
  {
    phrase: "satisfied with",
    type: "過去分詞 + 介系詞",
    chinese: "對...感到滿意",
    keywords: ["satisfied", "with"],
    example: {
      english: "If you are not satisfied with our service, you can get a full refund.",
      chinese: "如果您對我們的服務不滿意，您可以獲得全額退款。",
      grammar_point: "be satisfied with + N（對...感到滿意）"
    },
    vocabulary: [
      { word: "satisfied", pos: "adj.", chinese: "感到滿意的" },
      { word: "service", pos: "n.", chinese: "服務" },
      { word: "refund", pos: "n.", chinese: "退款" }
    ],
    sentence_pattern: {
      pattern: "S + be satisfied with + N",
      example: "I am satisfied with my current job."
    }
  },
  // ── Adverb + Adjective/Participle (副詞修飾高階搭配) ──────────────────────
  {
    phrase: "absolutely delighted",
    type: "副詞 + 形容詞",
    chinese: "極度高興的",
    keywords: ["absolutely", "delighted"],
    example: {
      english: "My parents were absolutely delighted to hear that I passed the entrance exam.",
      chinese: "我父母聽到我通過入學考試的消息極度高興。",
      grammar_point: "be absolutely delighted to + V（對做某事感到極度高興）"
    },
    vocabulary: [
      { word: "absolutely", pos: "adv.", chinese: "絕對地、完全地" },
      { word: "delighted", pos: "adj.", chinese: "高興的、欣喜的" },
      { word: "entrance", pos: "n.", chinese: "入學、入口" }
    ],
    sentence_pattern: {
      pattern: "S + be absolutely delighted to + V",
      example: "She was absolutely delighted with her gift."
    }
  },
  {
    phrase: "absolutely necessary",
    type: "副詞 + 形容詞",
    chinese: "絕對必要的",
    keywords: ["absolutely", "necessary"],
    example: {
      english: "It is absolutely necessary to wear a seatbelt when driving on the highway.",
      chinese: "在高速公路上開車時，繫安全帶是絕對必要的。",
      grammar_point: "It is absolutely necessary to + V（做...是絕對必要的）"
    },
    vocabulary: [
      { word: "necessary", pos: "adj.", chinese: "必要的" },
      { word: "seatbelt", pos: "n.", chinese: "安全帶" },
      { word: "highway", pos: "n.", chinese: "高速公路" }
    ],
    sentence_pattern: {
      pattern: "It is absolutely necessary to + V",
      example: "Sleep is absolutely necessary for good health."
    }
  },
  {
    phrase: "absolutely ridiculous",
    type: "副詞 + 形容詞",
    chinese: "荒謬至極的",
    keywords: ["absolutely", "ridiculous"],
    example: {
      english: "To expect a child to study for ten hours a day is absolutely ridiculous.",
      chinese: "期望一個孩子一天讀書十個小時簡直是荒謬至極。",
      grammar_point: "To V... is absolutely ridiculous（做某事是荒謬的）"
    },
    vocabulary: [
      { word: "expect", pos: "v.", chinese: "期望、預期" },
      { word: "ridiculous", pos: "adj.", chinese: "荒謬的、可笑的" }
    ],
    sentence_pattern: {
      pattern: "N/V-ing is absolutely ridiculous",
      example: "The price of this ticket is absolutely ridiculous."
    }
  },
  {
    phrase: "absolutely wrong",
    type: "副詞 + 形容詞",
    chinese: "完全錯誤的",
    keywords: ["absolutely", "wrong"],
    example: {
      english: "It is absolutely wrong to judge someone solely by their appearance.",
      chinese: "僅憑外表來評斷一個人是完全錯誤的。",
      grammar_point: "solely by（單單憑藉...）"
    },
    vocabulary: [
      { word: "judge", pos: "v.", chinese: "評斷" },
      { word: "solely", pos: "adv.", chinese: "僅僅、單獨地" },
      { word: "appearance", pos: "n.", chinese: "外表" }
    ],
    sentence_pattern: {
      pattern: "It is absolutely wrong to + V",
      example: "You are absolutely wrong about him."
    }
  },
  {
    phrase: "actively involved",
    type: "副詞 + 過去分詞",
    chinese: "積極參與的",
    keywords: ["actively", "involved"],
    example: {
      english: "He has been actively involved in environmental protection campaigns since college.",
      chinese: "他從大學起就一直積極參與環境保護活動。",
      grammar_point: "be actively involved in + N（積極參與...）"
    },
    vocabulary: [
      { word: "actively", pos: "adv.", chinese: "積極地" },
      { word: "involved", pos: "adj.", chinese: "參與的、牽涉的" },
      { word: "campaign", pos: "n.", chinese: "活動、運動" }
    ],
    sentence_pattern: {
      pattern: "S + be actively involved in + N",
      example: "She is actively involved in local politics."
    }
  },
  {
    phrase: "badly injured",
    type: "副詞 + 過去分詞",
    chinese: "嚴重受傷的",
    keywords: ["badly", "injured"],
    example: {
      english: "Two passengers were badly injured in the car crash and taken to the hospital.",
      chinese: "兩名乘客在車禍中嚴重受傷並被送往醫院。",
      grammar_point: "badly 此處為「嚴重地」，修飾負面動詞/分詞"
    },
    vocabulary: [
      { word: "passenger", pos: "n.", chinese: "乘客" },
      { word: "injured", pos: "adj.", chinese: "受傷的" },
      { word: "crash", pos: "n.", chinese: "撞擊、車禍" }
    ],
    sentence_pattern: {
      pattern: "S + be badly injured",
      example: "The player was badly injured during the match."
    }
  },
  {
    phrase: "bitterly cold",
    type: "副詞 + 形容詞",
    chinese: "嚴寒的、冷得刺骨的",
    keywords: ["bitterly", "cold"],
    example: {
      english: "We decided to stay indoors because it was bitterly cold outside.",
      chinese: "我們決定待在室內，因為外面冷得刺骨。",
      grammar_point: "bitterly cold（強烈搭配，不可用 strongly cold）"
    },
    vocabulary: [
      { word: "indoors", pos: "adv.", chinese: "在室內" },
      { word: "bitterly", pos: "adv.", chinese: "刺骨地、痛苦地" }
    ],
    sentence_pattern: {
      pattern: "It is bitterly cold",
      example: "A bitterly cold wind blew across the field."
    }
  },
  {
    phrase: "bitterly disappointed",
    type: "副詞 + 過去分詞",
    chinese: "極度失望的",
    keywords: ["bitterly", "disappointed"],
    example: {
      english: "The fans were bitterly disappointed when their favorite team lost the final game.",
      chinese: "當他們最喜歡的球隊輸掉決賽時，球迷們感到極度失望。",
      grammar_point: "be bitterly disappointed with/at（對...極度失望）"
    },
    vocabulary: [
      { word: "disappointed", pos: "adj.", chinese: "失望的" },
      { word: "favorite", pos: "adj.", chinese: "最喜愛的" },
      { word: "final", pos: "adj.", chinese: "最後的、決賽的" }
    ],
    sentence_pattern: {
      pattern: "S + be bitterly disappointed",
      example: "I am bitterly disappointed by his attitude."
    }
  },
  {
    phrase: "blissfully unaware",
    type: "副詞 + 形容詞",
    chinese: "幸福地一無所知的、毫不知情的",
    keywords: ["blissfully", "unaware"],
    example: {
      english: "The children played in the yard, blissfully unaware of the approaching storm.",
      chinese: "孩子們在院子裡玩耍，對即將到來的暴風雨毫不知情。",
      grammar_point: "be blissfully unaware of + N（對負面事物毫無察覺而無憂無慮）"
    },
    vocabulary: [
      { word: "blissfully", pos: "adv.", chinese: "充滿喜悅地、幸福地" },
      { word: "unaware", pos: "adj.", chinese: "未察覺的" },
      { word: "approach", pos: "v.", chinese: "接近" }
    ],
    sentence_pattern: {
      pattern: "S + be blissfully unaware of + N",
      example: "He remained blissfully unaware of the danger."
    }
  },
  {
    phrase: "completely different",
    type: "副詞 + 形容詞",
    chinese: "完全不同的",
    keywords: ["completely", "different"],
    example: {
      english: "My sister and I have completely different personalities; she is outgoing while I am shy.",
      chinese: "我和我妹妹有完全不同的個性；她外向而我害羞。",
      grammar_point: "have completely different + N（有完全不同的...）"
    },
    vocabulary: [
      { word: "completely", pos: "adv.", chinese: "完全地" },
      { word: "personality", pos: "n.", chinese: "個性" },
      { word: "outgoing", pos: "adj.", chinese: "外向的" }
    ],
    sentence_pattern: {
      pattern: "A and B are completely different",
      example: "Their opinions are completely different from ours."
    }
  },
  {
    phrase: "conveniently located",
    type: "副詞 + 過去分詞",
    chinese: "位置優越的、交通便利的",
    keywords: ["conveniently", "located"],
    example: {
      english: "The hotel is conveniently located near the subway station, making it easy to travel.",
      chinese: "這家飯店位置優越，靠近地鐵站，讓旅行很方便。",
      grammar_point: "be conveniently located（通常用於描述飯店、房屋地點）"
    },
    vocabulary: [
      { word: "conveniently", pos: "adv.", chinese: "便利地" },
      { word: "located", pos: "adj.", chinese: "位於...的" },
      { word: "subway", pos: "n.", chinese: "地鐵" }
    ],
    sentence_pattern: {
      pattern: "N + is conveniently located near + N",
      example: "Our new office is conveniently located in the city center."
    }
  },
  {
    phrase: "deadly serious",
    type: "副詞 + 形容詞",
    chinese: "極度認真的、非常嚴肅的",
    keywords: ["deadly", "serious"],
    example: {
      english: "I thought he was joking, but the expression on his face was deadly serious.",
      chinese: "我以為他在開玩笑，但他臉上的表情卻是極度認真的。",
      grammar_point: "deadly 此處作強調副詞，意為「極度地」"
    },
    vocabulary: [
      { word: "joke", pos: "v.", chinese: "開玩笑" },
      { word: "expression", pos: "n.", chinese: "表情" },
      { word: "serious", pos: "adj.", chinese: "認真的" }
    ],
    sentence_pattern: {
      pattern: "S + be deadly serious about + N",
      example: "He is deadly serious about quitting his job."
    }
  },
  {
    phrase: "deeply ashamed",
    type: "副詞 + 形容詞",
    chinese: "深感羞愧的",
    keywords: ["deeply", "ashamed"],
    example: {
      english: "He felt deeply ashamed of having lied to his best friend.",
      chinese: "他對向最好的朋友說謊感到深感羞愧。",
      grammar_point: "feel deeply ashamed of + V-ing（對...深感羞愧）"
    },
    vocabulary: [
      { word: "deeply", pos: "adv.", chinese: "深深地" },
      { word: "ashamed", pos: "adj.", chinese: "羞愧的" },
      { word: "lie", pos: "v.", chinese: "說謊 (lied)" }
    ],
    sentence_pattern: {
      pattern: "S + be deeply ashamed of + N",
      example: "I am deeply ashamed of my past mistakes."
    }
  },
  {
    phrase: "deeply concerned",
    type: "副詞 + 過去分詞",
    chinese: "深表關切的、非常擔憂的",
    keywords: ["deeply", "concerned"],
    example: {
      english: "Environmental groups are deeply concerned about the destruction of the rainforest.",
      chinese: "環保團體對雨林的破壞深表關切。",
      grammar_point: "be deeply concerned about + N（對...深表憂心）"
    },
    vocabulary: [
      { word: "concerned", pos: "adj.", chinese: "擔憂的、關切的" },
      { word: "destruction", pos: "n.", chinese: "破壞" },
      { word: "rainforest", pos: "n.", chinese: "雨林" }
    ],
    sentence_pattern: {
      pattern: "S + be deeply concerned about + N",
      example: "Parents are deeply concerned about school safety."
    }
  },
  {
    phrase: "deeply divided",
    type: "副詞 + 過去分詞",
    chinese: "嚴重分歧的",
    keywords: ["deeply", "divided"],
    example: {
      english: "The country remains deeply divided over the issue of nuclear power.",
      chinese: "這個國家在核能議題上仍然存在嚴重分歧。",
      grammar_point: "be deeply divided over/on + N（在某議題上分歧）"
    },
    vocabulary: [
      { word: "divided", pos: "adj.", chinese: "分裂的、有分歧的" },
      { word: "issue", pos: "n.", chinese: "議題" },
      { word: "nuclear power", pos: "n.", chinese: "核能" }
    ],
    sentence_pattern: {
      pattern: "The group is deeply divided over + N",
      example: "Public opinion is deeply divided."
    }
  },
  {
    phrase: "deeply involved",
    type: "副詞 + 過去分詞",
    chinese: "深度參與的、牽涉極深的",
    keywords: ["deeply", "involved"],
    example: {
      english: "The mayor was deeply involved in the corruption scandal and eventually resigned.",
      chinese: "市長深陷貪汙醜聞，最終辭職了。",
      grammar_point: "be deeply involved in + N（深深捲入...之中）"
    },
    vocabulary: [
      { word: "involved", pos: "adj.", chinese: "捲入的、參與的" },
      { word: "corruption", pos: "n.", chinese: "貪汙" },
      { word: "scandal", pos: "n.", chinese: "醜聞" }
    ],
    sentence_pattern: {
      pattern: "S + be deeply involved in + N",
      example: "He is deeply involved in local charity work."
    }
  },
  {
    phrase: "deeply offended",
    type: "副詞 + 過去分詞",
    chinese: "受到嚴重冒犯的",
    keywords: ["deeply", "offended"],
    example: {
      english: "Many viewers were deeply offended by the insensitive jokes in the comedy show.",
      chinese: "許多觀眾對這部喜劇節目中不顧他人感受的玩笑感到受到嚴重冒犯。",
      grammar_point: "be deeply offended by + N（被...深深冒犯）"
    },
    vocabulary: [
      { word: "offended", pos: "adj.", chinese: "被冒犯的" },
      { word: "insensitive", pos: "adj.", chinese: "不敏感的、麻木的" },
      { word: "comedy", pos: "n.", chinese: "喜劇" }
    ],
    sentence_pattern: {
      pattern: "S + feel deeply offended by + N",
      example: "I was deeply offended by his rude remarks."
    }
  },
  {
    phrase: "desperately eager",
    type: "副詞 + 形容詞",
    chinese: "極度渴望的",
    keywords: ["desperately", "eager"],
    example: {
      english: "After walking in the desert for hours, he was desperately eager for a glass of water.",
      chinese: "在沙漠中走了幾個小時後，他極度渴望一杯水。",
      grammar_point: "be desperately eager for + N / to + V（非常渴望...）"
    },
    vocabulary: [
      { word: "desperately", pos: "adv.", chinese: "拼命地、極度地" },
      { word: "eager", pos: "adj.", chinese: "渴望的" },
      { word: "desert", pos: "n.", chinese: "沙漠" }
    ],
    sentence_pattern: {
      pattern: "S + be desperately eager to + V",
      example: "She is desperately eager to prove herself."
    }
  },
  {
    phrase: "entirely convincing",
    type: "副詞 + 現在分詞(作形容詞)",
    chinese: "完全令人信服的",
    keywords: ["entirely", "convincing"],
    example: {
      english: "The suspect's excuse for being at the crime scene was not entirely convincing.",
      chinese: "嫌犯對於出現在犯罪現場的藉口並不是完全令人信服的。",
      grammar_point: "entirely convincing（常搭配 not 使用，表示「不太有說服力」）"
    },
    vocabulary: [
      { word: "entirely", pos: "adv.", chinese: "完全地" },
      { word: "convincing", pos: "adj.", chinese: "令人信服的" },
      { word: "suspect", pos: "n.", chinese: "嫌疑犯" }
    ],
    sentence_pattern: {
      pattern: "His argument is not entirely convincing.",
      example: "The new theory is entirely convincing."
    }
  },
  {
    phrase: "entirely satisfactory",
    type: "副詞 + 形容詞",
    chinese: "完全令人滿意的",
    keywords: ["entirely", "satisfactory"],
    example: {
      english: "The results of the recent medical tests were entirely satisfactory to the doctor.",
      chinese: "最近的醫學檢驗結果令醫生完全滿意。",
      grammar_point: "be entirely satisfactory（指事物本身令人滿意）"
    },
    vocabulary: [
      { word: "satisfactory", pos: "adj.", chinese: "令人滿意的" },
      { word: "medical", pos: "adj.", chinese: "醫學的" },
      { word: "test", pos: "n.", chinese: "測驗、檢驗" }
    ],
    sentence_pattern: {
      pattern: "N + is entirely satisfactory",
      example: "The customer service was entirely satisfactory."
    }
  },
  {
    phrase: "eternally grateful",
    type: "副詞 + 形容詞",
    chinese: "永遠感激的",
    keywords: ["eternally", "grateful"],
    example: {
      english: "I will be eternally grateful to the brave firefighter who saved my dog's life.",
      chinese: "我將永遠感激那位拯救了我的狗的勇敢消防員。",
      grammar_point: "be eternally grateful to + 人（對某人永遠感激）"
    },
    vocabulary: [
      { word: "eternally", pos: "adv.", chinese: "永遠地" },
      { word: "grateful", pos: "adj.", chinese: "感激的" },
      { word: "firefighter", pos: "n.", chinese: "消防員" }
    ],
    sentence_pattern: {
      pattern: "S + will be eternally grateful for + N",
      example: "She is eternally grateful for your help."
    }
  },
  {
    phrase: "fiercely competitive",
    type: "副詞 + 形容詞",
    chinese: "競爭激烈的",
    keywords: ["fiercely", "competitive"],
    example: {
      english: "The smartphone market has become fiercely competitive over the past decade.",
      chinese: "在過去的十年裡，智慧型手機市場變得競爭極為激烈。",
      grammar_point: "fiercely competitive（形容市場、比賽等）"
    },
    vocabulary: [
      { word: "fiercely", pos: "adv.", chinese: "猛烈地、極度地" },
      { word: "competitive", pos: "adj.", chinese: "競爭的" },
      { word: "decade", pos: "n.", chinese: "十年" }
    ],
    sentence_pattern: {
      pattern: "The market/industry is fiercely competitive",
      example: "Getting into that school is fiercely competitive."
    }
  },
  {
    phrase: "fully aware",
    type: "副詞 + 形容詞",
    chinese: "充分了解的、完全意識到的",
    keywords: ["fully", "aware"],
    example: {
      english: "You should be fully aware of the potential risks before signing the contract.",
      chinese: "在簽署合約之前，你應該完全了解潛在的風險。",
      grammar_point: "be fully aware of + N（完全清楚...）"
    },
    vocabulary: [
      { word: "fully", pos: "adv.", chinese: "完全地、充分地" },
      { word: "potential", pos: "adj.", chinese: "潛在的" },
      { word: "risk", pos: "n.", chinese: "風險" }
    ],
    sentence_pattern: {
      pattern: "S + be fully aware of + N",
      example: "I am fully aware of the problem."
    }
  },
  {
    phrase: "happily married",
    type: "副詞 + 過去分詞",
    chinese: "婚姻幸福的",
    keywords: ["happily", "married"],
    example: {
      english: "They have been happily married for over fifty years and still hold hands.",
      chinese: "他們已經幸福地結婚超過五十年了，而且仍然會牽手。",
      grammar_point: "be happily married（處於幸福的婚姻狀態）"
    },
    vocabulary: [
      { word: "happily", pos: "adv.", chinese: "快樂地、幸福地" },
      { word: "married", pos: "adj.", chinese: "已婚的" },
      { word: "hold hands", pos: "phr.", chinese: "牽手" }
    ],
    sentence_pattern: {
      pattern: "S + have been happily married for + 時間",
      example: "My grandparents are happily married."
    }
  },
  {
    phrase: "heavily armed",
    type: "副詞 + 過去分詞",
    chinese: "全副武裝的",
    keywords: ["heavily", "armed"],
    example: {
      english: "The bank was surrounded by heavily armed police officers during the robbery.",
      chinese: "在搶劫期間，銀行被全副武裝的警察包圍了。",
      grammar_point: "heavily armed + N（配備重型武器的...）"
    },
    vocabulary: [
      { word: "heavily", pos: "adv.", chinese: "沉重地、大量地" },
      { word: "armed", pos: "adj.", chinese: "武裝的" },
      { word: "surround", pos: "v.", chinese: "包圍" }
    ],
    sentence_pattern: {
      pattern: "The soldiers were heavily armed.",
      example: "Heavily armed guards stood at the gate."
    }
  },
  {
    phrase: "hideously disfigured",
    type: "副詞 + 過去分詞",
    chinese: "嚴重毀容的",
    keywords: ["hideously", "disfigured"],
    example: {
      english: "The victim's face was hideously disfigured in the terrible chemical explosion.",
      chinese: "受害者的臉在那場可怕的化學爆炸中嚴重毀容。",
      grammar_point: "hideously 作為強調副詞，形容外表極度受損"
    },
    vocabulary: [
      { word: "hideously", pos: "adv.", chinese: "可怕地、極醜地" },
      { word: "disfigured", pos: "adj.", chinese: "毀容的" },
      { word: "explosion", pos: "n.", chinese: "爆炸" }
    ],
    sentence_pattern: {
      pattern: "S + be hideously disfigured",
      example: "He survived but was hideously disfigured."
    }
  },
  {
    phrase: "highly commended",
    type: "副詞 + 過去分詞",
    chinese: "受到高度讚揚的",
    keywords: ["highly", "commended"],
    example: {
      english: "Her efforts in organizing the charity event were highly commended by the mayor.",
      chinese: "她在組織慈善活動上的努力受到了市長的高度讚揚。",
      grammar_point: "be highly commended for + N（因...受到高度讚揚）"
    },
    vocabulary: [
      { word: "highly", pos: "adv.", chinese: "高度地" },
      { word: "commend", pos: "v.", chinese: "稱讚、表揚" },
      { word: "charity", pos: "n.", chinese: "慈善" }
    ],
    sentence_pattern: {
      pattern: "S + be highly commended by + N",
      example: "The artwork was highly commended by the judges."
    }
  },
  {
    phrase: "highly contagious",
    type: "副詞 + 形容詞",
    chinese: "高度傳染性的",
    keywords: ["highly", "contagious"],
    example: {
      english: "The new virus is highly contagious and can spread quickly through the air.",
      chinese: "這種新病毒具有高度傳染性，可以透過空氣迅速傳播。",
      grammar_point: "highly contagious（常用於醫療、公衛文章）"
    },
    vocabulary: [
      { word: "contagious", pos: "adj.", chinese: "會傳染的" },
      { word: "virus", pos: "n.", chinese: "病毒" },
      { word: "spread", pos: "v.", chinese: "散播、傳播" }
    ],
    sentence_pattern: {
      pattern: "The disease is highly contagious.",
      example: "Keep away from him; his cold is highly contagious."
    }
  },
  {
    phrase: "highly impressed",
    type: "副詞 + 過去分詞",
    chinese: "印象非常深刻的",
    keywords: ["highly", "impressed"],
    example: {
      english: "The interviewers were highly impressed by her fluent English and confidence.",
      chinese: "面試官對她流利的英文和自信留下了極為深刻的印象。",
      grammar_point: "be highly impressed by/with + N（對...印象極佳）"
    },
    vocabulary: [
      { word: "impressed", pos: "adj.", chinese: "印象深刻的" },
      { word: "fluent", pos: "adj.", chinese: "流利的" },
      { word: "confidence", pos: "n.", chinese: "自信" }
    ],
    sentence_pattern: {
      pattern: "S + be highly impressed with + N",
      example: "I am highly impressed by your work."
    }
  },
  {
    phrase: "highly profitable",
    type: "副詞 + 形容詞",
    chinese: "高利潤的、非常賺錢的",
    keywords: ["highly", "profitable"],
    example: {
      english: "Investing in renewable energy has proven to be a highly profitable business.",
      chinese: "投資再生能源已被證明是一項利潤豐厚的事業。",
      grammar_point: "highly profitable（常用於商業與經濟文章）"
    },
    vocabulary: [
      { word: "profitable", pos: "adj.", chinese: "有利潤的" },
      { word: "renewable", pos: "adj.", chinese: "可再生的" },
      { word: "invest", pos: "v.", chinese: "投資" }
    ],
    sentence_pattern: {
      pattern: "N + is a highly profitable business.",
      example: "The tech industry is highly profitable."
    }
  },
  {
    phrase: "highly unlikely",
    type: "副詞 + 形容詞",
    chinese: "極不可能的",
    keywords: ["highly", "unlikely"],
    example: {
      english: "It is highly unlikely that it will snow in southern Taiwan during winter.",
      chinese: "台灣南部在冬天降雪是極不可能的。",
      grammar_point: "It is highly unlikely that + 子句（...是非常不可能發生的）"
    },
    vocabulary: [
      { word: "unlikely", pos: "adj.", chinese: "不可能的" },
      { word: "southern", pos: "adj.", chinese: "南方的" },
      { word: "winter", pos: "n.", chinese: "冬天" }
    ],
    sentence_pattern: {
      pattern: "It is highly unlikely to + V",
      example: "His success is highly unlikely without your help."
    }
  },
  {
    phrase: "highly unusual",
    type: "副詞 + 形容詞",
    chinese: "極不尋常的",
    keywords: ["highly", "unusual"],
    example: {
      english: "It is highly unusual for the punctual professor to be late for class.",
      chinese: "對於這位守時的教授來說，上課遲到是極不尋常的。",
      grammar_point: "It is highly unusual for + O + to V（某人做某事極不尋常）"
    },
    vocabulary: [
      { word: "unusual", pos: "adj.", chinese: "不尋常的" },
      { word: "punctual", pos: "adj.", chinese: "守時的" },
      { word: "professor", pos: "n.", chinese: "教授" }
    ],
    sentence_pattern: {
      pattern: "It is highly unusual that + S + V",
      example: "This kind of weather is highly unusual here."
    }
  },
  {
    phrase: "mildly amused",
    type: "副詞 + 過去分詞",
    chinese: "覺得有點好笑的",
    keywords: ["mildly", "amused"],
    example: {
      english: "She was mildly amused by his clumsy attempts to impress her.",
      chinese: "她對他為了讓她印象深刻而做出的笨拙嘗試覺得有點好笑。",
      grammar_point: "be mildly amused by + N（被...稍微逗樂）"
    },
    vocabulary: [
      { word: "mildly", pos: "adv.", chinese: "溫和地、稍微地" },
      { word: "amused", pos: "adj.", chinese: "覺得有趣的" },
      { word: "clumsy", pos: "adj.", chinese: "笨拙的" }
    ],
    sentence_pattern: {
      pattern: "S + look/be mildly amused",
      example: "He watched the kids play, mildly amused."
    }
  },
  {
    phrase: "painfully obvious",
    type: "副詞 + 形容詞",
    chinese: "極其明顯的（明顯到令人難受的地步）",
    keywords: ["painfully", "obvious"],
    example: {
      english: "It was painfully obvious that he hadn't prepared for the presentation at all.",
      chinese: "他完全沒有為報告做準備，這是極其明顯的。",
      grammar_point: "It is painfully obvious that + 子句"
    },
    vocabulary: [
      { word: "painfully", pos: "adv.", chinese: "痛苦地、極其" },
      { word: "obvious", pos: "adj.", chinese: "明顯的" },
      { word: "presentation", pos: "n.", chinese: "上台報告" }
    ],
    sentence_pattern: {
      pattern: "The truth was painfully obvious.",
      example: "It is painfully obvious that she is lying."
    }
  },
  {
    phrase: "painfully shy",
    type: "副詞 + 形容詞",
    chinese: "極度害羞的",
    keywords: ["painfully", "shy"],
    example: {
      english: "As a child, he was so painfully shy that he rarely spoke to strangers.",
      chinese: "小時候，他極度害羞，幾乎不跟陌生人說話。",
      grammar_point: "so painfully shy that...（如此害羞以至於...）"
    },
    vocabulary: [
      { word: "shy", pos: "adj.", chinese: "害羞的" },
      { word: "rarely", pos: "adv.", chinese: "很少、幾乎不" },
      { word: "stranger", pos: "n.", chinese: "陌生人" }
    ],
    sentence_pattern: {
      pattern: "S + used to be painfully shy",
      example: "She is painfully shy around new people."
    }
  },
  {
    phrase: "patently obvious",
    type: "副詞 + 形容詞",
    chinese: "顯而易見的",
    keywords: ["patently", "obvious"],
    example: {
      english: "It is patently obvious that the company needs to change its marketing strategy.",
      chinese: "顯而易見地，這家公司需要改變其行銷策略。",
      grammar_point: "patently 意為「明白地、公然地」，常與 obvious 搭配"
    },
    vocabulary: [
      { word: "patently", pos: "adv.", chinese: "明白地、顯然地" },
      { word: "strategy", pos: "n.", chinese: "策略" },
      { word: "marketing", pos: "n.", chinese: "行銷" }
    ],
    sentence_pattern: {
      pattern: "It is patently obvious that + S + V",
      example: "His dislike for the plan is patently obvious."
    }
  },
  {
    phrase: "perfectly clear",
    type: "副詞 + 形容詞",
    chinese: "完全清楚的",
    keywords: ["perfectly", "clear"],
    example: {
      english: "Let me make it perfectly clear: I will not accept any more late assignments.",
      chinese: "讓我把話說得完全清楚：我不會再接受任何遲交的作業。",
      grammar_point: "make it perfectly clear that...（把...表達得非常清楚）"
    },
    vocabulary: [
      { word: "perfectly", pos: "adv.", chinese: "完美地、完全地" },
      { word: "accept", pos: "v.", chinese: "接受" },
      { word: "assignment", pos: "n.", chinese: "作業" }
    ],
    sentence_pattern: {
      pattern: "The instructions are perfectly clear.",
      example: "I hope I've made myself perfectly clear."
    }
  },
  {
    phrase: "perfectly normal",
    type: "副詞 + 形容詞",
    chinese: "完全正常的",
    keywords: ["perfectly", "normal"],
    example: {
      english: "It is perfectly normal to feel a bit anxious before a big job interview.",
      chinese: "在重要的大型面試前感到有點焦慮是完全正常的。",
      grammar_point: "It is perfectly normal to + V（做...完全正常）"
    },
    vocabulary: [
      { word: "normal", pos: "adj.", chinese: "正常的" },
      { word: "anxious", pos: "adj.", chinese: "焦慮的" },
      { word: "interview", pos: "n.", chinese: "面試" }
    ],
    sentence_pattern: {
      pattern: "It is perfectly normal for N to V",
      example: "This reaction is perfectly normal."
    }
  },
  {
    phrase: "perfectly reasonable",
    type: "副詞 + 形容詞",
    chinese: "完全合理的",
    keywords: ["perfectly", "reasonable"],
    example: {
      english: "It is perfectly reasonable to ask for a refund if the product is broken.",
      chinese: "如果產品損壞，要求退款是完全合理的。",
      grammar_point: "perfectly reasonable（常修飾要求、決定、價格等）"
    },
    vocabulary: [
      { word: "reasonable", pos: "adj.", chinese: "合理的" },
      { word: "ask for", pos: "phr.", chinese: "要求" },
      { word: "refund", pos: "n.", chinese: "退款" }
    ],
    sentence_pattern: {
      pattern: "S + sounds perfectly reasonable",
      example: "Her explanation was perfectly reasonable."
    }
  },
  {
    phrase: "readily available",
    type: "副詞 + 形容詞",
    chinese: "隨手可得的、容易取得的",
    keywords: ["readily", "available"],
    example: {
      english: "Information about healthy diets is readily available on the Internet nowadays.",
      chinese: "關於健康飲食的資訊現今在網路上隨手可得。",
      grammar_point: "be readily available（容易且快速能得到的）"
    },
    vocabulary: [
      { word: "readily", pos: "adv.", chinese: "迅速地、輕易地" },
      { word: "available", pos: "adj.", chinese: "可獲得的" },
      { word: "nowadays", pos: "adv.", chinese: "現今" }
    ],
    sentence_pattern: {
      pattern: "N + is readily available to the public",
      example: "Fresh water is readily available here."
    }
  },
  {
    phrase: "really amazing",
    type: "副詞 + 形容詞",
    chinese: "真的令人驚嘆的",
    keywords: ["really", "amazing"],
    example: {
      english: "The view from the top of the mountain is really amazing, especially at sunrise.",
      chinese: "從山頂看下去的景色真的令人驚嘆，尤其是在日出時。",
      grammar_point: "really 為口語常見加強語氣副詞"
    },
    vocabulary: [
      { word: "amazing", pos: "adj.", chinese: "令人驚奇的" },
      { word: "especially", pos: "adv.", chinese: "尤其" },
      { word: "sunrise", pos: "n.", chinese: "日出" }
    ],
    sentence_pattern: {
      pattern: "It is really amazing that + S + V",
      example: "She did a really amazing job."
    }
  },
  {
    phrase: "reasonably happy",
    type: "副詞 + 形容詞",
    chinese: "相當快樂的、差強人意的快樂",
    keywords: ["reasonably", "happy"],
    example: {
      english: "Despite his low income, he lives a simple life and feels reasonably happy.",
      chinese: "儘管收入微薄，他過著簡單的生活並感到相當快樂。",
      grammar_point: "reasonably（尚可地、理所當然地）"
    },
    vocabulary: [
      { word: "reasonably", pos: "adv.", chinese: "相當地、尚可地" },
      { word: "income", pos: "n.", chinese: "收入" },
      { word: "simple", pos: "adj.", chinese: "簡單的" }
    ],
    sentence_pattern: {
      pattern: "S + seems reasonably happy",
      example: "I am reasonably happy with my current situation."
    }
  },
  {
    phrase: "reasonably priced",
    type: "副詞 + 過去分詞",
    chinese: "價格公道的",
    keywords: ["reasonably", "priced"],
    example: {
      english: "This restaurant serves delicious Italian food and is reasonably priced.",
      chinese: "這家餐廳提供美味的義大利食物，而且價格公道。",
      grammar_point: "be reasonably priced（定價合理的）"
    },
    vocabulary: [
      { word: "priced", pos: "adj.", chinese: "定價的" },
      { word: "serve", pos: "v.", chinese: "提供、供應" },
      { word: "delicious", pos: "adj.", chinese: "美味的" }
    ],
    sentence_pattern: {
      pattern: "The goods are reasonably priced",
      example: "I am looking for a reasonably priced hotel."
    }
  },
  {
    phrase: "ridiculously cheap",
    type: "副詞 + 形容詞",
    chinese: "便宜得離譜的",
    keywords: ["ridiculously", "cheap"],
    example: {
      english: "I bought this second-hand jacket at a flea market; it was ridiculously cheap.",
      chinese: "我在跳蚤市場買了這件二手夾克；它便宜得離譜。",
      grammar_point: "ridiculously（荒謬地，常用於誇張語氣）"
    },
    vocabulary: [
      { word: "ridiculously", pos: "adv.", chinese: "荒謬地、可笑地" },
      { word: "second-hand", pos: "adj.", chinese: "二手的" },
      { word: "flea market", pos: "n.", chinese: "跳蚤市場" }
    ],
    sentence_pattern: {
      pattern: "N + is ridiculously cheap",
      example: "The rent in this small town is ridiculously cheap."
    }
  },
  {
    phrase: "scared stiff",
    type: "過去分詞 + 形容詞",
    chinese: "嚇呆了的、嚇得渾身僵硬的",
    keywords: ["scared", "stiff"],
    example: {
      english: "I was scared stiff when I saw a huge snake slithering across the floor.",
      chinese: "當我看到一條巨大的蛇在地板上滑行時，我嚇得渾身僵硬。",
      grammar_point: "be scared stiff（嚇呆了，stiff作補語修飾狀態）"
    },
    vocabulary: [
      { word: "stiff", pos: "adj.", chinese: "僵硬的" },
      { word: "slither", pos: "v.", chinese: "滑行" },
      { word: "floor", pos: "n.", chinese: "地板" }
    ],
    sentence_pattern: {
      pattern: "S + be scared stiff by + N",
      example: "She was scared stiff of the thunder."
    }
  },
  {
    phrase: "seriously ill",
    type: "副詞 + 形容詞",
    chinese: "病得很重的",
    keywords: ["seriously", "ill"],
    example: {
      english: "He had to cancel his concert because he became seriously ill overnight.",
      chinese: "他不得不取消演唱會，因為他一夜之間病得很重。",
      grammar_point: "become seriously ill（罹患重病）"
    },
    vocabulary: [
      { word: "seriously", pos: "adv.", chinese: "嚴重地" },
      { word: "cancel", pos: "v.", chinese: "取消" },
      { word: "overnight", pos: "adv.", chinese: "一夜之間" }
    ],
    sentence_pattern: {
      pattern: "S + fall/become seriously ill",
      example: "Her grandfather is seriously ill in the hospital."
    }
  },
  {
    phrase: "seriously injured",
    type: "副詞 + 過去分詞",
    chinese: "嚴重受傷的",
    keywords: ["seriously", "injured"],
    example: {
      english: "Fortunately, no one was seriously injured in the multiple-vehicle collision.",
      chinese: "幸運的是，在這次連環車禍中沒有人嚴重受傷。",
      grammar_point: "be seriously injured（受重傷，同義 badly injured）"
    },
    vocabulary: [
      { word: "fortunately", pos: "adv.", chinese: "幸運地" },
      { word: "multiple-vehicle", pos: "adj.", chinese: "多輛車的" },
      { word: "collision", pos: "n.", chinese: "碰撞、車禍" }
    ],
    sentence_pattern: {
      pattern: "S + be seriously injured in the accident",
      example: "The driver was seriously injured."
    }
  },
  {
    phrase: "seriously tempted",
    type: "副詞 + 過去分詞",
    chinese: "極度心動的、深受誘惑的",
    keywords: ["seriously", "tempted"],
    example: {
      english: "I am seriously tempted to quit my job and travel around the world.",
      chinese: "我極度心動想辭掉工作去環遊世界。",
      grammar_point: "be seriously tempted to + V（強烈想做某事/深受誘惑）"
    },
    vocabulary: [
      { word: "tempted", pos: "adj.", chinese: "受誘惑的" },
      { word: "quit", pos: "v.", chinese: "放棄、辭職" }
    ],
    sentence_pattern: {
      pattern: "S + be seriously tempted to + V",
      example: "She was seriously tempted to buy the expensive dress."
    }
  },
  {
    phrase: "sorely missed",
    type: "副詞 + 過去分詞",
    chinese: "被深深懷念的",
    keywords: ["sorely", "missed"],
    example: {
      english: "The generous old man passed away last week and will be sorely missed by the whole village.",
      chinese: "那位慷慨的老人上週過世了，全村人都會深深懷念他。",
      grammar_point: "will be sorely missed（常寫於訃聞或哀悼場合）"
    },
    vocabulary: [
      { word: "sorely", pos: "adv.", chinese: "極度地、強烈地" },
      { word: "generous", pos: "adj.", chinese: "慷慨的" },
      { word: "pass away", pos: "phr. v.", chinese: "過世" }
    ],
    sentence_pattern: {
      pattern: "S + will be sorely missed",
      example: "As a great teacher, he is sorely missed."
    }
  },
  {
    phrase: "strictly forbidden",
    type: "副詞 + 過去分詞",
    chinese: "嚴格禁止的",
    keywords: ["strictly", "forbidden"],
    example: {
      english: "Taking photos is strictly forbidden inside the museum to protect the ancient paintings.",
      chinese: "博物館內嚴格禁止拍照以保護古老畫作。",
      grammar_point: "V-ing is strictly forbidden（...被嚴格禁止）"
    },
    vocabulary: [
      { word: "strictly", pos: "adv.", chinese: "嚴格地" },
      { word: "forbidden", pos: "adj.", chinese: "被禁止的" },
      { word: "ancient", pos: "adj.", chinese: "古老的" }
    ],
    sentence_pattern: {
      pattern: "It is strictly forbidden to + V",
      example: "Smoking is strictly forbidden here."
    }
  },
  {
    phrase: "strongly opposed",
    type: "副詞 + 過去分詞",
    chinese: "強烈反對的",
    keywords: ["strongly", "opposed"],
    example: {
      english: "Local residents are strongly opposed to the plan of building a waste incinerator nearby.",
      chinese: "當地居民強烈反對在附近建造垃圾焚化爐的計畫。",
      grammar_point: "be strongly opposed to + N（極力反對...）"
    },
    vocabulary: [
      { word: "opposed", pos: "adj.", chinese: "反對的" },
      { word: "waste", pos: "n.", chinese: "廢棄物" },
      { word: "incinerator", pos: "n.", chinese: "焚化爐" }
    ],
    sentence_pattern: {
      pattern: "S + be strongly opposed to + N/V-ing",
      example: "He is strongly opposed to the new law."
    }
  },
  {
    phrase: "terribly disappointing",
    type: "副詞 + 形容詞/現在分詞",
    chinese: "令人極度失望的",
    keywords: ["terribly", "disappointing"],
    example: {
      english: "The sequel to the successful movie was terribly disappointing to most of the audience.",
      chinese: "這部成功電影的續集讓大部分的觀眾極度失望。",
      grammar_point: "terribly 此處作「非常、極度」解，修飾負面形容詞"
    },
    vocabulary: [
      { word: "terribly", pos: "adv.", chinese: "非常地、極度地" },
      { word: "disappointing", pos: "adj.", chinese: "令人失望的" },
      { word: "sequel", pos: "n.", chinese: "續集" }
    ],
    sentence_pattern: {
      pattern: "N + was terribly disappointing",
      example: "The weather was terribly disappointing during our trip."
    }
  },
  {
    phrase: "thoroughly spoilt",
    type: "副詞 + 過去分詞",
    chinese: "被徹底寵壞的",
    keywords: ["thoroughly", "spoilt"],
    example: {
      english: "The only child was thoroughly spoilt by his wealthy parents and never learned to share.",
      chinese: "這個獨生子被富有的父母徹底寵壞了，從未學會分享。",
      grammar_point: "be thoroughly spoilt（被完全溺愛/寵壞）"
    },
    vocabulary: [
      { word: "thoroughly", pos: "adv.", chinese: "徹底地" },
      { word: "spoilt", pos: "adj.", chinese: "被寵壞的" },
      { word: "wealthy", pos: "adj.", chinese: "富有的" }
    ],
    sentence_pattern: {
      pattern: "The child is thoroughly spoilt.",
      example: "They have a thoroughly spoilt dog."
    }
  },
  {
    phrase: "totally indifferent",
    type: "副詞 + 形容詞",
    chinese: "完全漠不關心的",
    keywords: ["totally", "indifferent"],
    example: {
      english: "He seemed totally indifferent to the suffering of the homeless people on the street.",
      chinese: "他似乎對街上無家可歸者的苦難完全漠不關心。",
      grammar_point: "be totally indifferent to + N（對...完全無動於衷）"
    },
    vocabulary: [
      { word: "totally", pos: "adv.", chinese: "完全地" },
      { word: "indifferent", pos: "adj.", chinese: "漠不關心的" },
      { word: "homeless", pos: "adj.", chinese: "無家可歸的" }
    ],
    sentence_pattern: {
      pattern: "S + be totally indifferent to + N",
      example: "She is totally indifferent to politics."
    }
  },
  {
    phrase: "totally unrealistic",
    type: "副詞 + 形容詞",
    chinese: "完全不切實際的",
    keywords: ["totally", "unrealistic"],
    example: {
      english: "Expecting to learn a new language fluently in just one week is totally unrealistic.",
      chinese: "期望在短短一週內流利地學會一門新語言是完全不切實際的。",
      grammar_point: "totally unrealistic（作補語，形容想法或計畫）"
    },
    vocabulary: [
      { word: "unrealistic", pos: "adj.", chinese: "不切實際的" },
      { word: "expect", pos: "v.", chinese: "期望" },
      { word: "fluently", pos: "adv.", chinese: "流利地" }
    ],
    sentence_pattern: {
      pattern: "Your plan is totally unrealistic.",
      example: "It is totally unrealistic to finish this today."
    }
  },
  {
    phrase: "totally unbelievable",
    type: "副詞 + 形容詞",
    chinese: "完全難以置信的",
    keywords: ["totally", "unbelievable"],
    example: {
      english: "The magic trick he performed on stage was totally unbelievable.",
      chinese: "他在舞台上表演的魔術完全令人難以置信。",
      grammar_point: "totally unbelievable（修飾令人驚嘆的事物）"
    },
    vocabulary: [
      { word: "unbelievable", pos: "adj.", chinese: "難以置信的" },
      { word: "magic trick", pos: "n.", chinese: "魔術" },
      { word: "perform", pos: "v.", chinese: "表演" }
    ],
    sentence_pattern: {
      pattern: "It is totally unbelievable that + S + V",
      example: "His excuse was totally unbelievable."
    }
  },
  {
    phrase: "utterly irresistible",
    type: "副詞 + 形容詞",
    chinese: "完全無法抗拒的",
    keywords: ["utterly", "irresistible"],
    example: {
      english: "The chocolate cake displayed in the bakery window was utterly irresistible.",
      chinese: "麵包店櫥窗裡展示的巧克力蛋糕完全讓人無法抗拒。",
      grammar_point: "utterly 意為「完全地、徹底地」，常修飾強烈情緒的形容詞"
    },
    vocabulary: [
      { word: "utterly", pos: "adv.", chinese: "完全地、徹底地" },
      { word: "irresistible", pos: "adj.", chinese: "無法抗拒的" },
      { word: "display", pos: "v.", chinese: "展示" }
    ],
    sentence_pattern: {
      pattern: "N + is utterly irresistible",
      example: "Her smile is utterly irresistible."
    }
  },
  {
    phrase: "utterly stupid",
    type: "副詞 + 形容詞",
    chinese: "愚蠢透頂的",
    keywords: ["utterly", "stupid"],
    example: {
      english: "It was utterly stupid of him to leave his wallet on the table in a busy cafe.",
      chinese: "他把錢包留在繁忙的咖啡館桌上，真是愚蠢透頂。",
      grammar_point: "It is utterly stupid of 人 to + V（某人做某事真是愚蠢）"
    },
    vocabulary: [
      { word: "stupid", pos: "adj.", chinese: "愚蠢的" },
      { word: "wallet", pos: "n.", chinese: "皮夾" },
      { word: "busy", pos: "adj.", chinese: "繁忙的" }
    ],
    sentence_pattern: {
      pattern: "It is utterly stupid to + V",
      example: "What you did was utterly stupid."
    }
  },
  {
    phrase: "vaguely familiar",
    type: "副詞 + 形容詞",
    chinese: "似曾相識的、隱約熟悉的",
    keywords: ["vaguely", "familiar"],
    example: {
      english: "The woman's face looked vaguely familiar, but I couldn't remember where we had met.",
      chinese: "那個女人的臉看起來似曾相識，但我記不起來我們在哪裡見過。",
      grammar_point: "look vaguely familiar（看起來有些面熟）"
    },
    vocabulary: [
      { word: "vaguely", pos: "adv.", chinese: "模糊地、隱約地" },
      { word: "familiar", pos: "adj.", chinese: "熟悉的" }
    ],
    sentence_pattern: {
      pattern: "S + look/sound vaguely familiar",
      example: "His name sounds vaguely familiar to me."
    }
  },
  {
    phrase: "vitally important",
    type: "副詞 + 形容詞",
    chinese: "極其重要的",
    keywords: ["vitally", "important"],
    example: {
      english: "It is vitally important to protect our environment for future generations.",
      chinese: "為了未來的子孫後代保護我們的環境是極其重要的。",
      grammar_point: "vitally = extremely，學測作文必用高級字"
    },
    vocabulary: [
      { word: "vitally", pos: "adv.", chinese: "極其、生死攸關地" },
      { word: "protect", pos: "v.", chinese: "保護" },
      { word: "generation", pos: "n.", chinese: "世代" }
    ],
    sentence_pattern: {
      pattern: "It is vitally important to + V",
      example: "Education is vitally important to society."
    }
  },
  {
    phrase: "widely accepted",
    type: "副詞 + 過去分詞",
    chinese: "被廣泛接受的",
    keywords: ["widely", "accepted"],
    example: {
      english: "Credit cards and mobile payments are now widely accepted in almost all stores.",
      chinese: "信用卡和行動支付現在在幾乎所有商店都被廣泛接受。",
      grammar_point: "be widely accepted（被大眾普遍認可/使用）"
    },
    vocabulary: [
      { word: "widely", pos: "adv.", chinese: "廣泛地" },
      { word: "accepted", pos: "adj.", chinese: "被接受的" },
      { word: "payment", pos: "n.", chinese: "支付" }
    ],
    sentence_pattern: {
      pattern: "The theory is widely accepted.",
      example: "English is a widely accepted international language."
    }
  },
  {
    phrase: "widely available",
    type: "副詞 + 形容詞",
    chinese: "廣泛可得的",
    keywords: ["widely", "available"],
    example: {
      english: "Fresh fruits and vegetables are widely available in traditional markets.",
      chinese: "新鮮水果和蔬菜在傳統市場裡廣泛可得。",
      grammar_point: "be widely available（到處都買得到/找得到）"
    },
    vocabulary: [
      { word: "available", pos: "adj.", chinese: "可獲得的" },
      { word: "traditional", pos: "adj.", chinese: "傳統的" },
      { word: "market", pos: "n.", chinese: "市場" }
    ],
    sentence_pattern: {
      pattern: "N + is widely available.",
      example: "Free Wi-Fi is widely available in the city."
    }
  },
  {
    phrase: "wildly optimistic",
    type: "副詞 + 形容詞",
    chinese: "極度樂觀的",
    keywords: ["wildly", "optimistic"],
    example: {
      english: "Some analysts are wildly optimistic about the economic growth next year.",
      chinese: "一些分析師對明年的經濟成長持極度樂觀的態度。",
      grammar_point: "wildly 此處作強調副詞，表示「極度、狂熱地」"
    },
    vocabulary: [
      { word: "wildly", pos: "adv.", chinese: "極度地、狂野地" },
      { word: "optimistic", pos: "adj.", chinese: "樂觀的" },
      { word: "analyst", pos: "n.", chinese: "分析師" }
    ],
    sentence_pattern: {
      pattern: "S + be wildly optimistic about + N",
      example: "He gave a wildly optimistic prediction."
    }
  },
  // ── Adverb + Verb (副詞修飾動詞 高階搭配) ──────────────────────────────────
  {
    phrase: "badly damage",
    type: "副詞 + 動詞",
    chinese: "嚴重損壞",
    keywords: ["badly", "damage"],
    example: {
      english: "The roof of the house was badly damaged by the strong typhoon.",
      chinese: "這棟房子的屋頂被強烈颱風嚴重損壞了。",
      grammar_point: "be badly damaged by + N（被...嚴重損壞）"
    },
    vocabulary: [
      { word: "badly", pos: "adv.", chinese: "嚴重地（修飾破壞、受傷等負面詞）" },
      { word: "damage", pos: "v.", chinese: "損害、破壞" },
      { word: "typhoon", pos: "n.", chinese: "颱風" }
    ],
    sentence_pattern: {
      pattern: "S + be badly damaged by + N",
      example: "His reputation was badly damaged by the scandal."
    }
  },
  {
    phrase: "badly hurt / injure",
    type: "副詞 + 動詞",
    chinese: "嚴重受傷",
    keywords: ["badly", "hurt", "injure"],
    example: {
      english: "Fortunately, the driver was only slightly bruised and not badly hurt in the accident.",
      chinese: "幸運的是，司機在車禍中只有輕微擦傷，並沒有嚴重受傷。",
      grammar_point: "be badly hurt/injured（受重傷）"
    },
    vocabulary: [
      { word: "fortunately", pos: "adv.", chinese: "幸運地" },
      { word: "bruised", pos: "adj.", chinese: "有瘀傷的" },
      { word: "accident", pos: "n.", chinese: "意外、車禍" }
    ],
    sentence_pattern: {
      pattern: "S + be badly hurt/injured in + N",
      example: "Several passengers were badly injured."
    }
  },
  {
    phrase: "badly need",
    type: "副詞 + 動詞",
    chinese: "迫切需要、極度需要",
    keywords: ["badly", "need"],
    example: {
      english: "After working 12 hours a day for a whole month, I badly need a vacation.",
      chinese: "整個月每天工作12小時後，我迫切需要一個假期。",
      grammar_point: "badly need + N / to V（極度需要...，badly 在此意為「非常、極度」）"
    },
    vocabulary: [
      { word: "whole", pos: "adj.", chinese: "整個的" },
      { word: "vacation", pos: "n.", chinese: "假期" }
    ],
    sentence_pattern: {
      pattern: "S + badly need + N/to V",
      example: "The building badly needs repairing."
    }
  },
  {
    phrase: "closely examine",
    type: "副詞 + 動詞",
    chinese: "仔細檢查",
    keywords: ["closely", "examine"],
    example: {
      english: "The detective closely examined the crime scene to look for any hidden clues.",
      chinese: "偵探仔細檢查了犯罪現場，以尋找任何隱藏的線索。",
      grammar_point: "closely examine + N（密切/仔細地檢視）"
    },
    vocabulary: [
      { word: "detective", pos: "n.", chinese: "偵探" },
      { word: "examine", pos: "v.", chinese: "檢查、檢視" },
      { word: "clue", pos: "n.", chinese: "線索" }
    ],
    sentence_pattern: {
      pattern: "S + closely examine + N",
      example: "We need to closely examine the data."
    }
  },
  {
    phrase: "completely forget",
    type: "副詞 + 動詞",
    chinese: "完全忘記",
    keywords: ["completely", "forget"],
    example: {
      english: "I was so busy this morning that I completely forgot to lock the front door.",
      chinese: "我今天早上太忙了，以至於完全忘記鎖前門。",
      grammar_point: "forget to + V（忘記要去做某事）"
    },
    vocabulary: [
      { word: "completely", pos: "adv.", chinese: "完全地" },
      { word: "forget", pos: "v.", chinese: "忘記" },
      { word: "lock", pos: "v.", chinese: "上鎖" }
    ],
    sentence_pattern: {
      pattern: "S + completely forget to + V / about N",
      example: "She completely forgot my birthday."
    }
  },
  {
    phrase: "completely destroy",
    type: "副詞 + 動詞",
    chinese: "完全摧毀",
    keywords: ["completely", "destroy"],
    example: {
      english: "The ancient temple was completely destroyed by a massive earthquake.",
      chinese: "這座古老的寺廟被一場大地震完全摧毀了。",
      grammar_point: "be completely destroyed by + N（被...徹底破壞）"
    },
    vocabulary: [
      { word: "ancient", pos: "adj.", chinese: "古老的" },
      { word: "temple", pos: "n.", chinese: "寺廟" },
      { word: "massive", pos: "adj.", chinese: "巨大的" }
    ],
    sentence_pattern: {
      pattern: "S + completely destroy + O",
      example: "The fire completely destroyed the building."
    }
  },
  {
    phrase: "deeply regret",
    type: "副詞 + 動詞",
    chinese: "深感遺憾、深深後悔",
    keywords: ["deeply", "regret"],
    example: {
      english: "I deeply regret not spending more time with my grandparents when they were alive.",
      chinese: "我深感遺憾在祖父母在世時沒有花更多時間陪伴他們。",
      grammar_point: "regret + V-ing（後悔做過/沒做過某事）"
    },
    vocabulary: [
      { word: "deeply", pos: "adv.", chinese: "深深地" },
      { word: "regret", pos: "v.", chinese: "後悔、遺憾" },
      { word: "alive", pos: "adj.", chinese: "活著的" }
    ],
    sentence_pattern: {
      pattern: "S + deeply regret + V-ing",
      example: "We deeply regret to inform you that the flight is canceled."
    }
  },
  {
    phrase: "distinctly remember",
    type: "副詞 + 動詞",
    chinese: "清楚地記得",
    keywords: ["distinctly", "remember"],
    example: {
      english: "I distinctly remember putting my keys on the table, but now they are gone.",
      chinese: "我清楚地記得把鑰匙放在桌上了，但現在它們不見了。",
      grammar_point: "remember + V-ing（記得做過某事）"
    },
    vocabulary: [
      { word: "distinctly", pos: "adv.", chinese: "清楚地、明確地" },
      { word: "remember", pos: "v.", chinese: "記得" },
      { word: "gone", pos: "adj.", chinese: "不見的、消失的" }
    ],
    sentence_pattern: {
      pattern: "S + distinctly remember + V-ing / N",
      example: "She distinctly remembered his face."
    }
  },
  {
    phrase: "firmly believe",
    type: "副詞 + 動詞",
    chinese: "堅信",
    keywords: ["firmly", "believe"],
    example: {
      english: "I firmly believe that honesty is always the best policy in any relationship.",
      chinese: "我堅信誠實永遠是任何關係中最好的策略。",
      grammar_point: "firmly believe that + 子句（堅信...）"
    },
    vocabulary: [
      { word: "firmly", pos: "adv.", chinese: "堅定地" },
      { word: "honesty", pos: "n.", chinese: "誠實" },
      { word: "policy", pos: "n.", chinese: "政策、策略" }
    ],
    sentence_pattern: {
      pattern: "S + firmly believe that + S + V",
      example: "He firmly believes in hard work."
    }
  },
  {
    phrase: "firmly reject",
    type: "副詞 + 動詞",
    chinese: "堅決拒絕",
    keywords: ["firmly", "reject"],
    example: {
      english: "The company firmly rejected the union's demands for higher wages.",
      chinese: "公司堅決拒絕了工會提高工資的要求。",
      grammar_point: "reject 為及物動詞，直接加名詞受詞"
    },
    vocabulary: [
      { word: "reject", pos: "v.", chinese: "拒絕" },
      { word: "demand", pos: "n.", chinese: "要求" },
      { word: "wage", pos: "n.", chinese: "工資、薪水" }
    ],
    sentence_pattern: {
      pattern: "S + firmly reject + N",
      example: "She firmly rejected his proposal."
    }
  },
  {
    phrase: "flatly refuse",
    type: "副詞 + 動詞",
    chinese: "斷然拒絕",
    keywords: ["flatly", "refuse"],
    example: {
      english: "When asked to help with the cheating, he flatly refused without hesitation.",
      chinese: "當被要求幫忙作弊時，他毫不猶豫地斷然拒絕了。",
      grammar_point: "refuse to + V（拒絕做...）"
    },
    vocabulary: [
      { word: "flatly", pos: "adv.", chinese: "斷然地、直截了當地" },
      { word: "refuse", pos: "v.", chinese: "拒絕" },
      { word: "hesitation", pos: "n.", chinese: "猶豫" }
    ],
    sentence_pattern: {
      pattern: "S + flatly refuse to + V",
      example: "They flatly refused our offer."
    }
  },
  {
    phrase: "freely admit",
    type: "副詞 + 動詞",
    chinese: "坦白承認",
    keywords: ["freely", "admit"],
    example: {
      english: "I freely admit that I made a terrible mistake in handling this situation.",
      chinese: "我坦白承認在處理這個情況時我犯了一個可怕的錯誤。",
      grammar_point: "admit + that 子句（承認...）"
    },
    vocabulary: [
      { word: "freely", pos: "adv.", chinese: "坦白地、自由地" },
      { word: "admit", pos: "v.", chinese: "承認" },
      { word: "handle", pos: "v.", chinese: "處理" }
    ],
    sentence_pattern: {
      pattern: "S + freely admit that + S + V",
      example: "He freely admits his lack of experience."
    }
  },
  {
    phrase: "fully appreciate",
    type: "副詞 + 動詞",
    chinese: "充分體會、完全理解",
    keywords: ["fully", "appreciate"],
    example: {
      english: "You cannot fully appreciate the beauty of this poem until you read it aloud.",
      chinese: "直到你大聲朗讀這首詩，你才能充分體會它的美。",
      grammar_point: "not... until...（直到...才...）"
    },
    vocabulary: [
      { word: "appreciate", pos: "v.", chinese: "欣賞、體會、感激" },
      { word: "poem", pos: "n.", chinese: "詩" },
      { word: "aloud", pos: "adv.", chinese: "大聲地" }
    ],
    sentence_pattern: {
      pattern: "S + fully appreciate + N",
      example: "I fully appreciate your support during this hard time."
    }
  },
  {
    phrase: "fully recover",
    type: "副詞 + 動詞",
    chinese: "完全康復",
    keywords: ["fully", "recover"],
    example: {
      english: "It will take several months for the athlete to fully recover from the knee surgery.",
      chinese: "這位運動員需要幾個月的時間才能從膝蓋手術中完全康復。",
      grammar_point: "recover from + 疾病/手術（從...中康復）"
    },
    vocabulary: [
      { word: "recover", pos: "v.", chinese: "康復、恢復" },
      { word: "athlete", pos: "n.", chinese: "運動員" },
      { word: "surgery", pos: "n.", chinese: "手術" }
    ],
    sentence_pattern: {
      pattern: "S + fully recover from + N",
      example: "She has fully recovered from the flu."
    }
  },
  {
    phrase: "fully understand",
    type: "副詞 + 動詞",
    chinese: "完全理解",
    keywords: ["fully", "understand"],
    example: {
      english: "Please make sure you fully understand the rules before playing the game.",
      chinese: "在玩遊戲之前，請確保你完全理解規則。",
      grammar_point: "fully understand（比起 perfectly understand 更常用於表示透徹明白）"
    },
    vocabulary: [
      { word: "make sure", pos: "phr.", chinese: "確保" },
      { word: "understand", pos: "v.", chinese: "理解" },
      { word: "rule", pos: "n.", chinese: "規則" }
    ],
    sentence_pattern: {
      pattern: "S + fully understand + N/子句",
      example: "I fully understand your concerns."
    }
  },
  {
    phrase: "greatly admire",
    type: "副詞 + 動詞",
    chinese: "極度欽佩、非常欣賞",
    keywords: ["greatly", "admire"],
    example: {
      english: "I greatly admire my parents for their hard work and endless patience.",
      chinese: "我非常欽佩我父母的辛勤工作和無盡的耐心。",
      grammar_point: "admire 人 for 事物（因為某特質而欽佩某人）"
    },
    vocabulary: [
      { word: "greatly", pos: "adv.", chinese: "極大地、非常" },
      { word: "admire", pos: "v.", chinese: "欽佩、欣賞" },
      { word: "endless", pos: "adj.", chinese: "無盡的" }
    ],
    sentence_pattern: {
      pattern: "S + greatly admire + O + for + N",
      example: "We greatly admire his courage."
    }
  },
  {
    phrase: "highly recommend",
    type: "副詞 + 動詞",
    chinese: "強烈推薦",
    keywords: ["highly", "recommend"],
    example: {
      english: "I highly recommend this restaurant if you want to try authentic Thai food.",
      chinese: "如果你想嘗試道地的泰國菜，我強烈推薦這家餐廳。",
      grammar_point: "recommend + N / V-ing（推薦某物/推薦做某事）"
    },
    vocabulary: [
      { word: "highly", pos: "adv.", chinese: "高度地、強烈地" },
      { word: "recommend", pos: "v.", chinese: "推薦" },
      { word: "authentic", pos: "adj.", chinese: "道地的" }
    ],
    sentence_pattern: {
      pattern: "S + highly recommend + N / V-ing",
      example: "This book is highly recommended by teachers."
    }
  },
  {
    phrase: "hotly deny",
    type: "副詞 + 動詞",
    chinese: "強烈否認",
    keywords: ["hotly", "deny"],
    example: {
      english: "The politician hotly denied the rumors that he had taken bribes.",
      chinese: "該名政治人物強烈否認他收受賄賂的謠言。",
      grammar_point: "deny + N / V-ing（否認...）"
    },
    vocabulary: [
      { word: "hotly", pos: "adv.", chinese: "激烈地、強烈地" },
      { word: "deny", pos: "v.", chinese: "否認" },
      { word: "rumor", pos: "n.", chinese: "謠言" }
    ],
    sentence_pattern: {
      pattern: "S + hotly deny + N / V-ing",
      example: "He hotly denied stealing the money."
    }
  },
  {
    phrase: "rise steadily",
    type: "動詞 + 副詞",
    chinese: "穩定上升、穩定成長",
    keywords: ["rise", "steadily"],
    example: {
      english: "The cost of living in the city has risen steadily over the past few years.",
      chinese: "在過去的幾年中，這座城市的生活成本一直在穩定上升。",
      grammar_point: "steadily 修飾動詞 rise，常用於圖表題或經濟趨勢描寫"
    },
    vocabulary: [
      { word: "cost of living", pos: "n.", chinese: "生活花費" },
      { word: "rise", pos: "v.", chinese: "上升（過去分詞 risen）" },
      { word: "steadily", pos: "adv.", chinese: "穩定地" }
    ],
    sentence_pattern: {
      pattern: "N + rise steadily + 時間",
      example: "Global temperatures continue to rise steadily."
    }
  },
  {
    phrase: "seriously doubt",
    type: "副詞 + 動詞",
    chinese: "嚴重懷疑",
    keywords: ["seriously", "doubt"],
    example: {
      english: "I seriously doubt that he will be able to finish the project on his own.",
      chinese: "我嚴重懷疑他是否能夠獨自完成這個專案。",
      grammar_point: "doubt that + 子句（懷疑...是否能成真）"
    },
    vocabulary: [
      { word: "seriously", pos: "adv.", chinese: "嚴重地、認真地" },
      { word: "doubt", pos: "v.", chinese: "懷疑" },
      { word: "on one's own", pos: "phr.", chinese: "獨自地" }
    ],
    sentence_pattern: {
      pattern: "S + seriously doubt if/that + S + V",
      example: "Experts seriously doubt the accuracy of the report."
    }
  },
  {
    phrase: "seriously think / consider",
    type: "副詞 + 動詞",
    chinese: "認真思考、認真考慮",
    keywords: ["seriously", "think", "consider"],
    example: {
      english: "You should seriously consider applying for a scholarship to study abroad.",
      chinese: "你應該認真考慮申請獎學金出國留學。",
      grammar_point: "consider + V-ing（考慮做某事，必考接動名詞）"
    },
    vocabulary: [
      { word: "consider", pos: "v.", chinese: "考慮" },
      { word: "apply for", pos: "phr. v.", chinese: "申請" },
      { word: "scholarship", pos: "n.", chinese: "獎學金" }
    ],
    sentence_pattern: {
      pattern: "S + should seriously consider + V-ing",
      example: "I am seriously thinking about moving to another city."
    }
  },
  {
    phrase: "sincerely hope",
    type: "副詞 + 動詞",
    chinese: "真誠地希望",
    keywords: ["sincerely", "hope"],
    example: {
      english: "I sincerely hope that we can work together again in the near future.",
      chinese: "我真誠地希望我們在不久的將來能再次合作。",
      grammar_point: "sincerely hope that + 子句（常用於書信結尾或正式表達）"
    },
    vocabulary: [
      { word: "sincerely", pos: "adv.", chinese: "真誠地" },
      { word: "hope", pos: "v.", chinese: "希望" },
      { word: "near", pos: "adj.", chinese: "近的" }
    ],
    sentence_pattern: {
      pattern: "S + sincerely hope that + S + V",
      example: "We sincerely hope you will enjoy your stay."
    }
  },
  {
    phrase: "strongly advise",
    type: "副詞 + 動詞",
    chinese: "強烈建議",
    keywords: ["strongly", "advise"],
    example: {
      english: "Doctors strongly advise against eating raw meat due to health risks.",
      chinese: "由於健康風險，醫生強烈建議不要食用生肉。",
      grammar_point: "advise against + V-ing（建議不要做...） / advise O to V（建議某人做...）"
    },
    vocabulary: [
      { word: "advise", pos: "v.", chinese: "建議" },
      { word: "raw", pos: "adj.", chinese: "生的、未煮熟的" },
      { word: "risk", pos: "n.", chinese: "風險" }
    ],
    sentence_pattern: {
      pattern: "S + strongly advise + O + to V",
      example: "I strongly advise you to see a doctor."
    }
  },
  {
    phrase: "strongly / severely criticize",
    type: "副詞 + 動詞",
    chinese: "強烈/嚴厲批評",
    keywords: ["strongly", "severely", "criticize"],
    example: {
      english: "The mayor was severely criticized for his poor handling of the natural disaster.",
      chinese: "市長因其對自然災害的糟糕處理而受到嚴厲批評。",
      grammar_point: "be criticized for + N/V-ing（因為...被批評）"
    },
    vocabulary: [
      { word: "severely", pos: "adv.", chinese: "嚴厲地" },
      { word: "criticize", pos: "v.", chinese: "批評" },
      { word: "handling", pos: "n.", chinese: "處理" }
    ],
    sentence_pattern: {
      pattern: "S + be severely criticized for + N",
      example: "The new policy was strongly criticized by the public."
    }
  },
  {
    phrase: "totally agree",
    type: "副詞 + 動詞",
    chinese: "完全同意",
    keywords: ["totally", "agree"],
    example: {
      english: "I totally agree with your proposal; it solves our current problem perfectly.",
      chinese: "我完全同意你的提案；它完美地解決了我們目前的問題。",
      grammar_point: "agree with + 人/意見（同意某人/某意見）"
    },
    vocabulary: [
      { word: "totally", pos: "adv.", chinese: "完全地" },
      { word: "proposal", pos: "n.", chinese: "提案" },
      { word: "current", pos: "adj.", chinese: "目前的" }
    ],
    sentence_pattern: {
      pattern: "S + totally agree with + N",
      example: "We totally agree on this issue."
    }
  },
  {
    phrase: "totally convince",
    type: "副詞 + 動詞",
    chinese: "完全說服",
    keywords: ["totally", "convince"],
    example: {
      english: "His emotional speech totally convinced the jury of his innocence.",
      chinese: "他充滿感情的演說完全說服了陪審團相信他是無辜的。",
      grammar_point: "convince 人 of 事物（說服某人相信某事）"
    },
    vocabulary: [
      { word: "convince", pos: "v.", chinese: "說服、使相信" },
      { word: "jury", pos: "n.", chinese: "陪審團" },
      { word: "innocence", pos: "n.", chinese: "無辜、清白" }
    ],
    sentence_pattern: {
      pattern: "S + totally convince + O + to V / of N",
      example: "I am totally convinced that she is right."
    }
  },
  {
    phrase: "thoroughly enjoy",
    type: "副詞 + 動詞",
    chinese: "非常享受、盡情享受",
    keywords: ["thoroughly", "enjoy"],
    example: {
      english: "We thoroughly enjoyed the beautiful music at the concert last night.",
      chinese: "我們昨晚在音樂會上盡情享受了美妙的音樂。",
      grammar_point: "thoroughly（徹底地）用來加強 enjoy 的程度"
    },
    vocabulary: [
      { word: "thoroughly", pos: "adv.", chinese: "徹底地、非常" },
      { word: "enjoy", pos: "v.", chinese: "享受" },
      { word: "concert", pos: "n.", chinese: "音樂會" }
    ],
    sentence_pattern: {
      pattern: "S + thoroughly enjoy + N",
      example: "The kids thoroughly enjoyed the summer camp."
    }
  },
  {
    phrase: "thoroughly inspect",
    type: "副詞 + 動詞",
    chinese: "徹底檢查",
    keywords: ["thoroughly", "inspect"],
    example: {
      english: "The mechanics thoroughly inspected the airplane before allowing it to take off.",
      chinese: "技師們在允許飛機起飛前徹底檢查了它。",
      grammar_point: "before + V-ing（在...之前）"
    },
    vocabulary: [
      { word: "mechanic", pos: "n.", chinese: "技師、機械工" },
      { word: "inspect", pos: "v.", chinese: "檢查、視察" },
      { word: "take off", pos: "phr. v.", chinese: "起飛" }
    ],
    sentence_pattern: {
      pattern: "S + thoroughly inspect + N",
      example: "The building was thoroughly inspected for safety."
    }
  },
  {
    phrase: "vaguely remember",
    type: "副詞 + 動詞",
    chinese: "隱約記得",
    keywords: ["vaguely", "remember"],
    example: {
      english: "I vaguely remember meeting him at a party a few years ago.",
      chinese: "我隱約記得幾年前在一個派對上見過他。",
      grammar_point: "remember + V-ing（記得做過...）"
    },
    vocabulary: [
      { word: "vaguely", pos: "adv.", chinese: "模糊地、隱約地" },
      { word: "remember", pos: "v.", chinese: "記得" }
    ],
    sentence_pattern: {
      pattern: "S + vaguely remember + N / V-ing",
      example: "She vaguely remembers his phone number."
    }
  },
  // ── Verb + Adverb (動詞修飾副詞 高階搭配) ──────────────────────────────────
  {
    phrase: "act rashly",
    type: "動詞 + 副詞",
    chinese: "草率行事、魯莽行動",
    keywords: ["act", "rashly"],
    example: {
      english: "You should think twice before making a decision rather than act rashly.",
      chinese: "在做決定之前你應該三思，而不是草率行事。",
      grammar_point: "rather than + V 原形（而不是...）"
    },
    vocabulary: [
      { word: "rashly", pos: "adv.", chinese: "草率地、魯莽地" },
      { word: "think twice", pos: "phr.", chinese: "三思" },
      { word: "decision", pos: "n.", chinese: "決定" }
    ],
    sentence_pattern: {
      pattern: "S + shouldn't act rashly",
      example: "He regretted acting rashly in the meeting."
    }
  },
  {
    phrase: "change dramatically",
    type: "動詞 + 副詞",
    chinese: "發生戲劇性變化、大幅改變",
    keywords: ["change", "dramatically"],
    example: {
      english: "The weather in the mountains can change dramatically within a few hours.",
      chinese: "山區的天氣可能會在幾個小時內發生戲劇性的變化。",
      grammar_point: "dramatically 常搭配 change, increase, decrease 等趨勢動詞"
    },
    vocabulary: [
      { word: "dramatically", pos: "adv.", chinese: "戲劇性地、大幅地" },
      { word: "within", pos: "prep.", chinese: "在...之內" }
    ],
    sentence_pattern: {
      pattern: "N + change dramatically + 時間",
      example: "Her attitude changed dramatically after the trip."
    }
  },
  {
    phrase: "complain bitterly",
    type: "動詞 + 副詞",
    chinese: "強烈抱怨、苦苦抱怨",
    keywords: ["complain", "bitterly"],
    example: {
      english: "The passengers complained bitterly about the terrible service on the delayed flight.",
      chinese: "乘客們對延誤航班上糟糕的服務發出了強烈的抱怨。",
      grammar_point: "complain bitterly about + N（對...抱怨連連）"
    },
    vocabulary: [
      { word: "complain", pos: "v.", chinese: "抱怨" },
      { word: "bitterly", pos: "adv.", chinese: "痛苦地、憤恨地" },
      { word: "passenger", pos: "n.", chinese: "乘客" }
    ],
    sentence_pattern: {
      pattern: "S + complain bitterly about + N",
      example: "They complained bitterly about the noise."
    }
  },
  {
    phrase: "drive carefully",
    type: "動詞 + 副詞",
    chinese: "小心駕駛",
    keywords: ["drive", "carefully"],
    example: {
      english: "Please drive carefully, especially when the roads are wet and slippery.",
      chinese: "請小心駕駛，尤其是當路面潮濕且濕滑的時候。",
      grammar_point: "especially when...（尤其是當...時）"
    },
    vocabulary: [
      { word: "carefully", pos: "adv.", chinese: "小心地、謹慎地" },
      { word: "especially", pos: "adv.", chinese: "尤其" },
      { word: "slippery", pos: "adj.", chinese: "濕滑的" }
    ],
    sentence_pattern: {
      pattern: "Make sure you drive carefully.",
      example: "You must drive carefully in the heavy rain."
    }
  },
  {
    phrase: "listen attentively",
    type: "動詞 + 副詞",
    chinese: "專心聆聽",
    keywords: ["listen", "attentively"],
    example: {
      english: "The students listened attentively to the guest speaker's inspiring story.",
      chinese: "學生們專心聆聽客座講者鼓舞人心的故事。",
      grammar_point: "listen attentively to + N（專注地聽某人/某事）"
    },
    vocabulary: [
      { word: "attentively", pos: "adv.", chinese: "專心地、聚精會神地" },
      { word: "guest speaker", pos: "n.", chinese: "客座講者" },
      { word: "inspiring", pos: "adj.", chinese: "鼓舞人心的" }
    ],
    sentence_pattern: {
      pattern: "S + listen attentively to + O",
      example: "She listened attentively to the teacher's instructions."
    }
  },
  {
    phrase: "occur frequently",
    type: "動詞 + 副詞",
    chinese: "頻繁發生",
    keywords: ["occur", "frequently"],
    example: {
      english: "Earthquakes occur frequently in Taiwan due to its geographical location.",
      chinese: "由於其地理位置，台灣頻繁發生地震。",
      grammar_point: "occur 沒有被動語態，常與 frequently 搭配"
    },
    vocabulary: [
      { word: "occur", pos: "v.", chinese: "發生" },
      { word: "frequently", pos: "adv.", chinese: "頻繁地" },
      { word: "geographical", pos: "adj.", chinese: "地理的" }
    ],
    sentence_pattern: {
      pattern: "N + occur frequently + 地方/時間",
      example: "Traffic accidents occur frequently at this intersection."
    }
  },
  {
    phrase: "respond appropriately",
    type: "動詞 + 副詞",
    chinese: "做出適當回應",
    keywords: ["respond", "appropriately"],
    example: {
      english: "A good customer service representative must know how to respond appropriately to complaints.",
      chinese: "一位優秀的客服代表必須知道如何對客訴做出適當的回應。",
      grammar_point: "respond appropriately to + N（對...做出合宜的回應）"
    },
    vocabulary: [
      { word: "respond", pos: "v.", chinese: "回應" },
      { word: "appropriately", pos: "adv.", chinese: "適當地、合宜地" },
      { word: "complaint", pos: "n.", chinese: "客訴、抱怨" }
    ],
    sentence_pattern: {
      pattern: "S + respond appropriately to + N",
      example: "The government failed to respond appropriately to the crisis."
    }
  },
  {
    phrase: "rub gently",
    type: "動詞 + 副詞",
    chinese: "輕輕摩擦、輕柔地揉",
    keywords: ["rub", "gently"],
    example: {
      english: "She rubbed the baby's back gently to help him fall asleep.",
      chinese: "她輕輕地揉著嬰兒的背，幫助他入睡。",
      grammar_point: "help + O + V 原形（幫助某人做某事）"
    },
    vocabulary: [
      { word: "rub", pos: "v.", chinese: "摩擦、揉" },
      { word: "gently", pos: "adv.", chinese: "輕柔地、溫和地" },
      { word: "fall asleep", pos: "phr. v.", chinese: "入睡" }
    ],
    sentence_pattern: {
      pattern: "S + rub + O + gently",
      example: "He rubbed his tired eyes gently."
    }
  },
  {
    phrase: "state explicitly",
    type: "動詞 + 副詞",
    chinese: "明確指出、清楚說明",
    keywords: ["state", "explicitly"],
    example: {
      english: "The contract states explicitly that late payments will incur a penalty fee.",
      chinese: "合約明確指出，延遲付款將產生罰款。",
      grammar_point: "state explicitly that + 子句（明確陳述...）"
    },
    vocabulary: [
      { word: "explicitly", pos: "adv.", chinese: "明確地、明白地" },
      { word: "incur", pos: "v.", chinese: "招致、產生" },
      { word: "penalty", pos: "n.", chinese: "罰款、懲罰" }
    ],
    sentence_pattern: {
      pattern: "The document states explicitly that + S + V",
      example: "The rules state explicitly what is forbidden."
    }
  },
  {
    phrase: "use sparingly",
    type: "動詞 + 副詞",
    chinese: "節省使用、少量使用",
    keywords: ["use", "sparingly"],
    example: {
      english: "Natural resources like fresh water and fossil fuels should be used sparingly.",
      chinese: "像淡水和化石燃料等自然資源應該被節省使用。",
      grammar_point: "be used sparingly（被節省著用，常用於環保議題）"
    },
    vocabulary: [
      { word: "sparingly", pos: "adv.", chinese: "節儉地、少量地" },
      { word: "resource", pos: "n.", chinese: "資源" },
      { word: "fossil fuel", pos: "n.", chinese: "化石燃料" }
    ],
    sentence_pattern: {
      pattern: "N + should be used sparingly",
      example: "This strong spice must be used sparingly."
    }
  },
  {
    phrase: "vary greatly",
    type: "動詞 + 副詞",
    chinese: "差異很大、大不相同",
    keywords: ["vary", "greatly"],
    example: {
      english: "The prices of houses vary greatly depending on their location and size.",
      chinese: "房屋的價格會根據其地點和大小而有很大的差異。",
      grammar_point: "depending on + N（取決於...）"
    },
    vocabulary: [
      { word: "vary", pos: "v.", chinese: "變化、不同" },
      { word: "greatly", pos: "adv.", chinese: "極大地、大大地" },
      { word: "location", pos: "n.", chinese: "地點、位置" }
    ],
    sentence_pattern: {
      pattern: "N + vary greatly depending on + N",
      example: "Opinions on this issue vary greatly."
    }
  },
  {
    phrase: "wave frantically",
    type: "動詞 + 副詞",
    chinese: "拼命揮手、瘋狂揮舞",
    keywords: ["wave", "frantically"],
    example: {
      english: "The lost hiker stood on the hill and waved frantically at the rescue helicopter.",
      chinese: "迷路的登山客站在山丘上，向救援直升機拼命揮手。",
      grammar_point: "wave frantically at + N（朝...瘋狂揮手，作文動作描寫神句）"
    },
    vocabulary: [
      { word: "wave", pos: "v.", chinese: "揮手、揮舞" },
      { word: "frantically", pos: "adv.", chinese: "瘋狂地、拼命地" },
      { word: "rescue", pos: "n.", chinese: "救援" }
    ],
    sentence_pattern: {
      pattern: "S + wave frantically at/to + O",
      example: "She waved frantically to get my attention."
    }
  },
  {
    phrase: "work effectively",
    type: "動詞 + 副詞",
    chinese: "有效運作、高效工作",
    keywords: ["work", "effectively"],
    example: {
      english: "To work effectively as a team, members must communicate well with each other.",
      chinese: "為了作為一個團隊有效運作，成員們必須彼此良好溝通。",
      grammar_point: "To + V..., S + V（不定詞放句首表目的）"
    },
    vocabulary: [
      { word: "effectively", pos: "adv.", chinese: "有效地" },
      { word: "communicate", pos: "v.", chinese: "溝通" },
      { word: "member", pos: "n.", chinese: "成員" }
    ],
    sentence_pattern: {
      pattern: "S + work effectively to + V",
      example: "The new system works effectively."
    }
  },
  {
    phrase: "whisper softly",
    type: "動詞 + 副詞",
    chinese: "輕聲耳語、低聲細語",
    keywords: ["whisper", "softly"],
    example: {
      english: "She leaned over and whispered softly in my ear so that no one else could hear.",
      chinese: "她傾身靠過來，在我耳邊輕聲細語，這樣其他人都聽不到。",
      grammar_point: "so that + 子句（以便於...、為的是...）"
    },
    vocabulary: [
      { word: "whisper", pos: "v.", chinese: "耳語、低聲說" },
      { word: "softly", pos: "adv.", chinese: "輕柔地" },
      { word: "lean", pos: "v.", chinese: "傾斜、倚靠" }
    ],
    sentence_pattern: {
      pattern: "S + whisper softly in one's ear",
      example: "He whispered softly to the crying baby."
    }
  },
  // ── Verb + AT ─────────────────────────────────────────────────────────────
  {
    phrase: "aim at",
    type: "動詞 + 介系詞",
    chinese: "瞄準、針對",
    keywords: ["aim", "at"],
    example: {
      english: "The new marketing campaign is aimed at younger consumers.",
      chinese: "新的行銷活動是針對年輕消費者的。",
      grammar_point: "be aimed at + N（旨在...、針對...）"
    },
    vocabulary: [
      { word: "campaign", pos: "n.", chinese: "活動、運動" },
      { word: "consumer", pos: "n.", chinese: "消費者" }
    ],
    sentence_pattern: { pattern: "S + aim at + N", example: "The archer aimed at the target." }
  },
  {
    phrase: "arrive at",
    type: "動詞 + 介系詞",
    chinese: "到達（某小地點）、達成（結論）",
    keywords: ["arrive", "at"],
    example: {
      english: "After a long discussion, the committee finally arrived at a conclusion.",
      chinese: "經過漫長的討論，委員會終於達成了一個結論。",
      grammar_point: "arrive at + 小地點/結論/決定"
    },
    vocabulary: [
      { word: "discussion", pos: "n.", chinese: "討論" },
      { word: "conclusion", pos: "n.", chinese: "結論" }
    ],
    sentence_pattern: { pattern: "S + arrive at + N", example: "We arrived at the station on time." }
  },
  {
    phrase: "frown at",
    type: "動詞 + 介系詞",
    chinese: "對...皺眉頭（表示不滿）",
    keywords: ["frown", "at"],
    example: {
      english: "The teacher frowned at the students who were talking during the exam.",
      chinese: "老師對著考試時講話的學生皺眉頭。",
      grammar_point: "frown at + N（對...感到不悅而皺眉）"
    },
    vocabulary: [
      { word: "frown", pos: "v.", chinese: "皺眉" },
      { word: "during", pos: "prep.", chinese: "在...期間" }
    ],
    sentence_pattern: { pattern: "S + frown at + N", example: "She frowned at his rude behavior." }
  },
  {
    phrase: "gaze at",
    type: "動詞 + 介系詞",
    chinese: "凝視、注視",
    keywords: ["gaze", "at"],
    example: {
      english: "The lovers sat on the grass, gazing at the beautiful starry sky.",
      chinese: "這對戀人坐在草地上，凝視著美麗的星空。",
      grammar_point: "gaze at + N（帶有深情或驚嘆地注視）"
    },
    vocabulary: [
      { word: "gaze", pos: "v.", chinese: "凝視" },
      { word: "starry", pos: "adj.", chinese: "佈滿星星的" }
    ],
    sentence_pattern: { pattern: "S + gaze at + N", example: "He gazed at her in admiration." }
  },
  {
    phrase: "laugh at",
    type: "動詞 + 介系詞",
    chinese: "嘲笑、對...笑",
    keywords: ["laugh", "at"],
    example: {
      english: "It is cruel to laugh at someone's physical appearance or mistakes.",
      chinese: "嘲笑別人的外表或錯誤是很殘忍的。",
      grammar_point: "laugh at + N（嘲笑某人/某事）"
    },
    vocabulary: [
      { word: "cruel", pos: "adj.", chinese: "殘忍的" },
      { word: "appearance", pos: "n.", chinese: "外表" }
    ],
    sentence_pattern: { pattern: "Don't laugh at + N", example: "They laughed at my silly joke." }
  },
  {
    phrase: "look at",
    type: "動詞 + 介系詞",
    chinese: "看著",
    keywords: ["look", "at"],
    example: {
      english: "If you look at the graph carefully, you will notice a sharp decline in sales.",
      chinese: "如果你仔細看這張圖表，你會注意到銷售量有急劇的下降。",
      grammar_point: "look at + N（把目光轉向...）"
    },
    vocabulary: [
      { word: "graph", pos: "n.", chinese: "圖表" },
      { word: "decline", pos: "n.", chinese: "下降、衰退" }
    ],
    sentence_pattern: { pattern: "S + look at + N", example: "Look at the camera and smile." }
  },
  {
    phrase: "glance at",
    type: "動詞 + 介系詞",
    chinese: "瞥見、匆匆一瞥",
    keywords: ["glance", "at"],
    example: {
      english: "He just glanced at his watch and realized he was going to be late.",
      chinese: "他只瞥了一眼手錶，就意識到他要遲到了。",
      grammar_point: "glance at + N（迅速看一眼）"
    },
    vocabulary: [
      { word: "glance", pos: "v.", chinese: "瞥一眼" },
      { word: "realize", pos: "v.", chinese: "意識到" }
    ],
    sentence_pattern: { pattern: "S + glance at + N", example: "She glanced at the newspaper headlines." }
  },
  {
    phrase: "hint at",
    type: "動詞 + 介系詞",
    chinese: "暗示",
    keywords: ["hint", "at"],
    example: {
      english: "The principal hinted at the possibility of extending the summer vacation.",
      chinese: "校長暗示了延長暑假的可能性。",
      grammar_point: "hint at + N（不直接明說而暗示...）"
    },
    vocabulary: [
      { word: "hint", pos: "v.", chinese: "暗示" },
      { word: "possibility", pos: "n.", chinese: "可能性" },
      { word: "extend", pos: "v.", chinese: "延長" }
    ],
    sentence_pattern: { pattern: "S + hint at + N", example: "What are you hinting at?" }
  },
  {
    phrase: "marvel at",
    type: "動詞 + 介系詞",
    chinese: "對...感到驚奇/讚嘆",
    keywords: ["marvel", "at"],
    example: {
      english: "Tourists always marvel at the breathtaking beauty of the Grand Canyon.",
      chinese: "遊客總是對大峽谷令人驚嘆的美景感到讚嘆。",
      grammar_point: "marvel at + N（對...感到不可思議）"
    },
    vocabulary: [
      { word: "marvel", pos: "v.", chinese: "感到驚訝、讚嘆" },
      { word: "breathtaking", pos: "adj.", chinese: "令人嘆為觀止的" }
    ],
    sentence_pattern: { pattern: "S + marvel at + N", example: "I marvel at her endless energy." }
  },
  {
    phrase: "nod at",
    type: "動詞 + 介系詞",
    chinese: "向...點頭（表示同意或打招呼）",
    keywords: ["nod", "at"],
    example: {
      english: "He didn't say a word, but just nodded at me as he walked past.",
      chinese: "他一句話也沒說，只是在走過時向我點了點頭。",
      grammar_point: "nod at + 人（對某人點頭致意）"
    },
    vocabulary: [
      { word: "nod", pos: "v.", chinese: "點頭" },
      { word: "walk past", pos: "phr.", chinese: "走過、路過" }
    ],
    sentence_pattern: { pattern: "S + nod at + O", example: "She smiled and nodded at me." }
  },
  {
    phrase: "peer at",
    type: "動詞 + 介系詞",
    chinese: "費力地看、凝視",
    keywords: ["peer", "at"],
    example: {
      english: "The old man peered at the small letters on the medicine bottle through his thick glasses.",
      chinese: "老人透過厚厚的眼鏡，費力地看著藥瓶上的小字。",
      grammar_point: "peer at + N（因看不清而瞇著眼看）"
    },
    vocabulary: [
      { word: "peer", pos: "v.", chinese: "凝視、端詳" },
      { word: "thick", pos: "adj.", chinese: "厚的" }
    ],
    sentence_pattern: { pattern: "S + peer at + N", example: "He peered at the strange object in the dark." }
  },
  {
    phrase: "point at",
    type: "動詞 + 介系詞",
    chinese: "指著",
    keywords: ["point", "at"],
    example: {
      english: "It is considered impolite to point at people with your finger in many cultures.",
      chinese: "在許多文化中，用手指著別人被認為是不禮貌的。",
      grammar_point: "point at + 人/物（用手指著...）"
    },
    vocabulary: [
      { word: "impolite", pos: "adj.", chinese: "不禮貌的" },
      { word: "culture", pos: "n.", chinese: "文化" }
    ],
    sentence_pattern: { pattern: "S + point at + N", example: "The teacher pointed at the blackboard." }
  },
  {
    phrase: "shout at",
    type: "動詞 + 介系詞",
    chinese: "對...大吼大叫",
    keywords: ["shout", "at"],
    example: {
      english: "The coach shouted at the players because they were not following his instructions.",
      chinese: "教練對著球員們大吼大叫，因為他們沒有遵守他的指示。",
      grammar_point: "shout at + 人（帶有憤怒情緒對人吼叫）"
    },
    vocabulary: [
      { word: "coach", pos: "n.", chinese: "教練" },
      { word: "instruction", pos: "n.", chinese: "指示" }
    ],
    sentence_pattern: { pattern: "S + shout at + O", example: "Don't shout at me!" }
  },
  {
    phrase: "smile at",
    type: "動詞 + 介系詞",
    chinese: "對...微笑",
    keywords: ["smile", "at"],
    example: {
      english: "The friendly store clerk smiled at every customer who walked into the shop.",
      chinese: "友善的店員對每位走進店裡的顧客微笑。",
      grammar_point: "smile at + 人（對某人露出微笑）"
    },
    vocabulary: [
      { word: "clerk", pos: "n.", chinese: "店員" },
      { word: "customer", pos: "n.", chinese: "顧客" }
    ],
    sentence_pattern: { pattern: "S + smile at + O", example: "She smiled at the cute baby." }
  },
  {
    phrase: "stare at",
    type: "動詞 + 介系詞",
    chinese: "死盯著...看、瞪著",
    keywords: ["stare", "at"],
    example: {
      english: "It's rude to stare at strangers, even if they look very unusual.",
      chinese: "死盯著陌生人看是很無禮的，即使他們看起來很不尋常。",
      grammar_point: "stare at + N（目不轉睛地盯著）"
    },
    vocabulary: [
      { word: "stare", pos: "v.", chinese: "凝視、瞪著" },
      { word: "unusual", pos: "adj.", chinese: "不尋常的" }
    ],
    sentence_pattern: { pattern: "S + stare at + N", example: "Stop staring at the screen all day." }
  },
  {
    phrase: "wink at",
    type: "動詞 + 介系詞",
    chinese: "對...眨眼（表示使眼色或默許）",
    keywords: ["wink", "at"],
    example: {
      english: "He winked at me to let me know that it was just a secret joke.",
      chinese: "他對我眨了眨眼，讓我知道那只是一個祕密的玩笑。",
      grammar_point: "wink at + 人（對人使眼色） / wink at a fault（對過失睜一隻眼閉一隻眼）"
    },
    vocabulary: [
      { word: "wink", pos: "v.", chinese: "眨眼、使眼色" },
      { word: "secret", pos: "adj.", chinese: "祕密的" }
    ],
    sentence_pattern: { pattern: "S + wink at + O", example: "She winked at her friend." }
  },

  // ── Verb + ABOUT ──────────────────────────────────────────────────────────
  {
    phrase: "argue about",
    type: "動詞 + 介系詞",
    chinese: "爭論關於...",
    keywords: ["argue", "about"],
    example: {
      english: "The couple often argues about how to spend their limited budget.",
      chinese: "這對夫妻經常爭論該如何花費他們有限的預算。",
      grammar_point: "argue with 人 about 事物（與某人爭論某事）"
    },
    vocabulary: [
      { word: "argue", pos: "v.", chinese: "爭論" },
      { word: "limited", pos: "adj.", chinese: "有限的" },
      { word: "budget", pos: "n.", chinese: "預算" }
    ],
    sentence_pattern: { pattern: "S + argue about + N", example: "They are arguing about politics." }
  },
  {
    phrase: "ask about",
    type: "動詞 + 介系詞",
    chinese: "詢問關於...",
    keywords: ["ask", "about"],
    example: {
      english: "I called the hotel to ask about the availability of rooms for this weekend.",
      chinese: "我打電話給飯店，詢問這個週末是否還有空房。",
      grammar_point: "ask about + 事情（打聽/詢問某事的狀況）"
    },
    vocabulary: [
      { word: "availability", pos: "n.", chinese: "可得性、空房/空位" }
    ],
    sentence_pattern: { pattern: "S + ask about + N", example: "He asked about your health." }
  },
  {
    phrase: "boast about",
    type: "動詞 + 介系詞",
    chinese: "吹噓、誇耀",
    keywords: ["boast", "about"],
    example: {
      english: "He loves to boast about his rich family and expensive cars.",
      chinese: "他喜歡吹噓他富有的家庭和昂貴的汽車。",
      grammar_point: "boast about/of + N（誇耀...）"
    },
    vocabulary: [
      { word: "boast", pos: "v.", chinese: "吹噓、自誇" },
      { word: "expensive", pos: "adj.", chinese: "昂貴的" }
    ],
    sentence_pattern: { pattern: "S + boast about + N", example: "She boasted about her test scores." }
  },
  {
    phrase: "care about",
    type: "動詞 + 介系詞",
    chinese: "在乎、關心",
    keywords: ["care", "about"],
    example: {
      english: "If you really care about the environment, you should use less plastic.",
      chinese: "如果你真的在乎環境，你應該少用塑膠。",
      grammar_point: "care about + N（在乎某人/某事）"
    },
    vocabulary: [
      { word: "environment", pos: "n.", chinese: "環境" },
      { word: "plastic", pos: "n.", chinese: "塑膠" }
    ],
    sentence_pattern: { pattern: "S + care about + N", example: "I don't care about what others think." }
  },
  {
    phrase: "complain about",
    type: "動詞 + 介系詞",
    chinese: "抱怨關於...",
    keywords: ["complain", "about"],
    example: {
      english: "Students always complain about having too much homework during the holidays.",
      chinese: "學生們總是抱怨假期裡功課太多。",
      grammar_point: "complain to 人 about 事物（向某人抱怨某事）"
    },
    vocabulary: [
      { word: "complain", pos: "v.", chinese: "抱怨" },
      { word: "holiday", pos: "n.", chinese: "假期" }
    ],
    sentence_pattern: { pattern: "S + complain about + N", example: "He complained about the bad weather." }
  },
  {
    phrase: "feel about",
    type: "動詞 + 介系詞",
    chinese: "對...有什麼感覺/看法",
    keywords: ["feel", "about"],
    example: {
      english: "How do you feel about the new policy introduced by the principal?",
      chinese: "你對校長推出的新政策有什麼看法？",
      grammar_point: "How do you feel about + N?（詢問對方的意見/感受）"
    },
    vocabulary: [
      { word: "policy", pos: "n.", chinese: "政策" },
      { word: "introduce", pos: "v.", chinese: "推出、介紹" },
      { word: "principal", pos: "n.", chinese: "校長" }
    ],
    sentence_pattern: { pattern: "How do you feel about + N?", example: "I feel good about this decision." }
  },
  {
    phrase: "forget about",
    type: "動詞 + 介系詞",
    chinese: "忘記關於...",
    keywords: ["forget", "about"],
    example: {
      english: "I was so busy yesterday that I completely forgot about our dinner date.",
      chinese: "我昨天太忙了，完全忘記了我們的晚餐約會。",
      grammar_point: "forget about + N（把某事拋諸腦後）"
    },
    vocabulary: [
      { word: "completely", pos: "adv.", chinese: "完全地" },
      { word: "date", pos: "n.", chinese: "約會" }
    ],
    sentence_pattern: { pattern: "S + forget about + N", example: "Forget about the past and move on." }
  },
  {
    phrase: "hear about",
    type: "動詞 + 介系詞",
    chinese: "聽說關於...",
    keywords: ["hear", "about"],
    example: {
      english: "Did you hear about the massive earthquake that hit Japan yesterday?",
      chinese: "你聽說昨天襲擊日本的大地震了嗎？",
      grammar_point: "hear about + 事情（得知某事的消息）"
    },
    vocabulary: [
      { word: "massive", pos: "adj.", chinese: "巨大的" },
      { word: "earthquake", pos: "n.", chinese: "地震" }
    ],
    sentence_pattern: { pattern: "S + hear about + N", example: "I was shocked to hear about the accident." }
  },
  {
    phrase: "joke about",
    type: "動詞 + 介系詞",
    chinese: "拿...開玩笑",
    keywords: ["joke", "about"],
    example: {
      english: "Mental health is a serious issue, and we should never joke about it.",
      chinese: "心理健康是個嚴肅的議題，我們絕不應該拿它開玩笑。",
      grammar_point: "joke about + N（把某事當作玩笑）"
    },
    vocabulary: [
      { word: "mental health", pos: "n.", chinese: "心理健康" },
      { word: "issue", pos: "n.", chinese: "議題" }
    ],
    sentence_pattern: { pattern: "S + joke about + N", example: "He likes to joke about his own mistakes." }
  },
  {
    phrase: "know about",
    type: "動詞 + 介系詞",
    chinese: "知道關於...",
    keywords: ["know", "about"],
    example: {
      english: "I don't know much about art, but I think this painting is beautiful.",
      chinese: "我對藝術了解不多，但我覺得這幅畫很美。",
      grammar_point: "know about + N（對某領域或事物有所了解）"
    },
    vocabulary: [
      { word: "art", pos: "n.", chinese: "藝術" },
      { word: "painting", pos: "n.", chinese: "畫作" }
    ],
    sentence_pattern: { pattern: "S + know about + N", example: "What do you know about this company?" }
  },
  {
    phrase: "laugh about",
    type: "動詞 + 介系詞",
    chinese: "對...一笑置之、笑著談論",
    keywords: ["laugh", "about"],
    example: {
      english: "It was embarrassing at the time, but now we can just laugh about it.",
      chinese: "當時很令人尷尬，但現在我們對此只能一笑置之了。",
      grammar_point: "laugh about + 荒謬/好笑的事（事後笑看某事）"
    },
    vocabulary: [
      { word: "embarrassing", pos: "adj.", chinese: "令人尷尬的" },
      { word: "at the time", pos: "phr.", chinese: "在當時" }
    ],
    sentence_pattern: { pattern: "S + laugh about + N", example: "They laughed about their silly mistakes." }
  },
  {
    phrase: "quarrel about",
    type: "動詞 + 介系詞",
    chinese: "為...爭吵",
    keywords: ["quarrel", "about"],
    example: {
      english: "The kids are always quarreling about whose turn it is to play the video game.",
      chinese: "孩子們總是為了輪到誰玩電動而爭吵。",
      grammar_point: "quarrel with 人 about 事物（與某人吵架）"
    },
    vocabulary: [
      { word: "quarrel", pos: "v.", chinese: "爭吵" },
      { word: "turn", pos: "n.", chinese: "輪流、順序" }
    ],
    sentence_pattern: { pattern: "S + quarrel about + N", example: "Don't quarrel about trivial things." }
  },
  {
    phrase: "talk about",
    type: "動詞 + 介系詞",
    chinese: "談論關於...",
    keywords: ["talk", "about"],
    example: {
      english: "Let's sit down and talk about the details of the contract.",
      chinese: "讓我們坐下來談談合約的細節。",
      grammar_point: "talk about + N/V-ing（討論...）"
    },
    vocabulary: [
      { word: "detail", pos: "n.", chinese: "細節" },
      { word: "contract", pos: "n.", chinese: "合約" }
    ],
    sentence_pattern: { pattern: "S + talk about + N", example: "What are you talking about?" }
  },
  {
    phrase: "think about",
    type: "動詞 + 介系詞",
    chinese: "考慮、思考",
    keywords: ["think", "about"],
    example: {
      english: "I need some time to think about your offer before I give you an answer.",
      chinese: "在給你答覆之前，我需要一些時間來考慮你的提議。",
      grammar_point: "think about + N/V-ing（仔細考慮某事）"
    },
    vocabulary: [
      { word: "offer", pos: "n.", chinese: "提議、提供" },
      { word: "answer", pos: "n.", chinese: "答覆" }
    ],
    sentence_pattern: { pattern: "S + think about + N", example: "I am thinking about moving abroad." }
  },
  {
    phrase: "wonder about",
    type: "動詞 + 介系詞",
    chinese: "對...感到好奇/想知道",
    keywords: ["wonder", "about"],
    example: {
      english: "I have always wondered about the true meaning of human existence.",
      chinese: "我一直對人類存在的真正意義感到好奇。",
      grammar_point: "wonder about + N（在心中思索、想知道）"
    },
    vocabulary: [
      { word: "wonder", pos: "v.", chinese: "想知道、感到疑惑" },
      { word: "existence", pos: "n.", chinese: "存在" }
    ],
    sentence_pattern: { pattern: "S + wonder about + N", example: "He wondered about her sudden departure." }
  },
  {
    phrase: "worry about",
    type: "動詞 + 介系詞",
    chinese: "擔憂、發愁",
    keywords: ["worry", "about"],
    example: {
      english: "Don't worry about the small details; focus on the big picture instead.",
      chinese: "別擔心小細節；你應該專注於大局。",
      grammar_point: "worry about + N（作為動詞，主動表示擔憂）"
    },
    vocabulary: [
      { word: "worry", pos: "v.", chinese: "擔心" },
      { word: "big picture", pos: "n.", chinese: "大局、整體情況" }
    ],
    sentence_pattern: { pattern: "Don't worry about + N", example: "She worries about her grades too much." }
  },

  // ── Verb + FOR ────────────────────────────────────────────────────────────
  {
    phrase: "ask for",
    type: "動詞 + 介系詞",
    chinese: "要求、請求給予",
    keywords: ["ask", "for"],
    example: {
      english: "If you don't know how to solve the problem, you should ask for help.",
      chinese: "如果你不知道如何解決這個問題，你應該尋求幫助。",
      grammar_point: "ask 人 for 事物（向某人要某物）"
    },
    vocabulary: [
      { word: "solve", pos: "v.", chinese: "解決" },
      { word: "help", pos: "n.", chinese: "幫助" }
    ],
    sentence_pattern: { pattern: "S + ask for + N", example: "He asked for a raise in salary." }
  },
  {
    phrase: "account for",
    type: "動詞片語",
    chinese: "說明、對...負責、佔(...比例)",
    keywords: ["account", "for"],
    example: {
      english: "Students account for more than half of the population in this college town.",
      chinese: "在這座大學城裡，學生佔了總人口的一半以上。",
      grammar_point: "account for + 比例（佔了...比例，學測圖表題必考！）"
    },
    vocabulary: [
      { word: "account", pos: "v.", chinese: "說明、佔有" },
      { word: "population", pos: "n.", chinese: "人口" }
    ],
    sentence_pattern: { pattern: "S + account for + percentage", example: "Can you account for your absence?" }
  },
  {
    phrase: "apologize for",
    type: "動詞 + 介系詞",
    chinese: "為...道歉",
    keywords: ["apologize", "for"],
    example: {
      english: "The airline company apologized for the delay caused by bad weather.",
      chinese: "航空公司為惡劣天氣造成的延誤道歉。",
      grammar_point: "apologize to 人 for 事物（為了某事向某人道歉）"
    },
    vocabulary: [
      { word: "apologize", pos: "v.", chinese: "道歉" },
      { word: "airline", pos: "n.", chinese: "航空公司" },
      { word: "delay", pos: "n.", chinese: "延誤" }
    ],
    sentence_pattern: { pattern: "S + apologize for + V-ing/N", example: "I apologize for my mistake." }
  },
  {
    phrase: "apply for",
    type: "動詞 + 介系詞",
    chinese: "申請",
    keywords: ["apply", "for"],
    example: {
      english: "After graduation, he plans to apply for a job at an international bank.",
      chinese: "畢業後，他計畫申請一家國際銀行的工作。",
      grammar_point: "apply for + 職位/簽證/獎學金（申請某事物）"
    },
    vocabulary: [
      { word: "apply", pos: "v.", chinese: "申請" },
      { word: "graduation", pos: "n.", chinese: "畢業" }
    ],
    sentence_pattern: { pattern: "S + apply for + N", example: "She is applying for a scholarship." }
  },
  {
    phrase: "blame for",
    type: "動詞 + 介系詞",
    chinese: "責備、把...歸咎於",
    keywords: ["blame", "for"],
    example: {
      english: "Don't blame others for your own mistakes; take responsibility for your actions.",
      chinese: "不要因為自己的錯誤而責怪別人；為你的行為負起責任。",
      grammar_point: "blame 人 for 事情（因為某事怪罪某人）"
    },
    vocabulary: [
      { word: "blame", pos: "v.", chinese: "責備" },
      { word: "responsibility", pos: "n.", chinese: "責任" }
    ],
    sentence_pattern: { pattern: "S + blame O + for + N", example: "He blamed the traffic for being late." }
  },
  {
    phrase: "care for",
    type: "動詞片語",
    chinese: "照顧、喜歡",
    keywords: ["care", "for"],
    example: {
      english: "Nurses care for sick patients with great patience and love.",
      chinese: "護士們用極大的耐心和愛心照顧生病的病人。",
      grammar_point: "care for + N（照顧某人，同義 look after）"
    },
    vocabulary: [
      { word: "patient", pos: "n.", chinese: "病人" },
      { word: "patience", pos: "n.", chinese: "耐心" }
    ],
    sentence_pattern: { pattern: "S + care for + N", example: "Would you care for a cup of tea? (客氣詢問:要不要...)" }
  },
  {
    phrase: "hope for",
    type: "動詞 + 介系詞",
    chinese: "抱著希望、期待",
    keywords: ["hope", "for"],
    example: {
      english: "Although the situation looks bad, we must continue to hope for the best.",
      chinese: "儘管情況看起來很糟，我們還是必須繼續抱最好的希望。",
      grammar_point: "hope for the best（抱持最樂觀的期望）"
    },
    vocabulary: [
      { word: "situation", pos: "n.", chinese: "情況" },
      { word: "continue", pos: "v.", chinese: "繼續" }
    ],
    sentence_pattern: { pattern: "S + hope for + N", example: "The farmers are hoping for rain." }
  },
  {
    phrase: "look for",
    type: "動詞片語",
    chinese: "尋找",
    keywords: ["look", "for"],
    example: {
      english: "He spent the whole morning looking for his lost car keys.",
      chinese: "他花了一整個早上尋找他遺失的車鑰匙。",
      grammar_point: "spend 時間 V-ing（花時間做...）"
    },
    vocabulary: [
      { word: "whole", pos: "adj.", chinese: "整個的" },
      { word: "lost", pos: "adj.", chinese: "遺失的" }
    ],
    sentence_pattern: { pattern: "S + be looking for + N", example: "What are you looking for?" }
  },
  {
    phrase: "pay for",
    type: "動詞 + 介系詞",
    chinese: "付款買...、為...付出代價",
    keywords: ["pay", "for"],
    example: {
      english: "Let me pay for the dinner tonight; it's my treat.",
      chinese: "今晚的晚餐讓我來付錢吧；我請客。",
      grammar_point: "pay 錢 for 物（花錢買某物）"
    },
    vocabulary: [
      { word: "treat", pos: "n.", chinese: "請客、款待" }
    ],
    sentence_pattern: { pattern: "S + pay for + N", example: "Criminals must pay for their crimes." }
  },
  {
    phrase: "pray for",
    type: "動詞 + 介系詞",
    chinese: "為...祈禱",
    keywords: ["pray", "for"],
    example: {
      english: "People around the world are praying for the victims of the terrible earthquake.",
      chinese: "世界各地的人們都在為這場可怕地震的受害者祈禱。",
      grammar_point: "pray for + 人/事物（為...祈求）"
    },
    vocabulary: [
      { word: "pray", pos: "v.", chinese: "祈禱" },
      { word: "victim", pos: "n.", chinese: "受害者" }
    ],
    sentence_pattern: { pattern: "S + pray for + N", example: "We are praying for your quick recovery." }
  },
  {
    phrase: "search for",
    type: "動詞 + 介系詞",
    chinese: "搜尋、尋找",
    keywords: ["search", "for"],
    example: {
      english: "Scientists have been searching for a cure for this rare disease for decades.",
      chinese: "科學家們幾十年來一直在尋找治療這種罕見疾病的方法。",
      grammar_point: "search for = look for（但語氣更為正式、尋找範圍更大）"
    },
    vocabulary: [
      { word: "scientist", pos: "n.", chinese: "科學家" },
      { word: "cure", pos: "n.", chinese: "療法、解藥" },
      { word: "decade", pos: "n.", chinese: "十年" }
    ],
    sentence_pattern: { pattern: "S + search for + N", example: "They searched for evidence in the house." }
  },
  {
    phrase: "stand for",
    type: "動詞片語",
    chinese: "代表、象徵、容忍",
    keywords: ["stand", "for"],
    example: {
      english: "The letters WHO stand for the World Health Organization.",
      chinese: "字母 WHO 代表世界衛生組織。",
      grammar_point: "stand for + N（某縮寫代表什麼全名）"
    },
    vocabulary: [
      { word: "organization", pos: "n.", chinese: "組織" }
    ],
    sentence_pattern: { pattern: "A stands for B", example: "I will not stand for this kind of behavior. (容忍)" }
  },
  {
    phrase: "substitute for",
    type: "動詞 + 介系詞",
    chinese: "代替、取代",
    keywords: ["substitute", "for"],
    example: {
      english: "You can substitute honey for sugar if you want to bake a healthier cake.",
      chinese: "如果你想烤一個更健康的蛋糕，你可以用蜂蜜代替糖。",
      grammar_point: "substitute A for B（用 A 替代 B）"
    },
    vocabulary: [
      { word: "substitute", pos: "v.", chinese: "替代" },
      { word: "honey", pos: "n.", chinese: "蜂蜜" }
    ],
    sentence_pattern: { pattern: "S + substitute A for B", example: "Nothing can substitute for hard work." }
  },
  {
    phrase: "vote for",
    type: "動詞 + 介系詞",
    chinese: "投票給...",
    keywords: ["vote", "for"],
    example: {
      english: "Citizens are encouraged to vote for candidates who promise to improve education.",
      chinese: "鼓勵公民投票給承諾改善教育的候選人。",
      grammar_point: "vote for + 人/提案（支持某人）"
    },
    vocabulary: [
      { word: "citizen", pos: "n.", chinese: "公民" },
      { word: "candidate", pos: "n.", chinese: "候選人" },
      { word: "promise", pos: "v.", chinese: "承諾" }
    ],
    sentence_pattern: { pattern: "S + vote for + N", example: "Who did you vote for in the election?" }
  },
  {
    phrase: "wait for",
    type: "動詞 + 介系詞",
    chinese: "等待",
    keywords: ["wait", "for"],
    example: {
      english: "I have been waiting for the bus for over thirty minutes in the freezing cold.",
      chinese: "我在嚴寒中等公車已經超過三十分鐘了。",
      grammar_point: "wait for + 人/物（等待...）"
    },
    vocabulary: [
      { word: "freezing", pos: "adj.", chinese: "極冷的、結冰的" }
    ],
    sentence_pattern: { pattern: "S + wait for + N", example: "We are waiting for your reply." }
  },
  {
    phrase: "wish for",
    type: "動詞 + 介系詞",
    chinese: "期盼、盼望得到",
    keywords: ["wish", "for"],
    example: {
      english: "After a week of heavy rain, everyone is wishing for some sunshine.",
      chinese: "經過一週的暴雨後，每個人都盼望著能有些陽光。",
      grammar_point: "wish for + N（渴望某事物發生或得到）"
    },
    vocabulary: [
      { word: "sunshine", pos: "n.", chinese: "陽光" }
    ],
    sentence_pattern: { pattern: "S + wish for + N", example: "He blew out the candles and wished for a bike." }
  },

  // ── Verb + FROM ───────────────────────────────────────────────────────────
  {
    phrase: "abstain from",
    type: "動詞 + 介系詞",
    chinese: "戒除、放棄、棄權",
    keywords: ["abstain", "from"],
    example: {
      english: "The doctor advised him to abstain from drinking alcohol to protect his liver.",
      chinese: "醫生建議他戒酒以保護他的肝臟。",
      grammar_point: "abstain from + V-ing/N（主動地克制不做某事）"
    },
    vocabulary: [
      { word: "abstain", pos: "v.", chinese: "戒除、放棄" },
      { word: "alcohol", pos: "n.", chinese: "酒精" },
      { word: "liver", pos: "n.", chinese: "肝臟" }
    ],
    sentence_pattern: { pattern: "S + abstain from + V-ing", example: "Ten members voted yes, and two abstained from voting." }
  },
  {
    phrase: "bar from",
    type: "動詞 + 介系詞",
    chinese: "禁止...進入/參與",
    keywords: ["bar", "from"],
    example: {
      english: "The aggressive fan was barred from entering the stadium for five years.",
      chinese: "這名具攻擊性的球迷被禁止進入體育場五年。",
      grammar_point: "bar O from V-ing（禁止某人做...）"
    },
    vocabulary: [
      { word: "bar", pos: "v.", chinese: "阻擋、禁止" },
      { word: "aggressive", pos: "adj.", chinese: "具攻擊性的" },
      { word: "stadium", pos: "n.", chinese: "體育場" }
    ],
    sentence_pattern: { pattern: "S + be barred from + V-ing", example: "He is barred from leaving the country." }
  },
  {
    phrase: "benefit from",
    type: "動詞 + 介系詞",
    chinese: "從...獲益",
    keywords: ["benefit", "from"],
    example: {
      english: "Students can greatly benefit from reading a wide variety of books.",
      chinese: "學生可以透過廣泛閱讀各種書籍獲益良多。",
      grammar_point: "benefit from + N/V-ing（從...中得到好處）"
    },
    vocabulary: [
      { word: "benefit", pos: "v.", chinese: "獲益" },
      { word: "variety", pos: "n.", chinese: "多樣化、種類" }
    ],
    sentence_pattern: { pattern: "S + benefit from + N", example: "The whole town benefited from the new railway." }
  },
  {
    phrase: "borrow from",
    type: "動詞 + 介系詞",
    chinese: "向...借",
    keywords: ["borrow", "from"],
    example: {
      english: "I had to borrow some money from my parents to pay for my college tuition.",
      chinese: "我必須向父母借些錢來付我的大學學費。",
      grammar_point: "borrow 事物 from 人（向某人借入某物）"
    },
    vocabulary: [
      { word: "borrow", pos: "v.", chinese: "借入" },
      { word: "tuition", pos: "n.", chinese: "學費" }
    ],
    sentence_pattern: { pattern: "S + borrow N from O", example: "She borrowed a book from the library." }
  },
  {
    phrase: "differ from",
    type: "動詞 + 介系詞",
    chinese: "與...不同",
    keywords: ["differ", "from"],
    example: {
      english: "American English differs from British English in spelling and pronunciation.",
      chinese: "美式英文在拼字和發音上與英式英文有所不同。",
      grammar_point: "A differ from B in + 方面（A與B在...方面不同）"
    },
    vocabulary: [
      { word: "differ", pos: "v.", chinese: "不同、相異" },
      { word: "spelling", pos: "n.", chinese: "拼字" },
      { word: "pronunciation", pos: "n.", chinese: "發音" }
    ],
    sentence_pattern: { pattern: "A differs from B", example: "His opinion differs from mine." }
  },
  {
    phrase: "distract from",
    type: "動詞 + 介系詞",
    chinese: "使從...分心",
    keywords: ["distract", "from"],
    example: {
      english: "Loud music distracted him from his studies, causing him to make mistakes.",
      chinese: "大聲的音樂使他無法專心讀書，導致他犯了錯。",
      grammar_point: "distract 人 from 事物（使某人對某事分心）"
    },
    vocabulary: [
      { word: "distract", pos: "v.", chinese: "使分心" },
      { word: "cause", pos: "v.", chinese: "導致" }
    ],
    sentence_pattern: { pattern: "S + distract O from + V-ing", example: "Don't let your phone distract you from driving." }
  },
  {
    phrase: "escape from",
    type: "動詞 + 介系詞",
    chinese: "從...逃脫",
    keywords: ["escape", "from"],
    example: {
      english: "The prisoner managed to escape from the jail by digging a tunnel.",
      chinese: "這名囚犯藉由挖地道設法逃出了監獄。",
      grammar_point: "escape from + 地方/危險（逃出...）"
    },
    vocabulary: [
      { word: "escape", pos: "v.", chinese: "逃脫" },
      { word: "prisoner", pos: "n.", chinese: "囚犯" },
      { word: "tunnel", pos: "n.", chinese: "隧道" }
    ],
    sentence_pattern: { pattern: "S + escape from + N", example: "We went to the beach to escape from the city heat." }
  },
  {
    phrase: "hide from",
    type: "動詞 + 介系詞",
    chinese: "躲避、對...隱瞞",
    keywords: ["hide", "from"],
    example: {
      english: "The terrified cat tried to hide from the loud thunderstorm under the bed.",
      chinese: "這隻受驚的貓試圖躲在床下以避開巨大的雷雨。",
      grammar_point: "hide from + 人/事物（躲避... / 向...隱瞞）"
    },
    vocabulary: [
      { word: "terrified", pos: "adj.", chinese: "受驚嚇的" },
      { word: "thunderstorm", pos: "n.", chinese: "雷雨" }
    ],
    sentence_pattern: { pattern: "S + hide from + N", example: "You cannot hide the truth from the public." }
  },
  {
    phrase: "prohibit from",
    type: "動詞 + 介系詞",
    chinese: "禁止...做某事",
    keywords: ["prohibit", "from"],
    example: {
      english: "The law strictly prohibits stores from selling cigarettes to minors.",
      chinese: "法律嚴格禁止商店販售香菸給未成年人。",
      grammar_point: "prohibit O from V-ing（以法律或規定禁止某人做...）"
    },
    vocabulary: [
      { word: "prohibit", pos: "v.", chinese: "禁止" },
      { word: "cigarette", pos: "n.", chinese: "香菸" },
      { word: "minor", pos: "n.", chinese: "未成年人" }
    ],
    sentence_pattern: { pattern: "S + prohibit O from + V-ing", example: "Employees are prohibited from smoking inside." }
  },
  {
    phrase: "protect from",
    type: "動詞 + 介系詞",
    chinese: "保護...免受傷害",
    keywords: ["protect", "from"],
    example: {
      english: "Wearing sunglasses can protect your eyes from the harmful UV rays of the sun.",
      chinese: "戴太陽眼鏡可以保護你的眼睛免受太陽有害紫外線的傷害。",
      grammar_point: "protect O from N/V-ing（保護某人/物免於...）"
    },
    vocabulary: [
      { word: "protect", pos: "v.", chinese: "保護" },
      { word: "harmful", pos: "adj.", chinese: "有害的" },
      { word: "ray", pos: "n.", chinese: "光線" }
    ],
    sentence_pattern: { pattern: "S + protect O from + N", example: "Vaccines protect us from deadly diseases." }
  },
  {
    phrase: "recover from",
    type: "動詞 + 介系詞",
    chinese: "從...中復原、康復",
    keywords: ["recover", "from"],
    example: {
      english: "It took the country many years to recover from the devastating economic crisis.",
      chinese: "這個國家花了許多年的時間才從毀滅性的經濟危機中復原。",
      grammar_point: "recover from + 疾病/打擊（從...之中恢復）"
    },
    vocabulary: [
      { word: "recover", pos: "v.", chinese: "恢復、康復" },
      { word: "devastating", pos: "adj.", chinese: "毀滅性的" },
      { word: "crisis", pos: "n.", chinese: "危機" }
    ],
    sentence_pattern: { pattern: "S + recover from + N", example: "He is recovering from a bad cold." }
  },
  {
    phrase: "refrain from",
    type: "動詞 + 介系詞",
    chinese: "克制自己不要...、避免",
    keywords: ["refrain", "from"],
    example: {
      english: "Please refrain from using your mobile phones while the performance is ongoing.",
      chinese: "表演進行時，請避免使用您的手機。",
      grammar_point: "refrain from + V-ing（正式用語：克制不做...）"
    },
    vocabulary: [
      { word: "refrain", pos: "v.", chinese: "克制、避免" },
      { word: "ongoing", pos: "adj.", chinese: "進行中的" }
    ],
    sentence_pattern: { pattern: "Please refrain from + V-ing", example: "He refrained from making any comments." }
  },
  {
    phrase: "resign from",
    type: "動詞 + 介系詞",
    chinese: "辭去...職務",
    keywords: ["resign", "from"],
    example: {
      english: "After the scandal was exposed, the CEO was forced to resign from his position.",
      chinese: "醜聞曝光後，執行長被迫辭去他的職務。",
      grammar_point: "resign from + 職位/公司（辭去...）"
    },
    vocabulary: [
      { word: "resign", pos: "v.", chinese: "辭職" },
      { word: "expose", pos: "v.", chinese: "揭露、曝光" },
      { word: "position", pos: "n.", chinese: "職位" }
    ],
    sentence_pattern: { pattern: "S + resign from + N", example: "She resigned from the committee." }
  },
  {
    phrase: "save from",
    type: "動詞 + 介系詞",
    chinese: "從...中拯救出",
    keywords: ["save", "from"],
    example: {
      english: "The brave dog saved the little girl from drowning in the deep river.",
      chinese: "那隻勇敢的狗把小女孩從深河裡救了上來，免於溺水。",
      grammar_point: "save O from V-ing/N（拯救某人免於...）"
    },
    vocabulary: [
      { word: "brave", pos: "adj.", chinese: "勇敢的" },
      { word: "drown", pos: "v.", chinese: "溺水、淹死" }
    ],
    sentence_pattern: { pattern: "S + save O from + N/V-ing", example: "He saved his files from being deleted." }
  },
  {
    phrase: "stem from",
    type: "動詞片語",
    chinese: "源自於、起因於",
    keywords: ["stem", "from"],
    example: {
      english: "Her fear of dogs stems from a terrifying incident when she was a child.",
      chinese: "她對狗的恐懼源自於她小時候一次可怕的事件。",
      grammar_point: "stem from + N（某事物起源於...，極高頻學測單字）"
    },
    vocabulary: [
      { word: "stem", pos: "v.", chinese: "源自（名詞為莖/幹）" },
      { word: "terrifying", pos: "adj.", chinese: "令人恐懼的" },
      { word: "incident", pos: "n.", chinese: "事件" }
    ],
    sentence_pattern: { pattern: "A stems from B", example: "Most of his problems stem from his laziness." }
  },
  {
    phrase: "suffer from",
    type: "動詞 + 介系詞",
    chinese: "受...之苦、患有(疾病)",
    keywords: ["suffer", "from"],
    example: {
      english: "Due to the extreme heat, many elderly people are suffering from heatstroke.",
      chinese: "由於極端的高溫，許多老年人正患有中暑。",
      grammar_point: "suffer from + 疾病/痛苦（遭受...的折磨）"
    },
    vocabulary: [
      { word: "suffer", pos: "v.", chinese: "受苦" },
      { word: "elderly", pos: "adj.", chinese: "年長的" },
      { word: "heatstroke", pos: "n.", chinese: "中暑" }
    ],
    sentence_pattern: { pattern: "S + suffer from + N", example: "She suffers from terrible headaches." }
  },

  // ── Verb + IN ─────────────────────────────────────────────────────────────
  {
    phrase: "absorb in",
    type: "動詞 + 介系詞",
    chinese: "全神貫注於...",
    keywords: ["absorb", "in"],
    example: {
      english: "He was so absorbed in reading the novel that he didn't hear the phone ring.",
      chinese: "他全神貫注於閱讀那本小說，以至於沒聽到電話響。",
      grammar_point: "be absorbed in + N/V-ing（沉浸在...之中，常用被動語態）"
    },
    vocabulary: [
      { word: "absorb", pos: "v.", chinese: "吸收、使全神貫注" },
      { word: "novel", pos: "n.", chinese: "小說" }
    ],
    sentence_pattern: { pattern: "S + be absorbed in + V-ing", example: "She is completely absorbed in her work." }
  },
  {
    phrase: "believe in",
    type: "動詞 + 介系詞",
    chinese: "相信...的存在、對...有信心",
    keywords: ["believe", "in"],
    example: {
      english: "Even when everyone else doubted him, his parents always believed in his abilities.",
      chinese: "即使其他所有人都懷疑他，他的父母始終相信他的能力。",
      grammar_point: "believe in + 理念/神/人（信任、信仰）"
    },
    vocabulary: [
      { word: "doubt", pos: "v.", chinese: "懷疑" },
      { word: "ability", pos: "n.", chinese: "能力" }
    ],
    sentence_pattern: { pattern: "S + believe in + N", example: "Do you believe in ghosts?" }
  },
  {
    phrase: "confide in",
    type: "動詞 + 介系詞",
    chinese: "向...傾訴、信任某人",
    keywords: ["confide", "in"],
    example: {
      english: "She has no close friends, so she has no one to confide in when she is sad.",
      chinese: "她沒有親密的朋友，所以她傷心時沒有人可以傾訴。",
      grammar_point: "confide in + 人（信任並向某人吐露心聲）"
    },
    vocabulary: [
      { word: "confide", pos: "v.", chinese: "吐露、傾訴" },
      { word: "sad", pos: "adj.", chinese: "悲傷的" }
    ],
    sentence_pattern: { pattern: "S + confide in + O", example: "He confided his secrets in his brother." }
  },
  {
    phrase: "delight in",
    type: "動詞 + 介系詞",
    chinese: "以...為樂",
    keywords: ["delight", "in"],
    example: {
      english: "Some malicious people seem to delight in spreading rumors about others.",
      chinese: "有些惡意的人似乎以散播他人的謠言為樂。",
      grammar_point: "delight in + V-ing（喜歡做...，常指令人反感的事，或單純指樂趣）"
    },
    vocabulary: [
      { word: "delight", pos: "v.", chinese: "使高興、以...為樂" },
      { word: "malicious", pos: "adj.", chinese: "惡意的" },
      { word: "rumor", pos: "n.", chinese: "謠言" }
    ],
    sentence_pattern: { pattern: "S + delight in + V-ing", example: "My grandfather delights in gardening." }
  },
  {
    phrase: "dress in",
    type: "動詞 + 介系詞",
    chinese: "穿著...(顏色/款式的衣服)",
    keywords: ["dress", "in"],
    example: {
      english: "The mysterious woman was dressed entirely in black from head to toe.",
      chinese: "那個神祕的女人從頭到腳都穿著全黑的衣服。",
      grammar_point: "be dressed in + 顏色/衣服（穿著...）"
    },
    vocabulary: [
      { word: "mysterious", pos: "adj.", chinese: "神祕的" },
      { word: "entirely", pos: "adv.", chinese: "完全地" }
    ],
    sentence_pattern: { pattern: "S + be dressed in + N", example: "He dressed in a suit for the interview." }
  },
  {
    phrase: "engage in",
    type: "動詞片語",
    chinese: "參與、從事",
    keywords: ["engage", "in"],
    example: {
      english: "Students are encouraged to engage in extracurricular activities to develop social skills.",
      chinese: "鼓勵學生參與課外活動以發展社交技巧。",
      grammar_point: "engage in + N（投入、從事...活動）"
    },
    vocabulary: [
      { word: "engage", pos: "v.", chinese: "從事、參與" },
      { word: "extracurricular", pos: "adj.", chinese: "課外的" }
    ],
    sentence_pattern: { pattern: "S + engage in + N", example: "We shouldn't engage in illegal activities." }
  },
  {
    phrase: "enroll in",
    type: "動詞 + 介系詞",
    chinese: "註冊參加、報名(課程/學校)",
    keywords: ["enroll", "in"],
    example: {
      english: "I have decided to enroll in an online coding course to improve my skills.",
      chinese: "我決定報名參加一個線上寫程式課程來提升我的技能。",
      grammar_point: "enroll in + course/program（登記參加...）"
    },
    vocabulary: [
      { word: "enroll", pos: "v.", chinese: "註冊、入學" },
      { word: "coding", pos: "n.", chinese: "寫程式" }
    ],
    sentence_pattern: { pattern: "S + enroll in + N", example: "She enrolled in a yoga class." }
  },
  {
    phrase: "implicate in",
    type: "動詞 + 介系詞",
    chinese: "牽連於...(犯罪等)",
    keywords: ["implicate", "in"],
    example: {
      english: "Several high-ranking officials were implicated in the bribery scandal.",
      chinese: "幾名高階官員被牽連進了這起賄賂醜聞中。",
      grammar_point: "be implicated in + N（被捲入...負面事件）"
    },
    vocabulary: [
      { word: "implicate", pos: "v.", chinese: "牽連、暗示" },
      { word: "official", pos: "n.", chinese: "官員" },
      { word: "bribery", pos: "n.", chinese: "賄賂" }
    ],
    sentence_pattern: { pattern: "S + be implicated in + N", example: "He denied being implicated in the plot." }
  },
  {
    phrase: "invest in",
    type: "動詞 + 介系詞",
    chinese: "投資於...",
    keywords: ["invest", "in"],
    example: {
      english: "The government needs to invest more money in public transportation infrastructure.",
      chinese: "政府需要投入更多資金在公共交通基礎設施上。",
      grammar_point: "invest in + N（投資時間/金錢在...）"
    },
    vocabulary: [
      { word: "invest", pos: "v.", chinese: "投資" },
      { word: "infrastructure", pos: "n.", chinese: "基礎設施" }
    ],
    sentence_pattern: { pattern: "S + invest money/time in + N", example: "Investing in education is investing in the future." }
  },
  {
    phrase: "involve in",
    type: "動詞 + 介系詞",
    chinese: "使捲入、使參與",
    keywords: ["involve", "in"],
    example: {
      english: "Please do not involve me in your personal arguments with your roommates.",
      chinese: "請不要把我捲入你和室友的私人爭吵中。",
      grammar_point: "involve O in N（把某人捲入...）或 be involved in（參與...）"
    },
    vocabulary: [
      { word: "involve", pos: "v.", chinese: "牽涉、包含" },
      { word: "roommate", pos: "n.", chinese: "室友" }
    ],
    sentence_pattern: { pattern: "S + involve O in + N", example: "I am involved in several club activities." }
  },
  {
    phrase: "participate in",
    type: "動詞 + 介系詞",
    chinese: "參加、參與",
    keywords: ["participate", "in"],
    example: {
      english: "Every citizen should actively participate in the democratic election process.",
      chinese: "每位公民都應該積極參與民主選舉的過程。",
      grammar_point: "participate in = take part in（參加...活動）"
    },
    vocabulary: [
      { word: "participate", pos: "v.", chinese: "參加" },
      { word: "democratic", pos: "adj.", chinese: "民主的" },
      { word: "election", pos: "n.", chinese: "選舉" }
    ],
    sentence_pattern: { pattern: "S + participate in + N", example: "Many countries participated in the Olympics." }
  },
  {
    phrase: "persist in",
    type: "動詞 + 介系詞",
    chinese: "堅持做...",
    keywords: ["persist", "in"],
    example: {
      english: "If you persist in arriving late for work, you will eventually be fired.",
      chinese: "如果你堅持上班遲到，你最終會被解雇。",
      grammar_point: "persist in + V-ing（固執地持續做某事）"
    },
    vocabulary: [
      { word: "persist", pos: "v.", chinese: "堅持、執意" },
      { word: "eventually", pos: "adv.", chinese: "最終地" },
      { word: "fire", pos: "v.", chinese: "解雇" }
    ],
    sentence_pattern: { pattern: "S + persist in + V-ing", example: "She persisted in asking questions." }
  },
  {
    phrase: "result in",
    type: "動詞片語",
    chinese: "導致、造成",
    keywords: ["result", "in"],
    example: {
      english: "The heavy rain resulted in severe flooding in the downtown area.",
      chinese: "這場大雨導致了市中心地區嚴重的淹水。",
      grammar_point: "起因 + result in + 結果（同義詞 lead to, bring about）"
    },
    vocabulary: [
      { word: "result", pos: "v.", chinese: "導致" },
      { word: "flooding", pos: "n.", chinese: "淹水、洪災" },
      { word: "downtown", pos: "adj.", chinese: "市中心的" }
    ],
    sentence_pattern: { pattern: "A results in B", example: "His recklessness resulted in a terrible accident." }
  },
  {
    phrase: "specialize in",
    type: "動詞 + 介系詞",
    chinese: "專攻、專門從事",
    keywords: ["specialize", "in"],
    example: {
      english: "After medical school, he decided to specialize in pediatric surgery.",
      chinese: "醫學院畢業後，他決定專攻小兒外科手術。",
      grammar_point: "specialize in + N（專門研究/從事...，美式拼法為 specialize）"
    },
    vocabulary: [
      { word: "specialize", pos: "v.", chinese: "專攻" },
      { word: "pediatric", pos: "adj.", chinese: "小兒科的" },
      { word: "surgery", pos: "n.", chinese: "外科手術" }
    ],
    sentence_pattern: { pattern: "S + specialise in + N", example: "This restaurant specialises in Italian cuisine." }
  },
  {
    phrase: "succeed in",
    type: "動詞 + 介系詞",
    chinese: "成功做到...",
    keywords: ["succeed", "in"],
    example: {
      english: "After trying for five years, she finally succeeded in starting her own company.",
      chinese: "在努力了五年之後，她終於成功創立了自己的公司。",
      grammar_point: "succeed in + V-ing（在做某事上獲得成功，必考 in 後接 V-ing）"
    },
    vocabulary: [
      { word: "succeed", pos: "v.", chinese: "成功" },
      { word: "company", pos: "n.", chinese: "公司" }
    ],
    sentence_pattern: { pattern: "S + succeed in + V-ing", example: "Scientists succeeded in finding a cure." }
  },
  {
    phrase: "trust in",
    type: "動詞 + 介系詞",
    chinese: "信任、信賴",
    keywords: ["trust", "in"],
    example: {
      english: "During hard times, it is important to trust in your own abilities and intuition.",
      chinese: "在困難時期，信任你自己的能力和直覺是很重要的。",
      grammar_point: "trust in + N（對...有信心/信賴）"
    },
    vocabulary: [
      { word: "trust", pos: "v.", chinese: "信任" },
      { word: "ability", pos: "n.", chinese: "能力" },
      { word: "intuition", pos: "n.", chinese: "直覺" }
    ],
    sentence_pattern: { pattern: "S + trust in + N", example: "You must trust in yourself to win." }
  },
  // ── Verb + Noun (高階動名詞搭配) ─────────────────────────────────────────
  {
    phrase: "achieve a result",
    type: "動詞 + 名詞",
    chinese: "取得成果",
    keywords: ["achieve", "result"],
    example: {
      english: "After months of hard work, the research team finally achieved a positive result.",
      chinese: "經過幾個月的努力，研究團隊終於取得了正面的成果。",
      grammar_point: "achieve + N（努力後達成...）"
    },
    vocabulary: [
      { word: "research", pos: "n.", chinese: "研究" },
      { word: "positive", pos: "adj.", chinese: "正面的、積極的" }
    ],
    sentence_pattern: { pattern: "S + achieve a result", example: "We achieved a great result this year." }
  },
  {
    phrase: "achieve an objective",
    type: "動詞 + 名詞",
    chinese: "達成目標",
    keywords: ["achieve", "objective"],
    example: {
      english: "The company achieved its primary objective of expanding into the Asian market.",
      chinese: "公司達成了擴展到亞洲市場的首要目標。",
      grammar_point: "objective 作名詞表「目標、目的」，比 goal 更正式"
    },
    vocabulary: [
      { word: "primary", pos: "adj.", chinese: "首要的" },
      { word: "expand", pos: "v.", chinese: "擴展" }
    ],
    sentence_pattern: { pattern: "S + achieve one's objective", example: "Our main objective was achieved." }
  },
  {
    phrase: "achieve a target",
    type: "動詞 + 名詞",
    chinese: "達到指標/目標",
    keywords: ["achieve", "target"],
    example: {
      english: "The sales department worked overtime to achieve their monthly target.",
      chinese: "銷售部門加班以達到他們的月度指標。",
      grammar_point: "work overtime to V（加班以達到...目的）"
    },
    vocabulary: [
      { word: "department", pos: "n.", chinese: "部門" },
      { word: "monthly", pos: "adj.", chinese: "每月的" }
    ],
    sentence_pattern: { pattern: "S + achieve a target", example: "We must achieve this target by Friday." }
  },
  {
    phrase: "acknowledge defeat",
    type: "動詞 + 名詞",
    chinese: "承認失敗",
    keywords: ["acknowledge", "defeat"],
    example: {
      english: "Even though he lost the match, he was too proud to acknowledge defeat.",
      chinese: "即使他輸了比賽，他也太驕傲而不願承認失敗。",
      grammar_point: "too + adj + to + V（太...以至於不能...）"
    },
    vocabulary: [
      { word: "acknowledge", pos: "v.", chinese: "承認" },
      { word: "defeat", pos: "n.", chinese: "失敗、擊敗" }
    ],
    sentence_pattern: { pattern: "S + acknowledge defeat", example: "The general acknowledged defeat." }
  },
  {
    phrase: "acknowledge victory",
    type: "動詞 + 名詞",
    chinese: "承認勝利",
    keywords: ["acknowledge", "victory"],
    example: {
      english: "The opposing candidate publicly acknowledged our victory in the election.",
      chinese: "反對黨候選人公開承認了我們在選舉中的勝利。",
      grammar_point: "acknowledge + 所有格 + N（承認某人的...）"
    },
    vocabulary: [
      { word: "opposing", pos: "adj.", chinese: "對立的" },
      { word: "publicly", pos: "adv.", chinese: "公開地" }
    ],
    sentence_pattern: { pattern: "S + acknowledge victory", example: "They reluctantly acknowledged his victory." }
  },
  {
    phrase: "acknowledge receipt",
    type: "動詞 + 名詞",
    chinese: "確認收訖",
    keywords: ["acknowledge", "receipt"],
    example: {
      english: "Please acknowledge receipt of this email by replying to us.",
      chinese: "請回覆我們以確認您已收到此封電子郵件。",
      grammar_point: "acknowledge receipt of + N（商用英文：確認收到某物）"
    },
    vocabulary: [
      { word: "receipt", pos: "n.", chinese: "收到、收據（p不發音）" },
      { word: "reply", pos: "v.", chinese: "回覆" }
    ],
    sentence_pattern: { pattern: "Please acknowledge receipt of + N", example: "I acknowledge receipt of your letter." }
  },
  {
    phrase: "address a problem",
    type: "動詞 + 名詞",
    chinese: "處理/解決問題",
    keywords: ["address", "problem"],
    example: {
      english: "The government must take immediate action to address the problem of air pollution.",
      chinese: "政府必須採取立即行動來處理空氣污染的問題。",
      grammar_point: "address 此處作動詞，意為「處理、應對」，是高級替換詞"
    },
    vocabulary: [
      { word: "immediate", pos: "adj.", chinese: "立即的" },
      { word: "pollution", pos: "n.", chinese: "污染" }
    ],
    sentence_pattern: { pattern: "S + take action to address a problem", example: "We need to address this problem now." }
  },
  {
    phrase: "address an issue",
    type: "動詞 + 名詞",
    chinese: "探討/處理議題",
    keywords: ["address", "issue"],
    example: {
      english: "The principal held a meeting to address the issue of bullying in school.",
      chinese: "校長召開會議以處理校園霸凌的議題。",
      grammar_point: "address an issue（常搭配爭議性或社會性話題）"
    },
    vocabulary: [
      { word: "principal", pos: "n.", chinese: "校長" },
      { word: "bullying", pos: "n.", chinese: "霸凌" }
    ],
    sentence_pattern: { pattern: "S + address an issue", example: "The book addresses several social issues." }
  },
  {
    phrase: "address concerns",
    type: "動詞 + 名詞",
    chinese: "回應疑慮",
    keywords: ["address", "concerns"],
    example: {
      english: "The manager sent an email to all employees to address their concerns about the layoff.",
      chinese: "經理寄了一封電子郵件給所有員工，以回應他們對於裁員的疑慮。",
      grammar_point: "address one's concerns（處理/解答某人的擔憂）"
    },
    vocabulary: [
      { word: "manager", pos: "n.", chinese: "經理" },
      { word: "layoff", pos: "n.", chinese: "裁員" }
    ],
    sentence_pattern: { pattern: "S + address someone's concerns", example: "He spoke up to address their concerns." }
  },
  {
    phrase: "address needs",
    type: "動詞 + 名詞",
    chinese: "滿足需求、處理需求",
    keywords: ["address", "needs"],
    example: {
      english: "Our new product is designed to address the needs of modern consumers.",
      chinese: "我們的新產品旨在滿足現代消費者的需求。",
      grammar_point: "be designed to + V（被設計來...）"
    },
    vocabulary: [
      { word: "product", pos: "n.", chinese: "產品" },
      { word: "consumer", pos: "n.", chinese: "消費者" }
    ],
    sentence_pattern: { pattern: "S + address the needs of + N", example: "The charity addresses the needs of the poor." }
  },
  {
    phrase: "arouse interest",
    type: "動詞 + 名詞",
    chinese: "引起興趣",
    keywords: ["arouse", "interest"],
    example: {
      english: "The teacher used a funny story to arouse students' interest in history.",
      chinese: "老師用一個有趣的故事來引起學生對歷史的興趣。",
      grammar_point: "arouse interest in + N（喚起對...的興趣）"
    },
    vocabulary: [
      { word: "arouse", pos: "v.", chinese: "喚起、引起（無被動）" },
      { word: "history", pos: "n.", chinese: "歷史" }
    ],
    sentence_pattern: { pattern: "S + arouse one's interest in + N", example: "The title aroused my interest." }
  },
  {
    phrase: "arouse hostility",
    type: "動詞 + 名詞",
    chinese: "激起敵意",
    keywords: ["arouse", "hostility"],
    example: {
      english: "His rude comments aroused hostility among the audience.",
      chinese: "他無禮的評論在觀眾中激起了敵意。",
      grammar_point: "arouse hostility among + N（在...之間引發敵意）"
    },
    vocabulary: [
      { word: "rude", pos: "adj.", chinese: "無禮的" },
      { word: "hostility", pos: "n.", chinese: "敵意" }
    ],
    sentence_pattern: { pattern: "S + arouse hostility", example: "The new rule aroused hostility." }
  },
  {
    phrase: "arouse passion",
    type: "動詞 + 名詞",
    chinese: "激發熱情",
    keywords: ["arouse", "passion"],
    example: {
      english: "The inspiring speech aroused a deep passion for learning in the students.",
      chinese: "這場鼓舞人心的演講激發了學生內心對學習的深厚熱情。",
      grammar_point: "arouse a passion for + V-ing（激起對...的熱情）"
    },
    vocabulary: [
      { word: "inspiring", pos: "adj.", chinese: "鼓舞人心的" },
      { word: "passion", pos: "n.", chinese: "熱情" }
    ],
    sentence_pattern: { pattern: "S + arouse passion in + N", example: "Music can arouse passion." }
  },
  {
    phrase: "arouse suspicion",
    type: "動詞 + 名詞",
    chinese: "引起懷疑",
    keywords: ["arouse", "suspicion"],
    example: {
      english: "The man's strange behavior quickly aroused the suspicion of the police.",
      chinese: "這名男子奇怪的行為很快引起了警方的懷疑。",
      grammar_point: "arouse someone's suspicion（引起某人的疑心）"
    },
    vocabulary: [
      { word: "behavior", pos: "n.", chinese: "行為" },
      { word: "suspicion", pos: "n.", chinese: "懷疑、嫌疑" }
    ],
    sentence_pattern: { pattern: "S + arouse suspicion", example: "His sudden wealth aroused suspicion." }
  },
  {
    phrase: "bear a grudge",
    type: "動詞 + 名詞",
    chinese: "記仇、懷恨在心",
    keywords: ["bear", "grudge"],
    example: {
      english: "It is not healthy to bear a grudge against someone who has already apologized.",
      chinese: "對已經道歉的人記仇是不健康的。",
      grammar_point: "bear a grudge against + 人（對某人懷恨在心）"
    },
    vocabulary: [
      { word: "grudge", pos: "n.", chinese: "怨恨、嫌隙" },
      { word: "apologize", pos: "v.", chinese: "道歉" }
    ],
    sentence_pattern: { pattern: "S + bear a grudge against + O", example: "She still bears a grudge against her ex." }
  },
  {
    phrase: "bear the cost",
    type: "動詞 + 名詞",
    chinese: "承擔費用",
    keywords: ["bear", "cost"],
    example: {
      english: "The government will bear the cost of repairing the damaged public facilities.",
      chinese: "政府將承擔修復受損公共設施的費用。",
      grammar_point: "bear the cost of + N/V-ing（負擔...的開銷）"
    },
    vocabulary: [
      { word: "repair", pos: "v.", chinese: "修復" },
      { word: "facility", pos: "n.", chinese: "設施" }
    ],
    sentence_pattern: { pattern: "S + bear the cost", example: "Who will bear the cost of this project?" }
  },
  {
    phrase: "bear a pain",
    type: "動詞 + 名詞",
    chinese: "忍受痛苦",
    keywords: ["bear", "pain"],
    example: {
      english: "The patient could no longer bear the pain and asked for medication.",
      chinese: "病人再也無法忍受痛苦，要求給予藥物治療。",
      grammar_point: "cannot bear + N / to V（無法忍受...）"
    },
    vocabulary: [
      { word: "patient", pos: "n.", chinese: "病人" },
      { word: "medication", pos: "n.", chinese: "藥物治療" }
    ],
    sentence_pattern: { pattern: "S + can hardly bear the pain", example: "He bore the pain silently." }
  },
  {
    phrase: "bear responsibility",
    type: "動詞 + 名詞",
    chinese: "承擔責任",
    keywords: ["bear", "responsibility"],
    example: {
      english: "As the team leader, you must bear responsibility for the project's failure.",
      chinese: "作為團隊領導者，你必須為專案的失敗承擔責任。",
      grammar_point: "bear responsibility for + N（為...負責，同義 take responsibility）"
    },
    vocabulary: [
      { word: "responsibility", pos: "n.", chinese: "責任" },
      { word: "failure", pos: "n.", chinese: "失敗" }
    ],
    sentence_pattern: { pattern: "S + bear responsibility for + N", example: "Parents bear responsibility for their children." }
  },
  {
    phrase: "bear weight",
    type: "動詞 + 名詞",
    chinese: "承受重量",
    keywords: ["bear", "weight"],
    example: {
      english: "The old wooden bridge is too weak to bear the weight of heavy trucks.",
      chinese: "這座舊木橋太脆弱了，無法承受重型卡車的重量。",
      grammar_point: "too... to...（太...而不能...）"
    },
    vocabulary: [
      { word: "wooden", pos: "adj.", chinese: "木製的" },
      { word: "truck", pos: "n.", chinese: "卡車" }
    ],
    sentence_pattern: { pattern: "N + can bear the weight of + N", example: "This pillar bears the weight of the roof." }
  },
  {
    phrase: "bear children",
    type: "動詞 + 名詞",
    chinese: "生育孩子",
    keywords: ["bear", "children"],
    example: {
      english: "In ancient times, women were expected to bear children at a very young age.",
      chinese: "在古代，婦女被期望在很年輕時就生育孩子。",
      grammar_point: "bear 過去式為 bore，過去分詞為 born（如 be born）"
    },
    vocabulary: [
      { word: "ancient", pos: "adj.", chinese: "古代的" },
      { word: "expect", pos: "v.", chinese: "期望" }
    ],
    sentence_pattern: { pattern: "S + bear children", example: "She bore three children." }
  },
  {
    phrase: "bear fruit",
    type: "動詞 + 名詞",
    chinese: "結出果實、奏效、有成果",
    keywords: ["bear", "fruit"],
    example: {
      english: "All of our hard work and planning finally began to bear fruit this year.",
      chinese: "我們所有的努力和計畫終於在今年開始見效了。",
      grammar_point: "bear fruit 作為片語，常比喻「努力得到回報」"
    },
    vocabulary: [
      { word: "planning", pos: "n.", chinese: "計畫、籌劃" },
      { word: "finally", pos: "adv.", chinese: "終於" }
    ],
    sentence_pattern: { pattern: "S + finally bear fruit", example: "His investments are bearing fruit." }
  },
  {
    phrase: "break a habit",
    type: "動詞 + 名詞",
    chinese: "戒除習慣",
    keywords: ["break", "habit"],
    example: {
      english: "It takes a lot of willpower to break a bad habit like smoking.",
      chinese: "戒除像抽菸這樣的壞習慣需要很大的意志力。",
      grammar_point: "It takes + N + to V（做某事需要...）"
    },
    vocabulary: [
      { word: "willpower", pos: "n.", chinese: "意志力" },
      { word: "habit", pos: "n.", chinese: "習慣" }
    ],
    sentence_pattern: { pattern: "S + try to break a habit", example: "I am trying to break the habit of biting my nails." }
  },
  {
    phrase: "break a record",
    type: "動詞 + 名詞",
    chinese: "打破紀錄",
    keywords: ["break", "record"],
    example: {
      english: "The young swimmer trained hard and broke the national record in the final race.",
      chinese: "這位年輕的游泳選手刻苦訓練，在決賽中打破了全國紀錄。",
      grammar_point: "break the record（創下/打破新紀錄）"
    },
    vocabulary: [
      { word: "national", pos: "adj.", chinese: "國家的、全國的" },
      { word: "race", pos: "n.", chinese: "比賽、競賽" }
    ],
    sentence_pattern: { pattern: "S + break a record", example: "She broke the world record yesterday." }
  },
  {
    phrase: "break the silence",
    type: "動詞 + 名詞",
    chinese: "打破沉默",
    keywords: ["break", "silence"],
    example: {
      english: "After a long pause, he finally spoke up to break the awkward silence.",
      chinese: "在長時間的停頓之後，他終於開口打破了尷尬的沉默。",
      grammar_point: "to break the silence（不定詞表目的）"
    },
    vocabulary: [
      { word: "pause", pos: "n.", chinese: "停頓" },
      { word: "awkward", pos: "adj.", chinese: "尷尬的" }
    ],
    sentence_pattern: { pattern: "S + speak to break the silence", example: "A loud noise broke the silence." }
  },
  {
    phrase: "break a rule",
    type: "動詞 + 名詞",
    chinese: "違反規則",
    keywords: ["break", "rule"],
    example: {
      english: "Any student who breaks the school rules will be severely punished.",
      chinese: "任何違反校規的學生都將受到嚴厲的懲罰。",
      grammar_point: "who 關係代名詞引導子句修飾 student"
    },
    vocabulary: [
      { word: "severely", pos: "adv.", chinese: "嚴厲地" },
      { word: "punish", pos: "v.", chinese: "懲罰" }
    ],
    sentence_pattern: { pattern: "S + break a rule", example: "You shouldn't break the rules." }
  },
  {
    phrase: "break the law",
    type: "動詞 + 名詞",
    chinese: "違法",
    keywords: ["break", "law"],
    example: {
      english: "If you drive after drinking alcohol, you are breaking the law.",
      chinese: "如果你酒後駕車，你就是在違法。",
      grammar_point: "break the law（犯法，law 前通常加 the）"
    },
    vocabulary: [
      { word: "alcohol", pos: "n.", chinese: "酒精" },
      { word: "law", pos: "n.", chinese: "法律" }
    ],
    sentence_pattern: { pattern: "S + break the law", example: "He went to jail for breaking the law." }
  },
  {
    phrase: "build a company",
    type: "動詞 + 名詞",
    chinese: "建立公司",
    keywords: ["build", "company"],
    example: {
      english: "It took him decades to build a small startup into a multinational company.",
      chinese: "他花了幾十年的時間，把一家小型新創公司建立成一家跨國公司。",
      grammar_point: "build A into B（將 A 建設/發展成 B）"
    },
    vocabulary: [
      { word: "decade", pos: "n.", chinese: "十年" },
      { word: "multinational", pos: "adj.", chinese: "跨國的" }
    ],
    sentence_pattern: { pattern: "S + build a company from scratch", example: "She built a company in just five years." }
  },
  {
    phrase: "build a friendship",
    type: "動詞 + 名詞",
    chinese: "建立友誼",
    keywords: ["build", "friendship"],
    example: {
      english: "Trust and honesty are essential to build a strong and lasting friendship.",
      chinese: "信任和誠實是建立堅固且持久友誼的不可或缺要素。",
      grammar_point: "be essential to + V 原形（對...是不可或缺的）"
    },
    vocabulary: [
      { word: "honesty", pos: "n.", chinese: "誠實" },
      { word: "lasting", pos: "adj.", chinese: "持久的" }
    ],
    sentence_pattern: { pattern: "S + build a friendship with + N", example: "We built a deep friendship over the years." }
  },
  {
    phrase: "build a future",
    type: "動詞 + 名詞",
    chinese: "共創未來、建立未來",
    keywords: ["build", "future"],
    example: {
      english: "The young couple worked hard to save money and build a better future together.",
      chinese: "這對年輕夫婦努力工作存錢，共同建立一個更美好的未來。",
      grammar_point: "work hard to + V（努力去做...）"
    },
    vocabulary: [
      { word: "couple", pos: "n.", chinese: "夫婦、伴侶" },
      { word: "future", pos: "n.", chinese: "未來" }
    ],
    sentence_pattern: { pattern: "S + build a future together", example: "Education helps us build a better future." }
  },
  {
    phrase: "chair a committee",
    type: "動詞 + 名詞",
    chinese: "擔任委員會主席",
    keywords: ["chair", "committee"],
    example: {
      english: "She was invited to chair the planning committee for the annual festival.",
      chinese: "她受邀擔任年度節慶籌劃委員會的主席。",
      grammar_point: "chair 當動詞用，表示「擔任主席、主持」"
    },
    vocabulary: [
      { word: "committee", pos: "n.", chinese: "委員會" },
      { word: "annual", pos: "adj.", chinese: "年度的" }
    ],
    sentence_pattern: { pattern: "S + chair a committee", example: "He chairs the ethics committee." }
  },
  {
    phrase: "chair a meeting",
    type: "動詞 + 名詞",
    chinese: "主持會議",
    keywords: ["chair", "meeting"],
    example: {
      english: "The director will chair the meeting to discuss next year's budget.",
      chinese: "主任將主持這場會議，討論明年的預算。",
      grammar_point: "to + V（不定詞表目的）"
    },
    vocabulary: [
      { word: "director", pos: "n.", chinese: "主管、主任" },
      { word: "budget", pos: "n.", chinese: "預算" }
    ],
    sentence_pattern: { pattern: "S + chair a meeting", example: "I have to chair a meeting this afternoon." }
  },
  {
    phrase: "chair a task force",
    type: "動詞 + 名詞",
    chinese: "領導專案小組",
    keywords: ["chair", "task force"],
    example: {
      english: "The government appointed an expert to chair a task force on climate change.",
      chinese: "政府任命了一位專家來領導氣候變遷專案小組。",
      grammar_point: "appoint O to + V（指派某人做...）"
    },
    vocabulary: [
      { word: "appoint", pos: "v.", chinese: "任命、指派" },
      { word: "task force", pos: "n.", chinese: "專案小組、特遣部隊" }
    ],
    sentence_pattern: { pattern: "S + chair a task force", example: "She chairs the environmental task force." }
  },
  {
    phrase: "close a deal",
    type: "動詞 + 名詞",
    chinese: "達成交易",
    keywords: ["close", "deal"],
    example: {
      english: "After several rounds of negotiation, they finally managed to close the deal.",
      chinese: "經過幾輪的談判後，他們終於設法達成了交易。",
      grammar_point: "manage to + V（設法完成某事）"
    },
    vocabulary: [
      { word: "negotiation", pos: "n.", chinese: "談判" },
      { word: "deal", pos: "n.", chinese: "交易、協議" }
    ],
    sentence_pattern: { pattern: "S + close a deal with + N", example: "We hope to close the deal by tomorrow." }
  },
  {
    phrase: "close a discussion",
    type: "動詞 + 名詞",
    chinese: "結束討論",
    keywords: ["close", "discussion"],
    example: {
      english: "Due to the lack of time, the professor had to close the discussion early.",
      chinese: "由於時間不足，教授不得不提早結束討論。",
      grammar_point: "due to + N（因為...、由於...）"
    },
    vocabulary: [
      { word: "lack", pos: "n.", chinese: "缺乏" },
      { word: "discussion", pos: "n.", chinese: "討論" }
    ],
    sentence_pattern: { pattern: "S + close a discussion", example: "Let's close the discussion and vote." }
  },
  {
    phrase: "close a sale",
    type: "動詞 + 名詞",
    chinese: "完成銷售、成交",
    keywords: ["close", "sale"],
    example: {
      english: "The salesman used his excellent communication skills to close a big sale.",
      chinese: "這位推銷員利用他出色的溝通技巧完成了一筆大生意。",
      grammar_point: "use N to V（利用某物去做...）"
    },
    vocabulary: [
      { word: "salesman", pos: "n.", chinese: "推銷員" },
      { word: "excellent", pos: "adj.", chinese: "優秀的" }
    ],
    sentence_pattern: { pattern: "S + close a sale", example: "He is very good at closing a sale." }
  },
  {
    phrase: "conduct an experiment",
    type: "動詞 + 名詞",
    chinese: "進行實驗",
    keywords: ["conduct", "experiment"],
    example: {
      english: "The students conducted an experiment in the lab to test their hypothesis.",
      chinese: "學生們在實驗室裡進行了一項實驗以測試他們的假設。",
      grammar_point: "conduct an experiment（進行實驗，必考動詞搭配）"
    },
    vocabulary: [
      { word: "conduct", pos: "v.", chinese: "進行、執行" },
      { word: "hypothesis", pos: "n.", chinese: "假設" }
    ],
    sentence_pattern: { pattern: "S + conduct an experiment", example: "Scientists conduct experiments every day." }
  },
  {
    phrase: "conduct research",
    type: "動詞 + 名詞",
    chinese: "進行研究",
    keywords: ["conduct", "research"],
    example: {
      english: "The university is conducting research on the effects of social media on teenagers.",
      chinese: "該大學正在進行關於社群媒體對青少年影響的研究。",
      grammar_point: "conduct research on + N（對...進行研究，research不可數）"
    },
    vocabulary: [
      { word: "research", pos: "n.", chinese: "研究" },
      { word: "effect", pos: "n.", chinese: "影響" }
    ],
    sentence_pattern: { pattern: "S + conduct research into/on + N", example: "He conducts research in biology." }
  },
  {
    phrase: "conduct a meeting",
    type: "動詞 + 名詞",
    chinese: "舉行/主持會議",
    keywords: ["conduct", "meeting"],
    example: {
      english: "The CEO will conduct a meeting to discuss the company's future strategies.",
      chinese: "執行長將舉行一場會議來討論公司未來的策略。",
      grammar_point: "conduct a meeting 等同於 hold a meeting"
    },
    vocabulary: [
      { word: "strategy", pos: "n.", chinese: "策略" },
      { word: "discuss", pos: "v.", chinese: "討論" }
    ],
    sentence_pattern: { pattern: "S + conduct a meeting", example: "We will conduct a meeting online." }
  },
  {
    phrase: "conduct an orchestra",
    type: "動詞 + 名詞",
    chinese: "指揮管弦樂團",
    keywords: ["conduct", "orchestra"],
    example: {
      english: "It takes years of practice to conduct a symphony orchestra successfully.",
      chinese: "成功地指揮交響管弦樂團需要多年的練習。",
      grammar_point: "conduct 另有「指揮(音樂)」的意思"
    },
    vocabulary: [
      { word: "orchestra", pos: "n.", chinese: "管弦樂團" },
      { word: "symphony", pos: "n.", chinese: "交響樂" }
    ],
    sentence_pattern: { pattern: "S + conduct an orchestra", example: "He conducted the orchestra masterfully." }
  },
  {
    phrase: "crave attention",
    type: "動詞 + 名詞",
    chinese: "渴望關注",
    keywords: ["crave", "attention"],
    example: {
      english: "Children who act out in class often simply crave attention from their teachers.",
      chinese: "在課堂上搗亂的孩子往往只是渴望得到老師的關注。",
      grammar_point: "who 引導關係子句修飾 Children"
    },
    vocabulary: [
      { word: "crave", pos: "v.", chinese: "極度渴望" },
      { word: "act out", pos: "phr. v.", chinese: "搗亂、行為不當" }
    ],
    sentence_pattern: { pattern: "S + crave attention", example: "Celebrities often crave media attention." }
  },
  {
    phrase: "crave respect",
    type: "動詞 + 名詞",
    chinese: "渴望尊重",
    keywords: ["crave", "respect"],
    example: {
      english: "Every employee in the company craves respect and recognition for their hard work.",
      chinese: "公司裡的每位員工都渴望自己的辛勤工作能得到尊重與認可。",
      grammar_point: "Every + 單數名詞 + 單數動詞"
    },
    vocabulary: [
      { word: "employee", pos: "n.", chinese: "員工" },
      { word: "recognition", pos: "n.", chinese: "認可、承認" }
    ],
    sentence_pattern: { pattern: "S + crave respect from + N", example: "A good leader craves respect, not fear." }
  },
  {
    phrase: "crave fame",
    type: "動詞 + 名詞",
    chinese: "渴望名聲",
    keywords: ["crave", "fame"],
    example: {
      english: "Many young people move to Hollywood because they crave fame and fortune.",
      chinese: "許多年輕人搬到好萊塢，因為他們渴望名利。",
      grammar_point: "fame and fortune（名與利）為常見組合"
    },
    vocabulary: [
      { word: "fame", pos: "n.", chinese: "名聲" },
      { word: "fortune", pos: "n.", chinese: "財富" }
    ],
    sentence_pattern: { pattern: "S + crave fame and wealth", example: "He craved fame since he was a boy." }
  },
  {
    phrase: "crave love",
    type: "動詞 + 名詞",
    chinese: "渴望愛",
    keywords: ["crave", "love"],
    example: {
      english: "It is human nature to crave love and a sense of belonging.",
      chinese: "渴望愛與歸屬感是人類的天性。",
      grammar_point: "It is human nature to + V（做...是人之常情）"
    },
    vocabulary: [
      { word: "nature", pos: "n.", chinese: "天性、自然" },
      { word: "belonging", pos: "n.", chinese: "歸屬感" }
    ],
    sentence_pattern: { pattern: "S + secretly crave love", example: "Everyone craves love and affection." }
  },
  {
    phrase: "crave excitement",
    type: "動詞 + 名詞",
    chinese: "渴望刺激",
    keywords: ["crave", "excitement"],
    example: {
      english: "Teenagers sometimes engage in risky behaviors because they crave excitement.",
      chinese: "青少年有時會參與冒險行為，因為他們渴望刺激。",
      grammar_point: "engage in + N（參與...）"
    },
    vocabulary: [
      { word: "risky", pos: "adj.", chinese: "危險的、冒險的" },
      { word: "excitement", pos: "n.", chinese: "刺激、興奮" }
    ],
    sentence_pattern: { pattern: "S + crave excitement", example: "He loves extreme sports because he craves excitement." }
  },
  {
    phrase: "curb growth",
    type: "動詞 + 名詞",
    chinese: "抑制成長",
    keywords: ["curb", "growth"],
    example: {
      english: "The government implemented new policies to curb the rapid growth of the housing market.",
      chinese: "政府實施了新政策以抑制房市的快速成長。",
      grammar_point: "curb 作動詞，意為「控制、抑制」，為高級用詞"
    },
    vocabulary: [
      { word: "curb", pos: "v.", chinese: "抑制、控制" },
      { word: "implement", pos: "v.", chinese: "實施" }
    ],
    sentence_pattern: { pattern: "S + curb the growth of + N", example: "High taxes may curb economic growth." }
  },
  {
    phrase: "curb inflation",
    type: "動詞 + 名詞",
    chinese: "抑制通貨膨脹",
    keywords: ["curb", "inflation"],
    example: {
      english: "The central bank raised interest rates in an attempt to curb inflation.",
      chinese: "中央銀行提高利率，試圖抑制通貨膨脹。",
      grammar_point: "in an attempt to + V（試圖去做...）"
    },
    vocabulary: [
      { word: "interest rate", pos: "n.", chinese: "利率" },
      { word: "inflation", pos: "n.", chinese: "通貨膨脹" }
    ],
    sentence_pattern: { pattern: "S + take measures to curb inflation", example: "Curbing inflation is their top priority." }
  },
  {
    phrase: "curb interest rates",
    type: "動詞 + 名詞",
    chinese: "控制/抑制利率",
    keywords: ["curb", "interest rates"],
    example: {
      english: "The government intervened to curb interest rates to help small businesses survive.",
      chinese: "政府介入控制利率，以幫助小型企業生存。",
      grammar_point: "help + O + V 原形（幫助某人做某事）"
    },
    vocabulary: [
      { word: "intervene", pos: "v.", chinese: "干預、介入" },
      { word: "survive", pos: "v.", chinese: "生存" }
    ],
    sentence_pattern: { pattern: "S + try to curb interest rates", example: "They need to curb interest rates immediately." }
  },
  {
    phrase: "curb violence",
    type: "動詞 + 名詞",
    chinese: "遏止暴力",
    keywords: ["curb", "violence"],
    example: {
      english: "More police officers were deployed to the streets to curb violence in the city.",
      chinese: "更多警察被部署到街上，以遏止城市的暴力事件。",
      grammar_point: "be deployed to（被部署到...）"
    },
    vocabulary: [
      { word: "deploy", pos: "v.", chinese: "部署、調動" },
      { word: "violence", pos: "n.", chinese: "暴力" }
    ],
    sentence_pattern: { pattern: "S + take action to curb violence", example: "Education is a key to curbing violence." }
  },
  {
    phrase: "deliver a presentation",
    type: "動詞 + 名詞",
    chinese: "發表簡報",
    keywords: ["deliver", "presentation"],
    example: {
      english: "She prepared for weeks to deliver a flawless presentation to the board members.",
      chinese: "她準備了數週，為了向董事會成員發表一場完美無瑕的簡報。",
      grammar_point: "deliver a presentation 等同於 give a presentation"
    },
    vocabulary: [
      { word: "flawless", pos: "adj.", chinese: "完美無瑕的" },
      { word: "presentation", pos: "n.", chinese: "簡報、呈現" }
    ],
    sentence_pattern: { pattern: "S + deliver a presentation on + N", example: "He delivered a great presentation yesterday." }
  },
  {
    phrase: "deliver a speech",
    type: "動詞 + 名詞",
    chinese: "發表演說",
    keywords: ["deliver", "speech"],
    example: {
      english: "The president will deliver a speech on national television tonight.",
      chinese: "總統今晚將在全國電視上發表演說。",
      grammar_point: "on television（在電視上播放）"
    },
    vocabulary: [
      { word: "president", pos: "n.", chinese: "總統" },
      { word: "national", pos: "adj.", chinese: "全國的" }
    ],
    sentence_pattern: { pattern: "S + deliver a speech", example: "The principal delivered an inspiring speech." }
  },
  {
    phrase: "deliver a letter",
    type: "動詞 + 名詞",
    chinese: "遞送信件",
    keywords: ["deliver", "letter"],
    example: {
      english: "The postman comes every morning at nine o'clock to deliver letters and packages.",
      chinese: "郵差每天早上九點來遞送信件和包裹。",
      grammar_point: "deliver 亦可作「遞送」解"
    },
    vocabulary: [
      { word: "postman", pos: "n.", chinese: "郵差" },
      { word: "package", pos: "n.", chinese: "包裹" }
    ],
    sentence_pattern: { pattern: "S + deliver a letter to + 地方", example: "Your letter was delivered today." }
  },
  {
    phrase: "deliver a parcel",
    type: "動詞 + 名詞",
    chinese: "遞送包裹",
    keywords: ["deliver", "parcel"],
    example: {
      english: "The courier company promised to deliver the parcel within 24 hours.",
      chinese: "這家快遞公司承諾在24小時內遞送包裹。",
      grammar_point: "within + 時間（在...時間之內）"
    },
    vocabulary: [
      { word: "courier", pos: "n.", chinese: "快遞員、快遞公司" },
      { word: "parcel", pos: "n.", chinese: "包裹" }
    ],
    sentence_pattern: { pattern: "S + deliver a parcel", example: "He works part-time delivering parcels." }
  },
  {
    phrase: "divulge information",
    type: "動詞 + 名詞",
    chinese: "洩露資訊",
    keywords: ["divulge", "information"],
    example: {
      english: "Employees are not allowed to divulge confidential information to competitors.",
      chinese: "不允許員工將機密資訊洩露給競爭對手。",
      grammar_point: "be not allowed to + V（不被允許做...）"
    },
    vocabulary: [
      { word: "divulge", pos: "v.", chinese: "洩露、透露" },
      { word: "confidential", pos: "adj.", chinese: "機密的" },
      { word: "competitor", pos: "n.", chinese: "競爭對手" }
    ],
    sentence_pattern: { pattern: "S + divulge information to + 人", example: "He refused to divulge any information." }
  },
  {
    phrase: "divulge a secret",
    type: "動詞 + 名詞",
    chinese: "洩露秘密",
    keywords: ["divulge", "secret"],
    example: {
      english: "She promised her best friend that she would never divulge the secret to anyone.",
      chinese: "她向最好的朋友承諾，她永遠不會把這個秘密洩露給任何人。",
      grammar_point: "promise + 人 + that 子句（答應某人...）"
    },
    vocabulary: [
      { word: "promise", pos: "v.", chinese: "承諾" },
      { word: "secret", pos: "n.", chinese: "秘密" }
    ],
    sentence_pattern: { pattern: "S + divulge a secret", example: "Divulging a secret ruins trust." }
  },
  {
    phrase: "divulge details",
    type: "動詞 + 名詞",
    chinese: "透露細節",
    keywords: ["divulge", "details"],
    example: {
      english: "The police declined to divulge details of the ongoing investigation.",
      chinese: "警方拒絕透露正在進行的調查的細節。",
      grammar_point: "decline to + V（婉拒做某事）"
    },
    vocabulary: [
      { word: "decline", pos: "v.", chinese: "婉拒、拒絕" },
      { word: "ongoing", pos: "adj.", chinese: "正在進行中的" },
      { word: "investigation", pos: "n.", chinese: "調查" }
    ],
    sentence_pattern: { pattern: "S + decline to divulge details of + N", example: "He did not divulge details of the plan." }
  },
  {
    phrase: "divulge someone's identity",
    type: "動詞 + 名詞",
    chinese: "暴露某人的身分",
    keywords: ["divulge", "identity"],
    example: {
      english: "The reporter protected his source by refusing to divulge his identity.",
      chinese: "記者為了保護消息來源，拒絕暴露其身分。",
      grammar_point: "by + V-ing（藉由...方式）"
    },
    vocabulary: [
      { word: "reporter", pos: "n.", chinese: "記者" },
      { word: "source", pos: "n.", chinese: "來源（此指消息來源）" },
      { word: "identity", pos: "n.", chinese: "身分" }
    ],
    sentence_pattern: { pattern: "S + refuse to divulge someone's identity", example: "The witness's identity was not divulged." }
  },
  {
    phrase: "draw attention",
    type: "動詞 + 名詞",
    chinese: "吸引注意",
    keywords: ["draw", "attention"],
    example: {
      english: "Her bright red dress drew everyone's attention as soon as she walked into the room.",
      chinese: "她一走進房間，那件鮮紅色的洋裝就吸引了每個人的注意。",
      grammar_point: "as soon as + S + V（一...就...）"
    },
    vocabulary: [
      { word: "draw", pos: "v.", chinese: "吸引（過去式 drew）" },
      { word: "attention", pos: "n.", chinese: "注意" }
    ],
    sentence_pattern: { pattern: "S + draw attention to + N", example: "He shouted to draw attention." }
  },
  {
    phrase: "draw a crowd",
    type: "動詞 + 名詞",
    chinese: "吸引人群",
    keywords: ["draw", "crowd"],
    example: {
      english: "The street performer's amazing magic tricks always draw a large crowd.",
      chinese: "這位街頭藝人令人驚奇的魔術總是能吸引一大群人。",
      grammar_point: "draw a crowd（指活動或表演吸引許多人圍觀）"
    },
    vocabulary: [
      { word: "performer", pos: "n.", chinese: "表演者" },
      { word: "magic trick", pos: "n.", chinese: "魔術" }
    ],
    sentence_pattern: { pattern: "S + draw a large crowd", example: "The concert drew a huge crowd." }
  },
  {
    phrase: "draw an audience",
    type: "動詞 + 名詞",
    chinese: "吸引觀眾",
    keywords: ["draw", "audience"],
    example: {
      english: "The controversial documentary drew a massive audience on its opening night.",
      chinese: "這部具爭議的紀錄片在首映當晚吸引了大量的觀眾。",
      grammar_point: "audience 是集合名詞，指全體觀眾"
    },
    vocabulary: [
      { word: "controversial", pos: "adj.", chinese: "具爭議的" },
      { word: "documentary", pos: "n.", chinese: "紀錄片" },
      { word: "massive", pos: "adj.", chinese: "巨大的、大量的" }
    ],
    sentence_pattern: { pattern: "S + draw a wide audience", example: "Good movies always draw an audience." }
  },
  {
    phrase: "draw a conclusion",
    type: "動詞 + 名詞",
    chinese: "得出結論",
    keywords: ["draw", "conclusion"],
    example: {
      english: "Before we draw a conclusion, we should analyze all the available data carefully.",
      chinese: "在我們得出結論之前，我們應該仔細分析所有可用的數據。",
      grammar_point: "draw a conclusion（做結論，極高頻搭配片語）"
    },
    vocabulary: [
      { word: "analyze", pos: "v.", chinese: "分析" },
      { word: "available", pos: "adj.", chinese: "可取得的、可用的" }
    ],
    sentence_pattern: { pattern: "S + draw a conclusion from + N", example: "It is too early to draw a conclusion." }
  },
  {
    phrase: "face adversity",
    type: "動詞 + 名詞",
    chinese: "面對逆境",
    keywords: ["face", "adversity"],
    example: {
      english: "A strong person does not give up easily when they face adversity in life.",
      chinese: "一個堅強的人在面臨人生逆境時不會輕易放棄。",
      grammar_point: "face adversity（用 face 取代 encounter，語氣更強）"
    },
    vocabulary: [
      { word: "give up", pos: "phr. v.", chinese: "放棄" },
      { word: "adversity", pos: "n.", chinese: "逆境、厄運" }
    ],
    sentence_pattern: { pattern: "S + face adversity with courage", example: "We must learn how to face adversity." }
  },
  {
    phrase: "face the consequences",
    type: "動詞 + 名詞",
    chinese: "面對後果、承擔後果",
    keywords: ["face", "consequences"],
    example: {
      english: "If you break the law, you have to be prepared to face the consequences.",
      chinese: "如果你違法，你就必須準備好承擔後果。",
      grammar_point: "face the consequences（承擔惡果）"
    },
    vocabulary: [
      { word: "prepared", pos: "adj.", chinese: "準備好的" },
      { word: "consequence", pos: "n.", chinese: "後果（常為複數）" }
    ],
    sentence_pattern: { pattern: "S + must face the consequences of + N", example: "He ran away instead of facing the consequences." }
  },
  {
    phrase: "face an opponent",
    type: "動詞 + 名詞",
    chinese: "面對對手",
    keywords: ["face", "opponent"],
    example: {
      english: "The tennis player remained calm even when she had to face a much stronger opponent.",
      chinese: "這位網球選手即使必須面對強大許多的對手，依然保持冷靜。",
      grammar_point: "remain + adj（保持...狀態，連綴動詞）"
    },
    vocabulary: [
      { word: "remain", pos: "v.", chinese: "保持" },
      { word: "calm", pos: "adj.", chinese: "冷靜的" },
      { word: "opponent", pos: "n.", chinese: "對手" }
    ],
    sentence_pattern: { pattern: "S + face a tough opponent", example: "They will face their biggest opponent tomorrow." }
  },
  {
    phrase: "face the truth",
    type: "動詞 + 名詞",
    chinese: "面對真相/現實",
    keywords: ["face", "truth"],
    example: {
      english: "It is painful, but you must face the truth that he is never coming back.",
      chinese: "這很痛苦，但你必須面對他永遠不會回來這個真相。",
      grammar_point: "the truth that + 子句（同位語子句，說明 truth 的內容）"
    },
    vocabulary: [
      { word: "painful", pos: "adj.", chinese: "痛苦的" },
      { word: "truth", pos: "n.", chinese: "真相" }
    ],
    sentence_pattern: { pattern: "It is time to face the truth.", example: "She refused to face the truth." }
  },
  // ── Verb + Noun (高階動詞搭配 - formulate/gain/gather/generate 等) ──────
  {
    phrase: "formulate an idea",
    type: "動詞 + 名詞",
    chinese: "構思主意、形成想法",
    keywords: ["formulate", "idea"],
    example: {
      english: "It took him several days to formulate an idea for his final project.",
      chinese: "他花了幾天的時間來構思他期末專案的想法。",
      grammar_point: "formulate 指「有系統地構思、想出」"
    },
    vocabulary: [
      { word: "formulate", pos: "v.", chinese: "構想、規劃" },
      { word: "several", pos: "adj.", chinese: "幾個的" },
      { word: "final", pos: "adj.", chinese: "期末的、最終的" }
    ],
    sentence_pattern: { pattern: "S + formulate an idea for + N", example: "She is formulating an idea for the novel." }
  },
  {
    phrase: "formulate a question",
    type: "動詞 + 名詞",
    chinese: "構思問題、提出問題",
    keywords: ["formulate", "question"],
    example: {
      english: "The lawyer carefully formulated a question to trap the witness during the trial.",
      chinese: "律師在審判期間仔細構思了一個問題以使證人落入圈套。",
      grammar_point: "carefully formulate（謹慎地構思）"
    },
    vocabulary: [
      { word: "lawyer", pos: "n.", chinese: "律師" },
      { word: "trap", pos: "v.", chinese: "使落入圈套" },
      { word: "witness", pos: "n.", chinese: "證人" }
    ],
    sentence_pattern: { pattern: "S + formulate a question", example: "He paused to formulate a question." }
  },
  {
    phrase: "formulate an answer",
    type: "動詞 + 名詞",
    chinese: "準備答案、構思回答",
    keywords: ["formulate", "answer"],
    example: {
      english: "She paused for a moment to formulate an answer to the difficult interview question.",
      chinese: "她停頓了片刻，以構思這個困難面試問題的答案。",
      grammar_point: "an answer to + N（對於...的答案，to為介系詞）"
    },
    vocabulary: [
      { word: "pause", pos: "v.", chinese: "停頓" },
      { word: "moment", pos: "n.", chinese: "片刻" },
      { word: "interview", pos: "n.", chinese: "面試" }
    ],
    sentence_pattern: { pattern: "S + pause to formulate an answer", example: "He took time to formulate his answer." }
  },
  {
    phrase: "formulate a plan",
    type: "動詞 + 名詞",
    chinese: "制定計畫",
    keywords: ["formulate", "plan"],
    example: {
      english: "The committee formulated a comprehensive plan to tackle the economic crisis.",
      chinese: "委員會制定了一項全面的計畫來應對經濟危機。",
      grammar_point: "formulate a plan 等同於 make/develop a plan，但更為正式"
    },
    vocabulary: [
      { word: "comprehensive", pos: "adj.", chinese: "全面的、綜合的" },
      { word: "tackle", pos: "v.", chinese: "處理、應對" },
      { word: "crisis", pos: "n.", chinese: "危機" }
    ],
    sentence_pattern: { pattern: "S + formulate a plan to + V", example: "We need to formulate a backup plan." }
  },
  {
    phrase: "gain attention",
    type: "動詞 + 名詞",
    chinese: "獲得關注",
    keywords: ["gain", "attention"],
    example: {
      english: "The young artist quickly gained attention after posting her paintings online.",
      chinese: "這位年輕藝術家在網上發布畫作後迅速獲得了關注。",
      grammar_point: "after + V-ing（在...之後）"
    },
    vocabulary: [
      { word: "artist", pos: "n.", chinese: "藝術家" },
      { word: "post", pos: "v.", chinese: "發布、張貼" },
      { word: "painting", pos: "n.", chinese: "畫作" }
    ],
    sentence_pattern: { pattern: "S + gain attention", example: "The issue is gaining international attention." }
  },
  {
    phrase: "gain control",
    type: "動詞 + 名詞",
    chinese: "取得控制權",
    keywords: ["gain", "control"],
    example: {
      english: "The rebels launched a surprise attack and gained control of the capital city.",
      chinese: "叛軍發動突襲並取得了首都的控制權。",
      grammar_point: "gain control of + N（取得對...的控制）"
    },
    vocabulary: [
      { word: "rebel", pos: "n.", chinese: "叛軍、反叛者" },
      { word: "launch", pos: "v.", chinese: "發動、發起" },
      { word: "capital", pos: "n.", chinese: "首都" }
    ],
    sentence_pattern: { pattern: "S + gain control of + N", example: "He finally gained control of his emotions." }
  },
  {
    phrase: "gain independence",
    type: "動詞 + 名詞",
    chinese: "獲得獨立",
    keywords: ["gain", "independence"],
    example: {
      english: "Many African countries gained independence from colonial rule in the 20th century.",
      chinese: "許多非洲國家在20世紀從殖民統治中獲得了獨立。",
      grammar_point: "gain independence from + N（從...之中獲得獨立）"
    },
    vocabulary: [
      { word: "independence", pos: "n.", chinese: "獨立" },
      { word: "colonial", pos: "adj.", chinese: "殖民的" },
      { word: "rule", pos: "n.", chinese: "統治" }
    ],
    sentence_pattern: { pattern: "S + gain independence", example: "The nation fought hard to gain independence." }
  },
  {
    phrase: "gain popularity",
    type: "動詞 + 名詞",
    chinese: "變得受歡迎、人氣攀升",
    keywords: ["gain", "popularity"],
    example: {
      english: "Electric vehicles are gaining popularity worldwide due to environmental concerns.",
      chinese: "由於環保考量，電動車在全球越來越受歡迎。",
      grammar_point: "be gaining popularity（受歡迎程度正在上升）"
    },
    vocabulary: [
      { word: "vehicle", pos: "n.", chinese: "車輛" },
      { word: "worldwide", pos: "adv.", chinese: "全球地" },
      { word: "concern", pos: "n.", chinese: "考量、關注" }
    ],
    sentence_pattern: { pattern: "N + is gaining popularity", example: "The band gained popularity very quickly." }
  },
  {
    phrase: "gain support",
    type: "動詞 + 名詞",
    chinese: "獲得支持",
    keywords: ["gain", "support"],
    example: {
      english: "The new policy gained support from the majority of the local residents.",
      chinese: "這項新政策獲得了大多數當地居民的支持。",
      grammar_point: "gain support from + N（從...獲得支持）"
    },
    vocabulary: [
      { word: "policy", pos: "n.", chinese: "政策" },
      { word: "majority", pos: "n.", chinese: "大多數" },
      { word: "resident", pos: "n.", chinese: "居民" }
    ],
    sentence_pattern: { pattern: "S + gain support from + N", example: "She campaigned hard to gain public support." }
  },
  {
    phrase: "gather flowers",
    type: "動詞 + 名詞",
    chinese: "採花",
    keywords: ["gather", "flowers"],
    example: {
      english: "The children went into the meadow to gather flowers for their mother's birthday.",
      chinese: "孩子們走進草地，為母親的生日採花。",
      grammar_point: "to gather（不定詞表目的）"
    },
    vocabulary: [
      { word: "meadow", pos: "n.", chinese: "草地、牧場" },
      { word: "gather", pos: "v.", chinese: "收集、採集" }
    ],
    sentence_pattern: { pattern: "S + gather flowers", example: "She loves gathering wild flowers in spring." }
  },
  {
    phrase: "gather information",
    type: "動詞 + 名詞",
    chinese: "收集資訊",
    keywords: ["gather", "information"],
    example: {
      english: "The journalist spent weeks gathering information before publishing the investigative report.",
      chinese: "記者在發表這篇調查報導之前，花了幾週的時間收集資訊。",
      grammar_point: "spend 時間 V-ing（花時間做某事）"
    },
    vocabulary: [
      { word: "journalist", pos: "n.", chinese: "記者" },
      { word: "publish", pos: "v.", chinese: "出版、發表" },
      { word: "investigative", pos: "adj.", chinese: "調查的" }
    ],
    sentence_pattern: { pattern: "S + gather information about + N", example: "Police are still gathering information." }
  },
  {
    phrase: "gather strength",
    type: "動詞 + 名詞",
    chinese: "積聚力量、恢復體力",
    keywords: ["gather", "strength"],
    example: {
      english: "He sat down to gather his strength before continuing the steep climb.",
      chinese: "他坐下來恢復體力，然後才繼續陡峭的攀登。",
      grammar_point: "before + V-ing（在...之前）"
    },
    vocabulary: [
      { word: "strength", pos: "n.", chinese: "力量、體力" },
      { word: "continue", pos: "v.", chinese: "繼續" },
      { word: "steep", pos: "adj.", chinese: "陡峭的" }
    ],
    sentence_pattern: { pattern: "S + gather one's strength to + V", example: "The storm is gathering strength over the ocean." }
  },
  {
    phrase: "gather speed",
    type: "動詞 + 名詞",
    chinese: "逐漸加速",
    keywords: ["gather", "speed"],
    example: {
      english: "The train gathered speed as it left the station and headed toward the capital.",
      chinese: "火車駛離車站並朝著首都駛去時，逐漸加速。",
      grammar_point: "gather speed（車輛或物體速度越來越快）"
    },
    vocabulary: [
      { word: "train", pos: "n.", chinese: "火車" },
      { word: "head toward", pos: "phr.", chinese: "朝...前進" },
      { word: "capital", pos: "n.", chinese: "首都" }
    ],
    sentence_pattern: { pattern: "N + gather speed", example: "The car gathered speed on the highway." }
  },
  {
    phrase: "generate interest",
    type: "動詞 + 名詞",
    chinese: "引起興趣、產生興趣",
    keywords: ["generate", "interest"],
    example: {
      english: "The controversial advertisement successfully generated interest among young consumers.",
      chinese: "這則具爭議性的廣告成功地在年輕消費者中引起了興趣。",
      grammar_point: "generate interest（比 arouse interest 更強調從無到有的產生）"
    },
    vocabulary: [
      { word: "controversial", pos: "adj.", chinese: "具爭議的" },
      { word: "advertisement", pos: "n.", chinese: "廣告" },
      { word: "consumer", pos: "n.", chinese: "消費者" }
    ],
    sentence_pattern: { pattern: "S + generate interest in + N", example: "The campaign failed to generate much interest." }
  },
  {
    phrase: "generate ideas",
    type: "動詞 + 名詞",
    chinese: "產生想法、腦力激盪",
    keywords: ["generate", "ideas"],
    example: {
      english: "We will hold a brainstorming session to generate ideas for the upcoming festival.",
      chinese: "我們將舉行一次腦力激盪會議，為即將到來的節慶產生點子。",
      grammar_point: "hold a session to + V（舉辦會議以...）"
    },
    vocabulary: [
      { word: "brainstorming", pos: "n.", chinese: "腦力激盪" },
      { word: "session", pos: "n.", chinese: "會議、一段時間" },
      { word: "upcoming", pos: "adj.", chinese: "即將到來的" }
    ],
    sentence_pattern: { pattern: "S + generate new ideas", example: "Reading books helps generate ideas." }
  },
  {
    phrase: "generate electricity",
    type: "動詞 + 名詞",
    chinese: "發電",
    keywords: ["generate", "electricity"],
    example: {
      english: "Solar panels are a sustainable way to generate electricity without causing pollution.",
      chinese: "太陽能板是一種不造成污染且永續的發電方式。",
      grammar_point: "a way to + V（做...的方式）"
    },
    vocabulary: [
      { word: "solar panel", pos: "n.", chinese: "太陽能板" },
      { word: "sustainable", pos: "adj.", chinese: "永續的" },
      { word: "electricity", pos: "n.", chinese: "電力" }
    ],
    sentence_pattern: { pattern: "S + generate electricity from + N", example: "Wind turbines generate electricity." }
  },
  {
    phrase: "generate profit",
    type: "動詞 + 名詞",
    chinese: "產生利潤",
    keywords: ["generate", "profit"],
    example: {
      english: "The new branch is expected to generate a huge profit for the company next year.",
      chinese: "這家新分店預計明年將為公司產生巨大的利潤。",
      grammar_point: "be expected to + V（預期會...）"
    },
    vocabulary: [
      { word: "branch", pos: "n.", chinese: "分店、分支" },
      { word: "huge", pos: "adj.", chinese: "巨大的" },
      { word: "profit", pos: "n.", chinese: "利潤" }
    ],
    sentence_pattern: { pattern: "S + generate profit", example: "The business failed to generate profit." }
  },
  {
    phrase: "generate revenue",
    type: "動詞 + 名詞",
    chinese: "創造營收/收益",
    keywords: ["generate", "revenue"],
    example: {
      english: "Tourism is one of the main ways for this island to generate revenue.",
      chinese: "旅遊業是這個島嶼創造營收的主要方式之一。",
      grammar_point: "revenue 指公司或政府的歲入/總收入，較 profit 宏觀"
    },
    vocabulary: [
      { word: "tourism", pos: "n.", chinese: "旅遊業" },
      { word: "island", pos: "n.", chinese: "島嶼" },
      { word: "revenue", pos: "n.", chinese: "營收、收益" }
    ],
    sentence_pattern: { pattern: "S + generate revenue from + N", example: "Taxes generate revenue for the government." }
  },
  {
    phrase: "grant access",
    type: "動詞 + 名詞",
    chinese: "給予存取權限、准許進入",
    keywords: ["grant", "access"],
    example: {
      english: "You must enter the correct password before the system will grant you access.",
      chinese: "你必須輸入正確的密碼，系統才會准許你登入。",
      grammar_point: "grant + O1 + O2（授與某人某物）"
    },
    vocabulary: [
      { word: "correct", pos: "adj.", chinese: "正確的" },
      { word: "password", pos: "n.", chinese: "密碼" },
      { word: "access", pos: "n.", chinese: "存取、進入權" }
    ],
    sentence_pattern: { pattern: "S + grant O access to + N", example: "He was granted access to the building." }
  },
  {
    phrase: "grant custody",
    type: "動詞 + 名詞",
    chinese: "授予監護權",
    keywords: ["grant", "custody"],
    example: {
      english: "After the divorce, the judge decided to grant full custody of the child to the mother.",
      chinese: "離婚後，法官決定將孩子的完全監護權授予母親。",
      grammar_point: "grant custody of + N + to 人（把...的監護權判給某人）"
    },
    vocabulary: [
      { word: "divorce", pos: "n.", chinese: "離婚" },
      { word: "judge", pos: "n.", chinese: "法官" },
      { word: "custody", pos: "n.", chinese: "監護權" }
    ],
    sentence_pattern: { pattern: "The court granted custody to + N", example: "He was granted sole custody." }
  },
  {
    phrase: "grant permission",
    type: "動詞 + 名詞",
    chinese: "給予許可、准許",
    keywords: ["grant", "permission"],
    example: {
      english: "The city council refused to grant permission for the construction of the casino.",
      chinese: "市議會拒絕給予興建賭場的許可。",
      grammar_point: "grant permission for + N（准許...）"
    },
    vocabulary: [
      { word: "council", pos: "n.", chinese: "議會" },
      { word: "construction", pos: "n.", chinese: "建設、施工" },
      { word: "casino", pos: "n.", chinese: "賭場" }
    ],
    sentence_pattern: { pattern: "S + grant permission to + V", example: "The teacher granted me permission to leave." }
  },
  {
    phrase: "grant a request",
    type: "動詞 + 名詞",
    chinese: "答應請求、批准申請",
    keywords: ["grant", "request"],
    example: {
      english: "The manager decided to grant her request for an extended unpaid leave.",
      chinese: "經理決定批准她延長無薪假的請求。",
      grammar_point: "grant one's request（答應/批准某人的要求）"
    },
    vocabulary: [
      { word: "manager", pos: "n.", chinese: "經理" },
      { word: "extended", pos: "adj.", chinese: "延長的" },
      { word: "unpaid leave", pos: "n.", chinese: "無薪假" }
    ],
    sentence_pattern: { pattern: "S + grant someone's request", example: "Unfortunately, your request was not granted." }
  },
  {
    phrase: "grant asylum",
    type: "動詞 + 名詞",
    chinese: "庇護、給予政治庇護",
    keywords: ["grant", "asylum"],
    example: {
      english: "The country agreed to grant political asylum to the refugees fleeing the war.",
      chinese: "該國同意給予逃離戰爭的難民政治庇護。",
      grammar_point: "grant asylum to + 人（這是一個時事與新聞極高頻單字）"
    },
    vocabulary: [
      { word: "political", pos: "adj.", chinese: "政治的" },
      { word: "asylum", pos: "n.", chinese: "庇護" },
      { word: "refugee", pos: "n.", chinese: "難民" }
    ],
    sentence_pattern: { pattern: "S + grant asylum to + N", example: "He applied for asylum and it was granted." }
  },
  {
    phrase: "hold a meeting",
    type: "動詞 + 名詞",
    chinese: "召開會議",
    keywords: ["hold", "meeting"],
    example: {
      english: "The committee will hold a meeting tomorrow to discuss the new budget proposal.",
      chinese: "委員會明天將召開會議討論新的預算提案。",
      grammar_point: "hold a meeting（最基本且正式的開會說法）"
    },
    vocabulary: [
      { word: "committee", pos: "n.", chinese: "委員會" },
      { word: "discuss", pos: "v.", chinese: "討論" },
      { word: "proposal", pos: "n.", chinese: "提案" }
    ],
    sentence_pattern: { pattern: "S + hold a meeting to + V", example: "We held an urgent meeting." }
  },
  {
    phrase: "hold an opinion",
    type: "動詞 + 名詞",
    chinese: "抱持某種觀點/意見",
    keywords: ["hold", "opinion"],
    example: {
      english: "Despite the evidence, some people still hold the opinion that the earth is flat.",
      chinese: "儘管有證據，有些人仍然抱持著地球是平的觀點。",
      grammar_point: "hold the opinion that + 子句（堅信...的觀點）"
    },
    vocabulary: [
      { word: "despite", pos: "prep.", chinese: "儘管" },
      { word: "evidence", pos: "n.", chinese: "證據" },
      { word: "flat", pos: "adj.", chinese: "平的" }
    ],
    sentence_pattern: { pattern: "S + hold the opinion that...", example: "I hold a different opinion on this." }
  },
  {
    phrase: "hold a record",
    type: "動詞 + 名詞",
    chinese: "保持紀錄",
    keywords: ["hold", "record"],
    example: {
      english: "He has held the world record for the 100-meter dash for over five years.",
      chinese: "他保持100公尺短跑世界紀錄已經超過五年了。",
      grammar_point: "hold a record（與 set a record 創紀錄、break a record 打破紀錄 不同）"
    },
    vocabulary: [
      { word: "record", pos: "n.", chinese: "紀錄" },
      { word: "dash", pos: "n.", chinese: "短跑、衝刺" }
    ],
    sentence_pattern: { pattern: "S + hold the record for + N", example: "She holds several Olympic records." }
  },
  {
    phrase: "hold a reception",
    type: "動詞 + 名詞",
    chinese: "舉辦招待會",
    keywords: ["hold", "reception"],
    example: {
      english: "The university held a grand reception to welcome the international exchange students.",
      chinese: "大學舉辦了一場盛大的招待會來歡迎國際交換學生。",
      grammar_point: "reception 指正式的歡迎會或招待會"
    },
    vocabulary: [
      { word: "grand", pos: "adj.", chinese: "盛大的" },
      { word: "reception", pos: "n.", chinese: "招待會、接待" },
      { word: "exchange", pos: "n.", chinese: "交換" }
    ],
    sentence_pattern: { pattern: "S + hold a reception", example: "A reception was held after the wedding." }
  },
  {
    phrase: "incur a debt",
    type: "動詞 + 名詞",
    chinese: "負債、招致債務",
    keywords: ["incur", "debt"],
    example: {
      english: "He incurred a massive debt due to his gambling addiction and lost his house.",
      chinese: "由於賭博成癮，他背負了龐大的債務並失去了房子。",
      grammar_point: "incur 指「招致（負面的事物）」，debt 的 b 不發音"
    },
    vocabulary: [
      { word: "incur", pos: "v.", chinese: "招致、惹起" },
      { word: "debt", pos: "n.", chinese: "債務" },
      { word: "gambling", pos: "n.", chinese: "賭博" }
    ],
    sentence_pattern: { pattern: "S + incur a debt", example: "The company incurred heavy debts." }
  },
  {
    phrase: "incur a fee",
    type: "動詞 + 名詞",
    chinese: "產生費用",
    keywords: ["incur", "fee"],
    example: {
      english: "If you return the rental car late, you will incur an additional late fee.",
      chinese: "如果你晚還租來的車，將會產生額外的滯納金。",
      grammar_point: "incur a fee（商業常見用語：導致必須支付費用）"
    },
    vocabulary: [
      { word: "rental", pos: "adj.", chinese: "租賃的" },
      { word: "additional", pos: "adj.", chinese: "額外的" },
      { word: "fee", pos: "n.", chinese: "費用" }
    ],
    sentence_pattern: { pattern: "S + will incur a fee", example: "Canceling the ticket may incur a fee." }
  },
  {
    phrase: "incur a charge",
    type: "動詞 + 名詞",
    chinese: "產生收費",
    keywords: ["incur", "charge"],
    example: {
      english: "Using your credit card overseas may incur a foreign transaction charge.",
      chinese: "在國外使用信用卡可能會產生海外交易手續費。",
      grammar_point: "charge 與 fee 類似，指服務的收費"
    },
    vocabulary: [
      { word: "overseas", pos: "adv.", chinese: "在海外" },
      { word: "foreign", pos: "adj.", chinese: "外國的" },
      { word: "transaction", pos: "n.", chinese: "交易" }
    ],
    sentence_pattern: { pattern: "V-ing + will incur a charge", example: "Extra luggage will incur a charge." }
  },
  {
    phrase: "incur damage",
    type: "動詞 + 名詞",
    chinese: "遭受損害",
    keywords: ["incur", "damage"],
    example: {
      english: "The building incurred severe structural damage during the magnitude 7.0 earthquake.",
      chinese: "這棟建築在規模 7.0 的地震中遭受了嚴重的結構損害。",
      grammar_point: "incur damage（比 suffer damage 更正式）"
    },
    vocabulary: [
      { word: "severe", pos: "adj.", chinese: "嚴重的" },
      { word: "structural", pos: "adj.", chinese: "結構的" },
      { word: "magnitude", pos: "n.", chinese: "規模、震級" }
    ],
    sentence_pattern: { pattern: "S + incur damage", example: "The car incurred little damage in the crash." }
  },
  {
    phrase: "incur anger",
    type: "動詞 + 名詞",
    chinese: "招致憤怒",
    keywords: ["incur", "anger"],
    example: {
      english: "The politician's racist remarks quickly incurred the anger of the public.",
      chinese: "這位政治人物的種族歧視言論迅速招致了大眾的憤怒。",
      grammar_point: "incur someone's anger（惹惱某人）"
    },
    vocabulary: [
      { word: "politician", pos: "n.", chinese: "政治人物" },
      { word: "racist", pos: "adj.", chinese: "種族歧視的" },
      { word: "remark", pos: "n.", chinese: "言論、評論" }
    ],
    sentence_pattern: { pattern: "S + incur the anger of + N", example: "His actions incurred his boss's anger." }
  },
  {
    phrase: "invest money",
    type: "動詞 + 名詞",
    chinese: "投資金錢",
    keywords: ["invest", "money"],
    example: {
      english: "It is wise to invest money in real estate to build long-term wealth.",
      chinese: "投資房地產以建立長期財富是明智的。",
      grammar_point: "invest money in + N（將錢投資於...）"
    },
    vocabulary: [
      { word: "invest", pos: "v.", chinese: "投資" },
      { word: "real estate", pos: "n.", chinese: "房地產" },
      { word: "wealth", pos: "n.", chinese: "財富" }
    ],
    sentence_pattern: { pattern: "S + invest money in + N", example: "They invested money in the stock market." }
  },
  {
    phrase: "invest time",
    type: "動詞 + 名詞",
    chinese: "投入時間",
    keywords: ["invest", "time"],
    example: {
      english: "If you want to master a language, you must invest time in practicing every day.",
      chinese: "如果你想精通一門語言，你必須投入時間每天練習。",
      grammar_point: "invest time in + V-ing（花時間做...，比 spend time 更具正面價值）"
    },
    vocabulary: [
      { word: "master", pos: "v.", chinese: "精通" },
      { word: "practice", pos: "v.", chinese: "練習" }
    ],
    sentence_pattern: { pattern: "S + invest time in + N/V-ing", example: "Parents should invest time in their children." }
  },
  {
    phrase: "invest energy",
    type: "動詞 + 名詞",
    chinese: "投入精力",
    keywords: ["invest", "energy"],
    example: {
      english: "The young entrepreneur invested all his energy into making the startup a success.",
      chinese: "這位年輕的企業家將他所有的精力投入到讓這家新創公司成功上。",
      grammar_point: "invest energy in/into + N（把精力放在...）"
    },
    vocabulary: [
      { word: "entrepreneur", pos: "n.", chinese: "企業家" },
      { word: "energy", pos: "n.", chinese: "精力、能量" },
      { word: "startup", pos: "n.", chinese: "新創公司" }
    ],
    sentence_pattern: { pattern: "S + invest energy into + V-ing", example: "She invested much energy in the project." }
  },
  {
    phrase: "keep a promise",
    type: "動詞 + 名詞",
    chinese: "遵守諾言",
    keywords: ["keep", "promise"],
    example: {
      english: "A reliable person is someone who always keeps a promise, no matter what happens.",
      chinese: "一個可靠的人是無論發生什麼事都總是遵守諾言的人。",
      grammar_point: "no matter what happens（無論發生什麼）"
    },
    vocabulary: [
      { word: "reliable", pos: "adj.", chinese: "可靠的" },
      { word: "promise", pos: "n.", chinese: "承諾" }
    ],
    sentence_pattern: { pattern: "S + keep a promise", example: "It is hard for him to keep a promise." }
  },
  {
    phrase: "keep a secret",
    type: "動詞 + 名詞",
    chinese: "保守秘密",
    keywords: ["keep", "secret"],
    example: {
      english: "Can I trust you to keep a secret? Please don't tell anyone about this.",
      chinese: "我可以相信你會保守秘密嗎？請不要把這件事告訴任何人。",
      grammar_point: "trust O to V（信任某人會去做...）"
    },
    vocabulary: [
      { word: "trust", pos: "v.", chinese: "信任" },
      { word: "secret", pos: "n.", chinese: "秘密" }
    ],
    sentence_pattern: { pattern: "S + keep a secret", example: "She is very bad at keeping secrets." }
  },
  {
    phrase: "keep one's word",
    type: "動詞 + 名詞",
    chinese: "信守承諾",
    keywords: ["keep", "word"],
    example: {
      english: "Even when things got difficult, he kept his word and stayed to help us.",
      chinese: "即使情況變得困難，他依然信守承諾留下來幫助我們。",
      grammar_point: "keep one's word（word 在此為單數不可數，指承諾）"
    },
    vocabulary: [
      { word: "difficult", pos: "adj.", chinese: "困難的" }
    ],
    sentence_pattern: { pattern: "S + always keep one's word", example: "A gentleman always keeps his word." }
  },
  {
    phrase: "lose confidence",
    type: "動詞 + 名詞",
    chinese: "失去信心",
    keywords: ["lose", "confidence"],
    example: {
      english: "After failing the exam three times, he began to lose confidence in himself.",
      chinese: "在考試失敗三次之後，他開始對自己失去信心。",
      grammar_point: "lose confidence in + N（對...失去信心）"
    },
    vocabulary: [
      { word: "fail", pos: "v.", chinese: "失敗、不及格" },
      { word: "confidence", pos: "n.", chinese: "信心" }
    ],
    sentence_pattern: { pattern: "S + lose confidence in + N", example: "Investors are losing confidence in the market." }
  },
  {
    phrase: "lose control",
    type: "動詞 + 名詞",
    chinese: "失去控制",
    keywords: ["lose", "control"],
    example: {
      english: "The driver lost control of the car on the icy road and hit a tree.",
      chinese: "司機在結冰的路面上失去對車子的控制，撞上了一棵樹。",
      grammar_point: "lose control of + N（對...失控）"
    },
    vocabulary: [
      { word: "control", pos: "n.", chinese: "控制" },
      { word: "icy", pos: "adj.", chinese: "結冰的" }
    ],
    sentence_pattern: { pattern: "S + lose control of + N", example: "She lost control of her temper." }
  },
  {
    phrase: "lose patience",
    type: "動詞 + 名詞",
    chinese: "失去耐心",
    keywords: ["lose", "patience"],
    example: {
      english: "The teacher eventually lost patience with the boys who wouldn't stop talking.",
      chinese: "老師最終對那些一直講話的男孩們失去了耐心。",
      grammar_point: "lose patience with + 人（對某人失去耐心）"
    },
    vocabulary: [
      { word: "eventually", pos: "adv.", chinese: "最終" },
      { word: "patience", pos: "n.", chinese: "耐心" }
    ],
    sentence_pattern: { pattern: "S + lose patience with + N", example: "I am starting to lose patience." }
  },
  {
    phrase: "lose money",
    type: "動詞 + 名詞",
    chinese: "賠錢、虧損",
    keywords: ["lose", "money"],
    example: {
      english: "During the economic recession, many small businesses lost money and had to close.",
      chinese: "在經濟衰退期間，許多小型企業虧損並被迫倒閉。",
      grammar_point: "lose money（在商業上指虧本）"
    },
    vocabulary: [
      { word: "economic", pos: "adj.", chinese: "經濟的" },
      { word: "recession", pos: "n.", chinese: "衰退" }
    ],
    sentence_pattern: { pattern: "S + lose money in + N", example: "He lost a lot of money in stocks." }
  },
  {
    phrase: "lose weight",
    type: "動詞 + 名詞",
    chinese: "減肥、體重減輕",
    keywords: ["lose", "weight"],
    example: {
      english: "To lose weight effectively, you need to combine a healthy diet with regular exercise.",
      chinese: "為了有效地減肥，你需要將健康的飲食與規律的運動結合起來。",
      grammar_point: "combine A with B（將 A 與 B 結合）"
    },
    vocabulary: [
      { word: "effectively", pos: "adv.", chinese: "有效地" },
      { word: "combine", pos: "v.", chinese: "結合" },
      { word: "regular", pos: "adj.", chinese: "規律的" }
    ],
    sentence_pattern: { pattern: "S + try to lose weight", example: "She lost weight by eating less sugar." }
  },
  // ── 動名詞進階搭配 (make/meet/orchestrate/stand/tackle/throw 等) ─────────
  {
    phrase: "make headway",
    type: "動詞片語",
    chinese: "取得進展、有進步",
    keywords: ["make", "headway"],
    example: {
      english: "Despite the bad weather, the construction team is making steady headway on the new bridge.",
      chinese: "儘管天氣惡劣，施工團隊在建造新橋方面正取得穩定的進展。",
      grammar_point: "make headway = make progress（為高級替換片語，headway 不可數）"
    },
    vocabulary: [
      { word: "construction", pos: "n.", chinese: "建設、施工" },
      { word: "steady", pos: "adj.", chinese: "穩定的" },
      { word: "bridge", pos: "n.", chinese: "橋樑" }
    ],
    sentence_pattern: { pattern: "S + make headway on/with + N", example: "We are finally making some headway." }
  },
  {
    phrase: "make money",
    type: "動詞 + 名詞",
    chinese: "賺錢",
    keywords: ["make", "money"],
    example: {
      english: "Many teenagers take part-time jobs during the summer vacation to make money.",
      chinese: "許多青少年在暑假期間打工賺錢。",
      grammar_point: "to make money（不定詞表目的：為了賺錢）"
    },
    vocabulary: [
      { word: "teenager", pos: "n.", chinese: "青少年" },
      { word: "part-time", pos: "adj.", chinese: "兼職的" },
      { word: "vacation", pos: "n.", chinese: "假期" }
    ],
    sentence_pattern: { pattern: "S + V + to make money", example: "He started a business to make money." }
  },
  {
    phrase: "make a difference",
    type: "動詞片語",
    chinese: "產生影響、帶來改變",
    keywords: ["make", "difference"],
    example: {
      english: "Volunteering at the local shelter is a great way to make a difference in your community.",
      chinese: "在當地收容所當志工是在你的社區中帶來改變的好方法。",
      grammar_point: "make a difference to/in + N（對...產生深遠的影響）"
    },
    vocabulary: [
      { word: "volunteer", pos: "v.", chinese: "當志工" },
      { word: "shelter", pos: "n.", chinese: "收容所、避難所" },
      { word: "community", pos: "n.", chinese: "社區" }
    ],
    sentence_pattern: { pattern: "S + make a difference in + N", example: "One person can make a difference." }
  },
  {
    phrase: "make a living",
    type: "動詞片語",
    chinese: "謀生、維持生計",
    keywords: ["make", "living"],
    example: {
      english: "It is hard to make a living as a freelance writer without a stable income.",
      chinese: "作為一名沒有穩定收入的自由作家是很難謀生的。",
      grammar_point: "make a living as + 職業 / make a living by + V-ing（靠...謀生）"
    },
    vocabulary: [
      { word: "freelance", pos: "adj.", chinese: "自由工作的" },
      { word: "stable", pos: "adj.", chinese: "穩定的" },
      { word: "income", pos: "n.", chinese: "收入" }
    ],
    sentence_pattern: { pattern: "S + make a living by + V-ing", example: "He makes a living by selling paintings." }
  },
  {
    phrase: "meet a challenge",
    type: "動詞 + 名詞",
    chinese: "迎接挑戰、應付挑戰",
    keywords: ["meet", "challenge"],
    example: {
      english: "To succeed in the modern world, you must be ready to meet new challenges every day.",
      chinese: "為了在現代世界中成功，你必須準備好每天迎接新的挑戰。",
      grammar_point: "meet a challenge（克服困難/迎接挑戰，為正面字眼）"
    },
    vocabulary: [
      { word: "succeed", pos: "v.", chinese: "成功" },
      { word: "modern", pos: "adj.", chinese: "現代的" },
      { word: "ready", pos: "adj.", chinese: "準備好的" }
    ],
    sentence_pattern: { pattern: "S + be ready to meet a challenge", example: "She is brave enough to meet the challenge." }
  },
  {
    phrase: "meet requirements",
    type: "動詞 + 名詞",
    chinese: "符合要求",
    keywords: ["meet", "requirements"],
    example: {
      english: "Unfortunately, your application was rejected because it did not meet our requirements.",
      chinese: "很遺憾，你的申請被拒絕了，因為它不符合我們的要求。",
      grammar_point: "meet requirements / standards（達到標準/要求，meet 此處為「符合」）"
    },
    vocabulary: [
      { word: "unfortunately", pos: "adv.", chinese: "不幸地、遺憾地" },
      { word: "application", pos: "n.", chinese: "申請(書)" },
      { word: "reject", pos: "v.", chinese: "拒絕" }
    ],
    sentence_pattern: { pattern: "S + meet the requirements for + N", example: "This computer meets the minimum requirements." }
  },
  {
    phrase: "orchestrate a campaign",
    type: "動詞 + 名詞",
    chinese: "精心策劃一場活動/運動",
    keywords: ["orchestrate", "campaign"],
    example: {
      english: "The marketing team orchestrated a brilliant campaign that boosted sales by 30%.",
      chinese: "行銷團隊精心策劃了一場出色的宣傳活動，使銷售額提升了30%。",
      grammar_point: "orchestrate 原意為「指揮交響樂」，引申為「精心策劃（尤指複雜的活動）」"
    },
    vocabulary: [
      { word: "orchestrate", pos: "v.", chinese: "精心策劃、統籌" },
      { word: "brilliant", pos: "adj.", chinese: "出色的、聰明的" },
      { word: "boost", pos: "v.", chinese: "提升、促進" }
    ],
    sentence_pattern: { pattern: "S + orchestrate a campaign to + V", example: "They orchestrated a campaign to save the forest." }
  },
  {
    phrase: "orchestrate an attack",
    type: "動詞 + 名詞",
    chinese: "策劃攻擊",
    keywords: ["orchestrate", "attack"],
    example: {
      english: "The general secretly orchestrated an attack on the enemy's headquarters at dawn.",
      chinese: "將軍在黎明時分祕密策劃了對敵軍總部的攻擊。",
      grammar_point: "orchestrate an attack（常用於軍事、網路駭客攻擊的新聞英文）"
    },
    vocabulary: [
      { word: "secretly", pos: "adv.", chinese: "祕密地" },
      { word: "headquarters", pos: "n.", chinese: "總部" },
      { word: "dawn", pos: "n.", chinese: "黎明" }
    ],
    sentence_pattern: { pattern: "S + orchestrate an attack on + N", example: "Hackers orchestrated a cyber attack." }
  },
  {
    phrase: "orchestrate a hold-up",
    type: "動詞 + 名詞",
    chinese: "策劃搶劫",
    keywords: ["orchestrate", "hold-up"],
    example: {
      english: "The criminal mastermind orchestrated a hold-up at the national bank without leaving a trace.",
      chinese: "這名犯罪首腦策劃了一場國家銀行搶劫案，且未留下任何痕跡。",
      grammar_point: "hold-up (n.) 持槍搶劫"
    },
    vocabulary: [
      { word: "criminal", pos: "adj.", chinese: "犯罪的" },
      { word: "mastermind", pos: "n.", chinese: "首腦、策劃者" },
      { word: "trace", pos: "n.", chinese: "痕跡" }
    ],
    sentence_pattern: { pattern: "S + orchestrate a hold-up", example: "They orchestrated a hold-up last night." }
  },
  {
    phrase: "orchestrate an event",
    type: "動詞 + 名詞",
    chinese: "統籌/策劃活動",
    keywords: ["orchestrate", "event"],
    example: {
      english: "It takes excellent leadership skills to orchestrate an international event like the Olympics.",
      chinese: "統籌像奧運會這樣的大型國際活動需要卓越的領導能力。",
      grammar_point: "It takes + N + to V（做某事需要...）"
    },
    vocabulary: [
      { word: "excellent", pos: "adj.", chinese: "卓越的" },
      { word: "leadership", pos: "n.", chinese: "領導能力" },
      { word: "international", pos: "adj.", chinese: "國際的" }
    ],
    sentence_pattern: { pattern: "S + orchestrate an event", example: "She orchestrated the whole charity event." }
  },
  {
    phrase: "pay a compliment",
    type: "動詞 + 名詞",
    chinese: "讚美、致以問候",
    keywords: ["pay", "compliment"],
    example: {
      english: "He paid her a nice compliment on her beautiful dress, which made her smile.",
      chinese: "他稱讚她那件美麗的洋裝，這讓她笑了起來。",
      grammar_point: "pay 人 a compliment on 某事（在某方面讚美某人）"
    },
    vocabulary: [
      { word: "compliment", pos: "n.", chinese: "讚美" },
      { word: "beautiful", pos: "adj.", chinese: "美麗的" }
    ],
    sentence_pattern: { pattern: "S + pay O a compliment", example: "I must pay you a compliment on your cooking." }
  },
  {
    phrase: "raise a child",
    type: "動詞 + 名詞",
    chinese: "養育孩子",
    keywords: ["raise", "child"],
    example: {
      english: "It takes a lot of time, money, and patience to raise a child properly.",
      chinese: "養育一個孩子需要花費大量的時間、金錢和耐心。",
      grammar_point: "raise a child（撫養小孩，同義 bring up）"
    },
    vocabulary: [
      { word: "patience", pos: "n.", chinese: "耐心" },
      { word: "properly", pos: "adv.", chinese: "適當地、正確地" }
    ],
    sentence_pattern: { pattern: "S + raise a child", example: "She raised three children by herself." }
  },
  {
    phrase: "raise animals",
    type: "動詞 + 名詞",
    chinese: "飼養動物",
    keywords: ["raise", "animals"],
    example: {
      english: "The farmer raises animals like cows and sheep on his vast piece of land.",
      chinese: "農夫在他廣大的土地上飼養牛、羊等動物。",
      grammar_point: "raise 作及物動詞，有「養育、飼養」之意"
    },
    vocabulary: [
      { word: "farmer", pos: "n.", chinese: "農夫" },
      { word: "vast", pos: "adj.", chinese: "廣大的" },
      { word: "land", pos: "n.", chinese: "土地" }
    ],
    sentence_pattern: { pattern: "S + raise animals", example: "My grandfather raised animals on the farm." }
  },
  {
    phrase: "raise expectations",
    type: "動詞 + 名詞",
    chinese: "提高期望",
    keywords: ["raise", "expectations"],
    example: {
      english: "The movie's fantastic trailer raised the audience's expectations significantly.",
      chinese: "這部電影極佳的預告片大幅提高了觀眾的期望。",
      grammar_point: "raise expectations（使期待值升高）"
    },
    vocabulary: [
      { word: "fantastic", pos: "adj.", chinese: "極好的" },
      { word: "trailer", pos: "n.", chinese: "預告片" },
      { word: "significantly", pos: "adv.", chinese: "顯著地" }
    ],
    sentence_pattern: { pattern: "S + raise one's expectations", example: "The success raised our expectations." }
  },
  {
    phrase: "raise an issue",
    type: "動詞 + 名詞",
    chinese: "提出問題/議題",
    keywords: ["raise", "issue"],
    example: {
      english: "During the meeting, an employee raised an important issue regarding workplace safety.",
      chinese: "在會議中，一名員工提出了一個關於職場安全的重要議題。",
      grammar_point: "raise an issue（在會議或討論中「提出」某個待解決的事項）"
    },
    vocabulary: [
      { word: "employee", pos: "n.", chinese: "員工" },
      { word: "regarding", pos: "prep.", chinese: "關於" },
      { word: "workplace", pos: "n.", chinese: "職場" }
    ],
    sentence_pattern: { pattern: "S + raise an issue", example: "I would like to raise an issue here." }
  },
  {
    phrase: "reach a conclusion",
    type: "動詞 + 名詞",
    chinese: "得出結論、達成結論",
    keywords: ["reach", "conclusion"],
    example: {
      english: "After evaluating all the evidence, the detective finally reached a logical conclusion.",
      chinese: "在評估了所有證據後，偵探終於得出了一個合乎邏輯的結論。",
      grammar_point: "reach a conclusion（同義詞 draw/come to a conclusion）"
    },
    vocabulary: [
      { word: "evaluate", pos: "v.", chinese: "評估" },
      { word: "evidence", pos: "n.", chinese: "證據" },
      { word: "logical", pos: "adj.", chinese: "合乎邏輯的" }
    ],
    sentence_pattern: { pattern: "S + reach a conclusion", example: "The jury reached a conclusion quickly." }
  },
  {
    phrase: "reach a destination",
    type: "動詞 + 名詞",
    chinese: "抵達目的地",
    keywords: ["reach", "destination"],
    example: {
      english: "It took us five hours of driving to finally reach our holiday destination.",
      chinese: "我們開了五個小時的車，終於抵達了度假目的地。",
      grammar_point: "reach + 地方（直接加受詞，不需加 at/in）"
    },
    vocabulary: [
      { word: "driving", pos: "n.", chinese: "駕駛" },
      { word: "destination", pos: "n.", chinese: "目的地" }
    ],
    sentence_pattern: { pattern: "S + reach one's destination", example: "We reached our destination at noon." }
  },
  {
    phrase: "reach a goal",
    type: "動詞 + 名詞",
    chinese: "達成目標",
    keywords: ["reach", "goal"],
    example: {
      english: "If you stay focused and work hard, you will definitely reach your goal.",
      chinese: "如果你保持專注並努力工作，你一定會達成你的目標。",
      grammar_point: "reach a goal = achieve a goal"
    },
    vocabulary: [
      { word: "focused", pos: "adj.", chinese: "專注的" },
      { word: "definitely", pos: "adv.", chinese: "肯定地、絕對" }
    ],
    sentence_pattern: { pattern: "S + reach a goal", example: "He reached his goal of losing 10 kilos." }
  },
  {
    phrase: "reach a verdict",
    type: "動詞 + 名詞",
    chinese: "做出裁決、達成判決",
    keywords: ["reach", "verdict"],
    example: {
      english: "The jury took three days to deliberate before reaching a verdict of 'not guilty'.",
      chinese: "陪審團花了三天的時間審議，才做出「無罪」的裁決。",
      grammar_point: "reach a verdict（法律專業用語，指陪審團達成共識）"
    },
    vocabulary: [
      { word: "jury", pos: "n.", chinese: "陪審團" },
      { word: "deliberate", pos: "v.", chinese: "仔細考慮、商議" },
      { word: "verdict", pos: "n.", chinese: "裁決、判決" }
    ],
    sentence_pattern: { pattern: "The jury reached a verdict.", example: "They finally reached a verdict." }
  },
  {
    phrase: "save money",
    type: "動詞 + 名詞",
    chinese: "存錢、省錢",
    keywords: ["save", "money"],
    example: {
      english: "I am trying to save money so that I can buy a new laptop next year.",
      chinese: "我正在努力存錢，以便明年能買一台新筆記型電腦。",
      grammar_point: "so that + 子句（以便於...）"
    },
    vocabulary: [
      { word: "laptop", pos: "n.", chinese: "筆記型電腦" }
    ],
    sentence_pattern: { pattern: "S + save money to + V", example: "Taking the bus saves money." }
  },
  {
    phrase: "save space",
    type: "動詞 + 名詞",
    chinese: "節省空間",
    keywords: ["save", "space"],
    example: {
      english: "Buying multi-functional furniture is a great way to save space in a small apartment.",
      chinese: "購買多功能傢俱是在小公寓裡節省空間的好方法。",
      grammar_point: "V-ing 作主詞（動名詞片語）"
    },
    vocabulary: [
      { word: "multi-functional", pos: "adj.", chinese: "多功能的" },
      { word: "furniture", pos: "n.", chinese: "家具（不可數）" },
      { word: "apartment", pos: "n.", chinese: "公寓" }
    ],
    sentence_pattern: { pattern: "V-ing helps save space.", example: "This folding bed saves a lot of space." }
  },
  {
    phrase: "save a life",
    type: "動詞 + 名詞",
    chinese: "拯救生命",
    keywords: ["save", "life"],
    example: {
      english: "Donating blood is a simple act, but it can literally save a life.",
      chinese: "捐血是一個簡單的舉動，但它真的能拯救一條生命。",
      grammar_point: "save a life（複數為 save lives）"
    },
    vocabulary: [
      { word: "donate", pos: "v.", chinese: "捐贈" },
      { word: "literally", pos: "adv.", chinese: "確實地、不加誇張地" }
    ],
    sentence_pattern: { pattern: "S + save someone's life", example: "The doctor saved his life." }
  },
  {
    phrase: "save the situation",
    type: "動詞 + 名詞",
    chinese: "挽救局面",
    keywords: ["save", "situation"],
    example: {
      english: "His quick thinking and calm reaction managed to save the situation from becoming a disaster.",
      chinese: "他機智的反應和冷靜的態度成功地挽救了局面，避免了一場災難。",
      grammar_point: "save the situation from + V-ing（挽救局面免於...）"
    },
    vocabulary: [
      { word: "reaction", pos: "n.", chinese: "反應" },
      { word: "disaster", pos: "n.", chinese: "災難" }
    ],
    sentence_pattern: { pattern: "S + save the situation", example: "Her apology saved the situation." }
  },
  {
    phrase: "stand trial",
    type: "動詞 + 名詞",
    chinese: "受審",
    keywords: ["stand", "trial"],
    example: {
      english: "The suspect will stand trial next month for the crimes he allegedly committed.",
      chinese: "嫌犯將於下個月因其涉嫌犯下的罪行受審。",
      grammar_point: "stand trial for + N（因為某罪名而接受審判）"
    },
    vocabulary: [
      { word: "suspect", pos: "n.", chinese: "嫌犯" },
      { word: "trial", pos: "n.", chinese: "審判" },
      { word: "allegedly", pos: "adv.", chinese: "據稱、涉嫌" }
    ],
    sentence_pattern: { pattern: "S + will stand trial", example: "He has to stand trial for murder." }
  },
  {
    phrase: "stand a chance",
    type: "動詞 + 名詞",
    chinese: "有(成功的)機會、有希望",
    keywords: ["stand", "chance"],
    example: {
      english: "Without proper preparation, you don't stand a chance of passing the difficult exam.",
      chinese: "沒有適當的準備，你根本沒有機會通過這個困難的考試。",
      grammar_point: "stand a chance of + V-ing（有機會做到...，常放否定句中）"
    },
    vocabulary: [
      { word: "proper", pos: "adj.", chinese: "適當的" },
      { word: "preparation", pos: "n.", chinese: "準備" }
    ],
    sentence_pattern: { pattern: "S + stand a chance of + V-ing", example: "Do we stand a chance of winning?" }
  },
  {
    phrase: "stand comparison",
    type: "動詞 + 名詞",
    chinese: "經得起比較、不相上下",
    keywords: ["stand", "comparison"],
    example: {
      english: "This new cheap smartphone simply cannot stand comparison with the leading brands.",
      chinese: "這款便宜的新智慧型手機根本無法與領導品牌相提並論（經不起比較）。",
      grammar_point: "cannot stand comparison with + N（無法與...相比）"
    },
    vocabulary: [
      { word: "comparison", pos: "n.", chinese: "比較" },
      { word: "leading", pos: "adj.", chinese: "領導的、頂尖的" },
      { word: "brand", pos: "n.", chinese: "品牌" }
    ],
    sentence_pattern: { pattern: "A cannot stand comparison with B", example: "Her writing can stand comparison with professionals." }
  },
  {
    phrase: "stand your ground",
    type: "動詞片語",
    chinese: "堅持立場、不退縮",
    keywords: ["stand", "ground"],
    example: {
      english: "Even when everyone else disagreed with him, he stood his ground and defended his ideas.",
      chinese: "即使其他所有人都不同意他，他依然堅持自己的立場並捍衛自己的想法。",
      grammar_point: "stand one's ground（在爭論中堅持己見）"
    },
    vocabulary: [
      { word: "disagree", pos: "v.", chinese: "不同意" },
      { word: "defend", pos: "v.", chinese: "捍衛、防禦" }
    ],
    sentence_pattern: { pattern: "S + stand one's ground", example: "You must stand your ground." }
  },
  {
    phrase: "stand to attention",
    type: "動詞片語",
    chinese: "立正站好",
    keywords: ["stand", "attention"],
    example: {
      english: "The soldiers immediately stood to attention when the general walked into the room.",
      chinese: "當將軍走進房間時，士兵們立刻立正站好。",
      grammar_point: "stand to/at attention（軍事/紀律用語：立正）"
    },
    vocabulary: [
      { word: "soldier", pos: "n.", chinese: "士兵" },
      { word: "immediately", pos: "adv.", chinese: "立刻" },
      { word: "general", pos: "n.", chinese: "將軍" }
    ],
    sentence_pattern: { pattern: "S + stand to attention", example: "The guards stood to attention." }
  },
  {
    phrase: "tackle a problem",
    type: "動詞 + 名詞",
    chinese: "處理/解決問題",
    keywords: ["tackle", "problem"],
    example: {
      english: "The new mayor promised to tackle the traffic problem within his first year in office.",
      chinese: "新市長承諾在他上任的第一年內解決交通問題。",
      grammar_point: "tackle 作「著手處理（難題）」解，是學測極佳的高級替換詞"
    },
    vocabulary: [
      { word: "tackle", pos: "v.", chinese: "處理、應付" },
      { word: "mayor", pos: "n.", chinese: "市長" },
      { word: "in office", pos: "phr.", chinese: "在職、執政" }
    ],
    sentence_pattern: { pattern: "S + tackle a problem", example: "We must tackle this problem together." }
  },
  {
    phrase: "tackle an issue",
    type: "動詞 + 名詞",
    chinese: "處理議題",
    keywords: ["tackle", "issue"],
    example: {
      english: "World leaders gathered at the summit to tackle the global issue of climate change.",
      chinese: "世界各國領導人齊聚高峰會，共同處理氣候變遷這個全球性議題。",
      grammar_point: "tackle an issue 等同於 address an issue"
    },
    vocabulary: [
      { word: "gather", pos: "v.", chinese: "聚集" },
      { word: "summit", pos: "n.", chinese: "高峰會" }
    ],
    sentence_pattern: { pattern: "S + tackle an issue", example: "The book tackles the issue of poverty." }
  },
  {
    phrase: "tackle a task",
    type: "動詞 + 名詞",
    chinese: "處理/應付任務",
    keywords: ["tackle", "task"],
    example: {
      english: "She drank a large cup of coffee before beginning to tackle the difficult task ahead.",
      chinese: "在開始處理眼前的艱難任務之前，她喝了一大杯咖啡。",
      grammar_point: "the task ahead（眼前的任務，ahead 作後位修飾）"
    },
    vocabulary: [
      { word: "task", pos: "n.", chinese: "任務" },
      { word: "ahead", pos: "adv.", chinese: "在前方" }
    ],
    sentence_pattern: { pattern: "S + tackle a task", example: "I have a big task to tackle today." }
  },
  {
    phrase: "tackle a crisis",
    type: "動詞 + 名詞",
    chinese: "應對危機",
    keywords: ["tackle", "crisis"],
    example: {
      english: "The government formed a special committee to effectively tackle the economic crisis.",
      chinese: "政府成立了一個特別委員會，以有效應對這場經濟危機。",
      grammar_point: "tackle a crisis（採取積極行動解決危機）"
    },
    vocabulary: [
      { word: "committee", pos: "n.", chinese: "委員會" },
      { word: "effectively", pos: "adv.", chinese: "有效地" },
      { word: "crisis", pos: "n.", chinese: "危機" }
    ],
    sentence_pattern: { pattern: "S + tackle a crisis", example: "They acted fast to tackle the crisis." }
  },
  {
    phrase: "take control",
    type: "動詞 + 名詞",
    chinese: "取得控制、掌管",
    keywords: ["take", "control"],
    example: {
      english: "After the founder passed away, his eldest son took control of the family business.",
      chinese: "創辦人過世後，他的長子接管了家族企業。",
      grammar_point: "take control of + N（掌控某事/接手管理）"
    },
    vocabulary: [
      { word: "founder", pos: "n.", chinese: "創辦人" },
      { word: "eldest", pos: "adj.", chinese: "最年長的" }
    ],
    sentence_pattern: { pattern: "S + take control of + N", example: "The pilot took control of the plane." }
  },
  {
    phrase: "take a stand",
    type: "動詞片語",
    chinese: "表明立場",
    keywords: ["take", "stand"],
    example: {
      english: "It is important for public figures to take a firm stand against racial discrimination.",
      chinese: "對公眾人物來說，堅定表明反對種族歧視的立場是很重要的。",
      grammar_point: "take a stand against/for + N（採取反對/支持的立場）"
    },
    vocabulary: [
      { word: "public figure", pos: "n.", chinese: "公眾人物" },
      { word: "racial", pos: "adj.", chinese: "種族的" },
      { word: "discrimination", pos: "n.", chinese: "歧視" }
    ],
    sentence_pattern: { pattern: "S + take a stand against + N", example: "We must take a stand on this issue." }
  },
  {
    phrase: "take steps",
    type: "動詞 + 名詞",
    chinese: "採取步驟、採取措施",
    keywords: ["take", "steps"],
    example: {
      english: "The school has taken steps to ensure the safety of all students during fire drills.",
      chinese: "學校已經採取措施，以確保所有學生在消防演習期間的安全。",
      grammar_point: "take steps to + V（採取措施去做...，等同 take action/measures）"
    },
    vocabulary: [
      { word: "ensure", pos: "v.", chinese: "確保" },
      { word: "drill", pos: "n.", chinese: "演習、訓練" }
    ],
    sentence_pattern: { pattern: "S + take steps to + V", example: "We are taking steps to improve quality." }
  },
  {
    phrase: "throw doubt",
    type: "動詞片語",
    chinese: "引起懷疑、使人對...產生懷疑",
    keywords: ["throw", "doubt"],
    example: {
      english: "The new video evidence throws doubt on the suspect's alibi.",
      chinese: "新的影片證據讓人對嫌犯的不在場證明產生了懷疑。",
      grammar_point: "throw doubt on/upon + N（使某事受到質疑）"
    },
    vocabulary: [
      { word: "evidence", pos: "n.", chinese: "證據" },
      { word: "suspect", pos: "n.", chinese: "嫌疑犯" },
      { word: "alibi", pos: "n.", chinese: "不在場證明" }
    ],
    sentence_pattern: { pattern: "N + throws doubt on + N", example: "His actions threw doubt on his words." }
  },
  {
    phrase: "throw light",
    type: "動詞片語",
    chinese: "闡明、使...明朗",
    keywords: ["throw", "light"],
    example: {
      english: "This new historical discovery might throw light on how ancient Egyptians built the pyramids.",
      chinese: "這項新的歷史發現或許能闡明古埃及人是如何建造金字塔的。",
      grammar_point: "throw/shed light on + N/子句（提供線索、讓某事變得清楚）"
    },
    vocabulary: [
      { word: "historical", pos: "adj.", chinese: "歷史的" },
      { word: "ancient", pos: "adj.", chinese: "古代的" },
      { word: "pyramid", pos: "n.", chinese: "金字塔" }
    ],
    sentence_pattern: { pattern: "N + throws light on + N", example: "The book throws light on his early life." }
  },
  {
    phrase: "throw a party",
    type: "動詞 + 名詞",
    chinese: "舉辦派對",
    keywords: ["throw", "party"],
    example: {
      english: "They decided to throw a huge party to celebrate their 10th wedding anniversary.",
      chinese: "他們決定舉辦一場盛大的派對來慶祝結婚十週年。",
      grammar_point: "throw a party（口語極常使用，取代 hold a party）"
    },
    vocabulary: [
      { word: "celebrate", pos: "v.", chinese: "慶祝" },
      { word: "anniversary", pos: "n.", chinese: "週年紀念日" }
    ],
    sentence_pattern: { pattern: "S + throw a party for + N", example: "Let's throw a party for her birthday!" }
  },
  {
    phrase: "throw a tantrum",
    type: "動詞 + 名詞",
    chinese: "發脾氣、鬧脾氣",
    keywords: ["throw", "tantrum"],
    example: {
      english: "The little boy threw a tantrum in the toy store because his mother wouldn't buy him the robot.",
      chinese: "小男孩在玩具店裡大發脾氣，因為他媽媽不給他買那個機器人。",
      grammar_point: "throw a tantrum（通常指小孩大哭大鬧，或指人不理性地發飆）"
    },
    vocabulary: [
      { word: "tantrum", pos: "n.", chinese: "發脾氣（尤指兒童）" },
      { word: "robot", pos: "n.", chinese: "機器人" }
    ],
    sentence_pattern: { pattern: "S + throw a tantrum", example: "She threw a tantrum when she didn't get her way." }
  },
  // ── GET (高頻動詞與慣用片語) ───────────────────────────────────────────────
  {
    phrase: "get around",
    type: "動詞片語",
    chinese: "四處走動、(消息)傳開、克服",
    keywords: ["get", "around"],
    example: {
      english: "It is very easy to get around the city by taking the MRT.",
      chinese: "搭乘捷運在這座城市四處走動非常容易。",
      grammar_point: "get around（四處移動/旅行；若指消息傳開則用 News gets around.）"
    },
    vocabulary: [
      { word: "city", pos: "n.", chinese: "城市" },
      { word: "easy", pos: "adj.", chinese: "容易的" }
    ],
    sentence_pattern: { pattern: "S + get around + 地方", example: "Bad news gets around quickly." }
  },
  {
    phrase: "get angry",
    type: "動詞 + 形容詞",
    chinese: "生氣、發脾氣",
    keywords: ["get", "angry"],
    example: {
      english: "He gets angry easily when people interrupt him while he is speaking.",
      chinese: "當人們在他說話時打斷他，他很容易生氣。",
      grammar_point: "get 作連綴動詞，後接形容詞表「狀態的改變」"
    },
    vocabulary: [
      { word: "easily", pos: "adv.", chinese: "容易地" },
      { word: "interrupt", pos: "v.", chinese: "打斷、插嘴" }
    ],
    sentence_pattern: { pattern: "S + get angry at/with + O", example: "Don't get angry over small things." }
  },
  {
    phrase: "get away",
    type: "動詞片語",
    chinese: "逃離、外出度假",
    keywords: ["get", "away"],
    example: {
      english: "We are hoping to get away for a few days to relax at the beach.",
      chinese: "我們希望能外出度假幾天，在海灘上放鬆一下。",
      grammar_point: "get away from + N（從...逃脫）；get away (for a holiday)（去度假）"
    },
    vocabulary: [
      { word: "relax", pos: "v.", chinese: "放鬆" },
      { word: "beach", pos: "n.", chinese: "海灘" }
    ],
    sentence_pattern: { pattern: "S + get away from + N", example: "The thief managed to get away." }
  },
  {
    phrase: "get cracking",
    type: "動詞片語",
    chinese: "(口語) 趕快開始、馬上行動",
    keywords: ["get", "cracking"],
    example: {
      english: "We have a lot of work to do before the deadline, so let's get cracking!",
      chinese: "在截止日期前我們有很多工作要做，所以我們趕快開始吧！",
      grammar_point: "let's get cracking（口語極常用，意同 let's get started）"
    },
    vocabulary: [
      { word: "deadline", pos: "n.", chinese: "截止日期" },
      { word: "work", pos: "n.", chinese: "工作" }
    ],
    sentence_pattern: { pattern: "Let's get cracking.", example: "If we want to finish, we'd better get cracking." }
  },
  {
    phrase: "get better",
    type: "動詞 + 形容詞",
    chinese: "變好、康復",
    keywords: ["get", "better"],
    example: {
      english: "I heard you were sick. I hope you get better soon.",
      chinese: "我聽說你生病了。希望你早日康復。",
      grammar_point: "get better（事物獲得改善；或指病情好轉）"
    },
    vocabulary: [
      { word: "sick", pos: "adj.", chinese: "生病的" },
      { word: "soon", pos: "adv.", chinese: "很快地、不久" }
    ],
    sentence_pattern: { pattern: "S + get better", example: "The weather is getting better." }
  },
  {
    phrase: "get cold feet",
    type: "動詞片語",
    chinese: "臨陣退縮、臨場膽怯",
    keywords: ["get", "cold", "feet"],
    example: {
      english: "He was going to ask her out, but he got cold feet at the last minute.",
      chinese: "他原本打算約她出去，但他在最後一刻臨陣退縮了。",
      grammar_point: "get cold feet（學測超高頻測驗俚語，指因害怕而退縮）"
    },
    vocabulary: [
      { word: "ask out", pos: "phr. v.", chinese: "約(某人)外出" },
      { word: "minute", pos: "n.", chinese: "分鐘、時刻" }
    ],
    sentence_pattern: { pattern: "S + get cold feet", example: "The groom got cold feet before the wedding." }
  },
  {
    phrase: "get dark",
    type: "動詞 + 形容詞",
    chinese: "天黑",
    keywords: ["get", "dark"],
    example: {
      english: "We should head back home before it gets dark.",
      chinese: "我們應該在天黑前回家。",
      grammar_point: "It gets dark.（It 為虛主詞，代指天氣/時間）"
    },
    vocabulary: [
      { word: "head back", pos: "phr.", chinese: "往回走" },
      { word: "before", pos: "prep.", chinese: "在...之前" }
    ],
    sentence_pattern: { pattern: "It gets dark + 時間", example: "It gets dark very early in winter." }
  },
  {
    phrase: "get divorced",
    type: "動詞 + 過去分詞",
    chinese: "離婚",
    keywords: ["get", "divorced"],
    example: {
      english: "They decided to get divorced after realizing they were no longer happy together.",
      chinese: "在意識到他們在一起不再快樂後，他們決定離婚。",
      grammar_point: "get divorced（強調離婚這個動作/狀態的改變）"
    },
    vocabulary: [
      { word: "divorced", pos: "adj.", chinese: "離婚的" },
      { word: "realize", pos: "v.", chinese: "意識到" }
    ],
    sentence_pattern: { pattern: "S + get divorced", example: "My parents got divorced last year." }
  },
  {
    phrase: "get drunk",
    type: "動詞 + 過去分詞",
    chinese: "喝醉",
    keywords: ["get", "drunk"],
    example: {
      english: "It is illegal and extremely dangerous to get drunk and drive.",
      chinese: "酒醉駕車是違法且極度危險的。",
      grammar_point: "get drunk（喝醉，狀態改變）"
    },
    vocabulary: [
      { word: "illegal", pos: "adj.", chinese: "非法的" },
      { word: "drunk", pos: "adj.", chinese: "喝醉的" }
    ],
    sentence_pattern: { pattern: "S + get drunk on + 飲料", example: "He got completely drunk at the party." }
  },
  {
    phrase: "get excited",
    type: "動詞 + 過去分詞",
    chinese: "感到興奮",
    keywords: ["get", "excited"],
    example: {
      english: "The children got very excited when they saw the presents under the Christmas tree.",
      chinese: "當孩子們看到聖誕樹下的禮物時，他們變得非常興奮。",
      grammar_point: "get excited about + N（對...感到興奮）"
    },
    vocabulary: [
      { word: "excited", pos: "adj.", chinese: "興奮的" },
      { word: "present", pos: "n.", chinese: "禮物" }
    ],
    sentence_pattern: { pattern: "S + get excited about + N", example: "Don't get too excited yet." }
  },
  {
    phrase: "get an idea",
    type: "動詞 + 名詞",
    chinese: "有個主意、得到靈感",
    keywords: ["get", "idea"],
    example: {
      english: "I suddenly got a great idea for our final science project.",
      chinese: "我突然對我們的期末自然專案有了一個很棒的主意。",
      grammar_point: "get an idea for + N（對...有靈感）"
    },
    vocabulary: [
      { word: "suddenly", pos: "adv.", chinese: "突然地" },
      { word: "project", pos: "n.", chinese: "專案、計畫" }
    ],
    sentence_pattern: { pattern: "S + get an idea", example: "Where did you get that idea?" }
  },
  {
    phrase: "get a job",
    type: "動詞 + 名詞",
    chinese: "找到工作",
    keywords: ["get", "job"],
    example: {
      english: "After months of searching, he finally got a job as a software engineer.",
      chinese: "經過幾個月的尋找，他終於找到了一份軟體工程師的工作。",
      grammar_point: "get a job as + 職業（找到身為...的工作）"
    },
    vocabulary: [
      { word: "search", pos: "v.", chinese: "尋找" },
      { word: "software", pos: "n.", chinese: "軟體" },
      { word: "engineer", pos: "n.", chinese: "工程師" }
    ],
    sentence_pattern: { pattern: "S + get a job at + 公司", example: "She got a job in a bank." }
  },
  {
    phrase: "get married",
    type: "動詞 + 過去分詞",
    chinese: "結婚",
    keywords: ["get", "married"],
    example: {
      english: "They plan to get married next spring in a beautiful church.",
      chinese: "他們計畫明年春天在一個美麗的教堂裡結婚。",
      grammar_point: "get married to + 人（與某人結婚，切勿用 with）"
    },
    vocabulary: [
      { word: "married", pos: "adj.", chinese: "已婚的" },
      { word: "church", pos: "n.", chinese: "教堂" }
    ],
    sentence_pattern: { pattern: "S + get married to + O", example: "When are you getting married?" }
  },
  {
    phrase: "get permission",
    type: "動詞 + 名詞",
    chinese: "獲得許可",
    keywords: ["get", "permission"],
    example: {
      english: "You must get permission from your parents before going on the camping trip.",
      chinese: "在去露營旅行之前，你必須先獲得父母的許可。",
      grammar_point: "get permission from + 人/機構（獲得...的許可）"
    },
    vocabulary: [
      { word: "permission", pos: "n.", chinese: "許可" },
      { word: "camping", pos: "n.", chinese: "露營" }
    ],
    sentence_pattern: { pattern: "S + get permission to + V", example: "He got permission to leave early." }
  },
  {
    phrase: "get ready",
    type: "動詞 + 形容詞",
    chinese: "準備好",
    keywords: ["get", "ready"],
    example: {
      english: "Please get ready quickly, or we will miss our flight.",
      chinese: "請趕快準備好，否則我們會錯過班機。",
      grammar_point: "get ready for + N / to V（準備好...）"
    },
    vocabulary: [
      { word: "quickly", pos: "adv.", chinese: "快速地" },
      { word: "flight", pos: "n.", chinese: "班機、飛行" }
    ],
    sentence_pattern: { pattern: "S + get ready for + N", example: "I am getting ready for the party." }
  },
  {
    phrase: "get rid of",
    type: "動詞片語",
    chinese: "擺脫、清除、丟棄",
    keywords: ["get", "rid", "of"],
    example: {
      english: "We should get rid of these old clothes to make room for new ones.",
      chinese: "我們應該把這些舊衣服丟掉，騰出空間給新衣服。",
      grammar_point: "get rid of + N（清除某物、擺脫某人，極度高頻！）"
    },
    vocabulary: [
      { word: "rid", pos: "adj.", chinese: "擺脫的" },
      { word: "make room for", pos: "phr.", chinese: "為...騰出空間" }
    ],
    sentence_pattern: { pattern: "S + get rid of + N", example: "It's hard to get rid of a bad habit." }
  },
  {
    phrase: "get the message",
    type: "動詞 + 名詞",
    chinese: "領會暗示、明白",
    keywords: ["get", "message"],
    example: {
      english: "I ignored his calls completely, hoping he would eventually get the message and leave me alone.",
      chinese: "我完全不理會他的電話，希望他最終能明白我的暗示並別再煩我。",
      grammar_point: "get the message（口語：聽懂弦外之音、明白對方的用意）"
    },
    vocabulary: [
      { word: "ignore", pos: "v.", chinese: "忽視、不理會" },
      { word: "eventually", pos: "adv.", chinese: "最終地" }
    ],
    sentence_pattern: { pattern: "S + finally get the message", example: "He glared at me, and I got the message." }
  },
  {
    phrase: "get a move on",
    type: "動詞片語",
    chinese: "趕快、行動起來",
    keywords: ["get", "move"],
    example: {
      english: "We need to get a move on, or we are going to be late for the movie.",
      chinese: "我們得趕快了，不然看電影就要遲到了。",
      grammar_point: "get a move on（口語慣用語，催促他人加快速度）"
    },
    vocabulary: [
      { word: "movie", pos: "n.", chinese: "電影" },
      { word: "late", pos: "adj.", chinese: "遲到的" }
    ],
    sentence_pattern: { pattern: "Come on, get a move on!", example: "If you don't get a move on, we'll miss the train." }
  },
  {
    phrase: "get moving",
    type: "動詞 + 現在分詞",
    chinese: "開始行動、動起來",
    keywords: ["get", "moving"],
    example: {
      english: "The project is already behind schedule, so we really need to get moving.",
      chinese: "這個專案已經進度落後了，所以我們真的需要動起來了。",
      grammar_point: "get moving（同 get a move on，催促行動）"
    },
    vocabulary: [
      { word: "behind schedule", pos: "phr.", chinese: "進度落後" },
      { word: "project", pos: "n.", chinese: "專案" }
    ],
    sentence_pattern: { pattern: "It's time to get moving.", example: "Let's get moving before it rains." }
  },
  {
    phrase: "get nowhere",
    type: "動詞 + 副詞",
    chinese: "毫無進展、一事無成",
    keywords: ["get", "nowhere"],
    example: {
      english: "Arguing with an unreasonable person will get you nowhere.",
      chinese: "和一個不講理的人爭論是不會有任何結果的。",
      grammar_point: "get nowhere (with + N)（在...方面毫無進展）"
    },
    vocabulary: [
      { word: "argue", pos: "v.", chinese: "爭論" },
      { word: "unreasonable", pos: "adj.", chinese: "不講理的" }
    ],
    sentence_pattern: { pattern: "S + get nowhere with + N", example: "We are getting nowhere in this discussion." }
  },
  {
    phrase: "get somewhere",
    type: "動詞 + 副詞",
    chinese: "有所進展、有點眉目",
    keywords: ["get", "somewhere"],
    example: {
      english: "After hours of trying different solutions, we are finally getting somewhere.",
      chinese: "在嘗試了數小時不同的解決方案後，我們終於有了一些進展。",
      grammar_point: "get somewhere（與 get nowhere 相反，表示有進步）"
    },
    vocabulary: [
      { word: "solution", pos: "n.", chinese: "解決方案" },
      { word: "finally", pos: "adv.", chinese: "終於" }
    ],
    sentence_pattern: { pattern: "S + be getting somewhere", example: "Keep practicing, and you'll get somewhere." }
  },
  {
    phrase: "get on with",
    type: "動詞片語",
    chinese: "繼續進行... / 與...和睦相處",
    keywords: ["get", "on", "with"],
    example: {
      english: "Please stop complaining and get on with your homework.",
      chinese: "請停止抱怨，繼續寫你的功課吧。",
      grammar_point: "get on with + N（繼續做...；若接「人」，則表示與某人相處融洽）"
    },
    vocabulary: [
      { word: "complain", pos: "v.", chinese: "抱怨" },
      { word: "homework", pos: "n.", chinese: "功課" }
    ],
    sentence_pattern: { pattern: "S + get on with + N", example: "How do you get on with your new roommate?" }
  },
  {
    phrase: "get out of",
    type: "動詞片語",
    chinese: "逃避(責任/工作)、從...出來",
    keywords: ["get", "out", "of"],
    example: {
      english: "He pretended to be sick to get out of doing the household chores.",
      chinese: "他裝病以逃避做家事。",
      grammar_point: "get out of + V-ing/N（藉故逃避某事）"
    },
    vocabulary: [
      { word: "pretend", pos: "v.", chinese: "假裝" },
      { word: "household chores", pos: "n.", chinese: "家事" }
    ],
    sentence_pattern: { pattern: "S + get out of + V-ing", example: "You can't get out of helping us today." }
  },
  {
    phrase: "get started",
    type: "動詞 + 過去分詞",
    chinese: "開始",
    keywords: ["get", "started"],
    example: {
      english: "We have a lot to cover today, so let's get started right away.",
      chinese: "我們今天有很多內容要涵蓋，所以我們馬上開始吧。",
      grammar_point: "get started on + N（開始著手進行...）"
    },
    vocabulary: [
      { word: "cover", pos: "v.", chinese: "涵蓋、處理" },
      { word: "right away", pos: "adv.", chinese: "立刻、馬上" }
    ],
    sentence_pattern: { pattern: "Let's get started.", example: "I need to get started on my essay." }
  },
  {
    phrase: "get the drift",
    type: "動詞片語",
    chinese: "明白大意、懂暗示",
    keywords: ["get", "drift"],
    example: {
      english: "She didn't explain the plan in detail, but I got the drift of what she wanted.",
      chinese: "她沒有詳細解釋計畫，但我明白她想要什麼的大意。",
      grammar_point: "get the drift (of...) = understand the general idea"
    },
    vocabulary: [
      { word: "explain", pos: "v.", chinese: "解釋" },
      { word: "in detail", pos: "phr.", chinese: "詳細地" },
      { word: "drift", pos: "n.", chinese: "大意、主旨" }
    ],
    sentence_pattern: { pattern: "S + get the drift", example: "He spoke quickly, but I got the drift." }
  },
  {
    phrase: "get the sack",
    type: "動詞片語",
    chinese: "被解雇、被炒魷魚",
    keywords: ["get", "sack"],
    example: {
      english: "He got the sack because he was consistently late for work.",
      chinese: "他因為一直上班遲到而被解雇了。",
      grammar_point: "get the sack（英式口語常考片語，同義 get fired）"
    },
    vocabulary: [
      { word: "sack", pos: "n.", chinese: "解雇、大布袋" },
      { word: "consistently", pos: "adv.", chinese: "一貫地、不斷地" }
    ],
    sentence_pattern: { pattern: "S + get the sack for + V-ing", example: "If you don't work hard, you'll get the sack." }
  },
  {
    phrase: "get there",
    type: "動詞片語",
    chinese: "到達目的地、達成目標",
    keywords: ["get", "there"],
    example: {
      english: "Learning English takes time, but if you keep practicing, you will get there eventually.",
      chinese: "學英文需要時間，但如果你不斷練習，最終一定會達成目標。",
      grammar_point: "get there（字面指抵達某地，引申為達到成功的境地）"
    },
    vocabulary: [
      { word: "practice", pos: "v.", chinese: "練習" },
      { word: "eventually", pos: "adv.", chinese: "最終地" }
    ],
    sentence_pattern: { pattern: "S + will get there", example: "It's a long journey, but we will get there." }
  },
  {
    phrase: "get together",
    type: "動詞片語",
    chinese: "聚會、相聚",
    keywords: ["get", "together"],
    example: {
      english: "Our extended family tries to get together at least once a year for Chinese New Year.",
      chinese: "我們的大家族試著每年至少在農曆新年時相聚一次。",
      grammar_point: "get together（聚會，名詞型態為 a get-together）"
    },
    vocabulary: [
      { word: "extended family", pos: "n.", chinese: "大家族" },
      { word: "at least", pos: "phr.", chinese: "至少" }
    ],
    sentence_pattern: { pattern: "S + get together for + N", example: "Let's get together for a drink soon." }
  },
  {
    phrase: "get upset",
    type: "動詞 + 形容詞",
    chinese: "感到心煩意亂、生氣",
    keywords: ["get", "upset"],
    example: {
      english: "Please don't get upset over such a small mistake; everyone makes them.",
      chinese: "請不要為這麼小的錯誤感到心煩；每個人都會犯錯。",
      grammar_point: "get upset over/about + N（對...感到難過/生氣）"
    },
    vocabulary: [
      { word: "upset", pos: "adj.", chinese: "心煩的、不悅的" },
      { word: "mistake", pos: "n.", chinese: "錯誤" }
    ],
    sentence_pattern: { pattern: "S + get upset about/over + N", example: "She got upset when she heard the news." }
  },
  {
    phrase: "get used to",
    type: "動詞片語",
    chinese: "習慣於...",
    keywords: ["get", "used", "to"],
    example: {
      english: "It took him a few months to get used to driving on the left side of the road in the UK.",
      chinese: "他花了幾個月的時間才習慣在英國靠左側開車。",
      grammar_point: "get used to + N / V-ing（開始適應...，此處 to 為介系詞必加 V-ing！）"
    },
    vocabulary: [
      { word: "used to", pos: "phr.", chinese: "習慣於" },
      { word: "road", pos: "n.", chinese: "道路" }
    ],
    sentence_pattern: { pattern: "S + get used to + V-ing", example: "I am getting used to the hot weather here." }
  },
  // ── 基礎五大動詞 (Make, Do, Take, Give, Have) ───────────────────────────────
  {
    phrase: "make a mistake",
    type: "動詞 + 名詞",
    chinese: "犯錯",
    keywords: ["make", "mistake"],
    example: {
      english: "Everyone makes a mistake from time to time, so don't be too hard on yourself.",
      chinese: "每個人偶爾都會犯錯，所以別對自己太嚴苛。",
      grammar_point: "make a mistake in + N/V-ing（在...方面犯錯，注意動詞必須用 make）"
    },
    vocabulary: [
      { word: "from time to time", pos: "phr.", chinese: "偶爾、有時" },
      { word: "hard on", pos: "phr.", chinese: "對...嚴厲/苛刻" }
    ],
    sentence_pattern: { pattern: "S + make a mistake", example: "I made a terrible mistake on the test." }
  },
  {
    phrase: "make sense",
    type: "動詞片語",
    chinese: "有道理、說得通",
    keywords: ["make", "sense"],
    example: {
      english: "His explanation for being late didn't make any sense to me at all.",
      chinese: "他對於遲到的解釋對我來說根本說不通。",
      grammar_point: "make sense to + 人（對某人來說有道理）；make no sense（毫無道理）"
    },
    vocabulary: [
      { word: "explanation", pos: "n.", chinese: "解釋" },
      { word: "at all", pos: "phr.", chinese: "一點也不（常接於否定句後）" }
    ],
    sentence_pattern: { pattern: "It makes sense to + V", example: "It makes sense to buy tickets in advance." }
  },
  {
    phrase: "do one's best",
    type: "動詞片語",
    chinese: "盡全力",
    keywords: ["do", "best"],
    example: {
      english: "Regardless of the final outcome, you should just do your best in the competition.",
      chinese: "不論最終結果如何，你在比賽中只要盡全力就好。",
      grammar_point: "do one's best to + V（盡某人的全力去做...，同義 try one's best）"
    },
    vocabulary: [
      { word: "regardless of", pos: "prep.", chinese: "不論、不管" },
      { word: "outcome", pos: "n.", chinese: "結果" },
      { word: "competition", pos: "n.", chinese: "比賽" }
    ],
    sentence_pattern: { pattern: "S + do one's best to + V", example: "I will do my best to help you." }
  },
  {
    phrase: "do homework",
    type: "動詞 + 名詞",
    chinese: "做功課",
    keywords: ["do", "homework"],
    example: {
      english: "Students are expected to do their homework immediately after getting home from school.",
      chinese: "學生被期望放學回家後立刻做功課。",
      grammar_point: "homework 是不可數名詞，前面不可加 a，也不可加 s"
    },
    vocabulary: [
      { word: "expect", pos: "v.", chinese: "期望、預期" },
      { word: "immediately", pos: "adv.", chinese: "立即、馬上" }
    ],
    sentence_pattern: { pattern: "S + do one's homework", example: "She is doing her homework in her room." }
  },
  {
    phrase: "do a favor",
    type: "動詞 + 名詞",
    chinese: "幫忙",
    keywords: ["do", "favor"],
    example: {
      english: "Could you do me a favor and translate this document into English?",
      chinese: "你能幫我一個忙，把這份文件翻譯成英文嗎？",
      grammar_point: "do 人 a favor = do a favor for 人（幫某人一個忙）"
    },
    vocabulary: [
      { word: "favor", pos: "n.", chinese: "恩惠、幫忙" },
      { word: "translate", pos: "v.", chinese: "翻譯" },
      { word: "document", pos: "n.", chinese: "文件" }
    ],
    sentence_pattern: { pattern: "Could you do me a favor?", example: "He did me a huge favor yesterday." }
  },
  {
    phrase: "do research",
    type: "動詞 + 名詞",
    chinese: "做研究",
    keywords: ["do", "research"],
    example: {
      english: "She is doing research on renewable energy for her master's degree.",
      chinese: "她正在為她的碩士學位做再生能源的相關研究。",
      grammar_point: "do research on/into + 主題（research為不可數名詞，同義詞 conduct research）"
    },
    vocabulary: [
      { word: "renewable energy", pos: "n.", chinese: "再生能源" },
      { word: "master's degree", pos: "n.", chinese: "碩士學位" }
    ],
    sentence_pattern: { pattern: "S + do research on + N", example: "We need to do more research before deciding." }
  },
  {
    phrase: "take a chance",
    type: "動詞 + 名詞",
    chinese: "冒險、碰碰運氣",
    keywords: ["take", "chance"],
    example: {
      english: "Sometimes you just have to take a chance if you really want to achieve your dreams.",
      chinese: "有時候如果你真的想實現夢想，你就必須冒險一試。",
      grammar_point: "take a chance on + N（在...上面賭一把/碰運氣）"
    },
    vocabulary: [
      { word: "chance", pos: "n.", chinese: "機會、風險" },
      { word: "achieve", pos: "v.", chinese: "達成、實現" }
    ],
    sentence_pattern: { pattern: "S + take a chance on + N", example: "I decided to take a chance and invest in the business." }
  },
  {
    phrase: "take into account",
    type: "動詞片語",
    chinese: "把...考慮進去",
    keywords: ["take", "account"],
    example: {
      english: "The judge took the boy's young age into account when deciding his punishment.",
      chinese: "法官在決定對他的懲罰時，將這名男孩年紀尚輕考慮了進去。",
      grammar_point: "take N into account = take into account N（將...納入考量，學測必考！）"
    },
    vocabulary: [
      { word: "judge", pos: "n.", chinese: "法官" },
      { word: "punishment", pos: "n.", chinese: "懲罰" }
    ],
    sentence_pattern: { pattern: "S + take N into account", example: "You must take the weather into account." }
  },
  {
    phrase: "take responsibility for",
    type: "動詞 + 名詞 + 介系詞",
    chinese: "對...負起責任",
    keywords: ["take", "responsibility", "for"],
    example: {
      english: "The CEO resigned to take full responsibility for the company's massive financial loss.",
      chinese: "執行長辭職，以為公司巨大的財務損失負起完全責任。",
      grammar_point: "take responsibility for + N/V-ing（為...負責，可加 full 表示完全負責）"
    },
    vocabulary: [
      { word: "resign", pos: "v.", chinese: "辭職" },
      { word: "massive", pos: "adj.", chinese: "巨大的" },
      { word: "financial loss", pos: "n.", chinese: "財務損失" }
    ],
    sentence_pattern: { pattern: "S + take responsibility for + N", example: "He took responsibility for the mistake." }
  },
  {
    phrase: "give a presentation",
    type: "動詞 + 名詞",
    chinese: "發表簡報",
    keywords: ["give", "presentation"],
    example: {
      english: "I have to give a presentation on climate change in my science class tomorrow.",
      chinese: "明天我必須在自然課上做一個關於氣候變遷的簡報。",
      grammar_point: "give a presentation on + 主題（就...進行簡報）"
    },
    vocabulary: [
      { word: "presentation", pos: "n.", chinese: "簡報、報告" },
      { word: "climate change", pos: "n.", chinese: "氣候變遷" }
    ],
    sentence_pattern: { pattern: "S + give a presentation on + N", example: "She gave a great presentation yesterday." }
  },
  {
    phrase: "have an impact on",
    type: "動詞 + 名詞 + 介系詞",
    chinese: "對...產生衝擊/影響",
    keywords: ["have", "impact", "on"],
    example: {
      english: "The invention of the smartphone has had a profound impact on modern communication.",
      chinese: "智慧型手機的發明對現代通訊產生了深遠的影響。",
      grammar_point: "have a/an + adj + impact on + N（對...有強烈影響，impact通常指重大衝擊）"
    },
    vocabulary: [
      { word: "invention", pos: "n.", chinese: "發明" },
      { word: "profound", pos: "adj.", chinese: "深遠的、深刻的" },
      { word: "communication", pos: "n.", chinese: "通訊、溝通" }
    ],
    sentence_pattern: { pattern: "S + have an impact on + N", example: "Pollution has a huge impact on our health." }
  },
  {
    phrase: "have a talk",
    type: "動詞 + 名詞",
    chinese: "談一談、談話",
    keywords: ["have", "talk"],
    example: {
      english: "I need to have a serious talk with my son about his recent poor academic performance.",
      chinese: "我需要和我兒子就他最近糟糕的學業表現嚴肅地談一談。",
      grammar_point: "have a talk with 人 about 事物（和某人談論某事）"
    },
    vocabulary: [
      { word: "serious", pos: "adj.", chinese: "嚴肅的、認真的" },
      { word: "academic", pos: "adj.", chinese: "學術的、學業的" },
      { word: "performance", pos: "n.", chinese: "表現" }
    ],
    sentence_pattern: { pattern: "S + have a talk with + O", example: "Let's have a talk after dinner." }
  },
  {
    phrase: "have an influence on",
    type: "動詞 + 名詞 + 介系詞",
    chinese: "對...產生影響",
    keywords: ["have", "influence", "on"],
    example: {
      english: "Good teachers usually have a lasting influence on their students' personal development.",
      chinese: "好老師通常對學生的個人發展有著深遠持久的影響。",
      grammar_point: "have an influence on + N（與 have an impact/effect on 為同義互換片語）"
    },
    vocabulary: [
      { word: "lasting", pos: "adj.", chinese: "持久的" },
      { word: "personal development", pos: "n.", chinese: "個人發展" }
    ],
    sentence_pattern: { pattern: "S + have an influence on + N", example: "Media has a great influence on teens." }
  },
  {
    phrase: "have confidence in",
    type: "動詞 + 名詞 + 介系詞",
    chinese: "對...有信心",
    keywords: ["have", "confidence", "in"],
    example: {
      english: "You must have confidence in yourself if you want other people to believe in you.",
      chinese: "如果你想讓別人相信你，你必須先對自己有信心。",
      grammar_point: "have confidence in + 人/事物（信任某人事物，in為介系詞）"
    },
    vocabulary: [
      { word: "confidence", pos: "n.", chinese: "信心" },
      { word: "believe in", pos: "phr.", chinese: "相信" }
    ],
    sentence_pattern: { pattern: "S + have confidence in + N", example: "I have full confidence in her ability." }
  },
  {
    phrase: "have an effect on",
    type: "動詞 + 名詞 + 介系詞",
    chinese: "對...有影響/起作用",
    keywords: ["have", "effect", "on"],
    example: {
      english: "Drinking too much coffee before bed will definitely have a negative effect on your sleep.",
      chinese: "睡前喝太多咖啡肯定會對你的睡眠產生負面影響。",
      grammar_point: "have an effect on + N（對...起作用/產生效果，effect 為名詞，勿與動詞 affect 搞混！）"
    },
    vocabulary: [
      { word: "definitely", pos: "adv.", chinese: "肯定地、絕對地" },
      { word: "negative", pos: "adj.", chinese: "負面的" },
      { word: "effect", pos: "n.", chinese: "影響、效果" }
    ],
    sentence_pattern: { pattern: "S + have an effect on + N", example: "The medicine had no effect on him." }
  },
  // ── 混合必考動名詞與片語 ────────────────────────────────────────────────
  {
    phrase: "keep in touch",
    type: "動詞片語",
    chinese: "保持聯絡",
    keywords: ["keep", "touch"],
    example: {
      english: "Even after graduating from high school, the classmates promised to keep in touch with each other.",
      chinese: "即使高中畢業後，同學們也答應要互相保持聯絡。",
      grammar_point: "keep in touch with + 人（與某人保持聯繫）"
    },
    vocabulary: [
      { word: "graduate", pos: "v.", chinese: "畢業" },
      { word: "promise", pos: "v.", chinese: "承諾、答應" },
      { word: "each other", pos: "phr.", chinese: "互相" }
    ],
    sentence_pattern: {
      pattern: "S + keep in touch with + O",
      example: "Let's keep in touch!"
    }
  },
  {
    phrase: "get lost",
    type: "動詞片語",
    chinese: "迷路",
    keywords: ["get", "lost"],
    example: {
      english: "We got lost in the forest because we forgot to bring a map and our phones died.",
      chinese: "我們在森林裡迷路了，因為我們忘記帶地圖而且手機沒電了。",
      grammar_point: "get 作連綴動詞，表狀態改變；get lost 意為「變得迷失」"
    },
    vocabulary: [
      { word: "forest", pos: "n.", chinese: "森林" },
      { word: "map", pos: "n.", chinese: "地圖" },
      { word: "die", pos: "v.", chinese: "（電池）沒電、死亡" }
    ],
    sentence_pattern: {
      pattern: "S + get lost in + 地方",
      example: "Follow the signs so you don't get lost."
    }
  },
  {
    phrase: "gain knowledge",
    type: "動詞 + 名詞",
    chinese: "獲得知識",
    keywords: ["gain", "knowledge"],
    example: {
      english: "Reading extensively is one of the most effective ways to gain knowledge about the world.",
      chinese: "廣泛閱讀是獲得關於這個世界知識最有效的方法之一。",
      grammar_point: "knowledge 為不可數名詞，不可加 a 或 s"
    },
    vocabulary: [
      { word: "extensively", pos: "adv.", chinese: "廣泛地" },
      { word: "effective", pos: "adj.", chinese: "有效的" }
    ],
    sentence_pattern: {
      pattern: "V-ing is a way to gain knowledge.",
      example: "Traveling helps you gain knowledge."
    }
  },
  {
    phrase: "solve a problem",
    type: "動詞 + 名詞",
    chinese: "解決問題",
    keywords: ["solve", "problem"],
    example: {
      english: "The team worked together to find a creative way to solve the complex problem.",
      chinese: "團隊合作找到了一個有創意的方法來解決這個複雜的問題。",
      grammar_point: "solve a problem（學測基本必備詞，進階可替換為 address / tackle a problem）"
    },
    vocabulary: [
      { word: "creative", pos: "adj.", chinese: "有創意的" },
      { word: "complex", pos: "adj.", chinese: "複雜的" }
    ],
    sentence_pattern: {
      pattern: "S + try to solve a problem",
      example: "Math helps us learn how to solve problems."
    }
  },
  {
    phrase: "catch someone's eye",
    type: "動詞片語",
    chinese: "吸引某人的目光/注意",
    keywords: ["catch", "eye"],
    example: {
      english: "The beautiful red dress in the shop window immediately caught her eye.",
      chinese: "商店櫥窗裡那件美麗的紅色洋裝立刻吸引了她的目光。",
      grammar_point: "catch one's eye（事物本身很吸睛，常作主動用法）"
    },
    vocabulary: [
      { word: "shop window", pos: "n.", chinese: "商店櫥窗" },
      { word: "immediately", pos: "adv.", chinese: "立刻、馬上" }
    ],
    sentence_pattern: {
      pattern: "N + caught someone's eye.",
      example: "The strange painting caught my eye."
    }
  },
  {
    phrase: "bear in mind",
    type: "動詞片語",
    chinese: "牢記在心",
    keywords: ["bear", "mind"],
    example: {
      english: "You must bear in mind that safety should always be your top priority.",
      chinese: "你必須牢記在心，安全永遠應該是你的首要考量。",
      grammar_point: "bear in mind that + 子句（語氣比 keep in mind 更正式一點）"
    },
    vocabulary: [
      { word: "safety", pos: "n.", chinese: "安全" },
      { word: "top priority", pos: "n.", chinese: "首要之務、最優先事項" }
    ],
    sentence_pattern: {
      pattern: "Bear in mind that + S + V.",
      example: "Bear in mind that the deadline is tomorrow."
    }
  },
  {
    phrase: "cause damage",
    type: "動詞 + 名詞",
    chinese: "造成損害",
    keywords: ["cause", "damage"],
    example: {
      english: "The powerful earthquake caused severe damage to the city's infrastructure.",
      chinese: "強烈的地震對這座城市的基礎設施造成了嚴重的損害。",
      grammar_point: "cause damage to + N（對...造成破壞，damage不可數）"
    },
    vocabulary: [
      { word: "powerful", pos: "adj.", chinese: "強大的" },
      { word: "severe", pos: "adj.", chinese: "嚴重的" },
      { word: "infrastructure", pos: "n.", chinese: "基礎設施" }
    ],
    sentence_pattern: {
      pattern: "S + cause damage to + N",
      example: "The storm caused a lot of damage."
    }
  },
  {
    phrase: "show courage",
    type: "動詞 + 名詞",
    chinese: "展現勇氣",
    keywords: ["show", "courage"],
    example: {
      english: "The young firefighter showed great courage when saving the child from the burning house.",
      chinese: "年輕的消防員在從火場救出孩子時展現了極大的勇氣。",
      grammar_point: "show courage（courage 為抽象名詞，不可數）"
    },
    vocabulary: [
      { word: "firefighter", pos: "n.", chinese: "消防員" },
      { word: "burning", pos: "adj.", chinese: "燃燒的" }
    ],
    sentence_pattern: {
      pattern: "S + show great courage in + V-ing",
      example: "It takes time to show courage."
    }
  },
  {
    phrase: "fall silent",
    type: "動詞 + 形容詞",
    chinese: "陷入沉默、安靜下來",
    keywords: ["fall", "silent"],
    example: {
      english: "The whole room fell silent the moment the strict principal walked in.",
      chinese: "嚴格的校長走進來的那一刻，整個房間都安靜了下來。",
      grammar_point: "fall 作連綴動詞，後接形容詞 silent，表示「陷入...狀態」"
    },
    vocabulary: [
      { word: "whole", pos: "adj.", chinese: "整個的" },
      { word: "strict", pos: "adj.", chinese: "嚴格的" },
      { word: "principal", pos: "n.", chinese: "校長" }
    ],
    sentence_pattern: {
      pattern: "S + fall silent when + S + V",
      example: "The crowd fell silent as he began to speak."
    }
  },
  // ── GO 家族 (連綴動詞與高頻慣用語) ─────────────────────────────────────────
  {
    phrase: "go abroad",
    type: "動詞 + 副詞",
    chinese: "出國",
    keywords: ["go", "abroad"],
    example: {
      english: "Many high school graduates choose to go abroad for further studies to broaden their horizons.",
      chinese: "許多高中畢業生選擇出國深造以拓展視野。",
      grammar_point: "abroad 為副詞，前面絕對不可以加 to！(不能寫 go to abroad)"
    },
    vocabulary: [
      { word: "graduate", pos: "n.", chinese: "畢業生" },
      { word: "further", pos: "adj.", chinese: "進一步的" },
      { word: "horizon", pos: "n.", chinese: "視野" }
    ],
    sentence_pattern: { pattern: "S + decide/choose to go abroad", example: "He went abroad on business." }
  },
  {
    phrase: "go away",
    type: "動詞片語",
    chinese: "離開、外出(度假)、(症狀)消失",
    keywords: ["go", "away"],
    example: {
      english: "If you take this medicine, your headache should go away in a few hours.",
      chinese: "如果你吃這個藥，你的頭痛應該會在幾個小時內消失。",
      grammar_point: "go away 常指問題/症狀「消散」，或指人「外出度假 (go away for the weekend)」"
    },
    vocabulary: [
      { word: "medicine", pos: "n.", chinese: "藥物" },
      { word: "headache", pos: "n.", chinese: "頭痛" }
    ],
    sentence_pattern: { pattern: "S + will go away", example: "The bad smell eventually went away." }
  },
  {
    phrase: "go ahead",
    type: "動詞片語",
    chinese: "繼續進行、開始",
    keywords: ["go", "ahead"],
    example: {
      english: "Despite the bad weather, the organizers decided to go ahead with the outdoor concert.",
      chinese: "儘管天氣惡劣，主辦單位還是決定繼續進行戶外演唱會。",
      grammar_point: "go ahead with + N（不顧阻礙繼續進行某事）"
    },
    vocabulary: [
      { word: "organizer", pos: "n.", chinese: "主辦單位" },
      { word: "outdoor", pos: "adj.", chinese: "戶外的" }
    ],
    sentence_pattern: { pattern: "S + go ahead with + N", example: "Please go ahead and eat without me." }
  },
  {
    phrase: "go astray",
    type: "動詞 + 副詞",
    chinese: "迷路、誤入歧途",
    keywords: ["go", "astray"],
    example: {
      english: "Without proper guidance, teenagers can easily go astray and get involved in crimes.",
      chinese: "沒有適當的引導，青少年很容易誤入歧途並捲入犯罪。",
      grammar_point: "astray 為副詞，go astray 是學測作文形容人「學壞」的絕佳高級片語"
    },
    vocabulary: [
      { word: "guidance", pos: "n.", chinese: "引導、指導" },
      { word: "involved", pos: "adj.", chinese: "捲入的、牽涉的" },
      { word: "crime", pos: "n.", chinese: "犯罪" }
    ],
    sentence_pattern: { pattern: "S + go astray", example: "The letter seems to have gone astray in the mail." }
  },
  {
    phrase: "go missing",
    type: "動詞 + 形容詞",
    chinese: "失蹤",
    keywords: ["go", "missing"],
    example: {
      english: "The little boy went missing in the crowded amusement park, causing his parents to panic.",
      chinese: "小男孩在擁擠的遊樂園裡失蹤了，讓他的父母感到恐慌。",
      grammar_point: "go missing（變成失蹤的狀態，go 作為連綴動詞用）"
    },
    vocabulary: [
      { word: "missing", pos: "adj.", chinese: "失蹤的、不見的" },
      { word: "crowded", pos: "adj.", chinese: "擁擠的" },
      { word: "panic", pos: "v.", chinese: "恐慌" }
    ],
    sentence_pattern: { pattern: "S + go missing", example: "My keys have gone missing again." }
  },
  {
    phrase: "go home",
    type: "動詞 + 副詞",
    chinese: "回家",
    keywords: ["go", "home"],
    example: {
      english: "After a long and exhausting day at work, all I want to do is go home and rest.",
      chinese: "在漫長又令人精疲力竭的工作之後，我只想回家休息。",
      grammar_point: "home 在此為地方副詞，前面絕對不加 to！"
    },
    vocabulary: [
      { word: "exhausting", pos: "adj.", chinese: "令人精疲力竭的" },
      { word: "rest", pos: "v.", chinese: "休息" }
    ],
    sentence_pattern: { pattern: "S + go home", example: "It's getting late; we should go home." }
  },
  {
    phrase: "go straight / left / right",
    type: "動詞 + 副詞",
    chinese: "直走 / 左轉 / 右轉",
    keywords: ["go", "straight", "left", "right"],
    example: {
      english: "Go straight on this road for two blocks, and then go left at the traffic light.",
      chinese: "沿著這條路直走兩個街區，然後在紅綠燈處左轉。",
      grammar_point: "straight, left, right 在此皆為副詞，表示行進方向"
    },
    vocabulary: [
      { word: "straight", pos: "adv.", chinese: "直地" },
      { word: "block", pos: "n.", chinese: "街區" },
      { word: "traffic light", pos: "n.", chinese: "紅綠燈" }
    ],
    sentence_pattern: { pattern: "Go straight / left / right at + N", example: "Go right when you see the bank." }
  },
  {
    phrase: "go north / south / east / west",
    type: "動詞 + 副詞",
    chinese: "往北 / 南 / 東 / 西走",
    keywords: ["go", "north", "south", "east", "west"],
    example: {
      english: "Many birds go south during the winter to find warmer climates and more food.",
      chinese: "許多鳥類在冬天往南飛，以尋找溫暖的氣候和更多食物。",
      grammar_point: "方位詞在動詞 go 後面作為副詞，不需加 to"
    },
    vocabulary: [
      { word: "climate", pos: "n.", chinese: "氣候" },
      { word: "warmer", pos: "adj.", chinese: "較溫暖的" }
    ],
    sentence_pattern: { pattern: "S + go north/south", example: "We are going north for our vacation." }
  },
  {
    phrase: "go shopping / fishing / sailing",
    type: "動詞 + 現在分詞",
    chinese: "去購物 / 釣魚 / 航海",
    keywords: ["go", "shopping", "fishing", "sailing"],
    example: {
      english: "On weekends, my father often goes fishing by the lake to relax and enjoy nature.",
      chinese: "週末時，我父親經常去湖邊釣魚，放鬆身心並享受大自然。",
      grammar_point: "go + V-ing（從事戶外休閒活動）"
    },
    vocabulary: [
      { word: "sailing", pos: "n.", chinese: "航海、帆船運動" },
      { word: "relax", pos: "v.", chinese: "放鬆" },
      { word: "nature", pos: "n.", chinese: "自然" }
    ],
    sentence_pattern: { pattern: "S + go V-ing", example: "Let's go shopping this afternoon." }
  },
  {
    phrase: "go bald",
    type: "動詞 + 形容詞",
    chinese: "變禿頭",
    keywords: ["go", "bald"],
    example: {
      english: "He started to go bald in his late twenties, which made him feel a bit insecure.",
      chinese: "他在快三十歲時開始變禿，這讓他覺得有點沒安全感。",
      grammar_point: "go 當連綴動詞，表示「變成（負面狀態）」"
    },
    vocabulary: [
      { word: "bald", pos: "adj.", chinese: "禿頭的" },
      { word: "insecure", pos: "adj.", chinese: "缺乏安全感的" }
    ],
    sentence_pattern: { pattern: "S + start to go bald", example: "Many men go bald as they age." }
  },
  {
    phrase: "go blind / deaf",
    type: "動詞 + 形容詞",
    chinese: "變瞎 / 變聾",
    keywords: ["go", "blind", "deaf"],
    example: {
      english: "The old dog is gradually going blind and deaf due to its advanced age.",
      chinese: "這隻老狗因為年紀大，正逐漸變瞎和變聾。",
      grammar_point: "go + 身體殘缺的形容詞（失去視覺/聽覺）"
    },
    vocabulary: [
      { word: "gradually", pos: "adv.", chinese: "逐漸地" },
      { word: "advanced", pos: "adj.", chinese: "年紀大的、進階的" }
    ],
    sentence_pattern: { pattern: "S + go blind/deaf", example: "Listening to loud music can make you go deaf." }
  },
  {
    phrase: "go crazy / mad / insane",
    type: "動詞 + 形容詞",
    chinese: "發瘋、抓狂",
    keywords: ["go", "crazy", "mad", "insane"],
    example: {
      english: "The constant noise from the construction site next door is making me go crazy.",
      chinese: "隔壁工地的持續噪音快讓我發瘋了。",
      grammar_point: "go insane 語氣最強，go crazy 最口語"
    },
    vocabulary: [
      { word: "constant", pos: "adj.", chinese: "持續不斷的" },
      { word: "construction site", pos: "n.", chinese: "建築工地" },
      { word: "insane", pos: "adj.", chinese: "瘋狂的、精神失常的" }
    ],
    sentence_pattern: { pattern: "S + make O + go crazy", example: "He went mad with anger." }
  },
  {
    phrase: "go haywire",
    type: "動詞 + 形容詞",
    chinese: "失控、出故障",
    keywords: ["go", "haywire"],
    example: {
      english: "After the power outage, the computer system went haywire and started deleting files randomly.",
      chinese: "停電後，電腦系統出了故障，開始隨機刪除檔案。",
      grammar_point: "go haywire（高階單字，常形容機器、計畫或情勢失去控制）"
    },
    vocabulary: [
      { word: "haywire", pos: "adj.", chinese: "出故障的、失控的" },
      { word: "power outage", pos: "n.", chinese: "停電" },
      { word: "randomly", pos: "adv.", chinese: "隨機地" }
    ],
    sentence_pattern: { pattern: "The machine/system went haywire.", example: "Everything went haywire at the last minute." }
  },
  {
    phrase: "go wild",
    type: "動詞 + 形容詞",
    chinese: "變得狂熱、失控",
    keywords: ["go", "wild"],
    example: {
      english: "The crowd went wild with excitement when the singer finally appeared on stage.",
      chinese: "當歌手終於出現在舞台上時，人群興奮地陷入狂熱。",
      grammar_point: "go wild with N（因...而狂熱，常用於形容粉絲或群眾）"
    },
    vocabulary: [
      { word: "crowd", pos: "n.", chinese: "人群" },
      { word: "excitement", pos: "n.", chinese: "興奮" },
      { word: "appear", pos: "v.", chinese: "出現" }
    ],
    sentence_pattern: { pattern: "The crowd went wild.", example: "Kids tend to go wild at parties." }
  },
  {
    phrase: "go bankrupt",
    type: "動詞 + 形容詞",
    chinese: "破產",
    keywords: ["go", "bankrupt"],
    example: {
      english: "Due to poor management and the economic recession, the company eventually went bankrupt.",
      chinese: "由於管理不善和經濟衰退，這家公司最終破產了。",
      grammar_point: "go bankrupt（商業閱讀測驗極高頻單字）"
    },
    vocabulary: [
      { word: "management", pos: "n.", chinese: "管理" },
      { word: "economic recession", pos: "n.", chinese: "經濟衰退" },
      { word: "bankrupt", pos: "adj.", chinese: "破產的" }
    ],
    sentence_pattern: { pattern: "S + go bankrupt", example: "Many small businesses went bankrupt last year." }
  },
  {
    phrase: "go online",
    type: "動詞 + 副詞",
    chinese: "上網",
    keywords: ["go", "online"],
    example: {
      english: "Nowadays, you can easily go online to check your bank account balance or pay bills.",
      chinese: "現今，你可以輕鬆地上網查詢你的銀行帳戶餘額或支付帳單。",
      grammar_point: "online 為副詞，因此不加 to（不能說 go to online）"
    },
    vocabulary: [
      { word: "nowadays", pos: "adv.", chinese: "現今" },
      { word: "balance", pos: "n.", chinese: "餘額、平衡" },
      { word: "bill", pos: "n.", chinese: "帳單" }
    ],
    sentence_pattern: { pattern: "S + go online to + V", example: "I went online to buy a ticket." }
  },
  // ── GO TO (零冠詞與特定狀態搭配) ──────────────────────────────────────────
  {
    phrase: "go to school / college / university",
    type: "動詞片語",
    chinese: "去上學 / 上大學",
    keywords: ["go", "school", "college", "university"],
    example: {
      english: "After graduating from high school, she decided to go to college to study art.",
      chinese: "高中畢業後，她決定上大學學習藝術。",
      grammar_point: "【學測必考】不加定冠詞 the，表示「去進行該場所的主要活動（求學）」"
    },
    vocabulary: [
      { word: "graduate", pos: "v.", chinese: "畢業" },
      { word: "decide", pos: "v.", chinese: "決定" },
      { word: "art", pos: "n.", chinese: "藝術" }
    ],
    sentence_pattern: { pattern: "S + go to school/college", example: "He goes to school by bus every day." }
  },
  {
    phrase: "go to prison / jail",
    type: "動詞片語",
    chinese: "入獄、坐牢",
    keywords: ["go", "prison", "jail"],
    example: {
      english: "The thief was caught by the police and will go to jail for his crimes.",
      chinese: "那名小偷被警察抓住了，將會因為他的罪行而入獄。",
      grammar_point: "不加 the 表示「以囚犯身分入獄」；若加 the (go to the prison) 則表示去探監或參觀。"
    },
    vocabulary: [
      { word: "thief", pos: "n.", chinese: "小偷" },
      { word: "catch", pos: "v.", chinese: "抓住（被動 was caught）" },
      { word: "crime", pos: "n.", chinese: "罪行" }
    ],
    sentence_pattern: { pattern: "S + go to prison/jail for + N", example: "He went to prison for robbery." }
  },
  {
    phrase: "go to church",
    type: "動詞片語",
    chinese: "去作禮拜",
    keywords: ["go", "church"],
    example: {
      english: "My grandparents are very religious and go to church every Sunday morning.",
      chinese: "我的祖父母非常虔誠，每個星期天早上都會去作禮拜。",
      grammar_point: "不加 the，表示「去參加宗教儀式/作禮拜」"
    },
    vocabulary: [
      { word: "religious", pos: "adj.", chinese: "虔誠的、宗教的" },
      { word: "Sunday", pos: "n.", chinese: "星期日" }
    ],
    sentence_pattern: { pattern: "S + go to church", example: "They go to church to pray." }
  },
  {
    phrase: "go to work",
    type: "動詞片語",
    chinese: "去上班",
    keywords: ["go", "work"],
    example: {
      english: "He wakes up at 6 a.m. every day and takes the MRT to go to work.",
      chinese: "他每天早上六點起床，然後搭捷運去上班。",
      grammar_point: "work 在此為不可數名詞（工作/上班地點），前面絕對不可加 the 或 a"
    },
    vocabulary: [
      { word: "wake up", pos: "phr. v.", chinese: "起床、醒來" },
      { word: "MRT", pos: "n.", chinese: "捷運 (Mass Rapid Transit)" }
    ],
    sentence_pattern: { pattern: "S + go to work", example: "I have to go to work early tomorrow." }
  },
  {
    phrase: "go to bed / sleep",
    type: "動詞片語",
    chinese: "上床睡覺 / 入睡",
    keywords: ["go", "bed", "sleep"],
    example: {
      english: "You look absolutely exhausted; you should take a hot shower and go to bed early tonight.",
      chinese: "你看起來絕對是累壞了；你今晚應該洗個熱水澡並早點上床睡覺。",
      grammar_point: "go to bed 指「上床（準備睡覺的動作）」；go to sleep 則強調「進入睡眠狀態」"
    },
    vocabulary: [
      { word: "absolutely", pos: "adv.", chinese: "絕對地、完全地" },
      { word: "exhausted", pos: "adj.", chinese: "筋疲力盡的" },
      { word: "shower", pos: "n.", chinese: "淋浴" }
    ],
    sentence_pattern: { pattern: "S + go to bed/sleep", example: "I went to sleep right after the movie." }
  },
  {
    phrase: "go to extremes",
    type: "動詞片語",
    chinese: "走極端、採取極端手段",
    keywords: ["go", "extremes"],
    example: {
      english: "To lose weight quickly, some people go to extremes by starving themselves, which is very unhealthy.",
      chinese: "為了快速減肥，有些人會採取挨餓的極端手段，這是非常不健康的。",
      grammar_point: "extremes 在此恆用複數形"
    },
    vocabulary: [
      { word: "lose weight", pos: "phr.", chinese: "減肥" },
      { word: "starve", pos: "v.", chinese: "挨餓" },
      { word: "unhealthy", pos: "adj.", chinese: "不健康的" }
    ],
    sentence_pattern: { pattern: "S + go to extremes to + V", example: "He goes to extremes to prove his point." }
  },
  {
    phrase: "go to waste",
    type: "動詞片語",
    chinese: "被浪費掉、付諸東流",
    keywords: ["go", "waste"],
    example: {
      english: "We must eat all the leftovers in the fridge so that good food doesn't go to waste.",
      chinese: "我們必須把冰箱裡的剩菜吃完，這樣好的食物才不會被浪費掉。",
      grammar_point: "通常以「事物」當主詞，表示該事物變成無用或被浪費"
    },
    vocabulary: [
      { word: "leftovers", pos: "n.", chinese: "剩菜、剩飯" },
      { word: "fridge", pos: "n.", chinese: "冰箱" },
      { word: "so that", pos: "conj.", chinese: "以便於、使得" }
    ],
    sentence_pattern: { pattern: "N + go to waste", example: "All my hard work went to waste." }
  },
  {
    phrase: "go to hell",
    type: "動詞片語",
    chinese: "下地獄、徹底完蛋(俚語)",
    keywords: ["go", "hell"],
    example: {
      english: "Since the irresponsible new manager took over, the whole department has gone to hell.",
      chinese: "自從那位不負責任的新經理接手後，整個部門就徹底完蛋了。",
      grammar_point: "【注意】這是一個強烈的口語表達，指情況變得極度糟糕；亦可用來憤怒地咒罵他人。學測正式寫作時請避免使用此字當作咒罵。"
    },
    vocabulary: [
      { word: "irresponsible", pos: "adj.", chinese: "不負責任的" },
      { word: "take over", pos: "phr. v.", chinese: "接管" },
      { word: "department", pos: "n.", chinese: "部門" }
    ],
    sentence_pattern: { pattern: "Things have gone to hell.", example: "The project went to hell after he left." }
  },
  // ── GO ON + 活動/狀態 ─────────────────────────────────────────────────────
  {
    phrase: "go on a trip / a journey / a tour",
    type: "動詞片語",
    chinese: "去旅行 / 踏上旅程 / 去觀光",
    keywords: ["go", "on", "trip", "journey", "tour"],
    example: {
      english: "Our family plans to go on a trip to Europe next summer to experience different cultures.",
      chinese: "我們家計畫明年夏天去歐洲旅行，體驗不同的文化。",
      grammar_point: "go on a trip to + 地方（去某地旅行）"
    },
    vocabulary: [
      { word: "plan", pos: "v.", chinese: "計畫" },
      { word: "experience", pos: "v.", chinese: "體驗" },
      { word: "culture", pos: "n.", chinese: "文化" }
    ],
    sentence_pattern: { pattern: "S + go on a trip to + 地方", example: "He went on a business trip." }
  },
  {
    phrase: "go on a holiday / a vacation",
    type: "動詞片語",
    chinese: "去度假",
    keywords: ["go", "on", "holiday", "vacation"],
    example: {
      english: "They decided to go on a vacation to Hawaii to relax and get away from work.",
      chinese: "他們決定去夏威夷度假，放鬆身心並遠離工作。",
      grammar_point: "holiday 為英式用法，vacation 為美式用法"
    },
    vocabulary: [
      { word: "decide", pos: "v.", chinese: "決定" },
      { word: "relax", pos: "v.", chinese: "放鬆" },
      { word: "get away", pos: "phr. v.", chinese: "遠離、逃離" }
    ],
    sentence_pattern: { pattern: "S + go on a vacation", example: "We are going on a holiday next week." }
  },
  {
    phrase: "go on a cruise",
    type: "動詞片語",
    chinese: "搭乘郵輪度假",
    keywords: ["go", "on", "cruise"],
    example: {
      english: "For their 20th wedding anniversary, the couple went on a luxury cruise across the Mediterranean.",
      chinese: "為了慶祝結婚二十週年，這對夫婦搭乘豪華郵輪橫跨地中海。",
      grammar_point: "cruise 指的是「搭船遊覽、郵輪假期」"
    },
    vocabulary: [
      { word: "anniversary", pos: "n.", chinese: "週年紀念日" },
      { word: "luxury", pos: "adj.", chinese: "豪華的" },
      { word: "Mediterranean", pos: "n.", chinese: "地中海" }
    ],
    sentence_pattern: { pattern: "S + go on a cruise", example: "My grandparents love going on cruises." }
  },
  {
    phrase: "go on a safari",
    type: "動詞片語",
    chinese: "參加野生動物探險",
    keywords: ["go", "on", "safari"],
    example: {
      english: "It has always been my dream to go on a safari in Africa to see lions and elephants in the wild.",
      chinese: "去非洲參加野生動物探險，在野外看獅子和大象，一直都是我的夢想。",
      grammar_point: "safari 專指在東非或南非觀賞野生動物的旅行"
    },
    vocabulary: [
      { word: "dream", pos: "n.", chinese: "夢想" },
      { word: "lion", pos: "n.", chinese: "獅子" },
      { word: "in the wild", pos: "phr.", chinese: "在野外" }
    ],
    sentence_pattern: { pattern: "S + go on a safari", example: "They went on a safari in Kenya." }
  },
  {
    phrase: "go on an adventure",
    type: "動詞片語",
    chinese: "去冒險",
    keywords: ["go", "on", "adventure"],
    example: {
      english: "The two best friends packed their bags and went on an adventure around the world.",
      chinese: "這兩個最好的朋友收拾行囊，踏上了環遊世界的冒險之旅。",
      grammar_point: "adventure 開頭為母音，冠詞必須用 an"
    },
    vocabulary: [
      { word: "pack", pos: "v.", chinese: "打包、收拾" },
      { word: "best friend", pos: "n.", chinese: "最好的朋友" },
      { word: "around the world", pos: "phr.", chinese: "環遊世界" }
    ],
    sentence_pattern: { pattern: "S + go on an adventure", example: "Are you ready to go on an adventure?" }
  },
  {
    phrase: "go on a picnic",
    type: "動詞片語",
    chinese: "去野餐",
    keywords: ["go", "on", "picnic"],
    example: {
      english: "Since the weather is so lovely today, let's go on a picnic in the park.",
      chinese: "既然今天天氣這麼好，我們去公園野餐吧。",
      grammar_point: "go on a picnic（不可寫成 go to a picnic）"
    },
    vocabulary: [
      { word: "since", pos: "conj.", chinese: "既然、因為" },
      { word: "lovely", pos: "adj.", chinese: "美好的、可愛的" },
      { word: "park", pos: "n.", chinese: "公園" }
    ],
    sentence_pattern: { pattern: "Let's go on a picnic.", example: "We went on a picnic by the river." }
  },
  {
    phrase: "go on a date",
    type: "動詞片語",
    chinese: "去約會",
    keywords: ["go", "on", "date"],
    example: {
      english: "He was very nervous because he was going on a blind date with someone he met online.",
      chinese: "他非常緊張，因為他即將和在網路上認識的人去相親(盲目約會)。",
      grammar_point: "go on a date with + 人（和某人約會）"
    },
    vocabulary: [
      { word: "nervous", pos: "adj.", chinese: "緊張的" },
      { word: "blind date", pos: "n.", chinese: "相親、盲目約會" },
      { word: "online", pos: "adv.", chinese: "在網路上" }
    ],
    sentence_pattern: { pattern: "S + go on a date with + O", example: "They went on their first date yesterday." }
  },
  {
    phrase: "go on a diet",
    type: "動詞片語",
    chinese: "節食",
    keywords: ["go", "on", "diet"],
    example: {
      english: "The doctor strongly advised him to go on a strict diet to improve his health.",
      chinese: "醫生強烈建議他進行嚴格的節食以改善健康。",
      grammar_point: "go on a diet（開始節食控制體重，學測極高頻片語！）"
    },
    vocabulary: [
      { word: "advise", pos: "v.", chinese: "建議" },
      { word: "strict", pos: "adj.", chinese: "嚴格的" },
      { word: "improve", pos: "v.", chinese: "改善" }
    ],
    sentence_pattern: { pattern: "S + need to go on a diet", example: "I am going on a diet before the wedding." }
  },
  {
    phrase: "go on a shopping spree",
    type: "動詞片語",
    chinese: "瘋狂購物、大肆採購",
    keywords: ["go", "on", "shopping", "spree"],
    example: {
      english: "After getting her first paycheck, she went on a shopping spree and bought a lot of clothes.",
      chinese: "拿到第一份薪水後，她瘋狂購物，買了許多衣服。",
      grammar_point: "a shopping spree 指「不受控制地狂買」"
    },
    vocabulary: [
      { word: "paycheck", pos: "n.", chinese: "薪水、工資" },
      { word: "bought", pos: "v.", chinese: "買 (buy的過去式)" },
      { word: "clothes", pos: "n.", chinese: "衣服" }
    ],
    sentence_pattern: { pattern: "S + go on a shopping spree", example: "He went on a spending spree." }
  },
  {
    phrase: "go on stage",
    type: "動詞片語",
    chinese: "上台(表演)",
    keywords: ["go", "on", "stage"],
    example: {
      english: "The young actor took a deep breath before he went on stage to perform.",
      chinese: "這位年輕演員在上台表演前深吸了一口氣。",
      grammar_point: "【文法重點】stage 前面不加 a 也不加 the，表示「登台演出」的狀態"
    },
    vocabulary: [
      { word: "actor", pos: "n.", chinese: "演員" },
      { word: "deep breath", pos: "n.", chinese: "深呼吸" },
      { word: "perform", pos: "v.", chinese: "表演" }
    ],
    sentence_pattern: { pattern: "S + go on stage", example: "She felt nervous before going on stage." }
  },
  {
    phrase: "go on strike",
    type: "動詞片語",
    chinese: "罷工",
    keywords: ["go", "on", "strike"],
    example: {
      english: "The factory workers decided to go on strike to demand higher wages and better working conditions.",
      chinese: "工廠工人們決定罷工，以要求更高的工資和更好的工作條件。",
      grammar_point: "【文法重點】strike 前面不加 a，表示進入罷工狀態"
    },
    vocabulary: [
      { word: "factory worker", pos: "n.", chinese: "工廠工人" },
      { word: "demand", pos: "v.", chinese: "要求" },
      { word: "wage", pos: "n.", chinese: "工資" }
    ],
    sentence_pattern: { pattern: "S + go on strike for + N", example: "The bus drivers went on strike yesterday." }
  },
  {
    phrase: "go on a treatment",
    type: "動詞片語",
    chinese: "接受療程",
    keywords: ["go", "on", "treatment"],
    example: {
      english: "The patient will need to go on a specific medical treatment to completely cure the rare disease.",
      chinese: "這名病患將需要接受特定的醫療療程，以完全治癒這種罕見疾病。",
      grammar_point: "go on a treatment / go on medication（開始用藥/接受療程）"
    },
    vocabulary: [
      { word: "patient", pos: "n.", chinese: "病患" },
      { word: "specific", pos: "adj.", chinese: "特定的" },
      { word: "cure", pos: "v.", chinese: "治癒" }
    ],
    sentence_pattern: { pattern: "S + go on a treatment for + N", example: "He went on a new treatment plan." }
  },
  // ── GREAT + Noun (高階形容詞與抽象名詞搭配) ──────────────────────────────
  {
    phrase: "great accomplishment",
    type: "形容詞 + 名詞",
    chinese: "偉大的成就",
    keywords: ["great", "accomplishment"],
    example: {
      english: "Winning the international championship is a great accomplishment for the young team.",
      chinese: "贏得國際錦標賽對這支年輕的隊伍來說是一項偉大的成就。",
      grammar_point: "accomplishment 為可數名詞，可替換為 notable achievement"
    },
    vocabulary: [
      { word: "international", pos: "adj.", chinese: "國際的" },
      { word: "championship", pos: "n.", chinese: "錦標賽、冠軍頭銜" },
      { word: "accomplishment", pos: "n.", chinese: "成就" }
    ],
    sentence_pattern: { pattern: "N + is a great accomplishment", example: "Graduating with honors is a great accomplishment." }
  },
  {
    phrase: "great admiration",
    type: "形容詞 + 名詞",
    chinese: "極大的欽佩",
    keywords: ["great", "admiration"],
    example: {
      english: "I have great admiration for people who dedicate their lives to helping others.",
      chinese: "我對那些畢生致力於幫助他人的人抱有極大的欽佩。",
      grammar_point: "have great admiration for + N（對...感到極度欽佩）"
    },
    vocabulary: [
      { word: "admiration", pos: "n.", chinese: "欽佩、讚賞" },
      { word: "dedicate", pos: "v.", chinese: "奉獻、致力於" }
    ],
    sentence_pattern: { pattern: "S + have great admiration for + N", example: "He looked at her with great admiration." }
  },
  {
    phrase: "a great amount / deal of",
    type: "形容詞 + 名詞 + 介系詞",
    chinese: "大量的...",
    keywords: ["great", "amount", "deal"],
    example: {
      english: "The project requires a great amount of time and resources to complete.",
      chinese: "這項專案需要大量的時間和資源才能完成。",
      grammar_point: "a great amount of / a great deal of 後面必須接「不可數名詞」"
    },
    vocabulary: [
      { word: "require", pos: "v.", chinese: "需要" },
      { word: "resource", pos: "n.", chinese: "資源" },
      { word: "complete", pos: "v.", chinese: "完成" }
    ],
    sentence_pattern: { pattern: "S + V + a great deal of + 不可數名詞", example: "He spent a great deal of money on the house." }
  },
  {
    phrase: "great bargain",
    type: "形容詞 + 名詞",
    chinese: "很划算的交易、大便宜",
    keywords: ["great", "bargain"],
    example: {
      english: "I bought this designer coat at a 50% discount; it was a great bargain.",
      chinese: "我以五折買下這件設計師款大衣；這真是太划算了。",
      grammar_point: "a great bargain（指物超所值、買到賺到）"
    },
    vocabulary: [
      { word: "designer", pos: "n.", chinese: "設計師" },
      { word: "discount", pos: "n.", chinese: "折扣" },
      { word: "bargain", pos: "n.", chinese: "便宜貨、划算的交易" }
    ],
    sentence_pattern: { pattern: "N + is a great bargain", example: "These shoes are a great bargain." }
  },
  {
    phrase: "great danger",
    type: "形容詞 + 名詞",
    chinese: "極大的危險",
    keywords: ["great", "danger"],
    example: {
      english: "The lost climbers were in great danger of freezing to death in the snowstorm.",
      chinese: "迷路的登山者在暴風雪中處於凍死的極大危險之中。",
      grammar_point: "be in great danger of + V-ing/N（處於...的極大危險中）"
    },
    vocabulary: [
      { word: "climber", pos: "n.", chinese: "登山者" },
      { word: "freeze", pos: "v.", chinese: "結冰、凍僵" },
      { word: "snowstorm", pos: "n.", chinese: "暴風雪" }
    ],
    sentence_pattern: { pattern: "S + be in great danger", example: "The rare animals are in great danger." }
  },
  {
    phrase: "in great detail",
    type: "介系詞 + 形容詞 + 名詞",
    chinese: "極詳細地",
    keywords: ["great", "detail"],
    example: {
      english: "The professor explained the complex theory in great detail so everyone could understand.",
      chinese: "教授極詳細地解釋了這個複雜的理論，以便每個人都能理解。",
      grammar_point: "in great detail 作為副詞片語，修飾動詞（如 explain, describe）"
    },
    vocabulary: [
      { word: "professor", pos: "n.", chinese: "教授" },
      { word: "complex", pos: "adj.", chinese: "複雜的" },
      { word: "theory", pos: "n.", chinese: "理論" }
    ],
    sentence_pattern: { pattern: "S + describe/explain O + in great detail", example: "She planned the event in great detail." }
  },
  {
    phrase: "great difficulty",
    type: "形容詞 + 名詞",
    chinese: "極大的困難",
    keywords: ["great", "difficulty"],
    example: {
      english: "The foreign student had great difficulty understanding the local slang at first.",
      chinese: "這位外籍學生起初在理解當地俚語方面有極大的困難。",
      grammar_point: "have great difficulty + V-ing（做某事有極大困難，必考動名詞）"
    },
    vocabulary: [
      { word: "foreign", pos: "adj.", chinese: "外國的" },
      { word: "difficulty", pos: "n.", chinese: "困難" },
      { word: "slang", pos: "n.", chinese: "俚語" }
    ],
    sentence_pattern: { pattern: "S + have great difficulty + V-ing", example: "He walked with great difficulty." }
  },
  {
    phrase: "great embarrassment",
    type: "形容詞 + 名詞",
    chinese: "極大的尷尬",
    keywords: ["great", "embarrassment"],
    example: {
      english: "To his great embarrassment, he forgot his lines during the school play.",
      chinese: "令他極度尷尬的是，他在學校話劇表演時忘了台詞。",
      grammar_point: "To one's great embarrassment, S + V（令某人極度尷尬的是...）"
    },
    vocabulary: [
      { word: "embarrassment", pos: "n.", chinese: "尷尬、難堪" },
      { word: "lines", pos: "n.", chinese: "台詞（複數）" }
    ],
    sentence_pattern: { pattern: "To one's great embarrassment, S + V", example: "She realized her mistake with great embarrassment." }
  },
  {
    phrase: "great excitement",
    type: "形容詞 + 名詞",
    chinese: "極大的興奮",
    keywords: ["great", "excitement"],
    example: {
      english: "The announcement of the free concert caused great excitement among the fans.",
      chinese: "免費演唱會的宣布在粉絲中引起了極大的興奮。",
      grammar_point: "cause/generate great excitement（引起極大興奮）"
    },
    vocabulary: [
      { word: "announcement", pos: "n.", chinese: "宣布、公告" },
      { word: "excitement", pos: "n.", chinese: "興奮" }
    ],
    sentence_pattern: { pattern: "S + cause great excitement", example: "He opened the gift with great excitement." }
  },
  {
    phrase: "great fun",
    type: "形容詞 + 名詞",
    chinese: "非常有趣",
    keywords: ["great", "fun"],
    example: {
      english: "We went camping in the mountains last weekend, and it was great fun.",
      chinese: "我們上週末去山裡露營，那非常有趣。",
      grammar_point: "fun 是不可數名詞，前面絕對不可以加 a！"
    },
    vocabulary: [
      { word: "camping", pos: "n.", chinese: "露營" }
    ],
    sentence_pattern: { pattern: "N/V-ing is great fun", example: "Playing board games with friends is great fun." }
  },
  {
    phrase: "great happiness",
    type: "形容詞 + 名詞",
    chinese: "極大的幸福/快樂",
    keywords: ["great", "happiness"],
    example: {
      english: "Seeing her children grow up healthy and strong brings her great happiness.",
      chinese: "看著她的孩子們健康強壯地長大，帶給她極大的快樂。",
      grammar_point: "bring 人 great happiness（為某人帶來極大快樂）"
    },
    vocabulary: [
      { word: "healthy", pos: "adj.", chinese: "健康的" },
      { word: "happiness", pos: "n.", chinese: "快樂、幸福" }
    ],
    sentence_pattern: { pattern: "S + bring O + great happiness", example: "The news filled them with great happiness." }
  },
  {
    phrase: "great joy",
    type: "形容詞 + 名詞",
    chinese: "極大的喜悅",
    keywords: ["great", "joy"],
    example: {
      english: "The old man wept with great joy when he finally reunited with his family.",
      chinese: "當這位老人終於與家人團聚時，他喜極而泣。",
      grammar_point: "with great joy（帶著極大的喜悅）"
    },
    vocabulary: [
      { word: "wept", pos: "v.", chinese: "哭泣 (weep 的過去式)" },
      { word: "reunite", pos: "v.", chinese: "重聚、團聚" }
    ],
    sentence_pattern: { pattern: "S + V + with great joy", example: "It is a great joy to see you again." }
  },
  {
    phrase: "great idea",
    type: "形容詞 + 名詞",
    chinese: "好主意",
    keywords: ["great", "idea"],
    example: {
      english: "Going to the beach on such a sunny day is a great idea.",
      chinese: "在這麼晴朗的日子去海灘是個好主意。",
      grammar_point: "It is a great idea to + V（做...是個好主意）"
    },
    vocabulary: [
      { word: "sunny", pos: "adj.", chinese: "晴朗的" }
    ],
    sentence_pattern: { pattern: "That sounds like a great idea.", example: "He came up with a great idea." }
  },
  {
    phrase: "of great importance",
    type: "介系詞 + 形容詞 + 名詞",
    chinese: "極其重要",
    keywords: ["great", "importance"],
    example: {
      english: "Learning to communicate effectively is of great importance in today's society.",
      chinese: "在現今社會中，學習有效溝通是極其重要的。",
      grammar_point: "be of great importance = be very important（作文必備高級替換句型！）"
    },
    vocabulary: [
      { word: "communicate", pos: "v.", chinese: "溝通" },
      { word: "effectively", pos: "adv.", chinese: "有效地" },
      { word: "importance", pos: "n.", chinese: "重要性" }
    ],
    sentence_pattern: { pattern: "N + is of great importance", example: "This document is of great importance." }
  },
  {
    phrase: "great news",
    type: "形容詞 + 名詞",
    chinese: "天大的好消息",
    keywords: ["great", "news"],
    example: {
      english: "You got accepted into your dream university? That is absolutely great news!",
      chinese: "你被你夢想的大學錄取了？這絕對是個天大的好消息！",
      grammar_point: "news 為不可數名詞，不可加 a！"
    },
    vocabulary: [
      { word: "accept", pos: "v.", chinese: "接受、錄取" },
      { word: "absolutely", pos: "adv.", chinese: "絕對地" }
    ],
    sentence_pattern: { pattern: "That is great news!", example: "I have some great news for you." }
  },
  {
    phrase: "great opportunity",
    type: "形容詞 + 名詞",
    chinese: "絕佳的機會",
    keywords: ["great", "opportunity"],
    example: {
      english: "Studying abroad is a great opportunity to explore different cultures and meet new people.",
      chinese: "出國留學是探索不同文化和結識新朋友的絕佳機會。",
      grammar_point: "a great opportunity to + V（做某事的絕佳機會）"
    },
    vocabulary: [
      { word: "abroad", pos: "adv.", chinese: "在國外" },
      { word: "explore", pos: "v.", chinese: "探索" },
      { word: "opportunity", pos: "n.", chinese: "機會" }
    ],
    sentence_pattern: { pattern: "This is a great opportunity for + N", example: "Don't miss this great opportunity." }
  },
  {
    phrase: "great potential",
    type: "形容詞 + 名詞",
    chinese: "極大的潛力",
    keywords: ["great", "potential"],
    example: {
      english: "The young athlete shows great potential to become a world champion in the future.",
      chinese: "這位年輕的運動員展現出未來成為世界冠軍的極大潛力。",
      grammar_point: "show / have great potential（展現/擁有極大潛能）"
    },
    vocabulary: [
      { word: "athlete", pos: "n.", chinese: "運動員" },
      { word: "potential", pos: "n.", chinese: "潛力" },
      { word: "champion", pos: "n.", chinese: "冠軍" }
    ],
    sentence_pattern: { pattern: "S + show great potential in + N", example: "This market has great potential for growth." }
  },
  {
    phrase: "great skill",
    type: "形容詞 + 名詞",
    chinese: "高超的技巧",
    keywords: ["great", "skill"],
    example: {
      english: "The experienced surgeon performed the complicated operation with great skill.",
      chinese: "經驗豐富的外科醫生以高超的技巧進行了這場複雜的手術。",
      grammar_point: "with great skill（技巧高超地，作副詞用）"
    },
    vocabulary: [
      { word: "surgeon", pos: "n.", chinese: "外科醫生" },
      { word: "complicated", pos: "adj.", chinese: "複雜的" },
      { word: "operation", pos: "n.", chinese: "手術、運作" }
    ],
    sentence_pattern: { pattern: "S + do something with great skill", example: "He plays the piano with great skill." }
  },
  {
    phrase: "great strength",
    type: "形容詞 + 名詞",
    chinese: "巨大的力量、極大的優勢",
    keywords: ["great", "strength"],
    example: {
      english: "It takes great strength and courage to overcome such a terrible tragedy.",
      chinese: "克服如此可怕的悲劇需要巨大的力量和勇氣。",
      grammar_point: "It takes great strength to + V（做某事需要巨大的力量/堅強）"
    },
    vocabulary: [
      { word: "courage", pos: "n.", chinese: "勇氣" },
      { word: "overcome", pos: "v.", chinese: "克服" },
      { word: "tragedy", pos: "n.", chinese: "悲劇" }
    ],
    sentence_pattern: { pattern: "It takes great strength to + V", example: "Her ability to stay calm is a great strength." }
  },
  {
    phrase: "great power",
    type: "形容詞 + 名詞",
    chinese: "巨大的權力/力量",
    keywords: ["great", "power"],
    example: {
      english: "As the famous saying goes, with great power comes great responsibility.",
      chinese: "正如名言所說，能力越大，責任越大。",
      grammar_point: "with great power comes great responsibility（倒裝句型，主詞為 responsibility）"
    },
    vocabulary: [
      { word: "saying", pos: "n.", chinese: "諺語、格言" },
      { word: "power", pos: "n.", chinese: "權力、力量" },
      { word: "responsibility", pos: "n.", chinese: "責任" }
    ],
    sentence_pattern: { pattern: "S + have great power over + N", example: "The media wields great power." }
  },
  {
    phrase: "great success",
    type: "形容詞 + 名詞",
    chinese: "巨大的成功",
    keywords: ["great", "success"],
    example: {
      english: "The school charity fair was a great success, raising thousands of dollars for the orphanage.",
      chinese: "學校的慈善市集取得了巨大的成功，為孤兒院籌集了數千美元。",
      grammar_point: "success 在此作具體名詞「成功的人/事物」，可加 a"
    },
    vocabulary: [
      { word: "charity", pos: "n.", chinese: "慈善" },
      { word: "fair", pos: "n.", chinese: "市集、展覽會" },
      { word: "orphanage", pos: "n.", chinese: "孤兒院" }
    ],
    sentence_pattern: { pattern: "N + was a great success", example: "His first novel was a great success." }
  },
  {
    phrase: "great satisfaction",
    type: "形容詞 + 名詞",
    chinese: "極大的滿足",
    keywords: ["great", "satisfaction"],
    example: {
      english: "She gets great satisfaction from helping stray animals find loving homes.",
      chinese: "她從幫助流浪動物找到充滿愛的家中獲得極大的滿足感。",
      grammar_point: "get/derive great satisfaction from + N/V-ing（從...獲得極大的滿足）"
    },
    vocabulary: [
      { word: "satisfaction", pos: "n.", chinese: "滿足(感)" },
      { word: "stray", pos: "adj.", chinese: "流浪的" }
    ],
    sentence_pattern: { pattern: "S + get great satisfaction from + V-ing", example: "He looked at his work with great satisfaction." }
  },
  {
    phrase: "great understanding",
    type: "形容詞 + 名詞",
    chinese: "深刻的理解、極大的體諒",
    keywords: ["great", "understanding"],
    example: {
      english: "The principal showed great understanding when the student explained his family problems.",
      chinese: "當學生解釋他的家庭問題時，校長展現了極大的體諒。",
      grammar_point: "show great understanding（展現出極大的體諒/理解）"
    },
    vocabulary: [
      { word: "principal", pos: "n.", chinese: "校長" },
      { word: "understanding", pos: "n.", chinese: "理解、體諒" }
    ],
    sentence_pattern: { pattern: "S + have a great understanding of + N", example: "She has a great understanding of music." }
  },
  {
    phrase: "great wealth",
    type: "形容詞 + 名詞",
    chinese: "巨大的財富",
    keywords: ["great", "wealth"],
    example: {
      english: "The businessman accumulated great wealth through his successful investments in real estate.",
      chinese: "這位商人透過在房地產上的成功投資累積了巨大的財富。",
      grammar_point: "accumulate great wealth（累積巨大財富）"
    },
    vocabulary: [
      { word: "accumulate", pos: "v.", chinese: "累積" },
      { word: "investment", pos: "n.", chinese: "投資" },
      { word: "real estate", pos: "n.", chinese: "房地產" }
    ],
    sentence_pattern: { pattern: "S + acquire/accumulate great wealth", example: "He inherited great wealth from his family." }
  },
  {
    phrase: "great wisdom",
    type: "形容詞 + 名詞",
    chinese: "大智慧",
    keywords: ["great", "wisdom"],
    example: {
      english: "The village elder shared words of great wisdom with the younger generation.",
      chinese: "村裡的長者與年輕一代分享了充滿大智慧的話語。",
      grammar_point: "words of great wisdom（充滿智慧的言語）"
    },
    vocabulary: [
      { word: "elder", pos: "n.", chinese: "長者" },
      { word: "wisdom", pos: "n.", chinese: "智慧" },
      { word: "generation", pos: "n.", chinese: "世代" }
    ],
    sentence_pattern: { pattern: "N + requires great wisdom", example: "She leads the team with great wisdom." }
  },
  // ── STRONG + Noun (道地形容詞搭配，根除台式英文) ───────────────────────────
  {
    phrase: "strong argument",
    type: "形容詞 + 名詞",
    chinese: "有力的論點",
    keywords: ["strong", "argument"],
    example: {
      english: "The lawyer presented a strong argument to prove his client's innocence.",
      chinese: "律師提出了有力的論點來證明他客戶的清白。",
      grammar_point: "present a strong argument（提出有力的論點/證據）"
    },
    vocabulary: [
      { word: "lawyer", pos: "n.", chinese: "律師" },
      { word: "present", pos: "v.", chinese: "提出、呈現" },
      { word: "innocence", pos: "n.", chinese: "清白、無罪" }
    ],
    sentence_pattern: { pattern: "S + present/make a strong argument", example: "There is a strong argument for raising taxes." }
  },
  {
    phrase: "strong belief / conviction",
    type: "形容詞 + 名詞",
    chinese: "堅定的信念",
    keywords: ["strong", "belief", "conviction"],
    example: {
      english: "She has a strong belief that hard work will eventually pay off.",
      chinese: "她有著堅定的信念，認為努力工作最終會得到回報。",
      grammar_point: "a strong belief that + 子句（堅信...，同位語用法）"
    },
    vocabulary: [
      { word: "belief", pos: "n.", chinese: "信念、信仰" },
      { word: "conviction", pos: "n.", chinese: "堅定的信念、定罪" },
      { word: "pay off", pos: "phr. v.", chinese: "得到回報" }
    ],
    sentence_pattern: { pattern: "S + have a strong belief that...", example: "He holds a strong conviction about human rights." }
  },
  {
    phrase: "strong case",
    type: "形容詞 + 名詞",
    chinese: "充分的理由、有力的立論",
    keywords: ["strong", "case"],
    example: {
      english: "There is a strong case for banning smartphones in the classroom to improve focus.",
      chinese: "為了提升注意力，在教室內禁止使用智慧型手機是有充分理由的。",
      grammar_point: "a strong case for + N/V-ing（做...的充分理由/有力論據）"
    },
    vocabulary: [
      { word: "ban", pos: "v.", chinese: "禁止" },
      { word: "focus", pos: "n.", chinese: "專注力" }
    ],
    sentence_pattern: { pattern: "There is a strong case for/against + N", example: "He makes a strong case for the new policy." }
  },
  {
    phrase: "strong chance",
    type: "形容詞 + 名詞",
    chinese: "極大的可能",
    keywords: ["strong", "chance"],
    example: {
      english: "If we leave now, there is a strong chance that we can catch the last train.",
      chinese: "如果我們現在離開，我們有極大的可能可以趕上末班車。",
      grammar_point: "【台式英文殺手】機率很大必須用 a strong / high chance，絕不能用 a big chance！"
    },
    vocabulary: [
      { word: "catch", pos: "v.", chinese: "趕上（車、船等）" },
      { word: "last train", pos: "n.", chinese: "末班車" }
    ],
    sentence_pattern: { pattern: "There is a strong chance that + S + V", example: "There's a strong chance of rain tomorrow." }
  },
  {
    phrase: "strong coffee / tea",
    type: "形容詞 + 名詞",
    chinese: "濃咖啡 / 濃茶",
    keywords: ["strong", "coffee", "tea"],
    example: {
      english: "I need a cup of strong coffee to keep myself awake during the morning meeting.",
      chinese: "我需要一杯濃咖啡，讓自己在早會時保持清醒。",
      grammar_point: "【台式英文殺手】茶/咖啡很「濃」，英文不用 thick 或 heavy，而是用 strong！"
    },
    vocabulary: [
      { word: "awake", pos: "adj.", chinese: "清醒的" },
      { word: "during", pos: "prep.", chinese: "在...期間" }
    ],
    sentence_pattern: { pattern: "S + drink strong coffee/tea", example: "He prefers strong tea in the afternoon." }
  },
  {
    phrase: "strong commitment",
    type: "形容詞 + 名詞",
    chinese: "堅定的承諾、強烈的使命感",
    keywords: ["strong", "commitment"],
    example: {
      english: "The new principal has shown a strong commitment to improving student welfare.",
      chinese: "新校長展現了改善學生福利的堅定承諾。",
      grammar_point: "a strong commitment to + N / V-ing（對...的堅定投入，to為介系詞）"
    },
    vocabulary: [
      { word: "principal", pos: "n.", chinese: "校長" },
      { word: "commitment", pos: "n.", chinese: "承諾、投入" },
      { word: "welfare", pos: "n.", chinese: "福利" }
    ],
    sentence_pattern: { pattern: "S + show a strong commitment to + N", example: "The company made a strong commitment to safety." }
  },
  {
    phrase: "strong connection",
    type: "形容詞 + 名詞",
    chinese: "強烈的關聯、緊密的聯繫",
    keywords: ["strong", "connection"],
    example: {
      english: "Studies have shown a strong connection between lack of sleep and depression.",
      chinese: "研究顯示，缺乏睡眠與憂鬱症之間有強烈的關聯。",
      grammar_point: "a strong connection between A and B（A與B之間的強烈關聯）"
    },
    vocabulary: [
      { word: "connection", pos: "n.", chinese: "關聯、聯繫" },
      { word: "lack", pos: "n.", chinese: "缺乏" },
      { word: "depression", pos: "n.", chinese: "憂鬱症" }
    ],
    sentence_pattern: { pattern: "There is a strong connection between A and B", example: "We share a strong connection." }
  },
  {
    phrase: "strong contrast",
    type: "形容詞 + 名詞",
    chinese: "強烈的對比",
    keywords: ["strong", "contrast"],
    example: {
      english: "The bright red door forms a strong contrast with the white walls of the house.",
      chinese: "鮮紅色的門與這棟房子的白牆形成了強烈的對比。",
      grammar_point: "form / create a strong contrast with + N（與...形成強烈對比）"
    },
    vocabulary: [
      { word: "bright", pos: "adj.", chinese: "明亮的、鮮豔的" },
      { word: "form", pos: "v.", chinese: "形成" },
      { word: "contrast", pos: "n.", chinese: "對比" }
    ],
    sentence_pattern: { pattern: "A forms a strong contrast with B", example: "His quiet nature is in strong contrast to her outgoing personality." }
  },
  {
    phrase: "strong criticism",
    type: "形容詞 + 名詞",
    chinese: "嚴厲的批評",
    keywords: ["strong", "criticism"],
    example: {
      english: "The controversial policy drew strong criticism from the general public.",
      chinese: "這項具爭議的政策引發了社會大眾嚴厲的批評。",
      grammar_point: "draw / face strong criticism（引發/面臨強烈批評）"
    },
    vocabulary: [
      { word: "controversial", pos: "adj.", chinese: "具爭議的" },
      { word: "draw", pos: "v.", chinese: "引起、吸引（過去式 drew）" },
      { word: "general public", pos: "n.", chinese: "社會大眾" }
    ],
    sentence_pattern: { pattern: "S + face/draw strong criticism", example: "The decision met with strong criticism." }
  },
  {
    phrase: "strong desire",
    type: "形容詞 + 名詞",
    chinese: "強烈的渴望",
    keywords: ["strong", "desire"],
    example: {
      english: "After graduating, she had a strong desire to travel around the world and experience different cultures.",
      chinese: "畢業後，她有著環遊世界並體驗不同文化的強烈渴望。",
      grammar_point: "have a strong desire to + V（強烈渴望去做...）"
    },
    vocabulary: [
      { word: "desire", pos: "n.", chinese: "渴望、慾望" },
      { word: "experience", pos: "v.", chinese: "體驗" }
    ],
    sentence_pattern: { pattern: "S + have a strong desire to + V", example: "He felt a strong desire to help them." }
  },
  {
    phrase: "strong emphasis",
    type: "形容詞 + 名詞",
    chinese: "高度重視、強烈強調",
    keywords: ["strong", "emphasis"],
    example: {
      english: "Our school places a strong emphasis on both academic achievement and moral education.",
      chinese: "我們學校對學業成就和道德教育都高度重視。",
      grammar_point: "place/put a strong emphasis on + N（將重點放在...、高度重視...）"
    },
    vocabulary: [
      { word: "emphasis", pos: "n.", chinese: "強調、重視" },
      { word: "academic achievement", pos: "n.", chinese: "學業成就" },
      { word: "moral", pos: "adj.", chinese: "道德的" }
    ],
    sentence_pattern: { pattern: "S + put a strong emphasis on + N", example: "The course puts a strong emphasis on practical skills." }
  },
  {
    phrase: "strong evidence",
    type: "形容詞 + 名詞",
    chinese: "有力的證據",
    keywords: ["strong", "evidence"],
    example: {
      english: "Without strong evidence, the police cannot arrest the suspect.",
      chinese: "沒有有力的證據，警方無法逮捕該名嫌犯。",
      grammar_point: "evidence 為不可數名詞，前面不可加 a，也不可加 s。"
    },
    vocabulary: [
      { word: "evidence", pos: "n.", chinese: "證據" },
      { word: "arrest", pos: "v.", chinese: "逮捕" },
      { word: "suspect", pos: "n.", chinese: "嫌犯" }
    ],
    sentence_pattern: { pattern: "S + provide strong evidence", example: "There is strong evidence linking him to the crime." }
  },
  {
    phrase: "strong feeling(s)",
    type: "形容詞 + 名詞",
    chinese: "強烈的感覺 / 情緒",
    keywords: ["strong", "feeling"],
    example: {
      english: "I have a strong feeling that everything will turn out fine in the end.",
      chinese: "我有一種強烈的預感，最後一切都會好轉的。",
      grammar_point: "have a strong feeling that + 子句（有種強烈的直覺/預感...）"
    },
    vocabulary: [
      { word: "feeling", pos: "n.", chinese: "感覺、預感" },
      { word: "turn out", pos: "phr. v.", chinese: "結果是、最終變成" }
    ],
    sentence_pattern: { pattern: "S + have a strong feeling that...", example: "She has strong feelings about animal rights." }
  },
  {
    phrase: "strong influence",
    type: "形容詞 + 名詞",
    chinese: "巨大的影響",
    keywords: ["strong", "influence"],
    example: {
      english: "Parents exert a strong influence on their children's personality development.",
      chinese: "父母對孩子的性格發展施加巨大的影響。",
      grammar_point: "exert/have a strong influence on + N（對...產生巨大的影響）"
    },
    vocabulary: [
      { word: "exert", pos: "v.", chinese: "施加、運用" },
      { word: "personality", pos: "n.", chinese: "個性、性格" },
      { word: "development", pos: "n.", chinese: "發展" }
    ],
    sentence_pattern: { pattern: "S + have a strong influence on + N", example: "The teacher had a strong influence on his life." }
  },
  {
    phrase: "strong language",
    type: "形容詞 + 名詞",
    chinese: "粗話、強烈的措辭",
    keywords: ["strong", "language"],
    example: {
      english: "The movie is rated R because it contains violence and strong language.",
      chinese: "這部電影被評為限制級，因為它包含暴力和粗話。",
      grammar_point: "strong language 在此專指「髒話、爆粗口」或「嚴厲的譴責詞彙」"
    },
    vocabulary: [
      { word: "rate", pos: "v.", chinese: "分級、評定" },
      { word: "contain", pos: "v.", chinese: "包含" },
      { word: "violence", pos: "n.", chinese: "暴力" }
    ],
    sentence_pattern: { pattern: "The film contains strong language.", example: "He was criticized for using strong language." }
  },
  {
    phrase: "strong opposition / resistance",
    type: "形容詞 + 名詞",
    chinese: "強烈的反對 / 抵抗",
    keywords: ["strong", "opposition", "resistance"],
    example: {
      english: "The government's plan to cut workers' salaries met with strong opposition from the labor union.",
      chinese: "政府削減工人工資的計畫遭遇了工會強烈的反對。",
      grammar_point: "meet with strong opposition（遭遇強烈反對）"
    },
    vocabulary: [
      { word: "salary", pos: "n.", chinese: "薪水" },
      { word: "meet with", pos: "phr. v.", chinese: "遭遇、遇到" },
      { word: "labor union", pos: "n.", chinese: "工會" }
    ],
    sentence_pattern: { pattern: "S + met with strong opposition/resistance", example: "There is strong resistance to the new law." }
  },
  {
    phrase: "strong smell / taste",
    type: "形容詞 + 名詞",
    chinese: "濃烈的氣味 / 味道",
    keywords: ["strong", "smell", "taste"],
    example: {
      english: "Durian is a tropical fruit known for its creamy texture and very strong smell.",
      chinese: "榴槤是一種熱帶水果，以其綿密的口感和極其濃烈的氣味而聞名。",
      grammar_point: "【台式英文殺手】形容氣味或味道很「重/濃」，不能用 heavy，必須用 strong！"
    },
    vocabulary: [
      { word: "durian", pos: "n.", chinese: "榴槤" },
      { word: "tropical", pos: "adj.", chinese: "熱帶的" },
      { word: "texture", pos: "n.", chinese: "口感、質地" }
    ],
    sentence_pattern: { pattern: "N + has a strong smell/taste", example: "Garlic has a very strong taste." }
  },
  {
    phrase: "strong support",
    type: "形容詞 + 名詞",
    chinese: "大力支持",
    keywords: ["strong", "support"],
    example: {
      english: "The charity project would not be possible without the strong support of the local community.",
      chinese: "如果沒有當地社區的大力支持，這個慈善專案是不可能實現的。",
      grammar_point: "with the strong support of + N（在...的大力支持下）"
    },
    vocabulary: [
      { word: "charity", pos: "n.", chinese: "慈善" },
      { word: "community", pos: "n.", chinese: "社區" }
    ],
    sentence_pattern: { pattern: "S + show strong support for + N", example: "The mayor voiced his strong support for the plan." }
  },
  {
    phrase: "strong tendency",
    type: "形容詞 + 名詞",
    chinese: "強烈的傾向",
    keywords: ["strong", "tendency"],
    example: {
      english: "Young children have a strong tendency to imitate their parents' behavior.",
      chinese: "幼童有強烈模仿父母行為的傾向。",
      grammar_point: "have a strong tendency to + V（有極大的傾向去做...）"
    },
    vocabulary: [
      { word: "tendency", pos: "n.", chinese: "傾向、趨勢" },
      { word: "imitate", pos: "v.", chinese: "模仿" },
      { word: "behavior", pos: "n.", chinese: "行為" }
    ],
    sentence_pattern: { pattern: "S + have a strong tendency to + V", example: "There is a strong tendency for prices to rise." }
  },
  {
    phrase: "strong tradition",
    type: "形容詞 + 名詞",
    chinese: "優良的傳統、深厚的傳統",
    keywords: ["strong", "tradition"],
    example: {
      english: "This historic school has a strong tradition of academic excellence and sportsmanship.",
      chinese: "這所具歷史意義的學校擁有追求卓越學術與運動家精神的優良傳統。",
      grammar_point: "a strong tradition of + N（有著...的濃厚傳統）"
    },
    vocabulary: [
      { word: "historic", pos: "adj.", chinese: "具歷史意義的" },
      { word: "excellence", pos: "n.", chinese: "卓越、優秀" },
      { word: "sportsmanship", pos: "n.", chinese: "運動家精神" }
    ],
    sentence_pattern: { pattern: "S + have a strong tradition of + N", example: "The village maintains a strong tradition of woodworking." }
  },
  {
    phrase: "strong view(s)",
    type: "形容詞 + 名詞",
    chinese: "堅定的看法、強烈的觀點",
    keywords: ["strong", "view"],
    example: {
      english: "The author expressed strong views on the current political situation in his new book.",
      chinese: "作者在他的新書中對當前的政治局勢表達了強烈的觀點。",
      grammar_point: "express/hold strong views on + N（對...抱持強烈/堅定的看法）"
    },
    vocabulary: [
      { word: "author", pos: "n.", chinese: "作者" },
      { word: "express", pos: "v.", chinese: "表達" },
      { word: "current", pos: "adj.", chinese: "當前的" }
    ],
    sentence_pattern: { pattern: "S + hold strong views on + N", example: "She has strong views on animal welfare." }
  },
  {
    phrase: "strong wind",
    type: "形容詞 + 名詞",
    chinese: "強風、大風",
    keywords: ["strong", "wind"],
    example: {
      english: "The flight was delayed for several hours due to the strong wind and heavy rain.",
      chinese: "由於強風和暴雨，航班延誤了幾個小時。",
      grammar_point: "【台式英文殺手】形容風很「大」，英文絕對不用 big wind，必須用 strong wind！"
    },
    vocabulary: [
      { word: "flight", pos: "n.", chinese: "航班" },
      { word: "delay", pos: "v.", chinese: "延誤" },
      { word: "heavy rain", pos: "n.", chinese: "暴雨（雨大用 heavy）" }
    ],
    sentence_pattern: { pattern: "A strong wind is blowing.", example: "The strong wind blew down many trees." }
  },
  // ── STRONG + Noun (道地形容詞搭配，根除台式英文) ───────────────────────────
  {
    phrase: "strong argument",
    type: "形容詞 + 名詞",
    chinese: "有力的論點",
    keywords: ["strong", "argument"],
    example: {
      english: "The lawyer presented a strong argument to prove his client's innocence.",
      chinese: "律師提出了有力的論點來證明他客戶的清白。",
      grammar_point: "present a strong argument（提出有力的論點/證據）"
    },
    vocabulary: [
      { word: "lawyer", pos: "n.", chinese: "律師" },
      { word: "present", pos: "v.", chinese: "提出、呈現" },
      { word: "innocence", pos: "n.", chinese: "清白、無罪" }
    ],
    sentence_pattern: { pattern: "S + present/make a strong argument", example: "There is a strong argument for raising taxes." }
  },
  {
    phrase: "strong belief / conviction",
    type: "形容詞 + 名詞",
    chinese: "堅定的信念",
    keywords: ["strong", "belief", "conviction"],
    example: {
      english: "She has a strong belief that hard work will eventually pay off.",
      chinese: "她有著堅定的信念，認為努力工作最終會得到回報。",
      grammar_point: "a strong belief that + 子句（堅信...，同位語用法）"
    },
    vocabulary: [
      { word: "belief", pos: "n.", chinese: "信念、信仰" },
      { word: "conviction", pos: "n.", chinese: "堅定的信念、定罪" },
      { word: "pay off", pos: "phr. v.", chinese: "得到回報" }
    ],
    sentence_pattern: { pattern: "S + have a strong belief that...", example: "He holds a strong conviction about human rights." }
  },
  {
    phrase: "strong case",
    type: "形容詞 + 名詞",
    chinese: "充分的理由、有力的立論",
    keywords: ["strong", "case"],
    example: {
      english: "There is a strong case for banning smartphones in the classroom to improve focus.",
      chinese: "為了提升注意力，在教室內禁止使用智慧型手機是有充分理由的。",
      grammar_point: "a strong case for + N/V-ing（做...的充分理由/有力論據）"
    },
    vocabulary: [
      { word: "ban", pos: "v.", chinese: "禁止" },
      { word: "focus", pos: "n.", chinese: "專注力" }
    ],
    sentence_pattern: { pattern: "There is a strong case for/against + N", example: "He makes a strong case for the new policy." }
  },
  {
    phrase: "strong chance",
    type: "形容詞 + 名詞",
    chinese: "極大的可能",
    keywords: ["strong", "chance"],
    example: {
      english: "If we leave now, there is a strong chance that we can catch the last train.",
      chinese: "如果我們現在離開，我們有極大的可能可以趕上末班車。",
      grammar_point: "【台式英文殺手】機率很大必須用 a strong / high chance，絕不能用 a big chance！"
    },
    vocabulary: [
      { word: "catch", pos: "v.", chinese: "趕上（車、船等）" },
      { word: "last train", pos: "n.", chinese: "末班車" }
    ],
    sentence_pattern: { pattern: "There is a strong chance that + S + V", example: "There's a strong chance of rain tomorrow." }
  },
  {
    phrase: "strong coffee / tea",
    type: "形容詞 + 名詞",
    chinese: "濃咖啡 / 濃茶",
    keywords: ["strong", "coffee", "tea"],
    example: {
      english: "I need a cup of strong coffee to keep myself awake during the morning meeting.",
      chinese: "我需要一杯濃咖啡，讓自己在早會時保持清醒。",
      grammar_point: "【台式英文殺手】茶/咖啡很「濃」，英文不用 thick 或 heavy，而是用 strong！"
    },
    vocabulary: [
      { word: "awake", pos: "adj.", chinese: "清醒的" },
      { word: "during", pos: "prep.", chinese: "在...期間" }
    ],
    sentence_pattern: { pattern: "S + drink strong coffee/tea", example: "He prefers strong tea in the afternoon." }
  },
  {
    phrase: "strong commitment",
    type: "形容詞 + 名詞",
    chinese: "堅定的承諾、強烈的使命感",
    keywords: ["strong", "commitment"],
    example: {
      english: "The new principal has shown a strong commitment to improving student welfare.",
      chinese: "新校長展現了改善學生福利的堅定承諾。",
      grammar_point: "a strong commitment to + N / V-ing（對...的堅定投入，to為介系詞）"
    },
    vocabulary: [
      { word: "principal", pos: "n.", chinese: "校長" },
      { word: "commitment", pos: "n.", chinese: "承諾、投入" },
      { word: "welfare", pos: "n.", chinese: "福利" }
    ],
    sentence_pattern: { pattern: "S + show a strong commitment to + N", example: "The company made a strong commitment to safety." }
  },
  {
    phrase: "strong connection",
    type: "形容詞 + 名詞",
    chinese: "強烈的關聯、緊密的聯繫",
    keywords: ["strong", "connection"],
    example: {
      english: "Studies have shown a strong connection between lack of sleep and depression.",
      chinese: "研究顯示，缺乏睡眠與憂鬱症之間有強烈的關聯。",
      grammar_point: "a strong connection between A and B（A與B之間的強烈關聯）"
    },
    vocabulary: [
      { word: "connection", pos: "n.", chinese: "關聯、聯繫" },
      { word: "lack", pos: "n.", chinese: "缺乏" },
      { word: "depression", pos: "n.", chinese: "憂鬱症" }
    ],
    sentence_pattern: { pattern: "There is a strong connection between A and B", example: "We share a strong connection." }
  },
  {
    phrase: "strong contrast",
    type: "形容詞 + 名詞",
    chinese: "強烈的對比",
    keywords: ["strong", "contrast"],
    example: {
      english: "The bright red door forms a strong contrast with the white walls of the house.",
      chinese: "鮮紅色的門與這棟房子的白牆形成了強烈的對比。",
      grammar_point: "form / create a strong contrast with + N（與...形成強烈對比）"
    },
    vocabulary: [
      { word: "bright", pos: "adj.", chinese: "明亮的、鮮豔的" },
      { word: "form", pos: "v.", chinese: "形成" },
      { word: "contrast", pos: "n.", chinese: "對比" }
    ],
    sentence_pattern: { pattern: "A forms a strong contrast with B", example: "His quiet nature is in strong contrast to her outgoing personality." }
  },
  {
    phrase: "strong criticism",
    type: "形容詞 + 名詞",
    chinese: "嚴厲的批評",
    keywords: ["strong", "criticism"],
    example: {
      english: "The controversial policy drew strong criticism from the general public.",
      chinese: "這項具爭議的政策引發了社會大眾嚴厲的批評。",
      grammar_point: "draw / face strong criticism（引發/面臨強烈批評）"
    },
    vocabulary: [
      { word: "controversial", pos: "adj.", chinese: "具爭議的" },
      { word: "draw", pos: "v.", chinese: "引起、吸引（過去式 drew）" },
      { word: "general public", pos: "n.", chinese: "社會大眾" }
    ],
    sentence_pattern: { pattern: "S + face/draw strong criticism", example: "The decision met with strong criticism." }
  },
  {
    phrase: "strong desire",
    type: "形容詞 + 名詞",
    chinese: "強烈的渴望",
    keywords: ["strong", "desire"],
    example: {
      english: "After graduating, she had a strong desire to travel around the world and experience different cultures.",
      chinese: "畢業後，她有著環遊世界並體驗不同文化的強烈渴望。",
      grammar_point: "have a strong desire to + V（強烈渴望去做...）"
    },
    vocabulary: [
      { word: "desire", pos: "n.", chinese: "渴望、慾望" },
      { word: "experience", pos: "v.", chinese: "體驗" }
    ],
    sentence_pattern: { pattern: "S + have a strong desire to + V", example: "He felt a strong desire to help them." }
  },
  {
    phrase: "strong emphasis",
    type: "形容詞 + 名詞",
    chinese: "高度重視、強烈強調",
    keywords: ["strong", "emphasis"],
    example: {
      english: "Our school places a strong emphasis on both academic achievement and moral education.",
      chinese: "我們學校對學業成就和道德教育都高度重視。",
      grammar_point: "place/put a strong emphasis on + N（將重點放在...、高度重視...）"
    },
    vocabulary: [
      { word: "emphasis", pos: "n.", chinese: "強調、重視" },
      { word: "academic achievement", pos: "n.", chinese: "學業成就" },
      { word: "moral", pos: "adj.", chinese: "道德的" }
    ],
    sentence_pattern: { pattern: "S + put a strong emphasis on + N", example: "The course puts a strong emphasis on practical skills." }
  },
  {
    phrase: "strong evidence",
    type: "形容詞 + 名詞",
    chinese: "有力的證據",
    keywords: ["strong", "evidence"],
    example: {
      english: "Without strong evidence, the police cannot arrest the suspect.",
      chinese: "沒有有力的證據，警方無法逮捕該名嫌犯。",
      grammar_point: "evidence 為不可數名詞，前面不可加 a，也不可加 s。"
    },
    vocabulary: [
      { word: "evidence", pos: "n.", chinese: "證據" },
      { word: "arrest", pos: "v.", chinese: "逮捕" },
      { word: "suspect", pos: "n.", chinese: "嫌犯" }
    ],
    sentence_pattern: { pattern: "S + provide strong evidence", example: "There is strong evidence linking him to the crime." }
  },
  {
    phrase: "strong feeling(s)",
    type: "形容詞 + 名詞",
    chinese: "強烈的感覺 / 情緒",
    keywords: ["strong", "feeling"],
    example: {
      english: "I have a strong feeling that everything will turn out fine in the end.",
      chinese: "我有一種強烈的預感，最後一切都會好轉的。",
      grammar_point: "have a strong feeling that + 子句（有種強烈的直覺/預感...）"
    },
    vocabulary: [
      { word: "feeling", pos: "n.", chinese: "感覺、預感" },
      { word: "turn out", pos: "phr. v.", chinese: "結果是、最終變成" }
    ],
    sentence_pattern: { pattern: "S + have a strong feeling that...", example: "She has strong feelings about animal rights." }
  },
  {
    phrase: "strong influence",
    type: "形容詞 + 名詞",
    chinese: "巨大的影響",
    keywords: ["strong", "influence"],
    example: {
      english: "Parents exert a strong influence on their children's personality development.",
      chinese: "父母對孩子的性格發展施加巨大的影響。",
      grammar_point: "exert/have a strong influence on + N（對...產生巨大的影響）"
    },
    vocabulary: [
      { word: "exert", pos: "v.", chinese: "施加、運用" },
      { word: "personality", pos: "n.", chinese: "個性、性格" },
      { word: "development", pos: "n.", chinese: "發展" }
    ],
    sentence_pattern: { pattern: "S + have a strong influence on + N", example: "The teacher had a strong influence on his life." }
  },
  {
    phrase: "strong language",
    type: "形容詞 + 名詞",
    chinese: "粗話、強烈的措辭",
    keywords: ["strong", "language"],
    example: {
      english: "The movie is rated R because it contains violence and strong language.",
      chinese: "這部電影被評為限制級，因為它包含暴力和粗話。",
      grammar_point: "strong language 在此專指「髒話、爆粗口」或「嚴厲的譴責詞彙」"
    },
    vocabulary: [
      { word: "rate", pos: "v.", chinese: "分級、評定" },
      { word: "contain", pos: "v.", chinese: "包含" },
      { word: "violence", pos: "n.", chinese: "暴力" }
    ],
    sentence_pattern: { pattern: "The film contains strong language.", example: "He was criticized for using strong language." }
  },
  {
    phrase: "strong opposition / resistance",
    type: "形容詞 + 名詞",
    chinese: "強烈的反對 / 抵抗",
    keywords: ["strong", "opposition", "resistance"],
    example: {
      english: "The government's plan to cut workers' salaries met with strong opposition from the labor union.",
      chinese: "政府削減工人工資的計畫遭遇了工會強烈的反對。",
      grammar_point: "meet with strong opposition（遭遇強烈反對）"
    },
    vocabulary: [
      { word: "salary", pos: "n.", chinese: "薪水" },
      { word: "meet with", pos: "phr. v.", chinese: "遭遇、遇到" },
      { word: "labor union", pos: "n.", chinese: "工會" }
    ],
    sentence_pattern: { pattern: "S + met with strong opposition/resistance", example: "There is strong resistance to the new law." }
  },
  {
    phrase: "strong smell / taste",
    type: "形容詞 + 名詞",
    chinese: "濃烈的氣味 / 味道",
    keywords: ["strong", "smell", "taste"],
    example: {
      english: "Durian is a tropical fruit known for its creamy texture and very strong smell.",
      chinese: "榴槤是一種熱帶水果，以其綿密的口感和極其濃烈的氣味而聞名。",
      grammar_point: "【台式英文殺手】形容氣味或味道很「重/濃」，不能用 heavy，必須用 strong！"
    },
    vocabulary: [
      { word: "durian", pos: "n.", chinese: "榴槤" },
      { word: "tropical", pos: "adj.", chinese: "熱帶的" },
      { word: "texture", pos: "n.", chinese: "口感、質地" }
    ],
    sentence_pattern: { pattern: "N + has a strong smell/taste", example: "Garlic has a very strong taste." }
  },
  {
    phrase: "strong support",
    type: "形容詞 + 名詞",
    chinese: "大力支持",
    keywords: ["strong", "support"],
    example: {
      english: "The charity project would not be possible without the strong support of the local community.",
      chinese: "如果沒有當地社區的大力支持，這個慈善專案是不可能實現的。",
      grammar_point: "with the strong support of + N（在...的大力支持下）"
    },
    vocabulary: [
      { word: "charity", pos: "n.", chinese: "慈善" },
      { word: "community", pos: "n.", chinese: "社區" }
    ],
    sentence_pattern: { pattern: "S + show strong support for + N", example: "The mayor voiced his strong support for the plan." }
  },
  {
    phrase: "strong tendency",
    type: "形容詞 + 名詞",
    chinese: "強烈的傾向",
    keywords: ["strong", "tendency"],
    example: {
      english: "Young children have a strong tendency to imitate their parents' behavior.",
      chinese: "幼童有強烈模仿父母行為的傾向。",
      grammar_point: "have a strong tendency to + V（有極大的傾向去做...）"
    },
    vocabulary: [
      { word: "tendency", pos: "n.", chinese: "傾向、趨勢" },
      { word: "imitate", pos: "v.", chinese: "模仿" },
      { word: "behavior", pos: "n.", chinese: "行為" }
    ],
    sentence_pattern: { pattern: "S + have a strong tendency to + V", example: "There is a strong tendency for prices to rise." }
  },
  {
    phrase: "strong tradition",
    type: "形容詞 + 名詞",
    chinese: "優良的傳統、深厚的傳統",
    keywords: ["strong", "tradition"],
    example: {
      english: "This historic school has a strong tradition of academic excellence and sportsmanship.",
      chinese: "這所具歷史意義的學校擁有追求卓越學術與運動家精神的優良傳統。",
      grammar_point: "a strong tradition of + N（有著...的濃厚傳統）"
    },
    vocabulary: [
      { word: "historic", pos: "adj.", chinese: "具歷史意義的" },
      { word: "excellence", pos: "n.", chinese: "卓越、優秀" },
      { word: "sportsmanship", pos: "n.", chinese: "運動家精神" }
    ],
    sentence_pattern: { pattern: "S + have a strong tradition of + N", example: "The village maintains a strong tradition of woodworking." }
  },
  {
    phrase: "strong view(s)",
    type: "形容詞 + 名詞",
    chinese: "堅定的看法、強烈的觀點",
    keywords: ["strong", "view"],
    example: {
      english: "The author expressed strong views on the current political situation in his new book.",
      chinese: "作者在他的新書中對當前的政治局勢表達了強烈的觀點。",
      grammar_point: "express/hold strong views on + N（對...抱持強烈/堅定的看法）"
    },
    vocabulary: [
      { word: "author", pos: "n.", chinese: "作者" },
      { word: "express", pos: "v.", chinese: "表達" },
      { word: "current", pos: "adj.", chinese: "當前的" }
    ],
    sentence_pattern: { pattern: "S + hold strong views on + N", example: "She has strong views on animal welfare." }
  },
  {
    phrase: "strong wind",
    type: "形容詞 + 名詞",
    chinese: "強風、大風",
    keywords: ["strong", "wind"],
    example: {
      english: "The flight was delayed for several hours due to the strong wind and heavy rain.",
      chinese: "由於強風和暴雨，航班延誤了幾個小時。",
      grammar_point: "【台式英文殺手】形容風很「大」，英文絕對不用 big wind，必須用 strong wind！"
    },
    vocabulary: [
      { word: "flight", pos: "n.", chinese: "航班" },
      { word: "delay", pos: "v.", chinese: "延誤" },
      { word: "heavy rain", pos: "n.", chinese: "暴雨（雨大用 heavy）" }
    ],
    sentence_pattern: { pattern: "A strong wind is blowing.", example: "The strong wind blew down many trees." }
  },

  // ── HEAVY + Noun (道地形容詞搭配，根除台式英文) ───────────────────────────
  {
    phrase: "heavy rain / snow / fog",
    type: "形容詞 + 名詞",
    chinese: "大雨 / 大雪 / 濃霧",
    keywords: ["heavy", "rain", "snow", "fog"],
    example: {
      english: "The airport was temporarily closed due to heavy fog and heavy snow.",
      chinese: "由於濃霧和大雪，機場暫時關閉了。",
      grammar_point: "【台式英文殺手】形容雨、雪、霧很「大」，英文不用 big，必須用 heavy！"
    },
    vocabulary: [
      { word: "temporarily", pos: "adv.", chinese: "暫時地" },
      { word: "airport", pos: "n.", chinese: "機場" }
    ],
    sentence_pattern: { pattern: "S + be delayed/closed due to heavy rain/fog", example: "We drove slowly in the heavy rain." }
  },
  {
    phrase: "heavy drinker / smoker",
    type: "形容詞 + 名詞",
    chinese: "酗酒者 / 老菸槍",
    keywords: ["heavy", "drinker", "smoker"],
    example: {
      english: "As a heavy smoker, he finds it extremely difficult to quit the habit.",
      chinese: "身為一個老菸槍，他發現要戒除這個習慣極度困難。",
      grammar_point: "heavy 用來形容某種習慣的「程度深、頻率高」"
    },
    vocabulary: [
      { word: "extremely", pos: "adv.", chinese: "極度地" },
      { word: "quit", pos: "v.", chinese: "戒除、放棄" },
      { word: "habit", pos: "n.", chinese: "習慣" }
    ],
    sentence_pattern: { pattern: "S + be a heavy drinker/smoker", example: "His father used to be a heavy drinker." }
  },
  {
    phrase: "heavy casualties / losses",
    type: "形容詞 + 名詞",
    chinese: "慘重的傷亡 / 損失",
    keywords: ["heavy", "casualties", "losses"],
    example: {
      english: "The enemy army suffered heavy casualties during the fierce battle.",
      chinese: "敵軍在激烈的戰鬥中遭受了慘重的傷亡。",
      grammar_point: "suffer heavy casualties / losses（遭受慘重傷亡/損失）"
    },
    vocabulary: [
      { word: "casualty", pos: "n.", chinese: "傷亡人員" },
      { word: "suffer", pos: "v.", chinese: "遭受" },
      { word: "fierce", pos: "adj.", chinese: "激烈的" }
    ],
    sentence_pattern: { pattern: "S + suffer heavy casualties", example: "The business suffered heavy losses last year." }
  },
  {
    phrase: "heavy burden / load / responsibility",
    type: "形容詞 + 名詞",
    chinese: "沉重的負擔 / 責任",
    keywords: ["heavy", "burden", "load", "responsibility"],
    example: {
      english: "Taking care of five children is a heavy burden for the single mother.",
      chinese: "照顧五個孩子對這位單親媽媽來說是個沉重的負擔。",
      grammar_point: "bear a heavy burden / shoulder a heavy responsibility（承擔重負/重任）"
    },
    vocabulary: [
      { word: "burden", pos: "n.", chinese: "負擔" },
      { word: "single mother", pos: "n.", chinese: "單親媽媽" },
      { word: "responsibility", pos: "n.", chinese: "責任" }
    ],
    sentence_pattern: { pattern: "N + is a heavy burden for + 人", example: "He carries a heavy responsibility at work." }
  },
  {
    phrase: "heavy blow / defeat",
    type: "形容詞 + 名詞",
    chinese: "沉重的打擊 / 慘敗",
    keywords: ["heavy", "blow", "defeat"],
    example: {
      english: "His sudden death dealt a heavy blow to his family and friends.",
      chinese: "他的突然離世對他的家人和朋友造成了沉重的打擊。",
      grammar_point: "deal a heavy blow to + N（對...造成沉重打擊）"
    },
    vocabulary: [
      { word: "sudden", pos: "adj.", chinese: "突然的" },
      { word: "deal", pos: "v.", chinese: "給予(打擊)；處理" },
      { word: "defeat", pos: "n.", chinese: "失敗" }
    ],
    sentence_pattern: { pattern: "S + deal a heavy blow to + N", example: "The team suffered a heavy defeat." }
  },
  {
    phrase: "heavy cold",
    type: "形容詞 + 名詞",
    chinese: "重感冒",
    keywords: ["heavy", "cold"],
    example: {
      english: "She is in bed with a heavy cold and a high fever today.",
      chinese: "她今天因為重感冒和高燒臥病在床。",
      grammar_point: "have a heavy cold / catch a heavy cold（得重感冒，也可用 bad cold）"
    },
    vocabulary: [
      { word: "fever", pos: "n.", chinese: "發燒" },
      { word: "in bed", pos: "phr.", chinese: "臥病在床" }
    ],
    sentence_pattern: { pattern: "S + come down with a heavy cold", example: "He caught a heavy cold yesterday." }
  },
  {
    phrase: "heavy bleeding",
    type: "形容詞 + 名詞",
    chinese: "大量出血",
    keywords: ["heavy", "bleeding"],
    example: {
      english: "The doctor managed to stop the heavy bleeding from the patient's wound.",
      chinese: "醫生設法止住了病患傷口的大量出血。",
      grammar_point: "heavy bleeding（醫學/急救常見用語：大量出血）"
    },
    vocabulary: [
      { word: "manage to", pos: "phr. v.", chinese: "設法做到" },
      { word: "wound", pos: "n.", chinese: "傷口" },
      { word: "patient", pos: "n.", chinese: "病患" }
    ],
    sentence_pattern: { pattern: "S + stop the heavy bleeding", example: "Apply pressure to control heavy bleeding." }
  },
  {
    phrase: "heavy workload / taxes",
    type: "形容詞 + 名詞",
    chinese: "繁重的工作量 / 重稅",
    keywords: ["heavy", "workload", "taxes"],
    example: {
      english: "Many employees complain about the heavy workload and low salary in this company.",
      chinese: "許多員工抱怨這家公司繁重的工作量和低薪。",
      grammar_point: "heavy 搭配工作量或稅收，表示「負擔龐大」"
    },
    vocabulary: [
      { word: "workload", pos: "n.", chinese: "工作量" },
      { word: "complain", pos: "v.", chinese: "抱怨" },
      { word: "salary", pos: "n.", chinese: "薪水" }
    ],
    sentence_pattern: { pattern: "S + complain about the heavy workload", example: "The government imposed heavy taxes on luxury goods." }
  },
  {
    phrase: "heavy heart / sigh",
    type: "形容詞 + 名詞",
    chinese: "沉重的心情 / 嘆息",
    keywords: ["heavy", "heart", "sigh"],
    example: {
      english: "With a heavy heart, she waved goodbye to her best friend at the airport.",
      chinese: "懷著沉重的心情，她在機場向最好的朋友揮手道別。",
      grammar_point: "with a heavy heart（帶著沉重/悲痛的心情，學測作文情緒描寫神句！）"
    },
    vocabulary: [
      { word: "sigh", pos: "n.", chinese: "嘆息" },
      { word: "wave", pos: "v.", chinese: "揮手" }
    ],
    sentence_pattern: { pattern: "S + V + with a heavy heart", example: "He let out a heavy sigh of disappointment." }
  },
  {
    phrase: "heavy silence",
    type: "形容詞 + 名詞",
    chinese: "死寂、沉悶的沉默",
    keywords: ["heavy", "silence"],
    example: {
      english: "A heavy silence filled the room after the shocking announcement was made.",
      chinese: "在宣布了令人震驚的消息後，房間裡充滿了沉悶的死寂。",
      grammar_point: "a heavy silence（形容氣氛凝重、讓人喘不過氣的安靜）"
    },
    vocabulary: [
      { word: "shocking", pos: "adj.", chinese: "令人震驚的" },
      { word: "announcement", pos: "n.", chinese: "宣布、公告" },
      { word: "fill", pos: "v.", chinese: "充滿" }
    ],
    sentence_pattern: { pattern: "A heavy silence fell over + 地方", example: "There was a heavy silence between them." }
  },
  {
    phrase: "heavy machinery / metal",
    type: "形容詞 + 名詞",
    chinese: "重型機械 / 重金屬",
    keywords: ["heavy", "machinery", "metal"],
    example: {
      english: "You need a special license and intensive training to operate this heavy machinery.",
      chinese: "你需要特殊的執照和密集的訓練才能操作這種重型機械。",
      grammar_point: "machinery 為不可數名詞的總稱"
    },
    vocabulary: [
      { word: "machinery", pos: "n.", chinese: "機械（總稱）" },
      { word: "license", pos: "n.", chinese: "執照" },
      { word: "operate", pos: "v.", chinese: "操作" }
    ],
    sentence_pattern: { pattern: "S + operate heavy machinery", example: "Exposure to heavy metals can cause illness." }
  },
  {
    phrase: "heavy traffic",
    type: "形容詞 + 名詞",
    chinese: "交通擁擠、車流量大",
    keywords: ["heavy", "traffic"],
    example: {
      english: "I missed the beginning of the movie because I was stuck in heavy traffic.",
      chinese: "我錯過了電影的開頭，因為我塞在擁擠的車陣中。",
      grammar_point: "be stuck in heavy traffic（塞車，不可用 crowded traffic）"
    },
    vocabulary: [
      { word: "miss", pos: "v.", chinese: "錯過" },
      { word: "stuck", pos: "adj.", chinese: "卡住的、困住的" },
      { word: "traffic", pos: "n.", chinese: "交通（不可數名詞）" }
    ],
    sentence_pattern: { pattern: "S + be delayed due to heavy traffic", example: "Heavy traffic is common during rush hour." }
  },
  {
    phrase: "heavy food",
    type: "形容詞 + 名詞",
    chinese: "油膩/不易消化的食物",
    keywords: ["heavy", "food"],
    example: {
      english: "It is not a good idea to eat heavy food right before you go to sleep.",
      chinese: "在睡前吃油膩且不易消化的食物不是個好主意。",
      grammar_point: "heavy food 指吃了會讓人覺得胃部負擔很大的食物"
    },
    vocabulary: [
      { word: "digest", pos: "v.", chinese: "消化" },
      { word: "right before", pos: "phr.", chinese: "就在...之前" }
    ],
    sentence_pattern: { pattern: "S + avoid heavy food", example: "I prefer a light salad rather than heavy food." }
  },
  {
    phrase: "heavy footsteps",
    type: "形容詞 + 名詞",
    chinese: "沉重的腳步聲",
    keywords: ["heavy", "footsteps"],
    example: {
      english: "We heard heavy footsteps coming slowly up the stairs in the middle of the night.",
      chinese: "半夜裡，我們聽到沉重的腳步聲慢慢上樓。",
      grammar_point: "hear heavy footsteps（聽見沉重腳步聲，作文營造懸疑感必備）"
    },
    vocabulary: [
      { word: "footstep", pos: "n.", chinese: "腳步聲" },
      { word: "stair", pos: "n.", chinese: "樓梯" }
    ],
    sentence_pattern: { pattern: "S + hear heavy footsteps", example: "His heavy footsteps echoed in the hallway." }
  },
  {
    phrase: "heavy hand",
    type: "形容詞 + 名詞",
    chinese: "高壓手段、嚴厲",
    keywords: ["heavy", "hand"],
    example: {
      english: "The dictator ruled the country with a heavy hand, punishing anyone who disagreed.",
      chinese: "獨裁者以高壓手段統治國家，懲罰任何不同意的人。",
      grammar_point: "with a heavy hand（以嚴厲、專制或高壓的方式）"
    },
    vocabulary: [
      { word: "dictator", pos: "n.", chinese: "獨裁者" },
      { word: "rule", pos: "v.", chinese: "統治" },
      { word: "punish", pos: "v.", chinese: "懲罰" }
    ],
    sentence_pattern: { pattern: "S + rule/manage with a heavy hand", example: "The manager was known for his heavy hand." }
  },
  {
    phrase: "heavy features",
    type: "形容詞 + 名詞",
    chinese: "粗獷的五官",
    keywords: ["heavy", "features"],
    example: {
      english: "The suspect is described as a tall man with dark hair and heavy features.",
      chinese: "嫌犯被描述為一個有著黑髮和粗獷五官的高大男子。",
      grammar_point: "heavy features（用來描述人長相粗獷、線條不柔和）"
    },
    vocabulary: [
      { word: "suspect", pos: "n.", chinese: "嫌犯" },
      { word: "describe", pos: "v.", chinese: "描述" },
      { word: "feature", pos: "n.", chinese: "五官、特徵（多用複數）" }
    ],
    sentence_pattern: { pattern: "S + have heavy features", example: "He has a square face and heavy features." }
  },
  // ── 跨領域核心搭配詞 (形容詞+名詞 / 複合名詞) ───────────────────────────
  {
    phrase: "common sense",
    type: "形容詞 + 名詞",
    chinese: "常識",
    keywords: ["common", "sense"],
    example: {
      english: "It is common sense to look both ways before crossing a busy street.",
      chinese: "在穿越繁忙的街道前左右觀看是常識。",
      grammar_point: "It is common sense to + V（做...是常識）"
    },
    vocabulary: [
      { word: "common", pos: "adj.", chinese: "普遍的、共同的" },
      { word: "sense", pos: "n.", chinese: "感覺、理智" },
      { word: "cross", pos: "v.", chinese: "穿越" }
    ],
    sentence_pattern: { pattern: "N + is just a matter of common sense.", example: "Using a password is common sense." }
  },
  {
    phrase: "essential role",
    type: "形容詞 + 名詞",
    chinese: "不可或缺的角色",
    keywords: ["essential", "role"],
    example: {
      english: "Parents play an essential role in shaping their children's early development.",
      chinese: "父母在塑造孩子早期發展方面扮演著不可或缺的角色。",
      grammar_point: "play an essential role in + N/V-ing（在...中扮演關鍵角色，同義 vital/crucial role）"
    },
    vocabulary: [
      { word: "essential", pos: "adj.", chinese: "不可或缺的、絕對必要的" },
      { word: "shape", pos: "v.", chinese: "塑造" },
      { word: "development", pos: "n.", chinese: "發展" }
    ],
    sentence_pattern: { pattern: "S + play an essential role in + N", example: "Water plays an essential role in our bodies." }
  },
  {
    phrase: "sharp contrast",
    type: "形容詞 + 名詞",
    chinese: "強烈的對比",
    keywords: ["sharp", "contrast"],
    example: {
      english: "The poverty in the village is in sharp contrast to the wealth of the nearby city.",
      chinese: "村莊的貧窮與附近城市的富有形成了強烈的對比。",
      grammar_point: "be in sharp contrast to + N（與...形成強烈對比，sharp 在此意為「明顯的、鮮明的」）"
    },
    vocabulary: [
      { word: "sharp", pos: "adj.", chinese: "尖銳的、強烈的" },
      { word: "poverty", pos: "n.", chinese: "貧窮" },
      { word: "wealth", pos: "n.", chinese: "財富" }
    ],
    sentence_pattern: { pattern: "A is in sharp contrast to B", example: "His quiet voice was in sharp contrast to her loud one." }
  },
  {
    phrase: "wide range",
    type: "形容詞 + 名詞",
    chinese: "廣泛的、種類繁多的",
    keywords: ["wide", "range"],
    example: {
      english: "The new restaurant offers a wide range of vegetarian dishes to choose from.",
      chinese: "這家新餐廳提供了種類繁多的素食菜餚可供選擇。",
      grammar_point: "a wide range of + 複數名詞（各式各樣的...）"
    },
    vocabulary: [
      { word: "offer", pos: "v.", chinese: "提供" },
      { word: "range", pos: "n.", chinese: "範圍、種類" },
      { word: "vegetarian", pos: "adj.", chinese: "素食的" }
    ],
    sentence_pattern: { pattern: "S + provide/offer a wide range of + Ns", example: "The store sells a wide range of products." }
  },
  {
    phrase: "close relationship",
    type: "形容詞 + 名詞",
    chinese: "親密的關係",
    keywords: ["close", "relationship"],
    example: {
      english: "Dogs have a very close relationship with humans compared to other animals.",
      chinese: "與其他動物相比，狗與人類有著非常親密的關係。",
      grammar_point: "have a close relationship with + 人/物（與...關係密切）"
    },
    vocabulary: [
      { word: "close", pos: "adj.", chinese: "親密的、靠近的" },
      { word: "compared to", pos: "phr.", chinese: "相較於..." }
    ],
    sentence_pattern: { pattern: "S + have a close relationship with + O", example: "She maintains a close relationship with her sister." }
  },
  {
    phrase: "hard work",
    type: "形容詞 + 名詞",
    chinese: "辛勤工作、努力",
    keywords: ["hard", "work"],
    example: {
      english: "His outstanding success is the result of years of hard work and dedication.",
      chinese: "他傑出的成功是多年來辛勤工作和奉獻的結果。",
      grammar_point: "hard work 為不可數名詞，不可加 s"
    },
    vocabulary: [
      { word: "outstanding", pos: "adj.", chinese: "傑出的" },
      { word: "result", pos: "n.", chinese: "結果" },
      { word: "dedication", pos: "n.", chinese: "奉獻" }
    ],
    sentence_pattern: { pattern: "N + requires a lot of hard work.", example: "Hard work usually pays off in the end." }
  },
  {
    phrase: "mental health",
    type: "形容詞 + 名詞",
    chinese: "心理健康",
    keywords: ["mental", "health"],
    example: {
      english: "Getting enough sleep is crucial for both your physical and mental health.",
      chinese: "獲得充足的睡眠對你的身體和心理健康都至關重要。",
      grammar_point: "mental health 常與 physical health (身體健康) 搭配對舉"
    },
    vocabulary: [
      { word: "crucial", pos: "adj.", chinese: "至關重要的" },
      { word: "physical", pos: "adj.", chinese: "身體的、物理的" },
      { word: "mental", pos: "adj.", chinese: "心理的、精神的" }
    ],
    sentence_pattern: { pattern: "S + pay attention to one's mental health", example: "Exercise is good for mental health." }
  },
  {
    phrase: "social media",
    type: "形容詞 + 名詞",
    chinese: "社群媒體",
    keywords: ["social", "media"],
    example: {
      english: "Many teenagers spend an average of three hours a day scrolling through social media.",
      chinese: "許多年青人平均每天花三個小時滑社群媒體。",
      grammar_point: "on social media（在社群媒體上，介系詞用 on）"
    },
    vocabulary: [
      { word: "average", pos: "n.", chinese: "平均" },
      { word: "scroll", pos: "v.", chinese: "滑動(螢幕)、滾動" },
      { word: "media", pos: "n.", chinese: "媒體 (medium的複數)" }
    ],
    sentence_pattern: { pattern: "S + spend time on social media", example: "News spreads fast on social media." }
  },
  {
    phrase: "global warming",
    type: "形容詞 + 名詞",
    chinese: "全球暖化",
    keywords: ["global", "warming"],
    example: {
      english: "Global warming is causing sea levels to rise at an alarming rate around the world.",
      chinese: "全球暖化正導致世界各地的海平面以驚人的速度上升。",
      grammar_point: "global warming 為不可數的專有名詞概念"
    },
    vocabulary: [
      { word: "global", pos: "adj.", chinese: "全球的" },
      { word: "cause", pos: "v.", chinese: "導致" },
      { word: "alarming", pos: "adj.", chinese: "令人擔憂的、驚人的" }
    ],
    sentence_pattern: { pattern: "Global warming is a serious issue.", example: "We must take action to slow down global warming." }
  },
  {
    phrase: "natural resources",
    type: "形容詞 + 名詞",
    chinese: "自然資源",
    keywords: ["natural", "resources"],
    example: {
      english: "We must find sustainable ways to conserve natural resources for future generations.",
      chinese: "我們必須找到永續的方法，為後代子孫節約自然資源。",
      grammar_point: "resources 在指大自然資源時，幾乎恆用複數形"
    },
    vocabulary: [
      { word: "sustainable", pos: "adj.", chinese: "永續的" },
      { word: "conserve", pos: "v.", chinese: "節約、保護" },
      { word: "generation", pos: "n.", chinese: "世代" }
    ],
    sentence_pattern: { pattern: "S + should conserve natural resources", example: "Taiwan is not rich in natural resources." }
  },
  {
    phrase: "public transport",
    type: "形容詞 + 名詞",
    chinese: "大眾運輸",
    keywords: ["public", "transport"],
    example: {
      english: "Taking public transport instead of driving is a great way to reduce carbon emissions.",
      chinese: "搭乘大眾運輸代替開車是減少碳排放的好方法。",
      grammar_point: "take public transport（搭乘大眾運輸，美式常用 public transportation）"
    },
    vocabulary: [
      { word: "instead of", pos: "prep.", chinese: "代替、而不是" },
      { word: "reduce", pos: "v.", chinese: "減少" },
      { word: "carbon emission", pos: "n.", chinese: "碳排放" }
    ],
    sentence_pattern: { pattern: "S + take public transport to + 地方", example: "Public transport in this city is very convenient." }
  },
  {
    phrase: "daily routine",
    type: "形容詞 + 名詞",
    chinese: "日常作息、日常慣例",
    keywords: ["daily", "routine"],
    example: {
      english: "Exercising for 30 minutes in the morning has become an important part of my daily routine.",
      chinese: "早上運動30分鐘已經成為我日常作息的重要部分。",
      grammar_point: "daily routine（規律且每天重複的行程）"
    },
    vocabulary: [
      { word: "daily", pos: "adj.", chinese: "每天的" },
      { word: "routine", pos: "n.", chinese: "慣例、常規" },
      { word: "part", pos: "n.", chinese: "部分" }
    ],
    sentence_pattern: { pattern: "N + is part of my daily routine", example: "Reading the news is his daily routine." }
  },
  {
    phrase: "fast food",
    type: "形容詞 + 名詞",
    chinese: "速食",
    keywords: ["fast", "food"],
    example: {
      english: "Eating too much fast food can easily lead to obesity and other serious health problems.",
      chinese: "吃太多速食很容易導致肥胖和其他嚴重的健康問題。",
      grammar_point: "fast food 是不可數名詞"
    },
    vocabulary: [
      { word: "lead to", pos: "phr. v.", chinese: "導致" },
      { word: "obesity", pos: "n.", chinese: "肥胖" },
      { word: "serious", pos: "adj.", chinese: "嚴重的" }
    ],
    sentence_pattern: { pattern: "S + eat too much fast food", example: "Fast food is convenient but unhealthy." }
  },
  {
    phrase: "facing extinction",
    type: "動詞/分詞 + 名詞",
    chinese: "面臨絕種",
    keywords: ["facing", "extinction", "face"],
    example: {
      english: "Many species of rare animals are currently facing extinction due to severe habitat loss.",
      chinese: "由於嚴重的棲息地喪失，許多稀有動物物種目前正面臨絕種。",
      grammar_point: "face extinction（面臨絕種，facing常作為分詞修飾名詞或進行式）"
    },
    vocabulary: [
      { word: "species", pos: "n.", chinese: "物種" },
      { word: "extinction", pos: "n.", chinese: "絕種、滅絕" },
      { word: "habitat", pos: "n.", chinese: "棲息地" }
    ],
    sentence_pattern: { pattern: "N + is facing extinction", example: "The polar bear is facing extinction." }
  },
  // ── 動詞片語 (Phrasal Verbs / Verb + Preposition) ─────────────────────────
  {
    phrase: "depend on",
    type: "動詞片語",
    chinese: "依賴、取決於",
    keywords: ["depend", "on"],
    example: {
      english: "The success of the outdoor event will heavily depend on the weather tomorrow.",
      chinese: "這場戶外活動的成功將很大程度上取決於明天的天氣。",
      grammar_point: "depend on + N/V-ing（常搭配副詞 heavily/entirely）"
    },
    vocabulary: [
      { word: "outdoor", pos: "adj.", chinese: "戶外的" },
      { word: "heavily", pos: "adv.", chinese: "非常、嚴重地" }
    ],
    sentence_pattern: { pattern: "S + depend on + N", example: "It depends on what you want to do." }
  },
  {
    phrase: "rely on",
    type: "動詞片語",
    chinese: "依靠、信賴",
    keywords: ["rely", "on"],
    example: {
      english: "We shouldn't rely solely on smartphones for all our communication.",
      chinese: "我們不應該完全依賴智慧型手機來進行所有的溝通。",
      grammar_point: "rely on 等同於 count on / depend on"
    },
    vocabulary: [
      { word: "solely", pos: "adv.", chinese: "僅僅、完全" },
      { word: "communication", pos: "n.", chinese: "溝通、通訊" }
    ],
    sentence_pattern: { pattern: "S + rely on + N + to V", example: "You can always rely on him for help." }
  },
  {
    phrase: "look forward to",
    type: "動詞片語",
    chinese: "期待、盼望",
    keywords: ["look", "forward", "to"],
    example: {
      english: "I am really looking forward to hearing from you soon.",
      chinese: "我真的很期待能很快收到你的回信。",
      grammar_point: "【學測必考】to 是介系詞，後面必須接 名詞(N) 或 動名詞(V-ing)！"
    },
    vocabulary: [
      { word: "hear from", pos: "phr. v.", chinese: "收到...的消息" }
    ],
    sentence_pattern: { pattern: "S + be looking forward to + V-ing", example: "We look forward to your visit." }
  },
  {
    phrase: "deal with",
    type: "動詞片語",
    chinese: "處理、應付",
    keywords: ["deal", "with"],
    example: {
      english: "The government needs to find effective ways to deal with the housing crisis.",
      chinese: "政府需要找到有效的方法來處理房屋危機。",
      grammar_point: "deal with + 問題/人（同義詞 tackle, address, handle）"
    },
    vocabulary: [
      { word: "effective", pos: "adj.", chinese: "有效的" },
      { word: "crisis", pos: "n.", chinese: "危機" }
    ],
    sentence_pattern: { pattern: "how to deal with + N", example: "I don't know how to deal with this problem." }
  },
  {
    phrase: "cope with",
    type: "動詞片語",
    chinese: "妥善處理、應付(困難)",
    keywords: ["cope", "with"],
    example: {
      english: "Listening to music is her way to cope with the immense stress from work.",
      chinese: "聽音樂是她應付工作龐大壓力的方法。",
      grammar_point: "cope with 通常用於處理「有難度的問題、壓力或情緒」"
    },
    vocabulary: [
      { word: "immense", pos: "adj.", chinese: "龐大的" },
      { word: "stress", pos: "n.", chinese: "壓力" }
    ],
    sentence_pattern: { pattern: "S + cope with + N", example: "It's hard to cope with the loss of a loved one." }
  },
  {
    phrase: "focus on",
    type: "動詞片語",
    chinese: "專注於、集中於",
    keywords: ["focus", "on"],
    example: {
      english: "You should focus on your studies instead of spending hours playing video games.",
      chinese: "你應該專注於課業，而不是花幾個小時打電動。",
      grammar_point: "focus on + N/V-ing（同義詞 concentrate on）"
    },
    vocabulary: [
      { word: "studies", pos: "n.", chinese: "課業（常用複數）" },
      { word: "instead of", pos: "prep.", chinese: "而不是" }
    ],
    sentence_pattern: { pattern: "S + focus on + V-ing", example: "We need to focus on the main issue." }
  },
  {
    phrase: "consist of",
    type: "動詞片語",
    chinese: "由...組成",
    keywords: ["consist", "of"],
    example: {
      english: "The committee consists of ten experts from different scientific fields.",
      chinese: "該委員會由來自不同科學領域的十位專家組成。",
      grammar_point: "【學測必考】consist of 絕對沒有被動語態！不可寫 is consisted of"
    },
    vocabulary: [
      { word: "committee", pos: "n.", chinese: "委員會" },
      { word: "expert", pos: "n.", chinese: "專家" }
    ],
    sentence_pattern: { pattern: "A consists of B", example: "Water consists of hydrogen and oxygen." }
  },
  {
    phrase: "turn out",
    type: "動詞片語",
    chinese: "結果是、證明是",
    keywords: ["turn", "out"],
    example: {
      english: "I thought it would rain, but it turned out to be a beautiful sunny day.",
      chinese: "我以為會下雨，但結果卻是個美麗的晴天。",
      grammar_point: "turn out (to be) + N/Adj，或 turn out that + 子句"
    },
    vocabulary: [
      { word: "beautiful", pos: "adj.", chinese: "美麗的" },
      { word: "sunny", pos: "adj.", chinese: "晴朗的" }
    ],
    sentence_pattern: { pattern: "It turned out that + S + V", example: "The rumor turned out to be true." }
  },
  {
    phrase: "carry out",
    type: "動詞片語",
    chinese: "執行、進行",
    keywords: ["carry", "out"],
    example: {
      english: "The scientists will carry out a series of experiments to test the new drug.",
      chinese: "科學家將進行一系列的實驗來測試這種新藥。",
      grammar_point: "carry out + plan/survey/experiment（執行計畫/調查/實驗）"
    },
    vocabulary: [
      { word: "a series of", pos: "phr.", chinese: "一系列的" },
      { word: "experiment", pos: "n.", chinese: "實驗" }
    ],
    sentence_pattern: { pattern: "S + carry out + N", example: "The government carried out a strict policy." }
  },
  {
    phrase: "set off",
    type: "動詞片語",
    chinese: "出發、引發",
    keywords: ["set", "off"],
    example: {
      english: "We need to set off early tomorrow morning to avoid the rush hour traffic.",
      chinese: "我們明天早上需要提早出發，以避開尖峰時段的交通。",
      grammar_point: "set off 可指「動身出發」，也可指「引發(警報等)」"
    },
    vocabulary: [
      { word: "avoid", pos: "v.", chinese: "避開" },
      { word: "rush hour", pos: "n.", chinese: "尖峰時間" }
    ],
    sentence_pattern: { pattern: "S + set off for + 地方", example: "What time are we setting off?" }
  },
  {
    phrase: "come across",
    type: "動詞片語",
    chinese: "偶然發現、巧遇",
    keywords: ["come", "across"],
    example: {
      english: "I came across some old photos of my grandparents while cleaning the attic.",
      chinese: "我在打掃閣樓時偶然發現了一些我祖父母的舊照片。",
      grammar_point: "come across + N（不期而遇，無被動用法）"
    },
    vocabulary: [
      { word: "attic", pos: "n.", chinese: "閣樓" },
      { word: "while", pos: "conj.", chinese: "當...的時候" }
    ],
    sentence_pattern: { pattern: "S + came across + N", example: "He came across a rare book in the store." }
  },
  {
    phrase: "make up for",
    type: "動詞片語",
    chinese: "彌補、補償",
    keywords: ["make", "up", "for"],
    example: {
      english: "He bought her a beautiful necklace to make up for forgetting their anniversary.",
      chinese: "他買了一條美麗的項鍊給她，以彌補忘記他們的紀念日。",
      grammar_point: "make up for + N/V-ing（後面的 for 是介系詞）"
    },
    vocabulary: [
      { word: "necklace", pos: "n.", chinese: "項鍊" },
      { word: "anniversary", pos: "n.", chinese: "紀念日" }
    ],
    sentence_pattern: { pattern: "S + make up for + V-ing", example: "Nothing can make up for lost time." }
  },
  {
    phrase: "give up",
    type: "動詞片語",
    chinese: "放棄",
    keywords: ["give", "up"],
    example: {
      english: "No matter how difficult the situation is, you should never give up on your dreams.",
      chinese: "無論情況多麼困難，你都不應該放棄你的夢想。",
      grammar_point: "give up + V-ing（放棄做某事）；give up on + N（對...死心/放棄）"
    },
    vocabulary: [
      { word: "no matter how", pos: "phr.", chinese: "無論多麼" },
      { word: "situation", pos: "n.", chinese: "情況" }
    ],
    sentence_pattern: { pattern: "S + give up + V-ing", example: "He gave up smoking last year." }
  },
  {
    phrase: "put off",
    type: "動詞片語",
    chinese: "延期、推遲",
    keywords: ["put", "off"],
    example: {
      english: "The outdoor concert has been put off until next week due to the approaching typhoon.",
      chinese: "由於颱風逼近，戶外演唱會已被延期到下週。",
      grammar_point: "【學測必考】put off + V-ing（延遲做某事）；同義詞 delay, postpone"
    },
    vocabulary: [
      { word: "approaching", pos: "adj.", chinese: "接近的、逼近的" },
      { word: "typhoon", pos: "n.", chinese: "颱風" }
    ],
    sentence_pattern: { pattern: "S + put off + V-ing", example: "Don't put off doing your homework." }
  },
  {
    phrase: "lead to",
    type: "動詞片語",
    chinese: "導致、通往",
    keywords: ["lead", "to"],
    example: {
      english: "Eating too much fast food and lacking exercise can lead to serious health problems.",
      chinese: "吃太多速食且缺乏運動會導致嚴重的健康問題。",
      grammar_point: "【學測必考】to 是介系詞，後面必須加 名詞(N) 或 動名詞(V-ing)！"
    },
    vocabulary: [
      { word: "lack", pos: "v.", chinese: "缺乏" },
      { word: "serious", pos: "adj.", chinese: "嚴重的" }
    ],
    sentence_pattern: { pattern: "A leads to B", example: "His hard work led to his success." }
  },
  {
    phrase: "go through",
    type: "動詞片語",
    chinese: "經歷、仔細檢查",
    keywords: ["go", "through"],
    example: {
      english: "You have to go through a lot of tough training to become a professional athlete.",
      chinese: "你必須經歷許多艱苦的訓練才能成為一名職業運動員。",
      grammar_point: "go through = experience（經歷），也可作「翻找、審查」"
    },
    vocabulary: [
      { word: "tough", pos: "adj.", chinese: "艱難的" },
      { word: "professional", pos: "adj.", chinese: "專業的、職業的" }
    ],
    sentence_pattern: { pattern: "S + go through + N", example: "She went through a difficult time last year." }
  },

  // ── 其他必考片語 (介系詞片語 / 名詞片語) ───────────────────────────
  {
    phrase: "instead of",
    type: "介系詞片語",
    chinese: "而不是、代替",
    keywords: ["instead", "of"],
    example: {
      english: "You should eat more fresh vegetables instead of relying on vitamin pills.",
      chinese: "你應該多吃新鮮蔬菜，而不是依賴維他命藥丸。",
      grammar_point: "instead of 為介系詞，後接名詞或 V-ing。"
    },
    vocabulary: [
      { word: "fresh", pos: "adj.", chinese: "新鮮的" },
      { word: "vitamin pill", pos: "n.", chinese: "維他命藥丸" }
    ],
    sentence_pattern: { pattern: "S + V + instead of + V-ing", example: "He played games instead of studying." }
  },
  {
    phrase: "because of",
    type: "介系詞片語",
    chinese: "因為、由於",
    keywords: ["because", "of"],
    example: {
      english: "The flight was delayed for several hours because of the heavy snowstorm.",
      chinese: "因為暴風雪，航班延誤了好幾個小時。",
      grammar_point: "because of + 名詞（不可接子句！同義詞 due to）"
    },
    vocabulary: [
      { word: "delay", pos: "v.", chinese: "延誤" },
      { word: "snowstorm", pos: "n.", chinese: "暴風雪" }
    ],
    sentence_pattern: { pattern: "S + V + because of + N", example: "She stayed home because of the rain." }
  },
  {
    phrase: "in terms of",
    type: "介系詞片語",
    chinese: "就...而言、在...方面",
    keywords: ["in", "terms", "of"],
    example: {
      english: "In terms of safety and fuel efficiency, this car is the best choice on the market.",
      chinese: "就安全性和燃油效率而言，這輛車是市場上的最佳選擇。",
      grammar_point: "in terms of（常用於引出要討論的特定面向，作文超好用）"
    },
    vocabulary: [
      { word: "safety", pos: "n.", chinese: "安全性" },
      { word: "efficiency", pos: "n.", chinese: "效率" }
    ],
    sentence_pattern: { pattern: "In terms of N, S + V", example: "The job is great in terms of salary." }
  },
  {
    phrase: "on behalf of",
    type: "介系詞片語",
    chinese: "代表...",
    keywords: ["on", "behalf", "of"],
    example: {
      english: "On behalf of the entire school, I would like to thank you for your generous donation.",
      chinese: "我謹代表全校，感謝您慷慨的捐贈。",
      grammar_point: "on behalf of + 人/團體（正式用語，代表某方發言或行動）"
    },
    vocabulary: [
      { word: "entire", pos: "adj.", chinese: "整個的" },
      { word: "generous", pos: "adj.", chinese: "慷慨的" },
      { word: "donation", pos: "n.", chinese: "捐款、捐贈" }
    ],
    sentence_pattern: { pattern: "On behalf of + N, S + V", example: "He accepted the award on behalf of his team." }
  },
  {
    phrase: "sense of humor",
    type: "名詞片語",
    chinese: "幽默感",
    keywords: ["sense", "humor"],
    example: {
      english: "Having a good sense of humor can help you make friends easily in a new environment.",
      chinese: "擁有良好的幽默感能幫助你在新環境中輕鬆交到朋友。",
      grammar_point: "a sense of + 抽象名詞（...感）"
    },
    vocabulary: [
      { word: "humor", pos: "n.", chinese: "幽默" },
      { word: "environment", pos: "n.", chinese: "環境" }
    ],
    sentence_pattern: { pattern: "S + have a good sense of humor", example: "My dad has a great sense of humor." }
  },
  {
    phrase: "sense of achievement",
    type: "名詞片語",
    chinese: "成就感",
    keywords: ["sense", "achievement"],
    example: {
      english: "Finishing the marathon gave him a great sense of achievement and pride.",
      chinese: "完成馬拉松讓他產生了極大的成就感與自豪。",
      grammar_point: "give sb a sense of achievement（給某人成就感）"
    },
    vocabulary: [
      { word: "marathon", pos: "n.", chinese: "馬拉松" },
      { word: "pride", pos: "n.", chinese: "自豪、驕傲" }
    ],
    sentence_pattern: { pattern: "V-ing gives O a sense of achievement", example: "Solving the puzzle gave me a sense of achievement." }
  },
  {
    phrase: "sense of security",
    type: "名詞片語",
    chinese: "安全感",
    keywords: ["sense", "security"],
    example: {
      english: "A stable job and a loving family provide her with a strong sense of security.",
      chinese: "穩定的工作和充滿愛的家庭為她提供了強烈的安全感。",
      grammar_point: "provide sb with a sense of security（提供安全感）"
    },
    vocabulary: [
      { word: "stable", pos: "adj.", chinese: "穩定的" },
      { word: "loving", pos: "adj.", chinese: "充滿愛的" },
      { word: "security", pos: "n.", chinese: "安全、保障" }
    ],
    sentence_pattern: { pattern: "N + provides a sense of security", example: "Money doesn't always bring a sense of security." }
  },
  {
    phrase: "fostering empathy",
    type: "動名詞片語",
    chinese: "培養同理心",
    keywords: ["fostering", "empathy"],
    example: {
      english: "Reading literature plays an important role in fostering empathy among children.",
      chinese: "閱讀文學作品在培養兒童同理心方面扮演著重要的角色。",
      grammar_point: "foster (v.) 培養、促進；empathy (n.) 同理心"
    },
    vocabulary: [
      { word: "literature", pos: "n.", chinese: "文學" },
      { word: "foster", pos: "v.", chinese: "培養、促進" },
      { word: "empathy", pos: "n.", chinese: "同理心" }
    ],
    sentence_pattern: { pattern: "S + is important for fostering empathy", example: "Fostering empathy makes us better listeners." }
  },
  {
    phrase: "lack of resources",
    type: "名詞片語",
    chinese: "缺乏資源",
    keywords: ["lack", "resources"],
    example: {
      english: "Many rural schools are struggling with a severe lack of resources and qualified teachers.",
      chinese: "許多鄉村學校正面臨嚴重缺乏資源與合格教師的困境。",
      grammar_point: "lack 此處作為名詞，後接 of；如果是動詞則直接加受詞（lack resources）。"
    },
    vocabulary: [
      { word: "rural", pos: "adj.", chinese: "鄉村的" },
      { word: "struggle", pos: "v.", chinese: "掙扎、努力應付" },
      { word: "qualified", pos: "adj.", chinese: "合格的" }
    ],
    sentence_pattern: { pattern: "S + suffer from a lack of resources", example: "The project failed due to a lack of resources." }
  },
  {
    keyword: "problem",
    collocations: [
      {
        phrase: "pose a problem",
        type: "動詞 + 名詞",
        chinese: "造成問題、構成問題",
        example: {
          english: "The sudden lack of funding poses a serious problem for the research team.",
          chinese: "資金的突然短缺對研究團隊構成了一個嚴重的問題。",
          grammar_point: "pose a problem for + 人/事物（對...造成/構成問題，高級替換詞）"
        },
        vocabulary: [
          { word: "sudden", pos: "adj.", chinese: "突然的" },
          { word: "funding", pos: "n.", chinese: "資金" },
          { word: "pose", pos: "v.", chinese: "造成、引起" }
        ],
        sentence_pattern: {
          pattern: "N + poses a problem for + O",
          example: "This delay poses a problem for our schedule."
        }
      },
      {
        phrase: "encounter a problem",
        type: "動詞 + 名詞",
        chinese: "遭遇問題",
        example: {
          english: "If you encounter any problems during the installation process, please contact our support team.",
          chinese: "如果您在安裝過程中遭遇任何問題，請聯絡我們的支援團隊。",
          grammar_point: "encounter a problem（遭遇困難/問題，語氣比 meet 更正式）"
        },
        vocabulary: [
          { word: "encounter", pos: "v.", chinese: "遭遇、遇到" },
          { word: "installation", pos: "n.", chinese: "安裝" },
          { word: "support", pos: "n.", chinese: "支援" }
        ],
        sentence_pattern: {
          pattern: "If S + encounter a problem, S + V",
          example: "We encountered a minor problem yesterday."
        }
      },
      {
        phrase: "overcome a problem",
        type: "動詞 + 名詞",
        chinese: "克服問題",
        example: {
          english: "With great determination, she finally overcame the problem of stage fright.",
          chinese: "憑藉著極大的決心，她終於克服了怯場的問題。",
          grammar_point: "overcome the problem of + N/V-ing（克服...的問題）"
        },
        vocabulary: [
          { word: "overcome", pos: "v.", chinese: "克服（過去式 overcame）" },
          { word: "determination", pos: "n.", chinese: "決心" },
          { word: "stage fright", pos: "n.", chinese: "怯場" }
        ],
        sentence_pattern: {
          pattern: "S + overcome the problem of + N",
          example: "They worked together to overcome the problem."
        }
      },
      {
        phrase: "cause a problem",
        type: "動詞 + 名詞",
        chinese: "引起問題",
        example: {
          english: "The lack of communication caused a major problem between the two departments.",
          chinese: "缺乏溝通在兩個部門之間引起了一個重大問題。",
          grammar_point: "cause a problem（導致/引發問題）"
        },
        vocabulary: [
          { word: "lack", pos: "n.", chinese: "缺乏" },
          { word: "communication", pos: "n.", chinese: "溝通" },
          { word: "department", pos: "n.", chinese: "部門" }
        ],
        sentence_pattern: {
          pattern: "N + caused a problem between A and B",
          example: "His carelessness caused a big problem."
        }
      },
      {
        phrase: "serious problem",
        type: "形容詞 + 名詞",
        chinese: "嚴重的問題",
        example: {
          english: "Air pollution has become a highly serious problem in many modern cities.",
          chinese: "空氣污染已經成為許多現代城市中極其嚴重的問題。",
          grammar_point: "a serious problem（強烈搭配，不可用 heavy problem）"
        },
        vocabulary: [
          { word: "pollution", pos: "n.", chinese: "污染" },
          { word: "highly", pos: "adv.", chinese: "極度地、高度地" },
          { word: "modern", pos: "adj.", chinese: "現代的" }
        ],
        sentence_pattern: {
          pattern: "N + has become a serious problem.",
          example: "Traffic jam is a serious problem here."
        }
      },
      {
        phrase: "growing problem",
        type: "形容詞/分詞 + 名詞",
        chinese: "日益嚴重的問題",
        example: {
          english: "Childhood obesity is a growing problem in most developed countries.",
          chinese: "兒童肥胖在多數已開發國家是一個日益嚴重的問題。",
          grammar_point: "a growing problem（用現在分詞 growing 表達「逐漸擴大、越來越嚴重」）"
        },
        vocabulary: [
          { word: "childhood", pos: "n.", chinese: "童年" },
          { word: "obesity", pos: "n.", chinese: "肥胖" },
          { word: "developed", pos: "adj.", chinese: "已開發的" }
        ],
        sentence_pattern: {
          pattern: "N + is a growing problem in + 地方",
          example: "Cyberbullying is a growing problem."
        }
      },
      {
        phrase: "complex problem",
        type: "形容詞 + 名詞",
        chinese: "複雜的問題",
        example: {
          english: "The issue of global climate change is a complex problem that requires international cooperation.",
          chinese: "全球氣候變遷的議題是一個需要國際合作的複雜問題。",
          grammar_point: "a complex problem（錯綜複雜、難以單一方法解決的問題）"
        },
        vocabulary: [
          { word: "complex", pos: "adj.", chinese: "複雜的" },
          { word: "require", pos: "v.", chinese: "要求、需要" },
          { word: "cooperation", pos: "n.", chinese: "合作" }
        ],
        sentence_pattern: {
          pattern: "N + is a complex problem.",
          example: "Poverty is a very complex problem."
        }
      },
      {
        phrase: "common problem",
        type: "形容詞 + 名詞",
        chinese: "常見的問題",
        example: {
          english: "Back pain is a common problem for office workers who sit all day.",
          chinese: "背痛對於整天坐著的辦公室員工來說是個常見的問題。",
          grammar_point: "a common problem for + 人（對某族群而言普遍的問題）"
        },
        vocabulary: [
          { word: "back pain", pos: "n.", chinese: "背痛" },
          { word: "common", pos: "adj.", chinese: "常見的、普遍的" },
          { word: "office worker", pos: "n.", chinese: "上班族" }
        ],
        sentence_pattern: {
          pattern: "N + is a common problem for + O",
          example: "Insomnia is a common problem nowadays."
        }
      },
      {
        phrase: "solution to a problem",
        type: "名詞 + 介系詞 + 名詞",
        chinese: "問題的解決方案",
        example: {
          english: "Education is often seen as the best solution to the problem of poverty.",
          chinese: "教育通常被視為解決貧窮問題的最佳方案。",
          grammar_point: "【學測必考陷阱】solution 後面的介系詞必須搭配 to，不能用 of！"
        },
        vocabulary: [
          { word: "solution", pos: "n.", chinese: "解決方案" },
          { word: "poverty", pos: "n.", chinese: "貧窮" }
        ],
        sentence_pattern: {
          pattern: "N + is the solution to the problem.",
          example: "We must find a solution to this problem."
        }
      },
      {
        phrase: "approach to a problem",
        type: "名詞 + 介系詞 + 名詞",
        chinese: "處理問題的方法/途徑",
        example: {
          english: "The new manager has a completely different approach to the problem.",
          chinese: "新經理對於這個問題有一套完全不同的處理方法。",
          grammar_point: "【學測必考陷阱】approach（方法）後面的介系詞同樣必須搭配 to！"
        },
        vocabulary: [
          { word: "manager", pos: "n.", chinese: "經理" },
          { word: "completely", pos: "adv.", chinese: "完全地" },
          { word: "approach", pos: "n.", chinese: "方法、途徑" }
        ],
        sentence_pattern: {
          pattern: "S + have a different approach to the problem.",
          example: "His approach to the problem is creative."
        }
      }
    ]
  },
  {
    keyword: "out",
    collocations: [
      {
        phrase: "out and about",
        type: "慣用語 / 介系詞片語",
        chinese: "活躍地四處走動、(病後)能下床走動",
        example: {
          english: "After a week in bed with the flu, she is finally out and about again.",
          chinese: "因為流感臥床一週後，她終於又能下床四處走動了。",
          grammar_point: "be out and about（指人從疾病中康復，或平時活躍於外出活動）"
        },
        vocabulary: [
          { word: "flu", pos: "n.", chinese: "流行性感冒" },
          { word: "finally", pos: "adv.", chinese: "終於" }
        ],
        sentence_pattern: {
          pattern: "S + be out and about",
          example: "It's good to see you out and about after your surgery."
        }
      },
      {
        phrase: "out of the blue",
        type: "介系詞片語",
        chinese: "突然地、出乎意料地",
        example: {
          english: "I hadn't seen him for years, and then he called me completely out of the blue.",
          chinese: "我好幾年沒見到他了，然後他完全出乎意料地打電話給我。",
          grammar_point: "out of the blue（猶如晴天霹靂般突然發生，常放句尾作副詞）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" }
        ],
        sentence_pattern: {
          pattern: "S + V + out of the blue",
          example: "The decision came totally out of the blue."
        }
      },
      {
        phrase: "out of character",
        type: "介系詞片語",
        chinese: "不符合性格、與平時表現不符",
        example: {
          english: "It was completely out of character for him to shout at the employees.",
          chinese: "他對員工大吼大叫完全不符合他平時的性格。",
          grammar_point: "be out of character for + 人（對某人來說很不尋常/反常）"
        },
        vocabulary: [
          { word: "character", pos: "n.", chinese: "性格、品格" },
          { word: "shout", pos: "v.", chinese: "大吼" },
          { word: "employee", pos: "n.", chinese: "員工" }
        ],
        sentence_pattern: {
          pattern: "It is out of character for O + to V",
          example: "Her sudden anger was very out of character."
        }
      },
      {
        phrase: "out of circulation",
        type: "介系詞片語",
        chinese: "不再流通、(人)不活躍於社交圈",
        example: {
          english: "Since he started his new demanding job, he has been somewhat out of circulation.",
          chinese: "自從他開始那份要求很高的新工作後，他就有些脫離社交圈了。",
          grammar_point: "be out of circulation（可指貨幣、書籍停用，也可指人不再參加社交活動）"
        },
        vocabulary: [
          { word: "circulation", pos: "n.", chinese: "流通、循環" },
          { word: "demanding", pos: "adj.", chinese: "要求高的、費力的" },
          { word: "somewhat", pos: "adv.", chinese: "有點、稍微" }
        ],
        sentence_pattern: {
          pattern: "S + be out of circulation",
          example: "Those old coins are now out of circulation."
        }
      },
      {
        phrase: "out of your depth",
        type: "介系詞片語",
        chinese: "無法駕馭、力不從心",
        example: {
          english: "When they started discussing advanced quantum physics, I felt completely out of my depth.",
          chinese: "當他們開始討論進階的量子物理學時，我感到完全力不從心。",
          grammar_point: "be/feel out of one's depth（超出某人的能力/理解範圍，宛如在深水中踩不到底）"
        },
        vocabulary: [
          { word: "advanced", pos: "adj.", chinese: "進階的、先進的" },
          { word: "quantum physics", pos: "n.", chinese: "量子物理學" },
          { word: "depth", pos: "n.", chinese: "深度" }
        ],
        sentence_pattern: {
          pattern: "S + feel out of one's depth",
          example: "I am out of my depth in this new project."
        }
      },
      {
        phrase: "out of earshot",
        type: "介系詞片語",
        chinese: "在聽不見的距離之外",
        example: {
          english: "We waited until the children were out of earshot before discussing the surprise party.",
          chinese: "我們等到孩子們走遠聽不見了，才開始討論驚喜派對。",
          grammar_point: "be out of earshot（在聽力所及的範圍外；反義詞為 within earshot）"
        },
        vocabulary: [
          { word: "earshot", pos: "n.", chinese: "聽力所及的範圍" },
          { word: "discuss", pos: "v.", chinese: "討論" }
        ],
        sentence_pattern: {
          pattern: "S + be out of earshot",
          example: "Make sure she is out of earshot before you speak."
        }
      },
      {
        phrase: "out of harm's way",
        type: "介系詞片語",
        chinese: "在安全的地方、免於危險",
        example: {
          english: "During the typhoon, we moved all the potted plants indoors to keep them out of harm's way.",
          chinese: "颱風期間，我們把所有盆栽移到室內，讓它們免受破壞。",
          grammar_point: "keep/stay out of harm's way（保持安全無虞）"
        },
        vocabulary: [
          { word: "typhoon", pos: "n.", chinese: "颱風" },
          { word: "potted plant", pos: "n.", chinese: "盆栽" },
          { word: "indoors", pos: "adv.", chinese: "在室內" }
        ],
        sentence_pattern: {
          pattern: "keep O + out of harm's way",
          example: "The police guided the crowd out of harm's way."
        }
      },
      {
        phrase: "out like a light",
        type: "慣用語",
        chinese: "迅速入睡、立刻熟睡",
        example: {
          english: "He was so exhausted after the marathon that he was out like a light as soon as his head hit the pillow.",
          chinese: "馬拉松結束後他太累了，頭一碰到枕頭就立刻睡著了。",
          grammar_point: "be out like a light（非正式用語，形容極快睡著或昏過去）"
        },
        vocabulary: [
          { word: "exhausted", pos: "adj.", chinese: "筋疲力盡的" },
          { word: "marathon", pos: "n.", chinese: "馬拉松" },
          { word: "pillow", pos: "n.", chinese: "枕頭" }
        ],
        sentence_pattern: {
          pattern: "S + be out like a light",
          example: "After drinking the medicine, she was out like a light."
        }
      },
      {
        phrase: "out on a limb",
        type: "慣用語",
        chinese: "處於孤立無援的境地、冒著風險",
        example: {
          english: "I went out on a limb to defend your proposal, so please don't let me down.",
          chinese: "我冒著極大的風險為你的提案辯護，所以請不要讓我失望。",
          grammar_point: "go out on a limb（原意指走到樹枝末端，引申為冒險、孤立無援）"
        },
        vocabulary: [
          { word: "limb", pos: "n.", chinese: "樹枝、肢體" },
          { word: "defend", pos: "v.", chinese: "辯護、防禦" },
          { word: "proposal", pos: "n.", chinese: "提案" }
        ],
        sentence_pattern: {
          pattern: "S + go out on a limb to + V",
          example: "She went out on a limb for her best friend."
        }
      },
      {
        phrase: "out to lunch",
        type: "慣用語",
        chinese: "(口語) 瘋瘋癲癲、心不在焉、不進入狀況",
        example: {
          english: "You must be out to lunch if you think you can finish a one-year project in two days.",
          chinese: "如果你以為能在兩天內完成一年的專案，那你一定是瘋了（頭腦不清楚）。",
          grammar_point: "be out to lunch（俚語，指人不在狀態內或想法荒謬）"
        },
        vocabulary: [
          { word: "project", pos: "n.", chinese: "專案、計畫" },
          { word: "finish", pos: "v.", chinese: "完成" }
        ],
        sentence_pattern: {
          pattern: "S + must be out to lunch.",
          example: "He is totally out to lunch today."
        }
      },
      {
        phrase: "out of the picture",
        type: "介系詞片語",
        chinese: "不再牽涉其中、出局",
        example: {
          english: "Now that his rival is out of the picture, he is very likely to get the promotion.",
          chinese: "既然他的競爭對手已經出局，他很有可能會獲得升遷。",
          grammar_point: "be out of the picture（不再是考量因素、退出競爭）"
        },
        vocabulary: [
          { word: "rival", pos: "n.", chinese: "競爭對手" },
          { word: "likely", pos: "adj.", chinese: "很有可能的" },
          { word: "promotion", pos: "n.", chinese: "升遷" }
        ],
        sentence_pattern: {
          pattern: "S + is out of the picture",
          example: "With him out of the picture, we can finally proceed."
        }
      },
      {
        phrase: "out of your own pocket",
        type: "介系詞片語",
        chinese: "自掏腰包",
        example: {
          english: "Because the company refused to cover the travel expenses, he had to pay for the flight out of his own pocket.",
          chinese: "因為公司拒絕負擔差旅費，他只好自掏腰包支付機票錢。",
          grammar_point: "pay (for sth) out of one's own pocket（用自己的錢支付）"
        },
        vocabulary: [
          { word: "refuse", pos: "v.", chinese: "拒絕" },
          { word: "expense", pos: "n.", chinese: "費用、開支" },
          { word: "flight", pos: "n.", chinese: "航班、機票" }
        ],
        sentence_pattern: {
          pattern: "S + pay out of one's own pocket",
          example: "Teachers often buy supplies out of their own pockets."
        }
      },
      {
        phrase: "out of the question",
        type: "介系詞片語",
        chinese: "不可能的、免談",
        example: {
          english: "Buying a new car right now is completely out of the question because we are trying to save money.",
          chinese: "現在買新車是完全不可能的，因為我們正在努力存錢。",
          grammar_point: "【學測必考】be out of the question（毫無可能，不容討論；注意勿與 out of question 無庸置疑搞混）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" },
          { word: "question", pos: "n.", chinese: "問題、疑問" }
        ],
        sentence_pattern: {
          pattern: "N/V-ing is out of the question.",
          example: "Going out in this storm is out of the question."
        }
      },
      {
        phrase: "out of sight, out of mind",
        type: "諺語 / 慣用語",
        chinese: "眼不見為淨、久不見就忘記",
        example: {
          english: "I hid the chocolates in the cupboard, hoping that out of sight, out of mind would help me eat less.",
          chinese: "我把巧克力藏在櫥櫃裡，希望眼不見為淨能幫我少吃一點。",
          grammar_point: "out of sight, out of mind（常作為獨立子句或插入語使用）"
        },
        vocabulary: [
          { word: "hide", pos: "v.", chinese: "隱藏 (過去式 hid)" },
          { word: "cupboard", pos: "n.", chinese: "櫥櫃" }
        ],
        sentence_pattern: {
          pattern: "Out of sight, out of mind.",
          example: "Since she moved abroad, it's been out of sight, out of mind."
        }
      },
      {
        phrase: "out of sorts",
        type: "介系詞片語",
        chinese: "心情不佳、身體微恙",
        example: {
          english: "She has been feeling a bit out of sorts lately, so she decided to take a day off to rest.",
          chinese: "她最近覺得身體有點不舒服且心情煩躁，所以她決定請一天假休息。",
          grammar_point: "feel/be out of sorts（指稍微生病、無精打采或情緒低落）"
        },
        vocabulary: [
          { word: "lately", pos: "adv.", chinese: "最近" },
          { word: "take a day off", pos: "phr.", chinese: "請一天假" }
        ],
        sentence_pattern: {
          pattern: "S + feel/be out of sorts",
          example: "He was feeling out of sorts after the long trip."
        }
      },
      {
        phrase: "out of sync",
        type: "介系詞片語",
        chinese: "不同步、不協調",
        example: {
          english: "The audio in this video is out of sync with the speaker's lip movements.",
          chinese: "這部影片中的音訊與講者的嘴唇動作不同步。",
          grammar_point: "be out of sync (with N)（與...不一致/不同步；sync為synchronization的縮寫）"
        },
        vocabulary: [
          { word: "audio", pos: "n.", chinese: "音訊、聲音" },
          { word: "sync", pos: "n.", chinese: "同步" },
          { word: "movement", pos: "n.", chinese: "動作" }
        ],
        sentence_pattern: {
          pattern: "A is out of sync with B",
          example: "My schedule is totally out of sync with yours."
        }
      },
      {
        phrase: "out of touch",
        type: "介系詞片語",
        chinese: "脫節、失去聯絡",
        example: {
          english: "The old politician is completely out of touch with what young people care about today.",
          chinese: "這位老政治家與當今許多年輕人在乎的事物完全脫節了。",
          grammar_point: "be out of touch (with N)（與...失去聯繫，或不了解...的現況）"
        },
        vocabulary: [
          { word: "politician", pos: "n.", chinese: "政治人物" },
          { word: "completely", pos: "adv.", chinese: "完全地" }
        ],
        sentence_pattern: {
          pattern: "S + be out of touch with + N",
          example: "We've been out of touch for years."
        }
      },
      {
        phrase: "out of this world",
        type: "介系詞片語",
        chinese: "極好的、棒透了",
        example: {
          english: "The chocolate cake her grandmother baked was simply out of this world.",
          chinese: "她祖母烤的巧克力蛋糕簡直是人間美味（棒透了）。",
          grammar_point: "be out of this world（用來誇飾某物極好，宛如不屬於這個世界的絕世珍品）"
        },
        vocabulary: [
          { word: "simply", pos: "adv.", chinese: "簡直、根本" },
          { word: "bake", pos: "v.", chinese: "烘焙" }
        ],
        sentence_pattern: {
          pattern: "N + is out of this world",
          example: "The view from the top is out of this world."
        }
      }
    ]
  },
  {
    keyword: "out",
    collocations: [
      {
        phrase: "out and about",
        type: "慣用語 / 介系詞片語",
        chinese: "活躍地四處走動、(病後)能下床走動",
        example: {
          english: "After a week in bed with the flu, she is finally out and about again.",
          chinese: "因為流感臥床一週後，她終於又能下床四處走動了。",
          grammar_point: "be out and about（指人從疾病中康復，或平時活躍於外出活動）"
        },
        vocabulary: [
          { word: "flu", pos: "n.", chinese: "流行性感冒" },
          { word: "finally", pos: "adv.", chinese: "終於" }
        ],
        sentence_pattern: {
          pattern: "S + be out and about",
          example: "It's good to see you out and about after your surgery."
        }
      },
      {
        phrase: "out of the blue",
        type: "介系詞片語",
        chinese: "突然地、出乎意料地",
        example: {
          english: "I hadn't seen him for years, and then he called me completely out of the blue.",
          chinese: "我好幾年沒見到他了，然後他完全出乎意料地打電話給我。",
          grammar_point: "out of the blue（猶如晴天霹靂般突然發生，常放句尾作副詞）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" }
        ],
        sentence_pattern: {
          pattern: "S + V + out of the blue",
          example: "The decision came totally out of the blue."
        }
      },
      {
        phrase: "out of character",
        type: "介系詞片語",
        chinese: "不符合性格、與平時表現不符",
        example: {
          english: "It was completely out of character for him to shout at the employees.",
          chinese: "他對員工大吼大叫完全不符合他平時的性格。",
          grammar_point: "be out of character for + 人（對某人來說很不尋常/反常）"
        },
        vocabulary: [
          { word: "character", pos: "n.", chinese: "性格、品格" },
          { word: "shout", pos: "v.", chinese: "大吼" },
          { word: "employee", pos: "n.", chinese: "員工" }
        ],
        sentence_pattern: {
          pattern: "It is out of character for O + to V",
          example: "Her sudden anger was very out of character."
        }
      },
      {
        phrase: "out of circulation",
        type: "介系詞片語",
        chinese: "不再流通、(人)不活躍於社交圈",
        example: {
          english: "Since he started his new demanding job, he has been somewhat out of circulation.",
          chinese: "自從他開始那份要求很高的新工作後，他就有些脫離社交圈了。",
          grammar_point: "be out of circulation（可指貨幣、書籍停用，也可指人不再參加社交活動）"
        },
        vocabulary: [
          { word: "circulation", pos: "n.", chinese: "流通、循環" },
          { word: "demanding", pos: "adj.", chinese: "要求高的、費力的" },
          { word: "somewhat", pos: "adv.", chinese: "有點、稍微" }
        ],
        sentence_pattern: {
          pattern: "S + be out of circulation",
          example: "Those old coins are now out of circulation."
        }
      },
      {
        phrase: "out of your depth",
        type: "介系詞片語",
        chinese: "無法駕馭、力不從心",
        example: {
          english: "When they started discussing advanced quantum physics, I felt completely out of my depth.",
          chinese: "當他們開始討論進階的量子物理學時，我感到完全力不從心。",
          grammar_point: "be/feel out of one's depth（超出某人的能力/理解範圍，宛如在深水中踩不到底）"
        },
        vocabulary: [
          { word: "advanced", pos: "adj.", chinese: "進階的、先進的" },
          { word: "quantum physics", pos: "n.", chinese: "量子物理學" },
          { word: "depth", pos: "n.", chinese: "深度" }
        ],
        sentence_pattern: {
          pattern: "S + feel out of one's depth",
          example: "I am out of my depth in this new project."
        }
      },
      {
        phrase: "out of earshot",
        type: "介系詞片語",
        chinese: "在聽不見的距離之外",
        example: {
          english: "We waited until the children were out of earshot before discussing the surprise party.",
          chinese: "我們等到孩子們走遠聽不見了，才開始討論驚喜派對。",
          grammar_point: "be out of earshot（在聽力所及的範圍外；反義詞為 within earshot）"
        },
        vocabulary: [
          { word: "earshot", pos: "n.", chinese: "聽力所及的範圍" },
          { word: "discuss", pos: "v.", chinese: "討論" }
        ],
        sentence_pattern: {
          pattern: "S + be out of earshot",
          example: "Make sure she is out of earshot before you speak."
        }
      },
      {
        phrase: "out of harm's way",
        type: "介系詞片語",
        chinese: "在安全的地方、免於危險",
        example: {
          english: "During the typhoon, we moved all the potted plants indoors to keep them out of harm's way.",
          chinese: "颱風期間，我們把所有盆栽移到室內，讓它們免受破壞。",
          grammar_point: "keep/stay out of harm's way（保持安全無虞）"
        },
        vocabulary: [
          { word: "typhoon", pos: "n.", chinese: "颱風" },
          { word: "potted plant", pos: "n.", chinese: "盆栽" },
          { word: "indoors", pos: "adv.", chinese: "在室內" }
        ],
        sentence_pattern: {
          pattern: "keep O + out of harm's way",
          example: "The police guided the crowd out of harm's way."
        }
      },
      {
        phrase: "out like a light",
        type: "慣用語",
        chinese: "迅速入睡、立刻熟睡",
        example: {
          english: "He was so exhausted after the marathon that he was out like a light as soon as his head hit the pillow.",
          chinese: "馬拉松結束後他太累了，頭一碰到枕頭就立刻睡著了。",
          grammar_point: "be out like a light（非正式用語，形容極快睡著或昏過去）"
        },
        vocabulary: [
          { word: "exhausted", pos: "adj.", chinese: "筋疲力盡的" },
          { word: "marathon", pos: "n.", chinese: "馬拉松" },
          { word: "pillow", pos: "n.", chinese: "枕頭" }
        ],
        sentence_pattern: {
          pattern: "S + be out like a light",
          example: "After drinking the medicine, she was out like a light."
        }
      },
      {
        phrase: "out on a limb",
        type: "慣用語",
        chinese: "處於孤立無援的境地、冒著風險",
        example: {
          english: "I went out on a limb to defend your proposal, so please don't let me down.",
          chinese: "我冒著極大的風險為你的提案辯護，所以請不要讓我失望。",
          grammar_point: "go out on a limb（原意指走到樹枝末端，引申為冒險、孤立無援）"
        },
        vocabulary: [
          { word: "limb", pos: "n.", chinese: "樹枝、肢體" },
          { word: "defend", pos: "v.", chinese: "辯護、防禦" },
          { word: "proposal", pos: "n.", chinese: "提案" }
        ],
        sentence_pattern: {
          pattern: "S + go out on a limb to + V",
          example: "She went out on a limb for her best friend."
        }
      },
      {
        phrase: "out to lunch",
        type: "慣用語",
        chinese: "(口語) 瘋瘋癲癲、心不在焉、不進入狀況",
        example: {
          english: "You must be out to lunch if you think you can finish a one-year project in two days.",
          chinese: "如果你以為能在兩天內完成一年的專案，那你一定是瘋了（頭腦不清楚）。",
          grammar_point: "be out to lunch（俚語，指人不在狀態內或想法荒謬）"
        },
        vocabulary: [
          { word: "project", pos: "n.", chinese: "專案、計畫" },
          { word: "finish", pos: "v.", chinese: "完成" }
        ],
        sentence_pattern: {
          pattern: "S + must be out to lunch.",
          example: "He is totally out to lunch today."
        }
      },
      {
        phrase: "out of the picture",
        type: "介系詞片語",
        chinese: "不再牽涉其中、出局",
        example: {
          english: "Now that his rival is out of the picture, he is very likely to get the promotion.",
          chinese: "既然他的競爭對手已經出局，他很有可能會獲得升遷。",
          grammar_point: "be out of the picture（不再是考量因素、退出競爭）"
        },
        vocabulary: [
          { word: "rival", pos: "n.", chinese: "競爭對手" },
          { word: "likely", pos: "adj.", chinese: "很有可能的" },
          { word: "promotion", pos: "n.", chinese: "升遷" }
        ],
        sentence_pattern: {
          pattern: "S + is out of the picture",
          example: "With him out of the picture, we can finally proceed."
        }
      },
      {
        phrase: "out of your own pocket",
        type: "介系詞片語",
        chinese: "自掏腰包",
        example: {
          english: "Because the company refused to cover the travel expenses, he had to pay for the flight out of his own pocket.",
          chinese: "因為公司拒絕負擔差旅費，他只好自掏腰包支付機票錢。",
          grammar_point: "pay (for sth) out of one's own pocket（用自己的錢支付）"
        },
        vocabulary: [
          { word: "refuse", pos: "v.", chinese: "拒絕" },
          { word: "expense", pos: "n.", chinese: "費用、開支" },
          { word: "flight", pos: "n.", chinese: "航班、機票" }
        ],
        sentence_pattern: {
          pattern: "S + pay out of one's own pocket",
          example: "Teachers often buy supplies out of their own pockets."
        }
      },
      {
        phrase: "out of the question",
        type: "介系詞片語",
        chinese: "不可能的、免談",
        example: {
          english: "Buying a new car right now is completely out of the question because we are trying to save money.",
          chinese: "現在買新車是完全不可能的，因為我們正在努力存錢。",
          grammar_point: "【學測必考】be out of the question（毫無可能，不容討論；注意勿與 out of question 無庸置疑搞混）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" },
          { word: "question", pos: "n.", chinese: "問題、疑問" }
        ],
        sentence_pattern: {
          pattern: "N/V-ing is out of the question.",
          example: "Going out in this storm is out of the question."
        }
      },
      {
        phrase: "out of sight, out of mind",
        type: "諺語 / 慣用語",
        chinese: "眼不見為淨、久不見就忘記",
        example: {
          english: "I hid the chocolates in the cupboard, hoping that out of sight, out of mind would help me eat less.",
          chinese: "我把巧克力藏在櫥櫃裡，希望眼不見為淨能幫我少吃一點。",
          grammar_point: "out of sight, out of mind（常作為獨立子句或插入語使用）"
        },
        vocabulary: [
          { word: "hide", pos: "v.", chinese: "隱藏 (過去式 hid)" },
          { word: "cupboard", pos: "n.", chinese: "櫥櫃" }
        ],
        sentence_pattern: {
          pattern: "Out of sight, out of mind.",
          example: "Since she moved abroad, it's been out of sight, out of mind."
        }
      },
      {
        phrase: "out of sorts",
        type: "介系詞片語",
        chinese: "心情不佳、身體微恙",
        example: {
          english: "She has been feeling a bit out of sorts lately, so she decided to take a day off to rest.",
          chinese: "她最近覺得身體有點不舒服且心情煩躁，所以她決定請一天假休息。",
          grammar_point: "feel/be out of sorts（指稍微生病、無精打采或情緒低落）"
        },
        vocabulary: [
          { word: "lately", pos: "adv.", chinese: "最近" },
          { word: "take a day off", pos: "phr.", chinese: "請一天假" }
        ],
        sentence_pattern: {
          pattern: "S + feel/be out of sorts",
          example: "He was feeling out of sorts after the long trip."
        }
      },
      {
        phrase: "out of sync",
        type: "介系詞片語",
        chinese: "不同步、不協調",
        example: {
          english: "The audio in this video is out of sync with the speaker's lip movements.",
          chinese: "這部影片中的音訊與講者的嘴唇動作不同步。",
          grammar_point: "be out of sync (with N)（與...不一致/不同步；sync為synchronization的縮寫）"
        },
        vocabulary: [
          { word: "audio", pos: "n.", chinese: "音訊、聲音" },
          { word: "sync", pos: "n.", chinese: "同步" },
          { word: "movement", pos: "n.", chinese: "動作" }
        ],
        sentence_pattern: {
          pattern: "A is out of sync with B",
          example: "My schedule is totally out of sync with yours."
        }
      },
      {
        phrase: "out of touch",
        type: "介系詞片語",
        chinese: "脫節、失去聯絡",
        example: {
          english: "The old politician is completely out of touch with what young people care about today.",
          chinese: "這位老政治家與當今許多年輕人在乎的事物完全脫節了。",
          grammar_point: "be out of touch (with N)（與...失去聯繫，或不了解...的現況）"
        },
        vocabulary: [
          { word: "politician", pos: "n.", chinese: "政治人物" },
          { word: "completely", pos: "adv.", chinese: "完全地" }
        ],
        sentence_pattern: {
          pattern: "S + be out of touch with + N",
          example: "We've been out of touch for years."
        }
      },
      {
        phrase: "out of this world",
        type: "介系詞片語",
        chinese: "極好的、棒透了",
        example: {
          english: "The chocolate cake her grandmother baked was simply out of this world.",
          chinese: "她祖母烤的巧克力蛋糕簡直是人間美味（棒透了）。",
          grammar_point: "be out of this world（用來誇飾某物極好，宛如不屬於這個世界的絕世珍品）"
        },
        vocabulary: [
          { word: "simply", pos: "adv.", chinese: "簡直、根本" },
          { word: "bake", pos: "v.", chinese: "烘焙" }
        ],
        sentence_pattern: {
          pattern: "N + is out of this world",
          example: "The view from the top is out of this world."
        }
      },
      {
        phrase: "look out for",
        type: "動詞片語",
        chinese: "當心、留意、關照",
        keywords: ["look", "out", "for"],
        example: {
          english: "When driving in the mountains, you need to look out for falling rocks.",
          chinese: "在山區開車時，你需要留意落石。",
          grammar_point: "look out for + N（留心觀察以防危險；也指關照某人）"
        },
        vocabulary: [
          { word: "falling", pos: "adj.", chinese: "掉落的" },
          { word: "rock", pos: "n.", chinese: "岩石" }
        ],
        sentence_pattern: {
          pattern: "S + look out for + N",
          example: "We should always look out for each other."
        }
      },
      {
        phrase: "turn out",
        type: "動詞片語",
        chinese: "結果是、出席",
        keywords: ["turn", "out"],
        example: {
          english: "The weather looked bad in the morning, but it turned out to be a beautiful day.",
          chinese: "早上天氣看起來很糟，但結果卻是個美麗的一天。",
          grammar_point: "turn out (to be) + N/Adj（結果卻是...，也可接 that 子句）"
        },
        vocabulary: [
          { word: "beautiful", pos: "adj.", chinese: "美麗的" }
        ],
        sentence_pattern: {
          pattern: "It turned out that + S + V",
          example: "The rumor turned out to be true."
        }
      },
      {
        phrase: "carry out",
        type: "動詞片語",
        chinese: "執行、實行",
        keywords: ["carry", "out"],
        example: {
          english: "The scientists will carry out a series of experiments to test their theory.",
          chinese: "科學家將執行一系列的實驗來測試他們的理論。",
          grammar_point: "carry out + a plan/experiment/survey（執行計畫/實驗/調查）"
        },
        vocabulary: [
          { word: "a series of", pos: "phr.", chinese: "一系列的" },
          { word: "experiment", pos: "n.", chinese: "實驗" },
          { word: "theory", pos: "n.", chinese: "理論" }
        ],
        sentence_pattern: {
          pattern: "S + carry out + N",
          example: "The hospital carried out the new procedure."
        }
      },
      {
        phrase: "find out",
        type: "動詞片語",
        chinese: "發現、查明",
        keywords: ["find", "out"],
        example: {
          english: "I was shocked to find out that my best friend had been lying to me.",
          chinese: "我很震驚地發現我最好的朋友一直對我說謊。",
          grammar_point: "find out + N / 疑問詞子句 / that子句（透過調查或詢問得知）"
        },
        vocabulary: [
          { word: "shocked", pos: "adj.", chinese: "震驚的" },
          { word: "lie", pos: "v.", chinese: "說謊" }
        ],
        sentence_pattern: {
          pattern: "S + find out + that/Wh- clause",
          example: "We need to find out the truth."
        }
      },
      {
        phrase: "set out",
        type: "動詞片語",
        chinese: "出發、開始(做某事)",
        keywords: ["set", "out"],
        example: {
          english: "They set out on their journey before the sun came up.",
          chinese: "他們在太陽升起前就出發踏上了旅程。",
          grammar_point: "set out on a journey（出發旅行）；set out to + V（著手進行某事）"
        },
        vocabulary: [
          { word: "journey", pos: "n.", chinese: "旅程" }
        ],
        sentence_pattern: {
          pattern: "S + set out to + V",
          example: "He set out to change the world."
        }
      },
      {
        phrase: "break out",
        type: "動詞片語",
        chinese: "爆發(戰爭、火災、疾病)",
        keywords: ["break", "out"],
        example: {
          english: "A massive fire broke out in the old factory late last night.",
          chinese: "昨晚深夜，那座舊工廠爆發了一場大火。",
          grammar_point: "【學測必考】break out 無被動語態！事物自己爆發，不可寫 was broken out"
        },
        vocabulary: [
          { word: "massive", pos: "adj.", chinese: "巨大的、大規模的" },
          { word: "factory", pos: "n.", chinese: "工廠" }
        ],
        sentence_pattern: {
          pattern: "N + broke out + 地方/時間",
          example: "World War II broke out in 1939."
        }
      },
      {
        phrase: "work out",
        type: "動詞片語",
        chinese: "解決、結果圓滿、健身",
        keywords: ["work", "out"],
        example: {
          english: "Don't worry too much; I'm sure things will work out in the end.",
          chinese: "別太擔心；我相信事情最終會圓滿解決的。",
          grammar_point: "work out 可指「事情順利解決」，也可作及物動詞 work out a problem (解決問題) 或不及物動詞「健身」"
        },
        vocabulary: [
          { word: "in the end", pos: "phr.", chinese: "最後、最終" }
        ],
        sentence_pattern: {
          pattern: "Things will work out.",
          example: "He works out at the gym every day."
        }
      },
      {
        phrase: "run out of",
        type: "動詞片語",
        chinese: "用盡、耗盡",
        keywords: ["run", "out", "of"],
        example: {
          english: "We have run out of gas, so we need to find a gas station immediately.",
          chinese: "我們的汽油已經耗盡了，所以我們需要立刻找一家加油站。",
          grammar_point: "run out of + N（把...用光了，主詞通常是「人」）"
        },
        vocabulary: [
          { word: "gas", pos: "n.", chinese: "汽油、瓦斯" },
          { word: "gas station", pos: "n.", chinese: "加油站" },
          { word: "immediately", pos: "adv.", chinese: "立刻" }
        ],
        sentence_pattern: {
          pattern: "S + run out of + N",
          example: "I am running out of patience."
        }
      },
      {
        phrase: "stand out",
        type: "動詞片語",
        chinese: "突出、顯眼",
        keywords: ["stand", "out"],
        example: {
          english: "Her bright red hair makes her really stand out from the crowd.",
          chinese: "她鮮紅的頭髮讓她在人群中非常顯眼。",
          grammar_point: "stand out from the crowd（在人群中脫穎而出）"
        },
        vocabulary: [
          { word: "bright", pos: "adj.", chinese: "明亮的、鮮豔的" },
          { word: "crowd", pos: "n.", chinese: "人群" }
        ],
        sentence_pattern: {
          pattern: "S + stand out",
          example: "His amazing performance stood out."
        }
      },
      {
        phrase: "point out",
        type: "動詞片語",
        chinese: "指出",
        keywords: ["point", "out"],
        example: {
          english: "The teacher pointed out several grammar mistakes in my essay.",
          chinese: "老師指出了我作文裡的幾個文法錯誤。",
          grammar_point: "point out + N / point out that + 子句（明確指出某事）"
        },
        vocabulary: [
          { word: "several", pos: "adj.", chinese: "幾個的" },
          { word: "grammar", pos: "n.", chinese: "文法" },
          { word: "essay", pos: "n.", chinese: "文章、短文" }
        ],
        sentence_pattern: {
          pattern: "S + point out + that + S + V",
          example: "He pointed out the flaws in the plan."
        }
      },
      {
        phrase: "keep out",
        type: "動詞片語",
        chinese: "禁止進入、阻擋在外",
        keywords: ["keep", "out"],
        example: {
          english: "The sign on the gate clearly says 'Danger: Keep Out'.",
          chinese: "大門上的告示牌清楚地寫著「危險：禁止進入」。",
          grammar_point: "keep out of + 地方（不進入某地）；keep O out（把某物擋在外面）"
        },
        vocabulary: [
          { word: "sign", pos: "n.", chinese: "標誌、告示牌" },
          { word: "clearly", pos: "adv.", chinese: "清楚地" },
          { word: "danger", pos: "n.", chinese: "危險" }
        ],
        sentence_pattern: {
          pattern: "Keep out of + 地方",
          example: "This coat will keep the cold out."
        }
      },
      {
        phrase: "hand out",
        type: "動詞片語",
        chinese: "分發",
        keywords: ["hand", "out"],
        example: {
          english: "Volunteers were handing out free bottles of water to the marathon runners.",
          chinese: "志工們正在將免費的瓶裝水發給馬拉松跑者。",
          grammar_point: "hand out = distribute（將物品分發給眾人）"
        },
        vocabulary: [
          { word: "volunteer", pos: "n.", chinese: "志工" },
          { word: "bottle", pos: "n.", chinese: "瓶子" },
          { word: "runner", pos: "n.", chinese: "跑者" }
        ],
        sentence_pattern: {
          pattern: "S + hand out + N",
          example: "The teacher handed out the exam papers."
        }
      },
      {
        phrase: "take out",
        type: "動詞片語",
        chinese: "拿出、帶...出去、外帶",
        keywords: ["take", "out"],
        example: {
          english: "Please remember to take out the trash before you go to bed.",
          chinese: "睡覺前請記得把垃圾拿出去倒。",
          grammar_point: "take out the trash (倒垃圾)；亦可作 take someone out (帶某人外出/約會)"
        },
        vocabulary: [
          { word: "trash", pos: "n.", chinese: "垃圾" },
          { word: "remember to", pos: "phr.", chinese: "記得去做..." }
        ],
        sentence_pattern: {
          pattern: "S + take O out",
          example: "He took out his wallet to pay."
        }
      },
      {
        phrase: "leave out",
        type: "動詞片語",
        chinese: "遺漏、省略",
        keywords: ["leave", "out"],
        example: {
          english: "When you copy the report, make sure you don't leave out any important details.",
          chinese: "當你抄寫報告時，確保你沒有遺漏任何重要的細節。",
          grammar_point: "leave out = omit（不包含、漏掉某事物或人）"
        },
        vocabulary: [
          { word: "copy", pos: "v.", chinese: "抄寫、複製" },
          { word: "detail", pos: "n.", chinese: "細節" }
        ],
        sentence_pattern: {
          pattern: "S + leave out + N",
          example: "I feel left out when they speak French."
        }
      },
      {
        phrase: "cut out",
        type: "動詞片語",
        chinese: "戒除、刪去、剪下",
        keywords: ["cut", "out"],
        example: {
          english: "My doctor told me that I need to cut out sweet drinks completely.",
          chinese: "我的醫生告訴我，我必須完全戒除含糖飲料。",
          grammar_point: "cut out + N（在飲食或習慣上「停止/戒掉」）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" },
          { word: "sweet", pos: "adj.", chinese: "甜的" }
        ],
        sentence_pattern: {
          pattern: "S + cut out + N",
          example: "She cut out a picture from the magazine."
        }
      },
      {
        phrase: "wear out",
        type: "動詞片語",
        chinese: "磨損、使筋疲力盡",
        keywords: ["wear", "out"],
        example: {
          english: "Walking around the city all day has completely worn me out.",
          chinese: "在城市裡走了一整天讓我完全筋疲力盡了。",
          grammar_point: "wear someone out（使人精疲力盡）；be worn out（物體破舊磨損/人很疲累）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" }
        ],
        sentence_pattern: {
          pattern: "S + wear O out",
          example: "My favorite shoes are worn out."
        }
      },
      {
        phrase: "pull out",
        type: "動詞片語",
        chinese: "拔出、(車輛)駛出、撤退",
        keywords: ["pull", "out"],
        example: {
          english: "The train slowly pulled out of the station, heading towards the capital.",
          chinese: "火車緩緩駛出車站，朝向首都駛去。",
          grammar_point: "pull out of + 地方（車輛離開某處；或指軍隊/企業撤出）"
        },
        vocabulary: [
          { word: "slowly", pos: "adv.", chinese: "緩慢地" },
          { word: "head", pos: "v.", chinese: "朝向、前進" },
          { word: "capital", pos: "n.", chinese: "首都" }
        ],
        sentence_pattern: {
          pattern: "S + pull out of + N",
          example: "The dentist pulled out my bad tooth."
        }
      },
      {
        phrase: "fall out",
        type: "動詞片語",
        chinese: "吵架、脫落",
        keywords: ["fall", "out"],
        example: {
          english: "He fell out with his brother over a disagreement about their family business.",
          chinese: "他因為家族企業的意見不合而跟他的兄弟吵架了。",
          grammar_point: "fall out with + 人 (over 事情)（與某人鬧翻/吵架）"
        },
        vocabulary: [
          { word: "disagreement", pos: "n.", chinese: "意見不合、爭論" },
          { word: "business", pos: "n.", chinese: "企業、生意" }
        ],
        sentence_pattern: {
          pattern: "S + fall out with + O",
          example: "My hair started to fall out."
        }
      },
      {
        phrase: "check out",
        type: "動詞片語",
        chinese: "結帳離開、查看",
        keywords: ["check", "out"],
        example: {
          english: "We need to pack our bags and check out of the hotel by 11 AM.",
          chinese: "我們必須打包行李並在上午 11 點前退房。",
          grammar_point: "check out of a hotel (退房)；check out something (去查看/看一看某物)"
        },
        vocabulary: [
          { word: "pack", pos: "v.", chinese: "打包" },
          { word: "hotel", pos: "n.", chinese: "旅館" }
        ],
        sentence_pattern: {
          pattern: "S + check out of + 地方",
          example: "Check out this new song!"
        }
      },
      {
        phrase: "pass out",
        type: "動詞片語",
        chinese: "昏倒、分發",
        keywords: ["pass", "out"],
        example: {
          english: "The heat in the crowded room was so intense that one of the students passed out.",
          chinese: "擁擠房間裡的悶熱太強烈了，導致其中一名學生昏倒了。",
          grammar_point: "pass out = faint (昏厥)；也可用來代替 hand out (分發物品)"
        },
        vocabulary: [
          { word: "heat", pos: "n.", chinese: "高溫、炎熱" },
          { word: "crowded", pos: "adj.", chinese: "擁擠的" },
          { word: "intense", pos: "adj.", chinese: "強烈的" }
        ],
        sentence_pattern: {
          pattern: "S + pass out",
          example: "Please pass out these books to the class."
        }
      },
      {
        phrase: "blow out",
        type: "動詞片語",
        chinese: "吹熄、爆胎",
        keywords: ["blow", "out"],
        example: {
          english: "Make a wish before you blow out all the candles on your birthday cake.",
          chinese: "在吹熄你生日蛋糕上所有的蠟燭前許個願吧。",
          grammar_point: "blow out the candles (吹熄蠟燭)；如果是輪胎，指「爆胎」"
        },
        vocabulary: [
          { word: "wish", pos: "n.", chinese: "願望" },
          { word: "candle", pos: "n.", chinese: "蠟燭" }
        ],
        sentence_pattern: {
          pattern: "S + blow out + N",
          example: "The wind blew out the match."
        }
      },
      {
        phrase: "die out",
        type: "動詞片語",
        chinese: "滅絕、逐漸消失",
        keywords: ["die", "out"],
        example: {
          english: "Many traditional customs are beginning to die out in modern society.",
          chinese: "許多傳統習俗在現代社會中正開始逐漸消失。",
          grammar_point: "die out = become extinct（物種滅絕或風俗習慣消失）"
        },
        vocabulary: [
          { word: "traditional", pos: "adj.", chinese: "傳統的" },
          { word: "custom", pos: "n.", chinese: "習俗" },
          { word: "modern", pos: "adj.", chinese: "現代的" }
        ],
        sentence_pattern: {
          pattern: "N + is dying out",
          example: "Dinosaurs died out millions of years ago."
        }
      },
      {
        phrase: "rule out",
        type: "動詞片語",
        chinese: "排除...的可能性",
        keywords: ["rule", "out"],
        example: {
          english: "The police have ruled out suicide and are now treating the case as murder.",
          chinese: "警方已排除了自殺的可能性，現在將此案視為謀殺來處理。",
          grammar_point: "rule out the possibility of + N（大考閱測超高頻字：排除...可能）"
        },
        vocabulary: [
          { word: "suicide", pos: "n.", chinese: "自殺" },
          { word: "treat", pos: "v.", chinese: "對待、處理" },
          { word: "murder", pos: "n.", chinese: "謀殺" }
        ],
        sentence_pattern: {
          pattern: "S + rule out + N",
          example: "You cannot rule out this theory completely."
        }
      },
      {
        phrase: "speak out",
        type: "動詞片語",
        chinese: "公開發表意見、大聲說出",
        keywords: ["speak", "out"],
        example: {
          english: "More and more people are speaking out against animal cruelty in the fashion industry.",
          chinese: "越來越多的人公開發表意見反對時尚產業中的虐待動物行為。",
          grammar_point: "speak out against + N（發聲反對某事）"
        },
        vocabulary: [
          { word: "cruelty", pos: "n.", chinese: "殘忍、虐待" },
          { word: "fashion", pos: "n.", chinese: "時尚" },
          { word: "industry", pos: "n.", chinese: "產業" }
        ],
        sentence_pattern: {
          pattern: "S + speak out about/against + N",
          example: "We must speak out for our rights."
        }
      },
      {
        phrase: "watch out",
        type: "動詞片語",
        chinese: "小心、注意",
        keywords: ["watch", "out"],
        example: {
          english: "Watch out for pickpockets when you are traveling in crowded tourist areas.",
          chinese: "當你在擁擠的旅遊區旅行時，要小心扒手。",
          grammar_point: "Watch out! (當感嘆詞單獨使用)；Watch out for + N (提防/留意...)"
        },
        vocabulary: [
          { word: "pickpocket", pos: "n.", chinese: "扒手" },
          { word: "tourist area", pos: "n.", chinese: "旅遊區" }
        ],
        sentence_pattern: {
          pattern: "Watch out for + N",
          example: "Watch out! A car is coming."
        }
      }
    ]
  },
  {
    keyword: "out",
    collocations: [
      {
        phrase: "out and about",
        type: "慣用語 / 介系詞片語",
        chinese: "活躍地四處走動、(病後)能下床走動",
        example: {
          english: "After a week in bed with the flu, she is finally out and about again.",
          chinese: "因為流感臥床一週後，她終於又能下床四處走動了。",
          grammar_point: "be out and about（指人從疾病中康復，或平時活躍於外出活動）"
        },
        vocabulary: [
          { word: "flu", pos: "n.", chinese: "流行性感冒" },
          { word: "finally", pos: "adv.", chinese: "終於" }
        ],
        sentence_pattern: {
          pattern: "S + be out and about",
          example: "It's good to see you out and about after your surgery."
        }
      },
      {
        phrase: "out of the blue",
        type: "介系詞片語",
        chinese: "突然地、出乎意料地",
        example: {
          english: "I hadn't seen him for years, and then he called me completely out of the blue.",
          chinese: "我好幾年沒見到他了，然後他完全出乎意料地打電話給我。",
          grammar_point: "out of the blue（猶如晴天霹靂般突然發生，常放句尾作副詞）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" }
        ],
        sentence_pattern: {
          pattern: "S + V + out of the blue",
          example: "The decision came totally out of the blue."
        }
      },
      {
        phrase: "out of character",
        type: "介系詞片語",
        chinese: "不符合性格、與平時表現不符",
        example: {
          english: "It was completely out of character for him to shout at the employees.",
          chinese: "他對員工大吼大叫完全不符合他平時的性格。",
          grammar_point: "be out of character for + 人（對某人來說很不尋常/反常）"
        },
        vocabulary: [
          { word: "character", pos: "n.", chinese: "性格、品格" },
          { word: "shout", pos: "v.", chinese: "大吼" },
          { word: "employee", pos: "n.", chinese: "員工" }
        ],
        sentence_pattern: {
          pattern: "It is out of character for O + to V",
          example: "Her sudden anger was very out of character."
        }
      },
      {
        phrase: "out of circulation",
        type: "介系詞片語",
        chinese: "不再流通、(人)不活躍於社交圈",
        example: {
          english: "Since he started his new demanding job, he has been somewhat out of circulation.",
          chinese: "自從他開始那份要求很高的新工作後，他就有些脫離社交圈了。",
          grammar_point: "be out of circulation（可指貨幣、書籍停用，也可指人不再參加社交活動）"
        },
        vocabulary: [
          { word: "circulation", pos: "n.", chinese: "流通、循環" },
          { word: "demanding", pos: "adj.", chinese: "要求高的、費力的" },
          { word: "somewhat", pos: "adv.", chinese: "有點、稍微" }
        ],
        sentence_pattern: {
          pattern: "S + be out of circulation",
          example: "Those old coins are now out of circulation."
        }
      },
      {
        phrase: "out of your depth",
        type: "介系詞片語",
        chinese: "無法駕馭、力不從心",
        example: {
          english: "When they started discussing advanced quantum physics, I felt completely out of my depth.",
          chinese: "當他們開始討論進階的量子物理學時，我感到完全力不從心。",
          grammar_point: "be/feel out of one's depth（超出某人的能力/理解範圍，宛如在深水中踩不到底）"
        },
        vocabulary: [
          { word: "advanced", pos: "adj.", chinese: "進階的、先進的" },
          { word: "quantum physics", pos: "n.", chinese: "量子物理學" },
          { word: "depth", pos: "n.", chinese: "深度" }
        ],
        sentence_pattern: {
          pattern: "S + feel out of one's depth",
          example: "I am out of my depth in this new project."
        }
      },
      {
        phrase: "out of earshot",
        type: "介系詞片語",
        chinese: "在聽不見的距離之外",
        example: {
          english: "We waited until the children were out of earshot before discussing the surprise party.",
          chinese: "我們等到孩子們走遠聽不見了，才開始討論驚喜派對。",
          grammar_point: "be out of earshot（在聽力所及的範圍外；反義詞為 within earshot）"
        },
        vocabulary: [
          { word: "earshot", pos: "n.", chinese: "聽力所及的範圍" },
          { word: "discuss", pos: "v.", chinese: "討論" }
        ],
        sentence_pattern: {
          pattern: "S + be out of earshot",
          example: "Make sure she is out of earshot before you speak."
        }
      },
      {
        phrase: "out of harm's way",
        type: "介系詞片語",
        chinese: "在安全的地方、免於危險",
        example: {
          english: "During the typhoon, we moved all the potted plants indoors to keep them out of harm's way.",
          chinese: "颱風期間，我們把所有盆栽移到室內，讓它們免受破壞。",
          grammar_point: "keep/stay out of harm's way（保持安全無虞）"
        },
        vocabulary: [
          { word: "typhoon", pos: "n.", chinese: "颱風" },
          { word: "potted plant", pos: "n.", chinese: "盆栽" },
          { word: "indoors", pos: "adv.", chinese: "在室內" }
        ],
        sentence_pattern: {
          pattern: "keep O + out of harm's way",
          example: "The police guided the crowd out of harm's way."
        }
      },
      {
        phrase: "out like a light",
        type: "慣用語",
        chinese: "迅速入睡、立刻熟睡",
        example: {
          english: "He was so exhausted after the marathon that he was out like a light as soon as his head hit the pillow.",
          chinese: "馬拉松結束後他太累了，頭一碰到枕頭就立刻睡著了。",
          grammar_point: "be out like a light（非正式用語，形容極快睡著或昏過去）"
        },
        vocabulary: [
          { word: "exhausted", pos: "adj.", chinese: "筋疲力盡的" },
          { word: "marathon", pos: "n.", chinese: "馬拉松" },
          { word: "pillow", pos: "n.", chinese: "枕頭" }
        ],
        sentence_pattern: {
          pattern: "S + be out like a light",
          example: "After drinking the medicine, she was out like a light."
        }
      },
      {
        phrase: "out on a limb",
        type: "慣用語",
        chinese: "處於孤立無援的境地、冒著風險",
        example: {
          english: "I went out on a limb to defend your proposal, so please don't let me down.",
          chinese: "我冒著極大的風險為你的提案辯護，所以請不要讓我失望。",
          grammar_point: "go out on a limb（原意指走到樹枝末端，引申為冒險、孤立無援）"
        },
        vocabulary: [
          { word: "limb", pos: "n.", chinese: "樹枝、肢體" },
          { word: "defend", pos: "v.", chinese: "辯護、防禦" },
          { word: "proposal", pos: "n.", chinese: "提案" }
        ],
        sentence_pattern: {
          pattern: "S + go out on a limb to + V",
          example: "She went out on a limb for her best friend."
        }
      },
      {
        phrase: "out to lunch",
        type: "慣用語",
        chinese: "(口語) 瘋瘋癲癲、心不在焉、不進入狀況",
        example: {
          english: "You must be out to lunch if you think you can finish a one-year project in two days.",
          chinese: "如果你以為能在兩天內完成一年的專案，那你一定是瘋了（頭腦不清楚）。",
          grammar_point: "be out to lunch（俚語，指人不在狀態內或想法荒謬）"
        },
        vocabulary: [
          { word: "project", pos: "n.", chinese: "專案、計畫" },
          { word: "finish", pos: "v.", chinese: "完成" }
        ],
        sentence_pattern: {
          pattern: "S + must be out to lunch.",
          example: "He is totally out to lunch today."
        }
      },
      {
        phrase: "out of the picture",
        type: "介系詞片語",
        chinese: "不再牽涉其中、出局",
        example: {
          english: "Now that his rival is out of the picture, he is very likely to get the promotion.",
          chinese: "既然他的競爭對手已經出局，他很有可能會獲得升遷。",
          grammar_point: "be out of the picture（不再是考量因素、退出競爭）"
        },
        vocabulary: [
          { word: "rival", pos: "n.", chinese: "競爭對手" },
          { word: "likely", pos: "adj.", chinese: "很有可能的" },
          { word: "promotion", pos: "n.", chinese: "升遷" }
        ],
        sentence_pattern: {
          pattern: "S + is out of the picture",
          example: "With him out of the picture, we can finally proceed."
        }
      },
      {
        phrase: "out of your own pocket",
        type: "介系詞片語",
        chinese: "自掏腰包",
        example: {
          english: "Because the company refused to cover the travel expenses, he had to pay for the flight out of his own pocket.",
          chinese: "因為公司拒絕負擔差旅費，他只好自掏腰包支付機票錢。",
          grammar_point: "pay (for sth) out of one's own pocket（用自己的錢支付）"
        },
        vocabulary: [
          { word: "refuse", pos: "v.", chinese: "拒絕" },
          { word: "expense", pos: "n.", chinese: "費用、開支" },
          { word: "flight", pos: "n.", chinese: "航班、機票" }
        ],
        sentence_pattern: {
          pattern: "S + pay out of one's own pocket",
          example: "Teachers often buy supplies out of their own pockets."
        }
      },
      {
        phrase: "out of the question",
        type: "介系詞片語",
        chinese: "不可能的、免談",
        example: {
          english: "Buying a new car right now is completely out of the question because we are trying to save money.",
          chinese: "現在買新車是完全不可能的，因為我們正在努力存錢。",
          grammar_point: "【學測必考】be out of the question（毫無可能，不容討論；注意勿與 out of question 無庸置疑搞混）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" },
          { word: "question", pos: "n.", chinese: "問題、疑問" }
        ],
        sentence_pattern: {
          pattern: "N/V-ing is out of the question.",
          example: "Going out in this storm is out of the question."
        }
      },
      {
        phrase: "out of sight, out of mind",
        type: "諺語 / 慣用語",
        chinese: "眼不見為淨、久不見就忘記",
        example: {
          english: "I hid the chocolates in the cupboard, hoping that out of sight, out of mind would help me eat less.",
          chinese: "我把巧克力藏在櫥櫃裡，希望眼不見為淨能幫我少吃一點。",
          grammar_point: "out of sight, out of mind（常作為獨立子句或插入語使用）"
        },
        vocabulary: [
          { word: "hide", pos: "v.", chinese: "隱藏 (過去式 hid)" },
          { word: "cupboard", pos: "n.", chinese: "櫥櫃" }
        ],
        sentence_pattern: {
          pattern: "Out of sight, out of mind.",
          example: "Since she moved abroad, it's been out of sight, out of mind."
        }
      },
      {
        phrase: "out of sorts",
        type: "介系詞片語",
        chinese: "心情不佳、身體微恙",
        example: {
          english: "She has been feeling a bit out of sorts lately, so she decided to take a day off to rest.",
          chinese: "她最近覺得身體有點不舒服且心情煩躁，所以她決定請一天假休息。",
          grammar_point: "feel/be out of sorts（指稍微生病、無精打采或情緒低落）"
        },
        vocabulary: [
          { word: "lately", pos: "adv.", chinese: "最近" },
          { word: "take a day off", pos: "phr.", chinese: "請一天假" }
        ],
        sentence_pattern: {
          pattern: "S + feel/be out of sorts",
          example: "He was feeling out of sorts after the long trip."
        }
      },
      {
        phrase: "out of sync",
        type: "介系詞片語",
        chinese: "不同步、不協調",
        example: {
          english: "The audio in this video is out of sync with the speaker's lip movements.",
          chinese: "這部影片中的音訊與講者的嘴唇動作不同步。",
          grammar_point: "be out of sync (with N)（與...不一致/不同步；sync為synchronization的縮寫）"
        },
        vocabulary: [
          { word: "audio", pos: "n.", chinese: "音訊、聲音" },
          { word: "sync", pos: "n.", chinese: "同步" },
          { word: "movement", pos: "n.", chinese: "動作" }
        ],
        sentence_pattern: {
          pattern: "A is out of sync with B",
          example: "My schedule is totally out of sync with yours."
        }
      },
      {
        phrase: "out of touch",
        type: "介系詞片語",
        chinese: "脫節、失去聯絡",
        example: {
          english: "The old politician is completely out of touch with what young people care about today.",
          chinese: "這位老政治家與當今許多年輕人在乎的事物完全脫節了。",
          grammar_point: "be out of touch (with N)（與...失去聯繫，或不了解...的現況）"
        },
        vocabulary: [
          { word: "politician", pos: "n.", chinese: "政治人物" },
          { word: "completely", pos: "adv.", chinese: "完全地" }
        ],
        sentence_pattern: {
          pattern: "S + be out of touch with + N",
          example: "We've been out of touch for years."
        }
      },
      {
        phrase: "out of this world",
        type: "介系詞片語",
        chinese: "極好的、棒透了",
        example: {
          english: "The chocolate cake her grandmother baked was simply out of this world.",
          chinese: "她祖母烤的巧克力蛋糕簡直是人間美味（棒透了）。",
          grammar_point: "be out of this world（用來誇飾某物極好，宛如不屬於這個世界的絕世珍品）"
        },
        vocabulary: [
          { word: "simply", pos: "adv.", chinese: "簡直、根本" },
          { word: "bake", pos: "v.", chinese: "烘焙" }
        ],
        sentence_pattern: {
          pattern: "N + is out of this world",
          example: "The view from the top is out of this world."
        }
      },
      {
        phrase: "look out for",
        type: "動詞片語",
        chinese: "當心、留意、關照",
        keywords: ["look", "out", "for"],
        example: {
          english: "When driving in the mountains, you need to look out for falling rocks.",
          chinese: "在山區開車時，你需要留意落石。",
          grammar_point: "look out for + N（留心觀察以防危險；也指關照某人）"
        },
        vocabulary: [
          { word: "falling", pos: "adj.", chinese: "掉落的" },
          { word: "rock", pos: "n.", chinese: "岩石" }
        ],
        sentence_pattern: {
          pattern: "S + look out for + N",
          example: "We should always look out for each other."
        }
      },
      {
        phrase: "turn out",
        type: "動詞片語",
        chinese: "結果是、出席",
        keywords: ["turn", "out"],
        example: {
          english: "The weather looked bad in the morning, but it turned out to be a beautiful day.",
          chinese: "早上天氣看起來很糟，但結果卻是個美麗的一天。",
          grammar_point: "turn out (to be) + N/Adj（結果卻是...，也可接 that 子句）"
        },
        vocabulary: [
          { word: "beautiful", pos: "adj.", chinese: "美麗的" }
        ],
        sentence_pattern: {
          pattern: "It turned out that + S + V",
          example: "The rumor turned out to be true."
        }
      },
      {
        phrase: "carry out",
        type: "動詞片語",
        chinese: "執行、實行",
        keywords: ["carry", "out"],
        example: {
          english: "The scientists will carry out a series of experiments to test their theory.",
          chinese: "科學家將執行一系列的實驗來測試他們的理論。",
          grammar_point: "carry out + a plan/experiment/survey（執行計畫/實驗/調查）"
        },
        vocabulary: [
          { word: "a series of", pos: "phr.", chinese: "一系列的" },
          { word: "experiment", pos: "n.", chinese: "實驗" },
          { word: "theory", pos: "n.", chinese: "理論" }
        ],
        sentence_pattern: {
          pattern: "S + carry out + N",
          example: "The hospital carried out the new procedure."
        }
      },
      {
        phrase: "find out",
        type: "動詞片語",
        chinese: "發現、查明",
        keywords: ["find", "out"],
        example: {
          english: "I was shocked to find out that my best friend had been lying to me.",
          chinese: "我很震驚地發現我最好的朋友一直對我說謊。",
          grammar_point: "find out + N / 疑問詞子句 / that子句（透過調查或詢問得知）"
        },
        vocabulary: [
          { word: "shocked", pos: "adj.", chinese: "震驚的" },
          { word: "lie", pos: "v.", chinese: "說謊" }
        ],
        sentence_pattern: {
          pattern: "S + find out + that/Wh- clause",
          example: "We need to find out the truth."
        }
      },
      {
        phrase: "set out",
        type: "動詞片語",
        chinese: "出發、開始(做某事)",
        keywords: ["set", "out"],
        example: {
          english: "They set out on their journey before the sun came up.",
          chinese: "他們在太陽升起前就出發踏上了旅程。",
          grammar_point: "set out on a journey（出發旅行）；set out to + V（著手進行某事）"
        },
        vocabulary: [
          { word: "journey", pos: "n.", chinese: "旅程" }
        ],
        sentence_pattern: {
          pattern: "S + set out to + V",
          example: "He set out to change the world."
        }
      },
      {
        phrase: "break out",
        type: "動詞片語",
        chinese: "爆發(戰爭、火災、疾病)",
        keywords: ["break", "out"],
        example: {
          english: "A massive fire broke out in the old factory late last night.",
          chinese: "昨晚深夜，那座舊工廠爆發了一場大火。",
          grammar_point: "【學測必考】break out 無被動語態！事物自己爆發，不可寫 was broken out"
        },
        vocabulary: [
          { word: "massive", pos: "adj.", chinese: "巨大的、大規模的" },
          { word: "factory", pos: "n.", chinese: "工廠" }
        ],
        sentence_pattern: {
          pattern: "N + broke out + 地方/時間",
          example: "World War II broke out in 1939."
        }
      },
      {
        phrase: "work out",
        type: "動詞片語",
        chinese: "解決、結果圓滿、健身",
        keywords: ["work", "out"],
        example: {
          english: "Don't worry too much; I'm sure things will work out in the end.",
          chinese: "別太擔心；我相信事情最終會圓滿解決的。",
          grammar_point: "work out 可指「事情順利解決」，也可作及物動詞 work out a problem (解決問題) 或不及物動詞「健身」"
        },
        vocabulary: [
          { word: "in the end", pos: "phr.", chinese: "最後、最終" }
        ],
        sentence_pattern: {
          pattern: "Things will work out.",
          example: "He works out at the gym every day."
        }
      },
      {
        phrase: "run out of",
        type: "動詞片語",
        chinese: "用盡、耗盡",
        keywords: ["run", "out", "of"],
        example: {
          english: "We have run out of gas, so we need to find a gas station immediately.",
          chinese: "我們的汽油已經耗盡了，所以我們需要立刻找一家加油站。",
          grammar_point: "run out of + N（把...用光了，主詞通常是「人」）"
        },
        vocabulary: [
          { word: "gas", pos: "n.", chinese: "汽油、瓦斯" },
          { word: "gas station", pos: "n.", chinese: "加油站" },
          { word: "immediately", pos: "adv.", chinese: "立刻" }
        ],
        sentence_pattern: {
          pattern: "S + run out of + N",
          example: "I am running out of patience."
        }
      },
      {
        phrase: "stand out",
        type: "動詞片語",
        chinese: "突出、顯眼",
        keywords: ["stand", "out"],
        example: {
          english: "Her bright red hair makes her really stand out from the crowd.",
          chinese: "她鮮紅的頭髮讓她在人群中非常顯眼。",
          grammar_point: "stand out from the crowd（在人群中脫穎而出）"
        },
        vocabulary: [
          { word: "bright", pos: "adj.", chinese: "明亮的、鮮豔的" },
          { word: "crowd", pos: "n.", chinese: "人群" }
        ],
        sentence_pattern: {
          pattern: "S + stand out",
          example: "His amazing performance stood out."
        }
      },
      {
        phrase: "point out",
        type: "動詞片語",
        chinese: "指出",
        keywords: ["point", "out"],
        example: {
          english: "The teacher pointed out several grammar mistakes in my essay.",
          chinese: "老師指出了我作文裡的幾個文法錯誤。",
          grammar_point: "point out + N / point out that + 子句（明確指出某事）"
        },
        vocabulary: [
          { word: "several", pos: "adj.", chinese: "幾個的" },
          { word: "grammar", pos: "n.", chinese: "文法" },
          { word: "essay", pos: "n.", chinese: "文章、短文" }
        ],
        sentence_pattern: {
          pattern: "S + point out + that + S + V",
          example: "He pointed out the flaws in the plan."
        }
      },
      {
        phrase: "keep out",
        type: "動詞片語",
        chinese: "禁止進入、阻擋在外",
        keywords: ["keep", "out"],
        example: {
          english: "The sign on the gate clearly says 'Danger: Keep Out'.",
          chinese: "大門上的告示牌清楚地寫著「危險：禁止進入」。",
          grammar_point: "keep out of + 地方（不進入某地）；keep O out（把某物擋在外面）"
        },
        vocabulary: [
          { word: "sign", pos: "n.", chinese: "標誌、告示牌" },
          { word: "clearly", pos: "adv.", chinese: "清楚地" },
          { word: "danger", pos: "n.", chinese: "危險" }
        ],
        sentence_pattern: {
          pattern: "Keep out of + 地方",
          example: "This coat will keep the cold out."
        }
      },
      {
        phrase: "hand out",
        type: "動詞片語",
        chinese: "分發",
        keywords: ["hand", "out"],
        example: {
          english: "Volunteers were handing out free bottles of water to the marathon runners.",
          chinese: "志工們正在將免費的瓶裝水發給馬拉松跑者。",
          grammar_point: "hand out = distribute（將物品分發給眾人）"
        },
        vocabulary: [
          { word: "volunteer", pos: "n.", chinese: "志工" },
          { word: "bottle", pos: "n.", chinese: "瓶子" },
          { word: "runner", pos: "n.", chinese: "跑者" }
        ],
        sentence_pattern: {
          pattern: "S + hand out + N",
          example: "The teacher handed out the exam papers."
        }
      },
      {
        phrase: "take out",
        type: "動詞片語",
        chinese: "拿出、帶...出去、外帶",
        keywords: ["take", "out"],
        example: {
          english: "Please remember to take out the trash before you go to bed.",
          chinese: "睡覺前請記得把垃圾拿出去倒。",
          grammar_point: "take out the trash (倒垃圾)；亦可作 take someone out (帶某人外出/約會)"
        },
        vocabulary: [
          { word: "trash", pos: "n.", chinese: "垃圾" },
          { word: "remember to", pos: "phr.", chinese: "記得去做..." }
        ],
        sentence_pattern: {
          pattern: "S + take O out",
          example: "He took out his wallet to pay."
        }
      },
      {
        phrase: "leave out",
        type: "動詞片語",
        chinese: "遺漏、省略",
        keywords: ["leave", "out"],
        example: {
          english: "When you copy the report, make sure you don't leave out any important details.",
          chinese: "當你抄寫報告時，確保你沒有遺漏任何重要的細節。",
          grammar_point: "leave out = omit（不包含、漏掉某事物或人）"
        },
        vocabulary: [
          { word: "copy", pos: "v.", chinese: "抄寫、複製" },
          { word: "detail", pos: "n.", chinese: "細節" }
        ],
        sentence_pattern: {
          pattern: "S + leave out + N",
          example: "I feel left out when they speak French."
        }
      },
      {
        phrase: "cut out",
        type: "動詞片語",
        chinese: "戒除、刪去、剪下",
        keywords: ["cut", "out"],
        example: {
          english: "My doctor told me that I need to cut out sweet drinks completely.",
          chinese: "我的醫生告訴我，我必須完全戒除含糖飲料。",
          grammar_point: "cut out + N（在飲食或習慣上「停止/戒掉」）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" },
          { word: "sweet", pos: "adj.", chinese: "甜的" }
        ],
        sentence_pattern: {
          pattern: "S + cut out + N",
          example: "She cut out a picture from the magazine."
        }
      },
      {
        phrase: "wear out",
        type: "動詞片語",
        chinese: "磨損、使筋疲力盡",
        keywords: ["wear", "out"],
        example: {
          english: "Walking around the city all day has completely worn me out.",
          chinese: "在城市裡走了一整天讓我完全筋疲力盡了。",
          grammar_point: "wear someone out（使人精疲力盡）；be worn out（物體破舊磨損/人很疲累）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" }
        ],
        sentence_pattern: {
          pattern: "S + wear O out",
          example: "My favorite shoes are worn out."
        }
      },
      {
        phrase: "pull out",
        type: "動詞片語",
        chinese: "拔出、(車輛)駛出、撤退",
        keywords: ["pull", "out"],
        example: {
          english: "The train slowly pulled out of the station, heading towards the capital.",
          chinese: "火車緩緩駛出車站，朝向首都駛去。",
          grammar_point: "pull out of + 地方（車輛離開某處；或指軍隊/企業撤出）"
        },
        vocabulary: [
          { word: "slowly", pos: "adv.", chinese: "緩慢地" },
          { word: "head", pos: "v.", chinese: "朝向、前進" },
          { word: "capital", pos: "n.", chinese: "首都" }
        ],
        sentence_pattern: {
          pattern: "S + pull out of + N",
          example: "The dentist pulled out my bad tooth."
        }
      },
      {
        phrase: "fall out",
        type: "動詞片語",
        chinese: "吵架、脫落",
        keywords: ["fall", "out"],
        example: {
          english: "He fell out with his brother over a disagreement about their family business.",
          chinese: "他因為家族企業的意見不合而跟他的兄弟吵架了。",
          grammar_point: "fall out with + 人 (over 事情)（與某人鬧翻/吵架）"
        },
        vocabulary: [
          { word: "disagreement", pos: "n.", chinese: "意見不合、爭論" },
          { word: "business", pos: "n.", chinese: "企業、生意" }
        ],
        sentence_pattern: {
          pattern: "S + fall out with + O",
          example: "My hair started to fall out."
        }
      },
      {
        phrase: "check out",
        type: "動詞片語",
        chinese: "結帳離開、查看",
        keywords: ["check", "out"],
        example: {
          english: "We need to pack our bags and check out of the hotel by 11 AM.",
          chinese: "我們必須打包行李並在上午 11 點前退房。",
          grammar_point: "check out of a hotel (退房)；check out something (去查看/看一看某物)"
        },
        vocabulary: [
          { word: "pack", pos: "v.", chinese: "打包" },
          { word: "hotel", pos: "n.", chinese: "旅館" }
        ],
        sentence_pattern: {
          pattern: "S + check out of + 地方",
          example: "Check out this new song!"
        }
      },
      {
        phrase: "pass out",
        type: "動詞片語",
        chinese: "昏倒、分發",
        keywords: ["pass", "out"],
        example: {
          english: "The heat in the crowded room was so intense that one of the students passed out.",
          chinese: "擁擠房間裡的悶熱太強烈了，導致其中一名學生昏倒了。",
          grammar_point: "pass out = faint (昏厥)；也可用來代替 hand out (分發物品)"
        },
        vocabulary: [
          { word: "heat", pos: "n.", chinese: "高溫、炎熱" },
          { word: "crowded", pos: "adj.", chinese: "擁擠的" },
          { word: "intense", pos: "adj.", chinese: "強烈的" }
        ],
        sentence_pattern: {
          pattern: "S + pass out",
          example: "Please pass out these books to the class."
        }
      },
      {
        phrase: "blow out",
        type: "動詞片語",
        chinese: "吹熄、爆胎",
        keywords: ["blow", "out"],
        example: {
          english: "Make a wish before you blow out all the candles on your birthday cake.",
          chinese: "在吹熄你生日蛋糕上所有的蠟燭前許個願吧。",
          grammar_point: "blow out the candles (吹熄蠟燭)；如果是輪胎，指「爆胎」"
        },
        vocabulary: [
          { word: "wish", pos: "n.", chinese: "願望" },
          { word: "candle", pos: "n.", chinese: "蠟燭" }
        ],
        sentence_pattern: {
          pattern: "S + blow out + N",
          example: "The wind blew out the match."
        }
      },
      {
        phrase: "die out",
        type: "動詞片語",
        chinese: "滅絕、逐漸消失",
        keywords: ["die", "out"],
        example: {
          english: "Many traditional customs are beginning to die out in modern society.",
          chinese: "許多傳統習俗在現代社會中正開始逐漸消失。",
          grammar_point: "die out = become extinct（物種滅絕或風俗習慣消失）"
        },
        vocabulary: [
          { word: "traditional", pos: "adj.", chinese: "傳統的" },
          { word: "custom", pos: "n.", chinese: "習俗" },
          { word: "modern", pos: "adj.", chinese: "現代的" }
        ],
        sentence_pattern: {
          pattern: "N + is dying out",
          example: "Dinosaurs died out millions of years ago."
        }
      },
      {
        phrase: "rule out",
        type: "動詞片語",
        chinese: "排除...的可能性",
        keywords: ["rule", "out"],
        example: {
          english: "The police have ruled out suicide and are now treating the case as murder.",
          chinese: "警方已排除了自殺的可能性，現在將此案視為謀殺來處理。",
          grammar_point: "rule out the possibility of + N（大考閱測超高頻字：排除...可能）"
        },
        vocabulary: [
          { word: "suicide", pos: "n.", chinese: "自殺" },
          { word: "treat", pos: "v.", chinese: "對待、處理" },
          { word: "murder", pos: "n.", chinese: "謀殺" }
        ],
        sentence_pattern: {
          pattern: "S + rule out + N",
          example: "You cannot rule out this theory completely."
        }
      },
      {
        phrase: "speak out",
        type: "動詞片語",
        chinese: "公開發表意見、大聲說出",
        keywords: ["speak", "out"],
        example: {
          english: "More and more people are speaking out against animal cruelty in the fashion industry.",
          chinese: "越來越多的人公開發表意見反對時尚產業中的虐待動物行為。",
          grammar_point: "speak out against + N（發聲反對某事）"
        },
        vocabulary: [
          { word: "cruelty", pos: "n.", chinese: "殘忍、虐待" },
          { word: "fashion", pos: "n.", chinese: "時尚" },
          { word: "industry", pos: "n.", chinese: "產業" }
        ],
        sentence_pattern: {
          pattern: "S + speak out about/against + N",
          example: "We must speak out for our rights."
        }
      },
      {
        phrase: "watch out",
        type: "動詞片語",
        chinese: "小心、注意",
        keywords: ["watch", "out"],
        example: {
          english: "Watch out for pickpockets when you are traveling in crowded tourist areas.",
          chinese: "當你在擁擠的旅遊區旅行時，要小心扒手。",
          grammar_point: "Watch out! (當感嘆詞單獨使用)；Watch out for + N (提防/留意...)"
        },
        vocabulary: [
          { word: "pickpocket", pos: "n.", chinese: "扒手" },
          { word: "tourist area", pos: "n.", chinese: "旅遊區" }
        ],
        sentence_pattern: {
          pattern: "Watch out for + N",
          example: "Watch out! A car is coming."
        }
      }
    ]
  },
  {
    keyword: "advanced",
    collocations: [
      {
        phrase: "utterly ridiculous",
        type: "副詞 + 形容詞",
        chinese: "荒謬至極",
        keywords: ["utterly", "ridiculous"],
        example: {
          english: "His excuse for being late was utterly ridiculous and nobody believed him.",
          chinese: "他遲到的藉口簡直荒謬至極，沒有人相信他。",
          grammar_point: "utterly 修飾負面或極端的形容詞，意為「完全地、徹底地」"
        },
        vocabulary: [
          { word: "utterly", pos: "adv.", chinese: "完全地、徹底地" },
          { word: "ridiculous", pos: "adj.", chinese: "荒謬的" },
          { word: "excuse", pos: "n.", chinese: "藉口" }
        ],
        sentence_pattern: {
          pattern: "N + is utterly ridiculous.",
          example: "The price of this ticket is utterly ridiculous."
        }
      },
      {
        phrase: "dead tired",
        type: "副詞 + 形容詞",
        chinese: "累僵了、精疲力竭",
        keywords: ["dead", "tired"],
        example: {
          english: "After working a 12-hour shift, I was dead tired and went straight to bed.",
          chinese: "上完12小時的班後，我精疲力竭，直接上床睡覺了。",
          grammar_point: "dead 在此作副詞，意思是「完全地、極度地」"
        },
        vocabulary: [
          { word: "shift", pos: "n.", chinese: "輪班" },
          { word: "straight", pos: "adv.", chinese: "直接地" }
        ],
        sentence_pattern: {
          pattern: "S + be dead tired",
          example: "She was dead tired after the marathon."
        }
      },
      {
        phrase: "fast asleep",
        type: "副詞 + 形容詞",
        chinese: "熟睡的",
        keywords: ["fast", "asleep"],
        example: {
          english: "The little baby was fast asleep in her mother's arms.",
          chinese: "小嬰兒在母親的懷裡睡得很熟。",
          grammar_point: "fast 在此作副詞，意為「深深地、沉沉地」，與 quick 無關"
        },
        vocabulary: [
          { word: "asleep", pos: "adj.", chinese: "睡著的" },
          { word: "arms", pos: "n.", chinese: "手臂、懷抱" }
        ],
        sentence_pattern: {
          pattern: "S + fall/be fast asleep",
          example: "He fell fast asleep as soon as he lay down."
        }
      },
      {
        phrase: "painfully slow",
        type: "副詞 + 形容詞",
        chinese: "極度緩慢的",
        keywords: ["painfully", "slow"],
        example: {
          english: "Progress on the construction project has been painfully slow due to a lack of funds.",
          chinese: "由於缺乏資金，這項建築工程的進度慢得令人難受。",
          grammar_point: "painfully slow（慢到令人痛苦/難受的地步）"
        },
        vocabulary: [
          { word: "progress", pos: "n.", chinese: "進度" },
          { word: "construction", pos: "n.", chinese: "建築、施工" },
          { word: "lack", pos: "n.", chinese: "缺乏" }
        ],
        sentence_pattern: {
          pattern: "N + is painfully slow.",
          example: "The internet connection is painfully slow today."
        }
      },
      {
        phrase: "heavily involved",
        type: "副詞 + 過去分詞",
        chinese: "深度參與、牽涉極深",
        keywords: ["heavily", "involved"],
        example: {
          english: "She is heavily involved in local charity work and helps out every weekend.",
          chinese: "她深度參與當地的慈善工作，每個週末都會去幫忙。",
          grammar_point: "be heavily involved in + N（深度參與...）"
        },
        vocabulary: [
          { word: "involved", pos: "adj.", chinese: "參與的、牽涉的" },
          { word: "charity", pos: "n.", chinese: "慈善" }
        ],
        sentence_pattern: {
          pattern: "S + be heavily involved in + N",
          example: "The company is heavily involved in environmental protection."
        }
      },
      {
        phrase: "in broad daylight",
        type: "介系詞 + 形容詞 + 名詞",
        chinese: "在光天化日之下",
        keywords: ["broad", "daylight"],
        example: {
          english: "The robbery occurred right in the middle of the street in broad daylight.",
          chinese: "這場搶劫就發生在光天化日之下的大街中央。",
          grammar_point: "in broad daylight（為固定片語，常接於發生意外、犯罪的語境）"
        },
        vocabulary: [
          { word: "robbery", pos: "n.", chinese: "搶劫" },
          { word: "occur", pos: "v.", chinese: "發生" }
        ],
        sentence_pattern: {
          pattern: "N + happened in broad daylight.",
          example: "His car was stolen in broad daylight."
        }
      },
      {
        phrase: "brief chat",
        type: "形容詞 + 名詞",
        chinese: "簡短的交談",
        keywords: ["brief", "chat"],
        example: {
          english: "I had a brief chat with my professor after the lecture about my thesis.",
          chinese: "演講結束後，我和教授就我的論文進行了簡短的交談。",
          grammar_point: "have a brief chat with + 人（與某人簡短交談）"
        },
        vocabulary: [
          { word: "brief", pos: "adj.", chinese: "簡短的" },
          { word: "lecture", pos: "n.", chinese: "演講、講課" },
          { word: "thesis", pos: "n.", chinese: "論文" }
        ],
        sentence_pattern: {
          pattern: "S + have a brief chat with + O",
          example: "We had a brief chat before the meeting started."
        }
      },
      {
        phrase: "key factor",
        type: "形容詞 + 名詞",
        chinese: "關鍵因素",
        keywords: ["key", "factor"],
        example: {
          english: "Education is a key factor in reducing poverty and improving society.",
          chinese: "教育是減少貧窮和改善社會的關鍵因素。",
          grammar_point: "a key factor in + V-ing/N（在...方面的關鍵因素）"
        },
        vocabulary: [
          { word: "factor", pos: "n.", chinese: "因素" },
          { word: "poverty", pos: "n.", chinese: "貧窮" },
          { word: "improve", pos: "v.", chinese: "改善" }
        ],
        sentence_pattern: {
          pattern: "N + is a key factor in + V-ing",
          example: "Price is a key factor in their decision."
        }
      },
      {
        phrase: "prime example",
        type: "形容詞 + 名詞",
        chinese: "最佳範例、典型例子",
        keywords: ["prime", "example"],
        example: {
          english: "This eco-friendly building is a prime example of modern sustainable architecture.",
          chinese: "這棟環保建築是現代永續建築的最佳範例。",
          grammar_point: "a prime example of + N（...的絕佳例子）"
        },
        vocabulary: [
          { word: "eco-friendly", pos: "adj.", chinese: "環保的" },
          { word: "sustainable", pos: "adj.", chinese: "永續的" },
          { word: "architecture", pos: "n.", chinese: "建築(學)" }
        ],
        sentence_pattern: {
          pattern: "N + is a prime example of + N",
          example: "His success is a prime example of hard work."
        }
      },
      {
        phrase: "major breakthrough",
        type: "形容詞 + 名詞",
        chinese: "重大突破",
        keywords: ["major", "breakthrough"],
        example: {
          english: "Scientists have finally made a major breakthrough in cancer research.",
          chinese: "科學家們終於在癌症研究方面取得了重大突破。",
          grammar_point: "make a major breakthrough in + N（在...方面取得重大突破）"
        },
        vocabulary: [
          { word: "breakthrough", pos: "n.", chinese: "突破" },
          { word: "cancer", pos: "n.", chinese: "癌症" },
          { word: "research", pos: "n.", chinese: "研究" }
        ],
        sentence_pattern: {
          pattern: "S + make a major breakthrough in + N",
          example: "The new technology represents a major breakthrough."
        }
      },
      {
        phrase: "hidden talent",
        type: "形容詞 + 名詞",
        chinese: "隱藏的才能",
        keywords: ["hidden", "talent"],
        example: {
          english: "During the karaoke party, she revealed a hidden talent for singing that surprised everyone.",
          chinese: "在卡拉OK派對上，她展現了令人驚豔的隱藏歌唱才能。",
          grammar_point: "a hidden talent for + V-ing（在...方面有隱藏的才華）"
        },
        vocabulary: [
          { word: "reveal", pos: "v.", chinese: "展現、揭露" },
          { word: "talent", pos: "n.", chinese: "才能、天賦" },
          { word: "surprise", pos: "v.", chinese: "使驚訝" }
        ],
        sentence_pattern: {
          pattern: "S + have/reveal a hidden talent for + N/V-ing",
          example: "He discovered a hidden talent for cooking."
        }
      }
    ]
  },
  {
    keyword: "out",
    collocations: [
      {
        phrase: "out and about",
        type: "慣用語 / 介系詞片語",
        chinese: "活躍地四處走動、(病後)能下床走動",
        example: {
          english: "After a week in bed with the flu, she is finally out and about again.",
          chinese: "因為流感臥床一週後，她終於又能下床四處走動了。",
          grammar_point: "be out and about（指人從疾病中康復，或平時活躍於外出活動）"
        },
        vocabulary: [
          { word: "flu", pos: "n.", chinese: "流行性感冒" },
          { word: "finally", pos: "adv.", chinese: "終於" }
        ],
        sentence_pattern: {
          pattern: "S + be out and about",
          example: "It's good to see you out and about after your surgery."
        }
      },
      {
        phrase: "out of the blue",
        type: "介系詞片語",
        chinese: "突然地、出乎意料地",
        example: {
          english: "I hadn't seen him for years, and then he called me completely out of the blue.",
          chinese: "我好幾年沒見到他了，然後他完全出乎意料地打電話給我。",
          grammar_point: "out of the blue（猶如晴天霹靂般突然發生，常放句尾作副詞）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" }
        ],
        sentence_pattern: {
          pattern: "S + V + out of the blue",
          example: "The decision came totally out of the blue."
        }
      },
      {
        phrase: "out of character",
        type: "介系詞片語",
        chinese: "不符合性格、與平時表現不符",
        example: {
          english: "It was completely out of character for him to shout at the employees.",
          chinese: "他對員工大吼大叫完全不符合他平時的性格。",
          grammar_point: "be out of character for + 人（對某人來說很不尋常/反常）"
        },
        vocabulary: [
          { word: "character", pos: "n.", chinese: "性格、品格" },
          { word: "shout", pos: "v.", chinese: "大吼" },
          { word: "employee", pos: "n.", chinese: "員工" }
        ],
        sentence_pattern: {
          pattern: "It is out of character for O + to V",
          example: "Her sudden anger was very out of character."
        }
      },
      {
        phrase: "out of circulation",
        type: "介系詞片語",
        chinese: "不再流通、(人)不活躍於社交圈",
        example: {
          english: "Since he started his new demanding job, he has been somewhat out of circulation.",
          chinese: "自從他開始那份要求很高的新工作後，他就有些脫離社交圈了。",
          grammar_point: "be out of circulation（可指貨幣、書籍停用，也可指人不再參加社交活動）"
        },
        vocabulary: [
          { word: "circulation", pos: "n.", chinese: "流通、循環" },
          { word: "demanding", pos: "adj.", chinese: "要求高的、費力的" },
          { word: "somewhat", pos: "adv.", chinese: "有點、稍微" }
        ],
        sentence_pattern: {
          pattern: "S + be out of circulation",
          example: "Those old coins are now out of circulation."
        }
      },
      {
        phrase: "out of your depth",
        type: "介系詞片語",
        chinese: "無法駕馭、力不從心",
        example: {
          english: "When they started discussing advanced quantum physics, I felt completely out of my depth.",
          chinese: "當他們開始討論進階的量子物理學時，我感到完全力不從心。",
          grammar_point: "be/feel out of one's depth（超出某人的能力/理解範圍，宛如在深水中踩不到底）"
        },
        vocabulary: [
          { word: "advanced", pos: "adj.", chinese: "進階的、先進的" },
          { word: "quantum physics", pos: "n.", chinese: "量子物理學" },
          { word: "depth", pos: "n.", chinese: "深度" }
        ],
        sentence_pattern: {
          pattern: "S + feel out of one's depth",
          example: "I am out of my depth in this new project."
        }
      },
      {
        phrase: "out of earshot",
        type: "介系詞片語",
        chinese: "在聽不見的距離之外",
        example: {
          english: "We waited until the children were out of earshot before discussing the surprise party.",
          chinese: "我們等到孩子們走遠聽不見了，才開始討論驚喜派對。",
          grammar_point: "be out of earshot（在聽力所及的範圍外；反義詞為 within earshot）"
        },
        vocabulary: [
          { word: "earshot", pos: "n.", chinese: "聽力所及的範圍" },
          { word: "discuss", pos: "v.", chinese: "討論" }
        ],
        sentence_pattern: {
          pattern: "S + be out of earshot",
          example: "Make sure she is out of earshot before you speak."
        }
      },
      {
        phrase: "out of harm's way",
        type: "介系詞片語",
        chinese: "在安全的地方、免於危險",
        example: {
          english: "During the typhoon, we moved all the potted plants indoors to keep them out of harm's way.",
          chinese: "颱風期間，我們把所有盆栽移到室內，讓它們免受破壞。",
          grammar_point: "keep/stay out of harm's way（保持安全無虞）"
        },
        vocabulary: [
          { word: "typhoon", pos: "n.", chinese: "颱風" },
          { word: "potted plant", pos: "n.", chinese: "盆栽" },
          { word: "indoors", pos: "adv.", chinese: "在室內" }
        ],
        sentence_pattern: {
          pattern: "keep O + out of harm's way",
          example: "The police guided the crowd out of harm's way."
        }
      },
      {
        phrase: "out like a light",
        type: "慣用語",
        chinese: "迅速入睡、立刻熟睡",
        example: {
          english: "He was so exhausted after the marathon that he was out like a light as soon as his head hit the pillow.",
          chinese: "馬拉松結束後他太累了，頭一碰到枕頭就立刻睡著了。",
          grammar_point: "be out like a light（非正式用語，形容極快睡著或昏過去）"
        },
        vocabulary: [
          { word: "exhausted", pos: "adj.", chinese: "筋疲力盡的" },
          { word: "marathon", pos: "n.", chinese: "馬拉松" },
          { word: "pillow", pos: "n.", chinese: "枕頭" }
        ],
        sentence_pattern: {
          pattern: "S + be out like a light",
          example: "After drinking the medicine, she was out like a light."
        }
      },
      {
        phrase: "out on a limb",
        type: "慣用語",
        chinese: "處於孤立無援的境地、冒著風險",
        example: {
          english: "I went out on a limb to defend your proposal, so please don't let me down.",
          chinese: "我冒著極大的風險為你的提案辯護，所以請不要讓我失望。",
          grammar_point: "go out on a limb（原意指走到樹枝末端，引申為冒險、孤立無援）"
        },
        vocabulary: [
          { word: "limb", pos: "n.", chinese: "樹枝、肢體" },
          { word: "defend", pos: "v.", chinese: "辯護、防禦" },
          { word: "proposal", pos: "n.", chinese: "提案" }
        ],
        sentence_pattern: {
          pattern: "S + go out on a limb to + V",
          example: "She went out on a limb for her best friend."
        }
      },
      {
        phrase: "out to lunch",
        type: "慣用語",
        chinese: "(口語) 瘋瘋癲癲、心不在焉、不進入狀況",
        example: {
          english: "You must be out to lunch if you think you can finish a one-year project in two days.",
          chinese: "如果你以為能在兩天內完成一年的專案，那你一定是瘋了（頭腦不清楚）。",
          grammar_point: "be out to lunch（俚語，指人不在狀態內或想法荒謬）"
        },
        vocabulary: [
          { word: "project", pos: "n.", chinese: "專案、計畫" },
          { word: "finish", pos: "v.", chinese: "完成" }
        ],
        sentence_pattern: {
          pattern: "S + must be out to lunch.",
          example: "He is totally out to lunch today."
        }
      },
      {
        phrase: "out of the picture",
        type: "介系詞片語",
        chinese: "不再牽涉其中、出局",
        example: {
          english: "Now that his rival is out of the picture, he is very likely to get the promotion.",
          chinese: "既然他的競爭對手已經出局，他很有可能會獲得升遷。",
          grammar_point: "be out of the picture（不再是考量因素、退出競爭）"
        },
        vocabulary: [
          { word: "rival", pos: "n.", chinese: "競爭對手" },
          { word: "likely", pos: "adj.", chinese: "很有可能的" },
          { word: "promotion", pos: "n.", chinese: "升遷" }
        ],
        sentence_pattern: {
          pattern: "S + is out of the picture",
          example: "With him out of the picture, we can finally proceed."
        }
      },
      {
        phrase: "out of your own pocket",
        type: "介系詞片語",
        chinese: "自掏腰包",
        example: {
          english: "Because the company refused to cover the travel expenses, he had to pay for the flight out of his own pocket.",
          chinese: "因為公司拒絕負擔差旅費，他只好自掏腰包支付機票錢。",
          grammar_point: "pay (for sth) out of one's own pocket（用自己的錢支付）"
        },
        vocabulary: [
          { word: "refuse", pos: "v.", chinese: "拒絕" },
          { word: "expense", pos: "n.", chinese: "費用、開支" },
          { word: "flight", pos: "n.", chinese: "航班、機票" }
        ],
        sentence_pattern: {
          pattern: "S + pay out of one's own pocket",
          example: "Teachers often buy supplies out of their own pockets."
        }
      },
      {
        phrase: "out of the question",
        type: "介系詞片語",
        chinese: "不可能的、免談",
        example: {
          english: "Buying a new car right now is completely out of the question because we are trying to save money.",
          chinese: "現在買新車是完全不可能的，因為我們正在努力存錢。",
          grammar_point: "【學測必考】be out of the question（毫無可能，不容討論；注意勿與 out of question 無庸置疑搞混）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" },
          { word: "question", pos: "n.", chinese: "問題、疑問" }
        ],
        sentence_pattern: {
          pattern: "N/V-ing is out of the question.",
          example: "Going out in this storm is out of the question."
        }
      },
      {
        phrase: "out of sight, out of mind",
        type: "諺語 / 慣用語",
        chinese: "眼不見為淨、久不見就忘記",
        example: {
          english: "I hid the chocolates in the cupboard, hoping that out of sight, out of mind would help me eat less.",
          chinese: "我把巧克力藏在櫥櫃裡，希望眼不見為淨能幫我少吃一點。",
          grammar_point: "out of sight, out of mind（常作為獨立子句或插入語使用）"
        },
        vocabulary: [
          { word: "hide", pos: "v.", chinese: "隱藏 (過去式 hid)" },
          { word: "cupboard", pos: "n.", chinese: "櫥櫃" }
        ],
        sentence_pattern: {
          pattern: "Out of sight, out of mind.",
          example: "Since she moved abroad, it's been out of sight, out of mind."
        }
      },
      {
        phrase: "out of sorts",
        type: "介系詞片語",
        chinese: "心情不佳、身體微恙",
        example: {
          english: "She has been feeling a bit out of sorts lately, so she decided to take a day off to rest.",
          chinese: "她最近覺得身體有點不舒服且心情煩躁，所以她決定請一天假休息。",
          grammar_point: "feel/be out of sorts（指稍微生病、無精打采或情緒低落）"
        },
        vocabulary: [
          { word: "lately", pos: "adv.", chinese: "最近" },
          { word: "take a day off", pos: "phr.", chinese: "請一天假" }
        ],
        sentence_pattern: {
          pattern: "S + feel/be out of sorts",
          example: "He was feeling out of sorts after the long trip."
        }
      },
      {
        phrase: "out of sync",
        type: "介系詞片語",
        chinese: "不同步、不協調",
        example: {
          english: "The audio in this video is out of sync with the speaker's lip movements.",
          chinese: "這部影片中的音訊與講者的嘴唇動作不同步。",
          grammar_point: "be out of sync (with N)（與...不一致/不同步；sync為synchronization的縮寫）"
        },
        vocabulary: [
          { word: "audio", pos: "n.", chinese: "音訊、聲音" },
          { word: "sync", pos: "n.", chinese: "同步" },
          { word: "movement", pos: "n.", chinese: "動作" }
        ],
        sentence_pattern: {
          pattern: "A is out of sync with B",
          example: "My schedule is totally out of sync with yours."
        }
      },
      {
        phrase: "out of touch",
        type: "介系詞片語",
        chinese: "脫節、失去聯絡",
        example: {
          english: "The old politician is completely out of touch with what young people care about today.",
          chinese: "這位老政治家與當今許多年輕人在乎的事物完全脫節了。",
          grammar_point: "be out of touch (with N)（與...失去聯繫，或不了解...的現況）"
        },
        vocabulary: [
          { word: "politician", pos: "n.", chinese: "政治人物" },
          { word: "completely", pos: "adv.", chinese: "完全地" }
        ],
        sentence_pattern: {
          pattern: "S + be out of touch with + N",
          example: "We've been out of touch for years."
        }
      },
      {
        phrase: "out of this world",
        type: "介系詞片語",
        chinese: "極好的、棒透了",
        example: {
          english: "The chocolate cake her grandmother baked was simply out of this world.",
          chinese: "她祖母烤的巧克力蛋糕簡直是人間美味（棒透了）。",
          grammar_point: "be out of this world（用來誇飾某物極好，宛如不屬於這個世界的絕世珍品）"
        },
        vocabulary: [
          { word: "simply", pos: "adv.", chinese: "簡直、根本" },
          { word: "bake", pos: "v.", chinese: "烘焙" }
        ],
        sentence_pattern: {
          pattern: "N + is out of this world",
          example: "The view from the top is out of this world."
        }
      },
      {
        phrase: "look out for",
        type: "動詞片語",
        chinese: "當心、留意、關照",
        keywords: ["look", "out", "for"],
        example: {
          english: "When driving in the mountains, you need to look out for falling rocks.",
          chinese: "在山區開車時，你需要留意落石。",
          grammar_point: "look out for + N（留心觀察以防危險；也指關照某人）"
        },
        vocabulary: [
          { word: "falling", pos: "adj.", chinese: "掉落的" },
          { word: "rock", pos: "n.", chinese: "岩石" }
        ],
        sentence_pattern: {
          pattern: "S + look out for + N",
          example: "We should always look out for each other."
        }
      },
      {
        phrase: "turn out",
        type: "動詞片語",
        chinese: "結果是、出席",
        keywords: ["turn", "out"],
        example: {
          english: "The weather looked bad in the morning, but it turned out to be a beautiful day.",
          chinese: "早上天氣看起來很糟，但結果卻是個美麗的一天。",
          grammar_point: "turn out (to be) + N/Adj（結果卻是...，也可接 that 子句）"
        },
        vocabulary: [
          { word: "beautiful", pos: "adj.", chinese: "美麗的" }
        ],
        sentence_pattern: {
          pattern: "It turned out that + S + V",
          example: "The rumor turned out to be true."
        }
      },
      {
        phrase: "carry out",
        type: "動詞片語",
        chinese: "執行、實行",
        keywords: ["carry", "out"],
        example: {
          english: "The scientists will carry out a series of experiments to test their theory.",
          chinese: "科學家將執行一系列的實驗來測試他們的理論。",
          grammar_point: "carry out + a plan/experiment/survey（執行計畫/實驗/調查）"
        },
        vocabulary: [
          { word: "a series of", pos: "phr.", chinese: "一系列的" },
          { word: "experiment", pos: "n.", chinese: "實驗" },
          { word: "theory", pos: "n.", chinese: "理論" }
        ],
        sentence_pattern: {
          pattern: "S + carry out + N",
          example: "The hospital carried out the new procedure."
        }
      },
      {
        phrase: "find out",
        type: "動詞片語",
        chinese: "發現、查明",
        keywords: ["find", "out"],
        example: {
          english: "I was shocked to find out that my best friend had been lying to me.",
          chinese: "我很震驚地發現我最好的朋友一直對我說謊。",
          grammar_point: "find out + N / 疑問詞子句 / that子句（透過調查或詢問得知）"
        },
        vocabulary: [
          { word: "shocked", pos: "adj.", chinese: "震驚的" },
          { word: "lie", pos: "v.", chinese: "說謊" }
        ],
        sentence_pattern: {
          pattern: "S + find out + that/Wh- clause",
          example: "We need to find out the truth."
        }
      },
      {
        phrase: "set out",
        type: "動詞片語",
        chinese: "出發、開始(做某事)",
        keywords: ["set", "out"],
        example: {
          english: "They set out on their journey before the sun came up.",
          chinese: "他們在太陽升起前就出發踏上了旅程。",
          grammar_point: "set out on a journey（出發旅行）；set out to + V（著手進行某事）"
        },
        vocabulary: [
          { word: "journey", pos: "n.", chinese: "旅程" }
        ],
        sentence_pattern: {
          pattern: "S + set out to + V",
          example: "He set out to change the world."
        }
      },
      {
        phrase: "break out",
        type: "動詞片語",
        chinese: "爆發(戰爭、火災、疾病)",
        keywords: ["break", "out"],
        example: {
          english: "A massive fire broke out in the old factory late last night.",
          chinese: "昨晚深夜，那座舊工廠爆發了一場大火。",
          grammar_point: "【學測必考】break out 無被動語態！事物自己爆發，不可寫 was broken out"
        },
        vocabulary: [
          { word: "massive", pos: "adj.", chinese: "巨大的、大規模的" },
          { word: "factory", pos: "n.", chinese: "工廠" }
        ],
        sentence_pattern: {
          pattern: "N + broke out + 地方/時間",
          example: "World War II broke out in 1939."
        }
      },
      {
        phrase: "work out",
        type: "動詞片語",
        chinese: "解決、結果圓滿、健身",
        keywords: ["work", "out"],
        example: {
          english: "Don't worry too much; I'm sure things will work out in the end.",
          chinese: "別太擔心；我相信事情最終會圓滿解決的。",
          grammar_point: "work out 可指「事情順利解決」，也可作及物動詞 work out a problem (解決問題) 或不及物動詞「健身」"
        },
        vocabulary: [
          { word: "in the end", pos: "phr.", chinese: "最後、最終" }
        ],
        sentence_pattern: {
          pattern: "Things will work out.",
          example: "He works out at the gym every day."
        }
      },
      {
        phrase: "run out of",
        type: "動詞片語",
        chinese: "用盡、耗盡",
        keywords: ["run", "out", "of"],
        example: {
          english: "We have run out of gas, so we need to find a gas station immediately.",
          chinese: "我們的汽油已經耗盡了，所以我們需要立刻找一家加油站。",
          grammar_point: "run out of + N（把...用光了，主詞通常是「人」）"
        },
        vocabulary: [
          { word: "gas", pos: "n.", chinese: "汽油、瓦斯" },
          { word: "gas station", pos: "n.", chinese: "加油站" },
          { word: "immediately", pos: "adv.", chinese: "立刻" }
        ],
        sentence_pattern: {
          pattern: "S + run out of + N",
          example: "I am running out of patience."
        }
      },
      {
        phrase: "stand out",
        type: "動詞片語",
        chinese: "突出、顯眼",
        keywords: ["stand", "out"],
        example: {
          english: "Her bright red hair makes her really stand out from the crowd.",
          chinese: "她鮮紅的頭髮讓她在人群中非常顯眼。",
          grammar_point: "stand out from the crowd（在人群中脫穎而出）"
        },
        vocabulary: [
          { word: "bright", pos: "adj.", chinese: "明亮的、鮮豔的" },
          { word: "crowd", pos: "n.", chinese: "人群" }
        ],
        sentence_pattern: {
          pattern: "S + stand out",
          example: "His amazing performance stood out."
        }
      },
      {
        phrase: "point out",
        type: "動詞片語",
        chinese: "指出",
        keywords: ["point", "out"],
        example: {
          english: "The teacher pointed out several grammar mistakes in my essay.",
          chinese: "老師指出了我作文裡的幾個文法錯誤。",
          grammar_point: "point out + N / point out that + 子句（明確指出某事）"
        },
        vocabulary: [
          { word: "several", pos: "adj.", chinese: "幾個的" },
          { word: "grammar", pos: "n.", chinese: "文法" },
          { word: "essay", pos: "n.", chinese: "文章、短文" }
        ],
        sentence_pattern: {
          pattern: "S + point out + that + S + V",
          example: "He pointed out the flaws in the plan."
        }
      },
      {
        phrase: "keep out",
        type: "動詞片語",
        chinese: "禁止進入、阻擋在外",
        keywords: ["keep", "out"],
        example: {
          english: "The sign on the gate clearly says 'Danger: Keep Out'.",
          chinese: "大門上的告示牌清楚地寫著「危險：禁止進入」。",
          grammar_point: "keep out of + 地方（不進入某地）；keep O out（把某物擋在外面）"
        },
        vocabulary: [
          { word: "sign", pos: "n.", chinese: "標誌、告示牌" },
          { word: "clearly", pos: "adv.", chinese: "清楚地" },
          { word: "danger", pos: "n.", chinese: "危險" }
        ],
        sentence_pattern: {
          pattern: "Keep out of + 地方",
          example: "This coat will keep the cold out."
        }
      },
      {
        phrase: "hand out",
        type: "動詞片語",
        chinese: "分發",
        keywords: ["hand", "out"],
        example: {
          english: "Volunteers were handing out free bottles of water to the marathon runners.",
          chinese: "志工們正在將免費的瓶裝水發給馬拉松跑者。",
          grammar_point: "hand out = distribute（將物品分發給眾人）"
        },
        vocabulary: [
          { word: "volunteer", pos: "n.", chinese: "志工" },
          { word: "bottle", pos: "n.", chinese: "瓶子" },
          { word: "runner", pos: "n.", chinese: "跑者" }
        ],
        sentence_pattern: {
          pattern: "S + hand out + N",
          example: "The teacher handed out the exam papers."
        }
      },
      {
        phrase: "take out",
        type: "動詞片語",
        chinese: "拿出、帶...出去、外帶",
        keywords: ["take", "out"],
        example: {
          english: "Please remember to take out the trash before you go to bed.",
          chinese: "睡覺前請記得把垃圾拿出去倒。",
          grammar_point: "take out the trash (倒垃圾)；亦可作 take someone out (帶某人外出/約會)"
        },
        vocabulary: [
          { word: "trash", pos: "n.", chinese: "垃圾" },
          { word: "remember to", pos: "phr.", chinese: "記得去做..." }
        ],
        sentence_pattern: {
          pattern: "S + take O out",
          example: "He took out his wallet to pay."
        }
      },
      {
        phrase: "leave out",
        type: "動詞片語",
        chinese: "遺漏、省略",
        keywords: ["leave", "out"],
        example: {
          english: "When you copy the report, make sure you don't leave out any important details.",
          chinese: "當你抄寫報告時，確保你沒有遺漏任何重要的細節。",
          grammar_point: "leave out = omit（不包含、漏掉某事物或人）"
        },
        vocabulary: [
          { word: "copy", pos: "v.", chinese: "抄寫、複製" },
          { word: "detail", pos: "n.", chinese: "細節" }
        ],
        sentence_pattern: {
          pattern: "S + leave out + N",
          example: "I feel left out when they speak French."
        }
      },
      {
        phrase: "cut out",
        type: "動詞片語",
        chinese: "戒除、刪去、剪下",
        keywords: ["cut", "out"],
        example: {
          english: "My doctor told me that I need to cut out sweet drinks completely.",
          chinese: "我的醫生告訴我，我必須完全戒除含糖飲料。",
          grammar_point: "cut out + N（在飲食或習慣上「停止/戒掉」）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" },
          { word: "sweet", pos: "adj.", chinese: "甜的" }
        ],
        sentence_pattern: {
          pattern: "S + cut out + N",
          example: "She cut out a picture from the magazine."
        }
      },
      {
        phrase: "wear out",
        type: "動詞片語",
        chinese: "磨損、使筋疲力盡",
        keywords: ["wear", "out"],
        example: {
          english: "Walking around the city all day has completely worn me out.",
          chinese: "在城市裡走了一整天讓我完全筋疲力盡了。",
          grammar_point: "wear someone out（使人精疲力盡）；be worn out（物體破舊磨損/人很疲累）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" }
        ],
        sentence_pattern: {
          pattern: "S + wear O out",
          example: "My favorite shoes are worn out."
        }
      },
      {
        phrase: "pull out",
        type: "動詞片語",
        chinese: "拔出、(車輛)駛出、撤退",
        keywords: ["pull", "out"],
        example: {
          english: "The train slowly pulled out of the station, heading towards the capital.",
          chinese: "火車緩緩駛出車站，朝向首都駛去。",
          grammar_point: "pull out of + 地方（車輛離開某處；或指軍隊/企業撤出）"
        },
        vocabulary: [
          { word: "slowly", pos: "adv.", chinese: "緩慢地" },
          { word: "head", pos: "v.", chinese: "朝向、前進" },
          { word: "capital", pos: "n.", chinese: "首都" }
        ],
        sentence_pattern: {
          pattern: "S + pull out of + N",
          example: "The dentist pulled out my bad tooth."
        }
      },
      {
        phrase: "fall out",
        type: "動詞片語",
        chinese: "吵架、脫落",
        keywords: ["fall", "out"],
        example: {
          english: "He fell out with his brother over a disagreement about their family business.",
          chinese: "他因為家族企業的意見不合而跟他的兄弟吵架了。",
          grammar_point: "fall out with + 人 (over 事情)（與某人鬧翻/吵架）"
        },
        vocabulary: [
          { word: "disagreement", pos: "n.", chinese: "意見不合、爭論" },
          { word: "business", pos: "n.", chinese: "企業、生意" }
        ],
        sentence_pattern: {
          pattern: "S + fall out with + O",
          example: "My hair started to fall out."
        }
      },
      {
        phrase: "check out",
        type: "動詞片語",
        chinese: "結帳離開、查看",
        keywords: ["check", "out"],
        example: {
          english: "We need to pack our bags and check out of the hotel by 11 AM.",
          chinese: "我們必須打包行李並在上午 11 點前退房。",
          grammar_point: "check out of a hotel (退房)；check out something (去查看/看一看某物)"
        },
        vocabulary: [
          { word: "pack", pos: "v.", chinese: "打包" },
          { word: "hotel", pos: "n.", chinese: "旅館" }
        ],
        sentence_pattern: {
          pattern: "S + check out of + 地方",
          example: "Check out this new song!"
        }
      },
      {
        phrase: "pass out",
        type: "動詞片語",
        chinese: "昏倒、分發",
        keywords: ["pass", "out"],
        example: {
          english: "The heat in the crowded room was so intense that one of the students passed out.",
          chinese: "擁擠房間裡的悶熱太強烈了，導致其中一名學生昏倒了。",
          grammar_point: "pass out = faint (昏厥)；也可用來代替 hand out (分發物品)"
        },
        vocabulary: [
          { word: "heat", pos: "n.", chinese: "高溫、炎熱" },
          { word: "crowded", pos: "adj.", chinese: "擁擠的" },
          { word: "intense", pos: "adj.", chinese: "強烈的" }
        ],
        sentence_pattern: {
          pattern: "S + pass out",
          example: "Please pass out these books to the class."
        }
      },
      {
        phrase: "blow out",
        type: "動詞片語",
        chinese: "吹熄、爆胎",
        keywords: ["blow", "out"],
        example: {
          english: "Make a wish before you blow out all the candles on your birthday cake.",
          chinese: "在吹熄你生日蛋糕上所有的蠟燭前許個願吧。",
          grammar_point: "blow out the candles (吹熄蠟燭)；如果是輪胎，指「爆胎」"
        },
        vocabulary: [
          { word: "wish", pos: "n.", chinese: "願望" },
          { word: "candle", pos: "n.", chinese: "蠟燭" }
        ],
        sentence_pattern: {
          pattern: "S + blow out + N",
          example: "The wind blew out the match."
        }
      },
      {
        phrase: "die out",
        type: "動詞片語",
        chinese: "滅絕、逐漸消失",
        keywords: ["die", "out"],
        example: {
          english: "Many traditional customs are beginning to die out in modern society.",
          chinese: "許多傳統習俗在現代社會中正開始逐漸消失。",
          grammar_point: "die out = become extinct（物種滅絕或風俗習慣消失）"
        },
        vocabulary: [
          { word: "traditional", pos: "adj.", chinese: "傳統的" },
          { word: "custom", pos: "n.", chinese: "習俗" },
          { word: "modern", pos: "adj.", chinese: "現代的" }
        ],
        sentence_pattern: {
          pattern: "N + is dying out",
          example: "Dinosaurs died out millions of years ago."
        }
      },
      {
        phrase: "rule out",
        type: "動詞片語",
        chinese: "排除...的可能性",
        keywords: ["rule", "out"],
        example: {
          english: "The police have ruled out suicide and are now treating the case as murder.",
          chinese: "警方已排除了自殺的可能性，現在將此案視為謀殺來處理。",
          grammar_point: "rule out the possibility of + N（大考閱測超高頻字：排除...可能）"
        },
        vocabulary: [
          { word: "suicide", pos: "n.", chinese: "自殺" },
          { word: "treat", pos: "v.", chinese: "對待、處理" },
          { word: "murder", pos: "n.", chinese: "謀殺" }
        ],
        sentence_pattern: {
          pattern: "S + rule out + N",
          example: "You cannot rule out this theory completely."
        }
      },
      {
        phrase: "speak out",
        type: "動詞片語",
        chinese: "公開發表意見、大聲說出",
        keywords: ["speak", "out"],
        example: {
          english: "More and more people are speaking out against animal cruelty in the fashion industry.",
          chinese: "越來越多的人公開發表意見反對時尚產業中的虐待動物行為。",
          grammar_point: "speak out against + N（發聲反對某事）"
        },
        vocabulary: [
          { word: "cruelty", pos: "n.", chinese: "殘忍、虐待" },
          { word: "fashion", pos: "n.", chinese: "時尚" },
          { word: "industry", pos: "n.", chinese: "產業" }
        ],
        sentence_pattern: {
          pattern: "S + speak out about/against + N",
          example: "We must speak out for our rights."
        }
      },
      {
        phrase: "watch out",
        type: "動詞片語",
        chinese: "小心、注意",
        keywords: ["watch", "out"],
        example: {
          english: "Watch out for pickpockets when you are traveling in crowded tourist areas.",
          chinese: "當你在擁擠的旅遊區旅行時，要小心扒手。",
          grammar_point: "Watch out! (當感嘆詞單獨使用)；Watch out for + N (提防/留意...)"
        },
        vocabulary: [
          { word: "pickpocket", pos: "n.", chinese: "扒手" },
          { word: "tourist area", pos: "n.", chinese: "旅遊區" }
        ],
        sentence_pattern: {
          pattern: "Watch out for + N",
          example: "Watch out! A car is coming."
        }
      }
    ]
  },
  {
    keyword: "advanced",
    collocations: [
      {
        phrase: "utterly ridiculous",
        type: "副詞 + 形容詞",
        chinese: "荒謬至極",
        keywords: ["utterly", "ridiculous"],
        example: {
          english: "His excuse for being late was utterly ridiculous and nobody believed him.",
          chinese: "他遲到的藉口簡直荒謬至極，沒有人相信他。",
          grammar_point: "utterly 修飾負面或極端的形容詞，意為「完全地、徹底地」"
        },
        vocabulary: [
          { word: "utterly", pos: "adv.", chinese: "完全地、徹底地" },
          { word: "ridiculous", pos: "adj.", chinese: "荒謬的" },
          { word: "excuse", pos: "n.", chinese: "藉口" }
        ],
        sentence_pattern: {
          pattern: "N + is utterly ridiculous.",
          example: "The price of this ticket is utterly ridiculous."
        }
      },
      {
        phrase: "dead tired",
        type: "副詞 + 形容詞",
        chinese: "累僵了、精疲力竭",
        keywords: ["dead", "tired"],
        example: {
          english: "After working a 12-hour shift, I was dead tired and went straight to bed.",
          chinese: "上完12小時的班後，我精疲力竭，直接上床睡覺了。",
          grammar_point: "dead 在此作副詞，意思是「完全地、極度地」"
        },
        vocabulary: [
          { word: "shift", pos: "n.", chinese: "輪班" },
          { word: "straight", pos: "adv.", chinese: "直接地" }
        ],
        sentence_pattern: {
          pattern: "S + be dead tired",
          example: "She was dead tired after the marathon."
        }
      },
      {
        phrase: "fast asleep",
        type: "副詞 + 形容詞",
        chinese: "熟睡的",
        keywords: ["fast", "asleep"],
        example: {
          english: "The little baby was fast asleep in her mother's arms.",
          chinese: "小嬰兒在母親的懷裡睡得很熟。",
          grammar_point: "fast 在此作副詞，意為「深深地、沉沉地」，與 quick 無關"
        },
        vocabulary: [
          { word: "asleep", pos: "adj.", chinese: "睡著的" },
          { word: "arms", pos: "n.", chinese: "手臂、懷抱" }
        ],
        sentence_pattern: {
          pattern: "S + fall/be fast asleep",
          example: "He fell fast asleep as soon as he lay down."
        }
      },
      {
        phrase: "painfully slow",
        type: "副詞 + 形容詞",
        chinese: "極度緩慢的",
        keywords: ["painfully", "slow"],
        example: {
          english: "Progress on the construction project has been painfully slow due to a lack of funds.",
          chinese: "由於缺乏資金，這項建築工程的進度慢得令人難受。",
          grammar_point: "painfully slow（慢到令人痛苦/難受的地步）"
        },
        vocabulary: [
          { word: "progress", pos: "n.", chinese: "進度" },
          { word: "construction", pos: "n.", chinese: "建築、施工" },
          { word: "lack", pos: "n.", chinese: "缺乏" }
        ],
        sentence_pattern: {
          pattern: "N + is painfully slow.",
          example: "The internet connection is painfully slow today."
        }
      },
      {
        phrase: "heavily involved",
        type: "副詞 + 過去分詞",
        chinese: "深度參與、牽涉極深",
        keywords: ["heavily", "involved"],
        example: {
          english: "She is heavily involved in local charity work and helps out every weekend.",
          chinese: "她深度參與當地的慈善工作，每個週末都會去幫忙。",
          grammar_point: "be heavily involved in + N（深度參與...）"
        },
        vocabulary: [
          { word: "involved", pos: "adj.", chinese: "參與的、牽涉的" },
          { word: "charity", pos: "n.", chinese: "慈善" }
        ],
        sentence_pattern: {
          pattern: "S + be heavily involved in + N",
          example: "The company is heavily involved in environmental protection."
        }
      },
      {
        phrase: "in broad daylight",
        type: "介系詞 + 形容詞 + 名詞",
        chinese: "在光天化日之下",
        keywords: ["broad", "daylight"],
        example: {
          english: "The robbery occurred right in the middle of the street in broad daylight.",
          chinese: "這場搶劫就發生在光天化日之下的大街中央。",
          grammar_point: "in broad daylight（為固定片語，常接於發生意外、犯罪的語境）"
        },
        vocabulary: [
          { word: "robbery", pos: "n.", chinese: "搶劫" },
          { word: "occur", pos: "v.", chinese: "發生" }
        ],
        sentence_pattern: {
          pattern: "N + happened in broad daylight.",
          example: "His car was stolen in broad daylight."
        }
      },
      {
        phrase: "brief chat",
        type: "形容詞 + 名詞",
        chinese: "簡短的交談",
        keywords: ["brief", "chat"],
        example: {
          english: "I had a brief chat with my professor after the lecture about my thesis.",
          chinese: "演講結束後，我和教授就我的論文進行了簡短的交談。",
          grammar_point: "have a brief chat with + 人（與某人簡短交談）"
        },
        vocabulary: [
          { word: "brief", pos: "adj.", chinese: "簡短的" },
          { word: "lecture", pos: "n.", chinese: "演講、講課" },
          { word: "thesis", pos: "n.", chinese: "論文" }
        ],
        sentence_pattern: {
          pattern: "S + have a brief chat with + O",
          example: "We had a brief chat before the meeting started."
        }
      },
      {
        phrase: "key factor",
        type: "形容詞 + 名詞",
        chinese: "關鍵因素",
        keywords: ["key", "factor"],
        example: {
          english: "Education is a key factor in reducing poverty and improving society.",
          chinese: "教育是減少貧窮和改善社會的關鍵因素。",
          grammar_point: "a key factor in + V-ing/N（在...方面的關鍵因素）"
        },
        vocabulary: [
          { word: "factor", pos: "n.", chinese: "因素" },
          { word: "poverty", pos: "n.", chinese: "貧窮" },
          { word: "improve", pos: "v.", chinese: "改善" }
        ],
        sentence_pattern: {
          pattern: "N + is a key factor in + V-ing",
          example: "Price is a key factor in their decision."
        }
      },
      {
        phrase: "prime example",
        type: "形容詞 + 名詞",
        chinese: "最佳範例、典型例子",
        keywords: ["prime", "example"],
        example: {
          english: "This eco-friendly building is a prime example of modern sustainable architecture.",
          chinese: "這棟環保建築是現代永續建築的最佳範例。",
          grammar_point: "a prime example of + N（...的絕佳例子）"
        },
        vocabulary: [
          { word: "eco-friendly", pos: "adj.", chinese: "環保的" },
          { word: "sustainable", pos: "adj.", chinese: "永續的" },
          { word: "architecture", pos: "n.", chinese: "建築(學)" }
        ],
        sentence_pattern: {
          pattern: "N + is a prime example of + N",
          example: "His success is a prime example of hard work."
        }
      },
      {
        phrase: "major breakthrough",
        type: "形容詞 + 名詞",
        chinese: "重大突破",
        keywords: ["major", "breakthrough"],
        example: {
          english: "Scientists have finally made a major breakthrough in cancer research.",
          chinese: "科學家們終於在癌症研究方面取得了重大突破。",
          grammar_point: "make a major breakthrough in + N（在...方面取得重大突破）"
        },
        vocabulary: [
          { word: "breakthrough", pos: "n.", chinese: "突破" },
          { word: "cancer", pos: "n.", chinese: "癌症" },
          { word: "research", pos: "n.", chinese: "研究" }
        ],
        sentence_pattern: {
          pattern: "S + make a major breakthrough in + N",
          example: "The new technology represents a major breakthrough."
        }
      },
      {
        phrase: "hidden talent",
        type: "形容詞 + 名詞",
        chinese: "隱藏的才能",
        keywords: ["hidden", "talent"],
        example: {
          english: "During the karaoke party, she revealed a hidden talent for singing that surprised everyone.",
          chinese: "在卡拉OK派對上，她展現了令人驚豔的隱藏歌唱才能。",
          grammar_point: "a hidden talent for + V-ing（在...方面有隱藏的才華）"
        },
        vocabulary: [
          { word: "reveal", pos: "v.", chinese: "展現、揭露" },
          { word: "talent", pos: "n.", chinese: "才能、天賦" },
          { word: "surprise", pos: "v.", chinese: "使驚訝" }
        ],
        sentence_pattern: {
          pattern: "S + have/reveal a hidden talent for + N/V-ing",
          example: "He discovered a hidden talent for cooking."
        }
      }
    ]
  },
  {
    keyword: "very_alternatives",
    collocations: [
      {
        phrase: "pitch black",
        type: "形容詞片語",
        chinese: "漆黑的",
        keywords: ["pitch", "black"],
        example: {
          english: "The power went out and the entire building was pitch black.",
          chinese: "停電了，整棟建築物漆黑一片。",
          grammar_point: "用 pitch black 代替 very black，pitch 指柏油/瀝青。"
        },
        vocabulary: [
          { word: "power go out", pos: "phr.", chinese: "停電" },
          { word: "entire", pos: "adj.", chinese: "整個的" }
        ],
        sentence_pattern: {
          pattern: "N + is pitch black",
          example: "The night sky was pitch black."
        }
      },
      {
        phrase: "freezing cold",
        type: "形容詞片語",
        chinese: "極冷的、凍僵的",
        keywords: ["freezing", "cold"],
        example: {
          english: "Make sure to wear a heavy coat; it is freezing cold outside today.",
          chinese: "一定要穿件厚外套；今天外面極度寒冷。",
          grammar_point: "用 freezing cold 代替 very cold。"
        },
        vocabulary: [
          { word: "heavy coat", pos: "n.", chinese: "厚外套" },
          { word: "outside", pos: "adv.", chinese: "在外面" }
        ],
        sentence_pattern: {
          pattern: "It is freezing cold.",
          example: "My hands are freezing cold."
        }
      },
      {
        phrase: "boiling hot",
        type: "形容詞片語",
        chinese: "酷熱的、滾燙的",
        keywords: ["boiling", "hot"],
        example: {
          english: "I can't drink this soup right now because it is boiling hot.",
          chinese: "我現在沒辦法喝這碗湯，因為它是滾燙的。",
          grammar_point: "用 boiling hot 代替 very hot。"
        },
        vocabulary: [
          { word: "soup", pos: "n.", chinese: "湯" },
          { word: "right now", pos: "adv.", chinese: "現在" }
        ],
        sentence_pattern: {
          pattern: "N + is boiling hot.",
          example: "The weather is boiling hot."
        }
      },
      {
        phrase: "soaking wet",
        type: "形容詞片語",
        chinese: "濕透的",
        keywords: ["soaking", "wet"],
        example: {
          english: "He forgot his umbrella and came home soaking wet from the rain.",
          chinese: "他忘了帶傘，淋著雨濕透地回家。",
          grammar_point: "用 soaking wet 代替 very wet。"
        },
        vocabulary: [
          { word: "umbrella", pos: "n.", chinese: "雨傘" },
          { word: "forget", pos: "v.", chinese: "忘記" }
        ],
        sentence_pattern: {
          pattern: "S + be/get soaking wet",
          example: "My clothes are soaking wet."
        }
      },
      {
        phrase: "brand new",
        type: "形容詞片語",
        chinese: "嶄新的",
        keywords: ["brand", "new"],
        example: {
          english: "She just bought a brand new car and can't wait to drive it.",
          chinese: "她剛買了一輛嶄新的車，等不及要開了。",
          grammar_point: "用 brand new 代替 very new。"
        },
        vocabulary: [
          { word: "buy", pos: "v.", chinese: "買 (過去式 bought)" },
          { word: "can't wait to", pos: "phr.", chinese: "等不及要..." }
        ],
        sentence_pattern: {
          pattern: "S + have/buy + a brand new + N",
          example: "This phone is brand new."
        }
      },
      {
        phrase: "crystal clear",
        type: "形容詞片語",
        chinese: "清澈透明的、十分清楚的",
        keywords: ["crystal", "clear"],
        example: {
          english: "The instructions were crystal clear, so nobody made any mistakes.",
          chinese: "指示非常清楚，所以沒有人犯任何錯誤。",
          grammar_point: "可指水質「清澈」，也常用於指解說或含意「十分清楚」。"
        },
        vocabulary: [
          { word: "instruction", pos: "n.", chinese: "指示、說明" },
          { word: "mistake", pos: "n.", chinese: "錯誤" }
        ],
        sentence_pattern: {
          pattern: "N + is crystal clear",
          example: "The water here is crystal clear."
        }
      },
      {
        phrase: "lightning fast",
        type: "形容詞片語",
        chinese: "極快的、閃電般的",
        keywords: ["lightning", "fast"],
        example: {
          english: "The cheetah caught its prey with a lightning fast sprint.",
          chinese: "獵豹以閃電般的衝刺抓住了獵物。",
          grammar_point: "用 lightning fast 代替 very fast。"
        },
        vocabulary: [
          { word: "cheetah", pos: "n.", chinese: "獵豹" },
          { word: "prey", pos: "n.", chinese: "獵物" },
          { word: "sprint", pos: "n.", chinese: "衝刺" }
        ],
        sentence_pattern: {
          pattern: "S + V + at a lightning fast speed",
          example: "His reaction was lightning fast."
        }
      },
      {
        phrase: "dirt cheap",
        type: "形容詞片語",
        chinese: "非常便宜的",
        keywords: ["dirt", "cheap"],
        example: {
          english: "I bought these shoes at the flea market; they were dirt cheap.",
          chinese: "我在跳蚤市場買了這雙鞋；它們超級便宜。",
          grammar_point: "用 dirt cheap 代替 very cheap (多用於口語)。"
        },
        vocabulary: [
          { word: "flea market", pos: "n.", chinese: "跳蚤市場" },
          { word: "shoe", pos: "n.", chinese: "鞋子" }
        ],
        sentence_pattern: {
          pattern: "N + is dirt cheap",
          example: "The rent in this town is dirt cheap."
        }
      },
      {
        phrase: "rock hard",
        type: "形容詞片語",
        chinese: "堅硬如石的",
        keywords: ["rock", "hard"],
        example: {
          english: "The bread had been left out for a week and was rock hard.",
          chinese: "這麵包被放在外面一個星期，已經變得堅硬如石。",
          grammar_point: "用 rock hard 代替 very hard (主要指物理硬度)。"
        },
        vocabulary: [
          { word: "bread", pos: "n.", chinese: "麵包" },
          { word: "leave out", pos: "phr. v.", chinese: "放在外面" }
        ],
        sentence_pattern: {
          pattern: "N + is rock hard",
          example: "The ground was rock hard."
        }
      },
      {
        phrase: "razor sharp",
        type: "形容詞片語",
        chinese: "極其鋒利的、(心智)敏銳的",
        keywords: ["razor", "sharp"],
        example: {
          english: "You need a razor sharp knife to cut this thick meat.",
          chinese: "你需要一把極度鋒利的刀來切這塊厚肉。",
          grammar_point: "用 razor sharp 代替 very sharp。"
        },
        vocabulary: [
          { word: "knife", pos: "n.", chinese: "刀子" },
          { word: "thick", pos: "adj.", chinese: "厚的" },
          { word: "meat", pos: "n.", chinese: "肉" }
        ],
        sentence_pattern: {
          pattern: "N + is razor sharp",
          example: "He has a razor sharp mind."
        }
      },
      {
        phrase: "bone dry",
        type: "形容詞片語",
        chinese: "乾透的",
        keywords: ["bone", "dry"],
        example: {
          english: "After months without rain, the riverbed was completely bone dry.",
          chinese: "幾個月沒下雨後，河床完全乾涸了。",
          grammar_point: "用 bone dry 代替 very dry。"
        },
        vocabulary: [
          { word: "riverbed", pos: "n.", chinese: "河床" },
          { word: "completely", pos: "adv.", chinese: "完全地" }
        ],
        sentence_pattern: {
          pattern: "N + is bone dry",
          example: "My throat is bone dry."
        }
      },
      {
        phrase: "wide awake",
        type: "形容詞片語",
        chinese: "完全清醒的",
        keywords: ["wide", "awake"],
        example: {
          english: "I drank an espresso at 9 PM, and now I am still wide awake.",
          chinese: "我晚上9點喝了一杯濃縮咖啡，現在依然完全清醒。",
          grammar_point: "用 wide awake 代替 fully awake / very awake。"
        },
        vocabulary: [
          { word: "espresso", pos: "n.", chinese: "濃縮咖啡" },
          { word: "still", pos: "adv.", chinese: "依然、還" }
        ],
        sentence_pattern: {
          pattern: "S + be wide awake",
          example: "I was wide awake at 3 AM."
        }
      },
      {
        phrase: "a tiny bit",
        type: "名詞/副詞片語",
        chinese: "一丁點、稍微",
        keywords: ["tiny", "bit"],
        example: {
          english: "I am a tiny bit tired, but I can still finish the work.",
          chinese: "我稍微有點累，但我依然能完成工作。",
          grammar_point: "用 a tiny bit 代替 a little bit (強調微小)。"
        },
        vocabulary: [
          { word: "tired", pos: "adj.", chinese: "疲勞的" },
          { word: "finish", pos: "v.", chinese: "完成" }
        ],
        sentence_pattern: {
          pattern: "S + be + a tiny bit + adj",
          example: "It is a tiny bit too salty."
        }
      }
    ]
  },
  {
    keyword: "adverb_collocations",
    collocations: [
      {
        phrase: "virtually impossible",
        type: "副詞 + 形容詞",
        chinese: "幾乎不可能的",
        keywords: ["virtually", "impossible"],
        example: {
          english: "It is virtually impossible to memorize all these words in one day.",
          chinese: "要在一天內背下所有這些單字幾乎是不可能的。",
          grammar_point: "virtually 意為「幾乎、實質上」，學測常考。"
        },
        vocabulary: [
          { word: "memorize", pos: "v.", chinese: "背誦、記住" },
          { word: "virtually", pos: "adv.", chinese: "幾乎、實質上" }
        ],
        sentence_pattern: {
          pattern: "It is virtually impossible to + V",
          example: "Winning the game now is virtually impossible."
        }
      },
      {
        phrase: "diametrically opposed",
        type: "副詞 + 形容詞",
        chinese: "截然相反的",
        keywords: ["diametrically", "opposed"],
        example: {
          english: "The two candidates hold diametrically opposed views on the new tax policy.",
          chinese: "這兩位候選人對新稅收政策持有截然相反的觀點。",
          grammar_point: "diametrically opposed (南轅北轍的、完全相反的)，極高級用語。"
        },
        vocabulary: [
          { word: "candidate", pos: "n.", chinese: "候選人" },
          { word: "opposed", pos: "adj.", chinese: "反對的、相反的" },
          { word: "policy", pos: "n.", chinese: "政策" }
        ],
        sentence_pattern: {
          pattern: "A and B are diametrically opposed.",
          example: "Their opinions are diametrically opposed."
        }
      },
      {
        phrase: "strictly prohibited",
        type: "副詞 + 形容詞",
        chinese: "嚴格禁止的",
        keywords: ["strictly", "prohibited"],
        example: {
          english: "Taking photos inside the museum is strictly prohibited to protect the artwork.",
          chinese: "博物館內嚴格禁止拍照以保護藝術品。",
          grammar_point: "同義詞為 strictly forbidden，常出現在告示牌或規定中。"
        },
        vocabulary: [
          { word: "prohibited", pos: "adj.", chinese: "被禁止的" },
          { word: "artwork", pos: "n.", chinese: "藝術品" }
        ],
        sentence_pattern: {
          pattern: "V-ing is strictly prohibited.",
          example: "Smoking is strictly prohibited here."
        }
      },
      {
        phrase: "honestly believe",
        type: "副詞 + 動詞",
        chinese: "真心相信",
        keywords: ["honestly", "believe"],
        example: {
          english: "I honestly believe that she did not mean to hurt your feelings.",
          chinese: "我真心相信她並不是有意要傷害你的感情。",
          grammar_point: "honestly believe (發自內心地相信)。"
        },
        vocabulary: [
          { word: "mean to", pos: "phr.", chinese: "有意去..." },
          { word: "feelings", pos: "n.", chinese: "感情、感受" }
        ],
        sentence_pattern: {
          pattern: "S + honestly believe that...",
          example: "I honestly believe we can win."
        }
      },
      {
        phrase: "categorically deny",
        type: "副詞 + 動詞",
        chinese: "堅決否認、明確否認",
        keywords: ["categorically", "deny"],
        example: {
          english: "The politician categorically denied all the rumors about his corruption.",
          chinese: "這位政治人物堅決否認所有關於他貪污的謠言。",
          grammar_point: "categorically 指「絕對地、直截了當地」。"
        },
        vocabulary: [
          { word: "politician", pos: "n.", chinese: "政治人物" },
          { word: "rumor", pos: "n.", chinese: "謠言" },
          { word: "corruption", pos: "n.", chinese: "貪污" }
        ],
        sentence_pattern: {
          pattern: "S + categorically deny + N",
          example: "He categorically denied the accusations."
        }
      },
      {
        phrase: "point-blank refuse",
        type: "動詞 + 副詞",
        chinese: "斷然拒絕",
        keywords: ["refuse", "point-blank"],
        example: {
          english: "When asked to lie to the customers, he refused point-blank.",
          chinese: "當被要求對顧客說謊時，他斷然拒絕了。",
          grammar_point: "point-blank 可作副詞，常接在 refuse 後面 (refuse point-blank) 或前面。"
        },
        vocabulary: [
          { word: "lie", pos: "v.", chinese: "說謊" },
          { word: "customer", pos: "n.", chinese: "顧客" }
        ],
        sentence_pattern: {
          pattern: "S + point-blank refuse to + V / refuse point-blank",
          example: "She point-blank refused to help."
        }
      },
      {
        phrase: "heavily influenced",
        type: "副詞 + 過去分詞",
        chinese: "深受影響的",
        keywords: ["heavily", "influenced"],
        example: {
          english: "His painting style is heavily influenced by traditional Chinese art.",
          chinese: "他的繪畫風格深受中國傳統藝術的影響。",
          grammar_point: "be heavily influenced by + N (受到...極大的影響)。"
        },
        vocabulary: [
          { word: "style", pos: "n.", chinese: "風格" },
          { word: "traditional", pos: "adj.", chinese: "傳統的" }
        ],
        sentence_pattern: {
          pattern: "S + be heavily influenced by + N",
          example: "The decision was heavily influenced by public opinion."
        }
      }
    ]
  },
  {
    keyword: "out",
    collocations: [
      {
        phrase: "out and about",
        type: "慣用語 / 介系詞片語",
        chinese: "活躍地四處走動、(病後)能下床走動",
        example: {
          english: "After a week in bed with the flu, she is finally out and about again.",
          chinese: "因為流感臥床一週後，她終於又能下床四處走動了。",
          grammar_point: "be out and about（指人從疾病中康復，或平時活躍於外出活動）"
        },
        vocabulary: [
          { word: "flu", pos: "n.", chinese: "流行性感冒" },
          { word: "finally", pos: "adv.", chinese: "終於" }
        ],
        sentence_pattern: {
          pattern: "S + be out and about",
          example: "It's good to see you out and about after your surgery."
        }
      },
      {
        phrase: "out of the blue",
        type: "介系詞片語",
        chinese: "突然地、出乎意料地",
        example: {
          english: "I hadn't seen him for years, and then he called me completely out of the blue.",
          chinese: "我好幾年沒見到他了，然後他完全出乎意料地打電話給我。",
          grammar_point: "out of the blue（猶如晴天霹靂般突然發生，常放句尾作副詞）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" }
        ],
        sentence_pattern: {
          pattern: "S + V + out of the blue",
          example: "The decision came totally out of the blue."
        }
      },
      {
        phrase: "out of character",
        type: "介系詞片語",
        chinese: "不符合性格、與平時表現不符",
        example: {
          english: "It was completely out of character for him to shout at the employees.",
          chinese: "他對員工大吼大叫完全不符合他平時的性格。",
          grammar_point: "be out of character for + 人（對某人來說很不尋常/反常）"
        },
        vocabulary: [
          { word: "character", pos: "n.", chinese: "性格、品格" },
          { word: "shout", pos: "v.", chinese: "大吼" },
          { word: "employee", pos: "n.", chinese: "員工" }
        ],
        sentence_pattern: {
          pattern: "It is out of character for O + to V",
          example: "Her sudden anger was very out of character."
        }
      },
      {
        phrase: "out of circulation",
        type: "介系詞片語",
        chinese: "不再流通、(人)不活躍於社交圈",
        example: {
          english: "Since he started his new demanding job, he has been somewhat out of circulation.",
          chinese: "自從他開始那份要求很高的新工作後，他就有些脫離社交圈了。",
          grammar_point: "be out of circulation（可指貨幣、書籍停用，也可指人不再參加社交活動）"
        },
        vocabulary: [
          { word: "circulation", pos: "n.", chinese: "流通、循環" },
          { word: "demanding", pos: "adj.", chinese: "要求高的、費力的" },
          { word: "somewhat", pos: "adv.", chinese: "有點、稍微" }
        ],
        sentence_pattern: {
          pattern: "S + be out of circulation",
          example: "Those old coins are now out of circulation."
        }
      },
      {
        phrase: "out of your depth",
        type: "介系詞片語",
        chinese: "無法駕馭、力不從心",
        example: {
          english: "When they started discussing advanced quantum physics, I felt completely out of my depth.",
          chinese: "當他們開始討論進階的量子物理學時，我感到完全力不從心。",
          grammar_point: "be/feel out of one's depth（超出某人的能力/理解範圍，宛如在深水中踩不到底）"
        },
        vocabulary: [
          { word: "advanced", pos: "adj.", chinese: "進階的、先進的" },
          { word: "quantum physics", pos: "n.", chinese: "量子物理學" },
          { word: "depth", pos: "n.", chinese: "深度" }
        ],
        sentence_pattern: {
          pattern: "S + feel out of one's depth",
          example: "I am out of my depth in this new project."
        }
      },
      {
        phrase: "out of earshot",
        type: "介系詞片語",
        chinese: "在聽不見的距離之外",
        example: {
          english: "We waited until the children were out of earshot before discussing the surprise party.",
          chinese: "我們等到孩子們走遠聽不見了，才開始討論驚喜派對。",
          grammar_point: "be out of earshot（在聽力所及的範圍外；反義詞為 within earshot）"
        },
        vocabulary: [
          { word: "earshot", pos: "n.", chinese: "聽力所及的範圍" },
          { word: "discuss", pos: "v.", chinese: "討論" }
        ],
        sentence_pattern: {
          pattern: "S + be out of earshot",
          example: "Make sure she is out of earshot before you speak."
        }
      },
      {
        phrase: "out of harm's way",
        type: "介系詞片語",
        chinese: "在安全的地方、免於危險",
        example: {
          english: "During the typhoon, we moved all the potted plants indoors to keep them out of harm's way.",
          chinese: "颱風期間，我們把所有盆栽移到室內，讓它們免受破壞。",
          grammar_point: "keep/stay out of harm's way（保持安全無虞）"
        },
        vocabulary: [
          { word: "typhoon", pos: "n.", chinese: "颱風" },
          { word: "potted plant", pos: "n.", chinese: "盆栽" },
          { word: "indoors", pos: "adv.", chinese: "在室內" }
        ],
        sentence_pattern: {
          pattern: "keep O + out of harm's way",
          example: "The police guided the crowd out of harm's way."
        }
      },
      {
        phrase: "out like a light",
        type: "慣用語",
        chinese: "迅速入睡、立刻熟睡",
        example: {
          english: "He was so exhausted after the marathon that he was out like a light as soon as his head hit the pillow.",
          chinese: "馬拉松結束後他太累了，頭一碰到枕頭就立刻睡著了。",
          grammar_point: "be out like a light（非正式用語，形容極快睡著或昏過去）"
        },
        vocabulary: [
          { word: "exhausted", pos: "adj.", chinese: "筋疲力盡的" },
          { word: "marathon", pos: "n.", chinese: "馬拉松" },
          { word: "pillow", pos: "n.", chinese: "枕頭" }
        ],
        sentence_pattern: {
          pattern: "S + be out like a light",
          example: "After drinking the medicine, she was out like a light."
        }
      },
      {
        phrase: "out on a limb",
        type: "慣用語",
        chinese: "處於孤立無援的境地、冒著風險",
        example: {
          english: "I went out on a limb to defend your proposal, so please don't let me down.",
          chinese: "我冒著極大的風險為你的提案辯護，所以請不要讓我失望。",
          grammar_point: "go out on a limb（原意指走到樹枝末端，引申為冒險、孤立無援）"
        },
        vocabulary: [
          { word: "limb", pos: "n.", chinese: "樹枝、肢體" },
          { word: "defend", pos: "v.", chinese: "辯護、防禦" },
          { word: "proposal", pos: "n.", chinese: "提案" }
        ],
        sentence_pattern: {
          pattern: "S + go out on a limb to + V",
          example: "She went out on a limb for her best friend."
        }
      },
      {
        phrase: "out to lunch",
        type: "慣用語",
        chinese: "(口語) 瘋瘋癲癲、心不在焉、不進入狀況",
        example: {
          english: "You must be out to lunch if you think you can finish a one-year project in two days.",
          chinese: "如果你以為能在兩天內完成一年的專案，那你一定是瘋了（頭腦不清楚）。",
          grammar_point: "be out to lunch（俚語，指人不在狀態內或想法荒謬）"
        },
        vocabulary: [
          { word: "project", pos: "n.", chinese: "專案、計畫" },
          { word: "finish", pos: "v.", chinese: "完成" }
        ],
        sentence_pattern: {
          pattern: "S + must be out to lunch.",
          example: "He is totally out to lunch today."
        }
      },
      {
        phrase: "out of the picture",
        type: "介系詞片語",
        chinese: "不再牽涉其中、出局",
        example: {
          english: "Now that his rival is out of the picture, he is very likely to get the promotion.",
          chinese: "既然他的競爭對手已經出局，他很有可能會獲得升遷。",
          grammar_point: "be out of the picture（不再是考量因素、退出競爭）"
        },
        vocabulary: [
          { word: "rival", pos: "n.", chinese: "競爭對手" },
          { word: "likely", pos: "adj.", chinese: "很有可能的" },
          { word: "promotion", pos: "n.", chinese: "升遷" }
        ],
        sentence_pattern: {
          pattern: "S + is out of the picture",
          example: "With him out of the picture, we can finally proceed."
        }
      },
      {
        phrase: "out of your own pocket",
        type: "介系詞片語",
        chinese: "自掏腰包",
        example: {
          english: "Because the company refused to cover the travel expenses, he had to pay for the flight out of his own pocket.",
          chinese: "因為公司拒絕負擔差旅費，他只好自掏腰包支付機票錢。",
          grammar_point: "pay (for sth) out of one's own pocket（用自己的錢支付）"
        },
        vocabulary: [
          { word: "refuse", pos: "v.", chinese: "拒絕" },
          { word: "expense", pos: "n.", chinese: "費用、開支" },
          { word: "flight", pos: "n.", chinese: "航班、機票" }
        ],
        sentence_pattern: {
          pattern: "S + pay out of one's own pocket",
          example: "Teachers often buy supplies out of their own pockets."
        }
      },
      {
        phrase: "out of the question",
        type: "介系詞片語",
        chinese: "不可能的、免談",
        example: {
          english: "Buying a new car right now is completely out of the question because we are trying to save money.",
          chinese: "現在買新車是完全不可能的，因為我們正在努力存錢。",
          grammar_point: "【學測必考】be out of the question（毫無可能，不容討論；注意勿與 out of question 無庸置疑搞混）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" },
          { word: "question", pos: "n.", chinese: "問題、疑問" }
        ],
        sentence_pattern: {
          pattern: "N/V-ing is out of the question.",
          example: "Going out in this storm is out of the question."
        }
      },
      {
        phrase: "out of sight, out of mind",
        type: "諺語 / 慣用語",
        chinese: "眼不見為淨、久不見就忘記",
        example: {
          english: "I hid the chocolates in the cupboard, hoping that out of sight, out of mind would help me eat less.",
          chinese: "我把巧克力藏在櫥櫃裡，希望眼不見為淨能幫我少吃一點。",
          grammar_point: "out of sight, out of mind（常作為獨立子句或插入語使用）"
        },
        vocabulary: [
          { word: "hide", pos: "v.", chinese: "隱藏 (過去式 hid)" },
          { word: "cupboard", pos: "n.", chinese: "櫥櫃" }
        ],
        sentence_pattern: {
          pattern: "Out of sight, out of mind.",
          example: "Since she moved abroad, it's been out of sight, out of mind."
        }
      },
      {
        phrase: "out of sorts",
        type: "介系詞片語",
        chinese: "心情不佳、身體微恙",
        example: {
          english: "She has been feeling a bit out of sorts lately, so she decided to take a day off to rest.",
          chinese: "她最近覺得身體有點不舒服且心情煩躁，所以她決定請一天假休息。",
          grammar_point: "feel/be out of sorts（指稍微生病、無精打采或情緒低落）"
        },
        vocabulary: [
          { word: "lately", pos: "adv.", chinese: "最近" },
          { word: "take a day off", pos: "phr.", chinese: "請一天假" }
        ],
        sentence_pattern: {
          pattern: "S + feel/be out of sorts",
          example: "He was feeling out of sorts after the long trip."
        }
      },
      {
        phrase: "out of sync",
        type: "介系詞片語",
        chinese: "不同步、不協調",
        example: {
          english: "The audio in this video is out of sync with the speaker's lip movements.",
          chinese: "這部影片中的音訊與講者的嘴唇動作不同步。",
          grammar_point: "be out of sync (with N)（與...不一致/不同步；sync為synchronization的縮寫）"
        },
        vocabulary: [
          { word: "audio", pos: "n.", chinese: "音訊、聲音" },
          { word: "sync", pos: "n.", chinese: "同步" },
          { word: "movement", pos: "n.", chinese: "動作" }
        ],
        sentence_pattern: {
          pattern: "A is out of sync with B",
          example: "My schedule is totally out of sync with yours."
        }
      },
      {
        phrase: "out of touch",
        type: "介系詞片語",
        chinese: "脫節、失去聯絡",
        example: {
          english: "The old politician is completely out of touch with what young people care about today.",
          chinese: "這位老政治家與當今許多年輕人在乎的事物完全脫節了。",
          grammar_point: "be out of touch (with N)（與...失去聯繫，或不了解...的現況）"
        },
        vocabulary: [
          { word: "politician", pos: "n.", chinese: "政治人物" },
          { word: "completely", pos: "adv.", chinese: "完全地" }
        ],
        sentence_pattern: {
          pattern: "S + be out of touch with + N",
          example: "We've been out of touch for years."
        }
      },
      {
        phrase: "out of this world",
        type: "介系詞片語",
        chinese: "極好的、棒透了",
        example: {
          english: "The chocolate cake her grandmother baked was simply out of this world.",
          chinese: "她祖母烤的巧克力蛋糕簡直是人間美味（棒透了）。",
          grammar_point: "be out of this world（用來誇飾某物極好，宛如不屬於這個世界的絕世珍品）"
        },
        vocabulary: [
          { word: "simply", pos: "adv.", chinese: "簡直、根本" },
          { word: "bake", pos: "v.", chinese: "烘焙" }
        ],
        sentence_pattern: {
          pattern: "N + is out of this world",
          example: "The view from the top is out of this world."
        }
      },
      {
        phrase: "look out for",
        type: "動詞片語",
        chinese: "當心、留意、關照",
        keywords: ["look", "out", "for"],
        example: {
          english: "When driving in the mountains, you need to look out for falling rocks.",
          chinese: "在山區開車時，你需要留意落石。",
          grammar_point: "look out for + N（留心觀察以防危險；也指關照某人）"
        },
        vocabulary: [
          { word: "falling", pos: "adj.", chinese: "掉落的" },
          { word: "rock", pos: "n.", chinese: "岩石" }
        ],
        sentence_pattern: {
          pattern: "S + look out for + N",
          example: "We should always look out for each other."
        }
      },
      {
        phrase: "turn out",
        type: "動詞片語",
        chinese: "結果是、出席",
        keywords: ["turn", "out"],
        example: {
          english: "The weather looked bad in the morning, but it turned out to be a beautiful day.",
          chinese: "早上天氣看起來很糟，但結果卻是個美麗的一天。",
          grammar_point: "turn out (to be) + N/Adj（結果卻是...，也可接 that 子句）"
        },
        vocabulary: [
          { word: "beautiful", pos: "adj.", chinese: "美麗的" }
        ],
        sentence_pattern: {
          pattern: "It turned out that + S + V",
          example: "The rumor turned out to be true."
        }
      },
      {
        phrase: "carry out",
        type: "動詞片語",
        chinese: "執行、實行",
        keywords: ["carry", "out"],
        example: {
          english: "The scientists will carry out a series of experiments to test their theory.",
          chinese: "科學家將執行一系列的實驗來測試他們的理論。",
          grammar_point: "carry out + a plan/experiment/survey（執行計畫/實驗/調查）"
        },
        vocabulary: [
          { word: "a series of", pos: "phr.", chinese: "一系列的" },
          { word: "experiment", pos: "n.", chinese: "實驗" },
          { word: "theory", pos: "n.", chinese: "理論" }
        ],
        sentence_pattern: {
          pattern: "S + carry out + N",
          example: "The hospital carried out the new procedure."
        }
      },
      {
        phrase: "find out",
        type: "動詞片語",
        chinese: "發現、查明",
        keywords: ["find", "out"],
        example: {
          english: "I was shocked to find out that my best friend had been lying to me.",
          chinese: "我很震驚地發現我最好的朋友一直對我說謊。",
          grammar_point: "find out + N / 疑問詞子句 / that子句（透過調查或詢問得知）"
        },
        vocabulary: [
          { word: "shocked", pos: "adj.", chinese: "震驚的" },
          { word: "lie", pos: "v.", chinese: "說謊" }
        ],
        sentence_pattern: {
          pattern: "S + find out + that/Wh- clause",
          example: "We need to find out the truth."
        }
      },
      {
        phrase: "set out",
        type: "動詞片語",
        chinese: "出發、開始(做某事)",
        keywords: ["set", "out"],
        example: {
          english: "They set out on their journey before the sun came up.",
          chinese: "他們在太陽升起前就出發踏上了旅程。",
          grammar_point: "set out on a journey（出發旅行）；set out to + V（著手進行某事）"
        },
        vocabulary: [
          { word: "journey", pos: "n.", chinese: "旅程" }
        ],
        sentence_pattern: {
          pattern: "S + set out to + V",
          example: "He set out to change the world."
        }
      },
      {
        phrase: "break out",
        type: "動詞片語",
        chinese: "爆發(戰爭、火災、疾病)",
        keywords: ["break", "out"],
        example: {
          english: "A massive fire broke out in the old factory late last night.",
          chinese: "昨晚深夜，那座舊工廠爆發了一場大火。",
          grammar_point: "【學測必考】break out 無被動語態！事物自己爆發，不可寫 was broken out"
        },
        vocabulary: [
          { word: "massive", pos: "adj.", chinese: "巨大的、大規模的" },
          { word: "factory", pos: "n.", chinese: "工廠" }
        ],
        sentence_pattern: {
          pattern: "N + broke out + 地方/時間",
          example: "World War II broke out in 1939."
        }
      },
      {
        phrase: "work out",
        type: "動詞片語",
        chinese: "解決、結果圓滿、健身",
        keywords: ["work", "out"],
        example: {
          english: "Don't worry too much; I'm sure things will work out in the end.",
          chinese: "別太擔心；我相信事情最終會圓滿解決的。",
          grammar_point: "work out 可指「事情順利解決」，也可作及物動詞 work out a problem (解決問題) 或不及物動詞「健身」"
        },
        vocabulary: [
          { word: "in the end", pos: "phr.", chinese: "最後、最終" }
        ],
        sentence_pattern: {
          pattern: "Things will work out.",
          example: "He works out at the gym every day."
        }
      },
      {
        phrase: "run out of",
        type: "動詞片語",
        chinese: "用盡、耗盡",
        keywords: ["run", "out", "of"],
        example: {
          english: "We have run out of gas, so we need to find a gas station immediately.",
          chinese: "我們的汽油已經耗盡了，所以我們需要立刻找一家加油站。",
          grammar_point: "run out of + N（把...用光了，主詞通常是「人」）"
        },
        vocabulary: [
          { word: "gas", pos: "n.", chinese: "汽油、瓦斯" },
          { word: "gas station", pos: "n.", chinese: "加油站" },
          { word: "immediately", pos: "adv.", chinese: "立刻" }
        ],
        sentence_pattern: {
          pattern: "S + run out of + N",
          example: "I am running out of patience."
        }
      },
      {
        phrase: "stand out",
        type: "動詞片語",
        chinese: "突出、顯眼",
        keywords: ["stand", "out"],
        example: {
          english: "Her bright red hair makes her really stand out from the crowd.",
          chinese: "她鮮紅的頭髮讓她在人群中非常顯眼。",
          grammar_point: "stand out from the crowd（在人群中脫穎而出）"
        },
        vocabulary: [
          { word: "bright", pos: "adj.", chinese: "明亮的、鮮豔的" },
          { word: "crowd", pos: "n.", chinese: "人群" }
        ],
        sentence_pattern: {
          pattern: "S + stand out",
          example: "His amazing performance stood out."
        }
      },
      {
        phrase: "point out",
        type: "動詞片語",
        chinese: "指出",
        keywords: ["point", "out"],
        example: {
          english: "The teacher pointed out several grammar mistakes in my essay.",
          chinese: "老師指出了我作文裡的幾個文法錯誤。",
          grammar_point: "point out + N / point out that + 子句（明確指出某事）"
        },
        vocabulary: [
          { word: "several", pos: "adj.", chinese: "幾個的" },
          { word: "grammar", pos: "n.", chinese: "文法" },
          { word: "essay", pos: "n.", chinese: "文章、短文" }
        ],
        sentence_pattern: {
          pattern: "S + point out + that + S + V",
          example: "He pointed out the flaws in the plan."
        }
      },
      {
        phrase: "keep out",
        type: "動詞片語",
        chinese: "禁止進入、阻擋在外",
        keywords: ["keep", "out"],
        example: {
          english: "The sign on the gate clearly says 'Danger: Keep Out'.",
          chinese: "大門上的告示牌清楚地寫著「危險：禁止進入」。",
          grammar_point: "keep out of + 地方（不進入某地）；keep O out（把某物擋在外面）"
        },
        vocabulary: [
          { word: "sign", pos: "n.", chinese: "標誌、告示牌" },
          { word: "clearly", pos: "adv.", chinese: "清楚地" },
          { word: "danger", pos: "n.", chinese: "危險" }
        ],
        sentence_pattern: {
          pattern: "Keep out of + 地方",
          example: "This coat will keep the cold out."
        }
      },
      {
        phrase: "hand out",
        type: "動詞片語",
        chinese: "分發",
        keywords: ["hand", "out"],
        example: {
          english: "Volunteers were handing out free bottles of water to the marathon runners.",
          chinese: "志工們正在將免費的瓶裝水發給馬拉松跑者。",
          grammar_point: "hand out = distribute（將物品分發給眾人）"
        },
        vocabulary: [
          { word: "volunteer", pos: "n.", chinese: "志工" },
          { word: "bottle", pos: "n.", chinese: "瓶子" },
          { word: "runner", pos: "n.", chinese: "跑者" }
        ],
        sentence_pattern: {
          pattern: "S + hand out + N",
          example: "The teacher handed out the exam papers."
        }
      },
      {
        phrase: "take out",
        type: "動詞片語",
        chinese: "拿出、帶...出去、外帶",
        keywords: ["take", "out"],
        example: {
          english: "Please remember to take out the trash before you go to bed.",
          chinese: "睡覺前請記得把垃圾拿出去倒。",
          grammar_point: "take out the trash (倒垃圾)；亦可作 take someone out (帶某人外出/約會)"
        },
        vocabulary: [
          { word: "trash", pos: "n.", chinese: "垃圾" },
          { word: "remember to", pos: "phr.", chinese: "記得去做..." }
        ],
        sentence_pattern: {
          pattern: "S + take O out",
          example: "He took out his wallet to pay."
        }
      },
      {
        phrase: "leave out",
        type: "動詞片語",
        chinese: "遺漏、省略",
        keywords: ["leave", "out"],
        example: {
          english: "When you copy the report, make sure you don't leave out any important details.",
          chinese: "當你抄寫報告時，確保你沒有遺漏任何重要的細節。",
          grammar_point: "leave out = omit（不包含、漏掉某事物或人）"
        },
        vocabulary: [
          { word: "copy", pos: "v.", chinese: "抄寫、複製" },
          { word: "detail", pos: "n.", chinese: "細節" }
        ],
        sentence_pattern: {
          pattern: "S + leave out + N",
          example: "I feel left out when they speak French."
        }
      },
      {
        phrase: "cut out",
        type: "動詞片語",
        chinese: "戒除、刪去、剪下",
        keywords: ["cut", "out"],
        example: {
          english: "My doctor told me that I need to cut out sweet drinks completely.",
          chinese: "我的醫生告訴我，我必須完全戒除含糖飲料。",
          grammar_point: "cut out + N（在飲食或習慣上「停止/戒掉」）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" },
          { word: "sweet", pos: "adj.", chinese: "甜的" }
        ],
        sentence_pattern: {
          pattern: "S + cut out + N",
          example: "She cut out a picture from the magazine."
        }
      },
      {
        phrase: "wear out",
        type: "動詞片語",
        chinese: "磨損、使筋疲力盡",
        keywords: ["wear", "out"],
        example: {
          english: "Walking around the city all day has completely worn me out.",
          chinese: "在城市裡走了一整天讓我完全筋疲力盡了。",
          grammar_point: "wear someone out（使人精疲力盡）；be worn out（物體破舊磨損/人很疲累）"
        },
        vocabulary: [
          { word: "completely", pos: "adv.", chinese: "完全地" }
        ],
        sentence_pattern: {
          pattern: "S + wear O out",
          example: "My favorite shoes are worn out."
        }
      },
      {
        phrase: "pull out",
        type: "動詞片語",
        chinese: "拔出、(車輛)駛出、撤退",
        keywords: ["pull", "out"],
        example: {
          english: "The train slowly pulled out of the station, heading towards the capital.",
          chinese: "火車緩緩駛出車站，朝向首都駛去。",
          grammar_point: "pull out of + 地方（車輛離開某處；或指軍隊/企業撤出）"
        },
        vocabulary: [
          { word: "slowly", pos: "adv.", chinese: "緩慢地" },
          { word: "head", pos: "v.", chinese: "朝向、前進" },
          { word: "capital", pos: "n.", chinese: "首都" }
        ],
        sentence_pattern: {
          pattern: "S + pull out of + N",
          example: "The dentist pulled out my bad tooth."
        }
      },
      {
        phrase: "fall out",
        type: "動詞片語",
        chinese: "吵架、脫落",
        keywords: ["fall", "out"],
        example: {
          english: "He fell out with his brother over a disagreement about their family business.",
          chinese: "他因為家族企業的意見不合而跟他的兄弟吵架了。",
          grammar_point: "fall out with + 人 (over 事情)（與某人鬧翻/吵架）"
        },
        vocabulary: [
          { word: "disagreement", pos: "n.", chinese: "意見不合、爭論" },
          { word: "business", pos: "n.", chinese: "企業、生意" }
        ],
        sentence_pattern: {
          pattern: "S + fall out with + O",
          example: "My hair started to fall out."
        }
      },
      {
        phrase: "check out",
        type: "動詞片語",
        chinese: "結帳離開、查看",
        keywords: ["check", "out"],
        example: {
          english: "We need to pack our bags and check out of the hotel by 11 AM.",
          chinese: "我們必須打包行李並在上午 11 點前退房。",
          grammar_point: "check out of a hotel (退房)；check out something (去查看/看一看某物)"
        },
        vocabulary: [
          { word: "pack", pos: "v.", chinese: "打包" },
          { word: "hotel", pos: "n.", chinese: "旅館" }
        ],
        sentence_pattern: {
          pattern: "S + check out of + 地方",
          example: "Check out this new song!"
        }
      },
      {
        phrase: "pass out",
        type: "動詞片語",
        chinese: "昏倒、分發",
        keywords: ["pass", "out"],
        example: {
          english: "The heat in the crowded room was so intense that one of the students passed out.",
          chinese: "擁擠房間裡的悶熱太強烈了，導致其中一名學生昏倒了。",
          grammar_point: "pass out = faint (昏厥)；也可用來代替 hand out (分發物品)"
        },
        vocabulary: [
          { word: "heat", pos: "n.", chinese: "高溫、炎熱" },
          { word: "crowded", pos: "adj.", chinese: "擁擠的" },
          { word: "intense", pos: "adj.", chinese: "強烈的" }
        ],
        sentence_pattern: {
          pattern: "S + pass out",
          example: "Please pass out these books to the class."
        }
      },
      {
        phrase: "blow out",
        type: "動詞片語",
        chinese: "吹熄、爆胎",
        keywords: ["blow", "out"],
        example: {
          english: "Make a wish before you blow out all the candles on your birthday cake.",
          chinese: "在吹熄你生日蛋糕上所有的蠟燭前許個願吧。",
          grammar_point: "blow out the candles (吹熄蠟燭)；如果是輪胎，指「爆胎」"
        },
        vocabulary: [
          { word: "wish", pos: "n.", chinese: "願望" },
          { word: "candle", pos: "n.", chinese: "蠟燭" }
        ],
        sentence_pattern: {
          pattern: "S + blow out + N",
          example: "The wind blew out the match."
        }
      },
      {
        phrase: "die out",
        type: "動詞片語",
        chinese: "滅絕、逐漸消失",
        keywords: ["die", "out"],
        example: {
          english: "Many traditional customs are beginning to die out in modern society.",
          chinese: "許多傳統習俗在現代社會中正開始逐漸消失。",
          grammar_point: "die out = become extinct（物種滅絕或風俗習慣消失）"
        },
        vocabulary: [
          { word: "traditional", pos: "adj.", chinese: "傳統的" },
          { word: "custom", pos: "n.", chinese: "習俗" },
          { word: "modern", pos: "adj.", chinese: "現代的" }
        ],
        sentence_pattern: {
          pattern: "N + is dying out",
          example: "Dinosaurs died out millions of years ago."
        }
      },
      {
        phrase: "rule out",
        type: "動詞片語",
        chinese: "排除...的可能性",
        keywords: ["rule", "out"],
        example: {
          english: "The police have ruled out suicide and are now treating the case as murder.",
          chinese: "警方已排除了自殺的可能性，現在將此案視為謀殺來處理。",
          grammar_point: "rule out the possibility of + N（大考閱測超高頻字：排除...可能）"
        },
        vocabulary: [
          { word: "suicide", pos: "n.", chinese: "自殺" },
          { word: "treat", pos: "v.", chinese: "對待、處理" },
          { word: "murder", pos: "n.", chinese: "謀殺" }
        ],
        sentence_pattern: {
          pattern: "S + rule out + N",
          example: "You cannot rule out this theory completely."
        }
      },
      {
        phrase: "speak out",
        type: "動詞片語",
        chinese: "公開發表意見、大聲說出",
        keywords: ["speak", "out"],
        example: {
          english: "More and more people are speaking out against animal cruelty in the fashion industry.",
          chinese: "越來越多的人公開發表意見反對時尚產業中的虐待動物行為。",
          grammar_point: "speak out against + N（發聲反對某事）"
        },
        vocabulary: [
          { word: "cruelty", pos: "n.", chinese: "殘忍、虐待" },
          { word: "fashion", pos: "n.", chinese: "時尚" },
          { word: "industry", pos: "n.", chinese: "產業" }
        ],
        sentence_pattern: {
          pattern: "S + speak out about/against + N",
          example: "We must speak out for our rights."
        }
      },
      {
        phrase: "watch out",
        type: "動詞片語",
        chinese: "小心、注意",
        keywords: ["watch", "out"],
        example: {
          english: "Watch out for pickpockets when you are traveling in crowded tourist areas.",
          chinese: "當你在擁擠的旅遊區旅行時，要小心扒手。",
          grammar_point: "Watch out! (當感嘆詞單獨使用)；Watch out for + N (提防/留意...)"
        },
        vocabulary: [
          { word: "pickpocket", pos: "n.", chinese: "扒手" },
          { word: "tourist area", pos: "n.", chinese: "旅遊區" }
        ],
        sentence_pattern: {
          pattern: "Watch out for + N",
          example: "Watch out! A car is coming."
        }
      }
    ]
  },
  {
    keyword: "advanced",
    collocations: [
      {
        phrase: "utterly ridiculous",
        type: "副詞 + 形容詞",
        chinese: "荒謬至極",
        keywords: ["utterly", "ridiculous"],
        example: {
          english: "His excuse for being late was utterly ridiculous and nobody believed him.",
          chinese: "他遲到的藉口簡直荒謬至極，沒有人相信他。",
          grammar_point: "utterly 修飾負面或極端的形容詞，意為「完全地、徹底地」"
        },
        vocabulary: [
          { word: "utterly", pos: "adv.", chinese: "完全地、徹底地" },
          { word: "ridiculous", pos: "adj.", chinese: "荒謬的" },
          { word: "excuse", pos: "n.", chinese: "藉口" }
        ],
        sentence_pattern: {
          pattern: "N + is utterly ridiculous.",
          example: "The price of this ticket is utterly ridiculous."
        }
      },
      {
        phrase: "dead tired",
        type: "副詞 + 形容詞",
        chinese: "累僵了、精疲力竭",
        keywords: ["dead", "tired"],
        example: {
          english: "After working a 12-hour shift, I was dead tired and went straight to bed.",
          chinese: "上完12小時的班後，我精疲力竭，直接上床睡覺了。",
          grammar_point: "dead 在此作副詞，意思是「完全地、極度地」"
        },
        vocabulary: [
          { word: "shift", pos: "n.", chinese: "輪班" },
          { word: "straight", pos: "adv.", chinese: "直接地" }
        ],
        sentence_pattern: {
          pattern: "S + be dead tired",
          example: "She was dead tired after the marathon."
        }
      },
      {
        phrase: "fast asleep",
        type: "副詞 + 形容詞",
        chinese: "熟睡的",
        keywords: ["fast", "asleep"],
        example: {
          english: "The little baby was fast asleep in her mother's arms.",
          chinese: "小嬰兒在母親的懷裡睡得很熟。",
          grammar_point: "fast 在此作副詞，意為「深深地、沉沉地」，與 quick 無關"
        },
        vocabulary: [
          { word: "asleep", pos: "adj.", chinese: "睡著的" },
          { word: "arms", pos: "n.", chinese: "手臂、懷抱" }
        ],
        sentence_pattern: {
          pattern: "S + fall/be fast asleep",
          example: "He fell fast asleep as soon as he lay down."
        }
      },
      {
        phrase: "painfully slow",
        type: "副詞 + 形容詞",
        chinese: "極度緩慢的",
        keywords: ["painfully", "slow"],
        example: {
          english: "Progress on the construction project has been painfully slow due to a lack of funds.",
          chinese: "由於缺乏資金，這項建築工程的進度慢得令人難受。",
          grammar_point: "painfully slow（慢到令人痛苦/難受的地步）"
        },
        vocabulary: [
          { word: "progress", pos: "n.", chinese: "進度" },
          { word: "construction", pos: "n.", chinese: "建築、施工" },
          { word: "lack", pos: "n.", chinese: "缺乏" }
        ],
        sentence_pattern: {
          pattern: "N + is painfully slow.",
          example: "The internet connection is painfully slow today."
        }
      },
      {
        phrase: "heavily involved",
        type: "副詞 + 過去分詞",
        chinese: "深度參與、牽涉極深",
        keywords: ["heavily", "involved"],
        example: {
          english: "She is heavily involved in local charity work and helps out every weekend.",
          chinese: "她深度參與當地的慈善工作，每個週末都會去幫忙。",
          grammar_point: "be heavily involved in + N（深度參與...）"
        },
        vocabulary: [
          { word: "involved", pos: "adj.", chinese: "參與的、牽涉的" },
          { word: "charity", pos: "n.", chinese: "慈善" }
        ],
        sentence_pattern: {
          pattern: "S + be heavily involved in + N",
          example: "The company is heavily involved in environmental protection."
        }
      },
      {
        phrase: "in broad daylight",
        type: "介系詞 + 形容詞 + 名詞",
        chinese: "在光天化日之下",
        keywords: ["broad", "daylight"],
        example: {
          english: "The robbery occurred right in the middle of the street in broad daylight.",
          chinese: "這場搶劫就發生在光天化日之下的大街中央。",
          grammar_point: "in broad daylight（為固定片語，常接於發生意外、犯罪的語境）"
        },
        vocabulary: [
          { word: "robbery", pos: "n.", chinese: "搶劫" },
          { word: "occur", pos: "v.", chinese: "發生" }
        ],
        sentence_pattern: {
          pattern: "N + happened in broad daylight.",
          example: "His car was stolen in broad daylight."
        }
      },
      {
        phrase: "brief chat",
        type: "形容詞 + 名詞",
        chinese: "簡短的交談",
        keywords: ["brief", "chat"],
        example: {
          english: "I had a brief chat with my professor after the lecture about my thesis.",
          chinese: "演講結束後，我和教授就我的論文進行了簡短的交談。",
          grammar_point: "have a brief chat with + 人（與某人簡短交談）"
        },
        vocabulary: [
          { word: "brief", pos: "adj.", chinese: "簡短的" },
          { word: "lecture", pos: "n.", chinese: "演講、講課" },
          { word: "thesis", pos: "n.", chinese: "論文" }
        ],
        sentence_pattern: {
          pattern: "S + have a brief chat with + O",
          example: "We had a brief chat before the meeting started."
        }
      },
      {
        phrase: "key factor",
        type: "形容詞 + 名詞",
        chinese: "關鍵因素",
        keywords: ["key", "factor"],
        example: {
          english: "Education is a key factor in reducing poverty and improving society.",
          chinese: "教育是減少貧窮和改善社會的關鍵因素。",
          grammar_point: "a key factor in + V-ing/N（在...方面的關鍵因素）"
        },
        vocabulary: [
          { word: "factor", pos: "n.", chinese: "因素" },
          { word: "poverty", pos: "n.", chinese: "貧窮" },
          { word: "improve", pos: "v.", chinese: "改善" }
        ],
        sentence_pattern: {
          pattern: "N + is a key factor in + V-ing",
          example: "Price is a key factor in their decision."
        }
      },
      {
        phrase: "prime example",
        type: "形容詞 + 名詞",
        chinese: "最佳範例、典型例子",
        keywords: ["prime", "example"],
        example: {
          english: "This eco-friendly building is a prime example of modern sustainable architecture.",
          chinese: "這棟環保建築是現代永續建築的最佳範例。",
          grammar_point: "a prime example of + N（...的絕佳例子）"
        },
        vocabulary: [
          { word: "eco-friendly", pos: "adj.", chinese: "環保的" },
          { word: "sustainable", pos: "adj.", chinese: "永續的" },
          { word: "architecture", pos: "n.", chinese: "建築(學)" }
        ],
        sentence_pattern: {
          pattern: "N + is a prime example of + N",
          example: "His success is a prime example of hard work."
        }
      },
      {
        phrase: "major breakthrough",
        type: "形容詞 + 名詞",
        chinese: "重大突破",
        keywords: ["major", "breakthrough"],
        example: {
          english: "Scientists have finally made a major breakthrough in cancer research.",
          chinese: "科學家們終於在癌症研究方面取得了重大突破。",
          grammar_point: "make a major breakthrough in + N（在...方面取得重大突破）"
        },
        vocabulary: [
          { word: "breakthrough", pos: "n.", chinese: "突破" },
          { word: "cancer", pos: "n.", chinese: "癌症" },
          { word: "research", pos: "n.", chinese: "研究" }
        ],
        sentence_pattern: {
          pattern: "S + make a major breakthrough in + N",
          example: "The new technology represents a major breakthrough."
        }
      },
      {
        phrase: "hidden talent",
        type: "形容詞 + 名詞",
        chinese: "隱藏的才能",
        keywords: ["hidden", "talent"],
        example: {
          english: "During the karaoke party, she revealed a hidden talent for singing that surprised everyone.",
          chinese: "在卡拉OK派對上，她展現了令人驚豔的隱藏歌唱才能。",
          grammar_point: "a hidden talent for + V-ing（在...方面有隱藏的才華）"
        },
        vocabulary: [
          { word: "reveal", pos: "v.", chinese: "展現、揭露" },
          { word: "talent", pos: "n.", chinese: "才能、天賦" },
          { word: "surprise", pos: "v.", chinese: "使驚訝" }
        ],
        sentence_pattern: {
          pattern: "S + have/reveal a hidden talent for + N/V-ing",
          example: "He discovered a hidden talent for cooking."
        }
      }
    ]
  },
  {
    keyword: "very_alternatives",
    collocations: [
      {
        phrase: "pitch black",
        type: "形容詞片語",
        chinese: "漆黑的",
        keywords: ["pitch", "black"],
        example: {
          english: "The power went out and the entire building was pitch black.",
          chinese: "停電了，整棟建築物漆黑一片。",
          grammar_point: "用 pitch black 代替 very black，pitch 指柏油/瀝青。"
        },
        vocabulary: [
          { word: "power go out", pos: "phr.", chinese: "停電" },
          { word: "entire", pos: "adj.", chinese: "整個的" }
        ],
        sentence_pattern: {
          pattern: "N + is pitch black",
          example: "The night sky was pitch black."
        }
      },
      {
        phrase: "freezing cold",
        type: "形容詞片語",
        chinese: "極冷的、凍僵的",
        keywords: ["freezing", "cold"],
        example: {
          english: "Make sure to wear a heavy coat; it is freezing cold outside today.",
          chinese: "一定要穿件厚外套；今天外面極度寒冷。",
          grammar_point: "用 freezing cold 代替 very cold。"
        },
        vocabulary: [
          { word: "heavy coat", pos: "n.", chinese: "厚外套" },
          { word: "outside", pos: "adv.", chinese: "在外面" }
        ],
        sentence_pattern: {
          pattern: "It is freezing cold.",
          example: "My hands are freezing cold."
        }
      },
      {
        phrase: "boiling hot",
        type: "形容詞片語",
        chinese: "酷熱的、滾燙的",
        keywords: ["boiling", "hot"],
        example: {
          english: "I can't drink this soup right now because it is boiling hot.",
          chinese: "我現在沒辦法喝這碗湯，因為它是滾燙的。",
          grammar_point: "用 boiling hot 代替 very hot。"
        },
        vocabulary: [
          { word: "soup", pos: "n.", chinese: "湯" },
          { word: "right now", pos: "adv.", chinese: "現在" }
        ],
        sentence_pattern: {
          pattern: "N + is boiling hot.",
          example: "The weather is boiling hot."
        }
      },
      {
        phrase: "soaking wet",
        type: "形容詞片語",
        chinese: "濕透的",
        keywords: ["soaking", "wet"],
        example: {
          english: "He forgot his umbrella and came home soaking wet from the rain.",
          chinese: "他忘了帶傘，淋著雨濕透地回家。",
          grammar_point: "用 soaking wet 代替 very wet。"
        },
        vocabulary: [
          { word: "umbrella", pos: "n.", chinese: "雨傘" },
          { word: "forget", pos: "v.", chinese: "忘記" }
        ],
        sentence_pattern: {
          pattern: "S + be/get soaking wet",
          example: "My clothes are soaking wet."
        }
      },
      {
        phrase: "brand new",
        type: "形容詞片語",
        chinese: "嶄新的",
        keywords: ["brand", "new"],
        example: {
          english: "She just bought a brand new car and can't wait to drive it.",
          chinese: "她剛買了一輛嶄新的車，等不及要開了。",
          grammar_point: "用 brand new 代替 very new。"
        },
        vocabulary: [
          { word: "buy", pos: "v.", chinese: "買 (過去式 bought)" },
          { word: "can't wait to", pos: "phr.", chinese: "等不及要..." }
        ],
        sentence_pattern: {
          pattern: "S + have/buy + a brand new + N",
          example: "This phone is brand new."
        }
      },
      {
        phrase: "crystal clear",
        type: "形容詞片語",
        chinese: "清澈透明的、十分清楚的",
        keywords: ["crystal", "clear"],
        example: {
          english: "The instructions were crystal clear, so nobody made any mistakes.",
          chinese: "指示非常清楚，所以沒有人犯任何錯誤。",
          grammar_point: "可指水質「清澈」，也常用於指解說或含意「十分清楚」。"
        },
        vocabulary: [
          { word: "instruction", pos: "n.", chinese: "指示、說明" },
          { word: "mistake", pos: "n.", chinese: "錯誤" }
        ],
        sentence_pattern: {
          pattern: "N + is crystal clear",
          example: "The water here is crystal clear."
        }
      },
      {
        phrase: "lightning fast",
        type: "形容詞片語",
        chinese: "極快的、閃電般的",
        keywords: ["lightning", "fast"],
        example: {
          english: "The cheetah caught its prey with a lightning fast sprint.",
          chinese: "獵豹以閃電般的衝刺抓住了獵物。",
          grammar_point: "用 lightning fast 代替 very fast。"
        },
        vocabulary: [
          { word: "cheetah", pos: "n.", chinese: "獵豹" },
          { word: "prey", pos: "n.", chinese: "獵物" },
          { word: "sprint", pos: "n.", chinese: "衝刺" }
        ],
        sentence_pattern: {
          pattern: "S + V + at a lightning fast speed",
          example: "His reaction was lightning fast."
        }
      },
      {
        phrase: "dirt cheap",
        type: "形容詞片語",
        chinese: "非常便宜的",
        keywords: ["dirt", "cheap"],
        example: {
          english: "I bought these shoes at the flea market; they were dirt cheap.",
          chinese: "我在跳蚤市場買了這雙鞋；它們超級便宜。",
          grammar_point: "用 dirt cheap 代替 very cheap (多用於口語)。"
        },
        vocabulary: [
          { word: "flea market", pos: "n.", chinese: "跳蚤市場" },
          { word: "shoe", pos: "n.", chinese: "鞋子" }
        ],
        sentence_pattern: {
          pattern: "N + is dirt cheap",
          example: "The rent in this town is dirt cheap."
        }
      },
      {
        phrase: "rock hard",
        type: "形容詞片語",
        chinese: "堅硬如石的",
        keywords: ["rock", "hard"],
        example: {
          english: "The bread had been left out for a week and was rock hard.",
          chinese: "這麵包被放在外面一個星期，已經變得堅硬如石。",
          grammar_point: "用 rock hard 代替 very hard (主要指物理硬度)。"
        },
        vocabulary: [
          { word: "bread", pos: "n.", chinese: "麵包" },
          { word: "leave out", pos: "phr. v.", chinese: "放在外面" }
        ],
        sentence_pattern: {
          pattern: "N + is rock hard",
          example: "The ground was rock hard."
        }
      },
      {
        phrase: "razor sharp",
        type: "形容詞片語",
        chinese: "極其鋒利的、(心智)敏銳的",
        keywords: ["razor", "sharp"],
        example: {
          english: "You need a razor sharp knife to cut this thick meat.",
          chinese: "你需要一把極度鋒利的刀來切這塊厚肉。",
          grammar_point: "用 razor sharp 代替 very sharp。"
        },
        vocabulary: [
          { word: "knife", pos: "n.", chinese: "刀子" },
          { word: "thick", pos: "adj.", chinese: "厚的" },
          { word: "meat", pos: "n.", chinese: "肉" }
        ],
        sentence_pattern: {
          pattern: "N + is razor sharp",
          example: "He has a razor sharp mind."
        }
      },
      {
        phrase: "bone dry",
        type: "形容詞片語",
        chinese: "乾透的",
        keywords: ["bone", "dry"],
        example: {
          english: "After months without rain, the riverbed was completely bone dry.",
          chinese: "幾個月沒下雨後，河床完全乾涸了。",
          grammar_point: "用 bone dry 代替 very dry。"
        },
        vocabulary: [
          { word: "riverbed", pos: "n.", chinese: "河床" },
          { word: "completely", pos: "adv.", chinese: "完全地" }
        ],
        sentence_pattern: {
          pattern: "N + is bone dry",
          example: "My throat is bone dry."
        }
      },
      {
        phrase: "wide awake",
        type: "形容詞片語",
        chinese: "完全清醒的",
        keywords: ["wide", "awake"],
        example: {
          english: "I drank an espresso at 9 PM, and now I am still wide awake.",
          chinese: "我晚上9點喝了一杯濃縮咖啡，現在依然完全清醒。",
          grammar_point: "用 wide awake 代替 fully awake / very awake。"
        },
        vocabulary: [
          { word: "espresso", pos: "n.", chinese: "濃縮咖啡" },
          { word: "still", pos: "adv.", chinese: "依然、還" }
        ],
        sentence_pattern: {
          pattern: "S + be wide awake",
          example: "I was wide awake at 3 AM."
        }
      },
      {
        phrase: "a tiny bit",
        type: "名詞/副詞片語",
        chinese: "一丁點、稍微",
        keywords: ["tiny", "bit"],
        example: {
          english: "I am a tiny bit tired, but I can still finish the work.",
          chinese: "我稍微有點累，但我依然能完成工作。",
          grammar_point: "用 a tiny bit 代替 a little bit (強調微小)。"
        },
        vocabulary: [
          { word: "tired", pos: "adj.", chinese: "疲勞的" },
          { word: "finish", pos: "v.", chinese: "完成" }
        ],
        sentence_pattern: {
          pattern: "S + be + a tiny bit + adj",
          example: "It is a tiny bit too salty."
        }
      }
    ]
  },
  {
    keyword: "adverb_collocations",
    collocations: [
      {
        phrase: "virtually impossible",
        type: "副詞 + 形容詞",
        chinese: "幾乎不可能的",
        keywords: ["virtually", "impossible"],
        example: {
          english: "It is virtually impossible to memorize all these words in one day.",
          chinese: "要在一天內背下所有這些單字幾乎是不可能的。",
          grammar_point: "virtually 意為「幾乎、實質上」，學測常考。"
        },
        vocabulary: [
          { word: "memorize", pos: "v.", chinese: "背誦、記住" },
          { word: "virtually", pos: "adv.", chinese: "幾乎、實質上" }
        ],
        sentence_pattern: {
          pattern: "It is virtually impossible to + V",
          example: "Winning the game now is virtually impossible."
        }
      },
      {
        phrase: "diametrically opposed",
        type: "副詞 + 形容詞",
        chinese: "截然相反的",
        keywords: ["diametrically", "opposed"],
        example: {
          english: "The two candidates hold diametrically opposed views on the new tax policy.",
          chinese: "這兩位候選人對新稅收政策持有截然相反的觀點。",
          grammar_point: "diametrically opposed (南轅北轍的、完全相反的)，極高級用語。"
        },
        vocabulary: [
          { word: "candidate", pos: "n.", chinese: "候選人" },
          { word: "opposed", pos: "adj.", chinese: "反對的、相反的" },
          { word: "policy", pos: "n.", chinese: "政策" }
        ],
        sentence_pattern: {
          pattern: "A and B are diametrically opposed.",
          example: "Their opinions are diametrically opposed."
        }
      },
      {
        phrase: "strictly prohibited",
        type: "副詞 + 形容詞",
        chinese: "嚴格禁止的",
        keywords: ["strictly", "prohibited"],
        example: {
          english: "Taking photos inside the museum is strictly prohibited to protect the artwork.",
          chinese: "博物館內嚴格禁止拍照以保護藝術品。",
          grammar_point: "同義詞為 strictly forbidden，常出現在告示牌或規定中。"
        },
        vocabulary: [
          { word: "prohibited", pos: "adj.", chinese: "被禁止的" },
          { word: "artwork", pos: "n.", chinese: "藝術品" }
        ],
        sentence_pattern: {
          pattern: "V-ing is strictly prohibited.",
          example: "Smoking is strictly prohibited here."
        }
      },
      {
        phrase: "honestly believe",
        type: "副詞 + 動詞",
        chinese: "真心相信",
        keywords: ["honestly", "believe"],
        example: {
          english: "I honestly believe that she did not mean to hurt your feelings.",
          chinese: "我真心相信她並不是有意要傷害你的感情。",
          grammar_point: "honestly believe (發自內心地相信)。"
        },
        vocabulary: [
          { word: "mean to", pos: "phr.", chinese: "有意去..." },
          { word: "feelings", pos: "n.", chinese: "感情、感受" }
        ],
        sentence_pattern: {
          pattern: "S + honestly believe that...",
          example: "I honestly believe we can win."
        }
      },
      {
        phrase: "categorically deny",
        type: "副詞 + 動詞",
        chinese: "堅決否認、明確否認",
        keywords: ["categorically", "deny"],
        example: {
          english: "The politician categorically denied all the rumors about his corruption.",
          chinese: "這位政治人物堅決否認所有關於他貪污的謠言。",
          grammar_point: "categorically 指「絕對地、直截了當地」。"
        },
        vocabulary: [
          { word: "politician", pos: "n.", chinese: "政治人物" },
          { word: "rumor", pos: "n.", chinese: "謠言" },
          { word: "corruption", pos: "n.", chinese: "貪污" }
        ],
        sentence_pattern: {
          pattern: "S + categorically deny + N",
          example: "He categorically denied the accusations."
        }
      },
      {
        phrase: "point-blank refuse",
        type: "動詞 + 副詞",
        chinese: "斷然拒絕",
        keywords: ["refuse", "point-blank"],
        example: {
          english: "When asked to lie to the customers, he refused point-blank.",
          chinese: "當被要求對顧客說謊時，他斷然拒絕了。",
          grammar_point: "point-blank 可作副詞，常接在 refuse 後面 (refuse point-blank) 或前面。"
        },
        vocabulary: [
          { word: "lie", pos: "v.", chinese: "說謊" },
          { word: "customer", pos: "n.", chinese: "顧客" }
        ],
        sentence_pattern: {
          pattern: "S + point-blank refuse to + V / refuse point-blank",
          example: "She point-blank refused to help."
        }
      },
      {
        phrase: "heavily influenced",
        type: "副詞 + 過去分詞",
        chinese: "深受影響的",
        keywords: ["heavily", "influenced"],
        example: {
          english: "His painting style is heavily influenced by traditional Chinese art.",
          chinese: "他的繪畫風格深受中國傳統藝術的影響。",
          grammar_point: "be heavily influenced by + N (受到...極大的影響)。"
        },
        vocabulary: [
          { word: "style", pos: "n.", chinese: "風格" },
          { word: "traditional", pos: "adj.", chinese: "傳統的" }
        ],
        sentence_pattern: {
          pattern: "S + be heavily influenced by + N",
          example: "The decision was heavily influenced by public opinion."
        }
      }
    ]
  },
  {
    keyword: "everyday_collocations",
    collocations: [
      {
        phrase: "catch a cold",
        type: "動詞 + 名詞",
        chinese: "感冒",
        keywords: ["catch", "cold"],
        example: {
          english: "Make sure to dress warmly, or you might catch a cold.",
          chinese: "一定要穿暖和點，否則你可能會感冒。",
          grammar_point: "catch a cold（感冒，強烈搭配，不可用 get a cold）"
        },
        vocabulary: [
          { word: "warmly", pos: "adv.", chinese: "溫暖地" }
        ],
        sentence_pattern: {
          pattern: "S + catch a cold",
          example: "I caught a terrible cold yesterday."
        }
      },
      {
        phrase: "tell a lie",
        type: "動詞 + 名詞",
        chinese: "說謊",
        keywords: ["tell", "lie"],
        example: {
          english: "It is wrong to tell a lie, even if you are trying to protect someone's feelings.",
          chinese: "說謊是不對的，即使你是為了保護某人的感受。",
          grammar_point: "tell a lie（說謊，與 tell the truth 相對）"
        },
        vocabulary: [
          { word: "protect", pos: "v.", chinese: "保護" },
          { word: "feelings", pos: "n.", chinese: "感受、感情" }
        ],
        sentence_pattern: {
          pattern: "S + tell a lie to + O",
          example: "He told a lie to his parents."
        }
      },
      {
        phrase: "come to a conclusion",
        type: "動詞片語",
        chinese: "得出結論",
        keywords: ["come", "conclusion"],
        example: {
          english: "After discussing the issue for hours, the team finally came to a conclusion.",
          chinese: "在討論了這個問題幾個小時後，團隊終於得出了一個結論。",
          grammar_point: "come to / reach / draw a conclusion（皆為得出結論的常見搭配）"
        },
        vocabulary: [
          { word: "discuss", pos: "v.", chinese: "討論" },
          { word: "issue", pos: "n.", chinese: "問題、議題" }
        ],
        sentence_pattern: {
          pattern: "S + come to a conclusion",
          example: "We came to a conclusion quickly."
        }
      },
      {
        phrase: "have a look",
        type: "動詞片語",
        chinese: "看一看",
        keywords: ["have", "look"],
        example: {
          english: "If you're not sure how it works, let me have a look at the manual for you.",
          chinese: "如果你不確定它是如何運作的，讓我幫你看一下說明書。",
          grammar_point: "have a look at + N（看一看、瞧一瞧）"
        },
        vocabulary: [
          { word: "manual", pos: "n.", chinese: "說明書、手冊" }
        ],
        sentence_pattern: {
          pattern: "Let me have a look.",
          example: "Can I have a look at your drawing?"
        }
      },
      {
        phrase: "run a business",
        type: "動詞 + 名詞",
        chinese: "經營事業、做生意",
        keywords: ["run", "business"],
        example: {
          english: "Running a business requires a lot of hard work and dedication.",
          chinese: "經營事業需要大量的辛勤工作和奉獻精神。",
          grammar_point: "run a business（run 在此意為管理、經營）"
        },
        vocabulary: [
          { word: "require", pos: "v.", chinese: "需要、要求" },
          { word: "dedication", pos: "n.", chinese: "奉獻、專心致志" }
        ],
        sentence_pattern: {
          pattern: "S + run a business",
          example: "He runs a successful restaurant business."
        }
      },
      {
        phrase: "win an award",
        type: "動詞 + 名詞",
        chinese: "獲獎",
        keywords: ["win", "award"],
        example: {
          english: "She won an award for her outstanding performance in the school play.",
          chinese: "她因為在學校話劇中的傑出表現而獲獎。",
          grammar_point: "win an award for + N/V-ing（因...而獲獎）"
        },
        vocabulary: [
          { word: "outstanding", pos: "adj.", chinese: "傑出的" },
          { word: "performance", pos: "n.", chinese: "表現" }
        ],
        sentence_pattern: {
          pattern: "S + win an award for + N",
          example: "The movie won several awards."
        }
      }
    ]
  },
  {
    keyword: "make_vs_do",
    collocations: [
      {
        phrase: "make a promise",
        type: "動詞 + 名詞",
        chinese: "許下承諾",
        keywords: ["make", "promise"],
        example: {
          english: "You should never make a promise that you know you cannot keep.",
          chinese: "你絕對不應該許下你明知無法遵守的承諾。",
          grammar_point: "make a promise（許諾）；keep a promise（遵守承諾）"
        },
        vocabulary: [
          { word: "promise", pos: "n.", chinese: "承諾" }
        ],
        sentence_pattern: {
          pattern: "S + make a promise to + V",
          example: "He made a promise to return early."
        }
      },
      {
        phrase: "make a noise",
        type: "動詞 + 名詞",
        chinese: "發出噪音、製造聲響",
        keywords: ["make", "noise"],
        example: {
          english: "Please try not to make a noise while the baby is sleeping in the next room.",
          chinese: "寶寶在隔壁房間睡覺時，請盡量不要發出噪音。",
          grammar_point: "make a noise / make noise（皆可，指發出聲響）"
        },
        vocabulary: [
          { word: "noise", pos: "n.", chinese: "噪音、聲響" }
        ],
        sentence_pattern: {
          pattern: "S + make a noise",
          example: "The old washing machine makes a loud noise."
        }
      },
      {
        phrase: "make a mess",
        type: "動詞 + 名詞",
        chinese: "弄得一團糟",
        keywords: ["make", "mess"],
        example: {
          english: "The kids made a terrible mess in the living room while playing with their toys.",
          chinese: "孩子們玩玩具時把客廳弄得一團糟。",
          grammar_point: "make a mess（製造混亂/弄髒）"
        },
        vocabulary: [
          { word: "terrible", pos: "adj.", chinese: "可怕的、極糟的" },
          { word: "mess", pos: "n.", chinese: "混亂、髒亂" }
        ],
        sentence_pattern: {
          pattern: "S + make a mess in + 地方",
          example: "Don't make a mess in the kitchen!"
        }
      },
      {
        phrase: "make a plan",
        type: "動詞 + 名詞",
        chinese: "制定計畫",
        keywords: ["make", "plan"],
        example: {
          english: "We need to make a solid plan for our upcoming summer holiday trip.",
          chinese: "我們需要為即將到來的暑假旅行制定一個周密的計畫。",
          grammar_point: "make a plan（比較口語的說法，進階可用 formulate a plan）"
        },
        vocabulary: [
          { word: "solid", pos: "adj.", chinese: "堅固的、可靠的" },
          { word: "upcoming", pos: "adj.", chinese: "即將到來的" }
        ],
        sentence_pattern: {
          pattern: "S + make a plan to + V",
          example: "Let's make a plan before we start."
        }
      },
      {
        phrase: "make an exception",
        type: "動詞 + 名詞",
        chinese: "破例",
        keywords: ["make", "exception"],
        example: {
          english: "The museum usually closes at 5 PM, but they made an exception for our school group.",
          chinese: "博物館通常下午五點關門，但他們為了我們學校團體破例了。",
          grammar_point: "make an exception for + 人/團體（為...破例）"
        },
        vocabulary: [
          { word: "usually", pos: "adv.", chinese: "通常" },
          { word: "exception", pos: "n.", chinese: "例外" }
        ],
        sentence_pattern: {
          pattern: "S + make an exception for + O",
          example: "Can you make an exception this time?"
        }
      },
      {
        phrase: "do the laundry",
        type: "動詞 + 名詞",
        chinese: "洗衣服",
        keywords: ["do", "laundry"],
        example: {
          english: "I usually stay home and do the laundry on Sunday mornings.",
          chinese: "我通常在星期天早上待在家裡洗衣服。",
          grammar_point: "do the laundry（做洗衣相關的家事，是 DO 的經典用法）"
        },
        vocabulary: [
          { word: "laundry", pos: "n.", chinese: "待洗的衣服、洗衣店" }
        ],
        sentence_pattern: {
          pattern: "S + do the laundry",
          example: "It's your turn to do the laundry."
        }
      },
      {
        phrase: "do exercises",
        type: "動詞 + 名詞",
        chinese: "做運動、做練習題",
        keywords: ["do", "exercises"],
        example: {
          english: "Doing daily stretching exercises is very good for your physical health.",
          chinese: "做日常伸展運動對你的身體健康非常有益。",
          grammar_point: "do exercises 可指「做體操/運動」或「做課本練習題」"
        },
        vocabulary: [
          { word: "daily", pos: "adj.", chinese: "每天的" },
          { word: "stretching", pos: "n.", chinese: "伸展" },
          { word: "physical", pos: "adj.", chinese: "身體的" }
        ],
        sentence_pattern: {
          pattern: "S + do exercises",
          example: "We have to do grammar exercises today."
        }
      },
      {
        phrase: "do a good job",
        type: "動詞 + 名詞",
        chinese: "做得好、表現出色",
        keywords: ["do", "job", "good"],
        example: {
          english: "You did a really good job on this project; the client is very satisfied.",
          chinese: "你在這個專案上表現得非常出色；客戶非常滿意。",
          grammar_point: "do a good job on + N（在某事上做得很好）"
        },
        vocabulary: [
          { word: "project", pos: "n.", chinese: "專案" },
          { word: "client", pos: "n.", chinese: "客戶" },
          { word: "satisfied", pos: "adj.", chinese: "滿意的" }
        ],
        sentence_pattern: {
          pattern: "S + do a good job + V-ing",
          example: "She did a good job organizing the event."
        }
      }
    ]
  }
];
