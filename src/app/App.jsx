import React, { useState } from 'react';
import { VIEWS, NAVIGATION_SECTIONS } from './routes.js';
import HomePage from '../pages/HomePage.jsx';
import CurriculumCoverPage from '../components/educational/frontmatter/CurriculumCoverPage.jsx';
import GlobalRoadmapPage from '../components/educational/frontmatter/GlobalRoadmapPage.jsx';
import ProgressTrackerPage from '../components/educational/frontmatter/ProgressTrackerPage.jsx';
import MasteryPedagogyPage from '../components/educational/frontmatter/MasteryPedagogyPage.jsx';
import LessonRenderer from '../renderer/LessonRenderer.jsx';
import { lesson01Data } from '../data/lesson01Data.js';
import Icon from '../components/ui/Icon.jsx';

export default function App() {
  const [currentView, setCurrentView] = useState(VIEWS.LESSON_1_1_PAGE6);

  // Active section resolution based on current view
  const activeSection =
    NAVIGATION_SECTIONS.find((sec) =>
      sec.pages.some((p) => p.id === currentView)
    ) || NAVIGATION_SECTIONS[1];

  const page0Lesson = {
    ...lesson01Data,
    pages: lesson01Data.pages.filter((p) => p.id === 'page-00'),
  };

  const page1Lesson = {
    ...lesson01Data,
    pages: lesson01Data.pages.filter((p) => p.id === 'page-01'),
  };

  const page2Lesson = {
    ...lesson01Data,
    pages: lesson01Data.pages.filter((p) => p.id === 'page-02'),
  };

  const page3Lesson = {
    ...lesson01Data,
    pages: lesson01Data.pages.filter((p) => p.id === 'page-03'),
  };

  const page4Lesson = {
    ...lesson01Data,
    pages: lesson01Data.pages.filter((p) => p.id === 'page-04'),
  };

  const page5Lesson = {
    ...lesson01Data,
    pages: lesson01Data.pages.filter((p) => p.id === 'page-05'),
  };

  const page6Lesson = {
    ...lesson01Data,
    pages: lesson01Data.pages.filter((p) => p.id === 'page-06'),
  };


  const renderActiveView = () => {
    switch (currentView) {
      case VIEWS.HOME:
        return <HomePage onNavigate={setCurrentView} />;

      // Front Matter Pages
      case VIEWS.CURRICULUM_COVER:
        return <CurriculumCoverPage />;
      case VIEWS.ROADMAP_PAGE1:
        return <GlobalRoadmapPage />;
      case VIEWS.TRACKER_PAGE2:
        return <ProgressTrackerPage />;
      case VIEWS.PEDAGOGY_PAGE3:
        return <MasteryPedagogyPage />;
      case VIEWS.BOOKLET_TRILOGY:
        return (
          <div className="booklet-trilogy-container">
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
                <strong>معاينة كتيب افتتاحية المنهج الكامل (الغلاف + 3 صفحات):</strong> كل صفحة تطبع في ورقة A4 منفصلة.
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
                <span>طباعة الكتيب (A4)</span>
              </button>
            </div>

            <CurriculumCoverPage />
            <GlobalRoadmapPage />
            <ProgressTrackerPage />
            <MasteryPedagogyPage />
          </div>
        );

      // Lesson 1-1 Pages
      case VIEWS.LESSON_1_1_PAGE0:
        return (
          <div className="lesson-page-preview">
            <LessonRenderer lesson={page0Lesson} />
          </div>
        );
      case VIEWS.LESSON_1_1_PAGE1:
        return (
          <div className="lesson-page-preview">
            <LessonRenderer lesson={page1Lesson} />
          </div>
        );
      case VIEWS.LESSON_1_1_PAGE2:
        return (
          <div className="lesson-page-preview">
            <LessonRenderer lesson={page2Lesson} />
          </div>
        );
      case VIEWS.LESSON_1_1_PAGE3:
        return (
          <div className="lesson-page-preview">
            <LessonRenderer lesson={page3Lesson} />
          </div>
        );
      case VIEWS.LESSON_1_1_PAGE4:
        return (
          <div className="lesson-page-preview">
            <LessonRenderer lesson={page4Lesson} />
          </div>
        );
      case VIEWS.LESSON_1_1_PAGE5:
        return (
          <div className="lesson-page-preview">
            <LessonRenderer lesson={page5Lesson} />
          </div>
        );
      case VIEWS.LESSON_1_1_PAGE6:
        return (
          <div className="lesson-page-preview">
            <LessonRenderer lesson={page6Lesson} />
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
                <strong>معاينة كتيب الدرس 1-1 المطبوع (3 صفحات متتالية):</strong> كل صفحة تُطبع في ورقة A4 منفصلة تماماً.
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
                <span>طباعة الكتيب (A4)</span>
              </button>
            </div>

            <LessonRenderer lesson={lesson01Data} />
          </div>
        );

      default:
        return <CurriculumCoverPage />;
    }
  };

  return (
    <div className="app-root">
      {/* Top Application Bar: Tier 1 (Screen Only) */}
      <header
        className="screen-only"
        style={{
          backgroundColor: 'var(--color-navy-950)',
          color: 'var(--text-inverse)',
          padding: '8px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid var(--color-navy-800)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        {/* Brand & Level Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: 'var(--radius-xs)',
              backgroundColor: 'var(--color-cobalt-600)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 10px rgba(56, 189, 248, 0.3)',
            }}
          >
            <Icon name="psychology" size={18} color="#ffffff" />
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--font-weight-black)',
                fontSize: '14px',
                color: '#ffffff',
                display: 'block',
                lineHeight: 1.1,
              }}
            >
              The Mentor — المُرشد الذكي
            </span>
            <span
              style={{
                fontSize: '10px',
                color: 'var(--color-neutral-400)',
                display: 'block',
              }}
            >
              البرمجة والذكاء الاصطناعي — الصف الأول الثانوي 2026/2027
            </span>
          </div>
        </div>

        {/* Tier 1: Section Switcher Tabs */}
        <div
          style={{
            display: 'flex',
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid var(--color-navy-800)',
            borderRadius: 'var(--radius-sm)',
            padding: '3px',
            gap: '4px',
          }}
        >
          {NAVIGATION_SECTIONS.map((section) => {
            const isSectionActive = activeSection.id === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => setCurrentView(section.defaultView)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  fontSize: '12.5px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: isSectionActive ? 'bold' : 'normal',
                  border: 'none',
                  borderRadius: 'var(--radius-xs)',
                  cursor: 'pointer',
                  backgroundColor: isSectionActive ? 'var(--color-cobalt-600)' : 'transparent',
                  color: isSectionActive ? '#ffffff' : 'var(--color-neutral-400)',
                  boxShadow: isSectionActive ? 'var(--shadow-sm)' : 'none',
                  transition: 'all 0.15s ease',
                }}
              >
                <Icon
                  name={section.icon}
                  size={15}
                  color={isSectionActive ? '#ffffff' : 'var(--color-neutral-400)'}
                />
                <span>{section.title}</span>
              </button>
            );
          })}
        </div>

        {/* Quick Action: Direct Print Shortcut */}
        <div>
          <button
            type="button"
            onClick={() => window.print()}
            title="طباعة الصفحة أو الكتيب المعروض حالياً بنظام A4"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid var(--color-navy-700)',
              color: 'var(--color-neutral-200)',
              borderRadius: 'var(--radius-xs)',
              padding: '6px 12px',
              fontSize: '11px',
              cursor: 'pointer',
              fontFamily: 'var(--font-heading)',
            }}
          >
            <Icon name="print" size={14} color="var(--color-teal-400)" />
            <span>طباعة (A4)</span>
          </button>
        </div>
      </header>

      {/* Tier 2: Sub-Nav Contextual Pages Bar (Screen Only) */}
      <nav
        className="screen-only"
        style={{
          backgroundColor: 'var(--color-navy-900)',
          borderBottom: '1px solid var(--color-navy-800)',
          padding: '6px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          position: 'sticky',
          top: '49px',
          zIndex: 99,
          overflowX: 'auto',
        }}
      >
        <div
          style={{
            fontSize: '11px',
            color: 'var(--color-teal-400)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            paddingInlineEnd: '8px',
            borderInlineEnd: '1px solid var(--color-navy-700)',
          }}
        >
          <span>صفحات {activeSection.title}:</span>
        </div>

        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          {activeSection.pages.map((page) => {
            const isPageActive = currentView === page.id;
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
                    ? '1px solid var(--color-cobalt-400)'
                    : '1px solid transparent',
                  borderRadius: 'var(--radius-xs)',
                  cursor: 'pointer',
                  backgroundColor: isPageActive
                    ? 'var(--color-cobalt-700)'
                    : page.isPrint
                    ? 'rgba(245, 158, 11, 0.12)'
                    : 'rgba(15, 23, 42, 0.4)',
                  color: isPageActive
                    ? '#ffffff'
                    : page.isPrint
                    ? 'var(--color-amber-300)'
                    : 'var(--color-neutral-300)',
                  fontWeight: isPageActive ? 'bold' : 'normal',
                  transition: 'all 0.12s ease',
                }}
              >
                {page.badge && (
                  <span
                    style={{
                      fontFamily: 'var(--font-code)',
                      fontSize: '9.5px',
                      backgroundColor: isPageActive ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.1)',
                      padding: '1px 5px',
                      borderRadius: '2px',
                    }}
                  >
                    {page.badge}
                  </span>
                )}
                <span>{page.label}</span>
                {page.isPrint && <Icon name="print" size={13} color="currentColor" />}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="app-main" style={{ padding: 'var(--space-4) 0' }}>
        {renderActiveView()}
      </main>
    </div>
  );
}

