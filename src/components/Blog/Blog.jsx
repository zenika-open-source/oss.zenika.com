import React from 'react'
import { Link } from 'gatsby'

import './Blog.css'

export function Blog() {
  return (
    <article className="blog">
      <h2>blog</h2>
      <div className="blog__content">
        <p>
          Find out about open source with our <Link to="/blog">blog</Link>.
        </p>
      </div>
    </article>
  )
}
