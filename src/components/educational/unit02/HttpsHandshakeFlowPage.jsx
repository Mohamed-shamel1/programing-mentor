import React, { useState } from 'react';
import Icon from '../../ui/Icon.jsx';
import { useLanguage } from '../../../i18n/LanguageContext.js';

/**
 * HttpsHandshakeFlowPage
 * Lesson 2-1 — Station 01
 * Light-Themed Clean Flow Diagram: HTTPS Connection & TLS Handshake (Figure 2.1.1)
 */
export default function HttpsHandshakeFlowPage({
  badge,
  title,
  subtitle,
  dailyHumorNote,
  grandQuestion,
  protocolFoundation,
  threeProtections = [],
  padlockWarning,
  definitionCard,
  stagesTitle,
  stages = [],
  keyExchangeNote,
  divisionOfRoles,
  comparisonBox,
  quickCheck
}) {
  const { isRTL, language } = useLanguage();
  const isEn = language === 'en';

  const [showPlainDef, setShowPlainDef] = useState(false);
  const [showDivisionAnswer, setShowDivisionAnswer] = useState(false);
  const [quickCheckAnswer, setQuickCheckAnswer] = useState(null);
  const [showCheckFeedback, setShowCheckFeedback] = useState(false);

  return (
    <div className="educational-page https-handshake-flow-page" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', height: '100%' }}>
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
              {badge || (isEn ? '01 // HTTPS & TLS' : '01 // أسرار HTTPS ومصافحة TLS')}
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

      {/* Grand Question Banner */}
      {grandQuestion && (
        <div style={{
          backgroundColor: '#022c22',
          color: '#ffffff',
          borderRadius: '8px',
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          borderLeft: isRTL ? 'none' : '4px solid #34d399',
          borderRight: isRTL ? '4px solid #34d399' : 'none',
        }}>
          <Icon name="help" size={20} style={{ color: '#34d399', flexShrink: 0 }} />
          <span style={{ fontSize: '12px', fontWeight: 600, lineHeight: 1.4 }}>
            {grandQuestion}
          </span>
        </div>
      )}

      {/* 1. Protocol Foundation & Formula (HTTP + TLS = HTTPS) */}
      {protocolFoundation && (
        <div style={{
          backgroundColor: '#f8fafc',
          border: '1.5px solid #cbd5e1',
          borderRadius: '8px',
          padding: '8px 12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '4px' }}>
            <strong style={{ fontSize: '12px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icon name="functions" size={16} style={{ color: '#059669' }} />
              {protocolFoundation.title}
            </strong>
            <span style={{ fontSize: '11px', color: '#059669', fontWeight: 800, backgroundColor: '#ecfdf5', padding: '1px 8px', borderRadius: '4px', border: '1px solid #a7f3d0' }}>
              {protocolFoundation.formula}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '10.5px' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '4px 6px', color: '#475569' }}>
              • <strong style={{ color: '#b91c1c' }}>HTTP:</strong> {protocolFoundation.httpNote}
            </div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #bae6fd', borderRadius: '4px', padding: '4px 6px', color: '#0369a1' }}>
              • <strong style={{ color: '#0284c7' }}>TLS:</strong> {protocolFoundation.tlsNote}
            </div>
          </div>

          {/* The 3 Protections & Threats (Book p. 55) */}
          {threeProtections && threeProtections.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', marginTop: '2px' }}>
              {threeProtections.map((p, idx) => (
                <div key={idx} style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #a7f3d0',
                  borderRadius: '6px',
                  padding: '5px 7px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ fontSize: '10.5px', color: '#065f46' }}>
                      {isEn ? p.featureEn : p.featureAr}
                    </strong>
                    <span style={{ fontSize: '9px', color: '#b91c1c', fontWeight: 700, backgroundColor: '#fef2f2', padding: '1px 4px', borderRadius: '3px' }}>
                      {isEn ? p.threatAr.split('(')[1]?.replace(')', '') || p.threatAr : p.threatAr}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '9.5px', color: '#334155', lineHeight: 1.3 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div style={{ fontSize: '10px', color: '#b91c1c', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Icon name="warning" size={13} style={{ color: '#dc2626', flexShrink: 0 }} />
            <span>{protocolFoundation.withoutProtection}</span>
          </div>
        </div>
      )}

      {/* Official Exam Padlock Warning (Book Note p. 55) */}
      {padlockWarning && (
        <div style={{
          backgroundColor: '#fffbeb',
          border: '1.5px solid #fde68a',
          borderRadius: '6px',
          padding: '6px 10px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px'
        }}>
          <Icon name="lock" size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '9.5px', fontWeight: 800, color: '#92400e', backgroundColor: '#fef3c7', padding: '1px 6px', borderRadius: '3px' }}>
                {padlockWarning.badge}
              </span>
              <strong style={{ fontSize: '11px', color: '#92400e' }}>
                {padlockWarning.title}
              </strong>
            </div>
            <p style={{ margin: '2px 0 0 0', fontSize: '10px', color: '#78350f', lineHeight: 1.35 }}>
              {padlockWarning.text}
            </p>
          </div>
        </div>
      )}

      {/* Definition Card */}
      {definitionCard && (
        <div style={{
          backgroundColor: '#f6fef9',
          border: '1px solid #a7f3d0',
          borderRadius: '8px',
          padding: '8px 12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                backgroundColor: '#ecfdf5',
                border: '1px solid #059669',
                borderRadius: '6px',
                width: '26px',
                height: '26px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#059669'
              }}>
                <Icon name={definitionCard.icon || 'lock'} size={16} />
              </div>
              <div>
                <strong style={{ fontSize: '12.5px', color: '#022c22' }}>
                  {isEn ? definitionCard.termEn : definitionCard.termAr}
                </strong>
                <span style={{ fontSize: '11px', color: '#059669', marginInlineStart: '6px' }}>
                  ({isEn ? definitionCard.termAr : definitionCard.termEn})
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowPlainDef(!showPlainDef)}
              style={{
                fontSize: '10.5px',
                padding: '2px 8px',
                backgroundColor: showPlainDef ? '#059669' : '#ecfdf5',
                color: showPlainDef ? '#ffffff' : '#065f46',
                border: '1px solid #059669',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              {showPlainDef
                ? (isEn ? 'Show Official Definition' : 'عرض التعريف الوزاري الرسمي')
                : (isEn ? 'Explain in Plain Words' : 'اشرحها لي بالبلدي')}
            </button>
          </div>

          <p style={{ margin: 0, fontSize: '11.5px', lineHeight: 1.45, color: '#1f2937' }}>
            {showPlainDef ? definitionCard.plainExplanation : definitionCard.officialExamDefinition}
          </p>

          {definitionCard.engineerGoldenRule && (
            <div style={{
              backgroundColor: '#fffbeb',
              border: '1px solid #fde68a',
              borderRadius: '4px',
              padding: '3px 8px',
              fontSize: '11px',
              color: '#92400e',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Icon name="verified" size={13} style={{ color: '#d97706', flexShrink: 0 }} />
              <strong>{definitionCard.engineerGoldenRule}</strong>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 🚀 THE FLOW DIAGRAM: HTTPS & TLS Handshake Sequence (Light & Clean Theme) */}
      {/* ========================================================================= */}
      <div style={{
        backgroundColor: '#ffffff',
        border: '1.5px solid #a7f3d0',
        borderRadius: '10px',
        padding: '10px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        boxShadow: '0 2px 10px rgba(5, 150, 105, 0.06)',
      }}>
        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '6px' }}>
          <h3 style={{ fontSize: '12px', fontWeight: 800, margin: 0, color: '#022c22', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="route" size={16} style={{ color: '#059669' }} />
            {isEn ? 'HTTPS Connection Flow via TLS Handshake (Figure 2.1.1)' : 'تدفق اتصال HTTPS عبر مصافحة TLS (الشكل 2.1.1 من كتاب الوزارة)'}
          </h3>
          <span style={{ fontSize: '10.5px', color: '#059669', fontWeight: 600, backgroundColor: '#ecfdf5', padding: '1px 8px', borderRadius: '999px', border: '1px solid #a7f3d0' }}>
            {isEn ? '3 Simple Steps' : '3 خطوات متسلسلة'}
          </span>
        </div>

        {/* Entity Nodes: Browser <=====================> Server */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '8px', alignItems: 'center' }}>
          {/* Client Node */}
          <div style={{
            backgroundColor: '#f0f9ff',
            border: '1.5px solid #bae6fd',
            borderRadius: '6px',
            padding: '5px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Icon name="devices" size={18} style={{ color: '#0284c7' }} />
            <div>
              <strong style={{ fontSize: '11px', color: '#0369a1', display: 'block', lineHeight: 1.2 }}>
                {isEn ? 'Browser (Client)' : 'المتصفح (العميل)'}
              </strong>
              <span style={{ fontSize: '9.5px', color: '#0284c7' }}>
                {isEn ? 'Verifies Certificate & Derives Key' : 'يفحص الشهادة ويشتق المفاتيح'}
              </span>
            </div>
          </div>

          {/* Central Corridor */}
          <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 600 }}>
            {isEn ? '⇄ TLS Secure Tunnel ⇄' : '⇄ نفق TLS المشفر ⇄'}
          </span>

          {/* Server Node */}
          <div style={{
            backgroundColor: '#ecfdf5',
            border: '1.5px solid #a7f3d0',
            borderRadius: '6px',
            padding: '5px 10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '8px',
            textAlign: isRTL ? 'left' : 'right'
          }}>
            <div>
              <strong style={{ fontSize: '11px', color: '#065f46', display: 'block', lineHeight: 1.2 }}>
                {isEn ? 'Web Server' : 'خادم الويب'}
              </strong>
              <span style={{ fontSize: '9.5px', color: '#059669' }}>
                {isEn ? 'Holds Secret Private Key 🔐' : 'مع المفتاح الخاص السري 🔐'}
              </span>
            </div>
            <Icon name="dns" size={18} style={{ color: '#059669' }} />
          </div>
        </div>

        {/* The 3 Sequential Flow Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>

          {/* Stage 1 */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #a7f3d0',
            borderRadius: '6px',
            padding: '6px 10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ backgroundColor: '#059669', color: '#ffffff', fontSize: '9px', fontWeight: 800, padding: '1px 6px', borderRadius: '4px' }}>
                  {isEn ? '1. TLS Handshake' : '1. مصافحة TLS'}
                </span>
                <strong style={{ fontSize: '11px', color: '#022c22' }}>
                  {isEn ? 'Check Certificate & Receive Public Key' : 'التحقق من الشهادة الرقمية والمفتاح العام'}
                </strong>
              </div>
              <span style={{ fontSize: '9.5px', color: '#059669', fontWeight: 700, backgroundColor: '#ecfdf5', padding: '1px 6px', borderRadius: '4px' }}>
                {isEn ? 'Public-Key Math' : 'التشفير بالمفتاح العام'}
              </span>
            </div>

            {/* Directional Flow Track */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f6fef9',
              borderRadius: '6px',
              padding: '4px 8px',
              border: '1px dashed #a7f3d0',
              gap: '6px'
            }}>
              <span style={{ fontSize: '9.5px', color: '#0284c7', fontWeight: 700, flexShrink: 0 }}>
                {isRTL ? '← يستقبل ويفحص' : '← Browser verifies'}
              </span>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #059669',
                  borderRadius: '999px',
                  padding: '2px 10px',
                  fontSize: '9.5px',
                  fontWeight: 700,
                  color: '#065f46',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <Icon name="verified" size={13} style={{ color: '#059669' }} />
                  <span>{isEn ? 'Digital Certificate + Public Key' : 'الشهادة الرقمية + المفتاح العام'}</span>
                  <Icon name="vpn_key" size={13} style={{ color: '#d97706' }} />
                </div>
              </div>
              <span style={{ fontSize: '9.5px', color: '#059669', fontWeight: 700, flexShrink: 0 }}>
                {isRTL ? 'الخادم يرسل ←' : 'Server sends ←'}
              </span>
            </div>

            <p style={{ margin: 0, fontSize: '10px', color: '#475569', lineHeight: 1.35 }}>
              {isEn
                ? 'The server sends its certificate. The browser verifies its validity and website name to stop fake scam sites.'
                : 'أثناء المصافحة يرسل الخادم شهادته، ويتحقق المتصفح من صلاحيتها وسلسلة الثقة وملاءمتها لاسم الموقع لمنع الانتحال.'}
            </p>
          </div>

          {/* Stage 2 */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #99f6e4',
            borderRadius: '6px',
            padding: '6px 10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ backgroundColor: '#0d9488', color: '#ffffff', fontSize: '9px', fontWeight: 800, padding: '1px 6px', borderRadius: '4px' }}>
                  {isEn ? '2. Key Exchange' : '2. تبادل المفاتيح'}
                </span>
                <strong style={{ fontSize: '11px', color: '#022c22' }}>
                  {isEn ? 'Browser Creates Common Key ➔ Server Decrypts via Private Key' : 'المتصفح ينشئ المفتاح المشترك ➔ الخادم يفكه بمفتاحه الخاص'}
                </strong>
              </div>
              <span style={{ fontSize: '9.5px', color: '#0d9488', fontWeight: 700, backgroundColor: '#f0fdfa', padding: '1px 6px', borderRadius: '4px' }}>
                {isEn ? 'Public-Key Cryptography' : 'التشفير بالمفتاح العام'}
              </span>
            </div>

            {/* Directional Flow Track */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f0fdfa',
              borderRadius: '6px',
              padding: '4px 8px',
              border: '1px dashed #99f6e4',
              gap: '6px'
            }}>
              <span style={{ fontSize: '9.5px', color: '#0d9488', fontWeight: 700, flexShrink: 0 }}>
                {isRTL ? 'ينشئ ويشفر بالعام ←' : 'Creates & Encrypts ←'}
              </span>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #0d9488',
                  borderRadius: '999px',
                  padding: '2px 10px',
                  fontSize: '9.5px',
                  fontWeight: 700,
                  color: '#0f766e',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <Icon name="vpn_key" size={13} style={{ color: '#0d9488' }} />
                  <span>{isEn ? 'Common Key (Encrypted with Server Public Key)' : 'المفتاح المشترك (مشفر بالمفتاح العام)'}</span>
                  <Icon name="lock" size={12} style={{ color: '#d97706' }} />
                </div>
              </div>
              <span style={{ fontSize: '9.5px', color: '#0d9488', fontWeight: 700, flexShrink: 0 }}>
                {isRTL ? '← يفكه بالمفتاح الخاص 🔐' : '← Decrypts via Private Key 🔐'}
              </span>
            </div>

            <p style={{ margin: 0, fontSize: '10px', color: '#475569', lineHeight: 1.35 }}>
              {isEn
                ? 'The browser creates a common key, encrypts it with the server public key, and sends it. The server decrypts it with its secret Private Key to obtain the common key.'
                : 'يُنشئ المتصفح مفتاحاً مشتركاً للاتصال، ويشفّره بمفتاح الخادم العام ويرسله. يقوم الخادم بفك تشفيره باستخدام مفتاحه الخاص السري (Private Key) للحصول على المفتاح المشترك بأمان تام.'}
            </p>
          </div>

          {/* Stage 3 */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #bae6fd',
            borderRadius: '6px',
            padding: '6px 10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ backgroundColor: '#0284c7', color: '#ffffff', fontSize: '9px', fontWeight: 800, padding: '1px 6px', borderRadius: '4px' }}>
                  {isEn ? '3. Data Communication' : '3. تبادل البيانات'}
                </span>
                <strong style={{ fontSize: '11px', color: '#022c22' }}>
                  {isEn ? 'Fast Session Data Exchange via Common Key' : 'تبادل جميع بيانات الجلسة بالمفتاح المشترك'}
                </strong>
              </div>
              <span style={{ fontSize: '9.5px', color: '#0284c7', fontWeight: 700, backgroundColor: '#f0f9ff', padding: '1px 6px', borderRadius: '4px' }}>
                {isEn ? 'Common-Key Cryptography' : 'تشفير المفتاح المشترك'}
              </span>
            </div>

            {/* Directional Flow Track */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f0f9ff',
              borderRadius: '6px',
              padding: '4px 8px',
              border: '1px dashed #bae6fd',
              gap: '6px'
            }}>
              <span style={{ fontSize: '9.5px', color: '#0284c7', fontWeight: 700, flexShrink: 0 }}>
                ⚡ {isEn ? 'Traffic' : 'تصفح'}
              </span>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #0284c7',
                  borderRadius: '999px',
                  padding: '2px 10px',
                  fontSize: '9.5px',
                  fontWeight: 700,
                  color: '#0369a1',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <Icon name="bolt" size={13} style={{ color: '#d97706' }} />
                  <span>{isEn ? 'All Web Pages, Passwords & Data (Encrypted via Common-Key)' : 'جميع الصفحات، وكلمات المرور، وبيانات الشراء (مشفرة بالمفتاح المشترك)'}</span>
                  <Icon name="lock" size={12} style={{ color: '#0284c7' }} />
                </div>
              </div>
              <span style={{ fontSize: '9.5px', color: '#0284c7', fontWeight: 700, flexShrink: 0 }}>
                {isEn ? 'Fast & Safe' : 'سرعة وأمان'} ⚡
              </span>
            </div>

            <p style={{ margin: 0, fontSize: '10px', color: '#475569', lineHeight: 1.35 }}>
              {isEn
                ? 'Data is encrypted and exchanged using the shared common key for high-speed transmission of large amounts of data.'
                : 'يتم تشفير وتبادل جميع بيانات الجلسة باستخدام المفتاح المشترك فائق السرعة والخفيف على المعالج والبطارية لنقل كميات البيانات الكبيرة.'}
            </p>
          </div>
        </div>

        {/* Modern vs Classic Note (p. 56) */}
        {keyExchangeNote && (
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '4px',
            padding: '4px 8px',
            fontSize: '9.5px',
            color: '#64748b',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Icon name="info" size={14} style={{ color: '#0284c7', flexShrink: 0 }} />
            <span>{keyExchangeNote}</span>
          </div>
        )}

        {/* Bottom Key Takeaway Bar */}
        <div style={{
          backgroundColor: '#f6fef9',
          border: '1px solid #a7f3d0',
          borderRadius: '6px',
          padding: '5px 10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '8px',
          fontSize: '10.5px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#065f46' }}>
            <Icon name="vpn_key" size={14} style={{ color: '#059669' }} />
            <strong>{isEn ? 'Public-Key:' : 'المفتاح العام:'}</strong>
            <span style={{ color: '#1f2937' }}>
              {isEn ? 'To share keys safely and authenticate' : 'لمشاركة المفاتيح بأمان (Share keys safely) والمصادقة'}
            </span>
          </div>

          <div style={{ width: '1px', height: '12px', backgroundColor: '#a7f3d0' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#0369a1' }}>
            <Icon name="bolt" size={14} style={{ color: '#d97706' }} />
            <strong>{isEn ? 'Common-Key:' : 'المفتاح المشترك:'}</strong>
            <span style={{ color: '#1f2937' }}>
              {isEn ? 'To exchange large amounts of data quickly' : 'لتبادل كميات البيانات الضخمة بسرعة فائقة (Quickly)'}
            </span>
          </div>
        </div>
      </div>

      {/* Official 6-Mark Essay Question Box: Division of Roles (Book p. 56 & p. 60) */}
      {divisionOfRoles && (
        <div style={{
          backgroundColor: '#ecfdf5',
          border: '1.5px solid #059669',
          borderRadius: '8px',
          padding: '8px 12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ backgroundColor: '#065f46', color: '#34d399', fontSize: '9px', fontWeight: 800, padding: '1px 6px', borderRadius: '4px' }}>
                {divisionOfRoles.badge}
              </span>
              <strong style={{ fontSize: '11.5px', color: '#022c22' }}>
                {divisionOfRoles.title}
              </strong>
            </div>

            <button
              onClick={() => setShowDivisionAnswer(!showDivisionAnswer)}
              style={{
                fontSize: '10px',
                padding: '2px 8px',
                backgroundColor: showDivisionAnswer ? '#065f46' : '#ffffff',
                color: showDivisionAnswer ? '#ffffff' : '#065f46',
                border: '1px solid #065f46',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 700
              }}
            >
              {showDivisionAnswer ? (isEn ? 'Hide Model Answer' : 'إخفاء الإجابة النموذجية') : (isEn ? 'Reveal Model Answer' : 'عرض الإجابة النموذجية')}
            </button>
          </div>

          <p style={{ margin: 0, fontSize: '11px', color: '#065f46', fontWeight: 700, lineHeight: 1.35 }}>
            ❓ {divisionOfRoles.question}
          </p>

          {showDivisionAnswer && (
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #a7f3d0',
              borderRadius: '6px',
              padding: '6px 10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
              fontSize: '10.5px',
              lineHeight: 1.4,
              color: '#1f2937'
            }}>
              <strong style={{ color: '#059669' }}>{divisionOfRoles.coreReason}</strong>
              <div>{divisionOfRoles.publicKeyPart}</div>
              <div>{divisionOfRoles.commonKeyPart}</div>
              <div style={{ color: '#047857', fontWeight: 600, marginTop: '2px' }}>💡 {divisionOfRoles.summarySentence}</div>
            </div>
          )}
        </div>
      )}

      {/* Symmetric vs Asymmetric Comparison Duel Box */}
      {comparisonBox && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px',
          backgroundColor: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '8px',
          padding: '8px 10px'
        }}>
          {/* Asymmetric */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #a7f3d0',
            borderRadius: '6px',
            padding: '8px 10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icon name="vpn_key" size={16} style={{ color: '#059669' }} />
              <strong style={{ fontSize: '11.5px', color: '#065f46' }}>
                {comparisonBox.asymmetric.title}
              </strong>
            </div>
            <div style={{ fontSize: '10.5px', color: '#1f2937' }}>
              • <strong>{isEn ? 'Role:' : 'الدور:'}</strong> {comparisonBox.asymmetric.roleInHttps}
            </div>
            <div style={{ fontSize: '10.5px', color: '#047857' }}>
              • <strong>{isEn ? 'Pro:' : 'الميزة:'}</strong> {comparisonBox.asymmetric.pros}
            </div>
            <div style={{ fontSize: '10.5px', color: '#b91c1c' }}>
              • <strong>{isEn ? 'Con:' : 'العيب:'}</strong> {comparisonBox.asymmetric.cons}
            </div>
          </div>

          {/* Symmetric */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #bae6fd',
            borderRadius: '6px',
            padding: '8px 10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icon name="bolt" size={16} style={{ color: '#0284c7' }} />
              <strong style={{ fontSize: '11.5px', color: '#0369a1' }}>
                {comparisonBox.symmetric.title}
              </strong>
            </div>
            <div style={{ fontSize: '10.5px', color: '#1f2937' }}>
              • <strong>{isEn ? 'Role:' : 'الدور:'}</strong> {comparisonBox.symmetric.roleInHttps}
            </div>
            <div style={{ fontSize: '10.5px', color: '#0369a1' }}>
              • <strong>{isEn ? 'Pro:' : 'الميزة:'}</strong> {comparisonBox.symmetric.pros}
            </div>
            <div style={{ fontSize: '10.5px', color: '#b91c1c' }}>
              • <strong>{isEn ? 'Con:' : 'العيب:'}</strong> {comparisonBox.symmetric.cons}
            </div>
          </div>
        </div>
      )}

      {/* Interactive Quick Check */}
      {quickCheck && (
        <div style={{
          backgroundColor: '#ecfdf5',
          border: '1px solid #059669',
          borderRadius: '6px',
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
            <Icon name="quiz" size={18} style={{ color: '#059669', flexShrink: 0 }} />
            <span style={{ fontSize: '11.5px', fontWeight: 600, color: '#022c22' }}>
              {quickCheck.question}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              onClick={() => {
                setQuickCheckAnswer('صح');
                setShowCheckFeedback(true);
              }}
              style={{
                fontSize: '11px',
                padding: '3px 10px',
                borderRadius: '4px',
                border: '1px solid #10b981',
                backgroundColor: quickCheckAnswer === 'صح' ? '#10b981' : '#ffffff',
                color: quickCheckAnswer === 'صح' ? '#ffffff' : '#047857',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              {isEn ? 'True' : 'صواب'}
            </button>
            <button
              onClick={() => {
                setQuickCheckAnswer('خطأ');
                setShowCheckFeedback(true);
              }}
              style={{
                fontSize: '11px',
                padding: '3px 10px',
                borderRadius: '4px',
                border: '1px solid #ef4444',
                backgroundColor: quickCheckAnswer === 'خطأ' ? '#ef4444' : '#ffffff',
                color: quickCheckAnswer === 'خطأ' ? '#ffffff' : '#b91c1c',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              {isEn ? 'False' : 'خطأ'}
            </button>
          </div>

          {showCheckFeedback && (
            <div style={{
              width: '100%',
              marginTop: '4px',
              padding: '6px 8px',
              borderRadius: '4px',
              backgroundColor: quickCheckAnswer === 'خطأ' ? '#dcfce7' : '#fee2e2',
              color: quickCheckAnswer === 'خطأ' ? '#166534' : '#991b1b',
              fontSize: '11px',
              lineHeight: 1.4
            }}>
              <strong>{quickCheckAnswer === 'خطأ' ? (isEn ? 'Correct!' : 'إجابة صحيحة!') : (isEn ? 'Incorrect!' : 'إجابة خاطئة!')}</strong>{' '}
              {quickCheck.explanation}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
