import React from "react";
import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home";

import Product from "./components/Product";
import Contact from "./components/Contact";
import About from "./components/About";






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
