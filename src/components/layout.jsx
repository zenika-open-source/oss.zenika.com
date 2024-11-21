/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { Footer } from "./Footer";
import { Hero } from "./Hero";
import byZenika from "./byzenika.png";
import "./layout.css";

const Layout = ({ children, noHero = false }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        {noHero ? null : (
          <Hero
            title={
              <>
                <h1>
                  &lt;Coding <strong>an open source</strong> World&gt;
                </h1>
                <img src={byZenika} alt="by Zenika" width="150px" />
              </>
            }
            description={
              <>
                Zenika's DNA is based on open source philosophy.
                <br />
                Driven by this passion, we contribute to projects and share more
                and more with communities.
                <br />
              </>
            }
          />
        )}
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noHero: PropTypes.bool,
};

Layout.defaultProps = {
  noHero: false,
};

export default Layout;
