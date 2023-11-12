/** @jsx jsx */
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { css, jsx } from '@emotion/react';

import Wysiwyg from '../components/wysiwyg';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Contact } from '../components/contact';

const AboutPage = () => {
	const data: {
		bep: Queries.File;
		erc: Queries.File;
		hec: Queries.File;
		jsc: Queries.File;
		mni: Queries.File;
		mts: Queries.File;
	} = useStaticQuery(graphql`
		query {
			bep: file(relativePath: { eq: "content/quotes-bep.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 200)
				}
			}

			erc: file(relativePath: { eq: "content/quotes-erc.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 200)
				}
			}

			hec: file(relativePath: { eq: "content/quotes-hec.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 200)
				}
			}

			jsc: file(relativePath: { eq: "content/quotes-jsc.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 200)
				}
			}

			mni: file(relativePath: { eq: "content/quotes-mni.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 200)
				}
			}

			mts: file(relativePath: { eq: "content/quotes-mts.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 200)
				}
			}
		}
	`);

	return (
		<Layout>
			<SEO title="About" />
			<Wysiwyg component="article">
				<h1>
					Wait! <br />
					What is this? <br />
					Who are you&nbsp;even?
				</h1>
				<p>
					Relax. Don't panic. It's just a website. It's actually{' '}
					<em>my website</em>. I’m Laust and I’m a creative technologist. So,
					just sit back and enjoy it. As much as you can enjoy a personal
					website, anyway.
				</p>
				<h2>Your website? You build these&nbsp;things?</h2>
				<p>
					Yes. I actually build websites and interfaces for a living. I'm based
					in <del>New York</del> <del>Copenhagen</del> <del>Reno</del> Portland
					and I like to make stuff, especially when it's both effective and
					pretty. I've built websites since I was a mere 12 year old (back in
					1997, when{' '}
					<code
						css={css`
							animation: typeBlink 0.5s steps(1) infinite alternate;

							@keyframes typeBlink {
								0% {
									opacity: 0;
								}
								50% {
									opacity: 1;
								}
								100% {
									opacity: 0;
								}
							}
						`}
					>
						&lt;blink&gt;
					</code>{' '}
					was so cool).
				</p>
				<p>
					Now, I spend most of my time working for{' '}
					<del>
						<a href="http://www.vertic.com" target="_blank">
							Vertic
						</a>
					</del>{' '}
					<del>
						<a href="http://www.1508.dk" target="_blank">
							1508
						</a>
					</del>{' '}
					<del>
						<a href="http://www.koalition.com" target="_blank">
							Koalition
						</a>
					</del>{' '}
					<del>
						<a href="http://www.aws.training" target="_blank">
							AWS
						</a>
					</del>{' '}
					<del>
						<a href="https://hellowisp.com" target="_blank">
							Wisp
						</a>
					</del>{' '}
					<del>
						<a href="https://hellowisp.com" target="_blank">
							Wisp
						</a>
					</del>{' '}
					<a href="https://boulder.care" target="_blank">
						Boulder Care
					</a>{' '}
					where I manage a team of awesome and super talented software engineers
					helping further Boulder's mission to improve the lives of people with
					substance use disorders. When I'm not working, I spend my time coding
					half-finished generative graphics experiments, climbing, biking and
					reading. Even though it's thoroughly nerdy I'm passionate about user
					interactions and code.
				</p>
				<p>
					You can check out some of my nerdy stuff on{' '}
					<a href="http://github.com/laustdeleuran" target="_blank">
						GitHub
					</a>
					,{' '}
					<a href="https://www.shadertoy.com/user/endymion" target="_blank">
						Shadertoy
					</a>{' '}
					or{' '}
					<a href="http://codepen.io/laustdeleuran" target="_blank">
						Codepen
					</a>
					. Feel free to shoot me a mail at{' '}
					<a href="mailto:hello@ljd.dk">hello@ljd.dk</a>, if you feel like it.
				</p>
				<h2>People say nice things about&nbsp;me</h2>
				<ul className="quotes">
					<li className="vcard">
						<blockquote>
							{data.mni?.childImageSharp?.gatsbyImageData ? (
								<GatsbyImage
									image={data.mni.childImageSharp.gatsbyImageData}
									alt="Photo of Michael Nilsson"
									className="photo"
								/>
							) : null}
							<p>
								What I truly enjoy about my line of work, is that I once in a
								while come across people who make me feel I've plenty more to
								learn.
							</p>
							<cite>
								<a
									href="http://dk.linkedin.com/in/mnivertic/"
									target="_blank"
									className="fn n url"
								>
									Michael Nilsson
								</a>
							</cite>
						</blockquote>
					</li>
					<li className="vcard">
						<blockquote>
							{data.erc?.childImageSharp?.gatsbyImageData ? (
								<GatsbyImage
									image={data.erc.childImageSharp.gatsbyImageData}
									alt="Photo of Emil Rømer Christensen"
									className="photo"
								/>
							) : null}
							<p>
								Laust is one of the best, if not the best, front-end developers
								I've ever worked with.{' '}
							</p>
							<cite>
								<a
									href="http://dk.linkedin.com/in/emilchristensen/"
									target="_blank"
									className="fn n url"
								>
									Emil Rømer Christensen
								</a>
							</cite>
						</blockquote>
					</li>
					<li className="vcard">
						<blockquote>
							{data.hec?.childImageSharp?.gatsbyImageData ? (
								<GatsbyImage
									image={data.hec.childImageSharp.gatsbyImageData}
									alt="Photo of Harald Eckmüller"
									className="photo"
								/>
							) : null}
							<p>
								He has a passion for his craft that is rarely seen in veterans
								of the industry and spending any amount of time with him will
								challenge your notions about web design best practice &ndash;
								for the better.{' '}
							</p>
							<cite>
								<a
									href="http://www.linkedin.com/in/heckmueller/"
									target="_blank"
									className="fn n url"
								>
									Harald Eckmüller
								</a>
							</cite>
						</blockquote>
					</li>
					<li className="vcard">
						<blockquote>
							{data.jsc?.childImageSharp?.gatsbyImageData ? (
								<GatsbyImage
									image={data.jsc.childImageSharp.gatsbyImageData}
									alt="Photo of Janina Schill"
									className="photo"
								/>
							) : null}
							<p>
								Laust has been a great mentor, always up for helping anyone in
								need and sharing his research on new technologies and approaches
								to website development.
							</p>
							<cite>
								<a
									href="http://www.linkedin.com/in/janinaschill/"
									target="_blank"
									className="fn n url"
								>
									Janina Schill
								</a>
							</cite>
						</blockquote>
					</li>
					<li className="vcard">
						<blockquote>
							{data.mts?.childImageSharp?.gatsbyImageData ? (
								<GatsbyImage
									image={data.mts.childImageSharp.gatsbyImageData}
									alt="Photo of Morten Steinbach"
									className="photo"
								/>
							) : null}
							<p>
								Definitely one of the most dedicated people I have ever worked
								with.
							</p>
							<cite>
								<a
									href="http://dk.linkedin.com/in/mortentsteinbach"
									target="_blank"
									className="fn n url"
								>
									Morten Steinbach
								</a>
							</cite>
						</blockquote>
					</li>
					<li className="vcard">
						<blockquote>
							{data.bep?.childImageSharp?.gatsbyImageData ? (
								<GatsbyImage
									image={data.bep.childImageSharp.gatsbyImageData}
									alt="Photo of Bernt Elkjær"
									className="photo"
								/>
							) : null}
							<p>
								Laust has the unique combination of technical skills and a
								business-oriented mindset.
							</p>
							<cite>
								<a
									href="http://dk.linkedin.com/in/berntelkjaer"
									target="_blank"
									className="fn n url"
								>
									Bernt Elkjær
								</a>
							</cite>
						</blockquote>
					</li>
				</ul>
				<Contact />
			</Wysiwyg>
		</Layout>
	);
};

export default AboutPage;
