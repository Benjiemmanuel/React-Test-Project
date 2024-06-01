import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const ProductMessage = () => {
  return (
    <div className="flex flex-col mt-12 ml-24 mr-24  items-center justify-center">
      <h2 className="text-center text-15px font-semibold">
        AFFORDABLE MEN AND WOMEN CLOTHING
      </h2>
      <p className="text-center text-14px mt-4">
        AT MISSREBEL, WE PROVIDE WOMEN'S CLOTHES THAT ARE STYLISH, HIGH QUALITY
        AND ON TREND. WE PRIDE OURSELVES ON BEING ONE OF THE LEADERS OF WOMEN'S
        CLOTHING ONLINE WITH AFFORDABLE QUALITY FASHION ITEMS THROUGHOUT OUR
        WEBSITE. OUR SELECTION OF CHEAP WOMEN'S CLOTHES INJECTS KEY FASHIONABLE
        PIECES INTO YOUR WARDROBE AT LOW PRICES. OUR EXTENSIVE RANGE OF DRESSES,
        BLAZERS, JUMPSUITS AND PLAYSUITS, SWEATSHIRTS, TOPS, COATS ANE MORE
        ENSURES THERE WILL BE SOMETHING FOR EVERYONE.
      </p>
      <div className="flex gap-4 mt-8 mb-8 cursor-pointer">
        <FaFacebook size={40} color="#3b5998" />
        <FaInstagram size={40} color="#e4405f" />
      </div>
    </div>
  );
};
