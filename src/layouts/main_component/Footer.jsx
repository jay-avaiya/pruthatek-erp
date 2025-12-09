import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Footer() {
  const company = [
    {
      name: "About Pruthatek",
      link: "/about-us",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
    {
      name: "Careers",
      link: "/careers",
    },
  ];

  const business = [
    {
      name: "Radiant CRM",
      link: "/radiant-crm",
    },
  ];

  const seller = [
    {
      name: "TWB",
      link: "/twb",
    },
  ];

  const hospital = [
    {
      name: "Pruthatek Medical IPD",
      link: "/pruthatek-medical-ipd",
    },
    {
      name: "Pruthatek Medical OPD",
      link: "/pruthatek-medical-opd",
    },
    {
      name: "Pruthatek Medical Billing",
      link: "/pruthatek-medical-billing",
    },
  ];

  const institution = [
    { name: "Alumni Portal", link: "/alumni" },
    { name: "Institution Management System", link: "/institution-management" },
  ];

  const legal = [
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Refund Policy", link: "/refund-policy" },
    { name: "Legal Information", link: "/legal-information" },
  ];

  const cookie = [
    { name: "About Pruthatek", link: "/about-us" },
    { name: "Contact us", link: "/contact-us" },
    { name: "Careers", link: "/careers" },
  ];

  return (
    <footer className="w-full h-fit font-inter text-[#333333]">
      <div className="grid grid-cols-[1fr_1fr_auto_1fr_1fr] gap-10 border-t border-b border-[#E4E4E4] pt-10 pb-14 px-24">
        {/* Company */}
        <div>
          <p className="text-2xl font-semibold">Company</p>
          <ul className="flex flex-col gap-y-3 mt-4 leading-[26px]">
            {company.map((item, index) => (
              <Link to={item.link} key={index}>
                <li className="text-[16px]">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Business */}
        <div>
          <p className="text-2xl font-semibold">For Businesses</p>
          <ul className="flex flex-col gap-y-3 mt-4 leading-[26px]">
            {business.map((item, index) => (
              <Link to={item.link} key={index}>
                <li className="text-[16px]">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Ecommerce Seller */}
        <div>
          <p className="text-2xl font-semibold whitespace-nowrap">
            For E-commerce Sellers
          </p>
          <ul className="flex flex-col gap-y-3 mt-4 leading-[26px]">
            {seller.map((item, index) => (
              <Link to={item.link} key={index}>
                <li className="text-[16px]">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Hospital */}
        <div>
          <p className="text-2xl font-semibold">For Hosptials</p>
          <ul className="flex flex-col gap-y-3 mt-4 leading-[26px] leading-[26px]">
            {hospital.map((item, index) => (
              <Link to={item.link} key={index}>
                <li className="text-[16px]">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Institution */}
        <div>
          <p className="text-2xl font-semibold">For Institutions</p>
          <ul className="flex flex-col gap-y-3 mt-4 leading-[26px]">
            {institution.map((item, index) => (
              <Link to={item.link} key={index}>
                <li className="text-[16px]">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-24 py-10 border-b border-[#E4E4E4]">
        {/* TOP SECTION */}
        <div className="w-full flex justify-between gap-6">
          {/* logo */}
          <div className="bg-[#333333] w-[300px] h-[120px] flex items-center justify-center rounded-[20px]">
            <Link to={"/"}>
              <img
                src="/Pruthatek.png"
                alt="Pruthatek"
                className="w-fit h-fit object-contain"
              />
            </Link>
          </div>

          {/* Stacked BOXES */}
          <div className="flex gap-10">
            <div className="flex flex-col gap-4">
              <div className="bg-[#EBEBEB] w-[190px] h-[60px]"></div>
              <div className="bg-[#EBEBEB] w-[190px] h-[60px]"></div>
            </div>

            <div className="flex gap-6">
              <div className="bg-[#EBEBEB] w-[190px] h-[60px]"></div>
              <div className="bg-[#EBEBEB] w-[190px] h-[60px]"></div>
              <div className="bg-[#EBEBEB] w-[190px] h-[60px]"></div>
            </div>
          </div>
        </div>

        {/* MIDDlE SECTION */}
        <div className="grid grid-cols-5 gap-16 mt-16 w-full">
          {/* Company */}
          <div>
            <p className="text-2xl font-semibold">Company</p>
            <ul className="flex flex-col gap-y-3 mt-4 leading-[26px]">
              {company.map((item, index) => (
                <Link to={item.link} key={index}>
                  <li className="text-[16px]">{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-2xl font-semibold">Legal</p>
            <ul className="flex flex-col gap-y-3 mt-4 leading-[26px]">
              {legal.map((item, index) => (
                <Link to={item.link} key={index}>
                  <li className="text-[16px]">{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>

          {/* cookies */}
          <div>
            <p className="text-2xl font-semibold">About Cookies</p>
            <ul className="flex flex-col gap-y-3 mt-4 leading-[26px]">
              {cookie.map((item, index) => (
                <Link to={item.link} key={index}>
                  <li className="text-[16px]">{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-2xl font-semibold">Contact us</p>

            <div className="flex flex-col gap-y-3 mt-4 leading-[26px]">
              <a href="mailto:info@pruthatek.com" className="text-[16px]">
                info@pruthatek.com
              </a>
              <a href="mailto:VN@pruthatek.com" className="text-[16px]">
                VN@pruthatek.com
              </a>
              <a href="tel:+919909918930" className="text-[16px]">
                +91 990 991 8930
              </a>
            </div>
          </div>

          {/* social */}
          <div>
            <p className="text-2xl font-semibold">Follow Us</p>

            <div className="flex gap-x-5 mt-4 ">
              <FaLinkedinIn className="size-6 text-[#333333]" />
              <FaFacebookF className="size-6 text-[#333333]" />
              <PiInstagramLogoFill className="size-6 text-[#333333]" />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col items-center justify-center w-full mt-3">
        <p className="text-sm">
          @2025 PRUTHA TECHNOMARKET PVT. LTD. | PRUTHA TECHNOMARKET INC. All
          rights reserved.
        </p>

        <p className="text-[#F19623] font-semibold text-2xl my-4">
          Made with <span className="text-[#FF0000]">❤</span> by Vinit
        </p>
      </div>
    </footer>
  );
}
