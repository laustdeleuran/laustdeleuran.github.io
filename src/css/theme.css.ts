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
export const baseStyles = (hasBgColor?: boolean) => css`
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
