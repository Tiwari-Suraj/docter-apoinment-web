import React, { useState } from "react";
import { BsArrowUpCircleFill, BsArrowDownCircleFill } from "react-icons/bs";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-primary text-white text-2xl text-center p-4">
      <div
        className="flex justify-center items-center gap-2  cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <strong>Important Updates: COVID-19 vaccinations</strong>
        {isOpen ? <BsArrowUpCircleFill /> : <BsArrowDownCircleFill />}
      </div>
      {isOpen && (
        <div className="mt-2">
          <p>COVID-19: We are vaccinating all eligible patients. Learn more:</p>
          <p className="mt-1">
            <a href="#" className="underline">
              Vaccines, Boosters & Additional Doses
            </a>{" "}
            |
            <a href="#" className="underline">
              {" "}
              Patient Portal
            </a>{" "}
            |
            <a href="#" className="underline">
              {" "}
              Patient & Visitors
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Header;
