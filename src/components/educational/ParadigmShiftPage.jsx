import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import ParadigmFlowDiagram from '../visuals/ParadigmFlowDiagram.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * ParadigmShiftPage (Lesson 1-2, Page 03)
 * Topic: النقلة الفلسفية الكبرى: البرمجة التقليدية مقابل تعلم الآلة
 * Scope: Explicit Coding Bottleneck, Dual Flow Diagram, Generalization vs Overfitting, Architectural Decision Matrix
 */
export default function ParadigmShiftPage({
  topicRibbon,
  inquiry,
  bottleneckAnalysis,
  generalizationConcept,
  decisionMatrix,
  scenarioLab,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultTopicRibbon = {
    number: '03',
    unitTitle: isEn ? 'Unit 1: Computing & AI Fundamentals' : 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    lessonCode: isEn ? 'Lesson 1-2' : 'الدرس 1-2',
    subBadge: isEn ? 'The Paradigm Shift' : 'النقلة الفلسفية في التفكير البرمجي',
    title: isEn
      ? 'The Grand Paradigm Shift: Traditional Programming vs Machine Learning'
      : 'النقلة الفلسفية الكبرى: البرمجة التقليدية مقابل تعلم الآلة',
    chapterTag: 'CH-01 // PAGE 03',
  };
  const finalTopicRibbon = topicRibbon || defaultTopicRibbon;

  const finalInquiry = inquiry || {
    badge: isEn ? 'The Billion-Line Paradox' : 'معضلة المليار سطر كود',
    codeTag: 'Q-PARADIGM',
    question: isEn
      ? '"Why did 1980s supercomputers fail to distinguish a cat from a dog using millions of handcoded rules, while a 3-year-old child does it effortlessly in milliseconds?"'
      : '"لماذا عجزت أجهزة السوبر كمبيوتر في الثمانينيات عن التمييز بين قطة وكلب رغم كتابة ملايين الأسطر الشرطية، بينما يفعلها طفل في الثالثة بلمح البصر دون أي جهد؟"',
    hint: isEn
      ? 'The root cause was not computer speed; it was a flawed paradigm: human perception cannot be hardcoded into brittle Boolean conditionals.'
      : 'الخلل لم يكن في سرعة المعالجات، بل في النمط الفلسفي للحل: الإدراك البشري لا يمكن اختزاله في شروط منطقية جامدة (If-Else).',
  };

  const finalBottleneck = bottleneckAnalysis || {
    title: isEn ? 'The Hardcoding Bottleneck & Perception Limits' : 'عنق الزجاجة البرمجي ومأزق القواعد الصلبة',
    codeTag: 'BRITTLE LOGIC',
    textAr: 'في البرمجة التقليدية، إذا واجه البرنامج صورة لقطة مقلوبة أو في إضاءة خافتة لم يتوقعها المبرمج مسبقاً، يفشل النظام تماماً. العالم الواقعي يحوي تريليونات التغيرات الدقيقة في زوايا البكسلات، مما يجعل كتابة قواعد يدوية لكل احتمال أمراً مستحيلاً رياضياً وهندسياً.',
    textEn: 'In traditional programming, encountering an upside-down cat or dim lighting not explicitly foreseen by the programmer triggers total failure. Real-world sensory inputs exhibit infinite variance, rendering manual rule authoring mathematically and practically impossible.',
  };

  const finalGeneralization = generalizationConcept || {
    title: isEn ? 'The Concept of Generalization' : 'مفهوم التعميم (Generalization) مقابل الحفظ الزائد',
    codeTag: 'GENERALIZATION vs OVERFITTING',
    leadAr: 'الهدف الحقيقي لتعلم الآلة ليس حفظ بيانات التدريب، بل "التعميم" على بيانات جديدة لم يرها النموذج قط (Unseen Data).',
    leadEn: 'The true objective of machine learning is never to memorize training rows, but to generalize accurately to novel, unseen data.',
    points: [
      {
        id: 'p1',
        titleAr: 'الحفظ الأعمى (Overfitting):',
        titleEn: 'Overfitting (Memorization):',
        descAr: 'حينما يحفظ النموذج تفاصيل ضوضاء التدريب، فيعطي دقة 100% في المعمل، لكنه يسقط ويفشل في العالم الحقيقي.',
        descEn: 'When a model memorizes idiosyncrasies and noise in the training set, achieving 100% lab score but failing in reality.',
        color: 'error',
      },
      {
        id: 'p2',
        titleAr: 'التعميم الصحي (Healthy Generalization):',
        titleEn: 'True Generalization:',
        descAr: 'استخلاص النمط الجوهري الأساسي الذي يمكّن النظام من التعرف على أي قطة مستقبلية مهما اختلفت فصيلتها أو إضاءتها.',
        descEn: 'Capturing core latent statistical features allowing the model to accurately recognize any new cat under varied conditions.',
        color: 'success',
      },
    ],
  };

  const finalDecisionMatrix = decisionMatrix || {
    title: isEn ? 'Engineering Decision Benchmark: Which to Deploy?' : 'معيار المفاضلة الهندسي: متى نختار كل نمط؟',
    traditionalLabel: isEn ? 'When to use Traditional Programming:' : 'متى نستخدم البرمجة التقليدية (الحتمية)؟',
    traditionalCases: isEn
      ? 'Exact mathematics, banking transactions, payroll calculations, strict tax laws, compliance systems (where rules are 100% deterministic and known).'
      : 'المعاملات المالية والبنكية، حسابات الرواتب والضرائب، العمليات الحسابية الدقيقة، وأنظمة الأمان الصارمة (حيث القواعد محددة وثابتة 100% ولا تحتمل الاحتمال).',
    mlLabel: isEn ? 'When to use Machine Learning (Probabilistic)?' : 'متى نستخدم تعلم الآلة (الاحتمالي)؟',
    mlCases: isEn
      ? 'Perception tasks, facial/speech recognition, autonomous driving, disease diagnosis from scans, personalized recommendations (where rules are too intricate to write).'
      : 'مهام الإدراك الحسي (رؤية الحاسوب والصوت)، القيادة الذاتية، تشخيص الأمراض من الأشعة، التنبؤ بأسعار الأسهم، وأنظمة التوصية (حيث يصعب أو يستحيل صياغة القواعد يدوياً).',
  };

  const finalScenarioLab = scenarioLab || {
    title: isEn ? 'Architectural Decision Lab' : 'معمل القرار المعماري التطبيقي',
    scenarios: [
      {
        id: 's1',
        titleAr: 'السيناريو الأول: حساب ضريبة المبيعات والفاتورة الإلكترونية لمتجر',
        titleEn: 'Scenario 1: Calculating value-added tax & electronic invoicing for a store',
        correctChoice: 'traditional',
        rationaleAr: 'برمجة تقليدية: لأن نسب الضريبة محددة بقانون حكومي صارم وثابت لا يتغير باحتمالات ولا يحتاج لاستخلاص أنماط.',
        rationaleEn: 'Traditional: Because tax percentages are deterministic statutory legal formulas requiring exact precision, not statistical inference.',
      },
      {
        id: 's2',
        titleAr: 'السيناريو الثاني: رصد ومتابعة المشاة ليلاً لفرملة سيارة ذاتية القيادة',
        titleEn: 'Scenario 2: Detecting pedestrians at night to engage autonomous emergency brakes',
        correctChoice: 'ml',
        rationaleAr: 'تعلم الآلة (عميق): لأن المشاة يرتدون ملابس مختلفة ويتخذون أوضاعاً حركية غير متناهية يستحيل كتابة شروط يدوية لها.',
        rationaleEn: 'Machine Learning (Deep): Because human postures, clothing, and night lighting exhibit infinite permutations impossible to hardcode.',
      },
    ],
  };

  const [selectedLabAnswers, setSelectedLabAnswers] = useState({});

  const handleSelectScenario = (sId, choice) => {
    setSelectedLabAnswers((prev) => ({ ...prev, [sId]: choice }));
  };

  return (
    <div
      className="educational-page paradigm-shift-page"
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
          <Icon name="swap_horiz" size={18} color="var(--color-amber-700)" />
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

      {/* 3. Section 1: The Hardcoding Bottleneck */}
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
            <Icon name="rule" size={16} color="var(--color-navy-800)" />
            <strong className="font-heading" style={{ fontSize: '11.5px', color: 'var(--color-navy-950)' }}>
              {finalBottleneck.title}
            </strong>
          </div>
          <span
            className="font-code"
            style={{
              fontSize: '9.5px',
              color: 'var(--color-navy-700)',
              backgroundColor: 'var(--color-navy-100)',
              padding: '1px 5px',
              borderRadius: '3px',
            }}
          >
            {finalBottleneck.codeTag}
          </span>
        </div>
        <p
          style={{
            fontSize: '11px',
            color: 'var(--color-navy-900)',
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {isEn ? finalBottleneck.textEn : finalBottleneck.textAr}
        </p>
      </section>

      {/* 4. Section 2: Visual Side-by-Side Dual Flow Architecture */}
      <section
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid var(--color-neutral-200)',
          borderRadius: 'var(--radius-sm)',
          padding: '6px 10px',
          boxShadow: 'var(--shadow-2xs)',
        }}
      >
        <ParadigmFlowDiagram />
      </section>

      {/* 5. Section 3: Generalization vs Overfitting & Decision Benchmark */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
        {/* Generalization vs Overfitting Box */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-neutral-200)',
            borderRadius: 'var(--radius-sm)',
            padding: '6px 10px',
            boxShadow: 'var(--shadow-2xs)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '4px' }}>
              <Icon name="model_training" size={15} color="var(--color-cobalt-600)" />
              <strong className="font-heading" style={{ fontSize: '11.5px', color: 'var(--color-navy-950)' }}>
                {finalGeneralization.title}
              </strong>
            </div>
            <p style={{ fontSize: '10.5px', color: 'var(--color-neutral-700)', margin: '0 0 6px 0', lineHeight: 1.25 }}>
              {isEn ? finalGeneralization.leadEn : finalGeneralization.leadAr}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {finalGeneralization.points.map((pt) => {
              const isError = pt.color === 'error';
              return (
                <div
                  key={pt.id}
                  style={{
                    backgroundColor: isError ? '#fef2f2' : '#f0fdf4',
                    border: `1px solid ${isError ? '#fecaca' : '#bbf7d0'}`,
                    borderRadius: 'var(--radius-xs)',
                    padding: '4px 6px',
                    fontSize: '10px',
                    lineHeight: 1.25,
                  }}
                >
                  <strong style={{ color: isError ? '#991b1b' : '#166534', display: 'block', marginBottom: '1px' }}>
                    {isEn ? pt.titleEn : pt.titleAr}
                  </strong>
                  <span style={{ color: 'var(--color-navy-900)' }}>
                    {isEn ? pt.descEn : pt.descAr}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engineering Decision Benchmark */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-neutral-200)',
            borderRadius: 'var(--radius-sm)',
            padding: '6px 10px',
            boxShadow: 'var(--shadow-2xs)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '4px' }}>
              <Icon name="balance" size={15} color="var(--color-teal-700)" />
              <strong className="font-heading" style={{ fontSize: '11.5px', color: 'var(--color-navy-950)' }}>
                {finalDecisionMatrix.title}
              </strong>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-navy-50)',
                border: '1px solid var(--color-navy-200)',
                borderRadius: 'var(--radius-xs)',
                padding: '4px 6px',
                marginBottom: '4px',
              }}
            >
              <strong style={{ fontSize: '10px', color: 'var(--color-navy-950)', display: 'block', marginBottom: '1px' }}>
                {finalDecisionMatrix.traditionalLabel}
              </strong>
              <p style={{ fontSize: '10px', color: 'var(--color-neutral-700)', margin: 0, lineHeight: 1.25 }}>
                {finalDecisionMatrix.traditionalCases}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-teal-50)',
                border: '1px solid var(--color-teal-200)',
                borderRadius: 'var(--radius-xs)',
                padding: '4px 6px',
              }}
            >
              <strong style={{ fontSize: '10px', color: 'var(--color-teal-900)', display: 'block', marginBottom: '1px' }}>
                {finalDecisionMatrix.mlLabel}
              </strong>
              <p style={{ fontSize: '10px', color: 'var(--color-teal-950)', margin: 0, lineHeight: 1.25 }}>
                {finalDecisionMatrix.mlCases}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Section 4: Architectural Decision Lab */}
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
            <Icon name="assignment" size={15} color="var(--color-cobalt-700)" />
            <strong className="font-heading" style={{ fontSize: '11.5px', color: 'var(--color-navy-950)' }}>
              {finalScenarioLab.title}
            </strong>
          </div>
          <span style={{ fontSize: '9.5px', color: 'var(--color-neutral-500)', fontFamily: 'var(--font-code)' }}>
            CHOOSE THE CORRECT ARCHITECTURE
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {finalScenarioLab.scenarios.map((sc) => {
            const currentChoice = selectedLabAnswers[sc.id];
            const isAnswered = currentChoice !== undefined;
            const isCorrect = isAnswered && currentChoice === sc.correctChoice;

            return (
              <div
                key={sc.id}
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
                  padding: '4px 8px',
                }}
              >
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '11px', color: 'var(--color-navy-900)', fontWeight: 'bold' }}>
                    {isEn ? sc.titleEn : sc.titleAr}
                  </span>
                  {isAnswered && (
                    <div
                      style={{
                        fontSize: '10px',
                        color: isCorrect ? '#166534' : '#991b1b',
                        marginTop: '2px',
                        fontWeight: 'bold',
                      }}
                    >
                      {isEn ? sc.rationaleEn : sc.rationaleAr}
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                  <button
                    type="button"
                    onClick={() => handleSelectScenario(sc.id, 'traditional')}
                    style={{
                      padding: '2px 8px',
                      fontSize: '10px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 'bold',
                      borderRadius: '3px',
                      border:
                        currentChoice === 'traditional'
                          ? '1px solid var(--color-navy-800)'
                          : '1px solid var(--color-neutral-300)',
                      backgroundColor:
                        currentChoice === 'traditional'
                          ? 'var(--color-navy-800)'
                          : '#ffffff',
                      color: currentChoice === 'traditional' ? '#ffffff' : 'var(--color-navy-800)',
                      cursor: 'pointer',
                    }}
                  >
                    {isEn ? 'Traditional' : 'برمجة تقليدية'}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectScenario(sc.id, 'ml')}
                    style={{
                      padding: '2px 8px',
                      fontSize: '10px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 'bold',
                      borderRadius: '3px',
                      border:
                        currentChoice === 'ml'
                          ? '1px solid var(--color-teal-700)'
                          : '1px solid var(--color-neutral-300)',
                      backgroundColor:
                        currentChoice === 'ml' ? 'var(--color-teal-700)' : '#ffffff',
                      color: currentChoice === 'ml' ? '#ffffff' : 'var(--color-navy-800)',
                      cursor: 'pointer',
                    }}
                  >
                    {isEn ? 'Machine Learning' : 'تعلم آلة'}
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
