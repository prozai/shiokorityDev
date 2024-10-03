import React from 'react';
import { useTranslation } from 'react-i18next';
import ExampleComponent from '../component/exampleComponent';
import LanguageSelector from '../component/LanguageSelector';

function Main() {
  const { t } = useTranslation();
  return (
    <div>
      <LanguageSelector />
      <h1>{t('main')}</h1>
      <ExampleComponent />
    </div>
  );
}

export default Main