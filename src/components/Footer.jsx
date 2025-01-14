import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-gray-500 py-4">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-sm md:text-base">
          &copy; {currentYear} Maxonex System. All rights reserved.
        </p>
        <p className="text-sm md:text-base mt-2">
          Designed and Developed by Maxonex System.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
