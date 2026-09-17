import React, { useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext.js';
import { lesson01CheatSheetData } from '../../data/lesson01CheatSheetData.js';
import { lesson01CheatSheetDataEn } from '../../data/lesson01CheatSheetDataEn.js';

/**
 * LessonMasterCheatSheet
 * Ultra-Intensive Revision Blueprint & Master Cheat Sheet (A4 Landscape Form)
 * Lesson 1-1: Evolution of Information Technology & Social Transformation
 */
export default function LessonMasterCheatSheet({ data: propData }) {
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    document.body.classList.add('landscape-active');
    return () => {
      document.body.classList.remove('landscape-active');
    };
  }, []);

  // Resolve active dataset based on prop or global language context
  const data =
    propData || (language === 'en' ? lesson01CheatSheetDataEn : lesson01CheatSheetData);

  const {
    header,
    column1,
    column2,
    column3,
    column4,
    bottomSection,
    footer,
  } = data;

  const arrowSymbol = isRTL ? '⟵' : '⟶';

  return (
    <div className="cheat-sheet-wrapper">
      <style>{`
        @page {
          size: A4 landscape !important;
          margin: 0 !important;
        }
        @page landscape-sheet {
          size: A4 landscape !important;
          margin: 0 !important;
        }
        @media print {
          @page {
            size: A4 landscape !important;
            margin: 0 !important;
          }
          html, body {
            width: 297mm !important;
            height: 210mm !important;
            max-width: 297mm !important;
            max-height: 210mm !important;
            overflow: hidden !important;
            margin: 0 !important;
            padding: 0 !important;
            background-color: #ffffff !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
      <main className="cheat-sheet-canvas">
        {/* ============================================================= */}
        {/* HEADER SECTION                                                */}
        {/* ============================================================= */}
        <header className="cs-header">
          <div className="cs-header-brand">
            <div className="cs-logo-icon">
              {header.logoLetter}
            </div>
            <div>
              <div className="cs-badges-row">
                <span className="cs-badge-series">{header.seriesBadge}</span>
                <span className="cs-badge-cohort">{header.cohortBadge}</span>
              </div>
              <h1 className="cs-header-title">{header.mainTitle}</h1>
            </div>
          </div>

          <div className="cs-header-center">
            <span className="cs-center-tag">{header.tagBadge}</span>
            <h2 className="cs-center-lesson">{header.lessonSubtitle}</h2>
          </div>

          <div className="cs-header-meta">
            <span className="cs-meta-label">{header.authorLabel}</span>
            <span className="cs-meta-author">{header.authorName}</span>
            <span className="cs-meta-edition">{header.editionBadge}</span>
          </div>
        </header>

        {/* ============================================================= */}
        {/* 4-COLUMN MAIN CONTENT GRID                                    */}
        {/* ============================================================= */}
        <div className="cs-columns-grid">
          {/* ----------------------------------------------------------- */}
          {/* COLUMN 1: TIMELINE & CAUSAL CHAINS                          */}
          {/* ----------------------------------------------------------- */}
          <section className="cs-column" data-purpose="timeline-column">
            <div className="cs-column-header" style={{ borderColor: '#2563eb' }}>
              <span className="cs-col-num" style={{ backgroundColor: '#2563eb' }}>1</span>
              <h3 className="cs-col-title">{column1.title}</h3>
            </div>

            <div className="cs-eras-list">
              {column1.eras.map((era) => (
                <div
                  key={era.id}
                  className={`cs-era-card ${era.badgeColor === 'indigo' ? 'current-era' : ''}`}
                >
                  <div className="cs-era-top">
                    <span className="cs-era-period">{era.period}</span>
                    <span className={`cs-era-badge badge-${era.badgeColor}`}>{era.badge}</span>
                  </div>
                  <p className="cs-era-desc">
                    <strong>{language === 'en' ? 'Hardware & Capability: ' : 'العتاد والقدرة: '}</strong>
                    {era.hardware}
                  </p>
                  <p className="cs-era-impact">
                    <strong>{language === 'en' ? 'Social Impact: ' : 'الأثر المجتمعي: '}</strong>
                    {era.impact}
                  </p>
                </div>
              ))}
            </div>

            {/* Causal Chain Box */}
            <div className="cs-causal-box">
              <div className="cs-box-header">
                <span>{column1.causalChains.title}</span>
                <span
                  style={{
                    backgroundColor: 'var(--color-amber-200)',
                    color: 'var(--color-amber-950)',
                    fontSize: '8.5px',
                    padding: '1px 5px',
                    borderRadius: '3px',
                  }}
                >
                  {column1.causalChains.badge}
                </span>
              </div>

              <div>
                {column1.causalChains.items.map((chain) => (
                  <div key={chain.id} className="cs-causal-item">
                    <span className="cs-causal-trigger">{chain.trigger}</span>{' '}
                    {chain.steps.map((step, idx) => (
                      <React.Fragment key={idx}>
                        {arrowSymbol} {step}{' '}
                      </React.Fragment>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------- */}
          {/* COLUMN 2: MOORE'S LAW & PHYSICS LIMITS                      */}
          {/* ----------------------------------------------------------- */}
          <section className="cs-column" data-purpose="moores-law-column">
            <div className="cs-column-header" style={{ borderColor: '#059669' }}>
              <span className="cs-col-num" style={{ backgroundColor: '#059669' }}>2</span>
              <h3 className="cs-col-title">{column2.title}</h3>
            </div>

            {/* Definition */}
            <div className="cs-moore-def">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ color: '#064e3b' }}>{column2.definition.title}</strong>
                <span
                  style={{
                    backgroundColor: '#a7f3d0',
                    color: '#064e3b',
                    padding: '1px 4px',
                    borderRadius: '2px',
                    fontSize: '8px',
                    fontWeight: 'bold',
                  }}
                >
                  {column2.definition.badge}
                </span>
              </div>
              <p style={{ margin: '3px 0 0 0', color: '#022c22' }}>{column2.definition.text}</p>
            </div>

            {/* Micro Exponential Chart */}
            <div className="cs-chart-box">
              <div className="cs-chart-top">
                <span>{column2.chart.title}</span>
                <span style={{ fontFamily: 'var(--font-code)', color: 'var(--color-cobalt-700)' }}>
                  {column2.chart.periodSpan}
                </span>
              </div>

              <div className="cs-chart-bars">
                {column2.chart.bars.map((bar, idx) => (
                  <div key={idx} className="cs-bar-col">
                    <div
                      className={`cs-bar-fill ${bar.colorClass}`}
                      style={{ height: `${bar.heightPercent}%` }}
                      title={`${bar.era}: ${bar.chip} (${bar.value})`}
                    >
                      {bar.value}
                      {bar.note && <span className="cs-bar-note">{bar.note}</span>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="cs-chart-footer">
                <span>{column2.chart.footerStart}</span>
                <span
                  style={{
                    color: '#991b1b',
                    backgroundColor: '#fee2e2',
                    padding: '1px 4px',
                    borderRadius: '2px',
                    border: '1px solid #fecaca',
                    fontWeight: 'bold',
                  }}
                >
                  {column2.chart.plateauWarning}
                </span>
                <span>{column2.chart.footerEnd}</span>
              </div>
            </div>

            {/* Physical Limits */}
            <div className="cs-limits-box">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  color: '#7f1d1d',
                  marginBottom: '4px',
                }}
              >
                <span>{column2.physicalLimits.title}</span>
                <span
                  style={{
                    backgroundColor: '#fee2e2',
                    color: '#991b1b',
                    padding: '1px 4px',
                    borderRadius: '2px',
                    fontSize: '8px',
                  }}
                >
                  {column2.physicalLimits.badge}
                </span>
              </div>

              <div className="cs-limits-grid">
                {column2.physicalLimits.limits.map((lim) => (
                  <div
                    key={lim.num}
                    className={`cs-limit-card ${lim.colSpan ? 'span-2' : ''}`}
                  >
                    <strong style={{ color: '#991b1b', display: 'block', fontSize: '8.5px' }}>
                      {lim.title}
                    </strong>
                    <span style={{ color: '#450a0a', fontSize: '8px' }}>{lim.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Solutions */}
            <div className="cs-solutions-box">
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    color: '#1e3a8a',
                    marginBottom: '3px',
                  }}
                >
                  <span>{column2.architecturalSolutions.title}</span>
                  <span
                    style={{
                      backgroundColor: '#dbeafe',
                      color: '#1e40af',
                      padding: '1px 4px',
                      borderRadius: '2px',
                      fontSize: '8px',
                    }}
                  >
                    {column2.architecturalSolutions.badge}
                  </span>
                </div>

                <ul style={{ margin: 0, paddingInlineStart: '12px', color: 'var(--color-neutral-800)' }}>
                  {column2.architecturalSolutions.points.map((point, idx) => (
                    <li key={idx} style={{ marginBottom: '2px' }}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="cs-analogy-box">
                {column2.architecturalSolutions.examAnalogy}
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------- */}
          {/* COLUMN 3: SOCIAL TRANSFORMATIONS                            */}
          {/* ----------------------------------------------------------- */}
          <section className="cs-column" data-purpose="social-transformations-column">
            <div className="cs-column-header" style={{ borderColor: '#d97706' }}>
              <span className="cs-col-num" style={{ backgroundColor: '#d97706', color: '#0f172a' }}>3</span>
              <h3 className="cs-col-title">{column3.title}</h3>
            </div>

            {/* Digital Trinity Banner */}
            <div className="cs-trinity-box">
              <span style={{ fontWeight: 'bold', color: '#78350f', display: 'block' }}>
                {column3.digitalTrinity.title}
              </span>
              <div className="cs-trinity-row">
                {column3.digitalTrinity.items.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <span className="cs-trinity-pill">
                      {item.icon} {item.label}
                    </span>
                    {idx < column3.digitalTrinity.items.length - 1 && (
                      <span style={{ color: '#d97706' }}>+</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* 5 Transformations */}
            <div className="cs-trans-list">
              {column3.transformations.map((trans) => (
                <div key={trans.num} className="cs-trans-card">
                  <div className="cs-trans-top">
                    <span
                      style={{
                        color:
                          trans.color === 'blue'
                            ? '#1e3a8a'
                            : trans.color === 'emerald'
                            ? '#064e3b'
                            : trans.color === 'amber'
                            ? '#78350f'
                            : trans.color === 'indigo'
                            ? '#312e81'
                            : '#581c87',
                      }}
                    >
                      {trans.title}
                    </span>
                    <span
                      style={{
                        color:
                          trans.color === 'blue'
                            ? '#2563eb'
                            : trans.color === 'emerald'
                            ? '#059669'
                            : trans.color === 'amber'
                            ? '#d97706'
                            : trans.color === 'indigo'
                            ? '#4f46e5'
                            : '#7c3aed',
                        fontSize: '7.5px',
                        fontWeight: '600',
                      }}
                    >
                      {trans.badge}
                    </span>
                  </div>
                  <p style={{ margin: 0, color: 'var(--color-neutral-600)' }}>{trans.desc}</p>
                </div>
              ))}
            </div>

            {/* Crucial Notes */}
            <div className="cs-notes-box">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  color: '#0369a1',
                  marginBottom: '2px',
                }}
              >
                <span>{column3.crucialNotes.title}</span>
                <span
                  style={{
                    backgroundColor: '#e0f2fe',
                    color: '#0284c7',
                    padding: '1px 4px',
                    borderRadius: '2px',
                    fontSize: '7.5px',
                  }}
                >
                  {column3.crucialNotes.badge}
                </span>
              </div>

              <div>
                {column3.crucialNotes.points.map((pt, idx) => (
                  <p key={idx} style={{ margin: '2px 0', color: 'var(--color-neutral-800)' }}>
                    <strong>• {pt.label} </strong>
                    {pt.text}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------- */}
          {/* COLUMN 4: COMPARISONS, STAKEHOLDERS & EXAM TRAPS            */}
          {/* ----------------------------------------------------------- */}
          <section className="cs-column" data-purpose="comparisons-and-traps-column">
            <div className="cs-column-header" style={{ borderColor: '#7c3aed' }}>
              <span className="cs-col-num" style={{ backgroundColor: '#7c3aed' }}>4</span>
              <h3 className="cs-col-title">{column4.title}</h3>
            </div>

            {/* Technical Comparison Table */}
            <table className="cs-comp-table">
              <thead>
                <tr>
                  {column4.comparisonTable.headers.map((h, idx) => (
                    <th key={idx}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {column4.comparisonTable.rows.map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 'bold', color: 'var(--color-cobalt-800)' }}>
                      {row.concept}
                    </td>
                    <td>{row.reality}</td>
                    <td style={{ color: 'var(--color-neutral-600)' }}>{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Stakeholder Matrix */}
            <div className="cs-stakeholder-box">
              <span style={{ fontWeight: 'bold', color: '#1e293b', display: 'block' }}>
                {column4.stakeholderMatrix.title}
              </span>
              <div className="cs-stakeholders-grid">
                {column4.stakeholderMatrix.stakeholders.map((sh, idx) => (
                  <div key={idx} className="cs-stakeholder-card">
                    <span style={{ fontWeight: 'bold', color: 'var(--color-navy-900)', display: 'block', fontSize: '8px' }}>
                      {sh.icon} {sh.role}
                    </span>
                    <span style={{ color: 'var(--color-neutral-700)', fontSize: '7.5px' }}>
                      {sh.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exam Traps (5 Traps) */}
            <div className="cs-traps-box">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  color: '#7f1d1d',
                  paddingBottom: '2px',
                  borderBottom: '1px solid #fecaca',
                }}
              >
                <span>{column4.examTraps.title}</span>
                <span
                  style={{
                    backgroundColor: '#dc2626',
                    color: '#ffffff',
                    padding: '1px 4px',
                    borderRadius: '2px',
                    fontSize: '7.5px',
                    fontFamily: 'var(--font-code)',
                  }}
                >
                  {column4.examTraps.badge}
                </span>
              </div>

              <div>
                {column4.examTraps.traps.map((trap, idx) => (
                  <div
                    key={trap.id}
                    className={idx < column4.examTraps.traps.length - 1 ? 'cs-trap-divider' : ''}
                  >
                    <div className="cs-trap-row">
                      <span className="cs-trap-wrong">❌</span>
                      <span style={{ color: 'var(--color-neutral-800)' }}>{trap.wrong}</span>
                    </div>
                    <div className="cs-trap-row">
                      <span className="cs-trap-correct">✅</span>
                      <span style={{ color: '#064e3b', fontWeight: '500' }}>{trap.correction}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ============================================================= */}
        {/* BOTTOM SECTION: 10 MASTER CONCEPTS + 6 EXAM PILLARS          */}
        {/* ============================================================= */}
        <section className="cs-bottom-section">
          {/* 10 Master Concepts */}
          <div className="cs-concepts-container">
            <div className="cs-concepts-top">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span
                  style={{
                    backgroundColor: 'var(--color-cobalt-600)',
                    color: '#ffffff',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    fontSize: '9.5px',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {bottomSection.masterConcepts.title}
                </span>
                <span style={{ fontSize: '8.5px', color: 'var(--color-neutral-600)' }}>
                  {bottomSection.masterConcepts.subtitle}
                </span>
              </div>
              <span
                style={{
                  fontSize: '8.5px',
                  fontFamily: 'var(--font-code)',
                  fontWeight: 'bold',
                  backgroundColor: '#dbeafe',
                  color: 'var(--color-cobalt-800)',
                  padding: '1px 6px',
                  borderRadius: '3px',
                  border: '1px solid #bfdbfe',
                }}
              >
                {bottomSection.masterConcepts.badge}
              </span>
            </div>

            <div className="cs-concepts-grid">
              {bottomSection.masterConcepts.concepts.map((concept) => (
                <div key={concept.id} className="cs-concept-card">
                  <span
                    className="cs-concept-term"
                    style={{
                      color:
                        concept.color === 'indigo'
                          ? '#312e81'
                          : concept.color === 'purple'
                          ? '#581c87'
                          : concept.color === 'emerald'
                          ? '#064e3b'
                          : '#1e3a8a',
                    }}
                  >
                    {concept.id}. {concept.termEn} ({concept.termAr})
                  </span>
                  <span style={{ color: 'var(--color-neutral-700)' }}>{concept.def}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6 Exam Pillars */}
          <div className="cs-pillars-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 'black', color: '#78350f', fontSize: '9px', fontFamily: 'var(--font-heading)' }}>
                {bottomSection.examPillars.title}
              </span>
              <span style={{ fontSize: '7.5px', color: '#92400e', fontWeight: '500' }}>
                {bottomSection.examPillars.subtitle}
              </span>
            </div>

            <div className="cs-pillars-grid">
              {bottomSection.examPillars.pillars.map((pillar) => (
                <div key={pillar.id} className="cs-pillar-card">
                  <strong style={{ color: '#1e3a8a', display: 'block', marginBottom: '1px' }}>
                    {pillar.title}
                  </strong>
                  <span style={{ color: 'var(--color-neutral-800)' }}>{pillar.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================= */}
        {/* FOOTER SECTION                                                */}
        {/* ============================================================= */}
        <footer className="cs-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <strong>{footer.rightsLabel}</strong>
            <span style={{ fontWeight: 'bold', color: 'var(--color-navy-950)' }}>{footer.authorName}</span>
            <span>{footer.authorTitle}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                backgroundColor: '#dbeafe',
                color: '#1e3a8a',
                padding: '2px 8px',
                borderRadius: '3px',
                fontWeight: 'bold',
                fontFamily: 'var(--font-code)',
              }}
            >
              {footer.printSpec}
            </span>
            <span
              style={{
                backgroundColor: '#fef3c7',
                color: '#92400e',
                padding: '2px 8px',
                borderRadius: '3px',
                fontWeight: 'bold',
              }}
            >
              {footer.seriesTitle}
            </span>
            <span style={{ color: '#047857', fontWeight: 'bold' }}>{footer.certifiedBadge}</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
