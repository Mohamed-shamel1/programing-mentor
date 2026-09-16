import React from 'react';
import PageShell from '../../layout/PageShell.jsx';
import Icon from '../../ui/Icon.jsx';
import MentorAvatar from '../../ui/MentorAvatar.jsx';
import { masteryPedagogyData as defaultData } from '../../../data/frontMatterData.js';
import { useLanguage } from '../../../i18n/LanguageContext.js';

/**
 * MasteryPedagogyPage (Front-Matter Page 03)
 * The 5-Stage Mastery Flow, The Mentor's Honor Contract, and Technical Standards.
 * Engineered for exact 1-to-1 A4 single-sheet print budgeting.
 */
export default function MasteryPedagogyPage({ data = defaultData, standalone = true }) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const innerContent = (
    <div className="mastery-pedagogy-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
      {/* 1. Subheader Banner */}
      <div
        style={{
          background: 'linear-gradient(to left, var(--color-navy-50), #ffffff)',
          border: '1px solid var(--color-neutral-200)',
          borderRadius: 'var(--radius-md)',
          padding: '6px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '6px',
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--color-cobalt-600)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Icon name="psychology" size={18} color="#ffffff" />
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1px' }}>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 'var(--font-weight-black)', margin: 0 }}>
              {data.hero.title}
            </h1>
            <span
              style={{
                fontFamily: 'var(--font-code)',
                fontSize: '9px',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-cobalt-700)',
                backgroundColor: 'var(--color-cobalt-100)',
                padding: '1px 5px',
                borderRadius: '3px',
              }}
            >
              {data.hero.badge}
            </span>
          </div>
          <p style={{ fontSize: '10.5px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
            {data.hero.description}
          </p>
        </div>
      </div>

      {/* 2. The 5-Stage Mastery Flow */}
      <div style={{ marginBottom: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                width: '4px',
                height: '12px',
                backgroundColor: 'var(--color-cobalt-600)',
                borderRadius: '2px',
                display: 'inline-block',
              }}
            />
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', fontWeight: 'var(--font-weight-black)', margin: 0 }}>
              {isEn ? 'The 5-Stage Mastery Flow' : 'دورة الإتقان الخماسية — The Mastery Flow'}
            </h2>
          </div>
          <span style={{ fontSize: '9.5px', color: 'var(--text-muted)' }}>
            {isEn
              ? 'An engineering progression from foundational logic to evidence-based decisions'
              : 'تسلسل إدراكي هندسي يبدأ بالمعنى وينتهي بصنع القرار'}
          </span>
        </div>

        <div className="mastery-flow-grid" style={{ marginBottom: '4px' }}>
          {data.masteryStages.map((stage) => {
            const badgeBg =
              stage.theme === 'ch1' ? 'var(--theme-ch1-accent)' :
              stage.theme === 'ch4' ? 'var(--theme-ch4-accent)' :
              stage.theme === 'teal' ? 'var(--color-teal-600)' :
              stage.theme === 'ch3' ? 'var(--theme-ch3-accent)' :
              'var(--color-navy-900)';

            const lightBg =
              stage.theme === 'ch1' ? 'var(--theme-ch1-bg)' :
              stage.theme === 'ch4' ? 'var(--theme-ch4-bg)' :
              stage.theme === 'teal' ? 'var(--color-teal-50)' :
              stage.theme === 'ch3' ? 'var(--theme-ch3-bg)' :
              'var(--color-neutral-100)';

            const textCol =
              stage.theme === 'ch1' ? 'var(--theme-ch1-text)' :
              stage.theme === 'ch4' ? 'var(--theme-ch4-text)' :
              stage.theme === 'teal' ? 'var(--color-teal-700)' :
              stage.theme === 'ch3' ? 'var(--theme-ch3-text)' :
              'var(--color-neutral-800)';

            return (
              <div key={stage.step} className="mastery-stage-card">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <span className="mastery-stage-num" style={{ backgroundColor: badgeBg }}>
                      {stage.step}
                    </span>
                    <Icon name={stage.icon} size={15} color={badgeBg} />
                  </div>

                  <div style={{ fontSize: '11px', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-navy-950)', marginBottom: '1px' }}>
                    {stage.titleAr}
                  </div>
                  <div style={{ fontFamily: 'var(--font-code)', fontSize: '8px', fontWeight: 'bold', color: textCol, marginBottom: '4px' }}>
                    {stage.titleEn}
                  </div>

                  <div
                    style={{
                      backgroundColor: lightBg,
                      color: textCol,
                      fontSize: '8.5px',
                      fontWeight: 'bold',
                      padding: '2px 4px',
                      borderRadius: '3px',
                      marginBottom: '4px',
                      lineHeight: 1.25,
                    }}
                  >
                    {stage.highlight}
                  </div>

                  <p style={{ fontSize: '9px', color: 'var(--color-neutral-600)', margin: 0, lineHeight: 1.35 }}>
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. The Mentor's Honor Contract Card */}
      <div className="honor-contract-card" style={{ padding: '8px 12px', marginBottom: '6px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--color-neutral-200)',
            paddingBottom: '5px',
            marginBottom: '6px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="verified" size={16} color="var(--color-amber-600)" />
            <div>
              <h3 style={{ fontSize: '11.5px', fontWeight: 'var(--font-weight-bold)', margin: 0 }}>
                {data.honorContract.title}
              </h3>
              <span style={{ fontSize: '9.5px', color: 'var(--text-muted)' }}>
                {data.honorContract.subtitle}
              </span>
            </div>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-code)',
              fontSize: '9px',
              backgroundColor: 'var(--color-neutral-100)',
              padding: '1px 6px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-neutral-200)',
            }}
          >
            {data.honorContract.badge}
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.3fr', gap: '10px', alignItems: 'center' }}>
          {/* Mentor Character Box */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-neutral-200)',
              borderRadius: 'var(--radius-sm)',
              padding: '6px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <MentorAvatar size={54} />
            <span style={{ fontSize: '11px', fontWeight: 'var(--font-weight-bold)', marginTop: '4px' }}>
              {data.honorContract.mentorCard.roleTitle}
            </span>
            <span style={{ fontSize: '9.5px', color: 'var(--color-cobalt-700)', fontWeight: 'var(--font-weight-medium)' }}>
              {data.honorContract.mentorCard.roleSubtitle}
            </span>
            <span
              style={{
                fontSize: '8.5px',
                color: 'var(--color-success-700)',
                backgroundColor: 'var(--color-success-50)',
                border: '1px solid var(--color-success-100)',
                borderRadius: 'var(--radius-full)',
                padding: '1px 6px',
                marginTop: '4px',
                fontWeight: 'bold',
              }}
            >
              {data.honorContract.mentorCard.statusBadge}
            </span>
          </div>

          {/* 3 Core Rules */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {data.honorContract.rules.map((rule) => {
              const ruleCol =
                rule.theme === 'ch1' ? 'var(--theme-ch1-accent)' :
                rule.theme === 'ch4' ? 'var(--theme-ch4-accent)' :
                'var(--color-teal-600)';

              return (
                <div
                  key={rule.number}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-neutral-200)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '5px 8px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '6px',
                  }}
                >
                  <span
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '3px',
                      backgroundColor: ruleCol,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-code)',
                      fontSize: '9px',
                      fontWeight: 'bold',
                      flexShrink: 0,
                    }}
                  >
                    {rule.number}
                  </span>
                  <div>
                    <h4 style={{ fontSize: '10.5px', fontWeight: 'var(--font-weight-bold)', margin: 0, color: 'var(--color-navy-950)' }}>
                      {rule.title}
                    </h4>
                    <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-600)', margin: '1px 0 0 0', lineHeight: 1.3 }}>
                      {rule.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Technical Standards Grid */}
      <div className="tech-standards-grid">
        {data.technicalStandards.map((std) => (
          <div key={std.titleEn} className="tech-standard-card">
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '4px',
                backgroundColor: 'var(--color-navy-100)',
                color: 'var(--color-navy-800)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Icon name={std.icon} size={14} />
            </div>
            <div style={{ overflow: 'hidden', minWidth: 0, flex: 1 }}>
              <div style={{ fontSize: '8.5px', fontWeight: 'bold', color: 'var(--color-cobalt-700)', textTransform: 'uppercase', lineHeight: 1.1 }}>
                {std.titleEn}
              </div>
              <div style={{ fontSize: '9px', fontFamily: 'var(--font-code)', fontWeight: 'bold', color: 'var(--color-neutral-700)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', lineHeight: 1.2 }}>
                {std.subtitle}
              </div>
            </div>
          </div>
        ))}
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
        lessonTitle: data.centerBadge,
        badgeText: data.academicYear,
      }}
      footerProps={{
        currentPage: '03',
        subjectTitle: isEn ? 'Pedagogical Philosophy & Cognitive Mastery Flow' : 'فلسفة المنهج ودورة الإتقان المعرفي',
      }}
      className="mastery-pedagogy-page"
    >
      {innerContent}
    </PageShell>
  );
}
