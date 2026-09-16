/**
 * ====================================================================
 * Front-Matter Trilogy Data Contracts (English Localization)
 * The Mentor | Grade 11 Programming & AI (2026–2027)
 * ====================================================================
 */

export const globalRoadmapDataEn = {
  academicYear: '2026–2027',
  stageLabel: 'Front Matter • Grade 11 Secondary',
  centerBadge: 'Term 1 Architecture & Macro View',
  hero: {
    tag: 'Integrated Learning Path • National Educational Standards',
    title: 'Semester 1 Journey — From Digital Awareness & Cybersecurity to Web Systems Architecture & Design',
    totalChapters: 4,
    totalLessons: 14,
  },
  chapters: [
    {
      number: '01',
      title: 'Chapter 1: IT & Society',
      latinTitle: 'IT & Society',
      badgeText: '4 Accredited Lessons',
      theme: 'ch1',
      lessons: [
        { id: '1-1', title: 'Evolution of IT & Social Transformation', icon: 'history_edu' },
        { id: '1-2', title: 'How Artificial Intelligence Works', icon: 'memory' },
        { id: '1-3', title: 'AI in Daily Life & Industry', icon: 'smart_toy' },
        { id: '1-4', title: 'Ethical Issues in Artificial Intelligence', icon: 'gavel' },
      ],
      connectiveBridge: 'Building intelligent systems demands defending and securing them',
    },
    {
      number: '02',
      title: 'Chapter 2: Cybersecurity',
      latinTitle: 'Cybersecurity',
      badgeText: '3 Accredited Lessons',
      theme: 'ch2',
      lessons: [
        { id: '2-1', title: 'Encryption & Authentication Techniques', icon: 'key' },
        { id: '2-2', title: 'Network Security Design', icon: 'lan' },
        { id: '2-3', title: 'Incident Response & Risk Management', icon: 'security_update_warning' },
      ],
      connectiveBridge: 'Secure networking sets the foundation for architecting cloud apps',
    },
    {
      number: '03',
      title: 'Chapter 3: Web Applications',
      latinTitle: 'Web Applications',
      badgeText: '3 Accredited Lessons',
      theme: 'ch3',
      lessons: [
        { id: '3-1', title: 'Web Applications Architecture', icon: 'dns' },
        { id: '3-2', title: 'Communication Protocols & Web APIs', icon: 'sync_alt' },
        { id: '3-3', title: 'Front-End Technologies & DOM Fundamentals', icon: 'code_blocks' },
      ],
      connectiveBridge: 'Robust infrastructure requires mastery of user experience and interface design',
    },
    {
      number: '04',
      title: 'Chapter 4: Web Design & UX',
      latinTitle: 'Web Design & UX',
      badgeText: '4 Accredited Lessons',
      theme: 'ch4',
      lessons: [
        { id: '4-1', title: 'Media Types & Technical Properties', icon: 'perm_media' },
        { id: '4-2', title: 'Information Architecture & UX Design', icon: 'layers' },
        { id: '4-3', title: 'Website Evaluation & Usability Heuristics', icon: 'fact_check' },
        { id: '4-4', title: 'Iterative Improvement & Optimization', icon: 'cached' },
      ],
    },
  ],
  mentorVision: {
    title: "The Mentor's Vision:",
    quote: '“This curriculum is not a repository of memorized terminology; it is an architectural blueprint to forge your mindset as an engineer and responsible thinker in the AI era. You will learn to grasp foundational logic and make conscious decisions aware of their societal impact.”',
  },
};

export const progressTrackerDataEn = {
  academicYear: '2026/2027',
  stageLabel: 'Front Matter • Grade 11 Secondary',
  title: 'Semester 1 Learning Map',
  subtitle: '(STUDENT PROGRESS TRACKER)',
  bannerText: '14 academic milestones forging tomorrow’s engineer and thinker — Track your mastery step by step',
  legendKeys: [
    { key: 'theory', label: 'Theory Mastered', short: 'Theory' },
    { key: 'activity', label: 'Class Lab Applied', short: 'Lab' },
    { key: 'coding', label: 'Coding Challenge Done', short: 'Code' },
    { key: 'assessment', label: 'Assessment Ready', short: 'Exam', isStar: true },
  ],
  units: [
    {
      unitNumber: 'UNIT 01',
      titleAr: 'Unit 1: IT & Society',
      lessonCount: '4 Lessons',
      subtitleEn: 'ACADEMIC FOUNDATION',
      theme: 'ch1',
      lessons: [
        { id: '1-1', titleAr: 'Evolution of IT & Social Transformation', titleEn: 'IT Evolution & Social Transformation' },
        { id: '1-2', titleAr: 'How Artificial Intelligence Works', titleEn: 'How Artificial Intelligence Works' },
        { id: '1-3', titleAr: 'AI in Daily Life & Industry', titleEn: 'AI in Daily Life & Industry' },
        { id: '1-4', titleAr: 'Ethical Issues in AI', titleEn: 'Ethical Issues in AI' },
      ],
      milestone: {
        icon: 'verified',
        title: 'Unit 1 Synthesis & Assessment Checkpoint',
        status: 'Completed [   ]',
      },
    },
    {
      unitNumber: 'UNIT 02',
      titleAr: 'Unit 2: Cybersecurity',
      lessonCount: '3 Lessons',
      subtitleEn: 'CYBERSECURITY DEFENSE',
      theme: 'ch2',
      lessons: [
        { id: '2-1', titleAr: 'Encryption & Authentication Techniques', titleEn: 'Encryption & Authentication Techniques' },
        { id: '2-2', titleAr: 'Network Security Design', titleEn: 'Network Security Design' },
        { id: '2-3', titleAr: 'Incident Response & Risk Management', titleEn: 'Incident Response & Risk Management' },
      ],
      milestone: {
        icon: 'shield',
        title: 'Hands-on Workshop: Network Defense & Data Protection',
        status: 'Completed [   ]',
      },
    },
    {
      unitNumber: 'UNIT 03',
      titleAr: 'Unit 3: Web Applications',
      lessonCount: '3 Lessons',
      subtitleEn: 'WEB ARCHITECTURE',
      theme: 'ch3',
      lessons: [
        { id: '3-1', titleAr: 'Web Applications Architecture', titleEn: 'Web Applications Architecture' },
        { id: '3-2', titleAr: 'Communication Protocols & Web APIs', titleEn: 'Communication Protocols & Web APIs' },
        { id: '3-3', titleAr: 'Front-End Fundamentals & DOM', titleEn: 'Front-End Fundamentals & DOM' },
      ],
      milestone: {
        icon: 'code_blocks',
        title: 'Architecture Verification & Network APIs Lab',
        status: 'Completed [   ]',
      },
    },
    {
      unitNumber: 'UNIT 04',
      titleAr: 'Unit 4: Web Design & UX',
      lessonCount: '4 Lessons',
      subtitleEn: 'UX & DIGITAL MEDIA',
      theme: 'ch4',
      lessons: [
        { id: '4-1', titleAr: 'Media Types & Technical Properties', titleEn: 'Media Types & Technical Properties' },
        { id: '4-2', titleAr: 'Information Architecture & UX Design', titleEn: 'Information Architecture & UX Design' },
        { id: '4-3', titleAr: 'Website Evaluation & Usability Heuristics', titleEn: 'Website Evaluation & Usability Heuristics' },
        { id: '4-4', titleAr: 'Iterative Improvement & Optimization', titleEn: 'Iterative Improvement & Optimization' },
      ],
      capstone: {
        icon: 'workspace_premium',
        title: 'Capstone Project: Full-Stack Web Experience Synthesizing All 4 Units',
        badge: 'Major Capstone Assessment',
      },
    },
  ],
  studentContract: {
    title: 'Academic Commitment & Learning Contract:',
    goalPrompt: 'My academic and technical objective for this semester:',
    signaturePrompt: 'Student Researcher Signature:',
    datePrompt: 'Journey Launch Date:',
  },
};

export const masteryPedagogyDataEn = {
  academicYear: '2026–2027',
  stageLabel: 'Front Matter • Learning Contract',
  centerBadge: 'Pedagogical Philosophy & Mastery Flow (HOW WE LEARN)',
  hero: {
    title: 'How Do We Learn with «The Mentor»?',
    badge: 'Pedagogy 26–27',
    description: 'In this course, we do not memorize definitions for exam sheets; we construct the mindset of an AI engineer and responsible software developer. Here is the 5-stage mastery cycle governing every lesson, lab, and activity.',
  },
  masteryStages: [
    {
      step: '01',
      titleAr: 'Understand',
      titleEn: 'UNDERSTAND',
      highlight: 'Grasp the underlying logic before phrasing',
      description: 'Deconstruct concepts into tangible reality, discovering the real problem code was created to solve.',
      icon: 'lightbulb',
      theme: 'ch1',
    },
    {
      step: '02',
      titleAr: 'Think Deeply',
      titleEn: 'THINK',
      highlight: 'Algorithmic analysis & critical tradeoffs',
      description: 'Ask engineering questions: “Why choose this architecture? What are the memory and compute costs?”',
      icon: 'schema',
      theme: 'ch4',
    },
    {
      step: '03',
      titleAr: 'Apply Live',
      titleEn: 'APPLY',
      highlight: 'Hands-on practice in production environments',
      description: 'Transform theory into clean code and responsive UI. Compiler errors here are your gateway to mastery.',
      icon: 'terminal',
      theme: 'teal',
    },
    {
      step: '04',
      titleAr: 'Challenge',
      titleEn: 'CHALLENGE',
      highlight: 'Advanced algorithmic problem-solving',
      description: 'Complex scenarios mirroring industry demands and computing olympiads under strict performance constraints.',
      icon: 'bolt',
      theme: 'ch3',
    },
    {
      step: '05',
      titleAr: 'Decide & Evaluate',
      titleEn: 'DECIDE',
      highlight: 'Ethical technical consultant & decision-maker',
      description: 'Assume the role of technical advisor; every decision carries real-world impact and requires evidence.',
      icon: 'balance',
      theme: 'dark',
    },
  ],
  honorContract: {
    title: "The Mentor's Honor Contract",
    subtitle: 'Three tenets distinguishing rote memorization from authentic innovative mastery',
    badge: "ENGINEER'S CODE",
    mentorCard: {
      roleTitle: 'The Mentor',
      roleSubtitle: 'Your Guiding Voice Across the Curriculum',
      statusBadge: 'Accredited Mentor & AI Companion',
    },
    rules: [
      {
        number: '01',
        title: '“A smart question is more valuable than a memorized answer”',
        text: 'In the era of Generative AI, your core value lies in formulating precise queries (Prompt Engineering), critiquing outputs, and detecting logical vulnerabilities.',
        theme: 'ch1',
      },
      {
        number: '02',
        title: '“A compiler error is a necessary step toward optimal solutions”',
        text: 'Stack traces are not failures; they are continuous telemetry dialoguing with the system to refine it with resilience and precision.',
        theme: 'ch4',
      },
      {
        number: '03',
        title: '“You are a builder of technology, not merely a passive consumer”',
        text: 'Our mission is to construct digital infrastructure and train specialized AI models engineered by conscious local talent.',
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
