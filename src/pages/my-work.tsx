import { graphql, Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import Layout from '../components/layout';
import List, { mapPostsToList } from '../components/list';
import SEO from '../components/seo';

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

const WorkList: FunctionComponent<{
	data: { allMarkdownRemark: { edges: Queries.MarkdownRemarkEdge[] } };
}> = ({
	data: {
		allMarkdownRemark: { edges },
	},
}) => (
	<Layout hasNavigation={true}>
		<SEO title="My work" />
		<List
			items={mapPostsToList(
				edges.filter(({ node }) => node?.frontmatter?.type === 'work'),
			)}
			title="Recent work"
		/>
	</Layout>
);

export default WorkList;
