import React from "react";
import Logo from "./assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="grid grid-cols-3 mt-3 font-DM-Sans  ">
        <img src={Logo} alt="logo" className="ml-10" />

        <ul className="grid  grid-cols-4  items-center text-xl text-grey1 cursor-pointer">
          <li>Home</li>
          <li>Product</li>
          <li>Contact</li>
          <li>About</li>
        </ul>

        <button className=" rounded border-2 text-blue w-2/5 ml-10 text-xl">
          Download Now
        </button>
      </div>
    </>
  );
};

export default Navbar;
