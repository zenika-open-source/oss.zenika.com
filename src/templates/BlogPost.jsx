import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import { Hero } from "../components/Hero";
import Layout from "../components/layout";

import "./BlogPost.css";

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <Layout noHero>
      <Helmet title={"OSS by Zenika"}>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js" />
        <script src="/cookie.js" />
      </Helmet>
      <Hero
        title={
          <h1>
            OSS by Zenika
            <br />
            <sub />
          </h1>
        }
        small
      />
      <div className="blog-post">
        <Link className="blog-post__back-home" to="/">
          Back to home
        </Link>
        <div
          className="blog-post-content"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: blog posts can contain html
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Link className="blog-post__back-home" to="/">
          Back to home
        </Link>
      </div>
    </Layout>
  );
}

Template.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`;
