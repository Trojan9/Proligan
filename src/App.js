import React from "react";

import {Routes,Route} from "react-router-dom"
import Home from "../src/components/Home.js";

import Product from "../src/components/Product.js";
import Contact from "../src/components/Contact.js";
import About from "../src/components/About.js";
import Navbar from "../src/components/Navbar.js";





function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
  
    <Route path="product" element={<Product/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="about" element={<About/>}/>
    </Routes>
      
    </>
  );
}

export default App;
