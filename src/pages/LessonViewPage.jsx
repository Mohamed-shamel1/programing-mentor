import React from 'react';
import LessonRenderer from '../renderer/LessonRenderer.jsx';

/**
 * LessonViewPage
 * Web-based interactive runner for lesson pages.
 * Consumes the LessonRenderer component.
 */
export default function LessonViewPage({ lesson = null }) {
  return (
    <div className="lesson-view-page" style={{ padding: 'var(--space-6) var(--space-4)' }}>
      <LessonRenderer lesson={lesson} />
    </div>
  );
}
