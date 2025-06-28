import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = ["home", "product", "about", "blog", "contact"];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Navigate or filter logic here
    setShowSearch(false); // hide input after search
  };

    const toggleSearch = () => {
    if (showSearch) {
      setSearchQuery('')
    }
    setShowSearch(!showSearch)
  }
  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-[1500px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Caninkart Logo" className="h-10 w-auto" />
        </NavLink>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          {navLinks.map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item}`}
                className={({ isActive }) =>
                  `group relative inline-block transition-colors ${
                    isActive
                      ? "text-orange-500 font-semibold"
                      : "text-gray-700 hover:text-orange-500"
                  }`
                }
              >
                {item.toUpperCase()}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300"></span>
              </NavLink>
            </li>
          ))}
        </ul>

    <div className="flex items-center relative space-x-3">
      {/* Toggle Button (Search or Close icon) */}
      <button
        onClick={toggleSearch}
        className="bg-[#D0F3FF] p-2 rounded-full hover:bg-[#89defa] transition"
      >
        {showSearch ? (
          <IoClose size={20} className="text-gray-800" />
        ) : (
          <FiSearch size={20} className="text-gray-800" />
        )}
      </button>

      {/* Sliding Search Input */}
      <div
        className={`absolute right-16 md:right-12 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
          showSearch ? 'opacity-100 scale-x-100 w-55 sm:w-72' : 'opacity-0 scale-x-0 w-0'
        } origin-left`}
      >
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm"
        >
          <input
            type="text"
            className="flex-1 px-3 py-2 text-sm outline-none"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus={showSearch}
          />
          <button
            type="submit"
            className="bg-orange-500 text-white  px-2 sm:px-4 py-2 hover:bg-orange-600"
          >
            Go
          </button>
        </form>
      </div>
      {/* Hamburger Menu Icon */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </div>



      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden px-6 pt-2 pb-4 space-y-3 font-medium text-gray-700 transition-all duration-300 ease-in-out ${
          isOpen ? "block animate-slide-down" : "hidden"
        }`}
      >
        {navLinks.map((item) => (
          <div key={item}>
            <NavLink
              to={`/${item}`}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `group relative inline-block transition-colors ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700 hover:text-orange-500"
                }`
              }
            >
              {item.toUpperCase()}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300"></span>
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
