import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext.js';
import LanguageSwitcher from '../ui/LanguageSwitcher.jsx';
import Icon from '../ui/Icon.jsx';
import { CURRICULUM_LESSONS } from '../../data/curriculumRegistry.js';

/**
 * InstructorHeader
 * Modern, authoritative top application header.
 * Features a sleek lessons dropdown, clean brand identity, and language switcher.
 */
export default function InstructorHeader({
  activeNavTab, // 'HOME' | 'FRONT_MATTER' | 'LESSON'
  activeLessonId,
  onSelectHome,
  onSelectFrontMatter,
  onSelectLesson,
}) {
  const { language, t } = useLanguage();
  const isEn = language === 'en';

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const currentLesson =
    CURRICULUM_LESSONS.find((l) => l.id === activeLessonId) ||
    CURRICULUM_LESSONS[0];

  const currentLessonTitle = isEn
    ? currentLesson.shortTitleEn
    : currentLesson.shortTitleAr;

  return (
    <header
      className="screen-only instructor-top-header"
      style={{
        backgroundColor: 'var(--color-navy-950, #091322)',
        color: '#ffffff',
        padding: '8px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid var(--color-navy-800, #1e293b)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* 1. Brand Mark */}
      <div
        role="button"
        tabIndex={0}
        onClick={onSelectHome}
        onKeyDown={(e) => e.key === 'Enter' && onSelectHome()}
        title={t('returnHomeTooltip')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            backgroundColor: 'var(--color-cobalt-600, #2563eb)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 12px rgba(56, 189, 248, 0.35)',
          }}
        >
          <Icon name="psychology" size={20} color="#ffffff" />
        </div>
        <div>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: '900',
              fontSize: '14px',
              color: '#ffffff',
              display: 'block',
              lineHeight: 1.15,
            }}
          >
            {t('platformName')}
          </span>
          <span
            style={{
              fontSize: '10px',
              color: '#94a3b8',
              display: 'block',
            }}
          >
            {t('platformSubtitle')}
          </span>
        </div>
      </div>

      {/* 2. Primary Navigation Tabs with Lessons Dropdown */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid var(--color-navy-800, #1e293b)',
          borderRadius: '10px',
          padding: '3px',
          gap: '3px',
        }}
        aria-label="Instructor Main Navigation"
      >
        {/* Home Tab */}
        <button
          type="button"
          onClick={onSelectHome}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            fontSize: '12.5px',
            fontFamily: 'var(--font-heading)',
            fontWeight: activeNavTab === 'HOME' ? 'bold' : '500',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            backgroundColor:
              activeNavTab === 'HOME'
                ? 'var(--color-cobalt-600, #2563eb)'
                : 'transparent',
            color: activeNavTab === 'HOME' ? '#ffffff' : '#94a3b8',
            transition: 'all 0.15s ease',
          }}
        >
          <Icon name="home" size={15} />
          <span>{isEn ? 'Home' : 'الرئيسية'}</span>
        </button>

        {/* Front Matter Tab */}
        <button
          type="button"
          onClick={onSelectFrontMatter}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            fontSize: '12.5px',
            fontFamily: 'var(--font-heading)',
            fontWeight: activeNavTab === 'FRONT_MATTER' ? 'bold' : '500',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            backgroundColor:
              activeNavTab === 'FRONT_MATTER'
                ? 'var(--color-cobalt-600, #2563eb)'
                : 'transparent',
            color: activeNavTab === 'FRONT_MATTER' ? '#ffffff' : '#94a3b8',
            transition: 'all 0.15s ease',
          }}
        >
          <Icon name="menu_book" size={15} />
          <span>{isEn ? 'Curriculum Guide' : 'دليل المنهج'}</span>
        </button>

        {/* Lessons Dropdown Selector */}
        <div style={{ position: 'relative' }} ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              fontSize: '12.5px',
              fontFamily: 'var(--font-heading)',
              fontWeight: activeNavTab === 'LESSON' ? 'bold' : '500',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor:
                activeNavTab === 'LESSON'
                  ? 'var(--color-cobalt-600, #2563eb)'
                  : 'transparent',
              color: activeNavTab === 'LESSON' ? '#ffffff' : '#94a3b8',
              transition: 'all 0.15s ease',
            }}
          >
            <Icon name="auto_stories" size={15} />
            <span>{currentLessonTitle}</span>
            <Icon
              name={isDropdownOpen ? 'expand_less' : 'expand_more'}
              size={15}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 6px)',
                left: isEn ? 0 : 'auto',
                right: isEn ? 'auto' : 0,
                width: '290px',
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '10px',
                padding: '6px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
                zIndex: 110,
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: '800',
                  color: '#64748b',
                  padding: '6px 10px',
                  borderBottom: '1px solid #1e293b',
                  marginBottom: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{isEn ? 'CURRICULUM LESSONS' : 'فهرس دروس المنهج'}</span>
                <span>{CURRICULUM_LESSONS.length} {isEn ? 'Lessons' : 'دروس'}</span>
              </div>

              {CURRICULUM_LESSONS.map((l) => {
                const isSelected = l.id === activeLessonId && activeNavTab === 'LESSON';
                const isUpcoming = l.status === 'upcoming';
                const title = isEn ? l.shortTitleEn : l.shortTitleAr;

                return (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => {
                      if (!isUpcoming) {
                        onSelectLesson(l.id);
                        setIsDropdownOpen(false);
                      }
                    }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      border: 'none',
                      backgroundColor: isSelected
                        ? 'rgba(37, 99, 235, 0.25)'
                        : 'transparent',
                      color: isSelected
                        ? '#38bdf8'
                        : isUpcoming
                        ? '#64748b'
                        : '#cbd5e1',
                      cursor: isUpcoming ? 'not-allowed' : 'pointer',
                      fontSize: '12px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: isSelected ? 'bold' : '500',
                      textAlign: isEn ? 'left' : 'right',
                      transition: 'background-color 0.15s',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Icon
                        name={l.icon || 'terminal'}
                        size={15}
                        color={isSelected ? '#38bdf8' : isUpcoming ? '#475569' : '#94a3b8'}
                      />
                      <span>{title}</span>
                    </div>

                    {isUpcoming ? (
                      <span
                        style={{
                          fontSize: '10px',
                          padding: '1px 6px',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(255, 255, 255, 0.06)',
                          color: '#64748b',
                        }}
                      >
                        {isEn ? 'Soon' : 'قريباً'}
                      </span>
                    ) : (
                      <span
                        style={{
                          fontSize: '10px',
                          padding: '1px 6px',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(16, 185, 129, 0.15)',
                          color: '#34d399',
                        }}
                      >
                        {isEn ? 'Active' : 'جاهز'}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* 3. Language Switcher & Direct Print */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <LanguageSwitcher />

        <button
          type="button"
          onClick={() => window.print()}
          title={t('printTooltip')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid var(--color-navy-700, #334155)',
            color: '#cbd5e1',
            borderRadius: 'var(--radius-xs, 4px)',
            padding: '5px 12px',
            fontSize: '11px',
            cursor: 'pointer',
            fontFamily: 'var(--font-heading)',
            fontWeight: '600',
            transition: 'all 0.15s ease',
          }}
        >
          <Icon name="print" size={14} color="#2dd4bf" />
          <span>{t('printA4')}</span>
        </button>
      </div>
    </header>
  );
}
