import React from 'react';

/**
 * SummaryHeader
 * Reusable top header strip for Unit Master Cheat Sheet
 */
export default function SummaryHeader({ pageTag, title, subtitle, pageNumber, totalPages }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '2.5px solid #0f172a',
      paddingBottom: '3.5px',
      marginBottom: '5px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{
          backgroundColor: '#0f172a',
          color: '#ffffff',
          fontWeight: 900,
          fontSize: '10.5px',
          padding: '2.5px 8px',
          borderRadius: '3px',
          letterSpacing: '0.4px',
          fontFamily: "'Outfit', sans-serif"
        }}>
          {pageTag}
        </span>
        <h2 style={{
          fontSize: '13.5px',
          fontWeight: 900,
          margin: 0,
          color: '#0f172a',
          letterSpacing: '-0.2px'
        }}>
          {title}
        </h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', color: '#475569', fontWeight: 700 }}>
        <span>{subtitle}</span>
        <span style={{
          backgroundColor: '#e2e8f0',
          color: '#0f172a',
          padding: '2px 8px',
          borderRadius: '4px',
          fontWeight: 800,
          fontFamily: "'Outfit', sans-serif"
        }}>
          {pageNumber} / {totalPages}
        </span>
      </div>
    </div>
  );
}
