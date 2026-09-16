import React from 'react';
import Card from '../components/ui/Card.jsx';
import CalloutBox from '../components/ui/CalloutBox.jsx';
import Badge from '../components/ui/Badge.jsx';
import { VIEWS } from '../app/routes.js';
import { useLanguage } from '../i18n/LanguageContext.js';

/**
 * HomePage
 * Architectural landing and platform identity launchpad.
 */
export default function HomePage({ onNavigate }) {
  const { t } = useLanguage();

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', padding: 'var(--space-8) var(--space-4)' }}>
      <header style={{ marginBottom: 'var(--space-8)', textAlign: 'center' }}>
        <Badge variant="cobalt">{t('homeHeroBadge')}</Badge>
        <h1 className="font-heading" style={{ marginTop: 'var(--space-3)', color: 'var(--color-navy-950)' }}>
          {t('platformName')}
        </h1>
        <p className="text-secondary" style={{ fontSize: 'var(--font-size-lg)', maxWidth: '650px', margin: '0 auto' }}>
          {t('homeHeroHeading')}
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        <Card variant="navy" title={t('corePillarsTitle')}>
          <p style={{ lineHeight: '1.7', fontSize: 'var(--font-size-md)' }}>
            {t('homeDescription')}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 'var(--space-3)',
              margin: 'var(--space-4) 0',
            }}
          >
            <div style={{ padding: 'var(--space-3)', backgroundColor: 'var(--color-navy-50)', borderRadius: 'var(--radius-xs)', border: '1px solid var(--color-navy-100)' }}>
              <strong style={{ display: 'block', color: 'var(--color-navy-900)', marginBottom: '4px', fontSize: '13px' }}>
                {t('pillar1Title')}
              </strong>
              <span style={{ fontSize: '12px', color: 'var(--color-neutral-600)' }}>
                {t('pillar1Desc')}
              </span>
            </div>

            <div style={{ padding: 'var(--space-3)', backgroundColor: 'var(--color-teal-50)', borderRadius: 'var(--radius-xs)', border: '1px solid var(--color-teal-100)' }}>
              <strong style={{ display: 'block', color: 'var(--color-teal-800)', marginBottom: '4px', fontSize: '13px' }}>
                {t('pillar2Title')}
              </strong>
              <span style={{ fontSize: '12px', color: 'var(--color-neutral-600)' }}>
                {t('pillar2Desc')}
              </span>
            </div>

            <div style={{ padding: 'var(--space-3)', backgroundColor: 'var(--color-cobalt-50)', borderRadius: 'var(--radius-xs)', border: '1px solid var(--color-cobalt-100)' }}>
              <strong style={{ display: 'block', color: 'var(--color-cobalt-800)', marginBottom: '4px', fontSize: '13px' }}>
                {t('pillar3Title')}
              </strong>
              <span style={{ fontSize: '12px', color: 'var(--color-neutral-600)' }}>
                {t('pillar3Desc')}
              </span>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-4)', display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            {onNavigate && (
              <>
                <button
                  type="button"
                  onClick={() => onNavigate(VIEWS.CURRICULUM_COVER)}
                  style={{
                    backgroundColor: 'var(--color-navy-800)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-xs)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  {t('exploreCoverBtn')}
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate(VIEWS.LESSON_1_1_PAGE0)}
                  style={{
                    backgroundColor: 'var(--color-cobalt-600)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-xs)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  {t('exploreLessonBtn')}
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate(VIEWS.LESSON_1_1_CHEAT_SHEET)}
                  style={{
                    backgroundColor: 'var(--color-amber-600)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-xs)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  {t('exploreCheatSheetBtn')}
                </button>
              </>
            )}
          </div>
        </Card>

        <CalloutBox type="mentor" title={t('mentorTitle')}>
          <p style={{ margin: 0, fontStyle: 'italic' }}>
            {t('mentorDirectQuote')}
          </p>
        </CalloutBox>
      </div>
    </div>
  );
}
