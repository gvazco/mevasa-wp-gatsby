import React from "react";
import { Grid, Image, Button, Label } from "semantic-ui-react";
import BlogLayout from "../../layouts/BlogLayout";
import TransformOembedToIframe from "../../utils/TransformOembedToIframe";
import "./producto.scss";
import Seo from "../../components/seo";

export default function Producto(props) {
	const { pageContext } = props;
	const { data: producto } = pageContext;

	return (
		<BlogLayout className="producto">
			<Seo
				title={producto.Seo.seotitle}
				description={producto.Seo.seodescription}
				image={producto.featuredImage.node.localFile.publicURL}
			/>

			<div className="markdown-body">
				<div className="prod-excerpt">
					<h1>{producto.title}</h1>

					<Grid>
						<Grid.Column mobile={16} tablet={16} computer={8}>
							<Image src={producto.featuredImage.node.localFile.publicURL} />
							<Grid.Row className="buttons">
								<Button positive href={producto.FieldsProductos.link}>
									Cotizar ahora
								</Button>
								{producto.FieldsProductos.precio ? (
									<Label tag className="precio">
										{producto.FieldsProductos.textlabel} $
										{producto.FieldsProductos.precio} + IVA
									</Label>
								) : (
									""
								)}

								{producto.FieldsProductos.textlabel &&
								!producto.FieldsProductos.precio ? (
									<Label tag className="precio">
										{producto.FieldsProductos.textlabel}
									</Label>
								) : (
									""
								)}
							</Grid.Row>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={10} computer={8}>
							<p dangerouslySetInnerHTML={{ __html: producto.content }}></p>
						</Grid.Column>
					</Grid>
				</div>
			</div>
		</BlogLayout>
	);
}
