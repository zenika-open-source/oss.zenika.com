import React from "react"
import { Helmet } from "react-helmet"
import Layout from '../components/layout'

import './BlogPost.css'; // make it pretty!

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
		<Layout noHero>
			<Helmet title={`OSS by Zenika - ${post.frontmatter.title}`} />
			<div className="blog-post">
				<h1>
					{post.frontmatter.title}<br />
					<sub>{post.frontmatter.author} - {new Date(post.frontmatter.date).toDateString()}</sub>
				</h1>
				<div
					className="blog-post-content"
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>
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
