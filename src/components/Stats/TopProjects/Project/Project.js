import React from "react"

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
      <div className="project__stars">{stars}</div>&nbsp;⭐️
    </article>
  )
}

export default Project
