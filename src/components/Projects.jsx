import React from "react";
import download from "../assets/download.png";
import download2 from "../assets/downloada.png";
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

        <div className="mt-10 flex flex-col gap-8 shadow-md lg:shadow-none xl:shadow-none relative ">
          <div className="flex flex-row justify-between items-center gap-4 max-w-[550px] max-h-full rounded">
            <img
              src={download}
              alt="project"
              className=" hidden sm:block md:block lg:block xl:block rounded filter max-h-full max-w-full grayscale hover:grayscale-0 transition-all duration-200 ease-linear "
            />

            <div className="relative backdrop-blur-sm sm:absolute md:absolute lg:absolute xl:absolute z-10  justify-center backdrop-rounded backdrop-brightness-50 lg:backdrop-brightness-100 xl:backdrop-brightness-100 bg-cyan-400/10 transition-all duration-200 ease-linear lg:bg-transparent xl:bg-transparent lg:backdrop-blur-none xl:backdrop-blur-none  lg:right-0 xl:right-0 p-8 lg:p-0 xl:p-0 text-left xl:text-right lg:text-right max-w-[600px] lg:max-w-[450px] xl:max-w-[450px] flex flex-col gap-4 ">
              <span className="text-xs hidden lg:block xl:block -mb-3 ">
                FEATURED PROJECT
              </span>
              <p className=" text-xl lg:text-2xl xl:text-2xl font-handjet font-bold text-cyan-400 ">
                MANIFEST.IO
              </p>
              <div className="lg:bg-cyan-400/20 shadow-md lg:backdrop-blur-sm xl:backdrop-blur-sm sm:shadow-none xl:bg-cyan-400/20 bg-transparent p-0 rounded xl:px-6 xl:py-4 lg:px-6 lg:py-4">
                <p className="text-[12px] lg:text-[15px] xl:text-[15px] ">
                  A dynamic platform where users effortlessly share and manage
                  posts, fostering global connections akin to Twitter. It's
                  where your thoughts transform into engaging digital
                  conversations.
                </p>
              </div>
              <div className="flex flex-wrap text-xs lg:text-sm xl:text-sm justify-start lg:justify-end xl:justify-end text-cyan-400 gap-2 lg:gap-4 xl:gap-4 font-bold items-center ">
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400">
                  React
                </span>
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400">
                  Tailwind
                </span>
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400">
                  Javascript
                </span>
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400">
                  Appwrite(backend)
                </span>
              </div>
              <div className="flex z-10 flex-row text-lg gap-4 justify-start lg:justify-end xl:justify-end">
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

          <div className="flex flex-row justify-between items-center gap-4 max-w-[550px] max-h-full rounded">
            <img
              src={download2}
              alt="project"
              className=" hidden sm:block lg:block xl:block rounded filter max-h-full max-w-full grayscale hover:grayscale-0 transition-all duration-200 ease-linear "
            />

            <div className="relative sm:absolute ms:absolute lg:absolute xl:absolute z-10 max-h-full object-contain backdrop-blur-sm h w-full justify-center backdrop-rounded backdrop-brightness-50 lg:backdrop-brightness-100 xl:backdrop-brightness-100 bg-cyan-400/10 transition-all duration-200 ease-linear lg:bg-transparent xl:bg-transparent lg:backdrop-blur-none xl:backdrop-blur-none  lg:right-0 xl:right-0 p-8 lg:p-0 xl:p-0 text-left xl:text-right lg:text-right max-w-[600px] lg:max-w-[450px] xl:max-w-[450px] flex flex-col gap-4 ">
              <span className="text-xs hidden lg:block xl:block -mb-3 ">
                FEATURED PROJECT
              </span>
              <p className=" text-xl lg:text-2xl xl:text-2xl font-handjet font-bold text-cyan-400 ">
                TECH BUDDIES
              </p>
              <div className="lg:bg-cyan-400/20 shadow-md sm:shadow-none xl:bg-cyan-400/20 bg-transparent :p-0 rounded xl:px-6 xl:py-4 lg:px-6 lg:py-4">
                <p className="text-[12px] lg:text-[15px] xl:text-[15px] ">
                  Tech Buddies, built with ReactJS and Tailwind CSS, offers a
                  responsive and user-friendly platform for tech enthusiasts to
                  connect and collaborate. Its sleek interface and intuitive
                  navigation enhance user engagement and collaboration.
                </p>
              </div>
              <div className="flex flex-wrap text-xs lg:text-sm xl:text-sm justify-start lg:justify-end xl:justify-end text-cyan-400 gap-2 lg:gap-4 xl:gap-4 font-bold items-center ">
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400">
                  React
                </span>
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400">
                  Tailwind
                </span>
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400">
                  Javascript
                </span>
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400">
                  Rest API
                </span>
              </div>
              <div className="flex z-10 flex-row text-lg gap-4 justify-start lg:justify-end xl:justify-end">
                <Link
                  to="https://github.com/ribhugautam/EdTech-App"
                  target="_blank"
                  className="hover:text-cyan-400 transition-all duration-200 ease-linear"
                >
                  <FaGithub />
                </Link>

                <Link
                  to="https://ed-tech-app.vercel.app/"
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
