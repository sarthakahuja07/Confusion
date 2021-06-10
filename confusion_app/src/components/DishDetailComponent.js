import React from "react";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent'

function DishDetail(props) {
	var comments;
	if (props.dish != null) {
		comments = props.comments.map((comment) => {
			var d = new Date(comment.date);
			console.log(d);
			return (
				<div className="list-group-item" key={comment.id}>
					<div class="d-flex w-100 justify-content-between">
						<h5 class="mb-1">{comment.comment}</h5>
					</div>
					<p class="mb-1">--{comment.author} , {d.toUTCString()}</p>
				</div>
			)
		});
	}


	function renderDish() {
		return (
			<div className="col-12 col-md-5 ">
				<div className="card p-2 text-black bg-primary">
					<img src={props.dish.image} alt={props.dish.name} className="card-img-top"></img>
					<div className="text-white card-body">
						<h5 className="card-title">{props.dish.name}</h5>
						<p className="card-text">{props.dish.description}</p>
					</div>
				</div>
			</div>
		);
	}

	function renderComment() {
		return (
			<div className="m-1 col-12 col-md-5">
				<h4>Comments</h4>
				{comments}
				<CommentForm dishId={props.dish.id}
					addComment={props.addComment} />
			</div>
		);
	}

	if (props.dish != null) {
		return (

			<div className="container">
				<div className="row mt-5">
					<Breadcrumb>
						<BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
						<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>{props.dish.name}</h3>
						<hr />
					</div>
				</div>
				<div className="mt-5 row">

					{renderDish()}
					{renderComment()}
				</div>
			</div>
		);
	} else {
		return null;
	}
}
export default DishDetail;

