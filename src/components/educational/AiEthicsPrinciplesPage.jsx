import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * AiEthicsPrinciplesPage
 * Lesson 1-4 — Page 03
 * The 4 Foundational Principles of AI Ethics, School Gate Case Study & Interactive Exam Portal
 */
export default function AiEthicsPrinciplesPage({
  badge,
  title,
  subtitle,
  dailyHumorNote,
  principlesTitle,
  principles = [],
  schoolCaseStudy,
  engineerProtocol,
  examPortalSection,
  onOpenExam
}) {
  const { isRTL, language } = useLanguage();
  const isEn = language === 'en';

  const [activePrincipleId, setActivePrincipleId] = useState('prin-fairness');
  const [selectedCaseAspect, setSelectedCaseAspect] = useState(null);

  const handleLaunchExam = () => {
    if (onOpenExam) {
      onOpenExam();
    } else {
      window.location.hash = '#exam-1-4';
    }
  };

  return (
    <div className="ai-ethics-principles-page" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', height: '100%' }}>
      {/* Station Header */}
      <div className="station-header-compact" style={{ borderBottom: '1px solid var(--color-navy-200)', paddingBottom: 'var(--space-2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span className="station-pill" style={{
              backgroundColor: 'var(--color-navy-900)',
              color: '#10b981',
              fontSize: '11px',
              fontWeight: 'bold',
              padding: '2px 8px',
              borderRadius: '999px',
              fontFamily: 'var(--font-mono)'
            }}>
              {badge || (isEn ? '03 // THE 4 ETHICAL PILLARS' : '03 // المبادئ الأربعة')}
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
            backgroundColor: '#ecfdf5',
            border: '1px dashed #10b981',
            borderRadius: '6px',
            fontSize: '11.5px',
            color: '#065f46',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Icon name="verified" size={15} style={{ color: '#059669', flexShrink: 0 }} />
            <span>{dailyHumorNote}</span>
          </div>
        )}
      </div>

      {/* The 4 Principles Interactive Matrix */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
          <Icon name="balance" size={16} style={{ color: 'var(--color-navy-700)' }} />
          <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, color: 'var(--color-navy-900)' }}>
            {principlesTitle}
          </h3>
        </div>

        {/* 4 Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
          {principles.map((prin) => {
            const isActive = activePrincipleId === prin.id;
            return (
              <div
                key={prin.id}
                onClick={() => setActivePrincipleId(prin.id)}
                style={{
                  backgroundColor: isActive ? '#f8fafc' : '#ffffff',
                  border: isActive ? `2px solid ${prin.badgeColor || '#0ea5e9'}` : '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '8px 10px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.06)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{
                      backgroundColor: prin.badgeColor || '#0ea5e9',
                      color: '#ffffff',
                      fontSize: '10px',
                      fontWeight: 800,
                      padding: '2px 6px',
                      borderRadius: '4px'
                    }}>
                      {prin.num}
                    </span>
                    <Icon name={prin.icon} size={16} style={{ color: prin.badgeColor }} />
                    <h4 style={{ fontSize: '11.5px', fontWeight: 800, margin: 0, color: '#0f172a' }}>
                      {isEn ? prin.nameEn : prin.nameAr}
                    </h4>
                  </div>
                  <span style={{ fontSize: '9.5px', color: '#64748b', fontWeight: 600 }}>
                    {isEn ? prin.nameAr : prin.nameEn}
                  </span>
                </div>

                <p style={{ margin: 0, fontSize: '11px', color: '#334155', lineHeight: 1.4, fontWeight: 500 }}>
                  {prin.officialDefinition}
                </p>

                <div style={{
                  fontSize: '10px',
                  color: '#0f172a',
                  backgroundColor: '#f1f5f9',
                  padding: '3px 6px',
                  borderRadius: '4px',
                  fontWeight: 600,
                  marginTop: '2px'
                }}>
                  {prin.plainSlogan}
                </div>

                {isActive && (
                  <div style={{
                    marginTop: '4px',
                    padding: '6px 8px',
                    backgroundColor: '#f0fdf4',
                    border: '1px solid #bbf7d0',
                    borderRadius: '4px',
                    fontSize: '10px',
                    color: '#166534',
                    lineHeight: 1.4
                  }}>
                    <strong>{isEn ? 'Exam Distinction: ' : 'ملحوظة امتحانية: '}</strong>
                    {prin.practicalRequirement}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Real-World Case Study: School Attendance Cameras */}
      {schoolCaseStudy && (
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderLeft: isRTL ? 'none' : '4px solid #3b82f6',
          borderRight: isRTL ? '4px solid #3b82f6' : 'none',
          borderRadius: '8px',
          padding: '10px 12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <span style={{
              backgroundColor: '#3b82f6',
              color: '#ffffff',
              fontSize: '9.5px',
              fontWeight: 700,
              padding: '2px 6px',
              borderRadius: '4px'
            }}>
              {schoolCaseStudy.badge}
            </span>
            <h4 style={{ fontSize: '11.5px', fontWeight: 800, margin: 0, color: '#1e3a8a' }}>
              {schoolCaseStudy.title}
            </h4>
          </div>

          <p style={{ margin: '0 0 6px 0', fontSize: '11px', color: '#334155', lineHeight: 1.4 }}>
            {schoolCaseStudy.scenario}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '6px' }}>
            {schoolCaseStudy.analysis.map((item, idx) => {
              const isSelected = selectedCaseAspect === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedCaseAspect(isSelected ? null : idx)}
                  style={{
                    backgroundColor: isSelected ? '#eff6ff' : '#f8fafc',
                    border: isSelected ? '1px solid #3b82f6' : '1px solid #e2e8f0',
                    borderRadius: '6px',
                    padding: '6px 8px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
                    <Icon name={item.icon} size={14} style={{ color: '#2563eb' }} />
                    <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#1e40af' }}>
                      {item.aspect}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '10px', color: '#475569', lineHeight: 1.4 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Engineer's 3-Step Protocol & Exam Portal Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '8px' }}>
        
        {/* Protocol Card */}
        {engineerProtocol && (
          <div style={{
            backgroundColor: '#0f172a',
            color: '#f8fafc',
            borderRadius: '8px',
            padding: '8px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icon name="engineering" size={16} style={{ color: '#38bdf8' }} />
              <h4 style={{ fontSize: '11px', fontWeight: 800, margin: 0, color: '#ffffff' }}>
                {engineerProtocol.title}
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {engineerProtocol.steps.map((st, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '10px' }}>
                  <span style={{
                    backgroundColor: '#0284c7',
                    color: '#ffffff',
                    fontWeight: 700,
                    padding: '1px 4px',
                    borderRadius: '3px',
                    fontSize: '9px'
                  }}>
                    {st.step}
                  </span>
                  <div>
                    <strong style={{ color: '#7dd3fc' }}>{st.title}: </strong>
                    <span style={{ color: '#cbd5e1' }}>{st.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exam Portal Trigger Card */}
        {examPortalSection && (
          <div style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
            color: '#ffffff',
            borderRadius: '8px',
            padding: '10px 14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '6px',
            boxShadow: '0 4px 12px rgba(49, 46, 129, 0.25)'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                <Icon name="quiz" size={18} style={{ color: '#a5b4fc' }} />
                <h4 style={{ fontSize: '11.5px', fontWeight: 800, margin: 0, color: '#e0e7ff' }}>
                  {examPortalSection.title}
                </h4>
              </div>
              <p style={{ margin: 0, fontSize: '10.5px', color: '#c7d2fe', lineHeight: 1.4 }}>
                {examPortalSection.desc}
              </p>
            </div>

            <button
              onClick={handleLaunchExam}
              style={{
                backgroundColor: '#4f46e5',
                color: '#ffffff',
                border: '1px solid #818cf8',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#4338ca'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#4f46e5'; }}
            >
              <Icon name="launch" size={14} />
              <span>{isEn ? 'Launch Interactive Exam Bank & 6-Mark Rubric' : 'بدء الاختبار الوزاري التفاعلي ومسألة الـ 6 درجات'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
