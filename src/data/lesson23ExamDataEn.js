/**
 * Official Lesson 2-3 Exam Questions Bank (English for Language Schools)
 * Title: Comprehensive Exam Bank: Incident Response and Risk Management
 * Curriculum: Secondary 2 - Computer Science & AI (Term 1)
 * Sources:
 *   - Egyptian Ministry of Education Textbook (Unit 2, Lesson 3: pp. 49-53)
 *   - Al-Faez Cybersecurity Study Guide (pp. 80-89)
 * Design: 100% interactive, auto-graded, conforming strictly to official exam specifications
 */

export const lesson23ExamDataEn = {
  id: 'lesson-2-3-exam-en',
  lessonId: '2-3',
  title: 'Official Ministerial Exam Bank: Incident Response & Risk Management',
  curriculumInfo: {
    country: 'Arab Republic of Egypt - Ministry of Education & Technical Education',
    directorate: 'General Education Sector - Technology & Artificial Intelligence Curriculum',
    grade: 'Secondary 2 - Egyptian Baccalaureate',
    subject: 'Technology & Cybersecurity',
    term: 'First Term',
    supervision: 'Prepared & Supervised by: Eng. Mohamed Shamel',
  },
  totalQuestions: 20,
  autoGradedPoints: 34,
  manualGradedPoints: 6,
  totalPoints: 40,

  // =========================================================================
  // Section A: Multiple Choice Questions (10 questions - 2 marks each = 20 marks)
  // =========================================================================
  sectionA: {
    id: 'section_a',
    title: 'A. Multiple Choice Questions (Textbook pp. 52-53 & Al-Faez p. 86)',
    badge: 'MCQ (10 Questions)',
    instruction: 'Select the correct answer by clicking on the most appropriate option:',
    pointsPerQuestion: 2,
    questions: [
      {
        id: 'mcq_1',
        number: 1,
        question: 'What is the precise definition of a "Security Incident"?',
        options: [
          { id: 'A', text: 'Performing routine maintenance to add new software features' },
          { id: 'B', text: 'Purchasing brand new laptops for employees' },
          { id: 'C', text: 'A situation in which actual damage occurs due to an information security problem' },
          { id: 'D', text: 'Restarting a personal computer when it runs slowly' },
        ],
        correctAnswer: 'C',
        explanation: 'A security incident requires actual damage occurring due to an information security problem.',
      },
      {
        id: 'mcq_2',
        number: 2,
        question: 'Which of the following is NOT an appropriate example of a security incident?',
        options: [
          { id: 'A', text: 'Data encrypted by a ransomware infection' },
          { id: 'B', text: 'Customer information leaked outside through unauthorized access' },
          { id: 'C', text: 'A software update performed to add new features' },
          { id: 'D', text: 'A web service becoming unavailable due to a server attack' },
        ],
        correctAnswer: 'C',
        explanation: 'Routine software updates are legitimate planned operations, not security incidents.',
      },
      {
        id: 'mcq_3',
        number: 3,
        question: 'What is the first stage in the flow of incident response?',
        options: [
          { id: 'A', text: 'Recovery' },
          { id: 'B', text: 'Eradication' },
          { id: 'C', text: 'Preparation' },
          { id: 'D', text: 'Containment' },
        ],
        correctAnswer: 'C',
        explanation: 'Preparation is the initial stage where response structures and procedures are established in advance.',
      },
      {
        id: 'mcq_4',
        number: 4,
        question: 'What is the primary purpose of the "Containment" stage?',
        options: [
          { id: 'A', text: 'Limit the scope of impact so that damage does not spread further' },
          { id: 'B', text: 'Delete all company backups immediately' },
          { id: 'C', text: 'File a lawsuit against third-party vendors' },
          { id: 'D', text: 'Reinstall the operating system right away' },
        ],
        correctAnswer: 'A',
        explanation: 'Containment isolates the infected machine to prevent lateral damage across the network.',
      },
      {
        id: 'mcq_5',
        number: 5,
        question: 'Why must Containment come before Eradication in the six-stage response?',
        options: [
          { id: 'A', text: 'To reduce network bandwidth consumption' },
          { id: 'B', text: 'To prevent the damage from spreading laterally while the cause is being removed' },
          { id: 'C', text: 'Because virus cleaners do not work on connected devices' },
          { id: 'D', text: 'To save electricity during the investigation' },
        ],
        correctAnswer: 'B',
        explanation: 'Cleaning malware takes time; if the system is not isolated first, malware will infect other servers.',
      },
      {
        id: 'mcq_6',
        number: 6,
        question: 'What may happen if Recovery begins before the root cause is thoroughly Eradicated?',
        options: [
          { id: 'A', text: 'The system will run twice as fast' },
          { id: 'B', text: 'The lingering malware may infect the restored system and the same incident may occur again' },
          { id: 'C', text: 'All passwords will be automatically encrypted' },
          { id: 'D', text: 'All attack logs will be permanently deleted' },
        ],
        correctAnswer: 'B',
        explanation: 'If the threat cause is not removed, restored systems will be immediately re-infected.',
      },
      {
        id: 'mcq_7',
        number: 7,
        question: 'How is the size of a risk calculated in the simplified risk assessment model?',
        options: [
          { id: 'A', text: 'Risk size = Impact + Likelihood' },
          { id: 'B', text: 'Risk size = Impact ÷ Likelihood' },
          { id: 'C', text: 'Risk size = Impact × Likelihood' },
          { id: 'D', text: 'Risk size = Impact - Likelihood' },
        ],
        correctAnswer: 'C',
        explanation: 'The mathematical risk model multiplies Impact by Likelihood.',
      },
      {
        id: 'mcq_8',
        number: 8,
        question: 'Which risks must an organization address first as the top critical priority?',
        options: [
          { id: 'A', text: 'Risks with low impact and high likelihood' },
          { id: 'B', text: 'Risks with both high impact and high likelihood (Critical)' },
          { id: 'C', text: 'Risks with low impact and low likelihood' },
          { id: 'D', text: 'All risks simultaneously with equal priority' },
        ],
        correctAnswer: 'B',
        explanation: 'Organizations prioritize high-impact and high-likelihood risks first (Fix the worst first).',
      },
      {
        id: 'mcq_9',
        number: 9,
        question: 'What is the correct sequential order of the six incident response stages?',
        options: [
          { id: 'A', text: 'Detection -> Eradication -> Containment -> Recovery -> Preparation -> Prevention' },
          { id: 'B', text: 'Preparation -> Detection -> Containment -> Eradication -> Recovery -> Prevention of recurrence' },
          { id: 'C', text: 'Containment -> Detection -> Eradication -> Recovery -> Prevention -> Preparation' },
          { id: 'D', text: 'Recovery -> Containment -> Eradication -> Detection -> Preparation -> Prevention' },
        ],
        correctAnswer: 'B',
        explanation: 'The canonical order is: Prepare -> Detect -> Contain -> Eradicate -> Recover -> Prevent.',
      },
      {
        id: 'mcq_10',
        number: 10,
        question: 'What is the objective of the "Prevention of Recurrence" stage?',
        options: [
          { id: 'A', text: 'Terminating employees who reported the incident' },
          { id: 'B', text: 'Permanently deleting all historical emails' },
          { id: 'C', text: 'Analyzing the cause and taking measures so that the same incident does not occur again' },
          { id: 'D', text: 'Shutting down internet connectivity company-wide' },
        ],
        correctAnswer: 'C',
        explanation: 'Stage 6 conducts post-mortem cause analysis and improves controls to prevent repeats.',
      },
    ],
  },

  // =========================================================================
  // Section B: True or False Questions (4 items - 2 marks each = 8 marks)
  // =========================================================================
  sectionB: {
    id: 'section_b',
    title: 'B. True or False Questions (Textbook p. 50 & Al-Faez p. 87)',
    badge: 'True / False (4 Items)',
    instruction: 'Indicate whether each statement is True or False according to the curriculum:',
    pointsPerQuestion: 2,
    questions: [
      {
        id: 'tf_1',
        number: 1,
        statement: 'Not all security incidents can be prevented, even when various protective measures are implemented.',
        correctAnswer: true,
        explanation: 'True. Even well-protected systems can be attacked due to zero-day vulnerabilities or human error.',
      },
      {
        id: 'tf_2',
        number: 2,
        statement: 'The size of an information security risk can be determined by Impact alone.',
        correctAnswer: false,
        explanation: 'False! Risk size is determined by both Impact and Likelihood (Impact × Likelihood).',
      },
      {
        id: 'tf_3',
        number: 3,
        statement: 'In incident response, it is important to first prevent the spread of damage (Containment) before removing the cause (Eradication).',
        correctAnswer: true,
        explanation: 'True. Isolating the infected machine stops lateral spread across the network.',
      },
      {
        id: 'tf_4',
        number: 4,
        statement: 'The final stage of the incident response lifecycle is Recovery.',
        correctAnswer: false,
        explanation: 'False! The final stage is Prevention of recurrence, which follows Recovery.',
      },
    ],
  },

  // =========================================================================
  // Section C: Matching Questions (3 items - 2 marks each = 6 marks)
  // =========================================================================
  sectionC: {
    id: 'section_c',
    title: 'C. Matching Security Actions to Stages (Textbook p. 51)',
    badge: 'Matching (3 Items)',
    instruction: 'Match each practical incident action to its corresponding response stage:',
    pointsPerQuestion: 2,
    questions: [
      {
        id: 'match_1',
        number: 1,
        target: 'Disconnecting a malware-infected computer from the network to stop lateral spread.',
        correctOptionId: 'opt_containment',
        correctOptionText: 'Containment',
        explanation: 'Isolating the infected device limits the blast radius (Containment).',
      },
      {
        id: 'match_2',
        number: 2,
        target: 'Scanning systems, deleting the ransomware executable, and patching the exploited security flaw.',
        correctOptionId: 'opt_eradication',
        correctOptionText: 'Eradication',
        explanation: 'Removing the root cause of the incident is Eradication.',
      },
      {
        id: 'match_3',
        number: 3,
        target: 'Establishing response procedures and incident structures in advance before any attack occurs.',
        correctOptionId: 'opt_preparation',
        correctOptionText: 'Preparation',
        explanation: 'Setting up procedures and readiness ahead of time is Preparation.',
      },
    ],
  },

  // =========================================================================
  // Section D: Essay / High-Order Question (6 marks)
  // =========================================================================
  sectionD: {
    id: 'section_d',
    title: 'D. Official Exam-Style Essay Question (6 Marks) — Ministry Book p. 51 & Al-Faez p. 83',
    badge: 'Essay (6 Marks)',
    instruction: 'Provide a thorough explanation based on the curriculum principles of incident response:',
    question: 'Explain why the six stages of incident response must be carried out in order, using recovery and eradication as an example. [6 Marks] [Refer to: what happens if the cause is not removed]',
    officialRubric: [
      { criterion: 'Explanation of chronological stage dependency and structured progression', marks: 3 },
      { criterion: 'Concrete explanation of the Eradication vs. Recovery relationship and re-infection risk', marks: 3 }
    ],
    modelAnswer: 'The six stages of incident response follow an essential chronological order where each phase builds upon the successful completion of the preceding one. Rushing or executing steps out of order causes panic and magnifies overall damage.\n\nTo illustrate with the Recovery and Eradication stages: If an organization performs Recovery (restoring systems and files from backup) before completing Eradication (completely identifying and removing the malware and closing the vulnerability), the root cause remains active within the environment. The restored, clean systems will immediately be re-infected by the surviving threat, and the same incident will occur again (The same incident may occur again), leading to the destruction of backups and wasted recovery efforts.\n\nTherefore, Containment must isolate the threat first, Eradication must eliminate the cause second, clean Recovery must return operations third, and Prevention must document lessons to prevent recurrence.'
  }
};

