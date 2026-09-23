import LessonOverviewPage from '../components/educational/LessonOverviewPage.jsx';
import DailyComparisonHookPage from '../components/educational/DailyComparisonHookPage.jsx';
import DiscoveryTimelinePage from '../components/educational/DiscoveryTimelinePage.jsx';
import MooresLawPage from '../components/educational/MooresLawPage.jsx';
import SocialTransformationsPage from '../components/educational/SocialTransformationsPage.jsx';
import EdgeVsCloudPage from '../components/educational/EdgeVsCloudPage.jsx';
import ArVrQuantumPage from '../components/educational/ArVrQuantumPage.jsx';
import MissionHookPage from '../components/educational/MissionHookPage.jsx';
import ConceptVisualPage from '../components/educational/ConceptVisualPage.jsx';
import ComparisonPage from '../components/educational/ComparisonPage.jsx';
import ActivityDecisionPage from '../components/educational/ActivityDecisionPage.jsx';
import RevisionPage from '../components/educational/RevisionPage.jsx';
import NestedCategoriesPage from '../components/educational/NestedCategoriesPage.jsx';
import LearningTiersPage from '../components/educational/LearningTiersPage.jsx';
import ParadigmShiftPage from '../components/educational/ParadigmShiftPage.jsx';
import ArtificialBrainPage from '../components/educational/ArtificialBrainPage.jsx';
import NarrowAiHallucinationPage from '../components/educational/NarrowAiHallucinationPage.jsx';
import CaseStudiesPage from '../components/educational/CaseStudiesPage.jsx';
import StakeholderPolicyPage from '../components/educational/StakeholderPolicyPage.jsx';
import CriticalThinkingPage from '../components/educational/CriticalThinkingPage.jsx';
import LessonSummaryDiagramPage from '../components/educational/LessonSummaryDiagramPage.jsx';
import FinalAssessmentPage from '../components/educational/FinalAssessmentPage.jsx';
import GlobalRoadmapPage from '../components/educational/frontmatter/GlobalRoadmapPage.jsx';
import ProgressTrackerPage from '../components/educational/frontmatter/ProgressTrackerPage.jsx';
import MasteryPedagogyPage from '../components/educational/frontmatter/MasteryPedagogyPage.jsx';

/**
 * Educational Page Type Registry
 * Maps conceptual page types validated by Stitch prototypes to their React components.
 * Includes both core lesson page types and front-matter opening trilogy types.
 */
export const PAGE_TYPES = {
  // Core Lesson Page Types
  LESSON_OVERVIEW: 'LESSON_OVERVIEW',
  DAILY_COMPARISON: 'DAILY_COMPARISON',
  DISCOVERY_TIMELINE: 'DISCOVERY_TIMELINE',
  MOORES_LAW: 'MOORES_LAW',
  SOCIAL_TRANSFORMATIONS: 'SOCIAL_TRANSFORMATIONS',
  EDGE_VS_CLOUD: 'EDGE_VS_CLOUD',
  AR_VR_QUANTUM: 'AR_VR_QUANTUM',
  MISSION_HOOK: 'MISSION_HOOK',
  CONCEPT_VISUAL: 'CONCEPT_VISUAL',
  COMPARISON: 'COMPARISON',
  ACTIVITY_DECISION: 'ACTIVITY_DECISION',
  REVISION: 'REVISION',

  // Lesson 1-2 Dedicated Page Types
  NESTED_CATEGORIES: 'NESTED_CATEGORIES',
  LEARNING_TIERS: 'LEARNING_TIERS',
  PARADIGM_SHIFT: 'PARADIGM_SHIFT',
  ARTIFICIAL_BRAIN: 'ARTIFICIAL_BRAIN',
  NARROW_AI_HALLUCINATION: 'NARROW_AI_HALLUCINATION',
  CASE_STUDIES: 'CASE_STUDIES',
  STAKEHOLDER_POLICY: 'STAKEHOLDER_POLICY',
  CRITICAL_THINKING: 'CRITICAL_THINKING',
  LESSON_SUMMARY_DIAGRAM: 'LESSON_SUMMARY_DIAGRAM',
  FINAL_ASSESSMENT: 'FINAL_ASSESSMENT',

  // Front-Matter Opening Trilogy Page Types
  GLOBAL_ROADMAP: 'GLOBAL_ROADMAP',
  PROGRESS_TRACKER: 'PROGRESS_TRACKER',
  MASTERY_PEDAGOGY: 'MASTERY_PEDAGOGY',
};

const registry = {
  [PAGE_TYPES.LESSON_OVERVIEW]: LessonOverviewPage,
  [PAGE_TYPES.DAILY_COMPARISON]: DailyComparisonHookPage,
  [PAGE_TYPES.DISCOVERY_TIMELINE]: DiscoveryTimelinePage,
  [PAGE_TYPES.MOORES_LAW]: MooresLawPage,
  [PAGE_TYPES.SOCIAL_TRANSFORMATIONS]: SocialTransformationsPage,
  [PAGE_TYPES.EDGE_VS_CLOUD]: EdgeVsCloudPage,
  [PAGE_TYPES.AR_VR_QUANTUM]: ArVrQuantumPage,
  [PAGE_TYPES.MISSION_HOOK]: MissionHookPage,
  [PAGE_TYPES.CONCEPT_VISUAL]: ConceptVisualPage,
  [PAGE_TYPES.COMPARISON]: ComparisonPage,
  [PAGE_TYPES.ACTIVITY_DECISION]: ActivityDecisionPage,
  [PAGE_TYPES.REVISION]: RevisionPage,

  // Lesson 1-2 Pages
  [PAGE_TYPES.NESTED_CATEGORIES]: NestedCategoriesPage,
  [PAGE_TYPES.LEARNING_TIERS]: LearningTiersPage,
  [PAGE_TYPES.PARADIGM_SHIFT]: ParadigmShiftPage,
  [PAGE_TYPES.ARTIFICIAL_BRAIN]: ArtificialBrainPage,
  [PAGE_TYPES.NARROW_AI_HALLUCINATION]: NarrowAiHallucinationPage,
  [PAGE_TYPES.CASE_STUDIES]: CaseStudiesPage,
  [PAGE_TYPES.STAKEHOLDER_POLICY]: StakeholderPolicyPage,
  [PAGE_TYPES.CRITICAL_THINKING]: CriticalThinkingPage,
  [PAGE_TYPES.LESSON_SUMMARY_DIAGRAM]: LessonSummaryDiagramPage,
  [PAGE_TYPES.FINAL_ASSESSMENT]: FinalAssessmentPage,

  // Front-matter registrations
  [PAGE_TYPES.GLOBAL_ROADMAP]: GlobalRoadmapPage,
  [PAGE_TYPES.PROGRESS_TRACKER]: ProgressTrackerPage,
  [PAGE_TYPES.MASTERY_PEDAGOGY]: MasteryPedagogyPage,
};

/**
 * Resolves a page type string to its corresponding component.
 * @param {string} type
 * @returns {React.ComponentType}
 */
export function getPageComponent(type) {
  return registry[type] || null;
}
