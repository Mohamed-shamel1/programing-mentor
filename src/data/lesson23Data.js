/**
 * Lesson 2-3 Educational Data (Curriculum Source of Truth - Arabic)
 * Title: الاستجابة للحوادث وإدارة المخاطر
 * Unit: الوحدة الثانية: الأمن السيبراني (Cybersecurity Defense)
 * Grade: الصف الثاني الثانوي - البكالوريا المصرية (Term 1)
 * Source: Egyptian Ministry of Education Textbook (pp. 49-53) & Al-Faez Study Guide (pp. 80-89)
 * Theme: Emerald / Shield Theme (ch2)
 * Pacing: 3 Comprehensive Interactive Stations + Dual QR Exam Portal
 */

export const lesson23Data = {
  id: 'term1-ch2-l03',
  term: 1,
  chapterNumber: 2,
  lessonNumber: '2-3',
  title: 'الاستجابة للحوادث وإدارة المخاطر',
  unitTitle: 'الوحدة الثانية: الأمن السيبراني',
  subtitle: 'Incident Response & Risk Management — المراحل الستة المتسلسلة، مصفوفة تقييم المخاطر، وسر الترتيب الإلزامي',
  estimatedDurationMinutes: 60,
  learningObjectives: [
    'تعريف الحادث الأمني (Security Incident) وتمييز أنواعه الثلاثة النموذجية (تسرب المعلومات، التلاعب بالبيانات، وانقطاع الخدمة).',
    'تطبيق مراحل الاستجابة الستة بالترتيب المنطقي (التحضير ➔ الاكتشاف ➔ الاحتواء ➔ الاستئصال ➔ التعافي ➔ منع التكرار).',
    'تعليل أهمية الترتيب الإلزامي للمراحل وتفسير لماذا يسبق الاحتواءُ الاستئصالَ، ولماذا يسبق الاستئصالُ التعافي.',
    'حساب حجم المخاطر وترتيب أولوياتها رياضياً باستخدام معادلة (حجم الخطر = التأثير × الاحتمالية) ومصفوفة الـ 3×3.'
  ],
  glossary: [
    { acronym: 'Incident', fullEn: 'Security Incident', termAr: 'الحادث الأمني', desc: 'موقف يقع فيه ضرر فعلي (Actual damage) نتيجة لمشكلة تتعلق بأمن المعلومات وسريتها وسلامتها وتوافرها.' },
    { acronym: 'Prep', fullEn: 'Preparation', termAr: 'التحضير والاستعداد', desc: 'المرحلة الأولى: إنشاء إجراءات وهياكل الاستجابة وتدريب الفريق مسبقاً قبل وقوع أي هجوم.' },
    { acronym: 'Detect', fullEn: 'Detection', termAr: 'الاكتشاف والتأكيد', desc: 'المرحلة الثانية: اكتشاف وتأكيد وقوع حادث أمني عبر فحص الإشارات وسجلات النظام (Logs).' },
    { acronym: 'Contain', fullEn: 'Containment', termAr: 'الاحتواء وحصار الضرر', desc: 'المرحلة الثالثة: تحديد نطاق التأثير لمنع انتشار الضرر أكثر (مثل فصل كابل الإنترنت وعزل الجهاز المصاب).' },
    { acronym: 'Eradicate', fullEn: 'Eradication', termAr: 'الاستئصال وإزالة السبب', desc: 'المرحلة الرابعة: إزالة وحذف مسبب الحادث (مثل حذف البرمجيات الخبيثة وسد الثغرة المستغلة).' },
    { acronym: 'Recover', fullEn: 'Recovery', termAr: 'التعافي والاستعادة', desc: 'المرحلة الخامسة: إعادة الأنظمة والخدمات إلى حالة تشغيل آمنة وطبيعية عبر استعادة النسخ الاحتياطية النظيفة.' },
    { acronym: 'Prevent', fullEn: 'Prevention of Recurrence', termAr: 'منع التكرار', desc: 'المرحلة السادسة والأخيرة: تحليل ما حدث، وتوثيق الدروس المستفادة، وتحسين الضوابط الأمنية لتقليل احتمال التكرار.' },
    { acronym: 'Risk', fullEn: 'Risk', termAr: 'الخطر الأمني', desc: 'احتمالية وقوع مشكلة في أمن المعلومات في المستقبل، وحجم تأثيرها لو حدثت.' },
    { acronym: 'Impact', fullEn: 'Impact', termAr: 'التأثير (حجم الضرر)', desc: 'مقدار الضرر والخسائر التي ستحدث لو تحقق الخطر ووقع فعلياً.' },
    { acronym: 'Likelihood', fullEn: 'Likelihood', termAr: 'الاحتمالية (فرصة الحدوث)', desc: 'مدى فرصة أو احتمالية تحقق الخطر ووقوعه في الواقع.' }
  ],
  pages: [
    {
      id: 'page-01',
      pageNumber: '01',
      totalPages: '03',
      type: 'INCIDENT_RESPONSE_FLOW',
      badgeText: 'المحطة 1: ماهية الحادث ومراحل الاستجابة الستة',
      unitTitle: 'الوحدة الثانية: الأمن السيبراني',
      lessonTitle: 'الدرس 2-3: الاستجابة للحوادث وإدارة المخاطر',
      pageTag: 'CH-02 // PAGE 01',
      content: {
        badge: 'المحاضرة السابعة — المحطة الأولى',
        title: 'ماهية الحادث الأمني ومراحل الاستجابة الستة المتسلسلة',
        subtitle: 'كيف تتحرك المؤسسة عند وقوع كارثة أمنية بالترتيب الصحيح لتقليل الخسائر؟',
        dailyHumorNote: 'التعامل مع فيروس بدون خطة مدروسة زي اللي بيحاول يطفي حريقة ببنزين.. رد الفعل العشوائي بيولع الدنيا أكتر!',
        grandQuestion: 'حتى الأنظمة المحصنة جيداً قد تُخترق.. فكيف تنظم المنظمة رد فعلها المتسلسل دون فوضى أو تفاقم للضرر؟',

        // Golden Concept Foundation
        foundationBox: {
          title: 'الحقيقة الأساسية الحتمية (كتاب الوزارة ص 49 والفائز ص 80):',
          conceptText: 'حتى الأنظمة المحصنة بأقوى جدران الحماية قد تتعرض للهجوم. وعند وقوع حادث أمني (تسرب بيانات، تلاعب بملفات، أو تعطل خدمة)، فإن رد الفعل المتسرع وغير المدروس (A rushed and unplanned reaction) لا يؤدي إلا إلى تفاقم الضرر! لذلك تتبع المؤسسات مسار استجابة واضحاً ومنظماً لضمان حصر الضرر، وإزالة المسبب، ومنع عودة المشكلة ذاتها.',
          goldenRule: 'قاعدة الامتحان: "الاستجابة للحوادث تتبع 6 مراحل متسلسلة إلزامية، وتقييم المخاطر يحدد الأولويات بضرب التأثير × الاحتمالية."'
        },

        // Security Incident Definition & 3 Typical Types
        incidentTypesTitle: 'ما هو الحادث الأمني؟ وأنواعه الثلاثة النموذجية (ص 49 وزارة / ص 81 فائز)',
        incidentDefinition: 'موقف يقع فيه ضرر فعلي (Actual damage) نتيجة لمشكلة تتعلق بأمن المعلومات (سواء في سريتها، سلامتها، أو توافرها).',
        incidentTypes: [
          {
            id: 'type-leak',
            nameAr: '1. تسرب المعلومات (Information Leak)',
            nameEn: 'Information Leak',
            ciaPillar: 'ضرب سرية البيانات (Confidentiality)',
            icon: 'lock_open',
            color: '#dc2626',
            bgColor: '#fef2f2',
            borderColor: '#fca5a5',
            definition: 'تسرب المعلومات الشخصية أو السرية للموظفين والعملاء إلى جهات خارجية غير مصرح بها.',
            examExample: 'مثال امتحاني: اختراق قاعدة بيانات متجر وتسريب أرقام بطاقات الائتمان وعناوين العملاء.'
          },
          {
            id: 'type-tamper',
            nameAr: '2. التلاعب بالبيانات (Data Tampering)',
            nameEn: 'Data Tampering',
            ciaPillar: 'ضرب سلامة البيانات ونزاهتها (Integrity)',
            icon: 'edit_off',
            color: '#d97706',
            bgColor: '#fffbeb',
            borderColor: '#fde68a',
            definition: 'تعديل وتزوير البيانات والسجلات داخل النظام دون تصريح أو إذن رسمي.',
            examExample: 'مثال امتحاني: قيام مخترق بتعديل درجات الطلاب في كنترول المدرسة أو تغيير أرصدة الحسابات البنكية.'
          },
          {
            id: 'type-outage',
            nameAr: '3. انقطاع الخدمة (Service Outage)',
            nameEn: 'Service Outage',
            ciaPillar: 'ضرب توافر الخدمة (Availability)',
            icon: 'cloud_off',
            color: '#2563eb',
            bgColor: '#eff6ff',
            borderColor: '#bfdbfe',
            definition: 'تعطل الخدمة أو الخادم وتوقفه عن العمل بحيث تصبح غير متاحة للمستخدمين الشرعيين بسبب هجوم.',
            examExample: 'مثال امتحاني: تعطل موقع إلكتروني للبنك بسبب هجوم حجب الخدمة الموزع (DDoS).'
          }
        ],

        // The 6 Ordered Stages
        stagesFlowTitle: 'مخطط مراحل الاستجابة الستة المتسلسلة (The 6 Ordered Stages Flow)',
        stages: [
          {
            stepNumber: '1',
            nameAr: 'التحضير والاستعداد (Preparation)',
            nameEn: 'Preparation',
            icon: 'assignment_turned_in',
            color: '#0284c7',
            actionSummary: 'إنشاء إجراءات وهياكل الاستجابة مسبقاً وتدريب الفريق وتجهيز النسخ الاحتياطية قبل أي هجوم.',
            examSignal: 'الكلمة المفتاحية: In advance (مسبقاً)'
          },
          {
            stepNumber: '2',
            nameAr: 'الاكتشاف والتأكيد (Detection)',
            nameEn: 'Detection',
            icon: 'travel_explore',
            color: '#ca8a04',
            actionSummary: 'اكتشاف وتأكيد وقوع حادث أمني عبر رصد التنبيهات وفحص سجلات النظام (Logs).',
            examSignal: 'الكلمة المفتاحية: Discover & Confirm (اكتشاف وتأكيد)'
          },
          {
            stepNumber: '3',
            nameAr: 'الاحتواء وحصار الضرر (Containment)',
            nameEn: 'Containment',
            icon: 'fence',
            color: '#dc2626',
            actionSummary: 'حصار الضرر وتحديد نطاق التأثير لمنع تفشيه لبقية الأجهزة (مثل فصل كابل الإنترنت وعزل الجهاز).',
            examSignal: 'الكلمة المفتاحية: Limit the scope / Disconnect (حصر الضرر وفصل الجهاز)'
          },
          {
            stepNumber: '4',
            nameAr: 'الاستئصال وإزالة السبب (Eradication)',
            nameEn: 'Eradication',
            icon: 'delete_forever',
            color: '#7c3aed',
            actionSummary: 'إزالة وحذف مسبب الحادث بالكامل، مثل حذف الفيروس الخبيث وسد الثغرة الأمنية وتغيير كلمات السر.',
            examSignal: 'الكلمة المفتاحية: Remove the cause (إزالة السبب ومسح الفيروس)'
          },
          {
            stepNumber: '5',
            nameAr: 'التعافي والاستعادة (Recovery)',
            nameEn: 'Recovery',
            icon: 'restore',
            color: '#059669',
            actionSummary: 'استرجاع الأنظمة والخدمات بأمان إلى حالتها الطبيعية عن طريق النسخ الاحتياطية النظيفة (Clean Backup).',
            examSignal: 'الكلمة المفتاحية: Return to normal / Restore (استعادة الحالة الطبيعية)'
          },
          {
            stepNumber: '6',
            nameAr: 'منع التكرار والتحسين (Prevention of Recurrence)',
            nameEn: 'Prevention of Recurrence',
            icon: 'security_update_good',
            color: '#16a34a',
            actionSummary: 'تحليل أسباب الحادث، وتوثيق الدروس المستفادة، وتحديث السياسات لضمان عدم تكرار المشكلة ذاتها.',
            examSignal: 'الكلمة المفتاحية: Analyze cause / Same incident does not occur again (منع التكرار)'
          }
        ],

        // Quick Check Trap
        quickCheck: {
          question: 'إجراء تحديث برمجي دوري لإضافة ميزات جديدة للنظام يُعتبر حادثاً أمنياً؟ (صح أم خطأ؟)',
          correctAnswer: 'خطأ',
          explanation: 'خطأ! التحديث البرمجي الروتيني ليس حادثاً أمنياً، لأن الحادث الأمني يشترط وقوع ضرر فعلي (Actual damage) ناجم عن مشكلة أمنية غير مصرح بها.'
        }
      }
    },
    {
      id: 'page-02',
      pageNumber: '02',
      totalPages: '03',
      type: 'ORDER_MATTERS_CASE_STUDY',
      badgeText: 'المحطة 2: سر الترتيب وسؤال الـ 6 درجات',
      unitTitle: 'الوحدة الثانية: الأمن السيبراني',
      lessonTitle: 'الدرس 2-3: الاستجابة للحوادث وإدارة المخاطر',
      pageTag: 'CH-02 // PAGE 02',
      content: {
        badge: 'المحاضرة السابعة — المحطة الثانية',
        title: 'سر الترتيب الإلزامي، سؤال الـ 6 درجات، ومختبر المدرسة',
        subtitle: 'لماذا يُعد التسرع بالاستعادة قبل الاستئصال انتحاراً أمنياً؟ وكيف يتصرف مهندس الاستجابة؟',
        dailyHumorNote: 'اللي بيسترجع النسخة الاحتياطية قبل ما يمسح الفيروس.. زي اللي بينضف البيت ويرش معطر، والتعلب لسه قاعد جوة الأوضة!',

        // The Core Engineering Dilemma
        orderDilemmaBox: {
          title: 'قانون أمن المعلومات الصارم: لماذا الترتيب إلزامي؟ (ص 50 - 51)',
          rule1: {
            title: '1. لماذا يسبق الاحتواءُ (Containment) الاستئصالَ (Eradication)؟',
            reason: 'لأن فحص النظام وحذف الفيروس وسد الثغرة يستغرق وقتاً طويلاً؛ فلو لم نبدأ بفصل كابل الشبكة وعزل الأجهزة المصابة فوراً (Containment)، سينتشر الفيروس في ثوانٍ لباقي أجهزة وسيرفرات المؤسسة كلها!'
          },
          rule2: {
            title: '2. لماذا يسبق الاستئصالُ (Eradication) التعافيَ (Recovery)؟',
            reason: 'لو استعجلت واسترجعت النسخة الاحتياطية (Recovery) قبل أن تحذف الفيروس وتغلق الثغرة (Eradication)، فإن الفيروس الكامن سيصيب النسخة الاحتياطية فوراً ويتكرر الحادث نفسه في لحظتها وتضيع البيانات نهائياً!'
          }
        },

        // Official 6-Mark Exam Essay Question (Book p. 51 & Al-Faez p. 83)
        essayQuestionBox: {
          badge: 'سؤال مقالي رسمي (6 درجات) — كتاب الوزارة ص 51 وكتاب الفائز ص 83',
          question: 'اشرح لماذا يجب تنفيذ مراحل الاستجابة الستة للحوادث بالترتيب، مستخدماً الاستعادة (Recovery) والاستئصال (Eradication) كمثال؟ [أشر إلى: ماذا يحدث إذا لم تتم إزالة المسبب؟]',
          modelAnswerTitle: 'نموذج الإجابة النموذجي المعتمد للامتحان (6 درجات كاملة):',
          points: [
            {
              title: '1. أهمية الترتيب المنطقي المتسلسل:',
              text: 'مراحل الاستجابة الستة مبنية في تسلسل منطقي يعتمد فيه نجاح كل خطوة على اكتمال الخطوة السابقة، وأي قفز أو رد فعل متسرع يؤدي إلى تفاقم الضرر بدلاً من احتوائه.'
            },
            {
              title: '2. تطبيق مثال الاستعادة والاستئصال (جوهر الدرجة):',
              text: 'إذا قامت المؤسسة بعملية الاستعادة (Recovery) واسترجاع الخوادم من النسخ الاحتياطي قبل إتمام مرحلة الاستئصال (Eradication) وحذف البرمجية الخبيثة وسد الثغرة، فإن سبب الهجوم سيظل موجوداً في النظام؛ مما يؤدي إلى إصابة النظام الجديد مرة أخرى وتكرار نفس الحادث فوراً (The same incident may occur again).'
            }
          ],
          conclusion: 'الخلاصة: الترتيب الصحيح يضمن أولاً حصر الضرر، ثم القضاء التام على مسبب الهجوم، ثم إعادة تشغيل النظام بأمان، وأخيراً توثيق الدروس لمنع تكراره.'
        },

        // Think as an Engineer: School Ransomware Case Study (Book p. 52)
        schoolCaseStudy: {
          title: 'مختبر قرار المهندس: هجوم فيروس الفدية في المدرسة (ص 52)',
          scenario: 'نظام سجلات ودرجات الطلاب في مدرسة تعرض لهجوم فيروس الفدية (Ransomware): الملفات مشفرة بالكامل، والموظفون عاجزون عن تسجيل الدخول، وتم تأكيد واكتشاف الحادث للتو (Detection). بصفتك قائد فريق الاستجابة، ما هو قرارك؟',
          immediateChoiceQuestion: 'هل تضغط على خيار (استعادة النسخ الاحتياطي فوراً) أم تتبع المراحل الستة بالترتيب؟',
          correctChoice: 'نتبع المراحل الستة بالترتيب قطباً؛ لأن الاستعادة الفورية ستعرض النسخة الاحتياطية للتشفير والتلف الفوري!',
          actionPlan: [
            {
              step: 'الخطوة 1: الاحتواء (Containment)',
              action: 'فصل كابلات الشبكة وقطع اتصال الإنترنت فوراً عن سيرفر المدرسة وحواسيب الكنترول المصابة لمنع انتقال التشفير إلى أجهزة المعلمين وحواسيب الإدارة.'
            },
            {
              step: 'الخطوة 2: الاستئصال (Eradication)',
              action: 'فحص الحواسيب بمضاد برمجيات خبيثة متخصص، وحذف برمجية الفدية نهائياً، وإغلاق المنفذ المفتوح أو سد الثغرة التي تسلل منها الهاكر، وتغيير كلمات السر.'
            },
            {
              step: 'الخطوة 3: التعافي (Recovery)',
              action: 'استعادة قاعدة بيانات الطلاب من نسخة احتياطية نظيفة ومعزولة (Offline Backup)، والتحقق من سلامتها ودقتها قبل إتاحة تسجيل الدخول للموظفين مجدداً.'
            }
          ],
          riskComparison: {
            title: 'مقارنة أولويات المخاطر التي تواجهها المدرسة (سؤال ص 52):',
            riskA: 'خطر تعرض المدرسة لهجوم فدية آخر: تأثير عالي جداً (High Impact) + احتمالية مرتفعة ➔ أولوية قصوى يجب التصدي لها فوراً.',
            riskB: 'خطر انقطاع مؤقت ومفاجئ للكهرباء (Brief power cut): تأثير محدود ومنخفض (Low Impact) ➔ أولوية منخفضة.'
          }
        }
      }
    },
    {
      id: 'page-03',
      pageNumber: '03',
      totalPages: '03',
      type: 'RISK_ASSESSMENT_MATRIX',
      badgeText: 'المحطة 3: مصفوفة المخاطر وبوابة الاختبار',
      unitTitle: 'الوحدة الثانية: الأمن السيبراني',
      lessonTitle: 'الدرس 2-3: الاستجابة للحوادث وإدارة المخاطر',
      pageTag: 'CH-02 // PAGE 03',
      content: {
        badge: 'المحاضرة السابعة — المحطة الثالثة',
        title: 'معادلة قياس الخطر، مصفوفة الـ 3×3، ومسألة ترتيب الأولويات',
        subtitle: 'كيف تختار المؤسسة المخاطر التي تبدأ بها أولاً؟ وكيف تحسب درجة الخطر رياضياً؟',
        dailyHumorNote: 'مفيش ميزانية في كوكب الأرض تكفي تحل كل المشاكل في نفس الوقت.. الشطارة إنك تضرب وتحدد الخطر الحرج أولاً!',

        // The Risk Formula
        formulaBox: {
          title: 'المعادلة الرياضية لحجم الخطر الأمني (ص 50 وزارة / ص 82 فائز):',
          formulaText: 'Risk Size = Impact × Likelihood',
          formulaAr: 'حجم الخطر = التأثير (حجم الضرر) × الاحتمالية (فرصة الحدوث)',
          factors: [
            {
              name: 'التأثير (Impact)',
              desc: 'حجم الضرر والخسائر الفادحة التي تلحق بالمؤسسة لو تحقق الخطر ووقع فعلياً.',
              icon: 'warning'
            },
            {
              name: 'الاحتمالية (Likelihood)',
              desc: 'مدى فرصة ونسبة احتمالية تحقق هذا الخطر ووقوعه في الواقع مستقبلاً.',
              icon: 'show_chart'
            }
          ],
          trapAlert: 'فخ امتحاني مكرر: العلاقة بين التأثير والاحتمالية ضرب (×) وليست جمعاً (+)، ولا يمكن تحديد حجم الخطر بالتأثير وحده!'
        },

        // The 3x3 Matrix Breakdown
        matrixTitle: 'مصفوفة تقييم وتصنيف المخاطر 3×3 (Risk Evaluation Matrix)',
        matrixGrid: [
          { impact: 'عالي (High)', likelihood: 'منخفض (Low)', level: 'Medium (متوسط)', color: '#f59e0b', bg: '#fef3c7' },
          { impact: 'عالي (High)', likelihood: 'متوسط (Medium)', level: 'High (مرتفع)', color: '#ea580c', bg: '#ffedd5' },
          { impact: 'عالي (High)', likelihood: 'عالي (High)', level: 'CRITICAL ★ (حرج جداً - أولوية أولى)', color: '#dc2626', bg: '#fee2e2', isTop: true },
          { impact: 'متوسط (Medium)', likelihood: 'منخفض (Low)', level: 'Low (منخفض)', color: '#16a34a', bg: '#dcfce7' },
          { impact: 'متوسط (Medium)', likelihood: 'متوسط (Medium)', level: 'Medium (متوسط)', color: '#f59e0b', bg: '#fef3c7' },
          { impact: 'متوسط (Medium)', likelihood: 'عالي (High)', level: 'High (مرتفع)', color: '#ea580c', bg: '#ffedd5' },
          { impact: 'منخفض (Low)', likelihood: 'منخفض (Low)', level: 'Very Low (منخفض جداً)', color: '#059669', bg: '#ecfdf5' },
          { impact: 'منخفض (Low)', likelihood: 'متوسط (Medium)', level: 'Low (منخفض)', color: '#16a34a', bg: '#dcfce7' },
          { impact: 'منخفض (Low)', likelihood: 'عالي (High)', level: 'Medium (متوسط)', color: '#f59e0b', bg: '#fef3c7' }
        ],
        prioritizationRule: 'القاعدة الذهبية للأولويات: "المخاطر ذات التأثير العالي والاحتمالية العالية معاً (High Impact + High Likelihood) يجب معالجتها والتصدي لها أولاً (Fix the worst first)."',

        // Mathematical Ranking Problem (Ministry p. 53 & Al-Faez p. 85)
        mathRankingProblem: {
          title: 'المسألة الحسابية الرسمية لترتيب الأولويات (ص 53 وزارة / ص 85 فائز):',
          question: 'رتّب المخاطر الآتية (من a إلى d) من الأعلى أولوية إلى الأقل أولوية بناءً على معادلة (التأثير × الاحتمالية):',
          items: [
            { id: 'a', impact: 3, likelihood: 3, name: 'الخطر (a): تأثير كبير (3) × احتمالية عالية (3)', score: 9, rank: 'المرتبة 1 (حرج - أولوية أولى)' },
            { id: 'c', impact: 3, likelihood: 2, name: 'الخطر (c): تأثير كبير (3) × احتمالية متوسطة (2)', score: 6, rank: 'المرتبة 2 (مرتفع)' },
            { id: 'b', impact: 1, likelihood: 3, name: 'الخطر (b): تأثير ضئيل (1) × احتمالية عالية (3)', score: 3, rank: 'المرتبة 3 (متوسط)' },
            { id: 'd', impact: 1, likelihood: 1, name: 'الخطر (d): تأثير ضئيل (1) × احتمالية ضعيفة (1)', score: 1, rank: 'المرتبة 4 (منخفض جداً)' }
          ],
          solutionSequence: 'الترتيب الصحيح للأولويات تنازلياً: a ➔ c ➔ b ➔ d'
        },

        // Dual QR Exam Portal Card
        examPortalProps: {
          examHash: '#exam-2-3',
          lessonCode: '2-3',
          isDual: true
        }
      }
    }
  ]
};

