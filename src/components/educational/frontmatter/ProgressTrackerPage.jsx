import React from 'react';
import PageShell from '../../layout/PageShell.jsx';
import Icon from '../../ui/Icon.jsx';
import { progressTrackerData as defaultData } from '../../../data/frontMatterData.js';

/**
 * ProgressTrackerPage (Front-Matter Page 02)
 * Student Progress Tracker & Learning Path.
 * Displays units, interactive/printable check indicators, milestones, and student contract.
 */
export default function ProgressTrackerPage({ data = defaultData, standalone = true }) {
  const innerContent = (
    <div className="progress-tracker-content">
      {/* 1. Subheader Banner */}
      <div className="fm-hero-banner" style={{ padding: '8px 12px', marginBottom: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon name="explore" size={18} color="var(--color-amber-400)" />
          <p style={{ fontSize: '11.5px', fontWeight: 'var(--font-weight-medium)', margin: 0 }}>
            {data.bannerText}
          </p>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-code)',
            fontSize: '11px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '2px 8px',
            borderRadius: '4px',
          }}
        >
          {data.academicYear}
        </span>
      </div>

      {/* 2. Legend / Evaluation Keys Bar */}
      <div className="progress-legend-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'var(--font-weight-bold)' }}>
          <Icon name="check_circle" size={15} color="var(--color-cobalt-600)" />
          <span>دليل رموز التقييم الذاتي:</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {data.legendKeys.map((k) => (
            <div
              key={k.key}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: k.isStar ? 'var(--color-amber-600)' : 'inherit',
                fontWeight: k.isStar ? 'var(--font-weight-bold)' : 'normal',
              }}
            >
              <span className={`check-box-square ${k.isStar ? 'is-star' : ''}`}>
                {k.isStar ? '★' : ''}
              </span>
              <span>{k.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. The 4 Units Breakdown */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {data.units.map((unit) => (
          <section key={unit.unitNumber} className={`progress-unit-box theme-${unit.theme}`}>
            <div className="progress-unit-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="progress-unit-badge">{unit.unitNumber}</span>
                <h3 style={{ fontSize: '12px', fontWeight: 'var(--font-weight-bold)', margin: 0 }}>
                  {unit.titleAr}{' '}
                  <span style={{ fontSize: '10.5px', fontFamily: 'var(--font-code)', color: 'var(--text-muted)' }}>
                    ({unit.lessonCount})
                  </span>
                </h3>
              </div>
              <span style={{ fontFamily: 'var(--font-code)', fontSize: '9.5px', color: 'var(--text-muted)' }}>
                {unit.subtitleEn}
              </span>
            </div>

            <div className="progress-unit-rows">
              {unit.lessons.map((lesson) => (
                <div key={lesson.id} className="progress-row">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="progress-lesson-id">{lesson.id}</span>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-neutral-900)' }}>
                        {lesson.titleAr}
                      </span>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '9.5px',
                          fontFamily: 'var(--font-code)',
                          color: 'var(--color-neutral-400)',
                          marginTop: '-1px',
                        }}
                      >
                        {lesson.titleEn}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '10px' }}>
                      {data.legendKeys.map((k) => (
                        <span
                          key={k.key}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px',
                            color: k.isStar ? 'var(--color-amber-600)' : 'var(--color-neutral-600)',
                            fontWeight: k.isStar ? 'bold' : 'normal',
                          }}
                        >
                          <span className={`check-box-square ${k.isStar ? 'is-star' : ''}`}>
                            {k.isStar ? '★' : ''}
                          </span>
                          {k.short}
                        </span>
                      ))}
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-code)',
                        fontSize: '10px',
                        color: 'var(--color-neutral-400)',
                        backgroundColor: 'var(--color-neutral-100)',
                        padding: '1px 6px',
                        borderRadius: '3px',
                      }}
                    >
                      ....../....../2026م
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {unit.milestone && (
              <div className="unit-milestone-bar">
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Icon name={unit.milestone.icon} size={14} color="var(--color-cobalt-600)" />
                  {unit.milestone.title}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-code)',
                    fontSize: '9.5px',
                    backgroundColor: '#ffffff',
                    padding: '1px 6px',
                    borderRadius: '3px',
                    border: '1px solid var(--color-neutral-200)',
                  }}
                >
                  {unit.milestone.status}
                </span>
              </div>
            )}

            {unit.capstone && (
              <div className="capstone-milestone-bar">
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 'var(--font-weight-bold)' }}>
                  <Icon name={unit.capstone.icon} size={16} color="var(--color-amber-400)" />
                  {unit.capstone.title}
                </span>
                <span
                  style={{
                    fontSize: '9.5px',
                    fontWeight: 'var(--font-weight-bold)',
                    backgroundColor: 'var(--color-amber-400)',
                    color: 'var(--color-neutral-950)',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {unit.capstone.badge}
                </span>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* 4. Student Contract & Goal Box */}
      <div className="student-contract-box">
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
          <Icon name="edit_note" size={16} color="var(--color-cobalt-600)" />
          <span style={{ fontSize: '11.5px', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-navy-950)' }}>
            {data.studentContract.title}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', fontSize: '11px', marginBottom: '6px' }}>
          <span style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--color-neutral-700)', flexShrink: 0 }}>
            {data.studentContract.goalPrompt}
          </span>
          <span className="dotted-write-line" />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '10.5px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontWeight: 'var(--font-weight-bold)' }}>
              {data.studentContract.signaturePrompt}
            </span>
            <span style={{ fontFamily: 'var(--font-code)', color: 'var(--color-neutral-400)' }}>
              ...................................................
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontWeight: 'var(--font-weight-bold)' }}>
              {data.studentContract.datePrompt}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-code)',
                backgroundColor: '#ffffff',
                padding: '1px 6px',
                borderRadius: '3px',
                border: '1px solid var(--color-neutral-200)',
              }}
            >
              ...... / ...... / 2026م
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  if (!standalone) {
    return innerContent;
  }

  return (
    <PageShell
      headerProps={{
        unitTitle: data.stageLabel,
        lessonTitle: `${data.title} ${data.subtitle}`,
        badgeText: data.academicYear,
      }}
      footerProps={{
        currentPage: '02',
        subjectTitle: 'خريطة الإنجاز ومسار الدروس (14 درساً)',
      }}
      className="progress-tracker-page"
    >
      {innerContent}
    </PageShell>
  );
}
