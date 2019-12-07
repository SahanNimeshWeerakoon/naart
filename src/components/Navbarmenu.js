import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Navbarmenu = () => {
    return (
        <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            </Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#gallery">Gallery</Nav.Link>
                    <Nav.Link href="#about">Who Am I???</Nav.Link>
                    <Nav.Link href="#contact">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbarmenu