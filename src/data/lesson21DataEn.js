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
    { acronym: 'HTTPS', fullEn: 'Hypertext Transfer Protocol Secure', termAr: 'بروتوكول نقل النص الفائق الآمن', desc: 'A safe way to browse websites using encryption and server identity checks.' },
    { acronym: 'HTTP', fullEn: 'Hypertext Transfer Protocol', termAr: 'بروتوكول نقل النص الفائق', desc: 'Old, unencrypted web traffic where anyone on the network can eavesdrop and read messages.' },
    { acronym: 'TLS', fullEn: 'Transport Layer Security', termAr: 'أمان طبقة النقل', desc: 'The modern security system that encrypts HTTPS connections between browser and server.' },
    { acronym: 'SSL', fullEn: 'Secure Sockets Layer', termAr: 'طبقة المنافذ الآمنة', desc: 'The older historical version of TLS that was used in the past.' },
    { acronym: 'Common-Key', fullEn: 'Common-key Cryptography (Symmetric)', termAr: 'تشفير المفتاح المشترك (المتماثل)', desc: 'Uses one single shared secret key for encryption and decryption; used to exchange large amounts of data quickly.' },
    { acronym: 'Public-Key', fullEn: 'Public-key Cryptography (Asymmetric)', termAr: 'التشفير بالمفتاح العام (غير المتماثل)', desc: 'Uses a pair of related keys: a public key and a private key; used to share keys safely and authenticate.' },
    { acronym: 'Cert', fullEn: 'Digital Certificate', termAr: 'الشهادة الرقمية', desc: 'An official electronic certificate that verifies a website server is genuine and authentic, linking domain name to public key.' },
    { acronym: 'CA', fullEn: 'Certificate Authority', termAr: 'هيئة الشهادات الرقمية', desc: 'A trusted global organization that issues digital certificates; browsers verify server certificates through CAs.' },
    { acronym: 'DS', fullEn: 'Digital Signature', termAr: 'التوقيع الرقمي', desc: 'A security mechanism that detects data tampering and sender impersonation, supporting non-repudiation.' },
    { acronym: 'Non-Rep', fullEn: 'Non-repudiation', termAr: 'عدم التنصل (عدم الإنكار)', desc: 'A security principle ensuring the sender cannot deny having sent the communication or transaction.' },
    { acronym: '2FA', fullEn: 'Two-Factor Authentication', termAr: 'المصادقة الثنائية', desc: 'Using two independent factors from two different categories to verify a user identity.' },
    { acronym: 'MFA', fullEn: 'Multi-Factor Authentication', termAr: 'المصادقة متعددة العوامل', desc: 'Using two or more different factor categories together (Knowledge, Possession, Biometrics).' },
    { acronym: 'OTP', fullEn: 'One-Time Password', termAr: 'كلمة المرور لمرة واحدة', desc: 'A temporary code that works once and expires after a short period (possession factor).' },
    { acronym: 'SMS', fullEn: 'Short Message Service', termAr: 'خدمة الرسائل القصيرة', desc: 'Mobile text messages used to send verification codes (possession factor).' },
    { acronym: 'IC Card', fullEn: 'Integrated Circuit Card', termAr: 'بطاقة الدائرة المتكاملة', desc: 'A smart card with an embedded chip storing keys and identity data (possession factor).' }
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

        // 1. Foundation: HTTP + TLS = HTTPS & The 3 Protections
        protocolFoundation: {
          title: 'The Security Formula: How was HTTPS born?',
          formula: 'HTTP (Plain Web Traffic) + TLS (Security Technology) = HTTPS (Secure Web Communications)',
          httpNote: 'HTTP is the traditional way to browse; all data travels as plain readable text that is easy to eavesdrop on.',
          tlsNote: 'TLS is the security technology that encrypts and protects the connection between your device and the web server.',
          withoutProtection: 'Without these protections, passwords could be stolen and private information read by unauthorized people.'
        },

        // The 3 Specific Protections & Threats (Book p. 55)
        threeProtections: [
          {
            featureAr: 'التشفير (Encryption)',
            featureEn: 'Encryption',
            threatAr: 'التنصت (Eavesdropping)',
            desc: 'Scrambles messages during transit so no third party on the network can read them.'
          },
          {
            featureAr: 'اكتشاف التلاعب (Tamper Detection)',
            featureEn: 'Detection of Tampering',
            threatAr: 'التلاعب بالبيانات (Tampering)',
            desc: 'Detects any attempt to modify or alter web pages and data during communication.'
          },
          {
            featureAr: 'التحقق من الطرف المقابل (Partner Verification)',
            featureEn: 'Verification of Partner',
            threatAr: 'انتحال الشخصية (Impersonation)',
            desc: 'Helps the browser verify the web server is genuine and authentic, not an imposter site.'
          }
        ],

        // Official Exam Padlock Warning (Book Note p. 55)
        padlockWarning: {
          badge: 'Important Exam Warning (Al-Faez p. 55 Note):',
          title: 'The Padlock Fallacy',
          text: 'A site might indeed use HTTPS, yet still be a fraudulent site or display malicious content! HTTPS only proves transit encryption and domain ownership; it does NOT guarantee the site owner is honest or trustworthy.'
        },
        
        definitionCard: {
          termAr: 'اتصال HTTPS ومصافحة TLS',
          termEn: 'HTTPS Connection & TLS Handshake',
          icon: 'lock',
          officialExamDefinition: 'HTTPS is regular HTTP running inside a safe TLS connection. TLS keeps data private and untampered during transit, and helps your browser make sure it is talking to the real website server via a Certificate Authority (CA). The steps to start this connection are called the "TLS Handshake".',
          plainExplanation: 'Imagine sending a secret letter in an iron box. If you send the key with the box, the mailman could open it! So the website sends you an open padlock (its Public Key). You put a temporary secret inside and snap the lock shut. Only the server has the secret Private Key to open it. After that, you both use that shared secret to chat super fast!',
          engineerGoldenRule: 'Golden Exam Rule: "Use Public-Key encryption to safely share keys and authenticate (Safely).. Then use Common-Key encryption to move large amounts of data fast (Quickly)."'
        },

        stagesTitle: 'The 3 Simple Steps of the TLS Handshake (Textbook Table p. 56)',
        stages: [
          {
            stepNumber: '01',
            nameAr: 'التحقق من الشهادة الرقمية',
            nameEn: 'Stage 1: Connection & Certificate Verification',
            actionAr: 'The web server sends a digital certificate and a public key to the browser. The browser verifies the server authenticity through a Certificate Authority (CA) to confirm the site is genuine.',
            protectionMechanism: 'Public-key cryptography',
            icon: 'verified_user',
            badgeColor: '#059669',
            examNote: 'Browser verifies via CA that the destination website is genuine'
          },
          {
            stepNumber: '02',
            nameAr: 'اشتقاق مفاتيح الجلسة وفك التشفير',
            nameEn: 'Stage 2: Key Exchange & Private Key Decryption',
            actionAr: 'The browser creates a common key for communication, encrypts it with the server public key, and sends it. The server decrypts it with its secret Private Key to obtain the common key.',
            protectionMechanism: 'Public-key cryptography',
            icon: 'vpn_key',
            badgeColor: '#0d9488',
            examNote: 'Exam Fact (Q8): The server decrypts the common key using its secret Private Key'
          },
          {
            stepNumber: '03',
            nameAr: 'تبادل البيانات المشفرة بالمفتاح المشترك',
            nameEn: 'Stage 3: Data Communication via Common-Key',
            actionAr: 'Data is encrypted and exchanged between browser and server using the shared common key agreed upon.',
            protectionMechanism: 'Common-key cryptography',
            icon: 'bolt',
            badgeColor: '#0284c7',
            examNote: 'Used to exchange large amounts of data quickly and efficiently'
          }
        ],

        // Modern vs Classic Note
        keyExchangeNote: 'Textbook Note (p. 56): The exchange above shows one classic way a common key can be shared (RSA). Current versions of TLS use Diffie-Hellman key agreement instead.',

        // Official 6-Mark Essay Question Box: Division of Roles (Book p. 56 & p. 60)
        divisionOfRoles: {
          badge: 'Official 6-Mark Exam Essay Question (Al-Faez p. 60)',
          title: 'Division of Roles in HTTPS Communication:',
          question: 'Explain why HTTPS uses public-key cryptography to share the key but common-key cryptography to exchange the data. Refer to: security and speed.',
          coreReason: 'This division of roles makes it possible to achieve both security and communication speed:',
          publicKeyPart: '• Public-key cryptography: Used to "share keys safely" and authenticate at the beginning without sending the secret key over the wire.',
          commonKeyPart: '• Common-key cryptography: Used to "exchange large amounts of data quickly" because it is lightweight and fast on computer processors.',
          summarySentence: 'This clever division of roles allows online services to achieve bulletproof security and lightning-fast speed at the same time.'
        },

        comparisonBox: {
          title: 'Exam Comparison: Common-Key Cryptography vs. Public-Key Cryptography',
          symmetric: {
            title: 'Common-Key (Symmetric) Cryptography',
            keyInfo: 'Uses ONE shared secret key for locking and unlocking',
            pros: 'Exchanges large amounts of data quickly with high efficiency',
            cons: 'Hard to share the secret key safely over the Internet initially',
            roleInHttps: 'Protects all actual browsing and streaming session data'
          },
          asymmetric: {
            title: 'Public-Key (Asymmetric) Cryptography',
            keyInfo: 'Uses TWO linked keys: a Public Key (for everyone) and a Private Key (secret to server)',
            pros: 'Shares keys safely and authenticates without sending the secret key',
            cons: 'Very slow and takes 1,000 times more processing power',
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
            techName: 'Encryption (Common-Key & Public-Key)',
            techNameEn: 'Encryption (Common-Key & Public-Key)',
            effect: 'Keeps communication content private and stops eavesdropping on the network.',
            threatAddressed: 'Eavesdropping & wiretapping on data in transit'
          },
          {
            techName: 'Digital Certificate (via CA)',
            techNameEn: 'Digital Certificate (via CA)',
            effect: 'Helps browser confirm via trusted CA that the communication partner is authentic and genuine.',
            threatAddressed: 'Fake imposter websites and scam clones'
          },
          {
            techName: 'Two-Factor Authentication (2FA)',
            techNameEn: 'Two-Factor Authentication (2FA)',
            effect: 'Prevents unauthorized logins even if a password is compromised using a 2nd independent factor.',
            threatAddressed: 'Unauthorized logins and stolen passwords'
          },
          {
            techName: 'Digital Signature',
            techNameEn: 'Digital Signature',
            effect: 'Detects data tampering or sender impersonation, and guarantees Non-repudiation (sender cannot deny).',
            threatAddressed: 'Message tampering, impersonation & denying sent data'
          }
        ],

        examTraps: [
          {
            trapTitle: 'True/False Exam Trap: Does HTTPS guarantee content is never fraudulent? (TF Q20)',
            trapText: '❌ False! HTTPS only encrypts the connection and proves server domain ownership. It does NOT guarantee that the owner is honest or that the content cannot be a scam!'
          },
          {
            trapTitle: 'True/False Exam Trap: Does a Digital Signature guarantee a site is trustworthy? (TF Q18)',
            trapText: '❌ False! A digital signature verifies data integrity and signer identity; it does NOT guarantee the website is trustworthy or that its content is always correct.'
          }
        ],

        scientificConcepts: [
          {
            id: 'sc-1',
            termEn: 'HTTPS',
            termAr: 'بروتوكول نقل النص الفائق الآمن (HTTPS)',
            definitionEn: 'A protocol that uses HTTP over a secure TLS connection to provide secure web communications.',
            definitionAr: 'بروتوكول يستخدم HTTP عبر اتصال TLS آمن لتوفير اتصالات ويب محمية.'
          },
          {
            id: 'sc-2',
            termEn: 'TLS Handshake',
            termAr: 'مصافحة TLS',
            definitionEn: 'The sequence of steps and procedure used to establish a secure communication connection between browser and server using TLS.',
            definitionAr: 'سلسلة الخطوات والإجراءات المتبعة لإنشاء اتصال آمن بين المتصفح والخادم باستخدام TLS.'
          },
          {
            id: 'sc-3',
            termEn: 'Digital Certificate',
            termAr: 'الشهادة الرقمية',
            definitionEn: 'A certificate that helps the browser verify the identity of the server and its association with the domain name to ensure it is genuine.',
            definitionAr: 'شهادة تساعد المتصفح على التحقق من هوية الخادم وارتباطه باسم النطاق للتأكد من أن الموقع أصلي.'
          },
          {
            id: 'sc-4',
            termEn: 'Public-Key Cryptography',
            termAr: 'التشفير بالمفتاح العام (غير المتماثل)',
            definitionEn: 'A type of cryptography that uses a pair of related keys: a public key and a private key (used to share keys safely).',
            definitionAr: 'نوع تشفير يستخدم زوجاً من المفاتيح المترابطة: مفتاح عام ومفتاح خاص (يُستخدم لمشاركة المفاتيح بأمان).'
          },
          {
            id: 'sc-5',
            termEn: 'Common-Key Cryptography',
            termAr: 'تشفير المفتاح المشترك (المتماثل)',
            definitionEn: 'A type of cryptography used to protect communication data quickly and efficiently after session keys are established (used to exchange large amounts of data quickly).',
            definitionAr: 'نوع تشفير يُستخدم لحماية بيانات الاتصال بسرعة وكفاءة بعد إنشاء مفاتيح الجلسة (لتبادل كميات ضخمة من البيانات بسرعة).'
          },
          {
            id: 'sc-6',
            termEn: 'Two-Factor Authentication (2FA)',
            termAr: 'المصادقة الثنائية (2FA)',
            definitionEn: 'The use of two independent factors from two different categories to verify a user\'s identity.',
            definitionAr: 'استخدام عاملين مستقلين من فئتين مختلفتين تماماً للتحقق من هوية المستخدم.'
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
