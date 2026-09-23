/**
 * ====================================================================
 * The Mentor — المُرشد الذكي
 * Bilingual Translations Dictionary (Arabic / English)
 * ====================================================================
 */

export const translations = {
  ar: {
    // Brand & Platform
    platformName: 'The Mentor — المُرشد الذكي',
    platformSubtitle: 'البرمجة والذكاء الاصطناعي — الصف الأول الثانوي 2026/2027',
    homeTitle: 'منصة التعلم الذكي ونظام الكتيبات المطبوعة',
    returnHomeTooltip: 'العودة إلى الصفحة الرئيسية لمنصة المُرشد الذكي',

    // Top Navigation & Sections
    sectionHome: 'الرئيسية',
    sectionFrontMatter: 'دليل وافتتاحية المنهج',
    sectionLesson1: 'الدرس 1-1: تطور تكنولوجيا المعلومات',
    pagesOfSection: 'صفحات',

    // Action Buttons & Labels
    printA4: 'طباعة (A4)',
    printBookletAction: 'طباعة الكتيب (A4)',
    printTooltip: 'طباعة الصفحة أو الكتيب المعروض حالياً بنظام A4',
    trilogyPreviewNote: 'معاينة كتيب افتتاحية المنهج الكامل (الغلاف + 3 صفحات): كل صفحة تطبع في ورقة A4 منفصلة.',
    lessonBookletPreviewNote: 'معاينة كتيب الدرس 1-1 المطبوع (9 صفحات متتالية): كل صفحة تُطبع في ورقة A4 منفصلة تماماً.',
    cheatSheetPreviewNote: 'معاينة مخطط المراجعة الشامل فائق الكثافة (A4 Landscape): مصمم ليُطبع في ورقة A4 أفقية واحدة بدون أي انقسام.',
    cheatSheetPrintAction: 'طباعة المخطط الشامل (A4)',
    exploreCoverBtn: '📖 تصفح افتتاحية المنهج والغلاف الرسمي',
    exploreLessonBtn: '🚀 استكشف الدرس 1-1 (تطور تكنولوجيا المعلومات)',
    exploreCheatSheetBtn: '⚡ مخطط الإتقان والمراجعة الشاملة (A4 أفقي)',
    exploreExamBtn: '📝 بدء الامتحان التفاعلي للدرس 1-1 (موبايل)',

    // Header & Footer
    defaultUnitTitle: 'الوحدة الأولى: تكنولوجيا المعلومات والمجتمع — البكالوريا المصرية (2026–2027)',
    defaultLessonTitle: 'الدرس 1-1: تطور تكنولوجيا المعلومات والتحول الاجتماعي',
    defaultSubjectTitle: 'البرمجة والذكاء الاصطناعي',
    authorName: 'أ. محمد شامل محمد — خبير المناهج والحاسب الآلي',
    academicYearLabel: 'العام الدراسي 2026–2027',
    pageNumberFormat: (current, total) => (total ? `صفحة ${current} من ${total}` : `صفحة ${current}`),
    pageTagPrefix: 'CH-01 // PAGE',

    // Callout Types
    mentorTitle: 'توجيه معمارية المُرشد',
    tipTitle: 'إضاءة ذكية',
    warningTitle: 'تنبيه هندسي',

    // HomePage Content
    homeHeroHeading: 'منظومة النشر التعليمي الذكي لمادة البرمجة والذكاء الاصطناعي',
    homeHeroBadge: 'الصف الأول الثانوي • البكالوريا المصرية 2026–2027',
    homeDescription: 'تم بناء هذا النظام على بنية متكاملة تفصل تماماً بين بيانات المنهج الرسمي وطبقة العرض البرمجي والطباعي، مع دعم كامل ومزدوج للغتين العربية والإنجليزية ومقاييس A4 الطباعية الدقيقة.',
    mentorDirectQuote: '«فصل المحتوى الأكاديمي عن قوالب العرض هو الضمان الوحيد لقابلية التوسع؛ حيث يمكننا توليد أي درس من دروس المنهج الـ 23 بنفس الجودة والاتساق دون لمس كود الواجهة.»',
    corePillarsTitle: 'الركائز المعمارية للنظام التعليمي',
    pillar1Title: 'مصدر الحقيقة الموحد (Single Source of Truth)',
    pillar1Desc: 'جميع بيانات الدروس والمخططات والأسئلة محددة في عقود برمجية قياسية (JSON Schema).',
    pillar2Title: 'تصميم يراعي الشاشة والطباعة الورقية (Print-First)',
    pillar2Desc: 'كل صفحة مصممة لتطابق ورق A4 القياسي (210mm × 297mm) بهوامش دقيقة وفواصل صفحات صارمة.',
    pillar3Title: 'دعم ثنائي اللغة أصيل (Bilingual Native)',
    pillar3Desc: 'تبديل فوري بين العربية (RTL) والإنجليزية (LTR) مع تكييف دقيق للخطوط والاتجاهات.',

    // Navigation Pages
    navHome: 'منصة المُرشد الذكي',
    navCover: 'غلاف المنهج الرسمي',
    navRoadmap: 'خارطة موضوعات المنهج',
    navTracker: 'مخطط تتبع التقدم والمهام',
    navPedagogy: 'نموذج التمكن البيداغوجي',
    navTrilogyBooklet: 'كتيب الافتتاحية كاملاً (A4)',
    navLessonOverview: 'بطاقة الدرس ونواتج التعلم',
    navHookDaily: 'خطاف التفكير: قبل وبعد التقنية',
    navTimeline: 'خط الاستكشاف الزمني (Timeline)',
    navMooresLaw: 'قانون مور ومحركات التسارع',
    navSocialTransform: 'التحولات الاجتماعية الخمسة',
    navEdgeCloud: 'الحوسبة الطرفية مقابل السحابية',
    navArVrQuantum: 'الواقع المعزز والافتراضي والكمومي',
    navDecisionStakeholders: 'تحليل أصحاب المصلحة والقرار',
    navRevisionFinal: 'المراجعة والتحدي الختامي',
    navLessonExam: 'الاختبار التفاعلي الشامل (موبايل)',
    navLessonBooklet: 'معاينة وطباعة كتيب الدرس',
  },

  en: {
    // Brand & Platform
    platformName: 'The Mentor — AI Learning Platform',
    platformSubtitle: 'Programming & AI — Grade 11 Egyptian Baccalaureate 2026/2027',
    homeTitle: 'Smart Learning Platform & Printed Booklet System',
    returnHomeTooltip: 'Return to The Mentor Platform Home',

    // Top Navigation & Sections
    sectionHome: 'Home',
    sectionFrontMatter: 'Curriculum Guide & Front-Matter',
    sectionLesson1: 'Lesson 1-1: Evolution of IT',
    pagesOfSection: 'Pages of',

    // Action Buttons & Labels
    printA4: 'Print (A4)',
    printBookletAction: 'Print Booklet (A4)',
    printTooltip: 'Print currently displayed page or booklet as A4',
    trilogyPreviewNote: 'Curriculum Opening Booklet Preview (Cover + 3 Pages): Each page prints on a dedicated A4 sheet.',
    lessonBookletPreviewNote: 'Lesson 1-1 Printed Booklet Preview (9 sequential pages): Each page strictly prints on a separate A4 sheet.',
    cheatSheetPreviewNote: 'Master Revision Sheet Preview (A4 Landscape): Specially engineered to fit and print on a single landscape A4 sheet.',
    cheatSheetPrintAction: 'Print Master Sheet (A4)',
    exploreCoverBtn: '📖 View Curriculum Cover & Opening',
    exploreLessonBtn: '🚀 Explore Lesson 1-1 (Evolution of IT)',
    exploreCheatSheetBtn: '⚡ Master Revision Poster (A4 Landscape)',
    exploreExamBtn: '📝 Launch Lesson 1-1 Exam (Mobile)',

    // Header & Footer
    defaultUnitTitle: 'Unit 1: Computing & AI Fundamentals — Egyptian Baccalaureate (2026–2027)',
    defaultLessonTitle: 'Lesson 1-1: Evolution of Information Technology & Social Transformation',
    defaultSubjectTitle: 'Programming & Artificial Intelligence',
    authorName: 'Mohamed Shamel Mohamed — Curriculum & Computer Science Expert',
    academicYearLabel: 'Academic Year 2026–2027',
    pageNumberFormat: (current, total) => (total ? `Page ${current} of ${total}` : `Page ${current}`),
    pageTagPrefix: 'CH-01 // PAGE',

    // Callout Types
    mentorTitle: 'The Mentor Architectural Guidance',
    tipTitle: 'Pro Tip',
    warningTitle: 'Engineering Caution',

    // HomePage Content
    homeHeroHeading: 'Smart Educational Publishing Engine for Programming & AI',
    homeHeroBadge: 'Grade 11 • Egyptian Baccalaureate 2026–2027',
    homeDescription: 'Built on a decoupled architecture strictly separating official curriculum data from presentation and printing layers, featuring native bilingual (Arabic RTL / English LTR) support and precise A4 printing metrics.',
    mentorDirectQuote: '“Decoupling academic content from presentation templates is our sole guarantee of scalability; we can generate all 23 curriculum lessons with identical rigor and consistency without touching UI code.”',
    corePillarsTitle: 'Architectural Pillars of the Educational System',
    pillar1Title: 'Single Source of Truth',
    pillar1Desc: 'All lessons, diagrams, and exercises are strictly formalized in validated JSON schemas.',
    pillar2Title: 'Print-First & Dual-Target Design',
    pillar2Desc: 'Every page strictly complies with standard A4 paper dimensions (210mm × 297mm) with zero margin drift.',
    pillar3Title: 'Native Bilingual Adaptation',
    pillar3Desc: 'Instant toggling between Arabic (RTL) and English (LTR) with tailored typography and layout geometry.',

    // Navigation Pages
    navHome: 'The Mentor Platform',
    navCover: 'Official Curriculum Cover',
    navRoadmap: 'Global Curriculum Roadmap',
    navTracker: 'Progress & Mastery Tracker',
    navPedagogy: 'Pedagogical Mastery Model',
    navTrilogyBooklet: 'Full Opening Booklet (A4)',
    navLessonOverview: 'Lesson Blueprint & Outcomes',
    navHookDaily: 'Hook: Before & After Tech',
    navTimeline: 'IT Discovery Timeline',
    navMooresLaw: "Moore's Law & Acceleration",
    navSocialTransform: 'Five Social Transformations',
    navEdgeCloud: 'Edge vs. Cloud Computing',
    navArVrQuantum: 'AR, VR & Quantum Computing',
    navDecisionStakeholders: 'Stakeholder & Decision Analysis',
    navRevisionFinal: 'Revision & Final Challenge',
    navLessonExam: 'Interactive Exam (Mobile)',
    navLessonBooklet: 'Preview & Print Lesson Booklet',
  },
};
