import { css } from '@emotion/react';
import { Color, Scale, Typography, Unit, displayText } from '../css/theme.css';

const HOME_PICTURE_RATIO = 0.8532423208;

export const container = css`
	align-items: center;
	display: flex;
	min-height: calc(100vh - ${Unit.FULL}px);
	justify-content: space-evenly;
	margin-bottom: 0;

	@media screen and (max-width: 700px) {
		flex-direction: column;
	}

	@media screen and (max-height: 500px), screen and (max-width: 500px) {
		min-height: calc(100vh - ${Unit.HALF}px);
	}
`;

export const figure = css`
	position: relative;
	width: ${HOME_PICTURE_RATIO * 100}%;
	max-width: 500px;

	@media screen and (max-width: 800px) {
		width: 60%;
	}

	@media screen and (max-width: 700px) {
		margin-top: ${Typography.LINE_HEIGHT * 2}px;
		width: ${HOME_PICTURE_RATIO * 100}%;
	}

	@media screen and (max-width: 500px) {
		width: 67%;
	}
`;

export const stripe = css`
	background: ${Color.WHITE};
	clear: both;
	padding: ${Typography.LINE_HEIGHT / 4}px 0.1em;
	margin: ${Typography.LINE_HEIGHT / 2}px 0 0;
	display: block;
	float: right;
	white-space: nowrap;

	@media screen and (max-width: 500px) {
		display: inline;
		float: none;
		margin: 0;
		padding: 0;
		white-space: normal;
	}
`;

export const figureInner = css`
	position: absolute;
	z-index: 1;
	right: -${Unit.QUART}px;
	bottom: -${Unit.QUART}px;

	@media screen and (max-width: 500px) {
		position: static;
		margin-bottom: ${Typography.LINE_HEIGHT * 4}px;
	}
`;

export const type = css`
	${displayText}
	font-size: 45px;
	line-height: ${Typography.LINE_HEIGHT * 4}px;
	overflow: hidden;

	@media screen and (max-width: 800px) {
		font-size: 36px;
	}

	@media screen and (max-width: 500px) {
		font-size: 24px;
		line-height: ${Typography.LINE_HEIGHT * 3}px;
	}
`;

export const figureHeader = css`
	${type}
	margin-bottom: ${Typography.LINE_HEIGHT * 4}px;

	@media screen and (max-width: 800px) {
		margin-bottom: 0;
	}
`;

export const figureText = css`
	${type}
	margin-top: 0;
	margin-bottom: 0;

	@media screen and (max-width: 500px) {
		margin-bottom: ${Typography.LINE_HEIGHT}px;
	}
`;

export const figureImg = css`
	box-shadow: -${Unit.HALF}px -${Unit.HALF}px 0 ${Color.ACTION};

	@media screen and (max-width: 500px) {
		box-shadow: -${Unit.QUART}px -${Unit.QUART}px 0 ${Color.ACTION};
	}
`;

export const homeNav = css`
	overflow: hidden;

	@media screen and (max-width: 700px) {
		margin-top: ${Typography.LINE_HEIGHT * 2}px;
	}
`;

export const homeNavLink = css`
	clear: both;
	color: ${Color.BLACK};
	display: block;
	float: left;
	font-size: ${Scale.DESKTOP[2]}px;
	margin-bottom: ${Typography.LINE_HEIGHT}px;

	&:hover,
	&:focus {
		color: ${Color.ACTION_DARK};
	}

	&:focus {
		outline-color: ${Color.ACTION_DARK};
	}

	@media screen and (max-width: 1000px) {
		font-size: ${Scale.TABLET[2]}px;
	}

	@media screen and (max-width: 700px) {
		font-size: ${Scale.MOBILE[1]}px;
	}

	@media screen and (max-width: 500px) {
		font-size: ${Scale.MOBILE[2]}px;
	}
`;
