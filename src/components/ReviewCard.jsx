import React from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const ReviewCard = ({ bg }) => {
  return (
    <div className="w-full max-w-[297px] min-h-[327px] px-1 py-2 border-8 border-white rounded-[12px] shadow-[0_6px_18px_-4px_rgba(0,0,0,0.15)] flex flex-col gap-4">
      {/* ---- user name ---- */}
      <div className="flex gap-2 items-center">
        <div
          style={{ backgroundColor: bg || "#50B7FF" }}
          className="flex items-center justify-center text-center w-11 h-11 rounded-full text-white"
        >
          <span className="text-xl font-medium">Y</span>
        </div>

        <div className="flex flex-col">
          <p className="text-[17px] font-bold text-[#282D30]">Yash Gupta</p>
          <span className="text-xs text-[#A1A3B2]">2 Days ago</span>
        </div>
      </div>

      {/* ---- rating ---- */}
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <FaStar className="size-6 text-[#F19623]" key={index} />
        ))}
      </div>

      {/* ---- review ---- */}
      <p className="text-sm text-[#A1A3B2] leading-[25px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit
      </p>

      {/* ---- Read More ---- */}
      <div className="flex items-center justify-between">
        <p className="text-[#6F3CDB] text-[16px] font-semibold">Read More</p>
        <FcGoogle className="size-9" />
      </div>
    </div>
  );
};

export default ReviewCard;
