import { useEffect, useState } from 'react';

export default function CollocationBox({ col, delay }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div className={`collocation-card ${visible ? 'visible' : ''}`}>
      <div className="collocation-header">
        <span style={{ fontSize: '1.2rem' }}>📌</span>
        <span className="collocation-term">{col.term}</span>
      </div>
      <div className="collocation-usage">{col.usage}</div>
      {col.examples?.length > 0 && (
        <table className="collocation-table">
          <thead><tr><th>搭配詞組合</th><th>中文意思</th></tr></thead>
          <tbody>
            {col.examples.map((ex, i) => (
              <tr key={i}>
                <td><strong>{ex.collocation}</strong></td>
                <td>{ex.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {col.warning && (
        <div className="collocation-warning">⚠️ {col.warning}</div>
      )}
    </div>
  );
}