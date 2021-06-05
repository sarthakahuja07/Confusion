import React from 'react';

function Contact(props) {
    return (
        <div className="container">
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
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.8400800729014!2d77.0215414502638!3d28.454236782402553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d183a93523829%3A0x6ba91f885f42cc25!2s4%2F75%2C%20Gali%20Number%204%2C%20Shivaji%20Nagar%2C%20Sector%2011%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1622890497774!5m2!1sen!2sin" width="400" height="300"  allowfullscreen="" loading="lazy"></iframe>

                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;