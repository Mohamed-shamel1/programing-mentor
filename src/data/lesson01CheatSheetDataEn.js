/**
 * Lesson 1-1 Master Revision Poster / Cheat Sheet Data (English)
 * Title: Evolution of Information Technology & Social Transformation
 * Format: High-Density A4 Landscape Master Form (297mm × 210mm)
 * Series: The Smart Mentor Series 2026/2027 | Geniuses Cohort — Grade 11 (Second Secondary)
 */

export const lesson01CheatSheetDataEn = {
  header: {
    logoLetter: 'M',
    seriesBadge: 'The Smart Mentor Series 2026/2027',
    cohortBadge: 'Geniuses Cohort — Grade 11 (Second Secondary)',
    mainTitle: 'Information Technology & AI — Master Final Revision Blueprint',
    tagBadge: 'Ultra-Intensive Revision Blueprint (A4 Landscape Form)',
    lessonSubtitle: 'Lesson 1-1: Evolution of Information Technology & Social Transformation',
    authorLabel: 'Prepared & Authored by Academic Expert',
    authorName: 'Mr. Mohamed Shamel Mohamed',
    editionBadge: 'Official Exam-Certified Edition',
  },

  column1: {
    title: 'Timeline of Eras: Hardware ← Capability ← Impact',
    eras: [
      {
        id: 'era-1',
        period: '1940s–1960s',
        badge: 'Vacuum Tubes & ENIAC',
        badgeColor: 'red',
        hardware: 'Vacuum tubes, room-sized tonnage, massive yet slow digital arithmetic capacity.',
        impact: 'Monopolized by military, ballistic trajectory calculations, and scientific simulations.',
      },
      {
        id: 'era-2',
        period: '1970s–1980s',
        badge: 'PC Microprocessors',
        badgeColor: 'amber',
        hardware: 'Silicon microchips unlocked the birth of the personal desktop computer.',
        impact: 'Democratization of computing; spread into offices, schools, and homes for word processing.',
      },
      {
        id: 'era-3',
        period: '1990s',
        badge: 'Internet & Web (WWW)',
        badgeColor: 'emerald',
        hardware: 'Interconnected global networks, TCP/IP protocols, web browsers, and email.',
        impact: 'Cross-continental information flows, early e-commerce, and knowledge globalization.',
      },
      {
        id: 'era-4',
        period: '2000s',
        badge: 'Smartphones & 3G/4G',
        badgeColor: 'purple',
        hardware: 'Ultra-portable touchscreen mobile devices with persistent wireless broadband.',
        impact: 'Rise of social networks (SNS), citizen journalism, and pocket-sized on-demand services.',
      },
      {
        id: 'era-5',
        period: 'Current & Future',
        badge: 'Cloud + AI + Edge',
        badgeColor: 'indigo',
        hardware: 'Hyperscale data centers, intelligent edge devices, and generative AI models.',
        impact: 'Smart environments, pervasive automation, and computers turning into cloud terminals.',
      },
    ],
    causalChains: {
      title: '🔗 Understand the Relationship: Cause ⟵ Effect',
      badge: 'Causal Logic',
      items: [
        {
          id: 'cause-1',
          trigger: '1. Transistor Miniaturization',
          steps: [
            'Higher density per chip',
            'Doubling processing clock & speed',
            'Smaller, cheaper, and vastly superior devices.',
          ],
        },
        {
          id: 'cause-2',
          trigger: '2. Smartphone + Internet + Cloud',
          steps: [
            'Instant access to services & knowledge',
            'Radical shift in work, learning, and retail behaviors.',
          ],
        },
        {
          id: 'cause-3',
          trigger: '3. Data Explosion & Real-time Demands',
          steps: [
            'Overwhelming strain on central cloud',
            'Mandatory processing at source (Edge Computing).',
          ],
        },
        {
          id: 'cause-4',
          trigger: '4. Widespread Banking Apps & QR Codes',
          steps: [
            'Reliability and instant digital clearance',
            'Gradual transition toward a cashless society.',
          ],
        },
      ],
    },
  },

  column2: {
    title: "Moore's Law & Physical Limits",
    definition: {
      title: "Concept of Moore's Law (Gordon Moore 1965):",
      badge: 'Empirical Historical Trend',
      text: 'An empirical industry observation predicting that the number of transistors on an integrated circuit doubles approximately every two years (18–24 months) while costs drop and performance climbs. It is NOT an immutable physical law and does not continue indefinitely.',
    },
    chart: {
      title: 'Exponential Scaling & Deceleration Barrier (Transistors)',
      periodSpan: '1970 - 2026',
      bars: [
        { era: '1971', chip: '4004', value: '2.3K', heightPercent: 16, colorClass: 'bar-blue' },
        { era: '1980s', chip: '8086', value: '29K', heightPercent: 30, colorClass: 'bar-blue' },
        { era: '1990s', chip: 'Pentium', value: '3.1M', heightPercent: 52, colorClass: 'bar-cyan' },
        { era: '2000s', chip: 'Core 2', value: '1B', heightPercent: 74, colorClass: 'bar-teal' },
        { era: '2010s', chip: 'Multi-Core', value: '50B', heightPercent: 92, colorClass: 'bar-emerald', note: 'Deceleration 2010+' },
        { era: '2020s', chip: '3nm/2nm', value: '100B+', heightPercent: 98, colorClass: 'bar-gradient', isLimit: true },
      ],
      footerStart: '1970s',
      plateauWarning: '⚠️ Plateau & Atomic Limits Stage',
      footerEnd: 'Current Decade',
    },
    physicalLimits: {
      title: '🛑 Nanoscale Physical Limits (Why Moore Slows Down?):',
      badge: 'Physical Barriers',
      limits: [
        {
          num: 1,
          title: '1. Power Consumption & Heat (Power Wall):',
          desc: 'Tremendous heat generated per square millimeter that exceeds conventional cooling limits.',
        },
        {
          num: 2,
          title: '2. Leakage Current:',
          desc: 'Like a leaking faucet; electrons bleed through even when the transistor is in the OFF (0) state.',
        },
        {
          num: 3,
          title: '3. Quantum Tunneling:',
          desc: 'When gate oxides thin down to just a few atoms, electrons tunnel through barriers like ghosts, causing transistors to lose switching control!',
          colSpan: true,
        },
      ],
    },
    architecturalSolutions: {
      title: '🚀 Architectural Solutions to Bypass Frequency Walls:',
      badge: 'Solutions',
      points: [
        'Multi-Core Architecture: Placing multiple cores operating at moderate frequencies to conserve power.',
        'Parallel Processing: Decomposing massive workloads into concurrent sub-tasks executed simultaneously.',
        'Specialized Accelerators: Dedicated hardware units (GPUs, NPUs, TPUs) for AI matrix math and graphics.',
        '3D Chiplets & Advanced Packaging: Vertical silicon stacking to shorten interconnect physical distances.',
      ],
      examAnalogy:
        '💡 Exam Analogy: Instead of exhausting a single runner to sprint impossibly fast until collapsing; we deploy a team of 8 or 16 runners sharing the distance simultaneously!',
    },
  },

  column3: {
    title: 'The Five Social Transformations & Digital Trinity',
    digitalTrinity: {
      title: 'The Digital Infrastructure Trinity Driving Every Transformation:',
      items: [
        { icon: '📱', label: 'Mobile Smartphone' },
        { icon: '🌐', label: 'High-Speed Internet' },
        { icon: '☁️', label: 'Elastic Cloud Computing' },
      ],
    },
    transformations: [
      {
        num: 1,
        title: '1. Social Networks (SNS):',
        badge: 'Dissolution of Space',
        color: 'blue',
        desc: 'Virtual affinity communities, instantaneous news propagation, and direct impact on public discourse and creator economies.',
      },
      {
        num: 2,
        title: '2. E-Commerce:',
        badge: '24/7 Global Markets',
        color: 'emerald',
        desc: 'Eliminating geographical barriers, real-time price comparisons, lowered overhead/lease costs, and agile digital supply chains.',
      },
      {
        num: 3,
        title: '3. Remote Work:',
        badge: 'Spatiotemporal Flexibility',
        color: 'amber',
        desc: 'Freelancing and global collaboration across borders, reduced urban traffic and emissions, focusing on deliverables over hours.',
      },
      {
        num: 4,
        title: '4. E-Learning:',
        badge: 'Democratizing Knowledge',
        color: 'indigo',
        desc: 'Interactive MOOC platforms, self-paced learning, and individualized learning pathways adapted to each student’s pace.',
      },
      {
        num: 5,
        title: '5. Cashless Society:',
        badge: 'Digital Wallets & QR',
        color: 'purple',
        desc: 'Secure instant payments, reduced physical cash handling and counterfeiting, financial inclusion, and automated personal budgeting.',
      },
    ],
    crucialNotes: {
      title: '⭐ Crucial Exam Notes — Memorize Essential Distinctions:',
      badge: 'Key Distinctions',
      points: [
        {
          label: 'AR ≠ VR:',
          text: 'Augmented Reality (AR) overlays digital data over physical reality; Virtual Reality (VR) immerses the user inside a fully synthetic simulation.',
        },
        {
          label: 'Cloud ≠ Edge:',
          text: 'Cloud is centralized remote hyperscale infrastructure; Edge is localized processing near data sources to eliminate latency.',
        },
        {
          label: 'Single-Core ≠ Multi-Core:',
          text: 'Single-core hits the thermal ceiling; multi-core distributes tasks across parallel execution units.',
        },
        {
          label: 'Evolutionary Sequence:',
          text: 'Transistor ⟵ Integrated Circuit (IC) ⟵ Microprocessor ⟵ PC ⟵ Smartphone, Cloud & AI.',
        },
      ],
    },
  },

  column4: {
    title: 'Technical Comparisons, Stakeholders & Exam Traps',
    comparisonTable: {
      headers: ['Concept', 'What Happens in Reality?', 'Precise Practical Example'],
      rows: [
        {
          concept: 'Augmented Reality (AR)',
          reality: 'Superimposes 3D assets & data over real environment',
          example: 'Camera lenses/filters, IKEA room placement preview',
          color: 'blue',
        },
        {
          concept: 'Virtual Reality (VR)',
          reality: 'Complete immersion in artificial world via headset',
          example: 'Flight simulators, virtual surgical training suites',
          color: 'purple',
        },
        {
          concept: 'Cloud Computing',
          reality: 'Remote hyperscale processing & data center storage',
          example: 'Google Drive, large-scale educational LMS platforms',
          color: 'sky',
        },
        {
          concept: 'Edge Computing',
          reality: 'On-device real-time processing to eliminate latency',
          example: 'Autonomous vehicle emergency brakes, smart cameras',
          color: 'amber',
        },
      ],
    },
    stakeholderMatrix: {
      title: '👥 Cashless Society Stakeholder Matrix:',
      stakeholders: [
        {
          icon: '👤',
          role: 'Youth / Tech Consumer',
          color: 'blue',
          desc: 'Frictionless checkout, fraud/loss prevention, effortless budgeting.',
        },
        {
          icon: '🏪',
          role: 'Merchants & Businesses',
          color: 'emerald',
          desc: 'Lower register shrinkage, rapid customer throughput, instant settlements.',
        },
        {
          icon: '👵',
          role: 'Elderly & Excluded Groups',
          color: 'rose',
          desc: 'Digital literacy hurdles, urgent need for simplified UI and fraud safeguards.',
        },
      ],
    },
    examTraps: {
      title: '⚠️ Beware Exam Traps (5 Common Student Errors):',
      badge: 'Exam Traps',
      traps: [
        {
          id: 1,
          wrong: "Moore's Law is an inevitable cosmic law of nature like universal gravity.",
          correction: 'It is merely an empirical industrial forecast for semiconductor scaling that hit physical barriers.',
        },
        {
          id: 2,
          wrong: 'Edge computing will completely cancel and replace cloud computing.',
          correction: 'Edge complements the cloud for low-latency tasks; cloud remains vital for big data and model training.',
        },
        {
          id: 3,
          wrong: 'Augmented Reality (AR) and Virtual Reality (VR) are synonymous terms.',
          correction: 'AR enhances the physical world with digital graphics, while VR replaces it entirely with a simulated world.',
        },
        {
          id: 4,
          wrong: 'Increasing clock speed (GHz) on a single core is an infinite path to speed.',
          correction: 'It slammed into the thermal power wall; multi-core parallelism became the mandatory architectural fix.',
        },
        {
          id: 5,
          wrong: 'A cashless society eliminates all financial problems for all demographics.',
          correction: 'It creates cybersecurity risks and steep adoption barriers for the elderly and unbanked populations.',
        },
      ],
    },
  },

  bottomSection: {
    masterConcepts: {
      title: '10 Master Core Concepts (Essential Exam Vocabulary)',
      subtitle: 'Memorize both English technical terms and precise definitions',
      badge: 'Concept Key Reference',
      concepts: [
        {
          id: 1,
          termEn: 'Transistor',
          termAr: 'الترانزستور',
          color: 'blue',
          def: 'Nanoscale electronic switch toggling between 0 and 1, controlling current flow in digital logic.',
        },
        {
          id: 2,
          termEn: 'Integrated Circuit (IC)',
          termAr: 'الدائرة المتكاملة',
          color: 'blue',
          def: 'Single silicon chip integrating thousands to billions of interconnected transistors and circuit components.',
        },
        {
          id: 3,
          termEn: "Moore's Law",
          termAr: 'قانون مور',
          color: 'blue',
          def: 'Empirical industry rule stating transistor count per chip doubles roughly every two years with falling costs.',
        },
        {
          id: 4,
          termEn: 'CPU Core',
          termAr: 'النواة',
          color: 'blue',
          def: 'Independent arithmetic and logic processing unit capable of executing instruction fetch-decode-execute cycles.',
        },
        {
          id: 5,
          termEn: 'Multi-Core Processing',
          termAr: 'المعالجة متعددة الأنوية',
          color: 'blue',
          def: 'Processor architecture combining two or more physical cores on one die to handle concurrent tasks.',
        },
        {
          id: 6,
          termEn: 'Cloud Computing',
          termAr: 'الحوسبة السحابية',
          color: 'indigo',
          def: 'On-demand delivery of compute power, database storage, applications, and IT resources over the internet.',
        },
        {
          id: 7,
          termEn: 'Edge Computing',
          termAr: 'الحوسبة الطرفية',
          color: 'indigo',
          def: 'Data processing performed locally near sensors and endpoints to minimize network round-trip latency.',
        },
        {
          id: 8,
          termEn: 'Augmented Reality (AR)',
          termAr: 'الواقع المعزز',
          color: 'purple',
          def: 'Interactive experience combining real-world views with computer-generated 3D visual elements in real time.',
        },
        {
          id: 9,
          termEn: 'Virtual Reality (VR)',
          termAr: 'الواقع الافتراضي',
          color: 'purple',
          def: 'Complete immersion inside an artificial 3D computer-generated environment, isolating user from real reality.',
        },
        {
          id: 10,
          termEn: 'Cashless Society',
          termAr: 'المجتمع اللانقدي',
          color: 'emerald',
          def: 'Economic ecosystem relying entirely on digital transactions, bank cards, and mobile wallets instead of physical banknotes.',
        },
      ],
    },
    examPillars: {
      title: '🎯 Before Entering the Exam Room — 6 Critical Pillars:',
      subtitle: 'Ensure thorough understanding of these six foundational points before handing in your paper',
      pillars: [
        {
          id: 1,
          title: '1. Distinguish AR vs VR:',
          text: 'AR blends digital assets into reality; VR constructs an entirely synthetic artificial environment.',
        },
        {
          id: 2,
          title: '2. Cloud vs Edge:',
          text: 'Cloud for massive storage and heavy computing; Edge for critical split-second low-latency actions.',
        },
        {
          id: 3,
          title: "3. Nature of Moore's Law:",
          text: 'An empirical economic and industrial observation, never an immutable physical constant of nature.',
        },
        {
          id: 4,
          title: '4. Hardware to Society:',
          text: 'Transistor miniaturization produced smartphones, which reshaped human societal behavior and daily habits.',
        },
        {
          id: 5,
          title: '5. Multi-Core Imperative:',
          text: 'Bypassing the thermal power wall and quantum leakage by distributing workloads across parallel cores.',
        },
        {
          id: 6,
          title: '6. The Digital Trinity:',
          text: 'Smartphone + High-Speed Internet + Cloud = The foundational engine enabling all five social transformations.',
        },
      ],
    },
  },

  footer: {
    rightsLabel: 'Academic Preparation & Authoring Rights Reserved:',
    authorName: 'Mr. Mohamed Shamel Mohamed',
    authorTitle: '— Senior Teacher of Computer Science, Information Technology & AI.',
    printSpec: 'A4 LANDSCAPE MASTER PRINT EDITION (297mm × 210mm)',
    seriesTitle: 'The Smart Mentor Booklet 2026/2027',
    certifiedBadge: '✓ Certified for Final Comprehensive Revision',
  },
};
