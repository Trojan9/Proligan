import React from "react";
import heroview from "../assets/hero-view.png";
import tradeworth from "../assets/Trade-worth.svg";
import totalthrift from "../assets/Total-thrift.svg";
import designer from "../assets/tobi-img.png";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="md:flex flex-col md:flex-row items-center mt-[100px] md:mt-10  w-full justify-between">
        <div className="md:ml-10 md:text-left md:mb-24 md:w-1/2 lg:w-full text-center">
          <h1 className="text-2xl lg:text-[56px] md:text-5xl text-black font-Bitter  md:pt-0 lg:w-[595px] px-10 md:px-0  md:leading-[80px]">
            All you need to know About{" "}
            <span className="text-orange">Proligan.</span>
          </h1>
          <p className="font-DM-Sans text-grey2 md:text-2xl  mt-4 p-3 md:p-0 lg:w-4/5 ">
            Proligan is an online financial platform where different thrift
            transactions are streamlined and users can join or create their own
            thrift individually or with a group of people from the comfort of
            their devices.
          </p>
        </div>
        <div className="mt-10 md:mt-0 px-10  lg:px-0  w-full max-w-[420px] relative">
          <img src={heroview} alt="phoneframe" className="w-full" />
          <div className="absolute top-0 -left-0 md:-left-40 w-[320px]  animate-bounceUp">
            <img src={tradeworth} alt="totalthrift" />
          </div>
          <div className="absolute bottom-0  -right-0  w-[252px]  animate-bounceDown">
            <img src={totalthrift} alt="/tradeworth" />
          </div>
        </div>
      </div>
      <div className="md:ml-10 md:mb-[180px] md:mt-[150px] mt-20">
        <h1 className="md:text-5xl font-Bitter text-blue text-center mb-8 text-2xl">
          Our Business Needs
        </h1>
        <p className="md:text-2xl text-grey2 md:px-10 px-5 md:mb-8">
          Proligan reguires a mobile app which allows users to create and join
          in thrifts of their choosing with a specified time frame and amount.
          Our product is built on 3 concept which are:
        </p>
        <ul className="  md:text-2xl font-DM-Sans list-disc md:ml-20 ml-12">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 bg-white md:mx-[112px] mx-5 justify-center">
          <div className="bg-[#F6F6F6]  h-full w-full px-10 pt-10  ">
            <img
              src="/"
              alt="software engineer"
              className="h-[392px] w-[296px] mb-6"
            />
            <div className="flex flex-col items-center font-DM-Sans ">
              <h3 className="text-[32px]">Banjo Timilehin</h3>
              <p className="mt-2 text-grey2 text-[20px] mb-9">
                Software Engineer
              </p>
            </div>
          </div>

          <div className="bg-[#F6F6F6] h-full w-full px-10 pt-10 ">
            <img
              src="/"
              alt="software engineer"
              className="h-[392px] w-[296px] mb-6"
            />
            <div className="flex flex-col items-center font-DM-Sans">
              <h3 className="text-[32px]">Adekola Victor</h3>
              <p className="mt-2 text-grey2 text-[20px] mb-9">
                Software Engineer
              </p>
            </div>
          </div>

          <div className="bg-[#F6F6F6] h-full w-full px-10 pt-10 ">
            <img
              src="/"
              alt="sofftware engineer"
              className="h-[392px] w-[296px] mb-6"
            />
            <div className="flex flex-col items-center font-DM-Sans">
              <h3 className="text-[32px]">Alamutu Temi</h3>
              <p className="mt-2 text-grey2 text-[20px] mb-9">
                Software Engineer
              </p>
            </div>
          </div>

          <div className="bg-[#F6F6F6] h-full w-full px-10 pt-10 ">
            <img
              src="/"
              alt="product manager"
              className="h-[392px] w-[296px] mb-6"
            />
            <div className="flex flex-col items-center font-DM-Sans">
              <h3 className="text-[32px]">Oludiya Daniel</h3>
              <p className="mt-2 text-grey2 text-[20px] mb-9">
                Product Manager
              </p>
            </div>
          </div>

          <div className="bg-[#F6F6F6] h-full w-full px-10 pt-10 ">
            <img
              src={designer}
              alt="product designer"
              className="h-[392px] w-[296px] mb-6"
            />
            <div className="flex flex-col items-center font-DM-Sans">
              <h3 className="text-[32px]">Owoade Tobiloba</h3>
              <p className="mt-2 text-grey2 text-[20px] mb-9">
                Product Designer
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
