/** @jsx jsx */
import { GatsbyImage } from 'gatsby-plugin-image';
import { FunctionComponent } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { jsx } from '@emotion/react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import * as style from './index.css';

const WelcomePage: FunctionComponent = () => {
	const {
		portrait,
		site,
	}: {
		portrait: Queries.File;
		site: Queries.Site;
	} = useStaticQuery(graphql`
		query {
			portrait: file(relativePath: { eq: "laust-johan-deleuran.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500)
				}
			}
			site {
				siteMetadata {
					links {
						title
						link
					}
				}
			}
		}
	`);

	return (
		<Layout hasNavigation={false}>
			<SEO title="Welcome" />
			<div css={style.container}>
				<figure css={style.figure}>
					<div css={style.figureInner}>
						<h2 css={style.figureHeader}>
							<span css={style.stripe}>Hi, stranger. </span>
						</h2>
						<p css={style.figureText}>
							<span css={style.stripe}>I’m Laust. </span>
							<span css={style.stripe}>I’m a creative technologist. </span>
							<span css={style.stripe}>I’m glad you came by.</span>
						</p>
					</div>
					{portrait?.childImageSharp?.gatsbyImageData ? (
						<GatsbyImage
							alt="Laust himself"
							image={portrait.childImageSharp.gatsbyImageData}
							css={style.figureImg}
						/>
					) : null}
				</figure>

				<nav css={style.homeNav}>
					{site?.siteMetadata?.links?.map((link) =>
						link?.link ? (
							<Link key={link.link} css={style.homeNavLink} to={link.link}>
								{link.title}
							</Link>
						) : null,
					)}
				</nav>
			</div>
		</Layout>
	);
};

export default WelcomePage;
