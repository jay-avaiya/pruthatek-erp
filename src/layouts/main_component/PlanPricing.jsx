import { SquareCheck } from "lucide-react";
import React, { useState } from "react";

const PlanPricing = () => {
  const [yearly, setYearly] = useState(false);

  const basicPrice = 150;
  const standarPrice = 300;
  const premiumPrice = 450;

  const getPrice = (price) => {
    return yearly ? price * 12 : price;
  };

  const basicPlan = [
    "Invoicing & Billing",
    "Financial Reporting",
    "Expense Tracking",
    "Full Payroll Service",
    "Benefits Administration",
    "Data Import",
    "Single User",
    "Single Company",
  ];

  const standardPlan = [
    "Invoicing & Billing",
    "Financial Reporting",
    "Expense Tracking",
    "Full Payroll Service",
    "Benefits Administration",
    "Data Import",
    "Up-to  6 User",
    "Up-to 6 Company",
  ];

  const premiumPlan = [
    "Invoicing & Billing",
    "Financial Reporting",
    "Expense Tracking",
    "Full Payroll Service",
    "Benefits Administration",
    "Data Import",
    "Multiple Users up to 50",
    "Multiple Companies up to 50",
  ];

  return (
    <div className="w-full px-4 md:px-6 lg:px-12 xl:px-24 font-inter">
      {/* title */}
      <div>
        <p className="text-[#F19623] text-sm md:text-[16px] font-semibold">
          Pocket Friendly Pricing
        </p>
        <h3 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#282D30] mt-2 leading-[60px]">
          Select your Plan
        </h3>
      </div>

      {/* plan */}
      <div className="w-full max-w-[1169px] mx-auto lg:mt-20 xl:mt-24">
        {/* plan type */}
        <div className="w-full flex items-center justify-center gap-4">
          <span className="text-sm md:text-lg font-semibold">Monthly</span>

          <button
            onClick={() => setYearly(!yearly)}
            className={`w-10 md:w-12 h-5 md:h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
              yearly ? "bg-[#0faf87]" : "bg-[#D1D5DB]"
            }`}
          >
            <div
              className={`w-3 h-3 md:w-4 md:h-4 bg-white rounded-full transition-transform duration-300 ${
                yearly ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>

          <span className="text-sm md:text-lg font-semibold">Yearly</span>

          <span className="text-[#F19623] text-xs md:text-sm font-semibold">
            {" "}
            20% off + 15 days free
          </span>
        </div>

        {/* plan includes */}
        <div className="flex flex-col md:flex-row items-center justify-center  md:justify-between px-3 md:px-6 py-3 mt-8 rounded-[10px] gap-y-5 md:gap-y-0">
          <h4 className="text-xl lg:text-2xl font-semibold">
            All Plans Includes{" "}
          </h4>

          {/* multi-user */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center bg-[#FFF7F2]">
              <img
                src="/user.png"
                alt="user"
                className="size-6 lg:size-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] lg:text-lg font-semibold">
                MultiUsers
              </span>
              <span className="text-[#A1A3B2] text-xs lg:text-sm font-medium">
                for single firm
              </span>
            </div>
          </div>

          {/* live support */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center bg-[#FFF7F2]">
              <img
                src="/chats.png"
                alt="chats"
                className="size-6 lg:size-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] lg:text-lg font-semibold">
                Live Support
              </span>
              <span className="text-[#A1A3B2] text-xs lg:text-sm font-medium">
                on Weekdays.
              </span>
            </div>
          </div>

          {/* expert assist */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center bg-[#FFF7F2]">
              <img src="/cog.png" alt="cog" className="size-6 lg:size-[30px]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] lg:text-lg font-semibold">
                Expert Assist
              </span>
              <span className="text-[#A1A3B2] text-xs lg:text-sm font-medium">
                on Weekdays.
              </span>
            </div>
          </div>
        </div>

        {/* plans cards */}
        <div
          className="
    w-full mt-16
    grid grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-6
    place-items-center
  "
        >
          {/* plan 1 */}
          <div className="w-[320px] xl:w-[360px] h-[850px] bg-white rounded-[24px] px-6 py-8 flex flex-col">
            {/* plan name & price */}
            <div>
              <h4 className="text-xl font-bold text-[#1B2A49]">Basic</h4>

              <h5 className="text-[34px] font-bold mt-2">
                ₹ {getPrice(basicPrice)}{" "}
                <span className="text-sm text-[#A1A3B2] font-normal">
                  {`/User /Per /${yearly ? "Year" : "Month"}`}
                </span>
              </h5>
              <span className="text-[#F19623] text-sm font-medium">
                exclusive of GST
              </span>
            </div>

            {/* plan features */}
            <div className="flex flex-col gap-9 mt-8">
              {basicPlan.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <SquareCheck className="size-5 text-[#F19623]" />
                  <span className="text-lg text-[#333333] font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex mt-auto">
              <button className="w-full text-white font-bold text-[16px] bg-[#1B2A49] py-3 rounded-[14px] cursor-pointer active:scale-95 transition duration-100">
                Let's Start
              </button>
            </div>
          </div>

          {/* plan 2 */}
          <div className="w-[320px] xl:w-[360px] h-[850px] bg-[#FDFDFD] border-[3px] border-[#F19623] rounded-[24px] px-6 py-8 flex flex-col">
            {/* plan name & price */}
            <div>
              <h4 className="text-xl font-bold text-[#F19623]">Standard</h4>

              <h5 className="text-[34px] font-bold mt-2">
                ₹ {getPrice(standarPrice)}{" "}
                <span className="text-sm text-[#A1A3B2] font-normal">
                  {`/User /Per /${yearly ? "Year" : "Month"}`}
                </span>
              </h5>
              <span className="text-[#F19623] text-sm font-medium">
                exclusive of GST
              </span>
            </div>

            {/* plan features */}
            <div className="flex flex-col gap-9 mt-8">
              {standardPlan.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <SquareCheck className="size-5 text-[#F19623]" />
                  <span className="text-lg text-[#333333] font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex mt-auto">
              <button className="w-full text-white font-bold text-[16px] bg-[#F19623] py-3 rounded-[14px] cursor-pointer active:scale-95 transition duration-100">
                Let's Start
              </button>
            </div>
          </div>

          {/* plan 3 */}
          <div className="relative w-[320px] xl:w-[360px]  h-[850px] border-[3px] border-[#008060] bg-[#008060] rounded-[24px] px-6 py-8 flex flex-col">
            {/* Designs */}
            <div className="absolute left-0 top-0 -translate-y-1/3 -translate-x-1/3 w-[90px] h-[90px] rounded-full border-[21px] border-[#FDFDFD1A]"></div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2  w-[200px] h-[200px] rounded-full border-[51px] border-[#FDFDFD1A]"></div>
            <div className="absolute left-0 bottom-0 translate-y-1/3 -translate-x-1/3  w-[135px] h-[135px] rounded-full border-[31px] border-[#FDFDFD1A]"></div>

            {/* badge */}
            <div className="absolute top-2 right-2 bg-[#FFC107] text-white text-[16px] rounded-[23px] py-2 px-6 font-bold">
              Popular
            </div>

            {/* plan name & price */}
            <div>
              <h4 className="text-xl font-bold text-[#FDFDFD]">Premium</h4>

              <h5 className="text-[34px] font-bold mt-2 text-[#FDFDFD]">
                ₹ {getPrice(premiumPrice)}{" "}
                <span className="text-sm text-[#F9FAFB] font-normal">
                  {`/User /Per /${yearly ? "Year" : "Month"}`}
                </span>
              </h5>
              <span className="text-[#FDFDFD] text-sm font-medium">
                exclusive of GST
              </span>
            </div>

            {/* plan features */}
            <div className="flex flex-col gap-9 mt-8">
              {premiumPlan.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <SquareCheck className="size-5 text-[#FDFDFD]" />
                  <span className="text-lg text-[#FDFDFD] font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex mt-auto">
              <button className="w-full text-black font-bold text-[16px] bg-[#FDFDFD] py-3 rounded-[14px] cursor-pointer z-10 active:scale-95 transition duration-100">
                Let's Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanPricing;
