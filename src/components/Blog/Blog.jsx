import React from 'react';
import { Link } from 'gatsby';

import './Blog.css';

export function Blog() {
  return (
    <article className="blog">
      <h2>Open source white paper</h2>
      <div className="blog__content">
        <p className="blog__description">
The world of open source is vast and have multiple facets. We are writing a white paper to help you on each aspects of open source projects. These articles are also open source feel free to give us feedback or participate on&nbsp;
          <a href="https://github.com/zenika-open-source/open-source-white-paper">our repository</a>
.
        </p>
        <ul className="blog__chapters">
          <li className="blog__chapter"><Link to="/white-paper/getting-started">Chapter 1: Getting started</Link></li>
          <li className="blog__chapter"><Link to="/white-paper/preparing-your-project-being-open-sourced">Chapter 2: Preparing your project being open sourced</Link></li>
          <li className="blog__chapter"><Link to="/white-paper/promotion">Chapter 3: Promotion</Link></li>
          <li className="blog__chapter blog__chapter--disabled">Chapter 4: Licenses</li>
          <li className="blog__chapter blog__chapter--disabled">Chapter 5: Maintaining</li>
          <li className="blog__chapter blog__chapter--disabled">Chapter 6: Recruitment</li>
          <li className="blog__chapter blog__chapter--disabled">Chapter 7: Business</li>
        </ul>
      </div>
    </article>
  );
}
