import React from "react";
import { Link } from "gatsby";
import { Image } from "semantic-ui-react";
import { Navbar, Nav } from "react-bootstrap";
import "./Menu.scss";
import logo from "../../images/MevasaTechosLogo.png";

export default function Menu() {
	return (
		<div className="menu">
			<Navbar
				sticky="top"
				collapseOnSelect
				expand="xl"
				bg="transparent"
				variant="light"
			>
				<Link to="/">
					<Image src={logo} />
				</Link>

				<div className="toggler">
					<span className="nav_bar_title">Menú -></span>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
				</div>
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
					<Nav>
						<Link to="/" activeClassName="active">
							Inicio
						</Link>

						<Link to="/productos" partiallyActive activeClassName="active">
							Productos
						</Link>

						<Link to="/portafolio" partiallyActive activeClassName="active">
							Portafolio
						</Link>

						<Link to="/blog" partiallyActive activeClassName="active">
							Documentación
						</Link>

						{/* <Link to="/blog" partiallyActive activeClassName="active">
							Tutoriales
						</Link> */}

						<a
							href="https://wa.link/szvz94"
							target="_blank"
							rel="noreferrer noopener"
						>
							Contacto
						</a>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
