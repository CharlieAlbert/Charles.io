import React from "react";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="intro mt-24 ms-8 w-[60vw]">
        <span className="text-8xl font-semibold">
          <span className="text-secondary">Howdy,</span> I'm Albert.
        </span>
      </div>

      <div className="flex items-center mt-16">
        <span className="block h-0.5 w-24 me-8 bg-white"></span>
        <div className="px-6 py-4 text-base border-inherit bg-secondary hover:bg-hover cursor-pointer">
          <a href="/">Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
