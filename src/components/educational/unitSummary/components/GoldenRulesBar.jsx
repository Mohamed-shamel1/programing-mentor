import React from 'react';

/**
 * GoldenRulesBar
 * Displays the 4 Thanawya exam golden rules as a top pill banner
 */
export default function GoldenRulesBar({ rules }) {
  if (!rules || !rules.rules) return null;

  return (
    <div style={{
      backgroundColor: '#fffbeb',
      border: '1.5px solid #fde68a',
      borderRadius: '5px',
      padding: '4px 8px',
      marginBottom: '5px'
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
        {rules.rules.map((r, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #fef3c7',
              borderRadius: '3px',
              padding: '3.5px 7px',
              fontSize: '9.0px',
              lineHeight: 1.34,
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
            }}
          >
            <strong style={{ color: '#b45309', fontSize: '9.3px' }}>{r.tag}: </strong>
            <span style={{ color: '#451a03', fontSize: '8.8px' }}>{r.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
