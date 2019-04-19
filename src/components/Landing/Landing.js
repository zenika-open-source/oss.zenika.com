import React from "react"

import logo from "./oss-logo.png"
import "./Landing.css"

const Landing = () => {
  return (
    <section className="landing">
      <img className="landing__logo" src={logo} alt="" />
      <h1 className="landing__title">
        Zenika + open-source = ♥
      </h1>
    </section>
  )
}

export default Landing
