import React from "react";

const Services = () => {
  return (
    <div className="bg-background min-h-[100vh] py-10" id="services">
      <div className="py-7 flex flex-col items-center justify-center">
        <p className="p-4 text-secondary tracking-widest font-medium text-transform: uppercase text-base">
          I do amazing things for clients
        </p>
        <svg
          className="w-6 h-6 text-arrow dark:text-white"
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

      <div className="grid grid-cols-3 gap-4 m-4">
        <div className="group flex flex-col justify-center items-center">
          <div className="flex h-52 w-52 shrink-0 grow-0 items-center justify-center border border-secondary rounded-full bg-background text-secondary group-hover:bg-secondary transition ease-in-out delay-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 group-hover:text-white group-hover:scale-125 transition ease-in-out delay-150"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 14v4m-4 1h8M1 10h18M2 1h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
              />
            </svg>
          </div>
          <div className="text-subtitle text-transform: uppercase font-base m-5">
            <p>Web design</p>
          </div>
          <div className="text-subtitle text-sm text-center">
            <p>
              With a touch of innovation and a flair for aesthetics, I create
              captivating web experiences that leave a lasting impression. Let
              me mold your vision into an online masterpiece that enchants and
              engages users at every click.
            </p>
          </div>
        </div>
        <div className="group flex flex-col justify-center items-center">
          <div className="flex h-52 w-52 shrink-0 grow-0 items-center justify-center border border-secondary rounded-full bg-background text-secondary group-hover:bg-secondary transition ease-in-out delay-150">
            <svg
              className="h-12 w-12 group-hover:text-white group-hover:scale-125 transition ease-in-out delay-150"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m5 5 4 4-4 4m5 0h5M2 1h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
              />
            </svg>
          </div>
          <div className="text-subtitle text-transform: uppercase font-base m-5">
            <p>Web development</p>
          </div>
          <div className="text-subtitle text-sm text-center">
            <p>
              As a cosmic voyager through the boundless universe of code, I turn
              your ideas into responsive websites and interactive applications
              that breathe life into your digital dreams.
            </p>
          </div>
        </div>
        <div className="group flex flex-col justify-center items-center">
          <div className="flex h-52 w-52 shrink-0 grow-0 items-center justify-center border border-secondary rounded-full bg-background text-secondary group-hover:bg-secondary transition ease-in-out delay-150">
            <svg
              className="h-12 w-12 group-hover:text-white group-hover:scale-125 transition ease-in-out delay-150"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 6V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Zm0 0v3a4 4 0 0 1-4 4H2m15-7V2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Zm0 0v3a4 4 0 0 1-4 4h-1"
              />
            </svg>
          </div>
          <div className="text-subtitle text-transform: uppercase font-base m-5">
            <p>poetry</p>
          </div>
          <div className="text-subtitle text-sm text-center">
            <p>
              With a touch of innovation and a flair for aesthetics, I create
              captivating web experiences that leave a lasting impression. Let
              me mold your vision into an online masterpiece that enchants and
              engages users at every click.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
