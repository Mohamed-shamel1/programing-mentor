import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * PrivacyAndBlackBoxPage
 * Lesson 1-4 — Page 02
 * Privacy Hazards, The Black-Box Problem, Explainable AI (XAI) & The Responsibility Dilemma
 */
export default function PrivacyAndBlackBoxPage({
  badge,
  title,
  subtitle,
  dailyHumorNote,
  privacySection,
  blackBoxSection,
  responsibilitySection
}) {
  const { isRTL, language } = useLanguage();
  const isEn = language === 'en';

  const [activePrivacyId, setActivePrivacyId] = useState(null);
  const [activeModelView, setActiveModelView] = useState('xai'); // 'black_box' | 'xai'
  const [selectedStakeholder, setSelectedStakeholder] = useState(null);

  return (
    <div className="privacy-blackbox-page" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', height: '100%' }}>
      {/* Station Header */}
      <div className="station-header-compact" style={{ borderBottom: '1px solid var(--color-navy-200)', paddingBottom: 'var(--space-2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span className="station-pill" style={{
              backgroundColor: 'var(--color-navy-900)',
              color: '#a855f7',
              fontSize: '11px',
              fontWeight: 'bold',
              padding: '2px 8px',
              borderRadius: '999px',
              fontFamily: 'var(--font-mono)'
            }}>
              {badge || (isEn ? '02 // PRIVACY & THE BLACK BOX' : '02 // الخصوصية والصندوق الأسود')}
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
            backgroundColor: '#f3e8ff',
            border: '1px dashed #a855f7',
            borderRadius: '6px',
            fontSize: '11.5px',
            color: '#6b21a8',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Icon name="psychology" size={15} style={{ color: '#9333ea', flexShrink: 0 }} />
            <span>{dailyHumorNote}</span>
          </div>
        )}
      </div>

      {/* Two Column Layout: Privacy (Left/Right) & Black-Box (Right/Left) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '10px' }}>
        
        {/* Section 1: Privacy Hazards */}
        {privacySection && (
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '10px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icon name="verified_user" size={18} style={{ color: '#7c3aed' }} />
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>
                {privacySection.title}
              </h3>
            </div>

            <div style={{
              fontSize: '11px',
              backgroundColor: '#f5f3ff',
              padding: '6px 8px',
              borderRadius: '6px',
              color: '#5b21b6',
              fontWeight: 500,
              lineHeight: 1.4
            }}>
              <strong>{isEn ? 'Core Definition: ' : 'المفهوم الأساسي: '}</strong>
              {privacySection.definition}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {privacySection.pillars.map((p) => {
                const isOpen = activePrivacyId === p.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => setActivePrivacyId(isOpen ? null : p.id)}
                    style={{
                      border: isOpen ? '1.5px solid #8b5cf6' : '1px solid #e2e8f0',
                      borderRadius: '6px',
                      padding: '8px',
                      backgroundColor: isOpen ? '#faf5ff' : '#ffffff',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Icon name={p.icon} size={15} style={{ color: '#7c3aed' }} />
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#0f172a' }}>
                          {p.title}
                        </span>
                      </div>
                      <Icon name={isOpen ? 'expand_less' : 'expand_more'} size={15} style={{ color: '#94a3b8' }} />
                    </div>

                    <p style={{ margin: '4px 0 0 0', fontSize: '10.5px', color: '#475569', lineHeight: 1.4 }}>
                      {p.danger}
                    </p>

                    {isOpen && (
                      <div style={{
                        marginTop: '6px',
                        padding: '6px 8px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #d8b4fe',
                        borderRadius: '4px',
                        fontSize: '10px',
                        color: '#6b21a8',
                        lineHeight: 1.4
                      }}>
                        <strong>{isEn ? 'Ethical Balance: ' : 'الموازنة الأخلاقية: '}</strong>
                        {p.balanceConcept}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Section 2: Black Box vs. XAI */}
        {blackBoxSection && (
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '10px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icon name="visibility" size={18} style={{ color: '#0284c7' }} />
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>
                {blackBoxSection.title}
              </h3>
            </div>

            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                onClick={() => setActiveModelView('black_box')}
                style={{
                  flex: 1,
                  padding: '5px',
                  borderRadius: '5px',
                  fontSize: '10.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: activeModelView === 'black_box' ? '1.5px solid #0f172a' : '1px solid #cbd5e1',
                  backgroundColor: activeModelView === 'black_box' ? '#0f172a' : '#f8fafc',
                  color: activeModelView === 'black_box' ? '#ffffff' : '#475569',
                  transition: 'all 0.15s ease'
                }}
              >
                {isEn ? 'Opaque Black Box' : 'الصندوق الأسود المعتم'}
              </button>
              <button
                onClick={() => setActiveModelView('xai')}
                style={{
                  flex: 1,
                  padding: '5px',
                  borderRadius: '5px',
                  fontSize: '10.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: activeModelView === 'xai' ? '1.5px solid #0284c7' : '1px solid #cbd5e1',
                  backgroundColor: activeModelView === 'xai' ? '#0284c7' : '#f8fafc',
                  color: activeModelView === 'xai' ? '#ffffff' : '#475569',
                  transition: 'all 0.15s ease'
                }}
              >
                {isEn ? 'Explainable AI (XAI)' : 'الذكاء القابل للتفسير (XAI)'}
              </button>
            </div>

            {/* Dynamic Card based on View */}
            {activeModelView === 'black_box' ? (
              <div style={{
                backgroundColor: '#1e293b',
                color: '#f8fafc',
                borderRadius: '6px',
                padding: '8px 10px',
                fontSize: '10.5px',
                lineHeight: 1.4,
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f87171', fontWeight: 700 }}>
                  <Icon name="lock" size={14} />
                  <span>{isEn ? 'The Opacity Danger' : 'خطر الغموض والعتمة'}</span>
                </div>
                <p style={{ margin: 0 }}>
                  {blackBoxSection.blackBoxDefinition}
                </p>
                <div style={{ color: '#cbd5e1', fontSize: '10px', marginTop: '2px' }}>
                  {isEn ? 'Why it fails: If a system cannot explain its reasoning, humans cannot audit errors before they hurt real people.' : 'سر الخطورة: إذا عجز النظام عن تبرير قراره، استحال على الإنسان اكتشاف الأخطاء أو محاسبة المخطئ.'}
                </div>
              </div>
            ) : (
              <div style={{
                backgroundColor: '#f0f9ff',
                border: '1px solid #bae6fd',
                borderRadius: '6px',
                padding: '8px 10px',
                fontSize: '10.5px',
                lineHeight: 1.4,
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0369a1', fontWeight: 700 }}>
                  <Icon name="lightbulb" size={14} />
                  <span>{isEn ? 'The XAI Flashlight' : 'مصباح XAI الشفاف'}</span>
                </div>
                <p style={{ margin: 0, color: '#0c4a6e' }}>
                  {blackBoxSection.xaiDefinition}
                </p>
                <div style={{ color: '#0284c7', fontSize: '10px', fontWeight: 600, marginTop: '2px' }}>
                  {isEn ? 'Feature Attribution: Shows exactly which data points influenced the decision.' : 'تحليل الأوزان: يوضح للمهندس والطبيب أي العوامل كان لها التأثير الحاسم في النتيجة.'}
                </div>
              </div>
            )}

            <div style={{ fontSize: '10.5px', color: '#64748b', lineHeight: 1.4, fontStyle: 'italic' }}>
              {blackBoxSection.whyItMatters}
            </div>
          </div>
        )}
      </div>

      {/* Section 3: Responsibility Dilemma */}
      {responsibilitySection && (
        <div style={{
          backgroundColor: '#fafafa',
          border: '1px solid #e5e5e5',
          borderRadius: '8px',
          padding: '10px 14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icon name="gavel" size={17} style={{ color: '#d97706' }} />
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, color: '#171717' }}>
                {responsibilitySection.title}
              </h3>
            </div>
            <span style={{ fontSize: '10.5px', color: '#78716c', fontWeight: 600 }}>
              {responsibilitySection.coreIssue}
            </span>
          </div>

          <p style={{ margin: 0, fontSize: '11px', color: '#525252', lineHeight: 1.4 }}>
            {responsibilitySection.clarificationNote}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
            {responsibilitySection.stakeholders.map((s, idx) => {
              const isSelected = selectedStakeholder === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedStakeholder(isSelected ? null : idx)}
                  style={{
                    backgroundColor: isSelected ? '#fffbeb' : '#ffffff',
                    border: isSelected ? '1.5px solid #f59e0b' : '1px solid #e5e5e5',
                    borderRadius: '6px',
                    padding: '8px 10px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Icon name={s.icon} size={15} style={{ color: '#d97706' }} />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#171717' }}>
                      {s.role}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '10.5px', color: '#404040', lineHeight: 1.4 }}>
                    {s.duty}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
