import React, { createContext, useContext, useState, useEffect } from 'react';
import { ko } from '../locales/ko';
import { en } from '../locales/en';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('site_lang');
      return saved === 'en' ? 'en' : 'ko';
    } catch {
      return 'ko';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('site_lang', lang);
      document.documentElement.lang = lang;
    } catch (e) {
      console.warn("Could not save language preference:", e);
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'ko' ? 'en' : 'ko'));
  };

  const t = lang === 'en' ? en : ko;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

