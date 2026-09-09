import React from 'react';

/**
 * PageHeader
 * Integrated DOM header for both interactive reading and A4 print.
 * Displays national curriculum metadata, unit title, and lesson context.
 */
export default function PageHeader({ unitTitle, lessonTitle, badgeText }) {
  return (
    <header className="page-header" role="banner">
      <div className="page-header-meta">
        <span className="page-header-title">
          {lessonTitle || 'البرمجة والذكاء الاصطناعي'}
        </span>
        <span className="page-header-subtitle">
          {unitTitle || 'البكالوريا المصرية — الصف الأول الثانوي (2026–2027)'}
        </span>
      </div>

      {badgeText && (
        <span className="page-header-badge">
          {badgeText}
        </span>
      )}
    </header>
  );
}
