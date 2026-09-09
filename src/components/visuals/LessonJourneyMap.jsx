import React from 'react';
import Icon from '../ui/Icon.jsx';

/**
 * LessonJourneyMap
 * Visual sequence displaying the 7-stage causal learning journey for Lesson 1-1.
 * Flow: الدهشة → التساؤل → الاكتشاف → التوسع → التحليل → القرار → الإدراك
 * Engineered with RTL flow, compact vertical footprint, and toner-safe print contrast.
 */
export default function LessonJourneyMap({ stages = [] }) {
  if (!stages || stages.length === 0) {
    return null;
  }

  return (
    <div className="lesson-journey-map" role="region" aria-label="مسار رحلة التعلم">
      <div className="lesson-journey-header">
        <div className="lesson-journey-title">
          <Icon name="route" size={16} color="var(--color-cobalt-600)" />
          <span>مسار الرحلة السببية للدرس (7 محطات إدراكية)</span>
        </div>
        <span className="lesson-journey-badge">من اليوم الرقمي إلى القرار المجتمعي</span>
      </div>

      <div className="lesson-journey-grid">
        {stages.map((stage, idx) => {
          const isLast = idx === stages.length - 1;
          return (
            <div
              key={stage.id || idx}
              className={`journey-node ${stage.highlight ? 'journey-node-highlight' : ''}`}
            >
              <div className="journey-node-top">
                <span className="journey-node-num">0{idx + 1}</span>
                <div className="journey-node-icon">
                  <Icon name={stage.icon || 'explore'} size={14} color="currentColor" />
                </div>
              </div>

              <div className="journey-node-name">{stage.title}</div>
              <div className="journey-node-desc">{stage.subtitle}</div>

              {!isLast && (
                <div className="journey-node-arrow" aria-hidden="true">
                  ←
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
