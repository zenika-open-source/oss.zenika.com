import React from "react";

import "./ProjectCard.css";

const ProjectCard = ({
  title,
  description,
  image,
  github,
  website,
  languages
}) => {
  return (
    <article className="project-card">
      <div className="project-card__title">
        <div>{title}</div>
      </div>
      <div className="project-card__wrapper">
        {image && <img src={image} alt="logo"/>}
        <div>
          <div className="project-card__description">
            <div>{description}</div>
          </div>
          <div className="project-card__footer">
            <div>
              {github && (
                <span className="project-card__url">
                  <a href={github} target="_NEW">
                    Repository
                  </a>
                </span>
              )}
              {website && (
                <span className="project-card__url">
                  <a href={website} target="_NEW">
                    Website
                  </a>
                </span>
              )}
            </div>
            <div className="project-card__languages">
              {languages.map(language => (
                <div key={language} className="badge">
                  {language}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
