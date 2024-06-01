import React from "react";
import jsonData from "../Data/subNavbarData.json";

const SubNavbar = ({ gap }) => {
  return (
    <nav className={`bg-white`}>
      <div className="container mx-auto">
        <ul
          className={`flex justify-center text-center font-medium gap-${gap}`}
        >
          {jsonData.links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-sm text-[#333333] hover:text-gray-500"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SubNavbar;
