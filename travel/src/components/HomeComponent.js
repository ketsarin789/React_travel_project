import React, { Component } from 'react';
import {CardImgOverlay,
    CardTitle,
} from "reactstrap";


class Home extends Component{
    render(){
        return (
            <div className="container">
                <div className="card mb-3">
                <img
                    width="200"
                    height="350"
                    src="/assets/images/beach.jpeg"
                    className="card-img-top"
                    alt="beach"
                />
                <div className="card-body">
                    <h5>Save 15% or me</h5>
                    <p>Plan your dream trip with gate a way deal</p>
                    <a href="https://www.booking.com/">Explore Deal</a>
                </div>
                </div>
                <br></br>
                <h5>What type of trip would you like</h5>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col-md-5 m-1">
                    <div className="card">
                    <img
                        src="/assets/images/northern light.jpeg"
                        width="100%"
                        height="100%"
                        alt="northern-light"
                    />
                    <CardImgOverlay>
                        <CardTitle>Natural Beauty</CardTitle>
                    </CardImgOverlay>
                    </div>
                    <a href="https://www.booking.com/">Find more activity</a>
                </div>
                <div className="col-md-5 m-1">
                    <div className="card">
                    <img
                        src="/assets/images/beach-vacation.jpg"
                        alt="beach"
                        width="100%"
                        height="100%"
                    />
                    <CardImgOverlay>
                        <CardTitle>Beach vacation</CardTitle>
                    </CardImgOverlay>
                    </div>
                    <a className="m-1" href="https://www.booking.com/">
                    Find More activity
                    </a>
                </div>
                </div>
                <br></br>
                <br></br>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col-md-5 m-1">
                    <div className="card">
                    <img
                        src="/assets/images/paragliding.jpg"
                        width="100%"
                        height="100%"
                        alt='paragliding'
                    />
                    <CardImgOverlay>
                        <CardTitle>Out Door activity</CardTitle>
                    </CardImgOverlay>
                    </div>
                    <a href="https://www.booking.com/">Find more activity</a>
                </div>
                <div className="col-md-5 m-1">
                    <div className="card">
                    <img
                        src="/assets/images/city.jpg"
                        alt="city"
                        width="100%"
                        height="100%"
                        
                    />
                    <CardImgOverlay>
                        <CardTitle>City Break</CardTitle>
                    </CardImgOverlay>
                    </div>
                    <a className="m-1" href="https://www.booking.com/">
                    Find More activity
                    </a>
                </div>
                </div>
            </div>
        );
    }
}

export default Home;