import React from "react";
import logo from "../../assets/image/image4.png";

function Navbar() {
  return (
    <div className="w-full p-4 flex gap-2 flex-col">
      <nav className="w-full">
        <div className="w-full flex items-center justify-between">
          {/* Desktop Links */}
          <ul className="gap-4 list-none text-xl font-semibold hidden sm:flex">
            <li>Services</li>
            <li>Work</li>
            <li>Home</li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="sm:hidden text-2xl cursor-pointer">
            <i className="ri-menu-2-line"></i>
          </div>

          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10" />
            <h1 className="text-[1.3rem] font-semibold">Astratto</h1>
          </div>

          {/* Desktop Buttons */}
          <div className="gap-6 hidden sm:flex">
            <button className="text-xl font-semibold cursor-pointer">
              Careers
            </button>
            <button className="text-[1rem] font-medium cursor-pointer border border-amber-300 rounded-full px-3 py-[0.1rem]">
              Contact Us
              <i className="ri-arrow-right-up-line text-fuchsia-600 font-light text-xl ml-1"></i>
            </button>
          </div>
        </div>
      </nav>

      <div className="w-full h-[1px] bg-gray-400"></div>
    </div>
  );
}

export default Navbar;
