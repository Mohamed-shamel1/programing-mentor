import React from 'react';
import Card from '../ui/Card.jsx';
import CalloutBox from '../ui/CalloutBox.jsx';
import Badge from '../ui/Badge.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * MissionHookPage
 * Educational Page Type: Hook, Mission Context & Learning Objectives.
 * Serves as the introductory page for a lesson or unit.
 * All educational content is received via props; no hardcoded facts.
 */
export default function MissionHookPage({
  badge,
  title,
  contextScenario,
  learningObjectives = [],
  mentorChallenge,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultBadge = isEn ? 'Lesson Mission' : 'مهمة الدرس';
  const finalBadge = badge || defaultBadge;

  return (
    <div className="educational-page mission-hook-page">
      {finalBadge && <Badge variant="cobalt">{finalBadge}</Badge>}
      
      {title && (
        <h2 className="page-heading font-heading" style={{ marginTop: 'var(--space-2)' }}>
          {title}
        </h2>
      )}

      {contextScenario && (
        <Card variant="navy" title={isEn ? 'Exploration Scenario' : 'سيناريو الاستكشاف'}>
          <p>{contextScenario}</p>
        </Card>
      )}

      {learningObjectives.length > 0 && (
        <Card variant="teal" title={isEn ? 'Learning Objectives' : 'أهداف التعلم'}>
          <ul>
            {learningObjectives.map((objective, idx) => (
              <li key={idx}>{objective}</li>
            ))}
          </ul>
        </Card>
      )}

      {mentorChallenge && (
        <CalloutBox
          type="mentor"
          title={mentorChallenge.title || (isEn ? 'The Smart Mentor Challenge' : 'تحدي المُرشد الذكي')}
        >
          <p>{mentorChallenge.prompt}</p>
        </CalloutBox>
      )}
    </div>
  );
}
