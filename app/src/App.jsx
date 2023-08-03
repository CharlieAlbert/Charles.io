import React from "react";
import "./App.css";
import _SmoothScroll from "smooth-scroll";

//Components
import Header from "./Components/Header";

//Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const scroll = new _SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  return (
    <div className="App-header font-inter">
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
