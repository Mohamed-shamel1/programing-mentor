import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext.js';
import { unit01MasterSummaryData } from '../../../data/unit01MasterSummaryData.js';
import { unit01MasterSummaryDataEn } from '../../../data/unit01MasterSummaryDataEn.js';
import Icon from '../../ui/Icon.jsx';
import Sheet1TechFoundations from './Sheet1TechFoundations.jsx';
import Sheet2EthicsApplications from './Sheet2EthicsApplications.jsx';
import './styles/unitSummary.css';

/**
 * UnitMasterSummaryLandscape
 * 2-Page A4 Landscape Blueprint & Visual Concept Poster for Unit 1
 * Modularized Architecture for Egyptian Thanawya Amma AI Curriculum
 */
export default function UnitMasterSummaryLandscape({ onBack }) {
  const { language, isRTL } = useLanguage();
  const isEn = language === 'en';

  const data = isEn ? unit01MasterSummaryDataEn : unit01MasterSummaryData;
  const [activeSheetView, setActiveSheetView] = useState('both');
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    document.body.classList.add('landscape-active');

    // Dynamic @page injection to ensure A4 Landscape overrides global print.css in document head
    const styleId = 'unit-summary-print-page-override';
    let styleEl = document.getElementById(styleId);
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = `
      @page {
        size: A4 landscape;
        margin: 0mm;
      }
      @page landscape-sheet {
        size: A4 landscape;
        margin: 0mm;
      }
    `;

    return () => {
      document.body.classList.remove('landscape-active');
      const el = document.getElementById(styleId);
      if (el) el.remove();
    };
  }, []);

  const { sheet1, sheet2 } = data;

  return (
    <div className="unit-master-summary-page">
      {/* Screen Only Top Presentation Toolbar */}
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
                gap: '5px',
                fontFamily: "'Cairo', sans-serif"
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
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: '0.5px'
              }}>
                A4 LANDSCAPE // 297mm × 210mm
              </span>
              <h1 style={{ fontSize: '13.5px', fontWeight: 800, margin: 0, color: '#f8fafc' }}>
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
              cursor: 'pointer',
              fontFamily: "'Cairo', sans-serif"
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
              cursor: 'pointer',
              fontFamily: "'Cairo', sans-serif"
            }}
          >
            {isEn ? 'Sheet 1 (Front: Lessons 1 & 2)' : 'الورقة 1 (الوجه: درس 1 و 2)'}
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
              cursor: 'pointer',
              fontFamily: "'Cairo', sans-serif"
            }}
          >
            {isEn ? 'Sheet 2 (Back: Lessons 3 & 4)' : 'الورقة 2 (الظهر: درس 3 و 4)'}
          </button>
        </div>

        {/* Right: Presentation Zoom & Print */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.7, parseFloat((z - 0.1).toFixed(1))))}
              style={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#fff', borderRadius: '4px', width: '26px', height: '26px', cursor: 'pointer', fontWeight: 'bold' }}
              title="Zoom out"
            >
              -
            </button>
            <span style={{ fontSize: '11px', color: '#cbd5e1', minWidth: '38px', textAlign: 'center', fontFamily: "'Outfit', sans-serif" }}>
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(1.4, parseFloat((z + 0.1).toFixed(1))))}
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
              boxShadow: '0 2px 8px rgba(22, 163, 74, 0.4)',
              fontFamily: "'Cairo', sans-serif"
            }}
          >
            <Icon name="print" size={16} />
            <span>{isEn ? 'Print A4 Landscape' : 'طباعة ورقة المفاهيم (A4 بالعرض)'}</span>
          </button>
        </div>
      </div>

      {/* Sheets Container */}
      <div
        className="sheets-print-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '35px',
          marginTop: '25px',
          padding: '0 10px'
        }}
      >
        {/* SHEET 1: TECH FOUNDATIONS & AI ARCHITECTURE */}
        {(activeSheetView === 'both' || activeSheetView === 'sheet1') && (
          <Sheet1TechFoundations
            sheet1={sheet1}
            data={data}
            isEn={isEn}
            isRTL={isRTL}
            zoomLevel={zoomLevel}
          />
        )}

        {/* SHEET 2: APPLICATIONS, ETHICS & SCENARIO LAB */}
        {(activeSheetView === 'both' || activeSheetView === 'sheet2') && (
          <Sheet2EthicsApplications
            sheet2={sheet2}
            data={data}
            isEn={isEn}
            isRTL={isRTL}
            zoomLevel={zoomLevel}
          />
        )}
      </div>
    </div>
  );
}
