import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * NestedVennDiagram
 * Interactive Concentric Venn Diagram representing:
 * Artificial Intelligence (AI) ⊃ Machine Learning (ML) ⊃ Deep Learning (DL) ⊃ Generative AI (GenAI)
 */
export default function NestedVennDiagram({ onSelectCategory, selectedId }) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const [hoveredId, setHoveredId] = useState(null);
  const activeId = selectedId || hoveredId || 'genai';

  const layers = [
    {
      id: 'ai',
      nameAr: 'الذكاء الاصطناعي (AI)',
      nameEn: 'Artificial Intelligence (AI)',
      badgeAr: 'المظلة الكبرى الشاملة',
      badgeEn: 'The Comprehensive Umbrella',
      descAr: 'أي تقنية أو نظام يحاكي السلوك والقدرات الذهنية البشرية (التعلم، الاستدلال، التصحيح الذاتي).',
      descEn: 'Any system or technology simulating human cognitive faculties (learning, reasoning, self-correction).',
      cx: 260,
      cy: 145,
      rx: 245,
      ry: 135,
      fill: 'rgba(29, 78, 216, 0.08)',
      stroke: 'var(--color-cobalt-600, #2563eb)',
      strokeWidth: 2.5,
      tagBg: '#1e3a8a',
      tagColor: '#ffffff',
    },
    {
      id: 'ml',
      nameAr: 'تعلم الآلة (Machine Learning)',
      nameEn: 'Machine Learning (ML)',
      badgeAr: 'التعلم الذاتي من البيانات',
      badgeEn: 'Autonomous Pattern Learning',
      descAr: 'فئة فرعية من AI تمكن الأنظمة من استخلاص الأنماط والقواعد ذاتياً من البيانات دون برمجة صريحة.',
      descEn: 'Subfield of AI enabling systems to extract patterns autonomously from data without hardcoded rules.',
      cx: 260,
      cy: 160,
      rx: 185,
      ry: 105,
      fill: 'rgba(13, 148, 136, 0.12)',
      stroke: 'var(--color-teal-600, #0d9488)',
      strokeWidth: 2.2,
      tagBg: '#0f766e',
      tagColor: '#ffffff',
    },
    {
      id: 'dl',
      nameAr: 'التعلم العميق (Deep Learning)',
      nameEn: 'Deep Learning (DL)',
      badgeAr: 'الشبكات العصبية الاصطناعية',
      badgeEn: 'Deep Artificial Neural Networks',
      descAr: 'فئة فرعية من ML تستخدم شبكات عصبية متعددة الطبقات (ANNs) لاستخراج الميزات تلقائياً من البيانات الضخمة.',
      descEn: 'Subfield of ML using multi-layered ANNs for automatic feature extraction from complex, massive data.',
      cx: 260,
      cy: 175,
      rx: 125,
      ry: 75,
      fill: 'rgba(99, 102, 241, 0.16)',
      stroke: 'var(--color-indigo-600, #4f46e5)',
      strokeWidth: 2,
      tagBg: '#4338ca',
      tagColor: '#ffffff',
    },
    {
      id: 'genai',
      nameAr: 'الذكاء التوليدي (Generative AI)',
      nameEn: 'Generative AI (GenAI)',
      badgeAr: 'تخليق محتوى جديد كلياً',
      badgeEn: 'Novel Content Creation',
      descAr: 'فئة متخصصة من DL تصنع وتبتكر نصوصاً وصوراً وأكواداً وموسيقى غير مسبوقة استناداً للأوامر (Prompts).',
      descEn: 'Specialized branch of DL producing novel text, images, code, and audio from human prompts.',
      cx: 260,
      cy: 190,
      rx: 68,
      ry: 45,
      fill: 'rgba(245, 158, 11, 0.22)',
      stroke: 'var(--color-amber-600, #d97706)',
      strokeWidth: 2.5,
      tagBg: '#b45309',
      tagColor: '#ffffff',
    },
  ];

  const currentLayer = layers.find((l) => l.id === activeId) || layers[3];

  return (
    <div className="nested-venn-wrapper" style={{ margin: '6px 0' }}>
      <div
        className="venn-header-row"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '6px',
        }}
      >
        <span
          className="font-heading"
          style={{
            fontSize: '12px',
            fontWeight: 'bold',
            color: 'var(--color-navy-950)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: currentLayer.tagBg,
            }}
          />
          {isEn
            ? 'Concentric Nested Architecture of AI Domains'
            : 'مخطط الفئات المتداخلة الهندسي للذكاء الاصطناعي'}
        </span>

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
          GenAI ⊂ DL ⊂ ML ⊂ AI
        </span>
      </div>

      {/* Interactive SVG Diagram */}
      <div
        style={{
          position: 'relative',
          backgroundColor: '#ffffff',
          border: '1.5px solid var(--color-navy-200)',
          borderRadius: 'var(--radius-sm)',
          padding: '4px',
          boxShadow: 'var(--shadow-xs)',
        }}
      >
        <svg
          viewBox="0 0 520 280"
          style={{ width: '100%', height: 'auto', display: 'block' }}
          aria-label={
            isEn
              ? 'Concentric Venn Diagram: AI contains ML contains DL contains GenAI'
              : 'مخطط الفئات المتداخلة: الذكاء الاصطناعي يشمل تعلم الآلة والتعلم العميق والتوليدي'
          }
        >
          {/* Background Grid Pattern subtle */}
          <defs>
            <pattern id="subtleGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="520" height="280" fill="url(#subtleGrid)" rx="6" />

          {/* Ellipses from outermost to innermost */}
          {layers.map((layer) => {
            const isActive = activeId === layer.id;
            return (
              <g
                key={layer.id}
                style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                onMouseEnter={() => setHoveredId(layer.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectCategory && onSelectCategory(layer.id)}
              >
                <ellipse
                  cx={layer.cx}
                  cy={layer.cy}
                  rx={layer.rx}
                  ry={layer.ry}
                  fill={layer.fill}
                  stroke={layer.stroke}
                  strokeWidth={isActive ? layer.strokeWidth + 1.5 : layer.strokeWidth}
                  strokeDasharray={layer.id === 'ai' ? 'none' : 'none'}
                  style={{
                    filter: isActive ? 'drop-shadow(0 2px 6px rgba(0,0,0,0.12))' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                />
              </g>
            );
          })}

          {/* Labels on Diagram with Leader Lines */}
          {/* 1. AI Label */}
          <g>
            <rect x="25" y="22" width="130" height="22" rx="4" fill="#1e3a8a" opacity="0.95" />
            <text x="90" y="37" fill="#ffffff" fontSize="10.5" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
              {isEn ? 'AI • Artificial Intelligence' : 'الذكاء الاصطناعي (AI)'}
            </text>
            <line x1="155" y1="33" x2="195" y2="45" stroke="#1e3a8a" strokeWidth="1.2" strokeDasharray="2 2" />
          </g>

          {/* 2. ML Label */}
          <g>
            <rect x="25" y="68" width="125" height="20" rx="4" fill="#0f766e" opacity="0.95" />
            <text x="87" y="82" fill="#ffffff" fontSize="9.5" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
              {isEn ? 'ML • Machine Learning' : 'تعلم الآلة (ML)'}
            </text>
            <line x1="150" y1="78" x2="200" y2="95" stroke="#0f766e" strokeWidth="1.2" strokeDasharray="2 2" />
          </g>

          {/* 3. DL Label */}
          <g>
            <rect x="365" y="110" width="130" height="20" rx="4" fill="#4338ca" opacity="0.95" />
            <text x="430" y="124" fill="#ffffff" fontSize="9.5" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
              {isEn ? 'DL • Deep Learning' : 'التعلم العميق (DL)'}
            </text>
            <line x1="365" y1="120" x2="330" y2="140" stroke="#4338ca" strokeWidth="1.2" strokeDasharray="2 2" />
          </g>

          {/* 4. GenAI Label in Center Core */}
          <g>
            <rect x="200" y="180" width="120" height="24" rx="4" fill="#b45309" />
            <text x="260" y="196" fill="#ffffff" fontSize="10" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
              {isEn ? 'GenAI • Generative' : 'الذكاء التوليدي (GenAI)'}
            </text>
          </g>

          {/* Subset Arrow indicators */}
          <g opacity="0.85">
            <text x="260" y="70" fill="#1e3a8a" fontSize="10" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
              {isEn ? 'Broad Umbrella: All intelligent simulations' : 'المظلة الشاملة لكل النظم الذكية'}
            </text>
            <text x="260" y="120" fill="#0f766e" fontSize="9" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
              {isEn ? 'Self-learning algorithms from data' : 'استخلاص الأنماط ذاتياً من البيانات'}
            </text>
            <text x="260" y="156" fill="#4338ca" fontSize="8.5" fontFamily="var(--font-heading)" fontWeight="bold" textAnchor="middle">
              {isEn ? 'Multi-layered neural networks (ANN)' : 'شبكات عصبية عميقة متعددة الطبقات'}
            </text>
          </g>
        </svg>

        {/* Selected Layer Info Strip */}
        <div
          style={{
            marginTop: '4px',
            padding: '6px 10px',
            backgroundColor: 'var(--color-navy-50)',
            borderTop: '1px solid var(--color-navy-200)',
            borderRadius: '0 0 var(--radius-xs) var(--radius-xs)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '11px',
                fontWeight: 'bold',
                backgroundColor: currentLayer.tagBg,
                color: currentLayer.tagColor,
                padding: '2px 8px',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
              }}
            >
              {isEn ? currentLayer.nameEn : currentLayer.nameAr}
            </span>
            <span
              style={{
                fontSize: '11.5px',
                color: 'var(--color-navy-900)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {isEn ? currentLayer.descEn : currentLayer.descAr}
            </span>
          </div>

          <span
            style={{
              fontSize: '10px',
              fontFamily: 'var(--font-code)',
              color: 'var(--color-neutral-600)',
              whiteSpace: 'nowrap',
            }}
          >
            {isEn ? 'Hover/Click to inspect' : 'المس الدوائر للاستكشاف'}
          </span>
        </div>
      </div>
    </div>
  );
}
