import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext.js';
import { unit01MasterSummaryData } from '../../data/unit01MasterSummaryData.js';
import { unit01MasterSummaryDataEn } from '../../data/unit01MasterSummaryDataEn.js';
import Icon from '../ui/Icon.jsx';

/**
 * UnitMasterSummaryLandscape
 * 2-Page A4 Landscape Master Blueprint & Visual Concept Poster
 * Features:
 * - 4-Fold Magazine/Poster Layout per sheet (4 balanced columns across 297mm width)
 * - Rich visual architecture diagrams (Multi-core, Specialized Chips, Bit vs Qubit, Cloud/Edge/Quantum, AI Hierarchy, Perceptron, 4 Ethical Shields, Confusion Matrix)
 * - Strict A4 landscape aspect ratio on screen and in print with 0 page-overflow
 * - Embedded "خلي بالك في الامتحان" tips inside each concept
 */
export default function UnitMasterSummaryLandscape({ onBack }) {
  const { language, isRTL } = useLanguage();
  const isEn = language === 'en';

  const data = isEn ? unit01MasterSummaryDataEn : unit01MasterSummaryData;
  const [activeSheetView, setActiveSheetView] = useState('both');
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    document.body.classList.add('landscape-active');
    return () => {
      document.body.classList.remove('landscape-active');
    };
  }, []);

  const { sheet1, sheet2 } = data;

  return (
    <div className="unit-master-summary-page" style={{ minHeight: '100vh', backgroundColor: '#090d16', paddingBottom: '40px' }}>
      {/* Print Specific CSS for A4 Landscape */}
      <style>{`
        @page {
          size: A4 landscape !important;
          margin: 0 !important;
        }
        @media print {
          .screen-only-controls {
            display: none !important;
          }
          body, html {
            background-color: #ffffff !important;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .landscape-sheet {
            width: 297mm !important;
            height: 209mm !important;
            max-width: 297mm !important;
            max-height: 209mm !important;
            page-break-after: always !important;
            page-break-inside: avoid !important;
            overflow: hidden !important;
            margin: 0 !important;
            padding: 5mm 6mm !important;
            box-shadow: none !important;
            border: none !important;
            transform: none !important;
          }
          .landscape-sheet:last-child {
            page-break-after: auto !important;
          }
        }
      `}</style>

      {/* Screen Only Top Toolbar */}
      <div className="screen-only-controls" style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#0f172a',
        borderBottom: '1px solid #1e293b',
        padding: '8px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        color: '#ffffff',
        boxShadow: '0 4px 16px rgba(0,0,0,0.5)'
      }}>
        {/* Left: Back button & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {onBack && (
            <button
              onClick={onBack}
              style={{
                backgroundColor: '#1e293b',
                color: '#ffffff',
                border: '1px solid #334155',
                borderRadius: '6px',
                padding: '5px 12px',
                fontSize: '11.5px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <Icon name={isRTL ? 'arrow_forward' : 'arrow_back'} size={15} />
              <span>{isEn ? 'Back to App' : 'العودة للتطبيق'}</span>
            </button>
          )}

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                backgroundColor: '#f59e0b',
                color: '#000000',
                fontWeight: 900,
                fontSize: '10px',
                padding: '2px 7px',
                borderRadius: '4px',
                letterSpacing: '0.5px'
              }}>
                A4 LANDSCAPE // 297mm × 210mm
              </span>
              <h1 style={{ fontSize: '13px', fontWeight: 800, margin: 0, color: '#f8fafc' }}>
                {isEn ? 'Unit 1 Master Poster: Visual Architecture & Exam Blueprints' : 'مخطط الإتقان الشامل للوحدة الأولى — مطوية البكالوريا بالعرض'}
              </h1>
            </div>
            <span style={{ fontSize: '10px', color: '#94a3b8' }}>
              {isEn ? 'Supervised by Eng. Mohamed Shamel — Thanawya AI Curriculum' : 'إشراف م. محمد شامل — خبير البرمجة والذكاء الاصطناعي للبكالوريا المصرية'}
            </span>
          </div>
        </div>

        {/* Center: Sheet Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#1e293b', padding: '3px', borderRadius: '6px' }}>
          <button
            onClick={() => setActiveSheetView('both')}
            style={{
              backgroundColor: activeSheetView === 'both' ? '#2563eb' : 'transparent',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 10px',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {isEn ? 'Both Sheets (2-Sided)' : 'عرض الورقتين معاً (وش وضهر)'}
          </button>
          <button
            onClick={() => setActiveSheetView('sheet1')}
            style={{
              backgroundColor: activeSheetView === 'sheet1' ? '#2563eb' : 'transparent',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 10px',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {isEn ? 'Sheet 1 (Front: Lessons 1 & 2)' : 'الورقة 1 (الوجه الأول: درس 1 و 2)'}
          </button>
          <button
            onClick={() => setActiveSheetView('sheet2')}
            style={{
              backgroundColor: activeSheetView === 'sheet2' ? '#2563eb' : 'transparent',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 10px',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {isEn ? 'Sheet 2 (Back: Lessons 3 & 4)' : 'الورقة 2 (الظهر: درس 3 و 4)'}
          </button>
        </div>

        {/* Right: Zoom & Print */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.1))}
              style={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#fff', borderRadius: '4px', width: '26px', height: '26px', cursor: 'pointer', fontWeight: 'bold' }}
              title="Zoom out"
            >
              -
            </button>
            <span style={{ fontSize: '11px', color: '#cbd5e1', minWidth: '35px', textAlign: 'center' }}>
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(1.4, z + 0.1))}
              style={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#fff', borderRadius: '4px', width: '26px', height: '26px', cursor: 'pointer', fontWeight: 'bold' }}
              title="Zoom in"
            >
              +
            </button>
          </div>

          <button
            onClick={() => window.print()}
            style={{
              backgroundColor: '#16a34a',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 14px',
              fontSize: '11.5px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 8px rgba(22, 163, 74, 0.4)'
            }}
          >
            <Icon name="print" size={16} />
            <span>{isEn ? 'Print A4 Landscape' : 'طباعة ورقة المفاهيم (A4 بالعرض)'}</span>
          </button>
        </div>
      </div>

      {/* Sheets Container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '35px',
        marginTop: '25px',
        padding: '0 10px'
      }}>
        {/* ================================================================= */}
        {/* SHEET 1: TECH FOUNDATIONS & AI ARCHITECTURE (LESSONS 1-1 & 1-2)    */}
        {/* ================================================================= */}
        {(activeSheetView === 'both' || activeSheetView === 'sheet1') && (
          <div
            className="landscape-sheet"
            style={{
              width: '1240px',
              height: '830px',
              maxHeight: '830px',
              backgroundColor: '#ffffff',
              color: '#0f172a',
              padding: '12px 14px',
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
            {/* Top Sheet Header Banner */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '2px solid #0f172a',
                paddingBottom: '4px',
                marginBottom: '6px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ backgroundColor: '#0f172a', color: '#ffffff', fontWeight: 900, fontSize: '10px', padding: '2px 7px', borderRadius: '3px' }}>
                    {sheet1.pageTag}
                  </span>
                  <h2 style={{ fontSize: '12px', fontWeight: 900, margin: 0, color: '#0f172a' }}>
                    {sheet1.title}
                  </h2>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '9.5px', color: '#475569', fontWeight: 700 }}>
                  <span>{sheet1.subtitle}</span>
                  <span style={{ backgroundColor: '#e2e8f0', color: '#0f172a', padding: '2px 6px', borderRadius: '4px', fontWeight: 800 }}>
                    {sheet1.pageNumber} / {sheet1.totalPages}
                  </span>
                </div>
              </div>

              {/* Golden Exam Rules Pill Bar */}
              <div style={{
                backgroundColor: '#fffbeb',
                border: '1px solid #fde68a',
                borderRadius: '5px',
                padding: '4px 8px',
                marginBottom: '6px'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                  {sheet1.goldenExamRules.rules.map((r, i) => (
                    <div key={i} style={{ backgroundColor: '#ffffff', border: '1px solid #fef3c7', borderRadius: '3px', padding: '2px 5px', fontSize: '7.8px', lineHeight: 1.2 }}>
                      <strong style={{ color: '#b45309' }}>{r.tag}: </strong>
                      <span style={{ color: '#451a03' }}>{r.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4-COLUMN LANDSCAPE FLYER GRID */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>

                {/* --------------------------------------------------------- */}
                {/* COLUMN 1: الحقب الخمس وتاريخ الحوسبة                       */}
                {/* --------------------------------------------------------- */}
                <div style={{ border: '1px solid #cbd5e1', borderRadius: '5px', padding: '6px 7px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid #2563eb', paddingBottom: '3px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ backgroundColor: '#2563eb', color: '#fff', fontSize: '8.5px', fontWeight: 900, padding: '1px 4px', borderRadius: '3px' }}>1-1</span>
                      <strong style={{ fontSize: '9.5px', color: '#1e3a8a' }}>{isEn ? '5 Eras of Information Technology' : 'الحقب الخمس لتطور تكنولوجيا المعلومات'}</strong>
                    </div>
                  </div>

                  {/* 5 Eras Vertical Timeline Cards */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    {sheet1.lesson11.eras.map((era, i) => (
                      <div key={i} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '3px', padding: '3px 5px', fontSize: '7.5px', lineHeight: 1.25 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1px' }}>
                          <span style={{ fontWeight: 800, color: '#1d4ed8' }}>{era.period}</span>
                        </div>
                        <div style={{ color: '#0f172a' }}><strong>{era.event}</strong></div>
                        <div style={{ color: '#64748b', fontSize: '7px' }}>{era.impact}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlight Box: 1946 Transistor */}
                  <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '4px', padding: '4px 6px', fontSize: '7.5px' }}>
                    <strong style={{ color: '#1e40af', display: 'block' }}>{isEn ? 'The Hardware Milestone (1946):' : 'التحول الحاسم (ابتكار الترانزستور 1946):'}</strong>
                    <span style={{ color: '#1e293b' }}>
                      {isEn
                        ? 'Bell Labs transistor + Integrated Circuits moved computers from army basements into homes (PCs).'
                        : 'ابتكار الترانزستور في مختبرات بِل والدوائر المتكاملة نقل الحاسوب من غرف الجيش إلى بيوت الأفراد (PC).'}
                    </span>
                  </div>

                  {/* Traps Box */}
                  <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '4px', padding: '3px 5px', fontSize: '7.2px', color: '#7f1d1d' }}>
                    <strong style={{ color: '#991b1b', display: 'block' }}>{isEn ? 'Lesson 1-1 Exam Traps:' : 'فخاخ امتحانية حاسمة (1-1):'}</strong>
                    <ul style={{ margin: 0, paddingInlineStart: '12px', lineHeight: 1.25 }}>
                      <li>{isEn ? 'Engineers began computing in 40s (ENIAC); regular citizens in 70s-80s (PCs).' : 'مهندسو الحاسب والجيش بدأوا في الأربعينيات، بينما عامة الناس في السبعينيات مع الـ PC.'}</li>
                      <li>{isEn ? 'Web & E-commerce (Amazon) in 90s; Smartphones exploded in 2000s.' : 'الإنترنت التجاري والويب ظهر في التسعينيات (أمازون 1994)، والهواتف الذكية في العقد الأول (2000s).'}</li>
                    </ul>
                  </div>
                </div>

                {/* --------------------------------------------------------- */}
                {/* COLUMN 2: قانون مور والحلول المعمارية والتحول الميداني       */}
                {/* --------------------------------------------------------- */}
                <div style={{ border: '1px solid #cbd5e1', borderRadius: '5px', padding: '5px 6px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid #059669', paddingBottom: '2px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ backgroundColor: '#059669', color: '#fff', fontSize: '8px', fontWeight: 900, padding: '1px 4px', borderRadius: '3px' }}>1-1</span>
                      <strong style={{ fontSize: '9px', color: '#065f46' }}>{isEn ? "Moore's Law & Architecture" : 'قانون مور والبدائل المعمارية'}</strong>
                    </div>
                  </div>

                  {/* Moore Definition */}
                  <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '3px', padding: '2.5px 4px', fontSize: '7.2px', lineHeight: 1.2 }}>
                    <strong style={{ color: '#065f46' }}>{isEn ? "Moore's Observation:" : 'ملاحظة غوردون مور:'} </strong>
                    <span style={{ color: '#064e3b' }}>
                      {isEn
                        ? 'Transistors on an IC roughly double every 2 years; an EMPIRICAL economic observation, NOT a physical law!'
                        : 'تضاعف عدد الترانزستورات كل عامين تقريباً مع انخفاض التكلفة؛ ملاحظة تجريبية وليست قانوناً فيزيائياً مطلقاً!'}
                    </span>
                  </div>

                  {/* DIAGRAM 1: Specialized Chips */}
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '3px', padding: '3px 4px' }}>
                    <div style={{ fontSize: '7.3px', fontWeight: 800, color: '#334155', marginBottom: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>{isEn ? 'Specialized Processors' : 'المعالجات المتخصصة'}</span>
                      <span style={{ fontSize: '6.5px', color: '#059669' }}>Specialized Chips</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', textAlign: 'center', fontSize: '6.7px' }}>
                      <div style={{ backgroundColor: '#f3e8ff', border: '1px solid #d8b4fe', borderRadius: '2px', padding: '1.5px' }}>
                        <strong style={{ color: '#7e22ce', display: 'block' }}>GPU</strong>
                        <span style={{ color: '#581c87' }}>{isEn ? 'Graphics & Math' : 'الرسومات والحساب'}</span>
                      </div>
                      <div style={{ backgroundColor: '#dbeafe', border: '1px solid #bfdbfe', borderRadius: '2px', padding: '1.5px' }}>
                        <strong style={{ color: '#1d4ed8', display: 'block' }}>NPU</strong>
                        <span style={{ color: '#1e3a8a' }}>{isEn ? 'Neural Networks' : 'تسريع الـ AI'}</span>
                      </div>
                      <div style={{ backgroundColor: '#fef3c7', border: '1px solid #fde68a', borderRadius: '2px', padding: '1.5px' }}>
                        <strong style={{ color: '#b45309', display: 'block' }}>DSP</strong>
                        <span style={{ color: '#78350f' }}>{isEn ? 'Audio & Signal' : 'الإشارات والصوت'}</span>
                      </div>
                    </div>
                  </div>

                  {/* DIAGRAM 2: Multi-Core Architecture */}
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '3px', padding: '3px 4px' }}>
                    <div style={{ fontSize: '7.3px', fontWeight: 800, color: '#334155', marginBottom: '2px', textAlign: 'center' }}>
                      {isEn ? 'Multi-Core & Parallel Processing' : 'تعدد الأنوية والمعالجة المتوازية'}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', marginBottom: '2px' }}>
                      <div style={{ backgroundColor: '#e0f2fe', border: '1px solid #bae6fd', borderRadius: '2px', padding: '1px', textAlign: 'center', fontSize: '6.7px', color: '#0369a1' }}>
                        <strong>{isEn ? 'Core 1' : 'النواة 1'}</strong>
                      </div>
                      <div style={{ backgroundColor: '#e0f2fe', border: '1px solid #bae6fd', borderRadius: '2px', padding: '1px', textAlign: 'center', fontSize: '6.7px', color: '#0369a1' }}>
                        <strong>{isEn ? 'Core 2' : 'النواة 2'}</strong>
                      </div>
                    </div>
                    <div style={{ backgroundColor: '#0284c7', color: '#fff', borderRadius: '2px', padding: '1.5px', textAlign: 'center', fontSize: '6.7px', fontWeight: 800, marginBottom: '2px' }}>
                      {isEn ? 'Shared Memory (RAM)' : 'الذاكرة المشتركة (Shared RAM)'}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                      <div style={{ backgroundColor: '#e0f2fe', border: '1px solid #bae6fd', borderRadius: '2px', padding: '1px', textAlign: 'center', fontSize: '6.7px', color: '#0369a1' }}>
                        <strong>{isEn ? 'Core 3' : 'النواة 3'}</strong>
                      </div>
                      <div style={{ backgroundColor: '#e0f2fe', border: '1px solid #bae6fd', borderRadius: '2px', padding: '1px', textAlign: 'center', fontSize: '6.7px', color: '#0369a1' }}>
                        <strong>{isEn ? 'Core 4' : 'النواة 4'}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Physics Limits Box */}
                  <div style={{ backgroundColor: '#fff7ed', border: '1px solid #ffedd5', borderRadius: '3px', padding: '2px 4px', fontSize: '6.8px', color: '#9a3412', lineHeight: 1.2 }}>
                    <strong>{isEn ? 'Silicon Physical Limits: ' : 'العوائق الفيزيائية للسيليكون: '}</strong>
                    <span>{isEn ? 'Leakage Currents (heat when OFF) + Quantum Tunneling (electrons jump gates).' : 'تيارات التسرب (حرارة حتى عند الـ OFF) + النفق الكمومي (قفز الإلكترونات فوق الحواجز).'}</span>
                  </div>

                  {/* 1995 vs 2026 Comparison Table */}
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '3px', padding: '3px 4px' }}>
                    <div style={{ fontSize: '7.2px', fontWeight: 800, color: '#0f766e', marginBottom: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>{isEn ? 'Field Shift: 1995 vs 2026 (Book p. 5)' : 'المقارنة الميدانية: 1995 مقابل 2026 (ص 5)'}</span>
                      <span style={{ fontSize: '6.2px', color: '#64748b' }}>Before ⟶ Now</span>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '6.5px', lineHeight: 1.2 }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f1f5f9', color: '#334155', borderBottom: '1px solid #cbd5e1' }}>
                          <th style={{ padding: '1px 2px', textAlign: isRTL ? 'right' : 'left' }}>{isEn ? 'Domain' : 'المجال'}</th>
                          <th style={{ padding: '1px 2px', textAlign: isRTL ? 'right' : 'left', color: '#64748b' }}>1995</th>
                          <th style={{ padding: '1px 2px', textAlign: isRTL ? 'right' : 'left', color: '#059669' }}>2026</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sheet1.lesson11.timelineHookComparison && sheet1.lesson11.timelineHookComparison.map((row, i) => (
                          <tr key={i} style={{ borderBottom: i < 3 ? '1px solid #f1f5f9' : 'none' }}>
                            <td style={{ padding: '1.5px 2px', fontWeight: 700, color: '#1e293b' }}>{row.field}</td>
                            <td style={{ padding: '1.5px 2px', color: '#64748b' }}>{row.year1995}</td>
                            <td style={{ padding: '1.5px 2px', color: '#047857', fontWeight: 600 }}>{row.year2026}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Watch Out Exam Tip */}
                  <div style={{ backgroundColor: '#fef3c7', border: '1px solid #fde68a', borderRadius: '3px', padding: '2px 4px', fontSize: '6.8px', color: '#92400e' }}>
                    <strong>{isEn ? 'Exam Tip: ' : 'خلي بالك في الامتحان: '}</strong>
                    <span>{isEn ? 'Quantum computing is NOT the silicon PC replacement; the engineering solution is Multi-Core & Parallelism!' : 'الحوسبة الكمومية ليست بديلاً لحواسيب السيليكون؛ الحل الهندسي الفعلي المعتمد هو تعدد الأنوية والمعالجة المتوازية!'}</span>
                  </div>
                </div>

                {/* --------------------------------------------------------- */}
                {/* COLUMN 3: التحولات الاجتماعية والتقنيات الناشئة              */}
                {/* --------------------------------------------------------- */}
                <div style={{ border: '1px solid #cbd5e1', borderRadius: '5px', padding: '5px 6px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid #d97706', paddingBottom: '2px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ backgroundColor: '#d97706', color: '#fff', fontSize: '8px', fontWeight: 900, padding: '1px 4px', borderRadius: '3px' }}>1-1</span>
                      <strong style={{ fontSize: '9px', color: '#92400e' }}>{isEn ? 'Social Shifts & Emerging Tech' : 'التحولات الاجتماعية والتقنيات الناشئة'}</strong>
                    </div>
                  </div>

                  {/* 5 Social Shifts Chips */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', fontSize: '6.7px' }}>
                    <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '2px', padding: '1.5px 3px', color: '#1e40af' }}>
                      <strong>SNS: </strong>{isEn ? 'Instant flow' : 'تواصل وتدفق فوري'}
                    </div>
                    <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '2px', padding: '1.5px 3px', color: '#166534' }}>
                      <strong>E-commerce: </strong>{isEn ? 'Global 24/7' : 'تجارة أونلاين 24/7'}
                    </div>
                    <div style={{ backgroundColor: '#faf5ff', border: '1px solid #e9d5ff', borderRadius: '2px', padding: '1.5px 3px', color: '#6b21a8' }}>
                      <strong>Remote Work: </strong>{isEn ? 'Less traffic' : 'عمل عن بعد ومرونة'}
                    </div>
                    <div style={{ backgroundColor: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '2px', padding: '1.5px 3px', color: '#9a3412' }}>
                      <strong>Online Learning: </strong>{isEn ? 'Fair access' : 'تعلم رقمي عادل'}
                    </div>
                  </div>

                  {/* Stakeholder Analysis Matrix */}
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '3px', padding: '3px 4px' }}>
                    <div style={{ fontSize: '7.2px', fontWeight: 800, color: '#b45309', marginBottom: '2px' }}>
                      {isEn ? 'Cashless Stakeholder Analysis (Book p. 11)' : 'مصفوفة أصحاب المصلحة في التحول الرقمي (ص 11)'}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', fontSize: '6.3px', lineHeight: 1.2 }}>
                      {sheet1.lesson11.stakeholderMatrix && sheet1.lesson11.stakeholderMatrix.map((st, i) => (
                        <div key={i} style={{ backgroundColor: i === 3 ? '#ecfdf5' : '#f8fafc', border: `1px solid ${i === 3 ? '#a7f3d0' : '#e2e8f0'}`, borderRadius: '2px', padding: '1.5px 2.5px' }}>
                          <strong style={{ color: i === 3 ? '#047857' : '#1e293b', display: 'block' }}>{st.role}</strong>
                          <span style={{ color: i === 3 ? '#065f46' : '#475569' }}>{st.interest}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Autonomous Driving Stack */}
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '3px', padding: '3px 4px' }}>
                    <div style={{ fontSize: '7.2px', fontWeight: 800, color: '#1d4ed8', marginBottom: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>{isEn ? 'Autonomous Driving Stack' : 'منظومة عتاد القيادة الذاتية'}</span>
                      <span style={{ fontSize: '6.2px', color: '#059669', fontWeight: 700 }}>0-Latency Edge</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px', textAlign: 'center', fontSize: '6.3px' }}>
                      <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '2px', padding: '1px' }}>
                        <strong style={{ color: '#1e40af', display: 'block' }}>Vision</strong>
                        <span style={{ color: '#1e3a8a' }}>{isEn ? 'Cameras' : 'كاميرات'}</span>
                      </div>
                      <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '2px', padding: '1px' }}>
                        <strong style={{ color: '#1e40af', display: 'block' }}>Radar</strong>
                        <span style={{ color: '#1e3a8a' }}>{isEn ? 'Speed' : 'سرعات'}</span>
                      </div>
                      <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '2px', padding: '1px' }}>
                        <strong style={{ color: '#1e40af', display: 'block' }}>LiDAR</strong>
                        <span style={{ color: '#1e3a8a' }}>{isEn ? '3D Laser' : 'ليزر 3D'}</span>
                      </div>
                      <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '2px', padding: '1px' }}>
                        <strong style={{ color: '#166534', display: 'block' }}>Edge</strong>
                        <span style={{ color: '#14532d' }}>{isEn ? 'Brake' : 'فرملة'}</span>
                      </div>
                    </div>
                    <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '2px', padding: '1.5px 3px', marginTop: '2px', fontSize: '6.3px', color: '#991b1b' }}>
                      <strong>{isEn ? 'Exam Alert: ' : 'تنبيه الامتحان: '}</strong>
                      <span>{isEn ? 'Emergency braking MUST be local Edge! Cloud causes fatal lag (Latency).' : 'الفرملة الطارئة حصراً حوسبة طرفية (Edge)؛ السحابة خطر بسبب الـ Latency!'}</span>
                    </div>
                  </div>

                  {/* Bit vs Qubit */}
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '3px', padding: '3px 4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '7.2px', fontWeight: 800, marginBottom: '2px' }}>
                      <span style={{ color: '#0369a1' }}>{isEn ? 'Classical Bit' : 'البت الكلاسيكي (Bit)'}</span>
                      <span style={{ color: '#7c3aed' }}>{isEn ? 'Quantum Qubit' : 'الكيوبت (Qubit)'}</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', textAlign: 'center', fontSize: '6.7px' }}>
                      <div style={{ backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '2px', padding: '1.5px' }}>
                        <div style={{ fontWeight: 900, fontSize: '9px', color: '#334155' }}>0 OR 1</div>
                        <span style={{ color: '#64748b' }}>{isEn ? 'Strictly One State' : 'حالة واحدة قاطعة'}</span>
                      </div>
                      <div style={{ backgroundColor: '#faf5ff', border: '1px solid #d8b4fe', borderRadius: '2px', padding: '1.5px' }}>
                        <div style={{ fontWeight: 900, fontSize: '9px', color: '#7c3aed' }}>0 & 1</div>
                        <span style={{ color: '#6b21a8' }}>{isEn ? 'Superposition (التراكب)' : 'التراكب الكمي معاً'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Cloud vs Edge vs Quantum */}
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '3px', padding: '2px 4px', fontSize: '6.6px', display: 'flex', flexDirection: 'column', gap: '1.5px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <strong style={{ color: '#1e40af' }}>{isEn ? 'Cloud:' : 'السحابية (Cloud):'}</strong>
                      <span style={{ color: '#334155' }}>{isEn ? 'Remote / Big Data & AI models' : 'خوادم بعيدة لحفظ ومعالجة Big Data'}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <strong style={{ color: '#059669' }}>{isEn ? 'Edge:' : 'الطرفية (Edge):'}</strong>
                      <span style={{ color: '#065f46' }}>{isEn ? 'Local on device / 0-Latency' : 'لحظي على الجهاز لتقليل Latency'}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <strong style={{ color: '#7c3aed' }}>{isEn ? 'Quantum:' : 'الكمومية (Quantum):'}</strong>
                      <span style={{ color: '#581c87' }}>{isEn ? 'Cryptography & Molecular drugs' : 'كسر التشفير ونمذجة الجزيئات'}</span>
                    </div>
                  </div>

                  {/* Quantum Analogy: Car vs Bicycle */}
                  <div style={{ backgroundColor: '#faf5ff', border: '1px solid #e9d5ff', borderRadius: '3px', padding: '2px 4px', fontSize: '6.6px' }}>
                    <div style={{ fontWeight: 800, color: '#7c3aed', marginBottom: '1.5px' }}>
                      {isEn ? 'Official Analogy (Car vs Bicycle):' : 'تشبيه الوزارة الرسمي (السيارة vs العجلة):'}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                      <div style={{ backgroundColor: '#ffffff', border: '1px solid #d8b4fe', borderRadius: '2px', padding: '1.5px 2px' }}>
                        <strong style={{ color: '#1e293b' }}>🚗 {isEn ? 'Car' : 'السيارة'}:</strong>
                        <span style={{ color: '#475569' }}> {isEn ? 'Fast on open highways (daily PC tasks).' : 'سريعة على الطرق المفتوحة لمهام الحياة اليومية.'}</span>
                      </div>
                      <div style={{ backgroundColor: '#ffffff', border: '1px solid #d8b4fe', borderRadius: '2px', padding: '1.5px 2px' }}>
                        <strong style={{ color: '#7c3aed' }}>🚲 {isEn ? 'Bike' : 'الدراجة'}:</strong>
                        <span style={{ color: '#581c87' }}> {isEn ? 'Winding alleys (cryptography & molecules).' : 'تنفذ في الأزقة الضيقة (التشفير والجزيئات).'}</span>
                      </div>
                    </div>
                  </div>

                  {/* AR vs VR Pill */}
                  <div style={{ backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '2px', padding: '2px 4px', fontSize: '6.5px', color: '#1e293b' }}>
                    <strong>AR: </strong>{isEn ? 'Real world + 3D overlays (surgery HUD).' : 'إبقاء العالم الحقيقي + طبقات رقمية (نظارة الجراح).'} | <strong>VR: </strong>{isEn ? '100% full immersion digital simulation.' : 'عزل تام 100% في بيئة افتراضية.'}
                  </div>
                </div>

                {/* --------------------------------------------------------- */}
                {/* COLUMN 4: طبقات الذكاء الاصطناعي والمعمارية العصبية         */}
                {/* --------------------------------------------------------- */}
                <div style={{ border: '1px solid #cbd5e1', borderRadius: '5px', padding: '5px 6px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid #7c3aed', paddingBottom: '2px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ backgroundColor: '#7c3aed', color: '#fff', fontSize: '8px', fontWeight: 900, padding: '1px 4px', borderRadius: '3px' }}>1-2</span>
                      <strong style={{ fontSize: '9px', color: '#5b21b6' }}>{isEn ? 'AI Layers & Neural Architecture' : 'طبقات الذكاء الاصطناعي والمعمارية العصبية'}</strong>
                    </div>
                  </div>

                  {/* DIAGRAM 5: Concentric AI Hierarchy Nested Cards */}
                  <div style={{
                    border: '1.5px solid #a855f7',
                    borderRadius: '4px',
                    padding: '2.5px 3px',
                    backgroundColor: '#faf5ff'
                  }}>
                    <div style={{ fontSize: '6.8px', fontWeight: 800, color: '#6b21a8', marginBottom: '1.5px' }}>
                      AI: {isEn ? 'Artificial Intelligence (Broad Umbrella)' : 'الذكاء الاصطناعي (المظلة الكبرى الشاملة)'}
                    </div>

                    {/* Nested ML */}
                    <div style={{
                      border: '1px solid #3b82f6',
                      borderRadius: '3px',
                      padding: '2px 3px',
                      backgroundColor: '#eff6ff'
                    }}>
                      <div style={{ fontSize: '6.6px', fontWeight: 800, color: '#1d4ed8', marginBottom: '1px' }}>
                        ML: {isEn ? 'Machine Learning (Statistical Patterns from Data)' : 'تعلم الآلة (استخراج القواعد إحصائياً من البيانات)'}
                      </div>

                      {/* Nested DL */}
                      <div style={{
                        border: '1px solid #0d9488',
                        borderRadius: '2.5px',
                        padding: '1.5px 2.5px',
                        backgroundColor: '#f0fdfa'
                      }}>
                        <div style={{ fontSize: '6.4px', fontWeight: 800, color: '#0f766e', marginBottom: '1px' }}>
                          DL: {isEn ? 'Deep Learning (Multi-Layer Deep ANNs)' : 'التعلم العميق (شبكات عصبية عميقة متعددة الطبقات)'}
                        </div>

                        {/* Core GenAI */}
                        <div style={{
                          backgroundColor: '#fef3c7',
                          border: '1px solid #f59e0b',
                          borderRadius: '2px',
                          padding: '1.5px 3px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '6.3px'
                        }}>
                          <strong style={{ color: '#b45309' }}>GenAI: {isEn ? 'Generative AI (Creates New Content)' : 'الذكاء التوليدي (خلق محتوى جديد)'}</strong>
                          <span style={{ fontSize: '5.8px', color: '#78350f' }}>LLMs</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DIAGRAM: Radial Hub for 3 Core AI Principles */}
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '3px', padding: '3px 4px' }}>
                    <div style={{ fontSize: '7.2px', fontWeight: 800, color: '#6d28d9', marginBottom: '2px', textAlign: 'center' }}>
                      {isEn ? '3 Core Governing AI Principles' : 'المبادئ الثلاثة الحاكمة للذكاء الاصطناعي'}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
                      {/* Left: 1. Learning */}
                      <div style={{ flex: 1, backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: '3px', padding: '2px 3px', fontSize: '6.4px', textAlign: 'center' }}>
                        <strong style={{ color: '#6d28d9', display: 'block' }}>{isEn ? '1. Learning' : '1. التعلم'}</strong>
                        <span style={{ color: '#4c1d95', fontSize: '6px' }}>{isEn ? 'Extract patterns' : 'استخلاص الأنماط'}</span>
                      </div>

                      {/* Center Hub */}
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#7c3aed',
                        color: '#ffffff',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontSize: '6.2px',
                        fontWeight: 900,
                        boxShadow: '0 2px 5px rgba(124, 58, 237, 0.35)',
                        flexShrink: 0
                      }}>
                        <span>AI</span>
                        <span style={{ fontSize: '5.2px', opacity: 0.9 }}>{isEn ? 'CORE' : 'الجوهر'}</span>
                      </div>

                      {/* Right: 2. Reasoning & 3. Self-Correction */}
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5px' }}>
                        <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '2px', padding: '1px 2.5px', fontSize: '6.2px' }}>
                          <strong style={{ color: '#1d4ed8' }}>{isEn ? '2. Reasoning: ' : '2. الاستدلال: '}</strong>
                          <span style={{ color: '#1e3a8a', fontSize: '5.9px' }}>{isEn ? 'Apply rules' : 'تطبيق القواعد'}</span>
                        </div>
                        <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '2px', padding: '1px 2.5px', fontSize: '6.2px' }}>
                          <strong style={{ color: '#15803d' }}>{isEn ? '3. Correction: ' : '3. التصحيح: '}</strong>
                          <span style={{ color: '#14532d', fontSize: '5.9px' }}>{isEn ? 'Tune weights' : 'تعديل الأوزان'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Paradigm Shift */}
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '3px', padding: '3px 4px', fontSize: '6.8px' }}>
                    <strong style={{ color: '#1e3a8a', display: 'block', marginBottom: '1.5px' }}>{isEn ? 'The Paradigm Shift:' : 'النقلة الفلسفية في البرمجة:'}</strong>
                    <div style={{ backgroundColor: '#f1f5f9', padding: '1.5px 3px', borderRadius: '2px', marginBottom: '1.5px' }}>
                      <span style={{ color: '#64748b' }}>{isEn ? 'Classical: ' : 'الكلاسيكية: '}</span>
                      <strong>{isEn ? 'Inputs + Handcrafted Rules = Outputs' : 'مدخلات + قواعد مبرمجة = مخرجات'}</strong>
                    </div>
                    <div style={{ backgroundColor: '#ede9fe', padding: '1.5px 3px', borderRadius: '2px' }}>
                      <span style={{ color: '#7c3aed' }}>{isEn ? 'AI / ML: ' : 'الذكاء الاصطناعي: '}</span>
                      <strong>{isEn ? 'Data + Historical Answers = Inferred Rules' : 'بيانات + إجابات سابقة = قواعد وأنماط مستنتجة'}</strong>
                    </div>
                  </div>

                  {/* Perceptron & Synapses */}
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '3px', padding: '3px 4px', fontSize: '6.8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5px' }}>
                      <strong style={{ color: '#059669' }}>{isEn ? 'Perceptron & Synaptic Weights' : 'البيرسبترون وميكانيكية التعلم'}</strong>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '6.4px', color: '#475569', textAlign: 'center' }}>
                      <span style={{ border: '1px dashed #cbd5e1', padding: '1.5px' }}>{isEn ? 'Inputs' : 'مدخلات'}</span>
                      <span style={{ color: '#dc2626', fontWeight: 800 }}>⟶ Weights ⟶</span>
                      <span style={{ border: '1px dashed #cbd5e1', padding: '1.5px' }}>{isEn ? 'Hidden' : 'طبقات'}</span>
                      <span style={{ color: '#dc2626', fontWeight: 800 }}>⟶</span>
                      <span style={{ border: '1px dashed #cbd5e1', padding: '1.5px' }}>{isEn ? 'Outputs' : 'مخرجات'}</span>
                    </div>
                    <div style={{ backgroundColor: '#fef2f2', color: '#991b1b', padding: '1.5px 3px', borderRadius: '2px', marginTop: '1.5px', fontWeight: 700, fontSize: '6.4px' }}>
                      {isEn
                        ? 'Learning happens strictly by adjusting Synaptic Weights; neuron count remains constant!'
                        : 'التعلم يتم حصراً بتعديل أوزان الروابط المشبكية؛ عدد الخلايا العصبية ثابت لا يزيد!'}
                    </div>
                  </div>

                  {/* 3 Learning Tiers Architectural Matrix */}
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '3px', padding: '3px 4px' }}>
                    <div style={{ fontSize: '7.2px', fontWeight: 800, color: '#4338ca', marginBottom: '1.5px' }}>
                      {isEn ? '3 Learning Tiers Matrix (Book pp. 13-14)' : 'مصفوفة مستويات التعلم الثلاثة (ص 13-14)'}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', fontSize: '6.3px' }}>
                      {sheet1.lesson12.learningTiers && sheet1.lesson12.learningTiers.map((tier, i) => (
                        <div key={i} style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '2px', padding: '1.5px 3px' }}>
                          <strong style={{ color: i === 0 ? '#1d4ed8' : i === 1 ? '#0d9488' : '#b45309' }}>{tier.tier}: </strong>
                          <span style={{ color: '#334155' }}>{tier.humanRole} | {tier.dataSplit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Studies */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', fontSize: '6.3px' }}>
                    <div style={{ backgroundColor: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '2px', padding: '1.5px 2.5px' }}>
                      <strong style={{ color: '#9a3412', display: 'block' }}>Mata v. Avianca:</strong>
                      <span style={{ color: '#7c2d12' }}>{isEn ? 'Lawyer penalized: fake legal precedents.' : 'تغريم محامٍ: سوابق وهمية بهلوسة خادعة.'}</span>
                    </div>
                    <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '2px', padding: '1.5px 2.5px' }}>
                      <strong style={{ color: '#166534', display: 'block' }}>{isEn ? 'Precision Ag:' : 'الزراعة الدقيقة:'}</strong>
                      <span style={{ color: '#14532d' }}>{isEn ? 'Satellite + soil sensors save water.' : 'دمج صور الأقمار وحساسات التربة.'}</span>
                    </div>
                  </div>

                  {/* Narrow AI & Exam Traps */}
                  <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '3px', padding: '2px 4px', fontSize: '6.5px', color: '#7f1d1d' }}>
                    <strong style={{ color: '#991b1b' }}>{isEn ? 'Exam Traps (1-2): ' : 'فخاخ امتحانية حاسمة (1-2): '}</strong>
                    <span>{isEn ? 'All current AI is Narrow AI. All DL is ML, but NOT all ML is deep. Hallucination is NOT lying with intent!' : 'كل الـ AI الحالي ضيق (Narrow). كل DL هو ML، ولكن ليس كل ML عميق. الهلوسة ليست كذباً متعمداً بل استدلال احتمالي!'}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Footer Strip */}
            <div style={{
              borderTop: '1px solid #e2e8f0',
              paddingTop: '3px',
              marginTop: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '8px',
              color: '#64748b'
            }}>
              <div>
                <strong>{data.edition}</strong> • {data.unitTitle}
              </div>
              <div>
                {isEn ? 'Eng. Mohamed Shamel — The Mentor Series' : 'سلسلة المُرشد في الذكاء الاصطناعي — م. محمد شامل'} • A4 Landscape Flyer Edition
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* SHEET 2: APPLICATIONS, ETHICS & SCENARIO LAB (LESSONS 1-3 & 1-4)   */}
        {/* ================================================================= */}
        {(activeSheetView === 'both' || activeSheetView === 'sheet2') && (
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
            {/* Top Sheet Header Banner */}
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '2px solid #0f172a',
                  paddingBottom: '3px',
                  marginBottom: '4px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ backgroundColor: '#0f172a', color: '#ffffff', fontWeight: 900, fontSize: '10px', padding: '2px 8px', borderRadius: '3px' }}>
                      {sheet2.pageTag}
                    </span>
                    <h2 style={{ fontSize: '13px', fontWeight: 900, margin: 0, color: '#0f172a' }}>
                      {sheet2.title}
                    </h2>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '9.5px', color: '#475569', fontWeight: 700 }}>
                    <span>{sheet2.subtitle}</span>
                    <span style={{ backgroundColor: '#e2e8f0', color: '#0f172a', padding: '2px 7px', borderRadius: '4px', fontWeight: 800 }}>
                      {sheet2.pageNumber} / {sheet2.totalPages}
                    </span>
                  </div>
                </div>

                {/* Confusion Matrix Banner (مصفوفة فك الاشتباك الوزارية الخماسية) */}
                <div style={{
                  backgroundColor: '#f0f7ff',
                  border: '1.5px solid #2563eb',
                  borderRadius: '6px',
                  padding: '4px 8px',
                  marginBottom: '6px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#1d4ed8', fontWeight: 900, fontSize: '10px' }}>
                      <Icon name="compare_arrows" size={14} style={{ color: '#2563eb' }} />
                      <span>{sheet2.confusionMatrix.title}</span>
                    </div>
                    <span style={{ fontSize: '8px', color: '#1e40af', fontWeight: 800, backgroundColor: '#dbeafe', padding: '1.5px 6px', borderRadius: '3px' }}>
                      {isEn ? 'Official Disambiguation Matrix & Exam Trigger Keywords' : 'مصفوفة فك الاشتباك الوزارية والكلمات المفتاحية الدالة في الامتحان'}
                    </span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
                    {sheet2.confusionMatrix.pairs.map((p, i) => (
                      <div key={i} style={{ backgroundColor: '#ffffff', border: '1px solid #bfdbfe', borderRadius: '4px', padding: '4px 5px', fontSize: '7.4px', lineHeight: 1.3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ borderBottom: '1px dashed #cbd5e1', paddingBottom: '2.5px', marginBottom: '2.5px' }}>
                            <strong style={{ color: '#1e40af', fontSize: '7.8px' }}>{p.conceptA}: </strong>
                            <span style={{ color: '#1e293b' }}>{p.roleA}</span>
                          </div>
                          <div style={{ borderBottom: '1px dashed #fde68a', paddingBottom: '2.5px', marginBottom: '2.5px' }}>
                            <strong style={{ color: '#b45309', fontSize: '7.8px' }}>{p.conceptB}: </strong>
                            <span style={{ color: '#1e293b' }}>{p.roleB}</span>
                          </div>
                        </div>
                        <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '3px', padding: '2px 4px', color: '#92400e', fontSize: '7px', fontWeight: 800 }}>
                          ⚡ {p.examTrigger}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4-COLUMN LANDSCAPE FLYER GRID (Flex 1 to occupy all available height) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', flex: 1, minHeight: '655px' }}>

                {/* --------------------------------------------------------- */}
                {/* COLUMN 1: مجالات الذكاء الاصطناعي اليومية والصناعية (1-3)    */}
                {/* --------------------------------------------------------- */}
                <div style={{ border: '1.5px solid #a7f3d0', borderRadius: '6px', padding: '6px 7px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  
                  {/* Top Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #059669', paddingBottom: '3px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span style={{ backgroundColor: '#059669', color: '#fff', fontSize: '9px', fontWeight: 900, padding: '1px 6px', borderRadius: '3px' }}>1-3</span>
                      <strong style={{ fontSize: '10.5px', color: '#065f46' }}>{isEn ? 'Daily Life & Industrial Domains' : 'مجالات الحياة اليومية والصناعة'}</strong>
                    </div>
                    <span style={{ fontSize: '7.8px', color: '#047857', fontWeight: 800, backgroundColor: '#d1fae5', padding: '1px 5px', borderRadius: '3px' }}>{isEn ? '8 Services & Sectors' : 'الخدمات والقطاعات الـ 8'}</span>
                  </div>

                  {/* Card 1: 4 Daily Life Services (Interactive Hooks & Keywords) */}
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #bbf7d0', borderRadius: '4px', padding: '4.5px 6px', fontSize: '7.6px', lineHeight: 1.35 }}>
                    <div style={{ fontWeight: 900, color: '#0f766e', marginBottom: '3px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Icon name="smartphone" size={12} style={{ color: '#0d9488' }} />
                      <span>{isEn ? 'Daily Life Services & Processing Modes:' : 'خدمات الحياة اليومية وأنماط المعالجة:'}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', color: '#1e293b' }}>
                      <div style={{ borderBottom: '1px dashed #e2e8f0', paddingBottom: '2px' }}>
                        <strong style={{ color: '#7c3aed' }}>1. {isEn ? 'Recommenders [ML+DL]: ' : 'نظم التوصية [ML+DL]: '}</strong>
                        <span>{isEn ? 'Predicts user taste via ' : 'تتنبأ بالتفضيلات عبر '} <strong style={{ color: '#6d28d9', backgroundColor: '#f5f3ff', padding: '0 2px' }}>{isEn ? 'Probabilistic Inference' : 'استدلال احتمالي'}</strong> {isEn ? 'based on ' : 'مبني على '} <strong>{isEn ? 'Past Behavior' : 'السلوك السابق'}</strong>؛ ⚡ <strong>{isEn ? 'NOT 100% deterministic certainty.' : 'ليس ضماناً مؤكداً 100%.'}</strong></span>
                      </div>
                      <div style={{ borderBottom: '1px dashed #e2e8f0', paddingBottom: '2px' }}>
                        <strong style={{ color: '#0284c7' }}>2. {isEn ? 'Voice Assistants [Speech+NLP]: ' : 'المساعدات الصوتية [صوت+NLP]: '}</strong>
                        <span>{isEn ? 'Converts speech to text + extracts ' : 'تحويل الصوت لنص + استخلاص '} <strong style={{ color: '#0369a1', backgroundColor: '#f0f9ff', padding: '0 2px' }}>{isEn ? 'User Intent' : 'القصد والنية (Intent)'}</strong> {isEn ? 'via ' : 'عبر '} <strong>NLP</strong> {isEn ? 'to execute commands.' : 'لتنفيذ الأوامر تلقائياً.'}</span>
                      </div>
                      <div style={{ borderBottom: '1px dashed #e2e8f0', paddingBottom: '2px' }}>
                        <strong style={{ color: '#0d9488' }}>3. {isEn ? 'Neural Translation [Transformers]: ' : 'الترجمة الآلية [Transformers]: '}</strong>
                        <span>{isEn ? 'Understands ' : 'تستوعب '} <strong style={{ color: '#0f766e', backgroundColor: '#f0fdfa', padding: '0 2px' }}>{isEn ? 'Full Context & Idioms' : 'سياق الجملة بالكامل والمجاز'}</strong> {isEn ? 'rejecting crude literal translation.' : 'بدلاً من الترجمة الحرفية العقيمة.'}</span>
                      </div>
                      <div>
                        <strong style={{ color: '#4338ca' }}>4. {isEn ? 'Facial Recognition [CNN 3D]: ' : 'التعرف على الوجه [CNN 3D]: '}</strong>
                        <span>{isEn ? 'Extracts ' : 'استخراج '} <strong>{isEn ? '3D Biometric Landmarks' : 'معالم بيومترية 3D'}</strong>؛ <strong style={{ color: '#15803d' }}>{isEn ? 'Permissible for real-time gate security' : 'مسموح للأمان اللحظي بالبوابات'}</strong>؛ <strong style={{ color: '#b91c1c' }}>{isEn ? 'Forbidden for street surveillance.' : 'وممنوع لتتبع الشوارع.'}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: 4 Vital & Industrial Sectors */}
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '4.5px 6px', fontSize: '7.5px', lineHeight: 1.35 }}>
                    <div style={{ fontWeight: 900, color: '#047857', marginBottom: '3px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Icon name="factory" size={12} style={{ color: '#059669' }} />
                      <span>{isEn ? 'Vital & Industrial Applied Sectors:' : 'القطاعات الحيوية والتطبيقات الصناعية:'}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5px', color: '#1e293b' }}>
                      <div>
                        <strong style={{ color: '#dc2626' }}>5. {isEn ? 'Healthcare [Medical Vision]: ' : 'الرعاية الصحية [رؤية طبية]: '}</strong>
                        <span>{isEn ? 'X-ray/MRI tumor detection; AI is ' : 'تحليل صور الأشعة والأورام؛ الـ AI '} <strong style={{ color: '#b91c1c', backgroundColor: '#fef2f2', padding: '0 2px' }}>{isEn ? 'Strictly Assistive' : 'أداة مساعدة وتشخيصية فقط'}</strong>؛ {isEn ? 'Final liability rests on ' : 'والقرار والمسؤولية '} <strong>{isEn ? 'Human Doctor.' : 'حصراً للطبيب البشري.'}</strong></span>
                      </div>
                      <div>
                        <strong style={{ color: '#16a34a' }}>6. {isEn ? 'Smart Agriculture [Drones+IoT]: ' : 'الزراعة الذكية [درونز+حساسات]: '}</strong>
                        <span>{isEn ? 'Drone cameras + soil sensors for ' : 'كاميرات الدرون وحساسات التربة لـ '} <strong>{isEn ? 'Precision Irrigation & Early Pest Spotting.' : 'الري الدقيق والتنبؤ بالحصاد واكتشاف الآفات مبكراً.'}</strong></span>
                      </div>
                      <div>
                        <strong style={{ color: '#b45309' }}>7. {isEn ? 'Manufacturing Automation: ' : 'التصنيع والأتمتة الصناعية: '}</strong>
                        <span>{isEn ? 'Automating production lines with ' : 'تنفيذ المهام المتكررة آلياً مع '} <strong>{isEn ? 'Zero direct human intervention' : 'انعدام التدخل البشري المباشر'}</strong> {isEn ? 'to raise throughput.' : 'لرفع الإنتاجية وخفض الأخطاء.'}</span>
                      </div>
                      <div>
                        <strong style={{ color: '#0369a1' }}>8. {isEn ? 'Logistics [Pathfinding AI]: ' : 'اللوجستيات وتعيين المسارات: '}</strong>
                        <span>{isEn ? 'Real-time graph routing algorithms to ' : 'خوارزميات المسارات اللحظية لـ '} <strong>{isEn ? 'Minimize fuel burn & transit delays.' : 'تقليل استهلاك الوقود وزمن النقل.'}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Hardware Difference: Quality Inspection vs Predictive Maintenance (سؤال 15) */}
                  <div style={{ backgroundColor: '#eff6ff', border: '1.5px solid #93c5fd', borderRadius: '4px', padding: '4.5px 6px', fontSize: '7.6px', lineHeight: 1.35 }}>
                    <div style={{ fontWeight: 900, color: '#1e40af', marginBottom: '2.5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Icon name="precision_manufacturing" size={13} style={{ color: '#2563eb' }} />
                      <span>{isEn ? 'Decisive Hardware Difference (Exam Q15):' : 'الفارق العتادي والتقني الحاسم (سؤال 15 الوزاري):'}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', color: '#1e293b' }}>
                      <div style={{ backgroundColor: '#ffffff', border: '1px solid #bfdbfe', borderRadius: '3px', padding: '2.5px 5px' }}>
                        <strong style={{ color: '#1e40af' }}>• {isEn ? 'Automated Quality Inspection:' : 'أتمتة فحص الجودة:'} </strong>
                        <span><strong style={{ color: '#1d4ed8' }}>{isEn ? 'Vision Cameras' : 'كاميرات رؤية حاسوبية'}</strong> {isEn ? 'on conveyor belt inspect the ' : 'على السير تفحص '} <strong style={{ color: '#0f766e', backgroundColor: '#ccfbf1', padding: '0 2px' }}>{isEn ? 'Finished Product' : 'المنتج النهائي'}</strong> {isEn ? 'to catch ' : 'لرصد '} <strong style={{ color: '#dc2626' }}>{isEn ? 'CURRENT defects immediately.' : 'العيب الحالي فوراً وعزله.'}</strong></span>
                      </div>
                      <div style={{ backgroundColor: '#ffffff', border: '1px solid #fde68a', borderRadius: '3px', padding: '2.5px 5px' }}>
                        <strong style={{ color: '#b45309' }}>• {isEn ? 'Predictive Maintenance:' : 'الصيانة التنبؤية:'} </strong>
                        <span><strong style={{ color: '#d97706' }}>{isEn ? 'Vibration & Thermal Sensors' : 'حساسات اهتزاز وحرارة'}</strong> {isEn ? 'on ' : 'على '} <strong style={{ color: '#b45309', backgroundColor: '#fef3c7', padding: '0 2px' }}>{isEn ? 'The Machine Itself' : 'الماكينة نفسها'}</strong> {isEn ? 'to forecast ' : 'لتوقع '} <strong style={{ color: '#7c2d12' }}>{isEn ? 'FUTURE breakdown before it stops.' : 'العطل المستقبلي قبل حدوثه وتوقفها.'}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Official Exam Traps for Lesson 1-3 */}
                  <div style={{ backgroundColor: '#fef2f2', border: '1.5px solid #fca5a5', borderRadius: '4px', padding: '4.5px 6px', fontSize: '7.5px', color: '#7f1d1d', lineHeight: 1.35 }}>
                    <div style={{ fontWeight: 900, color: '#991b1b', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Icon name="warning" size={13} style={{ color: '#dc2626' }} />
                      <span>{isEn ? 'Crucial Official Exam Traps (Lesson 1-3):' : 'فخاخ امتحانية وزارية حاسمة (الدرس 1-3):'}</span>
                    </div>
                    <div>• <strong>{isEn ? 'Recommenders Trap:' : 'فخ التوصية:'}</strong> {isEn ? 'Recommenders are PROBABILISTIC estimates; any option claiming "100% deterministic guarantee" is a FALSE distractor!' : 'نظم التوصية استدلال احتمالي؛ أي خيار يذكر "ضمان حتمي مؤكد 100%" هو خيار مضلل خاطئ تماماً!'}</div>
                    <div>• <strong>{isEn ? 'Clinical Trap:' : 'فخ القرار الطبي:'}</strong> {isEn ? 'AI is an assistive tool; autonomous clinical decisions without doctor verification violate official safety guidelines.' : 'الـ AI أداة مساعدة للطبيب؛ واعتماد التشخيص دون مراجعة الطبيب البشري مخالف للمنهج تماماً ويعرض للمساءلة.'}</div>
                  </div>

                </div>

                {/* --------------------------------------------------------- */}
                {/* COLUMN 2: خصائص الذكاء الاصطناعي واحتياطات الاستخدام       */}
                {/* --------------------------------------------------------- */}
                <div style={{ border: '1.5px solid #93c5fd', borderRadius: '6px', padding: '6px 7px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  
                  {/* Top Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #0284c7', paddingBottom: '3px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span style={{ backgroundColor: '#0284c7', color: '#fff', fontSize: '9px', fontWeight: 900, padding: '1px 6px', borderRadius: '3px' }}>1-3</span>
                      <strong style={{ fontSize: '10.5px', color: '#0369a1' }}>{isEn ? 'Capabilities vs. Demands for Caution' : 'خصائص AI واحتياطات الاستخدام'}</strong>
                    </div>
                    <span style={{ fontSize: '7.8px', color: '#0369a1', fontWeight: 800, backgroundColor: '#e0f2fe', padding: '1px 5px', borderRadius: '3px' }}>{isEn ? '3 Strengths vs 7 Risks' : '3 ركائز قوة مقابل 7 محاذير'}</span>
                  </div>

                  {/* Card 1: What AI Excels At (The 3 Core Pillars) */}
                  <div style={{ backgroundColor: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: '4px', padding: '4.5px 6px', fontSize: '7.6px', lineHeight: 1.35 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#166534', fontWeight: 900, marginBottom: '2.5px' }}>
                      <Icon name="check_circle" size={13} style={{ color: '#16a34a' }} />
                      <span>{isEn ? 'What AI Excels At (The 3 Core Pillars):' : 'ما يبرع فيه الذكاء الاصطناعي (الركائز الثلاث):'}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5px', color: '#14532d' }}>
                      <div>• <strong>1. {isEn ? 'Big Data Pattern Discovery:' : 'اكتشاف وتصنيف الأنماط في البيانات الضخمة:'}</strong> {isEn ? 'Uncovering hidden trends across complex data (e.g. classifying thousands of photos or spotting anomalies).' : 'ملاحظة الأنماط المخفية وتصنيفها بدقة وسط مليارات البيانات غير المنظمة (كالتمييز بين آلاف صور القطط والكلاب 🐱🐶 أو كشف الأورام).'}</div>
                      <div>• <strong>2. {isEn ? 'Multimodal Perception & Creation:' : 'الإدراك وتوليد المحتوى متعدد الوسائط (GenAI):'}</strong> {isEn ? 'Accurately processing digital senses (images, audio, text) and generating brand-new creative content.' : 'معالجة الإشارات الرقمية (صور، أصوات، نصوص)، وتوليد تصميمات وأكواد وصياغات جديدة ومبتكرة كلياً.'}</div>
                      <div>• <strong>3. {isEn ? 'Probabilistic Inference & Fast Analytics:' : 'الاستدلال الاحتمالي والتحليل التنبؤي السريع:'}</strong> {isEn ? 'Drawing rapid probabilistic conclusions in dynamic changing environments based on historical data.' : 'استخلاص استنتاجات ترجيحية وسريعة في بيئات معقدة ومتغيرة لحظياً بناءً على السلوك السابق.'}</div>
                    </div>
                  </div>

                  {/* Card 2: What Demands Caution & Oversight (The 7 Big Risks) */}
                  <div style={{ backgroundColor: '#fef2f2', border: '1.5px solid #fca5a5', borderRadius: '4px', padding: '4.5px 6px', fontSize: '7.4px', lineHeight: 1.3 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#991b1b', fontWeight: 900, marginBottom: '2.5px' }}>
                      <Icon name="security_update_warning" size={13} style={{ color: '#dc2626' }} />
                      <span>{isEn ? 'What Demands Caution & Human Oversight (The 7 Risks):' : 'ما يتطلب الحذر والرقابة البشرية الحتمية (المحاذير السبعة):'}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8px', color: '#7f1d1d' }}>
                      <div>• <strong>1. {isEn ? 'Ethical Judgments & Bias:' : 'الأحكام الأخلاقية والتحيز:'}</strong> {isEn ? 'Unfair discrimination if trained on skewed historical datasets.' : 'الآلة تفتقر للضمير؛ خطر إصدار أحكام تمييزية جائرة إذا كانت بيانات التدريب منحازة.'}</div>
                      <div>• <strong>2. {isEn ? 'Privacy & Sensitive Records:' : 'الخصوصية والبيانات الحساسة:'}</strong> {isEn ? 'Safeguarding personal secrets and preventing unauthorized surveillance.' : 'صون سرية السجلات الشخصية ومنع الاختراق والتتبع والمراقبة غير المصرح بها.'}</div>
                      <div>• <strong>3. {isEn ? 'High-Stakes Decisions:' : 'القرارات مصيرية الأثر (قضاء، طب):'}</strong> {isEn ? 'Assigning judicial/medical choices raises liability dilemma.' : 'تفويض الآلة بقرارات تمس حياة وحرية البشر يثير أزمة جنائية في تحديد المسؤولية.'}</div>
                      <div>• <strong>4. {isEn ? 'Data Imbalance Impact:' : 'خلل ونقص بيانات التدريب:'}</strong> {isEn ? 'Lack of population diversity directly degrades output accuracy.' : 'غياب التنوع في البيانات يقود حتماً لنتائج مشوهة؛ فالنظام لا يعلم أكثر مما دربته عليه.'}</div>
                      <div>• <strong>5. {isEn ? 'AI Hallucination:' : 'هلوسة الذكاء الاصطناعي:'}</strong> {isEn ? 'Generating false fabrications with confident and convincing eloquence.' : 'توليد معلومات وأحكام وهمية كاذبة وتقديمها بنبرة لغوية واثقة ومقنعة جداً.'}</div>
                      <div>• <strong>6. {isEn ? 'Intellectual Property:' : 'الملكية الفكرية وحقوق المؤلف:'}</strong> {isEn ? 'Training models on copyrighted artwork and code without consent.' : 'تدريب النماذج على كتب ولوحات وأكواد محمية دون إذن أو ترخيص أصحابها.'}</div>
                      <div>• <strong>7. {isEn ? 'The Black Box Problem:' : 'معضلة الصندوق الأسود (Black Box):'}</strong> {isEn ? 'Internal mathematical operations remain opaque and unexplained.' : 'العمليات الرياضية بالداخل معتمة وغير مفهومة للبشر وتمنع التدقيق والطعن.'}</div>
                    </div>
                  </div>

                  {/* Card 3: Crucial Golden Rule in Thanawya Exams */}
                  <div style={{ backgroundColor: '#fffbeb', border: '1.5px solid #fde68a', borderRadius: '4px', padding: '4.5px 6px', fontSize: '7.7px', color: '#92400e', lineHeight: 1.35 }}>
                    <div style={{ fontWeight: 900, color: '#b45309', marginBottom: '1.5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Icon name="stars" size={13} style={{ color: '#d97706' }} />
                      <span>{isEn ? 'Golden Rule in Thanawya Exams:' : 'القاعدة الذهبية الحاكمة في امتحانات الوزارة:'}</span>
                    </div>
                    <span>
                      {isEn
                        ? 'Ethical judgments, Fairness, Privacy, and Accountability fall strictly under "Demands Caution". NEVER choose them under "What AI Excels At"!'
                        : 'مفاهيم "الأحكام الأخلاقية"، و"العدالة"، و"حماية الخصوصية"، و"المساءلة القانونية" تقع جميعاً وحصراً تحت بند "ما يتطلب الحذر والرقابة"؛ وإياك أن تختار أياً منها كشيء "يبرع فيه الذكاء الاصطناعي"!'}
                    </span>
                  </div>

                  {/* Card 4: Human-in-the-Loop & Rare Diseases Scenarios */}
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #bfdbfe', borderRadius: '4px', padding: '4.5px 6px', fontSize: '7.6px', lineHeight: 1.35 }}>
                    <div style={{ fontWeight: 900, color: '#0369a1', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Icon name="verified_user" size={13} style={{ color: '#0284c7' }} />
                      <span>{isEn ? 'Human-in-the-Loop & Rare Scenarios (Exam Q16):' : 'حتمية الرقابة البشرية وندرة البيانات (سؤال 16):'}</span>
                    </div>
                    <div style={{ color: '#1e293b' }}>
                      • <strong>{isEn ? 'Human-in-the-Loop:' : 'الرقابة البشرية (Human-in-the-Loop):'} </strong> {isEn ? 'In clinics and courts, AI is consultative; final decision and legal liability rest strictly on human doctors and judges.' : 'في التطبيقات الحيوية (المستشفيات، المحاكم)، الـ AI مستشار استئناسي مساعد؛ القرار والمسؤولية تقع حصراً على الطبيب والقاضي البشري.'}
                      <br />
                      • <strong>{isEn ? 'Rare Diseases (Data Scarcity):' : 'معضلة الحالات النادرة (Data Scarcity):'} </strong> {isEn ? 'Data scarcity on rare conditions reduces AI accuracy, mandating human clinical review.' : 'ندرة بيانات الأمراض النادرة تؤدي لانخفاض دقة النموذج الاحتمالي، مما يجعل الاعتماد والمراجعة الطبية البشرية إلزامية قطعية.'}
                    </div>
                  </div>

                </div>

                {/* --------------------------------------------------------- */}
                {/* COLUMN 3: التحيز الخوارزمي ولغز الصندوق الأسود (1-4)         */}
                {/* --------------------------------------------------------- */}
                <div style={{ border: '1.5px solid #fed7aa', borderRadius: '6px', padding: '6px 7px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  
                  {/* Top Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #d97706', paddingBottom: '3px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span style={{ backgroundColor: '#d97706', color: '#fff', fontSize: '9px', fontWeight: 900, padding: '1px 6px', borderRadius: '3px' }}>1-4</span>
                      <strong style={{ fontSize: '10.5px', color: '#92400e' }}>{isEn ? 'Algorithmic Bias & The Black Box' : 'التحيز الخوارزمي ولغز الصندوق الأسود'}</strong>
                    </div>
                    <span style={{ fontSize: '7.8px', color: '#92400e', fontWeight: 800, backgroundColor: '#fef3c7', padding: '1px 5px', borderRadius: '3px' }}>{isEn ? '3 Causes + Speed Trap + XAI' : 'الأسباب الثلاثة + فخ السرعة + XAI'}</span>
                  </div>

                  {/* Card 1: Official Definition of Algorithmic Bias */}
                  <div style={{ backgroundColor: '#fffbeb', border: '1.5px solid #fde68a', borderRadius: '4px', padding: '4.5px 6px', fontSize: '7.7px', color: '#78350f', lineHeight: 1.35 }}>
                    <div style={{ fontWeight: 900, color: '#b45309', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Icon name="gavel" size={13} style={{ color: '#d97706' }} />
                      <span>{isEn ? 'Official Definition of Algorithmic Bias:' : 'التعريف الوزاري المعتمد للتحيز الخوارزمي:'}</span>
                    </div>
                    <span>
                      {isEn
                        ? 'A systematic deviation or pattern in AI outputs that leads to unfair, harmful, or discriminatory results against a specific group, stemming from training data, system design, or human deployment context.'
                        : 'نمط أو انحراف منتظم وممنهج في مخرجات نظام الذكاء الاصطناعي يؤدي إلى نتائج غير عادلة أو تمييزية أو مجحفة بحق فئة معينة، ينشأ من بيانات التدريب، أو تصميم النظام، أو طريقة استخدامه وسياقه البشري.'}
                    </span>
                  </div>

                  {/* Card 2: 3 Root Causes of Algorithmic Bias (Q17 & Q18) */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '7.5px', lineHeight: 1.3 }}>
                    <div style={{ backgroundColor: '#ffffff', border: '1px solid #fed7aa', borderRadius: '3px', padding: '3.5px 5.5px' }}>
                      <strong style={{ color: '#b45309' }}>1. {isEn ? 'Training Data Skew (Data Bias): ' : 'بيانات التدريب (Training Data Skew): '}</strong>
                      <span style={{ color: '#1e293b' }}>
                        {isEn
                          ? 'Data Imbalance (e.g. 85% male faces causing high error rates on women) or Historical Bias (training on 30 years of male-only managerial resumes).'
                          : 'نقص التمثيل (Data Imbalance كـ 85% وجوه ذكور فتفشل مع الإناث) أو انعكاس ممارسات ماضية (سجلات 30 سنة لشركة استبعدت النساء فيتعلم الـ AI أن الذكورة شرط للترقية!).'}
                      </span>
                    </div>
                    <div style={{ backgroundColor: '#ffffff', border: '1px solid #fecaca', borderRadius: '3px', padding: '3.5px 5.5px' }}>
                      <strong style={{ color: '#dc2626' }}>2. {isEn ? 'Proxy Variables Flaws (Design): ' : 'المتغيرات البديلة (Proxy Variables): '}</strong>
                      <span style={{ color: '#1e293b' }}>
                        {isEn
                          ? 'Removing protected traits (gender/race), but using neutral proxies (Zip Code, school name) that secretly correlate with protected trait!'
                          : 'حذف السمة المحمية صراحة (كالرمز الديني أو الجنس)، لكن استخدام متغير محايد ظاهرياً (مثل الرمز البريدي Zip Code أو اسم المدرسة) يرتبط بها سراً؛ فيعيد إنتاج التمييز من الباب الخلفي!'}
                      </span>
                    </div>
                    <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '3px', padding: '3.5px 5.5px' }}>
                      <strong style={{ color: '#0369a1' }}>3. {isEn ? 'Deployment Context Misalignment: ' : 'سياق واستخدام النظام (Deployment Context): '}</strong>
                      <span style={{ color: '#1e293b' }}>
                        {isEn
                          ? 'Deploying a model trained in wealthy Western schools on rural students without calibration, or using it for a different purpose than designed.'
                          : 'تشغيل خوارزمية تم تدريبها في بيئة غربية ثرية لتقييم طلاب في بيئة ريفية دون معايرة الفروق الثقافية، أو استخدام النظام في غرض يختلف عن الغرض الذي صُمم من أجله.'}
                      </span>
                    </div>
                  </div>

                  {/* Card 3: The Famous Speed Trap (Exam Try 2) */}
                  <div style={{ backgroundColor: '#fef2f2', border: '1.5px solid #fecaca', borderRadius: '4px', padding: '4.5px 6px', fontSize: '7.6px', color: '#991b1b', lineHeight: 1.35 }}>
                    <div style={{ fontWeight: 900, marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Icon name="bolt" size={13} style={{ color: '#dc2626' }} />
                      <span>{isEn ? 'The Ultimate Speed Trap (Exam Try 2):' : 'أشهر وأخطر سؤال وزاري (فخ السرعة ومور - Try 2):'}</span>
                    </div>
                    <span>
                      {isEn
                        ? 'Computer processing speed, slow processors, or Moore’s Law are NEVER causes of algorithmic bias; speed only affects execution latency!'
                        : 'بطء سرعة معالجة الحاسوب (Processing Speed) أو بطء المعالج أو قانون مور "ليست سبباً على الإطلاق لنشوء التحيز الخوارزمي"؛ فالسرعة تؤثر على زمن إخراج النتائج فقط (Latency) ولا علاقة لها بعدالة القرار!'}
                    </span>
                  </div>

                  {/* Card 4: Black Box vs Explainable AI (XAI) */}
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #bfdbfe', borderRadius: '4px', padding: '4.5px 6px', fontSize: '7.6px', lineHeight: 1.35 }}>
                    <div style={{ fontWeight: 900, color: '#0f172a', marginBottom: '2.5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Icon name="visibility" size={13} style={{ color: '#2563eb' }} />
                      <span>{isEn ? 'Black Box vs. Explainable AI (XAI):' : 'الصندوق الأسود المعتم VS الذكاء المفسر (XAI):'}</span>
                    </div>
                    <div style={{ color: '#1e293b' }}>
                      • <strong>{isEn ? 'Opaque Black Box:' : 'الصندوق الأسود المعتم:'} </strong> {isEn ? 'Inputs enter and decisions exit with 0 logical explanations; rejected in high-stakes judicial/medical choices.' : 'المدخلات تدخل والقرار يخرج دون إبداء أسباب منطقية أو مبررات رياضية مفهومة؛ مرفوض في القرارات المصيرية.'}
                      <br />
                      • <strong>{isEn ? 'Explainable AI (XAI):' : 'الذكاء المفسر (XAI):'} </strong> {isEn ? 'Reveals factor weights (e.g. 70% debt, 30% income) enabling human review and legal appeal.' : 'يكشف أوزان العوامل ونسب التأثير (70% ديون، 30% دخل) لتمكين المراجعة البشرية والثقة وحق الطعن والاستئناف.'}
                    </div>
                  </div>

                  {/* Card 5: Facial Recognition Limits in Public Places (Q19) */}
                  <div style={{ backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '4px 6px', fontSize: '7.4px', lineHeight: 1.3 }}>
                    <strong style={{ color: '#0369a1' }}>{isEn ? 'Facial Recognition Boundaries (Q19): ' : 'حدود التعرف على الوجه في الأماكن العامة (سؤال 19): '}</strong>
                    <span style={{ color: '#1e293b' }}>
                      {isEn
                        ? 'Permissible for real-time safety at entry gates; storing biometric databases and tracking public street movements without consent is strictly illegal.'
                        : 'مقبول ومصرح به للأمان اللحظي ببوابات العبور؛ لكن تخزين بصمات الوجوه وتتبع مسارات الأفراد بالشوارع العامة دون إذن انتهاك صارخ للخصوصية.'}
                    </span>
                  </div>

                </div>

                {/* --------------------------------------------------------- */}
                {/* COLUMN 4: المبادئ الأربعة ومعمل المقالي المركب              */}
                {/* --------------------------------------------------------- */}
                <div style={{ border: '1.5px solid #c7d2fe', borderRadius: '6px', padding: '6px 7px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  
                  {/* Top Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #4338ca', paddingBottom: '3px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span style={{ backgroundColor: '#4338ca', color: '#fff', fontSize: '9px', fontWeight: 900, padding: '1px 6px', borderRadius: '3px' }}>1-4</span>
                      <strong style={{ fontSize: '10.5px', color: '#312e81' }}>{isEn ? '4 Principles & Master Scenarios' : 'المبادئ الأربعة ومعمل المقالي'}</strong>
                    </div>
                    <span style={{ fontSize: '7.8px', color: '#312e81', fontWeight: 800, backgroundColor: '#e0e7ff', padding: '1px 5px', borderRadius: '3px' }}>{isEn ? '4 Pillars & 6-Mark Essay Lab' : 'المبادئ الأربعة والمسألة المقالية'}</span>
                  </div>

                  {/* Card 1: The 4 Ethical Pillars 2x2 Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5px', fontSize: '7.4px', lineHeight: 1.3 }}>
                    <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '3px', padding: '3.5px 5px' }}>
                      <strong style={{ color: '#1e40af', display: 'block' }}>1. {isEn ? 'Fairness (العدالة)' : 'العدالة (Fairness)'}:</strong>
                      <span>{isEn ? 'No unfair discrimination; equal opportunity in jobs & loans.' : 'منع التمييز وتكافؤ الفرص في التوظيف والقروض دون انحياز لعرق أو جنس.'}</span>
                    </div>
                    <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '3px', padding: '3.5px 5px' }}>
                      <strong style={{ color: '#166534', display: 'block' }}>2. {isEn ? 'Transparency (الشفافية)' : 'الشفافية (Transparency)'}:</strong>
                      <span>{isEn ? 'Disclose AI presence and limits (insufficient alone without XAI!).' : 'إعلام المستخدم بوجود AI وحدوده (لا تكفي وحدها لحل التحيز دون XAI!).'}</span>
                    </div>
                    <div style={{ backgroundColor: '#faf5ff', border: '1px solid #e9d5ff', borderRadius: '3px', padding: '3.5px 5px' }}>
                      <strong style={{ color: '#6b21a8', display: 'block' }}>3. {isEn ? 'Privacy (الخصوصية)' : 'الخصوصية (Privacy)'}:</strong>
                      <span>{isEn ? 'Confidentiality, encryption & Data Minimization.' : 'صون السرية، التشفير، ومبدأ الحد الأدنى لجمع البيانات (Minimization).'}</span>
                    </div>
                    <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '3px', padding: '3.5px 5px' }}>
                      <strong style={{ color: '#991b1b', display: 'block' }}>4. {isEn ? 'Accountability (المساءلة)' : 'المساءلة (Accountability)'}:</strong>
                      <span>{isEn ? 'Who faces legal liability & damages in court (strictly human).' : 'من يُحاسَب قانونياً ويدفع التعويض المالي (على البشر حتماً).'}</span>
                    </div>
                  </div>

                  {/* Card 2: Crucial 4th Pillar Traps */}
                  <div style={{ backgroundColor: '#fffbeb', border: '1.5px solid #fde68a', borderRadius: '4px', padding: '4px 6px', fontSize: '7.5px', color: '#92400e', lineHeight: 1.35 }}>
                    <div style={{ fontWeight: 900, color: '#b45309', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Icon name="gavel" size={12} style={{ color: '#d97706' }} />
                      <span>{isEn ? 'Crucial 4th Pillar Exam Traps:' : 'فخاخ المبدأ الرابع الوزارية الحاسمة:'}</span>
                    </div>
                    <div>• <strong>{isEn ? 'Official Name Trap:' : 'فخ التسمية الرسمية:'} </strong> {isEn ? 'Official 4th pillar is "Accountability" (NOT Responsibility).' : 'المبدأ الرابع المعتمد رسمياً في كتاب الوزارة هو "المساءلة (Accountability)" وليس "المسؤولية".'}</div>
                    <div>• <strong>{isEn ? 'Meaning Trap:' : 'فخ المفهوم والهدف:'} </strong> {isEn ? 'Accountability means who faces legal punishment & damages; NOT explaining decisions (that is XAI)!' : 'المساءلة تعني "من يُعاقَب قانونياً ويدفع التعويض المالي"؛ وليست "شرح وتفسير القرار" (تفسير القرار هو XAI)!'}</div>
                  </div>

                  {/* Card 3: Responsibility Distribution across 3 Stakeholders (Q22) */}
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '4.5px 6px', fontSize: '7.4px', lineHeight: 1.3 }}>
                    <strong style={{ color: '#4338ca', display: 'block', marginBottom: '2px' }}>{isEn ? 'Responsibility Distribution (3 Roles - Q22):' : 'توزيع المسؤولية بين الأطراف الثلاثة (سؤال 22):'}</strong>
                    <div style={{ color: '#1e293b' }}>
                      • <strong>{isEn ? 'Developer:' : 'المطور:'} </strong> {isEn ? 'Code quality, data auditing, safety mechanisms & XAI.' : 'جودة الكود، فحص وتدقيق بيانات التدريب، صمامات الأمان، وتضمين آليات XAI.'}
                      <br />
                      • <strong>{isEn ? 'Company / Operator:' : 'الشركة المشغلة:'} </strong> {isEn ? 'Usage policies, staff training, and continuous human oversight.' : 'سياسات الاستخدام العادل، تدريب الموظفين، وضمان الإشراف البشري وتوفير بدائل.'}
                      <br />
                      • <strong>{isEn ? 'User:' : 'المستخدم:'} </strong> {isEn ? 'Verifying outputs; refraining from blind delegation on critical decisions.' : 'التحقق من صحة النتائج، وعدم تفويض القرارات الحيوية للآلة بشكل أعمى.'}
                    </div>
                  </div>

                  {/* Card 4: Master Scenarios Lab: Q31-Q34 (معمل تفكيك أسئلة المقالي المركبة 6 درجات) */}
                  <div style={{ backgroundColor: '#0f172a', color: '#ffffff', borderRadius: '4px', padding: '5px 7px', display: 'flex', flexDirection: 'column', gap: '2.5px' }}>
                    <div style={{ fontSize: '8px', fontWeight: 900, color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '4px', borderBottom: '1px solid #334155', paddingBottom: '2px' }}>
                      <Icon name="assignment" size={13} style={{ color: '#38bdf8' }} />
                      <span>{isEn ? 'Deconstructing Essay Questions (Q31-36 - 6 Marks):' : 'معمل تفكيك أسئلة المقالي ودراسات الحالة (أسئلة 31 إلى 36 - 6 درجات):'}</span>
                    </div>

                    <div style={{ fontSize: '7.2px', lineHeight: 1.3, backgroundColor: '#1e293b', padding: '2.5px 5px', borderRadius: '2px' }}>
                      <strong style={{ color: '#7dd3fc' }}>1. {isEn ? 'Autonomous Car (Q28 & 31): ' : 'السيارة ذاتية القيادة (سؤال 28 & 31): '}</strong>
                      <span>{isEn ? 'Edge (instant braking) + Cloud (journey logs) + Tracking passengers without consent is a Privacy issue + Liability on automaker/safety driver.' : 'Edge (فرملة فورية) + Cloud (سجلات رحلات) + جمع مسار الركاب يثير قضية خصوصية مستقلة + المساءلة القانونية على الشركة المصنعة وسائق الأمان.'}</span>
                    </div>

                    <div style={{ fontSize: '7.2px', lineHeight: 1.3, backgroundColor: '#1e293b', padding: '2.5px 5px', borderRadius: '2px' }}>
                      <strong style={{ color: '#7dd3fc' }}>2. {isEn ? 'Hospital AI (Q16 & 32): ' : 'المستشفى والتشخيص الطبي (سؤال 16 & 32): '}</strong>
                      <span>{isEn ? 'DL (scan pattern detection) + Rare disease data scarcity + Probabilistic output + Doctor verification mandatory before final diagnosis + XAI.' : 'DL (كشف أنماط الأشعة) + ندرة بيانات الأمراض النادرة + استدلال احتمالي + المراجعة الطبية البشرية إلزامية قبل إصدار التشخيص النهائي + XAI.'}</span>
                    </div>

                    <div style={{ fontSize: '7.2px', lineHeight: 1.3, backgroundColor: '#1e293b', padding: '2.5px 5px', borderRadius: '2px' }}>
                      <strong style={{ color: '#7dd3fc' }}>3. {isEn ? 'Hiring Filter (Q17, 18 & 33): ' : 'نظام فرز التوظيف والتحيز (سؤال 17، 18 & 33): '}</strong>
                      <span>{isEn ? 'Historical data bias + Proxy variables (zip code) + Transparency alone insufficient without XAI to explain rejection reasons + Human oversight.' : 'تحيز بيانات تاريخية + متغيرات بديلة (رمز بريدي) + الشفافية لا تكفي وحدها بدون XAI لتفسير أسباب الرفض + إشراف بشري مستمر.'}</span>
                    </div>

                    <div style={{ fontSize: '7.2px', lineHeight: 1.3, backgroundColor: '#1e293b', padding: '2.5px 5px', borderRadius: '2px' }}>
                      <strong style={{ color: '#7dd3fc' }}>4. {isEn ? 'School Attendance Gate (Q19 & 34): ' : 'كاميرات بوابة المدرسة (سؤال 19 & 34): '}</strong>
                      <span>{isEn ? 'Fast attendance (practical benefit) vs Privacy concern (biometrics of minors) + If system errs, school administration is liable for lack of backup.' : 'فائدة عملية في سرعة رصد الحضور مقابل قلق الخصوصية لحفظ بيانات بيومترية لقاصرين + إذا أخطأت الكاميرا فالمسؤولية على إدارة المدرسة لغياب بديل بشري.'}</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Bottom Footer Strip */}
            <div style={{
              borderTop: '1px solid #e2e8f0',
              paddingTop: '3px',
              marginTop: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '8px',
              color: '#64748b'
            }}>
              <div>
                <strong>{data.edition}</strong> • {data.unitTitle}
              </div>
              <div>
                {isEn ? 'Eng. Mohamed Shamel — The Mentor Series' : 'سلسلة المُرشد في الذكاء الاصطناعي — م. محمد شامل'} • A4 Landscape Flyer Edition
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
