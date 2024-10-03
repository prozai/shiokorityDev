import React from 'react';

export default function ListComponent({ onSelectSection }) {
  const menuItems = [
    { label: 'Introduction', section: 'Introduction' },
    { label: 'Base URL', section: 'Base URL' },
    { label: 'Authentication', section: 'Authentication' },
  ];

  const adminItems = [
    { label: 'Login Admin', section: 'Login Admin' },
    { label: 'Logout Admin', section: 'Logout Admin' },
    { label: 'Create Merchant', section: 'Create Merchant' },
    { label: 'View Merchant', section: 'View Merchant' },
    { label: 'Get Merchant by ID', section: 'Get Merchant by ID' },
    { label: 'Edit Merchant', section: 'Edit Merchant' },
    { label: 'Update Merchant Status', section: 'Update Merchant Status' },
  ];

  const merchantItems = [
    { label: 'Login Merchant', section: 'Login Merchant' },
    { label: 'Logout Merchant', section: 'Logout Merchant' },
    { label: 'Get Merchant Profile', section: 'Get Merchant Profile' },
    { label: 'Update Merchant Profile', section: 'Update Merchant Profile' },
    { label: 'User Guide', section: 'User Guide' },
  ];

  const renderList = (items) =>
    items.map((item) => (
      <li key={item.section}>
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
        <li className="font-bold text-gray-700">Admin Endpoints</li>
        {renderList(adminItems)}
        <li className="font-bold text-gray-700">Merchant Endpoints</li>
        {renderList(merchantItems)}
      </ul>
    </aside>
  );
}
