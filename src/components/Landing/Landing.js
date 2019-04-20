import React from "react"

import logo from "./oss-logo.png"
import "./Landing.css"

const Landing = () => {
  return (
    <article className="landing">
      <img className="landing__logo" src={logo} alt="" />
      <h1 className="landing__title">
        Zenika + open-source = ♥
      </h1>
    </article>
  )
}

export default Landing
