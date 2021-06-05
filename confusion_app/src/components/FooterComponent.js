import React, { Component } from 'react'
import {Link} from 'react-router-dom'

function Footer(props){
  
    function renderFooter() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 col-sm-4">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                 <Link to="/home" >Home </Link> 
                                 </li>
                                 <li>
                                 <Link to="/aboutus" >About </Link>
                                 </li>
                                 <li>
                                 <Link to="/menu" >Menu </Link>
                                 </li>
                                 <li>
                                 <Link to="/contactus" >contact </Link>
                                 </li>
                            </ul>
                        </div>
                        <div className="col-7 col-sm-4">
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
                        <div className="col-12 col-sm-4 align-self-center">
                            <div className="text-end icons">
                                <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="col-auto">
                            <p>© Copyright 2021 Ristorante Con Fusion</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    
        return (
            <React.Fragment>
                {renderFooter()}
            </React.Fragment>
        );
    

}

export default Footer;