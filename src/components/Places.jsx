import React from "react";
import PlacesCard from "./PlacesCard";
import "../css/Places.css";
const Places = () => {
  return (
    <div className="place-container">
      <div className="place-title">
        places to visit<span className="span-block">in autumn</span>
      </div>
      <PlacesCard />
      <div className="d-flex justify-content-center">
        <button className="place-btn">see more</button>
      </div>
    </div>
  );
};

export default Places;
