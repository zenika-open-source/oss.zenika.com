import React from 'react';
import { Link } from 'gatsby';

import netlify from './netlify.svg';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__wrapper">
      <p className="footer__phrase">
          Made with ❤ by
        {' '}
        <a href="https://www.zenika.com/">Zenika</a>
        {' '}
- licensed under
        {' '}
        <a href="https://github.com/zenika-open-source/insights-website/blob/master/LICENSE">Apache License 2.0</a>
        <br />
        {' '}
Icons made by
        <a href="https://www.flaticon.com/authors/nikita-golubev">Nikita Golubev</a>
        {' '}
from
        <a href="https://www.flaticon.com/authors/nikita-golubev">www.flaticon.com</a>
        {' '}
is licensed by
        <a href="https://creativecommons.org/licenses/by/3.0/fr/deed.en">CC 3.0 BY</a>
        <br />
        <Link to="/terms">Mentions légales</Link>
      </p>
      <a href="https://www.netlify.com">
        <img
          alt="Deploys by Netlify"
          src={netlify}
        />
      </a>
    </div>
  </footer>
);

export default Footer;
