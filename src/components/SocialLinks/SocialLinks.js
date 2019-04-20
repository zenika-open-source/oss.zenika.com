import React from "react"

import logoTwitter from "./icon-twitter.svg"
import logoGithub from "./icon-github.svg"
import "./SocialLinks.css"

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://twitter.com/ZenikaIT">
        <img src={logoTwitter} className="social-links__icon" alt="twitter logo" />
      </a>
      <a href="https://github.com/zenika-open-source">
        <img src={logoGithub} className="social-links__icon" alt="github logo" />
      </a>
    </div>
  )
}

export default SocialLinks
