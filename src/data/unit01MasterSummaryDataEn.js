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

      // Five Eras Timeline
      eras: [
        { 
          period: '1940s - 1960s', 
          event: 'First electronic mainframes (like ENIAC) powered by Vacuum Tubes; giant machines taking up entire rooms and consuming massive power.', 
          impact: 'Used strictly for government military ballistic calculations and big scientific research; completely out of reach for regular people.' 
        },
        { 
          period: '1970s - 1980s', 
          event: 'Invention of the Transistor (1946 at Bell Labs), Integrated Circuits (ICs), and microprocessors leading to Personal Computers (PCs).', 
          impact: 'Computers exited military labs into offices and homes, sparking widespread individual computing for regular citizens and small businesses.' 
        },
        { 
          period: '1990s', 
          event: 'Commercialization of the Internet, birth of the World Wide Web (WWW), Electronic Mail (Email), and early E-commerce (Amazon 1994).', 
          impact: 'Globalization of knowledge and instant cross-border communication, transforming the computer from a math tool into a social network.' 
        },
        { 
          period: '2000s (1st Decade)', 
          event: 'Smartphone revolution (iPhone) with mobile broadband, GPS navigation, and built-in digital cameras.', 
          impact: 'Internet shifted into every user’s pocket on the move (Mobility), turning digital access into a portable 24/7 service.' 
        },
        { 
          period: '2010s & Beyond', 
          event: 'Cloud Computing, Big Data analytics, IT as a Service (ITaaS), and Generative AI foundational models (like ChatGPT).', 
          impact: 'Companies shifted from buying local servers to renting computing on-demand, enabling AI training on millions of records without local data centers.' 
        }
      ],

      // 1995 vs 2026 Comparison Table (Textbook p. 5)
      timelineHookComparison: [
        { field: 'Knowledge Search', year1995: 'Physical library visits, paper card catalogs, took days or weeks.', year2026: 'Instant AI assistants and smart search in a fraction of a second.' },
        { field: 'Money & Banking', year1995: 'Long bank lines, paper checkbooks, and cash-only payments.', year2026: 'Instant mobile payments, e-wallets, and contactless QR codes.' },
        { field: 'Communication', year1995: 'Mailed paper letters taking weeks, or coin-operated payphones.', year2026: 'Crystal-clear HD video calls, instant and free across the globe.' },
        { field: 'Travel & Mobility', year1995: 'Visiting travel agencies, folding paper maps, asking pedestrians.', year2026: 'Live GPS navigation, real-time traffic alerts, instant app bookings.' }
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

      // Official Textbook Analogy: Classical Car vs Quantum Bicycle
      quantumAnalogy: {
        title: 'Official Textbook Analogy: Classical Car vs Quantum Bicycle',
        classicalCar: 'The Car (Classical PC): Fast and perfect on open highways for everyday tasks and office software.',
        quantumBike: 'The Bicycle (Quantum Computer): Expertly maneuvers through ultra-narrow winding alleys (impossible math like cryptography and molecular modeling); does not replace the car on highways!'
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
      title: 'The Official Disambiguation Matrix (Never Confuse These Similar Concepts in the Exam!)',
      pairs: [
        {
          conceptA: 'Quality Inspection',
          roleA: 'Computer vision cameras inspect finished products on the conveyor belt to catch CURRENT defects.',
          conceptB: 'Predictive Maintenance',
          roleB: 'Vibration & thermal sensors on machinery analyze telemetry to predict FUTURE failure before breakdown.',
          examTrigger: 'Exam Trigger: Camera + finished product = Quality | Sensors + machinery + future breakdown = Predictive'
        },
        {
          conceptA: 'Transparency',
          roleA: 'Public upfront disclosure alerting users that an AI system is operating, stating its goals and general limits.',
          conceptB: 'Explainable AI (XAI)',
          roleB: 'Disclosing the specific logical weights and factors behind an individual decision (e.g. why a loan was denied).',
          examTrigger: 'Exam Trigger: Alerting user that AI is active = Transparency | Disclosing factor weights for a person = XAI'
        },
        {
          conceptA: 'Responsibility',
          roleA: 'Ethical and professional duties distributed during system development and operation (engineers build safely, operators monitor).',
          conceptB: 'Accountability',
          roleB: 'The official 4th pillar; determines who is legally answerable to pay damages and face penalties in court (strictly human).',
          examTrigger: 'Exam Trigger: Professional duties during build = Responsibility | Who is legally penalized in court = Accountability'
        },
        {
          conceptA: 'Privacy',
          roleA: 'A person’s fundamental human right to keep personal records and private life confidential without unauthorized tracking.',
          conceptB: 'Data Protection',
          roleB: 'Technical security controls implemented to safeguard that privacy (encryption, firewalls, data minimization).',
          examTrigger: 'Exam Trigger: Human right to confidentiality = Privacy | Technical encryption & access controls = Data Protection'
        },
        {
          conceptA: 'Probabilistic Inference',
          roleA: 'Statistical estimations based on historical patterns (the nature of recommenders and AI predictions).',
          conceptB: 'Deterministic (100% Guarantee)',
          roleB: 'A common false exam distractor ("100% certainty"); strictly incorrect in AI and rejected by the Ministry.',
          examTrigger: 'Exam Trigger: AI outputs are probabilistic; any exam choice claiming "100% deterministic certainty" is FALSE!'
        }
      ]
    },

    // Lesson 1-3
    lesson13: {
      code: '1-3',
      title: 'Artificial Intelligence in Daily Life & Industry',
      bookPages: 'Ministry Textbook: pp. 18 - 23',

      // Daily Services & Industrial Sectors
      dailyAndIndustryMatrix: [
        { 
          item: 'Recommender Systems', 
          domain: 'Daily Life', 
          tech: 'ML + DL',
          logic: 'Probabilistic inference based on past user behavior and similar viewer trends; NOT a 100% deterministic guarantee.',
          examTip: 'Exam Alert: Recommendations are probabilistic predictions; exam options claiming "100% guaranteed certainty" are false distractors!'
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

      // Official Algorithmic Bias Definition
      algorithmicBiasDef: 'A systematic deviation or pattern in AI outputs that leads to unfair or discriminatory outcomes against a specific group, stemming from training data, system design, or human deployment.',

      // 3 Root Causes of Bias
      biasCauses: [
        { 
          source: '1. Training Data Skew (Data Bias)', 
          subtypes: 'Data Imbalance or mirroring historical societal discrimination.',
          desc: 'Training on unbalanced samples (e.g. 85% white male face datasets), or training on 30 years of male-only managerial resumes so the AI assumes maleness is a prerequisite for hiring!',
          examKey: 'Insufficient data on protected groups or perpetuating past societal injustices.'
        },
        { 
          source: '2. Proxy Variables Flaws', 
          subtypes: 'Flaws in system input design.',
          desc: 'Removing protected attributes (gender/race) explicitly, but picking a neutral proxy variable (e.g. Zip Code, high school name, women’s sports team) that secretly correlates with the protected trait!',
          examKey: 'A neutral feature that indirectly proxies for a legally protected attribute.'
        },
        { 
          source: '3. Deployment Context Misalignment', 
          subtypes: 'Deploying the model in an incompatible environment.',
          desc: 'Using an AI grading system trained in a wealthy Western nation on rural or developing school students without local cultural calibration.',
          examKey: 'Deploying in a cultural/social context differing from the original training baseline.'
        }
      ],

      // Speed Trap Alert
      speedTrapAlert: 'Exam Alert: Computer processing speed, slow processors, or Moore’s Law are NEVER causes of algorithmic bias; speed only affects execution latency!',

      // Black Box vs XAI
      blackBoxVsXai: {
        title: 'The Black Box vs. Explainable AI (XAI)',
        blackBox: 'The Black Box: Opaque deep neural networks that output decisions without revealing internal logic, preventing doctors and judges from trusting the model.',
        xai: 'Explainable AI (XAI): Techniques that reveal the relative weight of each factor (e.g. loan rejected 70% due to debt-to-income and 30% credit score) enabling human review and appeal.',
        goldenRule: 'In life-critical decisions (medical, legal, financial), accuracy alone is NEVER enough without Explainability (XAI)!'
      },

      // 4 Ethical Principles
      theFourPrinciples: [
        { 
          name: '1. Fairness', 
          def: 'Treating all individuals and groups equitably without unfair discrimination, ensuring equal opportunities in jobs, loans, and services across all demographics.',
          examTip: 'Guarantees equal opportunity and prevents discrimination against protected classes.'
        },
        { 
          name: '2. Transparency', 
          def: 'Providing clear, accessible disclosure to users that an AI system is operating, stating its goals, mechanisms, and boundaries.',
          examTip: 'Explicitly alerting the user that they are interacting with an AI (does NOT resolve bias on its own!).'
        },
        { 
          name: '3. Privacy Protection', 
          def: 'Safeguarding personal data confidentiality, banning unauthorized tracking and mass surveillance, and enforcing encryption and explicit user consent.',
          examTip: 'Enforces individual data confidentiality, encryption, and Data Minimization.'
        },
        { 
          name: '4. Accountability', 
          def: 'Identifying the human and organizational entities responsible for the system’s decisions and harms, subjecting them to legal sanctions and compensation.',
          examTip: 'The 4th official principle is "Accountability" (NOT Responsibility); it determines who is legally punished!'
        }
      ],

      // 3 Stakeholders Duties
      stakeholderDuties: [
        { role: 'Developer', duty: 'Code quality, auditing training data for skew, and building safety mechanisms and XAI explanations.' },
        { role: 'Company / Operator', duty: 'Formulating fair usage policies, training staff, and maintaining continuous human oversight.' },
        { role: 'End User', duty: 'Verifying outputs before acting on them, and refraining from delegating critical decisions blindly.' }
      ],

      // Traps Box
      traps: [
        'The official 4th ethical pillar in the Egyptian curriculum is "Accountability", NOT "Responsibility".',
        'Accountability does NOT mean "explaining how the decision was reached" (that is XAI); it means "who faces legal liability and pays damages".',
        'Computing speed and Moore’s Law are NEVER causes of algorithmic bias; bias arises from skewed data, proxy variables, and deployment context.',
        'Cleaning training datasets alone does NOT guarantee fairness; bias can still enter through sneaky proxy variables or poor deployment.',
        'Facial recognition cameras are acceptable for real-time safety, but violate privacy if facial biometrics and movement histories are stored without consent.'
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
