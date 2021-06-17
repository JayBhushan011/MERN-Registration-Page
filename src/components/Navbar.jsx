import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navbarr(){
    return (

        <Navbar fixed = "top" bg="light" variant="light" expand="lg">
        <Navbar.Brand href="home"> Brand Name </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="home"> Register </Nav.Link>
                <Nav.Link href="login"> Login </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Navbarr;