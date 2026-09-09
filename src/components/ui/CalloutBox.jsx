import React from 'react';

/**
 * CalloutBox
 * Mentor prompt, pedagogical tip, or attention callout.
 * Features an accent border-inline-start and high-contrast print appearance.
 */
export default function CalloutBox({
  title,
  type = 'mentor', // 'mentor' | 'insight' | 'note'
  children,
  className = '',
}) {
  return (
    <aside className={`callout-box ${type} ${className}`.trim()} role="note">
      {title && (
        <div className="callout-title">
          <span>{title}</span>
        </div>
      )}
      <div className="callout-content">
        {children}
      </div>
    </aside>
  );
}
