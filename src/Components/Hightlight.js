import React from "react";
import Hightlightframe from "./assets/frame2.png";
import iphone14 from "./assets/iPhone 14.png";

const Hightlight = () => {
  return (
    <>
      <div className="relative">
        <img src={Hightlightframe} alt="frame" className="mt-20 " />
        <div className="absolute top-0 right-1/3">
          <h1 className="font-Bitter text-4xl">our Hightlights</h1>
          <p className="text-grey2 font-DM-Sans text-xl">our platform provides a new door to your finances</p>
        </div>
      </div>
      <div className="flex justify-around bg-blue mt-10">
        <div>
          <h1 className="font-Bitter text-6xl text-white mt-10">
            Get Tips on How to be
            <br /> finacially stable!
          </h1>
          <p className="font-DM-Sans text-grey4 text-2xl mt-10">
            {" "}
            Every month, Proligan has interview with the most consistent group
            <br /> of people and they can give tips on how they have been able
            to
            <br /> maintain the habit of saving.
          </p>
        </div>

        <img src={iphone14} alt="phone" className="w-1/5 mt-8" />
      </div>
    </>
  );
};

export default Hightlight;
