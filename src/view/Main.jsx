import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../component/LanguageSelector';

function Main() {
  const { t } = useTranslation();
  return (
    <div>
      <LanguageSelector />
      {t('main')}
    </div>
  );
}

export default Main