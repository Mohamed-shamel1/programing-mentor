/**
 * Official Lesson 2-2 Exam Questions Bank (English)
 * Title: Comprehensive Exam Bank: Network Security Design
 * Curriculum: Grade 11 — Egyptian Baccalaureate (Term 1)
 * Tone: Simple, clear, student-friendly English matching Al-Faez & Textbook
 */

export const lesson22ExamDataEn = {
  id: 'lesson-2-2-exam-en',
  lessonId: '2-2',
  title: 'Official Exam Question Bank: Network Security Design (Firewall, VPN, DMZ & Zero Trust)',
  curriculumInfo: {
    country: 'Arab Republic of Egypt — Ministry of Education and Technical Education',
    directorate: 'General Education Sector — Technology & Artificial Intelligence Curriculum',
    grade: 'Grade 11 — Egyptian Baccalaureate',
    subject: 'Computer & Cybersecurity',
    term: 'First Term',
    supervision: 'Prepared & Supervised by Eng. Mohamed Shamel',
  },
  totalQuestions: 20,
  autoGradedPoints: 34,
  manualGradedPoints: 6,
  totalPoints: 40,

  sectionA: {
    id: 'section_a',
    title: 'A. Multiple Choice Questions',
    badge: 'MCQ (10 Questions)',
    instruction: 'Select the best answer by clicking on the appropriate option:',
    pointsPerQuestion: 1,
    questions: [
      {
        id: 'mcq_1',
        number: 1,
        question: 'What is the main idea of strong network security? (Textbook p. 68)',
        options: [
          { id: 'A', text: 'Using a single security barrier' },
          { id: 'B', text: 'Using only antivirus software on laptops' },
          { id: 'C', text: 'Removing all network access for employees' },
          { id: 'D', text: 'Layering several security measures (Defense in Depth)' },
        ],
        correctAnswer: 'D',
        explanation: 'Strong network security comes from layering measures (Firewall, VPN, DMZ, endpoint protection) and verifying every access.',
      },
      {
        id: 'mcq_2',
        number: 2,
        question: 'What does a firewall do in a computer network?',
        options: [
          { id: 'A', text: 'Encrypts all local files on computers' },
          { id: 'B', text: 'Creates an encrypted virtual private tunnel' },
          { id: 'C', text: 'Allows or blocks communication based on rules set in advance' },
          { id: 'D', text: 'Stores confidential customer records' },
        ],
        correctAnswer: 'C',
        explanation: 'A firewall inspects traffic at the entry/exit point of a network and filters it according to preset rules.',
      },
      {
        id: 'mcq_3',
        number: 3,
        question: 'Where is a firewall typically installed?',
        options: [
          { id: 'A', text: 'At the entry/exit point of a network' },
          { id: 'B', text: 'Only on an internal database server' },
          { id: 'C', text: 'Inside office printers' },
          { id: 'D', text: 'Only on mobile phones' },
        ],
        correctAnswer: 'A',
        explanation: 'Firewalls stand at the boundary (entry/exit point) between external and internal networks.',
      },
      {
        id: 'mcq_4',
        number: 4,
        question: 'Which access should a firewall allow according to the lesson example?',
        options: [
          { id: 'A', text: 'Direct external access to the database server' },
          { id: 'B', text: 'Access to the public web server in the DMZ' },
          { id: 'C', text: 'Unrestricted access to all internal workstations' },
          { id: 'D', text: 'Anonymous external access to payroll files' },
        ],
        correctAnswer: 'B',
        explanation: 'A firewall allows external access to the public web server, but denies direct external access to the confidential database server.',
      },
      {
        id: 'mcq_5',
        number: 5,
        question: 'What does a Virtual Private Network (VPN) create over the Internet?',
        options: [
          { id: 'A', text: 'An encrypted virtual private tunnel/channel' },
          { id: 'B', text: 'A public web server open to anyone' },
          { id: 'C', text: 'A free public database' },
          { id: 'D', text: 'An online shopping store' },
        ],
        correctAnswer: 'A',
        explanation: 'A VPN creates an encrypted virtual private tunnel over the public Internet for safe remote connections.',
      },
      {
        id: 'mcq_6',
        number: 6,
        question: 'Why does a VPN reduce the risk of eavesdropping on public Wi-Fi?',
        options: [
          { id: 'A', text: 'It blocks Wi-Fi signals from other devices' },
          { id: 'B', text: 'It encrypts the communication content' },
          { id: 'C', text: 'It deletes browser history from the device' },
          { id: 'D', text: 'It doubles the Internet speed' },
        ],
        correctAnswer: 'B',
        explanation: 'Because data traveling through the VPN is encrypted, eavesdroppers on public Wi-Fi cannot read it.',
      },
      {
        id: 'mcq_7',
        number: 7,
        question: 'What is a Demilitarized Zone (DMZ)?',
        options: [
          { id: 'A', text: 'A zone for public-facing servers separated from the internal network' },
          { id: 'B', text: 'A new type of antivirus software' },
          { id: 'C', text: 'A system for generating one-time passwords' },
          { id: 'D', text: 'A chat app for company employees' },
        ],
        correctAnswer: 'A',
        explanation: 'A DMZ is an isolated buffer zone where public servers are placed so an attack on them cannot jump into internal networks.',
      },
      {
        id: 'mcq_8',
        number: 8,
        question: 'Which security measure belongs to Layer 1: Network Entry in Defense in Depth?',
        options: [
          { id: 'A', text: 'Installing antivirus software' },
          { id: 'B', text: 'Encrypting communication using a VPN' },
          { id: 'C', text: 'Separating servers in a DMZ' },
          { id: 'D', text: 'Blocking unauthorized communication using a firewall' },
        ],
        correctAnswer: 'D',
        explanation: 'Layer 1 protects the network entry point using a firewall.',
      },
      {
        id: 'mcq_9',
        number: 9,
        question: 'What is the main principle of the Zero Trust approach?',
        options: [
          { id: 'A', text: 'Automatically trust any connection from inside the office' },
          { id: 'B', text: 'Never trust any communication automatically, and always verify every access' },
          { id: 'C', text: 'Rely on a single password for the company CEO' },
          { id: 'D', text: 'Stop using firewalls completely' },
        ],
        correctAnswer: 'B',
        explanation: 'Zero Trust means: "Never trust, always verify" every request, regardless of whether it comes from inside or outside.',
      },
      {
        id: 'mcq_10',
        number: 10,
        question: 'Why have traditional perimeter-based security designs become insufficient today?',
        options: [
          { id: 'A', text: 'Computers no longer use the Internet' },
          { id: 'B', text: 'Firewalls have stopped working worldwide' },
          { id: 'C', text: 'Cloud services and remote work have blurred the boundary between inside and outside' },
          { id: 'D', text: 'Every employee has become a cybersecurity expert' },
        ],
        correctAnswer: 'C',
        explanation: 'Cloud services and working from home mean company data and staff are no longer inside a physical castle perimeter.',
      },
    ],
  },

  sectionB: {
    id: 'section_b',
    title: 'B. True or False Conceptual Questions (Al-Faez p. 76)',
    badge: 'True / False (4 Questions)',
    instruction: 'Decide whether each statement is True or False:',
    pointsPerQuestion: 2,
    questions: [
      {
        id: 'tf_1',
        number: 1,
        statement: 'A firewall allows or blocks communication based on rules set in advance.',
        correctAnswer: true,
        explanation: 'True. This is the exact definition and core function of a firewall.',
      },
      {
        id: 'tf_2',
        number: 2,
        statement: 'A confidential database server should be placed directly inside the DMZ for higher security.',
        correctAnswer: false,
        explanation: 'False! Only public-facing servers (Web/Mail) go in the DMZ. Database servers must stay in the protected internal network.',
      },
      {
        id: 'tf_3',
        number: 3,
        statement: 'Using a VPN reduces the risk of eavesdropping even on public Wi-Fi networks.',
        correctAnswer: true,
        explanation: 'True. A VPN encrypts all traffic passing between the client device and the network.',
      },
      {
        id: 'tf_4',
        number: 4,
        statement: 'In the Zero Trust approach, a user is automatically trusted as soon as they connect from inside the office building.',
        correctAnswer: false,
        explanation: 'False! Zero Trust verifies identity, permissions, and context on every request, even from inside the office.',
      },
    ],
  },

  sectionC: {
    id: 'section_c',
    title: 'C. Matching Security Target to Technology (Al-Faez p. 75)',
    badge: 'Matching (3 Items)',
    instruction: 'Match each security goal with its appropriate technology:',
    pointsPerQuestion: 2,
    questions: [
      {
        id: 'match_1',
        number: 1,
        target: 'Creates an encrypted virtual private line over the Internet for safe remote connection.',
        correctOptionId: 'opt_vpn',
        correctOptionText: 'Virtual Private Network (VPN)',
        explanation: 'VPN provides an encrypted tunnel for remote work and safe browsing.',
      },
      {
        id: 'match_2',
        number: 2,
        target: 'An area where servers exposed to the outside are placed separately from the internal network.',
        correctOptionId: 'opt_dmz',
        correctOptionText: 'Demilitarized Zone (DMZ)',
        explanation: 'DMZ isolates public servers to protect the internal network.',
      },
      {
        id: 'match_3',
        number: 3,
        target: 'Allows or blocks communication at the entry/exit point of a network based on preset rules.',
        correctOptionId: 'opt_fw',
        correctOptionText: 'Firewall',
        explanation: 'A firewall monitors and filters traffic based on preset access control rules.',
      },
    ],
  },

  sectionD: {
    id: 'section_d',
    title: 'D. Official Exam Essay Question (6 Marks) — Al-Faez p. 72',
    badge: 'Essay Question (6 Marks)',
    instruction: 'Explain in detail using the concept of Defense in Depth and what happens if one measure is breached:',
    question: 'Explain why layering several security measures (Defense in Depth) protects an organization better than relying on a firewall alone. [6 Marks]',
    officialRubric: [
      { criterion: 'Explain the flaw of relying on a firewall alone (single point of failure)', marks: 3 },
      { criterion: 'Explain the strength of Defense in Depth (subsequent layers contain the breach)', marks: 3 }
    ],
    modelAnswer: 'Relying on a firewall alone creates a dangerous single point of failure. While a firewall is an excellent barrier at the network entry, if an attacker successfully breaches it (via zero-day exploits, misconfiguration, or phishing), all internal corporate servers, database files, and workstations are completely exposed with no second line of defense.\n\nIn contrast, Defense in Depth layers multiple independent security measures across the network: Network Entry (Firewall), Communication Path (VPN), Server Placement (DMZ), and Endpoints (Antivirus & OS updates). If an attacker breaches the network entry or compromises a public web server, the DMZ stops the attack from jumping to internal databases, the VPN prevents wiretapping of remote traffic, and endpoint antivirus blocks malicious execution. This ensures that a single breach does not compromise the entire organization.'
  }
};

