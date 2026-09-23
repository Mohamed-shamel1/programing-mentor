import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * StakeholderPolicyPage (Lesson 1-2, Page 07)
 * Topic: مصفوفة أصحاب المصلحة والميثاق الأخلاقي المدرسي
 * Scope:
 *   1. Student & Teacher/School Benefit-Risk Matrix
 *   2. Enforceable School AI Code of Conduct (3 Mandatory Tenets)
 *   3. Interactive Compliance Scenario Simulator (Academic Integrity Lab)
 */
export default function StakeholderPolicyPage({
  topicRibbon,
  inquiry,
  stakeholderMatrix,
  codeOfConduct,
  complianceLab,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultTopicRibbon = {
    number: '07',
    unitTitle: isEn ? 'Unit 1: Computing & AI Fundamentals' : 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    lessonCode: isEn ? 'Lesson 1-2' : 'الدرس 1-2',
    subBadge: isEn ? 'AI Governance & Ethics' : 'حوكمة الذكاء الاصطناعي المدرسي',
    title: isEn
      ? 'Stakeholder Benefit-Risk Matrix & School AI Code of Conduct'
      : 'مصفوفة أصحاب المصلحة والميثاق الأخلاقي المدرسي',
    chapterTag: 'CH-01 // PAGE 07',
  };
  const finalTopicRibbon = topicRibbon || defaultTopicRibbon;

  const finalInquiry = inquiry || {
    badge: isEn ? 'Ethical Governance Inquiry' : 'تساؤل النزاهة والمستقبل',
    codeTag: 'AI-CODE-OF-CONDUCT',
    question: isEn
      ? '"How can we harness the superpowers of generative AI in education without intellectual atrophy or compromising academic integrity?"'
      : '"كيف نستفيد من القوة الخارقة للذكاء الاصطناعي في التعليم دون أن نتحول إلى كسالى فكرياً، ودون أن نفقد نزاهتنا الأكاديمية؟"',
    hint: isEn
      ? 'AI is a cognitive sparring partner and catalyst; it must never replace independent human critical thinking or serve as an automated ghostwriter.'
      : 'الذكاء الاصطناعي شريك ذهني ومحفز للتفكير؛ ولا يجوز أبداً أن يحل محل عقلك أو يؤدي تكليفاتك المدرسية نيابة عنك.',
  };

  const finalStakeholderMatrix = stakeholderMatrix || {
    title: isEn ? 'Educational Stakeholders Benefit vs. Risk Matrix' : 'مصفوفة أصحاب المصلحة: الموازنة الدقيقة بين المكاسب والمخاطر',
    student: {
      roleAr: 'الطالب (The Student)',
      roleEn: 'The Student',
      icon: 'school',
      benefitsAr: [
        'معلم خصوصي سقراطي تفاعلي متاح 24/7 لشرح المسائل الصعبة بطرق متعددة.',
        'توليد خرائط مفاهيمية واختبارات تدريبية ذاتية لقياس مستوى الفهم.',
        'مساعد إبداعي لتنظيم الأفكار ومراجعة القواعد اللغوية وكتابة مسودات الأكواد البرمجية.',
      ],
      benefitsEn: [
        '24/7 personalized interactive Socratic tutor tailoring explanations to learner pace.',
        'Instant synthesis of concept flashcards and diagnostic self-assessment quizzes.',
        'Creative brainstorming catalyst and coding syntax debugger.',
      ],
      risksAr: [
        'ضمور التفكير النقدي والاعتماد الاتكالي السلبي (Cognitive Atrophy).',
        'السقوط في فخ الغش والانتحال الأدبي بتسليم نصوص مولدة آلياً.',
        'تصديق المعلومات المغلوطة أو المهلوسة دون تدقيق أو نقد معرفي.',
      ],
      risksEn: [
        'Cognitive atrophy and learned helplessness through blind reliance.',
        'Academic dishonesty and plagiarism through submitting unverified synthetic text.',
        'Internalizing hallucinations as ground-truth facts without scrutiny.',
      ],
    },
    teacher: {
      roleAr: 'المعلم والمؤسسة التعليمية (Teacher & School)',
      roleEn: 'The Teacher & School',
      icon: 'co_present',
      benefitsAr: [
        'تسريع إعداد خطط الدروس التفاعلية وتصميم أنشطة متمايزة تراعي الفروق الفردية.',
        'صياغة بنوك أسئلة متنوعة متدرجة الصعوبة ونماذج إجابة معيارية في ثوانٍ.',
        'توفير ساعات العمل الروتينية للتفرغ للتوجيه الإنساني والتربوي للطلاب.',
      ],
      benefitsEn: [
        'Rapid authoring of differentiated lesson plans tailored to individual student needs.',
        'Instant creation of tiered assessment item banks and modular rubrics.',
        'Freeing administrative hours to focus on personal mentorship and student well-being.',
      ],
      risksAr: [
        'صعوبة التحقق من نزاهة الأبحاث والواجبات المنزلية بعد انتشار أدوات التوليد.',
        'خطر الانحياز الإحصائي في أدوات التصحيح والتقييم الآلي المستحدثة.',
        'اتساع الفجوة الرقمية بين الطلاب القادرين على الاشتراك في النماذج المدفوعة وغيرهم.',
      ],
      risksEn: [
        'Erosion of homework authenticity detection due to undetectable synthetic prose.',
        'Algorithmic bias and unfairness in automated essay scoring pipelines.',
        'Digital inequality exacerbation between premium model subscribers and others.',
      ],
    },
  };

  const finalCodeOfConduct = codeOfConduct || {
    title: isEn ? 'The Enforceable School AI Code of Conduct' : 'بنود الميثاق الأخلاقي المدرسي الملزم لاستخدام الذكاء الاصطناعي',
    codeTag: '3 MANDATORY TENETS',
    rules: [
      {
        id: 'rule-1',
        num: '01',
        titleAr: 'الإفصاح والشفافية الإلزامية (Mandatory Disclosure)',
        titleEn: 'Mandatory Disclosure & Provenance',
        icon: 'visibility',
        descAr: 'أي استعانة بالذكاء الاصطناعي في مشروع أو بحث يجب توثيقها صراحة في هامش العمل (مع ذكر اسم الأداة، ونوع الأمر Prompt، وكيف راجع الطالب المخرجات).',
        descEn: 'Any use of AI tools in school projects must be explicitly disclosed in citations (specifying the tool, prompt, and human review steps).',
      },
      {
        id: 'rule-2',
        num: '02',
        titleAr: 'حظر الانتحال والنسخ المباشر (Zero Blind Plagiarism)',
        titleEn: 'Strict Anti-Plagiarism & Zero Copy-Pasting',
        icon: 'block',
        descAr: 'يُحظر منعاً باتاً تسليم أي نص، أو كود، أو تصميم تم توليده آلياً كأنه عمل شخصي أصيل للطالب. التكليف المدرسي غايته قياس مهارة عقلك أنت لا قدرة الخوارزمية.',
        descEn: 'Submitting synthetic text, code, or art as personal creative work is strictly prohibited. Academic work evaluates human cognition, not algorithm power.',
      },
      {
        id: 'rule-3',
        num: '03',
        titleAr: 'شريك حوار لا بديل عن العقل (Cognitive Partner, Not Ghostwriter)',
        titleEn: 'Cognitive Sparring Partner, Not Ghostwriter',
        icon: 'psychology',
        descAr: 'استخدم الذكاء الاصطناعي كمرآة فكرية لاختبار حججك، وتوضيح ما استغلق عليك، وتدقيق أخطائك؛ مع بقاء المسؤولية الكاملة عن صحة المحتوى على عاتقك وحدك.',
        descEn: 'Engage AI as an intellectual sparring partner to debate concepts and debug syntax, while retaining full personal accountability for truth.',
      },
    ],
  };

  const finalComplianceLab = complianceLab || {
    title: isEn ? 'Academic Integrity & Compliance Simulator' : 'معمل فحص الامتثال لميثاق النزاهة الأكاديمية',
    scenarios: [
      {
        id: 'sc-1',
        titleAr: 'طالب استعان بـ ChatGPT لكتابة مقال بالكامل ونسخه في كراسة التكليفات دون قراءته ودون ذكر اسم الأداة.',
        titleEn: 'A student had ChatGPT generate a complete history essay and submitted it verbatim without disclosure.',
        isCompliant: false,
        badgeAr: 'انتهاك صارخ لميثاق النزاهة (غش وانتحال) ✗',
        badgeEn: 'Violation: Academic Fraud & Plagiarism ✗',
        rationaleAr: 'مرفوض كلياً: نسخ أعمى دون إفصاح يصادر مهارة الطالب في الكتابة والتحليل وينتهك البندين الأول والثاني.',
        rationaleEn: 'Completely unacceptable: Blind submission without disclosure violates mandatory transparency and anti-plagiarism rules.',
      },
      {
        id: 'sc-2',
        titleAr: 'طالب يواجه خطأ برمجياً (Bug)، فعرض رسالة الخطأ على الأداة لتشرح له سبب العطل، ثم كتب كود التصحيح بنفسه.',
        titleEn: 'A student debugging Python code fed an error traceback to AI to understand the bug, then rewrote the fix independently.',
        isCompliant: true,
        badgeAr: 'استخدام نموذجي ومتوافق 100% مع الميثاق ✓',
        badgeEn: 'Compliant: Exemplary Learning Partner ✓',
        rationaleAr: 'مسموح وممتاز: استخدام الأداة كمعلم مسرّع للفهم والتشخيص مع كتابة الكود وفهم آليته ذاتياً.',
        rationaleEn: 'Permitted and encouraged: Using AI as a debugging tutor while authoring the final implementation independently.',
      },
      {
        id: 'sc-3',
        titleAr: 'طالب أجرى عصفاً ذهنياً مع أداة ذكاء اصطناعي لاختيار فكرة لمشروع تخرجه، ثم صمم البحث بأسلوبه وذكر استشارة الأداة في الهامش.',
        titleEn: 'A student brainstormed science fair project ideas with AI, researched and drafted the project personally, citing the AI brainstorm.',
        isCompliant: true,
        badgeAr: 'استخدام متوافق وشديد النزاهة والشفافية ✓',
        badgeEn: 'Compliant: Transparent Scholarly Collaboration ✓',
        rationaleAr: 'قمة النزاهة: توظيف الأداة كشريك حوار أولي مع الإفصاح والشفافية التامة وتحمل كامل جهد الكتابة والبحث.',
        rationaleEn: 'Gold standard: Employing AI for preliminary ideation paired with full transparent citation and personal execution.',
      },
    ],
  };

  const [activeTab, setActiveTab] = useState('student');
  const [expandedScenarios, setExpandedScenarios] = useState({});

  const toggleScenario = (id) => {
    setExpandedScenarios((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="stakeholder-policy-page educational-page" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      {/* 1. TOPIC RIBBON */}
      <section className="topic-ribbon-card" style={{ padding: '8px 14px', backgroundColor: 'var(--color-navy-900)', borderRadius: 'var(--radius-sm)', borderInlineStart: '4px solid var(--color-teal-400)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ backgroundColor: 'var(--color-teal-400)', color: '#000', padding: '2px 8px', borderRadius: 'var(--radius-xs)', fontSize: '10.5px', fontWeight: 'bold', fontFamily: 'var(--font-code)' }}>
              {finalTopicRibbon.number}
            </span>
            <span style={{ color: 'var(--color-teal-300)', fontSize: '11px', fontWeight: 'bold' }}>
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
      <section className="inquiry-card" style={{ padding: '8px 12px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 'var(--radius-sm)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <div style={{ backgroundColor: '#dcfce7', padding: '4px', borderRadius: '50%', color: '#16a34a', display: 'flex' }}>
            <Icon name="verified_user" size={16} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{ fontSize: '10.5px', fontWeight: 'bold', color: '#15803d' }}>{finalInquiry.badge}</span>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-code)', backgroundColor: '#bbf7d0', padding: '1px 5px', borderRadius: '2px', color: '#14532d' }}>{finalInquiry.codeTag}</span>
            </div>
            <p style={{ margin: '0 0 3px', fontSize: '11.5px', fontWeight: 'bold', color: '#14532d', lineHeight: 1.35 }}>
              {finalInquiry.question}
            </p>
            <p style={{ margin: 0, fontSize: '10.5px', color: '#166534', lineHeight: 1.3 }}>
              {finalInquiry.hint}
            </p>
          </div>
        </div>
      </section>

      {/* 3. STAKEHOLDER BENEFIT VS RISK MATRIX (TABBED / COMPACT) */}
      <section style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-navy-200)', borderRadius: 'var(--radius-sm)', padding: '10px 12px', boxShadow: 'var(--shadow-xs)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="groups" size={16} color="var(--color-cobalt-600)" />
            <h2 style={{ fontSize: '12px', fontWeight: 'bold', margin: 0, color: 'var(--color-navy-950)' }}>
              {finalStakeholderMatrix.title}
            </h2>
          </div>

          {/* Toggle buttons for Student vs Teacher */}
          <div style={{ display: 'flex', gap: '4px' }}>
            <button
              type="button"
              onClick={() => setActiveTab('student')}
              style={{
                padding: '3px 8px',
                fontSize: '10px',
                fontWeight: 'bold',
                borderRadius: '3px',
                cursor: 'pointer',
                border: activeTab === 'student' ? '1px solid var(--color-cobalt-600)' : '1px solid var(--color-navy-200)',
                backgroundColor: activeTab === 'student' ? 'var(--color-cobalt-600)' : '#ffffff',
                color: activeTab === 'student' ? '#ffffff' : 'var(--color-navy-700)',
              }}
            >
              {isEn ? 'Student Perspective' : 'منظور الطالب'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('teacher')}
              style={{
                padding: '3px 8px',
                fontSize: '10px',
                fontWeight: 'bold',
                borderRadius: '3px',
                cursor: 'pointer',
                border: activeTab === 'teacher' ? '1px solid var(--color-teal-600)' : '1px solid var(--color-navy-200)',
                backgroundColor: activeTab === 'teacher' ? '#0f766e' : '#ffffff',
                color: activeTab === 'teacher' ? '#ffffff' : 'var(--color-navy-700)',
              }}
            >
              {isEn ? 'Teacher & School Perspective' : 'منظور المعلم والمدرسة'}
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        {(() => {
          const roleData = activeTab === 'student' ? finalStakeholderMatrix.student : finalStakeholderMatrix.teacher;
          const isStudent = activeTab === 'student';

          return (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {/* Benefits Column */}
              <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '4px', padding: '8px 10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', color: '#15803d' }}>
                  <Icon name="add_circle" size={15} />
                  <strong style={{ fontSize: '11px' }}>
                    {isEn ? 'Empowering Benefits (المكاسب والفرص)' : 'المكاسب والفرص الواعدة'}
                  </strong>
                </div>
                <ul style={{ margin: 0, paddingInlineStart: '16px', fontSize: '10.5px', color: '#166534', lineHeight: 1.45, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {(isEn ? roleData.benefitsEn : roleData.benefitsAr).map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>

              {/* Risks Column */}
              <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '4px', padding: '8px 10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', color: '#b91c1c' }}>
                  <Icon name="warning" size={15} />
                  <strong style={{ fontSize: '11px' }}>
                    {isEn ? 'Critical Hazards & Risks (المخاطر والتحذيرات)' : 'المخاطر والتحديات الجسيمة'}
                  </strong>
                </div>
                <ul style={{ margin: 0, paddingInlineStart: '16px', fontSize: '10.5px', color: '#991b1b', lineHeight: 1.45, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {(isEn ? roleData.risksEn : roleData.risksAr).map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })()}
      </section>

      {/* 4. ENFORCEABLE SCHOOL CODE OF CONDUCT (3 TENETS) */}
      <section style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-navy-200)', borderRadius: 'var(--radius-sm)', padding: '10px 12px', boxShadow: 'var(--shadow-xs)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="policy" size={16} color="var(--color-cobalt-600)" />
            <h2 style={{ fontSize: '12px', fontWeight: 'bold', margin: 0, color: 'var(--color-navy-950)' }}>
              {finalCodeOfConduct.title}
            </h2>
          </div>
          <span style={{ fontSize: '9px', fontFamily: 'var(--font-code)', backgroundColor: 'var(--color-navy-100)', padding: '1px 6px', borderRadius: '2px', color: 'var(--color-navy-800)', fontWeight: 'bold' }}>
            {finalCodeOfConduct.codeTag}
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {finalCodeOfConduct.rules.map((rule) => (
            <div
              key={rule.id}
              style={{
                backgroundColor: 'var(--color-navy-50)',
                border: '1px solid var(--color-navy-200)',
                borderRadius: '4px',
                padding: '8px 10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ backgroundColor: 'var(--color-cobalt-600)', color: '#ffffff', fontSize: '9.5px', fontWeight: 'bold', padding: '1px 5px', borderRadius: '2px', fontFamily: 'var(--font-code)' }}>
                  {rule.num}
                </span>
                <Icon name={rule.icon} size={15} color="var(--color-cobalt-600)" />
              </div>
              <strong style={{ fontSize: '11px', color: 'var(--color-navy-950)', lineHeight: 1.3 }}>
                {isEn ? rule.titleEn : rule.titleAr}
              </strong>
              <p style={{ margin: 0, fontSize: '10px', color: 'var(--color-navy-800)', lineHeight: 1.35 }}>
                {isEn ? rule.descEn : rule.descAr}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE COMPLIANCE SIMULATOR */}
      <section style={{ backgroundColor: '#f8fafc', border: '1px solid var(--color-navy-200)', borderRadius: 'var(--radius-sm)', padding: '10px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
          <Icon name="fact_check" size={15} color="var(--color-teal-600)" />
          <h3 style={{ fontSize: '11.5px', fontWeight: 'bold', margin: 0, color: 'var(--color-navy-950)' }}>
            {finalComplianceLab.title}
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {finalComplianceLab.scenarios.map((sc) => {
            const isRevealed = !!expandedScenarios[sc.id];

            return (
              <div
                key={sc.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-navy-200)',
                  borderRadius: '4px',
                  padding: '6px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ flex: '1 1 65%', minWidth: '240px' }}>
                  <div style={{ fontSize: '10.5px', color: 'var(--color-navy-900)', lineHeight: 1.35 }}>
                    {isEn ? sc.titleEn : sc.titleAr}
                  </div>

                  {isRevealed && (
                    <div style={{ marginTop: '4px', fontSize: '10px', color: sc.isCompliant ? '#15803d' : '#b91c1c', fontWeight: 'bold', lineHeight: 1.3 }}>
                      {isEn ? sc.rationaleEn : sc.rationaleAr}
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {isRevealed ? (
                    <span
                      style={{
                        fontSize: '9.5px',
                        fontWeight: 'bold',
                        padding: '3px 8px',
                        borderRadius: '3px',
                        backgroundColor: sc.isCompliant ? '#dcfce7' : '#fee2e2',
                        color: sc.isCompliant ? '#166534' : '#991b1b',
                        border: sc.isCompliant ? '1px solid #86efac' : '1px solid #fca5a5',
                      }}
                    >
                      {isEn ? sc.badgeEn : sc.badgeAr}
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => toggleScenario(sc.id)}
                      style={{
                        padding: '3px 8px',
                        fontSize: '9.5px',
                        fontWeight: 'bold',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        border: '1px solid var(--color-cobalt-300)',
                        backgroundColor: 'var(--color-cobalt-50)',
                        color: 'var(--color-cobalt-700)',
                      }}
                    >
                      {isEn ? 'Test Integrity Verdict' : 'اختبر الامتثال للميثاق'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
