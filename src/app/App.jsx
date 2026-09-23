import React, { useState, useEffect } from 'react';
import { VIEWS, NAVIGATION_SECTIONS } from './routes.js';
import HomePage from '../pages/HomePage.jsx';
import CurriculumCoverPage from '../components/educational/frontmatter/CurriculumCoverPage.jsx';
import GlobalRoadmapPage from '../components/educational/frontmatter/GlobalRoadmapPage.jsx';
import ProgressTrackerPage from '../components/educational/frontmatter/ProgressTrackerPage.jsx';
import MasteryPedagogyPage from '../components/educational/frontmatter/MasteryPedagogyPage.jsx';
import LessonRenderer from '../renderer/LessonRenderer.jsx';
import LessonMasterCheatSheet from '../components/educational/LessonMasterCheatSheet.jsx';
import LessonExamPage from '../components/educational/exam/LessonExamPage.jsx';
import InstructorHeader from '../components/layout/InstructorHeader.jsx';
import LessonPager from '../components/layout/LessonPager.jsx';
import { CURRICULUM_LESSONS } from '../data/curriculumRegistry.js';
import { lesson01Data } from '../data/lesson01Data.js';
import { lesson01DataEn } from '../data/lesson01DataEn.js';
import { lesson01CheatSheetData } from '../data/lesson01CheatSheetData.js';
import { lesson01CheatSheetDataEn } from '../data/lesson01CheatSheetDataEn.js';
import { globalRoadmapData, progressTrackerData, masteryPedagogyData } from '../data/frontMatterData.js';
import { globalRoadmapDataEn, progressTrackerDataEn, masteryPedagogyDataEn } from '../data/frontMatterDataEn.js';
import Icon from '../components/ui/Icon.jsx';
import LanguageSwitcher from '../components/ui/LanguageSwitcher.jsx';
import { useLanguage } from '../i18n/LanguageContext.js';
import { LanguageProvider } from '../i18n/LanguageProvider.jsx';

function AppContent() {
  const [currentView, setCurrentView] = useState(VIEWS.CURRICULUM_COVER);
  const { language, t } = useLanguage();

  // Standalone Student Exam Mode triggered by hash #exam-1-1 or query param
  const [isStandaloneExam, setIsStandaloneExam] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        window.location.hash === '#exam-1-1' ||
        window.location.search.includes('exam=1-1')
      );
    }
    return false;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const isExam =
        window.location.hash === '#exam-1-1' ||
        window.location.search.includes('exam=1-1');
      setIsStandaloneExam(isExam);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Active curriculum data resolved by current language
  const activeLesson01 = language === 'en' ? lesson01DataEn : lesson01Data;
  const activeRoadmap = language === 'en' ? globalRoadmapDataEn : globalRoadmapData;
  const activeTracker = language === 'en' ? progressTrackerDataEn : progressTrackerData;
  const activePedagogy = language === 'en' ? masteryPedagogyDataEn : masteryPedagogyData;
  const activeCheatSheet = language === 'en' ? lesson01CheatSheetDataEn : lesson01CheatSheetData;

  // Active section resolution based on current view
  const activeSection =
    NAVIGATION_SECTIONS.find((sec) =>
      sec.pages.some((p) => p.id === currentView)
    ) || NAVIGATION_SECTIONS[1];

  const activeSectionTitle =
    language === 'en' && activeSection.titleEn ? activeSection.titleEn : activeSection.title;

  // Dynamic mapping of lesson views to page IDs
  const lessonPageIdMap = {
    [VIEWS.LESSON_1_1_PAGE0]: 'page-00',
    [VIEWS.LESSON_1_1_PAGE1]: 'page-01',
    [VIEWS.LESSON_1_1_PAGE2]: 'page-02',
    [VIEWS.LESSON_1_1_PAGE3]: 'page-03',
    [VIEWS.LESSON_1_1_PAGE4]: 'page-04',
    [VIEWS.LESSON_1_1_PAGE5]: 'page-05',
    [VIEWS.LESSON_1_1_PAGE6]: 'page-06',
    [VIEWS.LESSON_1_1_PAGE7]: 'page-07',
    [VIEWS.LESSON_1_1_PAGE8]: 'page-08',
  };

  const activeNavTab =
    currentView === VIEWS.HOME
      ? 'HOME'
      : currentView === VIEWS.CURRICULUM_COVER ||
        currentView === VIEWS.ROADMAP_PAGE1 ||
        currentView === VIEWS.TRACKER_PAGE2 ||
        currentView === VIEWS.PEDAGOGY_PAGE3 ||
        currentView === VIEWS.BOOKLET_TRILOGY
      ? 'FRONT_MATTER'
      : 'LESSON';

  const activeLessonId = 'lesson-1-1';
  const [currentLessonPageId, setCurrentLessonPageId] = useState('page-00');

  // ScrollSpy for Active Lesson (updates active stepper pill during downward scroll)
  useEffect(() => {
    if (activeNavTab !== 'LESSON') return;

    let isThrottled = false;
    const handleLessonScroll = () => {
      if (isThrottled) return;
      isThrottled = true;
      requestAnimationFrame(() => {
        const pages = activeLesson01.pages;
        const scrollPos = window.scrollY + 130;

        for (let i = pages.length - 1; i >= 0; i--) {
          const el = document.getElementById(pages[i].id);
          if (el && el.offsetTop <= scrollPos) {
            setCurrentLessonPageId(pages[i].id);
            break;
          }
        }
        isThrottled = false;
      });
    };

    window.addEventListener('scroll', handleLessonScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleLessonScroll);
  }, [activeNavTab, activeLesson01]);

  // ScrollSpy for Front Matter (updates active navigation pill during downward scroll)
  useEffect(() => {
    if (activeNavTab !== 'FRONT_MATTER') return;

    const fmElements = [
      { id: 'fm-cover', view: VIEWS.CURRICULUM_COVER },
      { id: 'fm-roadmap', view: VIEWS.ROADMAP_PAGE1 },
      { id: 'fm-tracker', view: VIEWS.TRACKER_PAGE2 },
      { id: 'fm-pedagogy', view: VIEWS.PEDAGOGY_PAGE3 },
    ];

    let isThrottled = false;
    const handleFmScroll = () => {
      if (isThrottled) return;
      isThrottled = true;
      requestAnimationFrame(() => {
        const scrollPos = window.scrollY + 130;
        for (let i = fmElements.length - 1; i >= 0; i--) {
          const el = document.getElementById(fmElements[i].id);
          if (el && el.offsetTop <= scrollPos) {
            setCurrentView(fmElements[i].view);
            break;
          }
        }
        isThrottled = false;
      });
    };

    window.addEventListener('scroll', handleFmScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleFmScroll);
  }, [activeNavTab]);

  const handleSelectHome = () => {
    setCurrentView(VIEWS.HOME);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFrontMatter = () => {
    setCurrentView(VIEWS.CURRICULUM_COVER);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLesson = (_lessonId) => {
    setCurrentView(VIEWS.LESSON_1_1_PAGE0);
    setCurrentLessonPageId('page-00');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLessonPageId = (pageId) => {
    setCurrentLessonPageId(pageId);
    const targetEntry = Object.entries(lessonPageIdMap).find(
      ([, id]) => id === pageId
    );
    if (targetEntry) {
      setCurrentView(targetEntry[0]);
    }
    const el = document.getElementById(pageId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectFmPage = (page) => {
    if (page.isPrint) {
      window.print();
      return;
    }
    setCurrentView(page.id);
    const el = document.getElementById(page.elementId || 'fm-cover');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderActiveView = () => {
    switch (currentView) {
      case VIEWS.HOME:
        return <HomePage onNavigate={setCurrentView} />;

      // Front Matter Pages (Continuous Document Feed)
      case VIEWS.CURRICULUM_COVER:
      case VIEWS.ROADMAP_PAGE1:
      case VIEWS.TRACKER_PAGE2:
      case VIEWS.PEDAGOGY_PAGE3:
      case VIEWS.BOOKLET_TRILOGY:
        return (
          <div className="front-matter-continuous-feed">
            <div id="fm-cover">
              <CurriculumCoverPage />
            </div>
            <div id="fm-roadmap">
              <GlobalRoadmapPage data={activeRoadmap} />
            </div>
            <div id="fm-tracker">
              <ProgressTrackerPage data={activeTracker} />
            </div>
            <div id="fm-pedagogy">
              <MasteryPedagogyPage data={activePedagogy} />
            </div>
          </div>
        );

      case VIEWS.LESSON_1_1_BOOKLET:
        return (
          <div className="booklet-lesson-container">
            <div
              className="screen-only"
              style={{
                maxWidth: 'var(--a4-preview-width)',
                margin: '0 auto var(--space-4)',
                padding: 'var(--space-3) var(--space-4)',
                backgroundColor: 'var(--color-navy-50)',
                border: '1px solid var(--color-navy-100)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-xs)', color: 'var(--color-navy-900)' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-success-600)',
                    display: 'inline-block',
                  }}
                />
                <strong>{t('lessonBookletPreviewNote')}</strong>
              </div>

              <button
                type="button"
                onClick={() => window.print()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--color-cobalt-600)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  padding: '6px 14px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <Icon name="print" size={16} color="#ffffff" />
                <span>{t('printBookletAction')}</span>
              </button>
            </div>

            <LessonRenderer lesson={activeLesson01} />
          </div>
        );

      case VIEWS.LESSON_1_1_CHEAT_SHEET:
        return (
          <div className="cheat-sheet-view-container">
            <div
              className="screen-only"
              style={{
                maxWidth: '1440px',
                margin: '0 auto var(--space-4)',
                padding: 'var(--space-3) var(--space-4)',
                backgroundColor: 'var(--color-navy-50)',
                border: '1px solid var(--color-navy-100)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-xs)', color: 'var(--color-navy-900)' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-amber-500)',
                    display: 'inline-block',
                  }}
                />
                <strong>{t('cheatSheetPreviewNote')}</strong>
              </div>

              <button
                type="button"
                onClick={() => window.print()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--color-cobalt-600)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  padding: '6px 14px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <Icon name="print" size={16} color="#ffffff" />
                <span>{t('cheatSheetPrintAction')}</span>
              </button>
            </div>

            <LessonMasterCheatSheet data={activeCheatSheet} />
          </div>
        );

      case VIEWS.LESSON_1_1_EXAM:
        return <LessonExamPage />;

      default: {
        return (
          <div className="lesson-continuous-feed">
            <LessonRenderer lesson={activeLesson01} />
          </div>
        );
      }
    }
  };

  if (isStandaloneExam || currentView === VIEWS.LESSON_1_1_EXAM) {
    return (
      <div
        className="student-exam-standalone-wrap"
        style={{
          minHeight: '100vh',
          backgroundColor: '#0a192f',
          color: '#ffffff',
        }}
      >
        <header
          className="screen-only"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 16px',
            backgroundColor: '#091322',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#38bdf8',
                display: 'inline-block',
                boxShadow: '0 0 8px #38bdf8',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#f8fafc',
              }}
            >
              {language === 'en'
                ? 'The Mentor — Official Student Examination'
                : 'منصة المُرشد الذكي — نظام اختبارات الطلاب الرسمية'}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <LanguageSwitcher />

            <button
              type="button"
              onClick={() => {
                if (window.location.hash) {
                  window.history.pushState(
                    '',
                    document.title,
                    window.location.pathname + window.location.search
                  );
                }
                setIsStandaloneExam(false);
                setCurrentView(VIEWS.LESSON_1_1_PAGE8);
              }}
              style={{
                background: 'transparent',
                border: '1px solid #475569',
                borderRadius: '6px',
                color: '#94a3b8',
                padding: '4px 10px',
                fontSize: '11px',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
              title={language === 'en' ? 'Return to Instructor View' : 'العودة لمنصة المعلم'}
            >
              {language === 'en' ? 'Instructor View ↩' : 'منصة المعلم ↩'}
            </button>
          </div>
        </header>

        <main style={{ padding: '8px 4px' }}>
          <LessonExamPage />
        </main>
      </div>
    );
  }

  return (
    <div className="app-root">
      {/* Modern Instructor Nav Header */}
      <InstructorHeader
        activeNavTab={activeNavTab}
        activeLessonId={activeLessonId}
        onSelectHome={handleSelectHome}
        onSelectFrontMatter={handleSelectFrontMatter}
        onSelectLesson={handleSelectLesson}
      />

      {/* Contextual Tier 2: Dedicated Lesson Pager when inside a lesson */}
      {activeNavTab === 'LESSON' && (
        <LessonPager
          lesson={activeLesson01}
          currentPageId={currentLessonPageId}
          onSelectPageId={handleSelectLessonPageId}
          onOpenBooklet={() => setCurrentView(VIEWS.LESSON_1_1_BOOKLET)}
          onOpenCheatSheet={() => setCurrentView(VIEWS.LESSON_1_1_CHEAT_SHEET)}
          onOpenExam={() => setCurrentView(VIEWS.LESSON_1_1_EXAM)}
        />
      )}

      {/* Contextual Tier 2: Clean Front-Matter Trilogy Bar */}
      {activeNavTab === 'FRONT_MATTER' && (
        <nav
          className="screen-only"
          style={{
            backgroundColor: 'var(--color-navy-900, #0f172a)',
            borderBottom: '1px solid var(--color-navy-800, #1e293b)',
            padding: '6px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            position: 'sticky',
            top: '49px',
            zIndex: 99,
            overflowX: 'auto',
          }}
          aria-label="Curriculum Guide Pages"
        >
          <div
            style={{
              fontSize: '11px',
              color: 'var(--color-teal-400, #2dd4bf)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 'bold',
              paddingInlineEnd: '8px',
              borderInlineEnd: '1px solid var(--color-navy-700, #334155)',
              whiteSpace: 'nowrap',
            }}
          >
            <span>{language === 'en' ? 'Curriculum Guide:' : 'دليل وافتتاحية المنهج:'}</span>
          </div>

          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            {NAVIGATION_SECTIONS[1].pages.map((page) => {
              const isPageActive = currentView === page.id;
              const pageLabel =
                language === 'en' && page.labelEn ? page.labelEn : page.label;
              const pageBadge =
                language === 'en' && page.badgeEn ? page.badgeEn : page.badge;

              return (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => setCurrentView(page.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    fontSize: '11.5px',
                    fontFamily: 'var(--font-body)',
                    border: page.isPrint
                      ? '1px solid rgba(245, 158, 11, 0.4)'
                      : isPageActive
                      ? '1px solid var(--color-cobalt-400, #60a5fa)'
                      : '1px solid transparent',
                    borderRadius: 'var(--radius-xs, 4px)',
                    cursor: 'pointer',
                    backgroundColor: isPageActive
                      ? 'var(--color-cobalt-700, #1d4ed8)'
                      : page.isPrint
                      ? 'rgba(245, 158, 11, 0.12)'
                      : 'rgba(15, 23, 42, 0.4)',
                    color: isPageActive
                      ? '#ffffff'
                      : page.isPrint
                      ? 'var(--color-amber-300, #fcd34d)'
                      : '#cbd5e1',
                    fontWeight: isPageActive ? 'bold' : 'normal',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.12s ease',
                  }}
                >
                  {pageBadge && (
                    <span
                      style={{
                        fontFamily: 'var(--font-code)',
                        fontSize: '9.5px',
                        backgroundColor: isPageActive ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.1)',
                        padding: '1px 5px',
                        borderRadius: '2px',
                      }}
                    >
                      {pageBadge}
                    </span>
                  )}
                  <span>{pageLabel}</span>
                  {page.isPrint && <Icon name="print" size={13} color="currentColor" />}
                </button>
              );
            })}
          </div>
        </nav>
      )}

      {/* Main Content Area */}
      <main className="app-main" style={{ padding: 'var(--space-4) 0' }}>
        {renderActiveView()}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
