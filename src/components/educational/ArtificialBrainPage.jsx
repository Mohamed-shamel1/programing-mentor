import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import PerceptronDiagram from '../visuals/PerceptronDiagram.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * ArtificialBrainPage (Lesson 1-2, Page 04)
 * Topic: معمارية العقل الاصطناعي: تشريح الشبكة العصبية ونموذج الخلية (Perceptron)
 * Scope: 3-Layer ANN Topology (Input, Hidden, Output), Perceptron Mathematical Formulation (X·W + b ➔ φ ➔ Y), Iterative Weight Adjustment
 */
export default function ArtificialBrainPage({
  topicRibbon,
  inquiry,
  annLayers,
  trainingExplanation,
  quickCheck,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultTopicRibbon = {
    number: '04',
    unitTitle: isEn ? 'Unit 1: Computing & AI Fundamentals' : 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    lessonCode: isEn ? 'Lesson 1-2' : 'الدرس 1-2',
    subBadge: isEn ? 'ANN Architecture & Weights' : 'معمارية الشبكات العصبية وسر الأوزان',
    title: isEn
      ? 'The Artificial Brain Architecture: Neural Network Layers & The Perceptron Model'
      : 'معمارية العقل الاصطناعي: تشريح الشبكة العصبية ونموذج الخلية (Perceptron)',
    chapterTag: 'CH-01 // PAGE 04',
  };
  const finalTopicRibbon = topicRibbon || defaultTopicRibbon;

  const finalInquiry = inquiry || {
    badge: isEn ? 'Architectural Inquiry' : 'تساؤل هندسي بنيوي',
    codeTag: 'Q-NEURAL',
    question: isEn
      ? '"How can silicon chips mimic biological brain synapses, and how does tweaking numerical weights teach a machine to perceive?"'
      : '"كيف تحاكي رقائق السيليكون المشابك العصبية في الدماغ البشري؟ وما هو سر تعديل الأوزان الرقمية الذي يعلّم الآلة الإدراك؟"',
    hint: isEn
      ? 'The artificial neuron does not understand feelings; it is an elegant mathematical calculator computing weighted sums and activation thresholds.'
      : 'الخلية العصبية الاصطناعية لا تفهم المشاعر؛ بل هي حاسبة رياضية عبقرية تحسب مجاميع موزونة وتختبر عتبات التنشيط.',
  };

  const finalAnnLayers = annLayers || [
    {
      id: 'input-layer',
      num: '01',
      titleAr: 'طبقة المدخلات (Input Layer)',
      titleEn: 'Input Layer',
      icon: 'login',
      color: 'cobalt',
      bgHeader: 'var(--color-cobalt-50)',
      borderColor: 'var(--color-cobalt-200)',
      descAr: 'تستقبل البيانات الخام كقيم رقمية (مثل قيم سطوع البكسلات في الصورة أو ترددات الموجات الصوتية).',
      descEn: 'Receives raw digitized signals (e.g. grayscale pixel brightness values 0-255 or audio wave frequencies).',
    },
    {
      id: 'hidden-layers',
      num: '02',
      titleAr: 'الطبقات الخفية (Hidden Layers)',
      titleEn: 'Hidden Layers (Deep)',
      icon: 'schema',
      color: 'teal',
      bgHeader: 'var(--color-teal-50)',
      borderColor: 'var(--color-teal-200)',
      descAr: 'قلب المعالجة؛ تستخرج الميزات التجريدية تدريجياً: الطبقات الأولى تكتشف الحواف، والوسطى ترصد الأشكال، والعميقة تتعرف على الوجوه.',
      descEn: 'Core engine; progressively extracts latent features: early layers detect edges, middle detect textures, deep layers resolve whole faces.',
    },
    {
      id: 'output-layer',
      num: '03',
      titleAr: 'طبقة المخرجات (Output Layer)',
      titleEn: 'Output Layer',
      icon: 'logout',
      color: 'amber',
      bgHeader: '#fffbeb',
      borderColor: '#fde68a',
      descAr: 'تنتج القرار أو التوقع النهائي (مثل: احتمالية 95% أن الصورة قطة، أو تحديد مسار فرامل السيارة الذاتية).',
      descEn: 'Generates final class decision or regression output (e.g., 95% probability of "cat", or steering torque degree).',
    },
  ];

  const finalTraining = trainingExplanation || {
    title: isEn ? 'The Secret of Learning: Iterative Weight Adjustment' : 'سر التعلم الآلي: التعديل التكراري للأوزان ودالة الخسارة',
    codeTag: 'LOSS MINIMIZATION',
    leadAr: 'في بداية التدريب، تكون الأوزان (Weights) عشوائية فيكون تخمين النظام خاطئاً. عبر حساب دالة الخسارة (Loss Function)، يرسل النظام إشارة خطأ عكسية (Backpropagation) لتعديل الأوزان تدريجياً حتى تنخفض نسبة الخطأ لأقل حد ممكن.',
    leadEn: 'At initialization, synaptic weights are randomized, yielding poor guesses. By computing a Loss Function, error signals propagate backwards to iteratively calibrate weights until predictions converge on peak accuracy.',
  };

  const finalQuickCheck = quickCheck || {
    title: isEn ? 'Perceptron Concept Mastery' : 'تقييم الفهم الفوري لمعمارية الخلية',
    questions: [
      {
        id: 'q1',
        textAr: 'الوزن الرقمي (Weight) في الخلية العصبية يحدد مدى أهمية المدخل في اتخاذ القرار النهائي.',
        textEn: 'Synaptic Weight (W) dictates the relative importance of that specific input in reaching the final decision.',
        correct: true,
        explanationAr: 'صحيح (✓): كلما زاد الوزن W لمدخل معين، زاد تأثيره المباشر في دفع الخلية لتجاوز عتبة التنشيط.',
        explanationEn: 'Correct (✓): Higher weights grant that feature greater mathematical influence over the threshold activation.',
      },
      {
        id: 'q2',
        textAr: 'تحتاج الشبكة العصبية لتدخل بشري لتعديل كل وزن رقمي يدوياً بعد كل تجربة تدريب.',
        textEn: 'A neural network requires human engineers to manually modify each weight after every single training run.',
        correct: false,
        explanationAr: 'خطأ (✗): يتم تعديل الأوزان تلقائياً عبر خوارزميات التدريب الرياضية ودوال تقليل الخسارة دون تدخل يدوي.',
        explanationEn: 'False (✗): Weights are autonomously optimized mathematically via gradient algorithms without manual intervention.',
      },
    ],
  };

  const [userAnswers, setUserAnswers] = useState({});

  const handleToggleAnswer = (qId, choice) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: choice }));
  };

  return (
    <div
      className="educational-page artificial-brain-page"
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
          backgroundColor: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderInlineStart: '4px solid var(--color-cobalt-600)',
          borderRadius: 'var(--radius-sm)',
          padding: '6px 10px',
        }}
      >
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            border: '1px solid #93c5fd',
          }}
        >
          <Icon name="psychology" size={18} color="var(--color-cobalt-700)" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
            <span
              className="font-heading"
              style={{
                fontSize: '10px',
                fontWeight: 'bold',
                color: 'var(--color-cobalt-800)',
                backgroundColor: 'rgba(37, 99, 235, 0.12)',
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

      {/* 3. Section 1: 3-Layer ANN Topology */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '6px',
        }}
      >
        {finalAnnLayers.map((layer) => (
          <div
            key={layer.id}
            style={{
              backgroundColor: '#ffffff',
              border: `1.5px solid ${layer.borderColor}`,
              borderRadius: 'var(--radius-sm)',
              boxShadow: 'var(--shadow-2xs)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                backgroundColor: layer.bgHeader,
                padding: '5px 8px',
                borderBottom: `1px solid ${layer.borderColor}`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Icon name={layer.icon} size={15} color="var(--color-navy-900)" />
                <strong
                  className="font-heading"
                  style={{ fontSize: '11px', color: 'var(--color-navy-950)' }}
                >
                  {isEn ? layer.titleEn : layer.titleAr}
                </strong>
              </div>
              <span
                style={{
                  fontSize: '9px',
                  fontFamily: 'var(--font-code)',
                  fontWeight: 'bold',
                  color: 'var(--color-neutral-600)',
                  backgroundColor: '#ffffff',
                  padding: '1px 5px',
                  borderRadius: '2px',
                  border: `1px solid ${layer.borderColor}`,
                }}
              >
                LAYER {layer.num}
              </span>
            </div>

            <div style={{ padding: '6px 8px' }}>
              <p style={{ fontSize: '10.5px', color: 'var(--color-navy-900)', margin: 0, lineHeight: 1.3 }}>
                {isEn ? layer.descEn : layer.descAr}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 4. Section 2: Interactive Perceptron Mathematical Model */}
      <section
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid var(--color-neutral-200)',
          borderRadius: 'var(--radius-sm)',
          padding: '6px 10px',
          boxShadow: 'var(--shadow-2xs)',
        }}
      >
        <PerceptronDiagram />
      </section>

      {/* 5. Section 3: Training & Iterative Weight Adjustment */}
      <section
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid var(--color-neutral-200)',
          borderInlineStart: '4px solid var(--color-teal-600)',
          borderRadius: 'var(--radius-sm)',
          padding: '6px 10px',
          boxShadow: 'var(--shadow-2xs)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="tune" size={15} color="var(--color-teal-700)" />
            <strong className="font-heading" style={{ fontSize: '11.5px', color: 'var(--color-navy-950)' }}>
              {finalTraining.title}
            </strong>
          </div>
          <span style={{ fontSize: '9px', fontFamily: 'var(--font-code)', color: 'var(--color-teal-800)', backgroundColor: 'var(--color-teal-50)', padding: '1px 5px', borderRadius: '3px' }}>
            {finalTraining.codeTag}
          </span>
        </div>
        <p style={{ fontSize: '10.5px', color: 'var(--color-navy-900)', margin: 0, lineHeight: 1.3 }}>
          {isEn ? finalTraining.leadEn : finalTraining.leadAr}
        </p>
      </section>

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
            PERCEPTRON DRILL
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
