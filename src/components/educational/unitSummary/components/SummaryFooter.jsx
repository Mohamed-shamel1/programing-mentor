import React from 'react';

/**
 * SummaryFooter
 * Reusable bottom footer strip with edition info and author signature
 */
export default function SummaryFooter({ edition, unitTitle, isEn }) {
  return (
    <div style={{
      borderTop: '1px solid #cbd5e1',
      paddingTop: '3px',
      marginTop: '3px',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '8.8px',
      color: '#64748b',
      boxSizing: 'border-box'
    }}>
      <div>
        <strong style={{ color: '#334155' }}>{edition}</strong> • {unitTitle}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ fontWeight: 800, color: '#1e293b' }}>
          {isEn ? 'Eng. Mohamed Shamel — The Mentor Series' : 'سلسلة المُرشد في الذكاء الاصطناعي — إعداد م. محمد شامل'}
        </span>
        <span style={{ color: '#94a3b8' }}>•</span>
        <span style={{
          backgroundColor: '#f1f5f9',
          color: '#475569',
          padding: '1px 6px',
          borderRadius: '3px',
          fontWeight: 700,
          fontFamily: "'Outfit', sans-serif"
        }}>
          A4 Landscape Flyer Edition
        </span>
      </div>
    </div>
  );
}
