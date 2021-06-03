import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import Dishes from '../shared/dishes';
import DishDetail from './DishDetailComponent'


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
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.selectDish(dishId)} />
                <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedItem)[0]} />
            </div>
        );
    }
}

export default Main;
