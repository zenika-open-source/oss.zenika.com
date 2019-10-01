import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { Hero } from "../components/Hero";

import "./BlogPost.css";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
const date = new Date(post.frontmatter.date);
  return (
    <Layout noHero>
      <Helmet title={`OSS by Zenika - ${post.frontmatter.title}`}>
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
            {post.frontmatter.title}
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
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Link className="blog-post__back-home" to="/">
          Back to home
        </Link>
      </div>
    </Layout>
  );
}

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
