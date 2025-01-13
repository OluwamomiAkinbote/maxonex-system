import React from "react";

const HeroFooter = () => {
  return (
    <div className="relative text-white py-16">
      {/* Wavy Background */}
      <svg
        className="absolute top-0 left-0 w-full h-32 -z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0d010f"
          d="M0,128L48,138.7C96,149,192,171,288,186.7C384,203,480,213,576,213.3C672,213,768,203,864,181.3C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 mb-12">
          {/* Statistic 1 */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold">+4</h2>
            <p className="text-gray-400 text-sm lg:text-base mt-2">
              YEARS OF EXPERIENCE
            </p>
          </div>
          {/* Statistic 2 */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold">+15</h2>
            <p className="text-gray-400 text-sm lg:text-base mt-2">
              PROJECTS COMPLETED
            </p>
          </div>
          {/* Statistic 3 */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold">+20</h2>
            <p className="text-gray-400 text-sm lg:text-base mt-2">
              WORLDWIDE CLIENTS
            </p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-center items-center space-x-4">
          {/* Button 1 */}
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition">
            Let’s Talk
          </button>
          {/* Button 2 */}
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
