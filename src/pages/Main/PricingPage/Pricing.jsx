import React from "react";
import PlanPricing from "../../../layouts/main_component/PlanPricing";
import ReviewCard from "../../../components/ReviewCard";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center gap-28">
      <PlanPricing />

      <div className="w-full flex flex-col gap-y-14 px-24 font-inter">
        <div>
          <div>
            <p className="text-[16px] text-[#F19623] font-semibold">
              What Customers are saying
            </p>
            <h3 className="text-[40px] text-[#282D30] font-semibold">
              Customer Reviews
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-3 place-items-center gap-10">
          <ReviewCard />
          <ReviewCard bg={"#36D7A0"} />
          <ReviewCard bg={"#F95484"} />
          <ReviewCard bg={"#F95484"} />
          <ReviewCard bg={"#50B7FF"} />
          <ReviewCard bg={"#FB8C5C"} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
