import React, { Component } from "react";
import {Button} from 'reactstrap'

class Contact extends Component {
    render(){
        return (
            <div className="container">
                <h4>Help Center</h4>
                <h2>Welcome To Help Center</h2>
                <p>Sign in to contact Customer support</p>
                <div className="row">
                    <div className="col-6">
                        <h4>Live Chat</h4>
                        <p>
                            The fastest way to talk to one of our Customer Service agents
                            about your bookings.
                        </p>
                    </div>
                    <div className="col-6">
                        <h4>Call Us</h4>
                        <p>
                            For anything urgent, you can call us 24/7 at a local or
                            international phone number.
                        </p>
                        
                    </div>
                </div>
                <br></br>
                <div>
                    <Button className="btn-lg" color="primary">Sign in</Button>
                </div>
                <br></br>
                <a className="mt-1" href="#">Continue Without an account</a>
            </div>
            );
        }
    }

export default Contact;