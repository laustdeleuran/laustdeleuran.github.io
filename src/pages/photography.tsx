/** @jsx jsx */
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { jsx, css } from '@emotion/react';
import { Link } from 'gatsby';

import Wysiwyg from '../components/wysiwyg';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PhotographyPage = () => {
	const data = useStaticQuery(graphql`
		query { 
			allFile(
				filter: { absolutePath: { regex:"/(images/photography)\/.*\\.jpg$/" } }
				sort: { name: DESC}
			) {
				edges {
					node { 
						name 
						relativePath
						childImageSharp {
							gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
							fields {
								exif {
									raw {
										image {
											Make
											Model
										}
									}
								}
							}
						}
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<SEO title="About" />
			<Wysiwyg component="article">
				<h1>What I see</h1>
				<p>
					My family takes photos. Some of the best times with my family while
					growing up was spent drinking tea and watching photos from vacations
					on the family projector. So now I take photos.
				</p>

				{data.allFile.edges.map(({ node }) => (
					<figure>
						<GatsbyImage
							image={node.childImageSharp.gatsbyImageData}
							alt=""
							css={css`
								max-width: 90vw;
								max-height: 90vh;
							`}
							objectFit="contain"
							objectPosition="left center"
						/>
					</figure>
				))}
			</Wysiwyg>
		</Layout>
	);
};

export default PhotographyPage;
