import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const menuItems = [
  { name: 'SDKs', submenu: [] },
  {
    name: 'API',
    submenu: ['Authentication', 'Errors', 'Expanding Responses', 'Idempotent Requests', 'Metadata']
  },
]

// Simulated API call
const fetchContent = async (item) => {
  // In a real application, this would be an actual API call
  await new Promise(resolve => setTimeout(resolve, 300)) // Simulate network delay
  return `This is the content for ${item}. In a real application, this would be fetched from an API.`
}

export default function Component() {
  const [expandedItem, setExpandedItem] = useState(null)
  const [content, setContent] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const toggleExpand = (itemName) => {
    setExpandedItem(expandedItem === itemName ? null : itemName)
  }

  const handleItemClick = async (item) => {
    if (item.submenu && item.submenu.length > 0) {
      toggleExpand(item.name)
    } else {
      setIsLoading(true)
      try {
        const fetchedContent = await fetchContent(item.name)
        setContent(fetchedContent)
      } catch (error) {
        console.error('Error fetching content:', error)
        setContent('Error loading content. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-indigo-600">Overview</h2>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2 px-4">
            {menuItems.map((item) => (
              <li key={item.name} className="rounded">
                <div className="flex items-center justify-between hover:bg-gray-100">
                  <a
                    href="#"
                    className="block px-2 py-1 text-sm text-gray-700 hover:text-indigo-600 flex-grow"
                    onClick={(e) => {
                      e.preventDefault()
                      handleItemClick(item)
                    }}
                  >
                    {item.name}
                  </a>
                  {item.submenu.length > 0 && (
                    <button
                      onClick={() => toggleExpand(item.name)}
                      className="p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                      aria-expanded={expandedItem === item.name}
                      aria-controls={`submenu-${item.name}`}
                    >
                      <ChevronDownIcon
                        className={`w-4 h-4 text-gray-500 transform transition-transform ${
                          expandedItem === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.submenu.length > 0 && expandedItem === item.name && (
                  <ul id={`submenu-${item.name}`} className="ml-4 mt-1 space-y-1">
                    {item.submenu.map((subItem) => (
                      <li key={subItem} className="hover:bg-gray-100 rounded">
                        <a
                          href="#"
                          className="block px-2 py-1 text-xs text-gray-600 hover:text-indigo-600"
                          onClick={(e) => {
                            e.preventDefault()
                            handleItemClick({ name: subItem })
                          }}
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Content</h3>
          {isLoading ? (
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            </div>
          ) : (
            <p>{content || 'Select an item from the menu to view content'}</p>
          )}
        </div>
      </div>
    </div>
  )
}