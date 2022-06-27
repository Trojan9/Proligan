import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const Navbar = () => {
  const handleClick = () => {
    const navbar = document.querySelector(".navbar");
    const listitems = document.querySelectorAll(".list-item");

    navbar.classList.toggle("open");
    listitems.forEach((item) =>
      item.addEventListener("click", () => navbar.classList.remove("open"))
    );
  };

  return (
    <>
      <header className="header flex items-center justify-between  w-full  md:flex-row px-6 py-2 lg:px-10 lg:py-5">
        <div>
          <Link to="/">
            <img src={Logo} alt="proligan" className="md:w-full w-1/2" />
          </Link>
        </div>
        <nav className="navbar">
          <ul className="text-grey1 font-DM-Sans text-xl">
            <li className="list-item">
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li className="list-item">
              <Link to="/product">Product</Link>
            </li>
            <li className="list-item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="list-item">
              <Link to="/About">About</Link>
            </li>
            <li className="list-item  text-blue text-2xl md:hidden">
              Download Now
            </li>
          </ul>
        </nav>
        <div className="md:hidden ">
          <button onClick={handleClick}>
          <DensityMediumIcon className="mt-5" />
          </button>
        </div>
        <div className="navbtn">
          <button className="rounded border-2 text-blue border-blue p-2">
            Download Now
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
