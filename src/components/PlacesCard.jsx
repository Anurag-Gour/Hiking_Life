import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import MountainLoop from "../assets/MountainLoop.png";
import NationalPark from "../assets/NationalPark.png";
import CanyonTrail from "../assets/CanyonTrail.png";
const PlacesCard = () => {
  return (
    <CardGroup>
      <Card className="place-card-custom">
        <Card.Img
          variant="top"
          src={MountainLoop}
          className="place-card-img-custom"
        />
        <Card.Body>
          <Card.Title className="place-card-title-custom">
            Mountain Loop
          </Card.Title>
          <Card.Text className="place-card-text-custom">
            Lorem ipsum sit amet, consectetur adipisicing...
          </Card.Text>
        </Card.Body>
        <Card.Footer className="place-card-footer-custom">
          Location <span className="place-card-custom-span"> 0.3 miles.</span>
        </Card.Footer>
      </Card>
      <Card className="place-card-custom">
        <Card.Img
          variant="top"
          src={NationalPark}
          className="place-card-img-custom"
        />
        <Card.Body>
          <Card.Title className="place-card-title-custom">
            National Park
          </Card.Title>
          <Card.Text className="place-card-text-custom">
            Lorem ipsum sit amet, consectetur adipisicing...
          </Card.Text>
        </Card.Body>
        <Card.Footer className="place-card-footer-custom">
          Location <span className="place-card-custom-span"> 0.2 miles.</span>
        </Card.Footer>
      </Card>
      <Card className="place-card-custom">
        <Card.Img
          variant="top"
          src={CanyonTrail}
          className="place-card-img-custom"
        />
        <Card.Body>
          <Card.Title className="place-card-title-custom">
            Canyon Trail
          </Card.Title>
          <Card.Text className="place-card-text-custom">
            Lorem ipsum sit amet, consectetur adipisicing...
          </Card.Text>
        </Card.Body>

        <Card.Footer className="place-card-footer-custom">
          Location <span className="place-card-custom-span"> 0.6 miles.</span>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default PlacesCard;
