import React from "react";
import { Button, Grid, Card, Icon, Segment, Image } from "semantic-ui-react";
import "./ServicesList.scss";

export default function ServicesList() {
	return (
		<Segment className="services">
			<Grid className="services-list">
				<Grid.Column mobile={16} tablet={12} computer={5}>
					<Card className="services-list__item">
						<Image src="https://mevasa-gatsby.techosymantenimientos.com.mx/wp-content/uploads/2021/04/Doblez-11.jpg" />
						<Card.Content>
							<Card.Header>
								<h3>Corte y Doblez de Lámina</h3>
							</Card.Header>
						</Card.Content>
						<Card.Content extra>
							<Card.Meta>
								<Icon name="file text" />
								Servicio de corte y doblez de{" "}
								<b>
									lámina galvanizada o pintro, acero inoxidable y placa de
									acero,
								</b>{" "}
								de acuerdo al desarrollo y necesidades de su proyecto.
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
						<Image src="https://mevasa-gatsby.techosymantenimientos.com.mx/wp-content/uploads/2021/04/DSC_4436_01.jpg" />
						<Card.Content>
							<Card.Header>
								<h3>Suministro de Materiales</h3>
							</Card.Header>
						</Card.Content>
						<Card.Content extra>
							<Card.Meta>
								<Icon name="file text" />
								Relizamos envíos a toda la República, de artículos
								indispensables para el desarrollo de{" "}
								<b>proyectos constructivos, de mantenimiento o remodelación.</b>
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
						<Image src="https://mevasa-gatsby.techosymantenimientos.com.mx/wp-content/uploads/2021/04/SAM_2268.jpg" />
						<Card.Content>
							<Card.Header>
								<h3>Instalación Especializada</h3>
							</Card.Header>
						</Card.Content>
						<Card.Content extra>
							<Card.Meta>
								<Icon name="file text" />
								Especialistas en acondicionamiento de naves, bodegas y cubiertas
								industriales-residenciales.{" "}
								<b>Ofrecemos variedad en paquetes constructivos.</b>
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
	);
}
