import React, { useState } from 'react';
import Icon from '../../ui/Icon.jsx';
import StudentExamPortalCard from '../exam/StudentExamPortalCard.jsx';
import { useLanguage } from '../../../i18n/LanguageContext.js';

/**
 * ZeroTrustArchitecturePage
 * Lesson 2-2 — Station 03: The Paradigm Shift to Zero Trust & Hospital Case Study Lab
 * Dual QR Exam Portal Integration
 */
export default function ZeroTrustArchitecturePage({
  badge,
  title,
  subtitle,
  dailyHumorNote,
  paradigmShift,
  hospitalCaseStudy,
  examPortalProps
}) {
  const { isRTL, language } = useLanguage();
  const isEn = language === 'en';

  const [selectedSolutionIdx, setSelectedSolutionIdx] = useState(0);

  return (
    <div
      className="educational-page zero-trust-architecture-page"
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
              {badge || (isEn ? '03 // Zero Trust Lab' : '03 // ثورة انعدام الثقة والمختبر')}
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

      {/* 2. Side-by-Side Paradigm Shift: Perimeter vs Zero Trust ( ص 71) */}
      {paradigmShift && (
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
              {paradigmShift.title}
            </strong>
            <span style={{ fontSize: '9.5px', color: '#94a3b8' }}>
              {isEn ? 'Old Castle Model vs Modern Verification' : 'نموذج القلعة القديم مقابل التحقق المستمر'}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
            {/* Old Model: Perimeter */}
            <div
              style={{
                padding: '8px 12px',
                backgroundColor: '#fffbeb',
                borderRight: isRTL ? 'none' : '1px solid #fde68a',
                borderLeft: isRTL ? '1px solid #fde68a' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
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
                  {isEn ? 'Legacy Model' : 'النموذج التقليدي'}
                </span>
                <strong style={{ fontSize: '11px', color: '#92400e' }}>
                  {paradigmShift.oldModel.title}
                </strong>
              </div>

              <div style={{ fontSize: '10px', color: '#78350f', fontWeight: 600 }}>
                {paradigmShift.oldModel.premise}
              </div>

              <p style={{ margin: 0, fontSize: '9.5px', color: '#451a03', lineHeight: 1.35 }}>
                {paradigmShift.oldModel.howItWorked}
              </p>

              <div
                style={{
                  backgroundColor: '#fef3c7',
                  border: '1px dashed #f59e0b',
                  borderRadius: '5px',
                  padding: '4px 6px',
                  fontSize: '9.5px',
                  color: '#b45309',
                  lineHeight: 1.3,
                  marginTop: 'auto'
                }}
              >
                <strong>⚠️ {isEn ? 'Why it collapsed: ' : 'سبب الانهيار: '}</strong>
                {paradigmShift.oldModel.whyItFailed}
              </div>
            </div>

            {/* New Model: Zero Trust */}
            <div
              style={{
                padding: '8px 12px',
                backgroundColor: '#ecfdf5',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span
                  style={{
                    backgroundColor: '#059669',
                    color: '#ffffff',
                    fontSize: '9px',
                    fontWeight: 700,
                    padding: '1px 5px',
                    borderRadius: '4px'
                  }}
                >
                  {isEn ? 'Modern Standard' : 'المعيار الحديث'}
                </span>
                <strong style={{ fontSize: '11px', color: '#065f46' }}>
                  {paradigmShift.newModel.title}
                </strong>
              </div>

              <div style={{ fontSize: '10px', color: '#047857', fontWeight: 700 }}>
                {paradigmShift.newModel.premise}
              </div>

              <p style={{ margin: 0, fontSize: '9.5px', color: '#064e3b', lineHeight: 1.35 }}>
                {paradigmShift.newModel.howItWorks}
              </p>

              <div
                style={{
                  backgroundColor: '#d1fae5',
                  border: '1px dashed #10b981',
                  borderRadius: '5px',
                  padding: '4px 6px',
                  fontSize: '9.5px',
                  color: '#047857',
                  lineHeight: 1.3,
                  marginTop: 'auto'
                }}
              >
                <strong>🛡️ {isEn ? 'Core Benefit: ' : 'الميزة الجوهرية: '}</strong>
                {paradigmShift.newModel.benefits}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Real-World Engineer Lab: Hospital Case Study (Book p. 73) */}
      {hospitalCaseStudy && (
        <div
          style={{
            border: '1.5px solid #0284c7',
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            padding: '8px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                backgroundColor: '#0284c7',
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
              <Icon name="local_hospital" size={13} style={{ color: '#ffffff' }} />
              {hospitalCaseStudy.title}
            </span>
            <span style={{ fontSize: '9.5px', color: '#0369a1', fontWeight: 600 }}>
              {isEn ? 'Exam Application Problem (p. 73)' : 'مسألة تطبيق امتحانية (ص 73)'}
            </span>
          </div>

          {/* Scenario */}
          <p
            style={{
              margin: 0,
              fontSize: '10.5px',
              color: '#0f172a',
              lineHeight: 1.4,
              backgroundColor: '#f0f9ff',
              padding: '5px 8px',
              borderRadius: '5px',
              border: '1px dashed #7dd3fc'
            }}
          >
            <strong>📋 {isEn ? 'Scenario: ' : 'السيناريو: '}</strong>
            {hospitalCaseStudy.scenario}
          </p>

          {/* Solutions & Remaining Threat Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '8px' }}>
            {/* Engineer Solutions */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              {hospitalCaseStudy.solutions.map((sol, sIdx) => {
                const isSelected = selectedSolutionIdx === sIdx;
                return (
                  <div
                    key={sIdx}
                    onClick={() => setSelectedSolutionIdx(isSelected ? null : sIdx)}
                    style={{
                      backgroundColor: isSelected ? '#f0f9ff' : '#f8fafc',
                      border: `1.5px solid ${isSelected ? '#0284c7' : '#cbd5e1'}`,
                      borderRadius: '5px',
                      padding: '5px 7px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <strong style={{ fontSize: '10px', color: '#0369a1' }}>
                      {sol.measure}
                    </strong>
                    <p style={{ margin: 0, fontSize: '9.5px', color: '#334155', lineHeight: 1.3 }}>
                      {sol.howItHelps}
                    </p>
                    <span style={{ fontSize: '9px', color: '#059669', fontWeight: 600, marginTop: 'auto' }}>
                      ✓ {sol.threatAddressed}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Remaining Threat (Exam Trap) */}
            {hospitalCaseStudy.remainingThreat && (
              <div
                style={{
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: '5px',
                  padding: '5px 7px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="report" size={13} style={{ color: '#dc2626' }} />
                  <strong style={{ fontSize: '9.5px', color: '#991b1b' }}>
                    {hospitalCaseStudy.remainingThreat.threatTitle}
                  </strong>
                </div>
                <p style={{ margin: 0, fontSize: '9px', color: '#7f1d1d', lineHeight: 1.3 }}>
                  {hospitalCaseStudy.remainingThreat.threatText}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. Dual QR Student Exam Portal Card */}
      <StudentExamPortalCard
        examHash={examPortalProps?.examHash || '#exam-2-2'}
        lessonCode={examPortalProps?.lessonCode || '2-2'}
        isDual={examPortalProps?.isDual ?? true}
      />
    </div>
  );
}
