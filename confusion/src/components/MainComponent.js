import React, { Component } from "react";
import Menu from "./MenuComponent";
import Dishes from '../shared/dishes';
import DishDetail from './DishDetailComponent'
import Home from './HomeComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {Switch,Route,Redirect} from 'react-router-dom'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: Dishes,
        }
    }

    // <Menu dishes={this.state.dishes} onClick={(dishId) => this.selectDish(dishId)} />
    // <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedItem)[0]} />

    HomePage(){
        return (
            <Home />
        );
    }
    MenuPage(){
        return (
            <Menu dishes = {this.state.dishes}/>
        );
    }


    render() {
        return (
            <React.Fragment>
                <Header />
                    <Switch>
                        <Route path="/home" component={()=>this.HomePage()} ></Route>
                        <Route exact path="/menu" component={()=>this.MenuPage()} ></Route>
                        <Redirect to = '/home'> </Redirect>
                    </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;
