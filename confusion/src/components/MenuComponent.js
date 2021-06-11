import React from "react";
import { Link } from "react-router-dom";
import {
	Card, CardText, CardBody, CardLink,
	CardTitle, CardSubtitle, CardImg, Breadcrumb, BreadcrumbItem 
} from 'reactstrap';
import LoadingComponent from './LoadingComponent'


function Menu(props){

		var menu = props.dishes.map((dish) => {
			return (
				<div key={dish.id} className="mt-5 col-12 col-md-5">
					<Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
					<Link to={`/menu/${dish.id}`} >
						<CardBody>
							<CardTitle tag="h5">{dish.name}</CardTitle>
						</CardBody>
						<img width="100%" src={dish.image} alt={dish.name} />
						</Link>
					</Card>
				</div>
			);
		});

		if(props.isLoading){
			return(
				<div className="container">
				<div className="row">
				<Breadcrumb className="">
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>   
					<LoadingComponent/>
				</div>
			</div>
			)
		}else if(props.err!=null){
			return(
				<div className="container">
				<div className="row">
				<Breadcrumb className="">
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>   
					<h4>{props.err}</h4>
				</div>
			</div>
			)
		}else{
			return (
				
				<div className="container">
					<div className="row">
					<Breadcrumb className="">
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

	
}


export default Menu;