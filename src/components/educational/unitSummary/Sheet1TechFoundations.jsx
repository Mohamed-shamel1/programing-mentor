import React from 'react';
import SummaryHeader from './components/SummaryHeader.jsx';
import SummaryFooter from './components/SummaryFooter.jsx';
import GoldenRulesBar from './components/GoldenRulesBar.jsx';
import MooreLawChart from './components/MooreLawChart.jsx';
import Icon from '../../ui/Icon.jsx';

/**
 * Sheet1TechFoundations
 * Front Sheet: Lessons 1-1 & 1-2 across 4 columns
 * Optimized for Egyptian Thanawya Amma A4 Landscape Spread
 */
export default function Sheet1TechFoundations({ sheet1, data, isEn, isRTL, zoomLevel }) {
  return (
    <div
      className="landscape-sheet"
      style={{
        width: '1240px',
        height: '830px',
        maxHeight: '830px',
        backgroundColor: '#ffffff',
        color: '#0f172a',
        padding: '10px 14px',
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
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, justifyContent: 'space-between' }}>
        <div>
          <SummaryHeader
            pageTag={sheet1.pageTag}
            title={sheet1.title}
            subtitle={sheet1.subtitle}
            pageNumber={sheet1.pageNumber}
            totalPages={sheet1.totalPages}
          />
          <GoldenRulesBar rules={sheet1.goldenExamRules} />
        </div>

        {/* 4-COLUMN LANDSCAPE FLYER GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', flex: 1, minHeight: 0, marginTop: '2px', marginBottom: '5px' }}>

          {/* --------------------------------------------------------- */}
          {/* COLUMN 1: الحقب الخمس وتاريخ الحوسبة (جدول الوزارة ص 4)   */}
          {/* --------------------------------------------------------- */}
          <div style={{ border: '1.5px solid #94a3b8', borderRadius: '5px', padding: '4px 6px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
            
            {/* Top Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #2563eb', paddingBottom: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ backgroundColor: '#2563eb', color: '#fff', fontSize: '9px', fontWeight: 900, padding: '1px 5px', borderRadius: '3px', fontFamily: "'Outfit', sans-serif" }}>1-1</span>
                <strong style={{ fontSize: '11px', color: '#1e3a8a' }}>{isEn ? '5 Eras of Information Technology' : 'الحقب الخمس لتطور تكنولوجيا المعلومات'}</strong>
              </div>
              <span style={{ fontSize: '8px', color: '#1e40af', fontWeight: 800, backgroundColor: '#dbeafe', padding: '1px 5px', borderRadius: '3px' }}>{isEn ? 'Ministry Table p. 4' : 'جدول الوزارة ص 4'}</span>
            </div>

            {/* Official IT Definition (Sticky Note from Textbook p. 4) */}
            <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '3px', padding: '2.5px 5px', fontSize: '7.8px', lineHeight: 1.25 }}>
              <strong style={{ color: '#1e40af' }}>{isEn ? 'Official IT Definition: ' : 'مفهوم IT الوزاري: '}</strong>
              <span>
                {isEn
                  ? 'Using hardware, software, networks, and systems to (Collect, Store, Process, Transmit, and Use) information.'
                  : 'استخدام الأجهزة والبرمجيات والشبكات لـ '}
                {!isEn && <strong style={{ color: '#1d4ed8', backgroundColor: '#dbeafe', padding: '0 2px' }}>(جمع، وتخزين، ومعالجة، ونقل، واستخدام)</strong>}
                {!isEn && ' المعلومات.'}
              </span>
            </div>

            {/* 3-COLUMN STRUCTURED TABLE: الفترة الزمنية | التقنيات والأحداث | التأثير على المجتمع */}
            <div style={{ border: '1px solid #cbd5e1', borderRadius: '3px', overflow: 'hidden', backgroundColor: '#ffffff' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed', fontSize: '7.6px', lineHeight: 1.22 }}>
                <thead>
                  <tr style={{ backgroundColor: '#991b1b', color: '#ffffff', textAlign: isRTL ? 'right' : 'left' }}>
                    <th style={{ width: '25%', padding: '3px 4px', fontWeight: 900, borderBottom: '1px solid #7f1d1d', textAlign: 'center', fontSize: '7.8px' }}>
                      {isEn ? 'Period' : 'الفترة الزمنية'}
                    </th>
                    <th style={{ width: '38%', padding: '3px 4px', fontWeight: 900, borderBottom: '1px solid #7f1d1d', borderInlineStart: '1px solid #b91c1c', fontSize: '7.8px' }}>
                      {isEn ? 'Key Tech & Milestones' : 'التقنيات والأحداث الرئيسية'}
                    </th>
                    <th style={{ width: '37%', padding: '3px 4px', fontWeight: 900, borderBottom: '1px solid #7f1d1d', borderInlineStart: '1px solid #b91c1c', fontSize: '7.8px' }}>
                      {isEn ? 'Societal Impact' : 'التأثير على المجتمع'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sheet1.lesson11.eras.map((era, i) => (
                    <tr key={i} style={{ borderBottom: i < sheet1.lesson11.eras.length - 1 ? '1px solid #e2e8f0' : 'none' }}>
                      {/* Column 1: Period Badge */}
                      <td style={{
                        width: '25%',
                        padding: '3px 3.5px',
                        backgroundColor: '#fff1f2',
                        color: '#9f1239',
                        fontWeight: 900,
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        fontSize: '7.8px',
                        borderInlineEnd: '1px solid #fecdd3'
                      }}>
                        {era.period}
                      </td>

                      {/* Column 2: Key Tech & Events */}
                      <td style={{
                        width: '38%',
                        padding: '3px 4px',
                        backgroundColor: '#ffffff',
                        color: '#1e293b',
                        verticalAlign: 'top',
                        borderInlineEnd: '1px solid #e2e8f0'
                      }}>
                        <strong style={{ color: '#0f172a', display: 'block', marginBottom: '1px', fontSize: '7.9px' }}>
                          {era.title || era.event?.split('؛')[0]}
                        </strong>
                        <span style={{ color: '#334155' }}>
                          {era.tech || era.event}
                        </span>
                      </td>

                      {/* Column 3: Societal Impact */}
                      <td style={{
                        width: '37%',
                        padding: '3px 4px',
                        backgroundColor: '#f8fafc',
                        color: '#1e293b',
                        verticalAlign: 'top'
                      }}>
                        <span style={{ color: '#1e293b' }}>
                          {era.impact}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Hardware Milestone: 1946 Transistor */}
            <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '3px', padding: '3px 5px', fontSize: '7.9px', lineHeight: 1.25 }}>
              <strong style={{ color: '#1e40af', display: 'block', marginBottom: '1px', fontSize: '8.4px' }}>
                {isEn ? 'Hardware Milestone (1946):' : 'التحول الحاسم (ابتكار الترانزستور 1946):'}
              </strong>
              <span style={{ color: '#1e293b' }}>
                {isEn
                  ? 'Transistor invention at Bell Labs + Integrated Circuits (ICs) shrank mainframes and moved computing into homes (PCs).'
                  : 'ابتكار الترانزستور بمختبرات بِل والدوائر المتكاملة (ICs) والمعالجات صغّرت الأجهزة ونقلت الحوسبة لبيوت الأفراد (PCs).'}
              </span>
            </div>

            {/* Exam Traps Box */}
            <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '3px', padding: '3px 5px', fontSize: '7.8px', color: '#7f1d1d', lineHeight: 1.24 }}>
              <strong style={{ color: '#991b1b', display: 'block', marginBottom: '1px', fontSize: '8.4px' }}>
                {isEn ? 'Lesson 1-1 Exam Traps:' : 'فخاخ امتحانية حاسمة (1-1):'}
              </strong>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px' }}>
                <div>• {isEn ? 'Engineers began computing in 40s (ENIAC); general public in 70s-80s with PCs.' : 'مهندسو الحاسب والجيش بدأوا في الأربعينيات، بينما عامة الناس في السبعينيات مع الـ PC.'}</div>
                <div>• {isEn ? 'Commercial Web & Amazon in 90s (1994); Smartphones exploded in 2000s.' : 'الإنترنت التجاري والويب ظهر في التسعينيات (أمازون 1994)، والهواتف الذكية في العقد الأول (2000s).'}</div>
              </div>
            </div>

          </div>

          {/* --------------------------------------------------------- */}
          {/* COLUMN 2: قانون مور والحلول المعمارية والتحول الميداني       */}
          {/* --------------------------------------------------------- */}
          <div style={{ border: '1.5px solid #94a3b8', borderRadius: '5px', padding: '4px 6px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
            
            {/* Top Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #059669', paddingBottom: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ backgroundColor: '#059669', color: '#fff', fontSize: '9px', fontWeight: 900, padding: '1px 5px', borderRadius: '3px', fontFamily: "'Outfit', sans-serif" }}>1-1</span>
                <strong style={{ fontSize: '11px', color: '#065f46' }}>{isEn ? "Moore's Law & Architecture" : 'قانون مور والبدائل المعمارية'}</strong>
              </div>
              <span style={{ fontSize: '8px', color: '#047857', fontWeight: 800, backgroundColor: '#d1fae5', padding: '1px 5px', borderRadius: '3px' }}>{isEn ? 'Book pp. 6-8' : 'كتاب الوزارة ص 6-8'}</span>
            </div>

            {/* Moore Definition with Bullets & Bold Keywords */}
            <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '3px', padding: '3px 5px', fontSize: '7.8px', lineHeight: 1.25 }}>
              <strong style={{ color: '#065f46', display: 'block', marginBottom: '1.5px', fontSize: '8.4px' }}>
                {isEn ? "Moore's Empirical Observation (1965):" : 'ملاحظة غوردون مور التجريبية (1965):'}
              </strong>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', color: '#064e3b' }}>
                <div>
                  • <strong style={{ color: '#047857' }}>{isEn ? 'Observation, NOT Law: ' : 'ملاحظة اقتصادية تجريبية: '}</strong>
                  {isEn ? (
                    <span>An empirical observation by Gordon Moore, NOT an immutable physical law!</span>
                  ) : (
                    <span>تنبؤ اقتصادي وتجريبي من غوردون مور، و<strong style={{ color: '#065f46' }}>ليست قانوناً فيزيائياً مطلقاً</strong>.</span>
                  )}
                </div>
                <div>
                  • <strong style={{ color: '#047857' }}>{isEn ? 'Doubling Rate: ' : 'معدل التضاعف: '}</strong>
                  {isEn ? (
                    <span>Transistors on an IC roughly double every ~2 years (18-24 months) with falling costs.</span>
                  ) : (
                    <span>تضاعف عدد الترانزستورات على شريحة السيليكون كل <strong style={{ color: '#065f46' }}>عامين تقريباً (18-24 شهراً)</strong> مع <strong style={{ color: '#065f46' }}>انخفاض التكلفة</strong>.</span>
                  )}
                </div>
              </div>
            </div>

            {/* MOORE'S LAW VISUAL CURVE DIAGRAM (رسمة منحنى مور باستخدام Recharts) */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #a7f3d0', borderRadius: '3px', padding: '2.5px 4.5px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#065f46', fontWeight: 900, fontSize: '8.2px' }}>
                  <Icon name="trending_up" size={12} style={{ color: '#059669' }} />
                  <span>{isEn ? "Moore's Exponential Curve:" : 'رسمة منحنى قانون مور (التضاعف الأسي):'}</span>
                </div>
                <span style={{ fontSize: '7.2px', color: '#047857', fontWeight: 800, backgroundColor: '#d1fae5', padding: '1px 4px', borderRadius: '2px' }}>
                  {isEn ? '×2 Every 2 Years' : '×2 ترانزستور كل عامين'}
                </span>
              </div>

              {/* Recharts Curve Component */}
              <MooreLawChart isEn={isEn} isRTL={isRTL} />
            </div>

            {/* Physics Limits Box with Bullets */}
            <div style={{ backgroundColor: '#fff7ed', border: '1px solid #ffedd5', borderRadius: '3px', padding: '2.5px 5px', fontSize: '7.6px', color: '#9a3412', lineHeight: 1.23 }}>
              <strong style={{ fontSize: '8.2px', color: '#c2410c', display: 'block', marginBottom: '1px' }}>
                {isEn ? 'Silicon Physical Limits (Why Moore Slows Down):' : 'العوائق الفيزيائية للسيليكون (أسباب تباطؤ مور):'}
              </strong>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <div>• <strong>{isEn ? 'Leakage Currents: ' : 'تيارات التسرب (Leakage): '}</strong>{isEn ? 'Energy drain & massive heat generation even when transistor is OFF.' : 'استنزاف طاقة وتوليد حرارة هائلة حتى عند وضع الإيقاف (OFF).'}</div>
                <div>• <strong>{isEn ? 'Quantum Tunneling: ' : 'النفق الكمومي (Quantum Tunneling): '}</strong>{isEn ? 'Electrons jump atomic barriers (< 3nm), breaking gate control.' : 'قفز الإلكترونات فوق الحواجز الذرية الدقيقة (أقل من 3nm) وفقدان التحكم.'}</div>
                <div>• <strong>{isEn ? 'Thermal Wall: ' : 'الجدار الحراري: '}</strong>{isEn ? 'Inability to cool a single core at extreme clock speeds.' : 'استحالة زيادة تردد النواة الواحدة دون احتراق وتلف الشريحة.'}</div>
              </div>
            </div>

            {/* Architectural Solutions: Specialized Chips & Multi-Core */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '3px', padding: '3px 5px' }}>
              <div style={{ fontSize: '8.3px', fontWeight: 900, color: '#334155', marginBottom: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>{isEn ? 'Engineering Solution: Specialized Accelerators' : 'الحل الهندسي: المعالجات المتخصصة'}</span>
                <span style={{ fontSize: '7.5px', color: '#059669', fontWeight: 800 }}>Specialized Chips</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5px', textAlign: 'center', fontSize: '7.6px', marginBottom: '2.5px' }}>
                <div style={{ backgroundColor: '#f3e8ff', border: '1px solid #d8b4fe', borderRadius: '2px', padding: '2px' }}>
                  <strong style={{ color: '#7e22ce', display: 'block', fontSize: '8.2px', fontFamily: "'Outfit', sans-serif" }}>GPU</strong>
                  <span style={{ color: '#581c87' }}>{isEn ? 'Graphics & Math' : 'الرسومات ومصفوفات AI'}</span>
                </div>
                <div style={{ backgroundColor: '#dbeafe', border: '1px solid #bfdbfe', borderRadius: '2px', padding: '2px' }}>
                  <strong style={{ color: '#1d4ed8', display: 'block', fontSize: '8.2px', fontFamily: "'Outfit', sans-serif" }}>NPU</strong>
                  <span style={{ color: '#1e3a8a' }}>{isEn ? 'Neural Networks' : 'تسريع الشبكات العصبية'}</span>
                </div>
                <div style={{ backgroundColor: '#fef3c7', border: '1px solid #fde68a', borderRadius: '2px', padding: '2px' }}>
                  <strong style={{ color: '#b45309', display: 'block', fontSize: '8.2px', fontFamily: "'Outfit', sans-serif" }}>DSP</strong>
                  <span style={{ color: '#78350f' }}>{isEn ? 'Signals & Audio' : 'معالجة الإشارات اللحظية'}</span>
                </div>
              </div>

              {/* Multi-Core Micro Diagram */}
              <div style={{ borderTop: '1px dashed #cbd5e1', paddingTop: '2px' }}>
                <div style={{ fontSize: '7.8px', fontWeight: 800, color: '#0369a1', marginBottom: '1.5px', textAlign: 'center' }}>
                  {isEn ? 'Multi-Core Parallelism (Shared RAM):' : 'تعدد الأنوية والمعالجة المتوازية:'}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', marginBottom: '1.5px' }}>
                  <div style={{ backgroundColor: '#e0f2fe', border: '1px solid #bae6fd', borderRadius: '2px', padding: '1px', textAlign: 'center', fontSize: '7.4px', color: '#0369a1' }}>
                    <strong>{isEn ? 'Core 1' : 'النواة 1'}</strong>
                  </div>
                  <div style={{ backgroundColor: '#e0f2fe', border: '1px solid #bae6fd', borderRadius: '2px', padding: '1px', textAlign: 'center', fontSize: '7.4px', color: '#0369a1' }}>
                    <strong>{isEn ? 'Core 2' : 'النواة 2'}</strong>
                  </div>
                </div>
                <div style={{ backgroundColor: '#0284c7', color: '#fff', borderRadius: '2px', padding: '1.5px', textAlign: 'center', fontSize: '7.6px', fontWeight: 800, marginBottom: '1.5px' }}>
                  {isEn ? 'Shared Memory (RAM)' : 'الذاكرة المشتركة (Shared RAM)'}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                  <div style={{ backgroundColor: '#e0f2fe', border: '1px solid #bae6fd', borderRadius: '2px', padding: '1px', textAlign: 'center', fontSize: '7.4px', color: '#0369a1' }}>
                    <strong>{isEn ? 'Core 3' : 'النواة 3'}</strong>
                  </div>
                  <div style={{ backgroundColor: '#e0f2fe', border: '1px solid #bae6fd', borderRadius: '2px', padding: '1px', textAlign: 'center', fontSize: '7.4px', color: '#0369a1' }}>
                    <strong>{isEn ? 'Core 4' : 'النواة 4'}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* 1995 vs 2026 Comparison Table (5 Domains from Book p. 5) */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '3px', padding: '3px 4px' }}>
              <div style={{ fontSize: '8.3px', fontWeight: 900, color: '#0f766e', marginBottom: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>{isEn ? 'Field Shift: 1995 vs 2026 (Book p. 5)' : 'المقارنة الميدانية: 1995 مقابل 2026 (كتاب الوزارة ص 5):'}</span>
                <span style={{ fontSize: '7.2px', color: '#64748b', fontWeight: 800 }}>Before ⟶ Now</span>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '7.5px', lineHeight: 1.22 }}>
                <thead>
                  <tr style={{ backgroundColor: '#f1f5f9', color: '#334155', borderBottom: '1px solid #cbd5e1' }}>
                    <th style={{ width: '25%', padding: '2px 3px', textAlign: isRTL ? 'right' : 'left', fontWeight: 800 }}>{isEn ? 'Domain' : 'المجال'}</th>
                    <th style={{ width: '37%', padding: '2px 3px', textAlign: isRTL ? 'right' : 'left', color: '#64748b' }}>1995</th>
                    <th style={{ width: '38%', padding: '2px 3px', textAlign: isRTL ? 'right' : 'left', color: '#059669', fontWeight: 900 }}>2026</th>
                  </tr>
                </thead>
                <tbody>
                  {sheet1.lesson11.timelineHookComparison && sheet1.lesson11.timelineHookComparison.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < sheet1.lesson11.timelineHookComparison.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                      <td style={{ padding: '2px 3px', fontWeight: 800, color: '#1e293b' }}>• {row.field}</td>
                      <td style={{ padding: '2px 3px', color: '#64748b' }}>{row.year1995}</td>
                      <td style={{ padding: '2px 3px', color: '#047857', fontWeight: 800 }}>{row.year2026}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Watch Out Exam Tip with Bullets & Bold Keywords */}
            <div style={{ backgroundColor: '#fef3c7', border: '1px solid #fde68a', borderRadius: '3px', padding: '3px 5px', fontSize: '7.8px', color: '#92400e', lineHeight: 1.24 }}>
              <strong style={{ fontSize: '8.3px', color: '#b45309', display: 'block', marginBottom: '1px' }}>
                {isEn ? 'Watch Out in Exam (Lesson 1-1 Traps):' : 'فخاخ امتحانية حاسمة (الدرس 1-1):'}
              </strong>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <div>
                  • <strong style={{ color: '#b45309' }}>{isEn ? 'Quantum Trap: ' : 'فخ الحوسبة الكمومية: '}</strong>
                  {isEn ? (
                    <span>Quantum computing is NOT the silicon PC replacement; the engineering solution is Multi-Core & Parallelism!</span>
                  ) : (
                    <span>الحوسبة الكمومية <strong style={{ color: '#9a3412', textDecoration: 'underline' }}>ليست بديلاً لحواسيب السيليكون الشخصية</strong>؛ والحل المعتمد منهجياً هو <strong style={{ color: '#047857' }}>تعدد الأنوية والمعالجات المتخصصة</strong>!</span>
                  )}
                </div>
                <div>
                  • <strong style={{ color: '#b45309' }}>{isEn ? 'Speed Trap: ' : 'فخ سرعة المعالج: '}</strong>
                  {isEn ? (
                    <span>Processor clock speed or Moore’s Law are NEVER causes of algorithmic bias (they only affect latency).</span>
                  ) : (
                    <span>سرعة المعالج أو قانون مور <strong style={{ color: '#9a3412', textDecoration: 'underline' }}>ليست سبباً على الإطلاق لنشوء التحيز الخوارزمي</strong> (تؤثر على زمن إخراج النتائج فقط).</span>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* --------------------------------------------------------- */}
          {/* COLUMN 3: التحولات الاجتماعية والتقنيات الناشئة              */}
          {/* --------------------------------------------------------- */}
          <div style={{ border: '1.5px solid #94a3b8', borderRadius: '6px', padding: '6px 7px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #d97706', paddingBottom: '3px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ backgroundColor: '#d97706', color: '#fff', fontSize: '9.5px', fontWeight: 900, padding: '1.5px 6px', borderRadius: '3px', fontFamily: "'Outfit', sans-serif" }}>1-1</span>
                <strong style={{ fontSize: '11.2px', color: '#92400e' }}>{isEn ? 'Social Shifts & Emerging Tech' : 'التحولات الاجتماعية والتقنيات الناشئة'}</strong>
              </div>
            </div>

            {/* 5 Social Shifts Chips */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', fontSize: '8.5px' }}>
              <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '2px', padding: '3px 5px', color: '#1e40af' }}>
                <strong>SNS: </strong>{isEn ? 'Instant flow' : 'تواصل وتدفق فوري'}
              </div>
              <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '2px', padding: '3px 5px', color: '#166534' }}>
                <strong>E-commerce: </strong>{isEn ? 'Global 24/7' : 'تجارة أونلاين 24/7'}
              </div>
              <div style={{ backgroundColor: '#faf5ff', border: '1px solid #e9d5ff', borderRadius: '2px', padding: '3px 5px', color: '#6b21a8' }}>
                <strong>Remote Work: </strong>{isEn ? 'Less traffic' : 'عمل عن بعد ومرونة'}
              </div>
              <div style={{ backgroundColor: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '2px', padding: '3px 5px', color: '#9a3412' }}>
                <strong>Online Learning: </strong>{isEn ? 'Fair access' : 'تعلم رقمي عادل'}
              </div>
            </div>

            {/* Stakeholder Analysis Matrix */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '4.5px 6px' }}>
              <div style={{ fontSize: '9.0px', fontWeight: 800, color: '#b45309', marginBottom: '2.5px' }}>
                {isEn ? 'Cashless Stakeholder Analysis (Book p. 11)' : 'مصفوفة أصحاب المصلحة في التحول الرقمي (ص 11)'}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', fontSize: '8.4px', lineHeight: 1.28 }}>
                {sheet1.lesson11.stakeholderMatrix && sheet1.lesson11.stakeholderMatrix.map((st, i) => (
                  <div key={i} style={{ backgroundColor: i === 3 ? '#ecfdf5' : '#f8fafc', border: `1px solid ${i === 3 ? '#a7f3d0' : '#e2e8f0'}`, borderRadius: '2px', padding: '3px 4px' }}>
                    <strong style={{ color: i === 3 ? '#047857' : '#1e293b', display: 'block', fontSize: '8.8px' }}>{st.role}</strong>
                    <span style={{ color: i === 3 ? '#065f46' : '#475569' }}>{st.interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Autonomous Driving Stack */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '4.5px 6px' }}>
              <div style={{ fontSize: '9.0px', fontWeight: 800, color: '#1d4ed8', marginBottom: '2.5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>{isEn ? 'Autonomous Driving Stack' : 'منظومة عتاد القيادة الذاتية'}</span>
                <span style={{ fontSize: '8.0px', color: '#059669', fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>0-Latency Edge</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3px', textAlign: 'center', fontSize: '8.1px' }}>
                <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '2px', padding: '2.5px' }}>
                  <strong style={{ color: '#1e40af', display: 'block', fontSize: '8.6px' }}>Vision</strong>
                  <span style={{ color: '#1e3a8a' }}>{isEn ? 'Cameras' : 'كاميرات'}</span>
                </div>
                <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '2px', padding: '2.5px' }}>
                  <strong style={{ color: '#1e40af', display: 'block', fontSize: '8.6px' }}>Radar</strong>
                  <span style={{ color: '#1e3a8a' }}>{isEn ? 'Speed' : 'سرعات'}</span>
                </div>
                <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '2px', padding: '2.5px' }}>
                  <strong style={{ color: '#1e40af', display: 'block', fontSize: '8.6px' }}>LiDAR</strong>
                  <span style={{ color: '#1e3a8a' }}>{isEn ? '3D Laser' : 'ليزر 3D'}</span>
                </div>
                <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '2px', padding: '2.5px' }}>
                  <strong style={{ color: '#166534', display: 'block', fontSize: '8.6px' }}>Edge</strong>
                  <span style={{ color: '#14532d' }}>{isEn ? 'Brake' : 'فرملة'}</span>
                </div>
              </div>
              <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '2px', padding: '3px 5px', marginTop: '2.5px', fontSize: '8.4px', color: '#991b1b' }}>
                <strong>{isEn ? 'Exam Alert: ' : 'تنبيه الامتحان: '}</strong>
                <span>{isEn ? 'Emergency braking MUST be local Edge! Cloud causes fatal lag (Latency).' : 'الفرملة الطارئة حصراً حوسبة طرفية (Edge)؛ السحابة خطر بسبب الـ Latency!'}</span>
              </div>
            </div>

            {/* MASTER QUANTUM COMPUTING & QUBIT MATH LAB (معمل الحوسبة الكمومية والمسائل) */}
            <div style={{ backgroundColor: '#ffffff', border: '1.5px solid #c084fc', borderRadius: '4px', padding: '3px 5px', fontSize: '7.6px', lineHeight: 1.22 }}>
              
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e9d5ff', paddingBottom: '1.5px', marginBottom: '2px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#6b21a8', fontWeight: 900, fontSize: '8.4px' }}>
                  <Icon name="memory" size={13} style={{ color: '#7c3aed' }} />
                  <span>{isEn ? 'Quantum Computing & Qubit Math Lab:' : 'معمل الحوسبة الكمومية والكيوبيت والمسائل:'}</span>
                </div>
                <span style={{ fontSize: '7.2px', color: '#7c3aed', fontWeight: 800, backgroundColor: '#f3e8ff', padding: '1px 5px', borderRadius: '2px' }}>
                  {isEn ? 'Book p. 6 & Math Law 2^n' : 'كتاب الوزارة ص 6 وقانون 2^n'}
                </span>
              </div>

              {/* Bit vs Qubit Visual */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5px', textAlign: 'center', marginBottom: '2.5px' }}>
                <div style={{ backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '2px', padding: '2px' }}>
                  <div style={{ fontWeight: 900, fontSize: '10.5px', color: '#334155', fontFamily: "'Outfit', sans-serif" }}>0 OR 1</div>
                  <strong style={{ color: '#0369a1', display: 'block', fontSize: '7.8px' }}>{isEn ? 'Classical Bit' : 'البت الكلاسيكي (Bit)'}</strong>
                  <span style={{ color: '#64748b', fontSize: '7.2px' }}>{isEn ? 'Strictly 1 state at a time' : 'حالة واحدة فقط في اللحظة'}</span>
                </div>
                <div style={{ backgroundColor: '#faf5ff', border: '1px solid #d8b4fe', borderRadius: '2px', padding: '2px' }}>
                  <div style={{ fontWeight: 900, fontSize: '10.5px', color: '#7c3aed', fontFamily: "'Outfit', sans-serif" }}>0 & 1</div>
                  <strong style={{ color: '#6b21a8', display: 'block', fontSize: '7.8px' }}>{isEn ? 'Quantum Qubit' : 'الكيوبت (Qubit)'}</strong>
                  <span style={{ color: '#7c3aed', fontSize: '7.2px' }}>{isEn ? 'Superposition (التراكب معاً)' : 'التراكب الكمي معاً بنفس اللحظة'}</span>
                </div>
              </div>

              {/* Math Law & Problems Box (قانون المسائل الحسابية 2^n) */}
              <div style={{ backgroundColor: '#faf5ff', border: '1px solid #d8b4fe', borderRadius: '3px', padding: '2.5px 4.5px', marginBottom: '2px' }}>
                <div style={{ color: '#581c87', fontWeight: 900, fontSize: '8.0px', marginBottom: '1px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>{isEn ? 'Math Formula & Exam Questions:' : 'قانون الامتحان والمسائل الحسابية:'}</span>
                  <span style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#7c3aed', color: '#fff', padding: '0 4px', borderRadius: '2px', fontSize: '7.5px' }}>
                    N = 2^n States
                  </span>
                </div>
                <div style={{ color: '#3b0764', fontSize: '7.4px', lineHeight: 1.2 }}>
                  <div>
                    • <strong style={{ color: '#581c87' }}>{isEn ? 'Formula: ' : 'القانون الوزاري: '}</strong>
                    {isEn ? (
                      <span>An n-qubit system represents and processes <strong style={{ color: '#6b21a8' }}>2^n states simultaneously</strong> in superparallelism.</span>
                    ) : (
                      <span>نظام من n كيوبت يمثل ويعالج <strong style={{ color: '#6b21a8', backgroundColor: '#f3e8ff', padding: '0 3px', borderRadius: '2px' }}>(2^n) حالة معاً في نفس اللحظة</strong> بالتوازي الفائق.</span>
                    )}
                  </div>
                  <div>
                    • <strong style={{ color: '#581c87' }}>{isEn ? 'Exam Problem (3 Qubits): ' : 'مسألة الامتحان (3 كيوبت): '}</strong>
                    {isEn ? (
                      <span><strong style={{ color: '#7c3aed' }}>3 Qubits = 2^3 = 8 states superimposed at once</strong> (from 000 to 111).</span>
                    ) : (
                      <span><strong style={{ color: '#7c3aed', backgroundColor: '#f3e8ff', padding: '0 3px', borderRadius: '2px' }}>3 كيوبت = 2^3 = 8 حالات متراكبة معاً في اللحظة</strong> (من 000 إلى 111).</span>
                    )}
                  </div>
                  <div>
                    • <strong style={{ color: '#581c87' }}>{isEn ? 'Crucial Contrast: ' : 'المقارنة الحاسمة: '}</strong>
                    {isEn ? (
                      <span>3 Classical bits represent <strong style={{ color: '#0369a1' }}>ONLY 1 state</strong> of 8, while 3 qubits represent <strong style={{ color: '#7c3aed' }}>ALL 8 states simultaneously</strong>!</span>
                    ) : (
                      <span>3 بت كلاسيكي تمثل <strong style={{ color: '#0369a1', textDecoration: 'underline' }}>حالة واحدة فقط</strong> من الـ 8، بينما 3 كيوبت تمثل <strong style={{ color: '#7c3aed', backgroundColor: '#f3e8ff', padding: '0 3px', borderRadius: '2px' }}>كل الـ 8 حالات معاً</strong>!</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Applications: What Quantum Excels At (فيما يُستخدم وما يبرع فيه) */}
              <div style={{ backgroundColor: '#fdf4ff', border: '1px solid #f5d0fe', borderRadius: '3px', padding: '2.5px 4.5px', marginBottom: '2px' }}>
                <strong style={{ color: '#86198f', display: 'block', fontSize: '8.0px', marginBottom: '1px' }}>
                  {isEn ? 'What Quantum Excels At (4 Core Applications):' : 'فيما يبرع الجهاز الكمومي ويُستخدم؟ (4 تطبيقات رئيسية):'}
                </strong>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', color: '#701a75', fontSize: '7.4px', lineHeight: 1.2 }}>
                  <div>
                    • <strong style={{ color: '#86198f' }}>{isEn ? '1. Cryptography: ' : '1. كسر وتأمين التشفير: '}</strong>
                    {isEn ? (
                      <span>Factoring massive prime numbers & breaking RSA keys in minutes (<strong style={{ color: '#7c3aed' }}>Shor’s algorithm</strong>).</span>
                    ) : (
                      <span>تحليل الأعداد الأولية الفلكية وفك تشفير مفاتيح RSA في دقائق (<strong style={{ color: '#7c3aed' }}>خوارزمية شور</strong>).</span>
                    )}
                  </div>
                  <div>
                    • <strong style={{ color: '#86198f' }}>{isEn ? '2. Drug Discovery: ' : '2. محاكاة الجزيئات والأدوية: '}</strong>
                    {isEn ? (
                      <span>Simulating complex chemical bonds & protein folding to engineer cures.</span>
                    ) : (
                      <span>محاكاة الروابط الكيميائية وتفاعلات البروتينات المعقدة لابتكار علاجات جديدة.</span>
                    )}
                  </div>
                  <div>
                    • <strong style={{ color: '#86198f' }}>{isEn ? '3. Massive Optimization: ' : '3. مسائل التحسين اللوجستي: '}</strong>
                    {isEn ? (
                      <span>Evaluating billions of global flight routes, power grids & supply chains in seconds.</span>
                    ) : (
                      <span>فحص مليارات المسارات اللوجستية وشبكات الطاقة والطيران واختيار الأمثل فورياً.</span>
                    )}
                  </div>
                  <div>
                    • <strong style={{ color: '#86198f' }}>{isEn ? '4. Superconductors: ' : '4. المواد فائقة التوصيل: '}</strong>
                    {isEn ? (
                      <span>Designing room-temperature lossless conductors & sustainable materials.</span>
                    ) : (
                      <span>تصميم مواد فائقة التوصيل تعمل في درجات حرارة عادية دون مقاومة أو هدر للطاقة.</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Official Analogy (Car vs Bike) & Exam Traps */}
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '3px', padding: '2.5px 4.5px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', marginBottom: '1.5px', fontSize: '7.3px' }}>
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '2px', padding: '1.5px 3px' }}>
                    <strong style={{ color: '#1e293b' }}>🚗 {isEn ? 'Car (Classical):' : 'السيارة (الكلاسيكي):'}</strong>
                    <span style={{ color: '#475569' }}> {isEn ? 'Fast on open highways (daily PC tasks).' : 'سريعة ومثالية للطرق المفتوحة والمهام اليومية.'}</span>
                  </div>
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #d8b4fe', borderRadius: '2px', padding: '1.5px 3px' }}>
                    <strong style={{ color: '#7c3aed' }}>🚲 {isEn ? 'Bike (Quantum):' : 'الدراجة (الكمومي):'}</strong>
                    <span style={{ color: '#581c87' }}> {isEn ? 'Winding alleys (cryptography & molecules).' : 'تنفذ في الأزقة الضيقة (المسائل التشفيرية المستحيلة).'}</span>
                  </div>
                </div>
                <div style={{ color: '#991b1b', fontSize: '7.3px', lineHeight: 1.2 }}>
                  ⚡ <strong style={{ color: '#991b1b' }}>{isEn ? 'Exam Traps: ' : 'فخاخ الامتحان: '}</strong>
                  {isEn ? (
                    <span>Quantum is <strong style={{ color: '#b91c1c' }}>NOT a PC replacement</strong>; requires extreme cooling near absolute zero (-273°C), and <strong style={{ color: '#b91c1c' }}>will NOT speed up web browsing or gaming</strong>!</span>
                  ) : (
                    <span>الحاسوب الكمومي <strong style={{ color: '#b91c1c', textDecoration: 'underline' }}>ليس بديلاً للحاسوب الشخصي (PC)</strong>؛ يتطلب تبريداً فائقاً (الصفر المطلق -273°C)، و<strong style={{ color: '#b91c1c' }}>لن يسرع تصفح الويب أو الألعاب</strong>!</span>
                  )}
                </div>
              </div>

            </div>

            {/* AR vs VR Pill */}
            <div style={{ backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '3px', padding: '3.5px 6px', fontSize: '8.4px', color: '#1e293b', lineHeight: 1.34 }}>
              <strong>AR: </strong>{isEn ? 'Real world + 3D overlays (surgery HUD).' : 'إبقاء العالم الحقيقي + طبقات رقمية (نظارة الجراح).'} | <strong>VR: </strong>{isEn ? '100% full immersion digital simulation.' : 'عزل تام 100% في بيئة افتراضية.'}
            </div>
          </div>

          {/* --------------------------------------------------------- */}
          {/* COLUMN 4: طبقات الذكاء الاصطناعي والمعمارية العصبية         */}
          {/* --------------------------------------------------------- */}
          <div style={{ border: '1.5px solid #94a3b8', borderRadius: '6px', padding: '6px 7px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #7c3aed', paddingBottom: '3px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ backgroundColor: '#7c3aed', color: '#fff', fontSize: '9.5px', fontWeight: 900, padding: '1.5px 6px', borderRadius: '3px', fontFamily: "'Outfit', sans-serif" }}>1-2</span>
                <strong style={{ fontSize: '11.2px', color: '#5b21b6' }}>{isEn ? 'AI Layers & Neural Architecture' : 'طبقات الذكاء الاصطناعي والمعمارية العصبية'}</strong>
              </div>
            </div>

            {/* DIAGRAM 5: Concentric AI Hierarchy Nested Cards */}
            <div style={{
              border: '1.5px solid #a855f7',
              borderRadius: '4px',
              padding: '3.5px 5px',
              backgroundColor: '#faf5ff'
            }}>
              <div style={{ fontSize: '9.0px', fontWeight: 800, color: '#6b21a8', marginBottom: '2px' }}>
                AI: {isEn ? 'Artificial Intelligence (Broad Umbrella)' : 'الذكاء الاصطناعي (المظلة الكبرى الشاملة)'}
              </div>

              {/* Nested ML */}
              <div style={{
                border: '1px solid #3b82f6',
                borderRadius: '3px',
                padding: '3px 4px',
                backgroundColor: '#eff6ff'
              }}>
                <div style={{ fontSize: '8.7px', fontWeight: 800, color: '#1d4ed8', marginBottom: '1.5px' }}>
                  ML: {isEn ? 'Machine Learning (Statistical Patterns from Data)' : 'تعلم الآلة (استخراج القواعد إحصائياً من البيانات)'}
                </div>

                {/* Nested DL */}
                <div style={{
                  border: '1px solid #0d9488',
                  borderRadius: '2.5px',
                  padding: '2.5px 3.5px',
                  backgroundColor: '#f0fdfa'
                }}>
                  <div style={{ fontSize: '8.5px', fontWeight: 800, color: '#0f766e', marginBottom: '1.5px' }}>
                    DL: {isEn ? 'Deep Learning (Multi-Layer Deep ANNs)' : 'التعلم العميق (شبكات عصبية عميقة متعددة الطبقات المخفية)'}
                  </div>

                  {/* Core GenAI */}
                  <div style={{
                    backgroundColor: '#fef3c7',
                    border: '1px solid #f59e0b',
                    borderRadius: '2px',
                    padding: '2.5px 5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '8.5px'
                  }}>
                    <strong style={{ color: '#b45309' }}>GenAI: {isEn ? 'Generative AI (Creates New Content)' : 'الذكاء التوليدي (خلق محتوى جديد)'}</strong>
                    <span style={{ fontSize: '7.5px', color: '#78350f', fontWeight: 800, fontFamily: "'Outfit', sans-serif" }}>LLMs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DIAGRAM: Radial Hub for 3 Core AI Principles */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '4.5px 6px' }}>
              <div style={{ fontSize: '9.0px', fontWeight: 800, color: '#6d28d9', marginBottom: '2.5px', textAlign: 'center' }}>
                {isEn ? '3 Core Governing AI Principles' : 'المبادئ الثلاثة الحاكمة للذكاء الاصطناعي'}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                {/* Left: 1. Learning */}
                <div style={{ flex: 1, backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: '3px', padding: '3px 4px', fontSize: '8.5px', textAlign: 'center' }}>
                  <strong style={{ color: '#6d28d9', display: 'block' }}>{isEn ? '1. Learning' : '1. التعلم'}</strong>
                  <span style={{ color: '#4c1d95', fontSize: '7.8px' }}>{isEn ? 'Extract patterns' : 'استخلاص الأنماط'}</span>
                </div>

                {/* Center Hub */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#7c3aed',
                  color: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  fontSize: '8.0px',
                  fontWeight: 900,
                  boxShadow: '0 2px 5px rgba(124, 58, 237, 0.35)',
                  flexShrink: 0,
                  fontFamily: "'Outfit', sans-serif"
                }}>
                  <span>AI</span>
                  <span style={{ fontSize: '6.5px', opacity: 0.9 }}>{isEn ? 'CORE' : 'الجوهر'}</span>
                </div>

                {/* Right: 2. Reasoning & 3. Self-Correction */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2.5px' }}>
                  <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '2px', padding: '2px 4px', fontSize: '8.2px' }}>
                    <strong style={{ color: '#1d4ed8' }}>{isEn ? '2. Reasoning: ' : '2. الاستدلال: '}</strong>
                    <span style={{ color: '#1e3a8a', fontSize: '7.8px' }}>{isEn ? 'Apply rules' : 'تطبيق القواعد'}</span>
                  </div>
                  <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '2px', padding: '2px 4px', fontSize: '8.2px' }}>
                    <strong style={{ color: '#15803d' }}>{isEn ? '3. Correction: ' : '3. التصحيح: '}</strong>
                    <span style={{ color: '#14532d', fontSize: '7.8px' }}>{isEn ? 'Tune weights' : 'تعديل الأوزان'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Paradigm Shift */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '4px 6px', fontSize: '8.6px' }}>
              <strong style={{ color: '#1e3a8a', display: 'block', marginBottom: '2px', fontSize: '9.0px' }}>{isEn ? 'The Paradigm Shift:' : 'النقلة الفلسفية في البرمجة:'}</strong>
              <div style={{ backgroundColor: '#f1f5f9', padding: '2.5px 5px', borderRadius: '2px', marginBottom: '2px' }}>
                <span style={{ color: '#64748b' }}>{isEn ? 'Classical: ' : 'الكلاسيكية: '}</span>
                <strong>{isEn ? 'Inputs + Handcrafted Rules = Outputs' : 'مدخلات + قواعد مبرمجة = مخرجات'}</strong>
              </div>
              <div style={{ backgroundColor: '#ede9fe', padding: '2.5px 5px', borderRadius: '2px' }}>
                <span style={{ color: '#7c3aed' }}>{isEn ? 'AI / ML: ' : 'الذكاء الاصطناعي: '}</span>
                <strong>{isEn ? 'Data + Historical Answers = Inferred Rules' : 'بيانات + إجابات سابقة = قواعد وأنماط مستنتجة'}</strong>
              </div>
            </div>

            {/* Perceptron, Synapses & Hidden Layers (Exam Oct 2026 Model 2) */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '4px 6px', fontSize: '8.6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                <strong style={{ color: '#059669', fontSize: '9.0px' }}>{isEn ? 'Perceptron & Neural Architecture' : 'البيرسبترون والطبقات الخفية'}</strong>
                <span style={{ fontSize: '7.5px', color: '#0d9488', fontWeight: 800, backgroundColor: '#ccfbf1', padding: '1px 4px', borderRadius: '2px' }}>
                  {isEn ? 'Hidden Layers (Q2 Exam)' : 'الطبقات الخفية (سؤال 2)'}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '8.4px', color: '#475569', textAlign: 'center' }}>
                <span style={{ border: '1px dashed #cbd5e1', padding: '2px 4px' }}>{isEn ? 'Input Layer' : 'طبقة الإدخال'}</span>
                <span style={{ color: '#dc2626', fontWeight: 800 }}>⟶</span>
                <span style={{ backgroundColor: '#fef3c7', border: '1px solid #f59e0b', padding: '2px 5px', fontWeight: 800, color: '#92400e' }}>
                  {isEn ? 'Hidden Layers' : 'الطبقات الخفية'}
                </span>
                <span style={{ color: '#dc2626', fontWeight: 800 }}>⟶</span>
                <span style={{ border: '1px dashed #cbd5e1', padding: '2px 4px' }}>{isEn ? 'Output Layer' : 'طبقة الإخراج'}</span>
              </div>
              <div style={{ backgroundColor: '#fef2f2', color: '#991b1b', padding: '2.5px 5px', borderRadius: '2px', marginTop: '2.5px', fontWeight: 700, fontSize: '8.4px', lineHeight: 1.34 }}>
                {isEn
                  ? 'Learning happens strictly by adjusting Synaptic Weights; neuron count remains constant!'
                  : 'التعلم يتم حصراً بتعديل أوزان الروابط المشبكية؛ عدد الخلايا العصبية ثابت لا يزيد!'}
              </div>
            </div>

            {/* 3 Learning Tiers Architectural Matrix + Oct 2026 Essay Q2 (ML vs DL) */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '4px 6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                <span style={{ fontSize: '9.0px', fontWeight: 800, color: '#4338ca' }}>
                  {isEn ? '3 Learning Tiers Matrix (Book pp. 13-14)' : 'مصفوفة مستويات التعلم الثلاثة (ص 13-14)'}
                </span>
                <span style={{ fontSize: '7.5px', color: '#4338ca', fontWeight: 800, backgroundColor: '#e0e7ff', padding: '1px 4px', borderRadius: '2px' }}>
                  {isEn ? 'Oct Exam Q3' : 'امتحان أكتوبر س3'}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '8.4px' }}>
                {sheet1.lesson12.learningTiers && sheet1.lesson12.learningTiers.map((tier, i) => (
                  <div key={i} style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '2px', padding: '2.5px 4px' }}>
                    <strong style={{ color: i === 0 ? '#1d4ed8' : i === 1 ? '#0d9488' : '#b45309' }}>{tier.tier}: </strong>
                    <span style={{ color: '#334155' }}>{tier.humanRole} | {tier.dataSplit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', fontSize: '8.4px' }}>
              <div style={{ backgroundColor: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '2px', padding: '3px 5px' }}>
                <strong style={{ color: '#9a3412', display: 'block' }}>Mata v. Avianca:</strong>
                <span style={{ color: '#7c2d12' }}>{isEn ? 'Lawyer penalized: fake legal precedents.' : 'تغريم محامٍ: سوابق وهمية بهلوسة خادعة.'}</span>
              </div>
              <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '2px', padding: '3px 5px' }}>
                <strong style={{ color: '#166534', display: 'block' }}>{isEn ? 'Precision Ag:' : 'الزراعة الدقيقة:'}</strong>
                <span style={{ color: '#14532d' }}>{isEn ? 'Satellite + soil sensors save water.' : 'دمج صور الأقمار وحساسات التربة.'}</span>
              </div>
            </div>

            {/* Narrow AI & Exam Traps */}
            <div style={{ backgroundColor: '#fef2f2', border: '1.5px solid #fecaca', borderRadius: '4px', padding: '4px 6px', fontSize: '8.6px', color: '#7f1d1d', lineHeight: 1.35 }}>
              <strong style={{ color: '#991b1b' }}>{isEn ? 'Exam Traps (1-2): ' : 'فخاخ امتحانية حاسمة (1-2): '}</strong>
              <span>{isEn ? 'All current AI is Narrow AI. All DL is ML, but NOT all ML is deep. Hallucination is NOT lying with intent!' : 'كل الـ AI الحالي ضيق (Narrow). كل DL هو ML، ولكن ليس كل ML عميق. الهلوسة ليست كذباً متعمداً بل استدلال احتمالي!'}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Strip */}
      <SummaryFooter edition={data.edition} unitTitle={data.unitTitle} isEn={isEn} />
    </div>
  );
}
