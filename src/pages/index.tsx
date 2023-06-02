/** @jsx jsx */
import { jsx } from "@emotion/react";

import { GatsbyImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import * as style from "../utils/style/style";

const WelcomePage = () => {
  const { portrait, site } = useStaticQuery(graphql`
    query {
      portrait: file(relativePath: { eq: "laust-johan-deleuran.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 500)
        }
      }
      site {
        siteMetadata {
          links {
            title
            link
          }
        }
      }
    }
  `);

  return (
    <Layout hasNavigation={false}>
      <SEO title="Welcome" />
      <div css={style.container}>
        <figure css={style.figure}>
          <div css={style.figureInner}>
            <h2 css={style.figureHeader}>
              <span css={style.stripe}>Hi, stranger. </span>
            </h2>
            <p css={style.figureText}>
              <span css={style.stripe}>I’m Laust. </span>
              <span css={style.stripe}>I’m a creative technologist. </span>
              <span css={style.stripe}>I’m glad you came by.</span>
            </p>
          </div>
          <GatsbyImage
            alt="Laust himself"
            image={portrait.childImageSharp.gatsbyImageData}
            css={style.figureImg}
          />
        </figure>

        <nav css={style.homeNav}>
          {site.siteMetadata.links.map(({ title, link }) => (
            <Link key={link} css={style.homeNavLink} to={link}>
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </Layout>
  );
};

export default WelcomePage;
