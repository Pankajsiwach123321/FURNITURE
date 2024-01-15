import React, { useState } from "react";
import Button from "./Button";
import product1 from "../assets/images/product1.webp";
import product2 from "../assets/images/product2.webp";
import product3 from "../assets/images/product3.webp";
import product4 from "../assets/images/product4.webp";
import product5 from "../assets/images/product5.webp";
import product6 from "../assets/images/product6.webp";
import { Star } from "../assets/svg/icon";
const myproductdata = [
  {
    img: product1,
    aos: "fade-down",
  },
  {
    img: product2,
    aos: "fade-up",
  },
  {
    img: product3,
    aos: "fade-down",
  },
  {
    img: product4,
    aos: "fade-up",
  },
  {
    img: product5,
    aos: "fade-down",
  },
  {
    img: product6,
    aos: "fade-up",
  },
  {
    img: product1,
    aos: "fade-down",
  },
  {
    img: product2,
    aos: "fade-up",
  },
  {
    img: product3,
    aos: "fade-down",
  },
  {
    img: product4,
    aos: "fade-up",
  },
  {
    img: product5,
    aos: "fade-down",
  },
  {
    img: product6,
    aos: "fade-up",
  },
];
const OurProduct = () => {
  const [showmore, setshowmore] = useState(6);
  function showme() {
    if (showmore === 6) {
      setshowmore(0);
    } else {
      setshowmore(6);
    }
  }
  const myshow = myproductdata.slice(showmore).map((e, index) => (
    <div
      data-aos={e.aos}
      key={index}
      className="lg:w-1/3 sm:w-1/2 w-full px-3 pt-[24px]"
    >
      <div className="pt-[18px] pb-[53px] px-[15px] xl:px-[23px] duration-300 hover:shadow-[6px_13px_38px_0px] hover:shadow-[#0000001f]">
        <img src={e.img} alt="product1" className="w-full" />
        <div className="pt-[19px] flex justify-between items-center">
          <p className=" text-black font-poppines text-xl leading-normal font-medium">
            Single Sofa
          </p>
          <span className="flex items-center gap-[3px]">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </span>
        </div>
        <p className=" font-poppines text-lg font-normal leading-normal pt-4 text-[#4D4D4D]">
          Lorem ipsum dolor{" "}
        </p>
        <div className="flex justify-between items-center pt-4">
          <p className=" font-poppines text-[24px] xl:text-[28px]  font-semibold leading-normal text-black ">
            ₹ 1200.00
          </p>
          <Button
            text="ADD TO CART"
            modify="!py-[10px] !px-[12px] !font-medium max-[650px]:text-lg"
          />
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="max-w-[1341px] mx-auto px-3 pt-[40px] md:pt-[80px] lg:pt-[135px]">
        <span data-aos="fade-down" className="flex items-center gap-[11px]">
          <hr className="max-w-[96px] w-full h-[1px] bg-[#000000] border-t-[unset]" />
          <p className="text-[#BD7D41] font-poppines text-lg sm:text-xl text-center font-normal leading-normal">
            Shopping Store
          </p>
        </span>
        <div className="flex items-center  justify-between pt-4 lg:pt-[11px]">
          <h2
            data-aos="fade-up"
            className="text-[#243040]  font-poppines text-xl  sm:text-[35px] leading-normal font-bold max-w-[436px]"
          >
            Our Products
          </h2>
          <Button
            function={showme}
            text={showmore === 6 ? "VIEW ALL PRODUCT" : "VIEW LESS PRODUCT"}
            modify="max-[650px]:text-[12px] py-[10px] px-[16px]"
          />
        </div>
        <div className="flex flex-wrap flex-row -mx-3 pt-[66px]">{myshow}</div>
      </div>
    </div>
  );
};

export default OurProduct;
