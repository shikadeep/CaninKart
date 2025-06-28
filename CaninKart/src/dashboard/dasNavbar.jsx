import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // Replace with your actual logo path
import placeholderImg from "../assets/ctf.png"; // Replace or use a placeholder service

const DasNavbar = () => {
  const navItems = [
    { name: "Overview", path: "/dashboard" },
    { name: "Blog", path: "/dashboard/blog" },
    { name: "Country", path: "/dashboard/countrypage" },
    { name: "Contact", path: "/dashboard/contact" },
  ];
  return (
    <header className="max-w-screen-2xl bg-white shadow-md mx-auto sticky top-0 z-50">
      <nav className="shadow-md px-6 py-4 flex justify-between items-center max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link to='/'>
        <img src={logo} alt="Logo" className="w-full" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-10 font-medium text-gray-600 ">
          {navItems.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                end={name === "Overview"} // Add end prop only for Overview
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-white border rounded-2xl border-black px-3 py-1 bg-black font-semibold transition duration-300" : " border border-black px-3 py-1 rounded-2xl "
                  }` 
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Profile or Placeholder */}
        <div>
          <img
            src={placeholderImg}
            alt="User"
            className="w-10 h-10 rounded-full object-cover border"
          />
        </div>
      </nav>
    </header>
  );
};

export default DasNavbar;