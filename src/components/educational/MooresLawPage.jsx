import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import MooresLawChart from '../visuals/MooresLawChart.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

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
  topicRibbon,
  inquiry,
  mooresLaw,
  misconception,
  quickCheck,
  keyConcepts,
  enrichment,
  peerDiscussion,
  footerNote,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultTopicRibbon = {
    number: '03',
    unitTitle: isEn ? 'Unit 1: Computing & AI Fundamentals' : 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    lessonCode: isEn ? 'Lesson 1-1' : 'الدرس 1-1',
    subBadge: isEn ? 'Processor Architecture' : 'البنية الهندسية للمعالجات',
    title: isEn ? "The Secret of Tech Acceleration: Moore's Law & Semiconductor Physics" : 'سر التسارع التقني: قانون مور وتحديات الفيزياء وأشباه الموصلات',
    chapterTag: 'CH-01 // PAGE 03',
  };
  const finalTopicRibbon = topicRibbon || defaultTopicRibbon;

  const finalInquiry = inquiry || {
    badge: isEn ? 'Exploratory Inquiry' : 'تساؤل تمهيدي استكشافي',
    codeTag: 'Q-CORE',
    question: isEn
      ? '"Why is the smartphone in your pocket millions of times faster than the NASA computers that guided Apollo to the Moon, yet affordably accessible to all?"'
      : '"لماذا أصبح هاتفك في جيبك أسرع بملايين المرات من حواسيب وكالة ناسا التي أطلقت رحلات أبولو، وبسعر متاح للجميع؟"',
    hint: isEn
      ? 'The secret lies not merely in software code, but in an exponential hardware sprint begun in the mid-1960s.'
      : 'السر لا يكمن فقط في تطور البرمجيات، بل في ثورة فيزيائية صامتة صاغها أحد رواد صناعة السيليكون في ستينيات القرن الماضي.',
  };

  const finalMooresLaw = mooresLaw || {
    sectionTitle: isEn ? "Moore's Law (1965)" : "قانون مور (Moore's Law — 1965)",
    codeTag: 'TRANSISTOR DENSITY',
    body: isEn ? 'Formulated by Intel co-founder ' : 'صاغ المهندس ',
    engineerName: 'Gordon Moore',
    bodyAfter: isEn ? 'his empirical observation stating that:' : 'ملاحظته الشهيرة عام 1965، وتنص على:',
    quote: isEn
      ? '"The number of transistors packed onto a microchip doubles approximately every two years, while the cost of computation is halved."'
      : '"يتضاعف عدد الترانزستورات المدمجة على شريحة الدائرة المتكاملة كل عامين تقريباً، مع انخفاض تكلفة المعالجة إلى النصف تقريباً."',
    bodyEnd: isEn
      ? 'This relentless miniaturization enabled exponential processing leaps.'
      : 'وقد أتاح هذا التكديس الهائل رفع الترددات الحسابية وتصغير الأبعاد الهندسية للحواسيب.',
  };

  const finalMisconception = misconception || {
    badge: isEn ? 'Common Scientific Misconception #01' : 'مفهوم علمي مغلوط شائع #01',
    subBadge: isEn ? 'Rigorous Terminology' : 'دقة الاصطلاح المنهجي',
    question: isEn
      ? '"Is Moore’s Law an immutable physical law of the universe like Newton’s law of universal gravitation?"'
      : '"هل قانون مور قانون فيزيائي حتمي لا يتغير مثل قانون الجاذبية لنيوتن؟"',
    answer: isEn
      ? 'Not at all! It is an empirical observation and economic roadmap, not an inescapable natural law. It has begun to encounter hard quantum boundaries.'
      : 'كلا تماماً! إنه ليس قانوناً طبيعياً محتوماً، بل كان ملاحظة تجريبية وتوقعاً هندسياً/صناعياً اتخذته كبرى شركات تصنيع السيليكون كخريطة طريق (Roadmap) لأبحاثها واستثماراتها. وقد بدأ هذا النسق يتباطأ فعلياً بفعل قيود حجم الذرات واستحالة خفض الحرارة الناتجة دون حلول تبريد فائقة التعقيد.',
  };

  const finalQuickCheck = quickCheck || {
    sectionTitle: isEn ? 'Quick Check Concept Assessment' : 'تقييم المفاهيم الفورية (Quick Check)',
    badge: isEn ? 'Formative Activity' : 'نشاط صفي تقويمي',
    instruction: isEn
      ? 'Mark (✓) or (✗) for each statement and formulate your scientific justification:'
      : 'ضع علامة (✓) أو (✗) أمام كل عبارة، مع تدوين التعليل العلمي الدقيق في المساحة المخصصة:',
    questions: [
      {
        id: 'q1',
        text: isEn
          ? '1. Moore’s Law guarantees that processor speeds will double infinitely at the exact same historical pace.'
          : '١. يضمن قانون مور استمرار تضاعف سرعة المعالجات وقدرتها الحسابية إلى ما لا نهاية بنفس المعدل التاريخي.',
      },
      {
        id: 'q2',
        text: isEn
          ? '2. Nanometer shrinkage of transistors is the definitive historical enabler of pocket supercomputing.'
          : '٢. تصغير الأبعاد الهندسية للترانزستور (Nanometer Shrinkage) هو العامل الحاسم تاريخياً لظهور حواسب كفية فائقة القوة.',
      },
    ],
    reasoningLabel: isEn ? 'Scientific Justification:' : 'التعليل العلمي:',
  };

  const finalKeyConcepts = keyConcepts || {
    title: isEn ? 'Key Concepts' : 'ركائز الدرس (Key Concepts)',
    concepts: [
      {
        term: isEn ? 'Transistor:' : 'الترانزستور (Transistor):',
        definition: isEn ? 'Binary electronic switch (On/Off) representing the fundamental unit of logic calculation.' : 'مفتاح إلكتروني ثنائي (On/Off) يمثل الوحدة البنائية لحسابات البت المنطقية.',
        color: 'cobalt',
      },
      {
        term: isEn ? 'Exponential Growth:' : 'النمو الأسي (Exponential):',
        definition: isEn ? 'Rapid multi-fold acceleration differing fundamentally from linear increments (1, 2, 4, 8, 16...).' : 'تضاعف مضاعف متسارع يختلف جذرياً عن النمو الخطي الثابت (1، 2، 4، 8، 16...).',
        color: 'amber',
      },
      {
        term: isEn ? 'Die Density:' : 'كثافة الرقاقة (Die Density):',
        definition: isEn ? 'Number of active computational components per square millimeter of silicon die.' : 'عدد المكونات النشطة لكل ملليمتر مربع من سطح شريحة السيليكون النقي.',
        color: 'teal',
      },
    ],
  };

  const finalEnrichment = enrichment || {
    title: isEn ? 'The Quantum Tunneling Barrier' : 'عقبة النفق الكمومي (Quantum Tunneling)',
    badge: isEn ? 'Enrichment | Nice to Know' : 'إثراء معرفي منضبط | Nice to Know',
    body: isEn ? 'When transistor gate widths drop below ' : 'عندما تقل بوابة الترانزستور عن ',
    threshold: '2nm',
    bodyAfter: isEn
      ? ', insulating walls become atomic layers thin. Electrons begin leaking across barriers (Quantum Tunneling), generating excessive heat and disrupting binary states.'
      : '، تصبح الجدران العازلة رقيقة جداً بدرجة تقارب بضع ذرات! هنا تتصرف الإلكترونات وفق ميكانيكا الكم وتخترق الحاجز العازل (تيار تسرب / Leakage)، مما يولد حرارة هائلة ويعطل عمل البت الحسابي.',
    solutionLabel: isEn ? 'Future Frontier:' : 'الحل المستقبلي:',
    solution: isEn ? 'Quantum Computing & 3D Chiplets' : 'الحوسبة الكمومية والرقائق ثلاثية الأبعاد (3D Chiplets)',
  };

  const finalPeerDiscussion = peerDiscussion || {
    badge: isEn ? 'Peer Discussion' : 'حوار تطبيقي ثنائي (Peer Discussion)',
    prompt: isEn
      ? 'Discuss with your peer: If the automotive industry had accelerated at the exponential rate of Moore’s Law, what would your car look like, cost, and how fast would it travel today compared to 1970?'
      : 'ناقش مع زميلك: لو استمرت صناعة السيارات بالتسارع الأسي لقانون مور، كم سيكون حجم سيارتك وسعرها وسرعتها اليوم مقارنة بعام 1970؟',
  };

  const finalFooterNote = footerNote || {
    author: isEn ? 'Mohamed Shamel Mohamed' : 'الأستاذ / محمد شامل محمد',
    authorTitle: isEn ? 'Curriculum & IT Expert' : 'خبير تكنولوجيا المعلومات والمناهج',
    pageLabel: isEn ? 'Page 03' : 'صفحة 03',
    academicYear: isEn ? 'Academic Year 2026-2027' : 'العام الدراسي 2026-2027',
  };

  const [answers, setAnswers] = useState({});

  const handleAnswer = (qId, val) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  return (
    <div className="educational-page moores-law-page">
      {/* 1. Topic Ribbon Header */}
      <section className="ml-ribbon-header">
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
        <span className="ml-chapter-tag font-code">{finalTopicRibbon.chapterTag}</span>
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
                <span className="ml-inquiry-badge font-heading">{finalInquiry.badge}</span>
                <span className="ml-inquiry-code font-code">{finalInquiry.codeTag}</span>
              </div>
              <p className="ml-inquiry-question font-heading">{finalInquiry.question}</p>
              <p className="ml-inquiry-hint">{finalInquiry.hint}</p>
            </div>
          </div>

          {/* Moore's Law Section */}
          <div className="ml-moores-card">
            <div className="ml-moores-card-header">
              <div className="ml-moores-header-title-group">
                <Icon name="show_chart" size={20} color="var(--color-cobalt-600)" />
                <span className="ml-moores-section-title font-heading">{finalMooresLaw.sectionTitle}</span>
              </div>
              <span className="ml-moores-code-tag font-code">{finalMooresLaw.codeTag}</span>
            </div>
            <p className="ml-moores-body">
              {finalMooresLaw.body}{' '}
              <strong className="ml-moores-engineer">{finalMooresLaw.engineerName}</strong>{' '}
              {finalMooresLaw.bodyAfter}{' '}
              <em className="ml-moores-quote">{finalMooresLaw.quote}</em>{' '}
              {finalMooresLaw.bodyEnd}
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
                <span className="ml-misconception-badge-error font-heading">{finalMisconception.badge}</span>
                <span className="ml-misconception-sub-badge">{finalMisconception.subBadge}</span>
              </div>
              <p className="ml-misconception-question font-heading">{finalMisconception.question}</p>
              <p className="ml-misconception-answer">{finalMisconception.answer}</p>
            </div>
          </div>

          {/* Quick Check Assessment */}
          <div className="ml-quick-check-card">
            <div className="ml-check-header">
              <div className="ml-check-header-title">
                <Icon name="assignment_turned_in" size={20} color="var(--color-cobalt-700)" />
                <span className="ml-check-title font-heading">{finalQuickCheck.sectionTitle}</span>
              </div>
              <span className="ml-check-badge">{finalQuickCheck.badge}</span>
            </div>
            <p className="ml-check-instruction">{finalQuickCheck.instruction}</p>

            {finalQuickCheck.questions.map((q) => (
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
                <div className="ml-check-reasoning-zone">
                  <span className="ml-reasoning-label">{finalQuickCheck.reasoningLabel}</span>
                  <div className="ml-reasoning-lines">
                    <div className="ml-reasoning-line" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Left Column: 4 cols — Sidebar */}
        <aside className="ml-sidebar-column">
          {/* 1. Key Concepts */}
          <div className="ml-concepts-card">
            <div className="ml-concepts-header">
              <Icon name="fact_check" size={18} color="var(--color-navy-800)" />
              <span className="ml-concepts-title font-heading">{finalKeyConcepts.title}</span>
            </div>
            <div className="ml-concepts-list">
              {finalKeyConcepts.concepts.map((c, i) => (
                <div key={i} className={`ml-concept-item concept-${c.color || 'default'}`}>
                  <strong className="concept-term font-heading">{c.term}</strong>
                  <span className="concept-def">{c.definition}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Enrichment Box */}
          <section className="ml-sidebar-card ml-enrichment-card">
            <div className="ml-enrichment-header">
              <Icon name="science" size={18} color="var(--color-teal-300)" />
              <div>
                <span className="ml-enrichment-badge font-heading">{finalEnrichment.badge}</span>
                <h4 className="ml-enrichment-title font-heading">{finalEnrichment.title}</h4>
              </div>
            </div>
            <p className="ml-enrichment-body">
              {finalEnrichment.body}{' '}
              <strong className="ml-enrichment-threshold font-code">{finalEnrichment.threshold}</strong>
              {finalEnrichment.bodyAfter}
            </p>
            <div className="ml-enrichment-solution-bar">
              <span className="ml-solution-label">{finalEnrichment.solutionLabel}</span>
              <span className="ml-solution-value font-heading">{finalEnrichment.solution}</span>
            </div>
          </section>

          {/* 3. Peer Discussion Prompt */}
          <section className="ml-sidebar-card ml-peer-card">
            <div className="ml-peer-header">
              <Icon name="groups" size={18} color="var(--color-amber-700)" />
              <span className="ml-peer-badge font-heading">{finalPeerDiscussion.badge}</span>
            </div>
            <p className="ml-peer-prompt">{finalPeerDiscussion.prompt}</p>
          </section>
        </aside>
      </div>

      {/* 3. Page Footer */}
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
