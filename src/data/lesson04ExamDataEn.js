/**
 * Official Lesson 1-4 Exam Questions Bank (English)
 * Title: Comprehensive Question Bank: Ethical Issues with AI
 * Curriculum: Grade 11 - Computer Science & AI (Term 1)
 * Sources:
 *   - Ministry of Education Curriculum Textbook (Unit 1, Lesson 4)
 *   - The Mentor Series (Supervised by Eng. Mohamed Shamel)
 * Design: 100% Interactive Zero-Typing / Deterministic Auto-Graded (28 Questions - 40 Points)
 * Student Optimization: Natural, clear English phrasing matching Egyptian Baccalaureate exam standards.
 */

export const lesson04ExamDataEn = {
  id: 'lesson-1-4-exam-en',
  lessonId: '1-4',
  title: 'Comprehensive Question Bank: Ethical Issues with AI',
  curriculumInfo: {
    country: 'Arab Republic of Egypt - Ministry of Education & Technical Education',
    directorate: 'General Education Sector - Computer Science & AI Curriculum',
    grade: 'Grade 11 - Egyptian Thanawya',
    subject: 'Computer Science and Artificial Intelligence',
    term: 'First Semester',
    supervision: 'Prepared & Supervised by: Eng. Mohamed Shamel',
  },
  totalQuestions: 28,
  autoGradedPoints: 34,
  manualGradedPoints: 6,
  totalPoints: 40,

  // =========================================================================
  // Section A: Multiple Choice Questions (10 questions - 1 mark each)
  // =========================================================================
  sectionA: {
    id: 'section_a',
    title: 'A. Multiple Choice Questions',
    badge: 'MCQ (10)',
    instruction: 'Select the single most accurate answer by clicking on the desired option:',
    pointsPerQuestion: 1,
    questions: [
      {
        id: 'mcq_1',
        number: 1,
        question: 'Which of the following is NOT an appropriate cause of algorithmic bias in AI systems?',
        options: [
          { id: 'A', text: 'Training data is biased or insufficient on certain attributes' },
          { id: 'B', text: 'Past discriminatory tendencies are reflected in the data' },
          { id: 'C', text: 'The processing speed of the computer is slow' },
          { id: 'D', text: 'Inappropriate choice of variables or using proxy variables' },
        ],
        correctAnswer: 'C',
        explanation: 'Computer processing speed only affects performance latency; it has absolutely zero impact on decision fairness or bias.',
      },
      {
        id: 'mcq_2',
        number: 2,
        question: 'Which of the following statements most accurately describes ethical issues with AI?',
        options: [
          { id: 'A', text: 'There are no ethical issues with AI as long as the code runs without runtime crashes' },
          { id: 'B', text: 'Algorithmic bias is entirely caused by GPU clock speeds' },
          { id: 'C', text: 'Bias in training data can cause discriminatory bias in AI judgments' },
          { id: 'D', text: 'Even if an AI’s decision-making process is opaque (black box), there is no problem for users' },
        ],
        correctAnswer: 'C',
        explanation: 'The fundamental law of AI ethics: If training data is biased, the AI will learn and reproduce that bias in its automated decisions.',
      },
      {
        id: 'mcq_3',
        number: 3,
        question: 'What is the primary privacy issue associated with using facial recognition technology in public spaces?',
        options: [
          { id: 'A', text: 'Individuals can be identified and tracked continuously without their prior consent' },
          { id: 'B', text: 'It slows down computer hardware computation' },
          { id: 'C', text: 'It consumes excessive smartphone battery' },
          { id: 'D', text: 'It creates digital artwork autonomously' },
        ],
        correctAnswer: 'A',
        explanation: 'Facial recognition in public spaces enables mass surveillance and physical tracking, posing a direct threat to personal freedom and privacy.',
      },
      {
        id: 'mcq_4',
        number: 4,
        question: 'What is the precise definition of Explainable AI (XAI)?',
        options: [
          { id: 'A', text: 'Software that translates code into human speech synthesizers' },
          { id: 'B', text: 'Technology and methods that make it possible for humans to understand why an AI made a particular judgment' },
          { id: 'C', text: 'Advertising algorithms designed to maximize corporate revenue' },
          { id: 'D', text: 'Cryptographic tools designed to keep algorithms secret from the public' },
        ],
        correctAnswer: 'B',
        explanation: 'Explainable AI (XAI) illuminates the "Black Box", allowing humans to audit, verify, and understand how the system reached its decision.',
      },
      {
        id: 'mcq_5',
        number: 5,
        question: 'Which AI ethics principle explicitly mandates: "Not unjustly discriminating against any particular person or group"?',
        options: [
          { id: 'A', text: 'Transparency' },
          { id: 'B', text: 'Privacy Protection' },
          { id: 'C', text: 'Fairness' },
          { id: 'D', text: 'Accountability' },
        ],
        correctAnswer: 'C',
        explanation: 'Fairness requires equal treatment and unbiased evaluation, ensuring no person or demographic group suffers unjust discrimination.',
      },
      {
        id: 'mcq_6',
        number: 6,
        question: 'Which AI ethics principle requires: "Showing the AI’s decision-making process, inner workings, and limits clearly"?',
        options: [
          { id: 'A', text: 'Transparency' },
          { id: 'B', text: 'Fairness' },
          { id: 'C', text: 'Accountability' },
          { id: 'D', text: 'Privacy Protection' },
        ],
        correctAnswer: 'A',
        explanation: 'Transparency ensures the system is not a secretive black box; its mechanisms and decision boundaries must be open and understandable.',
      },
      {
        id: 'mcq_7',
        number: 7,
        question: 'Which AI ethics principle governs: "Handling personal information appropriately and protecting user privacy"?',
        options: [
          { id: 'A', text: 'Accountability' },
          { id: 'B', text: 'Privacy Protection' },
          { id: 'C', text: 'Fairness' },
          { id: 'D', text: 'Transparency' },
        ],
        correctAnswer: 'B',
        explanation: 'Privacy Protection safeguards sensitive personal data from unauthorized harvesting, profiling, and disclosure.',
      },
      {
        id: 'mcq_8',
        number: 8,
        question: 'Which concept is defined as: "Being answerable and legally responsible for the AI’s decisions, actions, and consequences"?',
        options: [
          { id: 'A', text: 'Accountability' },
          { id: 'B', text: 'Transparency' },
          { id: 'C', text: 'The Black-Box Problem' },
          { id: 'D', text: 'Probabilistic Inference' },
        ],
        correctAnswer: 'A',
        explanation: 'Accountability means human or institutional entities must stand answerable when an AI causes harm or makes an error.',
      },
      {
        id: 'mcq_9',
        number: 9,
        question: 'When an AI developer hides "gender", but the model uses "women’s rugby club" to deduce gender indirectly, this variable is called a:',
        options: [
          { id: 'A', text: 'Random Variable' },
          { id: 'B', text: 'Proxy Variable' },
          { id: 'C', text: 'Constant Integer' },
          { id: 'D', text: 'Array Pointer' },
        ],
        correctAnswer: 'B',
        explanation: 'A Proxy Variable indirectly stands in for a protected attribute, inadvertently re-introducing discrimination through a backdoor.',
      },
      {
        id: 'mcq_10',
        number: 10,
        question: 'When a medical diagnostic AI makes an erroneous recommendation that harms a patient, what is the current official consensus on legal responsibility?',
        options: [
          { id: 'A', text: 'The developer alone is universally and permanently liable under global treaties' },
          { id: 'B', text: 'The computer software itself is sentenced to prison' },
          { id: 'C', text: 'Views differ depending on whether one is the developer, operator, or user, and no single universal standard exists yet' },
          { id: 'D', text: 'Nobody bears responsibility because software errors are considered inevitable acts of nature' },
        ],
        correctAnswer: 'C',
        explanation: 'Ministry textbook note: Responsibility is actively debated among developers, operating institutions, and users, and context determines liability.',
      },
    ],
  },

  // =========================================================================
  // Section B: True / False Questions (6 questions - 1 mark each)
  // =========================================================================
  sectionB: {
    id: 'section_b',
    title: 'B. True / False Questions (Official Worked Examples)',
    badge: 'True / False (6)',
    instruction: 'Mark each statement as True (✓) or False (✗) by clicking on the appropriate button:',
    pointsPerQuestion: 1,
    questions: [
      {
        id: 'tf_1',
        number: 1,
        question: 'Algorithmic bias is bias in AI judgments caused by bias in the training data, system design, or deployment context.',
        correctValue: true,
        correction: 'Correct statement (Official Ministry Worked Example 1 - A).',
        explanation: 'This is the verified definition of algorithmic bias.',
      },
      {
        id: 'tf_2',
        number: 2,
        question: 'Even if an AI’s decision-making process is opaque (a black box), there is no problem as long as the final result appears correct.',
        correctValue: false,
        correction: 'False: When an AI’s process is opaque, it is impossible for humans to verify whether the result is correct, safe, or biased.',
        explanation: 'Opacity hides underlying flaws and systemic bias until a catastrophic failure occurs.',
      },
      {
        id: 'tf_3',
        number: 3,
        question: 'Explainable AI (XAI) is a technology that makes it possible for humans to understand the AI’s reasoning and factors.',
        correctValue: true,
        correction: 'Correct statement (Official Ministry Worked Example 1 - C).',
        explanation: 'XAI provides interpretive tools to illuminate internal decision weights.',
      },
      {
        id: 'tf_4',
        number: 4,
        question: 'When an AI makes an incorrect judgment, who is responsible has already been clearly and universally determined across all industries.',
        correctValue: false,
        correction: 'False: Views on responsibility differ depending on whether one is the developer, the operator, or the user, and have not yet been uniformly settled.',
        explanation: 'Responsibility distribution remains one of the greatest legal and ethical debates in modern AI.',
      },
      {
        id: 'tf_5',
        number: 5,
        question: 'Accountability simply means the mathematical ability of a software engineer to explain how a calculation was computed.',
        correctValue: false,
        correction: 'False: Explaining the reasoning is the role of Explainable AI (XAI); Accountability means determining who is answerable and liable for the outcome.',
        explanation: 'Critical distinction: XAI explains the "Why"; Accountability establishes who takes the blame.',
      },
      {
        id: 'tf_6',
        number: 6,
        question: 'Mass collection and behavioral profiling of online browsing data is one of the primary threats to individual privacy.',
        correctValue: true,
        correction: 'Correct statement.',
        explanation: 'Harvesting massive behavioral telemetry without transparent consent violates individual privacy rights.',
      },
    ],
  },

  // =========================================================================
  // Section C: Matching Descriptions to AI Ethics Principles (4 questions - 1 mark each)
  // =========================================================================
  sectionC: {
    id: 'section_c',
    title: 'C. Matching Scenarios to AI Ethics Principles',
    badge: 'Principle Matching (4)',
    instruction: 'Match each real-world description to the most appropriate principle of AI ethics:',
    pointsPerQuestion: 1,
    questions: [
      {
        id: 'match_1',
        number: 1,
        question: 'Scenario: Ensuring that an automated hiring AI evaluates all job applicants fairly, regardless of their gender or background.',
        options: [
          { id: 'FAIRNESS', text: 'Fairness' },
          { id: 'TRANSPARENCY', text: 'Transparency' },
          { id: 'PRIVACY', text: 'Privacy Protection' },
          { id: 'ACCOUNTABILITY', text: 'Accountability' },
        ],
        correctAnswer: 'FAIRNESS',
        displayAnswer: 'Fairness',
        explanation: 'Preventing discrimination against any individual or demographic group is the core mandate of Fairness.',
      },
      {
        id: 'match_2',
        number: 2,
        question: 'Scenario: Disclosing the AI’s decision-making process and inner criteria to users in an easy-to-understand way.',
        options: [
          { id: 'FAIRNESS', text: 'Fairness' },
          { id: 'TRANSPARENCY', text: 'Transparency' },
          { id: 'PRIVACY', text: 'Privacy Protection' },
          { id: 'ACCOUNTABILITY', text: 'Accountability' },
        ],
        correctAnswer: 'TRANSPARENCY',
        displayAnswer: 'Transparency',
        explanation: 'Clear communication of model logic and avoiding secretive black boxes is the essence of Transparency.',
      },
      {
        id: 'match_3',
        number: 3,
        question: 'Scenario: Not using collected personal behavioral data for purposes other than what was originally and explicitly authorized.',
        options: [
          { id: 'FAIRNESS', text: 'Fairness' },
          { id: 'TRANSPARENCY', text: 'Transparency' },
          { id: 'PRIVACY', text: 'Privacy Protection' },
          { id: 'ACCOUNTABILITY', text: 'Accountability' },
        ],
        correctAnswer: 'PRIVACY',
        displayAnswer: 'Privacy Protection',
        explanation: 'Appropriately handling personal data and preventing secondary exploitation represents Privacy Protection.',
      },
      {
        id: 'match_4',
        number: 4,
        question: 'Scenario: Establishing clear human liability and being answerable when an AI diagnostic system produces an erroneous clinical outcome.',
        options: [
          { id: 'FAIRNESS', text: 'Fairness' },
          { id: 'TRANSPARENCY', text: 'Transparency' },
          { id: 'PRIVACY', text: 'Privacy Protection' },
          { id: 'ACCOUNTABILITY', text: 'Accountability' },
        ],
        correctAnswer: 'ACCOUNTABILITY',
        displayAnswer: 'Accountability',
        explanation: 'Holding designated human or corporate entities answerable for damages is the core meaning of Accountability.',
      },
    ],
  },

  // =========================================================================
  // Section D: Fill in the Blanks / Terminology (4 questions - 1 mark each)
  // =========================================================================
  sectionD: {
    id: 'section_d',
    title: 'D. Key Terminology Fill-in (Official Ministry Exercise 2)',
    badge: 'Key Terms (4)',
    instruction: 'Select the precise scientific term to complete each curriculum passage:',
    pointsPerQuestion: 1,
    questions: [
      {
        id: 'blank_1',
        number: 1,
        question: 'The phenomenon in which systematic unfairness arises in AI judgments due to defects in training data is called:',
        options: [
          { id: 'A', text: 'Algorithmic Bias' },
          { id: 'B', text: 'Predictive Maintenance' },
          { id: 'C', text: 'Edge Computing' },
          { id: 'D', text: 'Machine Hallucination' },
        ],
        correctAnswer: 'A',
        displayAnswer: 'Algorithmic Bias',
        explanation: 'Algorithmic Bias is the explicit Ministry term for unfair patterns in model outputs.',
      },
      {
        id: 'blank_2',
        number: 2,
        question: 'To solve the "black-box" problem—where it is unclear why an AI reached a verdict—engineers develop technologies called:',
        options: [
          { id: 'A', text: 'Explainable AI (XAI)' },
          { id: 'B', text: 'Virtual Reality (VR)' },
          { id: 'C', text: 'Quantum Telemetry' },
          { id: 'D', text: "Moore's Law" },
        ],
        correctAnswer: 'A',
        displayAnswer: 'Explainable AI (XAI)',
        explanation: 'XAI techniques illuminate the inner reasoning factors of complex neural networks.',
      },
      {
        id: 'blank_3',
        number: 3,
        question: 'When an AI causes harm, the question of (...) is raised, with differing views among developers, operators, and users:',
        options: [
          { id: 'A', text: 'Responsibility / Accountability' },
          { id: 'B', text: 'Processing Latency' },
          { id: 'C', text: 'Network Bandwidth' },
          { id: 'D', text: 'Clock Speed' },
        ],
        correctAnswer: 'A',
        displayAnswer: 'Responsibility / Accountability',
        explanation: 'Determining roles and legal liability after a failure is the core question of Responsibility.',
      },
      {
        id: 'blank_4',
        number: 4,
        question: 'The curated examples from which an AI system learns its underlying patterns before real-world deployment are called:',
        options: [
          { id: 'A', text: 'Training Data' },
          { id: 'B', text: 'Random Vectors' },
          { id: 'C', text: 'Cryptographic Salts' },
          { id: 'D', text: 'Firewall Packets' },
        ],
        correctAnswer: 'A',
        displayAnswer: 'Training Data',
        explanation: 'Training Data constitutes the foundational knowledge base of machine learning models.',
      },
    ],
  },

  // =========================================================================
  // Section E: Case Studies & The 6-Mark Exam-Style Analytical Challenge
  // =========================================================================
  sectionE: {
    id: 'section_e',
    title: 'E. Case Studies & 6-Mark Analytical Exam Drill',
    badge: 'Case Analysis & Essay (4)',
    instruction: 'Analyze each realistic engineering scenario and select the most rigorous ethical resolution:',
    pointsPerQuestion: 2,
    questions: [
      {
        id: 'case_1',
        number: 1,
        question: 'Case Study (School Gate Face-Recognition): A school proposes installing AI cameras at its gate to record attendance automatically. What is the most balanced ethical evaluation of this proposal?',
        options: [
          { id: 'A', text: 'It delivers a clear practical benefit in automated attendance speed, but raises serious privacy concerns regarding mass biometric surveillance of minors without explicit parental consent' },
          { id: 'B', text: 'The proposal is unfeasible solely because the cameras will overheat in summer' },
          { id: 'C', text: 'The proposal is entirely risk-free because students have zero rights to privacy on school grounds' },
          { id: 'D', text: 'The cameras should be replaced with autonomous armed security robots' },
        ],
        correctAnswer: 'A',
        explanation: 'Balanced Ministry evaluation: Convenience and safety must be weighed against invasive biometric surveillance and data leakage risks.',
        simplifiedHint: 'Remember the textbook question: Balance convenience and safety against privacy concerns.',
      },
      {
        id: 'case_2',
        number: 2,
        question: 'Case Study (Misidentification Error): If the school’s facial recognition camera misidentifies an honest student and locks them out of a crucial graduation exam, who bears primary responsibility?',
        options: [
          { id: 'A', text: 'The school administration bears primary responsibility because it deployed an automated barrier without human supervision or an immediate manual verification appeal procedure' },
          { id: 'B', text: 'The student bears primary responsibility for not smiling properly at the lens' },
          { id: 'C', text: 'Nobody bears responsibility because computer algorithms cannot make mistakes' },
          { id: 'D', text: 'The entire school district must cancel exams for all students' },
        ],
        correctAnswer: 'A',
        explanation: 'The deploying operator (the school) is obligated to maintain human oversight (Human-in-the-Loop) to prevent automated disenfranchisement.',
        simplifiedHint: 'Think ethically: The school chose to trust a machine blindly without human fallback verification.',
      },
      {
        id: 'case_3',
        number: 3,
        question: 'Case Study (Hiring AI Bias): A company discovers its resume-screening AI rates female applicants significantly lower. Before deploying the system, what mandatory engineering rule should it follow to ensure fairness?',
        options: [
          { id: 'A', text: 'Rigorously audit training data representation, test output parity across demographic cohorts, and establish mandatory human oversight' },
          { id: 'B', text: 'Double the clock speed of the server CPU' },
          { id: 'C', text: 'Discard all resumes and shut down the recruitment department permanently' },
          { id: 'D', text: 'Prohibit female candidates from submitting job applications' },
        ],
        correctAnswer: 'A',
        explanation: 'Engineering mitigation protocol: Audit data representation, stress-test outputs across demographic cohorts, and enforce human review.',
        simplifiedHint: 'Ministry hint: Check data representation, test results across groups, and review system design context.',
      },
      {
        id: 'case_4_essay',
        number: 4,
        question: 'Exam-Style Question [6 Marks]: "Analyze how algorithmic bias can arise in an AI system, and how it can be reduced. Refer to causes of bias and how Fairness and Transparency address it."',
        options: [
          { id: 'MODEL_A', text: 'Comprehensive Model Answer: Bias arises from insufficient/unrepresentative training data, reflection of past historical discrimination, and system design flaws (proxy variables). It is mitigated by applying Fairness (auditing demographic parity and equal treatment) and Transparency (exposing decision logic via Explainable AI and maintaining human oversight).' },
          { id: 'MODEL_B', text: 'Bias arises from sudden power cuts and is mitigated by purchasing a backup diesel generator' },
          { id: 'MODEL_C', text: 'Algorithmic bias is impossible to reduce; all artificial intelligence must be legally banned globally' },
          { id: 'MODEL_D', text: 'Bias arises from full hard drive storage and is mitigated by clearing the web browser cache' },
        ],
        correctAnswer: 'MODEL_A',
        explanation: 'Official 6-mark scoring breakdown: 2 marks for training data causes (insufficient + historical bias) + 1 mark for system design / proxy variables + 1.5 marks for applying Fairness + 1.5 marks for applying Transparency & XAI.',
        simplifiedHint: 'Check the exam rubric: Cite root causes (data & design) and show how Fairness and Transparency fix them.',
      },
    ],
  },
};
