import React from "react"

import logoTwitter from "./icon-twitter.svg"
import logoGithub from "./icon-github.svg"
import "./SocialLinks.css"

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/zenika-open-source" target="NEW">
        <img src={logoGithub} className="social-links__icon" alt="github" />
      </a>
      <a href="https://twitter.com/ZenikaOSS" target="NEW">
        <img src={logoTwitter} className="social-links__icon" alt="twitter" />
      </a>
    </div>
  )
}

export default SocialLinks
