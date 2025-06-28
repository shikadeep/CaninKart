import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 py-10 text-sm bg-white max-w-screen-2xl mx-auto">
      <div className="grid gap-x-10 gap-y-5 md:grid-cols-2 lg:grid-cols-3 border-b p-10 max-w-[1500px] mx-auto">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left ">
          <img src={logo1} alt="Caninkart" className="w-24 h-auto mb-3" />
          <p className="text-gray-700 leading-relaxed max-w-xs">
            Caninkart is a highly reputable manufacturer and exporter of pet accessories.
          </p>
        </div>

        {/* Quick Links & Legal */}
        <div className="flex justify-around flex-wrap gap-6 md:gap-0 ">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-2 text-black">Quick Links</h4>
            <ul className="space-y-1 text-gray-600 overflow-y-scroll h-18">
              {["Home", "About", "Product","Dog Breed",  "Market Place"].map((text, idx) => (
                <li key={idx}>
                  <Link to={`/${text === "Home" ? "" : text.toLowerCase().replace(/\s+/g, "")}`} className="hover:text-orange-500">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-2 text-black">Legal</h4>
            <ul className="space-y-1 text-gray-600">
              {["Terms & Conditions", "Privacy Policy"].map((text, idx) => (
                <li key={idx} className="hover:text-orange-500 cursor-pointer">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left ">
          <h4 className="font-semibold mb-2 text-black text-base sm:text-lg">Contact Us</h4>

          {/* Email */}
          <div className="flex items-center  gap-2 mb-3 ">
            <div className="w-8 h-8  flex items-center justify-center rounded-full bg-[#FDDF82]">
              <FiMail className="text-base md:text-lg" />
            </div>
            <span className="hover:text-orange-400  break-all text-gray-700">
              support@caninkart.com
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8  flex items-center justify-center rounded-full bg-[#FDDF82]">
              <FiPhone className="text-base md:text-lg" />
            </div>
            <span className="hover:text-orange-400  text-gray-700">
              +91 95029 57250
            </span>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex justify-center gap-4 flex-wrap text-xl">
        {[
          { icon: <FaFacebookF />, label: "Facebook" },
          { icon: <FaInstagram />, label: "Instagram" },
          { icon: <FaYoutube />, label: "YouTube" },
          { icon: <FaXTwitter />, label: "X (Twitter)" },
        ].map((item, idx) => (
          <div
            key={idx}
            aria-label={item.label}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FDDF82] 
              transition-transform duration-300 ease-in-out cursor-pointer 
              hover:scale-110 hover:rotate-12"
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Copyright */}
      <p className="mt-6 text-center text-xs text-gray-500">
        © 2025 Caninkart. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
