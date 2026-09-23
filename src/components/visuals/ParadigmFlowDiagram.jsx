import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext.js';
import Icon from '../ui/Icon.jsx';

/**
 * ParadigmFlowDiagram
 * Visual interactive side-by-side comparison:
 * Traditional Programming Flow vs Machine Learning Paradigm Flow
 */
export default function ParadigmFlowDiagram() {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState('both'); // 'both', 'traditional', 'ml'

  return (
    <div className="paradigm-flow-diagram" style={{ margin: '6px 0' }}>
      {/* Mode Toggle Controls */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Icon name="swap_horiz" size={18} color="var(--color-cobalt-600)" />
          <span
            className="font-heading"
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'var(--color-navy-950)',
            }}
          >
            {isEn
              ? 'Dual Architecture Comparison: Traditional Coding vs Machine Learning'
              : 'مخطط التدفق المقارن: مسار البرمجة التقليدية مقابل مسار تعلم الآلة'}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '4px' }}>
          <button
            type="button"
            onClick={() => setActiveTab('both')}
            style={{
              padding: '2px 8px',
              fontSize: '10.5px',
              fontFamily: 'var(--font-heading)',
              borderRadius: '4px',
              border: activeTab === 'both' ? '1px solid var(--color-cobalt-600)' : '1px solid var(--color-neutral-300)',
              backgroundColor: activeTab === 'both' ? 'var(--color-cobalt-600)' : '#ffffff',
              color: activeTab === 'both' ? '#ffffff' : 'var(--color-navy-800)',
              cursor: 'pointer',
            }}
          >
            {isEn ? 'Side-by-Side' : 'المقارنة الكاملة'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('traditional')}
            style={{
              padding: '2px 8px',
              fontSize: '10.5px',
              fontFamily: 'var(--font-heading)',
              borderRadius: '4px',
              border: activeTab === 'traditional' ? '1px solid var(--color-navy-800)' : '1px solid var(--color-neutral-300)',
              backgroundColor: activeTab === 'traditional' ? 'var(--color-navy-800)' : '#ffffff',
              color: activeTab === 'traditional' ? '#ffffff' : 'var(--color-navy-800)',
              cursor: 'pointer',
            }}
          >
            {isEn ? 'Traditional' : 'التقليدية'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ml')}
            style={{
              padding: '2px 8px',
              fontSize: '10.5px',
              fontFamily: 'var(--font-heading)',
              borderRadius: '4px',
              border: activeTab === 'ml' ? '1px solid var(--color-teal-700)' : '1px solid var(--color-neutral-300)',
              backgroundColor: activeTab === 'ml' ? 'var(--color-teal-700)' : '#ffffff',
              color: activeTab === 'ml' ? '#ffffff' : 'var(--color-navy-800)',
              cursor: 'pointer',
            }}
          >
            {isEn ? 'Machine Learning' : 'تعلم الآلة'}
          </button>
        </div>
      </div>

      {/* Side-by-Side Diagram Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: activeTab === 'both' ? '1fr 1fr' : '1fr',
          gap: '8px',
        }}
      >
        {/* Track 1: Traditional Programming Flow */}
        {(activeTab === 'both' || activeTab === 'traditional') && (
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1.5px solid var(--color-navy-200)',
              borderTop: '3px solid var(--color-navy-800)',
              borderRadius: 'var(--radius-sm)',
              padding: '8px 10px',
              boxShadow: 'var(--shadow-xs)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span
                  style={{
                    backgroundColor: 'var(--color-navy-100)',
                    color: 'var(--color-navy-900)',
                    padding: '1px 6px',
                    borderRadius: '3px',
                    fontSize: '10px',
                    fontFamily: 'var(--font-code)',
                    fontWeight: 'bold',
                  }}
                >
                  PATTERN A
                </span>
                <strong style={{ fontSize: '12px', fontFamily: 'var(--font-heading)', color: 'var(--color-navy-950)' }}>
                  {isEn ? 'Traditional Programming' : 'البرمجة التقليدية (Explicit Coding)'}
                </strong>
              </div>
              <span style={{ fontSize: '10px', color: 'var(--color-neutral-500)', fontFamily: 'var(--font-code)' }}>
                {isEn ? 'RULES IN ➔ ANSWERS OUT' : 'القواعد في المدخلات ← استخراج النتائج'}
              </span>
            </div>

            {/* Visual Flow Blocks */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '4px',
                padding: '8px 4px',
                backgroundColor: 'var(--color-navy-50)',
                borderRadius: 'var(--radius-xs)',
                marginBottom: '8px',
              }}
            >
              {/* Inputs Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: '1.1' }}>
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-cobalt-200)',
                    borderRadius: '4px',
                    padding: '4px 6px',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-2xs)',
                  }}
                >
                  <span style={{ fontSize: '9px', color: 'var(--color-cobalt-700)', fontWeight: 'bold', display: 'block' }}>
                    {isEn ? 'Input 1' : 'المدخل 1'}
                  </span>
                  <strong style={{ fontSize: '11px', color: 'var(--color-navy-950)' }}>
                    {isEn ? 'Data (Input)' : 'البيانات (Data)'}
                  </strong>
                </div>

                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #f59e0b',
                    borderRadius: '4px',
                    padding: '4px 6px',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-2xs)',
                  }}
                >
                  <span style={{ fontSize: '9px', color: '#b45309', fontWeight: 'bold', display: 'block' }}>
                    {isEn ? 'Input 2 (Human)' : 'المدخل 2 (جهد بشري)'}
                  </span>
                  <strong style={{ fontSize: '11px', color: '#78350f' }}>
                    {isEn ? 'Rules (Code)' : 'القواعد اليدوية (Rules)'}
                  </strong>
                </div>
              </div>

              {/* Arrow 1 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', color: 'var(--color-navy-700)', fontWeight: 'bold' }}>
                  {isEn ? '➔' : '←'}
                </span>
              </div>

              {/* Processing Engine */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  border: '1.5px solid #475569',
                  color: '#ffffff',
                  borderRadius: '6px',
                  padding: '8px 6px',
                  textAlign: 'center',
                  flex: '1.2',
                  boxShadow: '0 2px 6px rgba(15, 23, 42, 0.25)',
                }}
              >
                <Icon name="memory" size={19} color="#38bdf8" />
                <div style={{ fontSize: '11px', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
                  {isEn ? 'CPU Execution' : 'المعالج الحاسوبي'}
                </div>
                <div style={{ fontSize: '9px', color: '#cbd5e1', marginTop: '2px', fontWeight: '600' }}>
                  {isEn ? 'Executes hard logic' : 'تنفيذ حرفي صارم'}
                </div>
              </div>

              {/* Arrow 2 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', color: 'var(--color-navy-700)', fontWeight: 'bold' }}>
                  {isEn ? '➔' : '←'}
                </span>
              </div>

              {/* Output */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1.5px solid var(--color-navy-400)',
                  borderRadius: '4px',
                  padding: '6px 8px',
                  textAlign: 'center',
                  flex: '1',
                  boxShadow: 'var(--shadow-2xs)',
                }}
              >
                <span style={{ fontSize: '9px', color: 'var(--color-navy-600)', fontWeight: 'bold', display: 'block' }}>
                  {isEn ? 'Output' : 'المخرج'}
                </span>
                <strong style={{ fontSize: '11px', color: 'var(--color-navy-950)' }}>
                  {isEn ? 'Answers / Decisions' : 'الإجابات والنتائج'}
                </strong>
              </div>
            </div>

            {/* Critique strip */}
            <div
              style={{
                fontSize: '10.5px',
                color: '#991b1b',
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                padding: '4px 8px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Icon name="error" size={14} color="#dc2626" />
              <span>
                {isEn
                  ? 'Limitation: If a situation arises not anticipated in rules, the system fails completely.'
                  : 'عنق الزجاجة: إذا واجه النظام حالة واحدة لم يكتب لها المبرمج شرطاً يدوياً (If-Else)، ينهار أو يعطي خطأ.'}
              </span>
            </div>
          </div>
        )}

        {/* Track 2: Machine Learning Flow */}
        {(activeTab === 'both' || activeTab === 'ml') && (
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1.5px solid var(--color-teal-200)',
              borderTop: '3px solid var(--color-teal-600)',
              borderRadius: 'var(--radius-sm)',
              padding: '8px 10px',
              boxShadow: 'var(--shadow-xs)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span
                  style={{
                    backgroundColor: 'var(--color-teal-100)',
                    color: 'var(--color-teal-800)',
                    padding: '1px 6px',
                    borderRadius: '3px',
                    fontSize: '10px',
                    fontFamily: 'var(--font-code)',
                    fontWeight: 'bold',
                  }}
                >
                  PATTERN B
                </span>
                <strong style={{ fontSize: '12px', fontFamily: 'var(--font-heading)', color: 'var(--color-teal-900)' }}>
                  {isEn ? 'Machine Learning Paradigm' : 'نمط تعلم الآلة (Autonomous Learning)'}
                </strong>
              </div>
              <span style={{ fontSize: '10px', color: 'var(--color-teal-700)', fontFamily: 'var(--font-code)' }}>
                {isEn ? 'ANSWERS IN ➔ RULES OUT' : 'النتائج في المدخلات ← استخلاص القواعد'}
              </span>
            </div>

            {/* Visual Flow Blocks */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '4px',
                padding: '8px 4px',
                backgroundColor: 'var(--color-teal-50)',
                borderRadius: 'var(--radius-xs)',
                marginBottom: '8px',
              }}
            >
              {/* Inputs Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: '1.1' }}>
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-teal-200)',
                    borderRadius: '4px',
                    padding: '4px 6px',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-2xs)',
                  }}
                >
                  <span style={{ fontSize: '9px', color: 'var(--color-teal-700)', fontWeight: 'bold', display: 'block' }}>
                    {isEn ? 'Input 1' : 'المدخل 1'}
                  </span>
                  <strong style={{ fontSize: '11px', color: 'var(--color-navy-950)' }}>
                    {isEn ? 'Data (Inputs)' : 'البيانات (Data)'}
                  </strong>
                </div>

                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-cobalt-200)',
                    borderRadius: '4px',
                    padding: '4px 6px',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-2xs)',
                  }}
                >
                  <span style={{ fontSize: '9px', color: 'var(--color-cobalt-700)', fontWeight: 'bold', display: 'block' }}>
                    {isEn ? 'Input 2 (Historical)' : 'المدخل 2 (أمثلة سابقة)'}
                  </span>
                  <strong style={{ fontSize: '11px', color: 'var(--color-cobalt-900)' }}>
                    {isEn ? 'Answers (Labels)' : 'الإجابات السابقة (Answers)'}
                  </strong>
                </div>
              </div>

              {/* Arrow 1 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', color: 'var(--color-teal-700)', fontWeight: 'bold' }}>
                  {isEn ? '➔' : '←'}
                </span>
              </div>

              {/* Processing Engine (Crystal Clear High-Contrast Dark Teal Card) */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #0f766e 0%, #115e59 100%)',
                  border: '1.5px solid #14b8a6',
                  color: '#ffffff',
                  borderRadius: '6px',
                  padding: '8px 6px',
                  textAlign: 'center',
                  flex: '1.2',
                  boxShadow: '0 2px 6px rgba(15, 118, 110, 0.25)',
                }}
              >
                <Icon name="psychology" size={19} color="#5eead4" />
                <div style={{ fontSize: '11px', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
                  {isEn ? 'ML Training' : 'خوارزمية التدريب'}
                </div>
                <div style={{ fontSize: '9px', color: '#ccfbf1', marginTop: '2px', fontWeight: '600' }}>
                  {isEn ? 'Extracts patterns' : 'استخلاص رياضي ذاتي'}
                </div>
              </div>

              {/* Arrow 2 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', color: 'var(--color-teal-700)', fontWeight: 'bold' }}>
                  {isEn ? '➔' : '←'}
                </span>
              </div>

              {/* Output: The Learned Rules / Model */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '2px solid var(--color-teal-600)',
                  borderRadius: '4px',
                  padding: '6px 8px',
                  textAlign: 'center',
                  flex: '1',
                  boxShadow: 'var(--shadow-2xs)',
                }}
              >
                <span style={{ fontSize: '9px', color: 'var(--color-teal-700)', fontWeight: 'bold', display: 'block' }}>
                  {isEn ? 'Output (Learned)' : 'المخرج المكتسب'}
                </span>
                <strong style={{ fontSize: '11px', color: 'var(--color-teal-900)' }}>
                  {isEn ? 'Rules / Model' : 'النموذج والقواعد (Model)'}
                </strong>
              </div>
            </div>

            {/* Strength strip */}
            <div
              style={{
                fontSize: '10.5px',
                color: 'var(--color-teal-900)',
                backgroundColor: 'var(--color-teal-50)',
                border: '1px solid var(--color-teal-200)',
                padding: '4px 8px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Icon name="check_circle" size={14} color="var(--color-teal-600)" />
              <span>
                {isEn
                  ? 'Advantage: The model generalizes to recognize completely new, unseen data accurately.'
                  : 'القوة النوعية: قدرة النموذج على التعميم (Generalization) لمعالجة بيانات جديدة لم يرها من قبل.'}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
