
import React from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="sticky top-0 flex justify-center items-center bg-[#0d010f] p-3 ">
      <div className="flex space-x-2 bg-gray-800 p-2 rounded-md">
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
          <i className="fas fa-folder text-white text-lg"></i>
        </Link>
        <Link
          to="/wrench"
          className={`icon flex items-center justify-center p-2 rounded-sm hover:bg-purple-500 transition duration-300 ${
            location.pathname === "/wrench" ? "bg-purple-600" : ""
          }`}
        >
          <i className="fas fa-wrench text-white text-lg"></i>
        </Link>
        <Link
          to="/gift"
          className={`icon flex items-center justify-center p-2 rounded-sm hover:bg-purple-500 transition duration-300 ${
            location.pathname === "/gift" ? "bg-purple-600" : ""
          }`}
        >
          <i className="fas fa-gift text-white text-lg"></i>
        </Link>
        <Link
          to="/pencil"
          className={`icon flex items-center justify-center p-2 rounded-sm hover:bg-purple-500 transition duration-300 ${
            location.pathname === "/pencil" ? "bg-purple-600" : ""
          }`}
        >
          <i className="fas fa-pencil-alt text-white text-lg"></i>
        </Link>
        <Link
          to="/envelope"
          className={`icon flex items-center justify-center p-2 rounded-sm hover:bg-purple-500 transition duration-300 ${
            location.pathname === "/envelope" ? "bg-purple-600" : ""
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
