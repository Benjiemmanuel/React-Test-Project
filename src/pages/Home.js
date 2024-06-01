import React from "react";
import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Plans from "../components/Plans";
import CarouselDisplay from "../components/CarouselDisplay";
import NewArrived from "../components/NewArrived";
import Gallery from "../components/Gallery";
import { ProductMessage } from "../components/ProductMessage";
import UserEmailInput from "../components/UserEmailInput";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="subnav">
        <SubNavbar gap={5} />
      </div>
      <Plans />
      <CarouselDisplay />
      <NewArrived />
      <Gallery />
      <ProductMessage />
      <UserEmailInput />
    </div>
  );
};

export default Home;
