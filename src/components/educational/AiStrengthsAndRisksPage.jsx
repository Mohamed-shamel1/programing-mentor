import React from 'react';
import Icon from '../ui/Icon.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';
import StudentExamPortalCard from './exam/StudentExamPortalCard.jsx';

/**
 * AiStrengthsAndRisksPage
 * Lesson 1-3 — Page 03
 * AI Strengths, 7 Critical Cautions & Dual QR Exam Portal
 */
export default function AiStrengthsAndRisksPage({
  badge,
  title,
  subtitle,
  coreSummaryCard,
  strengthsTitle,
  strengths = [],
  risksTitle,
  risks = [],
  caseStudies = [],
  examPortalSection,
  onOpenExam
}) {
  const { isRTL, language } = useLanguage();
  const isEn = language === 'en';

  return (
    <div className="strengths-risks-page" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', height: '100%' }}>
      {/* Station Header */}
      <div className="station-header-compact" style={{ borderBottom: '1px solid var(--color-navy-200)', paddingBottom: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="station-pill" style={{
              backgroundColor: 'var(--color-navy-900)',
              color: '#ec4899',
              fontSize: '10.5px',
              fontWeight: 'bold',
              padding: '2px 8px',
              borderRadius: '999px',
              fontFamily: 'var(--font-mono)'
            }}>
              {badge || '03 // STRENGTHS & RISKS MATRIX'}
            </span>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: 'var(--color-navy-900)' }}>
              {title}
            </h2>
          </div>
          <span style={{ fontSize: '10.5px', color: 'var(--color-navy-600)', fontWeight: 500 }}>
            {subtitle}
          </span>
        </div>
      </div>

      {/* Quote Banner */}
      {coreSummaryCard && (
        <div style={{
          backgroundColor: '#0f172a',
          color: '#ffffff',
          borderRadius: '6px',
          padding: '6px 10px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '11px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
        }}>
          <span style={{
            backgroundColor: '#f59e0b',
            color: '#000000',
            fontWeight: 800,
            fontSize: '9.5px',
            padding: '2px 6px',
            borderRadius: '4px',
            flexShrink: 0
          }}>
            {coreSummaryCard.highlight}
          </span>
          <p style={{ margin: 0, lineHeight: 1.35, color: '#f1f5f9', fontWeight: 500 }}>
            "{coreSummaryCard.quote}"
          </p>
        </div>
      )}

      {/* Two Columns Matrix: Strengths (Left/Right) vs Cautions */}
      <div className="matrix-columns" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.3fr',
        gap: 'var(--space-2)',
        flex: 1
      }}>
        {/* Column 1: Strengths (3 Points) */}
        <div style={{
          backgroundColor: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '6px',
          padding: '6px 8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid #7dd3fc', paddingBottom: '4px' }}>
            <span style={{ backgroundColor: '#0284c7', color: '#ffffff', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>
              ✦
            </span>
            <strong style={{ fontSize: '11.5px', color: '#0369a1' }}>
              {strengthsTitle || (isEn ? 'Where AI Excels (3 Superpowers)' : 'ما يبرع فيه الذكاء الاصطناعي (3 نقاط)')}
            </strong>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
            {strengths.map((st) => (
              <div key={st.num} style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e0f2fe',
                borderRadius: '5px',
                padding: '5px 7px',
                fontSize: '10.5px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
                  <span style={{ fontWeight: 800, color: '#0284c7', fontFamily: 'var(--font-mono)' }}>#{st.num}</span>
                  <strong style={{ color: '#0f172a' }}>{st.title}</strong>
                </div>
                <p style={{ margin: '1px 0', color: '#334155', lineHeight: 1.35 }}>{st.desc}</p>
                <div style={{ fontSize: '9.5px', color: '#0369a1', backgroundColor: '#f0f9ff', padding: '2px 5px', borderRadius: '3px', marginTop: '3px' }}>
                  💡 {st.example}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: 7 Cautions & Risks */}
        <div style={{
          backgroundColor: '#fdf2f8',
          border: '1px solid #fbcfe8',
          borderRadius: '6px',
          padding: '6px 8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid #f472b6', paddingBottom: '4px' }}>
            <span style={{ backgroundColor: '#db2777', color: '#ffffff', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>
              ⚠️
            </span>
            <strong style={{ fontSize: '11.5px', color: '#9d174d' }}>
              {risksTitle || (isEn ? 'How to Exercise Caution (7 Critical Risks)' : 'إزاي تحذر من الذكاء الاصطناعي (7 محاذير)')}
            </strong>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '4px',
            flex: 1
          }}>
            {risks.map((rk) => (
              <div key={rk.num} style={{
                backgroundColor: '#ffffff',
                border: '1px solid #fce7f3',
                borderRadius: '4px',
                padding: '4px 6px',
                fontSize: '10px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1px' }}>
                  <span style={{ fontWeight: 800, color: '#db2777', fontFamily: 'var(--font-mono)', fontSize: '9.5px' }}>
                    #{rk.num}
                  </span>
                  <strong style={{ color: '#831843', fontSize: '10px', lineHeight: 1.25 }}>
                    {rk.title}
                  </strong>
                </div>
                <p style={{ margin: 0, color: '#475569', lineHeight: 1.3, fontSize: '9.5px' }}>
                  {rk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case studies brief */}
      {caseStudies && caseStudies.length > 0 && (
        <div className="case-studies-row" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-2)',
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '6px',
          padding: '4px 8px'
        }}>
          {caseStudies.map((cs, idx) => (
            <div key={idx} style={{ fontSize: '10px' }}>
              <strong style={{ color: '#0f172a' }}>🩺 {cs.title}: </strong>
              <span style={{ color: '#475569' }}>{cs.context} </span>
              <strong style={{ color: '#047857' }}>({cs.takeaway})</strong>
            </div>
          ))}
        </div>
      )}

      {/* Dual QR Code Exam Portal Card */}
      <div className="exam-card-wrap" style={{ marginTop: '2px' }}>
        <StudentExamPortalCard
          lessonCode="1-3"
          examHash="#exam-1-3"
          isDual={true}
          onPreviewExam={(targetUrl) => {
            if (onOpenExam) {
              onOpenExam(targetUrl);
            } else if (typeof window !== 'undefined') {
              if (targetUrl) {
                window.location.href = targetUrl;
              } else {
                window.location.hash = '#exam-1-3';
              }
              window.location.reload();
            }
          }}
        />
      </div>
    </div>
  );
}
