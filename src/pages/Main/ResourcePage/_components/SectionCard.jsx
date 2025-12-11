import React from "react";

const SectionCard = ({ id, title, desc, image, btnText }) => {
  return (
    <div id={id || "invoicing"} className="flex flex-col gap-6">
      <h3 className="text-[34px] text-[#282D30] font-semibold leading-[60px]">
        {title || "How to Crete Invoice ?"}
      </h3>
      <div
        className="w-full max-w-[630px] h-[360px] border-[11px] border-[#D1D5DB] overflow-hidden rounded-[18px] 
              shadow-[0_4px_14px_0_rgba(189,189,189,.25)]"
      >
        <img
          src={image || "/resource.png"}
          alt="resource_IMAGE"
          className="w-fit h-fit object-cover"
        />
      </div>
      <div className="text-[16px] font-medium leading-[33px]">
        {desc ? (
          <p className="w-[75%]">{desc}</p>
        ) : (
          <>
            <p>
              Communicating with clients won’t be difficult anymore when you
              start using ERPCA:
            </p>
            <ul className="list-disc list-inside">
              <li>Handle client index in an effortless manner</li>
              <li>Expertly made client onboarding procedure</li>
              <li>Well-organized account review</li>
              <li>
                Get details about all the task(s) performed from the time of
                onboarding in one click
              </li>
              <li>All the communication records retrieved from one place</li>
              <li>Well-managed time log consumed on task(s)</li>
            </ul>
          </>
        )}
      </div>
      <button className="text-[16px] font-bold text-white bg-[#F19623] rounded-[12px] w-full max-w-[200px] py-3 cursor-pointer mt-2">
        {btnText || `Know More`}
      </button>
    </div>
  );
};

export default SectionCard;
