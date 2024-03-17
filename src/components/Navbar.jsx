import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

function Navbar() {
  const [navClick, setNavClick] = useState(false);

  const handleClick = () => {
    const listElement = document.getElementById("list");
    if (!listElement) {
      console.error("No list element found!");
      return;
    }
    if (listElement === null || window.matchMedia === null) {
      console.error("listElement or window.matchMedia is null");
      return;
    }
    if (
      window.matchMedia("(min-width : 768px)").matches ||
      window.matchMedia("(min-width : 1024px)").matches ||
      window.matchMedia("(min-width : 1280px)").matches ||
      window.matchMedia("(min-width : 1536px)").matches ||
      window.matchMedia("(min-width : 1600px)").matches ||
      window.matchMedia("(min-width : 1920px)").matches
    ) {
      return;
    }
    listElement.classList.toggle("translate-x-[100%]");
    listElement.classList.toggle("hidden");
    const htmlElement = document.querySelector("html");
    if (!htmlElement) {
      console.error("No HTML element found!");
      return;
    }
    htmlElement.classList.toggle("overflow-hidden");
    const bodElement = document.querySelector("#bod");
    if (!bodElement) {
      console.error("No bod element found!");
      return;
    }
    bodElement.classList.toggle("blur-sm");
    setNavClick(!navClick);
  };

  const handleClose = () => {
    setNavClick(!navClick);
    const listElement = document.getElementById("list");
    if (listElement) {
      listElement.classList.toggle("translate-x-[100%]");
      listElement.classList.toggle("hidden");

      const html = document.querySelector("html");
      const body = document.querySelector("#bod");
      if (html) {
        html.classList.toggle("overflow-hidden");
        body.classList.toggle("blur-sm");
      } else {
        console.error("Could not find html element");
      }
    } else {
      console.error("Could not find element with id 'list'");
    }
  };

  return (
    <div className="w-11/12 max-w-[1180px] mx-auto ">
      <div className="flex justify-between py-8 items-center">
        <div className="relative">
          <Link to="/">
            <div className="border-4 border-cyan-400 bg-black size-10 z-[1] rounded-l-full rounded-t-full" />
            <span className="absolute top-1 left-[16px] font-handjet font-bold z-[2] text-2xl text-cyan-400 ">
              R
            </span>
          </Link>
        </div>

        <div>
          <ul
            id="list"
            className={` absolute flex hidden z-[5] right-0 top-0 p-24 h-screen w-[80%] sm:w-[60%] translate-x-[100%] md:translate-x-0 lg:translate-x-0 xl:translate-x-0 md:w-auto lg:w-auto xl:w-auto md:h-auto lg:h-auto xl:h-auto md:p-0 lg:p-0 xl:p-0 bg-slate-950/90 md:bg-transparent lg:bg-transparent xl:bg-transparent font-handjet md:static lg:static xl:static flex-col md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row justify-center md:text-xs lg:text-xs xl:text-sm transition-all ease-in-out duration-200 font-medium items-center gap-10 md:gap-8 lg:gap-8 xl:gap-8 `}
          >
            <HashLink onClick={handleClick} to="/about/#about">
              <li className="flex gap-2 cursor-pointer font-handjet text-xl md:text-md lg:text-md xl:text-md font-bold hover:text-cyan-400 transition-all duration-200 ">
                <span className="text-cyan-400 font-handjet ">01.</span> About{" "}
              </li>
            </HashLink>
            <HashLink onClick={handleClick} to="/experience/#experience">
              <li className="flex gap-2 cursor-pointer font-handjet text-xl md:text-md lg:text-md xl:text-md font-bold hover:text-cyan-400 transition-all duration-200 ">
                <span className="text-cyan-400 font-handjet ">02.</span>{" "}
                Experience{" "}
              </li>
            </HashLink>
            <HashLink onClick={handleClick} to="/projects/#projects">
              <li className="flex gap-2 cursor-pointer font-handjet text-xl md:text-md lg:text-md xl:text-md font-bold hover:text-cyan-400 transition-all duration-200 ">
                <span className="text-cyan-400 font-handjet ">03.</span>{" "}
                Projects{" "}
              </li>
            </HashLink>
            <HashLink onClick={handleClick} to="/contact/#contact">
              <li className="flex gap-2 cursor-pointer font-handjet text-xl md:text-md lg:text-md xl:text-md font-bold hover:text-cyan-400 transition-all duration-200 ">
                <span className="text-cyan-400 font-handjet ">04.</span> Contact{" "}
              </li>
            </HashLink>
            <Link
              onClick={handleClick}
              to={"https://ufile.io/gav22l7f"}
              target="_blank"
            >
              <li className="text-cyan-400 text-xl md:text-md lg:text-md xl:text-md font-handjet font-bold border cursor-pointer border-cyan-400 p-1 px-4 rounded ">
                Resume
              </li>
            </Link>
          </ul>
        </div>

        <div
          onClick={handleClose}
          className={`flex cursor-pointer md:hidden lg:hidden xl:hidden z-10 gap-4`}
        >
          <div className="flex flex-col gap-[8px]">
            <div
              className={`bg-cyan-400 ${
                navClick ? "rotate-45 translate-y-[2px] translate-x-[1px] " : ""
              } h-[2px] w-6 rounded transition-all duration-200 `}
            />
            <div
              className={`bg-cyan-400 ${
                navClick ? "hidden" : ""
              } h-[2px] w-6 rounded transition-all duration-200 `}
            />
            <div
              className={`bg-cyan-400 ${
                navClick
                  ? "rotate-[-45deg] -translate-y-[8px] translate-x-[1px] "
                  : ""
              } h-[2px] w-6 rounded transition-all duration-200 `}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
