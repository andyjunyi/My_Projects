import { useEffect, useState } from 'react';

export default function ResultPanel({ result, delay = 0 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div className={`result-card ${visible ? 'visible' : ''}`}>
      <div className="result-title">🎯 翻譯結果</div>
      <div className="result-row">
        <div className="result-label">✏️ 你的翻譯</div>
        <div className="result-sentence result-basic">{result.basic}</div>
      </div>
      <div className="result-row">
        <div className="result-label">📖 參考答案</div>
        <div className="result-sentence result-advanced">{result.advanced}</div>
      </div>
      <div className="result-encouragement">{result.encouragement}</div>
    </div>
  );
}