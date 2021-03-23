import React from "react";
import { graphql } from "gatsby";
import BlogLayout from "../layouts/BlogLayout";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";
import Seo from "../components/seo";
import imageBlog from "../images/torre-de-control-aicm-10.jpg";

export default function Blog(props) {
	const { data, pageContext } = props;
	const posts = data.allWpPost.nodes;

	return (
		<BlogLayout>
			<Seo
				title="Blog de Techos y Mantenimientos | Mevasa"
				description="Lorem Ipsuom dolor sit amet consecutur"
				image={imageBlog}
			/>
			<PostList posts={posts} />
			<Pagination pageContext={pageContext} />
		</BlogLayout>
	);
}

export const query = graphql`
	query($skip: Int!, $limit: Int!) {
		allWpPost(skip: $skip, limit: $limit, sort: { fields: date, order: DESC }) {
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
`;
