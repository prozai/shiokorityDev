import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../component/LanguageSelector';
import Header from '../component/exampleComponent'


function Main() {
  const { t } = useTranslation();
  return (
    <div>main
      <Header />
      </div>
      <LanguageSelector />
      {t('main')}
    
  )
}

export default Main