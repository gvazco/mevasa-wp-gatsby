import React from "react";
import { Container, Button } from "semantic-ui-react";
import { Link } from "gatsby";
import Bloglayout from "../layouts/BlogLayout";
import Seo from "../../src/components/seo";
import imageDefault from "../images/torre-de-control-aicm-10.jpg";
import "./index.scss";

export default function index() {
	return (
		<Bloglayout>
			<Seo
				title="Techos y Mantenimientos | Mevasa Comercializadora"
				description="Venta e Instalación de Lámina, somos especialistas en techos y mantenimientos industriales y residenciales"
				image={imageDefault}
			/>
			<Container fluid className="hero">
				<Container fluid className="text">
					<Link to="/portafolio">
						<h1>SOMOS ESPECIALISTAS</h1>
						<h3> En techos, casetas y mantenimientos industriales</h3>
						{/* <Button positive fluid className="main-button">
							¡Quiero ver más!
						</Button> */}
					</Link>

					<Button.Group className="main-button" fluid size="large">
						<Button
							href="https://wa.me/c/5215582802149"
							target="_blank"
							rel="noreferer"
							positive
						>
							Productos
						</Button>

						<Button.Or text="IR" />
						<Button href="/portafolio" primary>
							Portafolio
						</Button>
					</Button.Group>
				</Container>
			</Container>
		</Bloglayout>
	);
}
