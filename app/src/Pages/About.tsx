import React from "react";

const About = () => {
  return (
    <div className="bg-secondary text-center pb-16 pt-12">
      <div className="pb-5 flex flex-col items-center justify-center">
        <p className="tracking-widest font-medium text-transform: uppercase text-base">
          A little about me
        </p>
        <svg
          className="w-5 h-5 text-arrow dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 8"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
          />
        </svg>
      </div>

      <p className="px-8 text-sm">
        I am not simply a computer enthusiast; I am driven by a curiosity that
        extends beyond the digital realm. Drawing inspiration from my
        surroundings, I infuse my work with a distinctive viewpoint, influenced
        by the colors of nature, the rhythm of music, and the stories of old.
        However, it is the vibrant community of developers that truly fuels my
        passion. Through collaboration, knowledge sharing, and embracing
        collective brilliance, I continue to evolve and thrive in the
        ever-changing landscape of technology.
      </p>
    </div>
  );
};

export default About;
