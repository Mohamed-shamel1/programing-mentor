/**
 * Curriculum Registry (Centralized Multi-Lesson Source of Truth)
 * Decouples lesson catalog from UI routing and layouts.
 * Enables zero-boilerplate registration of new lessons (Lesson 1-2, 1-3, etc.).
 */

import { lesson01Data } from './lesson01Data.js';
import { lesson01DataEn } from './lesson01DataEn.js';
import { lesson01CheatSheetData } from './lesson01CheatSheetData.js';
import { lesson01CheatSheetDataEn } from './lesson01CheatSheetDataEn.js';
import { lesson01ExamData } from './lesson01ExamData.js';
import { lesson01ExamDataEn } from './lesson01ExamDataEn.js';
import { lesson02Data } from './lesson02Data.js';
import { lesson02DataEn } from './lesson02DataEn.js';
import { lesson02ExamData } from './lesson02ExamData.js';
import { lesson02ExamDataEn } from './lesson02ExamDataEn.js';

export const CURRICULUM_LESSONS = [
  {
    id: 'lesson-1-1',
    code: '1-1',
    unitNumber: 1,
    unitTitleAr: 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    unitTitleEn: 'Unit 1: Computing & AI Fundamentals',
    titleAr: 'الدرس 1-1: تطور تكنولوجيا المعلومات والتحول الاجتماعي',
    titleEn: 'Lesson 1-1: Evolution of IT & Social Transformation',
    shortTitleAr: 'الدرس 1-1: تطور تكنولوجيا المعلومات',
    shortTitleEn: 'Lesson 1-1: Evolution of IT',
    icon: 'terminal',
    status: 'ready', // 'ready' | 'upcoming'
    dataAr: lesson01Data,
    dataEn: lesson01DataEn,
    cheatSheetAr: lesson01CheatSheetData,
    cheatSheetEn: lesson01CheatSheetDataEn,
    examAr: lesson01ExamData,
    examEn: lesson01ExamDataEn,
    examHash: '#exam-1-1',
  },
  {
    id: 'lesson-1-2',
    code: '1-2',
    unitNumber: 1,
    unitTitleAr: 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    unitTitleEn: 'Unit 1: Computing & AI Fundamentals',
    titleAr: 'الدرس 1-2: أسس الذكاء الاصطناعي — المفاهيم والآليات والتحولات',
    titleEn: 'Lesson 1-2: Foundations of AI — Concepts, Mechanisms & Transformations',
    shortTitleAr: 'الدرس 1-2: أسس الذكاء الاصطناعي',
    shortTitleEn: 'Lesson 1-2: Foundations of AI',
    icon: 'psychology',
    status: 'ready',
    dataAr: lesson02Data,
    dataEn: lesson02DataEn,
    examAr: lesson02ExamData,
    examEn: lesson02ExamDataEn,
    examHash: '#exam-1-2',
  },
  {
    id: 'lesson-1-3',
    code: '1-3',
    unitNumber: 1,
    unitTitleAr: 'الوحدة الأولى: أساسيات الحوسبة والذكاء الاصطناعي',
    unitTitleEn: 'Unit 1: Computing & AI Fundamentals',
    titleAr: 'الدرس 1-3: البيانات الضخمة وأنظمة الحوسبة السحابية',
    titleEn: 'Lesson 1-3: Big Data & Cloud Computing Systems',
    shortTitleAr: 'الدرس 1-3: البيانات الضخمة والسحابة',
    shortTitleEn: 'Lesson 1-3: Big Data & Cloud',
    icon: 'cloud',
    status: 'upcoming',
    badgeAr: 'قريباً',
    badgeEn: 'Soon',
  },
];

export function getLesson(lessonId) {
  return CURRICULUM_LESSONS.find((l) => l.id === lessonId) || CURRICULUM_LESSONS[0];
}
