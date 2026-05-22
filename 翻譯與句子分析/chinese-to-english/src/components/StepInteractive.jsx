import { useState } from 'react';
import { checkAnswer } from '../api';

export default function StepInteractive({ step, chineseSentence, onComplete }) {
  const [phase, setPhase] = useState(step.step === 5 ? 'english' : 'chinese');
  const [studentAnswer, setStudentAnswer] = useState('');
  const [chineseStudentAnswer, setChineseStudentAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [phaseCompleted, setPhaseCompleted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const isLast = step.step === 5;
  const currentPhase = step[phase];

  const handleSubmit = async () => {
    if (!studentAnswer.trim()) return;
    setLoading(true);
    setFeedback(null);
    try {
      const result = await checkAnswer(
        step.step,
        phase === 'chinese' ? '中文分析' : '英文翻譯',
        currentPhase.question,
        currentPhase.answer,
        studentAnswer,
        chineseSentence
      );
      setFeedback(result);
      if (result.correct) setPhaseCompleted(true);
    } catch (err) {
      setFeedback({ correct: false, feedback: '⚠️ 回饋載入失敗，請再試一次。', encouragement: '' });
    } finally {
      setLoading(false);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
    setPhaseCompleted(true);
  };

  const handleNextPhase = () => {
    if (phase === 'chinese') {
      const ans = studentAnswer.trim();
      if (ans === '無' || ans === 'none' ||
          step.chinese?.answer === '無' || step.chinese?.answer === 'none') {
        onComplete('');
      } else {
        setChineseStudentAnswer(ans);
        setPhase('english');
        setStudentAnswer('');
        setFeedback(null);
        setPhaseCompleted(false);
        setShowAnswer(false);
      }
    } else {
      onComplete(studentAnswer.trim());
    }
  };

  return (
    <div className={`step-interactive ${isLast ? 'yellow' : 'green'}`}>

      {/* 步驟標題 */}
      <div className="step-header">
        <div className="step-num">Step {step.step}</div>
        <span className="step-emoji">{isLast ? '🟡' : '🟢'}</span>
        <div className="step-title">{step.title}</div>
        <span className={`phase-badge ${phase}`}>
          {phase === 'chinese' ? '🇹🇼 中文分析' : '🇺🇸 英文翻譯'}
        </span>
      </div>

      {/* AI 問題 */}
      <div className="step-question">
        <span className="teacher-icon">👩‍🏫</span>
        <span>
          {phase === 'english' && chineseStudentAnswer
            ? `很好！那「${chineseStudentAnswer.split('，')[0].split(',')[0].split('（')[0].trim()}」用英文怎麼說？`
            : currentPhase.question}
        </span>
      </div>

      {/* 提示 */}
      <div className="step-hint">💡 提示：{currentPhase.hint}</div>

      {/* 學生輸入區 */}
      {!phaseCompleted && (
        <div className="step-input-area">
          <textarea
            className="step-textarea"
            value={studentAnswer}
            onChange={e => setStudentAnswer(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
            placeholder={phase === 'chinese' ? '用中文回答…' : '用英文回答…'}
            rows={2}
            disabled={loading}
          />
          <div className="step-btn-row">
            <button
              className="btn-submit-answer"
              onClick={handleSubmit}
              disabled={loading || !studentAnswer.trim()}
            >
              {loading ? '批改中…' : '✅ 確認答案'}
            </button>
            <button className="btn-show-answer" onClick={handleShowAnswer}>
              👀 我不會，看答案
            </button>
          </div>
        </div>
      )}

      {/* AI 回饋 */}
      {feedback && (
        <div className={`step-feedback ${feedback.correct ? 'correct' : 'incorrect'}`}>
          <div className="feedback-text">{feedback.feedback}</div>
          {feedback.encouragement && (
            <div className="feedback-encouragement">{feedback.encouragement}</div>
          )}
        </div>
      )}

      {/* 顯示答案 */}
      {showAnswer && (
        <div className="step-answer-reveal">
          <div className="answer-label">📖 正確答案</div>
          <div className="answer-text">{currentPhase.answer}</div>
          <div className="explanation-text">{currentPhase.explanation}</div>
        </div>
      )}

      {/* Step 5 對照表格 */}
      {phaseCompleted && isLast && phase === 'english' && step.table?.length > 0 && (
        <table className="step-table" style={{ marginTop: '1rem' }}>
          <thead>
            <tr>{Object.keys(step.table[0]).map(h => <th key={h}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {step.table.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((v, j) => <td key={j}>{v}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* 下一步按鈕 */}
      {phaseCompleted && (
        <button className="btn-next-step" onClick={handleNextPhase}>
          {phase === 'chinese'
            ? '➡️ 很好！來寫英文吧'
            : isLast
              ? '🎉 查看完整結果'
              : '➡️ 下一步'}
        </button>
      )}

    </div>
  );
}