/**
 * Lightweight Route and View State Registry
 * Provides decoupled navigation states without introducing heavy third-party routing dependencies.
 */
export const VIEWS = {
  HOME: 'HOME',
  // Front Matter
  CURRICULUM_COVER: 'CURRICULUM_COVER',
  ROADMAP_PAGE1: 'ROADMAP_PAGE1',
  TRACKER_PAGE2: 'TRACKER_PAGE2',
  PEDAGOGY_PAGE3: 'PEDAGOGY_PAGE3',
  BOOKLET_TRILOGY: 'BOOKLET_TRILOGY',
  // Lesson 1-1
  LESSON_1_1_PAGE0: 'LESSON_1_1_PAGE0',
  LESSON_1_1_PAGE1: 'LESSON_1_1_PAGE1',
  LESSON_1_1_PAGE2: 'LESSON_1_1_PAGE2',
  LESSON_1_1_PAGE3: 'LESSON_1_1_PAGE3',
  LESSON_1_1_PAGE4: 'LESSON_1_1_PAGE4',
  LESSON_1_1_PAGE5: 'LESSON_1_1_PAGE5',
  LESSON_1_1_PAGE6: 'LESSON_1_1_PAGE6',
  LESSON_1_1_PAGE7: 'LESSON_1_1_PAGE7',
  LESSON_1_1_PAGE8: 'LESSON_1_1_PAGE8',
  LESSON_1_1_EXAM: 'LESSON_1_1_EXAM',
  LESSON_1_1_BOOKLET: 'LESSON_1_1_BOOKLET',
  LESSON_1_1_CHEAT_SHEET: 'LESSON_1_1_CHEAT_SHEET',
  // Lesson 1-2
  LESSON_1_2_PAGE0: 'LESSON_1_2_PAGE0',
  LESSON_1_2_PAGE1: 'LESSON_1_2_PAGE1',
  LESSON_1_2_PAGE2: 'LESSON_1_2_PAGE2',
  LESSON_1_2_PAGE3: 'LESSON_1_2_PAGE3',
  LESSON_1_2_PAGE4: 'LESSON_1_2_PAGE4',
  LESSON_1_2_PAGE5: 'LESSON_1_2_PAGE5',
  LESSON_1_2_PAGE6: 'LESSON_1_2_PAGE6',
  LESSON_1_2_PAGE7: 'LESSON_1_2_PAGE7',
  LESSON_1_2_PAGE8: 'LESSON_1_2_PAGE8',
  LESSON_1_2_PAGE9: 'LESSON_1_2_PAGE9',
  LESSON_1_2_PAGE10: 'LESSON_1_2_PAGE10',
  LESSON_1_2_EXAM: 'LESSON_1_2_EXAM',
  LESSON_1_2_BOOKLET: 'LESSON_1_2_BOOKLET',
  LESSON_1_2_CHEAT_SHEET: 'LESSON_1_2_CHEAT_SHEET',
};

export const NAVIGATION_SECTIONS = [
  {
    id: 'HOME_SECTION',
    title: 'الرئيسية',
    titleEn: 'Home',
    icon: 'home',
    defaultView: VIEWS.HOME,
    pages: [
      { id: VIEWS.HOME, label: 'منصة المُرشد الذكي', labelEn: 'The Mentor Platform', badge: 'الرئيسية', badgeEn: 'Home', icon: 'home' },
    ],
  },
  {
    id: 'FRONT_MATTER',
    title: 'دليل وافتتاحية المنهج',
    titleEn: 'Curriculum Guide',
    icon: 'menu_book',
    defaultView: VIEWS.CURRICULUM_COVER,
    pages: [
      { id: VIEWS.CURRICULUM_COVER, label: 'غلاف المنهج الرسمي', labelEn: 'Curriculum Cover', badge: 'الغلاف', badgeEn: 'Cover', icon: 'palette', elementId: 'fm-cover' },
      { id: VIEWS.ROADMAP_PAGE1, label: 'الرؤية الكبرى وخريطة الفصول', labelEn: 'Curriculum Roadmap', badge: '01', badgeEn: '01', icon: 'route', elementId: 'fm-roadmap' },
      { id: VIEWS.TRACKER_PAGE2, label: 'خطة ومسار تقدم الطالب', labelEn: 'Student Progress Tracker', badge: '02', badgeEn: '02', icon: 'trending_up', elementId: 'fm-tracker' },
      { id: VIEWS.PEDAGOGY_PAGE3, label: 'دورة الإتقان وفلسفة التعلم', labelEn: 'Mastery Pedagogy', badge: '03', badgeEn: '03', icon: 'psychology', elementId: 'fm-pedagogy' },
      { id: VIEWS.BOOKLET_TRILOGY, label: 'طباعة الافتتاحية كاملاً', labelEn: 'Print Opening Booklet', badge: 'A4', badgeEn: 'A4', icon: 'print', isPrint: true },
    ],
  },
  {
    id: 'LESSON_1_1',
    title: 'الدرس 1-1: تطور تكنولوجيا المعلومات',
    titleEn: 'Lesson 1-1: Evolution of IT',
    icon: 'terminal',
    defaultView: VIEWS.LESSON_1_1_PAGE0,
    pages: [
      { id: VIEWS.LESSON_1_1_PAGE0, label: 'خريطة الرحلة والبوصلة', labelEn: 'Journey Map & Compass', badge: '00', badgeEn: '00', icon: 'explore' },
      { id: VIEWS.LESSON_1_1_PAGE1, label: 'نشاط التهيئة (مقارنة 30 عاماً)', labelEn: 'Warm-up: 30-Year Shift', badge: '01', badgeEn: '01', icon: 'compare_arrows' },
      { id: VIEWS.LESSON_1_1_PAGE2, label: 'مسار الاكتشاف الزمني (1940-الآن)', labelEn: 'Discovery Timeline (1940-Now)', badge: '02', badgeEn: '02', icon: 'history_edu' },
      { id: VIEWS.LESSON_1_1_PAGE3, label: 'قانون مور وتحديات الفيزياء', labelEn: "Moore's Law & Acceleration", badge: '03', badgeEn: '03', icon: 'memory' },
      { id: VIEWS.LESSON_1_1_PAGE4, label: 'التحولات الاجتماعية الخمسة', labelEn: 'Five Social Transformations', badge: '04', badgeEn: '04', icon: 'hub' },
      { id: VIEWS.LESSON_1_1_PAGE5, label: 'الحوسبة الطرفية مقابل السحابية', labelEn: 'Edge vs. Cloud Computing', badge: '05', badgeEn: '05', icon: 'speed' },
      { id: VIEWS.LESSON_1_1_PAGE6, label: 'الواقع المعزز والافتراضي والكمومي', labelEn: 'AR, VR & Quantum Computing', badge: '06', badgeEn: '06', icon: 'view_in_ar' },
      { id: VIEWS.LESSON_1_1_PAGE7, label: 'تحليل أصحاب المصلحة والقرار', labelEn: 'Stakeholder & Decision Analysis', badge: '07', badgeEn: '07', icon: 'balance' },
      { id: VIEWS.LESSON_1_1_PAGE8, label: 'المراجعة والتحدي الختامي', labelEn: 'Revision & Final Challenge', badge: '08', badgeEn: '08', icon: 'gavel' },
      { id: VIEWS.LESSON_1_1_CHEAT_SHEET, label: 'مخطط الإتقان الشامل (A4 أفقي)', labelEn: 'Master Revision Sheet (A4 Land)', badge: 'A4 أفقي', badgeEn: 'A4 Land', icon: 'dashboard', isPrint: true },
      { id: VIEWS.LESSON_1_1_BOOKLET, label: 'معاينة وطباعة كتيب الدرس', labelEn: 'Preview & Print Booklet', badge: 'A4', badgeEn: 'A4', icon: 'print', isPrint: true },
    ],
  },
  {
    id: 'LESSON_1_2',
    title: 'الدرس 1-2: أسس الذكاء الاصطناعي',
    titleEn: 'Lesson 1-2: Foundations of AI',
    icon: 'psychology',
    defaultView: VIEWS.LESSON_1_2_PAGE0,
    pages: [
      { id: VIEWS.LESSON_1_2_PAGE0, label: 'خريطة الرحلة والبوصلة', labelEn: 'Journey Map & Compass', badge: '00', badgeEn: '00', icon: 'explore' },
      { id: VIEWS.LESSON_1_2_PAGE1, label: 'هيكل الفئات ومظلة المفاهيم', labelEn: 'Nested Categories Architecture', badge: '01', badgeEn: '01', icon: 'hub' },
      { id: VIEWS.LESSON_1_2_PAGE2, label: 'مستويات التعلم والتعمق المعماري', labelEn: 'Architectural Learning Tiers', badge: '02', badgeEn: '02', icon: 'layers' },
      { id: VIEWS.LESSON_1_2_PAGE3, label: 'النقلة الفلسفية في البرمجة', labelEn: 'The Paradigm Shift', badge: '03', badgeEn: '03', icon: 'swap_horiz' },
      { id: VIEWS.LESSON_1_2_PAGE4, label: 'العقل الاصطناعي وهندسة البيرسبترون', labelEn: 'Artificial Brain & Perceptron', badge: '04', badgeEn: '04', icon: 'psychology' },
      { id: VIEWS.LESSON_1_2_PAGE5, label: 'الذكاء الضيق وتحدي الهلوسة', labelEn: 'Narrow AI & Hallucination Challenge', badge: '05', badgeEn: '05', icon: 'warning' },
      { id: VIEWS.LESSON_1_2_PAGE6, label: 'دراسات الحالة الحقيقية (قضاء وزراعة)', labelEn: 'Real Case Studies (Mata v. Avianca & Agri)', badge: '06', badgeEn: '06', icon: 'gavel' },
      { id: VIEWS.LESSON_1_2_PAGE7, label: 'مصفوفة أصحاب المصلحة وميثاق المدرسة', labelEn: 'Stakeholder Matrix & School Policy', badge: '07', badgeEn: '07', icon: 'policy' },
      { id: VIEWS.LESSON_1_2_PAGE8, label: 'معمل التفكير النقدي وتفكيك الوعي', labelEn: 'Critical Thinking & Socratic Lab', badge: '08', badgeEn: '08', icon: 'psychology_alt' },
      { id: VIEWS.LESSON_1_2_PAGE9, label: 'شجرة المفاهيم وخريطة الإتقان الشاملة', labelEn: 'Comprehensive Mastery Concept Map', badge: '09', badgeEn: '09', icon: 'device_hub' },
      { id: VIEWS.LESSON_1_2_PAGE10, label: 'التحدي الختامي وبنك الأسئلة', labelEn: 'Final Challenge & Assessment Bank', badge: '10', badgeEn: '10', icon: 'quiz' },
    ],
  },
];

export const VIEW_CONFIG = NAVIGATION_SECTIONS.flatMap((sec) => sec.pages);