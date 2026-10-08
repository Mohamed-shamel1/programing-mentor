import React, { useState, useEffect } from 'react';
import { translations } from './translations.js';
import { LanguageContext } from './LanguageContext.js';

const STORAGE_KEY = 'mentor_language_preference';

function detectUrlLanguage() {
  if (typeof window !== 'undefined') {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const searchLang = urlParams.get('lang');
      if (searchLang === 'ar' || searchLang === 'en') return searchLang;

      const hash = window.location.hash || '';
      if (hash.includes('lang=en')) return 'en';
      if (hash.includes('lang=ar')) return 'ar';
    } catch {
      // ignore parsing errors
    }
  }
  return null;
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    const urlLang = detectUrlLanguage();
    if (urlLang) return urlLang;

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

  // Listen for hash or URL language changes (e.g. scanning QR codes)
  useEffect(() => {
    const handleUrlChange = () => {
      const urlLang = detectUrlLanguage();
      if (urlLang && (urlLang === 'ar' || urlLang === 'en')) {
        setLanguageState(urlLang);
      }
    };

    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

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
