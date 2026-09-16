import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import InfrastructureConvergenceDiagram from '../visuals/InfrastructureConvergenceDiagram.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

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
  topicRibbon,
  ahaMoment,
  bigFive,
  activity,
  sidebarCentralConcept,
  goldenRule,
  inkScratchpad,
  footerNote,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultTopicRibbon = {
    number: '04',
    unitTitle: isEn ? 'Unit 1: Computing & AI Fundamentals' : 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    lessonCode: isEn ? 'Lesson 1-1' : 'الدرس 1-1',
    subBadge: isEn ? 'Major Social Transformations' : 'التحولات الاجتماعية الكبرى',
    title: isEn ? 'One Common Tree Growing from a Shared Infrastructure' : 'شجرة واحدة تنمو من بنية تحتية مشتركة',
    chapterTag: 'TRANSFORM-5 // PAGE 04',
  };
  const finalTopicRibbon = topicRibbon || defaultTopicRibbon;

  const defaultAhaMoment = {
    badge: isEn ? 'The Aha! Moment' : 'لحظة الاكتشاف والإدراك (The Aha! Moment)',
    subBadge: isEn ? '• Observe the System' : '• قف وتأمل المنظومة',
    lead: isEn
      ? 'One might think e-commerce, remote work, digital payments, and online learning are isolated phenomena... But engineering analysis proves they all drink from the same shared infrastructure triad:'
      : 'قد يظن البعض أن تطبيقات الشراء، والعمل من المنزل، والدفع الإلكتروني، ودورات الأونلاين ظواهر تكنولوجية منفصلة.. لكن الحقيقة الهندسية تثبت أنها جميعاً ثمرات تنمو من شجرة بنية تحتية رقمية واحدة ثلاثية الأركان:',
    pillars: isEn
      ? ['Reliable Smartphone', 'High-Speed Broadband', 'Centralized Cloud Hyperscalers']
      : ['هاتف ذكي موثوق', 'اتصال فائق السرعة', 'حوسبة سحابية مركزية'],
  };
  const finalAha = ahaMoment || defaultAhaMoment;

  const defaultBigFive = {
    title: isEn ? 'The Big Five Social Transformations' : 'شبكة التحولات الاجتماعية الخمسة (The Big Five)',
    subTitle: isEn ? 'Comparative Analytical Study' : 'دراسة تحليلية مقارنة',
    items: [
      {
        id: 'sns',
        num: '01',
        tag: 'SNS',
        title: isEn ? 'Social Networking Services' : 'شبكات التواصل الاجتماعي',
        description: isEn
          ? 'Transforming users from passive consumers into creators, publishers, and cross-border networked communities.'
          : 'تحويل المستخدم من مجرد متلقٍ سلبي للمعلومة إلى صانع محتوى وناشر ومشارك في مجتمعات افتراضية عابرة للحدود.',
        impactLabel: isEn ? 'Key Impact:' : 'الأثر المحوري:',
        impact: isEn ? 'Democratizing Publishing & Participation' : 'دمقرطة النشر والمشاركة',
        color: 'cobalt',
      },
      {
        id: 'ecomm',
        num: '02',
        tag: 'E-COMM',
        title: isEn ? 'E-Commerce & Digital Markets' : 'التجارة الإلكترونية',
        description: isEn
          ? 'Eradicating geographic barriers, enabling instant purchasing, live price comparisons, and digital supply chains.'
          : 'إلغاء العوائق المكانية والجغرافية، وتوفير الشراء الآني والمقارنة الفورية للأسعار وسلاسل التوريد الرقمية المترابطة.',
        impactLabel: isEn ? 'Key Impact:' : 'الأثر المحوري:',
        impact: isEn ? 'Borderless Global Market 24/7' : 'سوق عالمي مفتوح 24/7',
        color: 'amber',
      },
      {
        id: 'remote',
        num: '03',
        tag: 'REMOTE',
        title: isEn ? 'Remote & Hybrid Work' : 'العمل عن بُعد',
        description: isEn
          ? 'Decoupling career productivity from physical co-location through collaboration hubs and cloud conferences.'
          : 'فصل الإنتاجية المهنية عن الحضور الجغرافي للمقر الوظيفي بالاعتماد على المنصات التشاركية والاجتماعات الافتراضية.',
        impactLabel: isEn ? 'Key Impact:' : 'الأثر المحوري:',
        impact: isEn ? 'Labor Flexibility & Virtual Offices' : 'مرونة ومكاتب افتراضية',
        color: 'teal',
      },
      {
        id: 'learn',
        num: '04',
        tag: 'LEARN',
        title: isEn ? 'Digital & On-Demand Learning' : 'التعلم عبر الإنترنت',
        description: isEn
          ? 'Providing interactive lectures, standardized curricula, and micro-degrees to global learners at any time.'
          : 'إتاحة المحاضرات التفاعلية والمقررات المعيارية والشهادات الاحترافية لأي متعلم حول العالم في أي وقت وبدون قيود.',
        impactLabel: isEn ? 'Key Impact:' : 'الأثر المحوري:',
        impact: isEn ? 'Universal Lifelong Education' : 'التعليم مدى الحياة',
        color: 'cobalt',
      },
      {
        id: 'fintech',
        num: '05',
        tag: 'FINTECH',
        title: isEn ? 'Cashless & Fintech Economy' : 'الدفع غير النقدي (Cashless Economy)',
        description: isEn
          ? 'Replacing paper currency with encrypted digital tokens, contactless cards, and QR codes for instant settlement.'
          : 'استبدال تبادل الأوراق النقدية بحلول رقمية فورية وآمنة عبر المحافظ الإلكترونية، وبطاقات الدفع الذكية، ورموز الاستجابة السريعة (QR Codes)، مما يرفع موثوقية النشاط الاقتصادي وسرعة تسويته.',
        techStack: isEn ? 'Enablers: NFC / Secure Wallets / Banking APIs' : 'التقنيات الساندة: NFC / المحافظ الذكية / التشفير البنكي',
        impactLabel: isEn ? 'Key Impact:' : 'الأثر المحوري:',
        impact: isEn ? 'Frictionless Instant Economy' : 'اقتصاد رقمي فوري',
        color: 'amber',
        fullWidth: true,
      },
    ],
  };
  const finalBigFive = bigFive || defaultBigFive;

  const defaultActivity = {
    title: isEn ? 'Applied Activity (Pair Exploration - 5 Mins)' : 'نشاط تطبيقي تفاعلي (استكشف في ثنائيات - 5 دقائق)',
    codeTag: 'ACT-4.1',
    badge: isEn ? 'Analytical Skills Assessment' : 'تقييم مهارات التحليل',
    instruction: isEn
      ? 'Task: Discuss with your neighbor the following scenarios, then specify in the table: (1) The transformation type, and (2) The foundational pillar that if failed would collapse the entire service:'
      : 'المهمة: ناقش مع زميلك المجاور المواقف الحياتية التالية، ثم حدد في الجدول المرفق: (1) نوع التحول الاجتماعي، و(2) ركن البنية التحتية الأساسي الذي لو انهار لتوقف التطبيق كلياً:',
    situations: [
      {
        id: 1,
        situation: isEn ? 'Ordering dinner and tracking the courier via live GPS on phone.' : 'طلب وجبة طعام عائلية وتتبع مسار المندوب عبر الخريطة بالهاتف.',
      },
      {
        id: 2,
        situation: isEn ? 'Attending a live physics lecture and interacting via audio on school LMS.' : 'حضور جلسة شرح فيزياء مباشرة والتفاعل صوتياً على منصة المدرسة.',
      },
      {
        id: 3,
        situation: isEn ? 'Paying the monthly electricity bill by scanning a QR code via phone wallet.' : 'سداد فاتورة الكهرباء الشهرية عن طريق مسح رمز QR عبر محفظة الهاتف.',
      },
      {
        id: 4,
        situation: isEn ? 'A software engineer in Cairo collaborating seamlessly with a London-based tech team.' : 'مشاركة مهندس برمجيات مقيم بالقاهرة في فريق شركة تقنية بمقرها بلندن.',
      },
    ],
    selfEvalLabel: isEn ? 'Activity Self-Evaluation:' : 'التقييم الذاتي للنشاط:',
    selfEvalOptions: isEn ? ['Fully Mastered (3/3)', 'Needs Review (2/3)'] : ['متقن تماماً (3/3)', 'يحتاج مراجعة (2/3)'],
    teacherSign: isEn ? 'Teacher Signature: ........................' : 'توقيع المعلم: ........................',
  };
  const finalActivity = activity || defaultActivity;

  const defaultSidebarCentralConcept = {
    unitTag: 'UNIT 01 // 1-1',
    badge: isEn ? 'Core Concept' : 'المفهوم المركزي',
    title: isEn ? 'The Big Five Transformations' : 'التحولات الاجتماعية الخمسة',
    body: isEn
      ? 'Profound behavioral and organizational shifts across society sparked by the maturity of computing and telecommunications.'
      : 'تغيرات سلوكية وتنظيمية عميقة طرأت على نسيج المجتمع نتيجة نضوج تكنولوجيا المعلومات والاتصالات.',
    pillarsLabel: isEn ? 'Shared Foundational Triad:' : 'الأعمدة الثلاثية المشتركة:',
    pillars: isEn
      ? ['Reliable Smartphone', 'High-Speed Broadband', 'Centralized Cloud Hyperscalers']
      : ['الهاتف الذكي الموثوق', 'الإنترنت السريع المستقر', 'الحوسبة السحابية المركزية'],
  };
  const finalSidebar = sidebarCentralConcept || defaultSidebarCentralConcept;

  const defaultGoldenRule = {
    title: isEn ? 'Golden Exam Insight' : 'ملحوظة ذهبية للاختبار',
    codeTag: 'P.04-EX',
    subBadge: isEn ? 'Recurring Exam Question' : 'سؤال متكرر في الامتحانات',
    body: isEn
      ? 'Social transformations are not just standalone apps; they represent fundamental structural rewiring of human society, unlocked when sensors and hyperscale cloud became affordable commodity utilities.'
      : 'التحولات الاجتماعية ليست مجرد برمجيات وتطبيقات تجارية منفصلة؛ بل هي إعادة هيكلة لسلوك الأفراد والمؤسسات تحققت بعد أن أصبحت أجهزة الاستشعار الذكية والسحابة الرقمية متاحة للجميع بتكلفة منخفضة.',
  };
  const finalGoldenRule = goldenRule || defaultGoldenRule;

  const defaultInkScratchpad = {
    title: isEn ? 'Free Reflection & Personal Inference' : 'تدوين حر واستنتاج شخصي',
    subBadge: isEn ? 'Ink Pen' : 'بقلم الحبر',
  };
  const finalInk = inkScratchpad || defaultInkScratchpad;

  const defaultFooterNote = {
    author: isEn ? 'Mohamed Shamel Mohamed' : 'الأستاذ / محمد شامل محمد',
    authorTitle: isEn ? 'Curriculum & IT Expert' : 'خبير المادة وتطوير المناهج',
    pageLabel: isEn ? 'Page 04' : 'صفحة 04',
    academicYear: isEn ? 'Academic Year 2026-2027' : 'العام الدراسي 2026-2027',
  };
  const finalFooter = footerNote || defaultFooterNote;
  const [selectedEval, setSelectedEval] = useState(null);

  return (
    <div className="educational-page social-transformations-page">
      {/* 1. Topic Ribbon Header */}
      <section className="st-ribbon-header">
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
        <span className="st-chapter-tag font-code">{finalTopicRibbon.chapterTag}</span>
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
                <span className="st-aha-badge font-heading">{finalAha.badge}</span>
                <span className="st-aha-sub-badge">{finalAha.subBadge}</span>
              </div>
              <p className="st-aha-lead">{finalAha.lead}</p>
              <div className="st-aha-pillars">
                {finalAha.pillars.map((pillar, idx) => (
                  <React.Fragment key={idx}>
                    <span className="st-pillar-chip font-heading">{pillar}</span>
                    {idx < finalAha.pillars.length - 1 && <span className="st-pillar-plus">+</span>}
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
                <h3 className="st-big-five-title font-heading">{finalBigFive.title}</h3>
              </div>
              <span className="st-big-five-subtitle font-caption">{finalBigFive.subTitle}</span>
            </div>

            <div className="st-cards-mosaic">
              {finalBigFive.items.map((item) => (
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
                <span className="st-activity-title font-heading">{finalActivity.title}</span>
              </div>
              <div className="st-activity-meta">
                <span className="st-activity-badge font-heading">{finalActivity.badge}</span>
                <span className="st-activity-code font-code">{finalActivity.codeTag}</span>
              </div>
            </div>

            <p className="st-activity-instruction">{finalActivity.instruction}</p>

            {/* Academic Structured Table */}
            <div className="st-table-wrapper">
              <table className="st-table">
                <thead>
                  <tr>
                    <th className="st-th-num">#</th>
                    <th className="st-th-situation">{isEn ? 'Daily Life Scenario' : 'الموقف الحياتي العملي'}</th>
                    <th className="st-th-type">{isEn ? 'Transformation Type' : 'نوع التحول الاجتماعي'}</th>
                    <th className="st-th-pillar">{isEn ? 'Critical Infrastructure Pillar' : 'ركن البنية التحتية الحرج'}</th>
                  </tr>
                </thead>
                <tbody>
                  {finalActivity.situations.map((row) => (
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
                <span className="st-self-eval-label font-heading">{finalActivity.selfEvalLabel}</span>
                {finalActivity.selfEvalOptions.map((opt, idx) => (
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
                <span>{finalActivity.teacherSign}</span>
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
                <span className="st-sidebar-code font-code">{finalSidebar.unitTag}</span>
              </div>
              <span className="st-sidebar-badge font-heading">{finalSidebar.badge}</span>
            </div>

            <div className="st-concept-box">
              <div className="st-concept-heading font-heading">{finalSidebar.title}</div>
              <p className="st-concept-body">{finalSidebar.body}</p>
            </div>

            <div className="st-pillars-list-wrap">
              <span className="st-pillars-label font-heading">
                {finalSidebar.pillarsLabel}
              </span>
              <ul className="st-pillars-list">
                {finalSidebar.pillars.map((p, i) => (
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
                <span className="st-golden-title font-heading">{finalGoldenRule.title}</span>
              </div>
              <span className="st-golden-code font-code">{finalGoldenRule.codeTag}</span>
            </div>
            <p className="st-golden-body">{finalGoldenRule.body}</p>
            <div className="st-golden-footer font-caption">
              <span className="st-golden-tag">{finalGoldenRule.subBadge}</span>
            </div>
          </section>

          {/* Classroom Ink Scratchpad */}
          <section className="st-sidebar-card st-scratchpad-card">
            <div className="st-scratchpad-header">
              <div className="st-scratchpad-title-row">
                <Icon name="draw" size={18} color="var(--color-cobalt-600)" />
                <span className="st-scratchpad-title font-heading">{finalInk.title}</span>
              </div>
              <span className="st-scratchpad-badge font-caption">{finalInk.subBadge}</span>
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
            {isEn ? 'Prepared by: ' : 'إعداد الأستاذ: '}
            <strong className="author-name">{finalFooter.author}</strong> •{' '}
            {finalFooter.authorTitle}
          </span>
        </div>
        <div className="footer-page-meta">
          <span className="footer-page-pill font-code">{finalFooter.pageLabel}</span>
          <span className="footer-academic-year">{finalFooter.academicYear}</span>
        </div>
      </footer>
    </div>
  );
}
