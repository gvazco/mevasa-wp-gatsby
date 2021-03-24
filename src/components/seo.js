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
import imageDefault from "../images/remates.jpg";

function SEO({ description, lang, meta, title, image }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						imageDefault: image
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
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: `og:image`,
					content: `${url}${image || imageDefault}`,
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
