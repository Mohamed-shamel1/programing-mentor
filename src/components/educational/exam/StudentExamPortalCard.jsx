import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext.js';
import Icon from '../../ui/Icon.jsx';

/**
 * StudentExamPortalCard
 * Instructor-facing assessment portal card embedded in lesson revision / booklet / capstone.
 * Generates dynamic QR codes for students to scan with mobile cameras.
 * Supports Dual QR mode (Arabic + English) with automatic deep linking.
 */
export default function StudentExamPortalCard({
  examHash = '#exam-1-1',
  lessonCode = '1-1',
  onPreviewExam = null,
  isDual = null,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const enableDual =
    isDual !== null ? isDual : lessonCode === '1-2' || lessonCode === '1-3';

  const [copiedAr, setCopiedAr] = useState(false);
  const [copiedEn, setCopiedEn] = useState(false);
  const [baseUrl, setBaseUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const base = `${window.location.origin}${window.location.pathname}`;
      setBaseUrl(base);
    }
  }, []);

  const examUrlDefault = baseUrl ? `${baseUrl}${examHash}` : '';
  const examUrlAr = baseUrl ? `${baseUrl}${examHash}?lang=ar` : '';
  const examUrlEn = baseUrl ? `${baseUrl}${examHash}?lang=en` : '';

  const copyToClipboard = async (url, setStatus) => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setStatus(true);
      setTimeout(() => setStatus(false), 3000);
    } catch {
      window.prompt(
        isEn ? 'Copy exam link for students:' : 'انسخ رابط الامتحان للطلاب:',
        url
      );
    }
  };

  const openUrl = (url) => {
    if (onPreviewExam) {
      onPreviewExam(url);
    } else {
      window.open(url, '_blank');
    }
  };

  const getQrUrl = (targetUrl) =>
    targetUrl
      ? `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
          targetUrl
        )}&color=091322&bgcolor=ffffff&qzone=1`
      : '';

  const qrDefault = getQrUrl(examUrlDefault);
  const qrAr = getQrUrl(examUrlAr);
  const qrEn = getQrUrl(examUrlEn);

  return (
    <div
      className="card card-navy student-exam-portal-wrapper"
      style={{
        marginTop: 'var(--space-5, 20px)',
        border: '1.5px solid var(--color-navy-800, #1e293b)',
        borderRadius: 'var(--radius-lg, 14px)',
        background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.08)',
        pageBreakInside: 'avoid',
        breakInside: 'avoid',
        padding: '16px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Header bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          borderBottom: '1px solid #e2e8f0',
          paddingBottom: '12px',
          marginBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'var(--color-navy-950, #0f172a)',
              color: '#38bdf8',
              flexShrink: 0,
            }}
          >
            <Icon name="qr_code_scanner" size={22} />
          </span>
          <div>
            <h3
              style={{
                margin: 0,
                fontSize: '1.05rem',
                fontFamily: 'var(--font-heading, "Cairo", sans-serif)',
                fontWeight: '800',
                color: '#0f172a',
              }}
            >
              {enableDual
                ? isEn
                  ? `Dual Mobile Exam Portal — Lesson ${lessonCode}`
                  : `بوابة الاختبار الإلكتروني الشامل (رمزين QR) — الدرس ${lessonCode}`
                : isEn
                ? `Student Mobile Exam Portal — Lesson ${lessonCode}`
                : `بوابة اختبار الطلاب عبر الهاتف — الدرس ${lessonCode}`}
            </h3>
            <p style={{ margin: 0, fontSize: '0.8125rem', color: '#64748b' }}>
              {enableDual
                ? isEn
                  ? 'Students scan the Arabic or English QR code with phone camera to launch instantly.'
                  : 'امسح رمز الـ QR بكاميرا الهاتف لفتح الامتحان مباشرة باللغة العربية أو الإنجليزية.'
                : isEn
                ? 'Project or share this QR code for students to take the exam on their phones.'
                : 'اعرض هذا الكود على شاشة الفصل أو شارك الرابط ليمتحن الطلاب على هواتفهم.'}
            </p>
          </div>
        </div>

        <span
          style={{
            fontSize: '11px',
            fontWeight: '700',
            padding: '4px 10px',
            borderRadius: '999px',
            background: 'rgba(13, 148, 136, 0.12)',
            color: '#0d9488',
            border: '1px solid rgba(13, 148, 136, 0.25)',
          }}
        >
          {enableDual
            ? isEn
              ? 'Bilingual Mobile Portal'
              : 'شاشة اختبار مستقلة ثنائية اللغة'
            : isEn
            ? 'Standalone Mobile View'
            : 'شاشة طالب مستقلة'}
        </span>
      </div>

      {/* Main Content Area */}
      {enableDual ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            width: '100%',
          }}
        >
          {/* Card 1: Arabic QR */}
          <div
            style={{
              background: '#ffffff',
              border: '1.5px solid #cbd5e1',
              borderRadius: '12px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '16px' }}>🇪🇬</span>
                  <strong style={{ fontSize: '13px', color: '#0f172a' }}>
                    {isEn ? 'Arabic Exam Portal' : 'الاختبار باللغة العربية'}
                  </strong>
                </div>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 'bold',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: '#ecfdf5',
                    color: '#047857',
                    border: '1px solid #a7f3d0',
                  }}
                >
                  عربي (RTL)
                </span>
              </div>

              {/* QR Image Box */}
              <div
                style={{
                  background: '#f8fafc',
                  border: '1px dashed #cbd5e1',
                  borderRadius: '10px',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                }}
              >
                {qrAr ? (
                  <img
                    src={qrAr}
                    alt="Arabic Exam QR"
                    width="140"
                    height="140"
                    style={{ display: 'block', borderRadius: '6px' }}
                  />
                ) : (
                  <div style={{ width: '140px', height: '140px', background: '#e2e8f0' }} />
                )}
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#0f172a',
                    marginTop: '6px',
                  }}
                >
                  امسح بكاميرا الهاتف للبدء
                </span>
              </div>

              {/* URL snippet */}
              <div
                style={{
                  background: '#0f172a',
                  borderRadius: '6px',
                  padding: '6px 10px',
                  marginBottom: '10px',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: '#38bdf8',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  direction: 'ltr',
                }}
              >
                {examUrlAr || '...#exam-1-2?lang=ar'}
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => copyToClipboard(examUrlAr, setCopiedAr)}
                style={{
                  flex: '1',
                  minHeight: '38px',
                  background: copiedAr ? '#059669' : '#0284c7',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '11.5px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px',
                  cursor: 'pointer',
                  padding: '6px 10px',
                }}
              >
                <Icon name={copiedAr ? 'done' : 'content_copy'} size={15} />
                <span>{copiedAr ? (isEn ? 'Copied!' : 'تم النسخ!') : isEn ? 'Copy Arabic Link' : 'نسخ رابط العربي'}</span>
              </button>

              <button
                type="button"
                onClick={() => openUrl(examUrlAr)}
                style={{
                  flex: '1',
                  minHeight: '38px',
                  background: '#0f172a',
                  color: '#38bdf8',
                  border: '1px solid #334155',
                  borderRadius: '6px',
                  fontSize: '11.5px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px',
                  cursor: 'pointer',
                  padding: '6px 10px',
                }}
              >
                <Icon name="open_in_new" size={15} />
                <span>{isEn ? 'Launch Arabic ➔' : 'بدء الاختبار بالعربي ➔'}</span>
              </button>
            </div>
          </div>

          {/* Card 2: English QR */}
          <div
            style={{
              background: '#ffffff',
              border: '1.5px solid #cbd5e1',
              borderRadius: '12px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '16px' }}>🇬🇧</span>
                  <strong style={{ fontSize: '13px', color: '#0f172a' }}>
                    {isEn ? 'English Exam Portal' : 'الاختبار باللغة الإنجليزية'}
                  </strong>
                </div>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 'bold',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: '#eff6ff',
                    color: '#1d4ed8',
                    border: '1px solid #bfdbfe',
                  }}
                >
                  English (LTR)
                </span>
              </div>

              {/* QR Image Box */}
              <div
                style={{
                  background: '#f8fafc',
                  border: '1px dashed #cbd5e1',
                  borderRadius: '10px',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                }}
              >
                {qrEn ? (
                  <img
                    src={qrEn}
                    alt="English Exam QR"
                    width="140"
                    height="140"
                    style={{ display: 'block', borderRadius: '6px' }}
                  />
                ) : (
                  <div style={{ width: '140px', height: '140px', background: '#e2e8f0' }} />
                )}
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#0f172a',
                    marginTop: '6px',
                  }}
                >
                  Scan with camera to launch in English
                </span>
              </div>

              {/* URL snippet */}
              <div
                style={{
                  background: '#0f172a',
                  borderRadius: '6px',
                  padding: '6px 10px',
                  marginBottom: '10px',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: '#38bdf8',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  direction: 'ltr',
                }}
              >
                {examUrlEn || '...#exam-1-2?lang=en'}
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => copyToClipboard(examUrlEn, setCopiedEn)}
                style={{
                  flex: '1',
                  minHeight: '38px',
                  background: copiedEn ? '#059669' : '#2563eb',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '11.5px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px',
                  cursor: 'pointer',
                  padding: '6px 10px',
                }}
              >
                <Icon name={copiedEn ? 'done' : 'content_copy'} size={15} />
                <span>{copiedEn ? (isEn ? 'Copied!' : 'تم النسخ!') : isEn ? 'Copy English Link' : 'نسخ رابط الإنجليزي'}</span>
              </button>

              <button
                type="button"
                onClick={() => openUrl(examUrlEn)}
                style={{
                  flex: '1',
                  minHeight: '38px',
                  background: '#0f172a',
                  color: '#38bdf8',
                  border: '1px solid #334155',
                  borderRadius: '6px',
                  fontSize: '11.5px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px',
                  cursor: 'pointer',
                  padding: '6px 10px',
                }}
              >
                <Icon name="open_in_new" size={15} />
                <span>{isEn ? 'Launch English ➔' : 'بدء الاختبار بالإنجليزي ➔'}</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Single QR mode (Lesson 1-1 fallback) */
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '20px',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              background: '#ffffff',
              padding: '10px',
              borderRadius: '12px',
              border: '1px solid #cbd5e1',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '150px',
            }}
          >
            {qrDefault ? (
              <img
                src={qrDefault}
                alt="Student Exam QR Code"
                width="150"
                height="150"
                style={{ display: 'block', borderRadius: '6px' }}
              />
            ) : (
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  background: '#f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon name="qr_code_2" size={48} color="#94a3b8" />
              </div>
            )}
            <span
              style={{
                fontSize: '10px',
                fontWeight: 'bold',
                color: '#0f172a',
                marginTop: '6px',
              }}
            >
              {isEn ? 'Scan with Mobile Camera' : 'امسح بكاميرا الهاتف'}
            </span>
          </div>

          <div style={{ flex: '1', minWidth: '240px' }}>
            <div
              style={{
                background: '#0f172a',
                borderRadius: '8px',
                padding: '10px 14px',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '8px',
              }}
            >
              <div
                style={{
                  fontFamily: 'monospace',
                  fontSize: '12px',
                  color: '#38bdf8',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  direction: 'ltr',
                }}
              >
                {examUrlDefault || 'https://...'}
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(examUrlDefault, setCopiedAr)}
                style={{
                  background: copiedAr ? '#10b981' : '#2563eb',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                <Icon name={copiedAr ? 'done' : 'content_copy'} size={14} />
                <span>{copiedAr ? (isEn ? 'Copied' : 'تم النسخ') : isEn ? 'Copy' : 'نسخ'}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => openUrl(examUrlDefault)}
              style={{
                width: '100%',
                padding: '10px 16px',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: '13px',
                fontFamily: 'var(--font-heading, "Cairo", sans-serif)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
              }}
            >
              <Icon name="open_in_new" size={16} />
              <span>{isEn ? 'Launch Student Exam' : 'فتح شاشة اختبار الطالب'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
