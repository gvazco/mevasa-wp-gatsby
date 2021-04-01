import React from "react";
import { Grid, Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "gatsby";
import { map } from "lodash";
import "./ProductList.scss";

export default function ProductList(props) {
	const { productos } = props;

	return (
		<Grid className="productos-list">
			{map(productos, (producto) => (
				<Grid.Column key={producto.id} mobile={16} tablet={16} computer={5}>
					<Card className="productos-list__item">
						<Link to={`/productos/${producto.slug}`}>
							<Image src={producto.featuredImage.node.localFile.publicURL} />
						</Link>
						<Card.Content>
							<Card.Header>
								<Link to={`/productos/${producto.slug}`}>{producto.title}</Link>
							</Card.Header>
						</Card.Content>
						<Card.Content extra>
							<Card.Meta>
								<Icon name="certificate" />
								{producto.Seo.seodescription}
							</Card.Meta>
							<Button.Group>
								<Button
									positive
									href={producto.FieldsProductos.link}
									target="_blank"
								>
									{producto.FieldsProductos.textbutton}
								</Button>
								<Button.Or text="IR" />
								<Button primary href={`/productos/${producto.slug}`}>
									Info Producto
								</Button>
							</Button.Group>
						</Card.Content>
					</Card>
				</Grid.Column>
			))}
		</Grid>
	);
}
