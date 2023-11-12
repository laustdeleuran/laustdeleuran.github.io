/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link } from 'gatsby';
import { Color, heading3, Scale, Typography } from '../../css/theme.css';
import { Fragment, FunctionComponent } from 'react';

export const mapPostsToList = (edges: Queries.MarkdownRemarkEdge[]) =>
	edges.map(({ node }) => ({
		id: node.id,
		title: node.frontmatter?.title || 'Unknown title',
		to: node.frontmatter?.slug || 'Unknown slug',
	}));

const List: FunctionComponent<{
	items: { id: string; to: string; title: string }[];
	title: string;
}> = ({ items, title }) => (
	<Fragment>
		<h1>{title}</h1>
		<ol>
			{items.map(({ id, title, to }) => (
				<li
					css={css`
						position: relative;
						border-bottom: 1px solid ${Color.GREY_ULTRA_LIGHT};
						margin: 0;
						padding: 0;

						&:last-child {
							border-bottom: none;
						}
					`}
					key={id}
				>
					<Link
						css={css`
							${heading3};
							border: none;
							color: ${Color.GREY_MEDIUM};
							display: block;
							font-size: ${Scale.TABLET[2]}px;
							padding: ${Typography.LINE_HEIGHT * 2}px 0;

							&:active,
							&:focus,
							&:hover {
								color: ${Color.ACTION_DARK};
							}
						`}
						to={to}
					>
						{title}
					</Link>
				</li>
			))}
		</ol>
	</Fragment>
);

export default List;
