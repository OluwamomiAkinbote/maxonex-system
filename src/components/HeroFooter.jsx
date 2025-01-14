import React from "react";
import { Link } from "react-router-dom";

const HeroFooter = () => {
  return (
    <div className="relative text-white py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold">+4</h2>
            <p className="text-gray-400 text-sm lg:text-base mt-2">
              Years of Experience
            </p>
          </div>
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold">+15</h2>
            <p className="text-gray-400 text-sm lg:text-base mt-2">
              Projects Completed
            </p>
          </div>
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold">+8</h2>
            <p className="text-gray-400 text-sm lg:text-base mt-2">
              Worldwide Clients
            </p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-center items-center space-x-4">
          <Link to="#contact" className="bg-purple-600 text-white px-4 py-3 rounded-full font-semibold hover:bg-purple-700 transition">
            Let's Talk
          </Link>
          <button className="flex items-center space-x-2 text-white font-medium hover:underline">
            <span>My Work</span>
            <span className="font-bold">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroFooter;
