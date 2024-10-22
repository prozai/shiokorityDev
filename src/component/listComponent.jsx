// ListComponent.jsx
import React, { useState } from 'react';

export default function ListComponent({ onSelectSection }) {
  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState({
    admin: false,
    merchant: false,
    userGuide: false,
  });

  // Toggle function for each section
  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const menuItems = [
    { label: 'Introduction', section: 'Introduction' },
    { label: 'Base URL', section: 'Base URL' },
    { label: 'Authentication', section: 'Authentication' },
  ];

  const adminItems = [
    { label: 'Login Admin', section: 'Admin Endpoints/Login Admin' },
    { label: 'Logout Admin', section: 'Admin Endpoints/Logout Admin' },
    { label: 'Create Merchant', section: 'Admin Endpoints/Create Merchant' },
    { label: 'View Merchants', section: 'Admin Endpoints/View Merchants' },
    { label: 'Get Merchant by ID', section: 'Admin Endpoints/Get Merchant by ID' },
    { label: 'Edit Merchant', section: 'Admin Endpoints/Edit Merchant' },
    { label: 'Update Merchant Status', section: 'Admin Endpoints/Update Merchant Status' },
  ];

  const merchantItems = [
    { label: 'Login Merchant', section: 'Merchant Endpoints/Login Merchant' },
    { label: 'Logout Merchant', section: 'Merchant Endpoints/Logout Merchant' },
    { label: 'Get Merchant Profile', section: 'Merchant Endpoints/Get Merchant Profile' },
    { label: 'Update Merchant Profile', section: 'Merchant Endpoints/Update Merchant Profile' },
  ];

  const userGuideItem = { label: 'User Guide', section: 'User Guide' };

  const renderList = (items) => 
    items.map((item) => (
      <li key={item.section} className="pl-4">
        <button
          onClick={() => onSelectSection(item.section)}
          className="text-[#153247] hover:text-blue-600"
        >
          {item.label}
        </button>
      </li>
    ));

  return (
    <aside className="w-64 bg-white border-r h-full">
      <ul className="p-4 space-y-2">
        {renderList(menuItems)}

        {/* Admin Section */}
        <li className="font-bold text-gray-700 cursor-pointer flex items-center" onClick={() => toggleSection('admin')}>
          <span className={`mr-2 transform transition-transform ${expandedSections.admin ? 'rotate-90' : 'rotate-0'}`}>
            ▶
          </span>
          Admin Endpoints
        </li>
        {expandedSections.admin && (
          <ul className="space-y-2 transition-all duration-300 ease-in-out">
            {renderList(adminItems)}
          </ul>
        )}

        {/* Merchant Section */}
        <li className="font-bold text-gray-700 cursor-pointer flex items-center" onClick={() => toggleSection('merchant')}>
          <span className={`mr-2 transform transition-transform ${expandedSections.merchant ? 'rotate-90' : 'rotate-0'}`}>
            ▶
          </span>
          Merchant Endpoints
        </li>
        {expandedSections.merchant && (
          <ul className="space-y-2 transition-all duration-300 ease-in-out">
            {renderList(merchantItems)}
          </ul>
        )}

        {/* User Guide Section */}
        <li className="font-bold text-gray-700 cursor-pointer flex items-center" onClick={() => toggleSection('userGuide')}>
          <span className={`mr-2 transform transition-transform ${expandedSections.userGuide ? 'rotate-90' : 'rotate-0'}`}>
            ▶
          </span>
          Guides
        </li>
        {expandedSections.userGuide && (
          <ul className="space-y-2 transition-all duration-300 ease-in-out">
            {renderList([userGuideItem])}
          </ul>
        )}
      </ul>
    </aside>
  );
}
