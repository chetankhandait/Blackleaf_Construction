import React from "react";
import { Link } from "react-router-dom";
const phoneNumber1 = "📞 +91 98156 50378";
const phoneNumber2 = "📞 +91 98785 70378";
const NavBar = () => {
  return (
    <div>
      <div className="flex uppercase items-center  font-sans font-semibold justify-around text-[#fff] w-full fixed top-3  z-40 sm:top-6  ">
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <img src="/blackleaf.jpeg" className="w-12" />
          <h2 className="text-[13px] hidden sm:block">
            Blackleaf <br /> Construction
          </h2>
        </div>
        <div className="flex flex-col  text-[13px] gap-2  text-right  sm:flex-row sm:gap-6">
          <h3>
            <a href={`tel:${phoneNumber1}`}>{phoneNumber1}</a>
          </h3>
          <h3 className="cursor-pointer">
            {" "}
            <a href={`tel:${phoneNumber2}`} className="email-link">
              {phoneNumber2}
            </a>
          </h3>
        </div>
        <Link to="/contact">


        <button className="uppercase btn p-2 rounded-md text-sm">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
