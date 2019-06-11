import React from "react"

import { SocialLinks } from './SocialLinks'
import "./Resources.css"

const Resources = () => {
  return (
    <article className="resources">
      <h2>Cool resources</h2>
      <div className="resources__content">
        <div className="resources__links">
          <a href="https://opensource.dev" target="NEW">opensource.dev</a>
          <a href="https://opensource.guide" target="NEW">opensource.guide</a>
          <a href="https://todogroup.org/guides/" target="NEW">todogroup.org/guides/</a>
          <a href="https://opensource.org/" target="NEW">opensource.org/</a>
        </div>
        <div className="resources__social">
          <SocialLinks />
        </div>
      </div>
    </article>
  )
}

export default Resources
