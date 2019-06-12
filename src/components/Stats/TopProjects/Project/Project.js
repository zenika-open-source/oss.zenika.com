import React from "react"

import "./Project.css"

const Project = ({ title, description, stars, url }) => {
  return (
    <article className="project">
      <div>
        <a href={url}>
          <div className="project__title">{title}</div>
        </a>
        <div className="project__description">{description}</div>
      </div>
      <div className="project__stars">{stars}</div>
    </article>
  )
}

export default Project
