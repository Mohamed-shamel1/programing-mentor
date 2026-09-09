import React from 'react';
import PageShell from '../../layout/PageShell.jsx';
import Icon from '../../ui/Icon.jsx';
import MentorAvatar from '../../ui/MentorAvatar.jsx';
import { globalRoadmapData as defaultData } from '../../../data/frontMatterData.js';

/**
 * GlobalRoadmapPage (Front-Matter Page 01)
 * The Big Picture / Term 1 Architecture Overview.
 * Completely data-driven from frontMatterData.
 */
export default function GlobalRoadmapPage({ data = defaultData, standalone = true }) {
  const innerContent = (
    <div className="global-roadmap-content">
      {/* 1. Subheader Hero Banner */}
      <div className="fm-hero-banner">
        <div>
          <div className="fm-hero-tag">
            <Icon name="route" size={16} color="var(--color-amber-400)" />
            <span>{data.hero.tag}</span>
          </div>
          <h1 className="fm-hero-title">{data.hero.title}</h1>
        </div>

        <div className="fm-counter-box">
          <div className="fm-counter-item">
            <span className="fm-counter-num" style={{ color: 'var(--color-amber-300)' }}>
              {data.hero.totalChapters}
            </span>
            <span className="fm-counter-label">فصول</span>
          </div>
          <div className="fm-counter-divider" />
          <div className="fm-counter-item">
            <span className="fm-counter-num" style={{ color: '#6ee7b7' }}>
              {data.hero.totalLessons}
            </span>
            <span className="fm-counter-label">درساً رسمياً</span>
          </div>
        </div>
      </div>

      {/* 2. Chapters Flow with Connective Bridges */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {data.chapters.map((ch) => (
          <React.Fragment key={ch.number}>
            <section className={`chapter-section theme-${ch.theme}`}>
              <div className="chapter-header">
                <div className="chapter-title-group">
                  <span className="chapter-badge-num">{ch.number}</span>
                  <h2 className="chapter-title">{ch.title}</h2>
                  <span className="chapter-latin">{ch.latinTitle}</span>
                </div>
                <span
                  style={{
                    fontSize: '10.5px',
                    fontWeight: 'var(--font-weight-bold)',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-neutral-200)',
                  }}
                >
                  {ch.badgeText}
                </span>
              </div>

              <div className={`micro-lessons-grid cols-${ch.lessons.length}`}>
                {ch.lessons.map((lesson) => (
                  <div key={lesson.id} className="micro-lesson-card">
                    <div className="micro-lesson-meta">
                      <span className="micro-lesson-id">{lesson.id}</span>
                      <Icon name={lesson.icon} size={15} color="var(--color-cobalt-600)" />
                    </div>
                    <p className="micro-lesson-title">{lesson.title}</p>
                  </div>
                ))}
              </div>
            </section>

            {ch.connectiveBridge && (
              <div className="connective-bridge">
                <div className="connective-bridge-line" />
                <div className="connective-bridge-badge">
                  <span>{ch.connectiveBridge}</span>
                  <span style={{ color: 'var(--color-cobalt-600)', fontWeight: '900' }}>↓</span>
                </div>
                <div className="connective-bridge-line" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* 3. Mentor Vision Bottom Callout */}
      <div className="mentor-vision-box">
        <MentorAvatar size={56} />
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11.5px',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-navy-900)',
              marginBottom: '3px',
            }}
          >
            <Icon name="school" size={16} color="var(--color-cobalt-600)" />
            <span>{data.mentorVision.title}</span>
          </div>
          <p className="mentor-vision-text">{data.mentorVision.quote}</p>
        </div>
      </div>
    </div>
  );

  if (!standalone) {
    return innerContent;
  }

  return (
    <PageShell
      headerProps={{
        unitTitle: data.stageLabel,
        lessonTitle: data.centerBadge,
        badgeText: data.academicYear,
      }}
      footerProps={{
        currentPage: '01',
        subjectTitle: 'خريطة المنهج — نظرة شمولية عامة',
      }}
      className="global-roadmap-page"
    >
      {innerContent}
    </PageShell>
  );
}
