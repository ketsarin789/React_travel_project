import React, { Component } from 'react';
import { Nav, Navbar,Jumbotron, NavbarBrand, Button,NavbarToggler, Collapse,
NavItem, NavLink ,Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
            isNavOpen: false,
            isModalOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    };
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event){
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        this.preventDefault();
    }
    render(){
        return (
            <React.Fragment>
                <Jumbotron fluid>
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <h1>Travel Site</h1>
                    </div>

                    <div className="dropdown mt-2">
                        <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenu"
                        data-toggle="dropdown"
                        aria-expanded="false"
                        >
                        More Travel
                        </button>
                        <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu"
                        >
                        <li>
                            <a className="dropdown-item" href="#">
                            Stay
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="col col-md-2">
                        <Button outline onClick={this.toggleModal}>
                        <i className="fa fa-user fa-lg btn-primary" />
                        Login
                        </Button>
                    </div>
                    </div>
                </div>
                </Jumbotron>
                
                <Navbar dark sticky="top" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/">
                    <img
                        src="/assets/images/orange.jpg"
                        alt="orange-logo"
                        width="30" height="30"
                    />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                        <NavLink className="nav-link" to="/home">
                            Home
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink className="nav-link" to="/Stay">
                            Stay
                        </NavLink>
                        </NavItem>
                        <navItem>
                        <navLink className="nav-link" to="/Car">
                            Cars
                        </navLink>
                        </navItem>
                        <navItem>
                        <NavLink className="nav-link" to="/flight">
                            Flight
                        </NavLink>
                        </navItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/packages">
                                Packages
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <label htmlFor="userName">Username</label>
                                <Input
                                type="text"
                                name="username"
                                id="username"
                                innerRef={(input) => (input.username = input)}
                                />
                            </FormGroup>
                            <FormGroup>
                            <label type="password">Password</label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                innerRef={(input) => (input.password = input)}
                            />
                            </FormGroup>
                            <FormGroup check>
                                <label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={input => input.remember = input} />
                                    Remember Me
                                </label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;