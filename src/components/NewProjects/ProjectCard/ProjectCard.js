import React from "react";

import "./ProjectCard.css";

const ProjectCard = ({
  title,
  description,
  github,
  website,
  stars,
  languages
}) => {
  return (
    <article className="project-card">
      <div className="project-card__title">
        <div>{title}</div>
        <div className="project-card__stars">
          {stars} <span className="project-card__star">&#11089;</span>
        </div>
      </div>
      <div className="project-card__description">
        <div>{description}</div>
      </div>
      <div className="project-card__footer">
        {github && (
          <div className="project-card__url">
            <a href={github} target="_NEW">
              {github}
            </a>
          </div>
        )}
        {website && (
          <div className="project-card__url">
            <a href={website} target="_NEW">
              {website}
            </a>
          </div>
        )}
        <div className="project-card__languages">
          {languages.map(language => (
            <div key={language} className="badge">
              {language}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
