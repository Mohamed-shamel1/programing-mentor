import React, { useState } from 'react';
import Icon from '../../ui/Icon.jsx';
import { useLanguage } from '../../../i18n/LanguageContext.js';

/**
 * AuthenticationFactorsPage
 * Lesson 2-1 — Station 02
 * Authentication in Real Services: 2FA & MFA (The 3 Pillars of Identity)
 */
export default function AuthenticationFactorsPage({
  badge,
  title,
  subtitle,
  dailyHumorNote,
  coreTerms = [],
  categories = [],
  servicesTableTitle,
  services = [],
  stopAndThink,
  examTrap
}) {
  const { isRTL, language } = useLanguage();
  const isEn = language === 'en';

  const [showStopThinkAnswer, setShowStopThinkAnswer] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="educational-page authentication-factors-page" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', height: '100%' }}>
      {/* Station Header */}
      <div className="station-header-compact" style={{ borderBottom: '1px solid #a7f3d0', paddingBottom: 'var(--space-2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span className="station-pill" style={{
              backgroundColor: '#065f46',
              color: '#34d399',
              fontSize: '11px',
              fontWeight: 'bold',
              padding: '2px 8px',
              borderRadius: '999px',
              fontFamily: 'var(--font-mono)'
            }}>
              {badge || (isEn ? '02 // 2FA & MFA' : '02 // أسلحة المصادقة (2FA و MFA)')}
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
          <div className="humor-banner" style={{
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
          }}>
            <Icon name="lightbulb" size={15} style={{ color: '#059669', flexShrink: 0 }} />
            <span>{dailyHumorNote}</span>
          </div>
        )}
      </div>

      {/* 2FA vs MFA Quick Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        {coreTerms.map((t, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #a7f3d0',
              borderRadius: '6px',
              padding: '8px 10px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px'
            }}
          >
            <div style={{
              backgroundColor: '#ecfdf5',
              color: '#059669',
              borderRadius: '6px',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Icon name={t.icon || 'verified'} size={20} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#022c22' }}>
                {isEn ? t.termEn : t.term}
              </div>
              <p style={{ margin: '2px 0 0 0', fontSize: '11px', lineHeight: 1.4, color: '#374151' }}>
                {t.def}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* The 3 Factor Categories */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(isSelected ? null : cat.id)}
              style={{
                backgroundColor: cat.bgColor || '#ffffff',
                border: `1.5px solid ${isSelected ? cat.color : '#e5e7eb'}`,
                borderRadius: '8px',
                padding: '8px 10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Icon name={cat.icon} size={18} style={{ color: cat.color }} />
                <strong style={{ fontSize: '11.5px', color: cat.color }}>
                  {cat.title}
                </strong>
              </div>
              <div style={{ fontSize: '10px', color: '#6b7280', fontWeight: 600 }}>
                {cat.subtitle}
              </div>

              {/* Examples List */}
              <div style={{ marginTop: '2px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {cat.examples.map((ex, i) => (
                  <span key={i} style={{
                    fontSize: '10.5px',
                    color: '#1f2937',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    padding: '2px 5px',
                    borderRadius: '4px',
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}>
                    • {ex}
                  </span>
                ))}
              </div>

              {/* Weakness note */}
              <div style={{
                marginTop: 'auto',
                fontSize: '9.5px',
                color: '#b91c1c',
                lineHeight: 1.3,
                borderTop: '1px dashed rgba(0,0,0,0.1)',
                paddingTop: '4px'
              }}>
                ⚠️ {cat.weakness}
              </div>
            </div>
          );
        })}
      </div>

      {/* Textbook Services Table */}
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '8px 10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <strong style={{ fontSize: '11.5px', color: '#022c22', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="table_chart" size={16} style={{ color: '#059669' }} />
            {servicesTableTitle || (isEn ? 'Textbook Real-World Services Table' : 'جدول أمثلة الكتاب المدرسي على الخدمات الواقعية')}
          </strong>
          <span style={{ fontSize: '10px', color: '#059669', fontWeight: 'bold' }}>
            {isEn ? 'Always 2 Independent Categories' : 'دائماً فئتان مستقلتان'}
          </span>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10.5px' }}>
            <thead>
              <tr style={{ backgroundColor: '#ecfdf5', color: '#065f46', textAlign: isRTL ? 'right' : 'left' }}>
                <th style={{ padding: '5px 8px', borderBottom: '1px solid #a7f3d0' }}>{isEn ? 'Service' : 'الخدمة'}</th>
                <th style={{ padding: '5px 8px', borderBottom: '1px solid #a7f3d0' }}>{isEn ? 'Factors Used' : 'أمثلة على المصادقة المستخدمة'}</th>
                <th style={{ padding: '5px 8px', borderBottom: '1px solid #a7f3d0' }}>{isEn ? 'Categories Pair' : 'نوع الثنائية'}</th>
                <th style={{ padding: '5px 8px', borderBottom: '1px solid #a7f3d0' }}>{isEn ? 'Security Purpose' : 'الهدف الأمني الحقيقي'}</th>
              </tr>
            </thead>
            <tbody>
              {services.map((srv, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6', backgroundColor: idx % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                  <td style={{ padding: '5px 8px', fontWeight: 'bold', color: '#111827' }}>{srv.serviceName}</td>
                  <td style={{ padding: '5px 8px', color: '#374151' }}>{srv.factorsUsed}</td>
                  <td style={{ padding: '5px 8px' }}>
                    <span style={{
                      backgroundColor: '#ecfdf5',
                      color: '#059669',
                      padding: '1px 6px',
                      borderRadius: '4px',
                      fontWeight: 700,
                      fontSize: '10px'
                    }}>
                      {srv.factorsType}
                    </span>
                  </td>
                  <td style={{ padding: '5px 8px', color: '#4b5563', fontSize: '10px' }}>{srv.whyItMatters}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Dual Cards: Stop & Think + Exam Trap */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        {/* Stop & Think */}
        {stopAndThink && (
          <div style={{
            backgroundColor: '#fffbeb',
            border: '1px solid #fde68a',
            borderRadius: '6px',
            padding: '8px 10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Icon name="help" size={16} style={{ color: '#d97706' }} />
                <strong style={{ fontSize: '11px', color: '#92400e' }}>
                  {stopAndThink.title}
                </strong>
              </div>
              <button
                onClick={() => setShowStopThinkAnswer(!showStopThinkAnswer)}
                style={{
                  fontSize: '10px',
                  padding: '2px 6px',
                  backgroundColor: '#d97706',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                {showStopThinkAnswer ? (isEn ? 'Hide' : 'إخفاء الحل') : (isEn ? 'Reveal' : 'اكشف الإجابة')}
              </button>
            </div>

            <p style={{ margin: 0, fontSize: '10.5px', color: '#78350f', lineHeight: 1.4 }}>
              {stopAndThink.question}
            </p>

            {showStopThinkAnswer && (
              <div style={{
                marginTop: '4px',
                padding: '4px 6px',
                backgroundColor: '#ffffff',
                border: '1px solid #fcd34d',
                borderRadius: '4px',
                fontSize: '10px',
                color: '#92400e',
                lineHeight: 1.4
              }}>
                {stopAndThink.answer}
              </div>
            )}
          </div>
        )}

        {/* Dangerous Exam Trap */}
        {examTrap && (
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '6px',
            padding: '8px 10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icon name="warning" size={16} style={{ color: '#dc2626' }} />
              <strong style={{ fontSize: '11px', color: '#991b1b' }}>
                {examTrap.title}
              </strong>
            </div>
            <p style={{ margin: 0, fontSize: '10.5px', color: '#7f1d1d', lineHeight: 1.4 }}>
              {examTrap.warning}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
