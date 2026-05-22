import { useState } from 'react';

const EXAMPLES = [
  "在截止日期前做出決定是很重要的。",
  "她努力工作以達成目標。",
  "這個問題對學生來說是嚴重的挑戰。",
  "時間飛逝，我們必須把握每個機會。",
  "老師對學生的學習有很大的影響力。",
  "他每天練習說流利的英文。",
];

export default function InputPanel({ onAnalyze, loading }) {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (!text.trim()) return;
    onAnalyze(text.trim());
  };

  return (
    <div className="input-card">
      <div className="section-title">📝 選一個範例句或自己輸入！</div>
      <div className="examples-row">
        {EXAMPLES.map((ex, i) => (
          <button
            key={i}
            className="example-chip"
            onClick={() => setText(ex)}
          >
            {ex.length > 18 ? ex.slice(0, 16) + '…' : ex}
          </button>
        ))}
      </div>
      <div className="input-wrap">
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
          placeholder="輸入中文句子，例如：在截止日期前做出決定是很重要的。"
          rows={2}
        />
        <button
          className="btn-analyze"
          onClick={handleSubmit}
          disabled={loading || !text.trim()}
        >
          <span className="btn-icon">🚀</span>
          <span>開始解析</span>
        </button>
      </div>
    </div>
  );
}