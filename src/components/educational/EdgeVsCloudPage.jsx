import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * EdgeVsCloudPage (Page 05)
 * Topic: أين يجب أن يُتخذ القرار البرمجي؟ الحوسبة الطرفية مقابل السحابية
 * Lesson: 1-1 | الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي
 *
 * Structure:
 *   1. Topic Ribbon Header (with Latency tag)
 *   2. Critical Scenario Banner (< 50ms at 120 km/h)
 *   3. Side-by-Side Comparison: Cloud (200-600ms) vs Edge (<15ms)
 *   4. Mentor's Golden Rule (Mission-Critical data stays on the edge)
 *   5. Applied AI Engineer Exercise (interactive decision table with handwriting slots)
 *   6. Educational Footer Bar
 */
export default function EdgeVsCloudPage({
  topicRibbon,
  criticalScenario,
  comparisonTracks,
  mentorRule,
  activity,
  footerNote,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultTopicRibbon = {
    number: '05',
    unitTitle: isEn ? 'Unit 1: Computing & AI Fundamentals' : 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    lessonCode: isEn ? 'Lesson 1-1' : 'الدرس 1-1',
    subBadge: isEn ? 'Computational Decision Architecture' : 'معمارية اتخاذ القرار الحسابي',
    title: isEn
      ? 'Where Should Intelligence Reside? Edge vs. Cloud Computing'
      : 'أين يجب أن يُتخذ القرار البرمجي؟ الحوسبة الطرفية مقابل السحابية',
    chapterTag: 'EDGE-VS-CLOUD // PAGE 05',
    latencyTag: isEn
      ? 'Latency = Life or Death in Safety Systems'
      : 'وقت الاستجابة (Latency) = فارق بين الحياة والموت',
  };
  const finalTopicRibbon = topicRibbon || defaultTopicRibbon;

  const defaultCriticalScenario = {
    badge: 'CRITICAL SCENARIO • 120 KM/H',
    interventionLimit: isEn ? 'Intervention Threshold: < 50ms' : 'الحد الأقصى للتدخل: < 50ms',
    title: isEn ? 'Life-Critical Real-World Scenario' : 'سيناريو الخطر اللحظي الواقعي',
    bodyLead: isEn ? '«An autonomous vehicle traveling at ' : '«سيارة ذاتية القيادة تسير بسرعة',
    speed: isEn ? '120 km/h' : '120 كم/ساعة',
    bodyMid: isEn
      ? ' detects an obstacle or child crossing the road meters ahead. The computer vision and emergency braking system must decide and execute stopping within '
      : '، وفجأة ظهر عائق أو طفل يعبر الطريق على بُعد أمتار قليلة. يحتاج نظام الرؤية الحاسوبية والفرملة الطارئة لاتخاذ وتنفيذ أمر التوقف التام في زمن لا يتعدى',
    timeLimit: isEn ? '50 milliseconds (0.05 s)' : '50 ميلي ثانية (0.05 ثانية)',
    bodyEnd: isEn ? ' to prevent catastrophic collision.»' : 'لتفادي دهس الهدف.»',
  };
  const finalCriticalScenario = criticalScenario || defaultCriticalScenario;

  const defaultComparisonTracks = {
    cloud: {
      letter: isEn ? 'A' : 'أ',
      title: isEn ? 'Cloud Processing Path' : 'المعالجة السحابية',
      badge: isEn ? 'High Latency: 200 - 600ms' : 'بطء استجابة: 200 - 600ms',
      steps: [
        {
          icon: 'videocam',
          text: isEn ? '1. Onboard cameras capture high-definition raw frames.' : '1. الحساسات تلتقط إطارات الفيديو عالية الدقة.',
        },
        {
          icon: 'cell_tower',
          text: isEn ? '2. Streaming video wireless packets up to 4G/5G towers.' : '2. رفع حزم الفيديو هوائياً إلى أبراج شبكة 4G/5G.',
        },
        {
          icon: 'cloud',
          text: isEn ? '3. Data transit across geographic distance to remote data centers.' : '3. انتقال البيانات عبر مسافات جغرافية لسيرفر بعيد.',
        },
        {
          icon: 'keyboard_return',
          text: isEn ? '4. Remote inference and returning braking command down to the car.' : '4. تحليل الموقف ثم إعادة إرسال أمر الفرامل إلى السيارة.',
        },
      ],
      riskTitle: isEn ? 'Fatal Delay Risk:' : 'عائق التأخير والخطر القاتل:',
      riskBody: isEn
        ? 'Network roundtrip latency is far too high; any transient cellular dead-zone causes unavoidable collision.'
        : 'يستغرق الذهاب والعودة (Latency) زمناً طويلاً؛ فأي انقطاع مؤقت في التغطية أو اختناق في الشبكة يتسبب بحادث دهس مؤكد.',
    },
    edge: {
      letter: isEn ? 'B' : 'ب',
      title: isEn ? 'Edge Processing Path' : 'المعالجة الطرفية (Edge)',
      badge: isEn ? 'Instantaneous: < 15ms' : 'فوري: < 15ms',
      steps: [
        {
          icon: 'sensors',
          text: isEn ? '1. Onboard LiDAR and cameras capture sensory input.' : '1. الحساسات والرادارات تلتقط العائق فورياً.',
        },
        {
          icon: 'memory',
          text: isEn ? '2. Immediate inference directly on integrated NPU/GPU chip.' : '2. معالجة آنية وفورية داخل رقاقة الذكاء الاصطناعي المدمجة.',
        },
        {
          icon: 'offline_pin',
          text: isEn ? '3. Zero Internet dependency or reliance on cell coverage.' : '3. عدم الحاجة لأي اتصال بالإنترنت أو الاعتماد على الأبراج.',
        },
        {
          icon: 'verified',
          text: isEn ? '4. Electro-mechanical brakes engaged in single-digit milliseconds.' : '4. تفعيل المكابح الميكانيكية خلال أجزاء من الألف من الثانية.',
        },
      ],
      advantageTitle: isEn ? 'Decisive Advantage:' : 'الميزة المصيرية:',
      advantageBody: isEn
        ? 'Preserving human lives in critical sub-seconds via complete autonomy and deterministic local reliability.'
        : 'حماية الأرواح في الأجزاء الحرجة من الثانية عبر الاستقلالية التامة والموثوقية المطلقة بغض النظر عن جودة إشارة الاتصال.',
    },
  };
  const finalComparisonTracks = comparisonTracks || defaultComparisonTracks;

  const defaultMentorRule = {
    title: isEn ? "The Mentor's Golden Rule:" : 'قاعدة المُرشد الذهبية (Mentor\'s Rule):',
    quote: isEn
      ? '“Not all data is fit to travel to the cloud first; mission-critical operations requiring sub-second response must strictly execute on Edge Computing.”'
      : '«ليست كل البيانات مؤهلة لأن تسافر إلى السحابة أولاً؛ العمليات التي تتطلب استجابة في أجزاء من الثانية (Mission-Critical) مكانها الحتمي هو الحوسبة الطرفية.»',
  };
  const finalMentorRule = mentorRule || defaultMentorRule;

  const defaultActivity = {
    title: isEn ? 'Applied AI Engineer Exercise (5 Mins)' : 'تمرين مهندس الذكاء الاصطناعي (نشاط تطبيقي - 5 دقائق)',
    scorePill: isEn ? 'Score: [   / 5 ]' : 'درجات التقييم: [   / 5 ]',
    instruction: isEn
      ? 'As an autonomous systems engineer, determine the optimal processing tier for each data type with engineering rationale:'
      : 'بصفتك مهندس أنظمة القيادة الذكية، حدد مكان المعالجة الأنسب لكل نوع بيانات مع توثيق مبررك الهندسي:',
    rows: [
      {
        id: 1,
        title: isEn ? '1. Emergency Pedestrian & Traffic Signal Detection' : '1. كشف المشاة والإشارات الضوئية الطارئة',
        subtitle: isEn ? 'LiDAR sensors and front bumper optical feeds' : 'حساسات LiDAR وكاميرات المصد الأمامي',
        defaultChoice: 'edge',
        disabled: true,
        justification: isEn ? 'Collision avoidance mandates < 50ms latency to avert fatal impact.' : 'تفادي الاصطدام يتطلب زمناً أقل من 50ms لمنع الكوارث.',
      },
      {
        id: 2,
        title: isEn ? '2. Brake Wear & Mechanical Maintenance Telemetry' : '2. سجلات صيانة وتآكل فرامل العجلات',
        subtitle: isEn ? 'Historical engine diagnostics and chassis sensor logs' : 'قراءات المحرك الميكانيكية التاريخية',
        defaultChoice: null,
        disabled: false,
        justification: null,
      },
      {
        id: 3,
        title: isEn ? '3. Crowd-Sourced Global Navigation Map Training' : '3. تدريب وتحديث الخرائط الرقمية الجماعية',
        subtitle: isEn ? 'Aggregated road topology and weekly congestion patterns' : 'بيانات الطرق وحركة الازدحام الأسبوعية',
        defaultChoice: null,
        disabled: false,
        justification: null,
      },
      {
        id: 4,
        title: isEn ? '4. In-Cabin Entertainment & Smart Climate Preferences' : '4. التحكم بنظام ترفيه الركاب والتكييف الذكي',
        subtitle: isEn ? 'Passenger music queues and comfort preferences' : 'تفضيلات الموسيقى والراحة داخل المقصورة',
        defaultChoice: null,
        disabled: false,
        justification: null,
      },
    ],
  };
  const finalActivity = activity || defaultActivity;

  const defaultFooterNote = {
    author: isEn ? 'Mohamed Shamel Mohamed' : 'الأستاذ / محمد شامل محمد',
    authorTitle: isEn ? 'Curriculum & Computer Science Expert' : 'خبير ومطور مناهج الحاسب الآلي',
    pageLabel: isEn ? 'Page 05' : 'صفحة 05',
    academicYear: isEn ? 'Academic Year 2026 - 2027' : 'العام الدراسي 2026 - 2027',
  };
  const finalFooterNote = footerNote || defaultFooterNote;

  const [choices, setChoices] = useState({ 1: 'edge' });

  const handleChoice = (rowId, choice) => {
    setChoices((prev) => ({ ...prev, [rowId]: choice }));
  };

  return (
    <div className="educational-page edge-vs-cloud-page">
      {/* 1. Topic Ribbon Header */}
      <section className="evc-ribbon-header">
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
        <div className="evc-header-badges">
          <span className="evc-latency-tag font-heading">
            <Icon name="timer" size={14} color="var(--color-secondary, #904d00)" />
            {finalTopicRibbon.latencyTag}
          </span>
          <span className="evc-chapter-tag font-code">{finalTopicRibbon.chapterTag}</span>
        </div>
      </section>

      {/* 2. Critical Scenario Box */}
      <section className="evc-scenario-card">
        <div className="evc-scenario-icon">
          <Icon name="warning" size={24} color="#ffffff" />
        </div>
        <div className="evc-scenario-content">
          <div className="evc-scenario-meta">
            <div className="evc-scenario-title-wrap">
              <span className="evc-scenario-title font-heading">{finalCriticalScenario.title}</span>
              <span className="evc-scenario-badge font-code">{finalCriticalScenario.badge}</span>
            </div>
            <span className="evc-scenario-limit font-heading">{finalCriticalScenario.interventionLimit}</span>
          </div>
          <p className="evc-scenario-text font-body">
            {finalCriticalScenario.bodyLead}{' '}
            <strong className="evc-alert-accent font-code">{finalCriticalScenario.speed}</strong>
            {finalCriticalScenario.bodyMid}{' '}
            <strong className="evc-alert-accent font-code">{finalCriticalScenario.timeLimit}</strong>{' '}
            {finalCriticalScenario.bodyEnd}
          </p>
        </div>
      </section>

      {/* 3. Comparison Grid (Cloud vs Edge) */}
      <section className="evc-comparison-grid">
        {/* Track A: Cloud */}
        <div className="evc-track-card cloud">
          <div className="evc-track-header">
            <div className="evc-track-title-wrap">
              <span className="evc-track-letter font-heading">{finalComparisonTracks.cloud.letter}</span>
              <h3 className="evc-track-title font-heading">{finalComparisonTracks.cloud.title}</h3>
            </div>
            <span className="evc-track-badge error font-code">{finalComparisonTracks.cloud.badge}</span>
          </div>

          <div className="evc-steps-list">
            {finalComparisonTracks.cloud.steps.map((step, idx) => (
              <div key={idx} className="evc-step-item">
                <Icon name={step.icon} size={16} color="var(--color-neutral-600)" />
                <span className="evc-step-text">{step.text}</span>
              </div>
            ))}
          </div>

          <div className="evc-track-callout error">
            <Icon name="cancel" size={18} color="var(--color-error, #ba1a1a)" />
            <div className="evc-callout-text">
              <strong>{finalComparisonTracks.cloud.riskTitle}</strong> {finalComparisonTracks.cloud.riskBody}
            </div>
          </div>
        </div>

        {/* Track B: Edge */}
        <div className="evc-track-card edge">
          <div className="evc-track-header">
            <div className="evc-track-title-wrap">
              <span className="evc-track-letter primary font-heading">{finalComparisonTracks.edge.letter}</span>
              <h3 className="evc-track-title primary font-heading">{finalComparisonTracks.edge.title}</h3>
            </div>
            <span className="evc-track-badge success font-code">{finalComparisonTracks.edge.badge}</span>
          </div>

          <div className="evc-steps-list">
            {finalComparisonTracks.edge.steps.map((step, idx) => (
              <div key={idx} className="evc-step-item edge-highlight">
                <Icon name={step.icon} size={16} color="var(--color-cobalt-600)" />
                <span className="evc-step-text font-heading">{step.text}</span>
              </div>
            ))}
          </div>

          <div className="evc-track-callout success">
            <Icon name="check_circle" size={18} color="var(--color-teal-700, #00685f)" />
            <div className="evc-callout-text">
              <strong>{finalComparisonTracks.edge.advantageTitle}</strong>{' '}
              {finalComparisonTracks.edge.advantageBody}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mentor's Golden Rule */}
      <section className="evc-mentor-rule">
        <div className="evc-mentor-icon">
          <Icon name="lightbulb" size={20} color="var(--color-secondary, #904d00)" />
        </div>
        <div className="evc-mentor-body">
          <span className="evc-mentor-title font-heading">{finalMentorRule.title}</span>
          <p className="evc-mentor-quote font-heading">{finalMentorRule.quote}</p>
        </div>
      </section>

      {/* 5. Applied AI Engineer Exercise */}
      <section className="evc-activity-card">
        <div className="evc-activity-header">
          <div className="evc-activity-title-wrap">
            <Icon name="assignment" size={18} color="var(--color-cobalt-700)" />
            <span className="evc-activity-title font-heading">{finalActivity.title}</span>
          </div>
          <span className="evc-score-pill font-code">{finalActivity.scorePill}</span>
        </div>

        <p className="evc-activity-instruction font-caption">{finalActivity.instruction}</p>

        {/* Structured Decision Table */}
        <div className="evc-table-wrap">
          <table className="evc-table">
            <thead>
              <tr>
                <th className="evc-th-act">{isEn ? 'Data Type & Vehicle Subsystem' : 'نوع البيانات ونشاط السيارة'}</th>
                <th className="evc-th-choice">{isEn ? 'Recommended Processing Tier' : 'مكان المعالجة المقترح'}</th>
                <th className="evc-th-reason">{isEn ? 'Engineering & Technical Rationale' : 'المبرر الهندسي والتقني'}</th>
              </tr>
            </thead>
            <tbody>
              {finalActivity.rows.map((row) => {
                const currentChoice = choices[row.id] ?? row.defaultChoice;
                return (
                  <tr key={row.id}>
                    <td className="evc-td-act">
                      <div className="evc-act-title font-heading">{row.title}</div>
                      <div className="evc-act-subtitle font-caption">{row.subtitle}</div>
                    </td>
                    <td className="evc-td-choice">
                      <div className="evc-choice-group">
                        <label className={`evc-choice-label ${currentChoice === 'edge' ? 'active' : ''}`}>
                          <input
                            type="radio"
                            name={`choice-${row.id}`}
                            value="edge"
                            checked={currentChoice === 'edge'}
                            disabled={row.disabled}
                            onChange={() => handleChoice(row.id, 'edge')}
                            className="evc-radio"
                          />
                          <span>{isEn ? 'Edge' : 'طرفية'}</span>
                        </label>
                        <label className={`evc-choice-label ${currentChoice === 'cloud' ? 'active' : ''}`}>
                          <input
                            type="radio"
                            name={`choice-${row.id}`}
                            value="cloud"
                            checked={currentChoice === 'cloud'}
                            disabled={row.disabled}
                            onChange={() => handleChoice(row.id, 'cloud')}
                            className="evc-radio"
                          />
                          <span>{isEn ? 'Cloud' : 'سحابية'}</span>
                        </label>
                      </div>
                    </td>
                    <td className="evc-td-reason">
                      {row.justification ? (
                        <div className="evc-model-box">
                          <span className="evc-model-tag font-code">{isEn ? 'Model Answer:' : 'نموذج الإجابة:'}</span>
                          <span className="evc-model-answer font-caption">{row.justification}</span>
                        </div>
                      ) : (
                        <div className="evc-ruled-lines">
                          <div className="evc-ruled-line" />
                          <div className="evc-ruled-line" />
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Page Footer Bar */}
      <footer className="timeline-page-footer-bar">
        <div className="footer-author-note">
          <Icon name="school" size={16} color="var(--color-cobalt-600)" />
          <span>
            {isEn ? 'Prepared & Authored by: ' : 'إعداد وتأليف: '}
            <strong className="author-name">{finalFooterNote.author}</strong> •{' '}
            {finalFooterNote.authorTitle}
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
