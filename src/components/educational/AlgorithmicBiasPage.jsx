import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * AlgorithmicBiasPage
 * Lesson 1-4 — Page 01
 * Algorithmic Bias, 3 Root Causes & The Proxy Variable Trap
 */
export default function AlgorithmicBiasPage({
  badge,
  title,
  subtitle,
  dailyHumorNote,
  grandQuestion,
  definitionCard,
  causesTitle,
  causes = [],
  caseStudy,
  interactiveCheck
}) {
  const { isRTL, language } = useLanguage();
  const isEn = language === 'en';

  const [showPlainDef, setShowPlainDef] = useState(false);
  const [selectedCauseId, setSelectedCauseId] = useState(null);
  const [showCaseAnalysis, setShowCaseAnalysis] = useState(false);
  const [selectedCheckOption, setSelectedCheckOption] = useState(null);
  const [hasAnsweredCheck, setHasAnsweredCheck] = useState(false);

  return (
    <div className="algorithmic-bias-page" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', height: '100%' }}>
      {/* Station Header */}
      <div className="station-header-compact" style={{ borderBottom: '1px solid var(--color-navy-200)', paddingBottom: 'var(--space-2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span className="station-pill" style={{
              backgroundColor: 'var(--color-navy-900)',
              color: '#38bdf8',
              fontSize: '11px',
              fontWeight: 'bold',
              padding: '2px 8px',
              borderRadius: '999px',
              fontFamily: 'var(--font-mono)'
            }}>
              {badge || (isEn ? '01 // ALGORITHMIC BIAS' : '01 // التحيز الخوارزمي')}
            </span>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: 'var(--color-navy-900)' }}>
              {title}
            </h2>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--color-navy-600)', fontWeight: 500 }}>
            {subtitle}
          </span>
        </div>

        {dailyHumorNote && (
          <div className="humor-banner" style={{
            marginTop: '6px',
            padding: '5px 10px',
            backgroundColor: '#fef3c7',
            border: '1px dashed #f59e0b',
            borderRadius: '6px',
            fontSize: '11.5px',
            color: '#92400e',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Icon name="lightbulb" size={15} style={{ color: '#d97706', flexShrink: 0 }} />
            <span>{dailyHumorNote}</span>
          </div>
        )}
      </div>

      {/* Grand Question Banner */}
      {grandQuestion && (
        <div style={{
          backgroundColor: '#0f172a',
          color: '#ffffff',
          borderRadius: '8px',
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          borderLeft: isRTL ? 'none' : '4px solid #38bdf8',
          borderRight: isRTL ? '4px solid #38bdf8' : 'none',
        }}>
          <Icon name="help" size={20} style={{ color: '#38bdf8', flexShrink: 0 }} />
          <span style={{ fontSize: '12px', fontWeight: 600, lineHeight: 1.4 }}>
            {grandQuestion}
          </span>
        </div>
      )}

      {/* Definition Card */}
      {definitionCard && (
        <div style={{
          backgroundColor: '#ffffff',
          border: '1.5px solid #0284c7',
          borderRadius: '8px',
          padding: '10px 14px',
          boxShadow: '0 2px 4px rgba(2, 132, 199, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                backgroundColor: '#e0f2fe',
                color: '#0369a1',
                padding: '3px 8px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Icon name={definitionCard.icon || 'balance'} size={14} />
                {isEn ? definitionCard.termEn : definitionCard.termAr}
                <span style={{ opacity: 0.7, fontWeight: 500, fontSize: '10.5px' }}>
                  ({isEn ? definitionCard.termAr : definitionCard.termEn})
                </span>
              </span>
              <span style={{ fontSize: '10.5px', color: '#64748b', fontWeight: 600 }}>
                {isEn ? 'OFFICIAL MINISTERIAL DEFINITION' : 'التعريف الوزاري المعتمد للامتحان'}
              </span>
            </div>
            <button
              onClick={() => setShowPlainDef(!showPlainDef)}
              style={{
                backgroundColor: showPlainDef ? '#f0fdf4' : '#f8fafc',
                border: showPlainDef ? '1px solid #16a34a' : '1px solid #cbd5e1',
                color: showPlainDef ? '#15803d' : '#475569',
                fontSize: '10.5px',
                padding: '3px 8px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.15s ease'
              }}
            >
              <Icon name="psychology" size={13} />
              {showPlainDef 
                ? (isEn ? 'Hide Plain Breakdown' : 'إخفاء الشرح بالبلدي') 
                : (isEn ? 'Explain Like I am 15' : 'الشرح بالبلدي والتطبيق')}
            </button>
          </div>

          <p style={{ margin: 0, fontSize: '12px', lineHeight: 1.5, color: '#0f172a', fontWeight: 500 }}>
            {definitionCard.officialExamDefinition}
          </p>

          {showPlainDef && (
            <div style={{
              marginTop: '8px',
              padding: '8px 10px',
              backgroundColor: '#f0fdf4',
              border: '1px solid #86efac',
              borderRadius: '6px',
              fontSize: '11.5px',
              color: '#166534',
              lineHeight: 1.5
            }}>
              <strong>{isEn ? 'Real-World Hook: ' : 'بالمختصر المفيد: '}</strong>
              {definitionCard.plainExplanation}
            </div>
          )}

          {definitionCard.engineerGoldenRule && (
            <div style={{
              marginTop: '6px',
              fontSize: '10.5px',
              color: '#b45309',
              fontWeight: 600,
              backgroundColor: '#fffbeb',
              padding: '3px 8px',
              borderRadius: '4px',
              border: '1px solid #fde68a'
            }}>
              {definitionCard.engineerGoldenRule}
            </div>
          )}
        </div>
      )}

      {/* 3 Core Causes Grid */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
          <Icon name="account_tree" size={16} style={{ color: 'var(--color-navy-700)' }} />
          <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, color: 'var(--color-navy-900)' }}>
            {causesTitle}
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px' }}>
          {causes.map((c) => {
            const isSelected = selectedCauseId === c.id;
            return (
              <div
                key={c.id}
                onClick={() => setSelectedCauseId(isSelected ? null : c.id)}
                style={{
                  backgroundColor: isSelected ? '#f8fafc' : '#ffffff',
                  border: isSelected ? '1.5px solid #0284c7' : '1px solid #e2e8f0',
                  borderRadius: '6px',
                  padding: '8px 10px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{
                      backgroundColor: '#0284c7',
                      color: '#ffffff',
                      fontSize: '10px',
                      fontWeight: 800,
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {c.num}
                    </span>
                    <Icon name={c.icon} size={15} style={{ color: '#0369a1' }} />
                    <h4 style={{ fontSize: '11.5px', fontWeight: 700, margin: 0, color: '#0f172a' }}>
                      {c.title}
                    </h4>
                  </div>
                  <Icon name={isSelected ? 'expand_less' : 'expand_more'} size={15} style={{ color: '#94a3b8' }} />
                </div>

                <p style={{ margin: 0, fontSize: '11px', color: '#334155', lineHeight: 1.4 }}>
                  {c.desc}
                </p>

                <div style={{
                  fontSize: '10px',
                  color: '#0369a1',
                  backgroundColor: '#f0f9ff',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontWeight: 600,
                  marginTop: '2px'
                }}>
                  {isEn ? 'Exam Keyword: ' : 'المصطلح الامتحاني: '}
                  {c.examKeyword}
                </div>

                {isSelected && c.realExample && (
                  <div style={{
                    marginTop: '4px',
                    padding: '6px 8px',
                    backgroundColor: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: '4px',
                    fontSize: '10.5px',
                    color: '#991b1b',
                    lineHeight: 1.4
                  }}>
                    <strong>{isEn ? 'Realistic Pitfall: ' : 'مثال واقعي: '}</strong>
                    {c.realExample}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Card */}
      {caseStudy && (
        <div style={{
          backgroundColor: '#fafaf9',
          border: '1px solid #e7e5e4',
          borderLeft: isRTL ? 'none' : '4px solid #f97316',
          borderRight: isRTL ? '4px solid #f97316' : 'none',
          borderRadius: '6px',
          padding: '8px 12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                backgroundColor: '#f97316',
                color: '#ffffff',
                fontSize: '9.5px',
                fontWeight: 700,
                padding: '2px 6px',
                borderRadius: '4px'
              }}>
                {caseStudy.badge || 'CASE STUDY'}
              </span>
              <h4 style={{ fontSize: '11.5px', fontWeight: 800, margin: 0, color: '#1c1917' }}>
                {caseStudy.title}
              </h4>
            </div>
            <button
              onClick={() => setShowCaseAnalysis(!showCaseAnalysis)}
              style={{
                fontSize: '10px',
                color: '#c2410c',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                textDecoration: 'underline'
              }}
            >
              {showCaseAnalysis ? (isEn ? 'Less' : 'أقل') : (isEn ? 'View Analysis' : 'تفاصيل التحليل الهندسي')}
            </button>
          </div>

          <p style={{ margin: 0, fontSize: '11px', color: '#44403c', lineHeight: 1.4 }}>
            {caseStudy.scenario}
          </p>

          {showCaseAnalysis && (
            <div style={{ marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '10.5px' }}>
              <div style={{ color: '#b91c1c' }}>
                <strong>{isEn ? 'Failure Trigger: ' : 'ماذا حدث: '}</strong>
                {caseStudy.whatHappened}
              </div>
              <div style={{ color: '#7c2d12' }}>
                <strong>{isEn ? 'Root Cause: ' : 'السبب الجذري: '}</strong>
                {caseStudy.whyItFailed}
              </div>
              <div style={{ color: '#15803d', fontWeight: 600 }}>
                <strong>{isEn ? 'Engineering Remedy: ' : 'الحل الهندسي: '}</strong>
                {caseStudy.lessonLearned}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Quick Interactive Exam Check */}
      {interactiveCheck && (
        <div style={{
          backgroundColor: '#f8fafc',
          border: '1px solid #cbd5e1',
          borderRadius: '6px',
          padding: '8px 12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#0f172a' }}>
              {interactiveCheck.question}
            </span>
            <span style={{ fontSize: '9.5px', color: '#64748b', fontWeight: 600 }}>
              {interactiveCheck.examRef}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '6px' }}>
            {interactiveCheck.options.map((opt, idx) => {
              const isSelected = selectedCheckOption === idx;
              let btnBg = '#ffffff';
              let btnBorder = '#cbd5e1';
              let btnColor = '#334155';

              if (hasAnsweredCheck) {
                if (opt.isCorrect) {
                  btnBg = '#dcfce7';
                  btnBorder = '#22c55e';
                  btnColor = '#15803d';
                } else if (isSelected && !opt.isCorrect) {
                  btnBg = '#fee2e2';
                  btnBorder = '#ef4444';
                  btnColor = '#b91c1c';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedCheckOption(idx);
                    setHasAnsweredCheck(true);
                  }}
                  style={{
                    backgroundColor: btnBg,
                    border: `1px solid ${btnBorder}`,
                    color: btnColor,
                    padding: '6px 8px',
                    borderRadius: '4px',
                    fontSize: '10.5px',
                    fontWeight: isSelected ? 700 : 500,
                    textAlign: isRTL ? 'right' : 'left',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {opt.text}
                </button>
              );
            })}
          </div>

          {hasAnsweredCheck && (
            <div style={{
              marginTop: '6px',
              fontSize: '10.5px',
              fontWeight: 600,
              color: interactiveCheck.options[selectedCheckOption]?.isCorrect ? '#15803d' : '#b91c1c'
            }}>
              {interactiveCheck.options[selectedCheckOption]?.isCorrect
                ? `✓ ${interactiveCheck.options[selectedCheckOption]?.feedback || (isEn ? 'Correct!' : 'إجابة صحيحة!')}`
                : `✗ ${isEn ? 'Incorrect. Processing speed does not affect ethical bias!' : 'إجابة غير صحيحة. سرعة المعالجة تؤثر فقط على زمن الحساب وليس على عدالة القرارات!'}`}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
