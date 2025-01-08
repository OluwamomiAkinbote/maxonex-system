import React from "react";
import realEstate from "../images/React-Real- Estate project.png";
import calculator from "../images/calculator.png";
import addToCart from "../images/add-to-cart (1).png";

import { Link } from "react-router-dom";

const projects = [
  {
    id: "1",
    title: "Real Estate",
    image: realEstate,
    link: "https://react-real-estate-project.vercel.app/",
    description: {
      para1: `This is a personal project and dynamic project that is user-friendly. It involves sections like header, hero section, search section, house section, house details page and lastly the footer. 
      The header section contains the company logo, navigation bar and login buttons. While the hero gives short welcome content to persuade client. It responsive across all devices.
      `,
      para2: `The search section functions dynamically in such that the client can perform various search that’s related to interests. On pressing the search button, it will filter out desired products.
      At the house section, it only contains the images, number of amenities and locations. And lastly, the house details section is a page that is linked to the house section in such that when it’s clicked, it display the all details of the house of unique id, it give full details of such id including the agent contacts.
      This project is responsive across all devices.
      
      `,
    },
    technologies: [
      "ReactJS",
      "JavaScript",
      "HTML",
      "Tailwind CSS",
      "React icons",
      " Responsive Design",
      "PostCSS",
      "Github",
      "Vercel",
    ],
  },
  {
    id: "2",
    title: "Ecommerce",
    image: addToCart,
    link: "https://add-to-cart-ecommerce.vercel.app/",
    description:
      "HTML, JS, CSS3 power a dynamic e-commerce site, ensuring seamless shopping. Intuitive design, responsive layout, and Add to Cart container optimize user convenience for effortless product selection and purchase.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    id: "3",
    title: "Simple Calculator",
    image: calculator,
    link: "https://simple-calculator-three-sage.vercel.app/",
    description:
      "A stylish HTML5 calculator with JavaScript for real-time arithmetic. Enhanced by CSS, it offers a user-friendly interface for quick and efficient calculations, accessible seamlessly across various devices.",
    technologies: ["HTML5", "JavaScript", "CSS3"],
  },
];

const ProjectsDatas = () => {
  return (
    <div className="projects__container">
      {projects.map((project, index) => (
        <Link
          to={`/project/${project.id}`}
          key={index}
          className="project__link"
        >
          <div className="project__card">
            <div className="project__image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project__content">
              <h3>{project.title}</h3>
              <p>Technologies: {project.technologies.join(", ")}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export { projects, ProjectsDatas };
