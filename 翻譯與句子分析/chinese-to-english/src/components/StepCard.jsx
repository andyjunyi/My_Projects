import { useEffect, useRef, useState } from 'react';

export default function StepCard({ step, delay }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const isLast = step.step === 5;

  return (
    <div className={`step-card ${isLast ? 'yellow' : 'green'} ${visible ? 'visible' : ''}`}>
      <div className="step-header">
        <div className="step-num">Step {step.step}</div>
        <span className="step-emoji">{step.emoji}</span>
        <div className="step-title">{step.title}</div>
      </div>
      <div className="step-content">{step.content}</div>
      {step.table && step.table.length > 0 && (
        <table className="step-table">
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
    </div>
  );
}