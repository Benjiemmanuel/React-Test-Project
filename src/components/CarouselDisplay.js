import React from "react";
import Carousel from "./Carousel";
import carouselData from "../Data/CarouselData.json"; // Importing the default export
import "../styles/CustomCarousel.css"; // Import your custom carousel styles
function CarouselDisplay() {
  return (
    <div className="CarouselDisplay ">
      <Carousel data={carouselData.slides} />
    </div>
  );
}

export default CarouselDisplay;
