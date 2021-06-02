import React , { useState }from 'react';

function Menu(props) {

	const [selectedItem, setselectedItem] = useState(null);


	function selectDish(dish) {
		setselectedItem(dish);
	}

	function renderCard() {
		if (selectedItem != null) {
			var dish = selectedItem;
			return (
				<div className="mt-5 col-12 col-md-6 ">
					<div className="card p-2 text-black bg-primary">
						<img src={dish.image} alt={dish.name} className="card-img-top"></img>
						<div className="card-body">
							<h5 className="card-title">{dish.name}</h5>
							<p className="card-text">{dish.description}</p>
							<a href="/" className="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
			);

		}
		else {
			return <div></div>
		}
		

	}



	var menu = props.dishes.map((dish) => {
		return (
			<div key={dish.id}  className="mt-5 col-12 col-md-6 ">
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
			<div className="row">
				{renderCard()}
			</div>
		</div>
	);
}

export default Menu;
