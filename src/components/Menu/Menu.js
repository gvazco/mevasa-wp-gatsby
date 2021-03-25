import React from "react";
import { Link } from "gatsby";
import { Image } from "semantic-ui-react";
import { Navbar, Nav } from "react-bootstrap";
// import SocialMedia from "../SocialMedia"
// import Courses from "../Courses"
import "./Menu.scss";
import logo from "../../images/MevasaTechosLogo.png";

export default function Menu() {
	return (
		<div className="menu">
			<Navbar
				sticky="top"
				collapseOnSelect
				expand="lg"
				bg="transparent"
				variant="light"
			>
				<Link to="/">
					<Image src={logo} />
				</Link>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse
					id="responsive-navbar-nav"
					className="justify-content-end"
				>
					<Nav>
						<Link to="/" activeClassName="active">
							Inicio
						</Link>

						<a
							href="https://wa.me/c/5215582802149"
							target="_blank"
							rel="noreferer"
						>
							Productos
						</a>

						<Link to="/blog" partiallyActive activeClassName="active">
							Documentación
						</Link>

						<Link to="/portafolio" partiallyActive activeClassName="active">
							Portafolio
						</Link>

						{/* <Link to="/productos" partiallyActive activeClassName="active">
              Productos
            </Link> */}

						<a href="https://wa.link/szvz94" target="_blank" rel="noreferer">
							Contacto
						</a>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
