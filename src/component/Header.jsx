import { useState } from "react";
import { WebsiteLogo } from "../images.path";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-section   bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800  text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Side - Logo and Website Name */}
        <div className="flex items-center space-x-4">
          <img
            src={WebsiteLogo}
            alt="Logo"
            className="h-10 w-10 mix-blend-lighten"
          />
          <span className="text-xl font-semibold">VidAize</span>
        </div>

        {/* Hamburger Menu Icon (Visible on Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Right Side - Contact and Login/Signup (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Contact
          </a>
          <a
            href="/login"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile Menu (Visible when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Contact
            </a>
            <a
              href="/login"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
