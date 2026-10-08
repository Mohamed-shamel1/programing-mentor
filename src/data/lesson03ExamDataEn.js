/**
 * Official Lesson 1-3 Exam Questions Bank (English)
 * Title: Comprehensive Question Bank: AI in Daily Life and Industry
 * Curriculum: Grade 11 - Computer Science & AI (Term 1)
 * Sources:
 *   - Ministry of Education Curriculum Textbook (Unit 1, Lesson 3)
 *   - The Programmer Series (Supervised by Eng. Mohamed Shamel)
 *   - Lecture 3 Infographic Summary Slides
 * Design: 100% Interactive Zero-Typing / Deterministic Auto-Graded (34 Questions - 37 Points)
 */

export const lesson03ExamDataEn = {
  id: 'lesson-1-3-exam-en',
  lessonId: '1-3',
  title: 'Comprehensive Question Bank: AI in Daily Life & Industry',
  curriculumInfo: {
    country: 'Arab Republic of Egypt - Ministry of Education & Technical Education',
    directorate: 'General Education Sector - Computer Science & AI Curriculum',
    grade: 'Grade 11 - Egyptian Thanawya',
    subject: 'Computer Science and Artificial Intelligence',
    term: 'First Semester',
    supervision: 'Prepared & Supervised by: Eng. Mohamed Shamel',
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
    badge: 'MCQ (12)',
    instruction: 'Select the single most accurate answer by clicking on the desired option:',
    pointsPerQuestion: 1,
    questions: [
      {
        id: 'mcq_1',
        number: 1,
        question: 'What is the primary role of Recommendation Systems on platforms like YouTube, Amazon, and Spotify?',
        options: [
          { id: 'A', text: 'Deleting inactive accounts automatically' },
          { id: 'B', text: 'Predicting user preferences from historical behavioral telemetry and serving relevant items' },
          { id: 'C', text: 'Repairing web server hardware faults autonomously' },
          { id: 'D', text: 'Increasing home broadband bandwidth' },
        ],
        correctAnswer: 'B',
        explanation: 'Recommendation systems analyze past viewing, purchasing, and interaction history to predict and present preferred content.',
      },
      {
        id: 'mcq_2',
        number: 2,
        question: 'Which of the following scenarios directly exemplifies an intelligent Voice Assistant in action?',
        options: [
          { id: 'A', text: 'Unlocking a smartphone via biometric facial recognition' },
          { id: 'B', text: 'Commanding Siri or Google Assistant verbally to dial a contact or set an alarm' },
          { id: 'C', text: 'Optical automated quality inspection of factory assembly lines' },
          { id: 'D', text: 'Predicting agricultural crop harvest maturity dates' },
        ],
        correctAnswer: 'B',
        explanation: 'Voice assistants (Siri, Google Assistant, Alexa) capture acoustic speech, extract intent, and execute tasks verbally.',
      },
      {
        id: 'mcq_3',
        number: 3,
        question: 'What is the precise engineering definition of "Automation" (الأتمتة) in industrial environments?',
        options: [
          { id: 'A', text: 'Increasing the number of manual human workers on factory floors' },
          { id: 'B', text: 'Executing tasks and quality audits autonomously via electronic systems without direct human intervention' },
          { id: 'C', text: 'Powering off industrial machinery to conserve energy' },
          { id: 'D', text: 'Handcrafted assembly using traditional artisan techniques' },
        ],
        correctAnswer: 'B',
        explanation: 'Automation denotes running workflows and inspections automatically through electronic systems without direct human intervention.',
      },
      {
        id: 'mcq_4',
        number: 4,
        question: 'What is the pivotal economic benefit of implementing "Predictive Maintenance" in manufacturing?',
        options: [
          { id: 'A', text: 'Waiting until machinery catastrophically breaks before attempting repairs' },
          { id: 'B', text: 'Anticipating equipment failures prior to occurrence via IoT sensors, preventing catastrophic shutdowns' },
          { id: 'C', text: 'Replacing all machine components daily regardless of physical condition' },
          { id: 'D', text: 'Completely eliminating mechanical engineers and maintenance staff' },
        ],
        correctAnswer: 'B',
        explanation: 'Predictive maintenance processes telemetry to forecast failure windows, scheduling interventions during planned downtime.',
      },
      {
        id: 'mcq_5',
        number: 5,
        question: 'When deploying AI in healthcare for radiological imaging diagnosis (X-Rays & CT scans), what is the mandatory ethical rule?',
        options: [
          { id: 'A', text: 'Adopting AI classifications as final verdicts without physician review' },
          { id: 'B', text: 'AI is a decision-support tool; the licensed human physician always confirms diagnosis and bears clinical liability' },
          { id: 'C', text: 'Completely replacing human radiologists in modern hospitals' },
          { id: 'D', text: 'Banning digital imaging technology in healthcare facilities' },
        ],
        correctAnswer: 'B',
        explanation: 'Human-in-the-Loop oversight is mandatory: AI flags anomalies, but clinical responsibility rests entirely with the human physician.',
      },
      {
        id: 'mcq_6',
        number: 6,
        question: 'In modern supply chain and courier logistics, how does AI empower delivery drivers?',
        options: [
          { id: 'A', text: 'Calculating the optimal real-time route to bypass traffic gridlock and minimize transit latency' },
          { id: 'B', text: 'Pedaling the bicycle on behalf of the human courier' },
          { id: 'C', text: 'Cooking meals inside the thermal delivery container' },
          { id: 'D', text: 'Canceling client shipments without consent' },
        ],
        correctAnswer: 'A',
        explanation: 'Dynamic route optimization algorithms evaluate traffic conditions to guide couriers through the fastest, low-congestion paths.',
      },
      {
        id: 'mcq_7',
        number: 7,
        question: 'AI excels at discovering and categorizing complex patterns within massive data; this is clearly demonstrated by:',
        options: [
          { id: 'A', text: 'Distinguishing between cat and dog photos 🐱🐶 after training on thousands of images' },
          { id: 'B', text: 'Experiencing human empathy and moral affection toward animals' },
          { id: 'C', text: 'Making ethical judgments with a professional moral conscience' },
          { id: 'D', text: 'Predicting spiritual destinies with 100% deterministic certainty' },
        ],
        correctAnswer: 'A',
        explanation: 'Pattern discovery across high-dimensional datasets (such as visual features of cats vs dogs) is a defining strength of AI.',
      },
      {
        id: 'mcq_8',
        number: 8,
        question: 'What is the phenomenon known as "AI Hallucination" (الهلوسة)?',
        options: [
          { id: 'A', text: 'Cloud servers crashing due to electrical power grid failures' },
          { id: 'B', text: 'Synthesizing erroneous or fabricated claims presented with deceptive confidence and eloquence' },
          { id: 'C', text: 'A computer being infected with malicious trojan software' },
          { id: 'D', text: 'Translating idioms across multiple foreign languages with flawless fidelity' },
        ],
        correctAnswer: 'B',
        explanation: 'Hallucination occurs when generative models fabricate plausible-sounding false statements with immense stylistic confidence.',
      },
      {
        id: 'mcq_9',
        number: 9,
        question: 'The dilemma where the mathematical reasoning behind an AI verdict cannot be fully deciphered by humans is known as:',
        options: [
          { id: 'A', text: 'The White Box Phenomenon' },
          { id: 'B', text: 'The Black Box Problem (مشكلة الصندوق الأسود)' },
          { id: 'C', text: 'The Missing Monitor Cable Glitch' },
          { id: 'D', text: 'The RAM Memory Overflow Error' },
        ],
        correctAnswer: 'B',
        explanation: 'The Black Box problem reflects opacity: inputs and outputs are observable, but intermediate neural pathways resist human explanation.',
      },
      {
        id: 'mcq_10',
        number: 10,
        question: 'If an AI model is trained on historical data containing systemic prejudice against a demographic group, what is the inevitable outcome?',
        options: [
          { id: 'A', text: 'The model produces biased and discriminatory decisions reflecting that prejudice' },
          { id: 'B', text: 'The model autonomously corrects ethical injustices without human code intervention' },
          { id: 'C', text: 'CPU processing clock speeds increase exponentially' },
          { id: 'D', text: 'RAM consumption decreases proportionally' },
        ],
        correctAnswer: 'A',
        explanation: 'Garbage in, garbage out: training on biased data inevitably reproduces and amplifies prejudice in output decisions.',
      },
      {
        id: 'mcq_11',
        number: 11,
        question: 'How does artificial intelligence revolutionize modern precision agriculture?',
        options: [
          { id: 'A', text: 'Forecasting optimal harvest windows and detecting soil pathogens and crop diseases early' },
          { id: 'B', text: 'Transmuting barren desert rocks into solid gold' },
          { id: 'C', text: 'Permanently preventing natural meteorological rainstorms' },
          { id: 'D', text: 'Replacing irrigation water with high-energy laser beams' },
        ],
        correctAnswer: 'A',
        explanation: 'AI processes drone imagery and telemetry to forecast maturity dates and diagnose fungal crop diseases prior to widespread infestation.',
      },
      {
        id: 'mcq_12',
        number: 12,
        question: 'Biometric facial recognition used for smartphone screen unlocking predominantly relies on which architecture?',
        options: [
          { id: 'A', text: 'Deep Learning & Computer Vision (Convolutional Neural Networks)' },
          { id: 'B', text: 'Elementary procedural programming with basic if-else conditions' },
          { id: 'C', text: 'Legacy flat non-relational database tables' },
          { id: 'D', text: 'Analog acoustic wave filters' },
        ],
        correctAnswer: 'A',
        explanation: 'Facial unlocking uses deep convolutional neural networks (CNNs) to map 3D geometric facial landmarks into digital identity vectors.',
      },
    ],
  },

  // =========================================================================
  // Section B: Concept Matching & Definitions (5 questions - 1 mark each)
  // =========================================================================
  sectionB: {
    id: 'section_b',
    title: 'B. Concept Matching & Definitions',
    badge: 'Concept Matching (5)',
    instruction: 'Match each description to the correct technical concept by clicking on the appropriate option:',
    pointsPerQuestion: 1,
    questions: [
      {
        id: 'fill_1',
        number: 1,
        question: 'Executing operations and workflows autonomously through electronic systems without direct human intervention:',
        options: [
          { id: 'A', text: 'Automation (الأتمتة)' },
          { id: 'B', text: 'AI Hallucination' },
          { id: 'C', text: 'The Black Box Problem' },
          { id: 'D', text: 'Neural Machine Translation' },
        ],
        correctAnswer: 'A',
        displayAnswer: 'Automation (الأتمتة)',
        explanation: 'Automation replaces manual repetitive labor with autonomous electronic and algorithmic systems.',
      },
      {
        id: 'fill_2',
        number: 2,
        question: 'Anticipating machinery breakdown prior to occurrence based on sensor telemetry (vibration, acoustics, heat):',
        options: [
          { id: 'A', text: 'Predictive Maintenance (الصيانة التنبؤية)' },
          { id: 'B', text: 'Facial Landmark Detection' },
          { id: 'C', text: 'Algorithmic Discrimination' },
          { id: 'D', text: 'Analog Signal Modulation' },
        ],
        correctAnswer: 'A',
        displayAnswer: 'Predictive Maintenance (الصيانة التنبؤية)',
        explanation: 'Predictive maintenance saves millions in industrial overhead by averting unexpected production blackouts.',
      },
      {
        id: 'fill_3',
        number: 3,
        question: 'When AI synthesizes entirely false or fabricated claims with deceptive rhetorical fluency:',
        options: [
          { id: 'A', text: 'AI Hallucination (هلوسة الذكاء الاصطناعي)' },
          { id: 'B', text: 'Recommendation Engine' },
          { id: 'C', text: 'Voice Assistant Dispatcher' },
          { id: 'D', text: 'Probabilistic Inference' },
        ],
        correctAnswer: 'A',
        displayAnswer: 'AI Hallucination (الهلوسة)',
        explanation: 'Hallucination stems from next-token statistical prediction without semantic grounding in validated ground truth.',
      },
      {
        id: 'fill_4',
        number: 4,
        question: 'The opacity of inner mathematical layers preventing human stakeholders from explaining how a decision was reached:',
        options: [
          { id: 'A', text: 'The Black Box Problem (مشكلة الصندوق الأسود)' },
          { id: 'B', text: 'Optical Quality Sorting' },
          { id: 'C', text: 'Copyright Fair Use' },
          { id: 'D', text: 'Clinical Radiology' },
        ],
        correctAnswer: 'A',
        displayAnswer: 'The Black Box Problem (الصندوق الأسود)',
        explanation: 'Deep networks with billions of weights make it virtually impossible to isolate simple causal pathways for single decisions.',
      },
      {
        id: 'fill_5',
        number: 5,
        question: 'Leveraging empirical data to draw likelihood conclusions and anticipate probable future developments:',
        options: [
          { id: 'A', text: 'Probabilistic Inference & Forecasting (الاستدلال الاحتمالي)' },
          { id: 'B', text: 'Automated Hard Drive Backup' },
          { id: 'C', text: 'Virtual Memory Swapping' },
          { id: 'D', text: 'Binary Search Algorithm' },
        ],
        correctAnswer: 'A',
        displayAnswer: 'Probabilistic Inference (الاستدلال الاحتمالي)',
        explanation: 'AI forecasts startup success or market trends probabilistically based on historical patterns.',
      },
    ],
  },

  // =========================================================================
  // Section C: Application Categorization & Model Tier (4 questions - 1 mark each)
  // =========================================================================
  sectionC: {
    id: 'section_c',
    title: 'C. Application & Model Tier Categorization',
    badge: 'Categorization (4)',
    instruction: 'Categorize each real-world application by sector and underlying AI architecture:',
    pointsPerQuestion: 1,
    questions: [
      {
        id: 'cat_1',
        number: 1,
        question: 'Application: Unlocking a smartphone screen via 3D facial mesh recognition (Face ID).',
        options: [
          { id: 'LIFE_DL', text: 'Daily Life — Deep Learning & Computer Vision (CNN)' },
          { id: 'IND_ML', text: 'Industry — Basic Tabular Machine Learning' },
          { id: 'GEN_AI', text: 'Generative AI Prose Synthesis' },
        ],
        correctAnswer: 'LIFE_DL',
        displayAnswer: 'Daily Life — Deep Learning & Computer Vision (CNN)',
        explanation: 'Biometric face unlock is an everyday service powered by convolutional vision architectures.',
      },
      {
        id: 'cat_2',
        number: 2,
        question: 'Application: Tracking factory turbine vibration telemetry to predict bearing wear 10 days before breakdown.',
        options: [
          { id: 'LIFE_REC', text: 'Daily Life — Content Recommendation' },
          { id: 'IND_MAINT', text: 'Industry & Production — Predictive Maintenance (ML Sensor Telemetry)' },
          { id: 'VOICE_ASSIST', text: 'Daily Life — Conversational Voice Assistant' },
        ],
        correctAnswer: 'IND_MAINT',
        displayAnswer: 'Industry & Production — Predictive Maintenance',
        explanation: 'Analyzing industrial machine sensor time-series to avert downtime defines predictive maintenance.',
      },
      {
        id: 'cat_3',
        number: 3,
        question: 'Application: Autonomous agricultural drones inspecting orange groves to forecast harvest dates and soil pests.',
        options: [
          { id: 'IND_AGRI', text: 'Industry & Production — Smart Agriculture (ML + DL Sensors)' },
          { id: 'LIFE_TRANS', text: 'Daily Life — Text Machine Translation' },
          { id: 'LIFE_VOICE', text: 'Daily Life — Voice Command Routing' },
        ],
        correctAnswer: 'IND_AGRI',
        displayAnswer: 'Industry & Production — Smart Agriculture',
        explanation: 'Smart agriculture leverages drone vision and predictive ML for yield optimization.',
      },
      {
        id: 'cat_4',
        number: 4,
        question: 'Application: Siri or Google Assistant interpreting "Call Dad" verbally and dialing the contact immediately.',
        options: [
          { id: 'LIFE_VOICE', text: 'Daily Life — Intelligent Voice Assistants (Speech DL + NLP)' },
          { id: 'IND_LOGIST', text: 'Industry — Logistics Freight Routing' },
          { id: 'IND_HEALTH', text: 'Industry — Radiology Diagnostics' },
        ],
        correctAnswer: 'LIFE_VOICE',
        displayAnswer: 'Daily Life — Intelligent Voice Assistants',
        explanation: 'Voice assistants combine deep speech-to-text with natural language understanding to trigger phone actions.',
      },
    ],
  },

  // =========================================================================
  // Section D: True / False Questions (10 questions - 1 mark each)
  // =========================================================================
  sectionD: {
    id: 'section_d',
    title: 'D. True / False Statements',
    badge: 'True / False (10)',
    instruction: 'Indicate whether each statement is True (✓) or False (✗) by clicking the corresponding button:',
    pointsPerQuestion: 1,
    questions: [
      {
        id: 'tf_1',
        number: 1,
        question: 'YouTube recommendation algorithms function by reading user subconscious psychological thoughts without prior telemetry.',
        correctValue: false,
        correction: 'Recommendation systems rely exclusively on empirical historical behavioral telemetry (dwell time, clicks, completion rates).',
        explanation: 'AI models do not possess telepathic capabilities; they compute quantitative metrics from recorded user interactions.',
      },
      {
        id: 'tf_2',
        number: 2,
        question: 'In oncology radiology, AI serves as an autonomous legal substitute completely eliminating the need for human physicians.',
        correctValue: false,
        correction: 'AI is strictly a clinical decision-support tool; diagnosis validation and legal liability rest exclusively with licensed physicians.',
        explanation: 'Human-in-the-Loop oversight is a foundational ethical mandate in clinical medicine.',
      },
      {
        id: 'tf_3',
        number: 3,
        question: 'Automation signifies that electronic and algorithmic systems execute tasks and quality checks autonomously without direct human labor.',
        correctValue: true,
        correction: 'The statement is entirely correct.',
        explanation: 'This matches the standard industrial definition of automation.',
      },
      {
        id: 'tf_4',
        number: 4,
        question: 'Predictive maintenance protects factories from catastrophic shutdowns by forecasting mechanical failures prior to occurrence.',
        correctValue: true,
        correction: 'The statement is entirely correct.',
        explanation: 'Forecasting failure windows allows maintenance teams to schedule component swaps during off-peak hours.',
      },
      {
        id: 'tf_5',
        number: 5,
        question: 'AI excels at discovering and categorizing recurring patterns within vast, unstructured datasets such as images and text corpora.',
        correctValue: true,
        correction: 'The statement is entirely correct.',
        explanation: 'Pattern recognition is the primary mathematical superpower of neural network architectures.',
      },
      {
        id: 'tf_6',
        number: 6,
        question: 'If an AI outputs prose with impeccable grammar and authoritative confidence, the factual claims are guaranteed 100% accurate.',
        correctValue: false,
        correction: 'Fluency does not equate to veracity; language models can hallucinate entirely fabricated facts with authoritative confidence.',
        explanation: 'Generative models predict probable token sequences rather than verifying objective ground truth.',
      },
      {
        id: 'tf_7',
        number: 7,
        question: 'The "Black Box Problem" describes the opacity of internal reasoning pathways behind complex AI model outputs.',
        correctValue: true,
        correction: 'The statement is entirely correct.',
        explanation: 'While inputs and outputs are observable, intermediate weight activations in deep architectures resist intuitive human interpretation.',
      },
      {
        id: 'tf_8',
        number: 8,
        question: 'There are zero privacy concerns associated with sharing sensitive personal and confidential data with public AI models.',
        correctValue: false,
        correction: 'Sharing sensitive telemetry poses grave privacy risks including unauthorized data harvesting, leakage, and commercial exploitation.',
        explanation: 'Safeguarding privacy and sensitive data is one of the seven non-negotiable cautionary principles.',
      },
      {
        id: 'tf_9',
        number: 9,
        question: 'AI in logistics optimizes delivery routes to minimize transit latency, reduce fuel consumption, and bypass traffic congestion.',
        correctValue: true,
        correction: 'The statement is entirely correct.',
        explanation: 'Dynamic graph optimization saves millions of road transit kilometers and reduces global carbon emissions.',
      },
      {
        id: 'tf_10',
        number: 10,
        question: 'Safe and responsible deployment of artificial intelligence demands perpetual awareness, technical comprehension, and vigilance.',
        correctValue: true,
        correction: 'The statement is entirely correct.',
        explanation: 'This encapsulates the overarching philosophy championed by the Ministry curriculum and Eng. Mohamed Shamel.',
      },
    ],
  },

  // =========================================================================
  // Section E: Case Studies & High-Impact Decisions (3 questions - 2 marks each)
  // =========================================================================
  sectionE: {
    id: 'section_e',
    title: 'E. Case Studies & Engineering Decisions',
    badge: 'Case Studies (3)',
    instruction: 'Analyze each realistic scenario and select the sound engineering decision (2 marks each):',
    pointsPerQuestion: 2,
    questions: [
      {
        id: 'case_1',
        number: 1,
        question: 'Clinical Case (Radiology Oncology Screening): An AI imaging tool evaluated a patient CT scan and concluded zero detectable lesions. The human oncologist noticed a faint anomaly, ordered a physical biopsy, detected an early-stage micro-tumor, and saved the patient’s life. What foundational principle does this case demonstrate?',
        options: [
          { id: 'A', text: 'The absolute necessity of qualified Human-in-the-Loop oversight, treating AI as a supportive aid rather than a replacement' },
          { id: 'B', text: 'The immediate decommissioning of all digital CT imaging scanners in hospitals' },
          { id: 'C', text: 'Relying exclusively on software and ignoring human medical judgment' },
          { id: 'D', text: 'Disciplining the doctor for contradicting the computer program' },
        ],
        correctAnswer: 'A',
        explanation: 'AI models can miss rare anomalous patterns; human expertise is an indispensable safety net.',
        simplifiedHint: 'Consider: Who holds legal and ethical responsibility for patient outcomes? Software or the licensed physician?',
      },
      {
        id: 'case_2',
        number: 2,
        question: 'Industrial Case (Steel Mill Predictive Maintenance): A 24/7 steel mill receives an automated sensor warning forecasting gear failure within 7 days, though the machine appears visually sound. What is the correct engineering decision?',
        options: [
          { id: 'A', text: 'Schedule replacement during the next planned shift maintenance window to avert catastrophic line shutdown and multi-million dollar losses' },
          { id: 'B', text: 'Ignore the telemetry alert completely until the gear physically shatters mid-operation' },
          { id: 'C', text: 'Cut off all electrical power to the plant and shut down operations permanently' },
          { id: 'D', text: 'Double motor RPM speed to test the physical breaking point of the gear' },
        ],
        correctAnswer: 'A',
        explanation: 'Planned preventative replacement eliminates catastrophic downtime and hazardous mechanical failure.',
        simplifiedHint: 'Think like an engineer: Do you swap parts safely during scheduled downtime, or risk sudden catastrophic plant failure?',
      },
      {
        id: 'case_3',
        number: 3,
        question: 'Educational Case (School Library Biometric Tracking): A vendor pitches installing facial recognition cameras in a school library to track student emotional micro-expressions while reading and correlate them with health records without parental consent. Which core AI hazard is egregiously violated here?',
        options: [
          { id: 'A', text: 'Improper handling of sensitive personal information and severe invasion of student privacy' },
          { id: 'B', text: 'Low GPU rendering clock speeds' },
          { id: 'C', text: 'Elevated school electric utility billing' },
          { id: 'D', text: 'Difficulty in dusting camera lens surfaces' },
        ],
        correctAnswer: 'A',
        explanation: 'Harvesting biometric and psychological telemetry without consent or educational necessity violates data protection ethics.',
        simplifiedHint: 'Recall Caution #2: Personal data privacy and safeguarding against unauthorized surveillance.',
      },
    ],
  },
};
