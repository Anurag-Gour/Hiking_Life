import React from "react";
import EventCard from "./EventCard";
import bullet from "../assets/eventTitleBullet.png";
const EventSection = () => {
  return (
    <div id="class" className="event-section-container">
      <div className="event-title">
        <div className="event-start-bullet">
          <img src={bullet} alt="img" />
        </div>
        <p className="event-section-title">
          Hiking And Camping{" "}
          <span className="event-section-title-span">Classes</span>
        </p>
        <div className="blue-bar"></div>
      </div>
      <EventCard />
      <div className="event-end-bullet">
        <img src={bullet} alt="img" />
      </div>
    </div>
  );
};

export default EventSection;
