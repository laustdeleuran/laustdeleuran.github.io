/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Wysiwyg from '../components/wysiwyg';
import Video from '../components/video';
import { FunctionComponent } from 'react';

const tagStyle = css`
	display: inline;

	&::before {
		content: ', ';
	}

	&:first-child {
		&::before {
			content: '';
		}
	}
`;

const WorkPost: FunctionComponent<{
	data: { markdownRemark: Queries.MarkdownRemark };
}> = ({ data }) => {
	const { markdownRemark } = data; // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark;

	if (!frontmatter) return null;

	const { client, color, date, link, tags, title, videos } = frontmatter;

	const hasVideoArray = Array.isArray(videos);
	const firstVideo = hasVideoArray ? videos[0] : null;
	const lastVideos = hasVideoArray ? videos.slice(1) : null;

	return (
		<Layout bgColor={color || undefined} hasNavigation={true}>
			<SEO title={title || 'Unknown title'} />

			<aside>
				<time css={css``}>{date}</time>
				{(tags && tags.length) || client ? (
					<ul
						css={css`
							display: inline;

							&::before {
								content: ' · ';
								display: inline;
							}
						`}
					>
						<li css={tagStyle}>{client}</li>
						{tags?.map((tag) => (
							<li css={tagStyle} key="tag">
								{tag}
							</li>
						))}
					</ul>
				) : null}
				{link ? (
					<span
						css={css`
							&::before {
								content: ' · ';
								display: inline;
							}
						`}
					>
						<a href={link} rel="nofollow noreferrer" target="_blank">
							Link to project
						</a>
					</span>
				) : null}
			</aside>

			<h1>{title}</h1>

			{firstVideo ? <Video src={firstVideo} /> : null}
			{html ? (
				<Wysiwyg>
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</Wysiwyg>
			) : null}
			{lastVideos
				? lastVideos.map((video) => <Video key={video} src={video} />)
				: null}
		</Layout>
	);
};

export const pageQuery = graphql`
	query ($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				client
				color
				date(formatString: "MMMM, YYYY")
				link
				tags
				title
				videos
			}
		}
	}
`;

export default WorkPost;
