import React from "react";
import { Container, Image } from "semantic-ui-react";
import { Link } from "gatsby";
import Bloglayout from "../layouts/BlogLayout";
import "./index.scss";

export default function index() {
  return (
    <Bloglayout>
      <Container fluid className="hero">
        <div className="text">
          <Link to="/portafolio">Somos Especialistas</Link>
        </div>
      </Container>
    </Bloglayout>
  );
}
