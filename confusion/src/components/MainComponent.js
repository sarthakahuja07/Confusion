import React, { Component } from "react";
import Menu from "./MenuComponent";
import Dishes from '../shared/dishes';
import DishDetail from './DishDetailComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {Switch,Route,Redirect} from 'react-router-dom'

import { DISHES } from '../shared/dishes';

import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    // <Menu dishes={this.state.dishes} onClick={(dishId) => this.selectDish(dishId)} />
    // <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedItem)[0]} />

    HomePage(){
        return (
            <Home  dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]} 
            />
        );
    }
    MenuPage(){
        return (
            <Menu dishes = {this.state.dishes}/>
        );
    }

    DishDetailPage = ({match}) => {
        return(
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };
    render() {
        return (
            <React.Fragment>
                <Header />
                    <Switch>
                        <Route path="/home" component={()=>this.HomePage()} ></Route>
                        <Route exact path="/menu" component={()=>this.MenuPage()} ></Route>
                        <Route exact path="/contactus" component={()=><Contact />} ></Route>
                        <Route path='/menu/:dishId' component={this.DishDetailPage}></Route>

                        <Redirect to = '/home'> </Redirect>
                    </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;
