import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/about" element= {<About/>} />
          <Route path="/services" element= {<Services/>} />
          <Route path="/contact" element= {<Contact/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App