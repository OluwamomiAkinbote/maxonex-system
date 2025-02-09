
import React from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="sticky top-0 flex justify-center items-center bg-[#0d010f] p-3 z-50">
      <div className="flex space-x-2 bg-gray-800 p-2 rounded-md z-50">
        <Link
          to="/"
          className={`icon flex items-center justify-center p-2 rounded-md hover:bg-purple-500 transition duration-300 ${
            location.pathname === "/" ? "bg-purple-600" : ""
          }`}
        >
          <i className="fas fa-home text-white text-lg"></i>
        </Link>
        <Link
          to="/about"
          className={`icon flex items-center justify-center p-2 rounded-sm hover:bg-purple-500 transition duration-300 ${
            location.pathname === "/about" ? "bg-purple-600" : ""
          }`}
        >
          <i className="fas fa-user text-white text-lg"></i>
        </Link>
        <Link
          to="/contact"
          className={`icon flex items-center justify-center p-2 rounded-sm hover:bg-purple-500 transition duration-300 ${
            location.pathname === "/contact" ? "bg-purple-600" : ""
          }`}
        >
          <i className="fas fa-envelope text-white text-lg"></i>
        </Link>


      </div>
      <Outlet />
    </div>


  );
};

export default Header;
