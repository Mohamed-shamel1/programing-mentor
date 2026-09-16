import React from 'react';
import Card from '../ui/Card.jsx';
import CalloutBox from '../ui/CalloutBox.jsx';
import Badge from '../ui/Badge.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * ActivityDecisionPage
 * Educational Page Type: Hands-on Activity, Case Scenario & Stakeholder Decision.
 * Validated by Stitch 'Activity / Stakeholder Decision' prototype.
 * Emphasizes workbook utility: clear prompts, analysis boxes, and print-safe writing lines.
 */
export default function ActivityDecisionPage({
  badge,
  title,
  scenario,
  stakeholders = [],
  prompts = [],
  reflection,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultBadge = isEn ? 'Applied Activity & Decision Lab' : 'نشاط تطبيقي واتخاذ قرار';
  const finalBadge = badge || defaultBadge;

  return (
    <div className="educational-page activity-decision-page">
      {finalBadge && <Badge variant="amber">{finalBadge}</Badge>}

      {title && (
        <h2 className="page-heading font-heading" style={{ marginTop: 'var(--space-2)' }}>
          {title}
        </h2>
      )}

      {scenario && (
        <Card variant="default" title={isEn ? 'Case Scenario' : 'حالة الدراسة'}>
          <p>{scenario}</p>
        </Card>
      )}

      {stakeholders.length > 0 && (
        <div style={{ marginTop: 'var(--space-3)' }}>
          <h4 className="font-heading" style={{ marginBottom: 'var(--space-2)' }}>
            {isEn ? 'Decision Stakeholders & Their Roles:' : 'أطراف القرار وأدوارهم:'}
          </h4>
          <div className="comparison-grid">
            {stakeholders.map((party, idx) => (
              <Card key={idx} variant="teal" title={party.role}>
                <p>
                  <strong>{isEn ? 'Stance / Interest: ' : 'الموقف / المصلحة: '}</strong>
                  {party.interest}
                </p>
                {party.consideration && <p><small>{party.consideration}</small></p>}
              </Card>
            ))}
          </div>
        </div>
      )}

      {prompts.length > 0 && (
        <div className="activity-box" style={{ marginTop: 'var(--space-4)' }}>
          <h4 className="font-heading" style={{ marginBottom: 'var(--space-3)' }}>
            {isEn ? 'Critical Reflection & Student Response:' : 'مهمة التفكير والتدوين (مساحة الطالب):'}
          </h4>
          {prompts.map((q, idx) => (
            <div key={idx} style={{ marginBottom: 'var(--space-4)' }}>
              <p><strong>{idx + 1}. {q.question}</strong></p>
              <div className="activity-response-lines">
                <div className="activity-response-line"></div>
                <div className="activity-response-line"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {reflection && (
        <CalloutBox
          type="mentor"
          title={reflection.title || (isEn ? "Mentor's Guidance for Decision Makers" : 'توجيه المُرشد لصناع القرار')}
          style={{ marginTop: 'var(--space-4)' }}
        >
          <p>{reflection.text}</p>
        </CalloutBox>
      )}
    </div>
  );
}
