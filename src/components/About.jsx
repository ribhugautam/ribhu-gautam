import React from "react";
import ribhu from "../assets/ribhu.jpg";

function About() {
  return (
    <div>
      <div>
        <div className="flex justify-between gap-4 items-center max-w-[480px] ">
          <span className="text-cyan-400 font-handjet font-bold text-3xl ">
            01.
          </span>
          <p className="text-3xl font-handjet font-bold text-slate-200 ">
            About{" "}
          </p>
          <div className="w-full h-[1px] bg-slate-400" />
        </div>
        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-[4rem] lg:gap-[4rem] xl:gap-[4rem] ">
          <div className="flex flex-col gap-6 mt-8 max-w-[480px]">
            <p className="font-poppins ">
              I'm Ribhu, a freshly-graduated software engineer, I bring a blend
              of academic knowledge and a{" "}
              <span className="text-cyan-400 font-handjet font-bold text-xl">
                zeal for frontend development to the tech industry
              </span>
              . My{" "}
              <span className="text-cyan-400 font-handjet font-bold text-xl">
                {" "}
                B.Tech in Computer Science
              </span>
              , completed in 2024, has equipped me with the skills to{" "}
              <span className="text-cyan-400 font-handjet font-bold text-xl">
                craft user interfaces
              </span>{" "}
              that are not only{" "}
              <span className="text-cyan-400 font-handjet font-bold text-xl">
                aesthetically pleasing
              </span>{" "}
              but also user-friendly.
            </p>
            <p className="font-poppins ">
              Embracing the role of a frontend developer, I am driven by the
              challenge of{" "}
              <span className="text-cyan-400 font-handjet font-bold text-xl">
                translating complex designs into seamless experiences.{" "}
              </span>
              My educational journey culminated in 2024, laying the foundation
              for my ambition to innovate and elevate the standard of web
              applications.
            </p>
            <span>Here, are some technologies I've been working with:</span>
            <div className="flex flex-wrap gap-12 text-md mt-4 ">
              <div className="flex gap-2 flex-col ">
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400">
                  JavaScript
                </span>
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400">
                  React
                </span>
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400">
                  TypeScript
                </span>
              </div>

              <div className="flex flex-col gap-2  ">
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400 ">
                  Tailwind
                </span>
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400 ">
                  Appwrite
                </span>
                <span className="font-handjet font-bold border hover:bg-cyan-400/20 transition-all duration-200 ease-linear cursor-default px-4 rounded border-cyan-400 text-cyan-400 ">
                  VS Code
                </span>
              </div>
            </div>
          </div>
          <div className="relative mt-8  ">
            <div className="max-w-[250px] max-h-[250px] relative z-10 rounded ">
              <img
                src={ribhu}
                alt="picture"
                className="rounded object-cover filter grayscale-[80%] hover:grayscale-0 hover:-translate-x-1 hover:-translate-y-1  transition-all duration-200 ease-linear "
              />
              
            </div>

            <div className="max-w-[250px] max-h-[250px]" >
            <div className="w-full z-[0] absolute top-4 left-4 h-full rounded border-2 border-cyan-400 " />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
