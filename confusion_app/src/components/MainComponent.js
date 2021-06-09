
import React, { useState } from "react";
import Menu from "./MenuComponents";
import DishDetail from './DishDetailComponent'
import Header from './HeaderComponent'
import Contact from './ContactComponent';
import Home from './HomeComponent'
import Footer from './FooterComponent'
import About from './AboutComponent'

import { Switch, Route, Redirect, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps=(state)=>{
	return {
		dishes:state.dishes,
		comments:state.comments,
		promotions:state.promotions,
		leaders:state.leaders
	};
}

function Main(props) {

	

	function HomePage(){
		return (
			<Home dish={props.dishes.filter((dish) => dish.featured)[0]}
				promotion={props.promotions.filter((promo) => promo.featured)[0]}
				leader={props.leaders.filter((leader) => leader.featured)[0]}
			/>
		);
	}
	function MenuPage() {
		return (
			<Menu dishes={props.dishes} />
		);
	}
	function DishDetailPage({ match }){
		return (
			<DishDetail dish={props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
				comments={props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
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

export default withRouter(connect(mapStateToProps)(Main));
