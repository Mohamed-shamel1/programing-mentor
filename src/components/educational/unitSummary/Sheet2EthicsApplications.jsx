import React from 'react';
import SummaryHeader from './components/SummaryHeader.jsx';
import SummaryFooter from './components/SummaryFooter.jsx';
import ConfusionMatrixBar from './components/ConfusionMatrixBar.jsx';
import Icon from '../../ui/Icon.jsx';

/**
 * Sheet2EthicsApplications
 * Back Sheet: Lessons 1-3 & 1-4 across 4 columns
 * Includes Disambiguation Matrix & Master Essay Scenarios
 */
export default function Sheet2EthicsApplications({ sheet2, data, isEn, isRTL, zoomLevel }) {
  return (
    <div
      className="landscape-sheet"
      style={{
        width: '1240px',
        height: '830px',
        maxHeight: '830px',
        backgroundColor: '#ffffff',
        color: '#0f172a',
        padding: '8px 12px',
        borderRadius: '8px',
        boxShadow: '0 12px 40px rgba(0,0,0,0.45)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        overflow: 'hidden',
        transform: `scale(${zoomLevel})`,
        transformOrigin: 'top center',
        marginBottom: zoomLevel > 1 ? `${(zoomLevel - 1) * 830}px` : '0px'
      }}
    >
      {/* Top Banner Zone */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
        <div>
          <SummaryHeader
            pageTag={sheet2.pageTag}
            title={sheet2.title}
            subtitle={sheet2.subtitle}
            pageNumber={sheet2.pageNumber}
            totalPages={sheet2.totalPages}
          />
          <ConfusionMatrixBar confusionMatrix={sheet2.confusionMatrix} isEn={isEn} />
        </div>

        {/* 4-COLUMN LANDSCAPE FLYER GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '7px', flex: 1, minHeight: 0, marginTop: '2px', marginBottom: '5px' }}>

          {/* --------------------------------------------------------- */}
          {/* COLUMN 1: مجالات الذكاء الاصطناعي اليومية والصناعية (1-3)    */}
          {/* --------------------------------------------------------- */}
          <div style={{ border: '1.5px solid #a7f3d0', borderRadius: '5px', padding: '5px 6px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', gap: '5px', boxSizing: 'border-box' }}>
            
            {/* Top Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #059669', paddingBottom: '3px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ backgroundColor: '#059669', color: '#fff', fontSize: '9px', fontWeight: 900, padding: '1px 5px', borderRadius: '3px', fontFamily: "'Outfit', sans-serif" }}>1-3</span>
                <strong style={{ fontSize: '11px', color: '#065f46' }}>{isEn ? 'Daily Life & Industrial Domains' : 'مجالات الحياة اليومية والصناعة'}</strong>
              </div>
              <span style={{ fontSize: '7.8px', color: '#047857', fontWeight: 800, backgroundColor: '#d1fae5', padding: '1px 6px', borderRadius: '3px' }}>
                {isEn ? '8 Services • Exam Bank' : 'الخدمات والقطاعات الـ 8 • بنك الأسئلة'}
              </span>
            </div>

            {/* Card 1: 4 Daily Life Services (Interactive Hooks & Keywords & Famous Exam Apps) */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #bbf7d0', borderRadius: '4px', padding: '5px 7px', fontSize: '8.3px', lineHeight: 1.42 }}>
              <div style={{ fontWeight: 900, color: '#0f766e', marginBottom: '3px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '9.0px', borderBottom: '1px solid #f0fdf4', paddingBottom: '2px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="smartphone" size={13} style={{ color: '#0d9488' }} />
                  <span>{isEn ? 'Daily Life Services & Processing Modes:' : 'خدمات الحياة اليومية وأنماط المعالجة:'}</span>
                </div>
                <span style={{ fontSize: '7.2px', backgroundColor: '#ccfbf1', color: '#0f766e', padding: '1px 5px', borderRadius: '3px', fontWeight: 800 }}>{isEn ? 'Exam Q1 - Q7' : 'أسئلة 1 إلى 7'}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', color: '#1e293b' }}>
                {/* 1. Recommenders */}
                <div style={{ borderBottom: '1px dashed #e2e8f0', paddingBottom: '2.5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ color: '#7c3aed', fontSize: '8.5px' }}>1. {isEn ? 'Recommenders [ML+DL]:' : 'نظم التوصية [ML+DL]:'}</strong>
                    <span style={{ backgroundColor: '#f3e8ff', color: '#6b21a8', padding: '1px 5px', borderRadius: '2px', fontSize: '7.2px', fontWeight: 900 }}>
                      {isEn ? 'YouTube & Amazon' : 'YouTube & أمازون'}
                    </span>
                  </div>
                  <div style={{ marginTop: '1.5px' }}>
                    {isEn ? (
                      <span>Predicts user taste via <strong style={{ color: '#6d28d9', backgroundColor: '#f5f3ff', padding: '0 2px' }}>Probabilistic Inference</strong> based on <strong style={{ color: '#0f172a' }}>Past Behavior</strong>; ⚡ <strong>NOT 100% deterministic certainty</strong>.</span>
                    ) : (
                      <span>تتنبأ بالتفضيلات عبر <strong style={{ color: '#6d28d9', backgroundColor: '#f5f3ff', padding: '0 2px' }}>استدلال احتمالي</strong> مبني على <strong style={{ color: '#0f172a' }}>بيانات السلوك السابق</strong>؛ ⚡ <strong style={{ color: '#dc2626' }}>ليس ضماناً حتمياً مؤكداً 100%</strong>.</span>
                    )}
                  </div>
                </div>

                {/* 2. Voice Assistants */}
                <div style={{ borderBottom: '1px dashed #e2e8f0', paddingBottom: '2.5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ color: '#0284c7', fontSize: '8.5px' }}>2. {isEn ? 'Voice Assistants [Speech+NLP]:' : 'المساعدات الصوتية [صوت+NLP]:'}</strong>
                    <span style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '1px 5px', borderRadius: '2px', fontSize: '7.2px', fontWeight: 900 }}>
                      {isEn ? 'Siri & Alexa' : 'Siri & أليكسا'}
                    </span>
                  </div>
                  <div style={{ marginTop: '1.5px' }}>
                    {isEn ? (
                      <span>Converts speech to text + extracts <strong style={{ color: '#0369a1', backgroundColor: '#f0f9ff', padding: '0 2px' }}>User Intent</strong> via <strong>NLP</strong> to execute spoken commands automatically.</span>
                    ) : (
                      <span>تتعرف على الصوت وتحوله لنص + تفهم الأوامر وتستخلص <strong style={{ color: '#0369a1', backgroundColor: '#f0f9ff', padding: '0 2px' }}>قصد المستخدم (User Intent)</strong> عبر <strong>NLP</strong> وتنفذها.</span>
                    )}
                  </div>
                </div>

                {/* 3. Neural Translation */}
                <div style={{ borderBottom: '1px dashed #e2e8f0', paddingBottom: '2.5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ color: '#0d9488', fontSize: '8.5px' }}>3. {isEn ? 'Machine Translation [Transformers]:' : 'الترجمة الآلية [Transformers]:'}</strong>
                    <span style={{ backgroundColor: '#ccfbf1', color: '#0f766e', padding: '1px 5px', borderRadius: '2px', fontSize: '7.2px', fontWeight: 900 }}>
                      {isEn ? 'Google Translate & DeepL' : 'Google Translate & DeepL'}
                    </span>
                  </div>
                  <div style={{ marginTop: '1.5px' }}>
                    {isEn ? (
                      <span>Translates text automatically while understanding <strong style={{ color: '#0f766e', backgroundColor: '#f0fdfa', padding: '0 2px' }}>Full Context & Idioms</strong> rejecting crude literal translation.</span>
                    ) : (
                      <span>ترجمة النصوص تلقائياً بين لغات مختلفة مع استيعاب <strong style={{ color: '#0f766e', backgroundColor: '#f0fdfa', padding: '0 2px' }}>سياق الجملة بالكامل والمجاز</strong> بدلاً من الترجمة الحرفية.</span>
                    )}
                  </div>
                </div>

                {/* 4. Facial Recognition */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ color: '#4338ca', fontSize: '8.5px' }}>4. {isEn ? 'Facial Recognition [CNN 3D]:' : 'التعرف على الوجه [CNN 3D]:'}</strong>
                    <span style={{ backgroundColor: '#e0e7ff', color: '#3730a3', padding: '1px 5px', borderRadius: '2px', fontSize: '7.2px', fontWeight: 900 }}>
                      {isEn ? 'Phone Unlock & Gates' : 'فتح الهاتف & البوابات'}
                    </span>
                  </div>
                  <div style={{ marginTop: '1.5px' }}>
                    {isEn ? (
                      <span>Extracts <strong>3D Biometric Landmarks</strong>: <strong style={{ color: '#15803d' }}>Permissible for phone unlock & gate security</strong>; <strong style={{ color: '#b91c1c' }}>Forbidden for street mass surveillance</strong>.</span>
                    ) : (
                      <span>استخراج <strong>معالم بيومترية 3D</strong>: <strong style={{ color: '#15803d' }}>مسموح لفتح الهاتف الذكي وبوابات العبور</strong>؛ و<strong style={{ color: '#b91c1c' }}>ممنوع للتتبع والمراقبة بالشوارع</strong>.</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: 4 Vital & Industrial Applied Sectors */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '5px 7px', fontSize: '8.3px', lineHeight: 1.42 }}>
              <div style={{ fontWeight: 900, color: '#047857', marginBottom: '3px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '9.0px', borderBottom: '1px solid #f8fafc', paddingBottom: '2px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="factory" size={13} style={{ color: '#059669' }} />
                  <span>{isEn ? 'Vital & Industrial Applied Sectors:' : 'القطاعات الحيوية والتطبيقات الصناعية:'}</span>
                </div>
                <span style={{ fontSize: '7.2px', backgroundColor: '#dcfce7', color: '#059669', padding: '1px 5px', borderRadius: '3px', fontWeight: 800 }}>{isEn ? 'Exam Q8 - Q11' : 'أسئلة 8 إلى 11'}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5px', color: '#1e293b' }}>
                {/* 5. Healthcare */}
                <div>
                  <strong style={{ color: '#dc2626', fontSize: '8.5px' }}>5. {isEn ? 'Healthcare [Medical Vision]: ' : 'الرعاية الصحية [رؤية طبية]: '}</strong>
                  {isEn ? (
                    <span>Analyzing <strong style={{ color: '#b91c1c' }}>X-ray & MRI Scans</strong> for disease/tumor signs; AI is <strong style={{ color: '#b91c1c', backgroundColor: '#fef2f2', padding: '0 2px' }}>Strictly Assistive</strong>; Final clinical diagnosis & liability rests on the <strong style={{ color: '#1e293b', textDecoration: 'underline' }}>Human Doctor</strong>!</span>
                  ) : (
                    <span>الكشف عن الأمراض وتحليل <strong style={{ color: '#b91c1c' }}>صور الأشعة (X-Ray / MRI)</strong>؛ الـ AI <strong style={{ color: '#b91c1c', backgroundColor: '#fef2f2', padding: '0 2px' }}>أداة مساعدة فقط</strong>، والقرار النهائي والتشخيص <strong style={{ color: '#1e293b', textDecoration: 'underline' }}>يؤكده الطبيب البشري</strong>!</span>
                  )}
                </div>

                {/* 6. Smart Agriculture */}
                <div>
                  <strong style={{ color: '#16a34a', fontSize: '8.5px' }}>6. {isEn ? 'Smart Agriculture [Drones+Sensors]: ' : 'الزراعة الذكية [درونز+حساسات]: '}</strong>
                  {isEn ? (
                    <span>Drone cameras + soil sensors for <strong style={{ color: '#15803d' }}>Harvest Timing Forecast</strong>, <strong style={{ color: '#15803d' }}>Early Pest/Disease Spotting</strong>, and <strong style={{ color: '#15803d' }}>Precision Irrigation</strong>.</span>
                  ) : (
                    <span>كاميرات الدرونز وحساسات التربة لـ: <strong style={{ color: '#15803d' }}>التنبؤ بموعد الحصاد</strong>، و<strong style={{ color: '#15803d' }}>الكشف عن الآفات والأمراض</strong>، و<strong style={{ color: '#15803d' }}>الري الدقيق</strong>.</span>
                  )}
                </div>

                {/* 7. Manufacturing Automation */}
                <div>
                  <strong style={{ color: '#b45309', fontSize: '8.5px' }}>7. {isEn ? 'Manufacturing Automation: ' : 'التصنيع والأتمتة الصناعية: '}</strong>
                  {isEn ? (
                    <span>Automating production lines with <strong style={{ color: '#9a3412' }}>Zero direct human intervention</strong> to raise throughput, combining <strong style={{ color: '#1d4ed8' }}>Quality Inspection</strong> & <strong style={{ color: '#d97706' }}>Predictive Maintenance</strong>.</span>
                  ) : (
                    <span>أتمتة خطوط الإنتاج مع <strong style={{ color: '#9a3412' }}>انعدام التدخل البشري المباشر</strong> لرفع الإنتاجية، ويشمل <strong style={{ color: '#1d4ed8' }}>أتمتة فحص الجودة</strong> و<strong style={{ color: '#d97706' }}>الصيانة التنبؤية</strong>.</span>
                  )}
                </div>

                {/* 8. Logistics */}
                <div>
                  <strong style={{ color: '#0369a1', fontSize: '8.5px' }}>8. {isEn ? 'Logistics [Pathfinding AI]: ' : 'الخدمات اللوجستية وتعيين المسارات: '}</strong>
                  {isEn ? (
                    <span>Real-time graph routing algorithms to <strong style={{ color: '#0284c7' }}>Optimize Delivery Routes</strong>, minimize fuel burn, and prevent transit delays.</span>
                  ) : (
                    <span>خوارزميات المسارات الذكية لـ <strong style={{ color: '#0284c7' }}>تحسين مسارات التوصيل</strong> وتقليل استهلاك الوقود وزمن النقل والشحن.</span>
                  )}
                </div>
              </div>
            </div>

            {/* Card 3: Hardware Difference: Quality Inspection vs Predictive Maintenance (سؤال 10، 12، 15) */}
            <div style={{ backgroundColor: '#eff6ff', border: '1px solid #93c5fd', borderRadius: '4px', padding: '5px 7px', fontSize: '8.3px', lineHeight: 1.42 }}>
              <div style={{ fontWeight: 900, color: '#1e40af', marginBottom: '3px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '8.9px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="precision_manufacturing" size={13} style={{ color: '#2563eb' }} />
                  <span>{isEn ? 'Hardware Difference in Manufacturing:' : 'الفارق العتادي الحاسم في التصنيع:'}</span>
                </div>
                <span style={{ fontSize: '7.2px', backgroundColor: '#dbeafe', color: '#1e40af', padding: '1px 5px', borderRadius: '3px', fontWeight: 800 }}>{isEn ? 'Exam Q10, 12, 15' : 'أسئلة 10، 12، 15'}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5px', color: '#1e293b' }}>
                {/* Quality Inspection */}
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #bfdbfe', borderRadius: '3px', padding: '3px 6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ color: '#1e40af' }}>• {isEn ? 'Quality Inspection:' : 'أتمتة فحص جودة المنتجات:'}</strong>
                    <span style={{ fontSize: '7.2px', color: '#1d4ed8', fontWeight: 800 }}>{isEn ? 'Vision Cameras' : 'كاميرات رؤية حاسوبية'}</span>
                  </div>
                  <div style={{ marginTop: '1px' }}>
                    {isEn ? (
                      <span>Vision Cameras on belt inspect <strong style={{ color: '#0f766e', backgroundColor: '#ccfbf1', padding: '0 2px' }}>Finished Product</strong> to catch <strong style={{ color: '#dc2626' }}>CURRENT defects</strong> instantly on the spot.</span>
                    ) : (
                      <span>كاميرات الرؤية على سير الإنتاج تفحص <strong style={{ color: '#0f766e', backgroundColor: '#ccfbf1', padding: '0 2px' }}>المنتج النهائي</strong> لرصد <strong style={{ color: '#dc2626' }}>العيوب الحالية</strong> فوراً وعزلها.</span>
                    )}
                  </div>
                </div>

                {/* Predictive Maintenance */}
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #fde68a', borderRadius: '3px', padding: '3px 6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ color: '#b45309' }}>• {isEn ? 'Predictive Maintenance:' : 'الصيانة التنبؤية للآلات:'}</strong>
                    <span style={{ fontSize: '7.2px', color: '#b45309', fontWeight: 800 }}>{isEn ? 'Temp & Vibration Sensors' : 'حساسات حرارة واهتزاز'}</span>
                  </div>
                  <div style={{ marginTop: '1px' }}>
                    {isEn ? (
                      <span><strong style={{ color: '#d97706' }}>Vibration & Temperature Sensors</strong> on <strong style={{ color: '#b45309', backgroundColor: '#fef3c7', padding: '0 2px' }}>Machine Itself</strong> to forecast <strong style={{ color: '#7c2d12' }}>FUTURE breakdown</strong> before machine halts.</span>
                    ) : (
                      <span>مستشعرات <strong style={{ color: '#d97706' }}>درجة الحرارة والاهتزاز</strong> المثبتة على <strong style={{ color: '#b45309', backgroundColor: '#fef3c7', padding: '0 2px' }}>الماكينة نفسها</strong> للتنبؤ بـ <strong style={{ color: '#7c2d12' }}>الأعطال المستقبلية</strong> قبل حدوثها وتوقف الخطوط.</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Official Exam Traps for Lesson 1-3 */}
            <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '4px', padding: '4.5px 7px', fontSize: '8.2px', color: '#7f1d1d', lineHeight: 1.42 }}>
              <div style={{ fontWeight: 900, color: '#991b1b', marginBottom: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '8.8px', borderBottom: '1px solid #fee2e2', paddingBottom: '2px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="warning" size={13} style={{ color: '#dc2626' }} />
                  <span>{isEn ? 'Official Exam Traps (Lesson 1-3 Bank):' : 'فخاخ امتحانية وزارية مؤكدة (1-3):'}</span>
                </div>
                <span style={{ fontSize: '7.2px', backgroundColor: '#fee2e2', color: '#b91c1c', padding: '1px 5px', borderRadius: '3px', fontWeight: 800 }}>{isEn ? 'Traps' : 'تركات وحلول'}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div>
                  ⚡ <strong style={{ color: '#991b1b' }}>{isEn ? 'Certainty Trap (100%): ' : 'فخ اليقين التام (100%): '}</strong>
                  {isEn ? (
                    <span>Recommenders are PROBABILISTIC based on past behavior; AI <strong style={{ color: '#b91c1c' }}>NEVER guarantees 100% correctness or fairness</strong>! Any choice stating "100% deterministic certainty" is FALSE.</span>
                  ) : (
                    <span>نظم التوصية استدلال احتمالي؛ الـ AI <strong style={{ color: '#b91c1c', textDecoration: 'underline' }}>لا يضمن أبداً 100% العدالة أو الصحة</strong>! وأي اختيار يدعي "ضمان حتمي مؤكد 100%" هو اختيار مضلل خاطئ تماماً.</span>
                  )}
                </div>
                <div>
                  ⚡ <strong style={{ color: '#991b1b' }}>{isEn ? 'High-Stakes Oversight (Q18-20): ' : 'القرارات عالية الأثر (س 18-20): '}</strong>
                  {isEn ? (
                    <span>Human oversight is mandatory when decisions are <strong style={{ color: '#b91c1c' }}>High-Stakes</strong> (clinical diagnosis, court sentences, credit). Core rationale is <strong style={{ color: '#1e293b' }}>Ethics, Privacy, & Liability</strong>!</span>
                  ) : (
                    <span>تزداد الحاجة للإشراف البشري عندما يكون القرار <strong style={{ color: '#b91c1c' }}>عالي الأثر</strong> (تشخيص طبي، أحكام قضائية)؛ والسبب الأساسي للحكم البشري هو <strong style={{ color: '#1e293b' }}>الأخلاق والخصوصية والمسؤولية</strong>!</span>
                  )}
                </div>
                <div>
                  ⚡ <strong style={{ color: '#991b1b' }}>{isEn ? 'What AI Excels At (Q4 Complete): ' : 'ما يبرع فيه AI (سؤال 4 أكمل): '}</strong>
                  {isEn ? (
                    <span>AI excels at finding & classifying <strong style={{ color: '#047857' }}>Patterns in complex data</strong>; ethical judgments can NEVER be delegated to AI!</span>
                  ) : (
                    <span>يبرع الذكاء الاصطناعي في إيجاد وتصنيف <strong style={{ color: '#047857' }}>الأنماط (Patterns)</strong> في البيانات المعقدة؛ وإياك ترك الأحكام الأخلاقية للآلة دون تدخل بشري!</span>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* --------------------------------------------------------- */}
          {/* COLUMN 2: خصائص الذكاء الاصطناعي واحتياطات الاستخدام       */}
          {/* --------------------------------------------------------- */}
          <div style={{ border: '1.5px solid #93c5fd', borderRadius: '5px', padding: '5px 6px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', gap: '5px', boxSizing: 'border-box' }}>
            
            {/* Top Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #0284c7', paddingBottom: '3px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ backgroundColor: '#0284c7', color: '#fff', fontSize: '9px', fontWeight: 900, padding: '1px 5px', borderRadius: '3px', fontFamily: "'Outfit', sans-serif" }}>1-3</span>
                <strong style={{ fontSize: '11px', color: '#0369a1' }}>{isEn ? 'Capabilities vs. Caution' : 'خصائص AI واحتياطات الاستخدام'}</strong>
              </div>
              <span style={{ fontSize: '7.8px', color: '#0369a1', fontWeight: 800, backgroundColor: '#e0f2fe', padding: '1px 6px', borderRadius: '3px' }}>
                {isEn ? '3 Strengths vs 7 Risks' : '3 ركائز قوة • 7 محاذير'}
              </span>
            </div>

            {/* Card 1: What AI Excels At (The 3 Core Pillars) */}
            <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '4px', padding: '5px 7px', fontSize: '8.4px', lineHeight: 1.44 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#166534', fontWeight: 900, marginBottom: '3px', fontSize: '9.0px', borderBottom: '1px solid #dcfce7', paddingBottom: '2px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="check_circle" size={13} style={{ color: '#16a34a' }} />
                  <span>{isEn ? 'What AI Excels At (3 Core Pillars):' : 'ما يبرع فيه AI (الركائز الثلاث):'}</span>
                </div>
                <span style={{ fontSize: '7.2px', backgroundColor: '#dcfce7', color: '#15803d', padding: '1px 5px', borderRadius: '3px', fontWeight: 800 }}>{isEn ? 'AI Strengths' : 'نقاط القوة'}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', color: '#14532d' }}>
                <div>• <strong>1. {isEn ? 'Big Data Pattern Discovery:' : 'تصنيف الأنماط بالبيانات الضخمة:'}</strong> {isEn ? 'Uncovering hidden trends across complex data (spotting tumors, classifying images).' : 'ملاحظة الأنماط المخفية وتصنيفها بدقة وسط مليارات البيانات غير المنظمة (ككشف الأورام والتمييز بين الصور).'}</div>
                <div>• <strong>2. {isEn ? 'Multimodal Perception & Creation:' : 'الإدراك وتوليد المحتوى (GenAI):'}</strong> {isEn ? 'Accurately processing digital senses (images, audio, text) and generating new content.' : 'معالجة الإشارات الرقمية (صور، أصوات، نصوص)، وتوليد تصميمات وأكواد وصياغات جديدة ومبتكرة.'}</div>
                <div>• <strong>3. {isEn ? 'Probabilistic Inference & Fast Analytics:' : 'الاستدلال الاحتمالي والتحليل السريع:'}</strong> {isEn ? 'Drawing rapid probabilistic conclusions in dynamic environments based on past data.' : 'استخلاص استنتاجات ترجيحية وسريعة في بيئات معقدة ومتغيرة لحظياً بناءً على السلوك السابق.'}</div>
              </div>
            </div>

            {/* Card 2: What Demands Caution & Oversight (The 7 Big Risks) */}
            <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '4px', padding: '5px 7px', fontSize: '8.2px', lineHeight: 1.42 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#991b1b', fontWeight: 900, marginBottom: '3px', fontSize: '8.9px', borderBottom: '1px solid #fee2e2', paddingBottom: '2px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="security_update_warning" size={13} style={{ color: '#dc2626' }} />
                  <span>{isEn ? 'What Demands Caution (7 Big Risks):' : 'ما يتطلب الحذر والرقابة البشرية (المحاذير الـ 7):'}</span>
                </div>
                <span style={{ fontSize: '7.2px', backgroundColor: '#fee2e2', color: '#b91c1c', padding: '1px 5px', borderRadius: '3px', fontWeight: 800 }}>{isEn ? 'Risks' : 'محاذير إلزامية'}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5px', color: '#7f1d1d' }}>
                <div>• <strong>1. {isEn ? 'Ethical Judgments & Bias:' : 'الأحكام الأخلاقية والتحيز:'}</strong> {isEn ? 'Unfair discrimination if trained on skewed historical datasets.' : 'الآلة بلا ضمير؛ خطر إصدار أحكام تمييزية جائرة إذا كانت بيانات التدريب منحازة.'}</div>
                <div>• <strong>2. {isEn ? 'Privacy & Sensitive Records:' : 'الخصوصية والبيانات الحساسة:'}</strong> {isEn ? 'Safeguarding personal secrets and preventing unauthorized surveillance.' : 'صون سرية السجلات الشخصية ومنع الاختراق والتتبع والمراقبة غير المصرح بها.'}</div>
                <div>• <strong>3. {isEn ? 'High-Stakes Decisions:' : 'القرارات مصيرية الأثر (قضاء، طب):'}</strong> {isEn ? 'Assigning judicial/medical choices raises liability dilemma.' : 'تفويض الآلة بقرارات تمس حياة وحرية البشر يثير أزمة في تحديد المسؤولية.'}</div>
                <div>• <strong>4. {isEn ? 'Data Imbalance Impact:' : 'خلل ونقص بيانات التدريب:'}</strong> {isEn ? 'Lack of population diversity directly degrades output accuracy.' : 'غياب التنوع في البيانات يقود حتماً لنتائج مشوهة؛ فالنظام لا يعلم أكثر مما دربته عليه.'}</div>
                <div>• <strong>5. {isEn ? 'AI Hallucination:' : 'هلوسة الذكاء الاصطناعي:'}</strong> {isEn ? 'Generating false fabrications with confident and convincing eloquence.' : 'توليد معلومات وأحكام وهمية كاذبة وتقديمها بنبرة واثقة ومقنعة جداً.'}</div>
                <div>• <strong>6. {isEn ? 'Intellectual Property:' : 'الملكية الفكرية وحقوق المؤلف:'}</strong> {isEn ? 'Training models on copyrighted artwork and code without consent.' : 'تدريب النماذج على محتوى محمي بحقوق النشر دون إذن أو ترخيص أصحابه.'}</div>
                <div>• <strong>7. {isEn ? 'The Black Box Problem:' : 'معضلة الصندوق الأسود (Black Box):'}</strong> {isEn ? 'Internal mathematical operations remain opaque and unexplained.' : 'العمليات الرياضية بالداخل معتمة وغير مفهومة وتمنع التدقيق والطعن.'}</div>
              </div>
            </div>

            {/* Card 3: Crucial Golden Rule in Thanawya Exams */}
            <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '4px', padding: '4px 7px', fontSize: '8.3px', color: '#92400e', lineHeight: 1.42 }}>
              <div style={{ fontWeight: 900, color: '#b45309', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '8.8px' }}>
                <Icon name="stars" size={13} style={{ color: '#d97706' }} />
                <span>{isEn ? 'Golden Rule in Thanawya Exams:' : 'القاعدة الذهبية الحاكمة في امتحانات الوزارة:'}</span>
              </div>
              <span>
                {isEn
                  ? 'Ethical judgments, Fairness, Privacy, and Accountability fall strictly under "Demands Caution". NEVER choose them under "What AI Excels At"!'
                  : 'مفاهيم "الأحكام الأخلاقية"، و"العدالة"، و"الخصوصية"، و"المساءلة" تقع جميعاً تحت بند "ما يتطلب الحذر والرقابة"؛ وإياك أن تختارها كشيء "يبرع فيه AI"!'}
              </span>
            </div>

            {/* Card 4: Human-in-the-Loop & Rare Diseases Scenarios */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #bfdbfe', borderRadius: '4px', padding: '4.5px 7px', fontSize: '8.3px', lineHeight: 1.42 }}>
              <div style={{ fontWeight: 900, color: '#0369a1', marginBottom: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '8.8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="verified_user" size={13} style={{ color: '#0284c7' }} />
                  <span>{isEn ? 'Human-in-the-Loop & Rare Scenarios:' : 'حتمية الرقابة البشرية وندرة البيانات:'}</span>
                </div>
                <span style={{ fontSize: '7.2px', backgroundColor: '#e0f2fe', color: '#0284c7', padding: '1px 5px', borderRadius: '3px', fontWeight: 800 }}>{isEn ? 'Exam Q16' : 'سؤال 16 بالامتحان'}</span>
              </div>
              <div style={{ color: '#1e293b', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div>• <strong>{isEn ? 'Human-in-the-Loop:' : 'الرقابة البشرية (Human-in-the-Loop):'} </strong> {isEn ? 'In clinics and courts, AI is consultative; final decision and legal liability rest strictly on human doctors and judges.' : 'في التطبيقات الحيوية (المستشفيات، المحاكم)، الـ AI مستشار استئناسي؛ والقرار والمسؤولية تقع حصراً على الطبيب والقاضي البشري.'}</div>
                <div>• <strong>{isEn ? 'Rare Diseases (Data Scarcity):' : 'معضلة الحالات النادرة (Data Scarcity):'} </strong> {isEn ? 'Data scarcity on rare conditions reduces AI accuracy, mandating human clinical review.' : 'ندرة بيانات الحالات النادرة تؤدي لانخفاض دقة النموذج الاحتمالي، مما يجعل الاعتماد والمراجعة الطبية البشرية إلزامية.'}</div>
              </div>
            </div>

          </div>

          {/* --------------------------------------------------------- */}
          {/* COLUMN 3: التحيز الخوارزمي والخصوصية وحل الصندوق الأسود (1-4)*/}
          {/* --------------------------------------------------------- */}
          <div style={{ border: '1.5px solid #fed7aa', borderRadius: '5px', padding: '5px 6px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', gap: '5px', boxSizing: 'border-box' }}>
            
            {/* Top Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #d97706', paddingBottom: '3px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ backgroundColor: '#d97706', color: '#fff', fontSize: '9px', fontWeight: 900, padding: '1px 5px', borderRadius: '3px', fontFamily: "'Outfit', sans-serif" }}>1-4</span>
                <strong style={{ fontSize: '11px', color: '#92400e' }}>{isEn ? 'Algorithmic Bias, Privacy & XAI' : 'التحيز الخوارزمي والخصوصية وXAI'}</strong>
              </div>
              <span style={{ fontSize: '7.8px', color: '#92400e', fontWeight: 800, backgroundColor: '#fef3c7', padding: '1px 6px', borderRadius: '3px' }}>
                {isEn ? 'Bias Causes • Privacy • XAI' : 'المصادر الـ 4 • الخصوصية • أسئلة 1-10'}
              </span>
            </div>

            {/* Card 1: Algorithmic Bias Hub (Definition + 4 Sources + Speed Trap) */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #fed7aa', borderRadius: '4px', padding: '5px 7px', fontSize: '8.4px', lineHeight: 1.45 }}>
              <div style={{ fontWeight: 900, color: '#b45309', marginBottom: '3px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '9.0px', borderBottom: '1px solid #ffedd5', paddingBottom: '2px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="gavel" size={13} style={{ color: '#d97706' }} />
                  <span>{isEn ? 'Algorithmic Bias & The 4 Sources:' : 'التحيز الخوارزمي ومصادره الأربعة:'}</span>
                </div>
                <span style={{ fontSize: '7.2px', backgroundColor: '#fef3c7', color: '#b45309', padding: '1px 5px', borderRadius: '3px', fontWeight: 800 }}>{isEn ? 'Exam Q1 - Q5' : 'أسئلة 1 إلى 5'}</span>
              </div>
              
              {/* Definition */}
              <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '3px', padding: '3.5px 6px', marginBottom: '4px', color: '#78350f' }}>
                <strong>📌 {isEn ? 'Official Definition (Q1): ' : 'التعريف المعتمد (سؤال 1): '}</strong>
                {isEn ? (
                  <span>A systematic pattern in AI outputs leading to <strong style={{ color: '#9a3412', textDecoration: 'underline' }}>unfair or harmful results</strong> against certain groups, stemming from data, design, usage, or context.</span>
                ) : (
                  <span>نمط أو انحراف منتظم في مخرجات AI قد يؤدي إلى <strong style={{ color: '#9a3412', textDecoration: 'underline' }}>نتائج غير عادلة أو ضارة</strong> بحق فئة معينة، ينشأ من البيانات، أو التصميم، أو طريقة الاستخدام، أو السياق الاجتماعي.</span>
                )}
              </div>

              {/* 4 Sources */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5px', color: '#1e293b' }}>
                <div>
                  <strong style={{ color: '#c2410c' }}>1. {isEn ? 'Data (Q2 & 3): ' : 'البيانات (سؤال 2 و 3): '}</strong>
                  {isEn ? (
                    <span><strong style={{ color: '#ea580c' }}>Lack of group data</strong> lowers accuracy and increases bias (face recognition); or repeats <strong style={{ color: '#ea580c' }}>past hiring bias</strong>.</span>
                  ) : (
                    <span><strong style={{ color: '#ea580c' }}>قلة تمثيل الفئة</strong> تقلل الدقة وتزيد التحيز؛ أو تكرار <strong style={{ color: '#ea580c' }}>تمييز توظيف تاريخي سابق</strong>.</span>
                  )}
                </div>
                <div>
                  <strong style={{ color: '#dc2626' }}>2. {isEn ? 'Design (Proxy - Q4): ' : 'التصميم والمتغير البديل (سؤال 4): '}</strong>
                  {isEn ? (
                    <span>Using a <strong style={{ color: '#b91c1c' }}>Proxy Variable (e.g. Zip Code)</strong> that secretly correlates with a protected trait!</span>
                  ) : (
                    <span>استخدام <strong style={{ color: '#b91c1c' }}>متغير بديل (Proxy Variable كالرمز البريدي)</strong> ينوب خفية عن سمة محمية!</span>
                  )}
                </div>
                <div>
                  <strong style={{ color: '#0369a1' }}>3. {isEn ? 'Usage (Q4): ' : 'طريقة الاستخدام (سؤال 4): '}</strong>
                  {isEn ? (
                    <span>Deploying the system for unverified tasks or blind trust without human review.</span>
                  ) : (
                    <span>استخدام النظام لغير ما صُمم له أصلاً أو الاعتماد الأعمى دون مراجعة بشرية.</span>
                  )}
                </div>
                <div>
                  <strong style={{ color: '#4338ca' }}>4. {isEn ? 'Context (Q4): ' : 'السياق البشري والاجتماعي (سؤال 4): '}</strong>
                  {isEn ? (
                    <span>Applying the model in a differing cultural/social environment without local calibration.</span>
                  ) : (
                    <span>تطبيق النموذج في بيئة ومجتمع مختلف دون معايرة تراعي الفروق الثقافية.</span>
                  )}
                </div>
              </div>

              {/* Speed Trap inside Bias Hub */}
              <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '3px', padding: '3px 6px', marginTop: '4px', fontSize: '8.0px', color: '#991b1b' }}>
                ⚡ <strong>{isEn ? 'Speed Trap (Exam Q2): ' : 'فخ السرعة المتكرر (سؤال 2): '}</strong>
                {isEn ? (
                  <span>Computer processing speed or slow chips are <strong style={{ color: '#b91c1c', textDecoration: 'underline' }}>NEVER causes of bias</strong>! Speed only affects execution latency.</span>
                ) : (
                  <span>سرعة المعالج أو بطء الحاسوب <strong style={{ color: '#b91c1c', textDecoration: 'underline' }}>ليست سبباً على الإطلاق لنشوء التحيز</strong>! فالسرعة تؤثر على زمن إخراج النتيجة فقط.</span>
                )}
              </div>
            </div>

            {/* Card 2: Privacy Issues in AI (Exam Q6, Q7, Q8) */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '5px 7px', fontSize: '8.4px', lineHeight: 1.45 }}>
              <div style={{ fontWeight: 900, color: '#0f172a', marginBottom: '3px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '9.0px', borderBottom: '1px solid #f1f5f9', paddingBottom: '2px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="lock" size={13} style={{ color: '#0284c7' }} />
                  <span>{isEn ? 'Privacy Issues in AI:' : 'قضايا الخصوصية في الذكاء الاصطناعي:'}</span>
                </div>
                <span style={{ fontSize: '7.2px', backgroundColor: '#e0f2fe', color: '#0369a1', padding: '1px 5px', borderRadius: '3px', fontWeight: 800 }}>{isEn ? 'Exam Q6, Q7, Q8' : 'أسئلة 6 و 7 و 8'}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', color: '#1e293b' }}>
                <div>
                  • <strong style={{ color: '#0369a1' }}>{isEn ? 'Privacy Concept (Q6): ' : 'المقصود بالخصوصية (سؤال 6): '}</strong>
                  {isEn ? (
                    <span>Protecting personal data and private life from unauthorized tracking, collection, or surveillance.</span>
                  ) : (
                    <span>حماية المعلومات والبيانات الشخصية والحياة الخاصة من الجمع أو الاستخدام أو المراقبة غير المسموح بها.</span>
                  )}
                </div>
                <div>
                  • <strong style={{ color: '#dc2626' }}>{isEn ? 'Face Tracking in Public (Q7): ' : 'تتبع الوجوه بالأماكن العامة (سؤال 7): '}</strong>
                  {isEn ? (
                    <span>Public cameras identifying individuals and tracking their movements across locations without consent is an ethical violation!</span>
                  ) : (
                    <span>التعرف على الأفراد ومراقبة وتتبع تحركاتهم بالكاميرات في الأماكن العامة دون إذن مسبق يمثل انتهاكاً صريحاً للخصوصية!</span>
                  )}
                </div>
                <div>
                  • <strong style={{ color: '#7c3aed' }}>{isEn ? 'Mass Online Data Collection (Q8): ' : 'الجمع الجماعي للبيانات الرقمية (سؤال 8): '}</strong>
                  {isEn ? (
                    <span>Gathering massive online user behaviors, search queries, visited sites, and digital habits to discover patterns.</span>
                  ) : (
                    <span>جمع وتحليل كميات ضخمة من بيانات السلوك وعمليات البحث والمواقع والتفاعلات الرقمية عبر الإنترنت لاكتشاف الأنماط.</span>
                  )}
                </div>
              </div>
            </div>

            {/* Card 3: Black Box Problem vs Explainable AI (XAI) (Exam Q9 & Q10) */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #bfdbfe', borderRadius: '4px', padding: '5px 7px', fontSize: '8.4px', lineHeight: 1.45 }}>
              <div style={{ fontWeight: 900, color: '#1e40af', marginBottom: '3px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '9.0px', borderBottom: '1px solid #eff6ff', paddingBottom: '2px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="visibility" size={13} style={{ color: '#2563eb' }} />
                  <span>{isEn ? 'Black Box vs. Explainable AI (XAI):' : 'الصندوق الأسود المعتم مقابل الذكاء المفسر XAI:'}</span>
                </div>
                <span style={{ fontSize: '7.2px', backgroundColor: '#dbeafe', color: '#1d4ed8', padding: '1px 5px', borderRadius: '3px', fontWeight: 800 }}>{isEn ? 'Exam Q9 & Q10' : 'سؤال 9 و 10'}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', color: '#1e293b' }}>
                <div>
                  • <strong style={{ color: '#1e293b' }}>{isEn ? 'Black Box Problem (Q10): ' : 'معضلة الصندوق الأسود (سؤال 10): '}</strong>
                  {isEn ? (
                    <span>When decision logic is hidden and opaque, it is <strong style={{ color: '#dc2626' }}>hard to detect errors, bias, or assess fairness</strong>; strictly rejected in high-stakes decisions!</span>
                  ) : (
                    <span>عندما تكون آلية اتخاذ القرار معتمة وغير واضحة، <strong style={{ color: '#dc2626' }}>يصعب اكتشاف الأخطاء أو التحيز أو التأكد من عدالة القرار</strong>؛ ومرفوض تماماً بالقرارات المصيرية!</span>
                  )}
                </div>
                <div>
                  • <strong style={{ color: '#2563eb' }}>{isEn ? 'Explainable AI - XAI (Q9): ' : 'الذكاء القابل للتفسير XAI (سؤال 9): '}</strong>
                  {isEn ? (
                    <span>Methods that enable humans to <strong style={{ color: '#1d4ed8' }}>understand WHY the AI made a decision</strong>, clarifying the key factors behind the outcome.</span>
                  ) : (
                    <span>تقنيات وأساليب تتيح للبشر <strong style={{ color: '#1d4ed8' }}>فهم أسباب ومنطق اتخاذ الذكاء الاصطناعي لحكم معين (يجيب عن: لماذا؟)</strong> وتوضح العوامل المؤثرة.</span>
                  )}
                </div>
                <div style={{ backgroundColor: '#eff6ff', borderRadius: '3px', padding: '2.5px 5px', fontSize: '7.8px', color: '#1e40af' }}>
                  ⚡ <strong>{isEn ? 'Exam Tip (Q19): ' : 'تنبيه وزاري (سؤال 19): '}</strong>
                  {isEn ? 'Rejecting a job applicant without explaining the reason violates Transparency & XAI!' : 'رفض متقدم لوظيفة دون توضيح وتفسير سبب الرفض يمثل انتهاكاً لمبدأ الشفافية وXAI!'}
                </div>
              </div>
            </div>

          </div>

          {/* --------------------------------------------------------- */}
          {/* COLUMN 4: المبادئ الأربعة والمسؤولية والمساءلة (1-4)        */}
          {/* --------------------------------------------------------- */}
          <div style={{ border: '1.5px solid #c7d2fe', borderRadius: '5px', padding: '5px 6px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', gap: '5px', boxSizing: 'border-box' }}>
            
            {/* Top Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #4338ca', paddingBottom: '3px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ backgroundColor: '#4338ca', color: '#fff', fontSize: '9px', fontWeight: 900, padding: '1px 5px', borderRadius: '3px', fontFamily: "'Outfit', sans-serif" }}>1-4</span>
                <strong style={{ fontSize: '11px', color: '#312e81' }}>{isEn ? '4 Principles & Responsibility' : 'المبادئ الأربعة والمسؤولية'}</strong>
              </div>
              <span style={{ fontSize: '7.8px', color: '#312e81', fontWeight: 800, backgroundColor: '#e0e7ff', padding: '1px 6px', borderRadius: '3px' }}>
                {isEn ? 'Charter & Exam Q11-Q20' : 'الميثاق الأخلاقي • أسئلة 11-20'}
              </span>
            </div>

            {/* Card 1: The 4 Ethical Principles (Exam Q14 - Q18) */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #c7d2fe', borderRadius: '4px', padding: '5px 7px', fontSize: '8.3px', lineHeight: 1.42 }}>
              <div style={{ fontWeight: 900, color: '#312e81', marginBottom: '3px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '9.0px', borderBottom: '1px solid #e0e7ff', paddingBottom: '2px' }}>
                <span>{isEn ? 'The 4 Core Ethical Principles:' : 'المبادئ الأساسية الأربعة لأخلاقيات AI:'}</span>
                <span style={{ fontSize: '7.2px', backgroundColor: '#e0e7ff', color: '#3730a3', padding: '1px 5px', borderRadius: '3px', fontWeight: 800 }}>{isEn ? 'Exam Q14 - Q18' : 'أسئلة 14 إلى 18'}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5px' }}>
                {/* Fairness */}
                <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '3px', padding: '2.5px 5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ color: '#1e40af' }}>⚖️ {isEn ? 'Fairness:' : 'العدالة (Fairness):'}</strong>
                    <span style={{ fontSize: '7.0px', color: '#1d4ed8', fontWeight: 800 }}>{isEn ? 'Q: Treats fairly?' : 'سؤال 15 و 18'}</span>
                  </div>
                  <div>{isEn ? 'No unfair discrimination against any group; equal opportunities for all.' : 'عدم التمييز ظلماً ضد أي شخص أو فئة، وضمان تكافؤ الفرص في التوظيف والخدمات.'}</div>
                </div>

                {/* Transparency */}
                <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '3px', padding: '2.5px 5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ color: '#166534' }}>🔍 {isEn ? 'Transparency:' : 'الشفافية (Transparency):'}</strong>
                    <span style={{ fontSize: '7.0px', color: '#15803d', fontWeight: 800 }}>{isEn ? 'Q: Logic clear?' : 'سؤال 14 و 19'}</span>
                  </div>
                  <div>{isEn ? 'Clear info on how system works and its limits; disclosing AI presence.' : 'إتاحة معلومات واضحة ومناسبة عن عمل النظام واستخدامه وآلية القرار وحدوده.'}</div>
                </div>

                {/* Privacy */}
                <div style={{ backgroundColor: '#faf5ff', border: '1px solid #e9d5ff', borderRadius: '3px', padding: '2.5px 5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ color: '#6b21a8' }}>🔒 {isEn ? 'Privacy Protection:' : 'حماية الخصوصية (Privacy):'}</strong>
                    <span style={{ fontSize: '7.0px', color: '#7c3aed', fontWeight: 800 }}>{isEn ? 'Q: Data protected?' : 'سؤال 16'}</span>
                  </div>
                  <div>{isEn ? 'Proper handling of personal data and shielding it from unauthorized tracking.' : 'التعامل المناسب مع البيانات الشخصية وحمايتها من الجمع والتتبع والمراقبة غير المصرح بها.'}</div>
                </div>

                {/* Accountability */}
                <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '3px', padding: '2.5px 5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ color: '#991b1b' }}>👤 {isEn ? 'Accountability:' : 'المساءلة (Accountability):'}</strong>
                    <span style={{ fontSize: '7.0px', color: '#b91c1c', fontWeight: 800 }}>{isEn ? 'Q: Who is penalized?' : 'سؤال 12 و 17'}</span>
                  </div>
                  <div>{isEn ? 'Identifying who is legally liable and penalized for system errors and harms.' : 'تحديد الجهات المسؤولة عن النظام وقراراته وإمكان محاسبتها قانونياً وجزائياً ومالياً.'}</div>
                </div>
              </div>
            </div>

            {/* Card 2: Crucial Distinction: Responsibility vs Accountability vs XAI (Exam Q11, 12, 13) */}
            <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '4px', padding: '4.5px 7px', fontSize: '8.3px', color: '#92400e', lineHeight: 1.42 }}>
              <div style={{ fontWeight: 900, color: '#b45309', marginBottom: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '8.8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="gavel" size={12} style={{ color: '#d97706' }} />
                  <span>{isEn ? 'Responsibility vs. Accountability vs. XAI:' : 'المقارنة الحاسمة: المسؤولية مقابل المساءلة وXAI:'}</span>
                </div>
                <span style={{ fontSize: '7.0px', backgroundColor: '#fef3c7', color: '#b45309', padding: '1px 5px', borderRadius: '3px', fontWeight: 800 }}>{isEn ? 'Exam Q11, 12, 13' : 'أسئلة 11 و 12 و 13'}</span>
              </div>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #fef3c7', borderRadius: '3px', padding: '3px 6px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div>
                  • <strong style={{ color: '#0369a1' }}>{isEn ? 'Responsibility (Q11): ' : 'المسؤولية (سؤال 11): '}</strong>
                  <span>{isEn ? 'Defines roles & duties: Developer, Operator, User (duty allocation).' : 'تحديد أدوار وواجبات الأطراف المرتبطة بالنظام (توزيع الواجبات والأدوار).'}</span>
                </div>
                <div>
                  • <strong style={{ color: '#dc2626' }}>{isEn ? 'Accountability (Q12 & 13): ' : 'المساءلة (سؤال 12 و 13): '}</strong>
                  <span>{isEn ? 'Determines WHO is legally blamed & pays for damages. (Q: Who is held responsible?).' : 'تحديد من يُحاسَب قانونياً ومالياً ويتحمل تبعات الخطأ (سؤال: من يُحاسَب على النتيجة؟).'}</span>
                </div>
                <div>
                  • <strong style={{ color: '#7c3aed' }}>{isEn ? 'Explainable AI (XAI): ' : 'الذكاء المفسر (XAI): '}</strong>
                  <span>{isEn ? 'Explains WHY the AI reached this decision. (Accountability is NOT explaining decisions!).' : 'تفسير أسباب القرار (المساءلة ليست القدرة على شرح القرار بل تحديد من يُحاسَب!).'}</span>
                </div>
              </div>
            </div>

            {/* Card 3: Responsibility Distribution across 3 Roles (Exam Q11) */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '4.5px 7px', fontSize: '8.2px', lineHeight: 1.42 }}>
              <div style={{ fontWeight: 900, color: '#4338ca', marginBottom: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '8.8px' }}>
                <span>{isEn ? '3 Stakeholder Roles in Responsibility:' : 'توزيع المسؤولية بين الأطراف الثلاثة:'}</span>
                <span style={{ fontSize: '7.0px', backgroundColor: '#e0e7ff', color: '#4338ca', padding: '1px 5px', borderRadius: '3px', fontWeight: 800 }}>{isEn ? 'Exam Q11' : 'سؤال 11'}</span>
              </div>
              <div style={{ color: '#1e293b', display: 'flex', flexDirection: 'column', gap: '1.5px' }}>
                <div>• <strong style={{ color: '#1e40af' }}>{isEn ? 'Developer: ' : 'المطور: '}</strong> {isEn ? 'Proper system design, programming, data checking, and safety mechanisms.' : 'تصميم وبرمجة النظام بطريقة مناسبة، فحص بيانات التدريب، وصمامات الأمان.'}</div>
                <div>• <strong style={{ color: '#15803d' }}>{isEn ? 'Operator/Company: ' : 'الجهة المشغلة: '}</strong> {isEn ? 'Correct deployment, staff training, and continuous human oversight.' : 'تشغيل النظام واستخدامه بالشكل الصحيح، تدريب الموظفين، والإشراف البشري المستمر.'}</div>
                <div>• <strong style={{ color: '#b45309' }}>{isEn ? 'User: ' : 'المستخدم: '}</strong> {isEn ? 'Following guidelines, verifying outputs, and refraining from blind delegation.' : 'استخدام النظام وفق القواعد والتعليمات، التحقق، وعدم التفويض الأعمى للقرارات.'}</div>
              </div>
              <div style={{ backgroundColor: '#f1f5f9', borderRadius: '3px', padding: '2px 5px', marginTop: '2px', fontSize: '7.6px', color: '#475569' }}>
                ⚡ <strong>{isEn ? 'Golden Rule: ' : 'قاعدة وزارية: '}</strong>
                {isEn ? 'No single responsibility split fits all cases; it varies by system type, usage, and laws.' : 'لا يوجد توزيع واحد للمسؤولية يصلح لكل الحالات؛ فالمسؤولية تختلف حسب نوع النظام واستخدامه والقواعد المعمول بها.'}
              </div>
            </div>

            {/* Card 4: Responsible AI Definition (Exam Q20) & Essay Lab */}
            <div style={{ backgroundColor: '#0f172a', color: '#ffffff', borderRadius: '4px', padding: '4.5px 7px', display: 'flex', flexDirection: 'column', gap: '2.5px' }}>
              <div style={{ fontSize: '8.8px', fontWeight: 900, color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '2px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon name="assignment" size={13} style={{ color: '#38bdf8' }} />
                  <span>{isEn ? 'Responsible AI & Essay Lab:' : 'الاستخدام المسؤول لـ AI ومعمل المقالي:'}</span>
                </div>
                <span style={{ fontSize: '7.0px', backgroundColor: '#1e293b', color: '#7dd3fc', padding: '1px 5px', borderRadius: '3px', fontWeight: 800 }}>{isEn ? 'Exam Q20' : 'سؤال 20'}</span>
              </div>

              {/* Responsible AI Definition (Exam Q20) */}
              <div style={{ backgroundColor: '#1e293b', padding: '3px 5px', borderRadius: '3px', fontSize: '8.0px', lineHeight: 1.38, color: '#f8fafc' }}>
                <strong style={{ color: '#38bdf8' }}>🌟 {isEn ? 'Responsible AI means (Q20): ' : 'الاستخدام المسؤول يعني (سؤال 20): '}</strong>
                {isEn ? (
                  <span>Checking for bias + Explaining decisions (XAI) + Knowing who is accountable.</span>
                ) : (
                  <span><strong style={{ color: '#38bdf8' }}>التحقق من التحيز</strong> + <strong style={{ color: '#38bdf8' }}>القدرة على شرح القرارات (XAI)</strong> + <strong style={{ color: '#38bdf8' }}>معرفة من هو المسؤول</strong>.</span>
                )}
              </div>

              {/* 4 Mini Essay Scenarios */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', fontSize: '7.5px', lineHeight: 1.35 }}>
                <div style={{ backgroundColor: '#1e293b', padding: '2px 4px', borderRadius: '2px', color: '#cbd5e1' }}>
                  <strong style={{ color: '#7dd3fc' }}>🚗 {isEn ? 'Car: ' : 'السيارة: '}</strong> {isEn ? 'Edge braking + Privacy in logs + Firm liable.' : 'فرملة فورية (Edge) + تتبع الركاب خصوصية + المسؤولية على الشركة.'}
                </div>
                <div style={{ backgroundColor: '#1e293b', padding: '2px 4px', borderRadius: '2px', color: '#cbd5e1' }}>
                  <strong style={{ color: '#7dd3fc' }}>🏥 {isEn ? 'Hospital: ' : 'المستشفى: '}</strong> {isEn ? 'DL scans + Rare disease scarcity + Doctor review.' : 'كشف أورام (DL) + ندرة بيانات الحالات النادرة + مراجعة الطبيب إلزامية.'}
                </div>
                <div style={{ backgroundColor: '#1e293b', padding: '2px 4px', borderRadius: '2px', color: '#cbd5e1' }}>
                  <strong style={{ color: '#7dd3fc' }}>💼 {isEn ? 'Hiring: ' : 'التوظيف: '}</strong> {isEn ? 'Past bias + Proxy variables + XAI explains.' : 'تحيز بيانات سابقة + متغير بديل (رمز بريدي) + XAI لتفسير الرفض.'}
                </div>
                <div style={{ backgroundColor: '#1e293b', padding: '2px 4px', borderRadius: '2px', color: '#cbd5e1' }}>
                  <strong style={{ color: '#7dd3fc' }}>🏫 {isEn ? 'School: ' : 'المدرسة: '}</strong> {isEn ? 'Attendance vs minor biometrics + Backup.' : 'سرعة الحضور مقابل خصوصية بيانات قاصرين + الإدارة مسؤولة عن البديل.'}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Footer Strip */}
      <SummaryFooter edition={data.edition} unitTitle={data.unitTitle} isEn={isEn} />
    </div>
  );
}
