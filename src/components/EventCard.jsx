import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Hiking from "../assets/ECHiking.png";
import Activities from "../assets/ECActivities.png";
import Mountain from "../assets/ECMountain.png";
import "../css/EventSection.css";

const EventCard = () => {
  return (
    <div>
      <CardGroup>
        <Card className="card-custom">
          <Card.Img
            variant="top"
            src={Activities}
            className="card-img-custom"
          />
          <Card.Body>
            <Card.Title className="card-title-custom">Activities</Card.Title>
            <Card.Text className="card-text-custom">
              Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie
              posuere
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-custom">
          <Card.Img variant="top" src={Hiking} className="card-img-custom" />
          <Card.Body>
            <Card.Title className="card-title-custom">Hiking</Card.Title>
            <Card.Text className="card-text-custom">
              Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie
              posuere
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-custom">
          <Card.Img variant="top" src={Mountain} className="card-img-custom" />
          <Card.Body>
            <Card.Title className="card-title-custom">Mountains</Card.Title>
            <Card.Text className="card-text-custom">
              Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie
              posuere
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default EventCard;
