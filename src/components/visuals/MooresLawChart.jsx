import React from 'react';

/**
 * MooresLawChart
 * SVG visualization of Moore's Law transistor density growth curve.
 */
export default function MooresLawChart({ className = '' }) {
  return (
    <div className={`moores-law-chart-wrapper ${className}`}>
      <div className="moores-chart-legend-row">
        <span className="moores-chart-title font-heading">
          مخطط النمو الأسي للترانزستورات ومرحلة التباطؤ الفيزيائي (1970 – 2026+)
        </span>
        <span className="moores-chart-scale-tag font-code">LOG SCALE / nm ERA</span>
      </div>
      <div className="moores-svg-container">
        <svg
          className="moores-law-svg"
          fill="none"
          viewBox="0 0 540 150"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="مخطط منحنى قانون مور وعوائق الذرات الفيزيائية"
        >
          <line stroke="#0d1c2f" strokeDasharray="2 4" strokeOpacity="0.08" x1="40" x2="520" y1="18" y2="18" />
          <line stroke="#0d1c2f" strokeDasharray="2 4" strokeOpacity="0.08" x1="40" x2="520" y1="55" y2="55" />
          <line stroke="#0d1c2f" strokeDasharray="2 4" strokeOpacity="0.08" x1="40" x2="520" y1="92" y2="92" />
          <line stroke="#0d1c2f" strokeOpacity="0.15" x1="40" x2="520" y1="130" y2="130" />
          <text fill="var(--color-neutral-500)" fontFamily="var(--font-code)" fontSize="8" fontWeight="500" textAnchor="middle" transform="rotate(-90 14 74)" x="14" y="74">كثافة الترانزستور</text>
          <text fill="var(--color-neutral-600)" fontFamily="var(--font-code)" fontSize="9" x="48" y="143">1970</text>
          <text fill="var(--color-neutral-600)" fontFamily="var(--font-code)" fontSize="9" x="158" y="143">1990</text>
          <text fill="var(--color-neutral-600)" fontFamily="var(--font-code)" fontSize="9" x="265" y="143">2005</text>
          <text fill="var(--color-neutral-600)" fontFamily="var(--font-code)" fontSize="9" x="373" y="143">2015</text>
          <text fill="var(--color-neutral-600)" fontFamily="var(--font-code)" fontSize="9" x="465" y="143">2026+</text>
          <rect fill="#ba1a1a" fillOpacity="0.08" stroke="#ba1a1a" strokeOpacity="0.2" strokeWidth="1" height="114" rx="4" width="175" x="346" y="14" />
          <text fill="#ba1a1a" fontFamily="var(--font-heading)" fontSize="8.5" fontWeight="700" textAnchor="middle" x="433" y="28">منطقة التباطؤ والحدود الذرية</text>
          <path d="M 52 128 C 155 126, 260 115, 340 65" stroke="var(--color-cobalt-700)" strokeLinecap="round" strokeWidth="2.5" />
          <path d="M 340 65 C 390 38, 450 30, 510 24" stroke="var(--color-cobalt-700)" strokeLinecap="round" strokeWidth="2.5" />
          <path d="M 340 65 C 400 63, 460 61, 510 59" stroke="#ba1a1a" strokeDasharray="5 3" strokeLinecap="round" strokeWidth="2" />
          <circle cx="52" cy="128" fill="var(--color-cobalt-700)" r="3.5" />
          <circle cx="162" cy="122" fill="var(--color-cobalt-700)" r="3.5" />
          <circle cx="270" cy="100" fill="var(--color-cobalt-700)" r="3.5" />
          <circle cx="340" cy="65" fill="var(--color-amber-600)" r="5" />
          <circle cx="460" cy="60" fill="#ba1a1a" r="3.5" />
          <rect fill="#fef3c7" height="17" rx="3" width="112" x="223" y="15" />
          <rect fill="#f59e0b" height="17" opacity="0.3" rx="3" width="3" x="223" y="15" />
          <text fill="#92400e" fontFamily="var(--font-heading)" fontSize="8.5" fontWeight="700" textAnchor="middle" x="280" y="27">2010: بدء التباطؤ الملحوظ</text>
          <path d="M 312 26 L 334 57" stroke="var(--color-amber-600)" strokeWidth="1.5" strokeLinecap="round" />
          <polygon fill="var(--color-amber-600)" points="334,62 330,54 338,54" />
        </svg>
      </div>
      <div className="moores-chart-legend">
        <div className="moores-legend-item">
          <span className="moores-legend-dot cobalt" />
          <span>المسار الأسي التاريخي (قانون مور النظري)</span>
        </div>
        <div className="moores-legend-item">
          <span className="moores-legend-dot error" />
          <span>الواقع الحالي (عوائق التبريد والفيزياء الكمومية)</span>
        </div>
      </div>
    </div>
  );
}
