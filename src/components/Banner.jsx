import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
      {/* {left side} */}
      <div className="flex-1 py-8 sm:py-10 md:py=16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg-text-7xl font-bold text-white">
          <p className=" md:text-4xl lg:text-5xl">
            Book Appointment <br />
          </p>
          <p className="mt-4  md:text-4xl lg:text-5xl">
            With 100+ Trusted <br /> Doctors
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            scroolTo(0, 0);
          }}
          className="flex items-center text-sm sm:text-base gap-2 bg-white px-8 py-3 rounded-full text-gray-800  mt-6 hover:scale-105 transition-all duration-300"
        >
          Create Account
        </button>
      </div>

      {/* right side */}

      <div className="hidden md:block md:w-1/2 lg:w-[420px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
