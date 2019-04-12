import React from "react"

import logoTwitter from "./icon-twitter.svg"
import logoGithub from "./icon-github.svg"
import "./SocialLinks.css"

const SocialLinks = () => {
  return (
    <div className="social-links-wrapper">
      <a href="https://twitter.com/ZenikaIT">
        <img src={logoTwitter} className="social-link-icon" alt="twitter logo"/>
      </a>
      <a href="https://github.com/zenika-open-source">
        <img src={logoGithub} className="social-link-icon" alt="github logo"/>
      </a>
    </div>
  )
}

export default SocialLinks
