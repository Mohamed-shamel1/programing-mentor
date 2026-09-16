import React from 'react';
import Card from '../ui/Card.jsx';
import CalloutBox from '../ui/CalloutBox.jsx';
import Badge from '../ui/Badge.jsx';
import ComparisonGrid from '../visuals/ComparisonGrid.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * ComparisonPage
 * Educational Page Type: Analytical Comparison & Trade-off Matrix.
 * Validated by Stitch 'Comparison' prototype.
 * All data passed via props.
 */
export default function ComparisonPage({
  badge,
  title,
  overview,
  sideA,
  sideB,
  criteria = [],
  synthesis,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultBadge = isEn ? 'Comparison & Analysis' : 'مقارنة وتحليل';
  const finalBadge = badge || defaultBadge;

  return (
    <div className="educational-page comparison-page">
      {finalBadge && <Badge variant="teal">{finalBadge}</Badge>}

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
                <th>{isEn ? 'Comparison Criterion' : 'معيار المقارنة'}</th>
                <th>{sideA?.title || (isEn ? 'Party A' : 'الطرف الأول')}</th>
                <th>{sideB?.title || (isEn ? 'Party B' : 'الطرف الثاني')}</th>
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
          type="info"
          title={typeof synthesis === 'object' && synthesis.title ? synthesis.title : (isEn ? 'Comparison Synthesis' : 'خلاصة المقارنة')}
          style={{ marginTop: 'var(--space-4)' }}
        >
          <p>{typeof synthesis === 'object' ? synthesis.text : synthesis}</p>
        </CalloutBox>
      )}
    </div>
  );
}
