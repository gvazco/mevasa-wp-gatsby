import React from "react";
import { Link } from "gatsby";
import { Container, Menu, Grid, Icom, Label } from "semantic-ui-react";
import SocialMedia from "../SocialMedia";

export default function MenuWeb() {
  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <Options />
          </Grid.Column>
          <Grid.Column className="menu__right" width={10}>
            <SocialMedia />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

function Options() {
  return (
    <Menu>
      <Link to="/blog">
        <Menu.Item as="a">Blog</Menu.Item>
      </Link>
      <Link to="/portafolio">
        <Menu.Item as="a">Portafolio</Menu.Item>
      </Link>
      <Link to="/productos">
        <Menu.Item as="a">Productos</Menu.Item>
      </Link>
      <Link to="/contacto">
        <Menu.Item as="a">Contacto</Menu.Item>
      </Link>
    </Menu>
  );
}
