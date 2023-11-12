/** @jsx jsx */
import { FunctionComponent } from 'react';
import humanizeDuration from 'humanize-duration';
import { jsx, css } from '@emotion/react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Wysiwyg from '../components/wysiwyg';
import { Color, Typography } from '../css/theme.css';
import { Contact } from '../components/contact';

const jobs = [
	{
		company: 'Boulder Care',
		desc: "Boulder Care's mission is to improve the lives of people with substance use disorders. I've felt extremely lucky to contribute to that mission alongside a highly motivated and talented team. I lead a team of focused engineers in a creative and highly adaptive environment where we focus on delivering value as quickly and efficiently as we can.",
		from: '2021-08-01',
		title: 'Director of Engineering',
	},
	{
		company: 'Wisp',
		desc: 'In my time as Lead Frontend Engineer at Wisp, I helped completely rebuild the frontend of their e-commerce website using React & Gatsby. By relentlessly focusing on performance metrics, we were able to consistently score in the 90th percentile on Google PageSpeed Insights.',
		from: '2021-03-01',
		title: 'Lead Frontend Engineer',
	},
	{
		company: 'LJD Creative',
		desc: 'Freelancing for a variety of agencies and companies creating interactive interfaces primarily using React and Canvas.',
		from: '2020-08-01',
		title: 'Freelance Creative Technologist',
	},
	{
		company: 'Amazon Web Services (AWS)',
		desc: 'Built interfaces and front-end architecture for AWS Training & Certification. Lead front-end standardizations efforts and helped create new front-end team structure.',
		from: '2019-07-14',
		link: 'https://www.aws.training',
		title: 'Web Development Engineer (L5)',
		to: '2020-07-31',
	},
	{
		company: 'Koalition',
		desc: 'Expanded and lead US development capabilities, including hiring and management. Pitched on new work opportunities and scoped & resource allocated won projects. Developed & deployed solutions for a wide range of clients, including UN Peacebuilding Fund, Vice, PhospheneFX and Part2, several of which received awards for our work.',
		from: '2015-11-01',
		link: 'https://www.koalition.com',
		title: 'Technical Lead',
		to: '2019-07-01',
	},
	{
		company: 'LJD Creative',
		desc: 'I freelanced for a variety of agencies doing front-end development and UX design on campaign and corporate sites. Also spend time on personal projects and photography.',
		from: '2015-11-01',
		title: 'Freelance UX designer & front-end developer',
		to: '2019-06-31',
	},
	{
		company: '1508',
		desc: 'I did interaction design and prototyping using various methods from simple sketching to fully fledged front-end prototypes. Daily work involved new UX concepts, translating strategy to UX, agile iterations and front-end prototyping.',
		from: '2013-11-01',
		link: 'https://www.1508.dk',
		title: 'User Experience Designer / Prototype Developer',
		to: '2014-03-31',
	},
	{
		company: 'Vertic',
		from: '2010-10-01',
		link: 'https://www.vertic.com',
		title: 'Front-end Lead',
		to: '2013-10-31',
		desc: 'Transitioned the company from Flash to web standards-based development and built the front-end departments of both their Copenhagen and New York offices. Key clients include MTV, Siemens, Microsoft, Vestas, Microsoft and Takeda.',
	},
	{
		company: 'Columbus IT',
		desc: 'At Columbus IT, I helped craft cross-media B2B marketing campaigns. Most of the campaigns were focused around our consultancy services or Microsoft’s ERP and CRM products (the Dynamics software family). I created both the technical part of our campaigns and the visuals, both for web and print.',
		from: '2008-08-01',
		link: 'https://www.columbusglobal.com',
		title: 'Marketing- & Multimedia Specialist',
		to: '2010-9-31',
	},
];

const ResumePage: FunctionComponent = () => {
	return (
		<Layout>
			<SEO title="Resume" />
			<Wysiwyg component="article">
				<h1>Resume</h1>
				<h2>What I do</h2>
				<p>
					I have worked in digital media professionally for over thirteen years,
					needless to say, I love working with and creating digital products. I
					have created award-winning solutions for big and small companies and
					organisations all over the world, including Nars, Vestas and Vice.
				</p>
				<p>
					I am a natural leader and am passionate about building teams and
					enabling them to deliver their best work. I build strong relationships
					with co-workers and help them focus on working together and achieving
					the best results.
				</p>
				<p>
					I excel when working with clients directly as well as internally. I am
					experienced in develping proposals, project pitches, UX reports and
					technical specifications. I know how to solve problems creatively and
					communicate plans and solutions to clients and co-workers.
				</p>
				<p>
					<strong>Specialties</strong>: Modern front-end development, UX and
					interaction design.{' '}
				</p>
				<h2>Where I've worked</h2>
				{jobs.map(({ company, desc, from, link, title, to }) => (
					<section
						css={css`
							border-bottom: 1px solid ${Color.GREY_ULTRA_LIGHT};
							overflow: hidden;
							padding-top: ${Typography.LINE_HEIGHT * 2}px;

							&:last-child {
								border-bottom: none;
							}
						`}
					>
						<h4>{title}</h4>
						<aside
							css={css`
								margin-top: -${Typography.LINE_HEIGHT * 2}px;
								margin-bottom: ${Typography.LINE_HEIGHT * 2}px;
							`}
						>
							{link ? (
								<a href={link} rel="nofollow noreferrer" target="_blank">
									{company}
								</a>
							) : (
								company
							)}{' '}
							·{' '}
							{humanizeDuration(
								(to ? new Date(to).getTime() : Date.now()) -
									new Date(from).getTime(),
								{ units: ['y', 'mo'], round: true },
							)}{' '}
						</aside>
						<p>{desc}</p>
					</section>
				))}

				<Contact />
			</Wysiwyg>
		</Layout>
	);
};

export default ResumePage;
