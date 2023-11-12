import { css } from '@emotion/react';
import { rgba } from '../../css/rgba';
import { Color, Typography, fontLato, Unit, Scale } from '../../css/theme.css';

export const header = (bgColor: string = Color.WHITE, showNav: boolean) => css`
	backdrop-filter: blur(3px);
	/* background: ${bgColor}; */
	background: ${rgba(bgColor, 0.85)};
	display: flex;
	height: ${Unit.HALF}px;
	justify-content: space-between;
	left: 0;
	padding: 0 ${Unit.HALF}px;
	position: fixed;
	right: 0;
	top: 0;
	overflow: hidden;
	z-index: 1;
	transition: 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);

	@media screen and (max-height: 500px), screen and (max-width: 500px) {
		padding: 0 ${Unit.QUART}px;
	}

	@media screen and (max-width: 500px) {
		height: ${showNav ? '100vh' : `${Unit.HALF}px`};
		background: ${rgba(bgColor, showNav ? 0.95 : 0.85)};
	}
`;

export const headerTitleLink = (hasBgColor: boolean) => css`
	color: ${Color.BLACK};
	margin-top: ${Typography.LINE_HEIGHT * 1}px;
	margin-bottom: ${Typography.LINE_HEIGHT * 1}px;

	&:focus,
	&:hover {
		color: ${hasBgColor ? Color.BLACK : Color.ACTION_DARK};
	}
`;

export const headerType = css`
	${fontLato}
	font-size: 18px;
	line-height: ${Typography.LINE_HEIGHT * 2}px;
	margin: 0;
`;

export const main = (hasNavigation: boolean) => css`
	padding: ${Unit.FULL}px ${Unit.HALF}px ${Unit.HALF}px;

	@media screen and (max-height: 500px), screen and (max-width: 500px) {
		padding: ${hasNavigation ? Unit.HALF : Unit.QUART}px ${Unit.QUART}px
			${Unit.QUART}px;
	}
`;

export const nav = css`
	display: flex;
`;

export const navLink = (hasBgColor: boolean) => css`
	${headerType};
	color: ${hasBgColor ? Color.BLACK : Color.GREY_MEDIUM};
	display: block;
	margin-bottom: ${Typography.LINE_HEIGHT * 1}px;
	margin-left: ${Unit.QUART}px;
	margin-top: ${Typography.LINE_HEIGHT * 1}px;

	&:focus,
	&:hover {
		color: ${hasBgColor ? Color.BLACK : Color.ACTION_DARK};
	}

	@media screen and (max-width: 500px) {
		float: left;
		clear: both;
		margin-left: 0;
		font-size: ${Scale.MOBILE[1]}px;
	}
`;

export const navToggle = (showNav: boolean, hasBgColor: boolean) => css`
	display: none;

	@media screen and (max-width: 500px) {
		border: none;
		display: block;
		height: ${Unit.HALF}px;
		overflow: hidden;
		position: relative;
		text-indent: 110%;
		width: ${Unit.HALF}px;
	}

	& > figure {
		width: ${Unit.QUART}px;
		height: 2px;
		background-color: ${Color.BLACK};
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-1px);

		&,
		&::before,
		&::after {
			transition: 0.2s ease-in-out;
		}

		&::before,
		&::after {
			background-color: ${Color.BLACK};
			content: '';
			height: 100%;
			left: 0;
			position: absolute;
			top: -6px;
			width: 100%;
		}

		&::after {
			top: 6px;
		}
	}

	&:hover > figure,
	&:active > figure {
		background-color: ${hasBgColor ? Color.BLACK : Color.ACTION_DARK};

		&::before,
		&::after {
			background-color: ${hasBgColor ? Color.BLACK : Color.ACTION_DARK};
		}
	}

	${showNav
		? css`
				& > figure,
				&:hover > figure,
				&:active > figure {
					background-color: transparent;
				}

				> figure {
					&::before,
					&::after {
						top: 0;
						transform: rotate(45deg);
						transform-origin: center center;
					}
					&::after {
						transform: rotate(-45deg);
					}
				}
		  `
		: ''}
`;

export const navInner = css`
	display: flex;

	@media screen and (max-width: 500px) {
		bottom: 0;
		display: block;
		height: calc(100vh - ${Unit.HALF}px);
		left: 0;
		padding: 0 ${Unit.QUART}px;
		position: absolute;
		top: ${Unit.HALF}px;
		width: 100vw;
	}
`;
