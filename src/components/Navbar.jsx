import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navbarr(){
    return (

        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="home"> Let's get registered ! </Navbar.Brand>
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