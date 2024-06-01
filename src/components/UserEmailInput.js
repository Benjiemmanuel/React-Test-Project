import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import "../styles/UserEmailInput.css";

const UserEmailInput = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isMouseOverButton, setIsMouseOverButton] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
    setIsMouseOverButton(false); // Reset isMouseOverButton state when button is clicked
  };

  const handleMouseOver = () => {
    setIsMouseOverButton(true);
  };

  const handleMouseOut = () => {
    setIsMouseOverButton(false);
  };

  return (
    <div className="max-w-full mb-4 flex flex-col items-center mx-auto p-6 bg-[#F1E4E4]">
      <h2 className="text-17px font-semibold mb-4">
        SIGN UP FOR OFFERS AND LATEST ARRIVALS
      </h2>
      <div className="flex items-center justify-center w-full">
        <input
          type="email"
          placeholder="Enter your email address..."
          className="flex-1 py-2 px-2 border border-black focus:outline-none"
          style={{ maxWidth: "calc(33% - 50px)" }}
        />
        <button
          className={`button flex items-center px-4 py-2  ${
            isButtonClicked || isMouseOverButton
              ? "bg-transparent"
              : "bg-[#000]"
          } text-white rounded-r-sm focus:outline-none`}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <AiOutlineMail
            className={`h-6 w-6 mr-2 ml-2  ${
              isButtonClicked || isMouseOverButton ? "text-black" : "text-white"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default UserEmailInput;
