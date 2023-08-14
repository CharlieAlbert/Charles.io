import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-8">
      <nav>
        <div className="absolute top-0 left-0 p-8 text-3xl">
          <a href="/">
            <span className="text-secondary">a</span>
            <span className="text-white">lbert.io</span>
          </a>
        </div>
        <section className="MOBILE-MENU flex fixed top-0 right-[-250px] h-screen z-50">
          <div
            className="group HUMBERGER-ICON space-y-2 absolute top-0 right-0 p-8 cursor-pointer rotate-180"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-2 animate-pulse bg-white group-hover:w-8 transition ease-in-out delay-150"></span>
            <span className="block h-0.5 w-4 animate-pulse bg-white group-hover:w-8 transition ease-in-out delay-150"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div
            className={isNavOpen ? "showMenuNav bg-secondary" : "hideMenuNav"}
          >
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-6 cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/home">Home</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/stack">My Stack</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/services">Services</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Header;
