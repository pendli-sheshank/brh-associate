import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./index.css";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="nav-container">
        <div>
          <Navbar.Brand href="#home">
            <img
              src="https://demo.berighthere.com/assests/img/newlandingpage/banner.png"
              className="nav-logo"
              alt="nav-logo"
            />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#link">OUR SPACES</Nav.Link>
              <Nav.Link href="#link">SERVICES</Nav.Link>
              <Nav.Link href="#link">ABOUT US</Nav.Link>
              <Nav.Link href="#link">PARTNER WITH US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
