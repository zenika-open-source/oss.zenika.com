/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import byZenika from "./byzenika.png";
import { Hero } from "./Hero";
import { Hacktoberfest } from "./Hacktoberfest";
import { Footer } from "./Footer";
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
    render={data => (
      <>
        <Hacktoberfest />
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
                Zenika's DNA is based on open source philosophy. <br />
                Driven by this passion, we contribute to projects and share more
                and more with communities. <br />
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
  children: PropTypes.node.isRequired
};

export default Layout;
