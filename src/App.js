import React from "react";

import {Routes,Route} from "react-router-dom"
import Home from "./Components/Home";

import Product from "./Components/Product";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Navbar from "./Components/Navbar";





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
