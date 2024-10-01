import React from 'react'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://stripe.com/img/v3/home/twitter.png"
          alt="Stripe Logo"
          className="h-6"
        />
        <span className="text-lg font-bold text-blue-600 ml-2">DOCS</span>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Search and buttons */}
      <div className="flex items-center">
        <SearchBar />
        <a
          href="#"
          className="text-sm font-medium text-blue-600 ml-4 hover:underline"
        >
          Create account
        </a>
        <button className="ml-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-md">
          Sign in
        </button>
      </div>
    </header>
  );
}

function Navigation() {
  return (
    <nav className="ml-8">
      <ul className="flex space-x-6 text-gray-700 text-sm">
        <li className="hover:text-blue-600">
          <a href="#">Get started</a>
        </li>
        <li className="hover:text-blue-600">
          <a href="#">Payments</a>
        </li>
        <li className="hover:text-blue-600">
          <a href="#">Finance automation</a>
        </li>
        <li className="hover:text-blue-600">
          <a href="#">Platforms and marketplaces</a>
        </li>
        <li className="hover:text-blue-600">
          <a href="#">Banking as a service</a>
        </li>
        <li className="hover:text-blue-600">
          <a href="#">Developer tools</a>
        </li>
      </ul>
    </nav>
  );
}

function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search the docs or ask a question"
        className="border border-gray-300 rounded-md py-2 px-4 w-64 text-sm"
      />
      <span className="absolute right-2 top-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 16l4-4m0 0l4-4m-4 4l4 4m-4-4l-4 4"
          />
        </svg>
      </span>
    </div>
  );
}

