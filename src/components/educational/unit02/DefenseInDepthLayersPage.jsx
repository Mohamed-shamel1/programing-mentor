import React, { useState } from 'react';
import Icon from '../../ui/Icon.jsx';
import { useLanguage } from '../../../i18n/LanguageContext.js';

/**
 * DefenseInDepthLayersPage
 * Lesson 2-2 — Station 02: The 4 Layers of Defense in Depth Matrix & Official 6-Mark Essay Question
 * Concentric Shields & Interactive Model Answer
 */
export default function DefenseInDepthLayersPage({
  badge,
  title,
  subtitle,
  dailyHumorNote,
  coreConcept,
  layersTableTitle,
  layers = [],
  essayQuestionBox,
  interactiveActivity
}) {
  const { isRTL, language } = useLanguage();
  const isEn = language === 'en';

  const [activeLayerIdx, setActiveLayerIdx] = useState(null);
  const [showModelAnswer, setShowModelAnswer] = useState(true);
  const [showActivityAnswer, setShowActivityAnswer] = useState(false);

  return (
    <div
      className="educational-page defense-in-depth-layers-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        height: '100%'
      }}
    >
      {/* 1. Station Header */}
      <div
        className="station-header-compact"
        style={{
          borderBottom: '1px solid #a7f3d0',
          paddingBottom: 'var(--space-2)'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-2)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span
              className="station-pill"
              style={{
                backgroundColor: '#065f46',
                color: '#34d399',
                fontSize: '11px',
                fontWeight: 'bold',
                padding: '2px 8px',
                borderRadius: '999px',
                fontFamily: 'var(--font-mono)'
              }}
            >
              {badge || (isEn ? '02 // Defense in Depth' : '02 // دروع الدفاع في العمق')}
            </span>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: '#022c22' }}>
              {title}
            </h2>
          </div>
          <span style={{ fontSize: '11.5px', color: '#065f46', fontWeight: 600 }}>
            {subtitle}
          </span>
        </div>

        {dailyHumorNote && (
          <div
            className="humor-banner"
            style={{
              marginTop: '6px',
              padding: '5px 10px',
              backgroundColor: '#ecfdf5',
              border: '1px dashed #059669',
              borderRadius: '6px',
              fontSize: '11.5px',
              color: '#065f46',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Icon name="lightbulb" size={15} style={{ color: '#059669', flexShrink: 0 }} />
            <span>{dailyHumorNote}</span>
          </div>
        )}
      </div>

      {/* 2. Core Concept Box */}
      {coreConcept && (
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
              <Icon name="layers" size={17} style={{ color: '#059669' }} />
              <strong style={{ fontSize: '11.5px', color: '#0f172a' }}>
                {coreConcept.title}
              </strong>
            </div>
            <p style={{ margin: 0, fontSize: '11px', color: '#334155', lineHeight: 1.4 }}>
              {coreConcept.definition}
            </p>
          </div>

          {coreConcept.examWhy && (
            <div
              style={{
                backgroundColor: '#fef3c7',
                border: '1px solid #fde68a',
                borderRadius: '6px',
                padding: '6px 10px',
                fontSize: '10.5px',
                color: '#92400e',
                lineHeight: 1.35,
                maxWidth: '310px',
                flexShrink: 0
              }}
            >
              <strong>💡 {isEn ? 'Exam Insight: ' : 'فكرة السؤال: '}</strong>
              {coreConcept.examWhy}
            </div>
          )}
        </div>
      )}

      {/* 3. The 4 Layers Table & Visual Defensive Stack (Book Table p. 70) */}
      <div
        style={{
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: '#ffffff'
        }}
      >
        <div
          style={{
            backgroundColor: '#0f172a',
            color: '#f8fafc',
            padding: '6px 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <strong style={{ fontSize: '11px' }}>
            {layersTableTitle || (isEn ? 'The 4 Network Security Layers Table (Textbook p. 70)' : 'جدول طبقات أمان الشبكة الأربعة وتدابير الحماية')}
          </strong>
          <span style={{ fontSize: '9.5px', color: '#94a3b8' }}>
            {isEn ? 'Layer 1 to Layer 4 progression' : 'التسلسل من مدخل الشبكة إلى الجهاز الطرفي'}
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}>
          {layers.map((layer, idx) => {
            const isActive = activeLayerIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveLayerIdx(isActive ? null : idx)}
                style={{
                  padding: '8px 10px',
                  borderRight: isRTL ? (idx !== 0 ? '1px solid #f1f5f9' : 'none') : (idx !== 3 ? '1px solid #f1f5f9' : 'none'),
                  backgroundColor: isActive ? '#f8fafc' : '#ffffff',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  transition: 'background-color 0.2s ease',
                  borderTop: `3px solid ${layer.badgeColor || '#059669'}`
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      backgroundColor: layer.badgeColor || '#059669',
                      color: '#ffffff',
                      fontSize: '9px',
                      fontWeight: 800,
                      padding: '1px 5px',
                      borderRadius: '4px'
                    }}
                  >
                    {layer.layerNumber}
                  </span>
                  <Icon name={layer.icon || 'shield'} size={16} style={{ color: layer.badgeColor || '#059669' }} />
                </div>

                {/* Layer Name */}
                <strong style={{ fontSize: '11px', color: '#0f172a' }}>
                  {isEn ? layer.layerNameEn : layer.layerNameAr}
                </strong>

                {/* Measure Description */}
                <div
                  style={{
                    backgroundColor: '#f1f5f9',
                    borderRadius: '4px',
                    padding: '4px 6px',
                    fontSize: '10px',
                    color: '#1e293b',
                    lineHeight: 1.35,
                    fontWeight: 600
                  }}
                >
                  {isEn ? layer.measureEn : layer.measureAr}
                </div>

                {/* Threat Target */}
                <span style={{ fontSize: '9.5px', color: '#64748b', lineHeight: 1.3, marginTop: 'auto' }}>
                  <strong style={{ color: '#334155' }}>{isEn ? 'Defends: ' : 'الهدف: '}</strong>
                  {layer.threatTarget}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Official 6-Mark Exam Essay Question (Book p. 72) */}
      {essayQuestionBox && (
        <div
          style={{
            backgroundColor: '#fefefe',
            border: '1.5px solid #059669',
            borderRadius: '8px',
            padding: '8px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}
        >
          {/* Header & Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                backgroundColor: '#059669',
                color: '#ffffff',
                fontSize: '10px',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Icon name="assignment" size={13} style={{ color: '#ffffff' }} />
              {essayQuestionBox.badge}
            </span>

            <button
              type="button"
              onClick={() => setShowModelAnswer(!showModelAnswer)}
              style={{
                backgroundColor: '#ecfdf5',
                border: '1px solid #6ee7b7',
                color: '#065f46',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '10px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Icon name={showModelAnswer ? 'expand_less' : 'expand_more'} size={14} />
              {showModelAnswer
                ? (isEn ? 'Hide Model Answer' : 'إخفاء الإجابة النموذجية')
                : (isEn ? 'Reveal 6-Mark Model Answer' : 'عرض نموذج الإجابة (6 درجات)')}
            </button>
          </div>

          {/* Question Text */}
          <div
            style={{
              fontSize: '11.5px',
              color: '#0f172a',
              fontWeight: 700,
              lineHeight: 1.4,
              backgroundColor: '#f0fdf4',
              padding: '6px 8px',
              borderRadius: '6px',
              border: '1px dashed #86efac'
            }}
          >
            ❓ {essayQuestionBox.question}
          </div>

          {/* Model Answer Breakdown */}
          {showModelAnswer && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
                marginTop: '2px'
              }}
            >
              {essayQuestionBox.points.map((pt, pIdx) => (
                <div
                  key={pIdx}
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    padding: '6px 8px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3px'
                  }}
                >
                  <strong style={{ fontSize: '10.5px', color: pIdx === 0 ? '#dc2626' : '#059669' }}>
                    {pt.title}
                  </strong>
                  <p style={{ margin: 0, fontSize: '10px', color: '#334155', lineHeight: 1.35 }}>
                    {pt.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Conclusion */}
          {showModelAnswer && essayQuestionBox.conclusion && (
            <div
              style={{
                fontSize: '10px',
                fontWeight: 600,
                color: '#065f46',
                backgroundColor: '#ecfdf5',
                padding: '4px 8px',
                borderRadius: '4px',
                borderLeft: isRTL ? 'none' : '3px solid #059669',
                borderRight: isRTL ? '3px solid #059669' : 'none'
              }}
            >
              {essayQuestionBox.conclusion}
            </div>
          )}
        </div>
      )}

      {/* 5. Fast Interactive Sorter / Activity Check */}
      {interactiveActivity && (
        <div
          style={{
            backgroundColor: '#f1f5f9',
            border: '1px solid #cbd5e1',
            borderRadius: '6px',
            padding: '6px 10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1 }}>
            <Icon name="bolt" size={16} style={{ color: '#d97706', flexShrink: 0 }} />
            <span style={{ fontSize: '10.5px', color: '#1e293b', fontWeight: 600 }}>
              {interactiveActivity.prompt}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
            <button
              type="button"
              onClick={() => setShowActivityAnswer(!showActivityAnswer)}
              style={{
                padding: '3px 8px',
                fontSize: '10px',
                fontWeight: 700,
                borderRadius: '4px',
                border: '1px solid #0284c7',
                backgroundColor: '#0284c7',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              {showActivityAnswer
                ? (isEn ? 'Hide Answer' : 'إخفاء الحل')
                : (isEn ? 'Check Answer' : 'اكشف الإجابة')}
            </button>

            {showActivityAnswer && (
              <span
                style={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  color: '#059669',
                  backgroundColor: '#ecfdf5',
                  padding: '2px 6px',
                  borderRadius: '4px'
                }}
              >
                {interactiveActivity.answer}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

