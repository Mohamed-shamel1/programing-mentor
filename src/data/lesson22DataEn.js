/**
 * Lesson 2-2 Educational Data (Curriculum Source of Truth - English)
 * Title: Network Security Design
 * Unit: Unit 2: Cybersecurity Defense
 * Grade: Grade 11 — Egyptian Baccalaureate (Term 1)
 * Source: Egyptian Ministry of Education Textbook & Al-Faez Study Guide (Pages 68-77)
 * Tone: Simple, student-friendly, exam-aligned English
 */

export const lesson22DataEn = {
  id: 'term1-ch2-l02',
  term: 1,
  chapterNumber: 2,
  lessonNumber: '2-2',
  title: 'Network Security Design',
  unitTitle: 'Unit 2: Cybersecurity Defense',
  subtitle: 'Firewall, VPN, DMZ, Defense in Depth, and the Zero Trust Revolution',
  estimatedDurationMinutes: 60,
  learningObjectives: [
    'Explain the role of the 3 core network tools: Firewall, Virtual Private Network (VPN), and Demilitarized Zone (DMZ).',
    'Apply the 4 layers of Defense in Depth to design a resilient network where if one defense fails, the next still protects.',
    'Compare traditional Perimeter Security with modern Zero Trust, explaining why cloud services and remote work forced this shift.'
  ],
  glossary: [
    { acronym: 'FW', fullEn: 'Firewall', termAr: 'جدار الحماية', desc: 'A system at the entry/exit point of a network that allows or denies traffic based on preset rules.' },
    { acronym: 'VPN', fullEn: 'Virtual Private Network', termAr: 'الشبكة الافتراضية الخاصة', desc: 'Creates an encrypted virtual private tunnel over the Internet, allowing safe remote connections and protecting on public Wi-Fi.' },
    { acronym: 'DMZ', fullEn: 'Demilitarized Zone', termAr: 'المنطقة المعزولة', desc: 'A separate network zone where public-facing servers (web/mail) are placed away from the internal network to prevent damage.' },
    { acronym: 'DiD', fullEn: 'Defense in Depth', termAr: 'الدفاع في العمق', desc: 'Layering multiple security measures so that if one measure is breached, the next one still protects the system.' },
    { acronym: 'ZT', fullEn: 'Zero Trust', termAr: 'نهج انعدام الثقة', desc: 'A security concept where the system never trusts any access automatically (even from inside the office) and verifies every request.' },
    { acronym: 'Perimeter', fullEn: 'Perimeter Security', termAr: 'أمان المحيط', desc: 'The old security model assuming "inside is safe, outside is dangerous", which failed due to cloud services and remote work.' },
    { acronym: 'Endpoint', fullEn: 'Endpoint Security', termAr: 'الأجهزة الطرفية', desc: 'Securing user devices (laptops, phones) by installing antivirus software and keeping the OS updated.' },
    { acronym: 'Rule', fullEn: 'Preset Rule', termAr: 'قاعدة أمنية مسبقة', desc: 'A firewall policy (e.g., allow traffic to the web server, but deny direct external access to the database server).' }
  ],
  pages: [
    {
      id: 'page-01',
      pageNumber: '01',
      totalPages: '03',
      type: 'NETWORK_SECURITY_CORE',
      badgeText: 'Station 1: The 3 Network Security Tools',
      unitTitle: 'Unit 2: Cybersecurity Defense',
      lessonTitle: 'Lesson 2-2: Network Security Design',
      pageTag: 'CH-02 // PAGE 01',
      content: {
        badge: 'Lecture 06 — Station One',
        title: 'The 3 Network Security Tools: Firewall, VPN & DMZ',
        subtitle: 'How to build a fortress for an organization network instead of relying on a single lock on the door',
        dailyHumorNote: 'Relying on a firewall alone is like putting an armored steel door on your house but leaving the balcony wide open to the street!',
        grandQuestion: 'How can an organization design its network so that even if one defense is breached, the system stays protected?',

        foundationBox: {
          title: 'The Core Idea of Network Security (Textbook p. 68):',
          conceptText: 'An organization network holds confidential data: customer records, financial files, and private messages. Attackers constantly look for a way in. A single lock on the front door is not enough; if it is picked, everything inside is exposed!',
          goldenRule: 'Exam Rule: "Strong network security comes from layering several measures (Firewall + VPN + DMZ) and verifying every access, not from a single barrier."'
        },

        coreTools: [
          {
            id: 'tool-firewall',
            nameAr: '1. جدار الحماية (Firewall)',
            nameEn: '1. The Firewall (Network Gatekeeper)',
            badge: 'Traffic Officer at the Gate',
            icon: 'security',
            color: '#dc2626',
            bgColor: '#fef2f2',
            borderColor: '#fca5a5',
            definition: 'A system installed at the entry/exit point of a network that allows or denies communication based on rules set in advance.',
            examExample: 'Classic Exam Example: It allows external access to the Web Server, but strictly denies direct external access to the Database Server!',
            threatPrevented: 'Blocks unauthorized traffic and direct network intrusion from the outside.'
          },
          {
            id: 'tool-vpn',
            nameAr: '2. الشبكة الافتراضية الخاصة (VPN)',
            nameEn: '2. Virtual Private Network (VPN)',
            badge: 'Encrypted Armored Tunnel over the Internet',
            icon: 'vpn_lock',
            color: '#0284c7',
            bgColor: '#f0f9ff',
            borderColor: '#bae6fd',
            definition: 'A technology that creates an encrypted virtual private line/channel over the Internet, allowing safe connection to a network from a remote location.',
            examExample: 'Main Uses: Remote work (connecting safely from home) and connecting branch offices in different locations safely.',
            threatPrevented: 'Reduces the risk of eavesdropping (wiretapping) even when using public Wi-Fi in cafes or airports!'
          },
          {
            id: 'tool-dmz',
            nameAr: '3. المنطقة المعزولة (DMZ)',
            nameEn: '3. Demilitarized Zone (DMZ)',
            badge: 'The Buffer Zone for Public Servers',
            icon: 'dns',
            color: '#059669',
            bgColor: '#ecfdf5',
            borderColor: '#a7f3d0',
            definition: 'An area where servers exposed to the external network (web servers, mail servers) are placed separately from the internal network.',
            examExample: 'Key Security Purpose: Even if a public-facing server is attacked, damage to the internal network and database is prevented!',
            threatPrevented: 'Stops an attack on public web servers from reaching private internal computers and databases.'
          }
        ],

        topologyTitle: 'Network Security Topology Flow',
        topologySteps: [
          { label: 'Public Internet', desc: 'External users, customers, and attackers', icon: 'public', type: 'external' },
          { label: 'Firewall', desc: 'Inspects traffic based on preset security rules', icon: 'shield', type: 'firewall' },
          { label: 'DMZ Zone', desc: 'Holds public-facing Web & Mail servers only', icon: 'dns', type: 'dmz' },
          { label: 'Internal Network', desc: 'Confidential database servers & employee PCs', icon: 'lock', type: 'internal' }
        ],

        examTraps: [
          {
            trapTitle: 'Dangerous Exam Trap: Where is the Database Server placed?',
            trapWarning: 'Never place the Database Server in the DMZ! Only public-facing servers (Web/Mail) go into the DMZ. The Database Server stays in the internal network, and the firewall blocks direct external access to it!'
          },
          {
            trapTitle: 'Exam Trap 2: Does a VPN stop all cyber attacks?',
            trapWarning: 'A VPN only encrypts the tunnel and prevents Wi-Fi eavesdropping. It does not replace a firewall, and it cannot stop malware if you download an infected file yourself!'
          }
        ],

        quickCheck: {
          question: 'A properly configured firewall allows direct external access from the Internet to the database server? (True or False?)',
          correctAnswer: 'False',
          explanation: 'False! A firewall strictly denies direct external access to the database server to protect confidential data. It only allows access to public web servers in the DMZ.'
        }
      }
    },
    {
      id: 'page-02',
      pageNumber: '02',
      totalPages: '03',
      type: 'DEFENSE_IN_DEPTH_LAYERS',
      badgeText: 'Station 2: Defense in Depth Layers',
      unitTitle: 'Unit 2: Cybersecurity Defense',
      lessonTitle: 'Lesson 2-2: Network Security Design',
      pageTag: 'CH-02 // PAGE 02',
      content: {
        badge: 'Lecture 06 — Station Two',
        title: 'The 4 Layers of Defense in Depth (DiD)',
        subtitle: 'How to layer defenses so that if one barrier fails, the next still protects the organization',
        dailyHumorNote: 'Defense in depth is like a castle with a moat, an iron gate, guard dogs, and a coded vault. No hacker can breach all of them at once!',

        coreConcept: {
          title: 'What is Defense in Depth (DiD)?',
          definition: 'The concept of layering multiple security measures so that, even if one measure is breached, the next can still protect the system and its confidential data.',
          examWhy: 'Exam Question: "Why not rely on a firewall alone?" ➔ Because if a single barrier is picked, everything inside is exposed. Layering ensures secondary barriers stand in the attacker way.'
        },

        layersTableTitle: 'The 4 Network Security Layers and Approved Measures (Textbook Table p. 70)',
        layers: [
          {
            layerNumber: 'Layer 1',
            layerNameAr: 'الطبقة 1: مدخل الشبكة',
            layerNameEn: 'Layer 1: Network Entry',
            measureAr: 'حظر الاتصالات غير المصرح بها بجدار الحماية',
            measureEn: 'Block unauthorized communication using a firewall',
            threatTarget: 'Stops direct external network attacks and unauthorized port scanning',
            icon: 'security',
            badgeColor: '#dc2626'
          },
          {
            layerNumber: 'Layer 2',
            layerNameAr: 'الطبقة 2: مسار الاتصال',
            layerNameEn: 'Layer 2: Communication Path',
            measureAr: 'تشفير الاتصال باستخدام VPN',
            measureEn: 'Encrypt communication using a VPN',
            threatTarget: 'Protects remote work traffic from Wi-Fi eavesdropping and wiretapping',
            icon: 'vpn_lock',
            badgeColor: '#0284c7'
          },
          {
            layerNumber: 'Layer 3',
            layerNameAr: 'الطبقة 3: موضع الخوادم',
            layerNameEn: 'Layer 3: Server Placement',
            measureAr: 'فصل الخوادم العامة عن الداخلية في DMZ',
            measureEn: 'Separate public-facing servers from internal network using a DMZ',
            threatTarget: 'Contains attacks on web servers and stops them from jumping to internal databases',
            icon: 'dns',
            badgeColor: '#059669'
          },
          {
            layerNumber: 'Layer 4',
            layerNameAr: 'الطبقة 4: الأجهزة الطرفية',
            layerNameEn: 'Layer 4: Endpoint Protection',
            measureAr: 'تثبيت مضاد الفيروسات وتحديث النظام',
            measureEn: 'Install antivirus software and keep the OS updated',
            threatTarget: 'Protects laptops and smartphones from malware, ransomware, and software exploits',
            icon: 'laptop_mac',
            badgeColor: '#7c3aed'
          }
        ],

        essayQuestionBox: {
          badge: 'Official 6-Mark Exam Essay Question (Al-Faez p. 72)',
          question: 'Explain why layering several security measures (Defense in Depth) protects an organization better than relying on a firewall alone. [Refer to: what happens if one measure is breached]',
          modelAnswerTitle: 'Official Approved Model Answer:',
          points: [
            {
              title: '1. The Risk of a Single Firewall:',
              text: 'A firewall is an excellent barrier at the network entry point. However, if an organization relies on it alone and an attacker breaches it (via zero-day exploits, phishing, or misconfiguration), all internal servers and confidential files become completely exposed.'
            },
            {
              title: '2. The Power of Defense in Depth:',
              text: 'In Defense in Depth, even if an attacker breaches the network entry or hacks a public web server, the DMZ isolates the internal network, VPN encrypts data in flight, and endpoint antivirus blocks malicious execution. The breach is contained.'
            }
          ],
          conclusion: 'Summary: Defense in Depth ensures that no single point of failure can destroy the organization security.'
        },

        interactiveActivity: {
          title: 'Quick Exam Check: Match the Measure to its Layer',
          prompt: 'Exam Question: "Separating public-facing servers from internal network" belongs to which layer?',
          answer: 'Belongs to Layer 3: Server Placement using a DMZ.'
        }
      }
    },
    {
      id: 'page-03',
      pageNumber: '03',
      totalPages: '03',
      type: 'ZERO_TRUST_LAB',
      badgeText: 'Station 3: Zero Trust & Engineer Lab',
      unitTitle: 'Unit 2: Cybersecurity Defense',
      lessonTitle: 'Lesson 2-2: Network Security Design',
      pageTag: 'CH-02 // PAGE 03',
      content: {
        badge: 'Lecture 06 — Station Three',
        title: 'The Zero Trust Revolution & The Death of Perimeter Security',
        subtitle: 'Why being inside the office building no longer grants automatic trust, and why we verify every access',
        dailyHumorNote: 'In Zero Trust, even if you are the CEO sitting in your corner office, the system says: Prove who you are first!',

        paradigmShift: {
          title: 'The Security Paradigm Shift: Perimeter Security vs. Zero Trust (p. 71)',
          oldModel: {
            title: 'Conventional Model: Perimeter Security',
            premise: 'Assumes "Inside is safe, outside is dangerous".',
            howItWorked: 'Built a thick wall and firewall around the office. Once a user or device passed the front door, they were granted automatic trust to browse internal files!',
            whyItFailed: 'Why did it fail? (Direct Exam Question Q18):\nCloud services and remote work blurred the boundary between "inside" and "outside"! Data and workers are no longer trapped within physical office walls.'
          },
          newModel: {
            title: 'Modern Architecture: Zero Trust',
            premise: 'Strict Rule: "Never trust automatically, always verify every access".',
            howItWorks: 'The system does not trust any connection, even from inside the organization network! Every time a user or device requests a file, identity, permissions, and device health are verified.',
            benefits: 'Even if an attacker compromises a laptop inside the office, they cannot wander freely across the network because every single file requires separate verification.'
          }
        },

        hospitalCaseStudy: {
          title: 'Engineer Decision Lab: Healthcare Hospital Case Study (p. 73)',
          scenario: 'A hospital is moving its sensitive patient records to a cloud service and letting doctors and nurses access them from home and personal laptops. As the network security engineer, how should you apply both Defense in Depth and Zero Trust together?',
          solutions: [
            {
              measure: '1. Apply Zero Trust Architecture',
              howItHelps: 'Strictly verify doctor identity using Multi-Factor Authentication (MFA) every time they open a patient medical file, even when connecting from inside the hospital.',
              threatAddressed: 'Prevents hijacked sessions or credential theft from exposing patient medical records.'
            },
            {
              measure: '2. Apply Defense in Depth (VPN + Encryption + Endpoint Security)',
              howItHelps: 'Require doctors to connect via an encrypted VPN tunnel from home, while enforcing antivirus updates on their laptops.',
              threatAddressed: 'Protects patient data in transit from eavesdropping on home Wi-Fi and blocks malware.'
            }
          ],
          remainingThreat: {
            threatTitle: 'Potential Threat that Still Remains (Exam Question p. 73):',
            threatText: 'An Insider Threat (authorized staff misusing access) or a doctor falling for Social Engineering / Phishing that steals their active device or credentials.'
          }
        },

        examPortalProps: {
          examHash: '#exam-2-2',
          lessonCode: '2-2',
          isDual: true
        }
      }
    }
  ]
};

