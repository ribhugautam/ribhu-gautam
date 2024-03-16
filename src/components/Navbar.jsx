import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

function Navbar() {
  const [navClick, setNavClick] = useState(false);
  return (
    <div className="w-11/12 max-w-[1180px] mx-auto ">
      <div className="flex justify-between py-8 items-center">
        <div className="relative">
          <div className="border-4 border-cyan-400 size-10 rounded-l-full rounded-t-full" />
          <span className="absolute top-1 left-[16px] font-handjet font-bold text-2xl text-cyan-400 ">
            R
          </span>
        </div>

        <div>
          <ul
            id="list"
            className=" absolute z-[5] right-0 top-0 p-24 h-screen w-[50%] translate-x-[100%] lg:translate-x-0 xl:translate-x-0 lg:w-auto xl:w-auto lg:h-auto xl:h-auto lg:p-0 xl:p-0 bg-slate-950 lg:bg-transparent xl:bg-transparent font-handjet lg:static xl:static flex flex-col lg:flex lg:flex-row xl:flex xl:flex-row justify-center lg:text-xs xl:text-sm transition-all ease-in-out duration-200 font-medium items-center gap-10 lg:gap-8 xl:gap-8 "
          >
            <HashLink
              onClick={() => {
                setNavClick(!navClick);
                document
                  .getElementById("list")
                  .classList.toggle("translate-x-[100%]");
                document
                  .querySelector("html")
                  .classList.toggle("overflow-hidden");
                document.querySelector("#bod").classList.toggle("blur-sm");
              }}
              to="/about/#about"
            >
              <li className="flex gap-2 cursor-pointer hover:text-cyan-400 transition-all duration-200 ">
                <span className="text-cyan-400 font-handjet font-bold ">
                  01.
                </span>{" "}
                About{" "}
              </li>
            </HashLink>
            <HashLink
              onClick={() => {
                setNavClick(!navClick);
                document
                  .getElementById("list")
                  .classList.toggle("translate-x-[100%]");
                document
                  .querySelector("html")
                  .classList.toggle("overflow-hidden");
                document.querySelector("#bod").classList.toggle("blur-sm");
              }}
              to="/experience/#experience"
            >
              <li className="flex gap-2 cursor-pointer hover:text-cyan-400 transition-all duration-200 ">
                <span className="text-cyan-400 font-handjet font-bold ">
                  02.
                </span>{" "}
                Experience{" "}
              </li>
            </HashLink>
            <HashLink
              onClick={() => {
                setNavClick(!navClick);
                document
                  .getElementById("list")
                  .classList.toggle("translate-x-[100%]");
                document
                  .querySelector("html")
                  .classList.toggle("overflow-hidden");
                document.querySelector("#bod").classList.toggle("blur-sm");
              }}
              to="/projects/#projects"
            >
              <li className="flex gap-2 cursor-pointer hover:text-cyan-400 transition-all duration-200 ">
                <span className="text-cyan-400 font-handjet font-bold ">
                  03.
                </span>{" "}
                Projects{" "}
              </li>
            </HashLink>
            <HashLink
              onClick={() => {
                setNavClick(!navClick);
                document
                  .getElementById("list")
                  .classList.toggle("translate-x-[100%]");
                document
                  .querySelector("html")
                  .classList.toggle("overflow-hidden");
                document.querySelector("#bod").classList.toggle("blur-sm");
              }}
              to="/contact/#contact"
            >
              <li className="flex gap-2 cursor-pointer hover:text-cyan-400 transition-all duration-200 ">
                <span className="text-cyan-400 font-handjet font-bold ">
                  04.
                </span>{" "}
                Contact{" "}
              </li>
            </HashLink>
            <Link
              onClick={() => {
                setNavClick(!navClick);
                document
                  .getElementById("list")
                  .classList.toggle("translate-x-[100%]");
                document
                  .querySelector("html")
                  .classList.toggle("overflow-hidden");
                document.querySelector("#bod").classList.toggle("blur-sm");
              }}
              to={"https://ufile.io/gav22l7f"}
              target="_blank"
            >
              <li className="text-cyan-400 text-lg font-handjet font-bold border cursor-pointer border-cyan-400 p-1 px-4 rounded ">
                Resume
              </li>
            </Link>
          </ul>
        </div>

        <div
          onClick={() => {
            setNavClick(!navClick);
            const listElement = document.getElementById("list");
            if (listElement) {
              listElement.classList.toggle("translate-x-[100%]");


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
          }}
          className={`flex cursor-pointer  lg:hidden xl:hidden z-10 gap-4`}
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
