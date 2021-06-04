import React, { Component } from "react";
import Menu from "./MenuComponent";
import Dishes from '../shared/dishes';
import DishDetail from './DishDetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: Dishes,
            selectedItem: null,
        }
    }

    selectDish(dishId) {
        this.setState({ selectedItem: dishId });
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.selectDish(dishId)} />
                <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedItem)[0]} />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;
