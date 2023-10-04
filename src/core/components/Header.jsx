import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import About from './About';

// import {
//     Jumbotron, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
//     Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label
// } from 'reactstrap';

import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="./home">Fox TRANSPORT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="./home">Home</Nav.Link>
                        <Nav.Link href="./about">About</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="./Contact">Contact Us</Nav.Link>
                        <Nav.Link href="./SignUp">sign up</Nav.Link>
                        <Nav.Link href="./login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Header