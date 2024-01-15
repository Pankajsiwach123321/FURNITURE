import React, { useEffect } from "react";
import Button from "./Button";
const HeaderContent = () => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="max-w-[1341px] px-3 mx-auto max-sm:py-[75px] py-[50px] max-md:py-[100px] max-[1200px]:py-[140px] pt-[157px] text-center"
      >
        <h1 className=" text-center font-poppines text-3xl sm:text-4xl md:text-5xl font-bold max-w-[908px] mx-auto leading-normal text-white">
          Awesome Design Best Furniture For Your Interior
        </h1>
        <p className="text-center font-poppines text-lg sm:text-xl font-normal leading-normal text-white pt-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus{" "}
        </p>
        <Button text="SHOP NOW" modify="sm:mt-[51px] mt-[31px]" />
      </div>
    </div>
  );
};

export default HeaderContent;
