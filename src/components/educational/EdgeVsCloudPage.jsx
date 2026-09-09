import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';

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
  topicRibbon = {
    number: '05',
    unitTitle: 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    lessonCode: 'الدرس 1-1',
    subBadge: 'معمارية اتخاذ القرار الحسابي',
    title: 'أين يجب أن يُتخذ القرار البرمجي؟ الحوسبة الطرفية مقابل السحابية',
    chapterTag: 'EDGE-VS-CLOUD // PAGE 05',
    latencyTag: 'وقت الاستجابة (Latency) = فارق بين الحياة والموت',
  },
  criticalScenario = {
    badge: 'CRITICAL SCENARIO • 120 KM/H',
    interventionLimit: 'الحد الأقصى للتدخل: < 50ms',
    title: 'سيناريو الخطر اللحظي الواقعي',
    bodyLead: '«سيارة ذاتية القيادة تسير بسرعة',
    speed: '120 كم/ساعة',
    bodyMid: '، وفجأة ظهر عائق أو طفل يعبر الطريق على بُعد أمتار قليلة. يحتاج نظام الرؤية الحاسوبية والفرملة الطارئة لاتخاذ وتنفيذ أمر التوقف التام في زمن لا يتعدى',
    timeLimit: '50 ميلي ثانية (0.05 ثانية)',
    bodyEnd: 'لتفادي دهس الهدف.»',
  },
  comparisonTracks = {
    cloud: {
      letter: 'أ',
      title: 'المعالجة السحابية',
      badge: 'بطء استجابة: 200 - 600ms',
      steps: [
        { icon: 'videocam', text: '1. الحساسات تلتقط إطارات الفيديو عالية الدقة.' },
        { icon: 'cell_tower', text: '2. رفع حزم الفيديو هوائياً إلى أبراج شبكة 4G/5G.' },
        { icon: 'cloud', text: '3. انتقال البيانات عبر مسافات جغرافية لسيرفر بعيد.' },
        { icon: 'keyboard_return', text: '4. تحليل الموقف ثم إعادة إرسال أمر الفرامل إلى السيارة.' },
      ],
      riskTitle: 'عائق التأخير والخطر القاتل:',
      riskBody:
        'يستغرق الذهاب والعودة (Latency) زمناً طويلاً؛ فأي انقطاع مؤقت في التغطية أو اختناق في الشبكة يتسبب بحادث دهس مؤكد.',
    },
    edge: {
      letter: 'ب',
      title: 'المعالجة الطرفية (Edge)',
      badge: 'فوري: < 15ms',
      steps: [
        { icon: 'sensors', text: '1. الحساسات والرادارات تلتقط العائق فورياً.' },
        { icon: 'memory', text: '2. معالجة آنية وفورية داخل رقاقة الذكاء الاصطناعي المدمجة.' },
        { icon: 'offline_pin', text: '3. عدم الحاجة لأي اتصال بالإنترنت أو الاعتماد على الأبراج.' },
        { icon: 'verified', text: '4. تفعيل المكابح الميكانيكية خلال أجزاء من الألف من الثانية.' },
      ],
      advantageTitle: 'الميزة المصيرية:',
      advantageBody:
        'حماية الأرواح في الأجزاء الحرجة من الثانية عبر الاستقلالية التامة والموثوقية المطلقة بغض النظر عن جودة إشارة الاتصال.',
    },
  },
  mentorRule = {
    title: 'قاعدة المُرشد الذهبية (Mentor\'s Rule):',
    quote:
      '«ليست كل البيانات مؤهلة لأن تسافر إلى السحابة أولاً؛ العمليات التي تتطلب استجابة في أجزاء من الثانية (Mission-Critical) مكانها الحتمي هو الحوسبة الطرفية.»',
  },
  activity = {
    title: 'تمرين مهندس الذكاء الاصطناعي (نشاط تطبيقي - 5 دقائق)',
    scorePill: 'درجات التقييم: [   / 5 ]',
    instruction:
      'بصفتك مهندس أنظمة القيادة الذكية، حدد مكان المعالجة الأنسب لكل نوع بيانات مع توثيق مبررك الهندسي:',
    rows: [
      {
        id: 1,
        title: '1. كشف المشاة والإشارات الضوئية الطارئة',
        subtitle: 'حساسات LiDAR وكاميرات المصد الأمامي',
        defaultChoice: 'edge',
        disabled: true,
        justification: 'تفادي الاصطدام يتطلب زمناً أقل من 50ms لمنع الكوارث.',
      },
      {
        id: 2,
        title: '2. سجلات صيانة وتآكل فرامل العجلات',
        subtitle: 'قراءات المحرك الميكانيكية التاريخية',
        defaultChoice: null,
        disabled: false,
        justification: null,
      },
      {
        id: 3,
        title: '3. تدريب وتحديث الخرائط الرقمية الجماعية',
        subtitle: 'بيانات الطرق وحركة الازدحام الأسبوعية',
        defaultChoice: null,
        disabled: false,
        justification: null,
      },
      {
        id: 4,
        title: '4. التحكم بنظام ترفيه الركاب والتكييف الذكي',
        subtitle: 'تفضيلات الموسيقى والراحة داخل المقصورة',
        defaultChoice: null,
        disabled: false,
        justification: null,
      },
    ],
  },
  footerNote = {
    author: 'الأستاذ / محمد شامل محمد',
    authorTitle: 'خبير ومطور مناهج الحاسب الآلي',
    pageLabel: 'صفحة 05',
    academicYear: 'العام الدراسي 2026 - 2027',
  },
}) {
  const [choices, setChoices] = useState({ 1: 'edge' });

  const handleChoice = (rowId, choice) => {
    setChoices((prev) => ({ ...prev, [rowId]: choice }));
  };

  return (
    <div className="educational-page edge-vs-cloud-page">
      {/* 1. Topic Ribbon Header */}
      <section className="evc-ribbon-header">
        <div className="ribbon-right">
          <span className="ribbon-number font-heading">{topicRibbon.number}</span>
          <div>
            <div className="ribbon-breadcrumbs">
              <span>{topicRibbon.unitTitle}</span>
              <span className="bullet">•</span>
              <span>{topicRibbon.lessonCode}</span>
              <span className="bullet">•</span>
              <span className="ribbon-sub-badge">{topicRibbon.subBadge}</span>
            </div>
            <h1 className="ribbon-title font-heading">{topicRibbon.title}</h1>
          </div>
        </div>
        <div className="evc-header-badges">
          <span className="evc-latency-tag font-heading">
            <Icon name="timer" size={14} color="var(--color-secondary, #904d00)" />
            {topicRibbon.latencyTag}
          </span>
          <span className="evc-chapter-tag font-code">{topicRibbon.chapterTag}</span>
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
              <span className="evc-scenario-title font-heading">{criticalScenario.title}</span>
              <span className="evc-scenario-badge font-code">{criticalScenario.badge}</span>
            </div>
            <span className="evc-scenario-limit font-heading">{criticalScenario.interventionLimit}</span>
          </div>
          <p className="evc-scenario-text font-body">
            {criticalScenario.bodyLead}{' '}
            <strong className="evc-alert-accent font-code">{criticalScenario.speed}</strong>
            {criticalScenario.bodyMid}{' '}
            <strong className="evc-alert-accent font-code">{criticalScenario.timeLimit}</strong>{' '}
            {criticalScenario.bodyEnd}
          </p>
        </div>
      </section>

      {/* 3. Comparison Grid (Cloud vs Edge) */}
      <section className="evc-comparison-grid">
        {/* Track A: Cloud */}
        <div className="evc-track-card cloud">
          <div className="evc-track-header">
            <div className="evc-track-title-wrap">
              <span className="evc-track-letter font-heading">{comparisonTracks.cloud.letter}</span>
              <h3 className="evc-track-title font-heading">{comparisonTracks.cloud.title}</h3>
            </div>
            <span className="evc-track-badge error font-code">{comparisonTracks.cloud.badge}</span>
          </div>

          <div className="evc-steps-list">
            {comparisonTracks.cloud.steps.map((step, idx) => (
              <div key={idx} className="evc-step-item">
                <Icon name={step.icon} size={16} color="var(--color-neutral-600)" />
                <span className="evc-step-text">{step.text}</span>
              </div>
            ))}
          </div>

          <div className="evc-track-callout error">
            <Icon name="cancel" size={18} color="var(--color-error, #ba1a1a)" />
            <div className="evc-callout-text">
              <strong>{comparisonTracks.cloud.riskTitle}</strong> {comparisonTracks.cloud.riskBody}
            </div>
          </div>
        </div>

        {/* Track B: Edge */}
        <div className="evc-track-card edge">
          <div className="evc-track-header">
            <div className="evc-track-title-wrap">
              <span className="evc-track-letter primary font-heading">{comparisonTracks.edge.letter}</span>
              <h3 className="evc-track-title primary font-heading">{comparisonTracks.edge.title}</h3>
            </div>
            <span className="evc-track-badge success font-code">{comparisonTracks.edge.badge}</span>
          </div>

          <div className="evc-steps-list">
            {comparisonTracks.edge.steps.map((step, idx) => (
              <div key={idx} className="evc-step-item edge-highlight">
                <Icon name={step.icon} size={16} color="var(--color-cobalt-600)" />
                <span className="evc-step-text font-heading">{step.text}</span>
              </div>
            ))}
          </div>

          <div className="evc-track-callout success">
            <Icon name="check_circle" size={18} color="var(--color-teal-700, #00685f)" />
            <div className="evc-callout-text">
              <strong>{comparisonTracks.edge.advantageTitle}</strong>{' '}
              {comparisonTracks.edge.advantageBody}
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
          <span className="evc-mentor-title font-heading">{mentorRule.title}</span>
          <p className="evc-mentor-quote font-heading">{mentorRule.quote}</p>
        </div>
      </section>

      {/* 5. Applied AI Engineer Exercise */}
      <section className="evc-activity-card">
        <div className="evc-activity-header">
          <div className="evc-activity-title-wrap">
            <Icon name="assignment" size={18} color="var(--color-cobalt-700)" />
            <span className="evc-activity-title font-heading">{activity.title}</span>
          </div>
          <span className="evc-score-pill font-code">{activity.scorePill}</span>
        </div>

        <p className="evc-activity-instruction font-caption">{activity.instruction}</p>

        {/* Structured Decision Table */}
        <div className="evc-table-wrap">
          <table className="evc-table">
            <thead>
              <tr>
                <th className="evc-th-act">نوع البيانات ونشاط السيارة</th>
                <th className="evc-th-choice">مكان المعالجة المقترح</th>
                <th className="evc-th-reason">المبرر الهندسي والتقني</th>
              </tr>
            </thead>
            <tbody>
              {activity.rows.map((row) => {
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
                          <span>طرفية</span>
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
                          <span>سحابية</span>
                        </label>
                      </div>
                    </td>
                    <td className="evc-td-reason">
                      {row.justification ? (
                        <div className="evc-model-box">
                          <span className="evc-model-tag font-code">نموذج الإجابة:</span>
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
            إعداد وتأليف: <strong className="author-name">{footerNote.author}</strong> •{' '}
            {footerNote.authorTitle}
          </span>
        </div>
        <div className="footer-page-meta">
          <span className="footer-page-pill font-code">{footerNote.pageLabel}</span>
          <span className="footer-academic-year">{footerNote.academicYear}</span>
        </div>
      </footer>
    </div>
  );
}
