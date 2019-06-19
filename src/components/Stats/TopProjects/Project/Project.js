import React from "react"

import Star from "./Star.js"
import "./Project.css"

const Project = ({ title, description, stars, url }) => {
  return (
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
  )
}

export default Project
