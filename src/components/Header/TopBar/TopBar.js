import React from "react";
import { Container, Grid, Image, Input } from "semantic-ui-react";
import { Link } from "gatsby";
import logo from "../../../images/MevasaTechosLogo.png";

export default function TopBar() {
  return (
    <div className="top-bar">
      <Container>
        <Grid className="top-bar">
          <Grid.Column width={8} className="top-bar__left">
            <Logo />
          </Grid.Column>
          <Grid.Column width={8} className="top-bar__right">
            <Search />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

function Logo() {
  return (
    <Link to="/">
      <Image src={logo} alt="Mevasa-Logo" />
    </Link>
  );
}

function Search() {
  return <Input id="search-game" icon={{ name: "search" }} />;
}
