import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div className="flex flex-col justify-center gap-6 items-center">
        <span className="text-cyan-400 font-handjet text-xl font-bold ">
          03. What`s Next?
        </span>
        <h3 className="text-slate-200 text-5xl font-semibold">Get in touch</h3>
        <p className="text-center font-poppins max-w-[550px] " >
          Currently seeking new career opportunities and open to exploring
          diverse roles. My inbox is always open for potential job offers,
          networking, and professional connections. Feel free to reach out
          anytime.
        </p>
        <Link to="mailto:gautamribhu@gmail.com" className="text-cyan-400 border rounded border-cyan-400 hover:bg-cyan-400/20 transition-all duration-200 ease-linear px-6 py-2 font-handjet font-bold text-xl" >Say Hello</Link>
      </div>
    </div>
  );
}

export default Contact;
