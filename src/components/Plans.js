import React from "react";
import EuroSign from "./EuroSign";
import "../styles/plans.css";

const Plans = () => {
  return (
    <div className="plancon flex mt-8 text-[#000000]">
      <div className="freeuk bg-[#FAEAEE] shadow-md  w-screen p-1 text-center mr-1">
        <h3 className="font-semibold text-md">FREE UK DELIVERY</h3>
        <p className="text-gray-600 text-sm flex justify-center gap-1">
          on orders over <EuroSign />
          35
        </p>
      </div>

      <div className="everything bg-[#FAEAEE] shadow-md text-center w-screen  p-1 ">
        <h3 className="font-semibold text-md">20% OFF EVERYTHING</h3>
        <p className="text-gray-600 text-sm">
          Checkout Code 'TAKE20' (exc sale)
        </p>
      </div>

      <div className="worldwidedelivery bg-[#FAEAEE] w-screen text-center shadow-md w-lg p-1 ml-1">
        <h3 className="font-semibold text-md">WORLDWIDE DELIVERY</h3>
        <p className="text-gray-600 text-sm flex justify-center gap-1">
          From <EuroSign /> 9.95
        </p>
      </div>
    </div>
  );
};

export default Plans;
