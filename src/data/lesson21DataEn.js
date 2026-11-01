/**
 * Lesson 2-1 Educational Data (Curriculum Source of Truth - English)
 * Title: Encryption & Authentication Techniques
 * Unit: Unit 2: Cybersecurity Defense
 * Grade: Grade 11 — Egyptian Baccalaureate (Term 1)
 * Tone: Super friendly, simple, easy-to-read English for students
 */

export const lesson21DataEn = {
  id: 'term1-ch2-l01',
  term: 1,
  chapterNumber: 2,
  lessonNumber: '2-1',
  title: 'Encryption & Authentication Techniques',
  unitTitle: 'Unit 2: Cybersecurity Defense',
  subtitle: 'How Encryption and Logins Work Together to Keep You Safe Online',
  estimatedDurationMinutes: 60,
  learningObjectives: [
    'Explain how HTTPS connections use different tools (TLS, Public Keys, Symmetric Keys) to protect your web traffic.',
    'Clearly tell the difference between Encryption, Digital Certificates, 2-Factor Authentication (2FA), and Digital Signatures.',
    'Judge and choose the best login method for a real situation (like a school grades portal), balancing safety and easy access.'
  ],
  glossary: [
    { acronym: 'HTTPS', fullEn: 'Hypertext Transfer Protocol Secure', termAr: 'بروتوكول نقل النص الفائق الآمن', desc: 'A safe way to browse websites using encryption and identity checks.' },
    { acronym: 'HTTP', fullEn: 'Hypertext Transfer Protocol', termAr: 'بروتوكول نقل النص الفائق', desc: 'Old, unsafe web traffic where anyone on the network can read your messages.' },
    { acronym: 'TLS', fullEn: 'Transport Layer Security', termAr: 'أمان طبقة النقل', desc: 'The modern security system that locks and encrypts HTTPS connections.' },
    { acronym: 'SSL', fullEn: 'Secure Sockets Layer', termAr: 'طبقة المنافذ الآمنة', desc: 'The older version of TLS that was used in the past.' },
    { acronym: '2FA', fullEn: 'Two-Factor Authentication', termAr: 'المصادقة الثنائية', desc: 'Using two different types of proof to log in (like your password + a phone code).' },
    { acronym: 'MFA', fullEn: 'Multi-Factor Authentication', termAr: 'المصادقة متعددة العوامل', desc: 'Using two or more different proofs to log in (Knowledge, Possession, Biometrics).' },
    { acronym: 'OTP', fullEn: 'One-Time Password', termAr: 'كلمة المرور لمرة واحدة', desc: 'A temporary code that works once and expires in a minute.' },
    { acronym: 'SMS', fullEn: 'Short Message Service', termAr: 'خدمة الرسائل القصيرة', desc: 'Standard mobile text messages often used to send login codes.' },
    { acronym: 'IC Card', fullEn: 'Integrated Circuit Card', termAr: 'بطاقة الدائرة المتكاملة', desc: 'A smart card with a computer chip inside that stores digital keys.' },
    { acronym: 'CA', fullEn: 'Certificate Authority', termAr: 'هيئة الشهادات الرقمية', desc: 'A trusted global organization that checks and gives out website certificates.' }
  ],
  pages: [
    {
      id: 'page-01',
      pageNumber: '01',
      totalPages: '03',
      type: 'HTTPS_HANDSHAKE_FLOW',
      badgeText: 'Station 1: HTTPS Secrets & TLS Handshake',
      unitTitle: 'Unit 2: Cybersecurity Defense',
      lessonTitle: 'Lesson 2-1: Encryption & Authentication Techniques',
      pageTag: 'CH-02 // PAGE 01',
      content: {
        badge: 'Lecture 05 — Station One',
        title: 'How HTTPS and the TLS Handshake Work',
        subtitle: 'The Smart Combo: Public-Key Encryption (for safety) + Symmetric Encryption (for speed)',
        dailyHumorNote: 'The green padlock in your browser does NOT mean the website owner is an angel! It just means nobody sitting in the coffee shop Wi-Fi can spy on what you type!',
        grandQuestion: 'How do encryption and authentication work together to protect online connections and services?',
        
        definitionCard: {
          termAr: 'اتصال HTTPS ومصافحة TLS',
          termEn: 'HTTPS Connection & TLS Handshake',
          icon: 'lock',
          officialExamDefinition: 'HTTPS is regular HTTP running inside a safe TLS connection. TLS keeps data private and untampered during transit, and helps your browser make sure it is talking to the real website server. The steps to start this connection are called the "TLS Handshake".',
          plainExplanation: 'Imagine sending a secret letter in an iron box. If you send the key with the box, the mailman could open it! So the website sends you an open padlock (its Public Key). You put a temporary secret inside and snap the lock shut. Only the server has the secret Private Key to open it. After that, you both use that shared secret to chat super fast!',
          engineerGoldenRule: 'Golden Exam Rule: "Use Public-Key encryption to safely shake hands and agree on keys. Then use Symmetric encryption to send all real data fast."'
        },

        stagesTitle: 'The 3 Simple Steps of the TLS Handshake',
        stages: [
          {
            stepNumber: '01',
            nameAr: 'التحقق من الشهادة الرقمية',
            nameEn: 'Step 1: Check the Certificate',
            actionAr: 'The web server sends its Digital Certificate and Public Key. Your browser checks that the certificate is valid, matches the website domain, and is signed by a trusted Certificate Authority (CA).',
            protectionMechanism: 'Public-Key Cryptography',
            icon: 'verified_user',
            badgeColor: '#059669',
            examNote: 'Prevents fake website clones (Impersonation)'
          },
          {
            stepNumber: '02',
            nameAr: 'اشتقاق مفاتيح الجلسة',
            nameEn: 'Step 2: Create the Session Key',
            actionAr: 'Both sides safely exchange secret mathematical numbers. Each side calculates the shared Session Key on its own, without EVER sending the key across the wire!',
            protectionMechanism: 'Public-Key Cryptography',
            icon: 'vpn_key',
            badgeColor: '#0d9488',
            examNote: 'The key is never sent over the wire'
          },
          {
            stepNumber: '03',
            nameAr: 'تبادل البيانات المشفرة بسرعة',
            nameEn: 'Step 3: Fast Data Exchange',
            actionAr: 'Now both sides chat, browse, and send data using fast Symmetric Encryption with the agreed Session Key.',
            protectionMechanism: 'Symmetric Cryptography',
            icon: 'bolt',
            badgeColor: '#0284c7',
            examNote: 'Provides maximum speed for heavy data traffic'
          }
        ],

        comparisonBox: {
          title: 'Why not use Public-Key encryption for everything?',
          symmetric: {
            title: 'Symmetric Encryption',
            keyInfo: 'Uses ONE shared secret key for locking and unlocking',
            pros: 'Super fast and light on computer processors and mobile batteries',
            cons: 'Hard to share the secret key safely at the beginning',
            roleInHttps: 'Protects all actual browsing and streaming data'
          },
          asymmetric: {
            title: 'Public-Key (Asymmetric) Encryption',
            keyInfo: 'Uses TWO linked keys: a Public Key (for everyone) and a Private Key (secret to server)',
            pros: 'Extremely safe; you can share the public key openly without fear',
            cons: 'Very slow and takes 1,000 times more math power',
            roleInHttps: 'Used ONLY at the beginning to shake hands and agree on keys'
          }
        },

        quickCheck: {
          question: 'Does an HTTPS connection encrypt all web pages using Public-Key encryption? (True or False?)',
          correctAnswer: 'False',
          explanation: 'False! Public-key math is too slow for big web pages. It is only used at the beginning to shake hands. After that, fast Symmetric encryption takes over!'
        }
      }
    },
    {
      id: 'page-02',
      pageNumber: '02',
      totalPages: '03',
      type: 'AUTHENTICATION_FACTORS',
      badgeText: 'Station 2: Authentication Shields (2FA & MFA)',
      unitTitle: 'Unit 2: Cybersecurity Defense',
      lessonTitle: 'Lesson 2-1: Encryption & Authentication Techniques',
      pageTag: 'CH-02 // PAGE 02',
      content: {
        badge: 'Lecture 05 — Station Two',
        title: 'Authentication in Real Services: 2FA & MFA',
        subtitle: 'The 3 Factor Types: What You Know, What You Have, and What You Are',
        dailyHumorNote: 'Even if your password is "123456", 2FA saves you because the hacker will get stuck when your phone buzzes with a secret OTP code in your pocket!',
        
        coreTerms: [
          {
            term: 'Two-Factor Authentication (2FA)',
            termEn: 'Two-Factor Authentication',
            def: 'Using two independent proofs from two completely different categories to prove who you are (e.g., password + phone code).',
            icon: 'looks_two'
          },
          {
            term: 'Multi-Factor Authentication (MFA)',
            termEn: 'Multi-Factor Authentication',
            def: 'Using two or more different factor categories together (Knowledge, Possession, and Biometrics).',
            icon: 'layers'
          }
        ],

        categories: [
          {
            id: 'cat-knowledge',
            title: '1. Knowledge (Something You Know)',
            subtitle: 'Stored in your brain',
            icon: 'psychology',
            color: '#d97706',
            bgColor: '#fffbeb',
            examples: ['Password', 'Secret PIN', 'Security Question answer'],
            weakness: 'Can be guessed, stolen via phishing emails, or leaked from databases.'
          },
          {
            id: 'cat-possession',
            title: '2. Possession (Something You Have)',
            subtitle: 'Held in your hands',
            icon: 'smartphone',
            color: '#059669',
            bgColor: '#ecfdf5',
            examples: ['Temporary OTP code', 'SMS text code on your phone', 'Smart IC card', 'Authenticator App'],
            weakness: 'Your phone could be physically stolen or your SIM card cloned.'
          },
          {
            id: 'cat-inherence',
            title: '3. Inherence / Biometrics (Something You Are)',
            subtitle: 'Part of your biological body',
            icon: 'fingerprint',
            color: '#7c3aed',
            bgColor: '#f5f3ff',
            examples: ['Fingerprint scan', 'Face ID camera scan', 'Eye Iris scan'],
            weakness: 'You cannot change your face or fingerprint if a database ever leaks them!'
          }
        ],

        servicesTableTitle: 'Real-World Examples from the Textbook',
        services: [
          {
            serviceName: 'Online Banking (Mobile Bank Apps)',
            factorsUsed: 'Password (Knowledge) + One-Time Password OTP (Possession)',
            factorsType: 'Knowledge + Possession',
            whyItMatters: 'Even if a thief learns your password, they cannot steal your money without your phone.'
          },
          {
            serviceName: 'Social Media Logins (Instagram / Facebook)',
            factorsUsed: 'Password (Knowledge) + SMS Code to Phone (Possession)',
            factorsType: 'Knowledge + Possession',
            whyItMatters: 'Stops hackers from taking over your account when passwords leak online.'
          },
          {
            serviceName: 'Entering a Secure Building',
            factorsUsed: 'Smart IC Card (Possession) + Fingerprint Scan (Biometrics)',
            factorsType: 'Possession + Biometrics',
            whyItMatters: 'If someone drops their badge on the floor, an intruder still cannot walk in without their real finger.'
          },
          {
            serviceName: 'Online Shopping Checkout',
            factorsUsed: 'Password (Knowledge) + Credit Card OTP Verification (Possession)',
            factorsType: 'Knowledge + Possession',
            whyItMatters: 'Confirms that the person buying actually holds the real bank card.'
          }
        ],

        stopAndThink: {
          title: 'Stop & Think: Why does a second factor protect you?',
          question: 'If your password gets leaked online, why does a code sent to your phone still save your account?',
          answer: 'Because the two factors are independent! The hacker only has "Knowledge" (your password). But they do not have your physical phone ("Possession") to read the code. Without both factors, the door stays locked!'
        },

        examTrap: {
          title: 'Dangerous Exam Trap: Are two passwords equal to 2FA?',
          warning: 'No! If a website asks you for "Password 1 + Password 2", this is NOT 2FA! Both are from the same category: "Something You Know". True 2FA requires two DIFFERENT categories (like a password + a phone code).'
        }
      }
    },
    {
      id: 'page-03',
      pageNumber: '03',
      totalPages: '03',
      type: 'LAYERED_DEFENSE_LAB',
      badgeText: 'Station 3: Layered Defense & Engineer Lab',
      unitTitle: 'Unit 2: Cybersecurity Defense',
      lessonTitle: 'Lesson 2-1: Encryption & Authentication Techniques',
      pageTag: 'CH-02 // PAGE 03',
      content: {
        badge: 'Lecture 05 — Station Three',
        title: 'Layered Defense, E-Commerce Flow & The School Portal Lab',
        subtitle: 'Combining 4 Tools: Encryption, Certificates, Signatures, and 2FA (Defense in Depth)',
        dailyHumorNote: 'Security is like a medieval castle: a moat, a heavy gate, and guards with shields. There is no single magic lock that stops every thief!',
        
        coreIdea: 'Online security does NOT come from one single tool. It comes from stacking Encryption, Certificates, Signatures, and 2FA together to fight many threats at once.',

        techMatrix: [
          {
            techName: 'Encryption (Symmetric & Public-Key)',
            techNameEn: 'Encryption',
            effect: 'Stops third parties from reading your private messages and passwords.',
            threatAddressed: 'Eavesdropping & wiretapping on the network'
          },
          {
            techName: 'Digital Certificate',
            techNameEn: 'Digital Certificate',
            effect: 'Helps your browser verify the real identity and domain name of the web server.',
            threatAddressed: 'Fake imposter websites and phishing clones'
          },
          {
            techName: 'Two-Factor Authentication (2FA)',
            techNameEn: 'Two-Factor Authentication',
            effect: 'Cuts down unauthorized logins by requiring two separate proofs of identity.',
            threatAddressed: 'Stolen passwords and hacked credentials'
          },
          {
            techName: 'Digital Signature',
            techNameEn: 'Digital Signature',
            effect: 'Checks that data was not altered and proves who signed it (supports Non-Repudiation).',
            threatAddressed: 'Message tampering and denying transactions ("Non-Repudiation")'
          }
        ],

        ecommerceFlowTitle: 'How the 4 Security Tools Work Together in Online Shopping',
        ecommerceSteps: [
          {
            stepNum: '1',
            action: 'Visit the Store',
            role: 'HTTPS connection begins. Encryption scrambles data so nobody on your Wi-Fi can spy.',
            tech: 'Encryption'
          },
          {
            stepNum: '2',
            action: 'Verify the Store',
            role: 'The browser checks the store Digital Certificate to make sure you are at the real website, not a scam.',
            tech: 'Digital Certificate'
          },
          {
            stepNum: '3',
            action: 'Customer Log In',
            role: '2FA asks for your password plus a phone OTP code, stopping intruders even if your password leaked.',
            tech: '2FA (Two-Factor Authentication)'
          },
          {
            stepNum: '4',
            action: 'Confirm & Pay Order',
            role: 'TLS keeps payment data private. A Digital Signature proves you confirmed this specific order and invoice.',
            tech: 'Digital Signature & TLS'
          }
        ],

        engineerLab: {
          title: 'Think Like an Engineer: School Grades & Fees Portal',
          scenario: 'A school in your town is creating a web portal where students check their grades and pay tuition fees. As the systems engineer, which login method should you recommend?',
          options: [
            {
              id: 'opt-pwd-only',
              title: 'Option A: Password Only',
              pros: 'Very simple and fast. Does not require any student to own a smartphone or mobile plan.',
              cons: 'Weak security. Classmates could easily guess or steal passwords to peek at private grades.'
            },
            {
              id: 'opt-2fa-phone',
              title: 'Option B: Password + Phone OTP Code',
              pros: 'High security. Stops students from hacking each other even if passwords leak.',
              cons: 'Students without smartphones or cellular service may get locked out.'
            }
          ],
          stakeholderAnalysis: [
            {
              stakeholder: 'Students',
              benefit: 'Their sensitive grades and private records stay safe from classmates.',
              drawback: 'An extra step every time they log in to check a quiz mark.'
            },
            {
              stakeholder: 'School Administration',
              benefit: 'Protects tuition fee payments and stops parents from filing complaints.',
              drawback: 'Cost of sending SMS codes and helping students who lose their phones.'
            },
            {
              stakeholder: 'Student without a smartphone',
              benefit: 'Their personal data is protected.',
              drawback: 'They could be locked out unless the school provides an accessible backup.'
            }
          ],
          engineerRecommendation: {
            verdict: 'Balanced Engineering Decision:',
            recommendationText: 'Recommend 2FA (Password + Phone OTP) because financial tuition and sensitive grades are involved. But also provide a fair backup for students without phones (like a school smart card or printable backup codes from the computer lab).',
            coreReason: 'Because money and grades are private, and a simple password alone is far too easy to guess or steal.'
          }
        },

        grandSummary: {
          title: 'Summary & Answer to the Grand Question',
          text: 'Internet security relies on combining encryption and authentication in layers: HTTPS uses TLS to check certificates and safely agree on session keys using Public-Key math, then locks all data fast using Symmetric encryption. 2FA blocks intruders by requiring two independent proofs. Layered protection reduces risks across the board without pretending any single tool is completely unbreakable.'
        }
      }
    }
  ]
};
