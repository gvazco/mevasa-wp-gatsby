import React from "react";
import { Container, Button } from "semantic-ui-react";
import { Link } from "gatsby";
import Bloglayout from "../layouts/BlogLayout";
import "./index.scss";

export default function index() {
  return (
    <Bloglayout>
      <Container fluid className="hero">
        <Container className="text">
          <Link to="/portafolio">
            <h1>Somos Especialistas</h1>
            <h3> En techos y mantenimientos industriales - residenciales.</h3>

            <Button fluid className="main-button">
              ¡Quiero ver más!
            </Button>
          </Link>
        </Container>
      </Container>
    </Bloglayout>
  );
}
