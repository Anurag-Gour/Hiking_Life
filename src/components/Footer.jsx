import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import "../css/Footer.css";
const Footer = () => {
  return (
    <div id="contact" className="footer-main-div">
      <Container className="p-5">
        <Row>
          <Col>
            <p className="footer-left-l1 p-2">About</p>
            <p className="footer-left-l2 p-2">
              Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do
              eiusmod tempor incididunt ultimam quantum
            </p>
            <img className="p-2" src={logo} alt="img" />
          </Col>
          <Col>
            <Row>
              <Col>
                <h5 className="footer-right-head">About</h5>
                <ul className="list-unstyled">
                  <li className="footer-link">
                    <a href="#climb">Team</a>
                  </li>
                  <li className="footer-link">
                    <a href="#promo">Join us</a>
                  </li>
                  <li className="footer-link">
                    <a href="#div1">Ethic</a>
                  </li>
                  <li className="footer-link">
                    <a href="#home">Goals</a>
                  </li>
                </ul>
              </Col>
              <Col>
                <h5 className="footer-right-head">About</h5>
                <ul className="list-unstyled">
                  <li className="footer-link">
                    <a href="#climb">Team</a>
                  </li>
                  <li className="footer-link">
                    <a href="#promo">Join us</a>
                  </li>
                  <li className="footer-link">
                    <a href="#div1">Ethic</a>
                  </li>
                  <li className="footer-link">
                    <a href="#home">Goals</a>
                  </li>
                </ul>
              </Col>
              <Col>
                <h5 className="footer-right-head">About</h5>
                <ul className="list-unstyled">
                  <li className="footer-link">
                    <a href="#climb">Team</a>
                  </li>
                  <li className="footer-link">
                    <a href="#promo">Join us</a>
                  </li>
                  <li className="footer-link">
                    <a href="#div1">Ethic</a>
                  </li>
                  <li className="footer-link">
                    <a href="#home">Goals</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
