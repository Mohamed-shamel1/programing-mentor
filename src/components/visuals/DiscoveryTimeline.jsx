import React from 'react';

/**
 * DiscoveryTimeline
 * Vertical causal timeline displaying the 5 major evolutionary stages of computing.
 * Features:
 * - Vertical gradient spine line
 * - Dual-year circular timeline nodes (e.g. 1940 / 1960)
 * - Dual-column causal comparison: "ما الذي تغير تقنياً؟" vs "الأثر على المجتمع"
 * - Monospace English technological acronyms (LTR isolated)
 */
export default function DiscoveryTimeline({ stages = [] }) {
  if (!stages || stages.length === 0) {
    return null;
  }

  return (
    <div className="discovery-timeline-container" role="region" aria-label="الخط الزمني لتطور نظم الحوسبة">
      {/* Central vertical gradient spine */}
      <div className="discovery-timeline-spine" aria-hidden="true" />

      <div className="discovery-timeline-list">
        {stages.map((stage, idx) => {
          const variant = stage.variant || 'blue';
          return (
            <div key={stage.id || idx} className={`timeline-stage-item stage-${variant}`}>
              {/* Node Badge (Start Year / End Year) */}
              <div className="timeline-stage-node" aria-hidden="true">
                <span className="node-start-year">{stage.startYear}</span>
                <span className="node-end-year">{stage.endYear}</span>
              </div>

              {/* Stage Card */}
              <div className="timeline-stage-card">
                <div className="stage-card-header">
                  <div className="stage-title-group">
                    <span className="stage-index-title font-heading">
                      {idx + 1}. {stage.title}
                    </span>
                    {stage.englishTag && (
                      <span className="stage-english-tag font-code" dir="ltr">
                        {stage.englishTag}
                      </span>
                    )}
                  </div>
                  {stage.scopeBadge && (
                    <span className="stage-scope-badge">{stage.scopeBadge}</span>
                  )}
                </div>

                <div className="stage-card-body">
                  <div className="stage-column stage-tech-change">
                    <strong className="stage-col-label">ما الذي تغير تقنياً؟</strong>{' '}
                    <span className="stage-col-text">{stage.technicalChange}</span>
                  </div>

                  <div className="stage-column stage-social-impact">
                    <strong className="stage-col-label">الأثر على المجتمع:</strong>{' '}
                    <span className="stage-col-text">{stage.socialImpact}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
