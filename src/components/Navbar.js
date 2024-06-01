import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaSearch, FaBars, FaCaretDown } from "react-icons/fa";
import SubNavbar from "./SubNavbar";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import { setNavbarScrolling } from "../redux/actions/navbarActions";
import "../styles/Navbar.css";

// Importing the GBP options from JSON
import gbpOptions from "../Data/gbpOptions.json";

const Navbar = () => {
  const isScrolling = useSelector((state) => state.isScrolling);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      dispatch(setNavbarScrolling(scrollTop > 0));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return (
    <nav
      className={`bg-[#FFFFFF] py-3 ${
        isScrolling ? "fixed top-0 w-full shadow-lg z-40" : ""
      }`}
    >
      <div className="mx-auto flex justify-between items-center">
        <div>
          <FaBars className="hamburger text-[#000000] text-3xl ml-4" />
        </div>
        {/* Company Name */}
        <div className="companyName ml-4 flex gap-8 justify-center items-center text-[#000000]">
          <a href="#" className="text-5xl  font-medium font-robot">
            missrebel
          </a>
          <div className="searchOnlyIcon  right-2 top-1/2 transform -translate-y-1/3 cursor-pointer">
            <FaSearch className="realsearchIcon w-4 h-4 text-gray-400 cursor-pointer" />
          </div>
        </div>
        {/* Search Bar or Subnavbar */}
        {!isScrolling ? (
          <div className="flex items-center justify-center">
            <div className="relative">
              <input
                type="text"
                className="navInput text-sm text-gray focus:border-b-gray-300 border-b-2 border-b-gray-300 pl-2 pr-6 py-1 focus:outline-none focus:border-transparent w-72" // Adjusted width here
                placeholder="Search for Product"
              />
              <div className="searchIcon absolute right-2 top-1/2 transform -translate-y-1/3 cursor-pointer">
                <FaSearch className="realsearchIcon w-4 h-4 text-gray-400 cursor-pointer" />
              </div>
            </div>
          </div>
        ) : (
          <div className="subnav flex items-center gap-5">
            {/* Subnavbar content */}
            <SubNavbar gap={4} />
          </div>
        )}

        {/* GBP Dropdown and Sign In/Join */}
        <div className="gbp-signin flex items-center text-white ml-4 gap-5">
          <div className="relative mr-4">
            <button className="text-[#000000] font-medium focus:outline-none text-sm">
              GBP{" "}
              <span className="inline-block ml-1">
                <FaCaretDown />
              </span>
            </button>
            {/* Dropdown menu */}
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10 hidden">
              <ul className="py-1">
                {gbpOptions.map((option, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                    >
                      {option.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sign In/Join */}
          <div>
            <a
              href="#"
              className="text-sm font-medium text-[#000000] cursor-pointer"
            >
              Sign In / Join
            </a>
          </div>
        </div>

        {/* Love Icon with Count */}
        <div className="shopingIcons text-[#000000] ml-2 mr-16 font-medium flex items-center gap-2">
          {/* Love Icon with Count */}
          <div className="relative flex items-center mr-4">
            <AiOutlineHeart className="w-9 h-9 fill-current mr-1" />
            <span className="absolute text-[#FFFFFF] top-2 right-1 -mt-1 cursor-pointer -mr-1 bg-red-500 text-xs rounded-full px-1">
              0
            </span>
          </div>

          {/* Shopping Bag Icon with Count */}
          <div className="relative flex items-center">
            <AiOutlineShopping className="w-9 h-9 fill-current mr-1" />
            <span className="absolute text-[#FFF] top-3 right-2 -mt-1 -mr-1 cursor-pointer bg-red-500 text-xs rounded-full px-1">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
