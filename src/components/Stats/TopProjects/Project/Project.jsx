import React from "react";
import PropTypes from "prop-types";

import Star from "./Star";
import "./Project.css";

const Project = ({ title, description, stars, url }) => (
  <article className="project">
    <div className="project__text">
      <a href={url}>
        <div className="project__title">{title}</div>
      </a>
      <div className="project__description">{description}</div>
    </div>
    <div className="project__stars">
      <span>{stars}</span>
      &nbsp;
      <Star />
    </div>
  </article>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default Project;
