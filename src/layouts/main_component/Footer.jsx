import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Footer() {
  const company = [
    { name: "About Pruthatek", link: "/about-us" },
    { name: "Contact Us", link: "/contact-us" },
    { name: "Careers", link: "/careers" },
  ];

  const business = [{ name: "Radiant CRM", link: "/radiant-crm" }];

  const seller = [{ name: "TWB", link: "/twb" }];

  const hospital = [
    { name: "Pruthatek Medical IPD", link: "/pruthatek-medical-ipd" },
    { name: "Pruthatek Medical OPD", link: "/pruthatek-medical-opd" },
    { name: "Pruthatek Medical Billing", link: "/pruthatek-medical-billing" },
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
    <footer className="w-full font-inter text-[#333]">
      {/* ---------- TOP GRID SECTION ---------- */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-[1fr_1fr_auto_1fr_1fr]
          gap-10
          border-t border-b border-[#E4E4E4]
          px-4 md:px-6 lg:px-12 xl:px-24
          pt-10 pb-14
        "
      >
        {/* Company */}
        <div>
          <p className="text-2xl font-semibold">Company</p>
          <ul className="flex flex-col gap-3 mt-4">
            {company.map((item, i) => (
              <Link key={i} to={item.link}>
                <li className="text-[16px]">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Business */}
        <div>
          <p className="text-2xl font-semibold">For Businesses</p>
          <ul className="flex flex-col gap-3 mt-4">
            {business.map((item, i) => (
              <Link key={i} to={item.link}>
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
          <ul className="flex flex-col gap-3 mt-4">
            {seller.map((item, i) => (
              <Link key={i} to={item.link}>
                <li className="text-[16px]">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Hospital */}
        <div>
          <p className="text-2xl font-semibold">For Hospitals</p>
          <ul className="flex flex-col gap-3 mt-4">
            {hospital.map((item, i) => (
              <Link key={i} to={item.link}>
                <li className="text-[16px]">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Institution */}
        <div>
          <p className="text-2xl font-semibold">For Institutions</p>
          <ul className="flex flex-col gap-3 mt-4">
            {institution.map((item, i) => (
              <Link key={i} to={item.link}>
                <li className="text-[16px]">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- MIDDLE SECTION ---------- */}
      <div className="px-4 md:px-6 lg:px-12 xl:px-24 py-10 border-b border-[#E4E4E4]">
        {/* LOGO + BOXES */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Logo */}
          <div className="bg-[#333] w-[300px] h-[100px] lg:h-[120px] rounded-[20px] flex items-center justify-center">
            <Link to="/">
              <img
                src="/Pruthatek.png"
                alt="Pruthatek"
                className="object-contain"
              />
            </Link>
          </div>

          {/* Boxes */}
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col gap-4">
              <div className="bg-[#EBEBEB] w-[190px] h-[60px]"></div>
              <div className="bg-[#EBEBEB] w-[190px] h-[60px]"></div>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="bg-[#EBEBEB] w-[190px] h-[60px]"></div>
              <div className="bg-[#EBEBEB] w-[190px] h-[60px]"></div>
              <div className="bg-[#EBEBEB] w-[190px] h-[60px]"></div>
            </div>
          </div>
        </div>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
            gap-16
            mt-16
          "
        >
          {/* Company */}
          <div>
            <p className="text-2xl font-semibold">Company</p>
            <ul className="flex flex-col gap-3 mt-4">
              {company.map((item, i) => (
                <Link key={i} to={item.link}>
                  <li className="text-[16px]">{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-2xl font-semibold">Legal</p>
            <ul className="flex flex-col gap-3 mt-4">
              {legal.map((item, i) => (
                <Link key={i} to={item.link}>
                  <li className="text-[16px]">{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Cookies */}
          <div>
            <p className="text-2xl font-semibold">About Cookies</p>
            <ul className="flex flex-col gap-3 mt-4">
              {cookie.map((item, i) => (
                <Link key={i} to={item.link}>
                  <li className="text-[16px]">{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-2xl font-semibold">Contact Us</p>
            <div className="flex flex-col gap-3 mt-4">
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

          {/* Social */}
          <div>
            <p className="text-2xl font-semibold">Follow Us</p>
            <div className="flex gap-5 mt-4">
              <FaLinkedinIn className="size-6 text-[#333]" />
              <FaFacebookF className="size-6 text-[#333]" />
              <PiInstagramLogoFill className="size-6 text-[#333]" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- BOTTOM SECTION ---------- */}
      <div className="flex flex-col items-center justify-center w-full mt-3 px-4 md:px-6 lg:px-12 xl:px-24">
        <p className="text-sm text-center">
          ©2025 PRUTHA TECHNOMARKET PVT. LTD. | PRUTHA TECHNOMARKET INC. All
          rights reserved.
        </p>

        <p className="text-[#F19623] font-semibold text-2xl my-4 text-center">
          Made with <span className="text-[#FF0000]">❤</span> by Vinit
        </p>
      </div>
    </footer>
  );
}
