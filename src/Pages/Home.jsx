import React from "react";
import Nav from "../Components/Nav";
import Resume from "../files/MyResume.pdf";

const Home = () => {
  return (
    <div className="bg-background h-screen z-0" id="home">
      <Nav />
      <div className="pt-12">
        <div className="intro mt-12 ms-8 w-[60vw]">
          <span className="text-8xl font-semibold">
            <span className="text-secondary">Howdy,</span> I'm Albert.
          </span>
          {/* <AnimatedText /> */}
        </div>

        <div className="flex items-center mt-16">
          <span className="block h-0.5 w-24 me-8 bg-white"></span>
          <div className="px-6 py-4 text-base border-inherit bg-secondary hover:bg-hover cursor-pointer">
            <a
              href={Resume}
              download="MyResume"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="mt-12 p-8 w-full flex flex-col items-center justify-center absolute bottom-0 tracking-widest font-extralight text-transform: uppercase text-base">
          <p className="p-4">see more</p>
          <svg
            className="w-6 h-6 text-white dark:text-white animate-bounce font-extralight"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
