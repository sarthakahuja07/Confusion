import React, { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from './DishDetailComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent';
import Header from './HeaderComponent'
import About from './AboutComponent'
import Footer from './FooterComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addComment, fetchDishes, fetchComments, fetchLeaders, fetchPromotions } from '../redux/actionCreator'

function mapStateToProps(state) {
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

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchLeaders();
        this.props.fetchPromotions();
    }


    // <Menu dishes={this.props.dishes.dishes} onClick={(dishId) => this.selectDish(dishId)} />
    // <DishDetail dish={this.props.dishes.dishes.filter(dish => dish.id === this.props.selectedItem)[0]} />

    HomePage() {

        return (
            <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                isDishLoading={this.props.dishes.isLoading}
                dishErr={this.props.dishes.err}
                isLeaderLoading={this.props.leaders.isLoading}
                leaderErr={this.props.leaders.err}
                isPromotionLoading={this.props.promotions.isLoading}
                promotionErr={this.props.promotions.err}
            />
        );
    }
    MenuPage() {
        return (
            <Menu dishes={this.props.dishes.dishes}
                isDishLoading={this.props.dishes.isLoading}
                dishErr={this.props.dishes.err}
            />
        );
    }

    DishDetailPage = ({ match }) => {
        console.log("------------------------------")
        console.log(this.props.comments.comments)
        return (
            <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                addComment={this.props.addComment}
                isDishLoading={this.props.dishes.isLoading}
                dishErr={this.props.dishes.err}
                isCommentLoading={this.props.comments.isLoading}
                commmentErr={this.props.comments.err}
            />
        );
    };

    AboutPage() {
        return (
            <About leaders={this.props.leaders.leaders}
                isLeaderLoading={this.props.leaders.isLoading}
                leaderErr={this.props.leaders.err} />
        );
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/home" component={() => this.HomePage()} ></Route>
                    <Route exact path="/menu" component={() => this.MenuPage()} ></Route>
                    <Route exact path="/contactus" component={() => <Contact />} ></Route>
                    <Route path='/menu/:dishId' component={this.DishDetailPage}></Route>
                    <Route path='/aboutus' component={() => this.AboutPage()}></Route>
                    <Redirect to='/home'> </Redirect>
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
