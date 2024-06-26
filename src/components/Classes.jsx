import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Classes.css";
import classesImg from "../assets/classesImg.png";
const Classes = () => {
  return (
    <>
      <Container id="climb">
        <Row>
          <Col xs={{ order: "last" }} lg={{ order: "first" }}>
            <p className="classes-title">
              Rocks<span className="classes-title-span">Climbing</span>
            </p>
            <p className="classes-subtitle">1. Classes & Events</p>
            <p className="classes-desc">
              Hatha is the most classic yoga. Its origin is in the Raya Yoga of
              Patanjali and other classical texts such as Bhagavad Gita and
              Hatha Yoga Pradipika.
            </p>
            <div className="classes-blue-bar"></div>
            <p className="classes-details">
              10 modules
              <span className="classes-details-span">
                divided into 7 weekends
              </span>
            </p>
            <Row>
              <Col md="auto">
                <p className="classes-schedule">
                  Start
                  <span className="span-block">April 15</span>
                  <span className="span-block">20.00 hs</span>
                </p>
              </Col>
              <Col md="auto">
                <p className="classes-schedule">
                  Price
                  <span className="span-block">$ 900</span>
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex flex-column justify-content-around">
            <div className="d-flex justify-content-center">
              <img className="classes-img" src={classesImg} alt="img" />
            </div>
            <p className="classes-colored-text">
              walking in nature
              <span className="span-block">as a recreational</span>activity
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Classes;
