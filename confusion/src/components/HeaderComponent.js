import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from "reactstrap";
import { Jumbotron, Container } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
       resetToggle(){
        this.setState({isNavOpen: false})
    }

    renderNavbar() {
        return (
            <Navbar light expand="md">
                <div className="container">
                    <NavbarBrand > <Link to="/home"><img src="assets/images/logo.png" width="41px" height="30px" alt='Ristorante Con Fusion' ></img> </Link> </NavbarBrand>
                    <NavbarToggler onClick={() => this.toggleNav()} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" onClick={()=>this.resetToggle()} to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" onClick={()=>this.resetToggle()} to='/about'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" onClick={()=>this.resetToggle()} to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" onClick={()=>this.resetToggle()} to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
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