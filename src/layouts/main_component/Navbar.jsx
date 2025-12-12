import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-full bg-[#F9FAFB] font-inter">
      <div className="flex items-center justify-between py-[11px] px-4 md:px-6 lg:px-12 xl:px-24 border-b border-[#D1D5DB]">
        <h4 className="text-sm font-bold">Pruthatek</h4>

        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="hidden md:flex items-center gap-3">
            <div className="w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-[#D9D9D9]"></div>
            <p className="text-xs lg:text-[15px] text-[#282828] font-medium">
              Product {i}
            </p>
          </div>
        ))}

        {[1, 2, 3].map((i) => (
          <div key={i} className="md:hidden flex items-center gap-3">
            <div className="w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-[#D9D9D9]"></div>
            <p className="text-xs lg:text-[15px] text-[#282828] font-medium">
              Product {i}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-6 md:px-14 xl:px-18 py-4 border-b border-[#D1D5DB]">
        <div className="bg-[#333333] w-[120px] sm:w-[140px] md:w-[160px] lg:w-[190px] h-[50px] md:h-[70px] flex-shrink-0 flex items-center justify-center rounded-[7px]">
          <Link to="/">
            <img src="/Pruthatek.png" alt="logo" className="object-contain" />
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-12">
          {[
            { label: "Service", to: "/" },
            { label: "Plans & Pricing", to: "/plan-and-pricing" },
            { label: "Resources", to: "/resources" },
            { label: "Blogs", to: "/blog" },
          ].map((item) => (
            <Link key={item.to} to={item.to}>
              <li
                className={`text-[16px] font-medium pb-2 border-b-2 transition-all ${
                  isActive(item.to)
                    ? "text-[#F19623] border-[#F19623]"
                    : "border-transparent hover:text-[#F19623]"
                }`}
              >
                {item.label}
              </li>
            </Link>
          ))}
        </ul>

        <button className="hidden lg:block bg-[#F19623] text-white py-3 px-8 xl:px-12 rounded-[12px] text-[15px] font-bold shadow-sm hover:shadow-md transition active:scale-95">
          Let's Start Now
        </button>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-3xl text-[#282D30] flex-shrink-0"
        >
          <HiMenu />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998] lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-xl z-[9999] p-6 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="text-3xl mb-6 text-[#282D30]"
          onClick={() => setOpen(false)}
        >
          <HiX />
        </button>

        <div className="flex flex-col gap-6">
          {[
            { label: "Service", to: "/" },
            { label: "Plans & Pricing", to: "/plan-and-pricing" },
            { label: "Resources", to: "/resources" },
            { label: "Blogs", to: "/blog" },
          ].map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
              <p
                className={`text-lg font-medium ${
                  isActive(item.to) ? "text-[#F19623]" : "text-[#282D30]"
                }`}
              >
                {item.label}
              </p>
            </Link>
          ))}

          <button className="bg-[#F19623] text-white w-fit px-4 py-3 mt-4 rounded-[12px] font-bold text-[16px] shadow-sm hover:shadow-lg transition active:scale-95">
            Let's Start Now
          </button>
        </div>
      </div>
    </div>
  );
}
