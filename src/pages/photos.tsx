/** @jsx jsx */
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { jsx, css } from '@emotion/react';

import Wysiwyg from '../components/wysiwyg';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Unit } from '../utils/style/style';
import { useEffect, useRef, useState } from 'react';

const PhotographyPage = () => {
	const [activeImage, setActiveImage] = useState<string>('');
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

	const allImages = data.allFile.edges;
	const IMAGES_PER_PAGE = 10;
	const [pages, setPages] = useState(1);
	const [loadMore, setLoadMore] = useState(false);
	const shownImages = allImages.slice(0, IMAGES_PER_PAGE * pages);

	const loadRef = useRef<HTMLDivElement>(null);
	const hasMore = shownImages.length < allImages.length;
	const handler = (entries) => {
		if (entries[0].intersectionRatie < 1) return;
		setLoadMore(true);
	};
	useEffect(() => {
		if (hasMore && loadMore) {
			setPages(pages + 1);
			setLoadMore(false);
		}
	}, [hasMore, loadMore]);
	useEffect(() => {
		var options = {
			root: null,
			threshold: 1.0,
		};
		const observer = new IntersectionObserver(handler, options);

		setTimeout(() => {
			if (loadRef.current) {
				observer.observe(loadRef.current);
			}
		}, 1000);

		return () => {
			observer.disconnect();
		};
	}, [loadRef.current]);

	const openImage = allImages.find(
		({ node }) => node.name === activeImage,
	)?.node;

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

				{shownImages.map(({ node }) => (
					<a
						key={node.name}
						onClick={() => setActiveImage(node.name)}
						css={css`
							cursor: pointer;
						`}
					>
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
					</a>
				))}

				<div ref={loadRef}>{hasMore && 'Loading...'}</div>

				{openImage && (
					<figure
						css={css`
							position: fixed;
							top: 0;
							right: 0;
							bottom: 0;
							left: 0;
							z-index: 2;

							background-color: #000;
							margin: 0;
							cursor: pointer;
						`}
						onClick={() => setActiveImage('')}
					>
						<GatsbyImage
							image={openImage.childImageSharp.gatsbyImageData}
							alt=""
							css={css`
								max-width: calc(100vw);
								max-height: calc(100vh);
							`}
							objectFit="contain"
							objectPosition="center center"
						/>
					</figure>
				)}
			</Wysiwyg>
		</Layout>
	);
};

export default PhotographyPage;