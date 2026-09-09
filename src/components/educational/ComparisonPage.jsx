import React from 'react';
import Card from '../ui/Card.jsx';
import CalloutBox from '../ui/CalloutBox.jsx';
import Badge from '../ui/Badge.jsx';
import ComparisonGrid from '../visuals/ComparisonGrid.jsx';

/**
 * ComparisonPage
 * Educational Page Type: Analytical Comparison & Trade-off Matrix.
 * Validated by Stitch 'Comparison' prototype.
 * All data passed via props.
 */
export default function ComparisonPage({
  badge = 'مقارنة وتحليل',
  title,
  overview,
  sideA,
  sideB,
  criteria = [],
  synthesis,
}) {
  return (
    <div className="educational-page comparison-page">
      {badge && <Badge variant="teal">{badge}</Badge>}

      {title && (
        <h2 className="page-heading font-heading" style={{ marginTop: 'var(--space-2)' }}>
          {title}
        </h2>
      )}

      {overview && <p className="comparison-overview text-secondary">{overview}</p>}

      {sideA && sideB && (
        <ComparisonGrid
          itemA={
            <Card variant="navy" title={sideA.title}>
              {sideA.description && <p>{sideA.description}</p>}
              {sideA.points && (
                <ul>
                  {sideA.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              )}
            </Card>
          }
          itemB={
            <Card variant="cobalt" title={sideB.title}>
              {sideB.description && <p>{sideB.description}</p>}
              {sideB.points && (
                <ul>
                  {sideB.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              )}
            </Card>
          }
        />
      )}

      {criteria.length > 0 && (
        <div style={{ marginTop: 'var(--space-4)' }}>
          <table>
            <thead>
              <tr>
                <th>معيار المقارنة</th>
                <th>{sideA?.title || 'الطرف الأول'}</th>
                <th>{sideB?.title || 'الطرف الثاني'}</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.criterion}</strong></td>
                  <td>{row.valA}</td>
                  <td>{row.valB}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {synthesis && (
        <CalloutBox
          type="insight"
          title={synthesis.title || 'خلاصة المقارنة وتوجيه المُرشد'}
          style={{ marginTop: 'var(--space-4)' }}
        >
          <p>{synthesis.text}</p>
        </CalloutBox>
      )}
    </div>
  );
}
