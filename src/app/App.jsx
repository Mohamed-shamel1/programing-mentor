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
import { lesson02Data } from '../data/lesson02Data.js';
import { lesson02DataEn } from '../data/lesson02DataEn.js';
import { lesson01ExamData } from '../data/lesson01ExamData.js';
import { lesson01ExamDataEn } from '../data/lesson01ExamDataEn.js';
import { lesson02ExamData } from '../data/lesson02ExamData.js';
import { lesson02ExamDataEn } from '../data/lesson02ExamDataEn.js';
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

  // Standalone Student Exam Mode triggered by hash #exam-1-1 or #exam-1-2 or query param
  const [isStandaloneExam, setIsStandaloneExam] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        window.location.hash.startsWith('#exam') ||
        window.location.search.includes('exam=')
      );
    }
    return false;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const isExam =
        window.location.hash.startsWith('#exam') ||
        window.location.search.includes('exam=');
      setIsStandaloneExam(isExam);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Active curriculum data resolved by current language
  const [selectedLessonId, setSelectedLessonId] = useState('lesson-1-1');
  const activeLesson01 = language === 'en' ? lesson01DataEn : lesson01Data;
  const activeLesson02 = language === 'en' ? lesson02DataEn : lesson02Data;
  const currentActiveLesson = selectedLessonId === 'lesson-1-2' ? activeLesson02 : activeLesson01;
  const activeLesson01Exam = language === 'en' ? lesson01ExamDataEn : lesson01ExamData;
  const activeLesson02Exam = language === 'en' ? lesson02ExamDataEn : lesson02ExamData;
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
    // Lesson 1-2
    [VIEWS.LESSON_1_2_PAGE0]: 'page-00',
    [VIEWS.LESSON_1_2_PAGE1]: 'page-01',
    [VIEWS.LESSON_1_2_PAGE2]: 'page-02',
    [VIEWS.LESSON_1_2_PAGE3]: 'page-03',
    [VIEWS.LESSON_1_2_PAGE4]: 'page-04',
    [VIEWS.LESSON_1_2_PAGE5]: 'page-05',
    [VIEWS.LESSON_1_2_PAGE6]: 'page-06',
    [VIEWS.LESSON_1_2_PAGE7]: 'page-07',
    [VIEWS.LESSON_1_2_PAGE8]: 'page-08',
    [VIEWS.LESSON_1_2_PAGE9]: 'page-09',
    [VIEWS.LESSON_1_2_PAGE10]: 'page-10',
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

  const [currentLessonPageId, setCurrentLessonPageId] = useState('page-00');

  // ScrollSpy for Active Lesson (updates active stepper pill during downward scroll)
  useEffect(() => {
    if (activeNavTab !== 'LESSON') return;

    let isThrottled = false;
    const handleLessonScroll = () => {
      if (isThrottled) return;
      isThrottled = true;
      requestAnimationFrame(() => {
        const pages = currentActiveLesson?.pages || [];
        if (pages.length === 0) {
          isThrottled = false;
          return;
        }

        // At top of page -> first station
        if (window.scrollY < 60) {
          setCurrentLessonPageId(pages[0].id);
          isThrottled = false;
          return;
        }

        // At bottom of page -> last station
        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 60
        ) {
          setCurrentLessonPageId(pages[pages.length - 1].id);
          isThrottled = false;
          return;
        }

        // Reverse search by bounding client rect
        for (let i = pages.length - 1; i >= 0; i--) {
          const el = document.getElementById(pages[i].id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 140) {
              setCurrentLessonPageId(pages[i].id);
              break;
            }
          }
        }
        isThrottled = false;
      });
    };

    window.addEventListener('scroll', handleLessonScroll, { passive: true });
    handleLessonScroll();
    return () => window.removeEventListener('scroll', handleLessonScroll);
  }, [activeNavTab, currentActiveLesson]);

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
        // At top of page -> Cover
        if (window.scrollY < 60) {
          setCurrentView(VIEWS.CURRICULUM_COVER);
          isThrottled = false;
          return;
        }

        // At bottom of page -> Pedagogy
        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 60
        ) {
          setCurrentView(VIEWS.PEDAGOGY_PAGE3);
          isThrottled = false;
          return;
        }

        // Reverse search by bounding client rect
        for (let i = fmElements.length - 1; i >= 0; i--) {
          const el = document.getElementById(fmElements[i].id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 140) {
              setCurrentView(fmElements[i].view);
              break;
            }
          }
        }
        isThrottled = false;
      });
    };

    window.addEventListener('scroll', handleFmScroll, { passive: true });
    handleFmScroll();
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

  const handleSelectLesson = (lessonId) => {
    const targetLessonId = lessonId || 'lesson-1-1';
    setSelectedLessonId(targetLessonId);
    if (targetLessonId === 'lesson-1-2') {
      setCurrentView(VIEWS.LESSON_1_2_PAGE0);
    } else {
      setCurrentView(VIEWS.LESSON_1_1_PAGE0);
    }
    setCurrentLessonPageId('page-00');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLessonPageId = (pageId) => {
    setCurrentLessonPageId(pageId);
    const targetEntry = Object.entries(lessonPageIdMap).find(
      ([view, id]) =>
        id === pageId &&
        (selectedLessonId === 'lesson-1-2'
          ? view.startsWith('LESSON_1_2')
          : view.startsWith('LESSON_1_1'))
    );
    if (targetEntry) {
      setCurrentView(targetEntry[0]);
    }
    const el = document.getElementById(pageId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setTimeout(() => {
        document.getElementById(pageId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  const handleSelectFmPage = (page) => {
    if (page.isPrint) {
      window.print();
      return;
    }
    setCurrentView(page.id);
    const targetId = page.elementId || 'fm-cover';
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
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
            <div id="fm-cover" className="front-matter-section">
              <CurriculumCoverPage />
            </div>
            <div id="fm-roadmap" className="front-matter-section">
              <GlobalRoadmapPage data={activeRoadmap} />
            </div>
            <div id="fm-tracker" className="front-matter-section">
              <ProgressTrackerPage data={activeTracker} />
            </div>
            <div id="fm-pedagogy" className="front-matter-section">
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
        return <LessonExamPage customData={activeLesson01Exam} />;

      case VIEWS.LESSON_1_2_EXAM:
        return <LessonExamPage customData={activeLesson02Exam} />;

      case VIEWS.LESSON_1_2_BOOKLET:
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

            <LessonRenderer lesson={activeLesson02} />
          </div>
        );

      default: {
        return (
          <div className="lesson-continuous-feed">
            <LessonRenderer lesson={currentActiveLesson} />
          </div>
        );
      }
    }
  };

  const isExam12 =
    selectedLessonId === 'lesson-1-2' ||
    (typeof window !== 'undefined' &&
      (window.location.hash === '#exam-1-2' ||
        window.location.search.includes('exam=1-2')));
  const currentActiveExam = isExam12 ? activeLesson02Exam : activeLesson01Exam;

  if (
    isStandaloneExam ||
    currentView === VIEWS.LESSON_1_1_EXAM ||
    currentView === VIEWS.LESSON_1_2_EXAM
  ) {
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
                ? `The Mentor — Official Student Examination (${isExam12 ? 'Lesson 1-2' : 'Lesson 1-1'})`
                : `منصة المُرشد الذكي — نظام اختبارات الطلاب الرسمية (${isExam12 ? 'الدرس 1-2' : 'الدرس 1-1'})`}
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
                setCurrentView(isExam12 ? VIEWS.LESSON_1_2_PAGE10 : VIEWS.LESSON_1_1_PAGE8);
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
          <LessonExamPage customData={currentActiveExam} />
        </main>
      </div>
    );
  }

  return (
    <div className="app-root">
      {/* Modern Instructor Nav Header */}
      <InstructorHeader
        activeNavTab={activeNavTab}
        activeLessonId={selectedLessonId}
        onSelectHome={handleSelectHome}
        onSelectFrontMatter={handleSelectFrontMatter}
        onSelectLesson={handleSelectLesson}
      />

      {/* Contextual Tier 2: Dedicated Lesson Pager when inside a lesson */}
      {activeNavTab === 'LESSON' && (
        <LessonPager
          lesson={currentActiveLesson}
          currentPageId={currentLessonPageId}
          onSelectPageId={handleSelectLessonPageId}
          onOpenBooklet={() =>
            setCurrentView(
              selectedLessonId === 'lesson-1-2'
                ? VIEWS.LESSON_1_2_BOOKLET
                : VIEWS.LESSON_1_1_BOOKLET
            )
          }
          onOpenCheatSheet={() =>
            setCurrentView(
              selectedLessonId === 'lesson-1-2'
                ? VIEWS.LESSON_1_2_CHEAT_SHEET
                : VIEWS.LESSON_1_1_CHEAT_SHEET
            )
          }
          onOpenExam={() =>
            setCurrentView(
              selectedLessonId === 'lesson-1-2'
                ? VIEWS.LESSON_1_2_EXAM
                : VIEWS.LESSON_1_1_EXAM
            )
          }
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
                  onClick={() => handleSelectFmPage(page)}
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
