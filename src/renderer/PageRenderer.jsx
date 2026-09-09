import React from 'react';
import PageShell from '../components/layout/PageShell.jsx';
import { getPageComponent } from './pageTypeRegistry.js';

/**
 * PageRenderer
 * Interprets a single page specification, encapsulates it within PageShell,
 * and delegates the body rendering to the registered Page Type component.
 */
export default function PageRenderer({ page }) {
  if (!page) {
    return null;
  }

  const PageComponent = getPageComponent(page.type);

  if (!PageComponent) {
    return (
      <PageShell
        headerProps={{
          unitTitle: page.unitTitle,
          lessonTitle: page.lessonTitle,
          badgeText: 'نوع صفحة غير مسجل',
        }}
        footerProps={{
          currentPage: page.pageNumber,
          totalPages: page.totalPages,
        }}
      >
        <div style={{ padding: 'var(--space-6)', textAlign: 'center' }}>
          <h3>نوع الصفحة ({page.type}) لم يتم تسجيله بعد.</h3>
          <p className="text-muted">
            سيتم ربط هذا المكون في سجل الأنواع (pageTypeRegistry) عند اعتماده في مراحل التطوير التالية.
          </p>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell
      headerProps={{
        unitTitle: page.unitTitle,
        lessonTitle: page.lessonTitle,
        badgeText: page.badgeText,
      }}
      footerProps={{
        currentPage: page.pageNumber,
        totalPages: page.totalPages,
      }}
    >
      <PageComponent {...(page.content || {})} />
    </PageShell>
  );
}
