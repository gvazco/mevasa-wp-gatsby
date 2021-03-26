import React from "react";
import { graphql } from "gatsby";
import Pagination from "../components/Pagination";
import BlogLayout from "../layouts/BlogLayout";
import Seo from "../components/seo";
import imageProyecto from "../images/remates.jpg";
import CategoryList from "../components/CategoryList/CategoryList";

export default function Catagorias(props) {
	const { data, pageContext } = props;
	const categorias = data.allWpCategory.nodes;

	return (
		<BlogLayout>
			<Seo
				title="Blog de Techos y Mantenimientos"
				description="Muestra de proyectos realizados durante los últimos 10 años."
				image={imageProyecto}
			/>
			<CategoryList categorias={categorias} />
			<Pagination pageContext={pageContext} />
		</BlogLayout>
	);
}
export const query = graphql`
	query($skip: Int!, $limit: Int!) {
		allWpCategory(
			skip: $skip
			limit: $limit
			sort: { fields: id, order: DESC }
		) {
			nodes {
				name
				slug
				id
			}
		}
	}
`;
