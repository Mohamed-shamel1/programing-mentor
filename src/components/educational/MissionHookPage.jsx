import React from 'react';
import Card from '../ui/Card.jsx';
import CalloutBox from '../ui/CalloutBox.jsx';
import Badge from '../ui/Badge.jsx';

/**
 * MissionHookPage
 * Educational Page Type: Hook, Mission Context & Learning Objectives.
 * Serves as the introductory page for a lesson or unit.
 * All educational content is received via props; no hardcoded facts.
 */
export default function MissionHookPage({
  badge = 'مهمة الدرس',
  title,
  contextScenario,
  learningObjectives = [],
  mentorChallenge,
}) {
  return (
    <div className="educational-page mission-hook-page">
      {badge && <Badge variant="cobalt">{badge}</Badge>}
      
      {title && (
        <h2 className="page-heading font-heading" style={{ marginTop: 'var(--space-2)' }}>
          {title}
        </h2>
      )}

      {contextScenario && (
        <Card variant="navy" title="سيناريو الاستكشاف">
          <p>{contextScenario}</p>
        </Card>
      )}

      {learningObjectives.length > 0 && (
        <Card variant="teal" title="أهداف التعلم">
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
          title={mentorChallenge.title || 'تحدي المُرشد الذكي'}
        >
          <p>{mentorChallenge.prompt}</p>
        </CalloutBox>
      )}
    </div>
  );
}
