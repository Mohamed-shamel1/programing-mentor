import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext.js';
import { lesson01ExamData } from '../../../data/lesson01ExamData.js';
import { lesson01ExamDataEn } from '../../../data/lesson01ExamDataEn.js';
import { TEACHER_CONFIG } from '../../../data/teacherConfig.js';
import Icon from '../../ui/Icon.jsx';
import '../../../styles/exam.css';

/**
 * Text normalizer for tolerant Arabic and English matching
 */
function normalizeText(text) {
  if (!text) return '';
  return text
    .trim()
    .toLowerCase()
    .replace(/[\u064B-\u065F]/g, '') // remove Arabic tashkeel
    .replace(/[أإآ]/g, 'ا')          // normalize alefs
    .replace(/ة/g, 'ه')              // normalize teh marbuta
    .replace(/ى/g, 'ي')              // normalize alef maqsura
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '') // remove punctuation
    .replace(/\s+/g, ' ');           // collapse spaces
}

export default function LessonExamPage({ customData = null }) {
  const { language } = useLanguage();
  const isEn = language === 'en';

  // Resolve active curriculum data
  const examData = customData || (isEn ? lesson01ExamDataEn : lesson01ExamData);

  // Student details state
  const [studentName, setStudentName] = useState(() => {
    try {
      return localStorage.getItem('mentor_exam_student_name') || '';
    } catch {
      return '';
    }
  });

  // Active section filter ('all' or 'section_a', 'section_b', etc.)
  const [activeTab, setActiveTab] = useState('all');

  // Answers state keyed by question ID
  const [answers, setAnswers] = useState({});

  // Active toggled simplified hints for essay questions: { [questionId]: boolean }
  const [activeHints, setActiveHints] = useState({});

  // Submission state
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Timer state (elapsed seconds)
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  // Elapsed timer ticker
  useEffect(() => {
    if (isSubmitted) return;
    const interval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted]);

  // Persist student name
  const handleNameChange = (val) => {
    setStudentName(val);
    try {
      localStorage.setItem('mentor_exam_student_name', val);
    } catch {
      // ignore
    }
  };

  // Toggle simplified hint
  const toggleHint = (qId) => {
    setActiveHints((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  // Generic answer updater
  const updateAnswer = (qId, value) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({
      ...prev,
      [qId]: value,
    }));
  };

  // Evaluation Calculations
  const evaluation = useMemo(() => {
    let autoScore = 0;
    const results = {};

    // 1. Evaluate Section A (MCQ)
    examData.sectionA.questions.forEach((q) => {
      const userAns = answers[q.id];
      const isCorrect = userAns === q.correctAnswer;
      if (isCorrect) autoScore += 1;
      results[q.id] = {
        isCorrect,
        userAns: userAns || (isEn ? 'Not Answered' : 'لم يُجب'),
        correctText: q.correctAnswer,
      };
    });

    // 2. Evaluate Section B (Fill in Blanks)
    examData.sectionB.questions.forEach((q) => {
      const userAns = answers[q.id] || '';
      const normUser = normalizeText(userAns);
      const isCorrect = q.acceptedAnswers.some(
        (ans) => normalizeText(ans) === normUser
      );
      if (isCorrect) autoScore += 1;
      results[q.id] = {
        isCorrect,
        userAns: userAns.trim() || (isEn ? 'Not Answered' : 'لم يُجب'),
        correctText: q.displayAnswer,
      };
    });

    // 3. Evaluate Section C (Scientific Terms)
    examData.sectionC.questions.forEach((q) => {
      const userAns = answers[q.id] || '';
      const normUser = normalizeText(userAns);
      const isCorrect = q.acceptedAnswers.some(
        (ans) => normalizeText(ans) === normUser
      );
      if (isCorrect) autoScore += 1;
      results[q.id] = {
        isCorrect,
        userAns: userAns.trim() || (isEn ? 'Not Answered' : 'لم يُجب'),
        correctText: q.displayAnswer,
      };
    });

    // 4. Evaluate Section D (True / False)
    examData.sectionD.questions.forEach((q) => {
      const userAns = answers[q.id]; // boolean or undefined
      const isCorrect = userAns === q.correctValue;
      if (isCorrect) autoScore += 1;
      results[q.id] = {
        isCorrect,
        userAns:
          userAns === true
            ? isEn
              ? 'True'
              : 'صح'
            : userAns === false
            ? isEn
              ? 'False'
              : 'خطأ'
            : isEn
            ? 'Not Answered'
            : 'لم يُجب',
        correctText: q.correctValue
          ? isEn
            ? 'True'
            : 'صح'
          : isEn
          ? 'False'
          : 'خطأ',
      };
    });

    // Calculate total questions answered
    const totalAnswered = Object.keys(answers).filter(
      (k) => answers[k] !== undefined && String(answers[k]).trim() !== ''
    ).length;

    return {
      autoScore,
      maxAutoScore: examData.autoGradedPoints || 22,
      results,
      totalAnswered,
      percentage: Math.round(
        (autoScore / (examData.autoGradedPoints || 22)) * 100
      ),
    };
  }, [answers, examData, isEn]);

  // Submit Handler
  const handleSubmitExam = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset Handler
  const handleResetExam = () => {
    if (
      window.confirm(
        isEn
          ? 'Are you sure you want to restart the exam? All answers will be cleared.'
          : 'هل أنت متأكد من إعادة بدء الامتحان من جديد؟ سيتم مسح الإجابات الحالية.'
      )
    ) {
      setAnswers({});
      setIsSubmitted(false);
      setElapsedSeconds(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Format Elapsed Time
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  // Generate WhatsApp Report URL
  const generateWhatsAppLink = () => {
    const sName = studentName.trim() || (isEn ? 'Student' : 'طالب المنصة');
    const timeSpent = formatTime(elapsedSeconds);
    const lessonCode = examData.lessonId || '1-1';

    let text = isEn
      ? `*🎓 Lesson ${lessonCode} Exam Report*\n`
      : `*🎓 تقرير اختبار الدرس (${lessonCode})*\n`;
    text += isEn
      ? `*👨‍🏫 Teacher:* ${TEACHER_CONFIG.nameEn}\n`
      : `*👨‍🏫 إشراف المعلم:* ${TEACHER_CONFIG.fullNameAr}\n`;
    text += isEn ? `*👤 Student:* ${sName}\n` : `*👤 اسم الطالب:* ${sName}\n`;
    text += isEn
      ? `*📊 Objective Score:* ${evaluation.autoScore} / ${evaluation.maxAutoScore} (${evaluation.percentage}%)\n`
      : `*📊 نتيجة الموضوعي:* ${evaluation.autoScore} / ${evaluation.maxAutoScore} (${evaluation.percentage}%)\n`;
    text += isEn ? `*⏱️ Time:* ${timeSpent}\n` : `*⏱️ زمن الحل:* ${timeSpent}\n`;
    text += `━━━━━━━━━━━━━━━━━━\n`;
    text += isEn
      ? `*📝 Student Essay Answers (For Teacher Review):*\n\n`
      : `*📝 إجابات الطالب المقالية (لتقييم المعلم):*\n\n`;

    // Section E Answers
    if (examData.sectionE?.questions) {
      examData.sectionE.questions.forEach((q, idx) => {
        const essayAns = answers[q.id] || (isEn ? '[No answer]' : '[لم يُجب]');
        text += `${idx + 1}️⃣ *${q.question}*\n👉 ${essayAns}\n\n`;
      });
    }

    // Section F Answers
    if (examData.sectionF?.questions) {
      examData.sectionF.questions.forEach((q, idx) => {
        const essayAns = answers[q.id] || (isEn ? '[No answer]' : '[لم يُجب]');
        text += `${idx + 4}️⃣ *${q.question}*\n👉 ${essayAns}\n\n`;
      });
    }

    text += `━━━━━━━━━━━━━━━━━━\n`;
    text += isEn
      ? `🔐 *Mentor Verification:* #DKH-${lessonCode}-${Math.floor(Math.random() * 9000 + 1000)}`
      : `🔐 *كود التحقق:* #DKH-${lessonCode}-${Math.floor(Math.random() * 9000 + 1000)}`;

    return `https://wa.me/${TEACHER_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const sectionsList = [
    { id: 'all', title: isEn ? 'All Sections' : 'كافة الأسئلة (28)', count: 28 },
    { id: 'section_a', title: examData.sectionA.badge, count: 8 },
    { id: 'section_b', title: examData.sectionB.badge, count: 6 },
    { id: 'section_c', title: examData.sectionC.badge, count: 4 },
    { id: 'section_d', title: examData.sectionD.badge, count: 4 },
    { id: 'section_e', title: examData.sectionE.badge, count: 3 },
    { id: 'section_f', title: examData.sectionF.badge, count: 3 },
  ];

  return (
    <div className="exam-viewport" dir={isEn ? 'ltr' : 'rtl'}>
      {/* 1. Official Accreditation Banner */}
      <header className="exam-official-header">
        <div className="exam-header-badges">
          <span className="exam-pill-badge ministry">
            <Icon name="verified" size={14} />
            <span>{examData.curriculumInfo.directorate}</span>
          </span>
          <span className="exam-pill-badge grade">
            <Icon name="school" size={14} />
            <span>{examData.curriculumInfo.grade}</span>
          </span>
          <span className="exam-pill-badge subject">
            <Icon name="terminal" size={14} />
            <span>{examData.curriculumInfo.subject}</span>
          </span>
        </div>

        <h1 className="exam-title-main">{examData.title}</h1>
        <p className="exam-subtitle-meta">{examData.curriculumInfo.supervision}</p>
      </header>

      {/* 2. Post-Submission Scorecard */}
      {isSubmitted && (
        <div className="exam-score-card">
          <div className="exam-score-badge">
            <Icon name="emoji_events" size={14} />
            <span>{isEn ? 'Official Assessment Completed' : 'تم تصحيح الجزء التلقائي بنجاح'}</span>
          </div>
          <div className="exam-score-number">
            {evaluation.autoScore} / {evaluation.maxAutoScore}
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: 'bold', color: '#93c5fd' }}>
            {isEn ? `Achievement Rate: ${evaluation.percentage}%` : `نسبة الإتقان: ${evaluation.percentage}%`}
          </div>
          <p className="exam-manual-notice">
            <Icon name="info" size={16} />{' '}
            {isEn
              ? `Notice: ${examData.manualGradedPoints || 18} marks for analytical & essay questions are reserved for review by ${TEACHER_CONFIG.nameEn} via the WhatsApp button below.`
              : `تنبيه تربوي: يتبقى ${examData.manualGradedPoints || 18} درجة مخصصة للأسئلة المقالية والتحليلية يراجعها ${TEACHER_CONFIG.nameAr} عبر زر الواتساب بالأسفل.`}
          </p>
        </div>
      )}

      {/* 3. Sticky Progress & Student Name Bar */}
      <div className="exam-sticky-bar">
        <div className="exam-student-identity">
          <Icon name="person" size={16} color="#94a3b8" />
          <input
            type="text"
            value={studentName}
            onChange={(e) => handleNameChange(e.target.value)}
            placeholder={isEn ? 'Student Name...' : 'اسم الطالب ثلاثي...'}
            disabled={isSubmitted}
            style={{
              background: 'transparent',
              border: 'none',
              borderBottom: '1px dashed #64748b',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 'bold',
              outline: 'none',
              padding: '2px 4px',
              width: '130px',
            }}
          />
        </div>

        <div className="exam-progress-tracker">
          <div className="exam-progress-labels">
            <span>
              {isEn ? 'Answered' : 'المُجاب عنه'}: {evaluation.totalAnswered} / 28
            </span>
            <span>{Math.round((evaluation.totalAnswered / 28) * 100)}%</span>
          </div>
          <div className="exam-progress-track">
            <div
              className="exam-progress-fill"
              style={{ width: `${(evaluation.totalAnswered / 28) * 100}%` }}
            />
          </div>
        </div>

        <div className="exam-timer-pill">
          <Icon name="timer" size={14} color="#38bdf8" />
          <span>{formatTime(elapsedSeconds)}</span>
        </div>
      </div>

      {/* 4. Section Navigation Pills */}
      <nav className="exam-section-tabs" aria-label="Exam Section Navigation">
        {sectionsList.map((sec) => (
          <button
            key={sec.id}
            type="button"
            className={`exam-section-tab-btn ${activeTab === sec.id ? 'active' : ''}`}
            onClick={() => setActiveTab(sec.id)}
          >
            <span>{sec.title}</span>
            <span className="tab-count">{sec.count}</span>
          </button>
        ))}
      </nav>

      {/* 5. Exam Questions Content */}

      {/* SECTION A: MCQ */}
      {(activeTab === 'all' || activeTab === 'section_a') && (
        <section className="exam-section-card">
          <div className="exam-section-header">
            <div className="exam-section-title-wrap">
              <h2 className="exam-section-title">{examData.sectionA.title}</h2>
              <span className="exam-pill-badge grade">
                {isEn ? '8 Questions • 8 Marks' : '8 أسئلة • 8 درجات'}
              </span>
            </div>
            <p className="exam-section-instruction">{examData.sectionA.instruction}</p>
          </div>

          {examData.sectionA.questions.map((q) => {
            const isCorrect = isSubmitted && evaluation.results[q.id]?.isCorrect;
            const isIncorrect = isSubmitted && !evaluation.results[q.id]?.isCorrect;
            const selectedOpt = answers[q.id];

            return (
              <article
                key={q.id}
                className={`exam-question-item ${
                  isSubmitted
                    ? isCorrect
                      ? 'status-correct'
                      : 'status-incorrect'
                    : ''
                }`}
              >
                <div className="exam-question-top-row">
                  <span className="exam-question-number-badge">{q.number}</span>
                  <h3 className="exam-question-text">{q.question}</h3>
                </div>

                <div className="exam-options-grid">
                  {q.options.map((opt) => (
                    <label
                      key={opt.id}
                      className={`exam-option-card ${
                        selectedOpt === opt.id ? 'selected' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={opt.id}
                        checked={selectedOpt === opt.id}
                        onChange={() => updateAnswer(q.id, opt.id)}
                        disabled={isSubmitted}
                        style={{ display: 'none' }}
                      />
                      <span className="exam-option-indicator">{opt.id}</span>
                      <span className="exam-option-text">{opt.text}</span>
                    </label>
                  ))}
                </div>

                {/* Pedagogical Explanation: Always shown post-submission */}
                {isSubmitted && (
                  <div
                    className={`exam-explanation-box ${
                      isCorrect ? 'correct' : 'incorrect'
                    }`}
                  >
                    <div
                      className={`exam-explanation-header ${
                        isCorrect ? 'correct' : 'incorrect'
                      }`}
                    >
                      <Icon
                        name={isCorrect ? 'check_circle' : 'cancel'}
                        size={15}
                      />
                      <span>
                        {isCorrect
                          ? isEn
                            ? 'Excellent! Correct Answer.'
                            : 'إجابة ممتازة وصحيحة!'
                          : isEn
                          ? `Incorrect. Correct Answer: (${q.correctAnswer})`
                          : `إجابة غير دقيقة. الإجابة الصحيحة: (${q.correctAnswer})`}
                      </span>
                    </div>
                    <p className="exam-explanation-body">
                      <strong>{isEn ? 'Pedagogical Explanation: ' : 'الشرح التعليمي: '}</strong>
                      {q.explanation}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </section>
      )}

      {/* SECTION B: FILL IN THE BLANKS */}
      {(activeTab === 'all' || activeTab === 'section_b') && (
        <section className="exam-section-card">
          <div className="exam-section-header">
            <div className="exam-section-title-wrap">
              <h2 className="exam-section-title">{examData.sectionB.title}</h2>
              <span className="exam-pill-badge grade">
                {isEn ? '6 Questions • 6 Marks' : '6 أسئلة • 6 درجات'}
              </span>
            </div>
            <p className="exam-section-instruction">{examData.sectionB.instruction}</p>
          </div>

          {examData.sectionB.questions.map((q) => {
            const isCorrect = isSubmitted && evaluation.results[q.id]?.isCorrect;
            const currentVal = answers[q.id] || '';

            return (
              <article
                key={q.id}
                className={`exam-question-item ${
                  isSubmitted
                    ? isCorrect
                      ? 'status-correct'
                      : 'status-incorrect'
                    : ''
                }`}
              >
                <div className="exam-question-top-row">
                  <span className="exam-question-number-badge">{q.number}</span>
                  <h3 className="exam-question-text">{q.question}</h3>
                </div>

                <div className="exam-text-input-wrap">
                  <input
                    type="text"
                    className="exam-text-input"
                    value={currentVal}
                    placeholder={q.placeholder}
                    onChange={(e) => updateAnswer(q.id, e.target.value)}
                    disabled={isSubmitted}
                  />
                </div>

                {isSubmitted && (
                  <div
                    className={`exam-explanation-box ${
                      isCorrect ? 'correct' : 'incorrect'
                    }`}
                  >
                    <div
                      className={`exam-explanation-header ${
                        isCorrect ? 'correct' : 'incorrect'
                      }`}
                    >
                      <Icon
                        name={isCorrect ? 'check_circle' : 'cancel'}
                        size={15}
                      />
                      <span>
                        {isCorrect
                          ? isEn
                            ? 'Correct Fill-in!'
                            : 'إجابة صحيحة ومطابقة!'
                          : isEn
                          ? `Model Concept: "${q.displayAnswer}"`
                          : `المفهوم النموذجي: "${q.displayAnswer}"`}
                      </span>
                    </div>
                    <p className="exam-explanation-body">
                      <strong>{isEn ? 'Pedagogical Explanation: ' : 'الشرح التعليمي: '}</strong>
                      {q.explanation}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </section>
      )}

      {/* SECTION C: SCIENTIFIC TERMS */}
      {(activeTab === 'all' || activeTab === 'section_c') && (
        <section className="exam-section-card">
          <div className="exam-section-header">
            <div className="exam-section-title-wrap">
              <h2 className="exam-section-title">{examData.sectionC.title}</h2>
              <span className="exam-pill-badge grade">
                {isEn ? '4 Questions • 4 Marks' : '4 أسئلة • 4 درجات'}
              </span>
            </div>
            <p className="exam-section-instruction">{examData.sectionC.instruction}</p>
          </div>

          {examData.sectionC.questions.map((q) => {
            const isCorrect = isSubmitted && evaluation.results[q.id]?.isCorrect;
            const currentVal = answers[q.id] || '';

            return (
              <article
                key={q.id}
                className={`exam-question-item ${
                  isSubmitted
                    ? isCorrect
                      ? 'status-correct'
                      : 'status-incorrect'
                    : ''
                }`}
              >
                <div className="exam-question-top-row">
                  <span className="exam-question-number-badge">{q.number}</span>
                  <h3 className="exam-question-text">{q.question}</h3>
                </div>

                <div className="exam-text-input-wrap">
                  <input
                    type="text"
                    className="exam-text-input"
                    value={currentVal}
                    placeholder={q.placeholder}
                    onChange={(e) => updateAnswer(q.id, e.target.value)}
                    disabled={isSubmitted}
                  />
                </div>

                {isSubmitted && (
                  <div
                    className={`exam-explanation-box ${
                      isCorrect ? 'correct' : 'incorrect'
                    }`}
                  >
                    <div
                      className={`exam-explanation-header ${
                        isCorrect ? 'correct' : 'incorrect'
                      }`}
                    >
                      <Icon
                        name={isCorrect ? 'check_circle' : 'cancel'}
                        size={15}
                      />
                      <span>
                        {isCorrect
                          ? isEn
                            ? 'Exact Scientific Term!'
                            : 'المصطلح العلمي الصحيح!'
                          : isEn
                          ? `Standard Term: "${q.displayAnswer}"`
                          : `المصطلح المعياري: "${q.displayAnswer}"`}
                      </span>
                    </div>
                    <p className="exam-explanation-body">
                      <strong>{isEn ? 'Pedagogical Explanation: ' : 'الشرح التعليمي: '}</strong>
                      {q.explanation}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </section>
      )}

      {/* SECTION D: TRUE / FALSE */}
      {(activeTab === 'all' || activeTab === 'section_d') && (
        <section className="exam-section-card">
          <div className="exam-section-header">
            <div className="exam-section-title-wrap">
              <h2 className="exam-section-title">{examData.sectionD.title}</h2>
              <span className="exam-pill-badge grade">
                {isEn ? '4 Questions • 4 Marks' : '4 أسئلة • 4 درجات'}
              </span>
            </div>
            <p className="exam-section-instruction">{examData.sectionD.instruction}</p>
          </div>

          {examData.sectionD.questions.map((q) => {
            const isCorrect = isSubmitted && evaluation.results[q.id]?.isCorrect;
            const currentVal = answers[q.id];

            return (
              <article
                key={q.id}
                className={`exam-question-item ${
                  isSubmitted
                    ? isCorrect
                      ? 'status-correct'
                      : 'status-incorrect'
                    : ''
                }`}
              >
                <div className="exam-question-top-row">
                  <span className="exam-question-number-badge">{q.number}</span>
                  <h3 className="exam-question-text">{q.question}</h3>
                </div>

                <div className="exam-tf-buttons-row">
                  <button
                    type="button"
                    className={`exam-tf-btn ${
                      currentVal === true ? 'selected-true' : ''
                    }`}
                    onClick={() => updateAnswer(q.id, true)}
                    disabled={isSubmitted}
                  >
                    <Icon name="check" size={16} color={currentVal === true ? '#059669' : '#64748b'} />
                    <span>{isEn ? 'True (Correct)' : 'صح (عبارة صحيحة)'}</span>
                  </button>

                  <button
                    type="button"
                    className={`exam-tf-btn ${
                      currentVal === false ? 'selected-false' : ''
                    }`}
                    onClick={() => updateAnswer(q.id, false)}
                    disabled={isSubmitted}
                  >
                    <Icon name="close" size={16} color={currentVal === false ? '#dc2626' : '#64748b'} />
                    <span>{isEn ? 'False (Incorrect)' : 'خطأ (عبارة خاطئة)'}</span>
                  </button>
                </div>

                {isSubmitted && (
                  <div
                    className={`exam-explanation-box ${
                      isCorrect ? 'correct' : 'incorrect'
                    }`}
                  >
                    <div
                      className={`exam-explanation-header ${
                        isCorrect ? 'correct' : 'incorrect'
                      }`}
                    >
                      <Icon
                        name={isCorrect ? 'check_circle' : 'cancel'}
                        size={15}
                      />
                      <span>
                        {isCorrect
                          ? isEn
                            ? 'Correct Judgment!'
                            : 'تقييم سليم!'
                          : isEn
                          ? `Correction Notice`
                          : `تصويب العبارة`}
                      </span>
                    </div>
                    <div className="exam-correction-text">
                      <strong>{isEn ? 'Standard Correction: ' : 'التصويب الدقيق: '}</strong>
                      {q.correction}
                    </div>
                    <p className="exam-explanation-body">
                      <strong>{isEn ? 'Pedagogical Explanation: ' : 'الشرح التعليمي: '}</strong>
                      {q.explanation}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </section>
      )}

      {/* SECTION E: REASONING & COMPARISONS (ESSAY WITH SIMPLIFIED HINT '!') */}
      {(activeTab === 'all' || activeTab === 'section_e') && (
        <section className="exam-section-card">
          <div className="exam-section-header">
            <div className="exam-section-title-wrap">
              <h2 className="exam-section-title">{examData.sectionE.title}</h2>
              <span className="exam-pill-badge ministry">
                {isEn ? '3 Questions • 12 Marks (Teacher Review)' : '3 أسئلة • 12 درجة (مراجعة معلم)'}
              </span>
            </div>
            <p className="exam-section-instruction">{examData.sectionE.instruction}</p>
          </div>

          {examData.sectionE.questions.map((q) => {
            const currentText = answers[q.id] || '';
            const isHintOpen = Boolean(activeHints[q.id]);
            const wordCount = currentText.trim()
              ? currentText.trim().split(/\s+/).length
              : 0;

            return (
              <article
                key={q.id}
                className={`exam-question-item ${
                  isSubmitted ? 'status-submitted-essay' : ''
                }`}
              >
                <div className="exam-question-top-row">
                  <span className="exam-question-number-badge">{q.number}</span>
                  <h3 className="exam-question-text">{q.question}</h3>

                  {/* The Special Simplified Hint Toggle Button (!) */}
                  <button
                    type="button"
                    className="exam-simplified-hint-toggle"
                    onClick={() => toggleHint(q.id)}
                    title={isEn ? 'Click to see Mentor’s Simplified Hint' : 'انقر لعرض تبسيط المُرشد للسؤال'}
                  >
                    <span className="exam-simplified-hint-icon">!</span>
                    <span>{isEn ? 'Simplify' : 'تبسيط السؤال'}</span>
                  </button>
                </div>

                {/* The Simplified Hint Box */}
                {isHintOpen && (
                  <div className="exam-simplified-hint-box">
                    <div className="exam-simplified-hint-title">
                      <Icon name="lightbulb" size={15} color="#f59e0b" />
                      <span>{isEn ? 'Mentor’s Simplified Hint (Easy Context):' : '💡 تبسيط المُرشد للمبتدئين:'}</span>
                    </div>
                    <p className="exam-simplified-hint-text">{q.simplifiedHint}</p>
                  </div>
                )}

                <textarea
                  className="exam-essay-textarea"
                  value={currentText}
                  onChange={(e) => updateAnswer(q.id, e.target.value)}
                  placeholder={
                    isEn
                      ? 'Type your reasoned explanation or comparative points here...'
                      : 'اكتب إجابتك التحليلية أو عناصر المقارنة هنا...'
                  }
                  disabled={isSubmitted}
                />

                <div className="exam-essay-footer">
                  <span>
                    {isEn ? 'Words count' : 'عدد الكلمات'}: {wordCount}
                  </span>
                  <span>{isEn ? '4 Marks' : '4 درجات'}</span>
                </div>

                {/* Model Answer & Explanation (Always shown post-submission) */}
                {isSubmitted && (
                  <div className="exam-model-answer-box">
                    <div className="exam-model-answer-title">
                      <Icon name="grading" size={15} color="#0d9488" />
                      <span>{isEn ? 'Standard Model Answer (Official Rubric):' : 'نموذج الإجابة المعتمد للمراجعة:'}</span>
                    </div>
                    <p className="exam-model-answer-content">{q.modelAnswer}</p>

                    <div className="exam-explanation-box" style={{ marginTop: '8px' }}>
                      <p className="exam-explanation-body">
                        <strong>{isEn ? 'Pedagogical Rationale: ' : 'المغزى التعليمي: '}</strong>
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </section>
      )}

      {/* SECTION F: APPLICATIONS & 6-MARK QUESTION (ESSAY WITH SIMPLIFIED HINT '!') */}
      {(activeTab === 'all' || activeTab === 'section_f') && (
        <section className="exam-section-card">
          <div className="exam-section-header">
            <div className="exam-section-title-wrap">
              <h2 className="exam-section-title">{examData.sectionF.title}</h2>
              <span className="exam-pill-badge ministry">
                {isEn ? '3 Questions • 6 Marks Each (Deep Analysis)' : '3 أسئلة • 6 درجات لكل سؤال'}
              </span>
            </div>
            <p className="exam-section-instruction">{examData.sectionF.instruction}</p>
          </div>

          {examData.sectionF.questions.map((q) => {
            const currentText = answers[q.id] || '';
            const isHintOpen = Boolean(activeHints[q.id]);
            const wordCount = currentText.trim()
              ? currentText.trim().split(/\s+/).length
              : 0;

            return (
              <article
                key={q.id}
                className={`exam-question-item ${
                  isSubmitted ? 'status-submitted-essay' : ''
                }`}
              >
                <div className="exam-question-top-row">
                  <span className="exam-question-number-badge">{q.number}</span>
                  <h3 className="exam-question-text">{q.question}</h3>

                  {/* The Special Simplified Hint Toggle Button (!) */}
                  <button
                    type="button"
                    className="exam-simplified-hint-toggle"
                    onClick={() => toggleHint(q.id)}
                    title={isEn ? 'Click to see Mentor’s Simplified Hint' : 'انقر لعرض تبسيط المُرشد للموقف'}
                  >
                    <span className="exam-simplified-hint-icon">!</span>
                    <span>{isEn ? 'Simplify' : 'تبسيط الموقف'}</span>
                  </button>
                </div>

                {isHintOpen && (
                  <div className="exam-simplified-hint-box">
                    <div className="exam-simplified-hint-title">
                      <Icon name="lightbulb" size={15} color="#f59e0b" />
                      <span>{isEn ? 'Mentor’s Simplified Scenario Guide:' : '💡 تبسيط المُرشد للموقف الحياتي:'}</span>
                    </div>
                    <p className="exam-simplified-hint-text">{q.simplifiedHint}</p>
                  </div>
                )}

                <textarea
                  className="exam-essay-textarea"
                  value={currentText}
                  onChange={(e) => updateAnswer(q.id, e.target.value)}
                  placeholder={
                    isEn
                      ? 'Type your comprehensive analysis and impact predictions here...'
                      : 'اكتب تحليلك المتعمق وتوقعاتك للأثر هنا...'
                  }
                  disabled={isSubmitted}
                  style={{ minHeight: '120px' }}
                />

                <div className="exam-essay-footer">
                  <span>
                    {isEn ? 'Words count' : 'عدد الكلمات'}: {wordCount}
                  </span>
                  <span>{isEn ? '6 Marks' : '6 درجات'}</span>
                </div>

                {isSubmitted && (
                  <div className="exam-model-answer-box">
                    <div className="exam-model-answer-title">
                      <Icon name="grading" size={15} color="#0d9488" />
                      <span>{isEn ? 'Standard Model Answer (Official Rubric):' : 'نموذج الإجابة المعتمد للمراجعة:'}</span>
                    </div>
                    <p className="exam-model-answer-content">{q.modelAnswer}</p>

                    <div className="exam-explanation-box" style={{ marginTop: '8px' }}>
                      <p className="exam-explanation-body">
                        <strong>{isEn ? 'Pedagogical Rationale: ' : 'المغزى التعليمي: '}</strong>
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </section>
      )}

      {/* 6. Sticky Action Bar */}
      <footer className="exam-action-bar">
        {!isSubmitted ? (
          <button
            type="button"
            className="exam-submit-primary-btn"
            onClick={handleSubmitExam}
          >
            <Icon name="check_circle" size={20} color="#ffffff" />
            <span>{isEn ? 'Submit & Grade Exam' : 'تسليم الامتحان والتصحيح الفوري'}</span>
          </button>
        ) : (
          <>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="exam-whatsapp-btn"
            >
              <Icon name="send" size={20} color="#ffffff" />
              <span>
                {isEn
                  ? `Send Answer Sheet to ${TEACHER_CONFIG.nameEn} via WhatsApp 📲`
                  : `إرسال ورقة الإجابة للمستر (${TEACHER_CONFIG.nameAr}) على واتساب 📲`}
              </span>
            </a>

            <button
              type="button"
              className="exam-reset-btn"
              onClick={handleResetExam}
            >
              <Icon name="refresh" size={14} />
              <span>{isEn ? 'Restart Exam' : 'إعادة الامتحان من جديد'}</span>
            </button>
          </>
        )}
      </footer>
    </div>
  );
}
