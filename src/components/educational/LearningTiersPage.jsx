import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * LearningTiersPage (Lesson 1-2, Page 02)
 * Topic: مستويات التعلم والتعمق المعماري: الآلي، والعميق، والتوليدي
 * Scope: Detailed breakdown of ML (Training/Testing split), DL (Multi-layer ANNs, Auto-feature extraction), GenAI (Discriminative vs Generative), Comparison Matrix
 */
export default function LearningTiersPage({
  topicRibbon,
  inquiry,
  tiers,
  comparisonMatrix,
  quickCheck,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultTopicRibbon = {
    number: '02',
    unitTitle: isEn ? 'Unit 1: Computing & AI Fundamentals' : 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    lessonCode: isEn ? 'Lesson 1-2' : 'الدرس 1-2',
    subBadge: isEn ? 'Architectural Learning Tiers' : 'العمق المعماري ومستويات التعلم',
    title: isEn
      ? 'Learning Tiers & Architectural Depth: ML, Deep Learning & Generative AI'
      : 'مستويات التعلم والتعمق المعماري: الآلي، والعميق، والتوليدي',
    chapterTag: 'CH-01 // PAGE 02',
  };
  const finalTopicRibbon = topicRibbon || defaultTopicRibbon;

  const finalInquiry = inquiry || {
    badge: isEn ? 'Architectural Inquiry' : 'تساؤل هندسي بنيوي',
    codeTag: 'Q-TIERS',
    question: isEn
      ? '"How does an email spam filter differ fundamentally from an autonomous self-driving car, and from ChatGPT authoring an original poem?"'
      : '"كيف يختلف فلتر البريد المزعج (Spam Filter) في بنيته جذرياً عن سيارة تسلا ذاتية القيادة، وعن ChatGPT وهو يصوغ قصيدة أدبية أصلية؟"',
    hint: isEn
      ? 'Each level climbs higher in complexity: from structured statistical learning, to layered perception, to creative content synthesis.'
      : 'كل مستوى يرتقي درجة في سلم التعقيد: من التعلم الإحصائي للبيانات المهيكلة، إلى الإدراك الحسي الطبقي، وصولاً إلى التخليق الإبداعي.',
  };

  const finalTiers = tiers || [
    {
      id: 'ml-tier',
      level: 'TIER 01',
      badgeAr: 'المستوى الأول: تعلم الآلة (ML)',
      badgeEn: 'Tier 1: Machine Learning (ML)',
      tagAr: 'استخلاص الأنماط ذاتياً',
      tagEn: 'Autonomous Pattern Extraction',
      themeColor: 'teal',
      borderColor: 'var(--color-teal-300)',
      bgHeader: 'var(--color-teal-50)',
      icon: 'insights',
      coreConceptAr: 'بدلاً من كتابة قواعد صلبة، يتغذى النظام ببيانات التدريب لاكتشاف العلاقات الرياضية بين المدخلات والمخرجات ذاتياً.',
      coreConceptEn: 'Instead of explicit rules, the system digests training data to autonomously discover mathematical correlations between inputs and outputs.',
      subFeatureBadgeAr: 'تقسيم البيانات المعياري (Train / Test Split)',
      subFeatureBadgeEn: 'Standard Data Partition (Train / Test Split)',
      subFeatureDescAr: 'يتم تقسيم البيانات بدقة إلى 80% بيانات تدريب (Training) لبناء النموذج، و 20% بيانات اختبار (Testing) للتحقق من التعميم ومنع الحفظ الأعمى (Overfitting).',
      subFeatureDescEn: 'Data is strictly split into ~80% Training Data to fit the model and ~20% Testing Data to evaluate generalization on unseen cases and avoid overfitting.',
      applicationsAr: 'فلاتر البريد المزعج (Spam)، أنظمة ترشيح الفيديوهات، التنبؤ بأسعار العقارات.',
      applicationsEn: 'Email spam detection, video recommendation engines, real estate price forecasting.',
    },
    {
      id: 'dl-tier',
      level: 'TIER 02',
      badgeAr: 'المستوى الثاني: التعلم العميق (DL)',
      badgeEn: 'Tier 2: Deep Learning (DL)',
      tagAr: 'الشبكات العصبية متعددة الطبقات',
      tagEn: 'Multi-Layer Neural Networks',
      themeColor: 'indigo',
      borderColor: 'var(--color-indigo-200, #c7d2fe)',
      bgHeader: 'var(--color-indigo-50, #eef2ff)',
      icon: 'account_tree',
      coreConceptAr: 'يعتمد على شبكات عصبية اصطناعية عميقة (Deep ANNs) تتكون من طبقات متعددة تحاكي ترابط الخلايا العصبية في الدماغ البشري.',
      coreConceptEn: 'Powered by Deep Artificial Neural Networks (Deep ANNs) with numerous hidden layers mimicking biological synaptic interconnects.',
      subFeatureBadgeAr: 'استخراج الميزات التلقائي (Automatic Feature Extraction)',
      subFeatureBadgeEn: 'Automatic Feature Extraction (No Manual Engineering)',
      subFeatureDescAr: 'لا يتطلب من مهندس البرمجيات تحديد الميزات يدوياً؛ فالشبكة تستخلص بنفسها الحواف والزوايا والأشكال المعقدة من البيانات الخام غير المهيكلة (كالصور والصوت).',
      subFeatureDescEn: 'Eliminates manual feature engineering; internal layers automatically extract low-level edges up to high-level complex concepts from raw images and audio.',
      applicationsAr: 'القيادة الذاتية (رصد المشاة والإشارات)، تشخيص أورام الأشعة الطبية، التعرف على الوجوه.',
      applicationsEn: 'Autonomous driving perception, medical MRI tumor detection, instant facial recognition.',
    },
    {
      id: 'genai-tier',
      level: 'TIER 03',
      badgeAr: 'المستوى الثالث: الذكاء التوليدي (GenAI)',
      badgeEn: 'Tier 3: Generative AI (GenAI)',
      tagAr: 'التخليق والابتكار غير المسبوق',
      tagEn: 'Creative Synthesis of Novel Artifacts',
      themeColor: 'amber',
      borderColor: '#fde68a',
      bgHeader: '#fffbeb',
      icon: 'auto_awesome',
      coreConceptAr: 'قفزة نوعية من النماذج التمييزية (التي تكتفي بالتصنيف) إلى النماذج التوليدية القادرة على تخليق وإنتاج محتوى جديد لم يكن موجوداً من قبل.',
      coreConceptEn: 'A paradigm leap from discriminative models (classifying existing artifacts) to generative models synthesizing entirely new content from prompts.',
      subFeatureBadgeAr: 'النماذج اللغوية التأسيسية (Foundation LLMs & Diffusion)',
      subFeatureBadgeEn: 'Foundation Models & Next-Token Synthesis',
      subFeatureDescAr: 'مدربة على تريليونات الرموز لاستيعاب بنية المعرفة البشرية وتوليد نصوص وصور وأكواد وموسيقى استناداً للأوامر والتوجيهات (Prompts).',
      subFeatureDescEn: 'Pretrained on trillions of tokens across human knowledge to synthesize articulate essays, photorealistic artwork, and software code on demand.',
      applicationsAr: 'المساعدات الذكية (ChatGPT, Claude)، مولدات التصميم (Midjourney)، وكلاء البرمجة (Copilot).',
      applicationsEn: 'Conversational LLMs (ChatGPT, Claude), visual synthesizers (Midjourney), AI code assistants.',
    },
  ];

  const finalComparisonMatrix = comparisonMatrix || {
    title: isEn ? 'Rigorous Architectural Comparison Matrix' : 'مصفوفة التمييز والمقارنة المعمارية الصارمة',
    headers: [
      isEn ? 'Evaluation Dimension' : 'محور المقارنة',
      isEn ? 'Machine Learning (ML)' : 'تعلم الآلة (ML)',
      isEn ? 'Deep Learning (DL)' : 'التعلم العميق (DL)',
      isEn ? 'Generative AI (GenAI)' : 'الذكاء التوليدي (GenAI)',
    ],
    rows: [
      {
        dimensionAr: 'نوع البيانات الأساسية',
        dimensionEn: 'Primary Data Type',
        mlAr: 'بيانات مهيكلة وجداول (Structured Numbers/Tables)',
        mlEn: 'Structured numerical and tabular data',
        dlAr: 'بيانات ضخمة غير مهيكلة (صور، فيديو، صوت)',
        dlEn: 'Massive unstructured data (Images, Audio, Video)',
        genAr: 'مستودعات معرفية متعددة الوسائط (Multimodal Big Data)',
        genEn: 'Trillions of tokens across web-scale text & imagery',
      },
      {
        dimensionAr: 'دور المهندس البشري',
        dimensionEn: 'Human Engineer Role',
        mlAr: 'هندسة ميزات يدوية (Feature Engineering)',
        mlEn: 'Manual feature engineering and selection',
        dlAr: 'ضبط معمارية الشبكة ودوال الخسارة (Architecture Tuning)',
        dlEn: 'Designing network topology and loss functions',
        genAr: 'هندسة الأوامر والمحاذاة الأخلاقية (Prompt & Alignment)',
        genEn: 'Prompt engineering, RLHF alignment, and safety guards',
      },
      {
        dimensionAr: 'طبيعة المخرج الناتج',
        dimensionEn: 'Nature of Output',
        mlAr: 'رقم، تصنيف، أو تنبؤ إحصائي (0 أو 1)',
        mlEn: 'Numerical prediction, class label (0/1), or regression',
        dlAr: 'تحديد دقيق للميزات والأنماط المعقدة (Bounding Box, Seg)',
        dlEn: 'Semantic segmentation, bounding boxes, voice audio',
        genAr: 'محتوى تركيبي جديد كلياً (نص، صورة، كود كامل)',
        genEn: 'Novel synthesized artifacts (Narrative text, art, code)',
      },
      {
        dimensionAr: 'المثال القياسي النموذجي',
        dimensionEn: 'Canonical Example',
        mlAr: 'فلتر البريد العشوائي (Spam Filter)',
        mlEn: 'Spam email filter & fraud detector',
        dlAr: 'رؤية الحاسوب للسيارات الذاتية (Tesla Vision)',
        dlEn: 'Autonomous vehicle computer vision & MRI diagnostics',
        genAr: 'المساعد اللغوي ومولد الصور (ChatGPT / Midjourney)',
        genEn: 'ChatGPT, Claude, Midjourney, GitHub Copilot',
      },
    ],
  };

  const finalQuickCheck = quickCheck || {
    title: isEn ? 'Concept Mastery Check' : 'نشاط التحقق والتمييز المعماري الفوري',
    scenarioAr: 'إذا أردت بناء نظام يقرأ الأشعة السينية ويكتشف الكسور تلقائياً دون أن تخبره بمواصفات الكسر مسبقاً، أي مستوى ستختار ولماذا؟',
    scenarioEn: 'If tasked with diagnosing bone fractures from X-ray scans automatically without manually coding edge coordinates, which tier would you deploy and why?',
    answerAr: 'التعلم العميق (DL): لأنه يستخرج الميزات البصرية من صور الأشعة تلقائياً عبر طبقات الشبكة العصبية دون حاجة للتدخل البشري لتحديد مكان الحواف.',
    answerEn: 'Deep Learning (DL): Because its layered convolutional architecture automatically extracts subtle fracture features directly from pixel grids without human engineering.',
  };

  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      className="educational-page learning-tiers-page"
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
          backgroundColor: 'var(--color-teal-50)',
          border: '1px solid var(--color-teal-200)',
          borderInlineStart: '4px solid var(--color-teal-600)',
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
            border: '1px solid var(--color-teal-300)',
          }}
        >
          <Icon name="layers" size={18} color="var(--color-teal-700)" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
            <span
              className="font-heading"
              style={{
                fontSize: '10px',
                fontWeight: 'bold',
                color: 'var(--color-teal-800)',
                backgroundColor: 'rgba(13, 148, 136, 0.15)',
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

      {/* 3. The 3 Architectural Tiers Detailed Cards */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '6px',
        }}
      >
        {finalTiers.map((tier) => {
          return (
            <div
              key={tier.id}
              style={{
                backgroundColor: '#ffffff',
                border: `1.5px solid ${tier.borderColor}`,
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-2xs)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden',
              }}
            >
              {/* Tier Header */}
              <div
                style={{
                  backgroundColor: tier.bgHeader,
                  padding: '6px 8px',
                  borderBottom: `1px solid ${tier.borderColor}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Icon name={tier.icon} size={16} color="var(--color-navy-900)" />
                  <strong
                    className="font-heading"
                    style={{ fontSize: '11.5px', color: 'var(--color-navy-950)' }}
                  >
                    {isEn ? tier.badgeEn : tier.badgeAr}
                  </strong>
                </div>
                <span
                  style={{
                    fontSize: '9px',
                    fontFamily: 'var(--font-code)',
                    fontWeight: 'bold',
                    color: 'var(--color-navy-700)',
                    backgroundColor: '#ffffff',
                    padding: '1px 5px',
                    borderRadius: '2px',
                    border: `1px solid ${tier.borderColor}`,
                  }}
                >
                  {tier.level}
                </span>
              </div>

              {/* Tier Body */}
              <div style={{ padding: '6px 8px', flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <p
                  style={{
                    fontSize: '11px',
                    color: 'var(--color-navy-900)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {isEn ? tier.coreConceptEn : tier.coreConceptAr}
                </p>

                {/* Subfeature badge box (Data Split / Auto Feature / LLMs) */}
                <div
                  style={{
                    backgroundColor: 'var(--color-navy-50)',
                    border: '1px solid var(--color-navy-150, #cbd5e1)',
                    borderRadius: 'var(--radius-xs)',
                    padding: '4px 6px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '9.5px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 'bold',
                      color: 'var(--color-cobalt-700)',
                      marginBottom: '2px',
                    }}
                  >
                    {isEn ? tier.subFeatureBadgeEn : tier.subFeatureBadgeAr}
                  </div>
                  <div
                    style={{
                      fontSize: '10px',
                      color: 'var(--color-neutral-700)',
                      lineHeight: 1.25,
                    }}
                  >
                    {isEn ? tier.subFeatureDescEn : tier.subFeatureDescAr}
                  </div>
                </div>

                {/* Applications Strip */}
                <div
                  style={{
                    fontSize: '10px',
                    color: 'var(--color-navy-900)',
                    marginTop: 'auto',
                    paddingTop: '4px',
                    borderTop: '1px dashed var(--color-neutral-200)',
                  }}
                >
                  <strong style={{ color: 'var(--color-neutral-600)' }}>
                    {isEn ? 'Real-world: ' : 'التطبيق الواقعي: '}
                  </strong>
                  <span>{isEn ? tier.applicationsEn : tier.applicationsAr}</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. Comparison Matrix Table */}
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
            <Icon name="table_chart" size={16} color="var(--color-cobalt-700)" />
            <strong
              className="font-heading"
              style={{ fontSize: '11.5px', color: 'var(--color-navy-950)' }}
            >
              {finalComparisonMatrix.title}
            </strong>
          </div>
          <span
            className="font-code"
            style={{
              fontSize: '9px',
              color: 'var(--color-cobalt-700)',
              backgroundColor: 'var(--color-cobalt-50)',
              padding: '1px 6px',
              borderRadius: '3px',
            }}
          >
            TAXONOMY BENCHMARK
          </span>
        </div>

        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '10px',
            textAlign: isEn ? 'left' : 'right',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: 'var(--color-navy-900)', color: '#ffffff' }}>
              {finalComparisonMatrix.headers.map((h, i) => (
                <th
                  key={i}
                  style={{
                    padding: '4px 6px',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 'bold',
                    border: '1px solid var(--color-navy-800)',
                    fontSize: '10px',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {finalComparisonMatrix.rows.map((row, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundColor: idx % 2 === 0 ? '#ffffff' : 'var(--color-navy-50)',
                  borderBottom: '1px solid var(--color-navy-150, #e2e8f0)',
                }}
              >
                <td
                  style={{
                    padding: '3px 6px',
                    fontWeight: 'bold',
                    color: 'var(--color-navy-950)',
                    borderInlineEnd: '1px solid var(--color-navy-200)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {isEn ? row.dimensionEn : row.dimensionAr}
                </td>
                <td style={{ padding: '3px 6px', color: 'var(--color-teal-900)' }}>
                  {isEn ? row.mlEn : row.mlAr}
                </td>
                <td style={{ padding: '3px 6px', color: '#4338ca' }}>
                  {isEn ? row.dlEn : row.dlAr}
                </td>
                <td style={{ padding: '3px 6px', color: '#92400e' }}>
                  {isEn ? row.genEn : row.genAr}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 5. Concept Mastery Quick Check Lab */}
      <section
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid var(--color-neutral-200)',
          borderInlineStart: '4px solid var(--color-cobalt-600)',
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
            <Icon name="psychology" size={16} color="var(--color-cobalt-700)" />
            <strong
              className="font-heading"
              style={{ fontSize: '11.5px', color: 'var(--color-navy-950)' }}
            >
              {finalQuickCheck.title}
            </strong>
          </div>
          <button
            type="button"
            onClick={() => setShowAnswer(!showAnswer)}
            style={{
              padding: '2px 8px',
              fontSize: '10px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 'bold',
              borderRadius: '3px',
              border: '1px solid var(--color-cobalt-600)',
              backgroundColor: showAnswer ? 'var(--color-cobalt-600)' : '#ffffff',
              color: showAnswer ? '#ffffff' : 'var(--color-cobalt-700)',
              cursor: 'pointer',
            }}
          >
            {showAnswer
              ? isEn
                ? 'Hide Verification ▴'
                : 'إخفاء التحليل ▴'
              : isEn
              ? 'Reveal Model Verdict ▾'
              : 'اعرض التحليل النموذجي ▾'}
          </button>
        </div>

        <p
          className="font-heading"
          style={{
            fontSize: '11px',
            fontWeight: '600',
            color: 'var(--color-navy-900)',
            margin: '0 0 4px 0',
            lineHeight: 1.3,
          }}
        >
          {isEn ? finalQuickCheck.scenarioEn : finalQuickCheck.scenarioAr}
        </p>

        {showAnswer && (
          <div
            style={{
              backgroundColor: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: 'var(--radius-xs)',
              padding: '4px 8px',
              fontSize: '10.5px',
              color: '#14532d',
              lineHeight: 1.3,
              marginTop: '4px',
            }}
          >
            <strong style={{ color: '#166534' }}>
              {isEn ? 'Architectural Recommendation: ' : 'التوصية المعمارية النموذجية: '}
            </strong>
            {isEn ? finalQuickCheck.answerEn : finalQuickCheck.answerAr}
          </div>
        )}
      </section>
    </div>
  );
}
