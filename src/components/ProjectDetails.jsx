import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../components/ProjectsDatas";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="pjt__container">
      <div className="pjt__box">
        <h2 className="pjt__heading">{project.title}</h2>
        <div className="pjt__images">
          <img src={project.image} alt={project.title} />
          <div className="pjt__link">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit Site
            </a>
          </div>
        </div>
        <div className="pjt__description">
          <p>{project.description.para1}</p>
          <p>{project.description.para2}</p>
        </div>
        <div className="pjt__tech">
          <h3 className="tech__heading">Tech stacks Used:</h3>
          <div className="pjt__tech-list">
            {project.technologies.map((tech, index) => (
              <button key={index} className="tech__button">
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
