import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import NestedVennDiagram from '../visuals/NestedVennDiagram.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * NestedCategoriesPage (Lesson 1-2, Page 01)
 * Topic: مفهوم الذكاء الاصطناعي وبنية الفئات المتداخلة
 * Scope: Concentric Venn Architecture (AI ⊃ ML ⊃ DL ⊃ GenAI), 3 Cognitive Simulation Pillars, Real-world examples, Stop & Think Lab
 */
export default function NestedCategoriesPage({
  topicRibbon,
  inquiry,
  aiDefinition,
  nestedVennData,
  stopAndThink,
  quickCheck,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultTopicRibbon = {
    number: '01',
    unitTitle: isEn ? 'Unit 1: Computing & AI Fundamentals' : 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    lessonCode: isEn ? 'Lesson 1-2' : 'الدرس 1-2',
    subBadge: isEn ? 'Nested Categories Architecture' : 'هيكل الفئات ومظلة المفاهيم',
    title: isEn
      ? 'Artificial Intelligence Concept & The Nested Categories Architecture'
      : 'مفهوم الذكاء الاصطناعي وبنية الفئات المتداخلة',
    chapterTag: 'CH-01 // PAGE 01',
  };
  const finalTopicRibbon = topicRibbon || defaultTopicRibbon;

  const finalInquiry = inquiry || {
    badge: isEn ? 'Exploratory Inquiry' : 'تساؤل تمهيدي استكشافي',
    codeTag: 'Q-TAXONOMY',
    question: isEn
      ? '"Is every smart system we encounter today a generative AI or a deep neural network? How do AI, ML, and DL hierarchically connect?"'
      : '"هل كل نظام ذكي نتعامل معه اليوم هو ذكاء توليدي أو شبكة عصبية؟ وكيف ترتبط مفاهيم AI و ML و DL و GenAI ببعضها هندسياً؟"',
    hint: isEn
      ? 'The key to critical thinking lies in understanding that AI is not a single tool, but a vast concentric umbrella containing strictly nested subdisciplines.'
      : 'مفتاح التحليل العلمي يكمن في إدراك أن الذكاء الاصطناعي ليس تقنية واحدة، بل هو مظلة كبرى تحوي فئات متداخلة بحسابات دقيقة.',
  };

  const finalAiDefinition = aiDefinition || {
    title: isEn ? 'AI as an Umbrella Term & Simulation Pillars' : 'الذكاء الاصطناعي كمصطلح مظلي وركائز المحاكاة الذهنية',
    codeTag: 'COGNITIVE PILLARS',
    lead: isEn
      ? 'Artificial Intelligence is a broad umbrella term describing computational systems engineered to simulate human intelligence and cognitive capabilities.'
      : 'الذكاء الاصطناعي (AI) هو مصطلح مظلي شامل (Umbrella Term) يصف أي نظام حاسوبي مصمم لمحاكاة السلوك الذكي والقدرات الذهنية البشرية.',
    pillars: [
      {
        id: 'p1',
        icon: 'menu_book',
        nameAr: '1. التعلم (Learning)',
        nameEn: '1. Learning',
        descAr: 'اكتساب البيانات، واستيعاب القواعد، وبناء النماذج الأولية لكيفية استخدامها.',
        descEn: 'Acquiring raw data, internalizing domain rules, and constructing baseline patterns.',
        color: 'cobalt',
      },
      {
        id: 'p2',
        icon: 'psychology',
        nameAr: '2. الاستدلال (Reasoning)',
        nameEn: '2. Reasoning',
        descAr: 'تطبيق القواعد المنطقية لاستخلاص نتائج واستنتاجات تقريبية أو حاسمة للمواقف الجديدة.',
        descEn: 'Employing logical rules to deduce approximate or definitive conclusions in new situations.',
        color: 'teal',
      },
      {
        id: 'p3',
        icon: 'sync_problem',
        nameAr: '3. التصحيح الذاتي (Self-Correction)',
        nameEn: '3. Self-Correction',
        descAr: 'تقييم دقة القرارات السابقة، وتعديل المعاملات تلقائياً لتقليل هامش الخطأ مستقبلاً.',
        descEn: 'Evaluating past decision outcomes and autonomously adjusting parameters to minimize future loss.',
        color: 'amber',
      },
    ],
    dailyApplications: isEn
      ? 'Canonical Daily Examples: Real-time speech recognition (Siri/Google), automated facial biometrics, spam filtering, and instant language translation.'
      : 'أمثلة يومية ملموسة: التعرف اللحظي على الكلام، القياسات الحيوية للوجوه، فرز البريد العشوائي، والترجمة الآلية الفورية.',
  };

  const finalStopAndThink = stopAndThink || {
    badge: isEn ? 'Stop & Think • Classroom Debate' : 'توقف وفكّر • معمل التأمل الصفي',
    subBadge: isEn ? 'Taxonomy Analysis' : 'تحليل تصنيفي دقيق',
    question: isEn
      ? 'If we code a chess program relying purely on a hardcoded Minimax tree and If-Else rules without learning from losses or altering weights: Does it belong to AI? And does it belong to ML?'
      : 'لو قمنا ببرمجة محرك شطرنج بلغة بايثون يعتمد تماماً على شجرة احتمالات (Minimax) وقواعد شرطية صلبة (If-Else) دون تعديل أوزان أو تعلم من الخسارة: هل ينتمي لـ AI؟ وهل ينتمي لـ ML؟',
    answer: isEn
      ? 'Scientific Verdict: Yes, it belongs to Artificial Intelligence (Symbolic / Rule-based AI) because it simulates human intelligent decision-making. However, it DOES NOT belong to Machine Learning (ML) because it lacks autonomous learning from data or iterative parameter updates!'
      : 'الحكم العلمي الدقيق: نعم، ينتمي للذكاء الاصطناعي (تحت مظلة الذكاء الرمزي Symbolic AI) لأنه يحاكي سلوك التفكير البشري؛ لكنه قطعاً لا ينتمي لتعلم الآلة (ML) لأنه لا يستخلص أنماطاً ذاتية ولا يعدل أوزانه بناءً على التجربة!',
  };

  const finalQuickCheck = quickCheck || {
    title: isEn ? 'Formative Concept Check' : 'تقييم الفهم الفوري (Quick Check)',
    questions: [
      {
        id: 'q1',
        textAr: 'كل نظام ذكاء اصطناعي توليدي (GenAI) يُعد بالضرورة نظام تعلم عميق (DL).',
        textEn: 'Every Generative AI (GenAI) model is strictly a Deep Learning (DL) system.',
        correct: true,
        explanationAr: 'صحيح (✓): لأن GenAI يمثل النواة الأكثر تخصصاً داخل فئة التعلم العميق (GenAI ⊂ DL).',
        explanationEn: 'Correct (✓): Because GenAI represents the inner core subset directly within Deep Learning (GenAI ⊂ DL).',
      },
      {
        id: 'q2',
        textAr: 'الذكاء الاصطناعي وتعلم الآلة هما مصطلحان مترادفان يعبران عن نفس الشيء تماماً.',
        textEn: 'Artificial Intelligence and Machine Learning are identical synonymous terms.',
        correct: false,
        explanationAr: 'خطأ (✗): الذكاء الاصطناعي هو المظلة الشاملة، بينما تعلم الآلة هو مجرد فئة فرعية متخصصة في التعلم من البيانات.',
        explanationEn: 'False (✗): AI is the encompassing umbrella, whereas ML is a specialized subfield focused on data-driven learning.',
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});

  const handleToggleAnswer = (qId, choice) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: choice }));
  };

  return (
    <div
      className="educational-page nested-categories-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        gap: '6px',
        boxSizing: 'border-box',
      }}
    >
      {/* 1. Topic Ribbon Header */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          border: '1px solid var(--color-neutral-200)',
          borderRadius: 'var(--radius-sm)',
          padding: '6px 12px',
          boxShadow: 'var(--shadow-2xs)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            className="font-heading"
            style={{
              fontSize: '22px',
              fontWeight: '900',
              color: 'var(--color-cobalt-600)',
              backgroundColor: 'var(--color-cobalt-50)',
              border: '1.5px solid var(--color-cobalt-200)',
              borderRadius: 'var(--radius-xs)',
              padding: '2px 8px',
              lineHeight: 1,
            }}
          >
            {finalTopicRibbon.number}
          </span>
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '10.5px',
                color: 'var(--color-neutral-600)',
                marginBottom: '2px',
              }}
            >
              <span>{finalTopicRibbon.unitTitle}</span>
              <span className="bullet">•</span>
              <span>{finalTopicRibbon.lessonCode}</span>
              <span className="bullet">•</span>
              <span
                style={{
                  color: 'var(--color-teal-700)',
                  fontWeight: 'bold',
                  backgroundColor: 'var(--color-teal-50)',
                  padding: '1px 6px',
                  borderRadius: '3px',
                }}
              >
                {finalTopicRibbon.subBadge}
              </span>
            </div>
            <h1
              className="font-heading"
              style={{
                fontSize: '15px',
                fontWeight: '900',
                color: 'var(--color-navy-950)',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {finalTopicRibbon.title}
            </h1>
          </div>
        </div>

        <span
          className="font-code"
          style={{
            fontSize: '10.5px',
            fontWeight: 'bold',
            color: 'var(--color-navy-700)',
            backgroundColor: 'var(--color-navy-50)',
            border: '1px solid var(--color-navy-200)',
            borderRadius: '4px',
            padding: '3px 8px',
          }}
        >
          {finalTopicRibbon.chapterTag}
        </span>
      </section>

      {/* 2. Inquiry Trigger Card */}
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: '#fffbeb',
          border: '1px solid #fde68a',
          borderInlineStart: '4px solid var(--color-amber-500)',
          borderRadius: 'var(--radius-sm)',
          padding: '6px 10px',
        }}
      >
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: '#fef3c7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Icon name="psychology_alt" size={18} color="var(--color-amber-700)" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
            <span
              className="font-heading"
              style={{
                fontSize: '10px',
                fontWeight: 'bold',
                color: 'var(--color-amber-800)',
                backgroundColor: '#fef3c7',
                padding: '1px 5px',
                borderRadius: '3px',
              }}
            >
              {finalInquiry.badge}
            </span>
            <span className="font-code" style={{ fontSize: '9.5px', color: 'var(--color-neutral-500)' }}>
              {finalInquiry.codeTag}
            </span>
          </div>
          <p
            className="font-heading"
            style={{
              fontSize: '12px',
              fontWeight: '700',
              color: 'var(--color-navy-950)',
              margin: '0 0 2px 0',
              lineHeight: 1.3,
            }}
          >
            {finalInquiry.question}
          </p>
          <p
            style={{
              fontSize: '11px',
              color: 'var(--color-neutral-700)',
              margin: 0,
              lineHeight: 1.25,
            }}
          >
            {finalInquiry.hint}
          </p>
        </div>
      </section>

      {/* 3. Section 1: Concept of AI & The 3 Simulation Pillars */}
      <section
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid var(--color-neutral-200)',
          borderRadius: 'var(--radius-sm)',
          padding: '8px 10px',
          boxShadow: 'var(--shadow-2xs)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '6px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="hub" size={17} color="var(--color-cobalt-600)" />
            <strong
              className="font-heading"
              style={{ fontSize: '12.5px', color: 'var(--color-navy-950)' }}
            >
              {finalAiDefinition.title}
            </strong>
          </div>
          <span
            className="font-code"
            style={{
              fontSize: '9.5px',
              color: 'var(--color-cobalt-700)',
              backgroundColor: 'var(--color-cobalt-50)',
              padding: '1px 6px',
              borderRadius: '3px',
            }}
          >
            {finalAiDefinition.codeTag}
          </span>
        </div>

        <p
          style={{
            fontSize: '11.5px',
            color: 'var(--color-navy-900)',
            margin: '0 0 6px 0',
            lineHeight: 1.35,
          }}
        >
          {finalAiDefinition.lead}
        </p>

        {/* 3 Simulation Pillars Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '6px',
            marginBottom: '6px',
          }}
        >
          {finalAiDefinition.pillars.map((p) => {
            const isCobalt = p.color === 'cobalt';
            const isTeal = p.color === 'teal';
            const borderColor = isCobalt
              ? 'var(--color-cobalt-200)'
              : isTeal
              ? 'var(--color-teal-200)'
              : '#fde68a';
            const bgHeader = isCobalt
              ? 'var(--color-cobalt-50)'
              : isTeal
              ? 'var(--color-teal-50)'
              : '#fffbeb';
            const iconColor = isCobalt
              ? 'var(--color-cobalt-700)'
              : isTeal
              ? 'var(--color-teal-700)'
              : 'var(--color-amber-700)';

            return (
              <div
                key={p.id}
                style={{
                  border: `1px solid ${borderColor}`,
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: '#ffffff',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    backgroundColor: bgHeader,
                    padding: '4px 6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    borderBottom: `1px solid ${borderColor}`,
                  }}
                >
                  <Icon name={p.icon} size={14} color={iconColor} />
                  <strong
                    className="font-heading"
                    style={{ fontSize: '11px', color: 'var(--color-navy-950)' }}
                  >
                    {isEn ? p.nameEn : p.nameAr}
                  </strong>
                </div>
                <div style={{ padding: '4px 6px' }}>
                  <p
                    style={{
                      fontSize: '10.5px',
                      color: 'var(--color-neutral-700)',
                      margin: 0,
                      lineHeight: 1.25,
                    }}
                  >
                    {isEn ? p.descEn : p.descAr}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Daily Applications Strip */}
        <div
          style={{
            fontSize: '10.5px',
            color: 'var(--color-cobalt-900)',
            backgroundColor: 'var(--color-cobalt-50)',
            border: '1px solid var(--color-cobalt-200)',
            borderRadius: 'var(--radius-xs)',
            padding: '3px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Icon name="verified" size={14} color="var(--color-cobalt-600)" />
          <span>{finalAiDefinition.dailyApplications}</span>
        </div>
      </section>

      {/* 4. Section 2: Concentric Nested Diagram */}
      <section
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid var(--color-neutral-200)',
          borderRadius: 'var(--radius-sm)',
          padding: '6px 10px',
          boxShadow: 'var(--shadow-2xs)',
        }}
      >
        <NestedVennDiagram
          selectedId={selectedCategory}
          onSelectCategory={(id) => setSelectedCategory(id)}
        />
      </section>

      {/* 5. Section 3: Stop & Think Classroom Debate */}
      <section
        style={{
          backgroundColor: '#f8fafc',
          border: '1.5px solid var(--color-navy-200)',
          borderInlineStart: '4px solid var(--color-navy-800)',
          borderRadius: 'var(--radius-sm)',
          padding: '6px 10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '3px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="psychology" size={16} color="var(--color-navy-900)" />
            <strong
              className="font-heading"
              style={{ fontSize: '11.5px', color: 'var(--color-navy-950)' }}
            >
              {finalStopAndThink.badge}
            </strong>
          </div>
          <span
            style={{
              fontSize: '9.5px',
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-navy-700)',
              backgroundColor: 'var(--color-navy-100)',
              padding: '1px 6px',
              borderRadius: '3px',
            }}
          >
            {finalStopAndThink.subBadge}
          </span>
        </div>

        <p
          className="font-heading"
          style={{
            fontSize: '11px',
            fontWeight: 'bold',
            color: 'var(--color-navy-900)',
            margin: '0 0 3px 0',
            lineHeight: 1.25,
          }}
        >
          {finalStopAndThink.question}
        </p>

        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-navy-200)',
            borderRadius: 'var(--radius-xs)',
            padding: '4px 8px',
            fontSize: '10.5px',
            color: 'var(--color-navy-950)',
            lineHeight: 1.3,
          }}
        >
          <strong style={{ color: 'var(--color-cobalt-700)' }}>
            {isEn ? 'Scientific Verdict: ' : 'التحليل والحكم العلمي: '}
          </strong>
          {finalStopAndThink.answer}
        </div>
      </section>

      {/* 6. Section 4: Quick Check Formative Assessment */}
      <section
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid var(--color-neutral-200)',
          borderRadius: 'var(--radius-sm)',
          padding: '6px 10px',
          boxShadow: 'var(--shadow-2xs)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '4px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="assignment_turned_in" size={15} color="var(--color-cobalt-700)" />
            <strong
              className="font-heading"
              style={{ fontSize: '11.5px', color: 'var(--color-navy-950)' }}
            >
              {finalQuickCheck.title}
            </strong>
          </div>
          <span
            style={{
              fontSize: '9.5px',
              color: 'var(--color-neutral-500)',
              fontFamily: 'var(--font-code)',
            }}
          >
            FORMATIVE ASSESSMENT
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {finalQuickCheck.questions.map((q) => {
            const currentChoice = userAnswers[q.id];
            const isAnswered = currentChoice !== undefined;
            const isCorrect = isAnswered && currentChoice === q.correct;

            return (
              <div
                key={q.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  backgroundColor: isAnswered
                    ? isCorrect
                      ? '#f0fdf4'
                      : '#fef2f2'
                    : 'var(--color-navy-50)',
                  border: isAnswered
                    ? isCorrect
                      ? '1px solid #bbf7d0'
                      : '1px solid #fecaca'
                    : '1px solid var(--color-navy-200)',
                  borderRadius: 'var(--radius-xs)',
                  padding: '3px 8px',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ flex: 1 }}>
                  <span
                    style={{
                      fontSize: '11px',
                      color: 'var(--color-navy-900)',
                      fontWeight: '500',
                    }}
                  >
                    {isEn ? q.textEn : q.textAr}
                  </span>
                  {isAnswered && (
                    <div
                      style={{
                        fontSize: '10px',
                        color: isCorrect ? '#166534' : '#991b1b',
                        marginTop: '1px',
                        fontWeight: 'bold',
                      }}
                    >
                      {isEn ? q.explanationEn : q.explanationAr}
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                  <button
                    type="button"
                    onClick={() => handleToggleAnswer(q.id, true)}
                    style={{
                      padding: '2px 8px',
                      fontSize: '10px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 'bold',
                      borderRadius: '3px',
                      border:
                        currentChoice === true
                          ? '1px solid #16a34a'
                          : '1px solid var(--color-neutral-300)',
                      backgroundColor:
                        currentChoice === true ? '#16a34a' : '#ffffff',
                      color: currentChoice === true ? '#ffffff' : 'var(--color-navy-800)',
                      cursor: 'pointer',
                    }}
                  >
                    {isEn ? 'True (✓)' : 'صواب (✓)'}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleToggleAnswer(q.id, false)}
                    style={{
                      padding: '2px 8px',
                      fontSize: '10px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 'bold',
                      borderRadius: '3px',
                      border:
                        currentChoice === false
                          ? '1px solid #dc2626'
                          : '1px solid var(--color-neutral-300)',
                      backgroundColor:
                        currentChoice === false ? '#dc2626' : '#ffffff',
                      color: currentChoice === false ? '#ffffff' : 'var(--color-navy-800)',
                      cursor: 'pointer',
                    }}
                  >
                    {isEn ? 'False (✗)' : 'خطأ (✗)'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
