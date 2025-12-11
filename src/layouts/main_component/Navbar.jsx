import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-full h-fit bg-[#F9FAFB] font-inter">
      {/* Top Header */}
      <div className="flex items-center justify-between py-[11px] px-26 border-b border-[#D1D5DB]">
        <h4 className="text-sm font-bold">Pruthatek</h4>

        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[#D9D9D9]"></div>
          <p className="text-[15px] text-[#282828] font-medium">Product 1</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[#D9D9D9]"></div>
          <p className="text-[15px] text-[#282828] font-medium">Product 1</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[#D9D9D9]"></div>
          <p className="text-[15px] text-[#282828] font-medium">Product 1</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[#D9D9D9]"></div>
          <p className="text-[15px] text-[#282828] font-medium">Product 1</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[#D9D9D9]"></div>
          <p className="text-[15px] text-[#282828] font-medium">Product 1</p>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex items-center justify-between px-18 py-2 border-b border-[#D1D5DB]">
        {/* logo */}
        <div className="bg-[#333333] w-[190px] h-[70px] flex items-center justify-center rounded-[7px]">
          <Link to={"/"}>
            <img
              src="/Pruthatek.png"
              alt="Pruthatek"
              className="w-fit h-fit object-contain"
            />
          </Link>
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-12">
          <Link to={"/"}>
            <li
              className={`text-[16px] font-medium tracking-[-2%] pb-2 border-b-2 ${
                isActive("/")
                  ? "text-[#F19623] border-[#F19623]"
                  : "border-transparent hover:text-[#F19623]"
              }`}
            >
              Service
            </li>
          </Link>

          <Link to={"/plan-and-pricing"}>
            <li
              className={` text-[16px] font-medium tracking-[-2%] pb-2 border-b-2 ${
                isActive("/plan-and-pricing")
                  ? "text-[#F19623] border-[#F19623]"
                  : "border-transparent hover:text-[#F19623]"
              }
      `}
            >
              Plans & Pricing
            </li>
          </Link>

          <Link to={"/resources"}>
            <li
              className={`
        text-[16px] font-medium tracking-[-2%] pb-2 border-b-2
        ${
          isActive("/resources")
            ? "text-[#F19623] border-[#F19623]"
            : "border-transparent hover:text-[#F19623]"
        }
      `}
            >
              Resources
            </li>
          </Link>

          <Link to={"/blog"}>
            <li
              className={`
        text-[16px] font-medium tracking-[-2%] pb-2 border-b-2
        ${
          isActive("/blog")
            ? "text-[#F19623] border-[#F19623]"
            : "border-transparent hover:text-[#F19623]"
        }
      `}
            >
              Blogs
            </li>
          </Link>
        </ul>

        <button className="bg-[#F19623] text-white py-3 px-12 rounded-[12px] text-[16px] font-bold cursor-pointer">
          Let's Start Now
        </button>
      </div>
    </div>
  );
}
