import React from "react";
import {
	Card, CardText, CardBody, CardLink,
	CardTitle, CardSubtitle, CardImg
} from 'reactstrap';


function Menu(props){

		var menu = props.dishes.map((dish) => {
			return (
				<div key={dish.id} className="mt-5 col-12 col-md-5">
					<Card onClick={() => props.onClick(dish.id)} body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
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
			</div>
		);
	
}


export default Menu;