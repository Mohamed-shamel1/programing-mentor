import React from 'react';
import PageHeader from './PageHeader.jsx';
import PageFooter from './PageFooter.jsx';

/**
 * PageShell
 * The fundamental architectural container representing an A4 page sheet.
 * Responsible for A4 dimensions, print-break boundaries, and integrated header/footer.
 */
export default function PageShell({
  id,
  children,
  headerProps = {},
  footerProps = {},
  className = '',
  hideHeader = false,
  hideFooter = false,
}) {
  return (
    <div className="page-shell-wrapper" id={id}>
      <article className={`page-shell ${className}`.trim()}>
        {!hideHeader && <PageHeader {...headerProps} />}
        <main className={`page-content ${hideHeader ? 'no-header' : ''} ${hideFooter ? 'no-footer' : ''}`}>
          {children}
        </main>
        {!hideFooter && <PageFooter {...footerProps} />}
      </article>
    </div>
  );
}
