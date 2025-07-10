import React from "react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden mt-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-5 text-sm">
          {/* Company Info Section */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl flex items-center justify-center"></div>
              <span className="text-2xl font-bold text-white">Kickzy</span>
            </div>
            <p className="w-full md:w-2/3 text-slate-300 leading-relaxed text-base">
              Premium footwear crafted for the modern professional. We combine
              traditional craftsmanship with contemporary design to create shoes
              that elevate your style and comfort.
            </p>
          </div>

          {/* Company Links Section */}
          <div className="mx-auto">
            <h3 className="text-lg font-semibold mb-6 text-white">COMPANY</h3>
            <ul className="flex flex-col gap-4 text-slate-300 text-center">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 hover:-translate-y-1 transform inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 hover:-translate-y-1 transform inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 hover:-translate-y-1 transform inline-block"
                >
                  Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 hover:-translate-y-1 transform inline-block"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mx-auto">
            <h3 className="text-lg font-semibold mb-6 text-white">
              GET IN TOUCH
            </h3>
            <ul className="flex flex-col gap-4 text-slate-300 text-center">
              <li className="flex items-center justify-center gap-3">
                <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a
                  href="tel:+917558853412"
                  className="hover:text-white transition-colors duration-300"
                >
                  +91 75588534123
                </a>
              </li>
              <li className="flex items-center justify-center gap-3">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a
                  href="mailto:contact@kickzy.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  contact@kickzy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-800">
          <div className="py-8 text-center">
            <p className="text-sm text-slate-400">
              Copyright {new Date().getFullYear()}© kickzy.com - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
