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
  LESSON_1_1_BOOKLET: 'LESSON_1_1_BOOKLET',
};

export const NAVIGATION_SECTIONS = [
  {
    id: 'FRONT_MATTER',
    title: 'دليل وافتتاحية المنهج',
    icon: 'menu_book',
    defaultView: VIEWS.CURRICULUM_COVER,
    pages: [
      { id: VIEWS.CURRICULUM_COVER, label: 'غلاف المنهج الرسمي', badge: 'الغلاف', icon: 'palette' },
      { id: VIEWS.ROADMAP_PAGE1, label: 'الرؤية الكبرى وخريطة الفصول', badge: '01', icon: 'route' },
      { id: VIEWS.TRACKER_PAGE2, label: 'خطة ومسار تقدم الطالب', badge: '02', icon: 'trending_up' },
      { id: VIEWS.PEDAGOGY_PAGE3, label: 'دورة الإتقان وفلسفة التعلم', badge: '03', icon: 'psychology' },
      { id: VIEWS.BOOKLET_TRILOGY, label: 'طباعة الافتتاحية كاملاً', badge: 'A4', icon: 'print', isPrint: true },
    ],
  },
  {
    id: 'LESSON_1_1',
    title: 'الدرس 1-1: تطور تكنولوجيا المعلومات',
    icon: 'terminal',
    defaultView: VIEWS.LESSON_1_1_PAGE0,
    pages: [
      { id: VIEWS.LESSON_1_1_PAGE0, label: 'خريطة الرحلة والبوصلة', badge: '00', icon: 'explore' },
      { id: VIEWS.LESSON_1_1_PAGE1, label: 'نشاط التهيئة (مقارنة 30 عاماً)', badge: '01', icon: 'compare_arrows' },
      { id: VIEWS.LESSON_1_1_PAGE2, label: 'مسار الاكتشاف الزمني (1940-الآن)', badge: '02', icon: 'history_edu' },
      { id: VIEWS.LESSON_1_1_PAGE3, label: 'قانون مور وتحديات الفيزياء', badge: '03', icon: 'memory' },
      { id: VIEWS.LESSON_1_1_PAGE4, label: 'التحولات الاجتماعية الخمسة', badge: '04', icon: 'hub' },
      { id: VIEWS.LESSON_1_1_PAGE5, label: 'الحوسبة الطرفية مقابل السحابية', badge: '05', icon: 'speed' },
      { id: VIEWS.LESSON_1_1_PAGE6, label: 'الواقع المعزز والافتراضي والكمومي', badge: '06', icon: 'view_in_ar' },
      { id: VIEWS.LESSON_1_1_BOOKLET, label: 'معاينة وطباعة كتيب الدرس', badge: 'A4', icon: 'print', isPrint: true },
    ],
  },
];

export const VIEW_CONFIG = NAVIGATION_SECTIONS.flatMap((sec) => sec.pages);


