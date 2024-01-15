import React from "react";
import SliderBar from "./SliderBar";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <div className="bg-[url(./assets/images/headerimg.webp)] bg-no-repeat min-[1200px]:min-h-screen bg-cover bg-right sm:bg-left lg:bg-size">
      <SliderBar />
      <HeaderContent />
    </div>
  );
};

export default Header;
