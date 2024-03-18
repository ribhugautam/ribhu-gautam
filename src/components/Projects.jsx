import React from "react";
import download from "../assets/download.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <div>
        <div className="flex justify-between gap-4 items-center max-w-[600px] ">
          <span className="text-cyan-400 font-handjet font-bold text-3xl ">
            02.
          </span>
          <p className="text-3xl font-handjet font-bold text-slate-200 ">
            Projects{" "}
          </p>
          <div className="w-full h-[1px] bg-slate-400" />
        </div>

        <div className="mt-10 shadow-md lg:shadow-none xl:shadow-none relative ">
          <div className="flex flex-row justify-between items-center gap-4 max-w-[550px] rounded">
            <img
              src={download}
              alt="project"
              className="rounded filter grayscale hover:grayscale-0 transition-all duration-200 ease-linear "
            />

            <div className="absolute h-full w-full justify-center backdrop-rounded backdrop-blur-[1px] backdrop-brightness-50 lg:backdrop-brightness-100 xl:backdrop-brightness-100 hover:bg-cyan-400/10 transition-all duration-200 ease-linear lg:hover:bg-transparent xl:hover:bg-transparent lg:backdrop-blur-none xl:backdrop-blur-none  lg:right-0 xl:right-0 p-8 lg:p-0 xl:p-0 text-left xl:text-right lg:text-right max-w-[600px] lg:max-w-[450px] xl:max-w-[450px] flex flex-col gap-4 ">
              <span className="text-xs -mb-3 ">FEATURED PROJECT</span>
              <p className="text-2xl font-handjet font-bold text-cyan-400 ">
                MANIFEST.IO
              </p>
              <div className="lg:bg-cyan-400/20 shadow-md xl:bg-cyan-400/20 bg-transparent :p-0 rounded xl:px-6 xl:py-4 lg:px-6 lg:py-4">
                <p className="text-[15px]">
                  A dynamic platform where users effortlessly share and manage
                  posts, fostering global connections akin to Twitter. It's
                  where your thoughts transform into engaging digital
                  conversations.
                </p>
              </div>
              <div className="flex flex-row text-sm justify-start lg:justify-end xl:justify-end text-cyan-400 gap-4 font-bold items-center ">
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400">React JS</span>
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400">Tailwind</span>
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400">Javascript</span>
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400">Appwrite(backend)</span>
              </div>
              <div className="flex flex-row text-lg gap-4 justify-start lg:justify-end xl:justify-end" >
              <Link
                  to="https://github.com/ribhugautam/Manifest.IO"
                  target="_blank"
                  className="hover:text-cyan-400 transition-all duration-200 ease-linear"
                >
                  <FaGithub />
                </Link>

                <Link
                  to="https://manifest-io.vercel.app/"
                  target="_blank"
                  className="hover:text-cyan-400 transition-all duration-200 ease-linear"
                >
                  <FaExternalLinkAlt />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
