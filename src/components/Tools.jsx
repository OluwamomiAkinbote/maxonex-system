import React from "react";

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

// Grouping the tools into categories
const frontendTools = [
  { name: "HTML5", icon: HTML5Icon },
  { name: "CSS3", icon: CSS3Icon },
  { name: "JavaScript", icon: JSIcon },
  { name: "TailwindCSS", icon: TailwindCSSIcon },
  { name: "React", icon: ReactIcon },
  { name: "Sass", icon: SassIcon },
  { name: "Responsive Design", icon: ResponsiveDesignIcon },
  { name: "Webflow", icon: WebflowIcon },
  { name: "WordPress", icon: WordPressIcon },
  { name: "Elementor", icon: ElementorIcon },
];

const backendTools = [
  { name: "Django", icon: DjangoIcon },
  { name: "Python", icon: PythonIcon },
  { name: "GitHub", icon: GitHubIcon },
  { name: "MySQL", icon: MySQLIcon },
  { name: "PostgreSQL", icon: PostgreSQLIcon },
];



const designTools = [
  { name: "Graphic Design", icon: GraphicDesignIcon },
];

const Tools = () => {
  return (
    <div className="min-h-screenflex justify-center items-center">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 w-full max-w-7xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Tools for Exceptional{" "}
          <span className="text-gray-300">Results</span>
        </h1>

        {/* Frontend tools */}
        <h2 className="text-2xl font-semibold mb-4 text-white">Frontend</h2>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {frontendTools.map((tool, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={tool.icon}
                alt={`${tool.name} icon`}
                className="w-16 h-16 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Backend tools */}
        <h2 className="text-2xl font-semibold mb-4 text-white">Backend</h2>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {backendTools.map((tool, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={tool.icon}
                alt={`${tool.name} icon`}
                className="w-16 h-16 object-contain"
              />
            </div>
          ))}
        </div>



        {/* Design tools */}
        <h2 className="text-2xl font-semibold mb-4 text-white">Design</h2>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
          {designTools.map((tool, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={tool.icon}
                alt={`${tool.name} icon`}
                className="w-16 h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
