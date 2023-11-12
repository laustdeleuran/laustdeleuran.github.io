import { rgba } from '../../css/rgba';
import { css } from '@emotion/react';

/**
 * @overview
 * Style settings and helpers
 */

/**
 * @section
 * Settings
 */
const UNIT = 100;

export enum Unit {
	FULL = UNIT,
	HALF = UNIT / 2,
	QUART = UNIT / 4,
}

export enum Typography {
	FONT_SIZE = 18,
	LINE_HEIGHT = UNIT / 8,
}

export enum Color {
	ACTION = '#56f29c',
	ACTION_DARK = '#00cd91',
	BLACK = '#000',
	GREY_DARK = '#304040',
	GREY_LIGHT = '#abb',
	GREY_MEDIUM = '#788',
	GREY_ULTRA_LIGHT = '#dee',
	WHITE = '#fff',
}

export enum FontStack {
	SANS_SERIF = 'Lato, Helvetica, Helvetica Neue, Arial, sans-serif',
	SERIF = 'Playfair Display, Georgia, Times, serif',
	MONOSPACE = 'Consolas, monaco, monospace',
}

export const Scale = {
	DESKTOP: [63, 45, 27],
	TABLET: [45, 36, 24],
	MOBILE: [32, 24, 18],
};

/**
 * @section
 * Helpers
 */
export const fontPlayfair = css`
	font-family: ${FontStack.SERIF};
	font-weight: 700;
`;

export const fontLato = css`
	font-family: ${FontStack.SANS_SERIF};
	font-weight: 300;
`;

export const displayText = css`
	${fontPlayfair}
	margin-bottom: ${Typography.LINE_HEIGHT * 2}px;
	margin-top: ${Typography.LINE_HEIGHT * 4}px;
`;

export const heading = css`
	${displayText}
	font-size: ${Typography.FONT_SIZE};
	line-height: ${Typography.LINE_HEIGHT * 2}px;

	&:first-of-type {
		margin-top: 0;
	}
`;

export const heading1 = css`
	font-size: ${Scale.DESKTOP[0]}px;
	line-height: ${Typography.LINE_HEIGHT * 6}px;

	@media screen and (max-width: 800px) {
		font-size: ${Scale.TABLET[0]}px;
		line-height: ${Typography.LINE_HEIGHT * 4}px;
	}

	@media screen and (max-width: 400px) {
		font-size: ${Scale.MOBILE[0]}px;
	}
`;

export const heading2 = css`
	font-size: ${Scale.DESKTOP[1]}px;
	line-height: ${Typography.LINE_HEIGHT * 4}px;

	@media screen and (max-width: 800px) {
		font-size: ${Scale.TABLET[1]}px;
	}

	@media screen and (max-width: 400px) {
		font-size: ${Scale.MOBILE[1]}px;
		line-height: ${Typography.LINE_HEIGHT * 3}px;
	}
`;

export const heading3 = css`
	font-size: ${Scale.DESKTOP[2]}px;
	line-height: ${Typography.LINE_HEIGHT * 3}px;

	@media screen and (max-width: 800px) {
		font-size: ${Scale.TABLET[2]}px;
	}

	@media screen and (max-width: 400px) {
		font-size: ${Scale.MOBILE[2]}px;
		line-height: ${Typography.LINE_HEIGHT * 2}px;
	}
`;

/**
 * @section
 * Base styles
 */
export const baseStyles = (hasBgColor) => css`
	html,
	body {
		${fontLato}
		background: ${Color.WHITE};
		color: ${Color.BLACK};
		font-size: ${Typography.FONT_SIZE}px;
		line-height: ${Typography.LINE_HEIGHT * 2}px;
		min-width: 300px;
	}

	a {
		border-bottom: 0.056em solid ${hasBgColor ? Color.BLACK : 'transparent'};
		color: ${hasBgColor ? Color.BLACK : Color.ACTION_DARK};
		text-decoration: none;
		transition: 0.2s ease;
		vertical-align: baseline;
		outline-color: ${hasBgColor ? Color.BLACK : Color.ACTION_DARK};

		&:hover,
		&:active,
		&:focus {
			border-bottom-color: ${hasBgColor ? 'transparent' : Color.ACTION_DARK};
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		${heading}
	}

	h1 {
		${heading1}
	}

	h2 {
		${heading2}
	}

	h3 {
		${heading3}
	}

	p,
	ol,
	ul,
	li,
	blockquote,
	figure,
	figcaption {
		display: block;
		margin: 0;
		padding: 0;
		margin-bottom: ${Typography.LINE_HEIGHT * 2}px;
	}

	pre,
	code {
		font-family: ${FontStack.MONOSPACE};
		font-size: 0.8em;
		line-height: ${Typography.LINE_HEIGHT * 2}px;
	}

	table {
		margin-bottom: ${Typography.LINE_HEIGHT * 2}px;
	}

	table,
	tr,
	td,
	th {
		text-align: left;
		vertical-align: top;
	}

	th {
		font-weight: bold;
	}

	td,
	th {
		padding: 0 ${Typography.LINE_HEIGHT / 2}px 0 0;
	}
`;

/**
 * @section
 * Homepage
 */
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
