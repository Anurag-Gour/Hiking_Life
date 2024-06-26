import React from "react";
import bullet from "../assets/BlueCross.png";
import "../css/RecoverSection.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hiking from "../assets/ECHiking.png";
import Activities from "../assets/ECActivities.png";
import Mountain from "../assets/ECMountain.png";
import ListGroup from "react-bootstrap/ListGroup";
import RecoverImg from "../assets/RecoverSection.png";
const RecoverSection = () => {
  return (
    <div>
      <div className="recover-section-container">
        <div className="recover-title">
          <div className="recover-start-bullet">
            <img src={bullet} alt="img" />
          </div>
          <p className="recover-section-title">
            HOW TO RECOVER FROM <span className="span-block">A HIKE</span>
          </p>
          <div className="blue-bar"></div>
        </div>
        <Container className="mt-5">
          <Row>
            <Col xs={{ order: "last" }} lg={{ order: "first" }}>
              <Row>
                <Col sm={"auto"}>
                  <img src={Mountain} alt="img" />
                </Col>
                <Col>
                  <ListGroup as="ul" variant="flush" className="custom-list">
                    <ListGroup.Item as="li">-Lorem Ipsum</ListGroup.Item>
                    <ListGroup.Item as="li">
                      -Dolor sit amet consectetur{" "}
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      -Adipiscing elit aptent
                    </ListGroup.Item>
                    <ListGroup.Item as="li">-Torquent, interdum</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={"auto"}>
                  <img src={Activities} alt="img" />
                </Col>
                <Col>
                  <ListGroup as="ul" variant="flush" className="custom-list">
                    <ListGroup.Item as="li">-Fusce etiam augue</ListGroup.Item>
                    <ListGroup.Item as="li">
                      -Dignissim at euismod
                    </ListGroup.Item>
                    <ListGroup.Item as="li">-Libero montes,</ListGroup.Item>
                    <ListGroup.Item as="li">
                      -Adipiscing elit aptent
                    </ListGroup.Item>
                    <ListGroup.Item as="li">-Torquent, interdum</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={"auto"}>
                  <img src={Hiking} alt="img" />
                </Col>
                <Col>
                  <ListGroup as="ul" variant="flush" className="custom-list">
                    <ListGroup.Item as="li">-Libero montes,</ListGroup.Item>
                    <ListGroup.Item as="li">
                      -Adipiscing elit aptents
                    </ListGroup.Item>
                    <ListGroup.Item as="li">-Torquent, interdum</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Col>
            <Col className="d-flex flex-column justify-content-around">
              <div className="d-flex justify-content-center">
                <img className="classes-img" src={RecoverImg} alt="img" />
              </div>
              <p className="classes-colored-text text-center">
                Make Sure Your
                <span className="span-block">Gear Fits</span>
              </p>
            </Col>
          </Row>
        </Container>
        <div className="recover-end-bullet">
          <img src={bullet} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default RecoverSection;
