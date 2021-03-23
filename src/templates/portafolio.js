import React from "react";
import { graphql } from "gatsby";
import Pagination from "../components/Pagination";
import BlogLayout from "../layouts/BlogLayout";
import ProjectList from "../components/ProjectList";
import Seo from "../components/seo";
import imageProyecto from "../images/remates.jpg";

export default function Portafolio(props) {
	const { data, pageContext } = props;
	const proyectos = data.allWpProyecto.nodes;

	return (
		<BlogLayout>
			<Seo
				title="Portafolio de Techos y Mantenimientos"
				description="Muestra de proyectos realizados durante los últimos 10 años."
				image={imageProyecto}
			/>
			<ProjectList proyectos={proyectos} />
			<Pagination pageContext={pageContext} />
		</BlogLayout>
	);
}
export const query = graphql`
	query($skip: Int!, $limit: Int!) {
		allWpProyecto(
			skip: $skip
			limit: $limit
			sort: { fields: date, order: DESC }
		) {
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
`;
