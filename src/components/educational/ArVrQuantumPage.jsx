import React, { useState } from 'react';
import Icon from '../ui/Icon.jsx';

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
  topicRibbon = {
    number: '06',
    unitTitle: 'MODULE 01 • LESSON 1-1',
    lessonCode: 'المفاهيم التقنية المحورية',
    subBadge: 'معيار قياس الوزارة 2026',
    title: 'الواقع المعزز مقابل الواقع الافتراضي: هل تضيف إلى الواقع أم تستبدله؟',
    chapterTag: 'AR-VR-QUANTUM // PAGE 06',
    deepDiveTag: 'SECTION 1.4',
  },
  comparisonCards = {
    ar: {
      code: 'AR',
      title: 'الواقع المعزز (Augmented Reality)',
      badge: 'طبقة إدراك إضافية',
      conceptHeading: 'المفهوم الأساسي:',
      conceptText:
        'يظل العالم الواقعي الحقيقي حاضراً ومشاهداً بالعين، بينما تسقط النظم الرقمية عناصر حاسوبية ذكية وبيانات ثلاثية الأبعاد تفاعلية تعزز بيئة المستخدم دون حجبها.',
      examplesTitle: 'تطبيقات وأمثلة واقعية:',
      examplesIcon: 'devices',
      examples: [
        'فلاتر الكاميرا الحية على منصات الهواتف (مثل Instagram).',
        'نظارات الجراحين الطبية الذكية: إسقاط نبض المريض وموضع الشرايين وتفرعاتها على جسده الحي مباشرة أثناء الشق الجراحي.',
      ],
      meterLabel: 'معدل العزل الحسي والبيئي:',
      meterValue: '0% عزل (بيئة مفتوحة)',
      meterPercent: 4,
    },
    vr: {
      code: 'VR',
      title: 'الواقع الافتراضي (Virtual Reality)',
      badge: 'استبدال كامل للمحيط',
      conceptHeading: 'المفهوم الأساسي:',
      conceptText:
        'حجب تام وشامل للحواس عن المحيط المادي الفعلي، ونقل تركيز ووعي المستخدم كلياً إلى بيئة رقمية مصممة ومولدة رقمياً برسوميات تحاكي عالماً بديلاً.',
      examplesTitle: 'تطبيقات وأمثلة واقعية:',
      examplesIcon: 'sports_esports',
      examples: [
        'خوذات الانغماس البصري الكامل المخصصة للألعاب التفاعلية.',
        'محاكيات الطيران الميداني وتدريب رواد الفضاء على مناورات الكبسولة داخل محطة فضائية مغلقة بالكامل.',
      ],
      meterLabel: 'معدل العزل الحسي والبيئي:',
      meterValue: '100% عزل تام (انغماس كامل)',
      meterPercent: 100,
    },
  },
  misconceptionAlert = {
    badge: 'تصحيح مفاهيم خاطئة #3',
    title: 'هل الشاشات تجعلهما تقنية واحدة؟',
    quote:
      '«الواقع المعزز والواقع الافتراضي ليسا وجهين لعملة واحدة لمجرد اعتمادهما على عدسات وشاشات؛ الفارق الهندسي الجوهري هو: هل ترى العالم المادي الحقيقي ويُضاف إليه محتوى داعم، أم تم استبدال الواقع المحيط بك بالكامل ببيئة اصطناعية؟»',
  },
  quantumSection = {
    sectionTag: 'SECTION 1.4',
    subTitle: 'Deep Dive Analysis',
    title: 'الحوسبة الكمومية: التشبيه الهندسي المبسط والكيوبت (Qubit)',
    theoryText:
      'تعتمد الحواسيب التقليدية على البت (Bit) الذي يأخذ قيمة محددة وصارمة إما 0 أو 1. في المقابل، توظف الحوسبة الكمومية الكيوبت (Qubit) مستفيدة من ظاهرة التراكب الكمي (Superposition)، ما يتيح تمثيل حالات احتمالية متعددة لـ 0 و 1 في آنٍ واحد، وحل مسارات حسابية معقدة بالتوازي الفائق.',
    commonError: {
      badge: 'تصحيح الخطأ الشائع الرابع:',
      text:
        'الحاسوب الكمومي ليس بديلاً عاماً للحواسيب المنزلية والهواتف الذكية، ولن يجعلك تتصفح الإنترنت أو تشاهد الفيديو أسرع! إنه وحدة تخصصية فائقة التميز في حل ألغاز حسابية معينة كالتشفير ومحاكاة الجزيئات الدوائية.',
    },
    analogy: {
      title: 'التشبيه الميداني التوضيحي:',
      leftItem: 'السيارة',
      vsText: 'مقابل',
      rightItem: 'الدراجة الهوائية',
      carDesc:
        'السيارة (الحاسوب الكلاسيكي): مثالية وسريعة للغاية على الطرق المفتوحة وتمثل الحل الأمثل لكافة متطلبات حياتنا اليومية.',
      bikeDesc:
        'الدراجة (الحاسوب الكمومي): قد تبدو غير مجدية على الطرق السريعة العامة، لكنها الحل الفردي القادر على النفاذ في الأزقة الشديدة الضيق والالتواء (المعضلات الرياضية المستحيلة كلاسيكياً).',
      bitPill: { label: 'Bit', sub: 'ثنائي محدد (0 أو 1)' },
      qubitPill: { label: 'Qubit', sub: 'تراكب احتمالي مستمر' },
    },
  },
  activity = {
    title: 'سؤال التفكير النقدي والتطبيق العملي',
    scenario:
      'لو كنت جراحاً متخصصاً تجري عملية دقيقة في المخ داخل غرفة العمليات، أي التقنيتين (AR أم VR) ستعتمد لمساعدتك على إتمام الجراحة دون أن تفقد اتصالك البصري المباشر بيديك وأدواتك الحية؟ ولماذا؟',
    options: [
      { id: 'ar', label: 'أ) الواقع المعزز (Augmented Reality - AR)', isCorrect: true },
      { id: 'vr', label: 'ب) الواقع الافتراضي (Virtual Reality - VR)', isCorrect: false },
    ],
    reasoningPrompt: 'التعليل الهندسي والمنطقي لاختيارك:',
    ruledLinesCount: 2,
  },
  footerNote = {
    author: 'الأستاذ / محمد شامل محمد',
    authorTitle: 'خبير تكنولوجيا المعلومات والذكاء الاصطناعي',
    pageLabel: 'PAGE 06',
    academicYear: 'العام الدراسي 2026-2027 م',
  },
}) {
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
              <span>{topicRibbon.unitTitle}</span>
              <span className="bullet">•</span>
              <span>{topicRibbon.lessonCode}</span>
            </div>
            <h1 className="ribbon-title font-heading">{topicRibbon.title}</h1>
          </div>
        </div>

        <div className="avq-header-badges">
          <div className="avq-ministry-badge">
            <Icon name="verified" size={13} color="var(--color-cobalt-700)" />
            <span>{topicRibbon.subBadge}</span>
          </div>
          <span className="avq-chapter-tag font-code">{topicRibbon.chapterTag}</span>
        </div>
      </section>

      {/* 2. Side-by-Side Reality Comparison (AR vs VR) */}
      <section className="avq-comparison-grid">
        {/* AR Card */}
        <div className="avq-card ar-card">
          <div className="avq-card-header">
            <div className="avq-card-title-wrap">
              <span className="avq-badge-chip ar font-code">{comparisonCards.ar.code}</span>
              <h2 className="avq-card-title font-heading">{comparisonCards.ar.title}</h2>
            </div>
            <span className="avq-status-pill ar">{comparisonCards.ar.badge}</span>
          </div>

          <p className="avq-card-concept">
            <strong className="concept-label ar">{comparisonCards.ar.conceptHeading}</strong>{' '}
            {comparisonCards.ar.conceptText}
          </p>

          <div className="avq-examples-box">
            <div className="avq-examples-title">
              <Icon name={comparisonCards.ar.examplesIcon} size={14} color="var(--color-teal-700)" />
              <span>{comparisonCards.ar.examplesTitle}</span>
            </div>
            <ul className="avq-examples-list">
              {comparisonCards.ar.examples.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="avq-meter-box">
            <div className="avq-meter-meta">
              <span className="meter-label font-caption">{comparisonCards.ar.meterLabel}</span>
              <span className="meter-val font-code ar">{comparisonCards.ar.meterValue}</span>
            </div>
            <div className="avq-meter-track">
              <div className="avq-meter-fill ar" style={{ width: `${comparisonCards.ar.meterPercent}%` }} />
            </div>
          </div>
        </div>

        {/* VR Card */}
        <div className="avq-card vr-card">
          <div className="avq-card-header">
            <div className="avq-card-title-wrap">
              <span className="avq-badge-chip vr font-code">{comparisonCards.vr.code}</span>
              <h2 className="avq-card-title font-heading">{comparisonCards.vr.title}</h2>
            </div>
            <span className="avq-status-pill vr">{comparisonCards.vr.badge}</span>
          </div>

          <p className="avq-card-concept">
            <strong className="concept-label vr">{comparisonCards.vr.conceptHeading}</strong>{' '}
            {comparisonCards.vr.conceptText}
          </p>

          <div className="avq-examples-box">
            <div className="avq-examples-title">
              <Icon name={comparisonCards.vr.examplesIcon} size={14} color="var(--color-cobalt-700)" />
              <span>{comparisonCards.vr.examplesTitle}</span>
            </div>
            <ul className="avq-examples-list">
              {comparisonCards.vr.examples.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="avq-meter-box">
            <div className="avq-meter-meta">
              <span className="meter-label font-caption">{comparisonCards.vr.meterLabel}</span>
              <span className="meter-val font-code vr">{comparisonCards.vr.meterValue}</span>
            </div>
            <div className="avq-meter-track">
              <div className="avq-meter-fill vr" style={{ width: `${comparisonCards.vr.meterPercent}%` }} />
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
            <span className="avq-alert-pill font-caption">{misconceptionAlert.badge}</span>
            <h3 className="avq-alert-heading font-heading">{misconceptionAlert.title}</h3>
          </div>
          <p className="avq-alert-quote">{misconceptionAlert.quote}</p>
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
              <span className="quantum-sub-tag font-code">{quantumSection.subTitle}</span>
              <h3 className="quantum-heading font-heading">{quantumSection.title}</h3>
            </div>
          </div>
          <span className="quantum-section-pill font-code">{quantumSection.sectionTag}</span>
        </div>

        <div className="avq-quantum-grid">
          {/* Theory & Common Error */}
          <div className="avq-quantum-theory">
            <p className="quantum-theory-text">{quantumSection.theoryText}</p>
            <div className="quantum-error-callout">
              <div className="error-callout-header">
                <Icon name="warning" size={14} color="var(--color-error)" />
                <span className="font-caption font-bold">{quantumSection.commonError.badge}</span>
              </div>
              <p className="error-callout-body">{quantumSection.commonError.text}</p>
            </div>
          </div>

          {/* Analogy & Visual Comparison */}
          <div className="avq-analogy-box">
            <span className="analogy-label font-caption">{quantumSection.analogy.title}</span>
            <div className="analogy-items-title">
              <span className="analogy-car font-heading">{quantumSection.analogy.leftItem}</span>
              <span className="analogy-vs">{quantumSection.analogy.vsText}</span>
              <span className="analogy-bike font-heading">{quantumSection.analogy.rightItem}</span>
            </div>
            <div className="analogy-desc-list">
              <p className="analogy-desc-item">{quantumSection.analogy.carDesc}</p>
              <p className="analogy-desc-item">{quantumSection.analogy.bikeDesc}</p>
            </div>

            <div className="quantum-pills-row">
              <div className="quantum-pill bit">
                <span className="pill-code font-code">{quantumSection.analogy.bitPill.label}</span>
                <span className="pill-sub font-caption">{quantumSection.analogy.bitPill.sub}</span>
              </div>
              <div className="quantum-pill qubit">
                <span className="pill-code font-code">{quantumSection.analogy.qubitPill.label}</span>
                <span className="pill-sub font-caption">{quantumSection.analogy.qubitPill.sub}</span>
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
            <h3 className="activity-title font-heading">{activity.title}</h3>
          </div>
        </div>

        <p className="activity-scenario font-heading">{activity.scenario}</p>

        <div className="activity-options-grid">
          {activity.options.map((opt) => {
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
            <span className="reasoning-label font-caption">{activity.reasoningPrompt}</span>
          </div>
          <div className="activity-ruled-lines">
            <div className="activity-ruled-line">
              <span className="ruled-starter font-caption">السبب:</span>
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
            إعداد وتأليف: <strong className="author-name">{footerNote.author}</strong> •{' '}
            {footerNote.authorTitle}
          </span>
        </div>
        <div className="footer-page-meta">
          <span className="footer-page-pill font-code">{footerNote.pageLabel}</span>
          <span className="footer-academic-year">{footerNote.academicYear}</span>
        </div>
      </footer>
    </div>
  );
}
