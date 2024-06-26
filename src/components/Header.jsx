import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/Header.css";
import logo from "../assets/logo.png";
import mImg from "../assets/headerMobileImg.png";
const Header = () => {
  return (
    <div className="nav-main-div" id="home">
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="img"
              src={logo}
              width="219"
              height="61"
              className="d-inline-block align-bottom"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar-nav">
              <Nav.Link href="#home" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="#class" className="nav-link">
                Class
              </Nav.Link>
              <Nav.Link href="#promo" className="nav-link">
                Promo
              </Nav.Link>
              <Nav.Link href="#online" className="nav-link">
                Online Class
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="home" className="mobile-img">
        <img src={mImg} alt="img" />
      </div>
      <div className="overlay-text">
        <p className="line1">
          Discover your<span className="overlay-text-span"> next Hike</span>
        </p>
        <p className="line2">
          Discover your<span className="overlay-text-span"> next Hike</span>
        </p>
        <p className="line3">
          Lorem ipsum dolor sit amet,
          <span className="overlay-text-span">consectetur</span> adipiscing
          elit,sed do.
        </p>
      </div>
    </div>
  );
};

export default Header;
