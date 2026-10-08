import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * DailyAiServicesPage
 * Lesson 1-3 — Page 01
 * AI in Daily Life Services with Model Architecture Badges & "الشرح بالبلدي" Interactive Toggles
 */
export default function DailyAiServicesPage({
  badge,
  title,
  subtitle,
  dailyHumorNote,
  services = [],
  interactivePractice
}) {
  const { isRTL, language } = useLanguage();
  const [activePlainId, setActivePlainId] = useState(null);
  const [selectedPracticeOption, setSelectedPracticeOption] = useState(null);
  const [hasAnsweredPractice, setHasAnsweredPractice] = useState(false);

  const togglePlainCard = (id) => {
    setActivePlainId((prev) => (prev === id ? null : id));
  };

  const handlePracticeSelect = (index) => {
    setSelectedPracticeOption(index);
    setHasAnsweredPractice(true);
  };

  return (
    <div className="daily-services-page" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', height: '100%' }}>
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
              {badge || '01 // DAILY LIFE AI'}
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
            padding: '4px 10px',
            backgroundColor: '#eff6ff',
            borderRight: isRTL ? '3px solid #3b82f6' : 'none',
            borderLeft: !isRTL ? '3px solid #3b82f6' : 'none',
            borderRadius: '4px',
            fontSize: '11px',
            color: '#1e40af',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Icon name="sentiment_satisfied" size={16} color="#2563eb" />
            <span>{dailyHumorNote}</span>
          </div>
        )}
      </div>

      {/* 4 Core Services Grid */}
      <div className="services-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 'var(--space-3)',
        flex: 1
      }}>
        {services.map((srv) => {
          const isPlainOpen = activePlainId === srv.id;
          return (
            <div
              key={srv.id}
              className="service-card"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-navy-200)',
                borderRadius: '8px',
                padding: 'var(--space-3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                position: 'relative'
              }}
            >
              {/* Card Top: Number, Name, Model Badge */}
              <div>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--color-navy-900)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 800,
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {srv.num}
                    </span>
                    <div>
                      <h3 style={{ fontSize: '0.98rem', fontWeight: 800, margin: 0, color: 'var(--color-navy-900)' }}>
                        {srv.name}
                      </h3>
                      <span style={{ fontSize: '10px', color: 'var(--color-navy-500)', fontFamily: 'var(--font-mono)' }}>
                        {srv.nameEn}
                      </span>
                    </div>
                  </div>

                  {/* Architecture Badge */}
                  <span
                    className="model-tier-pill"
                    title={srv.modelTierDesc}
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      padding: '2px 6px',
                      borderRadius: '4px',
                      backgroundColor: '#f0fdf4',
                      color: '#15803d',
                      border: '1px solid #bbf7d0',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    ⚙️ {srv.modelTier}
                  </span>
                </div>

                {/* Role of AI */}
                <p style={{ fontSize: '11.5px', lineHeight: 1.45, color: 'var(--color-navy-800)', margin: '4px 0 8px 0' }}>
                  <strong>{language === 'en' ? 'AI Role:' : 'دور الذكاء الاصطناعي:'}</strong> {srv.roleOfAi}
                </p>

                {/* Examples */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '8px' }}>
                  {srv.examples.map((ex, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '10px',
                        backgroundColor: 'var(--color-navy-50)',
                        color: 'var(--color-navy-700)',
                        border: '1px solid var(--color-navy-200)',
                        padding: '1px 6px',
                        borderRadius: '4px',
                        fontWeight: 600
                      }}
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom: Plain explanation & toggle */}
              <div style={{ marginTop: 'auto', borderTop: '1px dashed var(--color-navy-200)', paddingTop: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <button
                    type="button"
                    onClick={() => togglePlainCard(srv.id)}
                    className="plain-btn"
                    style={{
                      backgroundColor: isPlainOpen ? '#7c3aed' : '#f5f3ff',
                      color: isPlainOpen ? '#ffffff' : '#6d28d9',
                      border: '1px solid #ddd6fe',
                      borderRadius: '4px',
                      fontSize: '10.5px',
                      fontWeight: 700,
                      padding: '3px 8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <span>💬 {language === 'en' ? 'In Plain English' : 'الشرح بالبلدي'}</span>
                    <Icon name={isPlainOpen ? 'expand_less' : 'expand_more'} size={14} />
                  </button>

                  <span style={{ fontSize: '10px', color: 'var(--color-navy-400)', fontStyle: 'italic' }}>
                    {srv.modelTierBadge}
                  </span>
                </div>

                {/* Plain Explanation Box (Always visible in print, togglable in web) */}
                <div
                  className={`plain-text-drawer ${isPlainOpen ? 'open' : ''}`}
                  style={{
                    marginTop: '6px',
                    padding: '6px 8px',
                    backgroundColor: '#faf5ff',
                    borderRight: isRTL ? '2px solid #a855f7' : 'none',
                    borderLeft: !isRTL ? '2px solid #a855f7' : 'none',
                    borderRadius: '4px',
                    fontSize: '11px',
                    lineHeight: 1.4,
                    color: '#581c87',
                    display: isPlainOpen ? 'block' : 'none'
                  }}
                >
                  <p style={{ margin: 0 }}>{srv.plainExplanation}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Micro-Practice at bottom */}
      {interactivePractice && (
        <div className="practice-box-compact" style={{
          backgroundColor: '#f8fafc',
          border: '1px solid #cbd5e1',
          borderRadius: '6px',
          padding: '8px 12px',
          fontSize: '11px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px', fontWeight: 700, color: '#0f172a' }}>
            <Icon name="bolt" size={16} color="#f59e0b" />
            <span>{language === 'en' ? 'Quick Engineer Check:' : 'تحدي المهندس السريع:'} {interactivePractice.question}</span>
          </div>

          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {interactivePractice.options.map((opt, i) => {
              const isSelected = selectedPracticeOption === i;
              let bg = '#ffffff';
              let border = '#94a3b8';
              let text = '#334155';

              if (hasAnsweredPractice && isSelected) {
                bg = opt.isCorrect ? '#dcfce7' : '#fee2e2';
                border = opt.isCorrect ? '#16a34a' : '#dc2626';
                text = opt.isCorrect ? '#14532d' : '#7f1d1d';
              }

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handlePracticeSelect(i)}
                  style={{
                    backgroundColor: bg,
                    border: `1px solid ${border}`,
                    color: text,
                    borderRadius: '4px',
                    padding: '3px 8px',
                    fontSize: '10.5px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {opt.text}
                </button>
              );
            })}
          </div>

          {hasAnsweredPractice && (
            <div style={{
              marginTop: '4px',
              fontSize: '10.5px',
              fontWeight: 700,
              color: interactivePractice.options[selectedPracticeOption]?.isCorrect ? '#15803d' : '#b91c1c'
            }}>
              {interactivePractice.options[selectedPracticeOption]?.isCorrect
                ? `✓ ${interactivePractice.feedbackCorrect}`
                : `✗ ${interactivePractice.feedbackIncorrect}`}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
