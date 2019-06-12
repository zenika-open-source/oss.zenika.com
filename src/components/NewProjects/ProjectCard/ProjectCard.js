import React from 'react';

import link from './icons/link.svg';
import githubIcon from './icons/icon-github.svg';

import './ProjectCard.css';

const ProjectCard = ({
  title,
  description,
  image,
  github,
  website,
  languages,
}) => {
  return (
    <article className="project-card">
      <h2 className="project-card__title">
        {title}
      </h2>
      <div className="project-card__wrapper">
        {image && <img src={image} alt="logo" />}
        <div>
          <p className="project-card__description">
            {description}
          </p>
          <div className="project-card__footer">
            <div className="project-card__links">
              {github && (
                <span className="project-card__url">
                  <a href={github} target="_NEW">
                    <img alt="link icon" className="project-card__icon" src={githubIcon} /> Repository
                  </a>
                </span>
              )}
              {website && (
                <span className="project-card__url">
                  <a href={website} target="_NEW">
                    <img alt="link icon" className="project-card__icon" src={link} /> Website
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
