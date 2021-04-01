import React from "react";
import { Link } from "gatsby";
import { Container, Grid, List, Header } from "semantic-ui-react";
import "./Footer.scss";

export default function Footer() {
	return (
		<Container fluid className="footer">
			<Grid divided stackable>
				<Grid.Row>
					<Grid.Column width={3}>
						<Link to="/">
							<Header as="h4" content="Inicio" />
						</Link>
						<List link>
							<List.Item as="a" href="/about">
								Acerca de:
							</List.Item>
							<List.Item as="a" href="/productos">
								Productos
							</List.Item>
							<List.Item as="a" href="/portafolio">
								Portafolio
							</List.Item>
							<List.Item as="a" href="/blog">
								Documentación
							</List.Item>
							<List.Item as="a" href="https://wa.link/szvz94" target="_blank">
								Contacto
							</List.Item>
						</List>
					</Grid.Column>
					<Grid.Column width={3}>
						<Link to="/#servicios">
							<Header as="h4" content="Servicios" />
						</Link>
						<List link>
							<List.Item as="a">Corte y Doblez de Lámina</List.Item>
							<List.Item as="a">Suministro de Materiales</List.Item>
							<List.Item as="a">Instalación Especializada</List.Item>
						</List>
						<Link to="/">
							<Header as="h5" content="Avisos Legales" />
						</Link>
					</Grid.Column>
					<Grid.Column width={7}>
						<Header as="h4">Encuentranos en:</Header>
						<List link>
							<List.Item as="a"></List.Item>
							<List.Item as="a">(55) 8185-3675</List.Item>
							<List.Item as="a">(55) 8280-2149</List.Item>
							<List.Item as="a">info.mevasa@gmail.com</List.Item>
							<List.Item as="a">ventas@techosymantenimientos.com.mx</List.Item>
							<List.Item />
							<List.Item
								as="a"
								href="https://g.page/mevasacomercializadora?share"
								target="_blank"
							>
								<b>Dirección Físcal:</b> Ricardo Flores Magón #105, Izcalli
								Chamapa, 53689, Naucalpan de Juárez, EdoMéx.
							</List.Item>
						</List>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<br></br>

			<Grid.Column mobile={16} tablet={16} computer={16}>
				<p>
					© 2020 Techos y Mantenimientos | Mevasa Comercializadora. Todos los
					derechos reservados. Sitio desarrollado por:
					<a href="https://facebook.com/disturbioilustrativo">
						{" "}
						Disturbio Ilustrativo.
					</a>
				</p>
			</Grid.Column>
		</Container>
	);
}
