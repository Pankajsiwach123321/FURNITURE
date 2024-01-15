import React from "react";
import Button from "./Button";

const Offer = () => {
  return (
    <div>
      <div className="max-w-[1341px] mx-auto px-3 mt-[118px]">
        <div className="flex flex-wrap flex-row -mx-3 ">
          <div data-aos="fade-up" className="md:w-1/2 w-full px-4 pt-6">
            <div className=" overflow-hidden group">
              <div
                className={`bg-[url(./assets/images/festivaloffer1.webp)] group-hover:scale-[110%] duration-300 bg-no-repeat bg-size p-[32px_2px_71px_2px]`}
              >
                <span
                  data-aos="fade-down"
                  className="flex items-start gap-[11px]"
                >
                  <hr className="sm:max-w-[96px] max-w-[50px] w-full h-[1px] bg-[#000000] border-t-[unset] mt-[14px]" />
                  <div>
                    <p className="text-black font-poppines text-lg sm:text-xl  font-normal leading-normal">
                      Festival Offer
                    </p>
                    <p className="text-[#BD7D41] font-poppines pt-[20px] text-lg sm:text-[35px]  font-bold leading-normal">
                      Upto 40% Off
                    </p>
                    <p className="text-[#424242] font-poppines text-xl font-normal leading-normal max-w-[300px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <Button
                      text="ADD TO CART"
                      modify="!py-[10px] !pl-[12px] !pr-[13px] mt-[38px]"
                    />
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" className="md:w-1/2 w-full px-4 pt-6">
            <div className=" overflow-hidden group">
              <div
                className={`bg-[url(./assets/images/festivaloffer2.webp)] group-hover:scale-[110%] duration-300 bg-no-repeat bg-size p-[32px_2px_71px_2px]`}
              >
                <span
                  data-aos="fade-down"
                  className="flex items-start gap-[11px]"
                >
                  <hr className="sm:max-w-[96px] max-w-[50px] w-full h-[1px] bg-[#000000] border-t-[unset] mt-[14px]" />
                  <div>
                    <p className="text-black font-poppines text-lg sm:text-xl  font-normal leading-normal">
                      Festival Offer
                    </p>
                    <p className="text-[#BD7D41] font-poppines pt-[20px] text-lg sm:text-[35px]  font-bold leading-normal">
                      Upto 40% Off
                    </p>
                    <p className="text-[#424242] font-poppines text-xl font-normal leading-normal max-w-[300px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <Button
                      text="ADD TO CART"
                      modify="!py-[10px] !pl-[12px] !pr-[13px] mt-[38px]"
                    />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
