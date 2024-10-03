// src/components/languageSelector.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('zh')}>Simplified Mandarin</button>
      <button onClick={() => changeLanguage('ms')}>Malay</button>
      <button onClick={() => changeLanguage('ta')}>Tamil</button>
    </div>
  );
};

export default LanguageSelector;