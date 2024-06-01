import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../styles/CustomCarousel.css";

const Carousel = ({ data}) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide + 1) % data.length);
  };

  const prevSlide = () => {
    setSlide((slide - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((slide + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.length, slide]);

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item, index) => (
        <div
          key={index}
          className={slide === index ? "slide" : "slide slide-hidden"}
        >
          <div className="content-container">
            <h3>{item.qualityrating}</h3>
            <h2>{item.heading}</h2>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>
          <img
            src={item.src}
            alt={item.alt}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ))}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setSlide(index);
            }}
            className={
              slide === index ? "indicator" : "indicator indicator-inactive"
            }
          ></button>
        ))}
      </span>
    </div>
  );
};

export default Carousel;
