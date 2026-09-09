import React from 'react';
import Card from '../ui/Card.jsx';
import CalloutBox from '../ui/CalloutBox.jsx';
import Badge from '../ui/Badge.jsx';
import Icon from '../ui/Icon.jsx';
import MentorAvatar from '../ui/MentorAvatar.jsx';
import LessonJourneyMap from '../visuals/LessonJourneyMap.jsx';

/**
 * LessonOverviewPage (Page 00)
 * The Mission Launchpad & Journey Map for Lesson 1-1.
 * Connects the student's everyday digital routine to the historical and social journey.
 * Engineered for exact single-sheet A4 print containment.
 */
export default function LessonOverviewPage({
  badge = 'خريطة التعلم وبوصلة الاستكشاف',
  lessonCode = '1-1',
  title = 'تطور تكنولوجيا المعلومات والتحول الاجتماعي',
  unitTitle = 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
  grandQuestion = 'كيف تُغيّر التقنية المجتمع — ولمن تجلب الفائدة ولمن لا تجلبها؟',
  coreIdea,
  coreConcepts = [],
  missionContext,
  journeyStages = [],
  discoveryThemes = [],
  finalChallengeTeaser,
  cognitiveKey,
}) {
  return (
    <div className="educational-page lesson-overview-page">
      {/* 1. Mission Hero Banner */}
      <section className="overview-hero-section">
        <div className="overview-hero-top">
          <div className="overview-hero-badges">
            <Badge variant="navy">{unitTitle}</Badge>
            <span className="overview-code-badge">
              <Icon name="code_blocks" size={12} color="var(--color-teal-600)" />
              <span>الدرس {lessonCode}</span>
            </span>
            <Badge variant="cobalt">{badge}</Badge>
          </div>
        </div>

        <h1 className="overview-lesson-title font-heading">
          {title}
        </h1>

        <div className="overview-grand-question-card">
          <div className="grand-question-icon">
            <Icon name="psychology" size={20} color="var(--color-cobalt-600)" />
          </div>
          <div className="grand-question-body">
            <span className="grand-question-label">السؤال الجوهري للدرس:</span>
            <p className="grand-question-text">{grandQuestion}</p>
          </div>
        </div>

        {coreIdea && (
          <div className="overview-core-idea">
            <span className="core-idea-badge">
              <Icon name="lightbulb" size={13} color="var(--color-amber-600)" />
              <span>الفكرة الأساسية للمنهج:</span>
            </span>
            <p className="core-idea-text">{coreIdea}</p>
          </div>
        )}

        {missionContext && (
          <p className="overview-mission-context text-secondary">
            {missionContext}
          </p>
        )}
      </section>

      {/* 2. Official Core Concepts (10 Key Terms from Syllabus) */}
      {coreConcepts.length > 0 && (
        <section className="overview-core-concepts-section" role="region" aria-label="المفاهيم الأساسية">
          <div className="concepts-header">
            <div className="concepts-title">
              <Icon name="fact_check" size={15} color="var(--color-cobalt-600)" />
              <span>المفاهيم الأساسية للدرس (المعتمدة رسميًا):</span>
            </div>
            <span className="concepts-count-badge">10 مفاهيم محورية</span>
          </div>

          <div className="concepts-chips-grid">
            {coreConcepts.map((concept, idx) => (
              <div key={idx} className="concept-chip">
                <span className="concept-chip-bullet" aria-hidden="true">•</span>
                <span className="concept-chip-text">{concept}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. The 7-Stage Causal Learning Journey */}
      <section className="overview-journey-section">
        <LessonJourneyMap stages={journeyStages} />
      </section>

      {/* 3. What You Will Discover (3 High-Contrast Insight Pillars) */}
      {discoveryThemes.length > 0 && (
        <section className="overview-discovery-section">
          <div className="section-mini-heading">
            <Icon name="explore" size={15} color="var(--color-cobalt-600)" />
            <span>ما ستكتشفه في هذا الدرس (3 محطات حاسمة):</span>
          </div>

          <div className="overview-discovery-grid">
            {discoveryThemes.map((theme, idx) => (
              <div
                key={theme.id || idx}
                className={`discovery-pillar-card pillar-${theme.variant || 'default'}`}
              >
                <div className="pillar-header">
                  <span className="pillar-num">0{idx + 1}</span>
                  <span className="pillar-tag">{theme.tag}</span>
                </div>
                <h4 className="pillar-title font-heading">{theme.title}</h4>
                <p className="pillar-desc text-secondary">{theme.description}</p>
                {theme.question && (
                  <div className="pillar-prompt">
                    <Icon name="lightbulb" size={13} color="var(--color-amber-600)" />
                    <span>{theme.question}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Final Challenge Teaser (Warm Amber Callout) */}
      {finalChallengeTeaser && (
        <section className="overview-challenge-section">
          <div className="challenge-teaser-card">
            <div className="challenge-teaser-side">
              <MentorAvatar size={34} />
              <span className="challenge-role-badge">{finalChallengeTeaser.roleBadge || 'مهمتك الختامية'}</span>
            </div>
            <div className="challenge-teaser-content">
              <div className="challenge-teaser-title font-heading">
                {finalChallengeTeaser.title}
              </div>
              <p className="challenge-teaser-desc">
                {finalChallengeTeaser.scenario}
              </p>
              <div className="challenge-teaser-footer">
                <span className="challenge-badge-warning">
                  <Icon name="balance" size={14} color="var(--color-amber-700)" />
                  <span>المطلوب منك: {finalChallengeTeaser.requirement}</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. Cognitive Key (Bottom Activation Prompt) */}
      {cognitiveKey && (
        <footer className="overview-cognitive-key">
          <div className="cognitive-key-tag">
            <Icon name="key" size={14} color="var(--color-teal-600)" />
            <span>المفتاح المعرفي:</span>
          </div>
          <p className="cognitive-key-text">
            {cognitiveKey.question}
          </p>
        </footer>
      )}
    </div>
  );
}
