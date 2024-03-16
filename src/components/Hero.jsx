import React from "react";

function Hero() {
  return (
    <div className="flex flex-col gap-6 mt-24" >
      <span className="text-cyan-400 font-handjet text-xl font-bold " >Hi, my name is</span>

      <div className="text-4xl lg:text-6xl xl:text-6xl font-poppins font-bold flex flex-col gap-2 " >
        <h1 className="text-slate-200" >Ribhu Gautam.</h1>

        <h1 >I build things for the web.</h1>
      </div>

      <p className="font-poppins max-w-[480px] " >
        As a software engineer specializing in frontend development, I focus
        on designing and implementing the user interface and experience of web
        applications, ensuring they are functional, responsive, and
        aesthetically pleasing to facilitate user <span className="text-cyan-400 font-handjet font-bold text-xl" >interaction.</span>
      </p>
    </div>
  );
}

export default Hero;
