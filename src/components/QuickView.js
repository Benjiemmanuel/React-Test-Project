import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import "../styles/QuickView.css";
import ViewQuickButton from "./ViewQuickButton";

const QuickView = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="quick-view"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-center gap-4 p-1 bg-gray-200 w-full">
        <FaEye className="eyeIcon font-bold" />
        <span className="text-[#000] font-bold">QUICK VIEW</span>
      </div>
      {isDropdownOpen && <ViewQuickButton />}
    </div>
  );
};

export default QuickView;
