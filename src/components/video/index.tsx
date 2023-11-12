/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** @jsx jsx */
import ReactPlayer from 'react-player';
import { Fragment, FunctionComponent, PropsWithChildren } from 'react';
import { css, jsx } from '@emotion/react';
import { Color, Unit } from '../../utils/style/style';
import { rgba } from '../../utils/rgba';

const Video: FunctionComponent<
	PropsWithChildren<{ component?: string; src: string }>
> = ({ children, component = 'div', src, ...rest }) =>
	jsx(component, {
		...rest,
		css: css`
			background: ${Color.BLACK};
			box-shadow: -${Unit.HALF}px -${Unit.HALF}px 0
				${rgba(Color.GREY_DARK, 0.5)};
			height: calc((100vw - ${Unit.HALF * 3}px) * 9 / 16);
			margin-bottom: ${Unit.HALF}px;
			margin-left: ${Unit.HALF}px;
			margin-top: ${Unit.HALF * 2}px;
			overflow: hidden;
			width: calc(100vw - ${Unit.HALF * 3}px);

			@media screen and (max-height: 500px), screen and (max-width: 500px) {
				box-shadow: -${Unit.QUART}px -${Unit.QUART}px 0
					${rgba(Color.GREY_DARK, 0.5)};
				margin-bottom: ${Unit.QUART}px;
				margin-left: ${Unit.QUART}px;
				margin-top: ${Unit.QUART * 2}px;
				height: calc((100vw - ${Unit.QUART * 3}px) * 9 / 16);
				width: calc(100vw - ${Unit.QUART * 3}px);
			}
		`,
		children: (
			<Fragment>
				<ReactPlayer
					css={css`
						display: block;
						width: calc(100vw - ${Unit.HALF * 3}px + 2px) !important;
						height: calc(
							(100vw - ${Unit.HALF * 3}px + 2px) * 9 / 16
						) !important;
						margin-left: -1px;

						@media screen and (max-height: 500px),
							screen and (max-width: 500px) {
							width: calc(100vw - ${Unit.QUART * 3}px + 2px) !important;
							height: calc(
								(100vw - ${Unit.QUART * 3}px + 2px) * 9 / 16
							) !important;
						}

						iframe,
						video {
							display: block;
						}
					`}
					config={{
						vimeo: {
							playerOptions: {
								autoplay: true,
								badge: false,
								byline: false,
								controls: false,
								loop: true,
								playsinline: true,
								muted: true,
								portrait: false,
								title: false,
								width: false,
							},
						},
					}}
					controls={false}
					height="auto"
					loop
					muted
					playing
					playsinline
					url={src}
					width="100%"
				/>
				{children}
			</Fragment>
		),
	});

export default Video;
