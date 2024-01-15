import React from "react";

const Loader = () => {
  return (
    <div>
      <div className=" min-h-screen fixed top-0 left-0 bg-white z-[10] w-full flex justify-center items-center">
        <div className=" w-10 h-10 border-t-[2px] border-t-[#BD7D41] animate-spin rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
