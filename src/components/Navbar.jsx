import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className=" flex flex-col items-center text-sm py-0 duration-300 ">
      <div className="flex items-center justify-between w-full px-4">
        <img
          className="w-40 cursor-pointer"
          src={assets.Aashahospitallogo}
          alt="Hospital Logo"
        />
        <ul className="hidden md:flex items-start gap-10 font-bold   text-gray-800 ">
          <NavLink to="/">
            <li className="py-2 duration-100">HOME</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/doctors">
            <li className="py-2 duration-100">ALL DOCTORS</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/about">
            <li className="py-2 duration-100">ABOUT</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/contact">
            <li className="py-2 duration-100">CONTACT</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-4">
          {token ? (
            <div className="relative group">
              {/* Profile & Dropdown Icon */}
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  className="w-16 rounded-full"
                  src={assets.profile_pic}
                  alt="Profile"
                />
                <img
                  className="w-2.5"
                  src={assets.dropdown_icon}
                  alt="Dropdown Icon"
                />
              </div>

              <div className="absolute   top-full mt-1 bg-white shadow-lg rounded-lg w-36 text-base font-medium text-gray-600 z-20 hidden group-hover:flex flex-col">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p
                    onClick={() => navigate("/my-profile")}
                    className="hover:text-primary cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/my-apoinment")}
                    className="hover:text-primary cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    className="hover:text-primary cursor-pointer"
                    onClick={() => setToken(false)}
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-primary text-white px-8 py-3 rounded-full hidden md:block"
            >
              Create Account
            </button>
          )}

          <img
            className="w-6 md:hidden"
            onClick={() => setShowMenu(true)}
            src={assets.menu_icon}
            alt=""
          />
          {/*  ------------mobile menu  ---------- */}
          <div
            className={` ${
              showMenu ? "fixed w-full" : "h-0 w-0"
            } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
          >
            <div className="flex items-center justify-between px-5 py-6">
              <img className="w-36 " src={assets.Aashahospitallogo} alt="" />
              <img
                className="w-10"
                onClick={() => setShowMenu(false)}
                src={assets.cross_icon}
                alt=""
              />
            </div>
            <ul className="flex flex-col items-center gap-2  px-5 text-lg font-medium">
              <NavLink onClick={() => setShowMenu(false)} to="/">
                <p className="px-4 py-2 rounded inline-block">HOME</p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/doctors">
                <p className="px-4 py-2 rounded inline-block"> ALL DOCTORS</p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/about">
                <p className="px-4 py-2 rounded inline-block">ABOUT</p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/contact">
                <p className="px-4 py-2 rounded inline-block">CONTACT</p>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
