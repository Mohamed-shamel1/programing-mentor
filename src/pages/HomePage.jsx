import React from 'react';
import Card from '../components/ui/Card.jsx';
import CalloutBox from '../components/ui/CalloutBox.jsx';
import Badge from '../components/ui/Badge.jsx';

/**
 * HomePage
 * Architectural placeholder for the platform overview and identity.
 */
export default function HomePage({ onNavigate }) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--space-8) var(--space-4)' }}>
      <header style={{ marginBottom: 'var(--space-8)', textAlign: 'center' }}>
        <Badge variant="cobalt">البكالوريا المصرية 2026–2027</Badge>
        <h1 className="font-heading" style={{ marginTop: 'var(--space-3)', color: 'var(--color-navy-950)' }}>
          The Mentor — المُرشد الذكي
        </h1>
        <p className="text-secondary" style={{ fontSize: 'var(--font-size-lg)' }}>
          منصة ونظام الكتيبات المطبوعة لمادة البرمجة والذكاء الاصطناعي — الصف الأول الثانوي
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        <Card variant="navy" title="المبادئ المعمارية للمنصة">
          <p>
            تم بناء هذا النظام على بنية متكاملة تفصل تماماً بين <strong>بيانات المنهج الرسمي</strong> وطبقة
            <strong>العرض البرمجي والطباعي</strong>، مع دعم كامل للغة العربية (RTL-First) ومقاييس A4 الطباعية الدقيقة.
          </p>
        </Card>

        <CalloutBox type="mentor" title="توجيه معمارية المُرشد">
          <p>
            جميع المكونات تتبع هوية بصرية تجمع بين رصانة الكتاب المدرسي المصري، وعملية كراسة الأنشطة (Workbook)،
            مع الحفاظ على أعلى معايير الجودة الطباعية والتفاعلية.
          </p>
        </CalloutBox>
      </div>
    </div>
  );
}
