module.exports = {
  siteMetadata: {
    title: `Techos y Mantenimientos | Mevasa Comercializadora`,
    description: `Este es el blog Techos y Mantenimientos | Mevasa Comercializadora`,
    author: `@mevasacomercializadora`,
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
      resolve: "gatsby-plugin-manifest",
      options: {
        start_url: `/`,
        display: `minimal-ui`,
        icon: "src/images/IconoMevasa.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
