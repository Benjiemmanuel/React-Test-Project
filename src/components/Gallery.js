import React from "react";
import galleryData from "../Data/galleryData.json";
import "../styles/Gallery.css";

const Gallery = () => {
  return (
    <div className="grid-container items-center cursor-pointer justify-center ml-28 mr-28 mt-8">
      {galleryData.map((item) => (
        <div className="grid-item  justify-center items-center" key={item.id}>
          <img className="mt-8" src={item.image} alt={`Image ${item.id}`} />
          <p className="text-15px font-bold text-[#000000]">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
