/**
 * Lesson 1-3 Educational Data (Curriculum Source of Truth - English)
 * Title: Artificial Intelligence in Daily Life and Industry
 * Unit: Unit 1: Computing & AI Fundamentals
 * Grade: Grade 11 - Egyptian Thanawya (Term 1)
 * Source: Egyptian Ministry of Education Textbook & Eng. Mohamed Shamel Lecture Materials
 * Pacing: 3 Comprehensive Interactive Stations + Dual QR Exam Portal
 */

export const lesson03DataEn = {
  id: 'term1-ch1-l03',
  term: 1,
  chapterNumber: 1,
  lessonNumber: '1-3',
  title: 'AI in Daily Life and Industry',
  unitTitle: 'Unit 1: Computing & AI Fundamentals',
  estimatedDurationMinutes: 60,
  pages: [
    {
      id: 'page-01',
      pageNumber: '01',
      totalPages: '03',
      type: 'DAILY_AI_SERVICES',
      badgeText: 'Part 1: Real-Life Services',
      unitTitle: 'Unit 1: Computing & AI Fundamentals',
      lessonTitle: 'Lesson 1-3: AI in Daily Life & Industry',
      pageTag: 'CH-01 // PAGE 01',
      content: {
        badge: 'Lecture 3 — Part 1',
        title: 'How Do We Use AI in Our Everyday Lives?',
        subtitle: 'Interactive exploration of the four foundational daily services, AI roles, and architectural model breakdown (AI / ML / DL / GenAI)',
        dailyHumorNote: 'Aside from using it to solve last year’s homework and quizzes, of course! 😉 Our goal here is to master the engineering engine behind every service so you can build your own.',
        services: [
          {
            id: 'srv-recommendation',
            num: '01',
            name: 'Recommendation Systems',
            nameEn: 'Recommendation Systems',
            icon: 'recommend',
            modelTier: 'ML + DL',
            modelTierBadge: 'Machine Learning + Deep Learning',
            modelTierDesc: 'Collaborative filtering algorithms analyzing millions of users, blended with deep neural networks (DL) to decipher real-time user context and preferences.',
            roleOfAi: 'Predicting individual preferences from historical behavioral data and delivering personalized recommendations at the optimal moment.',
            examples: ['YouTube', 'Amazon', 'Spotify', 'Netflix'],
            plainExplanation: 'When you browse Facebook or TikTok watching football clips, AI tracks your watch duration, recognizes your passion for football, and continuously feeds you relevant matches and highlights without asking!',
            engineerTip: 'The system does not read your mind; it measures dwell time (in milliseconds), completion rates, and positive engagement metrics per topic.'
          },
          {
            id: 'srv-voice-assistants',
            num: '02',
            name: 'Voice Assistants',
            nameEn: 'Voice Assistants',
            icon: 'mic',
            modelTier: 'Hybrid: DL + NLP + GenAI',
            modelTierBadge: 'Hybrid: Deep Speech + NLP + GenAI',
            modelTierDesc: 'Processing acoustic signals with deep speech networks (Speech-to-Text), extracting communicative intents via NLP, and triggering APIs connected to generative models.',
            roleOfAi: 'Accurate speech recognition, understanding commands across diverse accents, and executing automated actions seamlessly.',
            examples: ['Siri', 'Google Assistant', 'Amazon Alexa'],
            plainExplanation: 'Controlling your phone or smart home with your voice: you say "Call Dad," and it recognizes your vocal timbre, extracts intent, finds your contact, and dials immediately!',
            engineerTip: 'The core engineering challenge is ambient noise suppression, multi-accent dialect handling, and ultra-low latency response times.'
          },
          {
            id: 'srv-machine-translation',
            num: '03',
            name: 'Machine Translation',
            nameEn: 'Machine Translation (NMT)',
            icon: 'translate',
            modelTier: 'DL / Transformers',
            modelTierBadge: 'Deep Learning / Neural MT (NMT)',
            modelTierDesc: 'Transformer architectures capturing full sentence context, semantics, and rhetoric rather than obsolete word-by-word dictionary lookups.',
            roleOfAi: 'Translating written text and live speech across hundreds of languages instantly while preserving context and nuanced meaning.',
            examples: ['DeepL', 'Google Translate'],
            plainExplanation: 'Pointing your smartphone camera at a foreign street sign or pasting an article into Google Translate, and getting fluent Arabic in seconds that actually makes sense!',
            engineerTip: 'Neural translation masters idioms and figures of speech because it is trained on billions of bilingual parallel corpora.'
          },
          {
            id: 'srv-face-recognition',
            num: '04',
            name: 'Facial Recognition',
            nameEn: 'Facial Recognition',
            icon: 'face',
            modelTier: 'DL / Computer Vision (CNN)',
            modelTierBadge: 'Deep Learning / Vision CNN',
            modelTierDesc: 'Convolutional neural networks (CNNs) extracting geometric biometric landmarks (inter-pupillary distance, jawline contours) and encoding them into unique digital vectors.',
            roleOfAi: 'Detecting faces in photos and videos, matching biometric identity vectors automatically with high precision.',
            examples: ['Smartphone Unlocking (Face ID)', 'Airport Smart Border Gates', 'Automated Photo Album Organization'],
            plainExplanation: 'Lifting your phone to look at it, and the screen unlocks instantaneously, or opening your photo gallery to find pictures automatically grouped by friend!',
            engineerTip: 'The system does not match raw pixels; it computes 3D geometric landmark vectors resilient to glasses, hairstyles, and ambient dim lighting.'
          }
        ],
        interactivePractice: {
          question: 'If Spotify recommends a brand-new track that just dropped and you love it instantly, which AI model family enabled this?',
          options: [
            { text: 'Legacy symbolic rule-based system (if-else chains)', isCorrect: false },
            { text: 'A hybrid recommendation engine (ML + DL) matching behavioral patterns across millions of similar listeners', isCorrect: true },
            { text: 'Computer vision landmark detection', isCorrect: false }
          ],
          feedbackCorrect: 'Spot on! Recommendation systems combine machine learning collaborative filtering with deep learning to predict affinities.',
          feedbackIncorrect: 'Try again! Recommendation systems rely heavily on Machine Learning and Deep Learning (ML + DL).'
        }
      }
    },
    {
      id: 'page-02',
      pageNumber: '02',
      totalPages: '03',
      type: 'INDUSTRIAL_AI_SECTORS',
      badgeText: 'Part 2: Industrial AI & Automation',
      unitTitle: 'Unit 1: Computing & AI Fundamentals',
      lessonTitle: 'Lesson 1-3: AI in Daily Life & Industry',
      pageTag: 'CH-01 // PAGE 02',
      content: {
        badge: 'Lecture 3 — Part 2',
        title: 'How Do We Deploy AI in Industry and Production?',
        subtitle: 'Deconstructing the four industrial pillars and mastering Automation and Predictive Maintenance principles',
        coreConcepts: [
          {
            term: 'Automation (الأتمتة)',
            meaning: 'Originates from the concept of performing tasks and workflows automatically through electronic and algorithmic systems with zero direct human intervention.',
            realLifePlain: 'Decades ago, factory workers inspected each can passing on a conveyor manually. Today, high-speed cameras and sensors inspect thousands of units per minute autonomously.'
          },
          {
            term: 'Predictive Maintenance (الصيانة التنبؤية)',
            meaning: 'Deploying machine learning models to analyze vibration, acoustic, and thermal sensor readings to anticipate mechanical breakdown prior to occurrence.',
            realLifePlain: 'AI notifies the maintenance chief: "Motor #4 gear will fail in 10 days." The team replaces it during planned downtime, preventing catastrophic plant halts and multi-million dollar losses.'
          }
        ],
        sectors: [
          {
            id: 'sec-healthcare',
            num: '01',
            name: 'Healthcare & Medicine',
            nameEn: 'Healthcare',
            icon: 'favorite',
            modelTier: 'DL / Medical Vision (CNN)',
            modelTierBadge: 'Deep Learning / Medical Vision',
            modelTierDesc: 'Neural networks trained on millions of micro-radiology scans detecting subtle lesions and micro-tumors beyond human vision, alongside drug molecule simulation engines.',
            roleOfAi: 'Imaging diagnosis (detecting disease signatures from X-Rays, CT scans, and MRIs), and accelerating therapeutic drug discovery.',
            examples: ['X-Ray & CT scan pathology detection', 'Early micro-tumor classification', 'Protein folding & drug target prediction'],
            plainExplanation: 'Feeding an X-ray into the system highlights early anomalies for the physician; however, remember: the human doctor always validates and bears final medical responsibility!',
            humanInTheLoopRule: 'Human-in-the-Loop Mandate: AI is a diagnostic support tool, never a legal or clinical substitute for a licensed physician.'
          },
          {
            id: 'sec-agriculture',
            num: '02',
            name: 'Smart Agriculture',
            nameEn: 'Smart Agriculture',
            icon: 'eco',
            modelTier: 'ML + DL Sensors',
            modelTierBadge: 'Machine Learning + Deep Vision',
            modelTierDesc: 'Combining ML models for weather and soil humidity time-series with computer vision (DL) deployed on agricultural drones to scan foliage and roots.',
            roleOfAi: 'Predicting optimal harvest windows, early detection of crop pathogens and soil deficiencies, and precision irrigation management.',
            examples: ['Precision crop spraying drones', 'Autonomous soil moisture telemetry', 'Foliar disease diagnosis mobile apps'],
            plainExplanation: 'Predicting the exact day to pick fruit before over-ripening, or snapping a phone photo of a plant leaf to identify fungal infections before spreading across the orchard.',
            humanInTheLoopRule: 'The agronomist makes final treatment decisions based on early telemetry warnings.'
          },
          {
            id: 'sec-manufacturing',
            num: '03',
            name: 'Manufacturing & Industry',
            nameEn: 'Manufacturing & Industry',
            icon: 'precision_manufacturing',
            modelTier: 'DL (Vision) + ML (Time-Series)',
            modelTierBadge: 'Deep Quality Vision + Predictive ML',
            modelTierDesc: 'High-speed line cameras checking physical surface defects (DL) coupled with time-series machine learning assessing telemetry from factory IoT sensors.',
            roleOfAi: 'Automating high-speed line quality inspection and implementing predictive maintenance across machinery and assembly robots.',
            examples: ['Automated silicon wafer and auto part flaw detection', 'Smart welding robotic cells', 'Motor bearing wear forecasting'],
            plainExplanation: 'Automated inspection scans thousands of parts per minute and ejects defective ones automatically, while predictive maintenance eliminates unexpected plant blackouts.',
            humanInTheLoopRule: 'Factory teams receive prioritized schedules and supervise maintenance during planned shifts.'
          },
          {
            id: 'sec-logistics',
            num: '04',
            name: 'Logistics & Supply Chain',
            nameEn: 'Logistics & Supply Chain',
            icon: 'local_shipping',
            modelTier: 'AI Optimization + ML Traffic',
            modelTierBadge: 'Graph Optimization + Traffic ML',
            modelTierDesc: 'Dynamic graph path optimization algorithms coupled with predictive ML models forecasting congestion, weather events, and delivery schedules.',
            roleOfAi: 'Optimizing shipping routes to minimize transit latency and fuel consumption, while managing robotic fulfillment center inventory.',
            examples: ['Dynamic courier route dispatchers', 'Global fleet container tracking', 'Amazon warehouse autonomous package sorters'],
            plainExplanation: 'When a delivery driver picks up an order, AI continuously recalculates the fastest congestion-free path so meals arrive hot and packages on schedule.',
            humanInTheLoopRule: 'Saves millions of transit kilometers, fuel liters, and carbon emissions every single year.'
          }
        ]
      }
    },
    {
      id: 'page-03',
      pageNumber: '03',
      totalPages: '03',
      type: 'AI_STRENGTHS_AND_RISKS',
      badgeText: 'Part 3: Strengths, Cautions & Exam Portal',
      unitTitle: 'Unit 1: Computing & AI Fundamentals',
      lessonTitle: 'Lesson 1-3: AI in Daily Life & Industry',
      pageTag: 'CH-01 // PAGE 03',
      content: {
        badge: 'Lecture 3 — Part 3',
        title: 'Engineer’s Mindset: What Does AI Excel At, and How Must You Exercise Caution?',
        subtitle: 'Comprehensive analytical matrix: The 3 core pillars of AI excellence versus the 7 critical hazards + The Black Box Problem',
        coreSummaryCard: {
          highlight: 'Crucial Takeaway from Eng. Mohamed Shamel:',
          quote: 'Artificial Intelligence is a formidable tool delivering astonishing capabilities; however, its safe and responsible deployment demands perpetual awareness, technical comprehension, and vigilance.'
        },
        strengthsTitle: 'Where AI Excels (The Three Core Superpowers)',
        strengths: [
          {
            num: '01',
            icon: 'search_check',
            title: 'Discovering & Classifying Patterns in Complex Data',
            titleEn: 'Pattern Discovery & Classification',
            desc: 'AI detects subtle, recurring patterns across massive unstructured datasets and classifies them accurately.',
            example: 'Trained on thousands of cat and dog photos 🐱🐶, it learns distinguishing visual signatures and classifies a brand-new image instantly.'
          },
          {
            num: '02',
            icon: 'draw',
            title: 'Recognizing Multi-modal Inputs and Synthesizing Content',
            titleEn: 'Multimodal Recognition & Content Generation',
            desc: 'It perceives visual, acoustic, and textual inputs with high fidelity while generating original synthetic designs, audio, and prose.',
            example: 'Recognizing your face to unlock a phone, transcribing your unique voice, or generating custom illustrations and code upon request.'
          },
          {
            num: '03',
            icon: 'query_stats',
            title: 'Probabilistic Inference and Data-Driven Forecasting',
            titleEn: 'Probabilistic Inference & Predictive Analytics',
            desc: 'Leverages historical and real-time telemetry to draw probabilistic inferences and forecast future outcomes.',
            example: 'Forecasting startup viability, anticipating stock market volatility, or predicting consumer demand cycles.'
          }
        ],
        risksTitle: 'How to Exercise Caution (The Seven Critical Hazards)',
        risks: [
          {
            num: '01',
            icon: 'balance',
            title: 'Ethical Bias and Discrimination (التحيز الأخلاقي والتمييز)',
            desc: 'If training datasets contain systemic bias against a group or culture, the model will output discriminatory and unjust decisions.'
          },
          {
            num: '02',
            icon: 'lock',
            title: 'Privacy and Sensitive Data Exposure (المعلومات الشخصية والبيانات الحساسة)',
            desc: 'Extreme caution is required when sharing sensitive personal data; models and platforms may log and monetize private interactions.'
          },
          {
            num: '03',
            icon: 'help',
            title: 'Accountability in High-Impact Decisions (المسؤولية والقرارات المصيرية)',
            desc: 'When delegating critical medical, judicial, or safety decisions to AI, who bears legal liability if catastrophic error occurs?'
          },
          {
            num: '04',
            icon: 'bar_chart',
            title: 'Data Quality & Imbalance Flaws (نقص وتحيز بيانات التدريب)',
            desc: 'Incomplete or unrepresentative datasets inevitably lead to flawed inferences. A model cannot know what was omitted from its corpus.'
          },
          {
            num: '05',
            icon: 'psychology_alt',
            title: 'Plausible Hallucinations (توليد معلومات كاذبة مقنعة — الهلوسة)',
            desc: 'AI can generate entirely fabricated facts with overwhelming linguistic eloquence, deceiving non-specialist users.'
          },
          {
            num: '06',
            icon: 'copyright',
            title: 'Copyright and Intellectual Property Infringement (الملكية الفكرية)',
            desc: 'Ethical and legal disputes over corporate ingestion of protected artistic, literary, and code repositories without authorization.'
          },
          {
            num: '07',
            icon: 'inventory_2',
            title: 'Opacity & Explainability Loss — The Black Box Problem (الصندوق الأسود)',
            desc: 'The model renders a decision or classification, but inner neural computations remain untraceable and unexplainable to humans (we witness inputs and outputs, yet the decision pathway is completely opaque).'
          }
        ],
        caseStudies: [
          {
            title: 'Clinical Case: Radiology Oncology Screening',
            context: 'An AI radiology model cleared a patient with zero detected lesions. The human oncologist noticed a faint anomalous cluster, ordered a biopsy, and detected an early micro-tumor, saving the patient’s life.',
            takeaway: 'Human-in-the-Loop oversight is non-negotiable to safeguard human welfare against false negatives.'
          },
          {
            title: 'Educational Case: School Library Biometrics',
            context: 'A vendor proposed facial recognition scanners tracking student book readings and correlating them with health files.',
            takeaway: 'Strict privacy boundaries must be upheld; collecting disproportionate sensitive biometric telemetry without parental consent violates ethics.'
          }
        ],
        examPortalSection: {
          title: 'Comprehensive Digital Exam Portal (Lesson 1-3)',
          subtitle: 'Scan the QR code or click to launch the interactive, zero-typing exam with 100% automated grading and instant WhatsApp teacher reporting.',
          examHash: '#exam-1-3'
        }
      }
    }
  ]
};
