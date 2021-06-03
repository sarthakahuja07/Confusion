import React , { useState }from 'react';
import DishDetail from './DishDetailComponent'

function Menu(props) {

	const [selectedItem, setselectedItem] = useState(null);


	function selectDish(dish) {
		setselectedItem(dish);
	}

	var menu = props.dishes.map((dish) => {
		return (
			<div key={dish.id}  className="mt-5 col-12 col-md-5 ">
				<div onClick={() => selectDish(dish)} className="card p-2 text-white bg-danger">
					<img src={dish.image} alt={dish.name} className="card-img-top"></img>
					<div className="card-body">
						<h5 className="card-title">{dish.name}</h5>
					</div>
				</div>
			</div>
		);
	})

	return (
		<div className="container">
			<div className="row">
				{menu}
			</div>
			<DishDetail dish={selectedItem} />
		</div>
	);
}

export default Menu;
