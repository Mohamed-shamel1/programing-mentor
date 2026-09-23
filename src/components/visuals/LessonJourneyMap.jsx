import React from 'react';
import Icon from '../ui/Icon.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * LessonJourneyMap
 * Visual sequence displaying the causal learning journey for any lesson.
 * Dynamically adapts to 7, 8, 9, or more stations on a single horizontal row.
 * Flow in RTL: Right-to-Left (←), in LTR: Left-to-Right (→).
 * Engineered for exact single-sheet A4 print containment.
 */
export default function LessonJourneyMap({ stages = [] }) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  if (!stages || stages.length === 0) {
    return null;
  }

  const stageCount = stages.length;

  return (
    <div className="lesson-journey-map" role="region" aria-label={isEn ? 'Learning Journey Map' : 'مسار رحلة التعلم'}>
      <div className="lesson-journey-header">
        <div className="lesson-journey-title">
          <Icon name="route" size={16} color="var(--color-cobalt-600)" />
          <span>
            {isEn
              ? `Causal Learning Journey (${stageCount} Cognitive Stations)`
              : `مسار الرحلة السببية للدرس (${stageCount} محطات إدراكية)`}
          </span>
        </div>
        <span className="lesson-journey-badge">
          {isEn ? 'From Discovery to Real-World Application' : 'من الاستكشاف النظري إلى التطبيق الواقعي'}
        </span>
      </div>

      <div
        className="lesson-journey-grid"
        style={{
          gridTemplateColumns: `repeat(${stageCount}, minmax(0, 1fr))`,
          gap: stageCount > 7 ? '4px' : '6px',
        }}
      >
        {stages.map((stage, idx) => {
          const isLast = idx === stages.length - 1;
          const nodeNum = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;

          return (
            <div
              key={stage.id || idx}
              className={`journey-node ${stage.highlight ? 'journey-node-highlight' : ''}`}
              style={{
                padding: stageCount > 7 ? '4px 3px' : '6px 5px',
                minHeight: stageCount > 7 ? '60px' : '72px',
              }}
            >
              <div className="journey-node-top">
                <span className="journey-node-num">{nodeNum}</span>
                <div
                  className="journey-node-icon"
                  style={{
                    width: stageCount > 7 ? '16px' : '18px',
                    height: stageCount > 7 ? '16px' : '18px',
                  }}
                >
                  <Icon name={stage.icon || 'explore'} size={stageCount > 7 ? 12 : 14} color="currentColor" />
                </div>
              </div>

              <div
                className="journey-node-name"
                style={{
                  fontSize: stageCount > 7 ? '9.5px' : '11px',
                  lineHeight: 1.2,
                }}
              >
                {stage.title}
              </div>
              <div
                className="journey-node-desc"
                style={{
                  fontSize: stageCount > 7 ? '8px' : '9px',
                  lineHeight: 1.2,
                }}
              >
                {stage.subtitle}
              </div>

              {!isLast && (
                <div
                  className="journey-node-arrow"
                  aria-hidden="true"
                  style={{
                    [isEn ? 'right' : 'left']: stageCount > 7 ? '-6px' : '-8px',
                    fontSize: stageCount > 7 ? '8px' : '10px',
                  }}
                >
                  {isEn ? '→' : '←'}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
