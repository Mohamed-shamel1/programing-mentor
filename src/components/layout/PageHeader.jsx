import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * PageHeader
 * Integrated DOM header for both interactive reading and A4 print.
 * Displays national curriculum metadata, unit title, and lesson context.
 */
export default function PageHeader({ unitTitle, lessonTitle, badgeText, pageTag }) {
  const { t } = useLanguage();

  return (
    <header className="page-header" role="banner">
      <div className="page-header-meta">
        <span className="page-header-title font-heading">
          {lessonTitle || t('defaultLessonTitle')}
        </span>
        <span className="page-header-subtitle">
          {unitTitle || t('defaultUnitTitle')}
        </span>
      </div>

      <div className="page-header-tags" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {badgeText && (
          <span className="page-header-badge">
            {badgeText}
          </span>
        )}
        {pageTag && (
          <span
            className="page-header-code font-code"
            style={{
              fontSize: '10px',
              color: 'var(--color-navy-700)',
              backgroundColor: 'var(--color-navy-50)',
              border: '1px solid var(--color-navy-200)',
              padding: '2px 6px',
              borderRadius: 'var(--radius-xs)',
              fontWeight: 'bold',
            }}
          >
            {pageTag}
          </span>
        )}
      </div>
    </header>
  );
}
