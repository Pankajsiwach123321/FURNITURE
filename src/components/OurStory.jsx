import React, { useEffect } from "react";
import sofa from "../assets/images/chairexplore.webp";
import Button from "./Button";
const OurStory = () => {
  return (
    <div>
      <div className="max-w-[1341px] mx-auto px-3 py-[40px] sm:py-[80px] md:py-[134px]">
        <div className="flex flex-row flex-wrap -mx-3">
          <div
            data-aos="fade-up"
            className="lg:w-1/2 w-full px-3 flex justify-center"
          >
            <div className=" relative z-[1]">
              <img
                src={sofa}
                alt="sofa"
                className="w-full max-w-[456px] max-h-[498px]"
              />
              <div className="max-w-[416px] max-h-[336px] h-full w-full bg-[linear-gradient(270deg,#8C939B_0%,#243040_100%)] -z-[1] absolute -left-[50px] -top-[20px] sm:-top-[64px]"></div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="lg:w-1/2 w-full  px-3 pt-6 lg:pt-0"
          >
            <div className="max-w-[596px] mx-auto">
              <span className="flex items-center gap-[11px]">
                <hr className="max-w-[96px] w-full h-[1px] bg-[#000000] border-t-[unset]" />
                <p className="text-[#BD7D41] font-poppines text-lg sm:text-xl text-center font-normal leading-normal">
                  Welcome Our Story
                </p>
              </span>
              <h2 className="text-[#243040] font-poppines text-2xl sm:text-[35px] leading-normal font-bold max-w-[436px] pt-4 lg:pt-[19px]">
                We create the product you tell us you wish existed.
              </h2>
              <p className="max-w-[596px] font-poppines bg-story text-lg text-[#000000b3] font-normal pt-4 lg:pt-[19px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                faucibus, urna at pulvinar porta, augue lorem ullamcorper orci,
                non rhoncus nisi neque sit amet nibh. Phasellus consectetur
                semper ante et mattis
              </p>
              <Button text="READ MORE" modify="lg:mt-[34px] mt-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
