import React, { useState } from 'react';
import Icon from '../../ui/Icon.jsx';
import { useLanguage } from '../../../i18n/LanguageContext.js';

/**
 * FirewallVpnDmzPage
 * Lesson 2-2 — Station 01: Core Network Security Tools (Firewall, VPN, DMZ)
 * Clean Emerald / Shield Theme with Interactive Topology and Exam Traps
 */
export default function FirewallVpnDmzPage({
  badge,
  title,
  subtitle,
  dailyHumorNote,
  grandQuestion,
  foundationBox,
  coreTools = [],
  topologyTitle,
  topologySteps = [],
  examTraps = [],
  quickCheck
}) {
  const { isRTL, language } = useLanguage();
  const isEn = language === 'en';

  const [selectedToolId, setSelectedToolId] = useState(null);
  const [selectedStepIdx, setSelectedStepIdx] = useState(null);
  const [quickCheckChoice, setQuickCheckChoice] = useState(null);
  const [showCheckFeedback, setShowCheckFeedback] = useState(false);

  return (
    <div
      className="educational-page firewall-vpn-dmz-page"
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
              {badge || (isEn ? '01 // Core Network Defense' : '01 // أسلحة تأمين الشبكة')}
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

      {/* 4. The 3 Core Tools Interactive Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
        {coreTools.map((tool) => {
          const isSelected = selectedToolId === tool.id;
          return (
            <div
              key={tool.id}
              onClick={() => setSelectedToolId(isSelected ? null : tool.id)}
              style={{
                backgroundColor: tool.bgColor || '#ffffff',
                border: `1.5px solid ${isSelected ? tool.color : tool.borderColor || '#e2e8f0'}`,
                borderRadius: '8px',
                padding: '9px 10px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: isSelected ? '0 4px 10px rgba(0,0,0,0.08)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                position: 'relative'
              }}
            >
              {/* Badge & Icon Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    backgroundColor: tool.color,
                    color: '#ffffff',
                    fontSize: '9.5px',
                    fontWeight: 700,
                    padding: '1px 6px',
                    borderRadius: '4px'
                  }}
                >
                  {tool.badge}
                </span>
                <Icon name={tool.icon || 'security'} size={18} style={{ color: tool.color }} />
              </div>

              {/* Tool Name */}
              <strong style={{ fontSize: '12px', color: '#0f172a' }}>
                {isEn ? tool.nameEn : tool.nameAr}
              </strong>

              {/* Definition */}
              <p style={{ margin: 0, fontSize: '10.5px', color: '#334155', lineHeight: 1.4 }}>
                {tool.definition}
              </p>

              {/* Exam Example Highlight */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: `1px dashed ${tool.borderColor || '#cbd5e1'}`,
                  borderRadius: '5px',
                  padding: '4px 6px',
                  fontSize: '10px',
                  color: '#1e293b',
                  lineHeight: 1.35
                }}
              >
                <strong style={{ color: tool.color }}>{isEn ? 'Exam Scenario: ' : 'سيناريو الامتحان: '}</strong>
                {tool.examExample}
              </div>

              {/* Threat Prevented */}
              <div style={{ fontSize: '9.5px', color: '#475569', marginTop: 'auto' }}>
                <strong style={{ color: '#0f172a' }}>{isEn ? 'Protects against: ' : 'يحمي من: '}</strong>
                {tool.threatPrevented}
              </div>
            </div>
          );
        })}
      </div>

      {/* 5. Visual Topology Flow Diagram (Clean Light Theme) */}
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
            <Icon name="alt_route" size={16} style={{ color: '#059669' }} />
            <strong style={{ fontSize: '11px', color: '#022c22' }}>
              {topologyTitle || (isEn ? 'Secure Network Topology Architecture' : 'مخطط طبولوجيا الشبكة الآمنة')}
            </strong>
          </div>
          <span style={{ fontSize: '9.5px', color: '#059669', fontWeight: 600 }}>
            {isEn ? 'Click any stage to inspect traffic boundary' : 'اضغط على أي مرحلة لفحص حدود الترافيك'}
          </span>
        </div>

        {/* Steps Ribbon */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
          {topologySteps.map((step, idx) => {
            const isStepActive = selectedStepIdx === idx;
            const stepColors = {
              external: { border: '#f87171', text: '#991b1b', bg: '#fef2f2', activeBg: '#fee2e2' },
              firewall: { border: '#fbbf24', text: '#92400e', bg: '#fffbeb', activeBg: '#fef3c7' },
              dmz: { border: '#34d399', text: '#065f46', bg: '#ecfdf5', activeBg: '#d1fae5' },
              internal: { border: '#60a5fa', text: '#1e40af', bg: '#eff6ff', activeBg: '#dbeafe' }
            };
            const theme = stepColors[step.type] || stepColors.firewall;

            return (
              <div
                key={idx}
                onClick={() => setSelectedStepIdx(isStepActive ? null : idx)}
                style={{
                  backgroundColor: isStepActive ? theme.activeBg : theme.bg,
                  border: `1.5px solid ${isStepActive ? theme.border : '#e2e8f0'}`,
                  borderRadius: '6px',
                  padding: '6px 8px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '3px',
                  transition: 'all 0.2s ease',
                  boxShadow: isStepActive ? `0 2px 6px ${theme.border}40` : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Icon name={step.icon || 'device_hub'} size={14} style={{ color: theme.border }} />
                  <span style={{ fontSize: '10.5px', fontWeight: 700, color: theme.text }}>
                    {step.label}
                  </span>
                </div>
                <span style={{ fontSize: '9.5px', color: '#475569', lineHeight: 1.3 }}>
                  {step.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. Exam Traps Box */}
      {examTraps.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {examTraps.map((trap, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#fffbeb',
                border: '1px solid #fcd34d',
                borderRadius: '6px',
                padding: '6px 9px',
                display: 'flex',
                flexDirection: 'column',
                gap: '3px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Icon name="warning" size={14} style={{ color: '#d97706' }} />
                <strong style={{ fontSize: '10.5px', color: '#92400e' }}>
                  {trap.trapTitle}
                </strong>
              </div>
              <p style={{ margin: 0, fontSize: '10px', color: '#78350f', lineHeight: 1.35 }}>
                {trap.trapWarning}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* 7. Quick Interactive Assessment Check */}
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

