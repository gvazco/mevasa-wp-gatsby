module.exports = {
	siteMetadata: {
		title: `Techos y Mantenimientos | Mevasa Comercializadora`,
		titleTemplate: `Techos y Mantenimientos`,
		description: `Venta e Instalación de Lámina, somos especialistas en techos y mantenimientos industriales y residenciales`,
		author: `@mevasacomercializadora`,
		image: "./src/images/remates.jpg",
		url: `https://techosymantenimientos.com`,
		siteUrl: `https://techosymantenimientos.com`,
	},
	plugins: [
		{
			resolve: "gatsby-source-wordpress",
			options: {
				url: "https://mevasa-gatsby.techosymantenimientos.com.mx/graphql",
			},
		},
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-plugin-disqus`,
			options: {
				shortname: `mevasa`,
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				start_url: `/`,
				display: `minimal-ui`,
				icon: "src/images/IconoMevasa.png",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		`gatsby-plugin-sitemap`,
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/images/`,
			},
			__key: "images",
		},
	],
};
