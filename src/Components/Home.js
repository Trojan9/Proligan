import React from "react";
import apple from "./assets/applelogo.png";
import playstore from "./assets/googleplay.png";
import iphoneframe from "./assets/phone-ellipse.png";
import orange from "./assets/Ellipse orange.png";
import purple from "./assets/Ellipse purle.png";
import lemon from "./assets/Ellipse lemon.png";

const Home = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-20">
        <div className="ml-10">
          <h1 className="text-6xl text-black font-Bitter mt-4">
            The best way to <span className="text-orange">save</span>
            <br/> and <span className="text-blue">plan</span> for the future!
          </h1>
          <p className="font-DM-Sans text-grey2 text-xl mt-5">
            Proligan gives you a new way to plan your finance and fund
            <br /> your expenses with a smile on your face.
          </p>
          <button className="rounded border-2 text-blue mt-6 p-2 text-3xl font-DM-Sans">
            Download Now
          </button>
          <div className="flex mt-8 font-DM-Sans text-lg">
            <button className="bg-white rounded border-grey3 border-2 text-black  flex  px-3 mr-3 py-1">
              <img src={apple} alt="applelogo" className="mr-2" /> Get on Iphone
            </button>

            <button className="bg-white rounded border-grey3 border-2 text-black flex px-3 mr-3 py-1">
              <img src={playstore} alt="playstorelogo" className="mr-2" /> Get
              on Android
            </button>
          </div>
        </div>
        <div className="">
          <img src={iphoneframe} alt="phoneframe" className="w-3/4" />
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <img src={orange} alt="orange" className="ml-10" />
        <img src={purple} alt="purple" />
        <img src={lemon} alt="lemon" className="mr-10" />
      </div>
    </>
  );
};

export default Home;
