import React, { Component } from "react";
// import { Media } from "reactstrap";
import {
	Card, CardText, CardBody, CardLink,
	CardTitle, CardSubtitle, CardImg
} from 'reactstrap';

import DishDetail from './DishDetailComponent'

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

	render() {
		var menu = this.props.dishes.map((dish) => {
			return (
				<div key={dish.id} className="mt-5 col-12 col-md-5">
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
				<DishDetail dish={this.state.selectedItem} />
			</div>
		);
	}
}


export default Menu;