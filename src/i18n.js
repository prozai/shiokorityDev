// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations for each language
const resources = {
  en: {
    translation: {
      exampleComponent: "Example Component",
      main: "Main",
    }
  },
  zh: {
    translation: {
      exampleComponent: "示例组件",
      main: "主要",
    }
  },
  ms: {
    translation: {
      exampleComponent: "Komponen Contoh",
      main: "Utama",
    }
  },
  ta: {
    translation: {
      exampleComponent: "உதாரணக் கூறு",
      main: "முக்கிய",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;