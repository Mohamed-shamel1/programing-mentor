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

  if (!lesson.title || typeof lesson.title !== 'string') {
    errors.push('Lesson must have a non-empty string `title`');
  }

  if (!Array.isArray(lesson.pages)) {
    errors.push('Lesson `pages` property must be an array of page specifications');
  } else {
    lesson.pages.forEach((page, index) => {
      if (!page.type || typeof page.type !== 'string') {
        errors.push(`Page at index ${index} must specify a string \`type\``);
      }
      if (typeof page.pageNumber !== 'number') {
        errors.push(`Page at index ${index} must specify a numeric \`pageNumber\``);
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
