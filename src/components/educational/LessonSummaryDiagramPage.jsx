import React from 'react';
import Icon from '../ui/Icon.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * LessonSummaryDiagramPage (Lesson 1-2, Page 09)
 * Topic: شجرة المفاهيم والروابط المعمارية الكبرى للدرس
 * Scope:
 *   1. 4-Pillar Unified Conceptual Schematic (Umbrella, Paradigm Shift, Perceptron, Reality & Ethics)
 *   2. Core Terminology Flash Matrix (6 Canonical Terms with bilingual definitions)
 *   3. Epistemological Summary Takeaway
 */
export default function LessonSummaryDiagramPage({
  topicRibbon,
  inquiry,
  pillars,
  termsMatrix,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultTopicRibbon = {
    number: '09',
    unitTitle: isEn ? 'Unit 1: Computing & AI Fundamentals' : 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    lessonCode: isEn ? 'Lesson 1-2' : 'الدرس 1-2',
    subBadge: isEn ? 'Mastery Concept Map' : 'خريطة الإتقان الشاملة',
    title: isEn
      ? 'Comprehensive Architectural Concept Map & Terminology Cheat Sheet'
      : 'شجرة المفاهيم والروابط المعمارية الكبرى للدرس ومخطط المصطلحات',
    chapterTag: 'CH-01 // PAGE 09',
  };
  const finalTopicRibbon = topicRibbon || defaultTopicRibbon;

  const finalInquiry = inquiry || {
    badge: isEn ? 'Synthetic Mastery Compass' : 'البوصلة التركيبية الكبرى',
    codeTag: 'FULL-LESSON-SYNTHESIS',
    question: isEn
      ? '"How do nested tiers, the paradigm shift, neural perceptrons, and school governance unify into one cohesive architectural model?"'
      : '"كيف تترابط مفاهيم الدرس من الفئات المتداخلة والنقلة الفلسفية إلى الخلية العصبية وميثاق المدرسة في منظومة فكرية واحدة؟"',
    hint: isEn
      ? 'AI is not disjointed islands of buzzwords; it is an integrated engineering pipeline connecting mathematical foundations with real-world ethical governance.'
      : 'الذكاء الاصطناعي ليس جزر مفاهيمية متباعدة؛ بل هو مسار هندسي متكامل يربط بين الفلسفة البرمجية والرياضيات والتطبيق الواقعي بالحوكمة الأخلاقية.',
  };

  const finalPillars = pillars || [
    {
      id: 'pillar-1',
      num: '01',
      titleAr: 'المظلة الهيكلية المتداخلة',
      titleEn: 'Nested Architectural Hierarchy',
      tag: 'AI ⊃ ML ⊃ DL ⊃ GenAI',
      color: 'cobalt',
      icon: 'hub',
      pointsAr: [
        'AI: المظلة الشاملة لمحاكاة الذكاء البشري.',
        'ML: التعلم واستخلاص الأنماط من البيانات.',
        'DL: شبكات عصبية عميقة متعددة الطبقات.',
        'GenAI: تخليق محتوى جديد غير مسبوق.',
      ],
      pointsEn: [
        'AI: Broad umbrella for human cognitive simulation.',
        'ML: Learning latent statistical patterns from data.',
        'DL: Layered deep neural feature extractors.',
        'GenAI: Synthesizing novel artifacts from prompts.',
      ],
    },
    {
      id: 'pillar-2',
      num: '02',
      titleAr: 'النقلة الفلسفية في البرمجة',
      titleEn: 'The Philosophical Paradigm Shift',
      tag: 'Rules vs Data-Driven',
      color: 'teal',
      icon: 'swap_horiz',
      pointsAr: [
        'التقليدية: مدخلات + قواعد ➔ نتائج ومخرجات.',
        'تعلم الآلة: مدخلات + نتائج ➔ استخلاص القواعد.',
        'تجاوز عنق الزجاجة لكتابة مليارات الشروط اليدوية.',
        'الغاية الكبرى: التعميم على بيانات غير مرئية.',
      ],
      pointsEn: [
        'Traditional: Data + Rules ➔ Outputs.',
        'Machine Learning: Data + Answers ➔ Learned Rules.',
        'Overcoming manual conditional bottlenecks.',
        'Core Objective: Generalizing to unseen data.',
      ],
    },
    {
      id: 'pillar-3',
      num: '03',
      titleAr: 'معمارية العقل والخلية',
      titleEn: 'Neural Topology & Perceptron',
      tag: 'Σ(X·W) + b ➔ φ ➔ Y',
      color: 'amber',
      icon: 'psychology',
      pointsAr: [
        'المدخلات X تُضرب في أوزان المشابك الرقمية W.',
        'إضافة الانحياز b وحساب المجموع الموزون Σ.',
        'دالة التنشيط φ تحدد تجاوز عتبة إطلاق القرار Y.',
        'التعلم: تقليل دالة الخسارة عبر الانتشار العكسي.',
      ],
      pointsEn: [
        'Inputs X multiplied by numerical weights W.',
        'Bias b offset added to produce weighted sum Σ.',
        'Activation function φ evaluates firing threshold.',
        'Training: Minimizing loss via backpropagation.',
      ],
    },
    {
      id: 'pillar-4',
      num: '04',
      titleAr: 'الواقع والحوكمة والمسؤولية',
      titleEn: 'Narrow Reality & Governance',
      tag: 'Narrow AI • HITL • Ethics',
      color: 'navy',
      icon: 'policy',
      pointsAr: [
        'أنظمة اليوم ذكاء ضيق (ANI) يفتقر للإدراك والوعي.',
        'معضلة الهلوسة تفرض الرقابة البشرية (HITL).',
        'ميثاق المدرسة: إفصاح صريح وحظر الانتحال.',
        'الذكاء الاصطناعي شريك حوار لا بديلاً عن عقلك.',
      ],
      pointsEn: [
        'Current systems are strictly Narrow AI (ANI).',
        'Hallucination risks mandate Human-in-the-Loop.',
        'School Policy: Mandatory disclosure, zero plagiarism.',
        'AI is a cognitive sparring partner, not a ghostwriter.',
      ],
    },
  ];

  const finalTerms = termsMatrix || [
    {
      termAr: 'الذكاء الاصطناعي (AI)',
      termEn: 'Artificial Intelligence',
      defAr: 'مظلة علمية شاملة تهدف لبناء أنظمة تحاكي القدرات الذهنية البشرية كالإدراك والاستنتاج والتعلم.',
      defEn: 'Broad scientific field engineering systems that simulate human cognitive faculties like perception and reasoning.',
    },
    {
      termAr: 'تعلم الآلة (ML)',
      termEn: 'Machine Learning',
      defAr: 'فرع من الذكاء الاصطناعي يمكّن البرمجيات من تحسين أدائها واستخلاص القواعد من البيانات دون برمجة صريحة.',
      defEn: 'Subfield enabling algorithms to learn statistical patterns from data to make predictions without explicit rules.',
    },
    {
      termAr: 'التعلم العميق (DL)',
      termEn: 'Deep Learning',
      defAr: 'مستوى متقدم من ML يستند لشبكات عصبية اصطناعية متعددة الطبقات لاستخراج الميزات المعقدة تلقائياً.',
      defEn: 'Advanced ML tier utilizing multi-layered artificial neural networks to automatically extract hierarchical representations.',
    },
    {
      termAr: 'الذكاء التوليدي (GenAI)',
      termEn: 'Generative AI',
      defAr: 'طراز حديث من التعلم العميق ينتقل من مجرد تصنيف البيانات إلى تخليق محتوى جديد (نصوص، صور، أكواد).',
      defEn: 'Next-gen DL architecture shifting from discrimination to synthesizing novel artifacts (essays, artwork, code).',
    },
    {
      termAr: 'الخلية العصبية (Perceptron)',
      termEn: 'Artificial Neuron (Perceptron)',
      defAr: 'الوحدة الرياضية الأساسية في ANN التي تحسب المجموع الموزون للمدخلات وتمرره عبر دالة تنشيط.',
      defEn: 'Fundamental mathematical computational unit computing weighted inputs sum processed by an activation threshold.',
    },
    {
      termAr: 'الهلوسة الآلية (Hallucination)',
      termEn: 'AI Hallucination',
      defAr: 'توليد النماذج التوليدية لمعلومات وسوابق مختلقة أو غير صحيحة وتقديمها بنبرة لغوية واثقة ومقنعة.',
      defEn: 'Phenomenon where generative models synthesize confident, fluent assertions that are factually false or invented.',
    },
  ];

  return (
    <div className="lesson-summary-diagram-page educational-page" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      {/* 1. TOPIC RIBBON */}
      <section className="topic-ribbon-card" style={{ padding: '8px 14px', backgroundColor: 'var(--color-navy-900)', borderRadius: 'var(--radius-sm)', borderInlineStart: '4px solid var(--color-cobalt-400)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ backgroundColor: 'var(--color-cobalt-500)', color: '#ffffff', padding: '2px 8px', borderRadius: 'var(--radius-xs)', fontSize: '10.5px', fontWeight: 'bold', fontFamily: 'var(--font-code)' }}>
              {finalTopicRibbon.number}
            </span>
            <span style={{ color: 'var(--color-cobalt-300)', fontSize: '11px', fontWeight: 'bold' }}>
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

      {/* 2. INQUIRY BOX */}
      <section className="inquiry-card" style={{ padding: '8px 12px', backgroundColor: 'var(--color-navy-50)', border: '1px solid var(--color-navy-200)', borderRadius: 'var(--radius-sm)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <div style={{ backgroundColor: 'var(--color-navy-200)', padding: '4px', borderRadius: '50%', color: 'var(--color-navy-900)', display: 'flex' }}>
            <Icon name="device_hub" size={16} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{ fontSize: '10.5px', fontWeight: 'bold', color: 'var(--color-navy-950)' }}>{finalInquiry.badge}</span>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-code)', backgroundColor: 'var(--color-navy-200)', padding: '1px 5px', borderRadius: '2px', color: 'var(--color-navy-900)' }}>{finalInquiry.codeTag}</span>
            </div>
            <p style={{ margin: '0 0 3px', fontSize: '11.5px', fontWeight: 'bold', color: 'var(--color-navy-950)', lineHeight: 1.35 }}>
              {finalInquiry.question}
            </p>
            <p style={{ margin: 0, fontSize: '10.5px', color: 'var(--color-navy-700)', lineHeight: 1.3 }}>
              {finalInquiry.hint}
            </p>
          </div>
        </div>
      </section>

      {/* 3. 4-PILLAR ARCHITECTURAL SYNTHESIS GRID */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
        {finalPillars.map((p) => (
          <div
            key={p.id}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-navy-200)',
              borderRadius: 'var(--radius-sm)',
              padding: '8px 10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              boxShadow: 'var(--shadow-xs)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--color-navy-100)', paddingBottom: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ backgroundColor: 'var(--color-navy-900)', color: '#ffffff', fontSize: '9px', fontWeight: 'bold', padding: '1px 4px', borderRadius: '2px', fontFamily: 'var(--font-code)' }}>
                  {p.num}
                </span>
                <strong style={{ fontSize: '10.5px', color: 'var(--color-navy-950)' }}>
                  {isEn ? p.titleEn : p.titleAr}
                </strong>
              </div>
              <Icon name={p.icon} size={14} color="var(--color-cobalt-600)" />
            </div>

            <span style={{ fontSize: '9px', fontFamily: 'var(--font-code)', backgroundColor: 'var(--color-navy-50)', color: 'var(--color-cobalt-700)', padding: '2px 4px', borderRadius: '2px', fontWeight: 'bold', textAlign: 'center' }}>
              {p.tag}
            </span>

            <ul style={{ margin: 0, paddingInlineStart: '14px', fontSize: '9.5px', color: 'var(--color-navy-800)', lineHeight: 1.35, display: 'flex', flexDirection: 'column', gap: '3px' }}>
              {(isEn ? p.pointsEn : p.pointsAr).map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* 4. CORE TERMINOLOGY FLASH MATRIX */}
      <section style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-navy-200)', borderRadius: 'var(--radius-sm)', padding: '8px 10px', boxShadow: 'var(--shadow-xs)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
          <Icon name="menu_book" size={14} color="var(--color-cobalt-600)" />
          <h2 style={{ fontSize: '11.5px', fontWeight: 'bold', margin: 0, color: 'var(--color-navy-950)' }}>
            {isEn ? 'Core Examination Terminology Matrix' : 'مصفوفة المصطلحات المحورية للاختبارات والمراجعة'}
          </h2>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10px', textAlign: isEn ? 'left' : 'right' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-navy-900)', color: '#ffffff' }}>
                <th style={{ padding: '4px 6px', border: '1px solid var(--color-navy-700)', width: '30%' }}>
                  {isEn ? 'Term & Acronym' : 'المصطلح العلمي الدقيق'}
                </th>
                <th style={{ padding: '4px 6px', border: '1px solid var(--color-navy-700)', width: '70%', color: 'var(--color-amber-300)' }}>
                  {isEn ? 'Standard Curriculum Definition' : 'التعريف العلمي المعتمد منهجياً'}
                </th>
              </tr>
            </thead>
            <tbody>
              {finalTerms.map((row, idx) => (
                <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#f8fafc' : '#ffffff' }}>
                  <td style={{ padding: '4px 6px', border: '1px solid var(--color-navy-200)', fontWeight: 'bold', color: 'var(--color-navy-950)' }}>
                    {isEn ? row.termEn : row.termAr}
                  </td>
                  <td style={{ padding: '4px 6px', border: '1px solid var(--color-navy-200)', color: 'var(--color-navy-800)', lineHeight: 1.3 }}>
                    {isEn ? row.defEn : row.defAr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
