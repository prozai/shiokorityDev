import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../component/LanguageSelector';
import Header from '../component/exampleComponent'
import ListComponent from '../component/listComponent'

function Main() {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <ListComponent />
      <LanguageSelector />
      {t('main')}
    </div>
      
    
  )
}

export default Main