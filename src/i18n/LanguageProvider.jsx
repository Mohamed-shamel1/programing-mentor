import React, { useState, useEffect } from 'react';
import { translations } from './translations.js';
import { LanguageContext } from './LanguageContext.js';

const STORAGE_KEY = 'mentor_language_preference';

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'ar' || saved === 'en') {
        return saved;
      }
    } catch {
      // Ignore localStorage errors (e.g. incognito/sandboxed)
    }
    return 'ar';
  });

  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const isRTL = language === 'ar';

  const setLanguage = (newLang) => {
    if (newLang === 'ar' || newLang === 'en') {
      setLanguageState(newLang);
    }
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore localStorage write failures
    }

    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = dir;
      document.documentElement.setAttribute('data-lang', language);
    }
  }, [language, dir]);

  /**
   * Helper function to get translation by key
   * If value is a function, calls it with provided arguments
   */
  const t = (key, ...args) => {
    const langDict = translations[language] || translations.ar;
    const fallbackDict = translations.ar;
    const val = langDict[key] ?? fallbackDict[key] ?? key;

    if (typeof val === 'function') {
      return val(...args);
    }
    return val;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        dir,
        isRTL,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
