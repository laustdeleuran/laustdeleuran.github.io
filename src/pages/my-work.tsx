import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import List, { mapPostsToList } from "../components/list";
import SEO from "../components/seo";

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            type
            color
          }
        }
      }
    }
  }
`;

const WorkList = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout hasNavigation={true}>
    <SEO title="My work" />
    <List
      items={mapPostsToList(
        edges.filter(({ node }) => node.frontmatter.type === "work")
      )}
      title="Recent work"
    />
  </Layout>
);

export default WorkList;
