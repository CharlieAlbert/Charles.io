import React from "react";
import "./App.css";
import _SmoothScroll from "smooth-scroll";

//Components
import Header from "./Components/Header";

//Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";

export const scroll = new _SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  return (
    <div className="App-header font-inter">
      <Services />
    </div>
  );
}

export default App;
