import React from "react";
import Hightlightframe from "./assets/frame2.png";
import iphone14 from "./assets/iPhone 14.png";
import Hightlightframe2 from "./assets/frame1.png";

const Hightlight = () => {
  return (
    <>
      <div className="md:relative">
        <img
          src={Hightlightframe}
          alt="frame"
          className="mt-20 hidden md:block"
        />
        <img
          src={Hightlightframe2}
          alt="frame"
          className="mt-20 block md:hidden"
        />
        <div className="absolute top-0 right-1/3 p-3 text-center inset-x-1/4 hidden md:block">
          <h1 className="font-Bitter text-4xl ">our Hightlights</h1>
          <p className="text-grey2 font-DM-Sans text-xl ">
            our platform provides a new door to your finances
          </p>
        </div>
      </div>
      <div className="md:flex-row flex-col flex justify-between bg-blue md:pl-24 pl-6 mt-6 items-center md:items-start">
        <div className=" ml-1 md:mt-20 pt-10 md:pt-0 ">
          <h1 className="font-Bitter lg:text-6xl text-2xl text-white md:mt-10 text-center lg:text-left">
            Get Tips on How to be
            <br /> finacially stable!
          </h1>
          <p className="font-DM-Sans text-grey4 lg:text-2xl text-sm mt-4 text-center md:text-left md:max-w-3xl px-7 md:px-0">
            {" "}
            Every month, Proligan has interview with the most consistent group
            of people and they can give tips on how they have been able to
            maintain the habit of saving.
          </p>
        </div>

        <img src={iphone14} alt="phone" className="mt-12 mb-16 md:mb-2" />
      </div>
    </>
  );
};

export default Hightlight;
