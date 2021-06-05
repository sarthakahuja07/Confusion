
import React, { useState } from "react";
import Menu from "./MenuComponents";
import DishDetail from './DishDetailComponent'
import Dishes from '../shared/dishes';
import Home from './HomeComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {Switch,Route,Redirect} from 'react-router-dom'

function Main() {

	const [dishes, setdishes] = useState(Dishes);

	function HomePage(){
        return (
            <Home />
        );
    }
     function MenuPage(){
        return (
            <Menu dishes = {dishes}/>
        );
    }

	return (
		<div >
			<React.Fragment>
				<Header />
				<Switch>
					<Route path="/home" component={() => HomePage()} ></Route>
					<Route exact path="/menu" component={() => MenuPage()} ></Route>
					<Redirect to='/home'> </Redirect>
				</Switch>
				<Footer />
			</React.Fragment>
		</div>
	);
}

export default Main;
