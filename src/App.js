import React from "react";

import {Routes,Route} from "react-router-dom"
import Home from "../src/components/Home";

import Product from "../src/components/Product";
import Contact from "../src/components/Contact";
import About from "../src/components/About";
import Navbar from "../src/components/Navbar";





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
