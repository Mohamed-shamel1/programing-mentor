import React from 'react';

/**
 * PageFooter
 * Integrated DOM footer for reliable page numbering and provenance in print and screen.
 */
export default function PageFooter({ currentPage, totalPages, subjectTitle }) {
  return (
    <footer className="page-footer" role="contentinfo">
      <div className="page-footer-mentor">
        <span>The Mentor — المُرشد الذكي</span>
        <span aria-hidden="true">|</span>
        <span>{subjectTitle || 'البرمجة والذكاء الاصطناعي'}</span>
      </div>

      <div className="page-footer-page-num">
        {currentPage && (
          <span>
            {totalPages ? `${currentPage} / ${totalPages}` : `${currentPage}`}
          </span>
        )}
      </div>
    </footer>
  );
}
