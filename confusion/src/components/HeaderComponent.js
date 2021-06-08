import React, { Component } from "react";
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
	NavbarText,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Col,
	Form,
	FormGroup,
	Label,
	Input,
} from "reactstrap";
import { Jumbotron, Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false,
		};
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		});
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	}
	resetToggle() {
		this.setState({ isNavOpen: false });
	}

	handleLogin(e) {
		e.preventDefault();
		alert("Username: " + e.target[0].value + " Password: " + e.target[1].value
			+ " Remember: " + e.target[2].checked);
		this.toggleModal();
	}

	renderNavbar() {
		return (
			<Navbar light expand="md">
				<div className="container">
					<NavbarBrand>
						{" "}<Link to="/home">
							<img
								src="assets/images/logo.png"
								width="41px"
								height="30px"
								alt="Ristorante Con Fusion"
							/>{" "}
						</Link>{" "}
					</NavbarBrand>
					<NavbarToggler onClick={() => this.toggleNav()} />
					<Collapse isOpen={this.state.isNavOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink
									className="nav-link"
									onClick={() => this.resetToggle()}
									to="/home"
								>
									<span className="fa fa-home fa-lg" /> Home
                </NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className="nav-link"
									onClick={() => this.resetToggle()}
									to="/aboutus"
								>
									<span className="fa fa-info fa-lg" /> About Us
                </NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className="nav-link"
									onClick={() => this.resetToggle()}
									to="/menu"
								>
									<span className="fa fa-list fa-lg" /> Menu
                </NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className="nav-link"
									onClick={() => this.resetToggle()}
									to="/contactus"
								>
									<span className="fa fa-address-card fa-lg" /> Contact Us
                </NavLink>
							</NavItem>
							<NavItem className="ml-3">
								<Button
									outline
									color="success"
									onClick={() => this.toggleModal()}
								>
									<i className="fa fa-user mr-2 " aria-hidden="true" />
                  Login
                </Button>
							</NavItem>
						</Nav>
					</Collapse>
				</div>
			</Navbar>
		);
	}
	renderJumbotron() {
		return (
			<Jumbotron fluid className="mb-5">
				<div className="container">
					<div className="row row-header">
						<div className="col-12 col-sm-6">
							<h1>Ristorante Con Fusion</h1>
							<p className="lead">
								We take inspiration from the World's best cuisines, and create a
								unique fusion experience. Our lipsmacking creations will tickle
								your culinary senses!
              </p>
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
				<Modal
					isOpen={this.state.isModalOpen}
					toggle={() => this.toggleModal()}
				>
					<ModalHeader toggle={() => this.toggleModal()}>Login</ModalHeader>
					<ModalBody>
						<Form onSubmit={e => this.handleLogin(e)}>
							<FormGroup>
								<Label htmlFor="username">Username</Label>
								<Input type="text" id="username" name="user" />
							</FormGroup>
							<FormGroup>
								<Label htmlFor="password">Password</Label>
								<Input type="password" id="password" name="password" />
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input type="checkbox" name="remember" />
                  Remember me
                </Label>
							</FormGroup>
							<Button
								type="submit"
								value="submit"
								color="primary"
								className="mt-4"
							>
								Login
              </Button>
						</Form>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}

export default Header;
