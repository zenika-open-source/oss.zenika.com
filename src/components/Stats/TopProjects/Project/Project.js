import React from "react"

import "./Project.css"

const Project = ({ title, description, stars, url }) => {
  return (
    <a href={url}>
      <article className="project">
        <div>
          <div className="project__title">{title}</div>
          <div className="project__description">{description}</div>
        </div>
        <div className="project__stars">{stars}</div>
      </article>
    </a>
  )
}

export default Project
