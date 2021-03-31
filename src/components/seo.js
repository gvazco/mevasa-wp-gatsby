/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import ogImage from "../images/remates.jpg";

function SEO({ description, lang, meta, title, image }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						image
						url
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;

	const defaultTitle = site.siteMetadata.title;

	const url = site.siteMetadata.url;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
			meta={[
				{
					name: `description`,
					content: { metaDescription },
				},
				{
					name: `p:domain_verify`,
					content: `7bbe704063d36f89527b13d25410d588`,
				},
				{
					property: `og:title`,
					content: { defaultTitle },
				},
				{
					property: `og:description`,
					content: { metaDescription },
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: `og:url`,
					content: { url },
				},
				{
					property: `og:image`,
					content: `https://techosymantenimientos.com.mx/${image || ogImage}`,
				},
				{
					property: `og:image:width`,
					content: `1200`,
				},
				{
					property: `og:image:height`,
					content: `630`,
				},
				{
					property: `og:image:type`,
					content: `image/jpeg`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata?.author || ``,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		/>
	);
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
	image: PropTypes.string,
};

export default SEO;
