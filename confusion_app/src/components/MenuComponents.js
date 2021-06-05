import React, { useState } from 'react';
import {
	Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from "react-router-dom";


function Menu(props) {


	var menu = props.dishes.map((dish) => {
		return (
			<div key={dish.id} className="mt-5 col-12 col-md-5 ">
				<div className="card p-2 text-white bg-danger">
					<Link to={`/menu/${dish.id}`} >
						<img src={dish.image} alt={dish.name} className="card-img-top"></img>
						<div className="card-body">
							<h5 className="card-title">{dish.name}</h5>
						</div>
					</Link>
				</div>
			</div>
		);
	})

	return (
		<div className="container">
			<div className="row">
			<Breadcrumb className="mt-5">
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>   
				{menu}
			</div>
		</div>
	);
}

export default Menu;
