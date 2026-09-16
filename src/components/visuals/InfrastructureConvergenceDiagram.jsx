import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * InfrastructureConvergenceDiagram
 * SVG metric visualization showing the 100% mutual interdependence
 * of the 3 foundational digital infrastructure pillars:
 * 1. Devices (أجهزة الاستشعار والهواتف الذكية)
 * 2. High-speed Networks (شبكات الاتصال فائقة السرعة)
 * 3. Central Cloud (الحوسبة السحابية المركزية)
 */
export default function InfrastructureConvergenceDiagram({ className = '' }) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <div className={`st-convergence-widget ${className}`}>
      <div className="st-convergence-header">
        <span className="st-convergence-title font-caption">
          {isEn ? 'Interdependence & Convergence Level' : 'مستوى الاعتمادية والترابط المتبادل'}
        </span>
        <span className="st-convergence-rate font-code">100% INTERDEPENDENT</span>
      </div>

      <div className="st-convergence-svg-wrap">
        <svg
          viewBox="0 0 210 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="st-convergence-svg"
          aria-label={isEn ? 'Foundational 3 Pillars Diagram' : 'مخطط ترابط أركان البنية التحتية الرقمية الثلاثة'}
        >
          {/* Base Track */}
          <rect x="10" y="14" width="190" height="5" rx="2.5" fill="var(--color-cobalt-100)" />
          
          {/* Active Gradient Interconnection Line */}
          <rect x="10" y="14" width="190" height="5" rx="2.5" fill="url(#convergenceGrad)" />

          {/* Node 1: Devices */}
          <circle cx="20" cy="16.5" r="7.5" fill="#ffffff" stroke="var(--color-cobalt-600)" strokeWidth="2.5" />
          <circle cx="20" cy="16.5" r="3.5" fill="var(--color-cobalt-600)" />
          <text
            x="20"
            y="35"
            textAnchor="middle"
            fill="var(--color-navy-950)"
            fontFamily="var(--font-heading)"
            fontSize="8.5"
            fontWeight="700"
          >
            {isEn ? 'Devices' : 'أجهزة'}
          </text>

          {/* Node 2: Networks */}
          <circle cx="105" cy="16.5" r="7.5" fill="#ffffff" stroke="var(--color-amber-500)" strokeWidth="2.5" />
          <circle cx="105" cy="16.5" r="3.5" fill="var(--color-amber-500)" />
          <text
            x="105"
            y="35"
            textAnchor="middle"
            fill="var(--color-navy-950)"
            fontFamily="var(--font-heading)"
            fontSize="8.5"
            fontWeight="700"
          >
            {isEn ? 'Networks' : 'شبكات'}
          </text>

          {/* Node 3: Cloud */}
          <circle cx="190" cy="16.5" r="7.5" fill="#ffffff" stroke="var(--color-teal-600)" strokeWidth="2.5" />
          <circle cx="190" cy="16.5" r="3.5" fill="var(--color-teal-600)" />
          <text
            x="190"
            y="35"
            textAnchor="middle"
            fill="var(--color-navy-950)"
            fontFamily="var(--font-heading)"
            fontSize="8.5"
            fontWeight="700"
          >
            {isEn ? 'Cloud' : 'سحابة'}
          </text>

          {/* SVG Gradient */}
          <defs>
            <linearGradient id="convergenceGrad" x1="10" y1="16.5" x2="200" y2="16.5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--color-cobalt-600)" />
              <stop offset="50%" stopColor="var(--color-amber-500)" />
              <stop offset="100%" stopColor="var(--color-teal-600)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
