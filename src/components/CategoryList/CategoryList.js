import React from "react";
import { Grid, Card, Icon, Image } from "semantic-ui-react";
import { Link } from "gatsby";
import { map } from "lodash";
import "./CategoryList.scss";

export default function CategoryList(props) {
	const { categorias } = props;
	console.log(props);

	return (
		<Grid className="categorias-list">
			{map(categorias, (categoria) => (
				<Grid.Column key={categoria.id} mobile={16} tablet={16} computer={5}>
					<Link to={`/categorias/${categoria.slug}`}>
						<h1>{categoria.name}</h1>
					</Link>
				</Grid.Column>
			))}
		</Grid>
	);
}
