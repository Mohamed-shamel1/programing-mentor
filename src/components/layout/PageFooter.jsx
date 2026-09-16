import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * PageFooter
 * Integrated DOM footer for reliable page numbering and provenance in print and screen.
 */
export default function PageFooter({
  currentPage,
  totalPages,
  subjectTitle,
  author,
  academicYear,
}) {
  const { t } = useLanguage();

  const finalSubjectTitle = subjectTitle || t('defaultSubjectTitle');
  const finalAuthor = author || t('authorName');
  const finalAcademicYear = academicYear || t('academicYearLabel');

  return (
    <footer className="page-footer" role="contentinfo">
      <div className="page-footer-mentor">
        <span className="font-heading" style={{ fontWeight: 'bold' }}>
          {t('platformName')}
        </span>
        <span aria-hidden="true" style={{ opacity: 0.4 }}>|</span>
        <span>{finalSubjectTitle}</span>
      </div>

      <div className="page-footer-author" style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-neutral-600)' }}>
        <span>{finalAuthor}</span>
        <span aria-hidden="true" style={{ opacity: 0.4, margin: '0 5px' }}>•</span>
        <span>{finalAcademicYear}</span>
      </div>

      <div className="page-footer-page-num font-heading" style={{ fontWeight: 'bold', color: 'var(--color-navy-800)' }}>
        {currentPage && (
          <span>
            {t('pageNumberFormat', currentPage, totalPages)}
          </span>
        )}
      </div>
    </footer>
  );
}
