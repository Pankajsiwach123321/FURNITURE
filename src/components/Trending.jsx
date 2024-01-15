import React from "react";
import { Left, Right, Star } from "../assets/svg/icon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trending1 from "../assets/images/store1.webp";
import trending2 from "../assets/images/store2.webp";
import trending3 from "../assets/images/store3.webp";
const sliderdata = [
  { img: trending1 },
  { img: trending2 },
  { img: trending3 },
  { img: trending1 },
  { img: trending2 },
];
const Trending = () => {
  const first = React.useRef(null);
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1246,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const myslider = sliderdata.map((e, index) => (
    <div className="pr-[21px] " key={index}>
      <div className="card bg-white p-[15px_12px_27px_17px]  cursor-pointer">
        <img src={e.img} alt="trendingone" className="w-full" />
        <div className="flex items-center justify-between gap-[47px] pt-[13px]">
          <p className="text-black font-poppines text-nowrap text-xl font-medium leading-normal">
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
        <span className="flex text-nowrap items-center gap-[6px] pt-2">
          <p className="text-nowrap text-black  font-poppines text-[28px] font-semibold leading-normal">
            ₹ 1200.00
          </p>
          <p className="text-[11px] text-nowrap text-[#C4C4C4] font-poppines font-normal leading-normal">
            ₹ 1200.00
          </p>
        </span>
      </div>
    </div>
  ));

  return (
    <div className="bg-[#F7F7F8] second  relative z-[1] overflow-x-clip">
      <div className="max-w-[1341px] mx-auto pl-3 mt-[40px] pt-[40px] md:mt-[80px] lg:mt-[132px] pb-[98px]">
        <div className="flex flex-row flex-wrap -mx-3">
          <div
            data-aos="fade-down"
            className="md:w-5/12 w-full px-3 relative z-[2]"
          >
            <span className="flex items-center gap-[11px]">
              <hr className="max-w-[96px] w-full h-[1px] bg-[#000000] border-t-[unset]" />
              <p className="text-[#BD7D41] font-poppines text-lg sm:text-xl text-center font-normal leading-normal">
                Shopping Store
              </p>
            </span>
            <h2 className="text-[#243040]  font-poppines text-xl pt-[29px]  sm:text-[35px] leading-normal font-bold max-w-[436px]">
              Buy trending furniture Products.
            </h2>
            <p className="text-[#4B4B4B] font-poppines text-lg font-normal leading-normal max-w-[422px] pt-[19px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              faucibus, urna at pulvinar porta
            </p>
            <div className="flex items-center gap-[14px] mt-[39px]">
              <span
                className="bg-white py-5 px-[10px] rounded-[10px] cursor-pointer duration-300 hover:bg-transparent hover:shadow-[inset_18rem_0_0_0_#BD7D41]"
                onClick={() => first?.current?.slickPrev()}
              >
                <Left />
              </span>
              <span
                className="bg-white py-5 px-[10px] rounded-[10px] cursor-pointer duration-300 hover:bg-transparent hover:shadow-[inset_18rem_0_0_0_#BD7D41]"
                onClick={() => first?.current?.slickNext()}
              >
                <Right />
              </span>
            </div>
          </div>
          <div
        
            className="md:w-7/12 w-full px-3 pt-6 md:pt-0"
          >
            <Slider {...settings} ref={first}>
              {myslider}
            </Slider>
          </div>
        </div>
      </div>
      <div className="2xl:max-w-[741px] max-w-[300px] lg:max-w-[500px] xl:max-w-[600px] max-h-[300px] md:max-h-[417px] bg-[linear-gradient(180deg,#243040_0%,#8B929B_100%)] w-full z-[0] h-full absolute right-0 bottom-0 md:top-[-153px]"></div>
    </div>
  );
};

export default Trending;
