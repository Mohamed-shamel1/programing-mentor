import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import MooresLawChart from '../visuals/MooresLawChart.jsx';

/**
 * MooresLawPage (Page 03)
 * Topic: سر التسارع التقني — قانون مور وتحديات الفيزياء وأشباه الموصلات
 * Lesson: 1-1 | الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي
 *
 * Layout: 8:4 Asymmetric Grid (RTL)
 *   Right column (8): Inquiry trigger, Moore's Law + SVG chart, Misconception alert, Quick Check
 *   Left column (4): Key Concepts, Enrichment (Quantum Tunneling), Peer Discussion
 */
export default function MooresLawPage({
  topicRibbon = {
    number: '03',
    unitTitle: 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    lessonCode: 'الدرس 1-1',
    subBadge: 'البنية الهندسية للمعالجات',
    title: 'سر التسارع التقني: قانون مور وتحديات الفيزياء وأشباه الموصلات',
    chapterTag: 'CH-01 // PAGE 03',
  },
  inquiry = {
    badge: 'تساؤل تمهيدي استكشافي',
    codeTag: 'Q-CORE',
    question:
      '"لماذا أصبح هاتفك في جيبك أسرع بملايين المرات من حواسيب وكالة ناسا التي أطلقت رحلات أبولو، وبسعر متاح للجميع؟"',
    hint: 'السر لا يكمن فقط في تطور البرمجيات، بل في ثورة فيزيائية صامتة صاغها أحد رواد صناعة السيليكون في ستينيات القرن الماضي.',
  },
  mooresLaw = {
    sectionTitle: 'قانون مور (Moore\'s Law — 1965)',
    codeTag: 'TRANSISTOR DENSITY',
    body: 'صاغ المهندس',
    engineerName: 'جوردون مور (Gordon Moore)',
    bodyAfter:
      'ملاحظته الشهيرة عام 1965، وتنص على:',
    quote:
      '"يتضاعف عدد الترانزستورات المدمجة على شريحة الدائرة المتكاملة كل عامين تقريباً، مع انخفاض تكلفة المعالجة إلى النصف تقريباً."',
    bodyEnd:
      'وقد أتاح هذا التكديس الهائل رفع الترددات الحسابية وتصغير الأبعاد الهندسية للحواسيب.',
  },
  misconception = {
    badge: 'مفهوم علمي مغلوط شائع #01',
    subBadge: 'دقة الاصطلاح المنهجي',
    question: '"هل قانون مور قانون فيزيائي حتمي لا يتغير مثل قانون الجاذبية لنيوتن؟"',
    answer:
      'كلا تماماً! إنه ليس قانوناً طبيعياً محتوماً، بل كان ملاحظة تجريبية وتوقعاً هندسياً/صناعياً اتخذته كبرى شركات تصنيع السيليكون كخريطة طريق (Roadmap) لأبحاثها واستثماراتها. وقد بدأ هذا النسق يتباطأ فعلياً بفعل قيود حجم الذرات واستحالة خفض الحرارة الناتجة دون حلول تبريد فائقة التعقيد.',
  },
  quickCheck = {
    sectionTitle: 'تقييم المفاهيم الفورية (Quick Check)',
    badge: 'نشاط صفي تقويمي',
    instruction: 'ضع علامة (✓) أو (✗) أمام كل عبارة، مع تدوين التعليل العلمي الدقيق في المساحة المخصصة:',
    questions: [
      {
        id: 'q1',
        text: '١. يضمن قانون مور استمرار تضاعف سرعة المعالجات وقدرتها الحسابية إلى ما لا نهاية بنفس المعدل التاريخي.',
      },
      {
        id: 'q2',
        text: '٢. تصغير الأبعاد الهندسية للترانزستور (Nanometer Shrinkage) هو العامل الحاسم تاريخياً لظهور حواسب كفية فائقة القوة.',
      },
    ],
    reasoningLabel: 'التعليل العلمي:',
  },
  keyConcepts = {
    title: 'ركائز الدرس (Key Concepts)',
    concepts: [
      {
        term: 'الترانزستور (Transistor):',
        definition: 'مفتاح إلكتروني ثنائي (On/Off) يمثل الوحدة البنائية لحسابات البت المنطقية.',
        color: 'cobalt',
      },
      {
        term: 'النمو الأسي (Exponential):',
        definition: 'تضاعف مضاعف متسارع يختلف جذرياً عن النمو الخطي الثابت (1، 2، 4، 8، 16...).',
        color: 'amber',
      },
      {
        term: 'كثافة الرقاقة (Die Density):',
        definition: 'عدد المكونات النشطة لكل ملليمتر مربع من سطح شريحة السيليكون النقي.',
        color: 'teal',
      },
    ],
  },
  enrichment = {
    title: 'عقبة النفق الكمومي (Quantum Tunneling)',
    badge: 'إثراء معرفي منضبط | Nice to Know',
    body: 'عندما تقل بوابة الترانزستور عن',
    threshold: '2nm',
    bodyAfter:
      '، تصبح الجدران العازلة رقيقة جداً بدرجة تقارب بضع ذرات! هنا تتصرف الإلكترونات وفق ميكانيكا الكم وتخترق الحاجز العازل (تيار تسرب / Leakage)، مما يولد حرارة هائلة ويعطل عمل البت الحسابي.',
    solutionLabel: 'الحل المستقبلي:',
    solution: 'الحوسبة الكمومية والرقائق ثلاثية الأبعاد (3D Chiplets)',
  },
  peerDiscussion = {
    badge: 'حوار تطبيقي ثنائي (Peer Discussion)',
    prompt:
      'ناقش مع زميلك: لو استمرت صناعة السيارات بالتسارع الأسي لقانون مور، كم سيكون حجم سيارتك وسعرها وسرعتها اليوم مقارنة بعام 1970؟',
  },
  footerNote = {
    author: 'الأستاذ / محمد شامل محمد',
    authorTitle: 'خبير تكنولوجيا المعلومات والمناهج',
    pageLabel: 'صفحة 03',
    academicYear: 'العام الدراسي 2026-2027',
  },
}) {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (qId, val) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  return (
    <div className="educational-page moores-law-page">
      {/* 1. Topic Ribbon Header */}
      <section className="ml-ribbon-header">
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
        <span className="ml-chapter-tag font-code">{topicRibbon.chapterTag}</span>
      </section>

      {/* 2. Main 8:4 Grid */}
      <div className="ml-grid-layout">
        {/* Right Column: 8 cols — Main Content */}
        <section className="ml-main-column">

          {/* Inquiry Trigger Box */}
          <div className="ml-inquiry-card">
            <div className="ml-inquiry-icon">
              <Icon name="psychology_alt" size={22} color="var(--color-amber-700)" />
            </div>
            <div className="ml-inquiry-body">
              <div className="ml-inquiry-meta">
                <span className="ml-inquiry-badge font-heading">{inquiry.badge}</span>
                <span className="ml-inquiry-code font-code">{inquiry.codeTag}</span>
              </div>
              <p className="ml-inquiry-question font-heading">{inquiry.question}</p>
              <p className="ml-inquiry-hint">{inquiry.hint}</p>
            </div>
          </div>

          {/* Moore's Law Section */}
          <div className="ml-moores-card">
            <div className="ml-moores-card-header">
              <div className="ml-moores-header-title-group">
                <Icon name="show_chart" size={20} color="var(--color-cobalt-600)" />
                <span className="ml-moores-section-title font-heading">{mooresLaw.sectionTitle}</span>
              </div>
              <span className="ml-moores-code-tag font-code">{mooresLaw.codeTag}</span>
            </div>
            <p className="ml-moores-body">
              صاغ المهندس{' '}
              <strong className="ml-moores-engineer">{mooresLaw.engineerName}</strong>{' '}
              {mooresLaw.bodyAfter}{' '}
              <em className="ml-moores-quote">{mooresLaw.quote}</em>{' '}
              {mooresLaw.bodyEnd}
            </p>

            {/* Moore's Law Chart */}
            <MooresLawChart />
          </div>

          {/* Misconception Alert Card */}
          <div className="ml-misconception-card">
            <div className="ml-misconception-icon-wrap">
              <Icon name="warning" size={22} color="#ffffff" />
            </div>
            <div className="ml-misconception-body">
              <div className="ml-misconception-badges">
                <span className="ml-misconception-badge-error font-heading">{misconception.badge}</span>
                <span className="ml-misconception-sub-badge">{misconception.subBadge}</span>
              </div>
              <p className="ml-misconception-question font-heading">{misconception.question}</p>
              <p className="ml-misconception-answer">{misconception.answer}</p>
            </div>
          </div>

          {/* Quick Check Assessment */}
          <div className="ml-quick-check-card">
            <div className="ml-check-header">
              <div className="ml-check-header-title">
                <Icon name="assignment_turned_in" size={20} color="var(--color-cobalt-700)" />
                <span className="ml-check-title font-heading">{quickCheck.sectionTitle}</span>
              </div>
              <span className="ml-check-badge">{quickCheck.badge}</span>
            </div>
            <p className="ml-check-instruction">{quickCheck.instruction}</p>

            {quickCheck.questions.map((q) => (
              <div key={q.id} className={`ml-check-question-block ${answers[q.id] ? 'answered' : ''}`}>
                <div className="ml-check-question-row">
                  <p className="ml-check-question-text">{q.text}</p>
                  <div className="ml-check-options">
                    <label className={`ml-check-option ${answers[q.id] === 'true' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name={q.id}
                        value="true"
                        className="ml-check-radio"
                        onChange={() => handleAnswer(q.id, 'true')}
                      />
                      <span>✓</span>
                    </label>
                    <label className={`ml-check-option ${answers[q.id] === 'false' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name={q.id}
                        value="false"
                        className="ml-check-radio"
                        onChange={() => handleAnswer(q.id, 'false')}
                      />
                      <span>✗</span>
                    </label>
                  </div>
                </div>
                <div className="ml-check-reasoning-row">
                  <span className="ml-check-reasoning-label font-heading">{quickCheck.reasoningLabel}</span>
                  <div className="ml-check-reasoning-line" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Left Column: 4 cols — Pedagogical Sidebar */}
        <aside className="ml-sidebar-column">
          {/* Key Concepts Card */}
          <section className="ml-sidebar-card ml-concepts-card">
            <div className="ml-sidebar-card-header concepts">
              <Icon name="hub" size={18} color="var(--color-cobalt-700)" />
              <span className="ml-sidebar-header-title font-heading">{keyConcepts.title}</span>
            </div>
            <ul className="ml-concepts-list">
              {keyConcepts.concepts.map((c, i) => (
                <li key={i} className="ml-concept-item">
                  <span className={`ml-concept-dot ${c.color}`} />
                  <div>
                    <div className="ml-concept-term font-heading">{c.term}</div>
                    <div className="ml-concept-def">{c.definition}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Quantum Tunneling Enrichment Card */}
          <section className="ml-sidebar-card ml-enrichment-card">
            <div className="ml-enrichment-header">
              <Icon name="science" size={18} color="var(--color-teal-300)" />
              <span className="ml-enrichment-badge font-heading">{enrichment.badge}</span>
            </div>
            <h4 className="ml-enrichment-title font-heading">{enrichment.title}</h4>
            <p className="ml-enrichment-body">
              {enrichment.body}{' '}
              <strong className="ml-enrichment-threshold font-code">{enrichment.threshold}</strong>
              {enrichment.bodyAfter}
            </p>
            <div className="ml-enrichment-solution-bar">
              <span className="ml-solution-label">{enrichment.solutionLabel}</span>
              <span className="ml-solution-value font-heading">{enrichment.solution}</span>
            </div>
          </section>

          {/* Peer Discussion Prompt */}
          <section className="ml-sidebar-card ml-peer-card">
            <div className="ml-peer-header">
              <Icon name="group" size={18} color="var(--color-amber-700)" />
              <span className="ml-peer-badge font-heading">{peerDiscussion.badge}</span>
            </div>
            <p className="ml-peer-prompt">{peerDiscussion.prompt}</p>
          </section>
        </aside>
      </div>

      {/* 3. Page Footer */}
      <footer className="timeline-page-footer-bar">
        <div className="footer-author-note">
          <Icon name="person_pin" size={16} color="var(--color-cobalt-600)" />
          <span>
            إعداد وتأليف: <strong className="author-name">{footerNote.author}</strong> • {footerNote.authorTitle}
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
