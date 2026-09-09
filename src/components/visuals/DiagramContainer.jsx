import React from 'react';

/**
 * DiagramContainer
 * Framed container for technical diagrams and visual concept models.
 * Ensures consistent borders and page-break-inside avoidance in print.
 */
export default function DiagramContainer({ title, caption, children, className = '' }) {
  return (
    <figure className={`diagram-frame ${className}`.trim()}>
      {title && <figcaption className="diagram-title">{title}</figcaption>}
      <div className="diagram-body">
        {children}
      </div>
      {caption && <small className="diagram-caption text-muted">{caption}</small>}
    </figure>
  );
}
