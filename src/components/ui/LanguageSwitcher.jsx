import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext.js';
import Icon from './Icon.jsx';

/**
 * LanguageSwitcher
 * Compact, highly-polished dual pill switcher for Arabic (RTL) and English (LTR).
 * Embedded in the primary top bar with micro-animations and accessibility support.
 */
export default function LanguageSwitcher({ className = '' }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language Selector"
      className={`language-switcher-pill ${className}`.trim()}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        border: '1px solid var(--color-navy-700)',
        borderRadius: 'var(--radius-full, 9999px)',
        padding: '2px',
        gap: '2px',
      }}
    >
      <button
        type="button"
        onClick={() => setLanguage('ar')}
        aria-pressed={language === 'ar'}
        title="التبديل إلى اللغة العربية (RTL)"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          padding: '4px 10px',
          fontSize: '11px',
          fontFamily: "'Cairo', sans-serif",
          fontWeight: language === 'ar' ? 'bold' : '500',
          color: language === 'ar' ? '#ffffff' : 'var(--color-neutral-400)',
          backgroundColor: language === 'ar' ? 'var(--color-cobalt-600)' : 'transparent',
          border: 'none',
          borderRadius: 'var(--radius-full, 9999px)',
          cursor: 'pointer',
          transition: 'all 0.18s ease-in-out',
          boxShadow: language === 'ar' ? '0 1px 4px rgba(37, 99, 235, 0.4)' : 'none',
        }}
      >
        <Icon
          name="translate"
          size={13}
          color={language === 'ar' ? '#ffffff' : 'var(--color-neutral-400)'}
        />
        <span>عربي</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        title="Switch to English (LTR)"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          padding: '4px 10px',
          fontSize: '11px',
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: language === 'en' ? 'bold' : '500',
          color: language === 'en' ? '#ffffff' : 'var(--color-neutral-400)',
          backgroundColor: language === 'en' ? 'var(--color-cobalt-600)' : 'transparent',
          border: 'none',
          borderRadius: 'var(--radius-full, 9999px)',
          cursor: 'pointer',
          transition: 'all 0.18s ease-in-out',
          boxShadow: language === 'en' ? '0 1px 4px rgba(37, 99, 235, 0.4)' : 'none',
        }}
      >
        <span>EN</span>
      </button>
    </div>
  );
}
