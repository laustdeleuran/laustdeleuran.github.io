/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const WorkPostTemplate = path.resolve("./src/templates/work-post.tsx");
  // const BlogPostTemplate = require.resolve('./src/templates/blog-post.tsx');
  // const ExperimentTemplate = require.resolve('./src/templates/experiment-post.tsx');

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
              type
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let component = WorkPostTemplate;
    // switch (node.frontmatter.type) {
    // 	case 'post':
    // 		component = BlogPostTemplate
    // 		break;
    // 	case 'experiment':
    // 		component = ExperimentTemplate;
    // 		break;
    // }

    createPage({
      path: node.frontmatter.slug,
      component,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    });
  });
};
