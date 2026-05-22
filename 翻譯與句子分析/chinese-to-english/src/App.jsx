import { useState, useMemo } from 'react';
import './App.css';
import { analyzesentence } from './api';
import { getRandomQuestions, getQuestionsByType } from './dataConverter';
import { collocationData } from './collocationData.js';
import StepInteractive from './components/StepInteractive';
import CollocationBox from './components/CollocationBox';
import ResultPanel from './components/ResultPanel';

export default function App() {
  const [mode, setMode] = useState('home');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [chineseSentence, setChineseSentence] = useState('');
  const [customInput, setCustomInput] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [studentFinalAnswer, setStudentFinalAnswer] = useState('');

  const searchResults = useMemo(() => {
    const kw = searchKeyword.trim();
    if (!kw) return [];
    return collocationData
      .filter(item =>
        item.example.chinese.includes(kw) ||
        item.phrase.includes(kw) ||
        item.chinese.includes(kw) ||
        item.keywords.some(k => k.includes(kw))
      )
      .slice(0, 10)
      .map(item => ({
        id: item.phrase,
        chinese: item.example.chinese,
        phrase: item.phrase,
        phraseChinese: item.chinese,
        data: convertItem(item),
      }));
  }, [searchKeyword]);

  const handleSelectQuestion = (q) => {
    setData(q.data);
    setChineseSentence(q.chinese);
    setCurrentStep(0);
    setStudentFinalAnswer('');
    setMode('practice');
    setError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCustomAnalyze = async () => {
    if (!customInput.trim()) return;
    setLoading(true);
    setError('');
    setData(null);
    setCurrentStep(0);
    setStudentFinalAnswer('');
    try {
      const result = await analyzesentence(customInput.trim());
      setData(result);
      setChineseSentence(customInput.trim());
      setMode('practice');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStepComplete = (answer) => {
    const nextStep = currentStep + 1;
    if (nextStep >= data.steps.length) {
      if (answer) setStudentFinalAnswer(answer);
      setMode('done');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentStep(nextStep);
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleReset = () => {
    setData(null);
    setError('');
    setCurrentStep(0);
    setChineseSentence('');
    setCustomInput('');
    setSearchKeyword('');
    setStudentFinalAnswer('');
    setMode('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progress = data ? Math.round((currentStep / data.steps.length) * 100) : 0;

  return (
    <>
      <header className="site-header">
        <div className="header-tag">✨ 大學學測英文自學網站</div>
        <h1>中翻英互動學習 🌟</h1>
        <p>用五個步驟，讓你輕鬆完成中翻英！每一步你都做得到 💪</p>
      </header>

      <main>

        {mode === 'home' && (
          <>
            <div className="input-card">
              <div className="section-title">🔍 搜尋題庫練習句</div>
              <div className="search-wrap">
                <input
                  type="text"
                  className="search-input"
                  value={searchKeyword}
                  onChange={e => setSearchKeyword(e.target.value)}
                  placeholder="輸入關鍵字，例如：決定、目標、努力…"
                />
                {searchKeyword && (
                  <button className="search-clear" onClick={() => setSearchKeyword('')}>✕</button>
                )}
              </div>

              {searchKeyword && (
                <div className="question-list" style={{ marginTop: '.75rem' }}>
                  {searchResults.length === 0 ? (
                    <div className="search-empty">
                      😢 找不到含有「{searchKeyword}」的句子，換個關鍵字試試！
                    </div>
                  ) : (
                    <>
                      <div className="search-count">找到 {searchResults.length} 個結果</div>
                      {searchResults.map((q, i) => (
                        <button
                          key={i}
                          className="question-item"
                          onClick={() => handleSelectQuestion(q)}
                        >
                          <span className="question-num">#{i + 1}</span>
                          <span className="question-chinese">
                            {highlightKeyword(q.chinese, searchKeyword)}
                          </span>
                          <span className="question-phrase">🔑 {q.phrase}</span>
                          <span className="question-arrow">▶</span>
                        </button>
                      ))}
                    </>
                  )}
                </div>
              )}

              {!searchKeyword && (
                <>
                  <div className="search-hint">💡 或從以下隨機題目中選一題：</div>
                  <RandomQuestions onSelect={handleSelectQuestion} />
                </>
              )}
            </div>

            <div className="divider"><span>或</span></div>

            <div className="input-card">
              <div className="section-title">✏️ 自己輸入句子（使用 AI 分析）</div>
              <div className="custom-note">
                💡 輸入任何中文句子，AI 會即時幫你生成五步驟引導！
              </div>
              <div className="input-wrap">
                <textarea
                  value={customInput}
                  onChange={e => setCustomInput(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleCustomAnalyze();
                    }
                  }}
                  placeholder="輸入中文句子，例如：我每天早上都會運動。"
                  rows={2}
                  disabled={loading}
                />
                <button
                  className="btn-analyze"
                  onClick={handleCustomAnalyze}
                  disabled={loading || !customInput.trim()}
                >
                  <span className="btn-icon">🚀</span>
                  <span>{loading ? '分析中…' : 'AI 分析'}</span>
                </button>
              </div>
              {error && (
                <div className="error-card" style={{ marginTop: '.75rem' }}>⚠️ {error}</div>
              )}
            </div>

            {loading && (
              <div className="loading-card">
                <div className="loading-spinner" />
                <div className="loading-text">AI 老師正在分析句子… 🤔</div>
                <div className="loading-sub">請稍候，馬上好！</div>
              </div>
            )}
          </>
        )}

        {mode === 'practice' && data && (
          <>
            <div className="sentence-display">
              <div className="sentence-label">📝 練習句子</div>
              <div className="sentence-text">{chineseSentence}</div>
            </div>

            <div className="progress-wrap">
              <div className="progress-label">
                進度 Step {currentStep + 1} / {data.steps.length}
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <StepInteractive
              key={currentStep}
              step={data.steps[currentStep]}
              chineseSentence={chineseSentence}
              onComplete={handleStepComplete}
            />

            <button
              className="btn-reset"
              style={{ marginTop: '1rem' }}
              onClick={handleReset}
            >
              ← 回到題目選擇
            </button>
          </>
        )}

        {mode === 'done' && data && (
          <>
            <div className="sentence-display">
              <div className="sentence-label">📝 完成的句子</div>
              <div className="sentence-text">{chineseSentence}</div>
            </div>

            {data.collocations?.length > 0 && (
              <div className="collocation-section">
                <div className="section-title">📌 搭配詞特別解析</div>
                {data.collocations.map((col, i) => (
                  <CollocationBox key={i} col={col} delay={i * 150} />
                ))}
              </div>
            )}

            <ResultPanel
              result={{
                basic: studentFinalAnswer || data.steps[4]?.english?.answer || '',
                advanced: data.steps[4]?.english?.answer || '',
                encouragement: studentFinalAnswer &&
                  studentFinalAnswer.toLowerCase().trim() !==
                  (data.steps[4]?.english?.answer || '').toLowerCase().trim()
                  ? '🎉 你用自己的方式完成了翻譯！句子表達很棒，繼續保持！💪'
                  : '🎉 你完成了完整的中翻英練習！每一步都難不倒你，繼續保持！💪',
              }}
              delay={300}
            />

            <button className="btn-reset" onClick={handleReset}>
              🔄 再練習一句
            </button>
          </>
        )}

      </main>

      <footer>
        中翻英互動學習模組 · 大學學測英文自學網站 · Powered by Claude AI
      </footer>
    </>
  );
}

function RandomQuestions({ onSelect }) {
  const [questions, setQuestions] = useState(() => getRandomQuestions(5));
  return (
    <>
      <div className="question-list">
        {questions.map((q, i) => (
          <button key={i} className="question-item" onClick={() => onSelect(q)}>
            <span className="question-num">#{i + 1}</span>
            <span className="question-chinese">{q.chinese}</span>
            <span className="question-phrase">🔑 {q.phrase}</span>
            <span className="question-arrow">▶</span>
          </button>
        ))}
      </div>
      <button
        className="btn-refresh"
        onClick={() => setQuestions(getRandomQuestions(5))}
      >
        🔀 換一批題目
      </button>
    </>
  );
}

function highlightKeyword(text, keyword) {
  if (!keyword) return text;
  const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === keyword.toLowerCase()
      ? <mark key={i} style={{ background: '#fef08a', borderRadius: '3px', padding: '0 2px' }}>{part}</mark>
      : part
  );
}

function convertItem(item) {
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