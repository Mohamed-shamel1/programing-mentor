/**
 * ====================================================================
 * The Mentor — المُرشد الذكي
 * Lesson Structural Schema & Contract Definitions
 * ====================================================================
 * 
 * NOTE: This file defines purely structural contracts and schema validation.
 * It contains NO invented curriculum data or lesson content.
 * Real educational content will reside in the `content/` layer once officially ratified.
 */

/**
 * Validates whether a raw data object conforms to the structural expectations of a Lesson.
 * @param {object} lesson
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateLessonStructure(lesson) {
  const errors = [];

  if (!lesson) {
    return { valid: false, errors: ['Lesson object is null or undefined'] };
  }

  if (!lesson.id || typeof lesson.id !== 'string') {
    errors.push('Lesson must have a non-empty string `id` (e.g. "term1-ch1-l01")');
  }

  const hasTitle = (lesson.title && typeof lesson.title === 'string') || (lesson.titleAr && typeof lesson.titleAr === 'string');
  if (!hasTitle) {
    errors.push('Lesson must have a non-empty string `title` or `titleAr`');
  }

  if (!Array.isArray(lesson.pages)) {
    errors.push('Lesson `pages` property must be an array of page specifications');
  } else {
    lesson.pages.forEach((page, index) => {
      if (!page.type || typeof page.type !== 'string') {
        errors.push(`Page at index ${index} must specify a string \`type\``);
      }
      const hasPageNumber = typeof page.pageNumber === 'number' || (typeof page.pageNumber === 'string' && page.pageNumber.trim().length > 0);
      if (!hasPageNumber) {
        errors.push(`Page at index ${index} must specify a numeric or string \`pageNumber\``);
      }
      if (!page.content || typeof page.content !== 'object') {
        errors.push(`Page at index ${index} must have a \`content\` object payload`);
      }
    });
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
