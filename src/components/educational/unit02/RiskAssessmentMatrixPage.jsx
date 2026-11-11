import React, { useState } from 'react';
import Icon from '../../ui/Icon.jsx';
import StudentExamPortalCard from '../exam/StudentExamPortalCard.jsx';
import { useLanguage } from '../../../i18n/LanguageContext.js';

/**
 * RiskAssessmentMatrixPage
 * Lesson 2-3 — Station 03: Risk Size Formula, 3x3 Matrix & Priority Calculator
 * Interactive 3x3 Matrix with Live Calculator & Dual QR Exam Portal
 */
export default function RiskAssessmentMatrixPage({
  badge,
  title,
  subtitle,
  dailyHumorNote,
  formulaBox,
  matrixTitle,
  matrixGrid = [],
  prioritizationRule,
  mathRankingProblem,
  examPortalProps
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  // Interactive Live Calculator state
  const [calcImpact, setCalcImpact] = useState(3);
  const [calcLikelihood, setCalcLikelihood] = useState(3);
  const currentRiskScore = calcImpact * calcLikelihood;

  const getScoreClassification = (score) => {
    if (score >= 9) return { label: isEn ? 'CRITICAL (Priority #1)' : 'حرج جداً (أولوية أولى)', color: '#dc2626', bg: '#fee2e2' };
    if (score >= 6) return { label: isEn ? 'High Priority' : 'أولوية مرتفعة', color: '#ea580c', bg: '#ffedd5' };
    if (score >= 3) return { label: isEn ? 'Medium Priority' : 'أولوية متوسطة', color: '#f59e0b', bg: '#fef3c7' };
    return { label: isEn ? 'Low Priority' : 'أولوية منخفضة', color: '#16a34a', bg: '#dcfce7' };
  };

  const activeClassification = getScoreClassification(currentRiskScore);

  return (
    <div
      className="educational-page risk-assessment-matrix-page"
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
              {badge || (isEn ? '03 // Risk Matrix & Exam' : '03 // مصفوفة المخاطر وبوابة الاختبار')}
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

      {/* 2. Formula & Interactive Live Calculator Box */}
      {formulaBox && (
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '7px 11px',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '8px',
            alignItems: 'center'
          }}
        >
          {/* Formula Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icon name="functions" size={16} style={{ color: '#0284c7' }} />
              <strong style={{ fontSize: '11px', color: '#0f172a' }}>
                {formulaBox.title}
              </strong>
            </div>

            <div
              style={{
                backgroundColor: '#f0f9ff',
                border: '1px solid #bae6fd',
                color: '#0369a1',
                borderRadius: '5px',
                padding: '4px 8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span style={{ color: '#0284c7' }}>{formulaBox.formulaText}</span>
              <span style={{ color: '#b45309', fontSize: '10px' }}>({formulaBox.formulaAr})</span>
            </div>

            <div style={{ fontSize: '9px', color: '#dc2626', fontWeight: 600 }}>
              ⚠️ {formulaBox.trapAlert}
            </div>
          </div>

          {/* Interactive Calculator Widget */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '1px dashed #cbd5e1',
              borderRadius: '6px',
              padding: '6px 8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#334155' }}>
                🧮 {isEn ? 'Interactive Risk Calculator' : 'حاسبة الخطر التفاعلية'}
              </span>
              <span
                style={{
                  backgroundColor: activeClassification.bg,
                  color: activeClassification.color,
                  fontSize: '8.5px',
                  fontWeight: 800,
                  padding: '1px 5px',
                  borderRadius: '3px'
                }}
              >
                {activeClassification.label}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
                <span style={{ fontSize: '8.5px', color: '#64748b' }}>{isEn ? 'Impact (1-3)' : 'التأثير (1-3)'}</span>
                <select
                  value={calcImpact}
                  onChange={(e) => setCalcImpact(Number(e.target.value))}
                  style={{ fontSize: '10px', padding: '2px', borderRadius: '3px', border: '1px solid #cbd5e1' }}
                >
                  <option value={3}>{isEn ? '3 - High' : '3 - عالي'}</option>
                  <option value={2}>{isEn ? '2 - Medium' : '2 - متوسط'}</option>
                  <option value={1}>{isEn ? '1 - Low' : '1 - منخفض'}</option>
                </select>
              </div>

              <span style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', marginTop: '10px' }}>×</span>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
                <span style={{ fontSize: '8.5px', color: '#64748b' }}>{isEn ? 'Likelihood (1-3)' : 'الاحتمالية (1-3)'}</span>
                <select
                  value={calcLikelihood}
                  onChange={(e) => setCalcLikelihood(Number(e.target.value))}
                  style={{ fontSize: '10px', padding: '2px', borderRadius: '3px', border: '1px solid #cbd5e1' }}
                >
                  <option value={3}>{isEn ? '3 - High' : '3 - عالي'}</option>
                  <option value={2}>{isEn ? '2 - Medium' : '2 - متوسط'}</option>
                  <option value={1}>{isEn ? '1 - Low' : '1 - منخفض'}</option>
                </select>
              </div>

              <span style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', marginTop: '10px' }}>=</span>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '2px 8px', minWidth: '40px' }}>
                <span style={{ fontSize: '8px', color: '#64748b' }}>{isEn ? 'Score' : 'الدرجة'}</span>
                <strong style={{ fontSize: '13px', color: activeClassification.color }}>{currentRiskScore}</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. The 3x3 Risk Matrix & Prioritization Rule */}
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
            backgroundColor: '#ecfdf5',
            borderBottom: '1.5px solid #a7f3d0',
            color: '#065f46',
            padding: '5px 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <strong style={{ fontSize: '11px', color: '#065f46' }}>
            {matrixTitle}
          </strong>
          <span style={{ fontSize: '9.5px', color: '#b45309', fontWeight: 700 }}>
            {prioritizationRule}
          </span>
        </div>

        {/* 3x3 Matrix Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', padding: '6px' }}>
          {matrixGrid.map((cell, cIdx) => (
            <div
              key={cIdx}
              style={{
                backgroundColor: cell.bg,
                border: `1px solid ${cell.color}`,
                borderRadius: '5px',
                padding: '4px 6px',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '8.5px', color: '#475569' }}>
                  {cell.impact} × {cell.likelihood}
                </span>
                {cell.isTop && (
                  <span style={{ backgroundColor: '#dc2626', color: '#ffffff', fontSize: '7.5px', fontWeight: 800, padding: '1px 3px', borderRadius: '3px' }}>
                    TOP
                  </span>
                )}
              </div>
              <strong style={{ fontSize: '9.5px', color: cell.color, lineHeight: 1.2 }}>
                {cell.level}
              </strong>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Official Mathematical Ranking Problem (Ministry p. 53 & Al-Faez p. 85) */}
      {mathRankingProblem && (
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #cbd5e1',
            borderRadius: '6px',
            padding: '6px 10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Icon name="calculate" size={15} style={{ color: '#0284c7' }} />
              <strong style={{ fontSize: '10.5px', color: '#0f172a' }}>
                {mathRankingProblem.title}
              </strong>
            </div>
            <span style={{ fontSize: '9.5px', fontWeight: 800, color: '#059669', backgroundColor: '#ecfdf5', padding: '2px 6px', borderRadius: '4px' }}>
              {mathRankingProblem.solutionSequence}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px' }}>
            {mathRankingProblem.items.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  padding: '3px 5px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <strong style={{ fontSize: '9px', color: item.score >= 9 ? '#dc2626' : item.score >= 6 ? '#ea580c' : '#16a34a' }}>
                    {item.score >= 9 ? 'Critical' : item.score >= 6 ? 'High' : item.score >= 3 ? 'Medium' : 'Low'} ({item.score})
                  </strong>
                  <span style={{ fontSize: '8px', color: '#64748b' }}>#{item.id}</span>
                </div>
                <span style={{ fontSize: '8.5px', color: '#334155', lineHeight: 1.2 }}>
                  {item.rank}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Dual QR Student Exam Portal Card */}
      <StudentExamPortalCard
        examHash={examPortalProps?.examHash || '#exam-2-3'}
        lessonCode={examPortalProps?.lessonCode || '2-3'}
        isDual={examPortalProps?.isDual ?? true}
      />
    </div>
  );
}
