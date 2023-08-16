import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="nav bg-background relative z-30 top-0 right-0 w-[40vw] flex justify-between items-center p-12">
      <div className="navbar">
        <div className="absolute top-0 left-0 p-12 text-3xl flex items-center">
          <a href="/">
            <span className="text-secondary">a</span>
            <span className="text-white">lbert.io</span>
          </a>
        </div>
        <div
          className="menu-toggle animate-pulse fixed cursor-pointer top-0 right-0"
          onClick={() => setNavOpen(!navOpen)}
        >
          <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
            <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
            <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
          </div>
        </div>
      </div>
      <div
        className="nav-overlay fixed bg-form -z-10 top-0 right-0 w-[40vw] h-screen overflow-hidden p-16"
        style={{
          right: navOpen ? "0" : "-100%",
          transitionDelay: navOpen ? "0" : "0",
        }}
      >
        <ul className="nav-links">
          <li className="nav-item">
            <a
              href="/"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                right: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "0.8s" : "0s",
              }}
            >
              Home
            </a>
            <div className="nav-item-wrapper"></div>
          </li>
          <li className="nav-item">
            <a
              href="#About"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                right: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "0.9s" : "0s",
              }}
            >
              About
            </a>
            <div className="nav-item-wrapper"></div>
          </li>
          <li className="nav-item">
            <a
              href="#services"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                right: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "1s" : "0s",
              }}
            >
              Services
            </a>
            <div className="nav-item-wrapper"></div>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                right: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "1.1s" : "0s",
              }}
            >
              Contact
            </a>
            <div className="nav-item-wrapper"></div>
          </li>
        </ul>
        <div className="nav-footer flex">
          <div
            className="location m-2"
            style={{
              bottom: navOpen ? "0" : "-20px",
              opacity: navOpen ? "1" : "0",
              transitionDelay: navOpen ? "1.2s" : "0",
            }}
          ></div>
          <div className="nav-socials">
            <ul>
              <li>
                <a
                  href="/"
                  style={{
                    bottom: navOpen ? "0" : "-20px",
                    opacity: navOpen ? "1" : "0",
                    transitionDelay: navOpen ? "1.3s" : "0",
                  }}
                >
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
              </li>
              <li>
                <a
                  href="/"
                  style={{
                    bottom: navOpen ? "0" : "-20px",
                    opacity: navOpen ? "1" : "0",
                    transitionDelay: navOpen ? "1.4s" : "0",
                  }}
                >
                  <svg
                    fill="currentColor"
                    className="w-6 h-6 m-2 text-secondary hover:text-hover"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  style={{
                    bottom: navOpen ? "0" : "-20px",
                    opacity: navOpen ? "1" : "0",
                    transitionDelay: navOpen ? "1.5s" : "0",
                  }}
                >
                  <svg
                    className="w-6 h-6 m-2 text-secondary hover:text-hover"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
