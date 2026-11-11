import React, { useState } from 'react';
import Icon from '../../ui/Icon.jsx';
import { useLanguage } from '../../../i18n/LanguageContext.js';

/**
 * OrderMattersCaseStudyPage
 * Lesson 2-3 — Station 02: Why Order Matters, The 6-Mark Essay & School Decision Lab
 * Deep Analysis & Interactive Decision Lab
 */
export default function OrderMattersCaseStudyPage({
  badge,
  title,
  subtitle,
  dailyHumorNote,
  orderDilemmaBox,
  essayQuestionBox,
  schoolCaseStudy
}) {
  const { isRTL, language } = useLanguage();
  const isEn = language === 'en';

  const [showModelAnswer, setShowModelAnswer] = useState(true);
  const [selectedDecision, setSelectedDecision] = useState(null);
  const [activePlanStep, setActivePlanStep] = useState(0);

  return (
    <div
      className="educational-page order-matters-case-study-page"
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
              {badge || (isEn ? '02 // Order & Essay' : '02 // سر الترتيب وسؤال الـ 6 درجات')}
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

      {/* 2. The Core Engineering Dilemma (Why Order Matters) */}
      {orderDilemmaBox && (
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            overflow: 'hidden'
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
              gap: '6px'
            }}
          >
            <Icon name="gavel" size={15} style={{ color: '#059669' }} />
            <strong style={{ fontSize: '11px', color: '#065f46' }}>
              {orderDilemmaBox.title}
            </strong>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
            {/* Rule 1: Containment before Eradication */}
            <div
              style={{
                padding: '7px 11px',
                backgroundColor: '#fffbeb',
                borderRight: isRTL ? 'none' : '1px solid #fde68a',
                borderLeft: isRTL ? '1px solid #fde68a' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '3px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span
                  style={{
                    backgroundColor: '#d97706',
                    color: '#ffffff',
                    fontSize: '9px',
                    fontWeight: 700,
                    padding: '1px 5px',
                    borderRadius: '4px'
                  }}
                >
                  {isEn ? 'Rule 1' : 'القاعدة الأولى'}
                </span>
                <strong style={{ fontSize: '10.5px', color: '#92400e' }}>
                  {orderDilemmaBox.rule1.title}
                </strong>
              </div>
              <p style={{ margin: 0, fontSize: '9.5px', color: '#78350f', lineHeight: 1.35 }}>
                {orderDilemmaBox.rule1.reason}
              </p>
            </div>

            {/* Rule 2: Eradication before Recovery */}
            <div
              style={{
                padding: '7px 11px',
                backgroundColor: '#fef2f2',
                display: 'flex',
                flexDirection: 'column',
                gap: '3px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span
                  style={{
                    backgroundColor: '#dc2626',
                    color: '#ffffff',
                    fontSize: '9px',
                    fontWeight: 700,
                    padding: '1px 5px',
                    borderRadius: '4px'
                  }}
                >
                  {isEn ? 'Rule 2' : 'القاعدة الثانية'}
                </span>
                <strong style={{ fontSize: '10.5px', color: '#991b1b' }}>
                  {orderDilemmaBox.rule2.title}
                </strong>
              </div>
              <p style={{ margin: 0, fontSize: '9.5px', color: '#7f1d1d', lineHeight: 1.35 }}>
                {orderDilemmaBox.rule2.reason}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 3. Official 6-Mark Exam Essay Question (Book p. 51 & Al-Faez p. 83) */}
      {essayQuestionBox && (
        <div
          style={{
            backgroundColor: '#fefefe',
            border: '1.5px solid #059669',
            borderRadius: '8px',
            padding: '7px 11px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
          }}
        >
          {/* Header & Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                backgroundColor: '#059669',
                color: '#ffffff',
                fontSize: '9.5px',
                fontWeight: 700,
                padding: '2px 7px',
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
              fontSize: '11px',
              color: '#0f172a',
              fontWeight: 700,
              lineHeight: 1.4,
              backgroundColor: '#f0fdf4',
              padding: '5px 8px',
              borderRadius: '5px',
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
                gap: '7px',
                marginTop: '1px'
              }}
            >
              {essayQuestionBox.points.map((pt, pIdx) => (
                <div
                  key={pIdx}
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '5px',
                    padding: '5px 7px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px'
                  }}
                >
                  <strong style={{ fontSize: '10px', color: pIdx === 0 ? '#0284c7' : '#dc2626' }}>
                    {pt.title}
                  </strong>
                  <p style={{ margin: 0, fontSize: '9.5px', color: '#334155', lineHeight: 1.35 }}>
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
                fontSize: '9.5px',
                fontWeight: 600,
                color: '#065f46',
                backgroundColor: '#ecfdf5',
                padding: '3px 7px',
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

      {/* 4. Think as an Engineer: School Ransomware Case Study (Book p. 52) */}
      {schoolCaseStudy && (
        <div
          style={{
            border: '1.5px solid #0284c7',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            padding: '7px 11px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                backgroundColor: '#0284c7',
                color: '#ffffff',
                fontSize: '9.5px',
                fontWeight: 700,
                padding: '2px 7px',
                borderRadius: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Icon name="school" size={13} style={{ color: '#ffffff' }} />
              {schoolCaseStudy.title}
            </span>
            <span style={{ fontSize: '9px', color: '#0369a1', fontWeight: 600 }}>
              {isEn ? 'Official Case Study (p. 52)' : 'دراسة حالة كتاب الوزارة (ص 52)'}
            </span>
          </div>

          {/* Scenario Description */}
          <p
            style={{
              margin: 0,
              fontSize: '10px',
              color: '#0f172a',
              lineHeight: 1.35,
              backgroundColor: '#f0f9ff',
              padding: '4px 7px',
              borderRadius: '4px',
              border: '1px dashed #7dd3fc'
            }}
          >
            <strong>📋 {isEn ? 'Incident: ' : 'السيناريو: '}</strong>
            {schoolCaseStudy.scenario}
          </p>

          {/* Decision Buttons & Action Plan Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '7px' }}>
            {/* Interactive Decision Selector */}
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #cbd5e1',
                borderRadius: '5px',
                padding: '6px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#1e293b' }}>
                {schoolCaseStudy.immediateChoiceQuestion}
              </span>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <button
                  type="button"
                  onClick={() => setSelectedDecision('restore')}
                  style={{
                    padding: '3px 6px',
                    fontSize: '9px',
                    fontWeight: 700,
                    borderRadius: '4px',
                    border: '1px solid #f87171',
                    backgroundColor: selectedDecision === 'restore' ? '#fef2f2' : '#ffffff',
                    color: '#dc2626',
                    cursor: 'pointer',
                    textAlign: isRTL ? 'right' : 'left'
                  }}
                >
                  ❌ {isEn ? 'Restore from backup immediately' : 'استعادة النسخ الاحتياطي فوراً'}
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedDecision('order')}
                  style={{
                    padding: '3px 6px',
                    fontSize: '9px',
                    fontWeight: 700,
                    borderRadius: '4px',
                    border: '1px solid #34d399',
                    backgroundColor: selectedDecision === 'order' ? '#ecfdf5' : '#ffffff',
                    color: '#059669',
                    cursor: 'pointer',
                    textAlign: isRTL ? 'right' : 'left'
                  }}
                >
                  ✅ {isEn ? 'Follow the six stages in order' : 'اتباع المراحل الستة بالترتيب'}
                </button>
              </div>

              {selectedDecision && (
                <div
                  style={{
                    fontSize: '8.5px',
                    lineHeight: 1.25,
                    padding: '3px 5px',
                    borderRadius: '3px',
                    backgroundColor: selectedDecision === 'order' ? '#dcfce7' : '#fee2e2',
                    color: selectedDecision === 'order' ? '#14532d' : '#7f1d1d',
                    fontWeight: 600
                  }}
                >
                  {selectedDecision === 'order'
                    ? schoolCaseStudy.correctChoice
                    : (isEn ? 'Fatal Mistake! Restoring immediately corrupts backups too!' : 'خطأ فادح! الاستعادة الفورية ستدمر النسخ الاحتياطية أيضاً!')}
                </div>
              )}
            </div>

            {/* 3 Step Action Plan */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
              {schoolCaseStudy.actionPlan.map((act, idx) => (
                <div
                  key={idx}
                  onClick={() => setActivePlanStep(idx)}
                  style={{
                    backgroundColor: activePlanStep === idx ? '#f0f9ff' : '#f8fafc',
                    border: `1.5px solid ${activePlanStep === idx ? '#0284c7' : '#e2e8f0'}`,
                    borderRadius: '4px',
                    padding: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <strong style={{ fontSize: '9.5px', color: '#0369a1' }}>
                    {act.step}
                  </strong>
                  <p style={{ margin: 0, fontSize: '9px', color: '#334155', lineHeight: 1.25 }}>
                    {act.action}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Priority Comparison Callout */}
          {schoolCaseStudy.riskComparison && (
            <div
              style={{
                backgroundColor: '#fffbeb',
                border: '1px solid #fde68a',
                borderRadius: '4px',
                padding: '4px 7px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '8px',
                fontSize: '9px',
                color: '#78350f'
              }}
            >
              <div>
                <strong>⚠️ {schoolCaseStudy.riskComparison.riskA}</strong>
              </div>
              <div>
                <span>{schoolCaseStudy.riskComparison.riskB}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

