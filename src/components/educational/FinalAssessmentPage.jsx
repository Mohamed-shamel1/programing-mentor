import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * FinalAssessmentPage (Lesson 1-2, Page 10)
 * Topic: التحدي الختامي وبنك الأسئلة التقييمي المعياري
 * Scope:
 *   1. 6 Curated High-Order Formative Challenges (2 MCQ, 2 T/F with justification, 2 Architecture Decisions)
 *   2. Interactive Assessment Engine with live scoring & instant rationale
 *   3. Direct Gateway CTA to the Official Comprehensive Student Exam Portal
 */
export default function FinalAssessmentPage({
  topicRibbon,
  inquiry,
  assessmentItems,
  onOpenExam,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultTopicRibbon = {
    number: '10',
    unitTitle: isEn ? 'Unit 1: Computing & AI Fundamentals' : 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    lessonCode: isEn ? 'Lesson 1-2' : 'الدرس 1-2',
    subBadge: isEn ? 'Final Challenge & Assessment' : 'التحدي الختامي وبنك الأسئلة',
    title: isEn
      ? 'Standard Formative Assessment Bank & Capstone Challenge'
      : 'التحدي الختامي وبنك الأسئلة التقييمي المعياري',
    chapterTag: 'CH-01 // PAGE 10',
  };
  const finalTopicRibbon = topicRibbon || defaultTopicRibbon;

  const finalInquiry = inquiry || {
    badge: isEn ? 'Final Mastery Gauge' : 'مقياس الإتقان النهائي',
    codeTag: 'CAPSTONE-ASSESSMENT',
    question: isEn
      ? '"Have you acquired the architectural vision and critical depth to evaluate AI tiers, perceptron mechanics, and hallucination risks?"'
      : '"هل اكتسبت الرؤية المعمارية والعمق النقدي للتمييز بين مستويات الذكاء الاصطناعي وهندسة البيرسبترون ومخاطر الهلوسة؟"',
    hint: isEn
      ? 'Tackle the 6 assessment challenges below to verify your conceptual mastery before embarking on the comprehensive exam.'
      : 'خُض التحديات التقييمية الستة التالية لاختبار فهمك النظري والتطبيقي، ثم انطلق لخوض الاختبار الإلكتروني الشامل.',
  };

  const finalItems = assessmentItems || [
    {
      id: 'q1',
      num: '01',
      type: 'mcq',
      badgeAr: 'اختيار من متعدد • الفئات',
      badgeEn: 'MCQ • Hierarchy',
      questionAr: 'أيّ من العلاقات الرياضية التالية تُمثل التدرج الهيكلي الصحيح لمفاهيم الذكاء الاصطناعي؟',
      questionEn: 'Which mathematical relation correctly represents the nested architectural hierarchy of AI concepts?',
      options: [
        { id: 'A', textAr: 'DL ⊃ ML ⊃ AI ⊃ GenAI', textEn: 'DL ⊃ ML ⊃ AI ⊃ GenAI' },
        { id: 'B', textAr: 'AI ⊃ ML ⊃ DL ⊃ GenAI', textEn: 'AI ⊃ ML ⊃ DL ⊃ GenAI' },
        { id: 'C', textAr: 'GenAI ⊃ AI ⊃ ML ⊃ DL', textEn: 'GenAI ⊃ AI ⊃ ML ⊃ DL' },
        { id: 'D', textAr: 'ML ⊃ AI ⊃ DL ⊃ GenAI', textEn: 'ML ⊃ AI ⊃ DL ⊃ GenAI' },
      ],
      correctAnswer: 'B',
      explanationAr: 'صحيح (B): AI هي المظلة الشاملة الكبرى، تضم بداخلها ML، الذي يضم بدوره DL، وبداخله GenAI كنماذج توليدية حديثة.',
      explanationEn: 'Correct (B): AI is the broadest umbrella, encapsulating ML, which encapsulates DL, which encapsulates GenAI.',
    },
    {
      id: 'q2',
      num: '02',
      type: 'mcq',
      badgeAr: 'اختيار من متعدد • النقلة الفلسفية',
      badgeEn: 'MCQ • Paradigm Shift',
      questionAr: 'في نمط تعلم الآلة، ما هي المدخلات التي تُغذى لخوارزمية التدريب لاستخلاص القواعد؟',
      questionEn: 'In the Machine Learning paradigm, what inputs are fed to the training engine to synthesize rules?',
      options: [
        { id: 'A', textAr: 'القواعد والتعليمات الشرطية الصريحة فقط', textEn: 'Deterministic conditional rules only' },
        { id: 'B', textAr: 'البيانات الخام والنتائج المطلوبة (Data + Outputs)', textEn: 'Raw Data + Expected Outputs (Answers)' },
        { id: 'C', textAr: 'المترجمات البرمجية دون بيانات سابقة', textEn: 'Code compilers without historical data' },
        { id: 'D', textAr: 'قواعد حتمية ومخرجات عشوائية', textEn: 'Static formulas and randomized outputs' },
      ],
      correctAnswer: 'B',
      explanationAr: 'صحيح (B): فلسفة تعلم الآلة تعتمد على تغذية الخوارزمية بالبيانات والنتائج، لتقوم هي باستخلاص القواعد والأنماط رياضياً.',
      explanationEn: 'Correct (B): Machine Learning inverts programming by taking Data + Answers as input to synthesize the underlying rules.',
    },
    {
      id: 'q3',
      num: '03',
      type: 'tf',
      badgeAr: 'صح أم خطأ • البيرسبترون',
      badgeEn: 'True/False • Perceptron',
      questionAr: 'في الخلية العصبية الاصطناعية، الوزن W ذو القيمة الأعلى يعني أن مدخله يمتلك تأثيراً أكبر في القرار النهائي.',
      questionEn: 'In an artificial perceptron, a synaptic weight W with higher numerical value grants its input greater influence on the final output.',
      correctValue: true,
      explanationAr: 'صحيح (✓): الوزن W هو معامل رياضي يحدد الأهمية النسبية للمدخل في تجاوز عتبة التنشيط.',
      explanationEn: 'Correct (✓): Synaptic weight W scales the relative contribution of that input towards firing the activation threshold.',
    },
    {
      id: 'q4',
      num: '04',
      type: 'tf',
      badgeAr: 'صح أم خطأ • معضلة الهلوسة',
      badgeEn: 'True/False • Hallucination',
      questionAr: 'إذا صاغ نموذج ذكي إجابة لغوية بليغة بنبرة واثقة، فإن ذلك يُعد دليلاً قاطعاً على صحتها العلمية وتوثيقها.',
      questionEn: 'If an LLM synthesizes an answer with eloquent prose and confident phrasing, its factual truth is conclusively proven.',
      correctValue: false,
      explanationAr: 'خطأ (✗): الفصاحة اللغوية تعكس تدريباً على احتمالات الكلمات، ولا تعني بالضرورة الصدق الواقعي (قد تكون هلوسة كاملة).',
      explanationEn: 'False (✗): Fluency reflects linguistic next-token probability, never verifiable ground-truth factual correctness.',
    },
    {
      id: 'q5',
      num: '05',
      type: 'scenario',
      badgeAr: 'سيناريو هندسي • قرار معماري',
      badgeEn: 'Architecture Scenario',
      questionAr: 'بناء نظام بنكي لحساب ضريبة الدخل وفوائد القروض وفق قوانين حكومية صارمة 100%: ما النمط المناسب؟',
      questionEn: 'Developing a banking system computing statutory income tax and loan interest strictly adhering to law: which paradigm to deploy?',
      options: [
        { id: 'trad', textAr: 'البرمجة التقليدية (الحتمية)', textEn: 'Traditional Deterministic Programming' },
        { id: 'ml', textAr: 'تعلم الآلة والشبكات العميقة', textEn: 'Deep Learning & Neural Networks' },
      ],
      correctAnswer: 'trad',
      explanationAr: 'صحيح: القوانين الضريبية معادلات رياضية قانونية قطعية لا تقبل الاحتمالات أو الخطأ الإحصائي، لذا تتطلب برمجة تقليدية حتمية.',
      explanationEn: 'Correct: Tax formulas are deterministic statutory rules requiring 100% exact precision, unsuited for probabilistic inference.',
    },
    {
      id: 'q6',
      num: '06',
      type: 'scenario',
      badgeAr: 'سيناريو مدرسي • الميثاق الأخلاقي',
      badgeEn: 'Ethics Scenario',
      questionAr: 'طالب استعان بـ AI لعصف ذهني واقتراح أفكار لبحثه، ثم صاغ البحث بنفسه ووثّق استشارته للأداة في الهامش: ما تقييم هذا الاستخدام؟',
      questionEn: 'A student brainstormed ideas with AI, authored the research paper independently, and cited the AI brainstorm in the bibliography: verdict?',
      options: [
        { id: 'ok', textAr: 'استخدام متوافق ونزيه 100% مع الميثاق', textEn: 'Fully Compliant & Ethical (Exemplary)' },
        { id: 'cheat', textAr: 'انتحال أدبي وغش محظور', textEn: 'Prohibited Plagiarism & Cheating' },
      ],
      correctAnswer: 'ok',
      explanationAr: 'صحيح: هذا الاستخدام يحقق الشفافية التامة والإفصاح في الهامش ويوظف الأداة كشريك حوار لا كبديل عن الجهد البشري الأصيل.',
      explanationEn: 'Correct: Exemplary practice fulfilling transparent citation and engaging AI as a cognitive partner without ghostwriting.',
    },
  ];

  const [userChoices, setUserChoices] = useState({});

  const handleSelect = (qId, choice) => {
    setUserChoices((prev) => ({ ...prev, [qId]: choice }));
  };

  const answeredCount = Object.keys(userChoices).length;
  const score = finalItems.reduce((acc, item) => {
    const choice = userChoices[item.id];
    if (choice === undefined) return acc;
    if (item.type === 'tf') {
      return choice === item.correctValue ? acc + 1 : acc;
    }
    return choice === item.correctAnswer ? acc + 1 : acc;
  }, 0);

  return (
    <div className="final-assessment-page educational-page" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      {/* 1. TOPIC RIBBON */}
      <section className="topic-ribbon-card" style={{ padding: '8px 14px', backgroundColor: 'var(--color-navy-900)', borderRadius: 'var(--radius-sm)', borderInlineStart: '4px solid var(--color-amber-400)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ backgroundColor: 'var(--color-amber-500)', color: '#000000', padding: '2px 8px', borderRadius: 'var(--radius-xs)', fontSize: '10.5px', fontWeight: 'bold', fontFamily: 'var(--font-code)' }}>
              {finalTopicRibbon.number}
            </span>
            <span style={{ color: 'var(--color-amber-400)', fontSize: '11px', fontWeight: 'bold' }}>
              {finalTopicRibbon.subBadge}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10.5px' }}>|</span>
            <h1 style={{ color: '#ffffff', fontSize: '13px', margin: 0, fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>
              {finalTopicRibbon.title}
            </h1>
          </div>
          <span style={{ color: 'var(--color-navy-400)', fontSize: '10px', fontFamily: 'var(--font-code)' }}>
            {finalTopicRibbon.chapterTag}
          </span>
        </div>
      </section>

      {/* 2. INQUIRY BOX & SCORE BADGE */}
      <section className="inquiry-card" style={{ padding: '8px 12px', backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', flex: 1 }}>
          <div style={{ backgroundColor: '#fef3c7', padding: '4px', borderRadius: '50%', color: '#d97706', display: 'flex' }}>
            <Icon name="quiz" size={16} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{ fontSize: '10.5px', fontWeight: 'bold', color: '#b45309' }}>{finalInquiry.badge}</span>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-code)', backgroundColor: '#fde68a', padding: '1px 5px', borderRadius: '2px', color: '#78350f' }}>{finalInquiry.codeTag}</span>
            </div>
            <p style={{ margin: '0 0 2px', fontSize: '11.5px', fontWeight: 'bold', color: '#78350f', lineHeight: 1.35 }}>
              {finalInquiry.question}
            </p>
            <p style={{ margin: 0, fontSize: '10px', color: '#92400e', lineHeight: 1.25 }}>
              {finalInquiry.hint}
            </p>
          </div>
        </div>

        {/* Live Score Counter */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #fde68a', borderRadius: '4px', padding: '4px 10px', textAlign: 'center', minWidth: '85px' }}>
          <span style={{ fontSize: '9px', color: '#78350f', fontWeight: 'bold' }}>{isEn ? 'Your Score' : 'مجموع إجاباتك'}</span>
          <div style={{ fontSize: '15px', fontWeight: 'bold', color: score === 6 ? '#16a34a' : 'var(--color-navy-950)', fontFamily: 'var(--font-code)' }}>
            {score} / 6
          </div>
        </div>
      </section>

      {/* 3. 6-QUESTION FORMATIVE GRID (2 COLUMNS x 3 ROWS) */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
        {finalItems.map((item) => {
          const userChoice = userChoices[item.id];
          const isAnswered = userChoice !== undefined;
          let isCorrect = false;
          if (isAnswered) {
            isCorrect = item.type === 'tf' ? userChoice === item.correctValue : userChoice === item.correctAnswer;
          }

          return (
            <div
              key={item.id}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-navy-200)',
                borderRadius: '4px',
                padding: '7px 9px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                boxShadow: 'var(--shadow-xs)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ backgroundColor: 'var(--color-navy-900)', color: '#ffffff', fontSize: '9px', fontWeight: 'bold', padding: '1px 5px', borderRadius: '2px', fontFamily: 'var(--font-code)' }}>
                  {item.num}
                </span>
                <span style={{ fontSize: '9.5px', color: 'var(--color-cobalt-700)', fontWeight: 'bold' }}>
                  {isEn ? item.badgeEn : item.badgeAr}
                </span>
              </div>

              <p style={{ margin: 0, fontSize: '10.5px', fontWeight: 'bold', color: 'var(--color-navy-950)', lineHeight: 1.3 }}>
                {isEn ? item.questionEn : item.questionAr}
              </p>

              {/* Options rendering by type */}
              {item.type === 'mcq' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px' }}>
                  {item.options.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelect(item.id, opt.id)}
                      style={{
                        padding: '3px 6px',
                        fontSize: '9.5px',
                        textAlign: isEn ? 'left' : 'right',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        border: userChoice === opt.id ? '1px solid var(--color-cobalt-600)' : '1px solid var(--color-navy-200)',
                        backgroundColor: userChoice === opt.id ? 'var(--color-cobalt-50)' : '#f8fafc',
                        color: userChoice === opt.id ? 'var(--color-cobalt-900)' : 'var(--color-navy-800)',
                        fontWeight: userChoice === opt.id ? 'bold' : 'normal',
                      }}
                    >
                      <strong>{opt.id}.</strong> {isEn ? opt.textEn : opt.textAr}
                    </button>
                  ))}
                </div>
              )}

              {item.type === 'tf' && (
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    type="button"
                    onClick={() => handleSelect(item.id, true)}
                    style={{
                      flex: 1,
                      padding: '3px 6px',
                      fontSize: '9.5px',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      border: userChoice === true ? '1px solid #16a34a' : '1px solid var(--color-navy-200)',
                      backgroundColor: userChoice === true ? '#dcfce7' : '#f8fafc',
                      color: userChoice === true ? '#166534' : 'var(--color-navy-800)',
                      fontWeight: userChoice === true ? 'bold' : 'normal',
                    }}
                  >
                    {isEn ? 'True (✓)' : 'صحيح (✓)'}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelect(item.id, false)}
                    style={{
                      flex: 1,
                      padding: '3px 6px',
                      fontSize: '9.5px',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      border: userChoice === false ? '1px solid #dc2626' : '1px solid var(--color-navy-200)',
                      backgroundColor: userChoice === false ? '#fee2e2' : '#f8fafc',
                      color: userChoice === false ? '#991b1b' : 'var(--color-navy-800)',
                      fontWeight: userChoice === false ? 'bold' : 'normal',
                    }}
                  >
                    {isEn ? 'False (✗)' : 'خطأ (✗)'}
                  </button>
                </div>
              )}

              {item.type === 'scenario' && (
                <div style={{ display: 'flex', gap: '6px' }}>
                  {item.options.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelect(item.id, opt.id)}
                      style={{
                        flex: 1,
                        padding: '3px 6px',
                        fontSize: '9.5px',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        border: userChoice === opt.id ? '1px solid var(--color-teal-600)' : '1px solid var(--color-navy-200)',
                        backgroundColor: userChoice === opt.id ? '#ccfbf1' : '#f8fafc',
                        color: userChoice === opt.id ? '#0f766e' : 'var(--color-navy-800)',
                        fontWeight: userChoice === opt.id ? 'bold' : 'normal',
                      }}
                    >
                      {isEn ? opt.textEn : opt.textAr}
                    </button>
                  ))}
                </div>
              )}

              {/* Instant feedback explanation */}
              {isAnswered && (
                <div
                  style={{
                    fontSize: '9.5px',
                    padding: '4px 6px',
                    borderRadius: '3px',
                    backgroundColor: isCorrect ? '#f0fdf4' : '#fef2f2',
                    color: isCorrect ? '#166534' : '#991b1b',
                    border: isCorrect ? '1px solid #bbf7d0' : '1px solid #fecaca',
                    lineHeight: 1.3,
                  }}
                >
                  {isEn ? item.explanationEn : item.explanationAr}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* 4. GATEWAY CTA BANNER TO FULL OFFICIAL EXAM */}
      <section
        style={{
          backgroundColor: 'var(--color-navy-950)',
          borderRadius: 'var(--radius-sm)',
          padding: '10px 14px',
          border: '1px solid var(--color-navy-800)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ backgroundColor: 'var(--color-cobalt-600)', padding: '6px', borderRadius: '50%', color: '#ffffff', display: 'flex' }}>
            <Icon name="assignment" size={20} />
          </div>
          <div>
            <h3 style={{ margin: '0 0 2px', fontSize: '12px', fontWeight: 'bold', color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
              {isEn ? 'Official Comprehensive Student Examination (Lesson 1-2)' : 'الاختبار الإلكتروني الشامل والتقييم النهائي (الدرس 1-2)'}
            </h3>
            <p style={{ margin: 0, fontSize: '10px', color: 'var(--color-navy-300)' }}>
              {isEn
                ? 'Standard Ministry-grade assessment: 20 auto-graded items + Socratic reasoning rubrics + immediate certificate generation.'
                : 'بنك أسئلة معياري مطابق لمواصفات وزارة التربية والتعليم: تصحيح تلقائي فوري + تقييم مقالي معتمد.'}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            if (onOpenExam) {
              onOpenExam();
            } else if (typeof window !== 'undefined') {
              window.location.hash = '#exam-1-2';
              window.location.reload();
            }
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'var(--color-cobalt-600)',
            color: '#ffffff',
            border: 'none',
            borderRadius: 'var(--radius-xs)',
            padding: '6px 14px',
            fontSize: '11px',
            fontWeight: 'bold',
            fontFamily: 'var(--font-heading)',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <span>{isEn ? 'Launch Official Exam ➔' : 'بدء الاختبار الإلكتروني الشامل ➔'}</span>
        </button>
      </section>
    </div>
  );
}
