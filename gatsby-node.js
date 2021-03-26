const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions;

	/* ------------------------------------------------------------------- */
	/*                  Extraemos los datos desde Grapql                   */
	/*---------------------------------------------------------------------*/

	const posts = await graphql(`
		query {
			allWpPost(sort: { fields: date, order: DESC }) {
				nodes {
					id
					title
					content
					excerpt
					Seo {
						seodescription
						seotitle
					}
					slug
					featuredImage {
						node {
							localFile {
								publicURL
							}
						}
					}
					date
				}
			}
		}
	`);

	const portafolios = await graphql(`
		query {
			allWpProyecto(sort: { fields: date, order: DESC }) {
				nodes {
					FieldsProyectos {
						place
					}
					Seo {
						seodescription
						seotitle
					}
					author {
						node {
							name
						}
					}
					content
					excerpt
					featuredImage {
						node {
							localFile {
								publicURL
							}
						}
					}
					slug
					title
					date
				}
			}
		}
	`);

	const productos = await graphql(`
		query {
			allWpProducto {
				nodes {
					FieldsProductos {
						precio
						link
						textbutton
						textlabel
					}
					Seo {
						seodescription
						seotitle
					}
					content
					excerpt
					date
					featuredImage {
						node {
							localFile {
								publicURL
							}
						}
					}
					slug
					title
				}
			}
		}
	`);

	// console.log(posts.data.allWpPost.nodes);
	// console.log(portafolios.data.allWpProyecto.nodes);
	// console.log(productos.data.allWpProducto.nodes);
	// console.log(categorias.data.allWpCategory.nodes);

	/* ------------------------------------------------------------------- */
	/*                      Crear paginación dinámica                      */
	/* ------------------------------------------------------------------- */

	paginate({
		createPage, // The Gatsby `createPage` function
		items: posts.data.allWpPost.nodes, // An array of objects
		itemsPerPage: 9, // How many items you want per page
		pathPrefix: "/blog", // Creates pages like `/blog`, `/blog/2`, etc
		component: path.resolve(`src/templates/blog.js`), // Just like `createPage()`
	});

	paginate({
		createPage, // The Gatsby `createPage` function
		items: portafolios.data.allWpProyecto.nodes, // An array of objects
		itemsPerPage: 9, // How many items you want per page
		pathPrefix: "/portafolio", // Creates pages like `/blog`, `/blog/2`, etc
		component: path.resolve(`src/templates/portafolio.js`), // Just like `createPage()`
	});

	paginate({
		createPage, // The Gatsby `createPage` function
		items: productos.data.allWpProducto.nodes, // An array of objects
		itemsPerPage: 9, // How many items you want per page
		pathPrefix: "/productos", // Creates pages like `/blog`, `/blog/2`, etc
		component: path.resolve(`src/templates/productos.js`), // Just like `createPage()`
	});

	/* ----------------------------------------------------------------- */
	/*                    Crear ruta de pagina interna                   */
	/* ----------------------------------------------------------------- */

	posts.data.allWpPost.nodes.forEach((post) => {
		createPage({
			path: `/blog/${post.slug}`,
			component: path.resolve(`src/templates/post/post.js`),
			context: {
				data: post,
			},
		});
	});

	portafolios.data.allWpProyecto.nodes.forEach((portafolio) => {
		createPage({
			path: `/portafolio/${portafolio.slug}`,
			component: path.resolve(`src/templates/proyecto/proyecto.js`),
			context: {
				data: portafolio,
			},
		});
	});

	productos.data.allWpProducto.nodes.forEach((producto) => {
		createPage({
			path: `/productos/${producto.slug}`,
			component: path.resolve(`src/templates/producto/producto.js`),
			context: {
				data: producto,
			},
		});
	});
};
