import React from "react";
import "../css/ImgDiv.css";
import ImgDivBg from "../assets/ImgDivBg.png";
const ImgFirstDiv = () => {
  return (
    <>
      <div
        id="promo"
        className="ImgFirstDiv-container d-flex align-items-center justify-content-center"
      >
        <img src={ImgDivBg} alt="img" />
        <div className="ImgFirstDiv-overlay-text">
          <p className="ImgFirstDiv-line1">
            BIG BEND NATIONAL PARK HIKING GUIDE
          </p>
          <p className="ImgFirstDiv-line2">
            this hike is the next best option.
          </p>
          <p className="ImgFirstDiv-line3">LOREM IPSUM</p>
          <button className="ImgFirstDiv-btn">see more</button>
        </div>
      </div>
    </>
  );
};

export default ImgFirstDiv;
