import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext.js';
import Icon from '../ui/Icon.jsx';

/**
 * LessonPager
 * Compact, unified navigation bar embedded at the top of active lesson workspaces.
 * Replaces messy individual sub-page buttons with an intuitive stepper,
 * previous/next arrows, and unified lesson tools (Booklet, Master Sheet, Student Exam QR).
 */
export default function LessonPager({
  lesson,
  currentPageId,
  onSelectPageId,
  onOpenBooklet,
  onOpenCheatSheet,
  onOpenExam,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const pages = lesson.pages || [];
  const currentIndex = pages.findIndex((p) => p.id === currentPageId);
  const activeIndex = currentIndex >= 0 ? currentIndex : 0;
  const activePage = pages[activeIndex] || pages[0];

  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < pages.length - 1;

  const handlePrev = () => {
    if (hasPrev) {
      onSelectPageId(pages[activeIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      onSelectPageId(pages[activeIndex + 1].id);
    }
  };

  return (
    <nav
      className="screen-only lesson-pager-bar"
      aria-label="Lesson Internal Navigation"
      style={{
        backgroundColor: '#091322',
        borderBottom: '1px solid var(--color-navy-800, #1e293b)',
        padding: '8px 16px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        position: 'sticky',
        top: '49px',
        zIndex: 90,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* 1. Lesson Identity & Current Station Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '180px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '2px 8px',
            borderRadius: '6px',
            fontSize: '11px',
            fontWeight: '800',
            backgroundColor: 'rgba(37, 99, 235, 0.25)',
            color: '#60a5fa',
            border: '1px solid rgba(37, 99, 235, 0.4)',
          }}
        >
          {isEn ? `Lesson ${lesson.lessonNumber || '1-1'}` : `الدرس ${lesson.lessonNumber || '1-1'}`}
        </span>

        <span
          style={{
            fontSize: '12px',
            fontFamily: 'var(--font-heading)',
            fontWeight: 'bold',
            color: '#f1f5f9',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '220px',
          }}
          title={activePage?.content?.title || activePage?.badgeText}
        >
          {activePage?.badgeText || activePage?.content?.title}
        </span>
      </div>

      {/* 2. Unified Stepper & Numbered Stations */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          padding: '3px 8px',
          borderRadius: '9999px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Previous Arrow */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={!hasPrev}
          title={isEn ? 'Previous Page' : 'الصفحة السابقة'}
          style={{
            background: 'transparent',
            border: 'none',
            color: hasPrev ? '#38bdf8' : '#475569',
            cursor: hasPrev ? 'pointer' : 'not-allowed',
            padding: '4px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.15s ease',
          }}
        >
          <Icon name={isEn ? 'chevron_left' : 'chevron_right'} size={18} />
        </button>

        {/* Stations Pills */}
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          {pages.map((p, idx) => {
            const isActive = idx === activeIndex;
            const pageNum = p.pageNumber || (idx < 10 ? `0${idx}` : `${idx}`);
            const pageLabel = p.badgeText || p.content?.title || `Page ${idx}`;

            return (
              <button
                key={p.id}
                type="button"
                onClick={() => onSelectPageId(p.id)}
                title={`${pageNum} : ${pageLabel}`}
                style={{
                  minWidth: '24px',
                  height: '24px',
                  padding: '0 4px',
                  fontSize: '11px',
                  fontFamily: 'monospace',
                  fontWeight: isActive ? '900' : '600',
                  borderRadius: '6px',
                  border: isActive
                    ? '1.5px solid #38bdf8'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: isActive
                    ? 'var(--color-cobalt-600, #2563eb)'
                    : 'transparent',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.15s ease',
                  boxShadow: isActive ? '0 0 8px rgba(56, 189, 248, 0.4)' : 'none',
                }}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        {/* Next Arrow */}
        <button
          type="button"
          onClick={handleNext}
          disabled={!hasNext}
          title={isEn ? 'Next Page' : 'الصفحة التالية'}
          style={{
            background: 'transparent',
            border: 'none',
            color: hasNext ? '#38bdf8' : '#475569',
            cursor: hasNext ? 'pointer' : 'not-allowed',
            padding: '4px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.15s ease',
          }}
        >
          <Icon name={isEn ? 'chevron_right' : 'chevron_left'} size={18} />
        </button>
      </div>

      {/* 3. Lesson Companion Tools (Booklet, Master Sheet, QR Exam) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        {onOpenCheatSheet && (
          <button
            type="button"
            onClick={onOpenCheatSheet}
            title={isEn ? 'Master Revision Sheet (A4 Landscape)' : 'مخطط الإتقان الشامل (A4 أفقي)'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '5px 10px',
              fontSize: '11px',
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              borderRadius: '6px',
              backgroundColor: 'rgba(245, 158, 11, 0.15)',
              color: '#fbbf24',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            <Icon name="dashboard" size={14} />
            <span>{isEn ? 'Master Sheet' : 'مخطط الإتقان'}</span>
          </button>
        )}

        {onOpenBooklet && (
          <button
            type="button"
            onClick={onOpenBooklet}
            title={isEn ? 'Print Full Lesson Booklet (A4)' : 'طباعة كتيب الدرس كاملاً (A4)'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '5px 10px',
              fontSize: '11px',
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              borderRadius: '6px',
              backgroundColor: 'rgba(13, 148, 136, 0.15)',
              color: '#2dd4bf',
              border: '1px solid rgba(13, 148, 136, 0.35)',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            <Icon name="print" size={14} />
            <span>{isEn ? 'Print Booklet' : 'طباعة الكتيب'}</span>
          </button>
        )}

        {onOpenExam && (
          <button
            type="button"
            onClick={onOpenExam}
            title={isEn ? 'Student Mobile Exam' : 'اختبار الطلاب (QR / موبايل)'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '5px 10px',
              fontSize: '11px',
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              borderRadius: '6px',
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              color: '#a5b4fc',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            <Icon name="qr_code_scanner" size={14} />
            <span>{isEn ? 'Exam' : 'الامتحان'}</span>
          </button>
        )}
      </div>
    </nav>
  );
}
