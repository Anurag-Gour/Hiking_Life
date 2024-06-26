import React from "react";
import mImg from "../assets/MidMIng.png";
import "../css/MiddleSection.css";
const MiddleSection = () => {
  return (
    <div id="div1" className="middle-main-div">
      <div className="mobile-img">
        <img src={mImg} alt="img" />
      </div>
      <div className="middle-overlay-text">
        <p className="middle-line1">
          walking in nature
          <span className="middle-overlay-text-span"> as a recreational </span>
          activity
        </p>
        <p className="middle-line2">.activities</p>
        <p className="middle-line3">
          Lorem ipsum dolor sit amet
          <span className="middle-overlay-text-span">consectetur adip.</span>
        </p>
      </div>
    </div>
  );
};

export default MiddleSection;
