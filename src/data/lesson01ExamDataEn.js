/**
 * Official Lesson 1-1 Exam Questions Bank (English)
 * Curriculum: Grade 11 - Computer Science & AI (Term 1)
 * Lesson: 1-1 Evolution of Information Technology & Social Transformation
 */

export const lesson01ExamDataEn = {
  id: 'lesson-1-1-exam-en',
  lessonId: '1-1',
  title: 'Comprehensive Questions Bank: Evolution of IT & Social Transformation',
  curriculumInfo: {
    country: 'Arab Republic of Egypt - Ministry of Education & Technical Education',
    directorate: 'Dakahlia Directorate of Education - Education Development Ambassadors',
    grade: 'Grade 11 - Egyptian Baccalaureate',
    subject: 'Programming & Artificial Intelligence',
    term: 'First Term',
    supervision: 'Supervised by General Inspector: Mr. Mahdy El-Saeed | Prepared by: Mrs. Seham Fayez'
  },
  totalQuestions: 28,
  autoGradedPoints: 22,
  manualGradedPoints: 18,
  totalPoints: 40,

  // Section A: Multiple Choice Questions (8 questions)
  sectionA: {
    id: 'section_a',
    title: 'A. Multiple Choice Questions',
    badge: 'Multiple Choice',
    instruction: 'Select the single best answer from the four alternatives provided:',
    pointsPerQuestion: 1,
    questions: [
      {
        id: 'mcq_1',
        number: 1,
        question: 'Which of the following represents the correct chronological order of the stages of IT evolution?',
        options: [
          { id: 'A', text: 'Early Computers → Smartphones → Commercial Internet → Cloud Computing' },
          { id: 'B', text: 'Early Computers → Commercial Internet → Smartphones → Cloud Computing' },
          { id: 'C', text: 'Commercial Internet → Early Computers → Cloud Computing → Smartphones' },
          { id: 'D', text: 'Smartphones → Commercial Internet → Early Computers → Cloud Computing' }
        ],
        correctAnswer: 'B',
        explanation: 'The historical sequence started with mainframe computers (1940s-1980s), followed by commercial internet and the Web in the 1990s, smartphones (2007), and then pervasive cloud computing.'
      },
      {
        id: 'mcq_2',
        number: 2,
        question: 'Early electronic computers such as (ENIAC) that relied on vacuum tubes emerged during:',
        options: [
          { id: 'A', text: '1970s–1980s' },
          { id: 'B', text: '1940s–1960s' },
          { id: 'C', text: '1990s' },
          { id: 'D', text: 'First decade of the 2000s' }
        ],
        correctAnswer: 'B',
        explanation: 'ENIAC and first-generation mainframes appeared in the mid-1940s and continued through the 1960s, relying completely on vacuum tubes prior to transistors.'
      },
      {
        id: 'mcq_3',
        number: 3,
        question: 'The widespread adoption of Personal Computers (PCs) by individuals began during:',
        options: [
          { id: 'A', text: '1940s–1960s' },
          { id: 'B', text: '1970s–1980s' },
          { id: 'C', text: '1990s' },
          { id: 'D', text: 'Second decade of the 2000s' }
        ],
        correctAnswer: 'B',
        explanation: 'The 1970s and 1980s marked the personal computing revolution, bringing computers from corporate glass rooms to homes and desks via Apple II, Commodore, and IBM PC.'
      },
      {
        id: 'mcq_4',
        number: 4,
        question: 'The 1990s witnessed a watershed technological event represented by:',
        options: [
          { id: 'A', text: 'Proliferation of Cloud Computing' },
          { id: 'B', text: 'Commercialization of the Internet and appearance of the Web' },
          { id: 'C', text: 'Launch of modern smartphones like iPhone' },
          { id: 'D', text: 'Invention of vacuum tubes' }
        ],
        correctAnswer: 'B',
        explanation: 'In 1991, commercial restrictions were lifted and Tim Berners-Lee unveiled the World Wide Web, transforming the internet into a global platform for commerce and communication.'
      },
      {
        id: 'mcq_5',
        number: 5,
        question: 'Which of the following is an engineering and physical challenge that slows down Moore’s Law during miniaturization?',
        options: [
          { id: 'A', text: 'Increased leakage currents and quantum tunneling effects' },
          { id: 'B', text: 'Sluggish wired internet bandwidth' },
          { id: 'C', text: 'Decline in the absolute number of transistors' },
          { id: 'D', text: 'Elimination of the need for parallel processing' }
        ],
        correctAnswer: 'A',
        explanation: 'When transistor gates reach a few nanometers, electrons bypass insulating barriers via quantum tunneling, causing massive thermal dissipation and electrical leakage.'
      },
      {
        id: 'mcq_6',
        number: 6,
        question: 'The technology that allows processing data instantly on the device itself instead of sending it to the cloud is called:',
        options: [
          { id: 'A', text: 'Cloud Computing' },
          { id: 'B', text: 'Edge Computing' },
          { id: 'C', text: 'Quantum Computing' },
          { id: 'D', text: 'E-commerce' }
        ],
        correctAnswer: 'B',
        explanation: 'Edge computing processes data locally at the periphery of the network (e.g., cars, smart cameras, IoT sensors) to eliminate transmission latency and ensure offline resilience.'
      },
      {
        id: 'mcq_7',
        number: 7,
        question: 'The technology that superimposes digital elements or information over a real-world view is known as:',
        options: [
          { id: 'A', text: 'Virtual Reality (VR)' },
          { id: 'B', text: 'Augmented Reality (AR)' },
          { id: 'C', text: 'Edge Computing' },
          { id: 'D', text: 'Autonomous Driving' }
        ],
        correctAnswer: 'B',
        explanation: 'Augmented Reality (AR) overlays interactive computer-generated imagery onto the live physical world, unlike VR which completely occludes reality.'
      },
      {
        id: 'mcq_8',
        number: 8,
        question: 'The fundamental unit for transmitting and processing data in Quantum Computing based on superposition is:',
        options: [
          { id: 'A', text: 'Classical Bit' },
          { id: 'B', text: 'Transistor' },
          { id: 'C', text: 'Qubit' },
          { id: 'D', text: 'Vacuum Tube' }
        ],
        correctAnswer: 'C',
        explanation: 'A Qubit (Quantum Bit) utilizes quantum superposition, allowing it to represent 0, 1, or both states simultaneously, unlocking exponential computational density.'
      }
    ]
  },

  // Section B: Fill in the Blanks (6 questions)
  sectionB: {
    id: 'section_b',
    title: 'B. Fill in the Blanks',
    badge: 'Fill in the Blanks',
    instruction: 'Type the appropriate term or concept into the designated blank field:',
    pointsPerQuestion: 1,
    questions: [
      {
        id: 'fill_1',
        number: 1,
        question: 'The empirical observation stating that "the number of transistors doubles approximately every two years" is called [.............].',
        blankLabel: 'Observation Name:',
        placeholder: 'Enter law or concept name...',
        acceptedAnswers: ["moore's law", 'moores law', 'moore law', 'gordon moore law', 'قانون مور'],
        displayAnswer: "Moore's Law",
        explanation: 'Formulated by Intel co-founder Gordon Moore in 1965, this empirical roadmap paced the semiconductor industry for more than fifty years.'
      },
      {
        id: 'fill_2',
        number: 2,
        question: 'Buying and selling goods and services over the Internet is known as [.............].',
        blankLabel: 'Economic Concept:',
        placeholder: 'Enter concept...',
        acceptedAnswers: ['e-commerce', 'ecommerce', 'electronic commerce', 'التجارة الإلكترونية'],
        displayAnswer: 'E-commerce',
        explanation: 'E-commerce created global 24/7 digital marketplaces and eliminated traditional geographical barriers between vendors and consumers.'
      },
      {
        id: 'fill_3',
        number: 3,
        question: 'The work pattern where an employee performs tasks from home or a remote location is called [.............].',
        blankLabel: 'Work Pattern:',
        placeholder: 'Enter work pattern...',
        acceptedAnswers: ['remote work', 'telecommuting', 'work from home', 'telework', 'العمل عن بعد'],
        displayAnswer: 'Remote Work / Telecommuting',
        explanation: 'Remote work became viable through high-speed broadband, collaboration tools, and cloud services, reducing commute overhead.'
      },
      {
        id: 'fill_4',
        number: 4,
        question: 'Making payments electronically without physical paper currency is known as [.............].',
        blankLabel: 'Payment System:',
        placeholder: 'Enter payment mode...',
        acceptedAnswers: ['cashless payment', 'cashless', 'digital payment', 'electronic payment', 'الدفع غير النقدي'],
        displayAnswer: 'Cashless / Digital Payment',
        explanation: 'Cashless systems rely on debit/credit cards, mobile wallets, and instant payment apps, accelerating financial velocity.'
      },
      {
        id: 'fill_5',
        number: 5,
        question: 'Placing the user inside a completely immersive digital virtual environment is called [.............].',
        blankLabel: 'Technology:',
        placeholder: 'Enter technology...',
        acceptedAnswers: ['virtual reality', 'vr', 'الواقع الافتراضي'],
        displayAnswer: 'Virtual Reality (VR)',
        explanation: 'Virtual Reality uses sensory headsets to isolate user perception and immerse them inside a 360-degree computer-generated environment.'
      },
      {
        id: 'fill_6',
        number: 6,
        question: 'The proliferation of Cloud Computing led to delivering IT resources in the form of [.............].',
        blankLabel: 'Delivery Form:',
        placeholder: 'Enter resource model...',
        acceptedAnswers: ['services', 'service', 'it as a service', 'cloud services', 'خدمات'],
        displayAnswer: 'Services (IT as a Service)',
        explanation: 'Enterprises transitioned from buying expensive on-premise hardware to leasing infrastructure and software on-demand as a flexible utility.'
      }
    ]
  },

  // Section C: Scientific Terms (4 questions)
  sectionC: {
    id: 'section_c',
    title: 'C. Identify the Scientific Term',
    badge: 'Scientific Term',
    instruction: 'Provide the exact technical or scientific term corresponding to each statement:',
    pointsPerQuestion: 1,
    questions: [
      {
        id: 'term_1',
        number: 1,
        question: 'Online platforms that allow users to connect, publish content, and share information rapidly.',
        placeholder: 'Type the scientific term...',
        acceptedAnswers: ['social media', 'social networks', 'social networking services', 'sns', 'شبكات التواصل الاجتماعي'],
        displayAnswer: 'Social Media / Social Networks (SNS)',
        explanation: 'Platforms like X, Instagram, and Facebook revolutionized information dissemination, public debate, and community interactions.'
      },
      {
        id: 'term_2',
        number: 2,
        question: 'A technology utilizing AI to assist in vehicle navigation using sensors, radars, and cameras.',
        placeholder: 'Type the scientific term...',
        acceptedAnswers: ['autonomous driving', 'self-driving cars', 'autonomous vehicles', 'القيادة الذاتية'],
        displayAnswer: 'Autonomous Driving / Self-Driving Vehicles',
        explanation: 'Self-driving vehicles synthesize computer vision, deep neural networks, and edge sensor fusion to navigate without human intervention.'
      },
      {
        id: 'term_3',
        number: 3,
        question: 'Processing data immediately on the device itself without waiting to send it to the cloud to reduce latency.',
        placeholder: 'Type the scientific term...',
        acceptedAnswers: ['edge computing', 'edge processing', 'الحوسبة الطرفية'],
        displayAnswer: 'Edge Computing',
        explanation: 'Edge computing decentralizes processing power, locating compute near data creators to guarantee real-time response.'
      },
      {
        id: 'term_4',
        number: 4,
        question: 'A computing paradigm that utilizes quantum mechanical properties to process data and solve complex problems.',
        placeholder: 'Type the scientific term...',
        acceptedAnswers: ['quantum computing', 'quantum computation', 'الحوسبة الكمومية'],
        displayAnswer: 'Quantum Computing',
        explanation: 'Quantum computers leverage superposition and entanglement to execute non-polynomial calculations intractable for classical computers.'
      }
    ]
  },

  // Section D: True or False with Correction (4 questions)
  sectionD: {
    id: 'section_d',
    title: 'D. True or False with Correction',
    badge: 'True or False',
    instruction: 'Indicate whether each statement is True or False, and examine the official correction:',
    pointsPerQuestion: 1,
    questions: [
      {
        id: 'tf_1',
        number: 1,
        question: 'Moore’s Law is an immutable physical law of nature that remains constant over time.',
        correctValue: false,
        correction: 'Moore’s Law is not an immutable law of physics; it is an empirical observation and engineering pacing metric formulated by Gordon Moore.',
        explanation: 'Laws of nature (such as gravitation) are universal constants. Moore’s law was an industrial roadmap sustained by engineering ingenuity.'
      },
      {
        id: 'tf_2',
        number: 2,
        question: 'E-commerce refers to purchasing goods from physical brick-and-mortar stores using cash.',
        correctValue: false,
        correction: 'E-commerce refers to commercial transactions conducted over the Internet and digital platforms without physical cash.',
        explanation: 'Cash transactions in physical shops represent traditional brick-and-mortar commerce, whereas e-commerce operates entirely in the digital domain.'
      },
      {
        id: 'tf_3',
        number: 3,
        question: 'Quantum computing speeds up every single type of ordinary computation without exception.',
        correctValue: false,
        correction: 'Quantum computing does not accelerate simple everyday tasks (like web browsing or word processing); it offers exponential speedups for specific complex problems.',
        explanation: 'Quantum processors are specialized accelerators for problems like molecular chemistry simulation, optimization, and cryptographic factoring.'
      },
      {
        id: 'tf_4',
        number: 4,
        question: 'Social networks are highly effective in rapidly disseminating information among users.',
        correctValue: true,
        correction: 'The statement is entirely True.',
        explanation: 'Social networks are characterized by viral multi-directional dissemination and near-instantaneous global reach.'
      }
    ]
  },

  // Section E: Reasoning & Comparisons (3 questions)
  sectionE: {
    id: 'section_e',
    title: 'E. Reasoning & Comparisons',
    badge: 'Reasoning & Comparison',
    instruction: 'Answer the following analytical questions (Tap the [!] icon to view the Mentor’s simplified hint):',
    pointsPerQuestion: 4,
    questions: [
      {
        id: 'essay_1',
        number: 1,
        type: 'ESSAY',
        question: 'Explain why Edge Computing is indispensable for autonomous (self-driving) vehicles.',
        simplifiedHint: 'Think about this: If a fast car suddenly detects a pedestrian, can it wait to send a photo to an overseas cloud server and wait for a response? Absolutely not! The onboard camera and chip must slam the brakes in a millisecond, even if the internet is totally down!',
        modelAnswer: '1. Latency Reduction: Edge computing reduces decision latency to single-digit milliseconds, enabling immediate safety reactions (like emergency braking).\n2. Critical Offline Reliability: It ensures uninterrupted safety systems even when cell tower coverage drops or during cloud service disruptions.',
        rubricKeywords: ['latency', 'delay', 'millisecond', 'emergency braking', 'offline', 'reliability', 'safety', 'internet outage'],
        explanation: 'Life-critical applications cannot tolerate network jitter or latency; onboard processing is a non-negotiable safety requirement.'
      },
      {
        id: 'essay_2',
        number: 2,
        type: 'ESSAY',
        question: 'Explain why modern processor performance improvements rely on Multi-Core architectures rather than just shrinking transistors.',
        simplifiedHint: 'Why do Intel and Apple make chips with 8 or 16 cores instead of just making transistors tinier? Because transistors reached atomic sizes! Electricity leaks and heat sky-rockets. The smart solution: instead of running one worker at insane speed, hire 8 workers in parallel (multi-core)!',
        modelAnswer: '1. Physical Atomic Limits: Transistor gates approached the atomic nanoscale, inducing quantum tunneling, power leakage, and prohibitive thermal heat dissipation.\n2. Parallel Computing Paradigm: Distributing computational load across multiple parallel cores provides sustainable throughput gains within a manageable power envelope.',
        rubricKeywords: ['atomic limits', 'quantum tunneling', 'heat', 'leakage', 'parallel processing', 'multi-core', 'power envelope'],
        explanation: 'Silicon hit the thermal power wall; architectural parallelism replaced pure frequency scaling.'
      },
      {
        id: 'essay_3',
        number: 3,
        type: 'ESSAY',
        question: 'Compare Augmented Reality (AR) and Virtual Reality (VR).',
        simplifiedHint: 'In simple words: AR overlays digital objects onto your real room (you see your desk with a 3D robot on it). VR isolates you completely (you wear an opaque headset and see only a virtual world, separated from your room)!',
        modelAnswer: '• Augmented Reality (AR): Retains the real-world view while overlaying interactive digital 3D models or textual telemetry on top of physical surroundings.\n• Virtual Reality (VR): Completely occludes real physical sensory input, immersing the user in an artificial, computer-generated 3D simulation via closed head-mounted displays.',
        rubricKeywords: ['real world', 'overlay', 'virtual environment', 'immersive', 'headset', 'isolation'],
        explanation: 'AR supplements our physical environment; VR fabricates an alternative reality.'
      }
    ]
  },

  // Section F: Applications, Scenarios & 6-Mark Comprehensive Question
  sectionF: {
    id: 'section_f',
    title: 'F. Scenarios, Applications & 6-Mark Question',
    badge: 'Scenarios & Applications',
    instruction: 'Carefully analyze the following real-world scenarios as a computing specialist:',
    pointsPerQuestion: 6,
    questions: [
      {
        id: 'app_1',
        number: 1,
        type: 'ESSAY',
        question: 'What happens if internet connectivity completely breaks down in a purely cashless society?',
        simplifiedHint: 'Imagine an entire city where no one carries paper cash, paying only via phones and cards. Suddenly the country’s internet cable is severed! What happens at grocery stores, pharmacies, and transit? How do we build backup safety?',
        modelAnswer: '1. Ramifications: Severe paralysis of daily trade, inability to buy essentials (groceries, medicine, transport), and broad economic gridlock.\n2. Engineering Safeguard: Implementing offline edge-based payment fallbacks using local cryptographic stores and batch synchronization once network connectivity restores.',
        rubricKeywords: ['paralysis', 'trade gridlock', 'offline payments', 'resilience', 'essentials', 'emergency protocol'],
        explanation: 'Societies embracing full digital transactions must build resilient fault-tolerant edge protocols for emergency continuity.'
      },
      {
        id: 'app_2',
        number: 2,
        type: 'ESSAY',
        question: 'Scenario: A remote rural village is connected to high-speed internet and cashless services. Anticipate two positive impacts and one major challenge.',
        simplifiedHint: 'An isolated village suddenly gets fiber internet and e-wallets. Name two big benefits for farmers and students, and one major obstacle (like digital literacy or scams) they will face.',
        modelAnswer: '• Two Positive Impacts:\n1. Direct Market Access: Local farmers and artisans can sell produce directly via e-commerce without middlemen, receiving instant payments.\n2. Remote Opportunities: Youth can access online education, university lectures, and remote freelancing jobs without emigrating.\n• One Challenge: Digital illiteracy among senior citizens and heightened vulnerability to cyber-fraud and financial scams.',
        rubricKeywords: ['e-commerce', 'middlemen', 'remote work', 'freelancing', 'digital literacy', 'fraud', 'infrastructure'],
        explanation: 'Digital access democratizes economic opportunity but requires proactive digital literacy campaigns to protect vulnerable populations.'
      },
      {
        id: 'exam_q3',
        number: 3,
        type: 'ESSAY',
        question: 'Major Exam Question (6 Marks): Analyze how Cloud Computing revolutionized IT usage (Refer to: IT as a Service, Big Data, and AI).',
        simplifiedHint: 'This question carries 6 marks! Focus on 3 pillars: How the cloud let startups lease giant servers rather than buy them (IT as a service), how it stores and computes massive data streams (Big Data), and how it powers giant AI model training (GPUs/APIs).',
        modelAnswer: '1. IT as a Service: Replaced heavy capital expenditure (buying servers) with flexible operational expenses; businesses rent compute, storage, and software on-demand via pay-as-you-go billing.\n2. Big Data: Provided virtually limitless distributed storage and elastic compute clusters capable of ingesting and analyzing petabytes of streaming data in real-time.\n3. Artificial Intelligence: Democratized advanced AI by providing massive GPU/TPU infrastructure required to train and deploy deep foundation models as ready-made APIs.',
        rubricKeywords: ['it as a service', 'capital expenditure', 'operational expense', 'on-demand', 'big data', 'unlimited storage', 'ai', 'gpus', 'deep learning'],
        explanation: 'Cloud computing is the foundational substrate empowering modern Big Data ingestion and generative AI scalability.'
      }
    ]
  }
};
