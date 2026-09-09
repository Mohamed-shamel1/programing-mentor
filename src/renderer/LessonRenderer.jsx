import React from 'react';
import PageRenderer from './PageRenderer.jsx';

/**
 * LessonRenderer
 * Orchestrates rendering a complete sequence of pages for a given lesson.
 * Decouples curriculum content structure from React component rendering.
 */
export default function LessonRenderer({ lesson }) {
  if (!lesson || !lesson.pages || lesson.pages.length === 0) {
    return (
      <div className="renderer-placeholder" style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
        <h2 className="font-heading">مُشغّل الدروس (Lesson Renderer)</h2>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: 'var(--space-3) auto' }}>
          هذه الطبقة المعمارية جاهزة لاستقبال مصفوفة صفحات الدرس عند تغذيتها من طبقة المحتوى التعليمي.
          تُترجم كل صفحة تلقائياً إلى نوع الصفحة التعليمية المطابق داخل غلاف A4 المطبوع.
        </p>
      </div>
    );
  }

  return (
    <div className="lesson-container">
      {lesson.pages.map((page, index) => {
        // Ensure totalPages is passed through if omitted on individual page
        const enrichedPage = {
          ...page,
          totalPages: page.totalPages || lesson.pages.length,
          unitTitle: page.unitTitle || lesson.unitTitle,
          lessonTitle: page.lessonTitle || lesson.title,
        };

        return (
          <PageRenderer
            key={page.id || `page-${index + 1}`}
            page={enrichedPage}
          />
        );
      })}
    </div>
  );
}
