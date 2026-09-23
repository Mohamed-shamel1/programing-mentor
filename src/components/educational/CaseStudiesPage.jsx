import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * CaseStudiesPage (Lesson 1-2, Page 06)
 * Topic: دراسات الحالة الواقعية: دروس مستفادة من الإخفاقات غير المقصودة
 * Scope:
 *   1. Mata v. Avianca (2023) Legal Sanctions (ChatGPT Hallucinated Precedents in Federal Court)
 *   2. Smart Agriculture Vision Classifier Failure (Lab 98% vs Field 45% due to Shadows & Out-of-Distribution Data)
 *   3. Comparative Engineering Breakdown & Root-Cause Matrix
 *   4. Interactive Failure Analysis Lab
 */
export default function CaseStudiesPage({
  topicRibbon,
  inquiry,
  legalCase,
  agriCase,
  comparativeMatrix,
  interactiveLab,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultTopicRibbon = {
    number: '06',
    unitTitle: isEn ? 'Unit 1: Computing & AI Fundamentals' : 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    lessonCode: isEn ? 'Lesson 1-2' : 'الدرس 1-2',
    subBadge: isEn ? 'Real-World Case Studies' : 'دراسات الحالة الحقيقية',
    title: isEn
      ? 'Real-World Case Studies: Lessons from Unintended AI Failures'
      : 'دراسات الحالة الواقعية: دروس مستفادة من الإخفاقات غير المقصودة',
    chapterTag: 'CH-01 // PAGE 06',
  };
  const finalTopicRibbon = topicRibbon || defaultTopicRibbon;

  const finalInquiry = inquiry || {
    badge: isEn ? 'Post-Mortem Investigation' : 'تحقيق هندسي في الإخفاقات',
    codeTag: 'CASE-STUDIES-2023',
    question: isEn
      ? '"What happens when licensed attorneys place blind faith in ChatGPT in federal court, or when a 98% accurate agricultural AI vision model is deployed in real farmland?"'
      : '"ماذا يحدث عندما يثق محامون مرخصون ثقة عمياء في ChatGPT أمام محكمة فيدرالية، أو عند تشغيل نموذج ذكاء اصطناعي للزراعة حقق دقة 98% في المعمل داخل حقل حقيقي؟"',
    hint: isEn
      ? 'AI models bear zero legal accountability; absent rigorous human-in-the-loop verification or field-robust data, catastrophic failures inevitably emerge.'
      : 'أنظمة الذكاء الاصطناعي لا تملك وعياً قانونياً ولا تتحمل المسؤولية؛ وغياب التدقيق البشري وتجاهل ظروف الواقع المعقدة يقود مباشرة إلى كوارث واقعية.',
  };

  const finalLegalCase = legalCase || {
    badgeAr: 'القضية الأولى: القضاء الأمريكي (Mata v. Avianca - 2023)',
    badgeEn: 'Case 1: U.S. Federal Court (Mata v. Avianca - 2023)',
    categoryAr: 'هلوسة النماذج التوليدية وغياب التحقق البشري',
    categoryEn: 'Generative AI Hallucination & Missing Human Verification',
    incidentAr: 'قام محامون بالاستعانة بـ ChatGPT لإعداد مذكرة قانونية تتضمن سوابق قضائية. قام النموذج بتأليف 6 قرارات قضائية كاملة من العدم بأسماء قضاة حقيقيين ومصطلحات قانونية مقنعة ولكنها وهمية تماماً.',
    incidentEn: 'Attorneys utilized ChatGPT to research judicial precedents. The model hallucinated 6 entirely bogus legal decisions complete with real judge names, convincing legal rhetoric, and fictitious docket numbers.',
    consequenceAr: 'اكتشف القاضي الفيدرالي الخدعة؛ وفرضت المحكمة غرامات وعقوبات تأديبية صارمة على المحامين مع توبيخ علني بتهمة الإهمال المهني الجسيم.',
    consequenceEn: 'Federal Judge P. Kevin Castel uncovered the fraud, imposing $5,000 judicial sanctions and public reprimands for gross professional negligence.',
    lessonAr: 'القاعدة الذهبية: الرقابة البشرية الإلزامية (Human-in-the-Loop). الذكاء الاصطناعي ليس وكيلاً قانونياً ولا يجوز تقديم مخرجاته لجهات رسمية دون مراجعة كل مرجع يدوياً.',
    lessonEn: 'Core Mandate: Human-in-the-loop verification is mandatory. LLMs are probabilistic word predictors, not licensed attorneys.',
  };

  const finalAgriCase = agriCase || {
    badgeAr: 'القضية الثانية: الزراعة الذكية ومصيدة البيانات المعملية',
    badgeEn: 'Case 2: Smart Agriculture & The Out-of-Distribution Trap',
    categoryAr: 'انحدار دقة الرؤية الحاسوبية في بيئة العمل الحقيقية',
    categoryEn: 'Computer Vision Performance Collapse in Real Field Environments',
    incidentAr: 'نموذج رؤية حاسوبية دُرب في المعمل على صور أوراق نباتات ذات خلفيات بيضاء نقية وحقق دقة 98%. عند تركيبه على جرارات في حقول واقعية هبطت الدقة إلى أقل من 45%!',
    incidentEn: 'A vision model trained on pristine white-background leaf photos reached 98% lab accuracy. Deployed on real farm tractors, accuracy collapsed below 45%!',
    consequenceAr: 'أخطأ النظام واعتبر ظلال الأشعة وانعكاسات الشمس أمراضاً فطرية، مما تسبب في رش مبيدات كيميائية باهظة دون داعٍ، بينما أهمل الآفات الحقيقية المغطاة بغبار التربة.',
    consequenceEn: 'The model confused sunlight glare and shadows with fungal lesions, triggering costly pesticide spraying on healthy crops while missing dust-covered infestations.',
    lessonAr: 'القاعدة الذهبية: تجنب فخ البيانات خارج التوزيع (Out-of-Distribution). يجب تدريب واختبار النماذج على بيانات حقلية واقعية تشمل كافة تقلبات الإضاءة والغبار.',
    lessonEn: 'Core Mandate: Robust Out-of-Distribution (OOD) training. Models must be trained and validated on rugged, variable real-world data.',
  };

  const finalMatrix = comparativeMatrix || {
    title: isEn ? 'Engineering Cross-Examination Matrix' : 'مصفوفة التحليل الهندسي والمقارنة بين الإخفاقين',
    headers: isEn
      ? ['Analysis Dimension', 'Mata v. Avianca (Legal)', 'Smart Agri Vision (Field)']
      : ['محور التحليل', 'قضية المحكمة الأمريكية (Mata v. Avianca)', 'منظومة الزراعة الذكية (Smart Agri)'],
    rows: [
      {
        dimAr: 'نوع تقنية الذكاء الاصطناعي',
        dimEn: 'AI Subfield / Technology',
        legalAr: 'ذكاء اصطناعي توليدي ونماذج لغوية (GenAI - LLMs)',
        legalEn: 'Generative AI & Large Language Models (LLM)',
        agriAr: 'تعلم عميق ورؤية حاسوبية (Deep Learning - CNN Vision)',
        agriEn: 'Deep Learning & Computer Vision (CNNs)',
      },
      {
        dimAr: 'السبب التقني الجذري للفشل',
        dimEn: 'Root Engineering Cause',
        legalAr: 'استدلال احتمالي للكلمات واختلاق مراجع (Hallucination)',
        legalEn: 'Probabilistic next-token hallucination & plausible fabrication',
        agriAr: 'بيانات تدريب معملية تختلف عن الواقع (Out-of-Distribution OOD)',
        agriEn: 'Distribution shift (clean lab dataset vs dusty shadowed field)',
      },
      {
        dimAr: 'الأثر الواقعي المترتب',
        dimEn: 'Real-World Impact',
        legalAr: 'عقوبات قضائية وتشويه السمعة المهنية للمحامين',
        legalEn: 'Federal court fines, professional censure, loss of credibility',
        agriAr: 'إهدار مالي ورش مبيدات غير ضرورية وتلوث بيئي',
        agriEn: 'Economic crop loss, excessive chemical spraying, soil toxicity',
      },
      {
        dimAr: 'الحل الهندسي والوقائي الإلزامي',
        dimEn: 'Mandatory Mitigation Remedy',
        legalAr: 'التدقيق البشري الصارم (Human-in-the-Loop) لكل كلمة ومرجع',
        legalEn: 'Strict Human-in-the-Loop verification of every legal citation',
        agriAr: 'تغذية التدريب ببيانات واقعية متغيرة (Field Data Augmentation)',
        agriEn: 'Field data augmentation, shadow simulation, edge validation',
      },
    ],
  };

  const finalLab = interactiveLab || {
    title: isEn ? 'Interactive Incident Investigator' : 'معمل المحقق التقني: تصنيف أسباب الإخفاق',
    subtitle: isEn
      ? 'Examine each engineering incident and identify whether the primary failure was Hallucination or Distribution Shift (OOD):'
      : 'افحص كل حادثة هندسية وحدد هل سبب الفشل الأساسي هو الهلوسة اللغوية أم اختلاف توزيع البيانات الواقعية (OOD):',
    scenarios: [
      {
        id: 'inc-1',
        titleAr: 'طالب استعان بنموذج ذكي لكتابة بحث تاريخي، فذكر النموذج أسماء مؤرخين خياليين كتبوا كتباً تاريخية غير موجودة في أي فهرس عالمي.',
        titleEn: 'A student used an LLM for history research; the model fabricated non-existent historian names and invented fictional book titles.',
        correctType: 'hallucination',
        typeLabelAr: 'هلوسة لغوية واحتمالية (Hallucination)',
        typeLabelEn: 'Language Hallucination',
        explanationAr: 'صحيح! النموذج اللغوي استنتج أسماء تبدو تاريخية مقنعة لغوياً لكنها مختلقة تماماً من فراغ.',
        explanationEn: 'Correct! The LLM predicted historically plausible words that are completely synthetic inventions.',
      },
      {
        id: 'inc-2',
        titleAr: 'نظام قيادة ذاتية دُرب في شوارع كاليفورنيا المشمسة، وعند اختباره في ليلة عاصفة ممطرة وموحلة في ريف أوروبي عجز عن التعرف على خطوط الطريق.',
        titleEn: 'An autonomous driving model trained under sunny California skies failed completely when driven in a muddy, rainy European country lane.',
        correctType: 'ood',
        typeLabelAr: 'اختلاف توزيع البيانات (Out-of-Distribution)',
        typeLabelEn: 'Out-of-Distribution Shift',
        explanationAr: 'صحيح! بيانات التدريب المعقمة افتقرت لظروف الطقس القاسي؛ مما أدى لانهيار النموذج عند مواجهة بيئة غير مألوفة.',
        explanationEn: 'Correct! Pristine training data lacked harsh weather conditions, causing failure under unfamiliar environmental distribution.',
      },
    ],
  };

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleSelectAnswer = (scenarioId, type) => {
    setSelectedAnswers((prev) => ({ ...prev, [scenarioId]: type }));
  };

  return (
    <div className="case-studies-page educational-page" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      {/* 1. TOPIC RIBBON */}
      <section className="topic-ribbon-card" style={{ padding: '8px 14px', backgroundColor: 'var(--color-navy-900)', borderRadius: 'var(--radius-sm)', borderInlineStart: '4px solid var(--color-amber-400)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ backgroundColor: 'var(--color-amber-500)', color: '#000', padding: '2px 8px', borderRadius: 'var(--radius-xs)', fontSize: '10.5px', fontWeight: 'bold', fontFamily: 'var(--font-code)' }}>
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

      {/* 2. INQUIRY BOX */}
      <section className="inquiry-card" style={{ padding: '8px 12px', backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: 'var(--radius-sm)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <div style={{ backgroundColor: '#fef3c7', padding: '4px', borderRadius: '50%', color: '#d97706', display: 'flex' }}>
            <Icon name="gavel" size={16} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{ fontSize: '10.5px', fontWeight: 'bold', color: '#b45309' }}>{finalInquiry.badge}</span>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-code)', backgroundColor: '#fde68a', padding: '1px 5px', borderRadius: '2px', color: '#78350f' }}>{finalInquiry.codeTag}</span>
            </div>
            <p style={{ margin: '0 0 3px', fontSize: '11.5px', fontWeight: 'bold', color: '#78350f', lineHeight: 1.35 }}>
              {finalInquiry.question}
            </p>
            <p style={{ margin: 0, fontSize: '10.5px', color: '#92400e', lineHeight: 1.3 }}>
              {finalInquiry.hint}
            </p>
          </div>
        </div>
      </section>

      {/* 3. DUAL CASE STUDIES: LEGAL VS AGRI */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-3)' }}>
        {/* Case 1: Mata v. Avianca */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-cobalt-200)', borderRadius: 'var(--radius-sm)', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: '6px', boxShadow: 'var(--shadow-xs)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--color-cobalt-100)', paddingBottom: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ backgroundColor: 'var(--color-cobalt-600)', color: '#ffffff', padding: '2px 6px', borderRadius: '3px', fontSize: '10px', fontWeight: 'bold' }}>
                {isEn ? 'CASE 01' : 'قضية 01'}
              </span>
              <strong style={{ fontSize: '11.5px', color: 'var(--color-navy-950)' }}>
                {isEn ? finalLegalCase.badgeEn : finalLegalCase.badgeAr}
              </strong>
            </div>
            <Icon name="balance" size={16} color="var(--color-cobalt-600)" />
          </div>

          <span style={{ fontSize: '10px', color: 'var(--color-cobalt-700)', fontWeight: 'bold', backgroundColor: 'var(--color-cobalt-50)', padding: '2px 6px', borderRadius: '2px' }}>
            {isEn ? finalLegalCase.categoryEn : finalLegalCase.categoryAr}
          </span>

          <div style={{ fontSize: '11px', color: 'var(--color-navy-800)', lineHeight: 1.4 }}>
            <strong style={{ color: 'var(--color-navy-950)' }}>{isEn ? 'The Incident: ' : 'الواقعة: '}</strong>
            {isEn ? finalLegalCase.incidentEn : finalLegalCase.incidentAr}
          </div>

          <div style={{ fontSize: '11px', color: '#991b1b', backgroundColor: '#fef2f2', padding: '6px 8px', borderRadius: '4px', border: '1px solid #fecaca', lineHeight: 1.35 }}>
            <strong>{isEn ? 'The Consequence: ' : 'العقوبة والتداعيات: '}</strong>
            {isEn ? finalLegalCase.consequenceEn : finalLegalCase.consequenceAr}
          </div>

          <div style={{ fontSize: '10.5px', color: '#166534', backgroundColor: '#f0fdf4', padding: '5px 8px', borderRadius: '4px', border: '1px solid #bbf7d0', marginTop: 'auto', lineHeight: 1.3 }}>
            <strong>{isEn ? 'Takeaway: ' : 'الدرس المهني: '}</strong>
            {isEn ? finalLegalCase.lessonEn : finalLegalCase.lessonAr}
          </div>
        </div>

        {/* Case 2: Smart Agriculture OOD */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-teal-200)', borderRadius: 'var(--radius-sm)', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: '6px', boxShadow: 'var(--shadow-xs)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--color-teal-100)', paddingBottom: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ backgroundColor: '#0f766e', color: '#ffffff', padding: '2px 6px', borderRadius: '3px', fontSize: '10px', fontWeight: 'bold' }}>
                {isEn ? 'CASE 02' : 'قضية 02'}
              </span>
              <strong style={{ fontSize: '11.5px', color: 'var(--color-navy-950)' }}>
                {isEn ? finalAgriCase.badgeEn : finalAgriCase.badgeAr}
              </strong>
            </div>
            <Icon name="eco" size={16} color="#0f766e" />
          </div>

          <span style={{ fontSize: '10px', color: '#0f766e', fontWeight: 'bold', backgroundColor: 'var(--color-teal-50)', padding: '2px 6px', borderRadius: '2px' }}>
            {isEn ? finalAgriCase.categoryEn : finalAgriCase.categoryAr}
          </span>

          <div style={{ fontSize: '11px', color: 'var(--color-navy-800)', lineHeight: 1.4 }}>
            <strong style={{ color: 'var(--color-navy-950)' }}>{isEn ? 'The Incident: ' : 'الواقعة: '}</strong>
            {isEn ? finalAgriCase.incidentEn : finalAgriCase.incidentAr}
          </div>

          <div style={{ fontSize: '11px', color: '#9a3412', backgroundColor: '#fff7ed', padding: '6px 8px', borderRadius: '4px', border: '1px solid #fed7aa', lineHeight: 1.35 }}>
            <strong>{isEn ? 'The Consequence: ' : 'العقوبة والتداعيات: '}</strong>
            {isEn ? finalAgriCase.consequenceEn : finalAgriCase.consequenceAr}
          </div>

          <div style={{ fontSize: '10.5px', color: '#166534', backgroundColor: '#f0fdf4', padding: '5px 8px', borderRadius: '4px', border: '1px solid #bbf7d0', marginTop: 'auto', lineHeight: 1.3 }}>
            <strong>{isEn ? 'Takeaway: ' : 'الدرس المهني: '}</strong>
            {isEn ? finalAgriCase.lessonEn : finalAgriCase.lessonAr}
          </div>
        </div>
      </section>

      {/* 4. COMPARATIVE ENGINEERING ANALYSIS TABLE */}
      <section style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-navy-200)', borderRadius: 'var(--radius-sm)', padding: '10px 12px', boxShadow: 'var(--shadow-xs)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Icon name="table_chart" size={15} color="var(--color-cobalt-600)" />
          <h2 style={{ fontSize: '12px', fontWeight: 'bold', margin: 0, color: 'var(--color-navy-950)' }}>
            {finalMatrix.title}
          </h2>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10.5px', textAlign: isEn ? 'left' : 'right' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-navy-900)', color: '#ffffff' }}>
                <th style={{ padding: '5px 8px', border: '1px solid var(--color-navy-700)', width: '22%' }}>{finalMatrix.headers[0]}</th>
                <th style={{ padding: '5px 8px', border: '1px solid var(--color-navy-700)', width: '39%', color: 'var(--color-amber-300)' }}>{finalMatrix.headers[1]}</th>
                <th style={{ padding: '5px 8px', border: '1px solid var(--color-navy-700)', width: '39%', color: 'var(--color-teal-300)' }}>{finalMatrix.headers[2]}</th>
              </tr>
            </thead>
            <tbody>
              {finalMatrix.rows.map((row, idx) => (
                <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#f8fafc' : '#ffffff' }}>
                  <td style={{ padding: '5px 8px', border: '1px solid var(--color-navy-200)', fontWeight: 'bold', color: 'var(--color-navy-900)' }}>
                    {isEn ? row.dimEn : row.dimAr}
                  </td>
                  <td style={{ padding: '5px 8px', border: '1px solid var(--color-navy-200)', color: 'var(--color-navy-800)', lineHeight: 1.3 }}>
                    {isEn ? row.legalEn : row.legalAr}
                  </td>
                  <td style={{ padding: '5px 8px', border: '1px solid var(--color-navy-200)', color: 'var(--color-navy-800)', lineHeight: 1.3 }}>
                    {isEn ? row.agriEn : row.agriAr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. INTERACTIVE FAILURE ANALYSIS LAB */}
      <section style={{ backgroundColor: '#f8fafc', border: '1px solid var(--color-navy-200)', borderRadius: 'var(--radius-sm)', padding: '10px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ backgroundColor: 'var(--color-cobalt-100)', color: 'var(--color-cobalt-800)', padding: '2px 6px', borderRadius: '3px', fontSize: '10px', fontWeight: 'bold' }}>
              LAB
            </span>
            <h3 style={{ fontSize: '11.5px', fontWeight: 'bold', margin: 0, color: 'var(--color-navy-950)' }}>
              {finalLab.title}
            </h3>
          </div>
          <span style={{ fontSize: '9.5px', color: 'var(--color-navy-500)' }}>
            {finalLab.subtitle}
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {finalLab.scenarios.map((sc) => {
            const currentChoice = selectedAnswers[sc.id];
            const isAnswered = currentChoice !== undefined;
            const isCorrect = isAnswered && currentChoice === sc.correctType;

            return (
              <div key={sc.id} style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-navy-200)', borderRadius: '4px', padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <p style={{ margin: 0, fontSize: '10.5px', color: 'var(--color-navy-900)', lineHeight: 1.35 }}>
                  {isEn ? sc.titleEn : sc.titleAr}
                </p>

                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    type="button"
                    onClick={() => handleSelectAnswer(sc.id, 'hallucination')}
                    style={{
                      flex: 1,
                      padding: '4px 6px',
                      fontSize: '9.5px',
                      fontWeight: 'bold',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      border: currentChoice === 'hallucination' ? '1px solid var(--color-amber-500)' : '1px solid var(--color-navy-300)',
                      backgroundColor: currentChoice === 'hallucination' ? '#fef3c7' : '#ffffff',
                      color: currentChoice === 'hallucination' ? '#92400e' : 'var(--color-navy-700)',
                    }}
                  >
                    {isEn ? 'Hallucination' : 'هلوسة لغوية'}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectAnswer(sc.id, 'ood')}
                    style={{
                      flex: 1,
                      padding: '4px 6px',
                      fontSize: '9.5px',
                      fontWeight: 'bold',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      border: currentChoice === 'ood' ? '1px solid var(--color-teal-500)' : '1px solid var(--color-navy-300)',
                      backgroundColor: currentChoice === 'ood' ? '#ccfbf1' : '#ffffff',
                      color: currentChoice === 'ood' ? '#0f766e' : 'var(--color-navy-700)',
                    }}
                  >
                    {isEn ? 'Shift (OOD)' : 'توزيع بيانات (OOD)'}
                  </button>
                </div>

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
                    {isCorrect
                      ? (isEn ? sc.explanationEn : sc.explanationAr)
                      : (isEn ? 'Incorrect choice. Review whether words were invented or sensors faced unfamiliar field conditions.' : 'اختيار غير دقيق. راجع هل تم تأليف نصوص من العدم أم أن الحساسات واجهت بيئة خارجية غير مألوفة؟')}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
