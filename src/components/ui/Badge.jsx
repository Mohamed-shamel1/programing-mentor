import React from 'react';

/**
 * Badge
 * Pedagogical metadata badge for topic tags, difficulty levels, and syllabus units.
 */
export default function Badge({
  children,
  variant = 'navy', // 'navy' | 'cobalt' | 'teal' | 'amber'
  className = '',
}) {
  return (
    <span className={`badge badge-${variant} ${className}`.trim()}>
      {children}
    </span>
  );
}
