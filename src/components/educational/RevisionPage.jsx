import React from 'react';
import Card from '../ui/Card.jsx';
import CalloutBox from '../ui/CalloutBox.jsx';
import Badge from '../ui/Badge.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';
import StudentExamPortalCard from './exam/StudentExamPortalCard.jsx';

/**
 * RevisionPage
 * Educational Page Type: Lesson Summary, Key Vocabulary & Self-Assessment.
 * Serves as the synthesis and review anchor for a lesson.
 * All content received via props.
 */
export default function RevisionPage({
  badge,
  title,
  summaryCards = [],
  keyTerms = [],
  checkQuestions = [],
  mentorClosing,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultBadge = isEn ? 'Review & Synthesis' : 'مراجعة وتثبيت';
  const finalBadge = badge || defaultBadge;

  return (
    <div className="educational-page revision-page">
      {finalBadge && <Badge variant="navy">{finalBadge}</Badge>}

      {title && (
        <h2 className="page-heading font-heading" style={{ marginTop: 'var(--space-2)' }}>
          {title}
        </h2>
      )}

      {summaryCards.length > 0 && (
        <div className="comparison-grid" style={{ marginBottom: 'var(--space-4)' }}>
          {summaryCards.map((card, idx) => (
            <Card key={idx} variant="navy" title={card.title}>
              <p>{card.content}</p>
            </Card>
          ))}
        </div>
      )}

      {keyTerms.length > 0 && (
        <Card variant="teal" title={isEn ? 'Key Vocabulary' : 'مصطلحات رئيسية'}>
          <table>
            <thead>
              <tr>
                <th style={{ width: '35%' }}>{isEn ? 'Term' : 'المصطلح'}</th>
                <th>{isEn ? 'Standard Definition' : 'المفهوم المعياري'}</th>
              </tr>
            </thead>
            <tbody>
              {keyTerms.map((item, idx) => (
                <tr key={idx}>
                  <td><strong>{item.term}</strong></td>
                  <td>{item.definition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}

      {checkQuestions.length > 0 && (
        <div className="activity-box" style={{ marginTop: 'var(--space-4)' }}>
          <h4 className="font-heading" style={{ marginBottom: 'var(--space-2)' }}>
            {isEn ? 'Quick Self-Assessment:' : 'تقييم ذاتي سريع:'}
          </h4>
          <ol>
            {checkQuestions.map((q, idx) => (
              <li key={idx} style={{ marginBottom: 'var(--space-2)' }}>
                {q}
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Instructor's Student Exam Portal Card with Real QR Code */}
      <StudentExamPortalCard lessonCode="1-1" examHash="#exam-1-1" />

      {mentorClosing && (
        <CalloutBox
          type="mentor"
          title={mentorClosing.title || (isEn ? "Mentor's Closing Insight" : 'رسالة المُرشد الختامية')}
          style={{ marginTop: 'var(--space-4)' }}
        >
          <p>{mentorClosing.text}</p>
        </CalloutBox>
      )}
    </div>
  );
}
