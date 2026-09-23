import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext.js';
import Icon from '../ui/Icon.jsx';

/**
 * PerceptronDiagram
 * Interactive visual representation of an Artificial Neuron (Perceptron):
 * Inputs (X) × Weights (W) + Bias (b) ➔ Summation (Σ) ➔ Activation Function (φ) ➔ Output (Y)
 * Plus interactive weight tuning slider to observe threshold firing.
 */
export default function PerceptronDiagram() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const [weight1, setWeight1] = useState(0.8);
  const [weight2, setWeight2] = useState(0.4);
  const [bias, setBias] = useState(-0.5);

  const input1 = 1.0; // E.g., presence of visual feature
  const input2 = 0.5;

  const sumZ = Number((input1 * weight1 + input2 * weight2 + bias).toFixed(2));
  const isFired = sumZ > 0;
  const outputY = isFired ? 1 : 0;

  return (
    <div className="perceptron-diagram-container" style={{ margin: '4px 0' }}>
      {/* Header with Mathematical Formula */}
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
          <Icon name="psychology" size={17} color="var(--color-cobalt-600)" />
          <strong
            className="font-heading"
            style={{ fontSize: '11.5px', color: 'var(--color-navy-950)' }}
          >
            {isEn
              ? 'Mathematical Model of the Perceptron (Neuron)'
              : 'النموذج الرياضي للخلية العصبية الاصطناعية (Perceptron)'}
          </strong>
        </div>

        <span
          className="font-code"
          style={{
            fontSize: '11px',
            fontWeight: 'bold',
            color: 'var(--color-cobalt-700)',
            backgroundColor: 'var(--color-cobalt-50)',
            padding: '2px 8px',
            borderRadius: '4px',
            border: '1px solid var(--color-cobalt-200)',
            direction: 'ltr',
          }}
        >
          Y = φ( Σ (Xi · Wi) + b )
        </span>
      </div>

      {/* Interactive SVG Canvas */}
      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1.5px solid var(--color-navy-200)',
          borderRadius: 'var(--radius-sm)',
          padding: '8px 6px',
          boxShadow: 'var(--shadow-2xs)',
          position: 'relative',
        }}
      >
        <svg
          viewBox="0 0 540 185"
          style={{ width: '100%', height: 'auto', display: 'block' }}
          aria-label={
            isEn
              ? 'Interactive Artificial Neuron Architecture Diagram'
              : 'مخطط الخلية العصبية الاصطناعية التفاعلي'
          }
        >
          {/* Subtle Grid */}
          <defs>
            <linearGradient id="perceptronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>
            <linearGradient id="fireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* Connection Lines */}
          {/* Input 1 -> Sum */}
          <line x1="110" y1="45" x2="250" y2="92" stroke="#2563eb" strokeWidth="2.5" strokeOpacity="0.8" />
          {/* Input 2 -> Sum */}
          <line x1="110" y1="140" x2="250" y2="92" stroke="#2563eb" strokeWidth="2.5" strokeOpacity="0.8" />
          {/* Bias -> Sum */}
          <line x1="250" y1="20" x2="250" y2="60" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
          {/* Sum -> Activation */}
          <line x1="282" y1="92" x2="350" y2="92" stroke="#0f172a" strokeWidth="2.5" />
          {/* Activation -> Output */}
          <line x1="392" y1="92" x2="460" y2="92" stroke={isFired ? '#10b981' : '#dc2626'} strokeWidth="3" />

          {/* Weight Badges on lines */}
          <g>
            <rect x="160" y="55" width="46" height="18" rx="3" fill="#eff6ff" stroke="#bfdbfe" />
            <text x="183" y="68" fill="#1e40af" fontSize="9" fontFamily="var(--font-code)" fontWeight="bold" textAnchor="middle">
              W₁: {weight1}
            </text>
          </g>
          <g>
            <rect x="160" y="115" width="46" height="18" rx="3" fill="#eff6ff" stroke="#bfdbfe" />
            <text x="183" y="128" fill="#1e40af" fontSize="9" fontFamily="var(--font-code)" fontWeight="bold" textAnchor="middle">
              W₂: {weight2}
            </text>
          </g>

          {/* 1. Input Nodes */}
          {/* X1 */}
          <circle cx="85" cy="45" r="24" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
          <text x="85" y="42" fill="#1e3a8a" fontSize="11" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
            X₁
          </text>
          <text x="85" y="56" fill="#64748b" fontSize="8" fontFamily="var(--font-code)" textAnchor="middle">
            (val: {input1})
          </text>
          <text x="85" y="16" fill="#1e3a8a" fontSize="8.5" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
            {isEn ? 'Feature 1' : 'الخاصية 1'}
          </text>

          {/* X2 */}
          <circle cx="85" cy="140" r="24" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
          <text x="85" y="137" fill="#1e3a8a" fontSize="11" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
            X₂
          </text>
          <text x="85" y="151" fill="#64748b" fontSize="8" fontFamily="var(--font-code)" textAnchor="middle">
            (val: {input2})
          </text>
          <text x="85" y="176" fill="#1e3a8a" fontSize="8.5" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
            {isEn ? 'Feature 2' : 'الخاصية 2'}
          </text>

          {/* Bias Node */}
          <g>
            <rect x="225" y="6" width="50" height="16" rx="3" fill="#fef3c7" stroke="#f59e0b" />
            <text x="250" y="18" fill="#b45309" fontSize="9" fontFamily="var(--font-code)" fontWeight="bold" textAnchor="middle">
              Bias b: {bias}
            </text>
          </g>

          {/* 2. Summation Node (Σ) */}
          <circle cx="266" cy="92" r="28" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          <text x="266" y="87" fill="#38bdf8" fontSize="14" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
            Σ
          </text>
          <text x="266" y="103" fill="#f8fafc" fontSize="8" fontFamily="var(--font-code)" textAnchor="middle">
            Z = {sumZ}
          </text>
          <text x="266" y="132" fill="#0f172a" fontSize="8.5" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
            {isEn ? 'Weighted Sum' : 'المجموع الموزون'}
          </text>

          {/* 3. Activation Function Node (φ) */}
          <rect x="350" y="70" width="44" height="44" rx="6" fill="#f1f5f9" stroke="#0f172a" strokeWidth="2" />
          <path d="M 358 102 L 372 102 L 372 82 L 386 82" fill="none" stroke="#2563eb" strokeWidth="2" />
          <text x="372" y="64" fill="#0f172a" fontSize="8.5" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
            {isEn ? 'Activation φ' : 'دالة التنشيط'}
          </text>

          {/* 4. Output Node (Y) */}
          <circle
            cx="488"
            cy="92"
            r="26"
            fill={isFired ? 'url(#fireGrad)' : '#fee2e2'}
            stroke={isFired ? '#047857' : '#dc2626'}
            strokeWidth="2.5"
          />
          <text x="488" y="89" fill={isFired ? '#ffffff' : '#991b1b'} fontSize="12" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
            Y = {outputY}
          </text>
          <text x="488" y="103" fill={isFired ? '#ecfdf5' : '#7f1d1d'} fontSize="8" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
            {isFired
              ? isEn ? 'ACTIVATED' : 'تنشيط (1)'
              : isEn ? 'DORMANT' : 'سكون (0)'}
          </text>
          <text x="488" y="132" fill={isFired ? '#047857' : '#991b1b'} fontSize="8.5" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
            {isEn ? 'Decision Output' : 'القرار النهائي'}
          </text>

          {/* Feedback Learning Arrow (Iterative Weight Adjustment) */}
          <path
            d="M 465 140 C 370 175, 180 175, 120 145"
            fill="none"
            stroke="#ea580c"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <polygon points="116,143 124,142 120,150" fill="#ea580c" />
          <text x="290" y="172" fill="#c2410c" fontSize="8.5" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
            {isEn
              ? '⮌ Learning Loop: Weights (W) adjust iteratively to minimize Error (Loss Function)'
              : '⮌ حلقة التدريب: تعديل الأوزان (W) تكرارياً لتقليل نسبة الخطأ (Loss Function)'}
          </text>
        </svg>

        {/* Live Interactive Sliders to play with Weights */}
        <div
          style={{
            marginTop: '6px',
            padding: '6px 10px',
            backgroundColor: 'var(--color-navy-50)',
            border: '1px solid var(--color-navy-200)',
            borderRadius: 'var(--radius-xs)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '10.5px', fontFamily: 'var(--font-heading)', fontWeight: 'bold', color: 'var(--color-navy-950)' }}>
              {isEn ? 'Experiment: Tune Synaptic Weight W₁:' : 'جرّب بنفسك: اضبط الوزن الرقمي W₁:'}
            </span>
            <input
              type="range"
              min="0.0"
              max="2.0"
              step="0.1"
              value={weight1}
              onChange={(e) => setWeight1(parseFloat(e.target.value))}
              style={{ cursor: 'pointer', width: '90px' }}
            />
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-code)', fontWeight: 'bold', color: 'var(--color-cobalt-700)' }}>
              {weight1}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '10.5px', fontFamily: 'var(--font-heading)', fontWeight: 'bold', color: 'var(--color-navy-950)' }}>
              {isEn ? 'Tune Bias b:' : 'اضبط الانحياز b:'}
            </span>
            <input
              type="range"
              min="-1.5"
              max="0.5"
              step="0.1"
              value={bias}
              onChange={(e) => setBias(parseFloat(e.target.value))}
              style={{ cursor: 'pointer', width: '90px' }}
            />
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-code)', fontWeight: 'bold', color: 'var(--color-amber-700)' }}>
              {bias}
            </span>
          </div>

          <div
            style={{
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '10.5px',
              fontWeight: 'bold',
              fontFamily: 'var(--font-heading)',
              backgroundColor: isFired ? '#dcfce7' : '#fee2e2',
              color: isFired ? '#15803d' : '#b91c1c',
              border: `1px solid ${isFired ? '#86efac' : '#fca5a5'}`,
              whiteSpace: 'nowrap',
            }}
          >
            {isFired
              ? isEn ? 'Neuron Fires (Y=1) ✓' : 'تنشط الخلية (Y=1) ✓'
              : isEn ? 'Neuron Inactive (Y=0) ✗' : 'الخلية خاملة (Y=0) ✗'}
          </div>
        </div>
      </div>
    </div>
  );
}
