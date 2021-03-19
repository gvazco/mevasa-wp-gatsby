import React from "react";
import Disqus from "gatsby-plugin-disqus";
import { Grid, Row, Image, Button, Label } from "semantic-ui-react";
import BlogLayout from "../../layouts/BlogLayout";
import TransformOembedToIframe from "../../utils/TransformOembedToIframe";
import "./producto.scss";
// import ProdExcerpt from "../../components/ProdExcerpt";
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
            </Grid.Column>
            <Grid.Column mobile={16} tablet={10} computer={8}>
              <p dangerouslySetInnerHTML={{ __html: producto.excerpt }}></p>
            </Grid.Column>
            <Grid.Row>
              <Grid.Column mobile={16} tablet={6} computer={8}>
                <Button href="#">Cotizar ahora</Button>
                <Label tag className="precio">
                  ${producto.FieldsProductos.precio}
                </Label>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: TransformOembedToIframe(producto.content),
          }}
        />
        <br />
        <br />
        <Disqus
          identifier={producto.id}
          title={producto.title}
          url={`/${producto.slug}`}
        />
      </div>
    </BlogLayout>
  );
}
