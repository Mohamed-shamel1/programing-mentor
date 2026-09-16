import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * Lesson 1-1 Page 06: Augmented Reality vs Virtual Reality & Quantum Computing
 * (الواقع المعزز مقابل الواقع الافتراضي والحوسبة الكمومية)
 *
 * Pedagogical Architecture:
 * 1. Topic Ribbon Header (Breadcrumbs, Ministry Standard Badge 2026, Section Code)
 * 2. Side-by-Side Reality Comparison (AR with 0% sensory isolation vs VR with 100% immersion)
 * 3. Misconception Alert #3 (Hardware lenses vs Architectural intent)
 * 4. Deep Dive Analysis: Quantum Computing, Superposition, Qubit & Real-World Car/Bike Analogy
 * 5. Interactive Applied Activity (Surgeon dilemma with choice & ruled student handwriting lines)
 * 6. Authentic Ministry Textbook Footer
 */
export default function ArVrQuantumPage({
  topicRibbon,
  comparisonCards,
  misconceptionAlert,
  quantumSection,
  activity,
  footerNote,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultTopicRibbon = {
    number: '06',
    unitTitle: isEn ? 'MODULE 01 • LESSON 1-1' : 'MODULE 01 • LESSON 1-1',
    lessonCode: isEn ? 'Core Technical Concepts' : 'المفاهيم التقنية المحورية',
    subBadge: isEn ? 'Ministry Standard 2026' : 'معيار قياس الوزارة 2026',
    title: isEn
      ? 'Augmented Reality vs. Virtual Reality: Adding to Reality or Replacing It?'
      : 'الواقع المعزز مقابل الواقع الافتراضي: هل تضيف إلى الواقع أم تستبدله؟',
    chapterTag: 'AR-VR-QUANTUM // PAGE 06',
    deepDiveTag: 'SECTION 1.4',
  };
  const finalTopicRibbon = topicRibbon || defaultTopicRibbon;

  const defaultComparisonCards = {
    ar: {
      code: 'AR',
      title: isEn ? 'Augmented Reality (AR)' : 'الواقع المعزز (Augmented Reality)',
      badge: isEn ? 'Perceptual Overlay' : 'طبقة إدراك إضافية',
      conceptHeading: isEn ? 'Core Concept:' : 'المفهوم الأساسي:',
      conceptText: isEn
        ? 'The physical real world remains visually present, while computer systems project interactive 3D digital assets and contextual telemetry on top without occluding reality.'
        : 'يظل العالم الواقعي الحقيقي حاضراً ومشاهداً بالعين، بينما تسقط النظم الرقمية عناصر حاسوبية ذكية وبيانات ثلاثية الأبعاد تفاعلية تعزز بيئة المستخدم دون حجبها.',
      examplesTitle: isEn ? 'Real-World Applications:' : 'تطبيقات وأمثلة واقعية:',
      examplesIcon: 'devices',
      examples: isEn
        ? [
            'Camera live filters on smartphones (e.g. social platforms).',
            'Surgical HUD smart glasses: Projecting patient vital signs, vessel branches, and incisions live onto their body during operations.',
          ]
        : [
            'فلاتر الكاميرا الحية على منصات الهواتف (مثل Instagram).',
            'نظارات الجراحين الطبية الذكية: إسقاط نبض المريض وموضع الشرايين وتفرعاتها على جسده الحي مباشرة أثناء الشق الجراحي.',
          ],
      meterLabel: isEn ? 'Sensory Isolation Level:' : 'معدل العزل الحسي والبيئي:',
      meterValue: isEn ? '0% Isolation (Open Environment)' : '0% عزل (بيئة مفتوحة)',
      meterPercent: 4,
    },
    vr: {
      code: 'VR',
      title: isEn ? 'Virtual Reality (VR)' : 'الواقع الافتراضي (Virtual Reality)',
      badge: isEn ? 'Total Environmental Replacement' : 'استبدال كامل للمحيط',
      conceptHeading: isEn ? 'Core Concept:' : 'المفهوم الأساسي:',
      conceptText: isEn
        ? 'Total sensory occlusion from physical surroundings, redirecting user consciousness into an entirely synthesized stereoscopic digital environment.'
        : 'حجب تام وشامل للحواس عن المحيط المادي الفعلي، ونقل تركيز ووعي المستخدم كلياً إلى بيئة رقمية مصممة ومولدة رقمياً برسوميات تحاكي عالماً بديلاً.',
      examplesTitle: isEn ? 'Real-World Applications:' : 'تطبيقات وأمثلة واقعية:',
      examplesIcon: 'sports_esports',
      examples: isEn
        ? [
            'Full immersion VR gaming headsets and interactive simulations.',
            'Flight simulators and astronaut training inside completely simulated space station capsules.',
          ]
        : [
            'خوذات الانغماس البصري الكامل المخصصة للألعاب التفاعلية.',
            'محاكيات الطيران الميداني وتدريب رواد الفضاء على مناورات الكبسولة داخل محطة فضائية مغلقة بالكامل.',
          ],
      meterLabel: isEn ? 'Sensory Isolation Level:' : 'معدل العزل الحسي والبيئي:',
      meterValue: isEn ? '100% Total Isolation (Full Immersion)' : '100% عزل تام (انغماس كامل)',
      meterPercent: 100,
    },
  };
  const finalComparisonCards = comparisonCards || defaultComparisonCards;

  const defaultMisconceptionAlert = {
    badge: isEn ? 'Misconception Correction #3' : 'تصحيح مفاهيم خاطئة #3',
    title: isEn ? 'Do Screens Make Them the Same Tech?' : 'هل الشاشات تجعلهما تقنية واحدة؟',
    quote: isEn
      ? '“AR and VR are not two sides of the same coin merely because both use lenses; the fundamental architectural question is: Do you see the physical world with enhancements, or has your surrounding reality been entirely replaced?”'
      : '«الواقع المعزز والواقع الافتراضي ليسا وجهين لعملة واحدة لمجرد اعتمادهما على عدسات وشاشات؛ الفارق الهندسي الجوهري هو: هل ترى العالم المادي الحقيقي ويُضاف إليه محتوى داعم، أم تم استبدال الواقع المحيط بك بالكامل ببيئة اصطناعية؟»',
  };
  const finalMisconception = misconceptionAlert || defaultMisconceptionAlert;

  const defaultQuantumSection = {
    sectionTag: 'SECTION 1.4',
    subTitle: 'Deep Dive Analysis',
    title: isEn
      ? 'Quantum Computing: The Qubit & Superposition Analogy'
      : 'الحوسبة الكمومية: التشبيه الهندسي المبسط والكيوبت (Qubit)',
    theoryText: isEn
      ? 'Classical computers rely on the binary Bit (strictly 0 or 1). Quantum computing harnesses the Qubit exploiting Superposition, representing probabilistic combinations of 0 and 1 simultaneously to solve complex combinatorial problems in parallel.'
      : 'تعتمد الحواسيب التقليدية على البت (Bit) الذي يأخذ قيمة محددة وصارمة إما 0 أو 1. في المقابل، توظف الحوسبة الكمومية الكيوبت (Qubit) مستفيدة من ظاهرة التراكب الكمي (Superposition)، ما يتيح تمثيل حالات احتمالية متعددة لـ 0 و 1 في آنٍ واحد، وحل مسارات حسابية معقدة بالتوازي الفائق.',
    commonError: {
      badge: isEn ? 'Common Error Correction #4:' : 'تصحيح الخطأ الشائع الرابع:',
      text: isEn
        ? 'A quantum computer is not a general replacement for home PCs or phones; it will not make web browsing faster! It is a hyper-specialized machine for cryptography, molecular drug simulation, and optimization.'
        : 'الحاسوب الكمومي ليس بديلاً عاماً للحواسيب المنزلية والهواتف الذكية، ولن يجعلك تتصفح الإنترنت أو تشاهد الفيديو أسرع! إنه وحدة تخصصية فائقة التميز في حل ألغاز حسابية معينة كالتشفير ومحاكاة الجزيئات الدوائية.',
    },
    analogy: {
      title: isEn ? 'Intuitive Real-World Analogy:' : 'التشبيه الميداني التوضيحي:',
      leftItem: isEn ? 'Car' : 'السيارة',
      vsText: isEn ? 'vs' : 'مقابل',
      rightItem: isEn ? 'Bicycle' : 'الدراجة الهوائية',
      carDesc: isEn
        ? 'The Car (Classical Computer): Ideal and extremely fast on open highways, representing the perfect vehicle for all general day-to-day requirements.'
        : 'السيارة (الحاسوب الكلاسيكي): مثالية وسريعة للغاية على الطرق المفتوحة وتمثل الحل الأمثل لكافة متطلبات حياتنا اليومية.',
      bikeDesc: isEn
        ? 'The Bicycle (Quantum Computer): Seems unsuited for open superhighways, but is uniquely capable of traversing ultra-narrow, winding alleys (mathematical puzzles intractable classically).'
        : 'الدراجة (الحاسوب الكمومي): قد تبدو غير مجدية على الطرق السريعة العامة، لكنها الحل الفردي القادر على النفاذ في الأزقة الشديدة الضيق والالتواء (المعضلات الرياضية المستحيلة كلاسيكياً).',
      bitPill: { label: 'Bit', sub: isEn ? 'Deterministic Binary (0 or 1)' : 'ثنائي محدد (0 أو 1)' },
      qubitPill: { label: 'Qubit', sub: isEn ? 'Continuous Superposition' : 'تراكب احتمالي مستمر' },
    },
  };
  const finalQuantum = quantumSection || defaultQuantumSection;

  const defaultActivity = {
    title: isEn ? 'Critical Thinking & Practical Application' : 'سؤال التفكير النقدي والتطبيق العملي',
    scenario: isEn
      ? 'If you were a neurosurgeon performing delicate brain surgery, which technology (AR or VR) would you rely on to assist without losing direct sight of your hands and surgical instruments? Why?'
      : 'لو كنت جراحاً متخصصاً تجري عملية دقيقة في المخ داخل غرفة العمليات، أي التقنيتين (AR أم VR) ستعتمد لمساعدتك على إتمام الجراحة دون أن تفقد اتصالك البصري المباشر بيديك وأدواتك الحية؟ ولماذا؟',
    options: [
      { id: 'ar', label: isEn ? 'A) Augmented Reality (AR)' : 'أ) الواقع المعزز (Augmented Reality - AR)', isCorrect: true },
      { id: 'vr', label: isEn ? 'B) Virtual Reality (VR)' : 'ب) الواقع الافتراضي (Virtual Reality - VR)', isCorrect: false },
    ],
    reasoningPrompt: isEn ? 'Engineering & logical rationale for your choice:' : 'التعليل الهندسي والمنطقي لاختيارك:',
    ruledLinesCount: 2,
  };
  const finalActivity = activity || defaultActivity;

  const defaultFooterNote = {
    author: isEn ? 'Mohamed Shamel Mohamed' : 'الأستاذ / محمد شامل محمد',
    authorTitle: isEn ? 'Curriculum & Computer Science Expert' : 'خبير تكنولوجيا المعلومات والذكاء الاصطناعي',
    pageLabel: isEn ? 'Page 06' : 'PAGE 06',
    academicYear: isEn ? 'Academic Year 2026-2027' : 'العام الدراسي 2026-2027 م',
  };
  const finalFooter = footerNote || defaultFooterNote;

  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <div className="educational-page ar-vr-quantum-page">
      {/* 1. Ribbon Header */}
      <section className="avq-ribbon-header">
        <div className="ribbon-right">
          <div className="avq-icon-box">
            <Icon name="view_in_ar" size={22} color="#ffffff" />
          </div>
          <div>
            <div className="ribbon-breadcrumbs">
              <span>{finalTopicRibbon.unitTitle}</span>
              <span className="bullet">•</span>
              <span>{finalTopicRibbon.lessonCode}</span>
            </div>
            <h1 className="ribbon-title font-heading">{finalTopicRibbon.title}</h1>
          </div>
        </div>

        <div className="avq-header-badges">
          <div className="avq-ministry-badge">
            <Icon name="verified" size={13} color="var(--color-cobalt-700)" />
            <span>{finalTopicRibbon.subBadge}</span>
          </div>
          <span className="avq-chapter-tag font-code">{finalTopicRibbon.chapterTag}</span>
        </div>
      </section>

      {/* 2. Side-by-Side Reality Comparison (AR vs VR) */}
      <section className="avq-comparison-grid">
        {/* AR Card */}
        <div className="avq-card ar-card">
          <div className="avq-card-header">
            <div className="avq-card-title-wrap">
              <span className="avq-badge-chip ar font-code">{finalComparisonCards.ar.code}</span>
              <h2 className="avq-card-title font-heading">{finalComparisonCards.ar.title}</h2>
            </div>
            <span className="avq-status-pill ar">{finalComparisonCards.ar.badge}</span>
          </div>

          <p className="avq-card-concept">
            <strong className="concept-label ar">{finalComparisonCards.ar.conceptHeading}</strong>{' '}
            {finalComparisonCards.ar.conceptText}
          </p>

          <div className="avq-examples-box">
            <div className="avq-examples-title">
              <Icon name={finalComparisonCards.ar.examplesIcon} size={14} color="var(--color-teal-700)" />
              <span>{finalComparisonCards.ar.examplesTitle}</span>
            </div>
            <ul className="avq-examples-list">
              {finalComparisonCards.ar.examples.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="avq-meter-box">
            <div className="avq-meter-meta">
              <span className="meter-label font-caption">{finalComparisonCards.ar.meterLabel}</span>
              <span className="meter-val font-code ar">{finalComparisonCards.ar.meterValue}</span>
            </div>
            <div className="avq-meter-track">
              <div className="avq-meter-fill ar" style={{ width: `${finalComparisonCards.ar.meterPercent}%` }} />
            </div>
          </div>
        </div>

        {/* VR Card */}
        <div className="avq-card vr-card">
          <div className="avq-card-header">
            <div className="avq-card-title-wrap">
              <span className="avq-badge-chip vr font-code">{finalComparisonCards.vr.code}</span>
              <h2 className="avq-card-title font-heading">{finalComparisonCards.vr.title}</h2>
            </div>
            <span className="avq-status-pill vr">{finalComparisonCards.vr.badge}</span>
          </div>

          <p className="avq-card-concept">
            <strong className="concept-label vr">{finalComparisonCards.vr.conceptHeading}</strong>{' '}
            {finalComparisonCards.vr.conceptText}
          </p>

          <div className="avq-examples-box">
            <div className="avq-examples-title">
              <Icon name={finalComparisonCards.vr.examplesIcon} size={14} color="var(--color-cobalt-700)" />
              <span>{finalComparisonCards.vr.examplesTitle}</span>
            </div>
            <ul className="avq-examples-list">
              {finalComparisonCards.vr.examples.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="avq-meter-box">
            <div className="avq-meter-meta">
              <span className="meter-label font-caption">{finalComparisonCards.vr.meterLabel}</span>
              <span className="meter-val font-code vr">{finalComparisonCards.vr.meterValue}</span>
            </div>
            <div className="avq-meter-track">
              <div className="avq-meter-fill vr" style={{ width: `${finalComparisonCards.vr.meterPercent}%` }} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Misconception Alert #3 */}
      <section className="avq-misconception-card">
        <div className="avq-misconception-icon">
          <Icon name="lightbulb" size={18} color="var(--color-amber-900)" />
        </div>
        <div className="avq-misconception-body">
          <div className="avq-misconception-header">
            <span className="avq-alert-pill font-caption">{finalMisconception.badge}</span>
            <h3 className="avq-alert-heading font-heading">{finalMisconception.title}</h3>
          </div>
          <p className="avq-alert-quote">{finalMisconception.quote}</p>
        </div>
      </section>

      {/* 4. Deep Dive Analysis: Quantum Computing & The Qubit */}
      <section className="avq-quantum-card">
        <div className="avq-quantum-header">
          <div className="avq-quantum-title-wrap">
            <div className="quantum-icon-badge">
              <Icon name="blur_on" size={16} color="#ffffff" />
            </div>
            <div>
              <span className="quantum-sub-tag font-code">{finalQuantum.subTitle}</span>
              <h3 className="quantum-heading font-heading">{finalQuantum.title}</h3>
            </div>
          </div>
          <span className="quantum-section-pill font-code">{finalQuantum.sectionTag}</span>
        </div>

        <div className="avq-quantum-grid">
          {/* Theory & Common Error */}
          <div className="avq-quantum-theory">
            <p className="quantum-theory-text">{finalQuantum.theoryText}</p>
            <div className="quantum-error-callout">
              <div className="error-callout-header">
                <Icon name="warning" size={14} color="var(--color-error)" />
                <span className="font-caption font-bold">{finalQuantum.commonError.badge}</span>
              </div>
              <p className="error-callout-body">{finalQuantum.commonError.text}</p>
            </div>
          </div>

          {/* Analogy & Visual Comparison */}
          <div className="avq-analogy-box">
            <span className="analogy-label font-caption">{finalQuantum.analogy.title}</span>
            <div className="analogy-items-title">
              <span className="analogy-car font-heading">{finalQuantum.analogy.leftItem}</span>
              <span className="analogy-vs">{finalQuantum.analogy.vsText}</span>
              <span className="analogy-bike font-heading">{finalQuantum.analogy.rightItem}</span>
            </div>
            <div className="analogy-desc-list">
              <p className="analogy-desc-item">{finalQuantum.analogy.carDesc}</p>
              <p className="analogy-desc-item">{finalQuantum.analogy.bikeDesc}</p>
            </div>

            <div className="quantum-pills-row">
              <div className="quantum-pill bit">
                <span className="pill-code font-code">{finalQuantum.analogy.bitPill.label}</span>
                <span className="pill-sub font-caption">{finalQuantum.analogy.bitPill.sub}</span>
              </div>
              <div className="quantum-pill qubit">
                <span className="pill-code font-code">{finalQuantum.analogy.qubitPill.label}</span>
                <span className="pill-sub font-caption">{finalQuantum.analogy.qubitPill.sub}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Critical Thinking & Applied Activity */}
      <section className="avq-activity-card">
        <div className="avq-activity-header">
          <div className="avq-activity-title-wrap">
            <div className="activity-icon-badge">
              <Icon name="psychology" size={16} color="#ffffff" />
            </div>
            <h3 className="activity-title font-heading">{finalActivity.title}</h3>
          </div>
        </div>

        <p className="activity-scenario font-heading">{finalActivity.scenario}</p>

        <div className="activity-options-grid">
          {finalActivity.options.map((opt) => {
            const isSelected = selectedTech === opt.id;
            return (
              <label
                key={opt.id}
                className={`activity-option-card ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedTech(opt.id)}
              >
                <input
                  type="radio"
                  name="surgery_tech"
                  value={opt.id}
                  checked={isSelected}
                  onChange={() => setSelectedTech(opt.id)}
                  className="activity-radio"
                />
                <span className="option-label font-heading">{opt.label}</span>
              </label>
            );
          })}
        </div>

        <div className="activity-reasoning-wrap">
          <div className="reasoning-header">
            <Icon name="edit" size={13} color="var(--color-secondary, #b45309)" />
            <span className="reasoning-label font-caption">{finalActivity.reasoningPrompt}</span>
          </div>
          <div className="activity-ruled-lines">
            <div className="activity-ruled-line">
              <span className="ruled-starter font-caption">{isEn ? 'Reason:' : 'السبب:'}</span>
            </div>
            <div className="activity-ruled-line" />
          </div>
        </div>
      </section>

      {/* 6. Page Footer Bar */}
      <footer className="timeline-page-footer-bar">
        <div className="footer-author-note">
          <Icon name="school" size={16} color="var(--color-cobalt-600)" />
          <span>
            {isEn ? 'Prepared & Authored by: ' : 'إعداد وتأليف: '}
            <strong className="author-name">{finalFooter.author}</strong> •{' '}
            {finalFooter.authorTitle}
          </span>
        </div>
        <div className="footer-page-meta">
          <span className="footer-page-pill font-code">{finalFooter.pageLabel}</span>
          <span className="footer-academic-year">{finalFooter.academicYear}</span>
        </div>
      </footer>
    </div>
  );
}
