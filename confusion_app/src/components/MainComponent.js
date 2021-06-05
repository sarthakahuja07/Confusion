
import React, { useState } from "react";
import Menu from "./MenuComponents";
import DishDetail from './DishDetailComponent'
import Dishes from '../shared/dishes';
import Header from './HeaderComponent'
import Contact from './ContactComponent';
import Home from './HomeComponent'
import Footer from './FooterComponent'
import { Switch, Route, Redirect } from 'react-router-dom'
import { DISHES } from '../shared/dishes';

import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

function Main() {

	const [dishes, setdishes] = useState(DISHES);
	const [comments, setcomments] = useState(COMMENTS);
	const [promotions, setpromotions] = useState(PROMOTIONS);

	const [leaders, setleaders] = useState(LEADERS);


	function HomePage() {
		return (
			<Home dish={dishes.filter((dish) => dish.featured)[0]}
				promotion={promotions.filter((promo) => promo.featured)[0]}
				leader={leaders.filter((leader) => leader.featured)[0]}
			/>
		);
	}
	function MenuPage() {
		return (
			<Menu dishes={dishes} />
		);
	}
	function DishDetailPage({ match }){
		return (
			<DishDetail dish={dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
				comments={comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
		);
	};

	return (
		<div >
			<React.Fragment>
				<Header />
				<Switch>
					<Route path="/home" component={() => HomePage()} ></Route>
					<Route exact path="/menu" component={() => MenuPage()} ></Route>
					<Route exact path="/contactus" component={() => <Contact />} ></Route>
					<Route path='/menu/:dishId' component={DishDetailPage}></Route>

					<Redirect to='/home'> </Redirect>
				</Switch>
				<Footer />
			</React.Fragment>
		</div>
	);
}

export default Main;
