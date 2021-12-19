import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../Navbar/index.css";

const Navigationbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="=logo"
              src="https://berighthere.com/assests/img/newlandingpage/banner.png"
              alt="brand-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="navi-flex" id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <a className="home">HOME</a> <span>|</span>
              </Nav.Link>
              <Nav.Link href="#">
                <a className="hilight"> OUR SPACES</a> <span>|</span>
              </Nav.Link>
              <Nav.Link href="#">
                <a className="hilight">SERVICES</a> <span>|</span>
              </Nav.Link>
              <Nav.Link href="#">
                <a className="hilight">ABOUT US</a> <span>|</span>
              </Nav.Link>
              <Nav.Link href="#">
                <a className="hilight">PARTNER WITH US</a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
