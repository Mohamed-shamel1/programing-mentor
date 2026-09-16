import React from 'react';
import Card from '../ui/Card.jsx';
import CalloutBox from '../ui/CalloutBox.jsx';
import Badge from '../ui/Badge.jsx';
import DiagramContainer from '../visuals/DiagramContainer.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * ConceptVisualPage
 * Educational Page Type: Core Concept with Technical / Architectural Diagram.
 * Validated by Stitch 'Visual Concept' prototype.
 * All data is passed through props; no hardcoded educational facts.
 */
export default function ConceptVisualPage({
  badge,
  title,
  conceptSummary,
  diagram,
  keyPoints = [],
  mentorInsight,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultBadge = isEn ? 'Core Concept' : 'مفهوم رئيسي';
  const finalBadge = badge || defaultBadge;

  return (
    <div className="educational-page concept-visual-page">
      {finalBadge && <Badge variant="navy">{finalBadge}</Badge>}

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
              {isEn ? '[Concept Architectural Diagram / Visual Flow]' : '[موضع الرسم التوضيحي / المخطط المعماري للمفهوم]'}
            </div>
          )}
        </DiagramContainer>
      )}

      {keyPoints.length > 0 && (
        <Card variant="default" title={isEn ? 'Key Takeaways' : 'النقاط الجوهرية'}>
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
          title={mentorInsight.title || (isEn ? "Mentor's Insight" : 'إضاءة المُرشد')}
          style={{ marginTop: 'var(--space-4)' }}
        >
          <p>{mentorInsight.text}</p>
        </CalloutBox>
      )}
    </div>
  );
}
