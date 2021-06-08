import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

class Contact extends Component {
    constructor(props) {

        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            tel: "",
            box: false,
            select: "tel",
            feedback: "",
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
    }

    handleSubmit(e) {
        alert(JSON.stringify(this.state));
        e.preventDefault();
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });


    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }


    render() {
        const errors = this.validate(this.state.first_name, this.state.last_name, this.state.tel, this.state.email);

        return (
            <div className="container">
                <div className="row mt-5">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            Sector 11<br />
                                    Gurgaon<br />
                                    India<br />
                            <i className="fa fa-phone fa-lg"></i>:+91 9718253271<br />
                            <i className="fa fa-fax fa-lg"></i>: +91 9718253271<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:sarthak.ahuja0007@gmail.com">
                                confusion_food@gmail.com</a>
                        </address>

                        <div className="btn-group mt-5" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>

                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1 mt-md-0 mt-5">
                        <h5>Map of our Location</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.8400800729014!2d77.0215414502638!3d28.454236782402553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d183a93523829%3A0x6ba91f885f42cc25!2s4%2F75%2C%20Gali%20Number%204%2C%20Shivaji%20Nagar%2C%20Sector%2011%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1622890497774!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>

                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12 mb-5">
                        <h2>Submit Your Feedback</h2>
                    </div>

                    <div className="col-12">
                        <Form onSubmit={(e) => this.handleSubmit(e)}>
                            <FormGroup row>
                                <Label for="first_name" sm={2}>First Name</Label>
                                <Col sm={10}>
                                    <Input value={this.state.firstname}
                                        onChange={(e) => this.handleInputChange(e)} valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')} type="text" name="first_name" id="first_name" placeholder="First Name" />
                                    <FormFeedback>{errors.firstname}</FormFeedback>

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="last_name" sm={2}>Last Name</Label>
                                <Col sm={10}>
                                    <Input value={this.state.lastname}
                                        type="text" valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')} onChange={(e) => this.handleInputChange(e)} name="last_name" id="last_name" placeholder="Last Name" />
                                    <FormFeedback>{errors.lastname}</FormFeedback>

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="tel" sm={2}>Contact Tel.</Label>
                                <Col sm={10}>
                                    <Input type="tel" name="tel" id="tel" valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={this.handleBlur('telnum')} placeholder="Contact No." onChange={(e) => this.handleInputChange(e)} />
                                    <FormFeedback>{errors.telnum}</FormFeedback>

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" sm={2}>Email ID</Label>
                                <Col sm={10}>
                                    <Input type="email" valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')} name="email" id="email" placeholder="Email" onChange={(e) => this.handleInputChange(e)} />
                                    <FormFeedback>{errors.email}</FormFeedback>

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={{ size: 3, offset: 2 }} >
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" id="box" name="box" onChange={(e) => this.handleInputChange(e)} />{' '}
                                            May we contact you
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={{ size: 3, offset: 1 }} >
                                    <FormGroup>
                                        <Input type="select" onChange={(e) => this.handleInputChange(e)} name="select" id="select">
                                            <option>Tel.</option>
                                            <option>E mail</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="feedback" sm={2}>Your Feedback</Label>
                                <Col sm={10}>
                                    <Input type="textarea" name="feedback" id="feedback" rows="12" onChange={(e) => this.handleInputChange(e)} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="success">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>

                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;