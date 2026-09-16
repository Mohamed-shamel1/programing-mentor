import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import CumulativeLayersDiagram from '../visuals/CumulativeLayersDiagram.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * DiscoveryTimelinePage (Page 02)
 * The Cumulative Evolutionary Pathway of Computing Systems & Social Transformation.
 * 8:4 Asymmetric Layout engineered for exact single-sheet A4 containment.
 * Features:
 * - 5 Causal Stations (What Became Possible vs Resulting Social Shift)
 * - Vector Cumulative Architecture Diagram
 * - Pedagogical Misconception Alert
 * - 5-Minute Critical Thinking Pair Workshop with Ruled Handwriting Lines & Teacher Rubric
 */
export default function DiscoveryTimelinePage({
  topicRibbon,
  guideText,
  timeSpan = '1940 ➔ 2026+',
  stations = [],
  sidebar = {},
  footerNote,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultTopicRibbon = {
    number: '02',
    unitTitle: isEn ? 'Unit 1: Computing & AI Fundamentals' : 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    lessonCode: isEn ? 'Lesson 1-1' : 'الدرس 1-1',
    subBadge: isEn ? 'Timeline Engineering' : 'هندسة المسار الزمني',
    title: isEn ? 'Discovery Timeline: Cumulative Evolution of Computing & Societal Impact' : 'مسار الاكتشاف الزمني: التطور التراكمي لنظم الحوسبة وأثرها المجتمعي',
    logicTag: isEn ? 'Causal Logic' : 'المنطق السببي الثلاثي',
    analysisType: isEn ? 'Impact Analysis' : 'تحليل أثر',
  };

  const finalTopicRibbon = topicRibbon || defaultTopicRibbon;
  const defaultGuideText = isEn
    ? 'Trace the causal chain: Hardware Device → Acquired Human Capability → Societal Reflection'
    : 'تتبع التتابع الحتمي: الجهاز والعتاد ← القدرة البشرية المكتسبة ← الانعكاس الاجتماعي';

  const defaultFooterNote = {
    author: isEn ? 'Mohamed Shamel Mohamed' : 'الأستاذ / محمد شامل محمد',
    authorTitle: isEn ? 'Curriculum & IT Expert' : 'خبير تكنولوجيا المعلومات والمناهج',
    pageLabel: isEn ? 'Page 02' : 'صفحة 02',
    academicYear: isEn ? 'Academic Year 2026-2027' : 'العام الدراسي 2026-2027',
  };
  const finalFooterNote = footerNote || defaultFooterNote;

  const [selectedPair, setSelectedPair] = useState(isEn ? 'Station 1 & 2' : 'المحطة 1 & 2');

  const {
    misconception = {
      title: 'تصحيح خطأ شائع (2)',
      badge: 'تنبيه مفاهيمي',
      bold: 'التقنية الجديدة لا تلغي القديمة بالكامل!',
      text: 'الهواتف الذكية لم تمحُ الحواسيب المركزية أو مراكز البيانات العملاقة، بل تخصصت كل وسيلة وتكاملت لتشكيل بنية حوسبة هجينة متعددة المستويات.',
      practicalNote: 'الذكاء الاصطناعي اليوم يعتمد كلياً على مزارع خوادم ترجع في فلسفتها لحواسيب الستينيات المركزية.',
    },
    workshop = {
      title: 'نشاط تفكير نقدي (5 دقائق)',
      badge: 'نشاط صفي تفاعلي',
      prompt:
        'اختر محطتين من المحطات الخمس السابقة، واشرح في مساحة التدوين كيف مهّدت الأولى لظهور الثانية، وما أثر غياب إحداهما على نمط حياة المجتمع:',
      pairs: ['المحطة 1 & 2', 'المحطة 2 & 3', 'المحطة 3 & 4', 'المحطة 4 & 5'],
      field1: '1. العلاقة التمهيدية: كيف مهدت المحطة الأولى لظهور الثانية؟',
      field2: '2. السيناريو الافتراضي: ما الذي كان سيتعطل في حركة المجتمع لو غابت؟',
      rubric: {
        label: 'تقييم المعلم:',
        criteria: 'الربط السببي (2) • عمق التحليل (2) • سلامة التعبير (1)',
        scoreBox: '[     / 5 ]',
        signatureLabel: 'توقيع المعلم: ................',
      },
    },
  } = sidebar;

  return (
    <div className="educational-page discovery-timeline-page">
      {/* 1. Topic Ribbon Header */}
      <section className="timeline-ribbon-header">
        <div className="ribbon-right">
          <span className="ribbon-number font-heading">{finalTopicRibbon.number}</span>
          <div>
            <div className="ribbon-breadcrumbs">
              <span>{finalTopicRibbon.unitTitle}</span>
              <span className="bullet">•</span>
              <span>{finalTopicRibbon.lessonCode}</span>
              <span className="bullet">•</span>
              <span className="ribbon-sub-badge">{finalTopicRibbon.subBadge}</span>
            </div>
            <h1 className="ribbon-title font-heading">{finalTopicRibbon.title}</h1>
          </div>
        </div>

        <div className="ribbon-left">
          <div className="logic-badge-group">
            <Icon name="schema" size={16} color="var(--color-amber-600)" />
            <span className="logic-tag-text font-heading">{finalTopicRibbon.logicTag}</span>
          </div>
          <span className="analysis-pill">{finalTopicRibbon.analysisType}</span>
        </div>
      </section>

      {/* 2. Main 8:4 Grid Layout */}
      <div className="timeline-grid-layout">
        {/* Right Column: 8 Cols - The 5 Timeline Stations */}
        <section className="timeline-stations-column">
          {/* Pedagogical Subheading & Guide */}
          <div className="timeline-guide-bar">
            <div className="guide-text-group">
              <Icon name="timeline" size={15} color="var(--color-cobalt-600)" />
              <span className="guide-text">{guideText || defaultGuideText}</span>
            </div>
            <span className="timespan-badge font-code" dir="ltr">{timeSpan}</span>
          </div>

          {/* Chronological Stations Feed */}
          <div className="stations-feed">
            {stations.map((station) => (
              <article key={station.num} className={`station-card station-${station.num}`}>
                <div className="station-card-header">
                  <div className="station-badge-group">
                    <span className="station-num-circle font-heading">{station.num}</span>
                    <span className="station-title font-heading">{station.title}</span>
                    <span className="station-years font-code" dir="ltr">{station.years}</span>
                  </div>
                  <span className="station-tag font-heading">{station.stationBadge}</span>
                </div>

                <div className="station-dual-grid">
                  {/* Ability Box */}
                  <div className="station-subbox ability-box">
                    <div className="subbox-label ability-label">
                      <Icon name="psychology" size={14} color="var(--color-cobalt-600)" />
                      <span>{isEn ? 'What became possible for humans:' : 'ما أصبح ممكناً للبشر:'}</span>
                    </div>
                    <p className="subbox-text">{station.abilityText}</p>
                  </div>

                  {/* Social Impact Box */}
                  <div className="station-subbox social-box">
                    <div className="subbox-label social-label">
                      <Icon name="groups" size={14} color="var(--color-amber-700)" />
                      <span>{isEn ? 'Resulting societal shift:' : 'التحول المجتمعي الناتج:'}</span>
                    </div>
                    <p className="subbox-text">{station.socialText}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Left Column: 4 Cols - Pedagogical Sidebar */}
        <aside className="timeline-sidebar-column">
          {/* 1. Cumulative Architecture Vector Diagram */}
          <section className="sidebar-card diagram-card">
            <div className="sidebar-card-header">
              <span className="sidebar-header-title font-heading">بنية التراكم المعرفي</span>
              <span className="sidebar-header-badge">رسم توضيحي</span>
            </div>
            <CumulativeLayersDiagram />
          </section>

          {/* 2. Misconception Correction Box */}
          <section className="sidebar-card misconception-card">
            <div className="misconception-header">
              <div className="misconception-title-group">
                <Icon name="error" size={16} color="var(--color-amber-700)" />
                <span className="misconception-title font-heading">{misconception.title}</span>
              </div>
              {misconception.badge && (
                <span className="misconception-badge-pill">{misconception.badge}</span>
              )}
            </div>
            <div className="misconception-body">
              <strong className="misconception-bold">{misconception.bold}</strong>
              <p className="misconception-text">{misconception.text}</p>
              {misconception.practicalNote && (
                <div className="misconception-note">
                  <span className="note-bullet">💡</span>
                  <span>{misconception.practicalNote}</span>
                </div>
              )}
            </div>
          </section>

          {/* 3. Critical Thinking Workshop Activity */}
          <section className="sidebar-card workshop-card">
            <div className="sidebar-card-header">
              <div className="workshop-title-group">
                <Icon name="edit_note" size={18} color="var(--color-cobalt-700)" />
                <span className="sidebar-header-title font-heading">{workshop.title}</span>
              </div>
              <span className="sidebar-header-badge cobalt">{workshop.badge}</span>
            </div>

            <p className="workshop-prompt">{workshop.prompt}</p>

            {/* Checkbox Choice Pills */}
            <div className="workshop-pairs-row" role="radiogroup" aria-label="اختيار المحطتين">
              {workshop.pairs.map((pair) => (
                <label
                  key={pair}
                  className={`pair-choice-label ${selectedPair === pair ? 'selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="timeline-pair"
                    value={pair}
                    checked={selectedPair === pair}
                    onChange={() => setSelectedPair(pair)}
                    className="pair-radio"
                  />
                  <span>{pair}</span>
                </label>
              ))}
            </div>

            {/* Handwriting Ruled Response Area */}
            <div className="workshop-writing-fields">
              <div className="writing-field-group">
                <span className="field-prompt-label">{workshop.field1}</span>
                <div className="field-ruled-lines">
                  <div className="field-ruled-line" />
                  <div className="field-ruled-line" />
                  <div className="field-ruled-line" />
                  <div className="field-ruled-line" />
                </div>
              </div>

              <div className="writing-field-group">
                <span className="field-prompt-label amber">{workshop.field2}</span>
                <div className="field-ruled-lines">
                  <div className="field-ruled-line" />
                  <div className="field-ruled-line" />
                  <div className="field-ruled-line" />
                </div>
              </div>
            </div>

            {/* Teacher Signoff Rubric Bar */}
            <div className="teacher-signoff-bar">
              <div className="signoff-eval-group">
                <Icon name="verified" size={15} color="var(--color-cobalt-600)" />
                <span className="eval-label font-heading">{workshop.rubric.label}</span>
                <span className="eval-criteria">{workshop.rubric.criteria}</span>
                <span className="eval-box font-code">{workshop.rubric.scoreBox}</span>
              </div>
              <span className="eval-sig">{workshop.rubric.signatureLabel}</span>
            </div>
          </section>
        </aside>
      </div>

      {/* 3. Page Footer Note Bar */}
      <footer className="timeline-page-footer-bar">
        <div className="footer-author-note">
          <Icon name="person_pin" size={16} color="var(--color-cobalt-600)" />
          <span>
            {isEn ? 'Prepared & Authored by: ' : 'إعداد وتأليف: '}
            <strong className="author-name">{finalFooterNote.author}</strong> • {finalFooterNote.authorTitle}
          </span>
        </div>
        <div className="footer-page-meta">
          <span className="footer-page-pill font-code">{finalFooterNote.pageLabel}</span>
          <span className="footer-academic-year">{finalFooterNote.academicYear}</span>
        </div>
      </footer>
    </div>
  );
}
