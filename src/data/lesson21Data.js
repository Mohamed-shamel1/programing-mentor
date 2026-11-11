/**
 * Lesson 2-1 Educational Data (Curriculum Source of Truth - Arabic)
 * Title: تقنيات التشفير والمصادقة
 * Unit: الوحدة الثانية: الأمن السيبراني (Cybersecurity Defense)
 * Grade: الصف الثاني الثانوي - البكالوريا المصرية (Term 1)
 * Source: Egyptian Ministry of Education Textbook (Pages 31-35) & The Mentor Pedagogy
 * Theme: Emerald / Shield Theme (ch2)
 * Pacing: 3 Comprehensive Interactive Stations + Dual QR Exam Portal
 */

export const lesson21Data = {
  id: 'term1-ch2-l01',
  term: 1,
  chapterNumber: 2,
  lessonNumber: '2-1',
  title: 'تقنيات التشفير والمصادقة',
  unitTitle: 'الوحدة الثانية: الأمن السيبراني',
  subtitle: 'Encryption & Authentication Techniques — كيف تحمي بياناتك وأموالك عبر الإنترنت؟',
  estimatedDurationMinutes: 60,
  learningObjectives: [
    'شرح كيف تستخدم اتصالات HTTPS تقنيات مختلفة لحماية الاتصال (المفتاح العام والمتماثل والشهادات).',
    'التمييز بدقة بين دور التشفير، والشهادات الرقمية، والمصادقة الثنائية (2FA)، والتوقيعات الرقمية.',
    'تقييم طريقة مصادقة في سياق محدد (دراسة حالة بوابة المدرسة)، وتبرير الاختيار بمتطلبات الأمان والوصول.'
  ],
  glossary: [
    { acronym: 'HTTPS', fullEn: 'Hypertext Transfer Protocol Secure', termAr: 'بروتوكول نقل النص الفائق الآمن', desc: 'نظام لإجراء اتصالات الويب بأمان عبر تشفير البيانات والتحقق من الطرف المقابل.' },
    { acronym: 'HTTP', fullEn: 'Hypertext Transfer Protocol', termAr: 'بروتوكول نقل النص الفائق', desc: 'بروتوكول الويب التقليدي غير المشفر؛ تنتقل فيه البيانات كنص صريح يسهل التنصت عليه.' },
    { acronym: 'TLS', fullEn: 'Transport Layer Security', termAr: 'أمان طبقة النقل', desc: 'بروتوكول التشفير القياسي الحديث الذي يؤمن اتصال HTTPS بين المتصفح والخادم.' },
    { acronym: 'SSL', fullEn: 'Secure Sockets Layer', termAr: 'طبقة المنافذ الآمنة', desc: 'الجيل القديم التاريخي لبروتوكول التشفير الذي تم استبداله وتطويره إلى TLS.' },
    { acronym: 'Common-Key', fullEn: 'Common-key Cryptography (Symmetric)', termAr: 'تشفير المفتاح المشترك (المتماثل)', desc: 'نوع التشفير الذي يستخدم مفتاحاً واحداً سرياً مشتركاً؛ يُستخدم لتبادل كميات ضخمة من البيانات بسرعة فائقة (Quickly).' },
    { acronym: 'Public-Key', fullEn: 'Public-key Cryptography (Asymmetric)', termAr: 'التشفير بالمفتاح العام (غير المتماثل)', desc: 'نوع تشفير يستخدم زوجاً من المفاتيح المترابطة (مفتاح عام ومفتاح خاص)؛ يُستخدم لمشاركة المفاتيح بأمان والمصادقة (Safely).' },
    { acronym: 'Cert', fullEn: 'Digital Certificate', termAr: 'الشهادة الرقمية', desc: 'وثيقة إلكترونية رسمية تثبت أن خادم الموقع أصلي وحقيقي (Genuine) وتربط بين هوية الخادم واسم النطاق.' },
    { acronym: 'CA', fullEn: 'Certificate Authority', termAr: 'هيئة الشهادات الرقمية', desc: 'جهة عالمية موثوقة تصدر الشهادات الرقمية، ويتحقق المتصفح من خلالها من أصالة الموقع وهوية الخادم.' },
    { acronym: 'DS', fullEn: 'Digital Signature', termAr: 'التوقيع الرقمي', desc: 'آلية أمنية لكشف التلاعب بالبيانات (Data Tampering) وانتحال صفة المرسل، وتوفر دليلاً يدعم عدم التنصل (Non-repudiation).' },
    { acronym: 'Non-Rep', fullEn: 'Non-repudiation', termAr: 'عدم التنصل (عدم الإنكار)', desc: 'خاصية أمنية تضمن أن مرسل البيانات لا يمكنه بأي شكل إنكار إرسالها (The sender cannot deny having sent the data).' },
    { acronym: '2FA', fullEn: 'Two-Factor Authentication', termAr: 'المصادقة الثنائية', desc: 'استخدام عاملين مستقلين من فئتين مختلفتين تماماً لإثبات هوية المستخدم.' },
    { acronym: 'MFA', fullEn: 'Multi-Factor Authentication', termAr: 'المصادقة متعددة العوامل', desc: 'استخدام عاملين أو أكثر من فئات مختلفة (معرفة، حيازة، سمات حيوية Biometrics).' },
    { acronym: 'OTP', fullEn: 'One-Time Password', termAr: 'كلمة المرور لمرة واحدة', desc: 'رمز أمان مؤقت وصالح للاستخدام مرة واحدة فقط ينتهي بعد فترة وجيزة (عامل حيازة).' },
    { acronym: 'SMS', fullEn: 'Short Message Service', termAr: 'خدمة الرسائل القصيرة', desc: 'رسائل نصية ترسل للهاتف المحمول وتُستخدم كعامل حيازة لإرسال رموز التحقق.' },
    { acronym: 'IC Card', fullEn: 'Integrated Circuit Card', termAr: 'بطاقة الدائرة المتكاملة (البطاقة الذكية)', desc: 'بطاقة إلكترونية تحمل شريحة مدمجة تخزن مفاتيح التشفير وبيانات الهوية (عامل حيازة).' }
  ],
  pages: [
    {
      id: 'page-01',
      pageNumber: '01',
      totalPages: '03',
      type: 'HTTPS_HANDSHAKE_FLOW',
      badgeText: 'المحطة 1: أسرار HTTPS ومصافحة TLS',
      unitTitle: 'الوحدة الثانية: الأمن السيبراني',
      lessonTitle: 'الدرس 2-1: تقنيات التشفير والمصادقة',
      pageTag: 'CH-02 // PAGE 01',
      content: {
        badge: 'المحاضرة الخامسة — المحطة الأولى',
        title: 'كيف تعمل اتصالات HTTPS ومصافحة TLS؟',
        subtitle: 'التوليفة العبقرية بين التشفير بالمفتاح العام (للأمان) والتشفير المتماثل (للسرعة القصوى)',
        dailyHumorNote: 'علامة القفل الخضراء في المتصفح مش معناها إن صاحب الموقع ملاك ومش هينصب عليك! دي معناها بس إن مفيش حد في الشارع يقدر يتجسس على كلمة سرك وهي ماشية في السلك!',
        grandQuestion: 'كيف تعمل تقنيات التشفير والمصادقة معاً للحفاظ على أمان الاتصال والخدمات عبر الإنترنت؟',

        // 1. Foundation: HTTP + TLS = HTTPS & The 3 Protections
        protocolFoundation: {
          title: 'معادلة الأمان الأساسية: كيف وُلد بروتوكول HTTPS؟',
          formula: 'HTTP (بروتوكول الويب العادي) + TLS (تقنية التشفير) = HTTPS (بروتوكول الويب الآمن)',
          httpNote: 'HTTP هو وسيلة التواصل التقليدية؛ تنتقل فيه البيانات كنص صريح يسهل التنصت عليه وسرقته.',
          tlsNote: 'TLS هو تقنية الأمان التي تقوم بتشفير وحماية الاتصال بين جهازك وخادم موقع الويب.',
          withoutProtection: 'بدون هذه الحماية: قد تُسرق كلمات المرور والبيانات البنكية الخاصة، وتُقرأ من قِبل أي متلصص على الشبكة.'
        },

        // The 3 Specific Protections & Threats (Book p. 55)
        threeProtections: [
          {
            featureAr: 'التشفير (Encryption)',
            featureEn: 'Encryption',
            threatAr: 'التنصت (Eavesdropping)',
            desc: 'تشفير الرسائل أثناء انتقالها بحيث يتعذر على أي شخص آخر قراءتها.'
          },
          {
            featureAr: 'اكتشاف التلاعب (Tamper Detection)',
            featureEn: 'Tamper Detection',
            threatAr: 'التلاعب بالبيانات (Tampering)',
            desc: 'كشف أي محاولة لتعديل أو تغيير البيانات والصفحات أثناء النقل.'
          },
          {
            featureAr: 'التحقق من الطرف المقابل (Partner Verification)',
            featureEn: 'Partner Verification',
            threatAr: 'انتحال الشخصية (Impersonation)',
            desc: 'تأكيد المتصفح أن الموقع المتصل به هو الموقع الأصلي الحقيقي (Genuine).'
          }
        ],

        // Official Exam Padlock Warning (Book Note p. 55)
        padlockWarning: {
          badge: 'تنبيه امتحاني هام (كتاب الفائز ص 55):',
          title: 'فخ علامة القفل (The Padlock Fallacy)',
          text: 'قد يكون الموقع يستخدم HTTPS فعلاً، ولكن الموقع نفسه قد يكون موقعاً احتيالياً (Fraudulent site) أو يعرض محتوى ضاراً! HTTPS يضمن فقط تشفير البيانات في السلك وهوية النطاق، لكنه لا يضمن أمانة أو صدق صاحب الموقع.'
        },
        
        // Definition Card
        definitionCard: {
          termAr: 'اتصال HTTPS ومصافحة TLS',
          termEn: 'HTTPS & TLS Handshake Flow',
          icon: 'lock',
          officialExamDefinition: 'HTTPS هو بروتوكول HTTP منقول عبر اتصال TLS مؤمّن. يوفر TLS سرية البيانات وسلامتها أثناء النقل، ويساعد المتصفح على التحقق من هوية الخادم واسم النطاق عبر هيئة الشهادات (CA). وتسمى خطوات إنشاء الاتصال الآمن "مصافحة TLS".',
          plainExplanation: 'تخيل إنك بتبعت جواب في صندوق حديد مقفول.. لو بعت المفتاح مع الصندوق، الساعي ممكن يفتحه ويسرقه! الحل؟ السيرفر بيبعتلك قفل مفتوح (مفتاح عام)، أنت تحط فيه سر الجلسة وتقفله بالقفل، ومحدش يقدر يفتحه غير السيرفر بمفتاحه الخاص السري. بعدها بنشفر كلامنا كله بسرعة بمفتاح الجلسة المشترك!',
          engineerGoldenRule: 'قاعدة الامتحان الذهبية: "المفتاح العام (Public-Key) لمشاركة المفاتيح بأمان والمصادقة (Safely).. والمفتاح المشترك (Common-Key / Symmetric) لنقل كميات البيانات الضخمة بسرعة فائقة (Quickly)."'
        },

        // TLS Handshake Stages (Detailed from Book Table p. 56)
        stagesTitle: 'مراحل مصافحة TLS الثلاث لإنشاء اتصال آمن (جدول كتاب الوزارة والفائز ص 56)',
        stages: [
          {
            stepNumber: '01',
            nameAr: '1. مرحلة الاتصال (Connection)',
            nameEn: 'Stage 1: Connection & Certificate Verification',
            actionAr: 'يرسل خادم الويب شهادته الرقمية ومفتاحه العام إلى المتصفح. يتحقق المتصفح من صلاحية وأصالة الخادم من خلال هيئة إصدار الشهادات (CA) ليتأكد أنه الموقع الأصلي الحقيقي (Genuine).',
            protectionMechanism: 'التشفير بالمفتاح العام (Public-key cryptography)',
            icon: 'verified_user',
            badgeColor: '#059669',
            examNote: 'المتصفح عبر الـ CA يتحقق من أصالة الموقع (Genuine Site) لمنع الانتحال'
          },
          {
            stepNumber: '02',
            nameAr: '2. مرحلة تبادل المفاتيح (Key Exchange)',
            nameEn: 'Stage 2: Key Exchange & Private Key Decryption',
            actionAr: 'يُنشئ المتصفح مفتاحاً مشتركاً للاتصال، ويشفّره باستخدام المفتاح العام للخادم، ثم يرسله للخادم. يقوم الخادم بفك تشفيره باستخدام مفتاحه الخاص السري (Private Key) للحصول على المفتاح المشترك.',
            protectionMechanism: 'التشفير بالمفتاح العام (Public-key cryptography)',
            icon: 'vpn_key',
            badgeColor: '#0d9488',
            examNote: 'سؤال الامتحان Q8: الخادم يستخدم حصراً "المفتاح الخاص (Private Key)" لفك تشفير المفتاح المشترك'
          },
          {
            stepNumber: '03',
            nameAr: '3. مرحلة تبادل البيانات (Data Communication)',
            nameEn: 'Stage 3: Fast Data Exchange via Common-Key',
            actionAr: 'يتم تشفير جميع بيانات الجلسة (صفحات الويب، كلمات المرور، الشراء) وتبادلها بين المتصفح والخادم باستخدام المفتاح المشترك (Common-key).',
            protectionMechanism: 'تشفير المفتاح المشترك (Common-key cryptography)',
            icon: 'bolt',
            badgeColor: '#0284c7',
            examNote: 'يُستخدم لنقل كميات البيانات الكبيرة بسرعة وكفاءة فائقة (Quickly & Efficiently)'
          }
        ],

        // Modern vs Classic Note
        keyExchangeNote: 'ملاحظة تعليمية (ص 56): تُظهر عملية التبادل المذكورة أعلاه إحدى الطرق الكلاسيكية لمشاركة المفتاح المشترك (RSA)، غير أن الإصدارات الحالية من بروتوكول TLS تستخدم بدلاً من ذلك آلية "ديفي-هيلمان (Diffie-Hellman)" للاتفاق على المفتاح.',

        // Official 6-Mark Essay Question Box: Division of Roles (Book p. 56 & p. 60)
        divisionOfRoles: {
          badge: 'سؤال مقالي رسمي (6 درجات) — كتاب الفائز ص 60',
          title: 'مبدأ تقسيم الأدوار (Division of Roles) في بروتوكول HTTPS:',
          question: 'اشرح لماذا يستخدم بروتوكول HTTPS التشفير بالمفتاح العام لتبادل المفتاح، بينما يستخدم تشفير المفتاح المشترك لنقل البيانات؟ [أشر إلى: الأمان والسرعة]',
          coreReason: 'تقسيم الأدوار يجمع بين ميزتي الأمان الفائق وسرعة الاتصال معاً:',
          publicKeyPart: '• التشفير بالمفتاح العام (Public-key): يُستخدم لـ "مشاركة وتبادل المفاتيح بأمان (Share keys safely)" والمصادقة في البداية دون إرسال السر عبر الشبكة.',
          commonKeyPart: '• تشفير المفتاح المشترك (Common-key): يُستخدم لـ "تبادل ونقل كميات البيانات الكبيرة بسرعة فائقة (Exchange large amounts of data quickly)" لخفة وزنه على المعالج.',
          summarySentence: 'هذا التقسيم الذكي للأدوار يجعل من الممكن تحقيق أمان الاتصال وسرعته العالية في آن واحد.'
        },

        // Dual Keys Comparison Box
        comparisonBox: {
          title: 'المقارنة الامتحانية: تشفير المفتاح المشترك مقابل المفتاح العام',
          symmetric: {
            title: 'المفتاح المشترك / المتماثل (Common-Key / Symmetric)',
            keyInfo: 'مفتاح سري واحد مشترك للتشفير وفك التشفير',
            pros: 'فائق السرعة (Quickly) وخفيف جداً لتبادل البيانات الضخمة',
            cons: 'معضلة تبادل المفتاح بأمان في البداية عبر الإنترنت',
            roleInHttps: 'حماية كل بيانات الجلسة بعد انتهاء المصافحة'
          },
          asymmetric: {
            title: 'المفتاح العام / غير المتماثل (Public-Key / Asymmetric)',
            keyInfo: 'زوج مفاتيح مرتبط: مفتاح عام (للجميع) ومفتاح خاص (سري للخادم)',
            pros: 'أمان فائق لمشاركة وتبادل المفاتيح بأمان (Safely) دون إرسال السر',
            cons: 'بطيء حسابياً ويستهلك طاقة معالجة أكبر بألف مرة',
            roleInHttps: 'مصافحة البداية فقط (المصادقة والاتفاق الآمن على مفتاح الجلسة)'
          }
        },

        // Interactive Check
        quickCheck: {
          question: 'يتبادل اتصال HTTPS جميع بيانات الجلسة باستخدام التشفير بالمفتاح العام؟ (صح أم خطأ؟)',
          correctAnswer: 'خطأ',
          explanation: 'خطأ! التشفير بالمفتاح العام بطيء جداً، لذا يُستخدم فقط في بداية المصافحة للاتفاق على مفتاح الجلسة، بينما تُحمى بيانات الجلسة الفعلية بالتشفير المتماثل السريع.'
        }
      }
    },
    {
      id: 'page-02',
      pageNumber: '02',
      totalPages: '03',
      type: 'AUTHENTICATION_FACTORS',
      badgeText: 'المحطة 2: أسلحة المصادقة (2FA و MFA)',
      unitTitle: 'الوحدة الثانية: الأمن السيبراني',
      lessonTitle: 'الدرس 2-1: تقنيات التشفير والمصادقة',
      pageTag: 'CH-02 // PAGE 02',
      content: {
        badge: 'المحاضرة الخامسة — المحطة الثانية',
        title: 'المصادقة في الخدمات الفعلية: دروع 2FA و MFA',
        subtitle: 'فئات المصادقة الثلاث: ما تعرفه، ما تملكه، وما أنت عليه — وكيف تحميك عند تسرب كلمة المرور؟',
        dailyHumorNote: 'لو كتبت باسوردك 123456 فالمصادقة الثنائية (2FA) هي اللي هتنقذك لما الهاكر يجي يدخل يلاقي الموبايل بيصرخ في جيبك برمز OTP!',
        
        // Concept Breakdown
        coreTerms: [
          {
            term: 'المصادقة الثنائية (2FA)',
            termEn: 'Two-Factor Authentication',
            def: 'استخدام عاملين مستقلين من فئتين مختلفتين تماماً لإثبات الهوية (مثل كلمة مرور + رمز على الهاتف).',
            icon: 'looks_two'
          },
          {
            term: 'المصادقة متعددة العوامل (MFA)',
            termEn: 'Multi-Factor Authentication',
            def: 'استخدام عاملين أو أكثر من فئات مختلفة، مثل المعرفة والحيازة والسمات الحيوية مجتمعة.',
            icon: 'layers'
          }
        ],

        // The Three Pillars / Categories
        categories: [
          {
            id: 'cat-knowledge',
            title: '1. المعرفة (Knowledge)',
            subtitle: 'ما تعرفه في عقلك (Something you know)',
            icon: 'psychology',
            color: '#d97706',
            bgColor: '#fffbeb',
            examples: ['كلمة المرور (Password)', 'رقم PIN السري', 'سؤال الأمان'],
            weakness: 'يمكن تخمينها، أو سرقتها بالهندسة الاجتماعية والتصيد، أو تسريبها من قواعد البيانات.'
          },
          {
            id: 'cat-possession',
            title: '2. الحيازة (Possession)',
            subtitle: 'ما تملكه في جيبك (Something you have)',
            icon: 'smartphone',
            color: '#059669',
            bgColor: '#ecfdf5',
            examples: ['رمز OTP المؤقت', 'رسالة SMS على هاتفك', 'بطاقة الدائرة المتكاملة (IC Card)', 'تطبيق المصادقة (Authenticator)'],
            weakness: 'يمكن سرقة الهاتف أو اعتراض رسائل SMS في هجمات تبديل الشريحة (SIM Swap).'
          },
          {
            id: 'cat-inherence',
            title: '3. السمات الحيوية (Inherence / Biometrics)',
            subtitle: 'ما أنت عليه في جسدك (Something you are / Biometrics)',
            icon: 'fingerprint',
            color: '#7c3aed',
            bgColor: '#f5f3ff',
            examples: ['بصمة الإصبع (Fingerprint)', 'التعرف على الوجه (Face ID)', 'بصمة قزحية العين (Iris Scan)'],
            weakness: 'لا يمكن تغييرها أبداً إذا تم اختراقها أو تقليدها بتقنيات التزييف العميق.'
          }
        ],

        // Textbook Real-world Service Table
        servicesTableTitle: 'أمثلة الكتاب المدرسي على المصادقة المستخدمة في الخدمات الواقعية',
        services: [
          {
            serviceName: 'الخدمات المصرفية عبر الإنترنت (Online Banking)',
            factorsUsed: 'كلمة المرور (المعرفة) + كلمة المرور لمرة واحدة OTP (الحيازة)',
            factorsType: 'معرفة + حيازة',
            whyItMatters: 'حتى لو اخترق أحد حاسوبك وعرف الباسورد، لن يستطيع تحويل مليم بدون الكود المتغير على هاتفك.'
          },
          {
            serviceName: 'تسجيل الدخول إلى وسائل التواصل الاجتماعي (Social Media)',
            factorsUsed: 'كلمة المرور (المعرفة) + المصادقة عبر الرسائل القصيرة SMS (الحيازة)',
            factorsType: 'معرفة + حيازة',
            whyItMatters: 'يمنع الاستيلاء على الحساب عند تسرب كلمات المرور من مواقع أخرى.'
          },
          {
            serviceName: 'الدخول إلى مبنى مؤمّن (Secure Facility Entry)',
            factorsUsed: 'بطاقة دخول IC ذكية (الحيازة) + بصمة إصبع (السمات الحيوية)',
            factorsType: 'حيازة + سمات حيوية',
            whyItMatters: 'يمنع دخول شخص سرق البطاقة لأنها تتطلب مطابقة بصمة إصبعه الحقيقية.'
          },
          {
            serviceName: 'التسوق الإلكتروني والشراء (E-Commerce Checkout)',
            factorsUsed: 'كلمة المرور (المعرفة) + التحقق من هوية بطاقة الائتمان / OTP (الحيازة)',
            factorsType: 'معرفة + حيازة',
            whyItMatters: 'يضمن أن المشتري هو مالك الحساب والبطاقة في نفس الوقت.'
          }
        ],

        // Stop & Think Box
        stopAndThink: {
          title: 'توقف وفكّر: لغز حماية الهاتف عند تسرب كلمة المرور',
          question: 'إذا تسربت كلمة المرور الخاصة بك، لماذا يمكن لعامل ثانٍ يُرسل إلى الهاتف أن يظل يحمي الحساب؟',
          answer: 'لأن العاملين مستقلان تماماً ومن فئتين مختلفتين! المهاجم الذي حصل على كلمة المرور يمتلك "المعرفة" فقط، لكنه لا يمتلك "جهازك المادي" (الحيازة) لاستقبال الرمز. معرفة كلمة المرور وحدها تصبح بلا قيمة للمهاجم بدون امتلاك الهاتف المادي.'
        },

        // Exam Trap Box
        examTrap: {
          title: 'فخ امتحاني خطير: هل تعيين كلمتي مرور يُعتبر 2FA؟',
          warning: 'إياك أن تقع في هذا الفخ! لو موقع طلب منك "كلمة مرور عادية + كلمة مرور إضافية"، فهذا ليس مصادقة ثنائية (2FA)، بل هو مصادقة متعددة الخطوات (Multi-Step) باستخدام عامل واحد فقط وهو "المعرفة". الـ 2FA تشترط حتماً عاملين من فئتين مختلفتين!'
        }
      }
    },
    {
      id: 'page-03',
      pageNumber: '03',
      totalPages: '03',
      type: 'LAYERED_DEFENSE_LAB',
      badgeText: 'المحطة 3: دفاع الطبقات ومختبر المهندس',
      unitTitle: 'الوحدة الثانية: الأمن السيبراني',
      lessonTitle: 'الدرس 2-1: تقنيات التشفير والمصادقة',
      pageTag: 'CH-02 // PAGE 03',
      content: {
        badge: 'المحاضرة الخامسة — المحطة الثالثة',
        title: 'دفاع الطبقات وسيناريو الشراء ومختبر قرار المهندس',
        subtitle: 'تكامل التقنيات الأربعة: التشفير، الشهادة، التوقيع الرقمي، والمصادقة (لا أمان مطلق بدون طبقات)',
        dailyHumorNote: 'الأمان زي أبواب القلعة: باب خندق، باب حديد، وباب حراس.. مفيش قفل سحري واحد يحمي كل حاجة لوحده!',
        
        // Grand Idea
        coreIdea: 'لا يأتي الأمان عبر الإنترنت من تقنية واحدة، بل من الجمع بين التشفير والشهادات والتوقيعات والمصادقة بحيث تتم معالجة تهديدات كثيرة في آن واحد (الدفاع في العمق - Defense in Depth).',

        // Technologies Matrix
        techMatrix: [
          {
            techName: 'التشفير (المشترك / المفتاح العام)',
            techNameEn: 'Encryption (Common-Key & Public-Key)',
            effect: 'يحافظ على خصوصية وسرية محتوى الاتصال (Keep communication private) ويمنع التنصت من أي طرف ثالث.',
            threatAddressed: 'التنصت وسرقة خصوصية البيانات (Eavesdropping)'
          },
          {
            techName: 'الشهادة الرقمية (عبر الـ CA)',
            techNameEn: 'Digital Certificate (via CA)',
            effect: 'تساعد المتصفح عبر هيئة الشهادات على التأكد من أن موقع الويب أصلي وحقيقي (Genuine Partner) ومطابق للنطاق.',
            threatAddressed: 'انتحال صفة الموقع والمواقع المزيفة (Impersonation)'
          },
          {
            techName: 'المصادقة الثنائية (2FA)',
            techNameEn: 'Two-Factor Authentication (2FA)',
            effect: 'تمنع تسجيل الدخول غير المصرح به عند تسرب أو اختراق كلمة المرور بواسطة عامل ثانٍ مستقل.',
            threatAddressed: 'اختراق الحسابات والدخول غير المصرح به (Unauthorized Logins)'
          },
          {
            techName: 'التوقيع الرقمي',
            techNameEn: 'Digital Signature',
            effect: 'يكتشف التلاعب بالبيانات (Data Tampering) وانتحال المرسل، ويدعم عدم التنصل (Non-repudiation: المرسل لا يمكنه إنكار الإرسال).',
            threatAddressed: 'التلاعب بالرسائل وإنكار المعاملات (Tampering & Repudiation)'
          }
        ],

        // Exam Traps Box (The Trustworthiness Fallacies)
        examTraps: [
          {
            trapTitle: 'فخ صح وخطأ: هل HTTPS يضمن أن الموقع غير احتيالي؟ (TF Q20)',
            trapText: '❌ خطأ! استخدام HTTPS لا يضمن أبداً أن الموقع صادق أو أن محتواه خالٍ من الاحتيال! HTTPS يضمن فقط تشفير البيانات أثناء النقل وهوية النطاق.'
          },
          {
            trapTitle: 'فخ صح وخطأ: هل التوقيع الرقمي يضمن مصداقية الموقع وصحة معلوماته؟ (TF Q18)',
            trapText: '❌ خطأ! التوقيع الرقمي يضمن فقط سلامة البيانات وهوية الموقّع وعدم الإنكار، لكنه لا يضمن أن الموقع موثوق أخلاقياً أو أن المحتوى صحيح دائماً.'
          }
        ],

        // Official Scientific Concepts Bank (Direct from Ministry & Al-Faez Exam p.65)
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

        // E-Commerce Realistic 4-Step Flow
        ecommerceFlowTitle: 'سيناريو الشراء عبر التسوق الإلكتروني: كيف تتكامل التقنيات الأربعة؟',
        ecommerceSteps: [
          {
            stepNum: '1',
            action: 'الدخول إلى المتجر',
            role: 'يبدأ اتصال HTTPS، ويمنع التشفير قراءة محتوى الاتصال من قِبل أي أطراف ثالثة على شبكتك.',
            tech: 'التشفير (Encryption)'
          },
          {
            stepNum: '2',
            action: 'فحص هوية المتجر',
            role: 'يتحقق المتصفح تلقائياً من الشهادة الرقمية للمتجر واسم النطاق ليتأكد أنك متصل بالمتجر الحقيقي وليس بموقع احتيالي مقلد.',
            tech: 'الشهادة الرقمية (Digital Certificate)'
          },
          {
            stepNum: '3',
            action: 'تسجيل دخول العميل',
            role: 'تطلب الخدمة كلمة المرور + رمز OTP على الهاتف لتقليل خطر الدخول غير المصرح به حتى لو سُرقت كلمة المرور.',
            tech: 'المصادقة الثنائية (2FA)'
          },
          {
            stepNum: '4',
            action: 'تأكيد ودفع الطلب',
            role: 'يحمي TLS سرية وسلامة بيانات الدفع أثناء النقل، ويُستخدم التوقيع الرقمي لإثبات اعتماد أمر الدفع وتفاصيل الفاتورة بدون إمكانية التراجع أو التلاعب.',
            tech: 'التوقيع الرقمي و TLS (Digital Signature & TLS)'
          }
        ],

        // Engineer Decision Lab (School Portal Case Study)
        engineerLab: {
          title: 'فكّر كمهندس: ابحث ثم قرر — بوابة درجات ورسوم المدرسة',
          scenario: 'تعمل إحدى المدارس في مدينتك على إنشاء بوابة إلكترونية يتحقق من خلالها الطلاب من درجاتهم ويدفعون الرسوم الدراسية. بصفتك مهندس النظم، عليك اختيار طريقة تسجيل دخول الطلاب المناسبة.',
          options: [
            {
              id: 'opt-pwd-only',
              title: 'الخيار (أ): كلمة مرور فقط',
              pros: 'سهل وسريع جداً، ولا يتطلب امتلاك الطالب لهاتف ذكي أو خط اتصال.',
              cons: 'ضعيف أمنياً؛ يسهل تخمين الباسورد أو تسريبه والاطلاع على درجات الزملاء والعبث بالرسوم.'
            },
            {
              id: 'opt-2fa-phone',
              title: 'الخيار (ب): كلمة مرور + OTP يُرسل إلى الهاتف',
              pros: 'أمان قوي جداً؛ يمنع أي طالب من اختراق حساب زميله حتى لو عرف كلمة مروره.',
              cons: 'قد يواجه الطلاب الذين لا يملكون هواتف ذكية أو خطوط اتصال صعوبة في الدخول.'
            }
          ],
          stakeholderAnalysis: [
            {
              stakeholder: 'الطلاب عموماً (Students)',
              benefit: 'حماية خصوصية درجاتهم وبياناتهم المالية من تجسس زملائهم.',
              drawback: 'خطوة إضافية تستغرق وقتاً للحصول على رمز الـ OTP في كل تسجيل دخول.'
            },
            {
              stakeholder: 'المدرسة الإدارة (School Administration)',
              benefit: 'حماية نظام الدفع ومنع الشكاوى الأمنية والتلاعب بالنتائج.',
              drawback: 'تكلفة إرسال رسائل SMS أو دعم الطلاب الذين يفقدون هواتفهم.'
            },
            {
              stakeholder: 'طالب لا يملك هاتفاً ذكياً (Student without Smartphone)',
              benefit: 'ضمان أن بياناته لن تُسرق بسهولة.',
              drawback: 'عائق وصول حقيقي قد يمنعه من معرفة درجاته إلا إذا وفرت المدرسة بديلاً.'
            }
          ],
          engineerRecommendation: {
            verdict: 'التوصية الهندسية المتوازنة:',
            recommendationText: 'اعتماد المصادقة الثنائية (2FA) كمعيار أساسي لحساسية البيانات والرسوم المالية، مع توفير بديل عادل للطلاب الذين لا يملكون هواتف ذكية (مثل إنشاء بطاقات IC ذكية في معمل الحاسب بالمدرسة أو استخدام رموز احتياطية مطبوعة مسبقاً Backup Codes).',
            coreReason: 'لأن البوابة تتضمن معاملات مالية (دفع رسوم) وبيانات درجات حساسة، وكلمة المرور وحدها لا توفر أدنى درجات الحماية ضد التخمين والتنمر الإلكتروني.'
          }
        },

        // Grand Question Final Synthesis
        grandSummary: {
          title: 'الخلاصة وإجابة السؤال الرئيسي للمحاضرة',
          text: 'يعتمد الأمان والخدمات الموثوقة عبر الإنترنت على التناغم والتكديس بين التشفير والمصادقة: يستخدم HTTPS بروتوكول HTTP عبر اتصال TLS مؤمّن؛ حيث تساعد الشهادات وآليات المفتاح العام على المصادقة وإنشاء مفاتيح الجلسة، ثم يحمي التشفير المتماثل بيانات الجلسة بسرعة وكفاءة. وتقلل المصادقة الثنائية (2FA) احتمال الدخول غير المصرح به عبر عاملين مستقلين. الحماية الفعالة تتكون من طبقات تقلل المخاطر، ولا تعتمد على تقنية واحدة أو ضمان مطلق.'
        }
      }
    }
  ]
};
