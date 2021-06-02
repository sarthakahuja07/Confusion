import React, { useState, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import Dishes from './shared/dishes';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			dishes: Dishes
		}
	}

	render() {
		return (
			<div>
				<Navbar dark color="primary">
					<div className="container">
						<NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
					</div>
				</Navbar>
				<Menu dishes={Dishes}/>
			</div>
		);
	}
}

export default App;
