
import React, { useState } from "react";
import Menu from "./MenuComponents";
import DishDetail from './DishDetailComponent'
import Dishes from '../shared/dishes';
import Header from './HeaderComponent'
import Footer from './FooterComponent'

function Main() {

	const [dishes, setdishes] = useState(Dishes);
	const [selectedItem, setselectedItem] = useState(null);

	function selectDish(dishId) {
		setselectedItem(dishId);
	}

	return (
		<div >
			<Header />
			<Menu dishes={dishes} onClick={(dishId) => selectDish(dishId)} />
			<DishDetail dish={dishes.filter((dish) => dish.id === selectedItem)[0]} />
			<Footer />
		</div>
	);
}

export default Main;
