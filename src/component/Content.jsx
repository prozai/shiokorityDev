import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import markdownFile from '../content/shiokority-api-documentation.md';

export default function Content({ selectedSection }) {
  const [content, setContent] = useState('');
  const [sections, setSections] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch the Markdown file content
  useEffect(() => {
    fetch(markdownFile)
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
        parseSections(text); // Parse sections immediately after fetching
        setLoading(false); // Set loading to false once content is fetched
      })
      .catch((error) => {
        console.error('Error fetching markdown file:', error);
        setLoading(false);
      });
  }, []);

  // Parse the markdown content into sections (## and ###)
  const parseSections = (text) => {
    const sectionsObj = {};

    // Split the markdown by "## " to isolate second-level sections
    const topSections = text.split('\n## ');

    topSections.forEach((section) => {
      const sectionLines = section.split('\n');
      const sectionTitle = sectionLines[0].trim(); // Get the first line as section title

      // Further split the section content by "###" to capture third-level sections
      const subSections = section.split('\n### ');
      const subSectionsObj = {};

      // Loop over the sub-sections
      subSections.forEach((subSection, index) => {
        if (index === 0) {
          // The first entry is the main section (before any "###"), store it as a top-level section
          sectionsObj[sectionTitle.toLowerCase()] = `## ${subSection.trim()}`;
        } else {
          // Store third-level subsections
          const subSectionTitle = subSection.split('\n')[0].trim();
          subSectionsObj[subSectionTitle.toLowerCase()] = `### ${subSection.trim()}`;
        }
      });

      // Attach the third-level subsections to the main section
      if (Object.keys(subSectionsObj).length > 0) {
        sectionsObj[sectionTitle.toLowerCase()] = {
          content: sectionsObj[sectionTitle.toLowerCase()],
          subSections: subSectionsObj,
        };
      }
    });

    setSections(sectionsObj);
  };

  // Function to format the content, replacing "{}" with inline code blocks
  const formatSectionContent = (content) => {
    // Replace "{}" with backticks for inline code
    const formattedContent = content.replace(/{(.*?)}/g, '`$1`');
    return formattedContent;
  };

  // Get the content of the selected section
  const getSectionContent = () => {
    if (loading) {
      return 'Loading...'; // Show loading message if content is being fetched
    }

    if (!content) {
      return 'No content available'; // Show message if content is empty
    }

    // Split selectedSection into main section and potential subsection
    const [mainSection, subSection] = selectedSection.toLowerCase().split(' / ');

    const mainContent = sections[mainSection];
    if (!mainContent) {
      return 'Section not found'; // If the section doesn't exist
    }

    // Check if we're looking for a subsection
    if (typeof mainContent === 'object' && subSection) {
      const subContent = mainContent.subSections[subSection];
      return subContent ? formatSectionContent(subContent) : 'Subsection not found';
    }

    // Otherwise, return the main section content
    return formatSectionContent(mainContent.content || mainContent);
  };

  return (
    <div className="p-8 bg-white w-full">
      {/* Render only the selected section */}
      <ReactMarkdown>{getSectionContent()}</ReactMarkdown>
    </div>
  );
}
