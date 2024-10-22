// Content.jsx
import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

export default function Content({ selectedSection }) {
  const [sections, setSections] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/content/shiokority-api-documentation.md')
      .then((response) => response.text())
      .then((text) => {
        parseSections(text);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading markdown file:', error);
        setLoading(false);
      });
  }, []);

  const parseSections = (text) => {
    const tokens = marked.lexer(text);
    const sectionContent = {};
    let currentSection = '';
    let currentSubSection = '';

    tokens.forEach(token => {
      if (token.type === 'heading' && token.depth === 2) {
        currentSection = token.text;
        sectionContent[currentSection] = '';
        currentSubSection = ''; 
      } else if (token.type === 'heading' && token.depth === 3 && currentSection) {
        currentSubSection = `${currentSection}/${token.text}`;
        sectionContent[currentSubSection] = '';
      } else if (currentSection) {
        const targetSection = currentSubSection || currentSection;
        sectionContent[targetSection] += marked.parser([token]);
      }
    });

    setSections(sectionContent);
  };

  const getSectionContent = () => {
    if (!sections[selectedSection]) return '<p>Section not found</p>';
    return DOMPurify.sanitize(sections[selectedSection]);
  };

  const breadcrumbs = selectedSection.split('/').map((crumb, index) => (
    <span key={index} className="text-gray-500">
      {crumb}
      {index < selectedSection.split('/').length - 1 && ' / '}
    </span>
  ));

  return (
    <div className="p-6 bg-white border rounded-lg shadow-md">
      {loading ? 'Loading...' : (
        <>
          <nav className="mb-4 text-sm text-gray-500">{breadcrumbs}</nav>
          <div
            className="prose prose-lg max-w-none text-gray-800 prose-a:text-blue-600 prose-code:bg-blue-100 prose-code:text-blue-700 prose-code:rounded-md prose-code:px-2 prose-code:py-1 prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-lg"
            dangerouslySetInnerHTML={{ __html: getSectionContent() }}
          />
        </>
      )}
    </div>
  );
}
