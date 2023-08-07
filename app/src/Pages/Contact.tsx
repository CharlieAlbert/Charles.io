import React from "react";

const Contact = () => {
  return (
    <div className="bg-background" id="contact">
      <div className="py-7 flex flex-col items-center justify-center">
        <p className="p-4 text-secondary tracking-widest font-medium text-transform: uppercase text-base">
          Drop me a line
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
          />
        </svg>
      </div>
      {/* form */}

      <section
        id="contact"
        className="relative w-full min-h-screen bg-background text-red-500"
      >
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary h-32 w-full"></div> */}

        <div className="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 p-5 md:px-0 md:flex md:flex-row mx-2">
            <div className="w-full lg:w-1/2 h-full p-5 pt-8">
              {/* <h3 className="text-2xl font-medium mb-5">My Socials</h3> */}
              <div className="flex flex-col gap-3">
                <a href="/" className="flex items-center p-2" title="GitHub">
                  <svg
                    fill="currentColor"
                    className="w-6 h-6 m-2 text-secondary hover:text-hover"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="/" className="flex items-center p-2" title="Linkedn">
                  <svg
                    fill="currentColor"
                    className="w-6 h-6 m-2 text-secondary hover:text-hover"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z" />
                  </svg>
                </a>
                <a href="/" className="flex items-center p-2" title="copy">
                  <svg
                    className="w-6 h-6 m-2 text-secondary hover:text-hover"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"
                    />
                  </svg>
                </a>
                <a href="/" className="flex items-center p-2" title="Twitter">
                  <svg
                    className="w-6 h-6 m-2 text-secondary hover:text-hover"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <form action="#" className="w-full md:w-1/2 text-secondary">
            {/* <h2 className="text-medium pb-3 font-semibold">Send Message</h2> */}
            <div>
              <div className="flex flex-col mb-3">
                <label htmlFor="name" className="text-base">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="px-3 py-2 bg-form border-none focus:border-secondary focus:outline-none focus:bg-form focus:text-white"
                  autoComplete="off"
                ></input>
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="email" className="text-base">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="px-3 py-2 bg-form border-none focus:border-secondary focus:outline-none focus:bg-form focus:text-white"
                  autoComplete="off"
                ></input>
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="message" className="text-base">
                  Message
                </label>
                <textarea
                  rows={4}
                  id="message"
                  className="px-3 py-2 bg-form border-none focus:border-secondary focus:outline-none focus:bg-form focus:text-white"
                ></textarea>
              </div>
            </div>
            <div className="w-full pt-3">
              <button
                type="submit"
                className="w-full text-white bg-secondary px-6 py-4 transition duration-50 focus:outline-none font-base hover:bg-hover hover:text-white text-xl cursor-pointer"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
