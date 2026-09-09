import React from 'react';

/**
 * ComparisonGrid
 * Side-by-side comparison layout for conceptual trade-offs, technologies, or architectures.
 */
export default function ComparisonGrid({ itemA, itemB, className = '' }) {
  return (
    <div className={`comparison-grid ${className}`.trim()}>
      <div className="comparison-column column-a">
        {itemA}
      </div>
      <div className="comparison-column column-b">
        {itemB}
      </div>
    </div>
  );
}
