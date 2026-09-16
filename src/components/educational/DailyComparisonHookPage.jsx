import React from 'react';
import Icon from '../ui/Icon.jsx';
import MentorAvatar from '../ui/MentorAvatar.jsx';
import { useLanguage } from '../../i18n/LanguageContext.js';

/**
 * DailyComparisonHookPage (Page 01)
 * Educational Page Type: Engagement Hook & 30-Year Contrast Activity.
 * Replaces dry abstract tables with a high-engagement daily comparison:
 * "كيف غيّرت الحوسبة يومنا خلال 30 عاماً؟ (1995 مقابل 2026)"
 * Features:
 * - Essential inquiry context of the remote Egyptian student
 * - 4 life domain cards with 2026 vs 1995 comparison and handwriting ruled lines
 * - Mentor instructional quote
 * - Pair synthesis and signature reflection zone
 */
export default function DailyComparisonHookPage({
  _badge,
  _lessonCode,
  _unitTitle,
  title,
  inquiryQuestion,
  activityMeta,
  domains = [],
  mentorQuote,
  synthesisQuestion,
}) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const defaultTitle = isEn
    ? 'How Computing Reshaped Human Potential & Modern Society'
    : 'كيف غيّرت الحوسبة إمكانات البشر ومجتمعاتهم المعاصرة؟';

  const defaultInquiry = isEn
    ? 'Only thirty years ago, a student in a remote village could not access encyclopedias or pay fees with a phone tap... How did digital technology leap from isolated laboratories into the living pulse of our daily routine?'
    : 'قبل ثلاثين عاماً فقط، لم يكن بمقدور طالب في قرية مصرية نائية الوصول لأعظم أمهات الكتب، ولا سداد الرسوم بضغطة زر بهاتفه.. كيف قفزت التكنولوجيا الرقمية من آلات محصورة في المعامل إلى شرايين حيوية تنبض بها تفاصيل يومنا؟';

  const defaultActivityMeta = {
    type: isEn ? 'Collaborative Pair Workshop (Student A + Student B)' : 'عمل ثنائي تعاوني (الطالب أ + الطالب ب)',
    duration: isEn ? 'Estimated Duration: 10 mins' : 'الزمن المقترح: 10 دقائق',
    instructions: isEn
      ? 'Reflect on your normal day, then partner with your peer to compare your routine with how your parents or grandparents achieved the same tasks in 1995, and record your inferences:'
      : 'تأمل يومك المعتاد، ثم تعاون مع زميلك المجاور لمقارنة أنشطتك اليومية بكيفية أداء الوالد أو الجد لنفس المهام عام 1995م، ودوّنا استنتاجاتكما بخط اليد:',
  };

  const finalActivityMeta = activityMeta || defaultActivityMeta;

  return (
    <div className="educational-page daily-comparison-page">
      {/* 1. Page Title & Essential Inquiry Question */}
      <section className="comparison-page-header">
        <h1 className="comparison-page-title font-heading">{title || defaultTitle}</h1>

        <div className="comparison-inquiry-box">
          <div className="inquiry-icon-wrap">
            <Icon name="psychology" size={20} color="var(--color-cobalt-600)" />
          </div>
          <div className="inquiry-body">
            <span className="inquiry-label font-heading">
              {isEn ? 'Essential Inquiry Question:' : 'سؤال الاستقصاء الجوهري:'}
            </span>
            <p className="inquiry-text">{inquiryQuestion || defaultInquiry}</p>
          </div>
        </div>
      </section>

      {/* 2. Activity Instructions Bar */}
      <section className="activity-instructions-bar">
        <div className="instructions-right">
          <span className="collab-icon-bubble" aria-hidden="true">👥</span>
          <div>
            <div className="instructions-title font-heading">
              <span>{finalActivityMeta.type}</span>
            </div>
            <p className="instructions-subtext">{finalActivityMeta.instructions}</p>
          </div>
        </div>
        <div className="instructions-duration">
          <Icon name="schedule" size={13} color="var(--color-amber-600)" />
          <span>{finalActivityMeta.duration}</span>
        </div>
      </section>

      {/* 3. The 4 Daily Life Domain Comparison Cards */}
      <section className="comparison-domains-list">
        {domains.map((domain, idx) => (
          <div key={domain.id || idx} className="domain-activity-card">
            <div className="domain-card-header">
              <div className="domain-title-group">
                <span className="domain-icon-bubble">
                  <Icon name={domain.icon || 'explore'} size={14} color="currentColor" />
                </span>
                <span className="domain-title font-heading">{domain.title}</span>
                {domain.subtext && <span className="domain-subtext">{domain.subtext}</span>}
              </div>
            </div>

            <div className="domain-card-body">
              {/* Chronological comparison */}
              <div className="domain-compare-cols">
                <div className="domain-col-then">
                  <span className="compare-pill pill-then">
                    {isEn ? '30 Years Ago (1995)' : 'قبل 30 عاماً (1995م)'}
                  </span>
                  <p className="compare-content">{domain.practice1995}</p>
                </div>

                <div className="domain-col-now">
                  <span className="compare-pill pill-now">
                    {isEn ? 'Your Practice Today (2026)' : 'ممارستك اليوم (2026م)'}
                  </span>
                  <p className="compare-content">{domain.practice2026}</p>
                </div>
              </div>

              {/* Student Handwriting Ruled Lines */}
              <div className="domain-writing-zone">
                <span className="writing-prompt-label">
                  {isEn ? 'Inferred Transformation Impact:' : 'أثر التحول المستنتج:'}
                </span>
                <div className="domain-ruled-lines">
                  <div className="domain-ruled-line" />
                  <div className="domain-ruled-line" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 4. Mentor Insight Quote */}
      {mentorQuote && (
        <section className="comparison-mentor-quote">
          <div className="mentor-quote-avatar">
            <MentorAvatar size={30} />
          </div>
          <div className="mentor-quote-content">
            <blockquote className="mentor-quote-text">
              "{mentorQuote.text}"
            </blockquote>
            {mentorQuote.author && (
              <span className="mentor-quote-author">— {mentorQuote.author}</span>
            )}
          </div>
        </section>
      )}

      {/* 5. Synthesis & Signature Footer Bar */}
      <section className="comparison-synthesis-bar">
        <div className="synthesis-question-group">
          <Icon name="lightbulb" size={16} color="var(--color-cobalt-600)" />
          <div>
            <strong className="synthesis-title">
              {isEn ? 'Pair Final Synthesis:' : 'الاستنتاج الختامي للثنائي:'}
            </strong>
            <span className="synthesis-text">
              {' '}
              {synthesisQuestion || (isEn ? 'What crucial technological factor made all these daily comparisons possible today?' : 'ما العامل التكنولوجي الحاسم الذي جعل كل هذه المقارنات ممكنة اليوم؟')}
            </span>
          </div>
        </div>

        <div className="synthesis-signatures">
          <div className="sig-item">
            <span>{isEn ? 'Student (A) Signature:' : 'توقيع الطالب (أ):'}</span>
            <span className="sig-line" />
          </div>
          <div className="sig-item">
            <span>{isEn ? 'Student (B) Signature:' : 'توقيع الطالب (ب):'}</span>
            <span className="sig-line" />
          </div>
        </div>
      </section>
    </div>
  );
}
