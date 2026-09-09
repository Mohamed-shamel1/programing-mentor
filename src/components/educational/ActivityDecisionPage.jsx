import React from 'react';
import Card from '../ui/Card.jsx';
import CalloutBox from '../ui/CalloutBox.jsx';
import Badge from '../ui/Badge.jsx';

/**
 * ActivityDecisionPage
 * Educational Page Type: Hands-on Activity, Case Scenario & Stakeholder Decision.
 * Validated by Stitch 'Activity / Stakeholder Decision' prototype.
 * Emphasizes workbook utility: clear prompts, analysis boxes, and print-safe writing lines.
 */
export default function ActivityDecisionPage({
  badge = 'نشاط تطبيقي واتخاذ قرار',
  title,
  scenario,
  stakeholders = [],
  prompts = [],
  reflection,
}) {
  return (
    <div className="educational-page activity-decision-page">
      {badge && <Badge variant="amber">{badge}</Badge>}

      {title && (
        <h2 className="page-heading font-heading" style={{ marginTop: 'var(--space-2)' }}>
          {title}
        </h2>
      )}

      {scenario && (
        <Card variant="default" title="حالة الدراسة">
          <p>{scenario}</p>
        </Card>
      )}

      {stakeholders.length > 0 && (
        <div style={{ marginTop: 'var(--space-3)' }}>
          <h4 className="font-heading" style={{ marginBottom: 'var(--space-2)' }}>
            أطراف القرار وأدوارهم:
          </h4>
          <div className="comparison-grid">
            {stakeholders.map((party, idx) => (
              <Card key={idx} variant="teal" title={party.role}>
                <p><strong>الموقف / المصلحة:</strong> {party.interest}</p>
                {party.consideration && <p><small>{party.consideration}</small></p>}
              </Card>
            ))}
          </div>
        </div>
      )}

      {prompts.length > 0 && (
        <div className="activity-box" style={{ marginTop: 'var(--space-4)' }}>
          <h4 className="font-heading" style={{ marginBottom: 'var(--space-3)' }}>
            مهمة التفكير والتدوين (مساحة الطالب):
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
          title={reflection.title || 'توجيه المُرشد لصناع القرار'}
          style={{ marginTop: 'var(--space-4)' }}
        >
          <p>{reflection.text}</p>
        </CalloutBox>
      )}
    </div>
  );
}
