import React from "react";

const CardRight = ({ title, description }) => {
  return (
    <div className="w-full h-fit px-4 md:px-6 lg:px-12 xl:px-24 flex flex-col lg:flex-row items-center justify-between font-inter gap-y-8 lg:gap-y-0 text-center lg:text-start">
      <div className="w-full max-w-[320px] md:max-w-[430px] xl:max-w-[535px] h-[350px] md:h-[420px] xl:h-[527px] bg-[#D9D9D9]"></div>

      <div className="w-full md:max-w-[80%] lg:max-w-[50%] xl:max-w-[45%] space-y-3 lg:space-y-6">
        <p className="text-sm md:text-[16px] font-semibold text-[#F19623]">
          All Details in One Place
        </p>
        <h3 className="text-2xl md:text-3xl xl:text-[40px] text-[#282828] font-semibold leading-[45px]">
          {title}
        </h3>
        <p className="text-sm md:text-[16px] text-[#7C7C7C] leading-[32px]">
          {description}
        </p>

        <button className="font-bold text-sm md:text-[16px] text-white bg-[#F19623] py-3 px-12 rounded-xl cursor-pointer">
          Let's Start Now
        </button>
      </div>
    </div>
  );
};

export default CardRight;
