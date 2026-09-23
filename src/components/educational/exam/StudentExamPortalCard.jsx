import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext.js';
import Icon from '../../ui/Icon.jsx';

/**
 * StudentExamPortalCard
 * Instructor-facing assessment portal card embedded in lesson revision / booklet.
 * Generates dynamic QR code for students to scan with mobile cameras,
 * and allows the instructor to copy the direct student exam URL or preview the exam.
 */
export default function StudentExamPortalCard({
  examHash = '#exam-1-1',
  lessonCode = '1-1',
  onPreviewExam = null,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const [copied, setCopied] = useState(false);
  const [examUrl, setExamUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fullUrl = `${window.location.origin}${window.location.pathname}${examHash}`;
      setExamUrl(fullUrl);
    }
  }, [examHash]);

  const handleCopyLink = async () => {
    if (!examUrl) return;
    try {
      await navigator.clipboard.writeText(examUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback prompt if clipboard API blocked
      window.prompt(
        isEn ? 'Copy exam link for students:' : 'انسخ رابط الامتحان للطلاب:',
        examUrl
      );
    }
  };

  const handleOpenStudentView = () => {
    if (onPreviewExam) {
      onPreviewExam();
    } else {
      window.open(examUrl, '_blank');
    }
  };

  // High-resolution scannable QR Code endpoint
  const qrCodeImageUrl = examUrl
    ? `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
        examUrl
      )}&color=091322&bgcolor=ffffff&qzone=1`
    : '';

  return (
    <div
      className="card card-navy"
      style={{
        marginTop: 'var(--space-5, 20px)',
        border: '1.5px solid var(--color-navy-800, #1e293b)',
        borderRadius: 'var(--radius-lg, 14px)',
        background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.08)',
        pageBreakInside: 'avoid',
        breakInside: 'avoid',
      }}
    >
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
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'var(--color-navy-950, #0f172a)',
              color: '#38bdf8',
            }}
          >
            <Icon name="qr_code_scanner" size={20} />
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
              {isEn
                ? `Student Mobile Exam Portal — Lesson ${lessonCode}`
                : `بوابة اختبار الطلاب عبر الهاتف — الدرس ${lessonCode}`}
            </h3>
            <p style={{ margin: 0, fontSize: '0.8125rem', color: '#64748b' }}>
              {isEn
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
          {isEn ? 'Standalone Mobile View' : 'شاشة طالب مستقلة (بدون قوائم)'}
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '20px',
          alignItems: 'center',
        }}
      >
        {/* QR Code Frame */}
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
          {qrCodeImageUrl ? (
            <img
              src={qrCodeImageUrl}
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

        {/* Action Controls & Instructions */}
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
              {examUrl || 'https://...#exam-1-1'}
            </div>

            <button
              type="button"
              onClick={handleCopyLink}
              style={{
                background: copied ? '#10b981' : '#2563eb',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '11px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
              }}
            >
              <Icon name={copied ? 'check' : 'content_copy'} size={14} />
              <span>{copied ? (isEn ? 'Copied!' : 'تم النسخ!') : isEn ? 'Copy' : 'نسخ'}</span>
            </button>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <button
              type="button"
              onClick={handleOpenStudentView}
              style={{
                background: '#0f172a',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 14px',
                fontSize: '12px',
                fontFamily: 'var(--font-heading)',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
              }}
            >
              <Icon name="phone_iphone" size={16} color="#38bdf8" />
              <span>{isEn ? 'Preview Student Mobile View 📱' : 'معاينة شاشة الطالب 📱'}</span>
            </button>

            <span style={{ fontSize: '11px', color: '#64748b' }}>
              {isEn
                ? '• 28 Questions (22 Auto-graded + 6 Essays)'
                : '• 28 سؤالاً (22 تصحيح فوري + 6 مقالي)'}
            </span>
          </div>

          {copied && (
            <p
              style={{
                margin: '8px 0 0',
                fontSize: '12px',
                color: '#059669',
                fontWeight: 'bold',
              }}
            >
              {isEn
                ? '✓ Link copied! You can now paste and send it directly to your students.'
                : '✓ تم نسخ الرابط! يمكنك الآن لصقه وإرساله مباشرة للطلاب في جروب الواتساب أو تليجرام.'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
