
import React, { useState , useEffect} from "react";
import Menu from "./MenuComponents";
import DishDetail from './DishDetailComponent'
import Header from './HeaderComponent'
import Contact from './ContactComponent';
import Home from './HomeComponent'
import Footer from './FooterComponent'
import About from './AboutComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addComment, fetchDishes } from '../redux/actionCreator'

const mapStateToProps = (state) => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addComment: (dishId, rating, comment, author) => {
			dispatch(addComment(dishId, rating, comment, author))
		},
		fetchDishes: () => {
			console.log("hi");
			dispatch(fetchDishes());
		}
	};

}

function Main(props) {

	useEffect(() => {
		props.fetchDishes();
	});

	function HomePage() {
		return (
			<Home dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
				promotion={props.promotions.filter((promo) => promo.featured)[0]}
				leader={props.leaders.filter((leader) => leader.featured)[0]}
				isLoading={props.dishes.isLoading}
				err={props.dishes.err}
			/>
		);
	}
	function MenuPage() {
		return (
			<Menu dishes={props.dishes.dishes}
				isLoading={props.dishes.isLoading}
				err={props.dishes.err} />
		);
	}
	function DishDetailPage({ match }) {
		return (
			<DishDetail dish={props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
				comments={props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
				addComment={props.addComment}
				isLoading={props.dishes.isLoading}
				err={props.dishes.err}
			/>
		);
	};
	function AboutPage() {
		return (
			<About leaders={props.leaders} />

		);
	}
	return (
		<div >
			<React.Fragment>
				<Header />
				<Switch>
					<Route path="/home" component={() => HomePage()} ></Route>
					<Route exact path="/menu" component={() => MenuPage()} ></Route>
					<Route exact path="/contactus" component={() => <Contact />} ></Route>
					<Route path='/menu/:dishId' component={DishDetailPage}></Route>
					<Route path='/aboutus' component={() => AboutPage()}></Route>
					<Redirect to='/home'> </Redirect>
				</Switch>
				<Footer />
			</React.Fragment>
		</div>
	);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
