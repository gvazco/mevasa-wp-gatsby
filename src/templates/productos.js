import React from "react";
import { graphql } from "gatsby";
import Pagination from "../components/Pagination";
import BlogLayout from "../layouts/BlogLayout";
import ProductList from "../components/ProductList";
import Seo from "../components/seo";
import imageProductos from "../images/remates.jpg";

export default function Productos(props) {
	const { data, pageContext } = props;
	const productos = data.allWpProducto.nodes;

	return (
		<BlogLayout>
			<Seo
				title="Productos de Mevasa Comercializadora"
				description="Catálogo de Productos y Accesorios"
				image={imageProductos}
			/>
			<ProductList productos={productos} />
			<Pagination pageContext={pageContext} />
		</BlogLayout>
	);
}

export const query = graphql`
	query($skip: Int!, $limit: Int!) {
		allWpProducto(
			skip: $skip
			limit: $limit
			sort: { fields: date, order: DESC }
		) {
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
`;
