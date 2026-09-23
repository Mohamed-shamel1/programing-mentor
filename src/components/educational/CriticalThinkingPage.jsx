import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * CriticalThinkingPage (Lesson 1-2, Page 08)
 * Topic: معمل التفكير النقدي وتفكيك أوهام الوعي والمسؤولية
 * Scope:
 *   1. Searle's Chinese Room Argument (Consciousness vs Symbol Manipulation)
 *   2. Liability & Legal Accountability in Autonomous/AI Systems
 *   3. Algorithmic Bias & The Myth of Mathematical Objectivity
 *   4. The Future of Work & Irreplaceable Human Uniqueness
 *   5. Interactive Socratic Dilemma Explorer
 */
export default function CriticalThinkingPage({
  topicRibbon,
  inquiry,
  dilemmas,
  reflectionLab,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultTopicRibbon = {
    number: '08',
    unitTitle: isEn ? 'Unit 1: Computing & AI Fundamentals' : 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    lessonCode: isEn ? 'Lesson 1-2' : 'الدرس 1-2',
    subBadge: isEn ? 'Critical Thinking & Socratic Inquiry' : 'معمل التفكير والتحليل الفلسفي',
    title: isEn
      ? 'Critical Thinking Lab: Deconstructing Consciousness & AI Accountability'
      : 'معمل التفكير النقدي: تفكيك أوهام الوعي ومعضلات المسؤولية الأخلاقية',
    chapterTag: 'CH-01 // PAGE 08',
  };
  const finalTopicRibbon = topicRibbon || defaultTopicRibbon;

  const finalInquiry = inquiry || {
    badge: isEn ? 'Deep Philosophical Inquiry' : 'تساؤل فلسفي عميق',
    codeTag: 'SEARLE-CHINESE-ROOM',
    question: isEn
      ? '"Does an AI model truly understand the poem it writes, or is it like Searle\'s Chinese Room: merely manipulating statistical symbols devoid of subjective meaning?"'
      : '"هل يفهم الذكاء الاصطناعي حقاً معنى القصيدة التي يكتبها، أم أنه مثل الغرفة الصينية: يتلاعب برموز وأرقام إحصائية دون أن يدرك معناها الباطن؟"',
    hint: isEn
      ? 'Simulating human understanding is not actual understanding; statistical manipulation of syntax never generates conscious semantics.'
      : 'محاكاة الفهم ليست هي الفهم ذاته؛ وحساب احتمالات الكلمات لا يخلق إدراكاً أو وعياً داخلياً بالمعنى الحقيقي.',
  };

  const finalDilemmas = dilemmas || [
    {
      id: 'dilemma-1',
      num: '01',
      titleAr: 'معضلة الوعي وحجة "الغرفة الصينية" (The Chinese Room)',
      titleEn: 'Consciousness & The Chinese Room Argument',
      icon: 'psychology',
      color: 'cobalt',
      questionAr: 'إذا وضعت إنساناً داخل غرفة مغلقة ومعه كتالوج قواعد يطابق الرموز الصينية بدقة، فهل يعني خروج الإجابة الصحيحة أنه يفهم الصينية؟',
      questionEn: 'If a person in a closed room uses an English rulebook to match Chinese symbols, does outputting correct answers mean they understand Chinese?',
      analysisAr: 'أثبت الفيلسوف جون سيرل (John Searle) أن التلاعب بالرموز (Syntax) لا يخلق فهماً دلالياً (Semantics). الذكاء الاصطناعي لا يشعر ولا يفهم؛ بل ينفذ معادلات رياضية عمياء تحاكي الفهم الإنساني ظاهرياً فقط.',
      analysisEn: 'Philosopher John Searle demonstrated that syntax manipulation never equates to semantic comprehension. AI models process mathematical tokens blindly without subjective consciousness.',
    },
    {
      id: 'dilemma-2',
      num: '02',
      titleAr: 'معضلة المسؤولية القانونية في الأنظمة المستقلة (Liability)',
      titleEn: 'Legal Liability in Autonomous Decision Systems',
      icon: 'gavel',
      color: 'amber',
      questionAr: 'إذا تسببت سيارة ذاتية القيادة في حادث سير أو أخطأ نظام تشخيص طبي ذكي في وصف جرعة مميتة، من يتحمل المسؤولية الجنائية؟',
      questionEn: 'If an autonomous car crashes or an AI diagnostic tool prescribes a fatal dose, who bears criminal and civil liability?',
      analysisAr: 'الذكاء الاصطناعي أداة برمجية لا تتمتع بالشخصية القانونية ولا يجوز حبسها أو مقاضاتها. تتوزع المسؤولية بين الشركة المصنعة، مبرمج الخوارزمية، والمشرف البشري؛ وهذا ما يفرض حتمية الرقابة البشرية والتشريعات الصارمة.',
      analysisEn: 'Algorithms lack legal personhood. Liability rests strictly across manufacturers, algorithmic developers, and human operators, mandating strict human-in-the-loop oversight.',
    },
    {
      id: 'dilemma-3',
      num: '03',
      titleAr: 'خرافة الحياد الرياضي ومعضلة الانحياز (Algorithmic Bias)',
      titleEn: 'The Myth of Neutrality & Algorithmic Bias',
      icon: 'balance',
      color: 'teal',
      questionAr: 'هل يمكن اعتبار مخرجات الذكاء الاصطناعي عادلة ومحايدة 100% لمجرد أنها نتاج معادلات رياضية وأرقام؟',
      questionEn: 'Can AI decisions be considered 100% objective and fair simply because they stem from mathematical formulas?',
      analysisAr: 'خرافة خطيرة! النماذج مرايا لبيانات تدريبها؛ فإذا كانت البيانات التاريخية تتضمن تمييزاً عنصرياً أو جندرياً أو طبقياً، فإن الخوارزمية ستعيد إنتاج الظلم وتضخمه تحت ستار "الحياد الرقمي المضلل".',
      analysisEn: 'A dangerous myth. Models mirror training data; historical prejudices (racial, socioeconomic, gender) are codified and magnified under the false guise of mathematical neutrality.',
    },
    {
      id: 'dilemma-4',
      num: '04',
      titleAr: 'مستقبل الوظائف والفرادة الإنسانية (Human Uniqueness)',
      titleEn: 'The Future of Work & Human Uniqueness',
      icon: 'fingerprint',
      color: 'navy',
      questionAr: 'ما هي القدرات والمهارات التي يستحيل على خوارزميات GenAI استبدالها مهما بلغت قوتها التوليدية؟',
      questionEn: 'What foundational human capacities remain entirely beyond the reach of GenAI synthesis regardless of compute scale?',
      analysisAr: 'الذكاء الاصطناعي يبرع في تكرار الأنماط وحساب الاحتمالات، لكنه يعجز تماماً عن: الحكمة الأخلاقية، التعاطف الوجداني الحقيقي، القيادة الملهمة، والتفكير في الغايات والمعاني الوجودية.',
      analysisEn: 'AI excels at pattern synthesis, yet is utterly incapable of: ethical wisdom (phronesis), genuine empathy, inspiring leadership, and creating existential purpose.',
    },
  ];

  const finalReflectionLab = reflectionLab || {
    title: isEn ? 'Socratic Critical Reflection Lab' : 'معمل الحوار السقراطي والتفكير الذاتي',
    promptAr: 'اختر إحدى المعضلات الأربع أعلاه واضغط عليها لعرض التحليل الفلسفي العميق، ثم شارك رؤيتك النقدية:',
    promptEn: 'Select any of the four philosophical dilemmas to explore the deep Socratic breakdown:',
  };

  const [expandedCard, setExpandedCard] = useState('dilemma-1');

  return (
    <div className="critical-thinking-page educational-page" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
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
      <section className="inquiry-card" style={{ padding: '8px 12px', backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: 'var(--radius-sm)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <div style={{ backgroundColor: '#e0f2fe', padding: '4px', borderRadius: '50%', color: '#0284c7', display: 'flex' }}>
            <Icon name="psychology_alt" size={16} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{ fontSize: '10.5px', fontWeight: 'bold', color: '#0369a1' }}>{finalInquiry.badge}</span>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-code)', backgroundColor: '#bae6fd', padding: '1px 5px', borderRadius: '2px', color: '#0c4a6e' }}>{finalInquiry.codeTag}</span>
            </div>
            <p style={{ margin: '0 0 3px', fontSize: '11.5px', fontWeight: 'bold', color: '#0c4a6e', lineHeight: 1.35 }}>
              {finalInquiry.question}
            </p>
            <p style={{ margin: 0, fontSize: '10.5px', color: '#0369a1', lineHeight: 1.3 }}>
              {finalInquiry.hint}
            </p>
          </div>
        </div>
      </section>

      {/* 3. 4-DILEMMA SOCRATIC GRID */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
        {finalDilemmas.map((d) => {
          const isSelected = expandedCard === d.id;

          return (
            <div
              key={d.id}
              onClick={() => setExpandedCard(d.id)}
              style={{
                backgroundColor: isSelected ? 'var(--color-navy-50)' : '#ffffff',
                border: isSelected ? '2px solid var(--color-cobalt-600)' : '1px solid var(--color-navy-200)',
                borderRadius: 'var(--radius-sm)',
                padding: '9px 11px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                transition: 'all 0.15s ease',
                boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ backgroundColor: 'var(--color-navy-900)', color: '#ffffff', padding: '1px 5px', borderRadius: '2px', fontSize: '9px', fontWeight: 'bold', fontFamily: 'var(--font-code)' }}>
                    {d.num}
                  </span>
                  <strong style={{ fontSize: '11px', color: 'var(--color-navy-950)' }}>
                    {isEn ? d.titleEn : d.titleAr}
                  </strong>
                </div>
                <Icon name={d.icon} size={15} color={isSelected ? 'var(--color-cobalt-600)' : 'var(--color-navy-400)'} />
              </div>

              <p style={{ margin: 0, fontSize: '10.5px', color: 'var(--color-navy-800)', fontWeight: 'bold', lineHeight: 1.35 }}>
                {isEn ? d.questionEn : d.questionAr}
              </p>

              <div
                style={{
                  fontSize: '10px',
                  color: isSelected ? 'var(--color-navy-950)' : 'var(--color-navy-700)',
                  backgroundColor: isSelected ? '#ffffff' : '#f8fafc',
                  border: isSelected ? '1px solid var(--color-cobalt-200)' : '1px solid var(--color-navy-100)',
                  borderRadius: '3px',
                  padding: '6px 8px',
                  lineHeight: 1.4,
                  marginTop: 'auto',
                }}
              >
                <strong style={{ color: 'var(--color-cobalt-700)' }}>
                  {isEn ? 'Socratic Analysis: ' : 'التحليل الفلسفي والتقني: '}
                </strong>
                {isEn ? d.analysisEn : d.analysisAr}
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. SUMMARY DIALOGUE BOX */}
      <section style={{ backgroundColor: 'var(--color-navy-950)', borderRadius: 'var(--radius-sm)', padding: '9px 12px', border: '1px solid var(--color-navy-800)', color: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="lightbulb" size={15} color="var(--color-amber-400)" />
            <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-amber-300)' }}>
              {isEn ? 'Golden Epistemological Rule' : 'القاعدة المعرفية الذهبية: كيف ننظر للذكاء الاصطناعي؟'}
            </span>
          </div>
          <span style={{ fontSize: '9px', fontFamily: 'var(--font-code)', color: 'var(--color-teal-300)' }}>
            HUMAN AGENCY & ETHICS
          </span>
        </div>
        <p style={{ margin: 0, fontSize: '10.5px', color: 'var(--color-navy-200)', lineHeight: 1.45 }}>
          {isEn
            ? 'Artificial Intelligence is a monumental computational tool that amplifies human capability, but it possesses no soul, moral agency, or genuine comprehension. The ultimate measure of wisdom remains the human being: we define the purpose, establish the ethical boundaries, and bear the full moral responsibility.'
            : 'الذكاء الاصطناعي أداة حسابية خارقة تُضاعف القدرات البشرية، لكنه يفتقر تماماً للروح، والإحساس الأخلاقي، والوعي بالغاية. الإنسان هو محور الحكمة: نحن من نحدد الغايات، ونرسم الحدود الأخلاقية، ونتحمل المسؤولية الكاملة عن المخرجات.'}
        </p>
      </section>
    </div>
  );
}
