import React, { Component } from 'react'
import { Navbar, NavbarBrand } from "reactstrap";
import { Jumbotron, Container } from 'reactstrap';


class Header extends Component {
    constructor(props) {
        super(props);
    }

    renderNavbar() {
        return (
            <Navbar>
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
        );
    }
    renderJumbotron() {
        return (
            <Jumbotron fluid>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1 >Ristorante Con Fusion</h1>
                            <p className="lead">We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }

    render() {
        return (
            <React.Fragment>
                {this.renderNavbar()}
                {this.renderJumbotron()}
            </React.Fragment>
        );
    }

}

export default Header;