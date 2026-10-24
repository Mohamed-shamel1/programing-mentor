import React from 'react';
import Icon from '../../../ui/Icon.jsx';

/**
 * ConfusionMatrixBar
 * 5-Fold Disambiguation Matrix for Sheet 2 Top Banner
 */
export default function ConfusionMatrixBar({ confusionMatrix, isEn }) {
  if (!confusionMatrix || !confusionMatrix.pairs) return null;

  return (
    <div style={{
      backgroundColor: '#f0f7ff',
      border: '1.5px solid #3b82f6',
      borderRadius: '5px',
      padding: '2.5px 6px',
      marginBottom: '4px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#1d4ed8', fontWeight: 900, fontSize: '10px' }}>
          <Icon name="compare_arrows" size={13} style={{ color: '#2563eb' }} />
          <span>{confusionMatrix.title}</span>
        </div>
        <span style={{
          fontSize: '7.8px',
          color: '#1e40af',
          fontWeight: 800,
          backgroundColor: '#dbeafe',
          padding: '1px 6px',
          borderRadius: '3px'
        }}>
          {isEn
            ? 'Official Disambiguation Matrix & Exam Triggers'
            : 'مصفوفة فك الاشتباك الوزارية ومفاتيح الحل السريعة'}
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '4px' }}>
        {confusionMatrix.pairs.map((p, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #bfdbfe',
              borderRadius: '3px',
              padding: '2.5px 4.5px',
              fontSize: '8.0px',
              lineHeight: 1.22,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ borderBottom: '1px dashed #cbd5e1', paddingBottom: '1.5px', marginBottom: '1.5px' }}>
                <strong style={{ color: '#1e40af', fontSize: '8.3px' }}>{p.conceptA}: </strong>
                <span style={{ color: '#1e293b' }}>{p.roleA}</span>
              </div>
              <div style={{ paddingBottom: '1.5px', marginBottom: '1.5px' }}>
                <strong style={{ color: '#b45309', fontSize: '8.3px' }}>{p.conceptB}: </strong>
                <span style={{ color: '#1e293b' }}>{p.roleB}</span>
              </div>
            </div>
            <div style={{
              backgroundColor: '#fffbeb',
              border: '1px solid #fde68a',
              borderRadius: '2px',
              padding: '1.5px 4px',
              color: '#92400e',
              fontSize: '7.4px',
              fontWeight: 800,
              lineHeight: 1.15
            }}>
              ⚡ {p.examTrigger}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
