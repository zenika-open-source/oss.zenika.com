import path from "node:path";

export const createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const BlogPost = path.resolve("src/templates/BlogPost.jsx");

  return graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    for (const { node } of result.data.allMarkdownRemark.edges) {
      createPage({
        path: node.frontmatter.path,
        component: BlogPost,
        context: {}, // additional data can be passed via context
      });
    }
  });
};
