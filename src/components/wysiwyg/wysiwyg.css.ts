import { css } from '@emotion/react';
import { Typography, Unit } from '../../css/theme.css';

export const wyswiyg = css`
	p {
		max-width: 30em;
	}

	strong,
	b {
		font-weight: 700;
	}

	em,
	i {
		font-style: italic;
	}

	.quotes {
		&,
		li,
		blockquote {
			list-style: none;
			margin: 0;
			padding: 0;
		}

		li {
			display: inline-block;
			max-width: 400px;
			margin-bottom: ${Typography.LINE_HEIGHT}px;
			margin-right: ${Unit.FULL}px;

			vertical-align: top;
		}

		blockquote {
			overflow: hidden;
		}

		p,
		cite {
			margin: 0 0 0 ${Unit.FULL}px;
		}

		p:before {
			content: '»';
		}

		p:after {
			content: '«';
		}

		cite {
			display: block;

			font-style: normal;
			font-weight: 700;
		}

		.photo {
			float: left;
			margin: 0 ${Typography.LINE_HEIGHT} 0 0;
			width: ${100 - Typography.LINE_HEIGHT}px;
			height: auto;

			border-radius: 100%;
		}

		@media screen and (max-width: 500px) {
			li {
				display: block;
				max-width: none;
				margin-right: 0;
			}

			img {
				display: none;
			}

			p,
			cite {
				margin: 0;
			}
		}
	}
`;
