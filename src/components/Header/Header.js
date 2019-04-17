import PropTypes from "prop-types"
import React from "react"

import { SocialLinks } from "../SocialLinks"
import "./Header.css"

const Header = () => (
  <header className="header">
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
