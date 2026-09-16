import React from 'react';
import PageShell from '../../layout/PageShell.jsx';
import Icon from '../../ui/Icon.jsx';
import { useLanguage } from '../../../i18n/LanguageContext.js';

/**
 * CurriculumCoverPage
 * The Official Front Cover (A4) for Egyptian Baccalaureate Grade 11
 * Subject: Programming & Artificial Intelligence (البرمجة والذكاء الاصطناعي)
 * Academic Year: 2026–2027 (Term 1)
 */
export default function CurriculumCoverPage() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <PageShell hideHeader hideFooter className="curriculum-cover-shell">
      <div className="curriculum-cover-container">
        {/* Top Ministry Banner */}
        <header className="cover-top-banner">
          <div className="cover-republic-badge">
            <span className="cover-republic-text">
              {isEn ? 'Arab Republic of Egypt' : 'جمهورية مصر العربية'}
            </span>
            <span className="cover-ministry-text">
              {isEn ? 'Ministry of Education & Technical Education' : 'وزارة التربية والتعليم والتعليم الفني'}
            </span>
          </div>
          <div className="cover-badge-pill">
            <span className="cover-badge-code">EGY-BAC-2026</span>
            <span className="cover-badge-label">
              {isEn ? 'Egyptian Baccalaureate Certificate' : 'شهادة البكالوريا المصرية'}
            </span>
          </div>
        </header>

        {/* Central Geometric Hologram & Visual Emblem */}
        <div className="cover-emblem-wrapper">
          <div className="cover-emblem-glow" aria-hidden="true" />
          <div className="cover-emblem-box">
            <div className="cover-emblem-inner">
              <Icon name="psychology" size={54} color="#38bdf8" />
            </div>
            <div className="cover-chip-decor">
              <span className="chip-dot dot-1" />
              <span className="chip-dot dot-2" />
              <span className="chip-dot dot-3" />
              <span className="chip-dot dot-4" />
            </div>
          </div>
        </div>

        {/* Main Title Section */}
        <div className="cover-title-group">
          <div className="cover-series-tag">
            <span className="cover-series-name">
              {isEn ? 'The Smart Mentor Series' : 'سلسلة المُرشد الذكي'}
            </span>
            <span className="cover-series-english">THE MENTOR SERIES</span>
          </div>

          <h1 className="cover-main-title font-heading">
            {isEn ? 'Programming & Artificial Intelligence' : 'البرمجة والذكاء الاصطناعي'}
          </h1>

          <p className="cover-english-title">
            {isEn ? 'The Egyptian Baccalaureate Grade 11' : 'Programming & Artificial Intelligence'}
          </p>

          <p className="cover-subtitle">
            {isEn
              ? 'Student Guide to Algorithmic Thinking, Software Development & Contemporary AI Systems'
              : 'دليل التفكير المنهجي وبوابة الطالب لتطوير الحلول البرمجية وتطبيقات الذكاء الاصطناعي المعاصرة'}
          </p>
        </div>

        {/* Grade & Term Pillar Cards */}
        <div className="cover-pillars-grid">
          <div className="cover-pillar-card">
            <span className="pillar-label">{isEn ? 'Academic Level' : 'المرحلة الدراسية'}</span>
            <strong className="pillar-val">{isEn ? 'Grade 11' : 'الصف الأول الثانوي'}</strong>
            <span className="pillar-sub">
              {isEn ? 'Egyptian New Baccalaureate' : 'نظام البكالوريا المصرية الجديد'}
            </span>
          </div>

          <div className="cover-pillar-card active">
            <span className="pillar-label">{isEn ? 'Semester' : 'الفصل الدراسي'}</span>
            <strong className="pillar-val">{isEn ? 'Term 1' : 'الفصل الأول (Term 1)'}</strong>
            <span className="pillar-sub">
              {isEn ? 'Academic Year 2026–2027' : 'العام الأكاديمي 2026–2027'}
            </span>
          </div>

          <div className="cover-pillar-card">
            <span className="pillar-label">{isEn ? 'Course Nature' : 'طبيعة المقرر'}</span>
            <strong className="pillar-val">{isEn ? 'Theory & Practice' : 'نظري وتطبيقي مدمج'}</strong>
            <span className="pillar-sub">
              {isEn ? 'Computing Lab + A4 Booklet' : 'معمل حوسبة + كتيب ورقي A4'}
            </span>
          </div>
        </div>

        {/* Pedagogical Feature Highlights */}
        <div className="cover-features-strip">
          <div className="feature-pill">
            <Icon name="code_blocks" size={14} color="#38bdf8" />
            <span>{isEn ? 'Modern Python Algorithms' : 'خوارزميات بايثون الحديثة'}</span>
          </div>
          <div className="feature-pill">
            <Icon name="model_training" size={14} color="#34d399" />
            <span>{isEn ? 'Generative AI Models' : 'نماذج الذكاء الاصطناعي التوليدي'}</span>
          </div>
          <div className="feature-pill">
            <Icon name="balance" size={14} color="#fbbf24" />
            <span>{isEn ? 'Social Transformation & Automation' : 'الأثر والتحول الاجتماعي للأتمتة'}</span>
          </div>
          <div className="feature-pill">
            <Icon name="assignment_turned_in" size={14} color="#f472b6" />
            <span>{isEn ? 'Evidence-Based Decision Labs' : 'مشروعات اتخاذ القرار المبررة'}</span>
          </div>
        </div>

        {/* Footer Authorship & Barcode */}
        <footer className="cover-footer">
          <div className="cover-author-info">
            <div className="author-role font-heading">
              {isEn ? 'Curriculum Authoring & Development:' : 'إعداد وتطوير المحتوى التعليمي:'}
            </div>
            <div className="author-name">
              {isEn ? 'Mohamed Shamel Mohamed' : 'أ. محمد شامل محمد'}
            </div>
            <div className="author-desc">
              {isEn
                ? 'Curriculum, Computing & AI Senior Expert at Ministry'
                : 'خبير تطوير المناهج والحوسبة والذكاء الاصطناعي بالوزارة'}
            </div>
          </div>

          <div className="cover-qr-block">
            <div className="cover-qr-box">
              <Icon name="qr_code_2" size={44} color="#0f172a" />
            </div>
            <div className="cover-qr-text">
              <span>{isEn ? 'Scan for interactive portal' : 'امسح للوصول للمنصة التفاعلية'}</span>
              <span className="qr-url">mentor-ai.edu.eg</span>
            </div>
          </div>
        </footer>
      </div>
    </PageShell>
  );
}
