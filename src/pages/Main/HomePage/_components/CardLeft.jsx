import React from "react";

const CardLeft = ({ title, description }) => {
  return (
    <div className="w-full h-fit px-24 flex items-center justify-between font-inter">
      <div className="w-full max-w-[45%] space-y-6">
        <p className="text-[16px] font-semibold text-[#F19623]">
          All Details in One Place
        </p>
        <h3 className="text-[40px] text-[#282828] font-semibold leading-[45px]">
          {title}
        </h3>
        <p className="text-[16px] text-[#7C7C7C] leading-[32px]">
          {description}
        </p>

        <button className="font-bold text-[16px] text-white bg-[#F19623] py-3 px-12 rounded-xl cursor-pointer">
          Let's Start Now
        </button>
      </div>
      <div className="w-full max-w-[535px] h-[527px] bg-[#D9D9D9]"></div>
    </div>
  );
};

export default CardLeft;
