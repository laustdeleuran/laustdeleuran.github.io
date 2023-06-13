/** @jsx jsx */
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { jsx, css } from '@emotion/react';

import Wysiwyg from '../components/wysiwyg';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Unit } from '../utils/style/style';

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
			<SEO title="Photos" />
			<Wysiwyg component="article">
				<h1>What I see</h1>
				<p>
					My family takes photos. Some of the best times with my family while
					growing up was spent drinking tea and watching photos from vacations
					on the family projector. So now I take photos.
				</p>

				{data.allFile.edges.map(({ node }) => (
					<figure
						css={css`
							margin-bottom: ${Unit.HALF}px;

							@media screen and (max-height: 500px),
								screen and (max-width: 500px) {
								margin-bottom: ${Unit.QUART}px;
							}
						`}
					>
						<GatsbyImage
							image={node.childImageSharp.gatsbyImageData}
							alt=""
							css={css`
								max-width: calc(100vw - ${Unit.FULL}px);
								max-height: calc(100vh - ${Unit.FULL}px);

								@media screen and (max-height: 500px),
									screen and (max-width: 500px) {
									max-width: calc(100vw - ${Unit.HALF}px);
									max-height: calc(100vh - ${Unit.HALF}px);
								}
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
