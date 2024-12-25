import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div data-aos="fase-down" 
    className="fixed top-0 right-0 w-full z-[99] bg-white/10 backdrop-blur-sm py-4 sm:py-4">
      <div className="container">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-4 font-bold text-green-500 text-2xl ">
            <img src={Logo} alt="" className="w-10" />
            <span className="font-bold"> EV </span>
          </div>
          <div className="text-black hidden md:block">
            <ul className=" flex items-end gap-6 text-xl py-4 sm:py-0">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="Banner.jsx">New Feature</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="text-black border-2 border-white px-3 py-1 rounded-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
