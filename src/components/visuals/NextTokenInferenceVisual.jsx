import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext.js';
import Icon from '../ui/Icon.jsx';

/**
 * NextTokenInferenceVisual
 * Interactive demonstration of Probabilistic Next-Token Inference:
 * Shows how Large Language Models generate text by predicting candidate token probabilities,
 * explaining why hallucination occurs naturally when statistical likelihood diverges from factual reality.
 */
export default function NextTokenInferenceVisual() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const [activeScenario, setActiveScenario] = useState('factual'); // 'factual' or 'hallucination'

  const factualData = {
    promptAr: 'عاصمة جمهورية مصر العربية وأكبر مدنها هي',
    promptEn: 'The historic capital of Egypt and its largest city is',
    candidates: [
      { tokenAr: 'القاهرة', tokenEn: 'Cairo', prob: 97.4, isFact: true },
      { tokenAr: 'الإسكندرية', tokenEn: 'Alexandria', prob: 1.6, isFact: false },
      { tokenAr: 'مدينة', tokenEn: 'a city', prob: 0.7, isFact: false },
      { tokenAr: 'الجيزة', tokenEn: 'Giza', prob: 0.3, isFact: false },
    ],
    verdictAr: 'في النصوص الشائعة جداً، تتطابق الاحتمالية الإحصائية العالية (97.4%) مع الحقيقة الواقعية بدقة.',
    verdictEn: 'In high-frequency corpus text, peak statistical probability (97.4%) aligns cleanly with factual reality.',
  };

  const hallucinationData = {
    promptAr: 'في محكمة نيويورك 2023، السابقة القضائية الشهيرة في قانون الطيران هي قضية',
    promptEn: 'In New York federal court 2023, the leading aviation precedent is the case of',
    candidates: [
      { tokenAr: 'فارغيز ضد أفيانكا (Varghese v. Avianca)', tokenEn: 'Varghese v. Avianca', prob: 48.2, isFact: false },
      { tokenAr: 'مارتينيز ضد خطوط الصين', tokenEn: 'Martinez v. Air China', prob: 31.5, isFact: false },
      { tokenAr: 'سميث ضد دلتا إيرلاينز', tokenEn: 'Smith v. Delta Airlines', prob: 14.1, isFact: false },
      { tokenAr: 'لا أعلم لعدم وجود مرجع رسمي', tokenEn: 'Unknown (No precedent exists)', prob: 6.2, isFact: true },
    ],
    verdictAr: 'سقطة الهلوسة: النموذج يختار الاسم الأكثر "رنيناً وقانونية" إحصائياً (48.2%) رغم أنه اختلاق ووهم تام (0% حقيقة)!',
    verdictEn: 'The Hallucination Trap: Model samples the statistically most "law-sounding" token (48.2%) despite it being 100% fabricated!',
  };

  const current = activeScenario === 'factual' ? factualData : hallucinationData;

  return (
    <div className="next-token-visual-container" style={{ margin: '4px 0' }}>
      {/* Header and Toggle */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          border: '1px solid var(--color-neutral-200)',
          borderRadius: 'var(--radius-xs)',
          padding: '4px 10px',
          marginBottom: '6px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Icon name="psychology_alt" size={17} color="var(--color-cobalt-600)" />
          <strong
            className="font-heading"
            style={{ fontSize: '11.5px', color: 'var(--color-navy-950)' }}
          >
            {isEn
              ? 'Probabilistic Next-Token Inference Engine'
              : 'محرك الاستدلال الاحتمالي للكلمة التالية (Next-Token)'}
          </strong>
        </div>

        <div style={{ display: 'flex', gap: '4px' }}>
          <button
            type="button"
            onClick={() => setActiveScenario('factual')}
            style={{
              padding: '2px 8px',
              fontSize: '10px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 'bold',
              borderRadius: '3px',
              border: activeScenario === 'factual' ? '1px solid var(--color-teal-600)' : '1px solid var(--color-neutral-300)',
              backgroundColor: activeScenario === 'factual' ? 'var(--color-teal-600)' : '#ffffff',
              color: activeScenario === 'factual' ? '#ffffff' : 'var(--color-navy-800)',
              cursor: 'pointer',
            }}
          >
            {isEn ? 'Scenario A: Common Fact' : 'الحالة 1: معلومة شائعة'}
          </button>
          <button
            type="button"
            onClick={() => setActiveScenario('hallucination')}
            style={{
              padding: '2px 8px',
              fontSize: '10px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 'bold',
              borderRadius: '3px',
              border: activeScenario === 'hallucination' ? '1px solid #dc2626' : '1px solid var(--color-neutral-300)',
              backgroundColor: activeScenario === 'hallucination' ? '#dc2626' : '#ffffff',
              color: activeScenario === 'hallucination' ? '#ffffff' : 'var(--color-navy-800)',
              cursor: 'pointer',
            }}
          >
            {isEn ? 'Scenario B: Hallucination Trap' : 'الحالة 2: فخ الهلوسة القضائية'}
          </button>
        </div>
      </div>

      {/* Main Interactive Box */}
      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1.5px solid var(--color-navy-200)',
          borderRadius: 'var(--radius-sm)',
          padding: '8px 10px',
          boxShadow: 'var(--shadow-2xs)',
        }}
      >
        {/* The Prompt Strip */}
        <div
          style={{
            backgroundColor: 'var(--color-navy-50)',
            border: '1px solid var(--color-navy-200)',
            borderRadius: '4px',
            padding: '6px 10px',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontSize: '9.5px',
              fontFamily: 'var(--font-code)',
              fontWeight: 'bold',
              backgroundColor: 'var(--color-navy-900)',
              color: '#ffffff',
              padding: '2px 6px',
              borderRadius: '3px',
            }}
          >
            PROMPT (w₁...wt)
          </span>
          <span
            style={{
              fontSize: '12px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 'bold',
              color: 'var(--color-navy-950)',
            }}
          >
            «{isEn ? current.promptEn : current.promptAr} ...»
          </span>
        </div>

        {/* Candidate Token Probability Bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '8px' }}>
          {current.candidates.map((cand, idx) => {
            const isTop = idx === 0;
            const barColor =
              activeScenario === 'factual'
                ? isTop ? '#0d9488' : '#cbd5e1'
                : isTop ? '#dc2626' : '#cbd5e1';

            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '11px',
                }}
              >
                <div
                  style={{
                    width: '180px',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: isTop ? 'bold' : 'normal',
                    color: isTop ? 'var(--color-navy-950)' : 'var(--color-neutral-600)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span style={{ fontSize: '9px', fontFamily: 'var(--font-code)', color: 'var(--color-neutral-400)' }}>
                    [{idx + 1}]
                  </span>
                  <span>{isEn ? cand.tokenEn : cand.tokenAr}</span>
                </div>

                {/* Progress bar container */}
                <div
                  style={{
                    flex: 1,
                    height: '14px',
                    backgroundColor: 'var(--color-navy-50)',
                    borderRadius: '3px',
                    overflow: 'hidden',
                    position: 'relative',
                    border: '1px solid var(--color-navy-150, #e2e8f0)',
                  }}
                >
                  <div
                    style={{
                      width: `${cand.prob}%`,
                      height: '100%',
                      backgroundColor: barColor,
                      transition: 'width 0.4s ease',
                    }}
                  />
                </div>

                <div
                  style={{
                    width: '50px',
                    textAlign: isEn ? 'right' : 'left',
                    fontFamily: 'var(--font-code)',
                    fontWeight: 'bold',
                    fontSize: '10px',
                    color: isTop ? (activeScenario === 'factual' ? '#0f766e' : '#b91c1c') : 'var(--color-neutral-500)',
                  }}
                >
                  {cand.prob}%
                </div>

                <span
                  style={{
                    fontSize: '9px',
                    padding: '1px 5px',
                    borderRadius: '2px',
                    fontWeight: 'bold',
                    backgroundColor: cand.isFact ? '#dcfce7' : '#fee2e2',
                    color: cand.isFact ? '#15803d' : '#b91c1c',
                    width: '65px',
                    textAlign: 'center',
                  }}
                >
                  {cand.isFact ? (isEn ? 'FACT ✓' : 'حقيقي ✓') : (isEn ? 'FAKE ✗' : 'وهمي ✗')}
                </span>
              </div>
            );
          })}
        </div>

        {/* Verdict Callout */}
        <div
          style={{
            fontSize: '10.5px',
            color: activeScenario === 'factual' ? '#115e59' : '#991b1b',
            backgroundColor: activeScenario === 'factual' ? '#f0fdfa' : '#fef2f2',
            border: `1px solid ${activeScenario === 'factual' ? '#99f6e4' : '#fecaca'}`,
            borderRadius: 'var(--radius-xs)',
            padding: '4px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            lineHeight: 1.3,
          }}
        >
          <Icon name={activeScenario === 'factual' ? 'verified' : 'warning'} size={15} color="currentColor" />
          <strong>{isEn ? current.verdictEn : current.verdictAr}</strong>
        </div>
      </div>
    </div>
  );
}
