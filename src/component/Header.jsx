import React from 'react';
import shiokorityLogo from '../assets/images/Shiokority.png'; // Relative path from Header.jsx to the image


export default function Header() {
  return (
    <header className="flex flex-col items-center p-4 bg-white border-b w-full">
      {/* Top Row: Logo and Right-side Buttons */}
      <div className="flex justify-between items-center w-full mb-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src= {shiokorityLogo}  // Replace with your logo
            alt="Shokority Logo"
            className="w-39 h-32" // Adjust size as needed
          />
        </div>

        {/* Create Account and Login Buttons */}
        <div className="flex space-x-4">
          <CreateAccount />
          <Login />
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Navigation */}
      <Navigation />
    </header>
  );
}

function Navigation() {
  return (
    <nav className="mt-4">
      <ul className="flex space-x-6 text-[#153247] text-sm">
        <li className="hover:text-[#1e4b64]">
          <a href="#">Get started</a>
        </li>
        <li className="hover:text-[#1e4b64]">
          <a href="#">Payments</a>
        </li>
        <li className="hover:text-[#1e4b64]">
          <a href="#">Merchant</a>
        </li>
        <li className="hover:text-[#1e4b64]">
          <a href="#">Customers</a>
        </li>
        <li className="hover:text-[#1e4b64]">
          <a href="#">Documentation</a>
        </li>
        <li className="hover:text-[#1e4b64]">
          <a href="#">Developer tools</a>
        </li>
      </ul>
    </nav>
  );
}

function SearchBar() {
  return (
    <div className="relative w-1/2 max-w-lg mt-4">
      <input
        type="text"
        placeholder="Search the docs or ask a question"
        className="border border-gray-300 rounded-md py-2 px-4 w-full text-sm text-[#153247]"
      />
      <span className="absolute right-2 top-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-[#153247]"
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

function CreateAccount() {
  return (
    <a
      href="#"
      className="px-4 py-2 bg-[#153247] text-white text-sm rounded-md hover:bg-[#1e4b64]"
    >
      Create account
    </a>
  );
}

function Login() {
  return (
    <button className="px-4 py-2 bg-[#153247] text-white text-sm rounded-md hover:bg-[#1e4b64]">
      Sign in
    </button>
  );
}
