import React from 'react';
import { useTranslation } from 'react-i18next';

function ExampleComponent() {
  const { t } = useTranslation();

  return (
    <div>{t('exampleComponent')}</div>
  );
}

export default ExampleComponent;