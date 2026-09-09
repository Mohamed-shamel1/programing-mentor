import React from 'react';
import LessonRenderer from '../renderer/LessonRenderer.jsx';

/**
 * PrintBookletPage
 * Printable A4 booklet view. Designed for browser print (Ctrl+P / Command+P)
 * and high-fidelity paper booklet reproduction.
 */
export default function PrintBookletPage({ lesson = null }) {
  return (
    <div className="print-booklet-page">
      <div className="screen-only" style={{ padding: 'var(--space-4)', textAlign: 'center', background: 'var(--color-navy-50)', borderBottom: 'var(--border-subtle)' }}>
        <p className="text-secondary" style={{ margin: 0 }}>
          <strong>وضع معاينة الكتيب الطباعي A4:</strong> يتم إخفاء أشرطة التحكم تلقائياً أثناء الطباعة الفعلية عبر <code>print.css</code>.
        </p>
      </div>

      <LessonRenderer lesson={lesson} />
    </div>
  );
}
