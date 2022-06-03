import React from "react";
import logo from "./assets/logo.png";
import twitter from "./assets/twitterlogo.png";
import instagram from "./assets/instagram.png";
import facebook from "./assets/facebooklogo.png";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-around pb-8">
        <div className="mt-20">
          <img src={logo} alt="logo" />
          <div className="flex items-center justify-around mt-10">
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10 font-DM-Sans">
          <ul>
            <li className="mb-3 text-xl ">Support</li>
            <li className="mb-3 text-grey1">Management</li>
            <li className="text-grey1">Privacy Policy</li>
          </ul>
          <ul>
            <li className="mb-3 text-xl">Resources</li>
            <li className="mb-3 text-grey1 ">Management</li>
            <li className="text-grey1">Privacy Policy</li>
          </ul>
          <ul>
            <li className="mb-3 text-xl">About Us</li>
            <li className="mb-3 text-grey1">Management</li>
            <li className="text-grey1">Privacy Policy</li>
          </ul>
          <ul>
            <li className="mb-3 text-xl">Company</li>
            <li className="mb-3 text-grey1">Management</li>
            <li className="text-grey1">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
