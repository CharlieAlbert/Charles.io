import React from "react";

const Services = () => {
  return (
    <div className="bg-background min-h-[100vh]">
      <div className="py-7 flex flex-col items-center justify-center">
        <p className="text-secondary tracking-widest font-medium text-transform: uppercase text-base">
          I do amazing things for clients
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

      <div className="grid grid-cols-3 gap-4">
        <div className="group">
          <div className="border rounded-full border-secondary p-16 hover:bg-secondary transition ease-in-out delay-150">
            <svg
              className="w-12 h-12 text-secondary dark:text-white group-hover:text-white group-hover:scale-125 transition ease-in-out delay-150"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14v4m-4 1h8M1 10h18M2 1h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
              />
            </svg>
          </div>
        </div>
        <div className="group">
          <div className="flex items-center justify-center border rounded-full border-secondary p-16 hover:bg-secondary transition ease-in-out delay-150">
            <svg
              className="w-12 h-12 text-secondary dark:text-white group-hover:text-white group-hover:scale-125 transition ease-in-out delay-150"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m5 5 4 4-4 4m5 0h5M2 1h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
              />
            </svg>
          </div>
        </div>
        <div className="group">
          <div className="border rounded-full border-secondary p-16 hover:bg-secondary transition ease-in-out delay-150">
            <svg
              className="w-12 h-12 text-secondary dark:text-white group-hover:text-white group-hover:scale-125 transition ease-in-out delay-150"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 6V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Zm0 0v3a4 4 0 0 1-4 4H2m15-7V2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Zm0 0v3a4 4 0 0 1-4 4h-1"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
