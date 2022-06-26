import React from "react";
import logo from "../assets/logo.png";
import twitter from "../assets/twitterlogo.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebooklogo.png";

const Footer = () => {
  return (
    <>
      <div className="flex md:items-center  pb-8 flex-col-reverse md:flex-row pt-12 md:px-24">
        <div className="mt-20 md:mr-32 flex flex-col items-center w-24 mx-auto ">
          <img src={logo} alt="logo" />
          <div className="flex justify-between md:mt-10 mt-4 w-full">
            <img
              src={twitter}
              alt="twitter"
              className="w-2.5 md:w-full h-2 md:h-full md:mr-4"
            />
            <img
              src={facebook}
              alt="facebook"
              className="w-2.5 md:w-full h-2 md:h-full md:mr-4"
            />
            <img
              src={instagram}
              alt="instagram"
              className="w-2.5 md:w-full h-2 md:h-full"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-10  font-DM-Sans gap-y-8 gap-x-24 w-full p-4">
          <ul>
            <li className="mb-4 text-xl ">Support</li>
            <li className="mb-4 text-grey1">Management</li>
            <li className="mb-4 text-grey1">Privacy Policy</li>
            <li className="mb-4 text-grey1">Management</li>
            <li className="text-grey1">Privacy Policy</li>
          </ul>
          <ul>
            <li className="mb-4 text-xl">Resources</li>
            <li className="mb-4 text-grey1 ">Management</li>
            <li className="mb-4 text-grey1">Privacy Policy</li>
            <li className="mb-4 text-grey1">Management</li>
            <li className="text-grey1">Privacy Policy</li>
          </ul>
          <ul>
            <li className="mb-4 text-xl">About Us</li>
            <li className="mb-4 text-grey1">Management</li>
            <li className="mb-4 text-grey1">Privacy Policy</li>
            <li className=" text-grey1">Management</li>
          </ul>
          <ul>
            <li className="mb-4 text-xl">Company</li>
            <li className="mb-4 text-grey1">Management</li>
            <li className="text-grey1">Privacy Policy</li>
          </ul>
        </div>
      </div>
        <p className="text-center md:mb-[39px] text-grey2 font-DM-Sans mb-4">Copyright © Proligan. All rights reserved.</p>
    </>
  );
};

export default Footer;
