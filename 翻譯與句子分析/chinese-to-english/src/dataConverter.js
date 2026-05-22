import { collocationData } from './collocationData.js';

function extractSubject(chinese) {
  const verbStarts = ['執行', '學習', '閱讀', '運動', '練習', '培養', '建立', '維持', '保持', '實現', '達成', '完成', '參加', '使用', '了解', '面對', '解決', '處理'];
  for (const v of verbStarts) {
    if (chinese.startsWith(v)) {
      const endMarkers = ['需要', '是', '可以', '能夠', '讓', '使', '，', '。'];
      let end = chinese.length;
      for (const m of endMarkers) {
        const idx = chinese.indexOf(m);
        if (idx > 0 && idx < end) end = idx;
      }
      return chinese.slice(0, end);
    }
  }
  if (chinese.startsWith('在') || chinese.includes('是很重要')) return '這件事（虛主詞 It）';
  if (chinese.startsWith('透過')) return '任何人（anyone）';
  const subjects = ['學生', '老師', '他', '她', '我', '你', '我們', '他們', '每個人', '人們', '孩子', '老人'];
  for (const s of subjects) { if (chinese.includes(s)) return s; }
  return chinese.split('需要')[0].split('是')[0].split('，')[0].trim();
}

function extractEnglishSubject(english) {
  if (english.startsWith('It ')) return 'It（虛主詞）';
  if (english.startsWith('With ')) return '請找出句子主詞';

  const skipWords = ['the', 'a', 'an', 'this', 'that', 'these', 'those'];
  const words = english.split(' ');

  // 找到第一個動詞（通常是 requires, is, are, has, can 等）
  const verbPatterns = ['requires', 'is', 'are', 'was', 'were', 'has', 'have', 'can', 'will', 'should', 'needs', 'helps', 'makes', 'plays', 'takes', 'gives', 'allows', 'enables'];

  let subjectEnd = words.length;
  for (let i = 0; i < words.length; i++) {
    const w = words[i].toLowerCase().replace(/[.,!?]/, '');
    if (verbPatterns.includes(w)) {
      subjectEnd = i;
      break;
    }
  }

  // 取主詞部分（去掉冠詞後的完整片語）
  const subjectWords = words.slice(0, subjectEnd);
  const filtered = subjectWords.filter(w => !skipWords.includes(w.toLowerCase()));
  return filtered.join(' ');
}

function extractChinesePhrase(chinese) {
  if (chinese.includes('在截止日期前')) return '在截止日期前';
  if (chinese.includes('每天')) return '每天';
  if (chinese.includes('透過')) return '透過努力和決心';
  if (chinese.includes('在我們')) return '在我們的日常生活中';
  return '無';
}

function extractEnglishPhrase(english) {
  if (english.includes('before the deadline')) return 'before the deadline';
  if (english.includes('every day')) return 'every day';
  if (english.includes('With hard work')) return 'With hard work and determination';
  if (english.includes('in our daily lives')) return 'in our daily lives';
  return 'none';
}

function convertToSteps(item) {
  const { phrase, chinese, example, vocabulary, sentence_pattern } = item;
  const verbs = vocabulary.filter(v => v.pos.includes('v.'));
  const nouns = vocabulary.filter(v => v.pos.includes('n.'));
  const adjs = vocabulary.filter(v => v.pos.includes('adj.'));
  const advs = vocabulary.filter(v => v.pos.includes('adv.'));
  const modifiers = [...adjs, ...advs];
  const table = vocabulary.map(v => ({ '中文': v.chinese, '英文': v.word, '詞性': v.pos }));

  return {
    sentence: example.chinese,
    steps: [
      {
        step: 1, title: '找主角',
        chinese: {
          question: `「${example.chinese}」這句話的主詞是誰？請用中文回答。`,
          hint: '主詞就是句子裡「做動作的人或事物」，可能是人、事、物或概念',
          answer: extractSubject(example.chinese),
          explanation: `對應英文句子「${example.english}」的主詞部分`,
        },
        english: {
          question: `很好！那這個主詞用英文怎麼說？`,
          hint: `參考句型：${sentence_pattern.pattern}`,
          answer: extractEnglishSubject(example.english),
          explanation: `英文句子「${example.english}」的主詞`,
        },
      },
      {
        step: 2, title: '找動作',
        chinese: {
          question: `「${example.chinese}」的動詞是什麼？用什麼時態？`,
          hint: '動詞就是「做的動作」，注意時態（現在/過去/未來）',
          answer: verbs.length > 0 ? verbs.map(v => v.chinese).join('、') : '請找出動詞',
          explanation: `搭配詞「${phrase}」的核心動詞`,
        },
        english: {
          question: `這個動詞（含時態）用英文怎麼說？`,
          hint: `核心搭配詞是「${phrase}」`,
          answer: verbs.map(v => v.word).join(', '),
          explanation: `「${phrase}」是重要搭配詞（${chinese}）`,
        },
      },
      {
        step: 3, title: '找修飾',
        chinese: {
          question: `「${example.chinese}」有沒有形容詞或副詞修飾語？`,
          hint: '修飾語讓句子更生動，例如「很重要」、「努力地」',
          answer: modifiers.length > 0 ? modifiers.map(v => v.chinese).join('、') : '無',
          explanation: modifiers.length > 0 ? '修飾語讓句子表達更精確' : '這句話沒有修飾語',
        },
        english: {
          question: modifiers.length > 0
            ? `這個修飾語用英文怎麼說？`
            : `那「${nouns.map(v => v.chinese).join('、')}」用英文怎麼說？`,
          hint: `文法重點：${example.grammar_point}`,
          answer: modifiers.length > 0
            ? modifiers.map(v => v.word).join(', ')
            : nouns.map(v => v.word).join(', '),
          explanation: `文法重點：${example.grammar_point}`,
        },
      },
      {
        step: 4, title: '找細節',
        chinese: {
          question: `「${example.chinese}」有沒有時間、地點或條件片語？`,
          hint: '例如「在截止日期前」、「每天」、「透過努力」',
          answer: extractChinesePhrase(example.chinese),
          explanation: `句型「${sentence_pattern.pattern}」`,
        },
        english: {
          question: `這個片語用英文怎麼說？`,
          hint: `參考：「${sentence_pattern.example}」`,
          answer: extractEnglishPhrase(example.english),
          explanation: `句型：${sentence_pattern.pattern}`,
        },
      },
      {
        step: 5, title: '拼在一起',
        chinese: {
          question: `很好！說說看整句話的中文結構？`,
          hint: '主詞＋動詞＋受詞＋修飾＋細節',
          answer: example.chinese,
          explanation: `文法重點：${example.grammar_point}`,
        },
        english: {
          question: `試著把所有英文元素組合成完整的英文句子！`,
          hint: `英文語序：主詞＋動詞＋受詞＋修飾語＋時間地點，記得用搭配詞「${phrase}」！`,
          answer: example.english,
          explanation: `完整翻譯：${example.english}`,
        },
        table,
        advanced: `${example.english}`,
      },
    ],
    collocations: [{
      term: phrase,
      usage: `「${phrase}」意思是「${chinese}」，${example.grammar_point}`,
      examples: [
        { collocation: phrase, meaning: chinese },
        ...vocabulary.map(v => ({ collocation: v.word, meaning: `${v.chinese}（${v.pos}）` })),
      ],
      warning: null,
    }],
  };
}

export function getRandomQuestions(count = 6) {
  const shuffled = [...collocationData].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(item => ({
    id: item.phrase,
    chinese: item.example.chinese,
    phrase: item.phrase,
    phraseChinese: item.chinese,
    data: convertToSteps(item),
  }));
}

export function getQuestionsByType(type) {
  return collocationData
    .filter(item => item.type === type)
    .map(item => ({
      id: item.phrase,
      chinese: item.example.chinese,
      phrase: item.phrase,
      phraseChinese: item.chinese,
      data: convertToSteps(item),
    }));
}

export function getAllTypes() {
  return [...new Set(collocationData.map(item => item.type))];
}