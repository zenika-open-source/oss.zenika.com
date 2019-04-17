import React from "react"

import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
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
      <div className="copyright">
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  )
}

export default Footer
