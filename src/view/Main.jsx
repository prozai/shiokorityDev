import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../component/LanguageSelector';
import Header from '../component/Header';
import ListComponent from '../component/listComponent';
import Content from '../component/Content';  // Import the updated Content component

function Main() {
  const { t } = useTranslation();  // i18n translation
  const [selectedSection, setSelectedSection] = useState('Introduction');  // Default to "Introduction"

  return (
    <div className="h-screen flex flex-col">
      {/* Header at the top */}
      <Header />

      {/* Main Layout: Sidebar (ListComponent) + Content Area */}
      <div className="flex flex-grow">
        <div className="w-64">
          {/* Sidebar List and Language Selector */}
          <ListComponent onSelectSection={setSelectedSection} />  {/* Pass setSelectedSection */}
          {/* <LanguageSelector /> */}
        </div>

        {/* Render the Content component and pass the selected section */}
        <Content selectedSection={selectedSection} />

        {/* i18n content */}
        {/* <p>{t('main')}</p> */}
      </div>
    </div>
  );
}

export default Main;
