import React from "react";
import latest1 from "../assets/images/latest1.webp";
import latest2 from "../assets/images/latest2.webp";
import latest3 from "../assets/images/latest3.webp";
import { Left2, Right2, Star } from "../assets/svg/icon";
import Button from "./Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const myproductdata = [
  {
    img: latest1,
  },
  {
    img: latest2,
  },
  {
    img: latest3,
  },
  {
    img: latest1,
  },
  {
    img: latest2,
  },
  {
    img: latest3,
  },
];
const Latest = () => {
  const first = React.useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 673,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const myshow = myproductdata.map((e, index) => (
    <div key={index} className=" px-3 py-12 ">
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
          <p className=" font-poppines text-xl sm:text-[24px] xl:text-[28px]  font-semibold leading-normal text-black ">
            ₹ 1200.00
          </p>
          <Button
            text="ADD TO CART"
            modify="!py-[10px] !px-[12px] !font-medium max-sm:text-base"
          />
        </div>
      </div>
    </div>
  ));
  return (
    <div className="third">
      <div className="max-w-[1341px] mx-auto px-3 md:pt-[80px] pt-[40px] lg:pt-[110px] relative">
        <span data-aos="fade-up" className="flex items-center gap-[11px]">
          <hr className="max-w-[96px] w-full h-[1px] bg-[#000000] border-t-[unset]" />
          <p className="text-[#BD7D41] font-poppines text-lg sm:text-xl text-center font-normal leading-normal">
            Shopping Store
          </p>
        </span>
        <h2
          data-aos="fade-down"
          className="text-[#243040]  font-poppines text-xl  sm:text-[35px] leading-normal font-bold max-w-[436px]"
        >
          Latest Deal
        </h2>
        <div className="pt-[18px]">
          <Slider {...settings} ref={first}>
            {myshow}
          </Slider>
        </div>
        <div className="flex justify-center items-center gap-5">
          <span
            onClick={() => first?.current?.slickPrev()}
            className=" 2xl:absolute 2xl:left-[-93px] cursor-pointer left-[-55px] top-[60%] bg-white px-[15px] 2xl:px-[29px] py-[27px] 2xl:py-[41px] rounded-full drop-shadow-[2px_7px_16px_#00000014]"
          >
            <Left2 />
          </span>
          <span
            onClick={() => first?.current?.slickNext()}
            className=" 2xl:absolute 2xl:right-[-93px] cursor-pointer right-[-55px] top-[60%] bg-white px-[15px] 2xl:px-[29px] py-[27px] 2xl:py-[41px] rounded-full drop-shadow-[2px_7px_16px_#00000014]"
          >
            <Right2 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Latest;
