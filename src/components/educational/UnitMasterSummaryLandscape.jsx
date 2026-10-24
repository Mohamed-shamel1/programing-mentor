import React from 'react';
import UnitMasterSummaryLandscapeModular from './unitSummary/index.jsx';

/**
 * UnitMasterSummaryLandscape
 * Master Blueprint Entry Point for Unit 1 Summary (Landscape A4 Poster)
 * Re-exports the modular unitSummary architecture.
 */
export default function UnitMasterSummaryLandscape(props) {
  return <UnitMasterSummaryLandscapeModular {...props} />;
}
