import React from "react";
import { assets } from "../assets/assets";

function Header_pager() {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* {Left side page} */}
      <div className="md:w-1/2 flex flex-col justify-center gap-4 py-10 m-auto md:py-[10vw] md:md-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Your Trusted Hospital <br />
          Healthcare in Rudrapur Deoria
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-medium">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" />
            schedule your appointment hassle-free
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-800 text-sm m-auto hover:scale-105 transition-all duration-300"
        >
          Book appoinment{" "}
          <img className="w-3 " src={assets.arrow_icon} alt="icon" />{" "}
        </a>
      </div>

      {/* {Right side page} */}

      <div className="md:w-1/2 relative">
        <img
          className=" md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header_pager;
