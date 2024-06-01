import React, { useState } from "react";
import newArrivalsData from "../Data/newArrivalsData.json";
import QuickView from "./QuickView";

const NewArrived = () => {
  const [hoveredImageId, setHoveredImageId] = useState(null);

  return (
    <>
      <div className="flex flex-col w-full items-center">
        <h2 className="text-30px text-[#000000]">New Arrivals</h2>
        <div className="mt-4 text-13px flex flex-wrap pt-4 pb-4  w-full justify-center gap-4">
          {newArrivalsData.map((product) => (
            <div
              className="box-border flex flex-col items-center bg-[#fff] text-center border-none relative"
              key={product.id}
              style={{ width: "200px" }} // Set a fixed width for each div
            >
              <div
                className="relative"
                onMouseEnter={() => setHoveredImageId(product.id)}
                onMouseLeave={() => setHoveredImageId(null)}
              >
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="h-72 w-full"
                />
                {hoveredImageId === product.id && (
                  <img
                    src={product.hoverImage}
                    alt={product.name}
                    className="h-72 absolute top-0 left-0 w-full"
                  />
                )}
              </div>
              {hoveredImageId === product.id && <QuickView />}
              <div className="bg-[#F8F6F6] w-full text-center p-1 text-14px">
                <span className="text-[#CF0000] font-semibold">
                  {product.discountPrice}
                </span>{" "}
                <span className="text-[#95667D]">WITH CODE</span>{" "}
                <span className="font-bold text-[#000]">
                  {product.discountCode}
                </span>
              </div>
              <p className="text-[#000000] cursor-pointer">{product.name}</p>{" "}
              {/* Added cursor-pointer class */}
              <h3 className="text-[#000000] text-17px font-bold mt-3 mb-2 cursor-pointer">
                {product.price}
              </h3>{" "}
              {/* Added cursor-pointer class */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewArrived;
