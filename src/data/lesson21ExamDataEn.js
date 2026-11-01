/**
 * Official Lesson 2-1 Exam Questions Bank (English)
 * Title: Comprehensive Exam Bank: Encryption & Authentication Techniques
 * Curriculum: Grade 11 — Egyptian Baccalaureate (Term 1)
 * Tone: Simple, clear, student-friendly English
 */

export const lesson21ExamDataEn = {
  id: 'lesson-2-1-exam-en',
  lessonId: '2-1',
  title: 'Official Exam Question Bank: Encryption & Authentication Techniques (HTTPS & 2FA)',
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
        question: 'Which of the following statements is FALSE regarding security combinations? (Textbook Page 34):',
        options: [
          { id: 'A', text: 'Encryption prevents third parties from reading the content of your communication' },
          { id: 'B', text: 'Digital Signatures are a technique that increases connection speed' },
          { id: 'C', text: 'Digital Certificates verify that the server you are talking to is genuine' },
          { id: 'D', text: 'By combining multiple security tools, we can stop various threats' },
        ],
        correctAnswer: 'B',
        explanation: 'Digital Signatures verify data integrity and signer identity; they have nothing to do with speeding up network connections.',
      },
      {
        id: 'mcq_2',
        number: 2,
        question: 'Which pair of authentication factors represents: "Facial Recognition + Smart IC Badge"?',
        options: [
          { id: 'A', text: 'Knowledge + Possession' },
          { id: 'B', text: 'Knowledge + Biometrics' },
          { id: 'C', text: 'Biometrics + Possession' },
          { id: 'D', text: 'Knowledge + Knowledge' },
        ],
        correctAnswer: 'C',
        explanation: 'Face recognition is a biological trait (Biometrics / Inherence), and an IC smart badge is a physical object you own (Possession).',
      },
      {
        id: 'mcq_3',
        number: 3,
        question: 'What kind of encryption is used to protect and exchange actual session data in HTTPS?',
        options: [
          { id: 'A', text: 'Public-Key encryption only' },
          { id: 'B', text: 'Symmetric Encryption' },
          { id: 'C', text: 'Hash functions with no keys' },
          { id: 'D', text: 'No encryption is used after the handshake' },
        ],
        correctAnswer: 'B',
        explanation: 'Symmetric encryption is used for session data because it is extremely fast and light on device processors.',
      },
      {
        id: 'mcq_4',
        number: 4,
        question: 'A service requires: "Password + a one-time OTP code sent to your phone". Which factor categories are used?',
        options: [
          { id: 'A', text: 'Knowledge (Something you know) + Possession (Something you have)' },
          { id: 'B', text: 'Knowledge + Biometrics' },
          { id: 'C', text: 'Possession + Possession' },
          { id: 'D', text: 'Knowledge only in two steps' },
        ],
        correctAnswer: 'A',
        explanation: 'A password is known in your brain (Knowledge), and receiving an OTP code requires holding your phone (Possession).',
      },
      {
        id: 'mcq_5',
        number: 5,
        question: 'During the TLS handshake, what is the role of the Digital Certificate sent by the server?',
        options: [
          { id: 'A', text: 'To speed up web page loading times' },
          { id: 'B', text: 'To prove server identity, domain ownership, and a trusted Chain of Trust' },
          { id: 'C', text: 'To store user passwords on the client computer' },
          { id: 'D', text: 'To automatically delete viruses from the browser' },
        ],
        correctAnswer: 'B',
        explanation: 'The certificate confirms that you are connected to the legitimate website server and not a scam or phishing clone.',
      },
      {
        id: 'mcq_6',
        number: 6,
        question: 'If a user sets "two different passwords" for their account, does this count as 2-Factor Authentication (2FA)?',
        options: [
          { id: 'A', text: 'Yes, because there are two passwords instead of one' },
          { id: 'B', text: 'Yes, because it offers double security' },
          { id: 'C', text: 'No, because both are from the same category (Knowledge); it is just multi-step authentication' },
          { id: 'D', text: 'Yes, if one password contains special characters' },
        ],
        correctAnswer: 'C',
        explanation: 'True 2FA requires two independent factors from DIFFERENT categories. Two passwords are both "Something you know".',
      },
      {
        id: 'mcq_7',
        number: 7,
        question: 'What property does a Digital Signature provide to prevent someone from denying that they sent a transaction?',
        options: [
          { id: 'A', text: 'High Speed' },
          { id: 'B', text: 'Non-Repudiation' },
          { id: 'C', text: 'File Compression' },
          { id: 'D', text: 'IP Masking' },
        ],
        correctAnswer: 'B',
        explanation: 'Non-repudiation proves that the author actually signed the transaction using their secret private key and cannot deny it.',
      },
      {
        id: 'mcq_8',
        number: 8,
        question: 'How do the browser and server agree on a shared session key in Step 2 of the TLS handshake?',
        options: [
          { id: 'A', text: 'The server emails the shared key to the user' },
          { id: 'B', text: 'They exchange math parameters and compute the key locally without sending it over the wire' },
          { id: 'C', text: 'The user manually types the key into the browser' },
          { id: 'D', text: 'They use the Wi-Fi password as the session key' },
        ],
        correctAnswer: 'B',
        explanation: 'Key exchange algorithms (like Diffie-Hellman) allow both sides to compute the exact same key without transmitting it openly.',
      },
      {
        id: 'mcq_9',
        number: 9,
        question: 'Which of the following is an example of an "Inherence (Biometrics)" factor?',
        options: [
          { id: 'A', text: 'Secret PIN code' },
          { id: 'B', text: 'Fingerprint scan or Facial Recognition' },
          { id: 'C', text: 'Smart card badge' },
          { id: 'D', text: 'SMS text message on phone' },
        ],
        correctAnswer: 'B',
        explanation: 'Biometrics are biological physical features of your human body (Something you are).',
      },
      {
        id: 'mcq_10',
        number: 10,
        question: 'What is the primary goal of "Layered Defense (Defense in Depth)" in online security?',
        options: [
          { id: 'A', text: 'To rely on a single magic tool that stops all attacks' },
          { id: 'B', text: 'To reduce risks by combining multiple security tools without assuming any single tool is unbreakable' },
          { id: 'C', text: 'To completely eliminate the need for passwords everywhere' },
          { id: 'D', text: 'To make 4K video streams load faster' },
        ],
        correctAnswer: 'B',
        explanation: 'No single security tool is 100% invincible, so we stack encryption, certificates, 2FA, and signatures to cover every angle.',
      },
    ],
  },

  sectionB: {
    id: 'section_b',
    title: 'B. True or False Questions (From Textbook Worked Example)',
    badge: 'True / False (4)',
    instruction: 'Indicate whether each statement is True or False according to the textbook:',
    pointsPerQuestion: 2,
    questions: [
      {
        id: 'tf_1',
        number: 1,
        statement: 'An HTTPS connection uses both Public-Key encryption and Symmetric encryption.',
        correctAnswer: true,
        explanation: 'True. It uses Public-Key encryption for the handshake and key exchange, then Symmetric encryption for actual session data.',
      },
      {
        id: 'tf_2',
        number: 2,
        statement: 'An HTTPS connection exchanges all data using Public-Key encryption.',
        correctAnswer: false,
        explanation: 'False. Using Public-Key encryption for all data would be far too slow; Symmetric encryption is used instead for speed.',
      },
      {
        id: 'tf_3',
        number: 3,
        statement: 'Two-Factor Authentication (2FA) uses two independent factors from two different categories to prove identity.',
        correctAnswer: true,
        explanation: 'True. This is the exact definition of 2FA.',
      },
      {
        id: 'tf_4',
        number: 4,
        statement: 'Setting two passwords is an example of Two-Factor Authentication (2FA).',
        correctAnswer: false,
        explanation: 'False. Both passwords belong to the same category (Knowledge), so this is only multi-step authentication.',
      },
    ],
  },

  sectionC: {
    id: 'section_c',
    title: 'C. Matching Threats to Security Tools (Textbook Page 33)',
    badge: 'Threat Matching (3)',
    instruction: 'Match each security goal or threat to the best security tool:',
    pointsPerQuestion: 2,
    questions: [
      {
        id: 'match_1',
        number: 1,
        target: 'I want to prevent third parties on the network from reading my communication content.',
        correctOptionId: 'opt_enc',
        correctOptionText: 'Encryption',
        explanation: 'Encryption scrambles communication into unreadable ciphertext for eavesdroppers.',
      },
      {
        id: 'match_2',
        number: 2,
        target: 'I want to verify that a signed message was not modified and truly came from the claimed sender.',
        correctOptionId: 'opt_sig',
        correctOptionText: 'Digital Signature',
        explanation: 'Digital Signatures detect tampering and prove author identity.',
      },
      {
        id: 'match_3',
        number: 3,
        target: 'I want to verify that the opposite party (the web server) is real and not a scam clone.',
        correctOptionId: 'opt_cert',
        correctOptionText: 'Digital Certificate',
        explanation: 'Digital Certificates prove the true identity of the server and its domain.',
      },
    ],
  },

  sectionD: {
    id: 'section_d',
    title: 'D. High-Order Exam Style Question (6 Marks)',
    badge: 'Essay Question (6 Marks)',
    instruction: 'Answer the question thoroughly using the two clue words: (Safety) and (Efficiency):',
    question: 'Explain why TLS uses Public-Key mechanisms to authenticate and safely agree on session keys, and then uses Symmetric encryption to protect session data. [6 marks]',
    officialRubric: [
      { criterion: 'Explain the role of Public-Key encryption in the handshake (Safety and key exchange without sending secret over the wire)', marks: 3 },
      { criterion: 'Explain the role of Symmetric encryption in session data (Super speed and Efficiency for heavy traffic)', marks: 3 }
    ],
    modelAnswer: 'TLS uses Public-Key encryption at the start of the connection (during the handshake) to achieve maximum [Safety]. It lets the browser verify the website identity and safely agree on a shared secret key without ever sending the secret across the wire.\n\nOnce the shared session key is created, TLS switches immediately to Symmetric encryption to achieve maximum [Efficiency] and speed. Symmetric encryption is thousands of times faster and uses very little CPU and battery power, allowing large web pages, videos, and files to load instantly and smoothly.'
  }
};
