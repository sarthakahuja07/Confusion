import React, { Component } from "react";
import {
	Card, CardText, CardBody, CardLink,
	CardTitle, CardSubtitle, CardImg
} from 'reactstrap';


class DishDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {


		if(this.props.dish!=null){
			return (
				<div className="row mt-5">
					<div className="col-12 col-md-5 ">
						<Card body inverse color="danger">
							<CardImg top width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
							<CardBody>
								<CardTitle tag="h5">
									{this.props.dish.name}
								</CardTitle>
								<CardText>
									{this.props.dish.description}
								</CardText>
							</CardBody>
						</Card>
					</div>
				</div>
	
			);
		}else{
			return null;
		}
		
	}
}

export default DishDetail;