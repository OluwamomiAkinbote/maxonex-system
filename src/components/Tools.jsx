import React, { useState } from "react";

// Example image imports (replace with your actual image paths)
import HTML5Icon from "../images/html-5.png";
import CSS3Icon from "../images/css-3.png";
import JSIcon from "../images/js.png";
import TailwindCSSIcon from "../images/tailwindcss-1.png";
import ReactIcon from "../images/react.png";
import WordPressIcon from "../images/wordpress.png";
import WebflowIcon from "../images/Webflow-1.png";
import GitHubIcon from "../images/github.png";
import DjangoIcon from "../images/Django_Logo-1.png";
import PythonIcon from "../images/python.png";
import SassIcon from "../images/sass.png";
import ResponsiveDesignIcon from "../images/responsive-design.png";
import GraphicDesignIcon from "../images/pen-tool.png";
import ElementorIcon from "../images/elementor.png";
import MySQLIcon from "../images/mysql.png";
import PostgreSQLIcon from "../images/postgresql.png";
import IllustratorIcon from "../images/illustrator.png";
import FigmaIcon from "../images/figma.png";
import PhotoshopIcon from "../images/photoshop.png";

// Grouping the tools into categories
const toolGroups = [
  {
    name: "Frontend",
    tools: [
      { name: "HTML5", icon: HTML5Icon },
      { name: "CSS3", icon: CSS3Icon },
      { name: "JavaScript", icon: JSIcon },
      { name: "TailwindCSS", icon: TailwindCSSIcon },
      { name: "React", icon: ReactIcon },
      { name: "Sass", icon: SassIcon },
      { name: "Responsive Design", icon: ResponsiveDesignIcon },
    ],
  },
  {
    name: "Backend",
    tools: [
      { name: "Django", icon: DjangoIcon },
      { name: "Python", icon: PythonIcon },
      { name: "GitHub", icon: GitHubIcon },
      { name: "MySQL", icon: MySQLIcon },
      { name: "PostgreSQL", icon: PostgreSQLIcon },
    ],
  },
  {
    name: "Content Management System",
    tools: [
      { name: "HTML5", icon: HTML5Icon },
      { name: "CSS3", icon: CSS3Icon },
      { name: "JavaScript", icon: JSIcon },
      { name: "Responsive Design", icon: ResponsiveDesignIcon },
      { name: "Webflow", icon: WebflowIcon },
      { name: "WordPress", icon: WordPressIcon },
      { name: "Elementor", icon: ElementorIcon },
    ],
  },
  {
    name: "Design",
    tools: [
      { name: "Graphic Design", icon: GraphicDesignIcon },
      { name: "Photoshop", icon: PhotoshopIcon },
      { name: "Illustrator", icon: IllustratorIcon },
      { name: "Figma", icon: FigmaIcon },
    ],
  },
];

const Tools = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? toolGroups.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === toolGroups.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-50 flex justify-center ">
      <div className="bg-white/10 backdrop-blur-lg rounded-md p-4 w-full max-w-5xl relative">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Tools
        </h1>

        {/* Carousel Controls */}
        <button
          onClick={handlePrev}
          className="absolute top-2 right-20 bg-gray-800 text-white px-2 py-1 rounded shadow-md hover:bg-gray-700 transition text-xs"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded shadow-md hover:bg-gray-700 transition text-xs"
        >
          Next
        </button>

        {/* Tool Group */}
        <div className="p-2">
          <div className="relative">
            <div className="absolute top-0 left-2 bg-gray-700 text-white px-2 py-0.5 rounded-full text-xs">
              {toolGroups[currentIndex].name}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {toolGroups[currentIndex].tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white/20 backdrop-blur-md p-2 rounded shadow hover:scale-105 transition-transform w-20 h-20"
              >
                <img
                  src={tool.icon}
                  alt={`${tool.name} icon`}
                  className="w-10 h-10 object-contain mb-1"
                />
                <span className="text-white text-xs font-medium text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
