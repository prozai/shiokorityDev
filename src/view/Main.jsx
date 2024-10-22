import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../component/LanguageSelector';
import Header from '../component/Header';
import ListComponent from '../component/listComponent';
import Content from '../component/Content';  // Import the updated Content component
import Login from '../component/login';  // Import the updated Content component
import DeveloperRegistrationForm from './DeveloperRegistrationForm';



function Main() {
  const { t } = useTranslation();  // i18n translation
  const [selectedSection, setSelectedSection] = useState('Introduction');  // Default to "Introduction"

  return (
    <div className="h-screen flex flex-col">
      {/* Header at the top */}
      <Header />

      {/* Main Layout: Sidebar (ListComponent) + Content Area */}
      <div className="flex flex-grow overflow-hidden">
        <div className="w-64 bg-gray-100 border-r">
          {/* Sidebar List */}
          <ListComponent onSelectSection={setSelectedSection} />
        </div>

        {/* Content area with padding and scroll support */}
        <div className="flex-1 p-4 overflow-y-auto">
          <Content selectedSection={selectedSection} />
        </div>
      </div>
    </div>
  );
}

export default Main;
