/**
 * Lesson 1-4 Educational Data (Curriculum Source of Truth - English)
 * Title: Ethical Issues with AI
 * Unit: Unit 1: Computing & AI Fundamentals
 * Grade: Grade 11 - Egyptian Baccalaureate / Thanawya (Term 1)
 * Source: Egyptian Ministry of Education Textbook & Eng. Mohamed Shamel Lecture Materials
 * Pacing: 3 Comprehensive Interactive Stations + Dual QR Exam Portal
 * Student Language Optimization: Rephrased into clear, natural, active English specifically crafted
 * for language school students while strictly preserving 100% of official Ministry exam terminology.
 */

export const lesson04DataEn = {
  id: 'term1-ch1-l04',
  term: 1,
  chapterNumber: 1,
  lessonNumber: '1-4',
  title: 'Ethical Issues with AI',
  unitTitle: 'Unit 1: Computing & AI Fundamentals',
  estimatedDurationMinutes: 60,
  learningObjectives: [
    'Explain what algorithmic bias is and clearly describe its three root causes.',
    'Connect the four foundational principles of AI ethics (Fairness, Transparency, Privacy Protection, and Accountability) to real-life situations.',
    'Evaluate ethical dilemmas in AI applications, identify responsible stakeholders, and justify rules for responsible usage.'
  ],
  pages: [
    {
      id: 'page-01',
      pageNumber: '01',
      totalPages: '03',
      type: 'ALGORITHMIC_BIAS',
      badgeText: 'Part 1: Algorithmic Bias',
      unitTitle: 'Unit 1: Computing & AI Fundamentals',
      lessonTitle: 'Lesson 1-4: Ethical Issues with AI',
      pageTag: 'CH-01 // PAGE 01',
      content: {
        badge: 'Lecture 4 — Station 1',
        title: 'Algorithmic Bias: When Machines Inherit Human Flaws',
        subtitle: 'Unpacking Algorithmic Bias, its three root causes, and the hidden trap of Proxy Variables',
        dailyHumorNote: 'AI doesn’t hate anyone and has zero feelings! But if you feed it flawed human history, it will repeat past discrimination with ruthless mathematical perfection!',
        grandQuestion: 'If an AI rejects your job application or misidentifies you as a criminal, is the algorithm evil—or is it just mirroring the flawed data we gave it?',

        // Definition Card
        definitionCard: {
          termAr: 'التحيز الخوارزمي',
          termEn: 'Algorithmic Bias',
          icon: 'balance',
          officialExamDefinition: 'A pattern or systematic deviation in AI outputs that leads to unfair or harmful outcomes, originating from training data, system design, deployment methods, or human/social contexts.',
          plainExplanation: 'In simple words: Algorithmic bias happens when an AI unfairly favors one group over another! For instance, a hiring AI that automatically favors male applicants, or a face-recognition camera that constantly misidentifies dark-skinned people because it was never trained on enough diverse faces.',
          engineerGoldenRule: 'Engineer’s Golden Rule: "Garbage In, Bias Out" — If your training dataset is incomplete or reflects past inequality, your AI will turn that bias into automated law.'
        },

        // Core Causes Breakdown
        causesTitle: 'The Three Root Causes of Bias in AI Systems',
        causes: [
          {
            id: 'cause-data-imbalance',
            num: '01',
            icon: 'dataset',
            title: 'Insufficient or Unrepresentative Training Data',
            titleEn: 'Insufficient / Unrepresentative Training Data',
            desc: 'When the dataset lacks diversity. For example, if a face-recognition model is trained on 85% light-skinned male faces, its accuracy will collapse when tested on women or underrepresented ethnicities.',
            examKeyword: 'Insufficient data on certain attributes',
            realExample: 'Surveillance cameras failing to distinguish innocent citizens from minority communities due to severe underrepresentation in training datasets.'
          },
          {
            id: 'cause-historical-bias',
            num: '02',
            icon: 'history_edu',
            title: 'Reflection of Historical Discriminatory Tendencies',
            titleEn: 'Historical Discriminatory Tendencies',
            desc: 'Historical records are rarely neutral; they mirror decades of past societal prejudice. The AI analyzes these records and mistakes historical discrimination for "proven rules of success".',
            examKeyword: 'Past discriminatory tendencies reflected in the data',
            realExample: 'Feeding an AI 30 years of past corporate promotions where only men held executive roles; the algorithm infers that being male is a prerequisite for leadership!'
          },
          {
            id: 'cause-proxy-variables',
            num: '03',
            icon: 'vpn_key',
            title: 'System Design Flaws & The "Proxy Variable" Trap',
            titleEn: 'System Design & Proxy Variables Flaws',
            desc: 'Even if developers remove protected attributes (like gender, race, or religion), the model can find a backdoor variable (a "proxy") that indirectly reveals the hidden trait.',
            examKeyword: 'A proxy variable that indirectly stands in for a protected attribute',
            realExample: 'You remove "gender" from a job application, but the AI notices the candidate played on the "women’s rugby team" or attended an all-girls high school, deducting points through the secret backdoor!'
          }
        ],

        // Deep-Dive Focus: Hiring AI Case Study
        caseStudy: {
          title: 'Official Ministry Case Study: The Hiring AI Gender Discrimination Scandal',
          badge: 'Documented Case',
          scenario: 'A global tech giant built an automated AI tool to screen resumes and rank top engineering candidates using hiring records from the past 10 years.',
          whatHappened: 'The AI quickly learned to penalize any resume that included the word "women’s" (such as "women’s chess club captain") and systematically downgraded female applicants!',
          whyItFailed: 'Because the tech industry had historically been male-dominated, the algorithm deduced that maleness was a marker of qualified candidates, transforming historical inequality into automated bias.',
          lessonLearned: 'The fix is not just erasing words. Engineers must rigorously audit data representation, test outputs across demographic groups, and ensure human oversight.'
        },

        // Interactive Check
        interactiveCheck: {
          question: 'Which of the following is NOT an appropriate cause of algorithmic bias?',
          examRef: 'Official Ministry Exam Question — Try 2 (1)',
          options: [
            { text: 'Training data is biased or insufficient.', isCorrect: false },
            { text: 'Past discriminatory tendencies are reflected in the data.', isCorrect: false },
            { text: 'The processing speed of the computer is slow.', isCorrect: true, feedback: 'Correct! Computer processing speed only affects execution latency; it has zero impact on ethical fairness or decision bias.' },
            { text: 'A proxy variable indirectly stands in for a protected attribute.', isCorrect: false }
          ]
        }
      }
    },
    {
      id: 'page-02',
      pageNumber: '02',
      totalPages: '03',
      type: 'PRIVACY_AND_BLACK_BOX',
      badgeText: 'Part 2: Privacy & The Black Box',
      unitTitle: 'Unit 1: Computing & AI Fundamentals',
      lessonTitle: 'Lesson 1-4: Ethical Issues with AI',
      pageTag: 'CH-01 // PAGE 02',
      content: {
        badge: 'Lecture 4 — Station 2',
        title: 'Privacy at Risk & The Black-Box Mystery (XAI)',
        subtitle: 'Facial surveillance, digital footprint harvesting, the opaque Black Box, and the Responsibility Dilemma',
        dailyHumorNote: 'Imagine a doctor handing you a mystery pill: "Take this! The computer said so, but nobody knows why." Would you swallow it? Never! That is the Black-Box problem.',

        // Privacy Section
        privacySection: {
          title: '1. Privacy Hazards in the Age of AI',
          definition: 'Privacy: The fundamental human right to control which personal data is collected, how it is used, and who can access it.',
          pillars: [
            {
              id: 'priv-surveillance',
              num: '1',
              title: 'Surveillance through Face-Recognition Technology',
              titleEn: 'Surveillance through Face Recognition',
              icon: 'videocam',
              danger: 'Smart AI cameras installed across public plazas, transit hubs, and streets can identify, log, and track individuals 24/7 without explicit consent.',
              balanceConcept: 'The Delicate Balance: Enhancing public safety and convenience versus avoiding an invasive police state where personal freedom is stripped away.'
            },
            {
              id: 'priv-mass-collection',
              num: '2',
              title: 'Mass Collection of Personal Behavioral Data',
              titleEn: 'Mass Collection of Personal Data',
              icon: 'travel_explore',
              danger: 'Tech platforms gather and analyze billions of digital telemetry points—search queries, purchase histories, and real-time GPS coordinates—to construct psychological profiles.',
              balanceConcept: 'The Ethical Mandate: Personal data must NEVER be repurposed for undisclosed agendas beyond the explicit initial purpose agreed upon by the user.'
            }
          ]
        },

        // Black Box & XAI Section
        blackBoxSection: {
          title: '2. The "Black-Box Problem" and Explainable AI (XAI)',
          blackBoxDefinition: 'The Black-Box Problem: Occurs when an AI’s internal decision-making process is completely opaque to humans. Even though we see the input and the final output, we cannot decipher WHY the model arrived at that judgment.',
          xaiDefinition: 'Explainable AI (XAI): Emerging engineering technologies and methods designed to make the internal logic and contributing factors of AI decisions understandable and verifiable by humans.',
          whyItMatters: 'In high-stakes arenas (medical diagnosis, bank loan approvals, criminal sentencing), high accuracy is not enough! If a doctor or judge cannot verify why an AI reached a verdict, catastrophic errors remain undetectable.',
          comparison: [
            {
              type: 'Opaque Black Box (Unacceptable in Critical Decisions)',
              icon: 'lock',
              status: 'High Liability Risk',
              desc: 'Data goes in, a judgment comes out. No explanations, no audit trails. Flaws, hallucinations, or racial prejudice remain completely hidden.'
            },
            {
              type: 'Explainable AI / Glass Box (Modern Ethical Standard)',
              icon: 'visibility',
              status: 'Responsible Engineering',
              desc: 'The model provides clear feature attribution: "This diagnosis was reached 75% due to lung shadow markers and 25% due to patient age", allowing humans to verify and trust.'
            }
          ]
        },

        // Responsibility Breakdown
        responsibilitySection: {
          title: '3. The Responsibility Dilemma (Who Takes the Blame?)',
          coreIssue: 'When an AI causes real-world harm or makes an incorrect judgment, who is legally and ethically responsible?',
          clarificationNote: 'Ministry Core Takeaway: There is no single universal formula for responsibility; views differ based on jurisdiction, context, and stakeholder roles:',
          stakeholders: [
            {
              role: 'The Developer',
              icon: 'code',
              duty: 'Responsible for auditing training data bias, writing secure code, building transparent explainability mechanisms, and setting safety guardrails.'
            },
            {
              role: 'The Company / Operator',
              icon: 'business',
              duty: 'Responsible for defining usage policies, training operating staff, monitoring ongoing performance, and ensuring mandatory human oversight.'
            },
            {
              role: 'The End User',
              icon: 'person',
              duty: 'Responsible for validating recommendations before acting, respecting intended usage limits, and never delegating human accountability to software.'
            }
          ]
        }
      }
    },
    {
      id: 'page-03',
      pageNumber: '03',
      totalPages: '03',
      type: 'AI_ETHICS_PRINCIPLES',
      badgeText: 'Part 3: The 4 Ethical Pillars & Decision Lab',
      unitTitle: 'Unit 1: Computing & AI Fundamentals',
      lessonTitle: 'Lesson 1-4: Ethical Issues with AI',
      pageTag: 'CH-01 // PAGE 03',
      content: {
        badge: 'Lecture 4 — Station 3',
        title: 'The Four Pillars of AI Ethics & The Decision Lab',
        subtitle: 'The official ethical framework, the School Gate Face-Recognition case study, and the Engineer’s Audit Protocol',
        dailyHumorNote: 'AI is a superpower. Uncle Ben told Peter Parker: "With great power comes great responsibility!" AI ethics is the armor that keeps humanity in charge.',

        // The 4 Core Principles Matrix
        principlesTitle: 'The Four Foundational Principles of AI Ethics (Official Ministry Standards)',
        principles: [
          {
            id: 'prin-fairness',
            num: '01',
            nameAr: 'العدالة',
            nameEn: 'Fairness',
            icon: 'balance',
            badgeColor: '#10b981',
            officialDefinition: 'Not unjustly discriminating against any particular person or group.',
            plainSlogan: 'Equal Treatment: Zero discrimination based on race, gender, or background!',
            practicalRequirement: 'Regularly audit model outcomes to guarantee that protected demographic groups are not unfairly denied jobs, loans, or medical care.'
          },
          {
            id: 'prin-transparency',
            num: '02',
            nameAr: 'الشفافية',
            nameEn: 'Transparency',
            icon: 'visibility',
            badgeColor: '#0ea5e9',
            officialDefinition: 'Showing the AI’s decision-making process, inner workings, and operational limits clearly.',
            plainSlogan: 'The Glass Box: Open the hood; never keep the reasoning secret!',
            practicalRequirement: 'Inform users whenever they interact with an AI, and disclose the criteria used to reach decisions that impact people’s lives.'
          },
          {
            id: 'prin-privacy',
            num: '03',
            nameAr: 'حماية الخصوصية',
            nameEn: 'Privacy Protection',
            icon: 'verified_user',
            badgeColor: '#8b5cf6',
            officialDefinition: 'Handling personal information appropriately and protecting user privacy.',
            plainSlogan: 'My Data, My Rights: Collect only what is necessary and never share without consent!',
            practicalRequirement: 'Enforce strong data encryption, practice data minimization, and forbid unauthorized monetization of private telemetry.'
          },
          {
            id: 'prin-accountability',
            num: '04',
            nameAr: 'المساءلة',
            nameEn: 'Accountability',
            icon: 'gavel',
            badgeColor: '#f59e0b',
            officialDefinition: 'Being answerable for the AI’s decisions, actions, and consequences.',
            plainSlogan: 'Who Owns the Outcome? A designated human must answer when things go wrong!',
            practicalRequirement: 'Critical Ministry Distinction: Accountability is NOT the ability to explain reasoning (that is XAI); it means establishing who faces legal liability and responsibility when an AI errs.'
          }
        ],

        // Case Study: School Attendance Cameras
        schoolCaseStudy: {
          title: 'Real-World Case Study: Smart Face-Recognition Cameras at the School Gate',
          badge: 'Applied Context',
          scenario: 'A school proposes installing facial recognition cameras at the main entrance to automatically log student attendance and prevent unauthorized campus entry.',
          analysis: [
            {
              aspect: 'Practical Benefit for School',
              icon: 'task_alt',
              desc: 'Seamless automated attendance tracking, zero morning bottleneck delays at turnstiles, and instantaneous verification of student presence.'
            },
            {
              aspect: 'Privacy Concern',
              icon: 'warning',
              desc: 'Compulsory biometric surveillance of minors, permanent storage of facial scans, and the catastrophic risk of database leaks or surveillance overreach.'
            },
            {
              aspect: 'The Accountability Question',
              icon: 'help',
              desc: 'If the camera misidentifies an honest student and blocks them from taking their final exam, who is liable: the school administration that deployed the system without human fallback, or the AI vendor that oversold its accuracy?'
            }
          ]
        },

        // Think as an Engineer Protocol
        engineerProtocol: {
          title: 'Professional Engineer’s Protocol: How to Audit an AI System Before Launch',
          steps: [
            { step: '01', title: 'Data Auditing', desc: 'Verify training data representation across all demographic groups and scrub historical prejudices.' },
            { step: '02', title: 'Comparative Stress Testing', desc: 'Benchmark model accuracy across different subgroups to ensure zero ethical performance gaps.' },
            { step: '03', title: 'Mandatory Human Oversight', desc: 'Never automate high-impact decisions completely; always provide a human review and appeal pathway.' }
          ]
        },

        // Exam Portal Card Integration
        examPortalSection: {
          title: 'Interactive Ministry Exam Portal for Lesson 1-4',
          desc: 'Test your mastery against the full bank of Ministry exam questions with deterministic auto-grading and model rubrics for the 6-mark analytical challenge.',
          examHash: '#exam-1-4'
        }
      }
    }
  ]
};
