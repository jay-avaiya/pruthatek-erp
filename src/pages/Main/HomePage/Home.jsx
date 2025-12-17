import React from "react";
import PlanPricing from "../../../layouts/main_component/PlanPricing";
import ReviewCard from "../../../components/ReviewCard";
import CardRight from "./_components/CardRight";
import CardLeft from "./_components/CardLeft";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoIosCloudUpload } from "react-icons/io";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";

const Home = () => {
  const needs = [
    "Invoicing & Billing",
    "Financial Reporting",
    "Expense Tracking",
    "Full Payroll Service",
    "Benefits Administration",
    "Data Import",
  ];

  const pms = [
    {
      title: "Secure Cloud Storage",
      desc: "SSL encryption Ensure All Data Protection",
      icon: <IoIosCloudUpload className="size-8 text-[#F19623]" />,
    },
    {
      title: "Quick Support",
      desc: "Get Instant Support Via Google Meer & Whatsapp",
      icon: <BsChatLeftDotsFill className="size-8 text-[#F19623]" />,
    },
    {
      title: "Manage Practice Digitally",
      desc: "Hospital Doctors can Write Prescription Direct on Tablet",
      icon: <HiDocumentText className="size-10 text-[#F19623]" />,
    },
    {
      title: "Role-Based Access Control",
      desc: "Limit data access based on user roles to protect patient privacy and ensure security.",
      icon: <img src="/encrypt.png" className="size-8 text-[#F19623]" />,
    },
    {
      title: "Real-Time Reports & Analytics",
      desc: "View real-time data on operations and patient flow to make smarter decisions.",
      icon: <img src="/report.png" className="size-8 text-[#F19623]" />,
    },
    {
      title: "Digital Invoicing",
      desc: "Easily connect with labs and pharmacies to manage tests, results, and prescriptions.",
      icon: <img src="/invoice.png" className="size-8 text-[#F19623]" />,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-28">
      {/* ---- title ---- */}
      <div className="font-inter w-full max-w-6xl mx-auto text-center flex flex-col items-center gap-y-6 md:px-6 px-4 ">
        <p className="text-[#F19623] font-medium text-sm md:text-[16px]">
          Manage Invoices, Inventory & GST Returns, Track Payments, Send
          Reminders, and much more
        </p>
        <h3 className="text-3xl md:text-[40px] xl:text-[50px] font-black text-[#282D30] md:leading:[45px] lg:leading-[60px]">
          Comprehensive Accounting Software For Small Businesses & Growing
          Companies
        </h3>
        <p className="text-sm md:text-[16px] text-[#7C7C7C] leading-[32px] w-full lg:w-[80%]  xl:w-[68%]">
          Our 100% digital GST system automates business accounting, streamlines
          financial operations, ensures real-time compliance tracking,
          eliminates manual paperwork, and supports an eco-friendly, efficient,
          and modern business experience for both owners and accountants.
        </p>

        <button className="text-white bg-[#FB8C5C] text-sm md:text-[16px] font-bold rounded-full py-3 px-14 cursor-pointer active:scale-95 transition duration-100">
          Start 7 day free trial
        </button>
      </div>

      {/* ---- home image ---- */}
      <div className="font-inter flex flex-col items-center gap-y-14 px-4 md:px-24 w-full max-w-6xl">
        <h3 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#282828]">
          See Pruthatek’s ERP in Action
        </h3>

        <div className="shadow-[0_4px_34px_0_rgba(120,120,120,0.25)] rounded-[20px] overflow-hidden">
          <img
            src="/home.jpg"
            alt="home_image"
            className="w-full max-w-full object-contain"
          />
        </div>
      </div>

      {/* ---- customer reviews ---- */}
      <div className="flex flex-col px-4 md:px-6 lg:px-12 xl:px-24 w-full gap-y-14 font-inter">
        <div>
          <p className="text-sm md:text-[16px] text-[#F19623] font-semibold">
            Happy Customers
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-[40px] text-[#282D30] font-semibold">
            Trusted By Multiple Businesses and Entrepreneurs Across India
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-y-5">
          {[1, 2, 3, 4].map((_, i) => (
            <ReviewCard key={i} />
          ))}
        </div>
      </div>

      {/* ---- features ---- */}
      <CardRight
        title={
          "Save 10+ Hours Weekly: Focus on Business Expansion, Not Compliance Tasks"
        }
        description={
          "Create and manage invoices easily. Assign to your finance team and track payment status. Get notified when payments are received."
        }
      />
      <CardLeft
        title={"Manage all finances in one place"}
        description={
          "Essential business tools and accounting apps work seamlessly together in one unified system. Handle billing, track payments, and manage GST returns—all on one comprehensive platform."
        }
      />
      <CardRight
        title={"Track Expenses , Manage Payrolls"}
        description={
          "Track and categorize expenses easily. Assign to your finance team and monitor approval status. Get notified when expense reports are processed."
        }
      />

      {/* ---- Needs of Business ---- */}
      <div className="w-full flex flex-col px-4 md:px-6 lg:px-12 xl:px-24 gap-y-5 md:gap-y-10 lg:gap-y-14 font-inter">
        <div>
          <p className="text-sm md:text-[16px] font-semibold text-[#F19623]">
            Everything you need to manage your business finances
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#282828]">
            Built for Businesses & Entrepreneurs
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {needs.map((need, index) => (
            <div
              key={index}
              className="flex items-center gap-2 shadow-[0_6px_18px_-4px_rgba(0,0,0,0.15)] rounded-[10px] py-4 px-6"
            >
              <IoCheckmarkCircle className="text-[#008060] size-5" />
              <span className="text-xs md:text-[16px] lg:text-lg text-[#333333] font-semibold">
                {need}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ---- PMS ---- */}
      <div className="flex flex-col px-4 md:px-6 lg:px-12 xl:px-24 gap-y-5 md:gap-y-10 lg:gap-y-14 font-inter">
        <div>
          <p className="text-sm md:text-[16px] font-semibold text-[#F19623]">
            Why Pruthatek’s PMS?
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#333333]">
            You will find tens of practice management software with a simple
            google search. So why should you choose Pruthatek’s PMS?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-14">
          {pms.map((pms, index) => (
            <div
              key={index}
              className="shadow-[0_6px_18px_-4px_rgba(0,0,0,0.15)] border-8 border-white rounded-xl w-full max-w-[380px] h-[256px] space-y-4 bg-white"
            >
              <div className="w-20 h-20 rounded-[10px] bg-[#FFF7F2] flex items-center justify-center">
                {pms.icon}
              </div>

              <h3 className="text-lg text-[#333333] font-bold leading-[25px]">
                {pms.title}
              </h3>

              <p className="text-[#A1A3B2] text-[16px] font-medium leading-[25px] w-[80%]">
                {pms.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ---- plan pricing ---- */}
      <PlanPricing />
    </div>
  );
};

export default Home;
