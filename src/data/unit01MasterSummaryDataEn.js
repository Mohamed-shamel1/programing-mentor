/**
 * Unit 1 Master Revision Sheet & Exam Traps Blueprint (English)
 * Title: Unit 1 Master Blueprint: Complete Summary & Exam Traps
 * Subtitle: Deep Concept Explanations + Embedded Exam Solving Tips (Watch Out in Exam!)
 * Format: 2-Page A4 Landscape Spread (Two-Sided Landscape Print)
 * Grade: Grade 11 - Egyptian Baccalaureate / Thanawya (Term 1)
 * Language Style: Simple, direct, student-friendly English specifically crafted for language school students.
 * Supervision: Eng. Mohamed Shamel
 */

export const unit01MasterSummaryDataEn = {
  id: 'unit-01-master-summary-en',
  unitTitle: 'Unit 1: Computing & AI Fundamentals',
  edition: 'Master Revision Edition — Based on Official Ministry Bank & Practice Exams',
  author: 'Eng. Mohamed Shamel',
  authorTitle: 'Computer Science & AI Senior Mentor for Egyptian Thanawya',

  // =========================================================================
  // PAGE 1: Technical & Architectural Foundations (Lessons 1-1 & 1-2)
  // =========================================================================
  sheet1: {
    pageNumber: '01',
    totalPages: '02',
    pageTag: 'SHEET 1 // TECH FOUNDATIONS',
    title: 'Technical Foundations & Architecture (Lesson 1-1 + Lesson 1-2)',
    subtitle: 'Evolution of IT, Moore’s Law, Social Shifts + AI Foundations, ANNs & The Paradigm Shift',

    // Golden Exam Rules
    goldenExamRules: {
      title: 'Golden Exam Rules (Memorize These! Proven by Ministry Practice Exams)',
      rules: [
        {
          tag: 'Absolute Words are Wrong',
          desc: 'Any option with words like (Only, Exclusively, Never, 100%, Always, Eliminates the need, Forever) is almost always FALSE and a distractor.'
        },
        {
          tag: 'Cross-Lesson Distractor',
          desc: 'Instantly eliminate choices from unrelated lessons (e.g. choosing "Moore’s Law" or "Qubits" in an AI Ethics or Hiring question).'
        },
        {
          tag: 'Negative Questions ("NOT")',
          desc: 'Read twice! Phrases like "Which of the following is NOT..." or "Except..." are asking for the single incorrect exception.'
        },
        {
          tag: 'Reduces ≠ Completely Prevents',
          desc: 'Modern tech like Edge computing or Predictive Maintenance "reduces latency and breakdown frequency"; it NEVER eliminates risks with 100% guarantee.'
        }
      ]
    },

    // Lesson 1-1
    lesson11: {
      code: '1-1',
      title: 'Evolution of Information Technology & Social Transformation',
      bookPages: 'Ministry Textbook: pp. 4 - 11',

      // Official IT Definition (Textbook p. 4)
      itDefinition: {
        title: 'Official IT Definition (Ministry Approved):',
        def: 'The use of hardware, software, networks, and systems to process, store, and transmit information (Collect, Store, Process, Transmit, and Use).'
      },

      // Five Main Eras of IT Evolution (Textbook p. 4 Table)
      eras: [
        { 
          period: '1940s - 1960s', 
          title: 'Electronic Mainframes & Vacuum Tubes',
          tech: 'First electronic mainframes (ENIAC) using Vacuum Tubes; room-sized machines consuming massive electric power.', 
          impact: 'Used strictly for military ballistic calculations and big scientific research; completely out of reach for regular people or private firms.' 
        },
        { 
          period: '1970s - 1980s', 
          title: 'Rise of Personal Computers (PCs)',
          tech: 'Widespread Personal Computers (PCs); Transistor invention (1946 Bell Labs), Integrated Circuits (ICs), and microprocessors shrinking hardware size.', 
          impact: 'Beginning of individual personal computing in homes and offices; computing exited military labs into business and civil society.' 
        },
        { 
          period: '1990s', 
          title: 'Commercial Internet & The Web',
          tech: 'Commercial Internet access; launch of World Wide Web (WWW), Electronic Mail (Email), and early E-commerce (Amazon 1994).', 
          impact: 'Global information access and email adoption; instant cross-border digital communication, transforming PCs into trade and communication tools.' 
        },
        { 
          period: '2000s (1st Decade)', 
          title: 'Rise of Smartphones',
          tech: 'Launch of Smartphones (iPhone 2007) with touchscreens, high-speed mobile wireless networks, GPS navigation, and built-in cameras.', 
          impact: 'Rapid and widespread mobile internet adoption; internet became an omnipresent service in every user’s pocket on the move (Mobility).' 
        },
        { 
          period: '2010s & Beyond', 
          title: 'Cloud Computing & Generative AI',
          tech: 'Cloud Computing expansion, Big Data analytics, IT as a Service (ITaaS), and Generative AI foundational models (ChatGPT & LLMs).', 
          impact: 'Big data analytics and AI; IT resources delivered as online services on-demand, enabling training of massive AI models without local servers.' 
        }
      ],

      // 1995 vs 2026 Comparison Table (Textbook p. 5)
      timelineHookComparison: [
        { field: 'Knowledge Search', year1995: 'Physical library visits, paper card catalogs; took days.', year2026: 'Instant AI assistants & smart search in a second.' },
        { field: 'Money & Banking', year1995: 'Long bank lines, paper checkbooks, and cash payments.', year2026: 'Instant mobile payments, e-wallets, contactless QR.' },
        { field: 'Communication & Work', year1995: 'Mailed paper letters taking weeks, or coin payphones.', year2026: 'Free HD video calls, remote collaboration & meetings.' },
        { field: 'Travel & Mobility', year1995: 'Visiting travel agencies, paper maps, asking pedestrians.', year2026: 'Real-time GPS navigation, live traffic alerts, app bookings.' },
        { field: 'Healthcare & Records', year1995: 'Paper physical hospital archives, slow manual X-rays.', year2026: 'Encrypted cloud EHRs, AI medical vision diagnosis assistance.' }
      ],

      // Stakeholder Analysis Matrix & Cashless Fairness (Textbook pp. 10-11)
      stakeholderMatrix: [
        { role: 'Youth & Remote Workers', interest: 'Biggest gain: saves massive time, zero queues, pay bills with one tap.' },
        { role: 'Small Local Merchants', interest: 'Faces POS machine costs, transaction fees, and cash flow constraints.' },
        { role: 'Elderly & Unbanked Citizens', interest: 'Risk of digital divide and financial exclusion without smartphones.' },
        { role: 'Responsible Engineering Action', interest: 'Gradual phase-in + keep cash option + free subsidized QR codes & training.' }
      ],

      // Autonomous Driving Hardware Stack
      autonomousDrivingHardware: {
        title: 'Autonomous Driving Hardware Stack',
        components: [
          { name: 'Digital Cameras (Vision)', role: 'Detect pedestrians, traffic lights, and street road markings.' },
          { name: 'Radar Sensors (Radar)', role: 'Measure distances and speeds of surrounding vehicles in all weather.' },
          { name: 'LiDAR Sensors (LiDAR)', role: 'Pulsed 3D laser scanning to build an instant 3D depth map around the car.' },
          { name: 'Edge Computing (Edge)', role: 'Onboard processors executing emergency braking in milliseconds (0-Latency).' }
        ],
        examTip: 'Exam Alert: Cloud computing CANNOT be used for emergency braking due to latency and signal loss risks! Cloud is strictly for weekly trip logs and map updates.'
      },

      // Quantum Computing, Qubit & Math Problems (Textbook p. 6)
      quantumComputing: {
        title: 'Quantum Computing, Qubit & Math Problems Hub (Textbook p. 6)',
        coreLaw: 'Superposition Math Law: An n-qubit quantum register represents and processes (2^n) states simultaneously.',
        bitVsQubit: {
          bit: 'Classical Bit: Strictly binary deterministic value (either 0 or 1); 3 bits represent only 1 of 8 states at any single instant.',
          qubit: 'Quantum Qubit: Harnesses Superposition to exist as a probability mixture of 0 and 1 simultaneously.'
        },
        mathProblems: [
          { qubits: '1 Qubit', states: '2^1 = 2 states simultaneously (0 and 1 at the same split-second).' },
          { qubits: '2 Qubits', states: '2^2 = 4 states simultaneously (00, 01, 10, 11).' },
          { qubits: '3 Qubits', states: '2^3 = 8 states simultaneously (Crucial Exam Question!).' },
          { qubits: 'n Qubits', states: '2^n simultaneous states in parallel.' }
        ],
        applications: [
          { domain: 'Cryptographic Ciphers (Cryptography)', desc: 'Factoring astronomical prime numbers and cracking RSA encryption in minutes (Shor’s algorithm).' },
          { domain: 'Molecular Simulation & Drug Discovery', desc: 'Simulating quantum molecular bonds and complex proteins to engineer breakthrough medications.' },
          { domain: 'Massive Optimization Problems', desc: 'Analyzing billions of flight logistics, power grid distributions, and routing combinations in seconds.' },
          { domain: 'Superconductors & Materials Science', desc: 'Designing room-temperature lossless energy conductors.' }
        ],
        analogy: {
          classicalCar: 'The Car (Classical PC): Fast and perfect on open highways for everyday tasks and office software.',
          quantumBike: 'The Bicycle (Quantum Computer): Expertly maneuvers through winding alleys (cryptography and molecular modeling).'
        },
        examTraps: [
          'A quantum computer is NOT a general PC replacement; it requires cryogenic cooling near absolute zero (-273°C).',
          'Quantum computers do NOT accelerate daily web browsing or video gaming; advantage is strictly for specific quantum algorithms.'
        ]
      },

      // Key Concepts with Deep Explanations & Embedded Exam Tips
      keyConcepts: [
        {
          term: 'Moore’s Law (Empirical Observation)',
          summary: 'An empirical observation and historical economic trend described by Gordon Moore: the number of transistors on an integrated circuit roughly doubles every two years with falling production costs. It is NOT a fixed universal law of physics (like Newton’s laws or gravity); it slowed down as silicon reached atomic barriers.',
          challengeAndSolution: 'Physical Barriers: (1) Leakage Currents where electricity leaks even in the OFF state generating intense heat, (2) Quantum Tunneling where electrons jump over ultra-thin barriers losing control, (3) Impossibility of increasing single-core clock speeds. Engineering Solutions: Multi-core, Parallel Processing, and Specialized Chips.',
          examTip: 'In the exam: Moore’s Law is an empirical economic trend, not a physics law; and the real adopted engineering solution is Multi-core & Specialized Architectures, NOT Quantum Computing!'
        },
        {
          term: 'Specialized Architectures & Multi-core',
          summary: 'To bypass thermal bottlenecks, the industry shifted to: (1) Multi-core Processors placing several computing cores on one chip with Shared Memory to distribute workload, (2) Parallel Processing running several computations at the exact same split-second, (3) Specialized Chips: Graphics Processing Units (GPUs) for heavy math, AI Processors (NPUs) for neural networks, and Digital Signal Processors (DSPs) for real-time audio/image processing.',
          examTip: 'Multi-core does NOT shrink transistor size or eliminate heat; it divides the single task into parallel threads to prevent overheating!'
        },
        {
          term: 'Computing Matrix (Edge vs. Cloud Computing)',
          summary: 'Cloud Computing: Remote centralized servers that process, store massive Big Data, and train large AI models over the internet. Edge Computing: Immediate local data processing directly on the device itself (like inside a self-driving car) to minimize latency down to near zero for split-second emergency decisions.',
          examTip: 'Why is Edge Computing mandatory for autonomous braking? Because safety demands split-second decisions; sending data to the cloud causes latency and network disconnect risks that can be lethal. The cloud obstacle is transfer time (Latency), not storage capacity!'
        },
        {
          term: 'Extended Reality (AR vs. VR)',
          summary: 'Augmented Reality (AR): Keeps the user in the real physical environment while overlaying 3D digital data or virtual objects on top of it (e.g. surgeon glasses projecting blood pressure and arteries over the patient body, navigation arrows on windshield, furniture preview in your room). Virtual Reality (VR): Completely blocks the real world and immerses the user 100% inside a computer-simulated digital space (e.g. flight storm simulators for pilots, high-risk surgery drills).',
          examTip: 'Virtual Reality does NOT speed up computer processing; it is an immersion and safe training simulator for hazardous conditions!'
        },
        {
          term: 'Quantum Computing: Bit vs. Qubit',
          summary: 'A computing approach based on quantum mechanics. The classical Bit represents one fixed state at a time (strictly 0 or 1). The Quantum Bit (Qubit) leverages "Superposition" to exist as a probability mixture of both (0 and 1 simultaneously). Provides massive superiority exclusively for specific complex problems: breaking cryptographic ciphers, molecular drug discovery, and massive optimization.',
          examTip: 'A single Qubit only represents two states (0 and 1) simultaneously via superposition; representing vast states requires a multi-qubit system (2^n). Quantum is NOT a general PC replacement and does not speed up daily web browsing!'
        },
        {
          term: 'Five Social Shifts & Cashless Society Fairness',
          summary: '5 core transformations: Social Networking (SNS), E-commerce, Remote Work, Online Learning, and Cashless Payment (Cards, Mobile Wallets, QR Codes). Benefits: Speed, security against theft, expense tracking, and anti-tax evasion.',
          examTip: 'Top Exam Ethics Question: The main danger of a cashless society is "Financial Exclusion & Digital Divide" for elderly and unbanked citizens. The responsible solution is gradual transition with cheap printed QR codes. Note: Teacher uploading a video is "Remote Work", while student watching it is "Online Learning"!'
        }
      ],

      // Exam Traps for 1-1
      traps: [
        'Moore’s Law is an empirical economic trend, not an immutable law of physics like Newton’s laws; it hit physical limits like leakage and quantum tunneling.',
        'The technical milestone that brought computers into ordinary homes was the 1946 transistor and integrated circuits, not high-level coding languages.',
        'Engineers and the military began using computers in the 1940s (ENIAC), while the general public started using them in the 1970s-1980s with the PC.',
        'Quantum Computing is NOT a general replacement for classical PCs and does not speed up daily software; its superiority is restricted to complex algorithms like encryption and molecular modeling.'
      ]
    },

    // Lesson 1-2
    lesson12: {
      code: '1-2',
      title: 'Foundations of Artificial Intelligence & How it Learns',
      bookPages: 'Ministry Textbook: pp. 12 - 17',

      // 3 Governing AI Principles (Textbook p. 12)
      threePrinciples: [
        { name: '1. Learning', desc: 'Discovering patterns, rules, and mathematical relationships from data without explicit coding.' },
        { name: '2. Reasoning', desc: 'Applying inferred rules to new situations and unseen data to reach conclusions and predictions.' },
        { name: '3. Self-Correction', desc: 'Evaluating previous decisions and auto-tuning weights to reduce future errors continuously.' }
      ],

      // Explicit Umbrella Hierarchy
      umbrellaHierarchy: [
        { tier: '1. Artificial Intelligence (AI)', desc: 'The broad umbrella: all software and systems designed to mimic human mental faculties like learning, reasoning, and problem solving.' },
        { tier: '2. Machine Learning (ML)', desc: 'A branch of AI: statistical algorithms that uncover patterns and rules directly from data without explicit line-by-line coding.' },
        { tier: '3. Deep Learning (DL)', desc: 'An advanced tier of ML: uses deep artificial neural networks with multiple hidden layers to process unstructured complex data like images and audio.' },
        { tier: '4. Generative AI (GenAI)', desc: 'The newest application of DL: generates completely original new content (text, imagery, video, audio, code) based on learned patterns.' }
      ],

      // 3 Learning Tiers Architectural Matrix (Textbook pp. 13-14)
      learningTiers: [
        {
          tier: 'Tier 1: Machine Learning (ML)',
          dataNature: 'Structured data: spreadsheets, numerical tables, categorized records.',
          humanRole: 'Manual Feature Engineering: human engineer handcrafts input features.',
          dataSplit: 'Strict 80/20 Rule: 80% Training Data + 20% Unseen Test Data to stop rote memorization (Overfitting).',
          apps: 'Email spam filters, price prediction, recommendation engines.'
        },
        {
          tier: 'Tier 2: Deep Learning (DL)',
          dataNature: 'Massive unstructured raw data: images, live video feeds, speech, text.',
          humanRole: 'Automatic Feature Extraction: deep hidden neural layers discover features on their own.',
          dataSplit: 'Deep Artificial Neural Networks (Deep ANNs) with multi-layered representations.',
          apps: 'Self-driving obstacle detection, medical X-ray diagnosis, real-time facial recognition.'
        },
        {
          tier: 'Tier 3: Generative AI (GenAI)',
          dataNature: 'Trillion-parameter multimodal knowledge repositories.',
          humanRole: 'Prompt Engineering, guiding instructions, and ethical alignment.',
          dataSplit: 'Foundational Large Language Models (LLMs) predicting next tokens to produce brand-new creations.',
          apps: 'Conversational assistants (ChatGPT, Claude), image generation (Midjourney), AI code copilots.'
        }
      ],

      // Official Approved Case Studies
      caseStudies: [
        {
          title: 'Court Case (Mata v. Avianca) — Hallucination in Law',
          summary: 'A lawyer relied entirely on ChatGPT for a court brief. The model hallucinated fake legal precedents, fake case citations, and fake judges with convincing eloquence. The federal judge sanctioned the lawyer for gross negligence.',
          lesson: 'Hallucination is confident generation of fake text from probabilistic word prediction. Human verification is legally mandatory!'
        },
        {
          title: 'Precision Agriculture — Satellite & Sensor Fusion',
          summary: 'An AI engine merges aerial satellite infrared imagery with ground soil moisture sensors to calculate water and pesticide needs for every square meter, predicting crop diseases before visible symptoms appear.',
          lesson: 'AI excels at multi-source data fusion, saving precious water resources and maximizing sustainable crop yields.'
        }
      ],

      // Key Concepts with Deep Explanations & Embedded Exam Tips
      keyConcepts: [
        {
          term: 'The Paradigm Shift in Programming',
          summary: 'Classical Rule-based Programming: The human developer manually writes every single rule and condition (Inputs + Handcrafted Rules = Outputs); if an unpredicted case occurs, the software fails. AI & Machine Learning: We feed the system raw data along with desired outputs/historical answers, and the algorithm automatically extracts the mathematical rules and hidden patterns (Data + Desired Outputs = Inferred Rules & Patterns).',
          examTip: 'In the exam: In classical programming humans craft the rules; in AI the machine discovers the rules from data and historical examples!'
        },
        {
          term: 'Perceptron Engineering & ANN Learning Mechanism',
          summary: 'Artificial Neural Networks (ANNs) mirror the human brain: composed of an Input Layer, Hidden Layers, and an Output Layer. The Secret of Learning: During training, the model improves strictly by "updating and adjusting Synaptic Weights" and bias values to minimize error. The actual number of neuron units remains unchanged throughout training.',
          examTip: 'Neural network learning does NOT mean adding more neurons or making the screen bigger! The neuron count remains constant; learning happens exclusively by adjusting "Synaptic Weights"!'
        },
        {
          term: 'Narrow AI (ANI) & Its Realistic Limits',
          summary: 'Every single AI system deployed in the world today without exception is Narrow / Weak AI (ANI); engineered to excel at one specific, bounded task (like chess, face recognition, translation, or radiology imaging). Current AI lacks general human-like consciousness or common sense (AGI).',
          examTip: 'Any exam choice stating that current AI is "General, possesses universal awareness, feelings, or broad human-level common sense" is completely FALSE; all current AI is Narrow AI!'
        },
        {
          term: 'Hallucination & Deceptive Fluency',
          summary: 'Generating completely fabricated or inaccurate facts, citations, or legal cases while expressing them with high linguistic confidence and eloquence. This happens because large language models probabilistically predict the next most likely token without factual understanding. Real Case: In Mata v. Avianca, a lawyer was sanctioned by court for submitting fake legal precedents invented by ChatGPT.',
          examTip: 'Hallucination is NOT intentional lying or conscious deception; fluency does NOT equal factual truth, which is why human verification is strictly mandatory!'
        },
        {
          term: 'Cloud vs. Big Data Relationship',
          summary: 'Big Data represents the raw material (volume, velocity, variety of information), while Cloud Computing provides the factory and computing infrastructure offering parallel processing as a service over the internet to train large AI models.',
          examTip: 'Spam filters and facial recognition are classification tasks under ML, while authoring a story or drawing an image is Generative AI (GenAI)!'
        }
      ],

      // Exam Traps for 1-2
      traps: [
        'Every Deep Learning (DL) model is part of Machine Learning (ML), but the reverse is NOT true; many ML algorithms are classical and non-deep.',
        'Learning in neural networks strictly means updating synaptic weights and bias values; retaining the same neuron count does not hinder learning.',
        'Generative AI creates new content (text, images, code), whereas facial recognition is a recognition and classification task on existing data.',
        'Hallucination does not mean the AI is "deliberately lying"; models have no moral conscience or intent, but merely predict probabilistic text tokens.'
      ]
    }
  },

  // =========================================================================
  // =========================================================================
  // PAGE 2: Real-World Applications & Ethical Charter (Lessons 1-3 & 1-4)
  // =========================================================================
  sheet2: {
    pageNumber: '02',
    totalPages: '02',
    pageTag: 'SHEET 2 // ETHICS & APPLIED SCENARIOS',
    title: 'Applications, Ethical Charter & The Terminology Disambiguation Matrix (Lesson 1-3 + Lesson 1-4)',
    subtitle: 'Daily Life & Industrial Automation + Demystifying Confusing Terms + 4 Principles, Algorithmic Bias & Essay Lab',

    // Confusion Matrix (The Most Critical Part of the Exam!)
    confusionMatrix: {
      title: 'Official Disambiguation Matrix (Crucial Distinctions in Ministry Exams):',
      pairs: [
        {
          conceptA: 'Quality Inspection',
          roleA: 'Vision cameras on conveyor belt inspect finished products to catch CURRENT defects.',
          conceptB: 'Predictive Maintenance',
          roleB: 'Vibration & thermal sensors on machinery predict FUTURE breakdown before it stops.',
          examTrigger: 'Camera + finished product = Quality | Sensors + machinery = Predictive'
        },
        {
          conceptA: 'Transparency',
          roleA: 'Upfront public disclosure that an AI system is operating and its limits (alone ≠ fairness).',
          conceptB: 'Explainable AI (XAI)',
          roleB: 'Disclosing specific feature weights behind an individual decision for human appeal.',
          examTrigger: 'Alerting user to AI = Transparency | Revealing decision weights = XAI'
        },
        {
          conceptA: 'Responsibility',
          roleA: 'Duty & Role distribution: Who has which duty? (Developer, Company, User).',
          conceptB: 'Accountability',
          roleB: 'Legal liability & damages: Who gets penalized in court when harm occurs? (Strictly human).',
          examTrigger: 'Who has duty = Responsibility | Who is penalized & pays = Accountability'
        },
        {
          conceptA: 'Privacy',
          roleA: 'Fundamental human right to confidentiality and freedom from unauthorized tracking.',
          conceptB: 'Data Protection',
          roleB: 'Technical security controls enforcing confidentiality (encryption, minimization).',
          examTrigger: 'Right to confidentiality = Privacy | Technical encryption = Data Protection'
        },
        {
          conceptA: 'Probabilistic Inference',
          roleA: 'Estimates most likely outcomes from past data; AI does NOT guarantee 100% certainty.',
          conceptB: 'Deterministic (100% Guarantee)',
          roleB: 'A common false exam distractor ("100% certainty"); strictly incorrect in AI.',
          examTrigger: 'AI is probabilistic; any choice claiming "100% certainty" is FALSE!'
        }
      ]
    },

    // Lesson 1-3
    lesson13: {
      code: '1-3',
      title: 'Artificial Intelligence in Daily Life & Industry',
      bookPages: 'Ministry Textbook: pp. 18 - 23',

      // Daily Life Services & Industrial Matrix
      dailyAndIndustryMatrix: [
        { 
          item: 'Recommender Systems', 
          domain: 'Daily Life', 
          tech: 'ML + DL',
          logic: 'Probabilistic inference based on "Past Behavior Data" (videos you watched, items you bought before); NOT 100% certainty.',
          examTip: 'In the exam: YouTube/Amazon recommendations are probabilistic estimates; "100% certainty" is a false distractor!'
        },
        { 
          item: 'Voice Assistants (Siri/Alexa)', 
          domain: 'Daily Life', 
          tech: 'Speech + NLP',
          logic: 'Speech-to-Text audio signal processing, followed by Natural Language Processing (NLP) to parse user intent and trigger actions.',
          examTip: 'Relies on acoustic and text processing to interpret spoken queries and execute tasks instantly.'
        },
        { 
          item: 'Neural Machine Translation (NMT)', 
          domain: 'Daily Life', 
          tech: 'DL Transformers',
          logic: 'Deep Transformers grasp full sentence context, figurative idioms, and syntax rather than crude word-by-word literal substitution.',
          examTip: 'Modern translation understands linguistic context and idioms through deep neural attention architectures.'
        },
        { 
          item: 'Facial Recognition', 
          domain: 'Daily Life & Safety', 
          tech: 'DL / CNN',
          logic: 'Convolutional Neural Networks (CNNs) measure 3D biometric distances between facial landmarks to build a unique feature vector.',
          examTip: 'Acceptable for real-time security verification; but storing biometric databases and tracking movement without consent is illegal.'
        },
        { 
          item: 'Healthcare & Diagnostics', 
          domain: 'Industry & Services', 
          tech: 'Medical Vision',
          logic: 'Analyzing X-rays, MRI scans, and lab results for early tumor detection; AI is an assistive tool while final liability rests with the doctor.',
          examTip: 'Human-in-the-Loop mandate: An AI cannot make autonomous clinical treatment decisions without human doctor verification!'
        },
        { 
          item: 'Smart Agriculture', 
          domain: 'Industry & Production', 
          tech: 'Sensors + Vision',
          logic: 'Drone aerial cameras and soil moisture sensors for precision drip irrigation, early pest alerts, and crop yield forecasting.',
          examTip: 'Precision irrigation and yield forecasting safeguard water resources and maximize sustainable output.'
        },
        { 
          item: 'Manufacturing Automation', 
          domain: 'Industry & Production', 
          tech: 'Robotics + Vision',
          logic: 'Integrating computer vision quality inspection and sensor predictive maintenance to keep assembly lines running smoothly.',
          examTip: 'Automation means executing operations automatically via software and hardware with zero direct human intervention.'
        },
        { 
          item: 'Logistics & Route Planning', 
          domain: 'Industry & Transport', 
          tech: 'Pathfinding AI',
          logic: 'Algorithmic dynamic pathfinding to minimize fuel consumption and shipping delays, plus autonomous warehouse sorting.',
          examTip: 'Core objective is cutting fuel burn and delivery delays through dynamic route optimization.'
        }
      ],

      // Strengths vs Cautions
      strengthsVsCautions: {
        strengthsTitle: 'What AI Excels At (Strengths):',
        strengths: [
          'Absorbing and analyzing massive Big Data datasets at speeds far exceeding humans.',
          'Pattern recognition across images, audio, and text, and generating rich media.',
          'Probabilistic inference and fast decision-making in dynamic environments.'
        ],
        cautionsTitle: 'What Demands Caution & Human Oversight (Demands Caution):',
        cautions: [
          'Ethical judgments and avoiding racial or gender algorithmic bias.',
          'Protecting personal data privacy and preventing unauthorized mass tracking.',
          'Result accuracy and mitigating hallucinations in critical fields like medicine.',
          'The Black Box problem (lack of human-understandable reasoning).',
          'Establishing legal liability and distributing accountability to human actors.'
        ],
        examTrapAlert: 'Exam Alert: Ethical judgments, privacy, and fairness fall under "Demands Caution", NEVER choose them under "What AI Excels At"!'
      },

      // Traps Box
      traps: [
        'Recommender systems operate on probabilistic estimation; phrases claiming "100% guaranteed accuracy" are incorrect distractors.',
        'Ethical judgments, privacy, and fairness fall under "Demands Caution", NEVER choose them under "What AI Excels At".',
        'Predictive maintenance requires continuous historical sensor telemetry (data); without real-time sensors, failure forecasting is impossible.',
        'In medical diagnosis: AI assists the human doctor; automatic unverified clinical treatment decisions violate official safety guidelines.'
      ]
    },

    // Lesson 1-4
    lesson14: {
      code: '1-4',
      title: 'Ethical Issues Surrounding Artificial Intelligence',
      bookPages: 'Ministry Textbook: pp. 24 - 30',

      // Official Algorithmic Bias Definition (Exam Q1)
      algorithmicBiasDef: 'A systematic pattern or deviation in AI outputs that leads to unfair or discriminatory outcomes against specific groups, arising from training data, system design, usage, or human/social context.',

      // The 4 Root Sources of Bias (Exam Q4)
      biasCauses: [
        { 
          source: '1. Training Data Skew (Data Skew)', 
          subtypes: 'Lack of demographic representation or mirroring past historical discrimination.',
          desc: 'Lack of group data lowers accuracy and increases bias (e.g. face recognition); or training on historical hiring records that excluded women leads the AI to repeat the same bias!',
          examKey: 'Q2 & Q3: Lack of data on a group increases bias, and past human bias is repeated by the AI.'
        },
        { 
          source: '2. System Design & Proxy Variables', 
          subtypes: 'Flaws in choosing input features and proxy variables.',
          desc: 'Removing protected traits (gender/race) explicitly, but picking a neutral proxy variable (e.g. Zip Code, high school, club) that secretly correlates with the protected trait!',
          examKey: 'Q4: A neutral feature that indirectly stands in for a legally protected attribute.'
        },
        { 
          source: '3. System Usage & Blind Trust', 
          subtypes: 'Blind trust and delegating high-stakes decisions without human review.',
          desc: 'Deploying the system for tasks or high-stakes contexts different from what it was originally designed for, or trusting its outputs blindly without human verification.',
          examKey: 'Q4: Deploying outside original design scope without proper human oversight.'
        },
        { 
          source: '4. Human & Social Context', 
          subtypes: 'Cultural and societal differences without local calibration.',
          desc: 'Using a model trained in one culture/society in a completely different social environment without local calibration and consideration of social norms.',
          examKey: 'Q4: Applying the system in a social context that differs from the original baseline.'
        }
      ],

      // Privacy Issues in AI (Exam Q6, 7, 8)
      privacyIssues: {
        title: 'Privacy Issues in AI (Exam Q6, Q7, Q8)',
        definition: 'Protecting personal data and private life from unauthorized access, collection, use, or surveillance (Exam Q6).',
        facialRecognitionPublic: 'Using public facial recognition to identify individuals and track their movements across places without prior consent is an ethical violation (Exam Q7).',
        massDataCollection: 'Gathering and analyzing vast amounts of online behavior, search history, visited pages, and digital interactions to discover patterns (Exam Q8).'
      },

      // Speed Trap Alert (Exam Q2)
      speedTrapAlert: 'Crucial Exam Alert: Computer processing speed, slow processors, or Moore’s Law are NEVER causes of algorithmic bias; speed only affects latency!',

      // Black Box vs XAI (Exam Q9 & 10)
      blackBoxVsXai: {
        title: 'The Black Box vs. Explainable AI (XAI)',
        blackBox: 'The Black Box Problem (Q10): When decision logic is hidden and opaque, it is hard to detect errors, bias, or verify fairness; strictly unacceptable in high-stakes decisions.',
        xai: 'Explainable AI - XAI (Q9): Methods that enable humans to understand WHY an AI made a particular decision, clarifying the decisive factors behind the outcome.',
        goldenRule: 'In life-critical decisions (medical, legal, hiring), accuracy alone is NEVER enough without Explainability (XAI); rejecting an applicant without explaining violates Transparency & XAI (Q19)!'
      },

      // The 4 Core Ethical Principles & Prompting Questions (Exam Q14-Q18)
      theFourPrinciples: [
        { 
          name: '1. Fairness', 
          def: 'No unfair discrimination against any person or group, ensuring equal opportunities in jobs and services for all (Q15 & 18).',
          promptQuestion: 'Core Prompt Question: Does the system treat everyone fairly and equally without bias?',
          examTip: 'Guarantees equal opportunity and evaluates applicants fairly regardless of gender or background.'
        },
        { 
          name: '2. Transparency', 
          def: 'Providing clear and appropriate information about how the system works, its decision process, and its limits (Q14).',
          promptQuestion: 'Core Prompt Question: Is the decision logic and system mechanism clear and accessible?',
          examTip: 'Disclosing AI usage and limits; rejecting an applicant without explanation violates Transparency & XAI (Q19).'
        },
        { 
          name: '3. Privacy Protection', 
          def: 'Proper handling of personal data and protecting it from unauthorized collection, tracking, or surveillance (Q16).',
          promptQuestion: 'Core Prompt Question: Is personal data protected from unauthorized collection and tracking?',
          examTip: 'Protects personal records; bans unauthorized tracking of people in public places.'
        },
        { 
          name: '4. Accountability', 
          def: 'Identifying the human/organizational entities responsible for the system, its decisions, and legal penalties (Q12 & 17).',
          promptQuestion: 'Core Prompt Question: Who is held legally responsible and penalized for the outcome? (Q13)',
          examTip: 'The 4th official principle is "Accountability" (NOT Responsibility); it determines who is penalized!'
        }
      ],

      // Responsibility vs Accountability vs XAI (Exam Q11, 12, 13)
      disambiguationMatrixLesson14: {
        responsibility: 'Responsibility (Q11): Defines roles and duties of parties: Developer, Operator, User (duty allocation).',
        accountability: 'Accountability (Q12 & 13): Determines WHO is legally blamed, penalized, and pays damages (Q: Who is held responsible?).',
        xai: 'Explainable AI - XAI (Q9): Explains WHY the AI reached this judgment (Q: Why was this decision made?).'
      },

      // 3 Stakeholders Roles (Exam Q11)
      stakeholderDuties: [
        { role: 'Developer', duty: 'Proper system design, programming, auditing training data for bias, and building safety & XAI mechanisms.' },
        { role: 'Company / Operator', duty: 'Proper system deployment, training staff, and maintaining continuous human oversight with appeal fallbacks.' },
        { role: 'End User', duty: 'Using the system according to guidelines, verifying outputs, and refraining from blind delegation.' }
      ],
      goldenRuleResponsibility: 'Golden Rule: No single responsibility split fits all cases; it varies by system type, usage context, and applicable laws.',

      // Responsible AI Concept (Exam Q20)
      responsibleAiDefinition: {
        concept: 'Responsible AI (Exam Q20)',
        pillars: [
          '1. Checking for bias and auditing training datasets to ensure fairness.',
          '2. Explaining decisions and understanding the reasoning factors (Explainable AI - XAI).',
          '3. Knowing who is accountable and identifying legal liability (Accountability).'
        ]
      },

      // Traps Box (Covers all 20 Exam Questions)
      traps: [
        'The official 4th ethical principle is "Accountability", NOT "Responsibility".',
        'Accountability does NOT mean "explaining how the decision was made" (that is XAI); it means "who is held responsible and penalized" (Q13).',
        'Computer processing speed, slow chips, and Moore’s Law are NEVER causes of algorithmic bias; speed only affects execution latency (Q2).',
        'Lack of data on a demographic group lowers accuracy and increases the probability of biased outputs for that group (Q3).',
        'Failing to explain why an applicant was rejected for a job violates Transparency and Explainable AI (XAI) (Q19).',
        'Responsible AI combines: Checking for bias + Explaining decisions (XAI) + Knowing who is accountable (Q20).',
        'Public facial recognition tracking individuals without consent is a direct privacy violation (Q7).'
      ]
    },

    // Master Exam Scenarios Hub
    masterScenariosLab: {
      title: 'Deconstructing Complex Essay & Multi-Step Exam Scenarios (Questions 31 to 36)',
      scenarios: [
        {
          name: 'Autonomous Car Incident (Q31)',
          formula: 'Edge Computing (immediate split-second emergency braking) + Cloud (long-term journey telemetry) + Deep Learning (pedestrian detection via cameras, Radar, and LiDAR) + XAI (debugging crash causes) + Privacy (banning unauthorized passenger tracking) + Legal Accountability (rests on manufacturer and safety driver, not the software).'
        },
        {
          name: 'Hospital Diagnostic AI (Q32)',
          formula: 'Deep Learning (X-ray analysis) + Rare Disease Data Scarcity (lower training accuracy) + Probabilistic Output (inference is not absolute certainty) + Human-in-the-Loop mandate (doctor makes final call) + Patient Record Encryption (Privacy Protection) + XAI (justifying diagnostic rationale to build clinical trust).'
        },
        {
          name: 'Automated Hiring System (Q33)',
          formula: 'Historical Training Data Skew (reflecting past workforce biases against minorities) + Proxy Variables (filtering by postal code or school prestige) + General Transparency is insufficient without Explainability (XAI) + Legal Accountability (borne by company leadership and developers).'
        },
        {
          name: 'Smart School & Proctoring (Q34)',
          formula: 'Cloud Computing (hosting curriculum and student profiles) + Recommender System (customizing remedial lessons from past history) + Generative AI (generating study summaries with hallucination risk requiring student critique) + Facial Recognition (admissible for real-time attendance, strictly illegal to track or sell student biometrics).'
        }
      ]
    }
  }
};
