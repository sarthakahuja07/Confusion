
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
import { addComment, fetchDishes, fetchComments, fetchLeaders, fetchPromotions } from '../redux/actionCreator'

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
            dispatch(fetchDishes());
        },
        fetchComments: () => {
            dispatch(fetchComments());
        },
        fetchPromotions: () => {
            dispatch(fetchPromotions());
        },
        fetchLeaders: () => {
            dispatch(fetchLeaders());
        },

    };
}

function Main(props) {


	useEffect(() => {
		props.fetchDishes();
		props.fetchComments();
		props.fetchLeaders();
		props.fetchPromotions();
	}, []); 

	function HomePage() {
		return (
			<Home dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
			promotion={props.promotions.promotions.filter((promo) => promo.featured)[0]}
			leader={props.leaders.leaders.filter((leader) => leader.featured)[0]}
			isDishLoading={props.dishes.isLoading}
			dishErr={props.dishes.err}
			isLeaderLoading={props.leaders.isLoading}
			leaderErr={props.leaders.err}
			isPromotionLoading={props.promotions.isLoading}
			promotionErr={props.promotions.err}
		/>
	);
		
	}
	function MenuPage() {
		return (
			<Menu dishes={props.dishes.dishes}
			isDishLoading={props.dishes.isLoading}
			dishErr={props.dishes.err}
		/>
		);
	}
	function DishDetailPage({ match }) {
		return (
			<DishDetail dish={props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
			comments={props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
			addComment={props.addComment}
			isDishLoading={props.dishes.isLoading}
			dishErr={props.dishes.err}
			isCommentLoading={props.comments.isLoading}
			commmentErr={props.comments.err}
		/>
		);
	};
	function AboutPage() {
		return (
            <About leaders={props.leaders.leaders}
                isLeaderLoading={props.leaders.isLoading}
                leaderErr={props.leaders.err} />
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
