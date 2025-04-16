import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <footer className="bg-white text-gray-700 px-6 md:px-20 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Side - Logo & Description */}
        <div className="md:w-1/3">
          <div className="flex items-center gap-2">
            <img
              src={assets.Aashahospitallogo}
              alt="Prescripto Logo"
              className="w-20"
            />
            <h2 className="text-xl font-bold text-primary">AASHA Hospital</h2>
          </div>
          <p className="mt-4 text-sm text-gray-800 leading-relaxed">
            <span className="text-primary"> AASHA Hospital </span> is one of the
            best hospitals in Deoria equipped with the world’s leading
            healthcare technology and reputed consultants to provide
            comprehensive health care services
          </p>
        </div>

        {/* Middle Section - Company Links */}
        <div className="md:w-1/4">
          <h3 className="text-lg font-bold text-gray-800 mb-3">COMPANY</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/" className="hover:text-blue-500 text-gray-800">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500 text-gray-800">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 text-gray-800">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 text-gray-800">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="md:w-1/4 mb-16">
          <h3 className="text-lg text-gray-800 font-bold ">GET IN TOUCH</h3>
          <p className="text-sm text-gray-800 ">+91 8887299937</p>
          <p className="text-sm  text-primary">aashhospital@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
