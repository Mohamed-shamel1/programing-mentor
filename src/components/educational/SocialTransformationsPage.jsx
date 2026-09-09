import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import InfrastructureConvergenceDiagram from '../visuals/InfrastructureConvergenceDiagram.jsx';

/**
 * SocialTransformationsPage (Page 04)
 * Topic: التحولات الاجتماعية الكبرى — شجرة واحدة تنمو من بنية تحتية مشتركة
 * Lesson: 1-1 | الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي
 *
 * Layout: 8:4 Asymmetric Grid (RTL)
 *   Right column (8): Aha! Moment Callout, The Big Five Mosaic, Collaborative Lab Activity
 *   Left column (4): Central Concept & 3 Pillars (with Convergence SVG), Golden Exam Insight, Ink Scratchpad
 */
export default function SocialTransformationsPage({
  topicRibbon = {
    number: '04',
    unitTitle: 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    lessonCode: 'الدرس 1-1',
    subBadge: 'التحولات الاجتماعية الكبرى',
    title: 'شجرة واحدة تنمو من بنية تحتية مشتركة',
    chapterTag: 'TRANSFORM-5 // PAGE 04',
  },
  ahaMoment = {
    badge: 'لحظة الاكتشاف والإدراك (The Aha! Moment)',
    subBadge: '• قف وتأمل المنظومة',
    lead:
      'قد يظن البعض أن تطبيقات الشراء، والعمل من المنزل، والدفع الإلكتروني، ودورات الأونلاين ظواهر تكنولوجية منفصلة.. لكن الحقيقة الهندسية تثبت أنها جميعاً ثمرات تنمو من شجرة بنية تحتية رقمية واحدة ثلاثية الأركان:',
    pillars: ['هاتف ذكي موثوق', 'اتصال فائق السرعة', 'حوسبة سحابية مركزية'],
  },
  bigFive = {
    title: 'شبكة التحولات الاجتماعية الخمسة (The Big Five)',
    subTitle: 'دراسة تحليلية مقارنة',
    items: [
      {
        id: 'sns',
        num: '01',
        tag: 'SNS',
        title: 'شبكات التواصل الاجتماعي',
        description:
          'تحويل المستخدم من مجرد متلقٍ سلبي للمعلومة إلى صانع محتوى وناشر ومشارك في مجتمعات افتراضية عابرة للحدود.',
        impactLabel: 'الأثر المحوري:',
        impact: 'دمقرطة النشر والمشاركة',
        color: 'cobalt',
      },
      {
        id: 'ecomm',
        num: '02',
        tag: 'E-COMM',
        title: 'التجارة الإلكترونية',
        description:
          'إلغاء العوائق المكانية والجغرافية، وتوفير الشراء الآني والمقارنة الفورية للأسعار وسلاسل التوريد الرقمية المترابطة.',
        impactLabel: 'الأثر المحوري:',
        impact: 'سوق عالمي مفتوح 24/7',
        color: 'amber',
      },
      {
        id: 'remote',
        num: '03',
        tag: 'REMOTE',
        title: 'العمل عن بُعد',
        description:
          'فصل الإنتاجية المهنية عن الحضور الجغرافي للمقر الوظيفي بالاعتماد على المنصات التشاركية والاجتماعات الافتراضية.',
        impactLabel: 'الأثر المحوري:',
        impact: 'مرونة ومكاتب افتراضية',
        color: 'teal',
      },
      {
        id: 'learn',
        num: '04',
        tag: 'LEARN',
        title: 'التعلم عبر الإنترنت',
        description:
          'إتاحة المحاضرات التفاعلية والمقررات المعيارية والشهادات الاحترافية لأي متعلم حول العالم في أي وقت وبدون قيود.',
        impactLabel: 'الأثر المحوري:',
        impact: 'التعليم مدى الحياة',
        color: 'cobalt',
      },
      {
        id: 'fintech',
        num: '05',
        tag: 'FINTECH',
        title: 'الدفع غير النقدي (Cashless Economy)',
        description:
          'استبدال تبادل الأوراق النقدية بحلول رقمية فورية وآمنة عبر المحافظ الإلكترونية، وبطاقات الدفع الذكية، ورموز الاستجابة السريعة (QR Codes)، مما يرفع موثوقية النشاط الاقتصادي وسرعة تسويته.',
        techStack: 'التقنيات الساندة: NFC / المحافظ الذكية / التشفير البنكي',
        impactLabel: 'الأثر المحوري:',
        impact: 'اقتصاد رقمي فوري',
        color: 'amber',
        fullWidth: true,
      },
    ],
  },
  activity = {
    title: 'نشاط تطبيقي تفاعلي (استكشف في ثنائيات - 5 دقائق)',
    codeTag: 'ACT-4.1',
    badge: 'تقييم مهارات التحليل',
    instruction:
      'المهمة: ناقش مع زميلك المجاور المواقف الحياتية التالية، ثم حدد في الجدول المرفق: (1) نوع التحول الاجتماعي، و(2) ركن البنية التحتية الأساسي الذي لو انهار لتوقف التطبيق كلياً:',
    situations: [
      {
        id: 1,
        situation: 'طلب وجبة طعام عائلية وتتبع مسار المندوب عبر الخريطة بالهاتف.',
      },
      {
        id: 2,
        situation: 'حضور جلسة شرح فيزياء مباشرة والتفاعل صوتياً على منصة المدرسة.',
      },
      {
        id: 3,
        situation: 'سداد فاتورة الكهرباء الشهرية عن طريق مسح رمز QR عبر محفظة الهاتف.',
      },
      {
        id: 4,
        situation: 'مشاركة مهندس برمجيات مقيم بالقاهرة في فريق شركة تقنية بمقرها بلندن.',
      },
    ],
    selfEvalLabel: 'التقييم الذاتي للنشاط:',
    selfEvalOptions: ['متقن تماماً (3/3)', 'يحتاج مراجعة (2/3)'],
    teacherSign: 'توقيع المعلم: ........................',
  },
  sidebarCentralConcept = {
    unitTag: 'UNIT 01 // 1-1',
    badge: 'المفهوم المركزي',
    title: 'التحولات الاجتماعية الخمسة',
    body:
      'تغيرات سلوكية وتنظيمية عميقة طرأت على نسيج المجتمع نتيجة نضوج تكنولوجيا المعلومات والاتصالات.',
    pillarsLabel: 'الأعمدة الثلاثية المشتركة:',
    pillars: [
      'الهاتف الذكي الموثوق',
      'الإنترنت السريع المستقر',
      'الحوسبة السحابية المركزية',
    ],
  },
  goldenRule = {
    title: 'ملحوظة ذهبية للاختبار',
    codeTag: 'P.04-EX',
    subBadge: 'سؤال متكرر في الامتحانات',
    body:
      'التحولات الاجتماعية ليست مجرد برمجيات وتطبيقات تجارية منفصلة؛ بل هي إعادة هيكلة لسلوك الأفراد والمؤسسات تحققت بعد أن أصبحت أجهزة الاستشعار الذكية والسحابة الرقمية متاحة للجميع بتكلفة منخفضة.',
  },
  inkScratchpad = {
    title: 'تدوين حر واستنتاج شخصي',
    subBadge: 'بقلم الحبر',
  },
  footerNote = {
    author: 'الأستاذ / محمد شامل محمد',
    authorTitle: 'خبير المادة وتطوير المناهج',
    pageLabel: 'صفحة 04',
    academicYear: 'العام الدراسي 2026-2027',
  },
}) {
  const [selectedEval, setSelectedEval] = useState(null);

  return (
    <div className="educational-page social-transformations-page">
      {/* 1. Topic Ribbon Header */}
      <section className="st-ribbon-header">
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
        <span className="st-chapter-tag font-code">{topicRibbon.chapterTag}</span>
      </section>

      {/* 2. Main 8:4 Grid */}
      <div className="st-grid-layout">
        {/* Right Column: 8 cols — Main Content Track */}
        <section className="st-main-column">
          {/* Aha! Moment Callout Box */}
          <div className="st-aha-card">
            <div className="st-aha-icon">
              <Icon name="psychology_alt" size={24} color="var(--color-amber-800)" />
            </div>
            <div className="st-aha-body">
              <div className="st-aha-meta">
                <span className="st-aha-badge font-heading">{ahaMoment.badge}</span>
                <span className="st-aha-sub-badge">{ahaMoment.subBadge}</span>
              </div>
              <p className="st-aha-lead">{ahaMoment.lead}</p>
              <div className="st-aha-pillars">
                {ahaMoment.pillars.map((pillar, idx) => (
                  <React.Fragment key={idx}>
                    <span className="st-pillar-chip font-heading">{pillar}</span>
                    {idx < ahaMoment.pillars.length - 1 && <span className="st-pillar-plus">+</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* The Big Five Mosaic */}
          <div className="st-big-five-section">
            <div className="st-big-five-header">
              <div className="st-big-five-title-group">
                <span className="st-title-dot" />
                <h3 className="st-big-five-title font-heading">{bigFive.title}</h3>
              </div>
              <span className="st-big-five-subtitle font-caption">{bigFive.subTitle}</span>
            </div>

            <div className="st-cards-mosaic">
              {bigFive.items.map((item) => (
                <div
                  key={item.id}
                  className={`st-card ${item.color} ${item.fullWidth ? 'full-width' : ''}`}
                >
                  <div className="st-card-top">
                    <div className="st-card-badge-row">
                      <span className={`st-card-num font-code ${item.color}`}>{item.num}</span>
                      <span className="st-card-tag font-code">{item.tag}</span>
                    </div>
                    <h4 className="st-card-title font-heading">{item.title}</h4>
                    <p className="st-card-desc">{item.description}</p>
                  </div>

                  <div className="st-card-bottom">
                    {item.techStack && (
                      <span className="st-card-tech font-caption">{item.techStack}</span>
                    )}
                    <div className={`st-card-impact-bar ${item.color}`}>
                      <span className="st-impact-label">{item.impactLabel}</span>
                      <strong className="st-impact-value font-heading">{item.impact}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collaborative Interactive Lab Activity */}
          <div className="st-activity-card">
            <div className="st-activity-header">
              <div className="st-activity-title-group">
                <Icon name="group_work" size={20} color="#ffffff" />
                <span className="st-activity-title font-heading">{activity.title}</span>
              </div>
              <div className="st-activity-meta">
                <span className="st-activity-badge font-heading">{activity.badge}</span>
                <span className="st-activity-code font-code">{activity.codeTag}</span>
              </div>
            </div>

            <p className="st-activity-instruction">{activity.instruction}</p>

            {/* Academic Structured Table */}
            <div className="st-table-wrapper">
              <table className="st-table">
                <thead>
                  <tr>
                    <th className="st-th-num">#</th>
                    <th className="st-th-situation">الموقف الحياتي العملي</th>
                    <th className="st-th-type">نوع التحول الاجتماعي</th>
                    <th className="st-th-pillar">ركن البنية التحتية الحرج</th>
                  </tr>
                </thead>
                <tbody>
                  {activity.situations.map((row) => (
                    <tr key={row.id}>
                      <td className="st-td-num font-code">{row.id}</td>
                      <td className="st-td-situation">{row.situation}</td>
                      <td className="st-td-input">
                        <div className="st-handwriting-slot" />
                      </td>
                      <td className="st-td-input">
                        <div className="st-handwriting-slot" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Self-Evaluation & Signoff Strip */}
            <div className="st-activity-footer">
              <div className="st-self-eval-group">
                <span className="st-self-eval-label font-heading">{activity.selfEvalLabel}</span>
                {activity.selfEvalOptions.map((opt, idx) => (
                  <label key={idx} className="st-checkbox-label">
                    <input
                      type="checkbox"
                      checked={selectedEval === idx}
                      onChange={() => setSelectedEval(selectedEval === idx ? null : idx)}
                      className="st-checkbox"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
              <div className="st-teacher-sign font-caption">
                <span>{activity.teacherSign}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Left Column: 4 cols — Pedagogical Rail */}
        <aside className="st-sidebar-column">
          {/* Curriculum Marginalia Tracker Card */}
          <section className="st-sidebar-card st-central-concept-card">
            <div className="st-sidebar-header cobalt">
              <div className="st-sidebar-title-row">
                <Icon name="auto_stories" size={18} color="var(--color-cobalt-700)" />
                <span className="st-sidebar-code font-code">{sidebarCentralConcept.unitTag}</span>
              </div>
              <span className="st-sidebar-badge font-heading">{sidebarCentralConcept.badge}</span>
            </div>

            <div className="st-concept-box">
              <div className="st-concept-heading font-heading">{sidebarCentralConcept.title}</div>
              <p className="st-concept-body">{sidebarCentralConcept.body}</p>
            </div>

            <div className="st-pillars-list-wrap">
              <span className="st-pillars-label font-heading">
                {sidebarCentralConcept.pillarsLabel}
              </span>
              <ul className="st-pillars-list">
                {sidebarCentralConcept.pillars.map((p, i) => (
                  <li key={i} className="st-pillar-item">
                    <span className="st-pillar-num font-code">{i + 1}</span>
                    <span className="st-pillar-text font-heading">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metric Convergence Diagram */}
            <InfrastructureConvergenceDiagram />
          </section>

          {/* Golden Rule / Exam Insight Card */}
          <section className="st-sidebar-card st-golden-rule-card">
            <div className="st-golden-header">
              <div className="st-golden-title-row">
                <Icon name="lightbulb" size={18} color="var(--color-amber-700)" />
                <span className="st-golden-title font-heading">{goldenRule.title}</span>
              </div>
              <span className="st-golden-code font-code">{goldenRule.codeTag}</span>
            </div>
            <p className="st-golden-body">{goldenRule.body}</p>
            <div className="st-golden-footer font-caption">
              <span className="st-golden-tag">{goldenRule.subBadge}</span>
            </div>
          </section>

          {/* Classroom Ink Scratchpad */}
          <section className="st-sidebar-card st-scratchpad-card">
            <div className="st-scratchpad-header">
              <div className="st-scratchpad-title-row">
                <Icon name="draw" size={18} color="var(--color-cobalt-600)" />
                <span className="st-scratchpad-title font-heading">{inkScratchpad.title}</span>
              </div>
              <span className="st-scratchpad-badge font-caption">{inkScratchpad.subBadge}</span>
            </div>
            <div className="st-scratchpad-lines">
              <div className="st-ruled-line" />
              <div className="st-ruled-line" />
              <div className="st-ruled-line" />
            </div>
          </section>
        </aside>
      </div>

      {/* 3. Page Footer Bar */}
      <footer className="timeline-page-footer-bar">
        <div className="footer-author-note">
          <Icon name="school" size={16} color="var(--color-cobalt-600)" />
          <span>
            إعداد الأستاذ: <strong className="author-name">{footerNote.author}</strong> •{' '}
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
