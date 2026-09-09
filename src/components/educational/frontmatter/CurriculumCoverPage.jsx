import React from 'react';
import PageShell from '../../layout/PageShell.jsx';
import Icon from '../../ui/Icon.jsx';

/**
 * CurriculumCoverPage
 * The Official Front Cover (A4) for Egyptian Baccalaureate Grade 11
 * Subject: Programming & Artificial Intelligence (البرمجة والذكاء الاصطناعي)
 * Academic Year: 2026–2027 (Term 1)
 */
export default function CurriculumCoverPage() {
  return (
    <PageShell hideHeader hideFooter className="curriculum-cover-shell">
      <div className="curriculum-cover-container">
        {/* Top Ministry Banner */}
        <header className="cover-top-banner">
          <div className="cover-republic-badge">
            <span className="cover-republic-text">جمهورية مصر العربية</span>
            <span className="cover-ministry-text">وزارة التربية والتعليم والتعليم الفني</span>
          </div>
          <div className="cover-badge-pill">
            <span className="cover-badge-code">EGY-BAC-2026</span>
            <span className="cover-badge-label">شهادة البكالوريا المصرية</span>
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
            <span className="cover-series-name">سلسلة المُرشد الذكي</span>
            <span className="cover-series-english">THE MENTOR SERIES</span>
          </div>

          <h1 className="cover-main-title font-heading">
            البرمجة والذكاء الاصطناعي
          </h1>

          <p className="cover-english-title">
            Programming &amp; Artificial Intelligence
          </p>

          <p className="cover-subtitle">
            دليل التفكير المنهجي وبوابة الطالب لتطوير الحلول البرمجية وتطبيقات الذكاء الاصطناعي المعاصرة
          </p>
        </div>

        {/* Grade & Term Pillar Cards */}
        <div className="cover-pillars-grid">
          <div className="cover-pillar-card">
            <span className="pillar-label">المرحلة الدراسية</span>
            <strong className="pillar-val">الصف الأول الثانوي</strong>
            <span className="pillar-sub">نظام البكالوريا المصرية الجديد</span>
          </div>

          <div className="cover-pillar-card active">
            <span className="pillar-label">الفصل الدراسي</span>
            <strong className="pillar-val">الفصل الأول (Term 1)</strong>
            <span className="pillar-sub">العام الأكاديمي 2026–2027</span>
          </div>

          <div className="cover-pillar-card">
            <span className="pillar-label">طبيعة المقرر</span>
            <strong className="pillar-val">نظري وتطبيقي مدمج</strong>
            <span className="pillar-sub">معمل حوسبة + كتيب ورقي A4</span>
          </div>
        </div>

        {/* Pedagogical Feature Highlights */}
        <div className="cover-features-strip">
          <div className="feature-pill">
            <Icon name="code_blocks" size={14} color="#38bdf8" />
            <span>خوارزميات بايثون الحديثة</span>
          </div>
          <div className="feature-pill">
            <Icon name="model_training" size={14} color="#34d399" />
            <span>نماذج الذكاء الاصطناعي التوليدي</span>
          </div>
          <div className="feature-pill">
            <Icon name="balance" size={14} color="#fbbf24" />
            <span>الأثر والتحول الاجتماعي للأتمتة</span>
          </div>
          <div className="feature-pill">
            <Icon name="assignment_turned_in" size={14} color="#f472b6" />
            <span>مشروعات اتخاذ القرار المبررة</span>
          </div>
        </div>

        {/* Footer Authorship & Barcode */}
        <footer className="cover-footer">
          <div className="cover-author-info">
            <div className="author-role font-heading">إعداد وتطوير المحتوى التعليمي:</div>
            <div className="author-name">أ. محمد شامل محمد</div>
            <div className="author-desc">خبير تطوير المناهج والحوسبة والذكاء الاصطناعي بالوزارة</div>
          </div>

          <div className="cover-qr-block">
            <div className="cover-qr-box">
              <Icon name="qr_code_2" size={44} color="#0f172a" />
            </div>
            <div className="cover-qr-text">
              <span>امسح للوصول للمنصة التفاعلية</span>
              <span className="qr-url">mentor-ai.edu.eg</span>
            </div>
          </div>
        </footer>
      </div>
    </PageShell>
  );
}
