import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SocialLinks from "../SocialLinks/SocialLinks"
import "./Header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <SocialLinks />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
