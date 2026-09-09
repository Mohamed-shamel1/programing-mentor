import React from 'react';

/**
 * Card
 * Clean educational container with controlled elevation and print-safe borders.
 * NO glassmorphism. Designed for textbooks and workbooks.
 */
export default function Card({
  children,
  title,
  variant = 'default', // 'default' | 'navy' | 'cobalt' | 'teal' | 'amber'
  className = '',
}) {
  const variantClass = variant !== 'default' ? `card-${variant}` : '';

  return (
    <section className={`card ${variantClass} ${className}`.trim()}>
      {title && (
        <header className="card-header">
          <h3 className="card-title">{title}</h3>
        </header>
      )}
      <div className="card-body">
        {children}
      </div>
    </section>
  );
}
