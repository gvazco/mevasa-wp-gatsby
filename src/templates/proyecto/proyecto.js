import React from "react";
import Disqus from "gatsby-plugin-disqus";
import BlogLayout from "../../layouts/BlogLayout";
import TransformOembedToIframe from "../../utils/TransformOembedToIframe";
import "./proyecto.scss";
import Seo from "../../components/seo";

export default function Proyecto(props) {
  const { pageContext } = props;
  const { data: proyecto } = pageContext;

  return (
    <BlogLayout className="proyecto">
      <Seo
        title={proyecto.Seo.seotitle}
        description={proyecto.Seo.seodescription}
        image={proyecto.featuredImage.node.localFile.publicURL}
      />

      <div className="markdown-body">
        <h1>{proyecto.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: TransformOembedToIframe(proyecto.content),
          }}
        />
        <br />
        <br />
        <Disqus
          identifier={proyecto.id}
          title={proyecto.title}
          url={`/${proyecto.slug}`}
        />
      </div>
    </BlogLayout>
  );
}
