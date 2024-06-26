import React from "react";
import ImgDivBg from "../assets/ImgDivBg.png";
import Shape from "../assets/Shape.png";
const ImgSecondDiv = () => {
  return (
    <div className="ImgSecondDiv-container d-flex align-items-center justify-content-center">
      <img src={ImgDivBg} alt="img" />
      <div className="ImgFirstDiv-overlay-text">
        <p className="ImgSecondDiv-line1">The asanas purify our body and</p>
        <p className="ImgSecondDiv-line1">keep it healthy, making it a</p>
        <p className="ImgSecondDiv-line1">suitable vehicle for the soul.</p>
        <div className="ImgSecondDiv-img d-flex justify-content-center mb-4">
          <img src={Shape} alt="img" />
        </div>
        <div className="d-flex justify-content-center">
          <button className="ImgSecondDiv-btn">see more</button>
        </div>
      </div>
    </div>
  );
};

export default ImgSecondDiv;
