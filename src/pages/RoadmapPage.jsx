import React from 'react';
import Card from '../components/ui/Card.jsx';
import Badge from '../components/ui/Badge.jsx';
import CalloutBox from '../components/ui/CalloutBox.jsx';

/**
 * RoadmapPage
 * Architectural placeholder for the 23-lesson curriculum syllabus roadmap.
 * No fake or unverified curriculum details are populated here.
 */
export default function RoadmapPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--space-8) var(--space-4)' }}>
      <header style={{ marginBottom: 'var(--space-6)' }}>
        <Badge variant="teal">خارطة المنهج</Badge>
        <h2 className="font-heading" style={{ marginTop: 'var(--space-2)' }}>
          مسار دروس البرمجة والذكاء الاصطناعي (23 درساً)
        </h2>
        <p className="text-secondary">
          منهج البكالوريا المصرية — العام الدراسي 2026–2027
        </p>
      </header>

      <CalloutBox type="insight" title="مرحلة الهيكلة المعمارية">
        <p>
          يتم استيراد قائمة الدروس ومخرجات التعلم رسمياً من طبقة <code>content/curriculum/</code> فور تدقيق واعتماد وثائق المنهج الرسمية.
        </p>
      </CalloutBox>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
        <Card variant="navy" title="الفصل الدراسي الأول (Term 1)">
          <p className="text-muted">محتوى الفصل الدراسي الأول قيد التهيئة في طبقة المحتوى.</p>
        </Card>

        <Card variant="cobalt" title="الفصل الدراسي الثاني (Term 2)">
          <p className="text-muted">محتوى الفصل الدراسي الثاني قيد التهيئة في طبقة المحتوى.</p>
        </Card>
      </div>
    </div>
  );
}
