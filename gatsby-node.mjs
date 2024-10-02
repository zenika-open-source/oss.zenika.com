import path from "node:path";

export const createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const BlogPost = path.resolve("src/templates/BlogPost.jsx");

  return graphql(`{
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1000) {
      edges {
        node {
          frontmatter {
            path  
          }
        }
      }
    }
  }`).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: BlogPost,
        context: {}, // additional data can be passed via context
      });
    });
  });
};
