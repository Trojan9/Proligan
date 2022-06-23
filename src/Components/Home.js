import lemon from "./assets/Ellipse lemon.png";
import iphoneframe from "./assets/phone-ellipse.png";
import apple from "./assets/applelogo.png";
import playstore from "./assets/googleplay.png";
import orange from "./assets/Ellipse orange.png";
import purple from "./assets/Ellipse purle.png";
import Highlight from "./Hightlight";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="md:flex justify-between items-center mt-24 md:mt-10">
        <div className="md:ml-10 text-center md:text-left">
          <h1 className="text-2xl lg:text-6xl  text-black font-Bitter mt-8 md:pt-0">
            The best way to <span className="text-orange">save</span>
            <br /> and <span className="text-blue">plan</span> for the future!
          </h1>
          <p className="font-DM-Sans text-grey2 text-sm md:text-xl md:mt-14 mt-4 mx-7 md:mx-0">
            Proligan gives you a new way to plan your finance and fund your
            expenses with a smile on your face.
          </p>
          <button className="homebtn hidden md:block rounded border-2 text-blue mt-6 p-2 text-3xl font-DM-Sans md:mt-14">
            Download Now
          </button>
        </div>
        <div className="mt-10 md:mt-0 flex justify-center px-10">
          <img src={iphoneframe} alt="phoneframe" className="w-full h-full" />
        </div>
      </div>
      <div className="flex justify-center mt-8 md:mt-14 font-DM-Sans text-xs md:text-lg md:justify-start md:ml-10">
        <button className="bg-white rounded border-grey3 border-2 text-black  flex  px-3 mr-3 py-1">
          <img src={apple} alt="applelogo" className="mr-2" /> Get on Iphone
        </button>

        <button className="bg-white rounded border-grey3 border-2 text-black flex px-3 mr-3 py-1">
          <img src={playstore} alt="playstorelogo" className="mr-2" /> Get on
          Android
        </button>
      </div>
      <div className="flex justify-between mt-10 mx-7">
        <img src={orange} alt="orange" className="ml-10" />
        <img src={purple} alt="purple" />
        <img src={lemon} alt="lemon" className="mr-10" />
      </div>
      <Highlight />
      <Footer />
    </>
  );
};

export default Home;
