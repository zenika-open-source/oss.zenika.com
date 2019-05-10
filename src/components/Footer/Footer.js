import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__phrase">
        Made with ❤ by <a href="https://www.zenika.com/">Zenika</a>
      </p>
      <div className="partners">
        <div>
          <a href="https://www.netlify.com">
            <img
              alt="Deploys by Netlify"
              src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
