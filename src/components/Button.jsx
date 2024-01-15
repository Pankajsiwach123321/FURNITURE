import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.function}
        className={`${props.modify}  py-3 sm:py-[19px] px-4 sm:px-12 shadow-[inset_18rem_0_0_0_#BD7D41] border-[1px] border-transparent hover:border-[#BD7D41] hover:shadow-[inset_0_0_0_0] hover:text-[#BD7D41] duration-300 font-poppines text-xl font-semibold leading-normal text-white text-center`}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
