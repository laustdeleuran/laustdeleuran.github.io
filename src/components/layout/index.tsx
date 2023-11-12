/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** @jsx jsx */
import {
	Fragment,
	FunctionComponent,
	PropsWithChildren,
	useState,
} from 'react';
import { Global, css, jsx } from '@emotion/react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import { baseStyles, Color } from '../../css/theme.css';
import * as style from './layout.css';
import { resetStyles } from '../../css/reset.css';

const Layout: FunctionComponent<
	PropsWithChildren<{
		bgColor?: string;
		hasNavigation?: boolean;
	}>
> = ({ bgColor, children, hasNavigation = true }) => {
	const [showNav, setShowNav] = useState(false);
	const hasBgColor = !!bgColor;
	const { site }: { site: Queries.Site } = useStaticQuery(graphql`
		query {
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
		<Fragment>
			<Global
				styles={css`
					@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,700;1,300;1,700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

					${resetStyles}

					*, *::after, *::before {
						box-sizing: border-box;
					}

					${baseStyles(hasBgColor)}

					${hasBgColor ? `html, body { background-color: ${bgColor};` : ''}
				`}
			/>
			<header css={style.header(bgColor || Color.WHITE, showNav)}>
				<Link css={style.headerTitleLink(hasBgColor)} to="/">
					<h1 css={style.headerType}>LJD</h1>
				</Link>
				{hasNavigation ? (
					<nav css={style.nav}>
						<a
							href="#navigation"
							title={`${showNav ? 'Hide' : 'Show'} navigation`}
							css={style.navToggle(showNav, hasBgColor)}
							onClick={(event) => {
								event.preventDefault();
								setShowNav(!showNav);
							}}
						>
							<figure />
							Menu
						</a>
						<div css={style.navInner}>
							{site.siteMetadata?.links?.map((link) =>
								link?.link ? (
									<Link
										css={style.navLink(hasBgColor)}
										key={link.link}
										to={link.link}
									>
										{link?.title || 'Unknown link'}
									</Link>
								) : null,
							)}
						</div>
					</nav>
				) : null}
			</header>
			<main css={style.main(hasNavigation)}>{children}</main>
		</Fragment>
	);
};

export default Layout;
