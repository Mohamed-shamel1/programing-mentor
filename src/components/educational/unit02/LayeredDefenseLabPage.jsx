import React, { useState } from 'react';
import Icon from '../../ui/Icon.jsx';
import { useLanguage } from '../../../i18n/LanguageContext.js';
import StudentExamPortalCard from '../exam/StudentExamPortalCard.jsx';

/**
 * LayeredDefenseLabPage
 * Lesson 2-1 — Station 03
 * Layered Defense, E-Commerce Flow & The School Portal Engineer Lab
 */
export default function LayeredDefenseLabPage({
  badge,
  title,
  subtitle,
  dailyHumorNote,
  coreIdea,
  techMatrix = [],
  ecommerceFlowTitle,
  ecommerceSteps = [],
  engineerLab,
  grandSummary,
  examTraps = [],
  scientificConcepts = []
}) {
  const { isRTL, language } = useLanguage();
  const isEn = language === 'en';

  const [selectedOptionId, setSelectedOptionId] = useState('opt-2fa-phone');
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [showScientificModal, setShowScientificModal] = useState(false);

  return (
    <div className="educational-page layered-defense-lab-page" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', height: '100%' }}>
      {/* Station Header */}
      <div className="station-header-compact" style={{ borderBottom: '1px solid #a7f3d0', paddingBottom: 'var(--space-2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span className="station-pill" style={{
              backgroundColor: '#065f46',
              color: '#34d399',
              fontSize: '11px',
              fontWeight: 'bold',
              padding: '2px 8px',
              borderRadius: '999px',
              fontFamily: 'var(--font-mono)'
            }}>
              {badge || (isEn ? '03 // LAYERED DEFENSE' : '03 // دفاع الطبقات ومختبر المهندس')}
            </span>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: '#022c22' }}>
              {title}
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11.5px', color: '#065f46', fontWeight: 600 }}>
              {subtitle}
            </span>
            {scientificConcepts && scientificConcepts.length > 0 && (
              <button
                className="no-print"
                onClick={() => setShowScientificModal(!showScientificModal)}
                style={{
                  fontSize: '10.5px',
                  padding: '2px 8px',
                  backgroundColor: showScientificModal ? '#065f46' : '#ecfdf5',
                  color: showScientificModal ? '#ffffff' : '#065f46',
                  border: '1px solid #059669',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Icon name="verified" size={13} style={{ color: showScientificModal ? '#34d399' : '#059669' }} />
                <span>{showScientificModal ? (isEn ? 'Hide Concepts Bank' : 'إخفاء بنك المصطلحات') : (isEn ? 'Official Scientific Concepts (6)' : 'المصطلحات العلمية للامتحان (6)')}</span>
              </button>
            )}
          </div>
        </div>

        {dailyHumorNote && (
          <div className="humor-banner" style={{
            marginTop: '6px',
            padding: '5px 10px',
            backgroundColor: '#ecfdf5',
            border: '1px dashed #059669',
            borderRadius: '6px',
            fontSize: '11.5px',
            color: '#065f46',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Icon name="lightbulb" size={15} style={{ color: '#059669', flexShrink: 0 }} />
            <span>{dailyHumorNote}</span>
          </div>
        )}
      </div>

      {/* Scientific Concepts Modal / Drawer */}
      {showScientificModal && scientificConcepts && scientificConcepts.length > 0 && (
        <div className="no-print" style={{
          backgroundColor: '#f0fdf4',
          border: '1.5px solid #059669',
          borderRadius: '8px',
          padding: '10px 12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          boxShadow: '0 4px 12px rgba(5, 150, 105, 0.12)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <strong style={{ fontSize: '12px', color: '#065f46', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icon name="verified" size={16} style={{ color: '#059669' }} />
              {isEn ? 'Official Exam Scientific Concepts (Direct from Ministry Textbook p. 31-35)' : 'بنك المصطلحات العلمية الرسمي (مطابق لأسئلة اكتب المصطلح العلمي في الامتحان)'}
            </strong>
            <span style={{ fontSize: '10.5px', color: '#059669', fontWeight: 600 }}>
              {isEn ? '6 Key Definitions' : '6 مصطلحات أساسية'}
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
            {scientificConcepts.map((sc) => (
              <div key={sc.id} style={{
                backgroundColor: '#ffffff',
                border: '1px solid #a7f3d0',
                borderRadius: '6px',
                padding: '6px 8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <strong style={{ fontSize: '11px', color: '#065f46' }}>
                    {isEn ? sc.termEn : sc.termAr}
                  </strong>
                  <span style={{ fontSize: '9px', color: '#0284c7', backgroundColor: '#e0f2fe', padding: '1px 4px', borderRadius: '3px' }}>
                    {sc.termEn}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '9.5px', color: '#334155', lineHeight: 1.35 }}>
                  {isEn ? sc.definitionEn : sc.definitionAr}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Core Idea Banner (Defense in Depth) */}
      {coreIdea && (
        <div style={{
          backgroundColor: '#022c22',
          color: '#ffffff',
          borderRadius: '6px',
          padding: '6px 10px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          borderLeft: isRTL ? 'none' : '4px solid #34d399',
          borderRight: isRTL ? '4px solid #34d399' : 'none',
        }}>
          <Icon name="shield" size={18} style={{ color: '#34d399', flexShrink: 0 }} />
          <span style={{ fontSize: '11px', fontWeight: 600, lineHeight: 1.4 }}>
            {coreIdea}
          </span>
        </div>
      )}

      {/* Top Grid: Technologies Matrix & E-Commerce Flow */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        {/* Technologies Matrix */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '8px 10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="hub" size={16} style={{ color: '#059669' }} />
            <strong style={{ fontSize: '11.5px', color: '#022c22' }}>
              {isEn ? 'The 4 Security Tools & Their Impact' : 'مصفوفة تقنيات الأمان الأربعة وتأثيرها'}
            </strong>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {techMatrix.map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '4px',
                padding: '4px 6px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <strong style={{ fontSize: '10.5px', color: '#065f46' }}>
                    {isEn ? item.techNameEn : item.techName}
                  </strong>
                  <span style={{ fontSize: '9px', color: '#b91c1c', fontWeight: 600 }}>
                    {item.threatAddressed}
                  </span>
                </div>
                <span style={{ fontSize: '10px', color: '#334155' }}>
                  {item.effect}
                </span>
              </div>
            ))}
          </div>

          {/* Key Direction Rule (p. 57) */}
          <div style={{
            backgroundColor: '#fef3c7',
            border: '1px dashed #d97706',
            borderRadius: '4px',
            padding: '3px 6px',
            fontSize: '9.5px',
            color: '#78350f',
            lineHeight: 1.3
          }}>
            <strong>🔑 {isEn ? 'Key Direction Rule (p. 57):' : 'قاعدة حركة المفاتيح (ص 57):'}</strong>{' '}
            {isEn
              ? 'In encryption, Public-key locks and Private-key unlocks. In a Digital Signature, the direction reverses: Private-key signs, and Public-key verifies!'
              : 'في التشفير: المفتاح العام يقفل والخاص يفتح. وفي التوقيع الرقمي تنعكس الحركة: المفتاح الخاص يُوقّع والمفتاح العام يتحقق من التوقيع!'}
          </div>
        </div>

        {/* E-Commerce Flow */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '8px 10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="shopping_cart" size={16} style={{ color: '#0284c7' }} />
            <strong style={{ fontSize: '11.5px', color: '#0369a1' }}>
              {ecommerceFlowTitle || (isEn ? 'E-Commerce Layered Flow' : 'سيناريو الشراء عبر الإنترنت')}
            </strong>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {ecommerceSteps.map((step, idx) => (
              <div key={idx} style={{
                backgroundColor: '#f0f9ff',
                border: '1px solid #bae6fd',
                borderRadius: '4px',
                padding: '4px 6px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '6px'
              }}>
                <span style={{
                  backgroundColor: '#0284c7',
                  color: '#ffffff',
                  fontSize: '9.5px',
                  fontWeight: 'bold',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '1px'
                }}>
                  {step.stepNum}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ fontSize: '10.5px', color: '#075985' }}>{step.action}</strong>
                    <span style={{ fontSize: '9px', backgroundColor: '#e0f2fe', color: '#0369a1', padding: '1px 4px', borderRadius: '3px', fontWeight: 600 }}>
                      {step.tech}
                    </span>
                  </div>
                  <p style={{ margin: '2px 0 0 0', fontSize: '10px', color: '#334155', lineHeight: 1.3 }}>
                    {step.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Exam Traps: The Trustworthiness Fallacies (TF Q18 & Q20) */}
      {examTraps && examTraps.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {examTraps.map((trap, idx) => (
            <div key={idx} style={{
              backgroundColor: '#fff1f2',
              border: '1px solid #fecdd3',
              borderRadius: '6px',
              padding: '6px 8px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '6px'
            }}>
              <Icon name="warning" size={16} style={{ color: '#e11d48', flexShrink: 0, marginTop: '1px' }} />
              <div>
                <strong style={{ fontSize: '10.5px', color: '#9f1239', display: 'block', lineHeight: 1.2 }}>
                  {trap.trapTitle}
                </strong>
                <p style={{ margin: '2px 0 0 0', fontSize: '10px', color: '#881337', lineHeight: 1.35 }}>
                  {trap.trapText}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Engineer Decision Lab: School Portal Case Study */}
      {engineerLab && (
        <div style={{
          backgroundColor: '#f6fef9',
          border: '1.5px solid #a7f3d0',
          borderRadius: '8px',
          padding: '8px 10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icon name="engineering" size={18} style={{ color: '#059669' }} />
              <strong style={{ fontSize: '12px', color: '#022c22' }}>
                {engineerLab.title}
              </strong>
            </div>
            <button
              onClick={() => setShowRecommendation(!showRecommendation)}
              style={{
                fontSize: '10.5px',
                padding: '2px 8px',
                backgroundColor: showRecommendation ? '#059669' : '#ffffff',
                color: showRecommendation ? '#ffffff' : '#059669',
                border: '1px solid #059669',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              {showRecommendation ? (isEn ? 'Hide Recommendation' : 'إخفاء القرار') : (isEn ? 'View Engineer Decision' : 'عرض قرار المهندس')}
            </button>
          </div>

          <p style={{ margin: 0, fontSize: '11px', color: '#374151', lineHeight: 1.4 }}>
            {engineerLab.scenario}
          </p>

          {/* Options Selector */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            {engineerLab.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => setSelectedOptionId(opt.id)}
                  style={{
                    backgroundColor: isSelected ? '#ecfdf5' : '#ffffff',
                    border: `1.5px solid ${isSelected ? '#059669' : '#e5e7eb'}`,
                    borderRadius: '6px',
                    padding: '6px 8px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      border: '1px solid #059669',
                      backgroundColor: isSelected ? '#059669' : 'transparent',
                      display: 'inline-block'
                    }} />
                    <strong style={{ fontSize: '11px', color: '#022c22' }}>{opt.title}</strong>
                  </div>
                  <div style={{ fontSize: '9.5px', color: '#047857' }}>• {opt.pros}</div>
                  <div style={{ fontSize: '9.5px', color: '#b91c1c' }}>• {opt.cons}</div>
                </div>
              );
            })}
          </div>

          {/* Stakeholder 3-Card Mini Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
            {engineerLab.stakeholderAnalysis.map((stk, idx) => (
              <div key={idx} style={{
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '4px',
                padding: '4px 6px',
                fontSize: '9.5px'
              }}>
                <strong style={{ color: '#0f172a', display: 'block', marginBottom: '2px' }}>
                  {stk.stakeholder}
                </strong>
                <div style={{ color: '#047857' }}>✓ {stk.benefit}</div>
                <div style={{ color: '#b91c1c' }}>✕ {stk.drawback}</div>
              </div>
            ))}
          </div>

          {/* Engineer Final Recommendation */}
          {showRecommendation && (
            <div style={{
              backgroundColor: '#ecfdf5',
              border: '1px solid #34d399',
              borderRadius: '6px',
              padding: '6px 8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Icon name="verified" size={14} style={{ color: '#059669' }} />
                <strong style={{ fontSize: '11px', color: '#065f46' }}>
                  {engineerLab.engineerRecommendation.verdict}
                </strong>
              </div>
              <p style={{ margin: 0, fontSize: '10.5px', color: '#022c22', lineHeight: 1.4 }}>
                {engineerLab.engineerRecommendation.recommendationText}
              </p>
              <span style={{ fontSize: '9.5px', color: '#047857', fontWeight: 600 }}>
                💡 {engineerLab.engineerRecommendation.coreReason}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Grand Lecture Summary Banner */}
      {grandSummary && (
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #a7f3d0',
          borderRadius: '6px',
          padding: '6px 10px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{
            backgroundColor: '#059669',
            color: '#ffffff',
            borderRadius: '4px',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Icon name="bookmark" size={16} />
          </div>
          <div style={{ flex: 1 }}>
            <strong style={{ fontSize: '11px', color: '#022c22', display: 'block' }}>
              {grandSummary.title}
            </strong>
            <p style={{ margin: 0, fontSize: '10.5px', color: '#374151', lineHeight: 1.4 }}>
              {grandSummary.text}
            </p>
          </div>
        </div>
      )}

      {/* Dual QR Exam Portal Card */}
      <StudentExamPortalCard
        examHash="#exam-2-1"
        lessonCode="2-1"
        isDual={true}
      />
    </div>
  );
}
