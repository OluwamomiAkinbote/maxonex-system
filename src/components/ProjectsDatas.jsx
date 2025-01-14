import React from "react";
import { Link } from "react-router-dom";
import realEstate from "../images/React-Real- Estate project.png";
import addToCart from "../images/add-to-cart (1).png";

const projects = [
  {
    id: "1",
    title: "Real Estate",
    image: realEstate,
    link: "https://react-real-estate-project.vercel.app/",
    description: {
      para1: `This is a personal and dynamic project that is user-friendly. It involves sections like header, hero section, search section, house section, house details page, and footer. The header contains the company logo, navigation bar, and login buttons. The hero section provides persuasive content for clients and is responsive across all devices.`,
      para2: `The search section functions dynamically, allowing clients to perform interest-based searches. Pressing the search button filters out desired results. The house section displays images, amenities, and locations. The house details page gives full details of a specific property, including agent contacts. This project is fully responsive across all devices.`,
    },
    technologies: [
      "ReactJS",
      "JavaScript",
      "HTML",
      "Tailwind CSS",
      "React icons",
      "Responsive Design",
      "PostCSS",
      "Github",
      "Vercel",
    ],
  },
  {
    id: "2",
    title: "Simple E-commerce Website",
    image: addToCart,
    link: "https://add-to-cart-ecommerce.vercel.app/",
    description:
      "HTML, JS, and CSS3 power a dynamic e-commerce site, ensuring seamless shopping. Intuitive design, responsive layout, and Add to Cart functionality optimize user convenience for effortless product selection and purchase.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
  },
];

const ProjectsDatas = () => {
  return (
    <div className=" text-white my-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        Explore our <span className="text-purple-500">Projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-purple-950 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-95"
          >
            {/* Project Image */}
            <Link to={`/project/${project.title}`}>
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-lg font-semibold">
                    View Details
                  </p>
                </div>
              </div>
            </Link>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-4">
                Technologies: {project.technologies.join(", ")}
              </p>
              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-600 transition-colors duration-300"
              >
                View Live
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { projects, ProjectsDatas };
