import React from "react";
import "../css/Climbing.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ClimbingImg from "../assets/Climbing.png";
const Climbing = () => {
  return (
    <div id="online" className="climbing-main-div pt-5">
      <Container>
        <Row>
          <Col xs={{ order: "last" }}>
            <p className="climbing-title">
              Mountaineering
              <span className="climbing-title-span">ice climbing</span>
            </p>
            <p className="climbing-subtitle">2. Activities</p>
            <p className="climbing-desc">
              Kundalini is the most classic yoga. Its origin is in the Raya Yoga
              of Patanjali and other classical texts such as Bhagavad Gita and
              Hatha Yoga Pradipika.
            </p>
            <div className="climbing-blue-bar"></div>
            <p className="climbing-details">
              17 modules
              <span className="climbing-details-span">
                divided into 5 weekends
              </span>
            </p>
            <Row>
              <Col md="auto">
                <p className="climbing-schedule">
                  Start
                  <span className="span-block">April 15</span>
                  <span className="span-block">20.00 hs</span>
                </p>
              </Col>
              <Col md="auto">
                <p className="climbing-schedule">
                  Price
                  <span className="span-block">$ 900</span>
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex flex-column justify-content-around">
            <div className="d-flex justify-content-center">
              <img className="climbing-img" src={ClimbingImg} alt="img" />
            </div>
            <p className="climbing-colored-text">
              walking in nature
              <span className="span-block">as a recreational</span>activity
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Climbing;
