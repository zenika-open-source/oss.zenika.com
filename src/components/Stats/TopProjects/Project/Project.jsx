import PropTypes from "prop-types";
import React from "react";

import "./Project.css";

const Project = ({ title, description, url }) => (
  <article className="project">
    <div className="project__text">
      <a href={url}>
        <div className="project__title">{title}</div>
      </a>
      <div className="project__description">{description}</div>
    </div>
    <div className="project__stars">
      <a
        className="github-button"
        href={url}
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label={`Star ${url.replace("https://github.com/", "")} on GitHub`}
      >
        Star
      </a>
    </div>
  </article>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Project;
