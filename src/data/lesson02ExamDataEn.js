/**
 * Official Lesson 1-2 Exam Questions Bank (English)
 * Title: Comprehensive Examination Bank: Foundations of AI — Concepts, Mechanisms & Transformations
 * Curriculum: Grade 11 - Computer Science & AI (Term 1)
 * Sources:
 *   - Egyptian Ministry of Education Official Curriculum & Teacher Guide
 *   - Al-Mubarmig Curriculum Series (Grade 11)
 *   - Official Ministry 45-Slide Repository
 * Preparation & Supervision: Mr. Mohamed Shamel
 * Design: 100% Interactive Zero-Typing / Deterministic Auto-Graded
 */

export const lesson02ExamDataEn = {
  id: 'lesson-1-2-exam-en',
  lessonId: '1-2',
  title: 'Comprehensive Examination Bank: Foundations of AI — Concepts, Mechanisms & Transformations',
  curriculumInfo: {
    country: 'Arab Republic of Egypt - Ministry of Education & Technical Education',
    directorate: 'General Education Sector - Computer Science & AI Department',
    grade: 'Grade 11 - Egyptian Baccalaureate',
    subject: 'Programming and Artificial Intelligence',
    term: 'First Semester',
    supervision: 'Prepared & Presented by: Mr. Mohamed Shamel',
  },
  totalQuestions: 34,
  autoGradedPoints: 37,
  manualGradedPoints: 0,
  totalPoints: 37,

  // =========================================================================
  // Section A: Multiple Choice Questions (12 questions - 1 mark each)
  // =========================================================================
  sectionA: {
    id: 'section_a',
    title: 'A. Multiple Choice Questions',
    badge: 'Multiple Choice (12)',
    instruction: 'Select the single correct answer by clicking or tapping on the most appropriate alternative:',
    pointsPerQuestion: 1,
    questions: [
      {
        id: 'mcq_1',
        number: 1,
        question: 'Which mathematical relation correctly represents the nested architectural hierarchy of AI concepts?',
        options: [
          { id: 'A', text: 'DL ⊃ ML ⊃ AI ⊃ GenAI' },
          { id: 'B', text: 'AI ⊃ ML ⊃ DL ⊃ GenAI' },
          { id: 'C', text: 'GenAI ⊃ AI ⊃ ML ⊃ DL' },
          { id: 'D', text: 'ML ⊃ AI ⊃ DL ⊃ GenAI' },
        ],
        correctAnswer: 'B',
        explanation: 'Artificial Intelligence (AI) is the overarching umbrella encompassing Machine Learning (ML), which contains Deep Learning (DL), from which Generative AI (GenAI) emerges.',
      },
      {
        id: 'mcq_2',
        number: 2,
        question: 'In the Machine Learning paradigm, what inputs are fed to the training engine to synthesize governing rules?',
        options: [
          { id: 'A', text: 'Explicit conditional rules only without empirical data' },
          { id: 'B', text: 'Raw historical data + desired answers/outputs (Data + Answers)' },
          { id: 'C', text: 'Deterministic code compilers and static state machines' },
          { id: 'D', text: 'Hardcoded Boolean conditionals (Nested If-Else statements)' },
        ],
        correctAnswer: 'B',
        explanation: 'The philosophical paradigm shift of Machine Learning feeds Data and Desired Answers to the training algorithm so that it statistically derives governing rules automatically.',
      },
      {
        id: 'mcq_3',
        number: 3,
        question: 'Which of the following statements precisely defines the scientific concept of Artificial Intelligence (AI)?',
        options: [
          { id: 'A', text: 'A system that solely stores data without analyzing it' },
          { id: 'B', text: 'A scientific domain aimed at engineering systems that simulate human cognitive faculties' },
          { id: 'C', text: 'A computer program requiring manual human instructions for every single step' },
          { id: 'D', text: 'A dedicated hardware technique utilized exclusively for saving photographs' },
        ],
        correctAnswer: 'B',
        explanation: 'AI is a broad umbrella term describing any computerized system engineered to simulate human cognitive capabilities like reasoning, learning, and perception.',
      },
      {
        id: 'mcq_4',
        number: 4,
        question: 'If a computer system classifies incoming emails into spam or non-spam based on historical message data, this is a canonical example of:',
        options: [
          { id: 'A', text: 'Manual text typesetting' },
          { id: 'B', text: 'Complex biological neural fibers' },
          { id: 'C', text: 'Machine Learning (ML)' },
          { id: 'D', text: 'Generative AI content creation' },
        ],
        correctAnswer: 'C',
        explanation: 'Spam email filtering is a classic supervised machine learning classification task identifying statistical patterns from past labeled records.',
      },
      {
        id: 'mcq_5',
        number: 5,
        question: 'When analyzing the scientific relationship between Artificial Intelligence and Machine Learning, we conclude that:',
        options: [
          { id: 'A', text: 'Machine Learning is significantly broader in scope than Artificial Intelligence' },
          { id: 'B', text: 'Artificial Intelligence is a subset embedded within Machine Learning' },
          { id: 'C', text: 'Machine Learning is a specialized subfield of Artificial Intelligence' },
          { id: 'D', text: 'There is no conceptual or functional correlation between them' },
        ],
        correctAnswer: 'C',
        explanation: 'Artificial Intelligence is the overarching discipline, whereas Machine Learning is the specific data-driven subfield dedicated to learning patterns without explicit hardcoding.',
      },
      {
        id: 'mcq_6',
        number: 6,
        question: 'The primary architecture enabling Deep Learning (DL) to master highly complex sensory patterns is:',
        options: [
          { id: 'A', text: 'Deleting all non-numerical data points' },
          { id: 'B', text: 'Utilizing multi-layered neural networks for automatic hierarchical feature extraction' },
          { id: 'C', text: 'Eliminating the requirement for training data' },
          { id: 'D', text: 'Operating completely without mathematical algorithms' },
        ],
        correctAnswer: 'B',
        explanation: 'Deep layers in neural networks automatically extract hierarchical representations, ranging from simple pixel edges to intricate facial structures without manual feature engineering.',
      },
      {
        id: 'mcq_7',
        number: 7,
        question: 'In an artificial perceptron model, the numerical weight (W) represents:',
        options: [
          { id: 'A', text: 'The physical RAM consumption on the GPU card' },
          { id: 'B', text: 'The relative importance and decision influence of that specific input' },
          { id: 'C', text: 'The screen resolution and pixel density' },
          { id: 'D', text: 'The packet latency of the local wireless network' },
        ],
        correctAnswer: 'B',
        explanation: 'Synaptic weight W is a mathematical coefficient scaling an input feature; larger weights grant that feature greater leverage in overcoming the activation threshold.',
      },
      {
        id: 'mcq_8',
        number: 8,
        question: 'What is the primary role of an Activation Function in an Artificial Neural Network?',
        options: [
          { id: 'A', text: 'To constrain all output numbers strictly to negative integers' },
          { id: 'B', text: 'To introduce non-linearity and decide whether to fire the neuron signal' },
          { id: 'C', text: 'To delete training samples immediately upon epoch completion' },
          { id: 'D', text: 'To power down the CPU cores to conserve battery life' },
        ],
        correctAnswer: 'B',
        explanation: 'Activation functions (like ReLU or Sigmoid) introduce non-linearity, enabling deep networks to approximate complex mathematical boundaries beyond simple linear separation.',
      },
      {
        id: 'mcq_9',
        number: 9,
        question: 'An Artificial Neural Network (ANN) structurally consists of:',
        options: [
          { id: 'A', text: 'Hardware input plugs and physical toggle switches only' },
          { id: 'B', text: 'Interconnected computational units mimicking biological neurons and synapses' },
          { id: 'C', text: 'Static text files completely devoid of mathematical calculations' },
          { id: 'D', text: 'A hardcoded chain of brittle conditional statements' },
        ],
        correctAnswer: 'B',
        explanation: 'ANNs mimic biological synaptic networks through interconnected mathematical nodes, weighted connections, and non-linear threshold functions.',
      },
      {
        id: 'mcq_10',
        number: 10,
        question: 'Which of the following demonstrates a direct, definitive application of Generative AI (GenAI)?',
        options: [
          { id: 'A', text: 'Performing arithmetic addition on an electronic pocket calculator' },
          { id: 'B', text: 'Synthesizing entirely novel prose, photorealistic imagery, or code from natural language prompts' },
          { id: 'C', text: 'Sorting files alphabetically in an operating system directory' },
          { id: 'D', text: 'Purging outdated database tables according to schedule' },
        ],
        correctAnswer: 'B',
        explanation: 'Generative AI represents a quantum leap from discriminative classification to synthesizing articulate, novel artifacts on demand.',
      },
      {
        id: 'mcq_11',
        number: 11,
        question: 'Among the following software applications, which one is NOT an example of Generative AI?',
        options: [
          { id: 'A', text: 'ChatGPT conversational writing assistant' },
          { id: 'B', text: 'Midjourney photorealistic text-to-image synthesis tool' },
          { id: 'C', text: 'Email spam filter classifier (Spam Filter)' },
          { id: 'D', text: 'Suno AI digital music and vocal synthesizer' },
        ],
        correctAnswer: 'C',
        explanation: 'Email spam filtering is a binary classification (0 or 1) discriminative task; it analyzes existing content rather than synthesizing novel artifacts.',
      },
      {
        id: 'mcq_12',
        number: 12,
        question: 'The process in which an AI model processes millions of training samples to iteratively calibrate its weights is known as:',
        options: [
          { id: 'A', text: 'The Training Phase (Training)' },
          { id: 'B', text: 'Static Archiving' },
          { id: 'C', text: 'Sequential File Copying' },
          { id: 'D', text: 'Manual Keyboard Rule Authoring' },
        ],
        correctAnswer: 'A',
        explanation: 'Training is the iterative computational cycle where error signals propagate backward to tune weights and minimize total loss.',
      },
    ],
  },

  // =========================================================================
  // Section B: Concept Matching & Fill-in (5 questions - 1 mark each)
  // =========================================================================
  sectionB: {
    id: 'section_b',
    title: 'B. Concept Matching & Fill-in Questions',
    badge: 'Concept Matching (5)',
    instruction: 'Match each definition with the correct scientific concept by tapping the corresponding button:',
    pointsPerQuestion: 1,
    questions: [
      {
        id: 'fill_1',
        number: 1,
        question: 'The overarching field encompassing computerized systems engineered to simulate human cognitive faculties such as learning, prediction, and generation:',
        options: [
          { id: 'A', text: 'Artificial Intelligence (AI)' },
          { id: 'B', text: 'Relational Database Engine' },
          { id: 'C', text: 'Static Linear Programming' },
          { id: 'D', text: 'Cloud File Storage' },
        ],
        correctAnswer: 'A',
        displayAnswer: 'Artificial Intelligence (AI)',
        explanation: 'AI is the umbrella term for any software framework simulating intelligent behavior and cognitive faculties.',
      },
      {
        id: 'fill_2',
        number: 2,
        question: 'The subfield of AI where models autonomously extract patterns and statistical rules from data without explicit rule programming:',
        options: [
          { id: 'A', text: 'Machine Learning (ML)' },
          { id: 'B', text: 'Manual Data Entry' },
          { id: 'C', text: 'Deterministic Operating Systems' },
          { id: 'D', text: 'Cryptographic Hashing' },
        ],
        correctAnswer: 'A',
        displayAnswer: 'Machine Learning (ML)',
        explanation: 'Machine Learning inverts programming by using Data + Answers to synthesize governing probabilistic rules.',
      },
      {
        id: 'fill_3',
        number: 3,
        question: 'An advanced tier of machine learning relying on deep multi-layered artificial neural networks to extract complex features automatically:',
        options: [
          { id: 'A', text: 'Deep Learning (DL)' },
          { id: 'B', text: 'QuickSort Array Partitioning' },
          { id: 'C', text: 'Simple Procedural Scripting' },
          { id: 'D', text: 'Basic Spreadsheet Math' },
        ],
        correctAnswer: 'A',
        displayAnswer: 'Deep Learning (DL)',
        explanation: 'Deep Learning bypasses human feature engineering by processing raw unstructured data through cascaded neural layers.',
      },
      {
        id: 'fill_4',
        number: 4,
        question: 'The fundamental mathematical and computational building block in artificial neural networks that computes the weighted sum of inputs:',
        options: [
          { id: 'A', text: 'The Artificial Neuron (Perceptron)' },
          { id: 'B', text: 'Central Processing Unit (CPU)' },
          { id: 'C', text: 'Binary Bit Register' },
          { id: 'D', text: 'Rigid Boolean Logic Gate' },
        ],
        correctAnswer: 'A',
        displayAnswer: 'The Perceptron',
        explanation: 'The perceptron scales inputs by weights, applies bias, and evaluates the sum via an activation function.',
      },
      {
        id: 'fill_5',
        number: 5,
        question: 'The phenomenon where generative foundation models synthesize fluent, assertive statements that are factually fabricated or non-existent:',
        options: [
          { id: 'A', text: 'AI Hallucination' },
          { id: 'B', text: 'Overfitting in the Lab' },
          { id: 'C', text: 'Cloud Data Leakage' },
          { id: 'D', text: 'Electromagnetic Oscillation' },
        ],
        correctAnswer: 'A',
        displayAnswer: 'AI Hallucination',
        explanation: 'Hallucination stems from next-token statistical prediction without grounded semantic comprehension or empirical fact-checking.',
      },
    ],
  },

  // =========================================================================
  // Section C: Interactive Categorization (4 questions - 1 mark each)
  // =========================================================================
  sectionC: {
    id: 'section_c',
    title: 'C. Application & Real-World Categorization',
    badge: 'Categorization (4)',
    instruction: 'Classify each real-world application into its most precise AI engineering category with a single click:',
    pointsPerQuestion: 1,
    questions: [
      {
        id: 'cat_1',
        number: 1,
        question: 'Application: Filtering incoming emails into spam versus inbox automatically based on historical keyword statistics.',
        options: [
          { id: 'ML', text: 'Machine Learning (ML)' },
          { id: 'DL', text: 'Deep Learning (DL)' },
          { id: 'GenAI', text: 'Generative AI (GenAI)' },
        ],
        correctAnswer: 'ML',
        displayAnswer: 'Machine Learning (ML)',
        explanation: 'Spam classification is a classic supervised machine learning task applied to structured tabular and text features.',
      },
      {
        id: 'cat_2',
        number: 2,
        question: 'Application: Real-time visual perception detecting pedestrians and traffic signals from autonomous vehicle cameras.',
        options: [
          { id: 'ML', text: 'Basic Machine Learning' },
          { id: 'DL', text: 'Deep Learning (DL)' },
          { id: 'GenAI', text: 'Generative AI (GenAI)' },
        ],
        correctAnswer: 'DL',
        displayAnswer: 'Deep Learning (DL)',
        explanation: 'Computer vision on high-resolution camera feeds requires deep convolutional layers to extract spatial patterns in real time.',
      },
      {
        id: 'cat_3',
        number: 3,
        question: 'Application: Synthesizing an original digital oil painting from a fanciful natural language prompt in seconds.',
        options: [
          { id: 'ML', text: 'Traditional Machine Learning' },
          { id: 'DL', text: 'Discriminative Deep Learning' },
          { id: 'GenAI', text: 'Generative AI (GenAI)' },
        ],
        correctAnswer: 'GenAI',
        displayAnswer: 'Generative AI (GenAI)',
        explanation: 'Diffusion and autoregressive models generating novel artistic imagery embody generative artificial intelligence.',
      },
      {
        id: 'cat_4',
        number: 4,
        question: 'Application: E-commerce recommendation engine suggesting matching products and videos based on user purchasing history.',
        options: [
          { id: 'ML', text: 'Machine Learning (ML)' },
          { id: 'DL', text: 'Deep Learning' },
          { id: 'GenAI', text: 'Generative AI' },
        ],
        correctAnswer: 'ML',
        displayAnswer: 'Machine Learning (ML)',
        explanation: 'Collaborative filtering and matrix factorization recommendation engines are powered by core machine learning algorithms.',
      },
    ],
  },

  // =========================================================================
  // Section D: True / False with Correction (10 questions - 1 mark each)
  // =========================================================================
  sectionD: {
    id: 'section_d',
    title: 'D. True or False Questions',
    badge: 'True or False (10)',
    instruction: 'Evaluate whether each proposition is True (✓) or False (✗) by clicking the corresponding button:',
    pointsPerQuestion: 1,
    questions: [
      {
        id: 'tf_1',
        number: 1,
        question: 'Deep Learning is a specialized subfield of Machine Learning, and Machine Learning is a subfield of Artificial Intelligence.',
        correctValue: true,
        correction: 'The proposition is completely true (Hierarchy: AI ⊃ ML ⊃ DL).',
        explanation: 'The scientific taxonomic hierarchy places AI as the broad umbrella, ML within it, and DL within ML.',
      },
      {
        id: 'tf_2',
        number: 2,
        question: 'Deep Learning (DL) relies on a single neural layer to process raw sensory data and solve complex cognitive problems.',
        correctValue: false,
        correction: 'Deep Learning strictly relies on multi-layered neural networks (Deep ANNs) containing numerous hidden layers to extract hierarchical features.',
        explanation: 'It is designated as "Deep" precisely because of the deep stack of successive hidden representation layers.',
      },
      {
        id: 'tf_3',
        number: 3,
        question: 'Artificial Intelligence and Machine Learning are completely synonymous terms representing the exact same thing.',
        correctValue: false,
        correction: 'AI is the comprehensive umbrella encompassing symbolic, logical, and heuristic systems; ML is specifically the data-driven branch.',
        explanation: 'Early rule-based expert systems and symbolic chess engines were AI, yet did not use machine learning.',
      },
      {
        id: 'tf_4',
        number: 4,
        question: 'Data is the fundamental fuel and essential requirement for training and synthesizing machine learning models.',
        correctValue: true,
        correction: 'The proposition is completely true.',
        explanation: 'ML algorithms cannot discover correlations or calibrate synaptic weights without abundant, high-quality empirical data.',
      },
      {
        id: 'tf_5',
        number: 5,
        question: 'In an artificial perceptron, a synaptic weight W with a larger numerical value confers greater decision influence on its input.',
        correctValue: true,
        correction: 'The proposition is completely true.',
        explanation: 'Synaptic weight mathematically scales the input value, directly boosting its ability to push the summation past the firing threshold.',
      },
      {
        id: 'tf_6',
        number: 6,
        question: 'All contemporary AI systems operating in the real world today are classified scientifically as Artificial Narrow Intelligence (ANI).',
        correctValue: true,
        correction: 'The proposition is completely true.',
        explanation: 'Current systems (including ChatGPT and self-driving cars) excel in narrow domains and possess zero general consciousness (AGI).',
      },
      {
        id: 'tf_7',
        number: 7,
        question: 'Deep models possess the capability to process complex unstructured data like images, audio, and video, extracting features autonomously.',
        correctValue: true,
        correction: 'The proposition is completely true.',
        explanation: 'This capability revolutionized AI by eliminating tedious manual feature engineering for high-dimensional sensory signals.',
      },
      {
        id: 'tf_8',
        number: 8,
        question: 'When an AI model produces an answer with confident phrasing and flawless grammar, this guarantees 100% factual accuracy.',
        correctValue: false,
        correction: 'Linguistic eloquence indicates statistical fluency, never verified factual truth; models easily hallucinate false assertions assertively.',
        explanation: 'Large language models predict statistically probable words (Next-Token Inference), requiring mandatory human fact-checking.',
      },
      {
        id: 'tf_9',
        number: 9,
        question: 'The supreme objective of training an AI model is Generalization on novel unseen data, rather than rote memorization (Overfitting).',
        correctValue: true,
        correction: 'The proposition is completely true.',
        explanation: 'Memorizing training rows is known as overfitting—a major engineering flaw resulting in total failure on real-world test cases.',
      },
      {
        id: 'tf_10',
        number: 10,
        question: 'School academic honor codes allow students to copy and submit essays generated by AI as their own original work without disclosure.',
        correctValue: false,
        correction: 'Direct copy-pasting is strictly prohibited plagiarism; students must transparently cite AI use and maintain full critical ownership.',
        explanation: 'Academic assessments measure student cognitive mastery, not algorithmic output capabilities.',
      },
    ],
  },

  // =========================================================================
  // Section E: Case Studies & Architecture Decisions (3 questions - 2 marks each)
  // =========================================================================
  sectionE: {
    id: 'section_e',
    title: 'E. Case Studies & Engineering Decisions',
    badge: 'Case Studies (3)',
    instruction: 'Read each real-world case study scenario and select the sound engineering analysis (2 marks each):',
    pointsPerQuestion: 2,
    questions: [
      {
        id: 'case_1',
        number: 1,
        question: 'Case Study (U.S. Federal Court Mata v. Avianca 2023): Attorneys utilized ChatGPT to draft a legal court filing. The model fabricated 6 completely non-existent judicial decisions and false precedents featuring real judges. The federal court imposed harsh sanctions on the lawyers. What was the root technical cause and the mandatory remedy?',
        options: [
          { id: 'A', text: 'Root Cause: Generative AI hallucination due to probabilistic word prediction • Remedy: Mandatory Human-in-the-Loop source verification' },
          { id: 'B', text: 'Root Cause: Slow Wi-Fi latency in the courthouse • Remedy: Upgrading local fiber internet bandwidth' },
          { id: 'C', text: 'Root Cause: Small computer monitor display size • Remedy: Installing a widescreen monitor in court' },
          { id: 'D', text: 'Root Cause: Granting the software model an official law license • Remedy: Revoking the AI software license' },
        ],
        correctAnswer: 'A',
        explanation: 'LLMs are statistical word synthesizers, not verified legal repositories; lawyers and operators must verify every citation via human-in-the-loop governance.',
        simplifiedHint: 'Recall: The attorney blindly trusted ChatGPT, which invented fake precedents out of thin air! Is AI a licensed lawyer with a conscience, or a computer calculating probable words?',
      },
      {
        id: 'case_2',
        number: 2,
        question: 'Case Study (Smart Agriculture Diagnostic Failure): A computer vision model diagnosing plant diseases achieved 98% accuracy in lab testing on pristine white-background leaf photos. Deployed on real tractors in outdoor fields, accuracy collapsed below 45%, misclassifying sunlight shadows as fungal lesions. What is the engineering diagnosis?',
        options: [
          { id: 'A', text: 'The Out-of-Distribution (OOD) data trap caused by lab datasets lacking real-world lighting variance, dust, and dynamic shadows' },
          { id: 'B', text: 'Processor overheating on the tractor causing operating system shutdown' },
          { id: 'C', text: 'Farm acreage exceeding the maximum allowable software quota' },
          { id: 'D', text: 'Authoring the algorithm in Python instead of JavaScript' },
        ],
        correctAnswer: 'A',
        explanation: 'The model overfitted to pristine lab backgrounds and failed under real-world distribution shift (OOD); models must be trained on rugged in-situ field data.',
        simplifiedHint: 'Think simply: The lab photos were pristine with studio lighting. The real farm has sun glare, dust, and shadows—the model mistook shadows for fungal spots!',
      },
      {
        id: 'case_3',
        number: 3,
        question: 'Architecture Trade-off: A national bank needs a corporate payroll system computing statutory income tax deductions with 100% exact precision according to government tax law. Which paradigm should software architects deploy and why?',
        options: [
          { id: 'A', text: 'Traditional Deterministic Programming; because tax formulas are statutory legal rules requiring exact certainty without probabilistic guesswork' },
          { id: 'B', text: 'Deep Learning and Generative AI; to estimate tax rates from employee ID photos' },
          { id: 'C', text: 'Large Language Models (LLMs); to synthesize creative new tax percentages every month' },
          { id: 'D', text: 'Randomized sorting algorithms' },
        ],
        correctAnswer: 'A',
        explanation: 'Deterministic financial and tax formulas demand exact, auditable precision without statistical variance; probabilistic models are strictly reserved for sensory and perceptual tasks.',
        simplifiedHint: 'Recall the paradigm trade-off: Taxes are defined by exact statutory laws. Do we risk estimating them with statistical probability, or compute them with deterministic exact formulas?',
      },
    ],
  },
};
