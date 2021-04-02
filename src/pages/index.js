import React from "react";
import "./index.scss";
import {
	Container,
	Button,
	Header,
	Grid,
	Card,
	Icon,
	Segment,
	Divider,
	Image,
} from "semantic-ui-react";
import { Link } from "gatsby";
import Bloglayout from "../layouts/BlogLayout";
import Seo from "../../src/components/seo";
import imageDefault from "../images/torre-de-control-aicm-10.jpg";
import team from "../images/team.jpg";

export default function index() {
	return (
		<Bloglayout>
			<Seo
				title="Techos y Mantenimientos | Mevasa Comercializadora"
				description="Venta e Instalación de Lámina, somos especialistas en techos y mantenimientos industriales y residenciales"
				image={imageDefault}
			/>

			<Container fluid className="hero">
				<Grid.Column className="text">
					<Link to="/portafolio">
						<h1>Somos Especialistas</h1>

						{/* <Button positive fluid className="main-button">
							¡Quiero ver más!
						</Button> */}
					</Link>
					<h3> En techos, casetas y mantenimientos industriales</h3>
					<Button.Group className="main-button" fluid>
						<Button href="/productos" positive>
							Productos
						</Button>

						<Button.Or text="IR" />
						<Button href="/portafolio" primary>
							Portafolio
						</Button>
					</Button.Group>
				</Grid.Column>
			</Container>

			<Container fluid className="sections">
				<Segment className="about" style={{ padding: "4em 0" }} vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column width={8}>
								<Header
									as="h3"
									style={{ fontSize: "2em", textTransform: "uppercase" }}
								>
									Nosotros Somos Mevasa
								</Header>
								<p style={{ fontSize: "1.33em" }}>
									Con más de 12 años de experiencia, nos especializamos en el
									suministro e instalación de{" "}
									<b> lámina estructural y panel aislante de poliuretano</b>,
									para la fabricación y/o mantenimiento de naves, bodegas,
									cubiertas, casetas, campamentos u oficinas modulares.
								</p>
								<Header
									as="h3"
									style={{ fontSize: "2em", textTransform: "uppercase" }}
								>
									Somos Distribuidores
								</Header>
								<p style={{ fontSize: "1.33em" }}>
									Comercializamos una gran variedad de artículos indispensables
									para el desarrollo de proyectos constructivos, de
									mantenimiento o remodelación.
								</p>
							</Grid.Column>
							<Grid.Column textAlign="center" floated="right" width={8}>
								<Image src={team} style={{ width: "100%" }} />
								<Button
									style={{ margin: "1.5em 0" }}
									href="/portafolio"
									primary
									size="big"
								>
									Ver más...
									<Icon name="right arrow" />
								</Button>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
				<Divider as="h3" id="servicios" className="header_divider" horizontal>
					Servicios
				</Divider>
				<Segment className="services">
					<Grid className="services-list">
						<Grid.Column mobile={16} tablet={12} computer={5}>
							<Card className="services-list__item">
								<Image src={team} />
								<Card.Content>
									<Card.Header>
										<h3>Corte y Doblez de Lámina</h3>
									</Card.Header>
								</Card.Content>
								<Card.Content extra>
									<Card.Meta>
										<Icon name="file text" />
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever since the 1500s, when an unknown
										printer took a galley of type and scrambled it to make a
										type specimen book.
									</Card.Meta>
									<Button
										style={{ margin: "1.5em 0" }}
										href="https://wa.link/szvz94"
										primary
										fluid
										size="big"
									>
										Información
										<Icon name="right arrow" />
									</Button>
								</Card.Content>
							</Card>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={12} computer={5}>
							<Card className="services-list__item">
								<Image src={team} />
								<Card.Content>
									<Card.Header>
										<h3>Suministro de Materiales</h3>
									</Card.Header>
								</Card.Content>
								<Card.Content extra>
									<Card.Meta>
										<Icon name="file text" />
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever since the 1500s, when an unknown
										printer took a galley of type and scrambled it to make a
										type specimen book.
									</Card.Meta>
									<Button
										style={{ margin: "1.5em 0" }}
										href="https://wa.link/szvz94"
										primary
										fluid
										size="big"
									>
										Información
										<Icon name="right arrow" />
									</Button>
								</Card.Content>
							</Card>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={12} computer={5}>
							<Card className="services-list__item">
								<Image src={team} />
								<Card.Content>
									<Card.Header>
										<h3>Instalación Especializada</h3>
									</Card.Header>
								</Card.Content>
								<Card.Content extra>
									<Card.Meta>
										<Icon name="file text" />
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever since the 1500s, when an unknown
										printer took a galley of type and scrambled it to make a
										type specimen book.
									</Card.Meta>
									<Button
										style={{ margin: "1.5em 0" }}
										href="https://wa.link/szvz94"
										primary
										fluid
										size="big"
									>
										Información
										<Icon name="right arrow" />
									</Button>
								</Card.Content>
							</Card>
						</Grid.Column>
					</Grid>
				</Segment>
				<Divider hidden />
				<Segment text className="newsletter">
					<Grid>
						<Grid.Column>
							<Header
								as="h1"
								content="Seguridad, Exactitud y Garantía"
								inverted
							/>
							<Header
								as="h2"
								content="Tu tiempo es valioso, conecta con los especialistas..."
								inverted
							/>
							<Button
								href="https://wa.link/szvz94"
								target="_blank"
								positive
								size="big"
							>
								¡Contacto!
								<Icon name="right arrow" />
							</Button>
						</Grid.Column>
					</Grid>
				</Segment>
				<Divider hidden />
			</Container>
		</Bloglayout>
	);
}
