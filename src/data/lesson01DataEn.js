/**
 * Lesson 1-1 Educational Data (English Edition)
 * Title: Evolution of Information Technology & Social Transformation
 * Unit: Unit 1: Computing & AI Fundamentals
 *
 * Fully mirrors the 1:1 schema structure of lesson01Data.js across all 9 pages (00 to 08).
 */

export const lesson01DataEn = {
  id: 'term1-ch1-l01-en',
  term: 1,
  chapterNumber: 1,
  lessonNumber: 1,
  title: 'Evolution of IT & Social Transformation',
  unitTitle: 'Unit 1: Computing & AI Fundamentals',
  estimatedDurationMinutes: 90,
  pages: [
    {
      id: 'page-00',
      pageNumber: '00',
      type: 'LESSON_OVERVIEW',
      badgeText: 'Learning Journey Map & Compass',
      unitTitle: 'Unit 1: Computing & AI Fundamentals',
      lessonTitle: 'Lesson 1-1: Evolution of IT & Social Transformation',
      content: {
        badge: 'Learning Journey Map & Compass',
        lessonCode: '1-1',
        title: 'Evolution of Information Technology & Social Transformation',
        unitTitle: 'Unit 1: Computing & AI Fundamentals',
        grandQuestion: 'How does technology reshape society — and who benefits and who gets excluded?',
        coreIdea:
          'At every evolutionary leap, IT introduced a novel hardware device, fundamentally revolutionizing how humanity communicates, works, and transacts.',
        coreConcepts: [
          "Moore's Law",
          'Social Networking Services (SNS)',
          'E-Commerce',
          'Remote Work',
          'Online Learning',
          'Cashless Economy',
          'Edge Computing',
          'Autonomous Driving',
          'Augmented Reality / Virtual Reality',
          'Quantum Computing',
        ],
        missionContext:
          'Your day starts with a notification, a cashless transit payment, and cloud learning... Thirty years ago, none of this existed. Every tool you rely on today is the culmination of stacked hardware and networking breakthroughs that reshaped human behavior.',
        journeyStages: [
          { id: 'stage-1', title: 'Wonder', subtitle: 'Your daily digital life', icon: 'bolt' },
          { id: 'stage-2', title: 'Inquiry', subtitle: 'Where did this all emerge from?', icon: 'psychology' },
          { id: 'stage-3', title: 'Discovery', subtitle: "Four eras & Moore's Law", icon: 'history_edu' },
          { id: 'stage-4', title: 'Expansion', subtitle: 'Transformations & emerging tech', icon: 'lan' },
          { id: 'stage-5', title: 'Analysis', subtitle: 'Stakeholders & digital divide', icon: 'balance' },
          { id: 'stage-6', title: 'Decision', subtitle: 'Evidence-based trade-offs', icon: 'gavel' },
          { id: 'stage-7', title: 'Mastery', subtitle: 'Societal governance of tech', icon: 'workspace_premium', highlight: true },
        ],
        discoveryThemes: [
          {
            id: 'theme-1',
            variant: 'cobalt',
            tag: "Moore's Law & Hardware",
            title: 'Why has our hardware acceleration begun to slow down?',
            description:
              'Doubling transistors every two years is not an inescapable law of nature. Discover why we have reached the atomic physical limits of silicon.',
            question: 'Will technological evolution continue forever at the same historical rate?',
          },
          {
            id: 'theme-2',
            variant: 'teal',
            tag: 'Edge Computing & Safety',
            title: 'Why cannot an autonomous vehicle wait for the cloud?',
            description:
              'At 120 km/h, a delay of 0.3 seconds means traveling 10 meters towards hazard. Understand the necessity of local Edge Computing.',
            question: 'Why does cloud latency become a lethal risk in mission-critical systems?',
          },
          {
            id: 'theme-3',
            variant: 'amber',
            tag: 'Justice & Social Shift',
            title: 'Is digital payment truly convenient for everyone?',
            description:
              'Technology is not neutral; the convenience enjoyed by smartphone owners can turn into a wall of exclusion for the elderly and unbanked.',
            question: 'Who pays the social price when physical cash is eliminated prematurely?',
          },
        ],
        finalChallengeTeaser: {
          roleBadge: 'Your Final Mission in this Lesson',
          title: 'Egyptian Village Advisory Challenge (Evidence-Based Decision)',
          scenario:
            'A remote Egyptian village has connected to the Internet this month. The government considers transitioning all public utility payments (electricity, water, schools) to a 100% digital system within one year. As technical advisor, do you approve?',
          requirement:
            'Provide a balanced recommendation + state one mandatory condition to safeguard vulnerable groups before rollout.',
        },
        cognitiveKey: {
          question:
            'Cognitive Key: Before turning the page, reflect: Did the Internet emerge before smartphones or after? And what does a digital wallet app require to execute within one second?',
        },
      },
    },
    {
      id: 'page-01',
      pageNumber: '01',
      type: 'DAILY_COMPARISON',
      badgeText: 'Classroom Attention & Cognitive Hook',
      unitTitle: 'Unit 1: Computing & AI Fundamentals',
      lessonTitle: 'Lesson 1-1: Evolution of IT & Social Transformation',
      content: {
        badge: 'Classroom Attention & Cognitive Hook',
        lessonCode: '1-1',
        unitTitle: 'Unit 1: Computing & AI Fundamentals',
        title: 'How Did Computing Transform Human Capabilities & Modern Society?',
        inquiryQuestion:
          'Only thirty years ago, a student in a remote village could not access encyclopedias or pay bills with a phone tap... How did digital technology leap from isolated laboratories into the living pulse of our daily routine?',
        activityMeta: {
          type: 'Collaborative Pair Work (Student A + Student B)',
          duration: 'Suggested Duration: 10 mins',
          instructions:
            'Reflect on your routine, collaborate with your peer to compare your daily activities with how parents or grandparents performed them in 1995, and record your inferences:',
        },
        domains: [
          {
            id: 'domain-1',
            icon: 'schedule',
            title: 'Domain 1: Waking Up & Scheduling the Day',
            subtext: '(Time & Appointment Management)',
            practice2026: 'Smart alarm syncing to cloud calendar, weather, and traffic, with voice task briefings.',
            practice1995: 'Mechanical gear alarm clock, relying on morning radio or parents calling.',
          },
          {
            id: 'domain-2',
            icon: 'payments',
            title: 'Domain 2: Purchasing & Utility Payments',
            subtext: '(Daily Financial Transactions)',
            practice2026: 'Instant transfer via InstaPay, mobile wallets, or POS kiosks in seconds with biometric approval.',
            practice1995: 'Physical travel to post office or bank branch, waiting hours in queues with paper cash receipts.',
          },
          {
            id: 'domain-3',
            icon: 'shopping_bag',
            title: 'Domain 3: Commerce & Acquiring Necessities',
            subtext: '(Retail & Everyday Goods)',
            practice2026: 'E-commerce marketplace apps with algorithmic comparison, tracking delivery couriers live on GPS.',
            practice1995: 'Walking between scattered physical storefronts with cash, limited to daytime business hours.',
          },
          {
            id: 'domain-4',
            icon: 'school',
            title: 'Domain 4: Academic Study & Research',
            subtext: '(Knowledge & Educational Materials)',
            practice2026: 'On-demand video libraries, interactive AI problem explanations, and cloud digital textbook portals.',
            practice1995: 'Printed textbooks only, borrowing reference encyclopedias from central libraries with manual search.',
          },
        ],
        mentorQuote: {
          author: 'Mohamed Shamel Mohamed — Curriculum & Computer Science Expert',
          text: 'Technology was never born by chance; every tool was engineered to solve human adversity, and when successful, it systematically restructured all of society.',
        },
        synthesisQuestion: 'What crucial technological factor made all these daily comparisons possible today?',
      },
    },
    {
      id: 'page-02',
      pageNumber: '02',
      type: 'DISCOVERY_TIMELINE',
      badgeText: 'IT Discovery Timeline',
      unitTitle: 'Unit 1: Computing & AI Fundamentals',
      lessonTitle: 'Lesson 1-1: Evolution of IT & Social Transformation',
      content: {
        topicRibbon: {
          number: '02',
          unitTitle: 'Unit 1: Computing & Society',
          lessonCode: 'Lesson 1-1',
          subBadge: 'Timeline Architecture',
          title: 'IT Discovery Timeline: Cumulative Evolution of Computing & Societal Impact',
          logicTag: 'Triadic Causal Logic',
          analysisType: 'Impact Analysis',
        },
        guideText: 'Trace the causal chain: Hardware Device → Acquired Human Capability → Societal Reflection',
        timeSpan: '1940 ➔ 2026+',
        stations: [
          {
            num: 1,
            title: 'Mainframes & Vacuum Tubes (ENIAC)',
            years: '(1940 - 1960)',
            stationBadge: 'Station 1',
            abilityText:
              'Executing complex mathematical, physical, and astronomical calculations in minutes instead of months of manual arithmetic.',
            socialText:
              'Enabling national grand projects such as space exploration, government census organization, and defense fortifications.',
          },
          {
            num: 2,
            title: 'Microprocessor Revolution & Personal Computer (PC & GUI)',
            years: '(1970 - 1980)',
            stationBadge: 'Station 2',
            abilityText:
              'Individuals and small businesses possessing desktop processing power with color monitors, mouse pointers, and flexible graphical interfaces.',
            socialText:
              'Re-engineering corporate offices, and giving birth to the concept of personal productivity software in homes and schools.',
          },
          {
            num: 3,
            title: 'World Wide Web & Hyperconnectivity (WWW)',
            years: '(1990 - 1999)',
            stationBadge: 'Station 3',
            abilityText:
              'Publishing and sharing cross-continental textual and visual content with a click, browsed through unified open protocols.',
            socialText:
              'Birth of the global digital economy, initial e-commerce, and breaking monopolies on access to research and information.',
          },
          {
            num: 4,
            title: 'Smartphones & Pocket Computing (Mobile Ecosystem)',
            years: '(2000 - 2010)',
            stationBadge: 'Station 4',
            abilityText:
              'Continuous instant Internet connection accompanied by spatial sensors, GPS, and high-definition cameras in every pocket.',
            socialText:
              'Apps becoming daily social fabric for managing transit, instant banking, emotional connection, and live societal documentation.',
          },
          {
            num: 5,
            title: 'Cloud Computing, Big Data & Generative AI (GenAI)',
            years: '(2010 - Present)',
            stationBadge: 'Current Station',
            abilityText:
              'Harnessing hyperscale distributed server farms to process petabytes of multimodal data and generate code, text, and synthetic media in seconds.',
            socialText:
              'Reshaping intellectual labor, autonomous driving systems, and national smart city management with deep ethical governance debates.',
          },
        ],
        sidebar: {
          misconception: {
            title: 'Correcting Common Misconception (2)',
            badge: 'Conceptual Alert',
            bold: 'New technology does not completely eradicate the old!',
            text: 'Smartphones did not wipe out mainframes or hyperscale data centers; each medium specialized and integrated into a multi-tiered hybrid computing architecture.',
            practicalNote: 'Artificial Intelligence today relies entirely on massive server farms rooted in the centralized philosophy of 1960s mainframes.',
          },
          workshop: {
            title: 'Critical Thinking Activity (5 Mins)',
            badge: 'Interactive Classroom Workshop',
            prompt:
              'Select two stations from above and explain how the first prepared for the second, and what would have been disrupted in societal life had one been absent:',
            pairs: ['Station 1 & 2', 'Station 2 & 3', 'Station 3 & 4', 'Station 4 & 5'],
            field1: '1. Foundational Relation: How did the first station prepare for the emergence of the second?',
            field2: '2. Counterfactual Scenario: What societal activity would have ground to a halt if it were missing?',
            rubric: {
              label: 'Teacher Assessment:',
              criteria: 'Causal Linking (2) • Analysis Depth (2) • Clarity of Expression (1)',
              scoreBox: '[     / 5 ]',
              signatureLabel: 'Teacher Signature: ................',
            },
          },
        },
        footerNote: {
          author: 'Mohamed Shamel Mohamed',
          authorTitle: 'Curriculum & IT Expert',
          pageLabel: 'Page 02',
          academicYear: 'Academic Year 2026-2027',
        },
      },
    },
    {
      id: 'page-03',
      pageNumber: '03',
      type: 'MOORES_LAW',
      badgeText: "Moore's Law & Processor Architecture",
      unitTitle: 'Unit 1: Computing & AI Fundamentals',
      lessonTitle: 'Lesson 1-1: Evolution of IT & Social Transformation',
      content: {
        topicRibbon: {
          number: '03',
          unitTitle: 'Unit 1: Computing & AI Fundamentals',
          lessonCode: 'Lesson 1-1',
          subBadge: 'Processor Architecture',
          title: "The Secret of Tech Acceleration: Moore's Law & Semiconductor Physics",
          chapterTag: 'CH-01 // PAGE 03',
        },
        inquiry: {
          badge: 'Exploratory Inquiry',
          codeTag: 'Q-CORE',
          question:
            '"Why is the smartphone in your pocket millions of times faster than NASA Apollo computers, yet affordably accessible to all?"',
          hint: 'The secret lies in an exponential hardware sprint formulated by silicon pioneers in the mid-1960s.',
        },
        mooresLaw: {
          sectionTitle: "Moore's Law (1965)",
          codeTag: 'TRANSISTOR DENSITY',
          body: 'Formulated by Intel engineer ',
          engineerName: 'Gordon Moore',
          bodyAfter: 'in his famous 1965 empirical observation, stating that:',
          quote:
            '"The number of transistors packed onto an integrated circuit chip doubles approximately every two years, while the cost of computation is halved."',
          bodyEnd:
            'This relentless miniaturization enabled exponential leaps in clock frequency and physical shrinkage of computers.',
        },
        misconception: {
          badge: 'Common Scientific Misconception #01',
          subBadge: 'Rigorous Terminology',
          question: '"Is Moore’s Law an immutable physical law of the universe like Newton’s law of universal gravitation?"',
          answer:
            'Not at all! It is an empirical observation and economic roadmap, not a deterministic natural law. It has begun to encounter hard physical quantum limits.',
        },
        quickCheck: {
          sectionTitle: 'Quick Check Concept Assessment',
          badge: 'Formative Assessment',
          instruction: 'Mark (✓) or (✗) for each statement with scientific justification:',
          questions: [
            {
              id: 'q1',
              text: '1. Moore’s Law guarantees that processor speeds will double infinitely at the exact same historical pace.',
            },
            {
              id: 'q2',
              text: '2. Nanometer shrinkage of transistors is the definitive historical enabler of pocket supercomputing.',
            },
          ],
          reasoningLabel: 'Scientific Justification:',
        },
        keyConcepts: {
          title: 'Key Concepts',
          concepts: [
            {
              term: 'Transistor:',
              definition: 'Binary electronic switch (On/Off) representing the fundamental unit of logic calculation.',
              color: 'cobalt',
            },
            {
              term: 'Exponential Growth:',
              definition: 'Rapid multi-fold acceleration differing fundamentally from linear increments (1, 2, 4, 8, 16...).',
              color: 'amber',
            },
            {
              term: 'Die Density:',
              definition: 'Number of active computational components per square millimeter of silicon die.',
              color: 'teal',
            },
          ],
        },
        enrichment: {
          title: 'The Quantum Tunneling Barrier',
          badge: 'Enrichment | Nice to Know',
          body: 'When transistor gate widths drop below ',
          threshold: '2nm',
          bodyAfter:
            ', insulating walls become atomic layers thin. Electrons begin leaking across barriers (Quantum Tunneling), generating excessive heat and disrupting binary states.',
          solutionLabel: 'Future Frontier:',
          solution: 'Quantum Computing & 3D Chiplets',
        },
        peerDiscussion: {
          badge: 'Peer Discussion',
          prompt:
            'Discuss with your peer: If the automotive industry had accelerated at the exponential rate of Moore’s Law, what would your car look like, cost, and how fast would it travel today compared to 1970?',
        },
        footerNote: {
          author: 'Mohamed Shamel Mohamed',
          authorTitle: 'Curriculum & IT Expert',
          pageLabel: 'Page 03',
          academicYear: 'Academic Year 2026-2027',
        },
      },
    },
    {
      id: 'page-04',
      pageNumber: '04',
      type: 'SOCIAL_TRANSFORMATIONS',
      badgeText: 'Five Social Transformations & Digital Triad',
      unitTitle: 'Unit 1: Computing & AI Fundamentals',
      lessonTitle: 'Lesson 1-1: Evolution of IT & Social Transformation',
      content: {
        topicRibbon: {
          number: '04',
          unitTitle: 'Unit 1: Computing & AI Fundamentals',
          lessonCode: 'Lesson 1-1',
          subBadge: 'Major Social Transformations',
          title: 'One Common Tree Growing from a Shared Infrastructure',
          chapterTag: 'TRANSFORM-5 // PAGE 04',
        },
        ahaMoment: {
          badge: 'The Aha! Moment',
          subBadge: '• Observe the System',
          lead:
            'One might think e-commerce, remote work, digital payments, and online learning are isolated phenomena... But engineering analysis proves they all drink from the same shared infrastructure triad:',
          pillars: ['Reliable Smartphone', 'High-Speed Broadband', 'Centralized Cloud Hyperscalers'],
        },
        bigFive: {
          title: 'The Big Five Social Transformations',
          subTitle: 'Comparative Analytical Study',
          items: [
            {
              id: 'sns',
              num: '01',
              tag: 'SNS',
              title: 'Social Networking Services',
              description:
                'Transforming users from passive consumers into creators, publishers, and cross-border networked communities.',
              impactLabel: 'Key Impact:',
              impact: 'Democratizing Publishing & Participation',
              color: 'cobalt',
            },
            {
              id: 'ecomm',
              num: '02',
              tag: 'E-COMM',
              title: 'E-Commerce & Digital Markets',
              description:
                'Eradicating geographic barriers, enabling instant purchasing, live price comparisons, and digital supply chains.',
              impactLabel: 'Key Impact:',
              impact: 'Borderless Global Market 24/7',
              color: 'amber',
            },
            {
              id: 'remote',
              num: '03',
              tag: 'REMOTE',
              title: 'Remote & Hybrid Work',
              description:
                'Decoupling career productivity from physical co-location through collaboration hubs and cloud conferences.',
              impactLabel: 'Key Impact:',
              impact: 'Labor Flexibility & Virtual Offices',
              color: 'teal',
            },
            {
              id: 'learn',
              num: '04',
              tag: 'LEARN',
              title: 'Digital & On-Demand Learning',
              description:
                'Providing interactive lectures, standardized curricula, and micro-degrees to global learners at any time.',
              impactLabel: 'Key Impact:',
              impact: 'Universal Lifelong Education',
              color: 'cobalt',
            },
            {
              id: 'fintech',
              num: '05',
              tag: 'FINTECH',
              title: 'Cashless & Fintech Economy',
              description:
                'Replacing paper currency with encrypted digital tokens, contactless cards, and QR codes for instant settlement.',
              techStack: 'Enablers: NFC / Secure Wallets / Banking APIs',
              impactLabel: 'Key Impact:',
              impact: 'Frictionless Instant Economy',
              color: 'amber',
              fullWidth: true,
            },
          ],
        },
        activity: {
          title: 'Applied Activity (Pair Exploration - 5 Mins)',
          codeTag: 'ACT-4.1',
          badge: 'Analytical Competencies',
          instruction:
            'Task: Discuss with your peer the daily scenarios below, then determine: (1) The transformation type, and (2) The critical infrastructure pillar that would collapse the application if lost:',
          situations: [
            {
              id: 1,
              situation: 'Ordering food delivery and tracking the courier live on a phone map.',
            },
            {
              id: 2,
              situation: 'Attending a live physics masterclass and interacting via school portals.',
            },
            {
              id: 3,
              situation: 'Paying utility bills by scanning a QR code with a phone digital wallet.',
            },
            {
              id: 4,
              situation: 'A Cairo software engineer working daily with a tech team headquartered in London.',
            },
          ],
          selfEvalLabel: 'Self-Assessment:',
          selfEvalOptions: ['Fully Mastered (3/3)', 'Needs Review (2/3)'],
          teacherSign: 'Teacher Signature: ........................',
        },
        sidebarCentralConcept: {
          unitTag: 'UNIT 01 // 1-1',
          badge: 'Core Concept',
          title: 'The Five Transformations',
          body:
            'Deep structural and behavioral mutations in human society resulting from the maturation of information technology.',
          pillarsLabel: 'The Shared Triad:',
          pillars: ['Reliable Smartphone', 'Stable High-Speed Web', 'Centralized Cloud Hyperscalers'],
        },
        goldenRule: {
          title: 'Golden Examination Note',
          codeTag: 'P.04-EX',
          subBadge: 'Frequent Exam Focus',
          body:
            'Social transformations are not merely commercial apps; they are a fundamental restructuring of human behavior unlocked once sensors and cloud became universally affordable.',
        },
        inkScratchpad: {
          title: 'Free Scratchpad & Personal Insight',
          subBadge: 'Ink Work',
        },
        footerNote: {
          author: 'Mohamed Shamel Mohamed',
          authorTitle: 'Curriculum & IT Expert',
          pageLabel: 'Page 04',
          academicYear: 'Academic Year 2026-2027',
        },
      },
    },
    {
      id: 'page-05',
      pageNumber: '05',
      type: 'EDGE_VS_CLOUD',
      badgeText: 'Edge vs. Cloud Computing & Autonomous Vehicles',
      unitTitle: 'Unit 1: Computing & AI Fundamentals',
      lessonTitle: 'Lesson 1-1: Evolution of IT & Social Transformation',
      content: {
        topicRibbon: {
          number: '05',
          unitTitle: 'Unit 1: Computing & AI Fundamentals',
          lessonCode: 'Lesson 1-1',
          subBadge: 'Computational Decision Architecture',
          title: 'Where Should Intelligence Reside? Edge vs. Cloud Computing',
          chapterTag: 'EDGE-VS-CLOUD // PAGE 05',
          latencyTag: 'Latency = Life or Death in Safety Systems',
        },
        criticalScenario: {
          badge: 'CRITICAL SCENARIO • 120 KM/H',
          interventionLimit: 'Intervention Threshold: < 50ms',
          title: 'Life-Critical Real-World Scenario',
          bodyLead: '«An autonomous vehicle traveling at ',
          speed: '120 km/h',
          bodyMid:
            ' detects an obstacle or child crossing the road meters ahead. The computer vision and emergency braking system must decide and execute stopping within ',
          timeLimit: '50 milliseconds (0.05 s)',
          bodyEnd: ' to prevent catastrophic collision.»',
        },
        comparisonTracks: {
          cloud: {
            letter: 'A',
            title: 'Cloud Processing Path',
            badge: 'High Latency: 200 - 600ms',
            steps: [
              { icon: 'videocam', text: '1. Onboard cameras capture high-definition raw frames.' },
              { icon: 'cell_tower', text: '2. Streaming video wireless packets up to 4G/5G towers.' },
              { icon: 'cloud', text: '3. Data transit across geographic distance to remote data centers.' },
              { icon: 'keyboard_return', text: '4. Remote inference and returning braking command down to the car.' },
            ],
            riskTitle: 'Fatal Delay Risk:',
            riskBody:
              'Network roundtrip latency is far too high; any transient cellular dead-zone causes unavoidable collision.',
          },
          edge: {
            letter: 'B',
            title: 'Edge Processing Path',
            badge: 'Instantaneous: < 15ms',
            steps: [
              { icon: 'sensors', text: '1. Onboard LiDAR and cameras capture sensory input.' },
              { icon: 'memory', text: '2. Immediate inference directly on integrated NPU/GPU chip.' },
              { icon: 'offline_pin', text: '3. Zero Internet dependency or reliance on cell coverage.' },
              { icon: 'verified', text: '4. Electro-mechanical brakes engaged in single-digit milliseconds.' },
            ],
            advantageTitle: 'Decisive Advantage:',
            advantageBody:
              'Preserving human lives in critical sub-seconds via complete autonomy and deterministic local reliability.',
          },
        },
        mentorRule: {
          title: "The Mentor's Golden Rule:",
          quote:
            '“Not all data is fit to travel to the cloud first; mission-critical operations requiring sub-second response must strictly execute on Edge Computing.”',
        },
        activity: {
          title: 'Applied AI Engineer Exercise (5 Mins)',
          scorePill: 'Score: [   / 5 ]',
          instruction:
            'As an autonomous systems engineer, determine the optimal processing tier for each data type with engineering rationale:',
          rows: [
            {
              id: 1,
              title: '1. Emergency Pedestrian & Traffic Signal Detection',
              subtitle: 'LiDAR sensors and front bumper optical feeds',
              defaultChoice: 'edge',
              disabled: true,
              justification: 'Collision avoidance mandates < 50ms latency to avert fatal impact.',
            },
            {
              id: 2,
              title: '2. Brake Wear & Mechanical Maintenance Telemetry',
              subtitle: 'Historical engine diagnostics and chassis sensor logs',
              defaultChoice: null,
              disabled: false,
              justification: null,
            },
            {
              id: 3,
              title: '3. Crowd-Sourced Global Navigation Map Training',
              subtitle: 'Aggregated road topology and weekly congestion patterns',
              defaultChoice: null,
              disabled: false,
              justification: null,
            },
            {
              id: 4,
              title: '4. In-Cabin Entertainment & Smart Climate Preferences',
              subtitle: 'Passenger music queues and comfort preferences',
              defaultChoice: null,
              disabled: false,
              justification: null,
            },
          ],
        },
        footerNote: {
          author: 'Mohamed Shamel Mohamed',
          authorTitle: 'Curriculum & Computer Science Expert',
          pageLabel: 'Page 05',
          academicYear: 'Academic Year 2026 - 2027',
        },
      },
    },
    {
      id: 'page-06',
      pageNumber: '06',
      type: 'AR_VR_QUANTUM',
      badgeText: 'Augmented vs. Virtual Reality & Quantum Computing',
      unitTitle: 'Unit 1: Computing & AI Fundamentals',
      lessonTitle: 'Lesson 1-1: Evolution of IT & Social Transformation',
      content: {
        topicRibbon: {
          number: '06',
          unitTitle: 'MODULE 01 • LESSON 1-1',
          lessonCode: 'Core Technical Concepts',
          subBadge: 'Ministry Standard 2026',
          title: 'Augmented Reality vs. Virtual Reality: Adding to Reality or Replacing It?',
          chapterTag: 'AR-VR-QUANTUM // PAGE 06',
          deepDiveTag: 'SECTION 1.4',
        },
        comparisonCards: {
          ar: {
            code: 'AR',
            title: 'Augmented Reality (AR)',
            badge: 'Perceptual Overlay',
            conceptHeading: 'Core Concept:',
            conceptText:
              'The physical real world remains visually present, while computer systems project interactive 3D digital assets and contextual telemetry on top without occluding reality.',
            examplesTitle: 'Real-World Applications:',
            examplesIcon: 'devices',
            examples: [
              'Camera live filters on smartphones (e.g. social platforms).',
              'Surgical HUD smart glasses: Projecting patient vital signs, vessel branches, and incisions live onto their body during operations.',
            ],
            meterLabel: 'Sensory Isolation Level:',
            meterValue: '0% Isolation (Open Environment)',
            meterPercent: 4,
          },
          vr: {
            code: 'VR',
            title: 'Virtual Reality (VR)',
            badge: 'Total Environmental Replacement',
            conceptHeading: 'Core Concept:',
            conceptText:
              'Total sensory occlusion from physical surroundings, redirecting user consciousness into an entirely synthesized stereoscopic digital environment.',
            examplesTitle: 'Real-World Applications:',
            examplesIcon: 'sports_esports',
            examples: [
              'Full immersion VR gaming headsets and interactive simulations.',
              'Flight simulators and astronaut training inside completely simulated space station capsules.',
            ],
            meterLabel: 'Sensory Isolation Level:',
            meterValue: '100% Total Isolation (Full Immersion)',
            meterPercent: 100,
          },
        },
        misconceptionAlert: {
          badge: 'Misconception Correction #3',
          title: 'Do Screens Make Them the Same Tech?',
          quote:
            '“AR and VR are not two sides of the same coin merely because both use lenses; the fundamental architectural question is: Do you see the physical world with enhancements, or has your surrounding reality been entirely replaced?”',
        },
        quantumSection: {
          sectionTag: 'SECTION 1.4',
          subTitle: 'Deep Dive Analysis',
          title: 'Quantum Computing: The Qubit & Superposition Analogy',
          theoryText:
            'Classical computers rely on the binary Bit (strictly 0 or 1). Quantum computing harnesses the Qubit exploiting Superposition, representing probabilistic combinations of 0 and 1 simultaneously to solve complex combinatorial problems in parallel.',
          commonError: {
            badge: 'Common Error Correction #4:',
            text:
              'A quantum computer is not a general replacement for home PCs or phones; it will not make web browsing faster! It is a hyper-specialized machine for cryptography, molecular drug simulation, and optimization.',
          },
          analogy: {
            title: 'Intuitive Real-World Analogy:',
            leftItem: 'Car',
            vsText: 'vs',
            rightItem: 'Bicycle',
            carDesc:
              'The Car (Classical Computer): Ideal and extremely fast on open highways, representing the perfect vehicle for all general day-to-day requirements.',
            bikeDesc:
              'The Bicycle (Quantum Computer): Seems unsuited for open superhighways, but is uniquely capable of traversing ultra-narrow, winding alleys (mathematical puzzles intractable classically).',
            bitPill: { label: 'Bit', sub: 'Deterministic Binary (0 or 1)' },
            qubitPill: { label: 'Qubit', sub: 'Continuous Probabilistic Superposition' },
          },
        },
        activity: {
          title: 'Critical Thinking & Practical Application',
          scenario:
            'If you were a neurosurgeon performing delicate brain surgery, which technology (AR or VR) would you rely on to assist without losing direct sight of your hands and surgical instruments? Why?',
          options: [
            { id: 'ar', label: 'A) Augmented Reality (AR)', isCorrect: true },
            { id: 'vr', label: 'B) Virtual Reality (VR)', isCorrect: false },
          ],
          reasoningPrompt: 'Engineering & logical rationale for your choice:',
          ruledLinesCount: 2,
        },
        footerNote: {
          author: 'Mohamed Shamel Mohamed',
          authorTitle: 'Curriculum & IT Expert',
          pageLabel: 'Page 06',
          academicYear: 'Academic Year 2026-2027',
        },
      },
    },
    {
      id: 'page-07',
      pageNumber: '07',
      type: 'ACTIVITY_DECISION',
      badgeText: 'Stakeholder Analysis & Decision Lab',
      unitTitle: 'Unit 1: Computing & AI Fundamentals',
      lessonTitle: 'Lesson 1-1: Evolution of IT & Social Transformation',
      content: {
        badge: 'Interactive Decision Lab • Ethical Analysis',
        title: 'Decision Challenge: The Sudden Transition to a 100% Cashless Society',
        subtitle: 'Analyze conflicting stakeholder priorities and engineer an equitable digital policy',
        scenario:
          'A national committee proposes an immediate mandate to completely phase out physical paper currency within 6 months, requiring all public transit, markets, and municipal services to operate exclusively via smartphone digital wallets.',
        stakeholders: [
          {
            group: '1. The Elderly & Digitally Unbanked',
            perspective: 'May not own modern smartphones or possess digital literacy; fear losing access to food and medication.',
            consideration: 'Severe Risk: Digital exclusion, social disenfranchisement, and financial vulnerability.',
          },
          {
            group: '2. Street Vendors & Micro-Merchants',
            perspective: 'Rely on immediate daily cash flow; worry about transaction fees, delays, and tax paperwork.',
            consideration: 'Operational Risk: Squeezed profit margins and potential resistance without accessible hardware.',
          },
          {
            group: '3. Banks & Fintech Operators',
            perspective: 'Advocate for massive cost savings, fraud minimization, and new service adoption.',
            consideration: 'Commercial Opportunity: Expanded customer base, but must guarantee 99.999% uptime.',
          },
          {
            group: '4. State & Tax Authorities',
            perspective: 'Targeting total financial transparency, curbing money laundering, and optimizing revenue collection.',
            consideration: 'Macro Goal: Formalizing the shadow economy while ensuring universal public trust.',
          },
        ],
        prompts: [
          {
            question:
              'Based on your stakeholder analysis, which demographic faces the greatest risk of immediate exclusion? Explain the causal reasons.',
          },
          {
            question:
              'As Chief Advisory Engineer, what is your balanced policy decision? State one mandatory safeguard that must precede any digital cash transition.',
          },
        ],
        reflection: {
          title: 'The Mentor Engineering Creed for Decision Makers',
          text:
            '“Technology is never neutral; the success of any digital infrastructure is not measured by the luxury of those holding flagship smartphones, but by how reliably it protects and includes the most vulnerable members of society. Future engineers build solutions that leave no one behind.”',
        },
      },
    },
    {
      id: 'page-08',
      pageNumber: '08',
      type: 'REVISION',
      badgeText: 'Revision & Final Challenge',
      unitTitle: 'Unit 1: Computing & AI Fundamentals',
      lessonTitle: 'Lesson 1-1: Evolution of IT & Social Transformation',
      content: {
        badge: 'Final Milestone • Consolidation & Mastery Challenge',
        title: 'Lesson 1-1 Synthesis: Core Pillars of IT Evolution',
        summaryCards: [
          {
            title: '1. Strict Causal Determinism',
            content:
              'Every hardware leap introduced a novel human capability, and that capability radically reshaped human societal behavior.',
          },
          {
            title: '2. The Common Infrastructure Tree',
            content:
              'The Five Transformations (Social, E-Commerce, Work, Learning, Cashless) are unified branches feeding from the same triad: Phone + Internet + Cloud.',
          },
          {
            title: '3. Edge vs Cloud Necessity',
            content:
              'Not all data is fit for cloud latency; safety-critical systems like autonomous driving mandate local edge inference to prevent catastrophic failure.',
          },
        ],
        keyTerms: [
          { term: "Moore's Law", definition: 'Empirical observation that transistor density doubles every 2 years with falling cost, now encountering physical quantum limits.' },
          { term: 'Social Networking Services (SNS)', definition: 'Digital platforms transforming users from passive consumers into creators and networked communities.' },
          { term: 'E-Commerce', definition: 'Borderless digital exchange of goods and services online available 24/7 across geographic boundaries.' },
          { term: 'Remote Work & Learning', definition: 'Decoupling professional and academic productivity from physical co-location through digital platforms.' },
          { term: 'Cashless Economy', definition: 'Settlement of financial transactions electronically via cards, wallets, and QR codes without physical currency.' },
          { term: 'Edge Computing', definition: 'Processing data locally on or near the physical sensor to achieve near-zero millisecond latency.' },
          { term: 'AR vs. VR', definition: 'Augmented Reality overlays digital assets on the real world; Virtual Reality replaces reality with total immersion.' },
          { term: 'Quantum Computing', definition: 'Harnessing Qubits and quantum superposition to solve complex cryptographic and factorial problems beyond classical capabilities.' },
        ],
        checkQuestions: [
          "Is Moore's Law a deterministic physical law like gravitation? Justify your scientific reasoning.",
          'What is the fundamental architectural difference between an AR phone filter and an immersive VR training cockpit?',
          'Why cannot a self-driving car traveling at 120 km/h wait for cloud servers to issue a braking command?',
          'Why does social justice dictate maintaining cash fallback mechanisms during early national digital wallet transitions?',
        ],
        mentorClosing: {
          title: 'The Mentor Sign-off & Preview of Next Lesson',
          text:
            '“Congratulations, Future Engineer! Today you mapped how information technology builds human society and learned how to audit its ethical footprint. Get ready for Lesson 1-2 (How Artificial Intelligence Works), where we dive deep into the mind of the machine to see how computers learn from data!”',
        },
      },
    },
  ],
};
