import React from 'react';
import Card from '../ui/Card.jsx';
import CalloutBox from '../ui/CalloutBox.jsx';
import Badge from '../ui/Badge.jsx';
import DiagramContainer from '../visuals/DiagramContainer.jsx';

/**
 * ConceptVisualPage
 * Educational Page Type: Core Concept with Technical / Architectural Diagram.
 * Validated by Stitch 'Visual Concept' prototype.
 * All data is passed through props; no hardcoded educational facts.
 */
export default function ConceptVisualPage({
  badge = 'مفهوم رئيسي',
  title,
  conceptSummary,
  diagram,
  keyPoints = [],
  mentorInsight,
}) {
  return (
    <div className="educational-page concept-visual-page">
      {badge && <Badge variant="navy">{badge}</Badge>}

      {title && (
        <h2 className="page-heading font-heading" style={{ marginTop: 'var(--space-2)' }}>
          {title}
        </h2>
      )}

      {conceptSummary && (
        <p className="concept-summary text-secondary">
          {conceptSummary}
        </p>
      )}

      {diagram && (
        <DiagramContainer title={diagram.title} caption={diagram.caption}>
          {diagram.content || (
            <div className="text-muted" style={{ padding: 'var(--space-6) 0' }}>
              [موضع الرسم التوضيحي / المخطط المعماري للمفهوم]
            </div>
          )}
        </DiagramContainer>
      )}

      {keyPoints.length > 0 && (
        <Card variant="default" title="النقاط الجوهرية">
          <ul>
            {keyPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </Card>
      )}

      {mentorInsight && (
        <CalloutBox
          type="insight"
          title={mentorInsight.title || 'إضاءة المُرشد'}
        >
          <p>{mentorInsight.text}</p>
        </CalloutBox>
      )}
    </div>
  );
}
