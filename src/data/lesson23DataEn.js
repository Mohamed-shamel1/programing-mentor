/**
 * Lesson 2-3 Educational Data (Curriculum Source of Truth - English for Language Schools)
 * Title: Incident Response and Risk Management
 * Unit: Unit 2: Cybersecurity Defense
 * Grade: Secondary 2 (Term 1)
 * Source: Egyptian Ministry of Education Textbook (pp. 49-53) & Al-Faez Study Guide (pp. 80-89)
 * Theme: Emerald / Shield Theme (ch2)
 * Pacing: 3 Comprehensive Interactive Stations + Dual QR Exam Portal
 */

export const lesson23DataEn = {
  id: 'term1-ch2-l03',
  term: 1,
  chapterNumber: 2,
  lessonNumber: '2-3',
  title: 'Incident Response and Risk Management',
  unitTitle: 'Unit 2: Cybersecurity Defense',
  subtitle: 'The 6 Ordered Response Stages, Risk Assessment Matrix & Why Order Matters',
  estimatedDurationMinutes: 60,
  learningObjectives: [
    'Define a security incident and distinguish its 3 typical forms: information leak, data tampering, and service outage.',
    'Apply the 6 stages of incident response in exact order (Preparation -> Detection -> Containment -> Eradication -> Recovery -> Prevention).',
    'Explain why order matters: why containment comes before eradication, and why eradication must precede recovery.',
    'Calculate risk size and prioritize security threats using the formula (Risk = Impact × Likelihood) and the 3×3 matrix.'
  ],
  glossary: [
    { acronym: 'Incident', fullEn: 'Security Incident', termAr: 'الحادث الأمني', desc: 'A situation in which actual damage occurs due to an information security problem.' },
    { acronym: 'Prep', fullEn: 'Preparation', termAr: 'التحضير والاستعداد', desc: 'Stage 1: Establish response procedures and structures in advance, in preparation for incidents.' },
    { acronym: 'Detect', fullEn: 'Detection', termAr: 'الاكتشاف والتأكيد', desc: 'Stage 2: Discover and confirm that a security incident has occurred.' },
    { acronym: 'Contain', fullEn: 'Containment', termAr: 'الاحتواء وحصار الضرر', desc: 'Stage 3: Limit the scope of impact so that damage does not spread further (e.g., isolate the machine).' },
    { acronym: 'Eradicate', fullEn: 'Eradication', termAr: 'الاستئصال وإزالة السبب', desc: 'Stage 4: Remove the cause of the incident (e.g., remove malware, patch vulnerability).' },
    { acronym: 'Recover', fullEn: 'Recovery', termAr: 'التعافي والاستعادة', desc: 'Stage 5: Return systems and services to their normal state (e.g., restore from clean backup).' },
    { acronym: 'Prevent', fullEn: 'Prevention of Recurrence', termAr: 'منع التكرار', desc: 'Stage 6: Analyze the cause and take measures so that the same incident does not occur again.' },
    { acronym: 'Risk', fullEn: 'Risk', termAr: 'الخطر الأمني', desc: 'The possibility of an information security problem occurring in the future, and its impact.' },
    { acronym: 'Impact', fullEn: 'Impact', termAr: 'التأثير (حجم الضرر)', desc: 'How much damage occurs if the risk actually materializes.' },
    { acronym: 'Likelihood', fullEn: 'Likelihood', termAr: 'الاحتمالية (فرصة الحدوث)', desc: 'How high the probability is that the risk will actually materialize.' }
  ],
  pages: [
    {
      id: 'page-01',
      pageNumber: '01',
      totalPages: '03',
      type: 'INCIDENT_RESPONSE_FLOW',
      badgeText: 'Station 1: Incidents & 6-Stage Flow',
      unitTitle: 'Unit 2: Cybersecurity Defense',
      lessonTitle: 'Lesson 2-3: Incident Response & Risk Management',
      pageTag: 'CH-02 // PAGE 01',
      content: {
        badge: 'Lecture 7 — Station 1',
        title: 'What is a Security Incident & The 6 Ordered Stages Flow',
        subtitle: 'How does an organization respond in the right order when under cyberattack?',
        dailyHumorNote: 'Responding to a malware attack without an orderly plan is like putting out a fire with gasoline!',
        grandQuestion: 'Even well-protected systems can be attacked — how should an organization respond in order to stop damage?',

        // Golden Concept Foundation
        foundationBox: {
          title: 'The Core Reality (Ministry Book p. 49 & Al-Faez p. 80):',
          conceptText: 'Even a well-protected system can be attacked. When a security incident happens (data leaked, files tampered with, or a service knocked offline), a rushed and unplanned reaction only makes the damage worse! Organizations follow a clear, ordered response so that damage is contained, the cause is removed, and the same problem does not return.',
          goldenRule: 'Exam Rule: "Incident response follows six ordered stages, and risk assessment prioritizes risks by Impact × Likelihood."'
        },

        // Security Incident Definition & 3 Typical Types
        incidentTypesTitle: 'What is a Security Incident? & 3 Typical Examples (Textbook p. 49)',
        incidentDefinition: 'A situation in which actual damage occurs due to an information security problem.',
        incidentTypes: [
          {
            id: 'type-leak',
            nameAr: 'تسرب المعلومات',
            nameEn: '1. Information Leak',
            ciaPillar: 'Threatens Confidentiality',
            icon: 'lock_open',
            color: '#dc2626',
            bgColor: '#fef2f2',
            borderColor: '#fca5a5',
            definition: 'Personal information or confidential enterprise data is leaked to the outside.',
            examExample: 'Exam Scenario: Hackers breach an e-commerce database and leak customer credit card numbers.'
          },
          {
            id: 'type-tamper',
            nameAr: 'التلاعب بالبيانات',
            nameEn: '2. Data Tampering',
            ciaPillar: 'Threatens Integrity',
            icon: 'edit_off',
            color: '#d97706',
            bgColor: '#fffbeb',
            borderColor: '#fde68a',
            definition: 'Data within an organization\'s system is altered without authorization.',
            examExample: 'Exam Scenario: An attacker unauthorizedly changes student exam grades or bank account balances.'
          },
          {
            id: 'type-outage',
            nameAr: 'انقطاع الخدمة',
            nameEn: '3. Service Outage',
            ciaPillar: 'Threatens Availability',
            icon: 'cloud_off',
            color: '#2563eb',
            bgColor: '#eff6ff',
            borderColor: '#bfdbfe',
            definition: 'A service becomes unavailable due to attacks on the server, knocking it offline.',
            examExample: 'Exam Scenario: A bank web application crashes due to a Distributed Denial of Service (DDoS) attack.'
          }
        ],

        // The 6 Ordered Stages
        stagesFlowTitle: 'The 6 Ordered Incident Response Stages Pipeline',
        stages: [
          {
            stepNumber: '1',
            nameAr: 'التحضير',
            nameEn: 'Preparation',
            icon: 'assignment_turned_in',
            color: '#0284c7',
            actionSummary: 'Establish response procedures and structures in advance, in preparation for incidents.',
            examSignal: 'Keyword: "In advance"'
          },
          {
            stepNumber: '2',
            nameAr: 'الاكتشاف',
            nameEn: 'Detection',
            icon: 'travel_explore',
            color: '#ca8a04',
            actionSummary: 'Discover and confirm that a security incident has occurred via logs and alerts.',
            examSignal: 'Keyword: "Discover and confirm"'
          },
          {
            stepNumber: '3',
            nameAr: 'الاحتواء',
            nameEn: 'Containment',
            icon: 'fence',
            color: '#dc2626',
            actionSummary: 'Limit the scope of impact so that damage does not spread further (e.g. isolate infected PC).',
            examSignal: 'Keyword: "Limit the scope / Isolate"'
          },
          {
            stepNumber: '4',
            nameAr: 'الاستئصال',
            nameEn: 'Eradication',
            icon: 'delete_forever',
            color: '#7c3aed',
            actionSummary: 'Remove the cause of the incident (e.g., delete malware, patch security vulnerability).',
            examSignal: 'Keyword: "Remove the cause"'
          },
          {
            stepNumber: '5',
            nameAr: 'التعافي',
            nameEn: 'Recovery',
            icon: 'restore',
            color: '#059669',
            actionSummary: 'Return systems and services to their normal state using clean, verified backups.',
            examSignal: 'Keyword: "Return to normal state"'
          },
          {
            stepNumber: '6',
            nameAr: 'منع التكرار',
            nameEn: 'Prevention of Recurrence',
            icon: 'security_update_good',
            color: '#16a34a',
            actionSummary: 'Analyze the cause and take measures so that the same incident does not occur again.',
            examSignal: 'Keyword: "Analyze cause / Same incident does not recur"'
          }
        ],

        // Quick Check Trap
        quickCheck: {
          question: 'A software update performed to add new features is considered a security incident? (True or False?)',
          correctAnswer: 'False',
          explanation: 'False! Routine software updates are planned maintenance, not security incidents, because no unauthorized problem or actual damage occurred.'
        }
      }
    },
    {
      id: 'page-02',
      pageNumber: '02',
      totalPages: '03',
      type: 'ORDER_MATTERS_CASE_STUDY',
      badgeText: 'Station 2: Order Matters & 6-Mark Essay',
      unitTitle: 'Unit 2: Cybersecurity Defense',
      lessonTitle: 'Lesson 2-3: Incident Response & Risk Management',
      pageTag: 'CH-02 // PAGE 02',
      content: {
        badge: 'Lecture 7 — Station 2',
        title: 'Why Order Matters, The 6-Mark Essay & School Decision Lab',
        subtitle: 'Why is recovering before eradicating fatal? And how does an engineer handle ransomware?',
        dailyHumorNote: 'Recovering before removing the virus is like repainting a house while termites are still chewing the walls!',

        // The Core Engineering Dilemma
        orderDilemmaBox: {
          title: 'The Strict Security Law: Why Must Stages Be Carried Out in Order? (p. 50-51)',
          rule1: {
            title: '1. Why must Containment come before Eradication?',
            reason: 'Cleaning malware and patching takes time. If you do not isolate the infected computer first (Containment), the malware will spread laterally across the entire network in seconds before you can eradicate it!'
          },
          rule2: {
            title: '2. Why must Eradication come before Recovery?',
            reason: 'If recovery is performed before removing the root cause, the lingering malware will immediately infect the newly restored systems and backups, causing the exact same crash again!'
          }
        },

        // Official 6-Mark Exam Essay Question (Book p. 51 & Al-Faez p. 83)
        essayQuestionBox: {
          badge: 'Official 6-Mark Exam Essay Question — Ministry Book p. 51 & Al-Faez p. 83',
          question: 'Explain why the six stages of incident response must be carried out in order, using recovery and eradication as an example. [6 Marks] [Refer to: what happens if the cause is not removed]',
          modelAnswerTitle: 'Official Approved Model Answer (Full 6 Marks):',
          points: [
            {
              title: '1. The Necessity of Ordered Progression:',
              text: 'The six stages follow a strict chronological sequence where each stage builds on the success of the previous one. Rushing or skipping stages causes catastrophic repeat failures.'
            },
            {
              title: '2. The Eradication vs. Recovery Example (Core Marks):',
              text: 'If an organization performs recovery (restoring systems from backup) before eradication (removing the root cause/malware and patching the vulnerability), the malware is still alive inside the environment. The restored system will be re-infected immediately, and the same incident will happen again (The same incident may occur again).'
            }
          ],
          conclusion: 'Conclusion: The correct order guarantees damage is contained first, the threat is thoroughly removed second, and clean restoration occurs third, followed by post-mortem prevention.'
        },

        // Think as an Engineer: School Ransomware Case Study (Book p. 52)
        schoolCaseStudy: {
          title: 'Engineer Decision Lab: School Ransomware Attack Scenario (p. 52)',
          scenario: 'A school\'s student-records system is hit by ransomware: files are encrypted and staff cannot log in. The incident has just been detected (Detection). You lead the incident response team. What is your decision?',
          immediateChoiceQuestion: 'Do you click "Restore from backup immediately" or "Follow the six-stage response in order"?',
          correctChoice: 'Follow the six-stage response in order! Immediate restoration without isolation would corrupt the backup files too.',
          actionPlan: [
            {
              step: 'Step 1: Containment',
              action: 'Disconnect network cables and isolate infected servers and control room PCs immediately to stop ransomware from encrypting administrative machines.'
            },
            {
              step: 'Step 2: Eradication',
              action: 'Scan with anti-malware tools, completely remove the ransomware executable, close exploited ports, patch the security flaw, and reset compromised passwords.'
            },
            {
              step: 'Step 3: Recovery',
              action: 'Restore student grades from a verified, clean offline backup. Test system integrity thoroughly before allowing teachers and staff to log back in.'
            }
          ],
          riskComparison: {
            title: 'School Risk Priority Evaluation (Exam Question p. 52):',
            riskA: 'Risk of another ransomware attack: High Impact + High Likelihood -> Top Critical Priority requiring urgent defensive actions.',
            riskB: 'Risk of a brief power cut: Low Impact -> Low Priority that can be handled later.'
          }
        }
      }
    },
    {
      id: 'page-03',
      pageNumber: '03',
      totalPages: '03',
      type: 'RISK_ASSESSMENT_MATRIX',
      badgeText: 'Station 3: Risk Matrix & Exam Portal',
      unitTitle: 'Unit 2: Cybersecurity Defense',
      lessonTitle: 'Lesson 2-3: Incident Response & Risk Management',
      pageTag: 'CH-02 // PAGE 03',
      content: {
        badge: 'Lecture 7 — Station 3',
        title: 'Risk Size Formula, The 3×3 Matrix & Priority Calculation',
        subtitle: 'How does an organization calculate risk and decide what to guard against first?',
        dailyHumorNote: 'No team has the budget or time to fix everything at once.. Math tells you which fire to extinguish first!',

        // The Risk Formula
        formulaBox: {
          title: 'The Mathematical Risk Size Formula (Textbook p. 50 & Al-Faez p. 82):',
          formulaText: 'Risk Size = Impact × Likelihood',
          formulaAr: 'درجة الخطر = التأثير (حجم الضرر) × الاحتمالية (فرصة الحدوث)',
          factors: [
            {
              name: 'Impact',
              desc: 'How much damage occurs if the risk actually materializes into reality.',
              icon: 'warning'
            },
            {
              name: 'Likelihood',
              desc: 'How high the probability is that the risk will actually materialize in the future.',
              icon: 'show_chart'
            }
          ],
          trapAlert: 'Frequent Exam Trap: The relationship is MULTIPLICATION (×), not addition (+)! Risk cannot be determined by impact alone.'
        },

        // The 3x3 Matrix Breakdown
        matrixTitle: 'The 3×3 Risk Evaluation Matrix (Textbook p. 50)',
        matrixGrid: [
          { impact: 'High', likelihood: 'Low', level: 'Medium', color: '#f59e0b', bg: '#fef3c7' },
          { impact: 'High', likelihood: 'Medium', level: 'High', color: '#ea580c', bg: '#ffedd5' },
          { impact: 'High', likelihood: 'High', level: 'CRITICAL ★ (Priority #1)', color: '#dc2626', bg: '#fee2e2', isTop: true },
          { impact: 'Medium', likelihood: 'Low', level: 'Low', color: '#16a34a', bg: '#dcfce7' },
          { impact: 'Medium', likelihood: 'Medium', level: 'Medium', color: '#f59e0b', bg: '#fef3c7' },
          { impact: 'Medium', likelihood: 'High', level: 'High', color: '#ea580c', bg: '#ffedd5' },
          { impact: 'Low', likelihood: 'Low', level: 'Very Low', color: '#059669', bg: '#ecfdf5' },
          { impact: 'Low', likelihood: 'Medium', level: 'Low', color: '#16a34a', bg: '#dcfce7' },
          { impact: 'Low', likelihood: 'High', level: 'Medium', color: '#f59e0b', bg: '#fef3c7' }
        ],
        prioritizationRule: 'The Golden Prioritization Rule: "Risks with both High Impact and High Likelihood must be addressed first (Fix the worst first)."',

        // Mathematical Ranking Problem (Ministry p. 53 & Al-Faez p. 85)
        mathRankingProblem: {
          title: 'Official Mathematical Risk Ranking Problem (Ministry p. 53 & Al-Faez p. 85):',
          question: 'Reorder the risks (a to d) from highest priority to lowest priority based on (Impact × Likelihood):',
          items: [
            { id: 'a', impact: 3, likelihood: 3, name: 'Risk (a): Impact Large (3) × Likelihood High (3)', score: 9, rank: 'Rank 1 (Critical Priority #1)' },
            { id: 'c', impact: 3, likelihood: 2, name: 'Risk (c): Impact Large (3) × Likelihood Medium (2)', score: 6, rank: 'Rank 2 (High Priority)' },
            { id: 'b', impact: 1, likelihood: 3, name: 'Risk (b): Impact Small (1) × Likelihood High (3)', score: 3, rank: 'Rank 3 (Medium Priority)' },
            { id: 'd', impact: 1, likelihood: 1, name: 'Risk (d): Impact Small (1) × Likelihood Low (1)', score: 1, rank: 'Rank 4 (Very Low Priority)' }
          ],
          solutionSequence: 'Correct Priority Order (Descending): a -> c -> b -> d'
        },

        // Dual QR Exam Portal Card
        examPortalProps: {
          examHash: '#exam-2-3',
          lessonCode: '2-3',
          isDual: true
        }
      }
    }
  ]
};

