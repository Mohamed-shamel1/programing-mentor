import React, { useState } from 'react';
import Icon from '../../ui/Icon.jsx';
import { useLanguage } from '../../../i18n/LanguageContext.js';

/**
 * IncidentResponseFlowPage
 * Lesson 2-3 — Station 01: What is a Security Incident & The 6 Ordered Stages Flow
 * Clean Emerald / Shield Theme with Interactive Incident Types and 6-Stage Timeline
 */
export default function IncidentResponseFlowPage({
  badge,
  title,
  subtitle,
  dailyHumorNote,
  grandQuestion,
  foundationBox,
  incidentTypesTitle,
  incidentDefinition,
  incidentTypes = [],
  stagesFlowTitle,
  stages = [],
  quickCheck
}) {
  const { isRTL, language } = useLanguage();
  const isEn = language === 'en';

  const [selectedTypeId, setSelectedTypeId] = useState(null);
  const [selectedStageIdx, setSelectedStageIdx] = useState(null);
  const [quickCheckChoice, setQuickCheckChoice] = useState(null);
  const [showCheckFeedback, setShowCheckFeedback] = useState(false);

  return (
    <div
      className="educational-page incident-response-flow-page"
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
              {badge || (isEn ? '01 // Incident & 6 Stages' : '01 // الحادث ومراحل الاستجابة')}
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

      {/* 2. Grand Question Banner */}
      {grandQuestion && (
        <div
          style={{
            backgroundColor: '#022c22',
            color: '#ffffff',
            borderRadius: '8px',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderLeft: isRTL ? 'none' : '4px solid #34d399',
            borderRight: isRTL ? '4px solid #34d399' : 'none'
          }}
        >
          <Icon name="help" size={20} style={{ color: '#34d399', flexShrink: 0 }} />
          <span style={{ fontSize: '11.5px', fontWeight: 600, lineHeight: 1.4 }}>
            {grandQuestion}
          </span>
        </div>
      )}

      {/* 3. Golden Foundation Box */}
      {foundationBox && (
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            padding: '8px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="verified" size={16} style={{ color: '#059669' }} />
            <strong style={{ fontSize: '11.5px', color: '#0f172a' }}>
              {foundationBox.title}
            </strong>
          </div>
          <p style={{ margin: 0, fontSize: '11px', color: '#334155', lineHeight: 1.45 }}>
            {foundationBox.conceptText}
          </p>
          {foundationBox.goldenRule && (
            <div
              style={{
                backgroundColor: '#ecfdf5',
                border: '1px solid #6ee7b7',
                borderRadius: '6px',
                padding: '4px 8px',
                fontSize: '11px',
                color: '#065f46',
                fontWeight: 700
              }}
            >
              ⭐ {foundationBox.goldenRule}
            </div>
          )}
        </div>
      )}

      {/* 4. Definition & 3 Incident Types Grid */}
      <div
        style={{
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '8px 10px',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="report_problem" size={16} style={{ color: '#dc2626' }} />
            <strong style={{ fontSize: '11.5px', color: '#0f172a' }}>
              {incidentTypesTitle || (isEn ? 'Security Incidents & 3 Typical Examples' : 'ما هو الحادث الأمني؟ وأنواعه الثلاثة')}
            </strong>
          </div>
          <span style={{ fontSize: '10.5px', color: '#475569', fontStyle: 'italic' }}>
            {incidentDefinition}
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {incidentTypes.map((type) => {
            const isSelected = selectedTypeId === type.id;
            return (
              <div
                key={type.id}
                onClick={() => setSelectedTypeId(isSelected ? null : type.id)}
                style={{
                  backgroundColor: type.bgColor || '#ffffff',
                  border: `1.5px solid ${isSelected ? type.color : type.borderColor || '#e2e8f0'}`,
                  borderRadius: '6px',
                  padding: '7px 9px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 3px 8px rgba(0,0,0,0.08)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      backgroundColor: type.color,
                      color: '#ffffff',
                      fontSize: '9px',
                      fontWeight: 700,
                      padding: '1px 5px',
                      borderRadius: '4px'
                    }}
                  >
                    {type.ciaPillar}
                  </span>
                  <Icon name={type.icon || 'warning'} size={16} style={{ color: type.color }} />
                </div>

                <strong style={{ fontSize: '11px', color: '#0f172a' }}>
                  {isEn ? type.nameEn : type.nameAr}
                </strong>

                <p style={{ margin: 0, fontSize: '10px', color: '#334155', lineHeight: 1.35 }}>
                  {type.definition}
                </p>

                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: `1px dashed ${type.borderColor || '#cbd5e1'}`,
                    borderRadius: '4px',
                    padding: '3px 5px',
                    fontSize: '9.5px',
                    color: '#1e293b',
                    lineHeight: 1.3,
                    marginTop: 'auto'
                  }}
                >
                  <strong style={{ color: type.color }}>{isEn ? 'Exam Scenario: ' : 'سيناريو الامتحان: '}</strong>
                  {type.examExample}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. The 6 Ordered Stages Interactive Timeline (Clean Light Theme) */}
      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1.5px solid #a7f3d0',
          borderRadius: '10px',
          padding: '8px 12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          boxShadow: '0 2px 8px rgba(5, 150, 105, 0.06)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="linear_scale" size={16} style={{ color: '#059669' }} />
            <strong style={{ fontSize: '11px', color: '#022c22' }}>
              {stagesFlowTitle || (isEn ? 'The 6 Ordered Incident Response Stages Pipeline' : 'مخطط مراحل الاستجابة الستة المتسلسلة')}
            </strong>
          </div>
          <span style={{ fontSize: '9.5px', color: '#059669', fontWeight: 600 }}>
            {isEn ? 'Stage 1 to Stage 6 (Strict Chronological Order)' : 'يجب تنفيذ المراحل من 1 إلى 6 بالترتيب الإلزامي'}
          </span>
        </div>

        {/* 6 Stages Stepper Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '6px' }}>
          {stages.map((stage, idx) => {
            const isStageActive = selectedStageIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedStageIdx(isStageActive ? null : idx)}
                style={{
                  backgroundColor: isStageActive ? '#ecfdf5' : '#f8fafc',
                  border: `1.5px solid ${isStageActive ? '#059669' : '#e2e8f0'}`,
                  borderRadius: '6px',
                  padding: '6px 7px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '3px',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  boxShadow: isStageActive ? '0 2px 6px rgba(5, 150, 105, 0.15)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      backgroundColor: stage.color || '#3b82f6',
                      color: '#ffffff',
                      fontSize: '9px',
                      fontWeight: 800,
                      padding: '1px 5px',
                      borderRadius: '4px'
                    }}
                  >
                    #{stage.stepNumber}
                  </span>
                  <Icon name={stage.icon || 'shield'} size={14} style={{ color: stage.color || '#059669' }} />
                </div>

                <strong style={{ fontSize: '10px', color: isStageActive ? '#065f46' : '#0f172a', lineHeight: 1.25 }}>
                  {isEn ? stage.nameEn : stage.nameAr}
                </strong>

                <span style={{ fontSize: '9px', color: isStageActive ? '#047857' : '#475569', lineHeight: 1.3 }}>
                  {stage.actionSummary}
                </span>

                <div
                  style={{
                    backgroundColor: isStageActive ? '#d1fae5' : '#eff6ff',
                    border: `1px solid ${isStageActive ? '#a7f3d0' : '#bfdbfe'}`,
                    borderRadius: '3px',
                    padding: '2px 4px',
                    fontSize: '8.5px',
                    color: isStageActive ? '#065f46' : '#1e40af',
                    marginTop: 'auto',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600
                  }}
                >
                  {stage.examSignal}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. Quick Interactive Assessment Check */}
      {quickCheck && (
        <div
          style={{
            backgroundColor: '#f1f5f9',
            border: '1px solid #cbd5e1',
            borderRadius: '6px',
            padding: '7px 10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1 }}>
            <Icon name="quiz" size={16} style={{ color: '#0284c7', flexShrink: 0 }} />
            <span style={{ fontSize: '11px', color: '#0f172a', fontWeight: 600 }}>
              {quickCheck.question}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0 }}>
            {['صح', 'خطأ'].map((btnLabel) => {
              const enLabel = btnLabel === 'صح' ? 'True' : 'False';
              const displayLabel = isEn ? enLabel : btnLabel;
              const isSelected = quickCheckChoice === displayLabel;
              return (
                <button
                  key={btnLabel}
                  type="button"
                  onClick={() => {
                    setQuickCheckChoice(displayLabel);
                    setShowCheckFeedback(true);
                  }}
                  style={{
                    padding: '3px 8px',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    borderRadius: '4px',
                    border: '1px solid #94a3b8',
                    backgroundColor: isSelected ? '#0284c7' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#1e293b',
                    cursor: 'pointer'
                  }}
                >
                  {displayLabel}
                </button>
              );
            })}
          </div>

          {showCheckFeedback && (
            <div
              style={{
                fontSize: '10px',
                fontWeight: 600,
                color: quickCheckChoice === (isEn ? 'False' : 'خطأ') ? '#059669' : '#dc2626',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                maxWidth: '280px'
              }}
            >
              <span>{quickCheck.explanation}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

