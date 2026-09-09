import React from 'react';

/**
 * CumulativeLayersDiagram
 * Vector SVG illustration showing how modern computing layers build vertically
 * upon foundational infrastructures rather than replacing them.
 */
export default function CumulativeLayersDiagram({ className = '' }) {
  return (
    <div className={`cumulative-layers-diagram ${className}`}>
      <svg
        className="cumulative-svg"
        fill="none"
        viewBox="0 0 280 146"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="رسم توضيحي لبنية التراكم المعرفي لنظم الحوسبة"
      >
        {/* Layer 1: Mainframes & Infrastructure (1940+) */}
        <rect
          fill="var(--color-cobalt-900)"
          fillOpacity="0.12"
          stroke="var(--color-cobalt-700)"
          strokeWidth="1"
          height="22"
          rx="4"
          width="244"
          x="22"
          y="118"
        />
        <text
          fill="var(--color-cobalt-950)"
          fontFamily="var(--font-heading)"
          fontSize="9.5"
          fontWeight="700"
          textAnchor="middle"
          x="144"
          y="133"
        >
          1. البنية المركزية والصمامات (Mainframes 1940+)
        </text>

        {/* Layer 2: PC & GUI (1970+) */}
        <rect
          fill="var(--color-cobalt-700)"
          fillOpacity="0.22"
          stroke="var(--color-cobalt-600)"
          strokeWidth="1"
          height="22"
          rx="4"
          width="220"
          x="34"
          y="91"
        />
        <text
          fill="var(--color-cobalt-950)"
          fontFamily="var(--font-heading)"
          fontSize="9.5"
          fontWeight="700"
          textAnchor="middle"
          x="144"
          y="106"
        >
          2. ثورة الحاسوب الشخصي ونظام التشغيل (PC 1970+)
        </text>

        {/* Layer 3: WWW & Hyper-connectivity (1990+) */}
        <rect
          fill="var(--color-teal-600)"
          fillOpacity="0.55"
          stroke="var(--color-teal-700)"
          strokeWidth="1"
          height="22"
          rx="4"
          width="196"
          x="46"
          y="64"
        />
        <text
          fill="#ffffff"
          fontFamily="var(--font-heading)"
          fontSize="9.5"
          fontWeight="700"
          textAnchor="middle"
          x="144"
          y="79"
        >
          3. شبكة الويب والاتصال الفائق (WWW 1990+)
        </text>

        {/* Layer 4: Mobile & Pocket Ecosystem (2000+) */}
        <rect
          fill="var(--color-amber-600)"
          fillOpacity="0.85"
          stroke="var(--color-amber-700)"
          strokeWidth="1"
          height="22"
          rx="4"
          width="172"
          x="58"
          y="37"
        />
        <text
          fill="#ffffff"
          fontFamily="var(--font-heading)"
          fontSize="9.5"
          fontWeight="700"
          textAnchor="middle"
          x="144"
          y="52"
        >
          4. الهواتف الذكية وحوسبة الجيب (Mobile 2000+)
        </text>

        {/* Layer 5: Cloud & GenAI (2010+ / Present) */}
        <rect
          fill="var(--color-cobalt-700)"
          stroke="var(--color-cobalt-900)"
          strokeWidth="1.2"
          height="22"
          rx="4"
          width="148"
          x="70"
          y="10"
        />
        <text
          fill="#ffffff"
          fontFamily="var(--font-heading)"
          fontSize="9.5"
          fontWeight="800"
          textAnchor="middle"
          x="144"
          y="25"
        >
          5. السحابة والذكاء الاصطناعي (GenAI 2026+)
        </text>

        {/* Upward Cumulative Vector Arrow */}
        <path
          d="M 12 128 L 12 20"
          stroke="var(--color-amber-600)"
          strokeDasharray="3 2"
          strokeWidth="2.5"
        />
        <polygon
          fill="var(--color-amber-600)"
          points="12,10 7,20 17,20"
        />
        <text
          fill="var(--color-amber-800)"
          fontFamily="var(--font-heading)"
          fontSize="8"
          fontWeight="700"
          textAnchor="middle"
          transform="rotate(-90 8 74)"
          x="8"
          y="74"
        >
          تراكم رأسي صاعد
        </text>
      </svg>
      <span className="diagram-caption">
        التقنيات الحديثة تتغذى رأسياً على الطبقات التحتية السابقة ولا تلغيها.
      </span>
    </div>
  );
}
