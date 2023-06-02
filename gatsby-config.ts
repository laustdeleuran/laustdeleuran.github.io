import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		siteUrl: 'http://ljd.dk',
		title:
			'LJD · Building interactive interfaces, graphics and animations · Freelance contractor · Laust J Deleuran',
		shortTitle: 'LJD',
		description:
			'I’m Laust. I’m a creative technologist, UX designer &amp; front-end developer. I like creating stuff.',
		author: '@laustdeleuran',
		links: [
			{
				title: 'About me',
				link: '/about-laust-johan-deleuran',
			},
			{
				title: 'My work',
				link: '/my-work',
			},
			{
				title: 'Get in touch',
				link: '/about-laust-johan-deleuran#get-in-touch',
			},
		],
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-emotion',
		'gatsby-plugin-image',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-mdx',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown-pages`,
				path: `./src/markdown-pages`,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Laust J Deleuran',
				short_name: 'LJD',
				start_url: '/',
				background_color: '#FFFFFF',
				theme_color: '#56f29c',
				display: 'minimal-ui',
				icon: 'src/images/laust-johan-deleuran-square.jpg', // This path is relative to the root of the site.
			},
		},
	],
};

export default config;
