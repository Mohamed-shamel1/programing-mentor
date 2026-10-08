import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * IndustrialAiSectorsPage
 * Lesson 1-3 — Page 02
 * Industrial AI Sectors, Automation & Predictive Maintenance Concepts
 */
export default function IndustrialAiSectorsPage({
  badge,
  title,
  subtitle,
  coreConcepts = [],
  sectors = []
}) {
  const { isRTL, language } = useLanguage();
  const [activePlainId, setActivePlainId] = useState(null);

  const togglePlainCard = (id) => {
    setActivePlainId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="industrial-sectors-page" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', height: '100%' }}>
      {/* Station Header */}
      <div className="station-header-compact" style={{ borderBottom: '1px solid var(--color-navy-200)', paddingBottom: 'var(--space-2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span className="station-pill" style={{
              backgroundColor: 'var(--color-navy-900)',
              color: '#f59e0b',
              fontSize: '11px',
              fontWeight: 'bold',
              padding: '2px 8px',
              borderRadius: '999px',
              fontFamily: 'var(--font-mono)'
            }}>
              {badge || '02 // INDUSTRIAL AI & AUTOMATION'}
            </span>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: 'var(--color-navy-900)' }}>
              {title}
            </h2>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--color-navy-600)', fontWeight: 500 }}>
            {subtitle}
          </span>
        </div>
      </div>

      {/* Core Concepts Banner: Automation & Predictive Maintenance */}
      <div className="core-concepts-row" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-2)',
        backgroundColor: '#f8fafc',
        border: '1px solid #cbd5e1',
        borderRadius: '8px',
        padding: '8px 12px'
      }}>
        {coreConcepts.map((concept, idx) => (
          <div key={idx} style={{
            borderLeft: !isRTL && idx === 1 ? '1px solid #e2e8f0' : 'none',
            borderRight: isRTL && idx === 1 ? '1px solid #e2e8f0' : 'none',
            paddingLeft: !isRTL && idx === 1 ? '10px' : '0',
            paddingRight: isRTL && idx === 1 ? '10px' : '0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{
                backgroundColor: idx === 0 ? '#1e293b' : '#0369a1',
                color: '#ffffff',
                fontSize: '10px',
                fontWeight: 700,
                padding: '1px 6px',
                borderRadius: '3px',
                fontFamily: 'var(--font-mono)'
              }}>
                {idx === 0 ? 'CONCEPT 01' : 'CONCEPT 02'}
              </span>
              <strong style={{ fontSize: '11.5px', color: '#0f172a' }}>{concept.term}</strong>
            </div>
            <p style={{ fontSize: '10.5px', lineHeight: 1.35, color: '#334155', margin: '2px 0' }}>
              {concept.meaning}
            </p>
            <div style={{ fontSize: '10px', color: '#6d28d9', backgroundColor: '#faf5ff', padding: '2px 6px', borderRadius: '4px', border: '1px dashed #ddd6fe' }}>
              💬 {concept.realLifePlain}
            </div>
          </div>
        ))}
      </div>

      {/* 4 Industrial Sectors Grid */}
      <div className="sectors-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 'var(--space-3)',
        flex: 1
      }}>
        {sectors.map((sec) => {
          const isPlainOpen = activePlainId === sec.id;
          return (
            <div
              key={sec.id}
              className="sector-card"
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
              <div>
                {/* Header: Num, Title, Model Tier */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      backgroundColor: '#0f172a',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 800,
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {sec.num}
                    </span>
                    <div>
                      <h3 style={{ fontSize: '0.98rem', fontWeight: 800, margin: 0, color: 'var(--color-navy-900)' }}>
                        {sec.name}
                      </h3>
                      <span style={{ fontSize: '10px', color: 'var(--color-navy-500)', fontFamily: 'var(--font-mono)' }}>
                        {sec.nameEn}
                      </span>
                    </div>
                  </div>

                  <span
                    className="model-tier-pill"
                    title={sec.modelTierDesc}
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      padding: '2px 6px',
                      borderRadius: '4px',
                      backgroundColor: '#fffbeb',
                      color: '#b45309',
                      border: '1px solid #fde68a',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    ⚙️ {sec.modelTier}
                  </span>
                </div>

                {/* AI Role */}
                <p style={{ fontSize: '11.5px', lineHeight: 1.45, color: 'var(--color-navy-800)', margin: '4px 0 6px 0' }}>
                  <strong>{language === 'en' ? 'Industry Application:' : 'التطبيق الصناعي:'}</strong> {sec.roleOfAi}
                </p>

                {/* Example chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '6px' }}>
                  {sec.examples.map((ex, idx) => (
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

                {/* Human in the loop rule */}
                {sec.humanInTheLoopRule && (
                  <div style={{
                    fontSize: '10px',
                    color: '#0369a1',
                    backgroundColor: '#f0f9ff',
                    border: '1px solid #bae6fd',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    marginBottom: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Icon name="verified_user" size={13} color="#0284c7" />
                    <span>{sec.humanInTheLoopRule}</span>
                  </div>
                )}
              </div>

              {/* Bottom: Plain explanation & toggle */}
              <div style={{ marginTop: 'auto', borderTop: '1px dashed var(--color-navy-200)', paddingTop: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <button
                    type="button"
                    onClick={() => togglePlainCard(sec.id)}
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
                    {sec.modelTierBadge}
                  </span>
                </div>

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
                  <p style={{ margin: 0 }}>{sec.plainExplanation}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
