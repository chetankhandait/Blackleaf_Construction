import React from "react";
const phoneNumber = "📞 +91 8699285111";
const email = "📩 cg5031046@gmail.com";
const NavBar = () => {
  return (
    <div>
      <div className="flex uppercase   font-sans font-semibold justify-around text-[#fff] w-full fixed top-3  z-40 sm:top-6  ">
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <img src="/blackleaf.jpeg" className="w-12" />
          <h2 className="text-[13px]">
            Blackleaf <br /> Construction
          </h2>
        </div>
        <div className="flex flex-col  text-[13px] gap-2  text-right  sm:flex-row sm:gap-6">
          <h3>
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </h3>
          <h3 className="cursor-pointer">
            {" "}
            <a href={`mailto:${email}`} className="email-link">
              {email}
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
