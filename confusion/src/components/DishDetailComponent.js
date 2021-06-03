import React from "react";
import {
	Card, CardText, CardBody, CardLink,
	CardTitle, CardSubtitle, CardImg
} from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';


function DishDetail(props){


	function renderDish() {
		if (props.dish != null) {
			return (
				<div className="col-12 col-md-5 ">
					<Card body inverse color="danger">
						<CardImg top width="100%" src={props.dish.image} alt={props.dish.name} />
						<CardBody>
							<CardTitle tag="h5">
								{props.dish.name}
							</CardTitle>
							<CardText>
								{props.dish.description}
							</CardText>
						</CardBody>
					</Card>
				</div>
			);
		}else {
			return null;
		}

	}

	function renderComments() {
		if (props.dish != null) {
			const comments = props.dish.comments.map((comment) => {
				var d = new Date(comment.date);
				console.log(d);
				return (
					<div className="mt-2" key={comment.id}>
						<ListGroupItem >
							<ListGroupItemHeading>{comment.comment}</ListGroupItemHeading>
							<ListGroupItemText>
								--{comment.author} , {d.toUTCString()}
							</ListGroupItemText>
						</ListGroupItem>
					</div>

				)
			});
			return (
				<div className="m-1 col-12 col-md-5">
					<h4> Comments </h4>
					{comments}
				</div>
			);
		} else {
			return null;
		}
	}
		return (
		<div className="container">
			<div className="row mt-5">
				{renderDish()}
				{renderComments()}
			</div>
		</div>
	);

	
}

export default DishDetail;