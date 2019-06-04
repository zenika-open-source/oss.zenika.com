import React from "react"

import "./Project.css"

const Project = ({ title, description, stars }) => {
  return (
    <article className="project">
      <div>
        <div className="project__title">{title}</div>
        <div className="project__description">{description}</div>
      </div>
      <div className="project__stars">{stars}</div>
    </article>
  )
}

export default Project
