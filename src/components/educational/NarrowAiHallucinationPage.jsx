import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import NextTokenInferenceVisual from '../visuals/NextTokenInferenceVisual.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * NarrowAiHallucinationPage (Lesson 1-2, Page 05)
 * Topic: واقع الأنظمة الحالية: حدود الذكاء الاصطناعي الضيق ومعضلة الهلوسة
 * Scope: Narrow AI (ANI) vs AGI myths, Next-Token Probabilistic Inference, Hallucination Root Causes, Academic Verification Lab
 */
export default function NarrowAiHallucinationPage({
  topicRibbon,
  inquiry,
  narrowVsGeneral,
  hallucinationDefinition,
  stopAndThink,
  quickCheck,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultTopicRibbon = {
    number: '05',
    unitTitle: isEn ? 'Unit 1: Computing & AI Fundamentals' : 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    lessonCode: isEn ? 'Lesson 1-2' : 'الدرس 1-2',
    subBadge: isEn ? 'Narrow AI & Hallucination' : 'الذكاء الضيق وسر الهلوسة',
    title: isEn
      ? 'Current AI Reality: Narrow AI Boundaries & The Hallucination Dilemma'
      : 'واقع الأنظمة الحالية: حدود الذكاء الاصطناعي الضيق ومعضلة الهلوسة',
    chapterTag: 'CH-01 // PAGE 05',
  };
  const finalTopicRibbon = topicRibbon || defaultTopicRibbon;

  const finalInquiry = inquiry || {
    badge: isEn ? 'Epistemological Inquiry' : 'تساؤل معرفي جوهري',
    codeTag: 'Q-HALLUCINATE',
    question: isEn
      ? '"Why does ChatGPT fabricate non-existent facts with supreme confidence? Does it possess factual comprehension or merely statistical fluency?"'
      : '"لماذا يخترع ChatGPT وقائع ومعلومات وهمية بثقة مفرطة ونبرة بليغة؟ وهل يفهم الحاسوب حقاً ما يكتبه أم أنه مجرد متنبئ إحصائي؟"',
    hint: isEn
      ? 'Language models lack encyclopedic fact databases; they are statistical probability engines designed to predict plausible text continuations.'
      : 'النماذج اللغوية لا تمتلك قاعدة بيانات للحقائق؛ بل هي محركات احتمالية إحصائية مصممة لتخمين تسلسل الكلمات الأكثر رنيناً وتوافقاً.',
  };

  const finalNarrowVsGeneral = narrowVsGeneral || {
    title: isEn ? 'Narrow AI (ANI) vs General AI (AGI) Myths' : 'الذكاء الاصطناعي الضيق (Narrow AI) مقابل خرافات الذكاء العام',
    codeTag: 'ANI vs AGI',
    narrowTitleAr: 'الواقع الحالي: الذكاء الاصطناعي الضيق (Narrow AI)',
    narrowTitleEn: 'Current Reality: Artificial Narrow Intelligence (ANI)',
    narrowDescAr: 'أنظمة متفوقة برمجياً في أداء مهمة واحدة محددة (مثل لعب الشطرنج، أو القيادة، أو صياغة النصوص)، لكنها تفتقر تماماً للإدراك العام أو الوعي البشري.',
    narrowDescEn: 'Systems engineered to master a single discrete task (chess, perception, text synthesis) with zero general consciousness or transfer understanding.',
    generalTitleAr: 'الخيال المستقبلي: الذكاء العام (AGI)',
    generalTitleEn: 'Hypothetical Horizon: Artificial General Intelligence (AGI)',
    generalDescAr: 'نظام نظري يحاكي الإدراك البشري الشامل في كافة المجالات العلمية والعاطفية؛ وهو غير موجود علمياً حتى الآن وما زال في طور الأبحاث.',
    generalDescEn: 'A theoretical system capable of matching human cognitive depth across any domain; strictly non-existent today despite media hyperbole.',
  };

  const finalHallucination = hallucinationDefinition || {
    title: isEn ? 'What is AI Hallucination?' : 'ما هي الهلوسة (Hallucination) ولماذا تحدث؟',
    codeTag: 'CONFIDENT FABRICATION',
    textAr: 'الهلوسة هي قيام النموذج بتوليد إجابات ومعلومات تبدو صحيحة ومقنعة لغوياً بنسبة 100%، لكنها في الحقيقة غير صحيحة، أو مختلقة كلياً، أو تنسب معلومات حقيقية لأشخاص وقضايا وهمية.',
    textEn: 'AI Hallucination is when an LLM produces outputs that appear syntactically flawless and authoritative, yet are factually false, completely fabricated, or falsely attributed to real entities.',
  };

  const finalStopAndThink = stopAndThink || {
    badge: isEn ? 'Stop & Think • Academic Integrity Lab' : 'توقف وفكّر • معمل النزاهة الأكاديمية',
    subBadge: isEn ? 'Critical Verification' : 'التحقق النقدي الصارم',
    question: isEn
      ? 'Why is citing ChatGPT directly as a primary factual reference strictly banned in scientific journals and university theses?'
      : 'لماذا يُحظر الاستشهاد بـ ChatGPT كمرجع علمي مباشر في رسائل الماجستير والدوريات الأكاديمية الرصينة؟',
    answer: isEn
      ? 'Scientific Rationale: Because ChatGPT is a generative statistical model, not a peer-reviewed repository of truth. It cannot be held legally or scientifically accountable for fabricated citations. Researchers must trace facts back to verified primary sources (scholarly peer-reviewed papers).'
      : 'التعليل العلمي الحاسم: لأن النماذج التوليدية تولد نصوصاً احتمالية وقد تخترع مراجع وأبحاثاً وهمية دون قصد؛ لذا يجب دوماً الرجوع للأصول العلمية الموثقة في الدوريات المحكمة وبنك المعرفة المصري، والتعامل مع الذكاء الاصطناعي كمساعد صياغة لا كمصدر حقيقة.',
  };

  const finalQuickCheck = quickCheck || {
    title: isEn ? 'Hallucination & Narrow AI Quick Check' : 'تقييم الفهم الفوري لمعضلة الهلوسة',
    questions: [
      {
        id: 'q1',
        textAr: 'عندما يكتب الذكاء الاصطناعي إجابة بنبرة واثقة، فهذا يضمن صحتها العلمية بنسبة 100%.',
        textEn: 'When an AI model responds with supreme confidence and eloquent grammar, its factual accuracy is 100% guaranteed.',
        correct: false,
        explanationAr: 'خطأ (✗): الفصاحة اللغوية لا تعني الصحة العلمية؛ فالنموذج يحسب احتمالات لغوية وقد يهلوس بمعلومات مزيفة بنفس النبرة الواثقة.',
        explanationEn: 'False (✗): Grammatical fluency never equates to truth; statistical word prediction easily hallucinates false data with confident prose.',
      },
      {
        id: 'q2',
        textAr: 'تُصنف كافة أنظمة الذكاء الاصطناعي العاملة في العالم اليوم كذكاء اصطناعي ضيق (Narrow AI).',
        textEn: 'All artificial intelligence systems operating in the world today are classified as Narrow AI (ANI).',
        correct: true,
        explanationAr: 'صحيح (✓): كل الأنظمة الحالية محصورة في تخصصات محددة ولا تملك أياً من خصائص الذكاء العام (AGI).',
        explanationEn: 'Correct (✓): Every modern system is strictly bounded to specialized domains, lacking any human-level general consciousness.',
      },
    ],
  };

  const [userAnswers, setUserAnswers] = useState({});

  const handleToggleAnswer = (qId, choice) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: choice }));
  };

  return (
    <div
      className="educational-page narrow-ai-page"
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
                fontSize: '14.5px',
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
          backgroundColor: '#fef2f2',
          border: '1px solid #fecaca',
          borderInlineStart: '4px solid #dc2626',
          borderRadius: 'var(--radius-sm)',
          padding: '6px 10px',
        }}
      >
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: '#fee2e2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Icon name="warning" size={18} color="#dc2626" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
            <span
              className="font-heading"
              style={{
                fontSize: '10px',
                fontWeight: 'bold',
                color: '#991b1b',
                backgroundColor: '#fee2e2',
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

      {/* 3. Section 1: Narrow AI vs General AI Side-by-Side */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
        {/* Narrow AI Box */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1.5px solid var(--color-teal-200)',
            borderTop: '3px solid var(--color-teal-600)',
            borderRadius: 'var(--radius-sm)',
            padding: '6px 8px',
            boxShadow: 'var(--shadow-2xs)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '3px' }}>
            <Icon name="check_circle" size={15} color="var(--color-teal-600)" />
            <strong className="font-heading" style={{ fontSize: '11px', color: 'var(--color-teal-900)' }}>
              {isEn ? finalNarrowVsGeneral.narrowTitleEn : finalNarrowVsGeneral.narrowTitleAr}
            </strong>
          </div>
          <p style={{ fontSize: '10.5px', color: 'var(--color-navy-900)', margin: 0, lineHeight: 1.3 }}>
            {isEn ? finalNarrowVsGeneral.narrowDescEn : finalNarrowVsGeneral.narrowDescAr}
          </p>
        </div>

        {/* General AI Box */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1.5px solid #cbd5e1',
            borderTop: '3px solid #64748b',
            borderRadius: 'var(--radius-sm)',
            padding: '6px 8px',
            boxShadow: 'var(--shadow-2xs)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '3px' }}>
            <Icon name="help" size={15} color="#64748b" />
            <strong className="font-heading" style={{ fontSize: '11px', color: 'var(--color-navy-950)' }}>
              {isEn ? finalNarrowVsGeneral.generalTitleEn : finalNarrowVsGeneral.generalTitleAr}
            </strong>
          </div>
          <p style={{ fontSize: '10.5px', color: 'var(--color-neutral-700)', margin: 0, lineHeight: 1.3 }}>
            {isEn ? finalNarrowVsGeneral.generalDescEn : finalNarrowVsGeneral.generalDescAr}
          </p>
        </div>
      </div>

      {/* 4. Section 2: Next-Token Inference Visual Engine */}
      <section
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid var(--color-neutral-200)',
          borderRadius: 'var(--radius-sm)',
          padding: '6px 10px',
          boxShadow: 'var(--shadow-2xs)',
        }}
      >
        <NextTokenInferenceVisual />
      </section>

      {/* 5. Section 3: Hallucination Definition & Stop and Think Lab */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6px' }}>
        {/* Hallucination Definition Box */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-neutral-200)',
            borderRadius: 'var(--radius-sm)',
            padding: '6px 8px',
            boxShadow: 'var(--shadow-2xs)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Icon name="error_outline" size={15} color="#dc2626" />
              <strong className="font-heading" style={{ fontSize: '11px', color: '#991b1b' }}>
                {finalHallucination.title}
              </strong>
            </div>
            <span style={{ fontSize: '8.5px', fontFamily: 'var(--font-code)', color: '#dc2626', backgroundColor: '#fee2e2', padding: '1px 5px', borderRadius: '3px' }}>
              {finalHallucination.codeTag}
            </span>
          </div>
          <p style={{ fontSize: '10.5px', color: 'var(--color-navy-900)', margin: 0, lineHeight: 1.3 }}>
            {isEn ? finalHallucination.textEn : finalHallucination.textAr}
          </p>
        </div>

        {/* Academic Integrity Stop & Think */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1.5px solid var(--color-navy-200)',
            borderInlineStart: '4px solid var(--color-navy-800)',
            borderRadius: 'var(--radius-sm)',
            padding: '6px 8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Icon name="verified" size={14} color="var(--color-cobalt-700)" />
                <strong className="font-heading" style={{ fontSize: '11px', color: 'var(--color-navy-950)' }}>
                  {finalStopAndThink.badge}
                </strong>
              </div>
              <span style={{ fontSize: '8.5px', fontFamily: 'var(--font-heading)', color: 'var(--color-navy-700)', backgroundColor: 'var(--color-navy-100)', padding: '1px 5px', borderRadius: '3px' }}>
                {finalStopAndThink.subBadge}
              </span>
            </div>
            <p className="font-heading" style={{ fontSize: '10.5px', fontWeight: 'bold', color: 'var(--color-navy-900)', margin: '0 0 3px 0', lineHeight: 1.25 }}>
              {finalStopAndThink.question}
            </p>
          </div>
          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-navy-200)', borderRadius: 'var(--radius-xs)', padding: '4px 6px', fontSize: '10px', color: 'var(--color-navy-950)', lineHeight: 1.3 }}>
            <strong style={{ color: 'var(--color-cobalt-700)' }}>
              {isEn ? 'Scientific Verdict: ' : 'التحليل والحكم الأكاديمي: '}
            </strong>
            {finalStopAndThink.answer}
          </div>
        </div>
      </div>

      {/* 6. Section 4: Quick Check Assessment */}
      <section
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid var(--color-neutral-200)',
          borderRadius: 'var(--radius-sm)',
          padding: '6px 10px',
          boxShadow: 'var(--shadow-2xs)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="assignment_turned_in" size={15} color="var(--color-cobalt-700)" />
            <strong className="font-heading" style={{ fontSize: '11.5px', color: 'var(--color-navy-950)' }}>
              {finalQuickCheck.title}
            </strong>
          </div>
          <span style={{ fontSize: '9px', color: 'var(--color-neutral-500)', fontFamily: 'var(--font-code)' }}>
            HALLUCINATION DRILL
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
                    ? isCorrect ? '#f0fdf4' : '#fef2f2'
                    : 'var(--color-navy-50)',
                  border: isAnswered
                    ? isCorrect ? '1px solid #bbf7d0' : '1px solid #fecaca'
                    : '1px solid var(--color-navy-200)',
                  borderRadius: 'var(--radius-xs)',
                  padding: '3px 8px',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '11px', color: 'var(--color-navy-900)', fontWeight: '500' }}>
                    {isEn ? q.textEn : q.textAr}
                  </span>
                  {isAnswered && (
                    <div style={{ fontSize: '10px', color: isCorrect ? '#166534' : '#991b1b', marginTop: '1px', fontWeight: 'bold' }}>
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
                      border: currentChoice === true ? '1px solid #16a34a' : '1px solid var(--color-neutral-300)',
                      backgroundColor: currentChoice === true ? '#16a34a' : '#ffffff',
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
                      border: currentChoice === false ? '1px solid #dc2626' : '1px solid var(--color-neutral-300)',
                      backgroundColor: currentChoice === false ? '#dc2626' : '#ffffff',
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
