import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from '../components/layout'
import { Hero } from '../components/Hero'

import './BlogPost.css'; // make it pretty!

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  const date = new Date(post.frontmatter.date)
  return (
		<Layout noHero>
			<Helmet title={`OSS by Zenika - ${post.frontmatter.title}`} />
      <Hero
        title={(
          <h1>
            {post.frontmatter.title}<br />
            <sub></sub>
          </h1>
        )}
        small
      />
			<div className="blog-post">
				<Link className="blog-post__back-home" to="/">Back to home</Link>
				<div
					className="blog-post-content"
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>
				<Link className="blog-post__back-home" to="/">Back to home</Link>
			</div>
		</Layout>
  )
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
`
