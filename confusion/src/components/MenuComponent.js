import React, { Component } from "react";
// import { Media } from "reactstrap";
import {
	Card, CardText, CardBody, CardLink,
	CardTitle, CardSubtitle,CardImg
} from 'reactstrap';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: null
		};
	}

	selectDish(dish) {
		this.setState({ selectedItem: dish });
	}

	renderCard() {
		if (this.state.selectedItem != null) {
			var dish=this.state.selectedItem;
			return (
				<Card body inverse color="danger" className="col-6">
					<CardImg top width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle tag="h5">{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			);
		}
		else {

			return <div></div>
		}


	}


	render() {
		var menu = this.props.dishes.map((dish) => {
			return (
				<div key={dish.id} className="mt-5 col-12 col-md-6">
					<Card onClick={() => this.selectDish(dish)} body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
						<CardBody>
							<CardTitle tag="h5">{dish.name}</CardTitle>
						</CardBody>
						<img width="100%" src={dish.image} alt={dish.name} />
					</Card>
				</div>
			);
		});

		return (
			<div className="container">
				<div className="row">
					{menu}
				</div>
				<div className="row mt-5">
					{this.renderCard()}
				</div>
			</div>
		);
	}
}


export default Menu;