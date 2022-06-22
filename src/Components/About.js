import React from "react";
import heroview from "../Components/assets/hero-view.png";
import thrift from "../Components/assets/Thrift (1).svg";
import frame9 from "../Components/assets/Thrift.svg";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="md:flex flex-col items-center mt-[100px] md:mt-10 ">
        <div className="md:ml-10 text-center md:text-left md:mb-24 md:w-[744px] w-full">
          <h1 className="text-2xl md:text-[56px]  text-black font-Bitter  md:pt-0 max-w-[595px] md:leading-[80px]">
            All you need to know About{" "}
            <span className="text-orange">Proligan.</span>
          </h1>
          <p className="font-DM-Sans text-grey2 md:text-2xl  mt-4 p-5 md:p-0">
            Proligan is an online financial platform where different thrift
            transactions are streamlined and users can join or create their own
            thrift individually or with a group of people from the comfort of
            their devices.
          </p>
        </div>
        <div className="mt-10 md:mt-0 px-10 md:px-0  w-full max-w-[420px] relative">
          <img src={heroview} alt="phoneframe" className="w-full" />
          <img
            src={frame9}
            alt="thrift"
            className="absolute top-0 -left-0 md:-left-40 w-[200px] md:w-full animate-bounceUp"
          />
          <img
            src={thrift}
            alt="frame9"
            className="absolute bottom-0 md:-right-10 -right-0 w-[200px] md:w-full animate-bounceDown"
          />
        </div>
      </div>
      <div className="md:ml-10 md:mb-[180px] md:mt-[150px] mt-20">
        <h1 className="md:text-5xl font-Bitter text-blue text-center mb-8">
          Our Business Needs
        </h1>
        <p className="md:text-2xl text-grey2 md:px-10 px-5">
          Proligan reguires a mobile app which allows users to create and join
          in thrifts of their choosing with a specified time frame and amount.
          Our product is built on 3 concept which are:
        </p>
        <ul className="md:mt-8 md:px-10 md:text-2xl font-DM-Sans list-disc px-5 mt-4">
          <li className="md:mb-4 mb-2 text-grey1">
            Thrift Transactions:
            <span className="text-grey2">
              save money installmentally towards a goal.
            </span>
          </li>
          <li className="md:mb-4 mb-2 text-grey1">
            Purchases:{" "}
            <span className="text-grey2">
              Make your airtime data and other subscriptions
            </span>
          </li>
          <li className="mb-2 md:mb-0">
            Trade Business:
            <span className="text-grey2">
              Use our trusted platform to make payments
            </span>
          </li>
        </ul>
        <p className="md:mt-8 md:px-10 px-5 mt-4 font-DM-Sans md:text-2xl text-grey2 ">
          Proligan gives you a seamless process for sellers and buyers to
          transact all their businesses as well as build and cultivate better
          financiall patterns and plans.
        </p>
      </div>
      <div className="mb-[140px]">
        <p className="text-blue font-Bitter text-5xl text-center leading-[58px] mb-[56px] md:mt-[180px] mt-[90px]">
          {" "}
          Meet the Team
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-10 bg-white md:px-5">
          <div className="bg-[#F6F6F6] h-[568px] w-[376px] px-10 rounded-lg  pt-10 ">
            <img src="/" alt="/" className="h-[392px] w-[296px] mb-6" />
            <div className="flex flex-col items-center font-DM-Sans ">
              <h3 className="text-[32px]">Banjo Timilehin</h3>
              <p className="mt-2 text-grey2 text-[20px]">software Engineer</p>
            </div>
          </div>

          <div className="bg-[#F6F6F6] h-[568px] w-[376px] px-10 pt-10 ">
            <img src="/" alt="/" className="h-[392px] w-[296px] mb-6" />
            <div className="flex flex-col items-center font-DM-Sans">
              <h3 className="text-[32px]">Banjo Timilehin</h3>
              <p className="mt-2 text-grey2 text-[20px]">software Engineer</p>
            </div>
          </div>

          <div className="bg-[#F6F6F6] h-[568px] w-[376px] px-10 pt-10 ">
            <img src="/" alt="/" className="h-[392px] w-[296px] mb-6" />
            <div className="flex flex-col items-center font-DM-Sans">
              <h3 className="text-[32px]">Banjo Timilehin</h3>
              <p className="mt-2 text-grey2 text-[20px]">software Engineer</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
