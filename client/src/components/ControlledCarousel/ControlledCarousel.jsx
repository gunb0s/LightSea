import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./ControlledCarousel.css";

const ControlledCarousel = () => {
  return (
    <Carousel showArrows={true}>
      <div>
        <img src="sampleImage/Resource/1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="sampleImage/Resource/2.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="sampleImage/Resource/3.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default ControlledCarousel;
