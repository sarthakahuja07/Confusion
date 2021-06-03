
import React, { useState } from "react";
import Menu from "./MenuComponents";
import DishDetail from './DishDetailComponent'
import Dishes from '../shared/dishes';

import {
	Navbar,
	NavbarBrand
} from 'reactstrap';



function Main() {

	const [dishes, setdishes] = useState(Dishes);
	const [selectedItem, setselectedItem] = useState(null);

	function selectDish(dishId) {
		setselectedItem(dishId);
	}

	return (
		<div >
			<Navbar dark color="danger">
				<div className="container">
					<NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
				</div>
			</Navbar>
			<Menu dishes={dishes} onClick={(dishId) => selectDish(dishId)} />
			<DishDetail dish={dishes.filter((dish) => dish.id === selectedItem)[0]} />
		</div>
	);
}

export default Main;
