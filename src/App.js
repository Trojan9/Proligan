import React from "react";
import Navbar from "./Components/Navbar";
import {Routes,Route} from "react-router-dom"
import Home from "./Components/Home";
import Menu from "./Components/Menu"
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import About from "./Components/About";






function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    </Routes>
      
    </>
  );
}

export default App;
