/**
 * ====================================================================
 * Front-Matter Trilogy Data Contracts (ثلاثية الافتتاحية والتهيئة الأكاديمية)
 * The Mentor — المُرشد الذكي | Grade 11 Programming & AI (2026–2027)
 * ====================================================================
 * 
 * NOTE: All texts, taxonomy labels, and pedagogical milestones are decoupled
 * here from React components to maintain single source of truth.
 */

export const globalRoadmapData = {
  academicYear: '2026–2027',
  stageLabel: 'المقدمة والافتتاحية • الصف الأول الثانوي',
  centerBadge: 'الرؤية الكبرى للترم الأول (Term 1 Architecture)',
  hero: {
    tag: 'خريطة المسار التعليمي المتكامل • المعايير القومية',
    title: 'رحلة الفصل الدراسي الأول — من الوعي الرقمي والأمن السيبراني إلى هندسة وتصميم تطبيقات الويب',
    totalChapters: 4,
    totalLessons: 14,
  },
  chapters: [
    {
      number: '01',
      title: 'الفصل 1: تكنولوجيا المعلومات والمجتمع',
      latinTitle: 'IT & Society',
      badgeText: '4 دروس معتمدة',
      theme: 'ch1',
      lessons: [
        { id: '1-1', title: 'تطور تكنولوجيا المعلومات والتحول الاجتماعي', icon: 'history_edu' },
        { id: '1-2', title: 'كيف يعمل الذكاء الاصطناعي', icon: 'memory' },
        { id: '1-3', title: 'الذكاء الاصطناعي في الحياة اليومية والصناعة', icon: 'smart_toy' },
        { id: '1-4', title: 'القضايا الأخلاقية للذكاء الاصطناعي', icon: 'gavel' },
      ],
      connectiveBridge: 'بناء النظم الذكية يستلزم حمايتها والدفاع عنها',
    },
    {
      number: '02',
      title: 'الفصل 2: الأمن السيبراني',
      latinTitle: 'Cybersecurity',
      badgeText: '3 دروس معتمدة',
      theme: 'ch2',
      lessons: [
        { id: '2-1', title: 'تقنيات التشفير والمصادقة', icon: 'key' },
        { id: '2-2', title: 'تصميم أمن الشبكات', icon: 'lan' },
        { id: '2-3', title: 'الاستجابة للحوادث وإدارة المخاطر', icon: 'security_update_warning' },
      ],
      connectiveBridge: 'الربط الآمن يمهد لتشييد وإطلاق تطبيقات السحاب',
    },
    {
      number: '03',
      title: 'الفصل 3: تطبيقات الويب',
      latinTitle: 'Web Applications',
      badgeText: '3 دروس معتمدة',
      theme: 'ch3',
      lessons: [
        { id: '3-1', title: 'البنية العامة لتطبيقات الويب', icon: 'dns' },
        { id: '3-2', title: 'طرق الاتصال في تطبيقات الويب', icon: 'sync_alt' },
        { id: '3-3', title: 'أساسيات تكنولوجيا الواجهة الأمامية', icon: 'code_blocks' },
      ],
      connectiveBridge: 'اكتمال المعمارية التقنية يقتضي التميز في تجربة المستخدم والتصميم',
    },
    {
      number: '04',
      title: 'الفصل 4: تصميم الويب والوسائط',
      latinTitle: 'Web Design & UX',
      badgeText: '4 دروس معتمدة',
      theme: 'ch4',
      lessons: [
        { id: '4-1', title: 'أنواع الوسائط وخصائصها', icon: 'perm_media' },
        { id: '4-2', title: 'تصميم المعلومات وتجربة المستخدم للمواقع', icon: 'layers' },
        { id: '4-3', title: 'أساليب تقييم المواقع الإلكترونية', icon: 'fact_check' },
        { id: '4-4', title: 'عملية التحسين التكراري للمواقع', icon: 'cached' },
      ],
    },
  ],
  mentorVision: {
    title: 'رؤية المُرشد (The Mentor\'s Vision):',
    quote: '«هذا المنهج ليس بنكاً للمصطلحات الجافة، بل خريطة لبناء عقليتك البرمجية والتحليلية كمهندس ومفكر في عصر الذكاء الاصطناعي. ستتعلم كيف تفهم المنطق الكامن، وتصنع قرارات هندسية واعية بأثرها على الإنسان والمجتمع.»',
  },
};

export const progressTrackerData = {
  academicYear: '2026/2027',
  stageLabel: 'المقدمة والافتتاحية • الصف الأول الثانوي',
  title: 'خريطة مسار التعلم للترم الأول',
  subtitle: '(STUDENT PROGRESS TRACKER)',
  bannerText: '14 محطة دراسية لبناء مهندس ومفكر الغد — تتبّع إنجازك وقيّم مستوى تمكنك العملي خطوة بخطوة',
  legendKeys: [
    { key: 'theory', label: 'تم الفهم النظري', short: 'نظري' },
    { key: 'activity', label: 'طُبّق النشاط الصفي', short: 'نشاط' },
    { key: 'coding', label: 'أنجز التحدي البرمجي', short: 'برمجة' },
    { key: 'assessment', label: 'جاهز للتقييم', short: 'تقييم', isStar: true },
  ],
  units: [
    {
      unitNumber: 'UNIT 01',
      titleAr: 'الوحدة الأولى: تكنولوجيا المعلومات والمجتمع',
      lessonCount: '4 دروس',
      subtitleEn: 'ACADEMIC FOUNDATION',
      theme: 'ch1',
      lessons: [
        { id: '1-1', titleAr: 'تطور تكنولوجيا المعلومات والتحول الاجتماعي', titleEn: 'IT Evolution & Social Transformation' },
        { id: '1-2', titleAr: 'كيف يعمل الذكاء الاصطناعي', titleEn: 'How Artificial Intelligence Works' },
        { id: '1-3', titleAr: 'الذكاء الاصطناعي في الحياة اليومية والصناعة', titleEn: 'AI in Daily Life & Industry' },
        { id: '1-4', titleAr: 'القضايا الأخلاقية للذكاء الاصطناعي', titleEn: 'Ethical Issues in AI' },
      ],
      milestone: {
        icon: 'verified',
        title: 'محطة مراجعة وتقييم الوحدة الأولى',
        status: 'مكتمل [   ]',
      },
    },
    {
      unitNumber: 'UNIT 02',
      titleAr: 'الوحدة الثانية: الأمن السيبراني',
      lessonCount: '3 دروس',
      subtitleEn: 'CYBERSECURITY DEFENSE',
      theme: 'ch2',
      lessons: [
        { id: '2-1', titleAr: 'تقنيات التشفير والمصادقة', titleEn: 'Encryption & Authentication Techniques' },
        { id: '2-2', titleAr: 'تصميم أمن الشبكات', titleEn: 'Network Security Design' },
        { id: '2-3', titleAr: 'الاستجابة للحوادث وإدارة المخاطر', titleEn: 'Incident Response & Risk Management' },
      ],
      milestone: {
        icon: 'shield',
        title: 'محطة الورشة العملية: بناء دفاعات الشبكة وحماية البيانات',
        status: 'مكتمل [   ]',
      },
    },
    {
      unitNumber: 'UNIT 03',
      titleAr: 'الوحدة الثالثة: تطبيقات الويب',
      lessonCount: '3 دروس',
      subtitleEn: 'WEB ARCHITECTURE',
      theme: 'ch3',
      lessons: [
        { id: '3-1', titleAr: 'البنية العامة لتطبيقات الويب', titleEn: 'Web Applications Architecture' },
        { id: '3-2', titleAr: 'طرق الاتصال في تطبيقات الويب', titleEn: 'Communication Protocols & Web APIs' },
        { id: '3-3', titleAr: 'أساسيات تكنولوجيا الواجهة الأمامية', titleEn: 'Front-End Fundamentals & DOM' },
      ],
      milestone: {
        icon: 'code_blocks',
        title: 'محطة اختبار المعمارية وتطوير الاتصال الشبكي',
        status: 'مكتمل [   ]',
      },
    },
    {
      unitNumber: 'UNIT 04',
      titleAr: 'الوحدة الرابعة: تصميم الويب والوسائط',
      lessonCount: '4 دروس',
      subtitleEn: 'UX & DIGITAL MEDIA',
      theme: 'ch4',
      lessons: [
        { id: '4-1', titleAr: 'أنواع الوسائط وخصائصها', titleEn: 'Media Types & Technical Properties' },
        { id: '4-2', titleAr: 'تصميم المعلومات وتجربة المستخدم للمواقع', titleEn: 'Information Architecture & UX Design' },
        { id: '4-3', titleAr: 'أساليب تقييم المواقع الإلكترونية', titleEn: 'Website Evaluation & Usability Heuristics' },
        { id: '4-4', titleAr: 'عملية التحسين التكراري للمواقع', titleEn: 'Iterative Improvement & Optimization' },
      ],
      capstone: {
        icon: 'workspace_premium',
        title: 'المشروع التكاملي النهائي: تسليم موقع ويب متكامل يجمع مفاهيم الوحدات الأربع',
        badge: 'محطة التقييم الكبرى',
      },
    },
  ],
  studentContract: {
    title: 'ميثاق التعلّم والهدف الأكاديمي:',
    goalPrompt: 'هدفي الأكاديمي والمهاري لهذا الفصل:',
    signaturePrompt: 'توقيع الطالب الباحث:',
    datePrompt: 'تاريخ انطلاق المسار:',
  },
};

export const masteryPedagogyData = {
  academicYear: '2026–2027',
  stageLabel: 'المقدمة والافتتاحية • ميثاق التعلم',
  centerBadge: 'فلسفة التدريس ودورة الإتقان (HOW WE LEARN)',
  hero: {
    title: 'كيف نتعلّم مع «المُرشد الذكي»؟',
    badge: 'Pedagogy 26–27',
    description: 'في هذا المقرر، لا نحفظ تعريفات لنفرغها في ورقة امتحان، بل نبني عقلية مهندس ذكاء اصطناعي ومطور برمجيات مسؤول. إليك دورة الإتقان الخماسية التي تحكم كل درس، ومختبر تطبيقي، ونشاط في رحلتك.',
  },
  masteryStages: [
    {
      step: '01',
      titleAr: 'افهم',
      titleEn: 'UNDERSTAND',
      highlight: 'استيعاب المنطق قبل حفظ الصياغة',
      description: 'تفكيك المفهوم إلى واقعه الملموس، ومعرفة المشكلة الحقيقية التي جاء الكود لحلها.',
      icon: 'lightbulb',
      theme: 'ch1',
    },
    {
      step: '02',
      titleAr: 'فكّر بعمق',
      titleEn: 'THINK',
      highlight: 'التحليل الخوارزمي والمقارنة النقدية',
      description: 'طرح تساؤلات المهندس: "لماذا نختار هذه المعمارية؟ ما تكلفة الموارد والذاكرة وسرعة المعالجة؟"',
      icon: 'schema',
      theme: 'ch4',
    },
    {
      step: '03',
      titleAr: 'طبّق عملياً',
      titleEn: 'APPLY',
      highlight: 'الممارسة الحية في بيئة واقعية',
      description: 'تحويل النظريات إلى كود نظيف وتصاميم عملية. الأخطاء البرمجية هنا بوابتك للاحتراف.',
      icon: 'terminal',
      theme: 'teal',
    },
    {
      step: '04',
      titleAr: 'واجه التحدي',
      titleEn: 'CHALLENGE',
      highlight: 'تحديات التفكير الهندسي المتقدم',
      description: 'سيناريوهات متقدمة تحاكي سوق العمل وأولمبياد الحوسبة، تتطلب دمج حلول متعددة تحت قيود محددة.',
      icon: 'bolt',
      theme: 'ch3',
    },
    {
      step: '05',
      titleAr: 'قرّر وقَيّم',
      titleEn: 'DECIDE',
      highlight: 'المستشار وصانع القرار الأخلاقي',
      description: 'ممارسة دور المستشار التقني وصانع القرار؛ كل قرار له أثر وموازنة واعية بين المصالح والأولويات.',
      icon: 'balance',
      theme: 'dark',
    },
  ],
  honorContract: {
    title: 'ميثاق الشرف في رحلتنا (The Mentor\'s Contract)',
    subtitle: 'ثلاثة مبادئ تصنع فارقاً حقيقياً بين الحافظ والمتعلم الحقيقي المبتكر',
    badge: 'ENGINEER\'S CODE',
    mentorCard: {
      roleTitle: 'مهندس الغد (The Mentor)',
      roleSubtitle: 'صوتك الإرشادي طوال المنهج',
      statusBadge: 'مرشد معتمد ومرافقك البرمجي',
    },
    rules: [
      {
        number: '01',
        title: '«السؤال الذكي أهم من الإجابة المحفوظة»',
        text: 'في عصر الذكاء الاصطناعي التوليدي، قيمتك تكمن في صياغة السؤال الصحيح (Prompt Engineering)، ونقد المخرجات، واكتشاف الثغرات المنطقية.',
        theme: 'ch1',
      },
      {
        number: '02',
        title: '«الخطأ البرمجي خطوة حتمية نحو الحل الأمثل»',
        text: 'رسائل الخطأ (Stack Trace) ليست دليلاً على الفشل، بل حوار مستمر مع النظام لتصحيحه بكفاءة وثبات.',
        theme: 'ch4',
      },
      {
        number: '03',
        title: '«أنت من تصنع التكنولوجيا، ولست مجرد مستهلك لها»',
        text: 'هدفنا بناء بنية تحتية رقمية تليق بوطننا وتدريب نماذج ذكاء اصطناعي متخصصة ومصممة بأيدٍ مصرية واعية.',
        theme: 'teal',
      },
    ],
  },
  technicalStandards: [
    {
      titleEn: 'Code Standard',
      subtitle: 'Clean, Modular & Secure Python Code',
      icon: 'code',
      theme: 'ch1',
    },
    {
      titleEn: 'ML Workflow',
      subtitle: 'Practical Machine Learning Pipelines',
      icon: 'model_training',
      theme: 'ch4',
    },
    {
      titleEn: 'AI Ethics',
      subtitle: 'Data Privacy & Ethical AI Framework',
      icon: 'security',
      theme: 'teal',
    },
  ],
};
