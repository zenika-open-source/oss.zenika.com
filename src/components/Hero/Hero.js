import React from "react"

import logo from "./oss-logo.png"
import "./Hero.css"

const Hero = () => {
  return (
    <article className="hero">
      <img className="hero__logo" src={logo} alt="" />
      <h1 className="hero__title">
        Zenika + open-source = ♥
      </h1>
    </article>
  )
}

export default Hero
