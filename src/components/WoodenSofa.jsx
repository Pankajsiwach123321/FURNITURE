import React from "react";
import Button from "./Button";
import Woodensof from "../assets/images/woodensofa.webp";
const WoodenSofa = () => {
  return (
    <div className="bg-[#F7F7F8] relative z-[1] mt-[40px] sm:mt-[80px] md:mt-[169px]">
      <div className="max-w-[1341px] mx-auto px-3  py-[40px] sm:pt-[75px]">
        <div className="flex lg:flex-row flex-wrap flex-col-reverse -mx-3">
          <div data-aos="fade-down" className="lg:w-1/3 w-full px-3">
            <span className="flex items-center gap-[11px]">
              <hr className="max-w-[96px] w-full h-[1px] bg-[#000000] border-t-[unset]" />
              <p className="text-[#BD7D41] font-poppines text-lg sm:text-xl text-center font-normal leading-normal">
                Shopping Store
              </p>
            </span>
            <h2 className="text-[#243040] max-w-[436px]  font-poppines text-2xl  sm:text-[35px] leading-normal font-bold pt-3 sm:pt-6">
              Wooden Sofa Starts From{" "}
              <span className=" text-nowrap">₹ 1200.00</span>
            </h2>
            <Button text="SHOP NOW" modify="sm:mt-[53px] mt-[25px]" />
          </div>
          <div
            data-aos="fade-up"
            className="lg:w-2/3 w-full px-3 flex justify-center"
          >
            <div className=" relative z-[1]">
              <img
                src={Woodensof}
                alt="woodensofa"
                className=" max-w-[745px] max-h-[395px] w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#243040] absolute right-0 z-[-1] max-lg:top-[0%] lg:bottom-[-18%] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[741px] w-full h-full max-h-[150px] sm:max-h-[270px]"></div>
    </div>
  );
};

export default WoodenSofa;
