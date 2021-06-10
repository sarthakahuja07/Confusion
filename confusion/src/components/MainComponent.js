import React, { Component } from "react";
import Menu from "./MenuComponent";
import Dishes from '../shared/dishes';
import DishDetail from './DishDetailComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent';
import Header from './HeaderComponent'
import About from './AboutComponent'
import Footer from './FooterComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addComment } from '../redux/actionCreator'

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
        }
    };

}

class Main extends Component {

    constructor(props) {
        super(props);
    }



    // <Menu dishes={this.props.dishes} onClick={(dishId) => this.selectDish(dishId)} />
    // <DishDetail dish={this.props.dishes.filter(dish => dish.id === this.props.selectedItem)[0]} />

    HomePage() {
        return (
            <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />
        );
    }
    MenuPage() {
        return (
            <Menu dishes={this.props.dishes} />
        );
    }

    DishDetailPage = ({ match }) => {
        return (
            <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                addComment={this.props.addComment}
            />

        );
    };

    AboutPage() {
        return (
            <About leaders={this.props.leaders} />
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
