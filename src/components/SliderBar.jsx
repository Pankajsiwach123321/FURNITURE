import React, { useState } from "react";
import logo from "../assets/images/logo.webp";
import { Logo } from "../assets/svg/icon";
import { Link, useLocation } from "react-router-dom";
const SliderBar = () => {
  const location = useLocation();
  const [navshow, setnavshow] = useState(false);
  console.log(navshow);
  function show() {
    setnavshow(!navshow);
  }
  if (navshow === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  const [search, setsearch] = useState(false);
  function showsearch() {
    setsearch(!search);
  }
  console.log(search);
  return (
    <div>
      <nav className="py-[15px]">
        <div className="max-w-[1341px] mx-auto px-3">
          <div className=" flex gap-[30px]  justify-between items-center">
            <ul>
              <li>
                <a href="#" className="flex items-center gap-[7px]">
                  <Logo className="w-full" />
                  <p className=" font-roboto font-bold text-[18px] sm:text-[33px] text-white">
                    FURNITURE
                  </p>
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-[17px] sm:gap-[40px]">
              <ul
                className={`${
                  navshow ? "max-lg:left-0" : "max-lg:left-[-100%]"
                } flex items-center lg:gap-[55px] gap-[23px] duration-300 max-lg:justify-center max-lg:absolute max-lg:top-0  max-lg:w-full z-[2] max-lg:h-full max-lg:bg-[#253140] max-lg:flex-col`}
              >
                <li>
                  <Link
                    onClick={show}
                    to="/"
                    className={`${
                      location.pathname === "/" &&
                      "webkitstrokes relative after:absolute after:bg-[#BD7D41]  after:bottom-[-12px] after:w-full after:left-0 after:duration-300 after:h-[3px]"
                    } font-roboto text-lg leading-normal font-normal text-white mynavhover webkitstroke`}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={show}
                    to="/about"
                    className={`${
                      location.pathname === "/about" &&
                      "webkitstrokes relative after:absolute after:bg-[#BD7D41]  after:bottom-[-12px] after:w-full after:left-0 after:duration-300 after:h-[3px]"
                    } font-roboto text-lg leading-normal font-normal text-white mynavhover webkitstroke`}
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={show}
                    to="/shop"
                    className={`${
                      location.pathname === "/shop" &&
                      "webkitstrokes relative after:absolute after:bg-[#BD7D41]  after:bottom-[-12px] after:w-full after:left-0 after:duration-300 after:h-[3px]"
                    } font-roboto text-lg leading-normal font-normal text-white mynavhover webkitstroke`}
                  >
                    SHOP
                  </Link>
                </li>
                <li>
                  <a
                    onClick={show}
                    href="#"
                    className="font-roboto text-lg leading-normal font-normal text-white mynavhover webkitstroke"
                  >
                    CONTACT US
                  </a>
                </li>
              </ul>
              <ul className="flex items-center gap-[28px]">
                <li>
                  <a
                    href="#"
                    className="font-roboto sm:relative flex items-center gap-1 z-[1] text-lg leading-normal font-normal text-white group"
                  >
                    <svg
                      onClick={showsearch}
                      className={`${
                        search &&
                        "sm:absolute sm:right-[12px] sm:top-[18px] sm:z-[2]"
                      }`}
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className=" group-hover:fill-[#BD7D41] duration-300"
                        d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z"
                        fill="white"
                      />
                    </svg>

                    <input
                      type="search"
                      placeholder="search here...."
                      className={` ${
                        search
                          ? "w-[200px] visible h-full duration-300"
                          : "w-0 invisible h-0  absolute"
                      }   p-[16px] max-sm:absolute max-sm:left-[12px] max-sm:z-[2] max-sm:max-h-[50px] max-sm:top-[75px]   lg:max-w-[150px] xl:max-w-full    left-0 top-0 border-[#BD7D41] border-[1px] bg-[#243040] outline-0`}
                    />
                  </a>
                </li>
                <li>
                  <a
                    // onClick={Opencart}
                    href="#"
                    className="font-roboto text-lg leading-normal font-normal text-white group"
                  >
                    <svg
                      width="26"
                      height="23"
                      viewBox="0 0 26 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className=" group-hover:fill-[#BD7D41] duration-300"
                        d="M24.974 16.3056H7.71508L8.58165 14.5692L22.98 14.5436C23.4669 14.5436 23.8843 14.2014 23.9712 13.7282L25.9652 2.74848C26.0174 2.46052 25.9391 2.164 25.7479 1.93876C25.6533 1.82791 25.5354 1.73862 25.4023 1.67708C25.2691 1.61554 25.124 1.58322 24.9769 1.58237L6.66013 1.5225L6.50362 0.798314C6.40508 0.336432 5.98194 0 5.50084 0H1.02307C0.751738 0 0.491515 0.106036 0.299652 0.294781C0.107788 0.483526 0 0.73952 0 1.00645C0 1.27337 0.107788 1.52937 0.299652 1.71811C0.491515 1.90686 0.751738 2.01289 1.02307 2.01289H4.67194L5.35592 5.21185L7.03979 13.2321L4.87192 16.7133C4.75934 16.8628 4.69153 17.0402 4.67616 17.2257C4.6608 17.4111 4.69849 17.597 4.78497 17.7625C4.95887 18.1018 5.30955 18.3156 5.69792 18.3156H7.518C7.12998 18.8226 6.9204 19.4401 6.92097 20.0747C6.92097 21.6885 8.25415 23 9.89455 23C11.5349 23 12.8681 21.6885 12.8681 20.0747C12.8681 19.4389 12.6537 18.8203 12.2711 18.3156H16.9401C16.5521 18.8226 16.3425 19.4401 16.3431 20.0747C16.3431 21.6885 17.6763 23 19.3167 23C20.9571 23 22.2903 21.6885 22.2903 20.0747C22.2903 19.4389 22.0758 18.8203 21.6932 18.3156H24.9769C25.5392 18.3156 26 17.8651 26 17.3092C25.9983 17.0425 25.8895 16.7873 25.6973 16.5993C25.5051 16.4113 25.2451 16.3057 24.974 16.3056ZM7.08617 3.50688L23.7742 3.56105L22.1396 12.5649L9.03088 12.5877L7.08617 3.50688ZM9.89455 20.9757C9.39026 20.9757 8.97871 20.5708 8.97871 20.0747C8.97871 19.5787 9.39026 19.1738 9.89455 19.1738C10.3988 19.1738 10.8104 19.5787 10.8104 20.0747C10.8104 20.3137 10.7139 20.5429 10.5421 20.7118C10.3704 20.8808 10.1374 20.9757 9.89455 20.9757ZM19.3167 20.9757C18.8124 20.9757 18.4008 20.5708 18.4008 20.0747C18.4008 19.5787 18.8124 19.1738 19.3167 19.1738C19.821 19.1738 20.2325 19.5787 20.2325 20.0747C20.2325 20.3137 20.136 20.5429 19.9643 20.7118C19.7925 20.8808 19.5596 20.9757 19.3167 20.9757Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <button
                onClick={show}
                className={`${
                  navshow ? " rotate-0 font-bold" : " rotate-90 font-medium"
                } text-[31px] max-lg:block hidden  text-white hover:text-[#BD7D41] duration-300  relative z-[2]`}
              >
                {navshow ? "x" : "|||"}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SliderBar;
